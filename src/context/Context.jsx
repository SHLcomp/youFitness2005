//context page :)
import { createContext, useState, useEffect } from "react";
import data from '../assets/data/data';
export const myContext = createContext(null);

//provider
const Provider = ({children})=>{
  //basket
  const [basket, setBasket] = useState([]);
  
  
//localStorage
const saveData = (updatedBasket)=>{
  localStorage.setItem("cartItems", JSON.stringify(updatedBasket));
  let cartCount = JSON.parse(updatedBasket.map((item)=>item.quantity).reduce((x, y)=> x + y, 0));
  localStorage.setItem('cartCount', cartCount);
}
//get data from localStorage
useEffect(()=>{
  const savedBasket = localStorage.getItem("cartItems");
  if(savedBasket) {
    setBasket(JSON.parse(savedBasket))
  }
}, []);
//increment
const incr = (itemId) => {
  //function to get the original price
   const getOriginalPrice = (itemId) => {
    const product = data.find((product) => product.id === itemId);
    return product ? product.price : 0; // Return the price or 0 if not found
  }; //end
  let ogPrice = getOriginalPrice(itemId);
  // function to update the quantity and price
  const updatedBasket = basket.map((item)=>{
    if(item.id === itemId){
      let ogQuantity = item.quantity;
      let newQuantity = ogQuantity += 1;
      item.quantity = newQuantity; 
      item.price = ogPrice * newQuantity; 
    }    
    return item;
  }); //end
  calc();
  setBasket(updatedBasket);
  saveData(updatedBasket);
}
//decrement
const decr = (itemId) => {
  //function to get the original price
   const getOriginalPrice = (itemId) => {
    const product = data.find((product) => product.id === itemId);
    return product ? product.price : 0; // Return the price or 0 if not found
  }; //end
  let ogPrice = getOriginalPrice(itemId);


  // function to update the quantity and price
  const updatedBasket = basket.map((item)=>{
    if(item.id === itemId){
      if(item.quantity > 1){  
      let ogQuantity = item.quantity;
      let newQuantity = ogQuantity -= 1;
      item.quantity = newQuantity; 
      item.price = ogPrice * newQuantity; 
    }  else {
      return null;
    }
    }
    return item;
  }).filter(item => item !== null); //to filter out the rmoved item
   //end
  calc();
  setBasket(updatedBasket);
  saveData(updatedBasket);
}
//adding to cart
const addToCart = (itemId, itemName, itemPrice, itemImage)=>{
  const basketCopy = basket; //create a copy of the cart
  let search = basketCopy.find((item)=> item.id === itemId);
  let ogPrice = itemPrice;
  if (search === undefined){
    basketCopy.push(
      {
        id: itemId,
        name: itemName,
        price: ogPrice,
        quantity: 1,
        image: itemImage,
      }
    )
  } else {
    search.quantity += 1;
    search.price = ogPrice * search.quantity;
    alert("Product is already in the cart. Increasing quantity...")
  }
  console.log(basket);
  saveData(basketCopy);
  setBasket(basketCopy);
  calculateTotalPrice();  
  calc();
}
//remove
const remove = (id) => {
  //filtering
  const updatedBasket = basket.filter(item=> item.id !== id);
  if (updatedBasket){
    setBasket(updatedBasket);
    // Update the cart count and save the updated data
    calc();
    calculateTotalPrice();  
    saveData(updatedBasket);
  }
};
//claculation
const calc = ()=>{
  let cartCountIcon = document.getElementById("cartCount");
  let cartCount = JSON.parse(basket.map((item)=>item.quantity).reduce((x, y)=> x + y, 0));
  cartCountIcon.innerHTML = `(${cartCount})`;
  saveData(basket);
}
 // Function to calculate the total price of items in the basket
 const calculateTotalPrice = () => {
  const totalPrice = basket.reduce((total, item) => {
    return (
      total + item.price);
  }, 0);
  return totalPrice;
};


//responsive
const openBurg = () => {
  document.getElementById("burg").classList.toggle("fa-xmark");
  document.querySelector("nav").classList.toggle("active");
  const listItems = document.querySelectorAll("li");
  listItems.forEach(item => {
    item.classList.toggle("active");
  });
};

function fav (){
  let favIcons = document.querySelectorAll('.fa-regular');
  favIcons.forEach(icon =>{
    icon.classList.toggle("fa-solid");
  })
}

//value
  const myValue = {
    addToCart, 
    basket, 
    remove, 
    calc, 
    calculateTotalPrice,
    incr,
    decr,
    openBurg,
    fav
  };
  return (
    <myContext.Provider value={myValue}>
      {children}
    </myContext.Provider>
  )
}

export default Provider;









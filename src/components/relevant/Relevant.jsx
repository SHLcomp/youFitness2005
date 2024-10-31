import data from '../../assets/data/data';
import Product from '../product/Product.jsx';
import './Relevant.scss';

const Relevant = ({relevant}) => {
  return (
    <section className='rel-sec'>  
    {
      relevant.map((relItem, i)=>{
        const search = data.find((item)=> item.id === relItem.id);
        if (search){
          return (
            <div className="products" key={i}>
              <Product 
                key={i} 
                id={search.id} 
                name={search.name} 
                image={search.image} 
                price={search.price} 
                des={search.des} 
                category={search.category}/>
            </div>
          )
        }
      })
    }
    </section>
  )
}

export default Relevant

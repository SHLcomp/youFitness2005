import p1 from '../women.clothes1.jpg';
import p2 from '../men.clothes1.jpg';
import p3 from '../women.clothes2.jpg';
import p4 from '../men.clothes2.webp';
import p5 from '../women.clothes3.jpg';
import p6 from '../men.clothes3.jpg';
import p7 from '../men.clothes4.jpg';

//categorized by: id, category, type, color, size, price
let data = [
  {
    id: 1,
    name: "Sport T-Shirt for women",
    price: 20,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "womens",
    image: p1,
    sub_images: [
      p1,p1,p1,p1,p1
    ],
    color: "purple",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 3,
      },
      {
        id: 5,
      },
    ],
    reviews: [
    {
      date: "2020-01-01",
      username: "sarah123",
      comment: "Very beautiful and comfortable... 5 stars!!"
    },
    {
      date: "2024-07-02",
      username: "layla2314",
      comment: "Very beautiful and comfortable... 5 stars!!"
    },
    {
      date: "2019-09-03",
      username: "Jamila2314",
      comment: "Very beautiful and comfortable... 5 stars!!"
    },
    ]
  },
  {
    id: 2,
    name: "Sport T-Shirt for men",
    price: 100,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "mens",
    image: p2,
    sub_images: [
      p2,p2,p2,p2,p2
    ],
    color: "green",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 7,
      },
      {
        id: 4,
      },
      {
        id: 6,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "Adolf Hitler",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
  {
    id: 3,
    name: "Sport T-Shirt for women",
    price: 200,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "womens",
    image: p3,
    sub_images: [
      p3,p3,p3,p3,p3
    ],
    color: "blue",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 1,
      },
      {
        id: 5,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "Layala7600",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
  {
    id: 4,
    name: "Sport T-Shirt for men",
    price: 230,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "mens",
    image: p4,
    sub_images: [
      p4,p4,p4,p4,p4
    ],
    color: "black",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 2,
      },
      {
        id: 6,
      },
      {
        id: 7,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "John7600",
        comment: "Very elegant and cool!!"
      },
      {
        date: "2020-01-01",
        username: "Vladimir Putin",
        comment: "I liked the texture of this outfit, it suits the polar bears perfectly!!"
      },
    ]
  },
  {
    id: 5,
    name: "Sport T-Shirt for women",
    price: 120,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "womens",
    image: p5,
    sub_images: [
      p5,p5,p5,p5,p5
    ],
    color: "pink",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 1,
      },
      {
        id: 3,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "Layala7600",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
  {
    id: 6,
    name: "Sport T-Shirt for men",
    price: 130,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "mens",
    image: p6,
    sub_images: [
      p6,p6,p6,p6,p6
    ],
    color: "blue",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 2,
      },
      {
        id: 4,
      },
      {
        id: 7,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "John Smith",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
  {
    id: 7,
    name: "Sport T-Shirt for men",
    price: 160,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "mens",
    image: p7,
    sub_images: [
      p7,p7,p7,p7,p7
    ],
    color: "white",
    sizes: ["M", "L", "S"],
    type: "full",
    relevant: [
      {
        id: 2,
      },
      {
        id: 4,
      },
      {
        id: 7,
      },
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "George W",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
  {  id: 8,
    name: "Sport T-Shirt for kids",
    price: 90,
    des: "Sports T shirt that is water proof bla bla bla",
    long_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci labore nulla ducimus molestias id totam, assumenda accusantium et distinctio, eligendi laborum debitis neque est aliquid non. Ex, quasi tempore.",
    category: "kids",
    image: p7,
    sub_images: [
      p7,p7,p7,p7,p7
    ],
    color: "white",
    sizes: ["M", "L", "XS", "XXS"],
    type: "full",
    relevant: [
      {
        id: 8,
      }
    ],
    reviews: [
      {
        date: "2020-01-01",
        username: "Herculus",
        comment: "Very beautiful and comfortable... 5 stars!!"
      }
    ]
  },
]
export default data;
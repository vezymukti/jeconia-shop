import React, {useContext} from 'react';

//import useParam
import { useParams } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';
//import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  // get the product id from the linkc
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  //get the signle product on the id
  const product = products.find(item => {
    return item.id === parseFloat(id);
  });


  //if product 404
  if (!product) {
    return ( 
    <section className='h-screen flex justify-center items-center'>
    Loading.....
    </section>
    );
  }

  //destructure product
  const {title, price, description, image} = product;
  return ( 
  <section className='pt-32 pb-12 lg-py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
       {/* image text wrapped*/}
       <div className='flex flex-col lg-flex-row items-center '>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt=''/>
          </div> 
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text=[26px] font-medium mb-2 max-2-w-[450px] mx-auto lg:mx-0'>{title}
            </h1>
            <div className='text-xl primary-text font-semibold mb-6'>
              $ {price}</div>
            </div>
            <p className='mb-8'>{description}</p>
            <button onClick={()=> addToCart (product, product.id)} className='bg-primary py-4 px-8 text-white'>Add to Cart</button>
       </div>
      
    </div>


  </section>
  );
};

export default ProductDetails;

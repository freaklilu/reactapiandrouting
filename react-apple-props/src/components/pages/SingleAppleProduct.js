import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function SingleAppleProduct() {

  const [products,setProducts]=useState([]) 
  const {productID}=useParams() ;
  useEffect(()=>{

    fetch("/iphone.json")
    .then((response) => response.json())
    .then((products) => {
      const singleProduct = products.filter((product) => product.product_url === productID);
      setProducts(() => singleProduct);
    })
    .catch(()=>console.log("Error: unable to fetch!!"));
    },[]);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {products?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let details = product.product_description;

            let productDiv = (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default SingleAppleProduct
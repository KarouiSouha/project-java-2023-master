import React, {useState, useEffect} from 'react'
import axios from "axios"
import { BsFillStarFill } from 'react-icons/bs'
import './ProductDescription.css'
import Tilt from 'react-parallax-tilt'

export default function Products() {
const [product, setProduct] = useState([])
const [loaded, setLoaded] = useState(false)


   useEffect(() => {
       axios
           .get('http://localhost:8080/api/v1/products')
           .then((res) => {
               setProduct(res.data)
               setLoaded(true)

               console.log(res.data)
               console.log(product)
           })
           .catch((err) => console.error(err))
   }, [loaded])

    const removeFromDom = (productId) => {
        setProduct(product.filter((product) => product.id !== productId))
    } 

     const Delete = (productId) => {
         axios
             .delete('http://localhost:8080/api/v1/products' + productId)
             .then((res) => {
                 removeFromDom(productId)
                 console.log("saye ya bro");
             })
             .catch((err) => console.error(err))
     }


	return (
        <>
            {' '}
            <h1> Products page </h1>
            <div
                className=" grid items-center grid-cols-4  
         justify-items-center gap-7 lg:gap-5 mt-7"
            >
                {product.map((product) => (
                    <div key={product.id} className="">
                        <div className="card product-card-container">
                            <div className="image-frame ">
                                {' '}
                                <img src={product.img} alt="" />
                            </div>
<h2 className=" ">{product?.name}</h2>
                            <div className="product-price-container">
                                

                                
                                <span className="product-discount-price"> ${product?.discountedPrice}</span>
                            </div>
                            <div className="ratings-reviews">
                                <span></span>
                                <span>{product?.rating}</span> <BsFillStarFill color={'orange'} />
                                <span>
                                    <span className="review">({product?.reviews}) reviews </span>
                                </span>
                            </div>
                            <span className="gender-container">
                                <span>Gender</span>: {product?.categoryName}
                            </span>
                            <p className="size-container">
                                <span>Size</span>: {product?.size}
                            </p>
                            <div className=' flex'>
                            <button className=" mt-3 mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={(e) => {
                      Delete(product.id)
                        }}>
                            Delete{' '}
                        </button>
                        <button className=" mt-3 mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Edit</button></div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </>
    )
}

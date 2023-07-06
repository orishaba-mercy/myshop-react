import React,{useEffect,useState}from "react";
import { }from "react-router-dom"
import'./style.css'

const Products=()=>{ 
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()

    },[])
    console.log({products});

    const getProducts=async()=>{
        try{
            const response =await fetch('https://dummyjson.com/products')
            const result =await response.json();
            setProducts(result.Products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div> 
            <br/> 
            <br/> 
        <div className="details">
        <h2>List of Products</h2>{Products.map(item=>(
            <div className="each" key={item.id}>
                <img className="img" src="{item.thumbnail}" alt="visual of Products"></img>

                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
                <h3>{item.discountPercentage}%</h3>
                <img src={item.thumbnail} alt=""></img>
                <button>More Here</button>
            
                

            </div>
        ))}
        </div>
        </div>
    )
       
    
       
    
}
export default Products;
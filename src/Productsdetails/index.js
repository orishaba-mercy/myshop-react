
import React,{useEffect,useState}from "react";
import { useParams}from "react-router-dom"
import'./style.css'



const ProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setProducts(result.Products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <div>
        <br />
        <br />
        <div className="details">
          <h2>List of Products</h2>
          {products.map(item => (
            <div className="each" key={item.id}>
              <img className="img" src={item.thumbnail} alt="visual of Products" />
  
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
              <h3>{item.discountPercentage}%</h3>
              <img src={item.thumbnail} alt="" />
              <button>More Here</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductDetails;




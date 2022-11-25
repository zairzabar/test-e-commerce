import { useEffect, useState } from 'react'
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";


export default function Home() {
    
    const [products, setproducts] = useState([])
    const [click, setClick] = useState(0)

    useEffect(() => {
        fetch("Product.json")
            .then((res) => res.json())
                .then((res) => {
                     setproducts(res)
                     console.log("Fetch")
                })
        
    }, [click])

    return (
        <div>
            <Header />
            {/* Products */}
            <div>
                <h1>{click}</h1>
                <button onClick={() => {
                    setClick(click + 1)
                }}> Click
                </button>
                <h1>{products && products.length }</h1>
                <ProductCard />
            </div>
            <Footer />
        </div>
    )
}
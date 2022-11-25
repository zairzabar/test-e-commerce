import { useState } from 'react'
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";


export default function Home() {
    
    const [products, setproducts] = useState([])

    fetch("Product.json")
        .then((res) => res.json())
            .then((res) => {
                 setproducts(res)
            })
    
    return (
        <div>
            <Header />
            {/* Products */}
            <div>
                <h1>{products && products[5].name}</h1>
                <ProductCard />
            </div>
            <Footer />
        </div>
    )
}
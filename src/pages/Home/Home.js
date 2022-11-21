import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";


export default function Home() {
    
    let products;

    fetch("Product.json")
        .then((res) => res.json())
            .then((res) => {
                products = res
            })
    
    return (
        <div>
            <Header />
            {/* Products */}
            <div>
                
                <ProductCard />
            </div>
            <Footer />
        </div>
    )
}
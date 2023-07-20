import "./Shopping.css"
import Header from "../Header"
import Footer from "../Footer"

export default function Shopping() {
    return (
        <div className="shopping-container"> 
            <Header />
            <div className="container-title">
                <h2>Mis Compras</h2> 
            </div>
            <Footer/>
        </div>
    )
}
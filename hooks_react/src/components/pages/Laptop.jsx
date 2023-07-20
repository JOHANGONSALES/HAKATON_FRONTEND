import "./Laptop.css"
import Header from "../Header"
import Footer from "../Footer"

export default function Laptop() {
    return (
        <div className="laptop-container"> 
            <Header />
            <div className="container-title">
                <h2>Laptop</h2> 
            </div>
            <Footer/>
        </div>
    )
}
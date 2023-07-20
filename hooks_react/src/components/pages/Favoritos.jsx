import "./Favoritos.css"
import Header from "../Header"
import Footer from "../Footer"

export default function Favoritos() {
    return (
        <div className="favoritos-container"> 
            <Header />
            <div className="container-title">
                <h2>Mis Favoritos</h2> 
            </div>
            <Footer/>
        </div>
    )
}
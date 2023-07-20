import "../Card.css"
import Card from "../Card"
import Footer from "../Footer"
import Header from "../Header"

export default function Accesorios() {
    return (
        <div className="home-container"> 
           
            <Header />
            <h2 class="tittle"> Accesorios</h2>
            <Card/>
            <Footer/>
           
        </div>
    )
}
import "./Home.css"
import Header from "../Header"
import Card from "../Card"
import Footer from "../Footer"


export default function Home() {
    return (
        <div className="home-container"> 
            <Header />
            <Card/>
            <Footer/>
        </div>
    )
}
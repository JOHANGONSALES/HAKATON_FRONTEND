import "./Home.css"
import Header from "../Header"
import Card from "../Card"
import Footer from "../Footer"
import Main from "../Main"

export default function Home() {
    return (
        <div className="home-container"> 
            <Header />
            <Main/>
            <Card/>
            <Footer/>
        </div>
    )
}
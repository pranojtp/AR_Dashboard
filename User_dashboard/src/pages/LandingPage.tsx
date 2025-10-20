import { Header } from "../components/landingpage/Header"
import Hero from "../components/landingpage/Hero"
import Primaryfeatures from "../components/landingpage/Primaryfeatures"
import Footer from "../components/landingpage/Footer"

const LandingPage = () => {
    return (
        <>
            <div className="flex flex-col w-screen bg-black">
                <Header />
                <Hero />
                <Primaryfeatures />
                <Footer />
            </div>
        </>
    )
}

export default LandingPage

import { Header } from "../components/landingpage/Header"
import Hero from "../components/landingpage/Hero"
import Primaryfeatures from "../components/landingpage/Primaryfeatures"
import Footer from "../components/landingpage/Footer"
import Team from "../components/landingpage/Team"
// import Secondaryfeatures from "../components/landingpage/Secondaryfeatures"

const LandingPage = () => {
    return (
        <>
            <div className="flex flex-col w-screen bg-black">
                <Header />
                <Hero />
                <Primaryfeatures />
                {/* <Secondaryfeatures /> */}
                <Team />
                <Footer />
            </div>
        </>
    )
}

export default LandingPage

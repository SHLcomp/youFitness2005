import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Insp from "../../components/insp/Insp"
import Mazaya from "../../components/mazaya/Mazaya"
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Insp />
      <Mazaya />
      <Footer />
    </div>
  )
}

export default Home

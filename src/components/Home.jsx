
import Hero from '../components/hero/Hero'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ProductPage from '../components/productPage/ProductPage'
import ProductCollectionPage from './productPage/productCollections';


function Home() {

  return (
    <>
    <Navbar />
    <Hero />
    <ProductPage />
    <Footer />
    </>
  )
}

export default Home

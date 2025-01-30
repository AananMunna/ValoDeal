
import Hero from '../components/hero/Hero'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ProductCollectionPage from '../components/productPage/productCollections'
import ProductPage from '../components/productPage/ProductPage'

function Home() {

  return (
    <>
    <Navbar />
    <Hero />
    <ProductPage />
    <ProductCollectionPage />
    <Footer />
    </>
  )
}

export default Home

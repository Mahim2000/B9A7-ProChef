import './App.css'
import Navbar from './components/Header/Navbar'
import Banner from './components/Header/Banner'
import Recipes from './components/Recipes/Recipes'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <Footer></Footer>
    </>
  )
}

export default App

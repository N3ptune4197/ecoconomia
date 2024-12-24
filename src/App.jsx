import React from "react"
import ArticuloN1 from "./components/Article1"
import Navbar from "./components/Navbar"
import ArticleN2 from "./components/Article2"
import ArticleN3 from "./components/Article3"
import NavSide from "./components/NavigationSidebar"
import Footer from "./components/Footer"
import ArticleN4 from "./components/Article4"









function App() {

  return (
    <>
    <Navbar />
    <NavSide />
    <div className="flex flex-col">
      
      <article className="w-[90%] mx-auto mt-3 flex flex-col md:flex-row justify-between">
        <ArticuloN1 />
        <ArticleN2 />
      </article>
    <hr className="w-[90%] mx-auto border-2"/>
      <article className="w-[90%] mx-auto mt-3 flex flex-col md:flex-row justify-between">
        <ArticleN3 />
        <ArticleN4 />
      </article>



    </div>

    <Footer />
    </>
  )
}

export default App

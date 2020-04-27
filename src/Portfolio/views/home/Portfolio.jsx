import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Routes from '../../Routes'
import './Portfolio.css'
import '../../css/partials/_variables.css'
import '../../css/partials/_global.css'
import ScrollToTop from './ScrollToTop'
const Portfolio = () => {
// function Portfolio() {
    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])
    
    const [isSticky, setSticky] = useState(false)
    var stickyRef = useRef(null)
    const handleScroll = () => {
        if(stickyRef.current){
            window.pageYOffset > stickyRef.current.getBoundingClientRect().top
            ? setSticky(true)
            : setSticky(false)
        }
    }
    const debounce = (func, wait) => {
        let timeout
        return (...args) => {
          clearTimeout(timeout)
          timeout = setTimeout(() => func.apply(this, args), wait)
        }
    }

    window.addEventListener("scroll", debounce(handleScroll))
    return (
        <>
            <Header sticky={isSticky} />
            <ScrollToTop />
            <Routes stickyRef={stickyRef} />
            <Footer/>
        </>
    )
}

export default Portfolio


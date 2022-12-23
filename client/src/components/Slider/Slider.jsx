import { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
    ]

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

  return (
   <div className="slider">
    <div className="container">
        <img src={data[0]} alt="model" />
        <img src={data[1]} alt="model" />
        <img src={data[2]} alt="model" />
    </div>
    <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
        </div>
    </div>
   </div>
  )
}

export default Slider

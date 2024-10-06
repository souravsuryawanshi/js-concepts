import { useState } from 'react';
import { useEffect } from 'react';

const CarousalIndicator = ({onClick,images, activeIndex }) => {
    return (
        <>
        { images && images.map((_ , index)=>{
                return <span onClick={()=>{onClick(index)}}>. </span>
        })
        }
        </>
    )
}

const Carousel = ({images, interval = 3000}) => {
   const [activeIndex, setActiveIndex] = useState(0);
   
   useEffect(()=>{
    const autoPlayInterval = setInterval(nextSlide , 3000);
    return () =>{
        clearInterval(interval);
    }
   },[interval])

   const nextSlide = () => {
     setActiveIndex((previousIndex)=>
        previousIndex = previousIndex === images.length - 1 ? 0 : previousIndex+1 
    );
   }
   const prevSlide = () => {
    setActiveIndex((prevIndex) => 
        prevIndex = prevIndex === 0 ? images.length - 1  : prevIndex - 1
    );
   }
   const goToSlide = (index) => {
     setActiveIndex(index);
   }
    return (
        <div>
            <button onClick={prevSlide}>&lt;</button>
            {activeIndex}
            { 
            activeIndex >=0 && images[activeIndex] &&
            <img src = {images[activeIndex].url} alt = {images[activeIndex].name} />
            } 
            <button onClick={nextSlide}>&gt;</button>
            <CarousalIndicator onClick={goToSlide} images={images} />
        </div>
    )
}

export default Carousel;
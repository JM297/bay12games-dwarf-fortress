import React from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import slideshow from '../general/Slideshow';

// Slideshow component for the AboutBanner component
export default function Slides (){
    const [index, setIndex] = React.useState(0); // Declares the index getter and setter needed for the function

    /*
    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 12) {
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 5000);
      return () => clearInterval(timer);
    }, [index]);
    */

    // How the Slideshow will render
    return (
        <Gallery
            className="slideshow-container" // Class that this function will base itself on
            enableIndicators={false} // Removes the indicators at the bottom of the Slideshow
            index={index} // Declares index of the array slideshow as the function's index

            // When sliding the images or clicking on the arrows, the index will set itself to the index of the image you're on
            onRequestChange={i => {
              setIndex(i);
            }}
        >
          {slideshow.map(slideshow => ( // .map() renders the images from the array slideshow
              <GalleryImage className="mySlides" objectFit="contain" key={slideshow.image} src={slideshow.image} />
          ))}
        </Gallery>
    );
}
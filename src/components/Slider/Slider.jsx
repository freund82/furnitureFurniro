import "./slider.css"
import {useState} from "react";
import ArrowSmall from "../../assets/icons/arrowSmall.svg";
import SliderArrow from "../../assets/icons/arrow.svg";

export default function Slider(){

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(1);
   

    const slides=[
        {
            id:1,
            number:"01",
            title:"Inner Peace",
            category:"Bed Room",
            images:[
                "/slider/bedroom_slider.jpg",
                "/slider/bedroomOne.jpg",
                "/slider/bedroomTwo.jpg",
                "/slider/bedroomTwo.jpg",
            ]
        },
         {
            id:2,
            number:"02",
            title:"Lux Room",
            category:"Bed Room",
            images:[
                "/slider/bedroom_slider2.jpg",
                "/slider/livingRoomOne.jpg",
                "/slider/livingRoomTwo.jpg",
                "/slider/livingRoomThree.jpg",
            ]
        },
    ]

    const nextSlide=()=>{
        setCurrentSlide((prev)=>(prev === slides.length-1 ? 0 : prev+1));
    }

    const prevSlide=()=>{
        setCurrentSlide((prev)=>(prev === 0 ? slides.length-1 : prev-1));
    }

    const nextImage=()=>{
        setCurrentImage((prev)=>(prev === slides[currentSlide].images.length-1 ? 1 : prev+1));
    }

    const prevImage=()=>{
        setCurrentImage((prev)=>(prev === 0 ? slides[currentSlide].images.length-1 : prev-1));
    }

    return(
        <div className="slider-section-secondColumn">
            <div className="sliderBlock-section">
                 <img className="slide" src={slides[currentSlide].images[0]} alt={slides[currentSlide].title} />
            <div>
              <div className="sliderBlock">
                <div className="sliderBlockHorizontal">
                    {
                        slides[currentSlide].images.slice(1).map((_, index) =>
                             <img key={index} className="slide" src={slides[currentSlide].images[currentImage]} alt={`Slide ${index+1}`} />
                        )
                    }
                 <span className="sliderHorizontal-button" onClick={nextImage}><img src={SliderArrow} alt="SliderRightArrow" /></span>
                 <span className="sliderHorizontal-button left hide" onClick={prevImage}><img src={SliderArrow} alt="SliderRightArrow" /></span>
                </div>
                  <div className="sliderBlockHorizontal-buttons">
                    <span className="sliderBlock-button sliderButtonActive"></span><span className="sliderBlock-button"></span><span className="sliderBlock-button"></span><span className="sliderBlock-button"></span>
                  </div>
              </div>
                 <div className="sliderInfoBlock">
                    <div className="sliderInfoText">
                      <div className="sliderInfoText-numberSection">
                        <span>{slides[currentSlide].number}</span><span className="sliderInfoTetx-line"></span><span className="sliderInfoText-number">{slides[currentSlide].category}</span>
                      </div>
                      <h2 className="sliderInfoText-title">{slides[currentSlide].title}</h2>
                    </div>
                    <div className="sliderBlock-arrow">
                      <img src={ArrowSmall} alt="SliderRightArrow" onClick={nextSlide} />
                    </div>
                 </div>
            </div>
            </div>
          </div>
    )
}
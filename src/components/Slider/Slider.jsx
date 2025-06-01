import "./slider.css"
import {useState} from "react";
import ArrowSmall from "../../assets/icons/arrowSmall.svg";
import SliderArrow from "../../assets/icons/arrow.svg";

export default function Slider(){

    const [currentSlide, setCurrentSlide] = useState(0);

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
            title:"Luxury Room",
            category:"Bed Room",
            images:[
                "/slider/bedroom_slider.jpg",
                "/slider/bedroomOne.jpg",
                "/slider/bedroomTwo.jpg",
                "/slider/bedroomTwo.jpg",
            ]
        },
    ]

    return(
        <div className="slider-section-secondColumn">
            <div className="sliderBlock-section">
                 <img className="slide" src={slides[currentSlide].images[0]} alt={slides[currentSlide].title} />
            <div>
              <div className="sliderBlock">
                <div className="sliderBlockHorizontal">
                    {
                        slides[currentSlide].images.slice(1).map((img, index) =>
                             <img key={index} className="slide" src={img} alt={`Slide ${index+1}`} />
                        )
                    }
                 <span className="sliderHorizontal-button"><img src={SliderArrow} alt="SliderRightArrow" /></span>
                 <span className="sliderHorizontal-button left hide"><img src={SliderArrow} alt="SliderRightArrow" /></span>
                </div>
                  <div className="sliderBlockHorizontal-buttons">
                    <span className="sliderBlock-button sliderButtonActive"></span><span className="sliderBlock-button"></span><span className="sliderBlock-button"></span><span className="sliderBlock-button"></span>
                  </div>
              </div>
                 <div className="sliderInfoBlock">
                    <div className="sliderInfoText">
                      <div className="sliderInfoText-numberSection">
                        <span>01</span><span className="sliderInfoTetx-line"></span><span className="sliderInfoText-number">Bed Room</span>
                      </div>
                      <h2 className="sliderInfoText-title">Inner Peace</h2>
                    </div>
                    <div className="sliderBlock-arrow">
                      <img src={ArrowSmall} alt="SliderRightArrow" />
                    </div>
                 </div>
            </div>
            </div>
          </div>
    )
}
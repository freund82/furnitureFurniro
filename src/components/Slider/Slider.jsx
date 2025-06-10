import "./slider.css"
import {useState} from "react";
import ArrowSmall from "../../assets/icons/arrowSmall.svg";
import SliderArrow from "../../assets/icons/arrow.svg";

export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const slidesToShow = 3;

    const slides = [
        {
            id: 1,
            number: "01",
            title: "Inner Peace",
            category: "Bed Room",
            images: [
                "/slider/bedroom_slider.jpg",
                "/slider/bedroomOne.jpg",
                "/slider/bedroomTwo.jpg",
                "/slider/bedroomTwo.jpg",
            ]
        },
        {
            id: 2,
            number: "02",
            title: "Lux Room",
            category: "Bed Room",
            images: [
                "/slider/bedroom_slider2.jpg",
                "/slider/livingRoomOne.jpg",
                "/slider/livingRoomTwo.jpg",
                "/slider/livingRoomThree.jpg",
            ]
        },
    ];

    const sliderImages = slides.map(slide => slide.images.slice(1));

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    };

  const nextHorizontalSlide = () => {
    setCurrentImageIndex(prev => (prev + 1) % sliderImages[currentSlide].length);
};
    const prevHorizontalSlide = () => {
        setCurrentImageIndex(prev => 
            prev === 0 ? sliderImages[currentSlide].length - slidesToShow : prev - 1
        );
    };

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };

    return(
        <div className="slider-section-secondColumn">
            <div className="sliderBlock-section">
                <img className="slide" src={slides[currentSlide].images[currentImageIndex]} alt="main" />
                <div>
                    <div className="sliderBlock">
                        <div className="sliderHorizontal-container">
                            <div 
                                className="sliderBlockHorizontal" 
                                style={{
                                    transform: `translateX(-${currentImageIndex * (100 / slidesToShow)}%)`,
                                    transition: 'transform 0.5s ease'
                                }}
                            >
                                {sliderImages[currentSlide].map((image, index) => (
                                    <img 
                                        key={index} 
                                        className="horizontal-slide" 
                                        src={image} 
                                        alt={`slide-${index}`} 
                                        onClick={() => selectImage(index)}
                                    />
                                ))}
                            </div>
                            <span className="sliderHorizontal-button right" onClick={nextHorizontalSlide}>
                                <img src={SliderArrow} alt="Next" />
                            </span>
                            {
                                currentImageIndex > 0 && (
                                    <span className="sliderHorizontal-button left" onClick={prevHorizontalSlide}>
                                        <img src={SliderArrow} alt="Previous" />
                                    </span>
                                )
                            }
                        </div>
                        <div className="sliderBlockHorizontal-buttons">
                            {sliderImages[currentSlide].map((_, index) => (
                                <span 
                                    key={index}
                                    className={`sliderBlock-button ${index === currentImageIndex ? 'sliderButtonActive' : ''}`}
                                    onClick={() => selectImage(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <div className="sliderInfoBlock">
                        <div className="sliderInfoText">
                            <div className="sliderInfoText-numberSection">
                                <span>0</span>
                                <span className="sliderInfoTetx-line"></span>
                                <span className="sliderInfoText-number">{slides[currentSlide].number}</span>
                            </div>
                            <h2 className="sliderInfoText-title">{slides[currentSlide].title}</h2>
                        </div>
                        <div className="sliderBlock-arrow">
                            <img src={ArrowSmall} alt="Next" onClick={nextSlide} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
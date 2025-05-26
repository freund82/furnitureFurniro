import "./home.css";
import Layout from '../components/Layout/Layout';
import ArrowSmall from "../assets/icons/arrowSmall.svg";
import SliderArrow from "../assets/icons/arrow.svg";
import ProductsList from "../components/Products/ProductsList.jsx";

export default function Home() {

  const typesFurnitureImages=[
    {
      id:1, name:"Dining", image:"/furnitureImages/furnitureTypesImages/Dining.jpg",
    },
    {
      id:2, name:"Living", image: "/furnitureImages/furnitureTypesImages/Living.jpg",
    },
    {
      id:3, name:"Bedroom", image:"/furnitureImages/furnitureTypesImages/Bedroom.jpg",
    }
  ]
  return (
    <>
      <Layout>
        <section className="header-inner">
          <div className="header-inner-block">
            <p className="header-inner-block-suptitle">New Arrival</p>
            <h1 className="header-inner-block-title">Discover Our <br></br>New Collection</h1>
            <p className="header-inner-block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="header-inner-block-button">Buy Now</button>
          </div>
        </section>
        <section className="furnitureTypes-block">
              <h2 className="furnitureTypes-block-title">Browse the Range</h2>
              <p className="furnitureTypes-block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="furnitureTypes-block-typesImages">
                {typesFurnitureImages.map((item) => (
                  <div key={item.id}>
                     <img className="furnitureTypes-block-typesImages-image" src={item.image} alt={item.name}/>
                     <p className="furnitureTypes-block-typesImage-name">{item.name}</p>
                  </div>
                ))}
              </div>
        </section>
        {/*Our products*/}
        <section className="products-block">
                <h2 className="products-block-title">Our Products</h2>
                <ProductsList />
                <button className="products-block-show-more-button">Show More</button>
        </section>
        {/*Slider section*/}
        <section className="slider-section">
          <div className="slider-section-firstColumn">
                <p className="slider-section-firstColumn-title">50+ Beautiful rooms inspiration</p>
                <p className="slider-section-firstColumn-text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className="slider-section-firstColumn-button">Explore More</button>
          </div>
          <div className="slider-section-secondColumn">
            <div className="sliderBlock-section">
                 <img className="slide" src="/slider/bedroom_slider.jpg" alt="Slider" />
            <div>
              <div className="sliderBlock">
                <div className="sliderBlockHorizontal">
                 <img className="slide" src="/slider/bedroomOne.jpg" alt="BedroomFirstSlider" />
                 <img className="slide" src="/slider/bedroomTwo.jpg" alt="BedroomSecondSlider" />
                 <img className="slide" src="/slider/bedroomTwo.jpg" alt="BedroomThirdSlider" />
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
        </section>
        {/*Slider section END*/}
        {/* #Funiro Furniture section */}
        <section className="furniture-section">
          <div className="furniture-section-title-block">
            <span className="furniture-section-suptitle">Share your setup with</span>
            <h2 className="furniture-section-title">#FuniroFurniture</h2>
          </div>
          <div className="furniture-section-grid">
            <img className="furniture-section-grid-item first" src="/furnitureImages/funiroFurniture/image36.jpg" alt="Furniture36" />
            <img className="furniture-section-grid-item second" src="/furnitureImages/funiroFurniture/image38.jpg" alt="Furniture38" />
            <img className="furniture-section-grid-item third" src="/furnitureImages/funiroFurniture/image40.jpg" alt="Furniture40" />  
            <img className="furniture-section-grid-item fourth" src="/furnitureImages/funiroFurniture/image43.jpg" alt="Furniture43" />
            <img className="furniture-section-grid-item fifth" src="/furnitureImages/funiroFurniture/image45.jpg" alt="Furniture45" />  
            <img className="furniture-section-grid-item six" src="/furnitureImages/funiroFurniture/image37.jpg" alt="Furniture37" />    
            <img className="furniture-section-grid-item seven" src="/furnitureImages/funiroFurniture/image39.jpg" alt="Furniture39" />  
            <img className="furniture-section-grid-item eight" src="/furnitureImages/funiroFurniture/image41.jpg" alt="Furniture41"/>  
            <img className="furniture-section-grid-item nine" src="/furnitureImages/funiroFurniture/image44.jpg" alt="Furniture44" />
          </div>
        </section>
      </Layout>
    </>
  );
}
import "./home.css";
import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Share from "../assets/icons/share.svg";
import Compare from "../assets/icons/compare.svg";
import Like from "../assets/icons/like.svg";

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
                <div className="products-block-products">
                  {/*Product card*/}
                    <div className="products-block-product">
                        <span className="products-block-product-discount">-30%</span>
                        <img src="/furnitureImages/furniture/Syltherine.jpg" alt="Syltherine" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Syltherine</h3>
                          <p className="products-block-product-description">Stylish cafe chair</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 2.500.000</span>
                            <span className="products-block-product-price oldPrice">Rp 3.500.000</span>
                          </div>
                        </div>
                         <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                    {/*Product card*/}
                    <div className="products-block-product">
                        <img src="/furnitureImages/furniture/Leviosa.jpg" alt="Leviosa" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Leviosa</h3>
                          <p className="products-block-product-description">Stylish cafe chair</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 2.500.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                    {/*Product card*/}
                    <div className="products-block-product">
                      <span className="products-block-product-discount">-50%</span>
                        <img src="/furnitureImages/furniture/Lolito.jpg" alt="Lolito" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Lolito</h3>
                          <p className="products-block-product-description">Luxury big sofa</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 7.000.000</span>
                            <span className="products-block-product-price oldPrice">Rp 14.000.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                    {/*Product card*/}
                    <div className="products-block-product">
                      <span className="products-block-product-type">New</span>
                        <img src="/furnitureImages/furniture/Respira.jpg" alt="Respira" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Respira</h3>
                          <p className="products-block-product-description">Outdoor bar table and stool</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 500.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                    {/*Product card*/}
                    <div className="products-block-product">
                        <img src="/furnitureImages/furniture/Grifo.jpg" alt="Grifo" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Grifo</h3>
                          <p className="products-block-product-description">Night lamp</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 1.500.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                     {/*Product card*/}
                    <div className="products-block-product">
                      <span className="products-block-product-type">New</span>
                        <img src="/furnitureImages/furniture/Muggo.jpg" alt="Muggo" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Muggo</h3>
                          <p className="products-block-product-description">Small mug</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 150.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                     {/*Product card*/}
                    <div className="products-block-product">
                      <span className="products-block-product-discount">-50%</span>
                        <img src="/furnitureImages/furniture/Pingky.jpg" alt="Pingky" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Pingky</h3>
                          <p className="products-block-product-description">Cute bed set</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 7.000.000</span>
                            <span className="products-block-product-price oldPrice">Rp 14.000.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                    {/*Product card*/}
                    <div className="products-block-product">
                      <span className="products-block-product-type">New</span>
                        <img src="/furnitureImages/furniture/Potty.jpg" alt="Potty" />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">Potty</h3>
                          <p className="products-block-product-description">Minimalist flower pot</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp 500.000</span>
                          </div>
                        </div>
                        <div className="products-block-product-buttons-block">
                              <button className="products-block-product-buy-button">Add to cart</button>
                              <div className="products-block-product-svg-block">
                                <Link to="/" ><img src={Share} alt="Share" />Share</Link>
                                <Link to="/"><img src={Compare} alt="Share" />Compare</Link>
                                <Link to="/" ><img src={Like} alt="Like" />Like</Link>
                              </div>
                          </div>
                    </div>
                    {/* End of Product card*/}
                </div>
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
            <img className="slide" src="/slider/bedroom_slider.jpg" alt="Slider" />
            <div>
              <div className="sliderBlock">
                <img className="slide" src="/slider/bedroomOne.jpg" alt="BedroomFirstSlider" />
                 <img className="slide" src="/slider/bedroomTwo.jpg" alt="BedroomSecondSlider" />
              </div>
                 <p>1</p>
            </div>
          </div>
        </section>      
      </Layout>
    </>
  );
}
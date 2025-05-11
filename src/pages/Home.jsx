import Layout from '../components/Layout/Layout';
import "./home.css"

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
      </Layout>
    </>
  );
}
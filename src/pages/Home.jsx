import Layout from '../components/Layout/Layout';
import "./home.css"

export default function Home() {
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
      </Layout>
    </>
  );
}
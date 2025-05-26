import './productsList.css';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productsSlice';
import Share from "../../assets/icons/share.svg";
import Compare from "../../assets/icons/compare.svg";
import Like from "../../assets/icons/like.svg";
export default function ProductsList() {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
 
   // Загрузка данных (классический способ)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  

  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  return (
    <div className="products-block-products">
      {products.map((product) => (
        <div  key={product.id} className="products-block-product">
          {product.new && 
            ( <span className="products-block-product-type">New</span>)}
                        {product.discount && (
                          <span className="products-block-product-discount">-{product.discount}%</span>
                        )}
                        <img src={product.image} alt={product.name} />
                        <div className="products-block-product-info">
                          <h3 className="products-block-product-title">{product.name}</h3>
                          <p className="products-block-product-description">{product.description}</p>
                          <div className="products-block-product-price-block">
                            <span className="products-block-product-price">Rp {(product.price).toLocaleString("id-ID")}</span>
                            {product.oldPrice && (
                              <span className="products-block-product-price oldPrice">Rp {product.oldPrice}</span>
                            )}
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
      ))}
    </div>
  );
}

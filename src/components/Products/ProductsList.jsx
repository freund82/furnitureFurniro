import './productsList.css';
import {useOptimistic, useEffect, startTransition} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, toggleLike } from '../../redux/slices/productsSlice';
import Share from "../../assets/icons/share.svg";
import Compare from "../../assets/icons/compare.svg";
export default function ProductsList() {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

    //Отметка лайка (оптимистический способ)
   const [optimisticLikes, setOptimisticLike] = useOptimistic(
    {},
    (state, { productId, isLiked }) => ({
      ...state,
      [productId]: isLiked
    })
  );

    const handleLike = (productId) => {
    const product = products.find(p => p.id === productId);
    const newLikeStatus = !product.isLiked;
    
    // Оптимистичное обновление
    startTransition(() => {
      setOptimisticLike({ productId, isLiked: newLikeStatus });
    })
    
    
    // Redux action
    dispatch(toggleLike(productId));
  };
 
   // Загрузка данных (классический способ)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  
    // Синхронизация при загрузке
useEffect(() => {
  if (!products.length) return;
  
  try {
    // Исправленная строка - добавлены кавычки '{}'
    const savedLikes = JSON.parse(localStorage.getItem('productLikes') || '{}');
    
    products.forEach(product => {
      if (savedLikes[product.id] && !product.isLiked) {
        dispatch(toggleLike(product.id));
      }
    });
  } catch (error) {
    console.error('Failed to parse saved likes:', error);
    // Можно также сбросить битые данные
    localStorage.removeItem('productLikes');
  }
}, [products, dispatch]);

  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  return (
    <div className="products-block-products">
      {products.map((product) => (
        <div  key={product.id} className="products-block-product">
          {product.isNew && 
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
                                <Link to="/" onClick={() => handleLike(product.id)}>
                                <svg  width="16" height="16" viewBox="0 0 16 16" fill={`${optimisticLikes[product.id] ?? product.isLiked ? 'red' : "none"}`} xmlns="http://www.w3.org/2000/svg">
<path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="white" strokeWidth="1.8"/>
</svg>
                                <span>Like</span></Link>
                              </div>
                          </div>
                    </div>
      ))}
    </div>
  );
}

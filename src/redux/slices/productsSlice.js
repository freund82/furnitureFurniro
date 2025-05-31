import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Функция для загрузки лайков из localStorage
const loadLikes = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('productLikes');
    return saved ? JSON.parse(saved) : {};
  }
  return {};
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const data = await response.json();
  return data.map((product) => ({
    ...product,
    isLiked: loadLikes()[product.id] || false,
  }));
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed' idle-состояние по умолчанию (загрузка товаров еще не началась)
    error: null,
  },
  reducers: {
    toggleLike(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.isLiked = !product.isLiked;

        // Сохраняем в localStorage
        const likes = loadLikes();
        likes[product.id] = product.isLiked;
        localStorage.setItem('productLikes', JSON.stringify(likes));

        // Обновляем счетчик
        if (product.likes !== undefined) {
          product.likes += product.isLiked ? 1 : -1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { toggleLike } = productsSlice.actions;
export default productsSlice.reducer;

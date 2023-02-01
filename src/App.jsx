import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AuthPage,
  CartPage,
  ErrorPage,
  HomePage,
  SingleProductPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

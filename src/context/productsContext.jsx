import { createContext, useContext, useReducer } from 'react';
import { productsReducer } from '../reducers/productsReducer';
import AppProvider from './userContext';

const AppContext = createContext(null);
const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
};

const reducer = () => {};

const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(AppContext);
};

export default ProductsProvider;

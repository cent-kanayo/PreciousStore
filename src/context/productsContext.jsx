import { createContext, useContext, useEffect, useReducer } from 'react';
import { productsReducer } from '../reducers/productsReducer';
import { customFetch } from '../utils';
import AppProvider from './userContext';

const AppContext = createContext(null);
const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
};



const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(()=>{
    const fetchdata = async ()=>{
      try {
        dispatch({ type: 'LOADING'})
        const response = await customFetch('/products')
        dispatch({ type : 'SUCCESS', payload: { products : response.data} })
        console.log(response.data)
      } catch (error) {
        dispatch({ type: 'ERROR' })
      }
    }
    fetchdata()
  }, [])

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

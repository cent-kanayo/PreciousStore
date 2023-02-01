import { createContext, useContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

const AppContext = createContext();

const initialState = {
  userName: '',
  email: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;

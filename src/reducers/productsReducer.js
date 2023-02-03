export const productsReducer = (state, action) => {
    if(action.type === 'LOADING'){
      return {
        ...state, 
        loading: true
      }
  
    }
    if(action.type === 'SUCCESS'){
      return {
        ...state,
        loading : false,
        products: action.payload.products
      }
    }
    if(action.type === 'ERROR'){
      return {
        loading : false,
        error : true
      }
    }
    throw new Error `No matching Data`
  };

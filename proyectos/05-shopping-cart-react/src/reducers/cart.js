export const initialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

//actualizar localStorage con el estado del carrito
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION_TYPE = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCart = state.findIndex((item) => item.id === id);
    if (productInCart >= 0) {
      //usando structuredClone
      // const newState = structuredClone(state);
      // newState[productInCart].quantity++;

      //usando spread operator y slice
      const newState = [
        ...state.slice(0, productInCart),
        {
          ...state[productInCart],
          quantity: state[productInCart].quantity + 1,
        },
        ...state.slice(productInCart + 1),
      ];

      // usando map
      // const newState = state.map((item, index) => {
      //   if (index === productInCart) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1,
      //     };
      //   }
      //   return item;
      // });
      updateLocalStorage(newState);
      return newState;
    }
    const newState = [...state, { ...action.payload, quantity: 1 }]; // [{...actionPayload, quantity: 1 }];
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};
export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION_TYPE[actionType];
  //   switch (actionType) {
  //     case CART_ACTION_TYPES.ADD_TO_CART: {
  //       const { id } = actionPayload;
  //       const productInCart = state.findIndex((item) => item.id === id);
  //       if (productInCart >= 0) {
  //         //usando structuredClone
  //         // const newState = structuredClone(state);
  //         // newState[productInCart].quantity++;

  //         //usando spread operator y slice
  //         const newState = [
  //           ...state.slice(0, productInCart),
  //           {
  //             ...state[productInCart],
  //             quantity: state[productInCart].quantity + 1,
  //           },
  //           ...state.slice(productInCart + 1),
  //         ]

  //         // usando map
  //         // const newState = state.map((item, index) => {
  //         //   if (index === productInCart) {
  //         //     return {
  //         //       ...item,
  //         //       quantity: item.quantity + 1,
  //         //     };
  //         //   }
  //         //   return item;
  //         // });
  //         updateLocalStorage(newState);
  //         return newState;
  //       }
  //       const newState = [...state, { ...actionPayload, quantity: 1 }];
  //       updateLocalStorage(newState);
  //       return newState;
  //     }
  //     case CART_ACTION_TYPES.REMOVE_FROM_CART: {
  //       const { id } = actionPayload;
  //       const newState = state.filter((item) => item.id !== id);
  //       updateLocalStorage(newState);
  //       return newState;
  //     }
  //     case CART_ACTION_TYPES.CLEAR_CART: {
  //       updateLocalStorage([]);
  //       return [];
  //     }
  //   }
  return updateState ? updateState(state, action) : state;
};

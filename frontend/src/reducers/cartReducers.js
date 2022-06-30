export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.payload

      let existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      break

    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
      break
    default:
      return state
  }
}

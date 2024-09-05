import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { updateCart } from "../utils/cartUtils"
import { ICartDTO } from "../DTO/CartDTO"
import { IProductDTO } from "../DTO/ProductDTO"

// TODO: create object CartDTO object to use instead the interface
const initialState: ICartDTO = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : ({} as ICartDTO)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductDTO>) => {
      const product = action.payload
      const index = state.cartItems.findIndex((item) => item._id === product._id)

      if (index !== -1) {
        state.cartItems[index] = product
      } else {
        state.cartItems.push(product)
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)
      return updateCart(state)
    },
    saveShippingAddress: (state, action: PayloadAction<string>) => {
      state.shippingAddress = action.payload
      localStorage.setItem("cart", JSON.stringify(state))
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload
      localStorage.setItem("cart", JSON.stringify(state))
    },
    clearCartItems: (state, action) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state))
    },
    resetCart: (state) => {
      return initialState
    },
  },
})

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCartItems, resetCart } =
  cartSlice.actions

export default cartSlice.reducer

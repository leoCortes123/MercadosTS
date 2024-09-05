import { createSlice } from "@reduxjs/toolkit"
import { IUserInfoDTO } from "../DTO/userInfoDTO"

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : ({} as IUserInfoDTO),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload as IUserInfoDTO
      localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = null
      // NOTE: here we need to also remove the cart from storage so the next
      // logged in user doesn't inherit the previous users cart and shipping
      localStorage.clear()
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

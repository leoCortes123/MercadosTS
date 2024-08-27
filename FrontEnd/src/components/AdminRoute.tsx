import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const AdminRoute: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth)

  return userInfo?.isAdmin ? <Outlet /> : <Navigate to="/login" replace />
}

export default AdminRoute

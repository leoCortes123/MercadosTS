import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"

interface PaginateProps {
  pages: number
  page: number
  isAdmin?: boolean
  keyword?: string
}

const assignKey = (keyword: string, isAdmin: boolean, pageNumber: number = 1): string => {
  if (isAdmin) {
    return `/admin/productlist/${pageNumber + 1}`
  }
  if (keyword) {
    return `/search/${keyword}/page/${pageNumber + 1}`
  }
  return `/page/${pageNumber + 1}`
}
const Paginate: React.FC<PaginateProps> = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item as={Link} key={x + 1} to={assignKey(keyword, isAdmin, x)} active={x + 1 === page}>
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  )
}

export default Paginate

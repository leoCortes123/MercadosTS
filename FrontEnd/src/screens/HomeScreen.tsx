import { Row, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import { useGetProductsQuery } from "../slices/productsApiSlice"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import ErrorSlice from "../components/ErrorSlice"

function HomeScreen() {
  const { pageNumber = 1, keyword = "" } = useParams()
  let pageNumberNum: number = Number(pageNumber)

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber: isNaN(pageNumberNum) ? 1 : pageNumberNum,
  })

  // Si está cargando, mostrar Loader
  if (isLoading) return <Loader />

  if (error) return <ErrorSlice error={error} />

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}

      <Meta />
      <h1>Latest Products</h1>
      {!data ? (
        <p>No products found</p>
      ) : (
        <>
          <Row>
            {data?.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword} />
        </>
      )}
    </>
  )
}

export default HomeScreen

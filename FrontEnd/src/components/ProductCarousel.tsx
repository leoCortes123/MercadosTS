import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import { useGetTopProductsQuery } from "../slices/productsApiSlice"
import ErrorSlice from "./ErrorSlice"
import Loader from "./Loader"

const ProductCarousel = () => {
  const { data, isLoading, error } = useGetTopProductsQuery()

  if (isLoading) return <Loader />
  if (error) {
    return <ErrorSlice error={error} />
  }

  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      {data?.products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel

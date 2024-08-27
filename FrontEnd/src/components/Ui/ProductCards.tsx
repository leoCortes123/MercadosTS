import { FC } from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../Product"
import { ProductDTO } from "../../DTO/ProductsDTO" // Importa tu DTO

interface ProductListProps {
  products: ProductDTO[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductList

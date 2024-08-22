import { Row, Col } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'

const HomeScreen = () => {
	const { pageNumber = 1, keyword = '' } = useParams() // Valores predeterminados

	const { data, isLoading, error } = useGetProductsQuery({
		keyword,
		pageNumber,
	})

	// Si está cargando, mostrar Loader
	if (isLoading) {
		return <Loader />
	}

	// Si hay un error, mostrar el mensaje de error
	if (error) {
		return <Message variant='danger'>{error?.data?.message || error.error}</Message>
	}

	return (
		<>
			{/* Si no hay keyword, mostrar el carrusel */}
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to='/' className='btn btn-light mb-4'>
					Go Back
				</Link>
			)}

			<Meta />
			<h1>Latest Products</h1>
			<Row>
				{data?.products?.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<Paginate pages={data?.pages} page={data?.page} keyword={keyword} />
		</>
	)
}

export default HomeScreen

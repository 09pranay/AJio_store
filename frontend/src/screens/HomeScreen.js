import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'    
import Message from '../components/Message'
import Meta from '../components/Meta'
import Paginate from '../components/Paginate'


const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products, page,pages} = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
     },[dispatch, keyword, pageNumber])
 
  return (
    <div>

        <Meta/>
        <h1>Latest in the Store</h1>
        
        {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <>
                        <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                        </Row>
                        <Paginate  pages={pages} page={page} keywords={keyword ? keyword:''}/ >

                        </>
                    )
        }
            
            
            
        
    </div>
  )
}

export default HomeScreen
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Mystate from '../../context/data/Mystate'
import Herosection from '../../components/herosection/Herosection'
import Filter from '../../components/filter/Filter'
import Product from '../../components/productcard/Product'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

const Home = () => {
    const red = useContext(Mystate)
    console.log(red)

  return (
    <Layout>
        <Herosection/>
        <Filter/>
        <Product/>
        <Track/>
        <Testimonial/>

    </Layout>
  )
}

export default Home
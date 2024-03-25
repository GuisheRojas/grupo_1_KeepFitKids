import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import Topbar from "./Topbar"
import Products from './Products'
import ProductsByCategory from './ProductsByCategory'
import Users from "./Users"
import ProductDetail from "./ProductDetail";
import UserDetail from "./UserDetail";

import {Link, Route, Routes} from 'react-router-dom'

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar/>
                <Routes>

                    <Route exact path='/' element={<ContentRowTop/>}/>
                    <Route exact path='/products' element={<Products/>}/>
                    <Route path='/products/detail/:id' element={<ProductDetail/>}/>
                    <Route exact path="/users" element={<Users />}/>
                    <Route path="/users/detail/:id" element={<UserDetail />}/>
                    <Route path='/categories/masculino' element={<ProductsByCategory category={'Masculino'}/>}/>
                    <Route path='/categories/femenino' element={<ProductsByCategory category={'Femenino'}/>}/>
                    <Route path='/categories/unisex' element={<ProductsByCategory category={'Unisex'}/>}/>
                    
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default ContentWrapper
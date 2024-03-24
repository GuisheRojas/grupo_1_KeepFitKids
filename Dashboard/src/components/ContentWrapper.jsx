import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import Topbar from "./Topbar"
import Products from './Products'

import {Link, Route, Routes} from 'react-router-dom'

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar/>
                <Routes>
                    <Route path='/products' element={<Products/>}/>
                    <Route exact path='/' element={<ContentRowTop/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default ContentWrapper
import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import Topbar from "./Topbar"

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar/>
                <ContentRowTop/>
            </div>
            <Footer/>
        </div>
    )
}

export default ContentWrapper
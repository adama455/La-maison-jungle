import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
    const title = "La maison jungle"
    return (
        <div className='lmj-banner-row'>

            <div className='lmj-banner'>
                <img src={logo} className="lmj-logo" alt="la maison jungle"/>
                <h1 className="lmj-title">{title}</h1>
            </div>
            <Recommendation/>
        </div>


    )
}
export default Banner
    

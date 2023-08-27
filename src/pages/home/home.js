import {Gallery, Halls, HomeInfo} from "pages/home/fragments";
import {Services} from "pages/home/fragments/services";

export const Home = ({ }) => {
    return(
        <div className='home-wrapper'>
            <HomeInfo/>
            <Gallery/>
            <Halls/>
            <Services/>
        </div>
    )
}

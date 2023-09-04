import {TopHeader} from "./fragments/topBal/topHeader";
import {Halls, Home, Services} from "pages";
import {Route, Routes} from "react-router";
import {ContactUs} from "./fragments/contactUs";

function App() {
    return (
        <div className='app-wrapper'>
            <TopHeader/>
            <div className='all-wrapper'>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/gallery'} element={<Home/>} />
                    <Route path={'/halls'} element={<Halls/>} />
                    <Route path={'/services'} element={<Services/>} />
                    <Route path={'*'} element={<Home/>} />
                </Routes>
                <ContactUs/>
            </div>



            {/*<div className='will-be-soon'>*/}
            {/*    <p>Բացումը շուտով</p>*/}
            {/*    <p>Открытие в ближайшее время</p>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;

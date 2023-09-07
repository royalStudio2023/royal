import {Images} from "../../../assets";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import hall7 from "../../../assets/images/img/halls/Hall07.png";

export const Halls = ({}) => {
    const navigate = useNavigate()
    const { t } = useTranslation();

    const handleNavigate = () => {
        navigate('/halls')
    }

    return (
        <div className='halls-wrapper'>
            <h1 className='global-title'>{t("our Halls")}</h1>
            <div className='hall-items-wrapper'>
                <div className='hall-item'>
                    <img src={Images.hall1} alt="img"/>
                    {/*<p>Hall #1</p>*/}
                </div>
                <div className='hall-item'>
                    <img src={Images.hall3} alt="img"/>
                    {/*<p>Hall #1</p>*/}
                </div>
            </div>
            <div className='desktop-view'>
            <div className='hall-items-wrapper '>
                <div className='hall-item'>
                    <img src={Images.hall7} alt="img" />
                    {/*<img src={Images.hall4} alt="img" className='mobile-view'/>*/}
                    {/*<p>Hall #1</p>*/}
                </div>
                <div className='hall-item'>
                    <img src={Images.hall4 } alt="img"/>
                    {/*<img src={Images.hall3} alt="img" className='mobile-view'/>*/}
                    {/*<p>Hall #1</p>*/}
                </div>
            </div>
            </div>
            <div className='more-btn-wrapper'>
                <button onClick={handleNavigate}>
                    <img src={Images.more} alt="icon"/>
                </button>
            </div>
        </div>
    )
}
import {Images} from "../../../assets";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

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
                    <img src={Images.hall2} alt="img"/>
                    {/*<p>Hall #1</p>*/}
                </div>
            </div>
            <div className='hall-items-wrapper'>
                <div className='hall-item'>
                    <img src={Images.hall3} alt="img"/>
                    {/*<p>Hall #1</p>*/}
                </div>
                <div className='hall-item'>
                    <img src={Images.hall4} alt="img"/>
                    {/*<p>Hall #1</p>*/}
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
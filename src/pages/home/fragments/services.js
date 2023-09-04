import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

export const Services = ({}) => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <div className='services-wrapper'>
            <h1 className='global-title'>{t("our Services")}</h1>


            <div className='services-item'>


                <div className='left-side-row'/>
                <div className='text-wrapper'>
                    <ul className='ul-wrapper'>
                        <li>{t("Shooting of ceremonies, photo/video shooting of weddings, birthdays")}</li>
                        <li>{t("Realization of both outdoor and booth photo sessions")}</li>
                        <li>{t("Product photography")}</li>
                        <li>{t("Printing of photo books")}</li>
                        <li>{t("Printing of photos, printing of pillows, t-shirts, photo stones, magnets, clocks, puzzles")}</li>
                    </ul>
                    <div className='read-more-wrapper'>
                        <button onClick={() => navigate('/services')}>
                            {t('Read more')}
                        </button>
                    </div>
                </div>
                <div className='right-side-row'/>
            </div>
        </div>
    )
}
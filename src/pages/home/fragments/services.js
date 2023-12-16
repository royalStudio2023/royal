import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

export const Services = ({}) => {
    const {t} = useTranslation();
    const navigate = useNavigate()

    return (
        <div className='services-wrapper'>
            <h1 className='global-title'>{t("our Services")}</h1>


            <div className='services-item'>


                <div className='left-side-row'/>
                <div className='text-wrapper'>

                    <p className='text'>{t("Price List")}</p>
                    <ul className='ul-wrapper'>
                        <li>{t("5 processed pictures - 7500 AMD. (printed)")}</li>
                        <li>{t("10 processed pictures - 15,000 AMD. (printed)")}</li>
                        <li>{t("Provision of unprocessed pictures + 5000 AMD.")}</li>
                        {/*<li>{t("Shooting of ceremonies, photo/video shooting of weddings, birthdays")}</li>*/}
                        {/*<li>{t("Realization of both outdoor and booth photo sessions")}</li>*/}
                        {/*<li>{t("Product photography")}</li>*/}
                        {/*<li>{t("Printing of photo books")}</li>*/}
                        {/*<li>{t("Printing of photos, printing of pillows, t-shirts, photo stones, magnets, clocks, puzzles")}</li>*/}
                    </ul>


                    <p  className='text'>{t("Open-air")}</p>
                    <ul className='ul-wrapper'>
                        <li>{t("1 hour - 20,000 AMD")}</li>
                    </ul>

                    <p  className='text'>{t("Regulation")}</p>
                    <ul className='ul-wrapper'>
                        <li>{t("1. 1 hour is planned for photography.")}</li>
                        <li>{t("2. Show up on time.")}</li>
                        <li>{t("3. Processed and printed photos are provided within 4-5 days")}</li>
                        <li>{t("4.Raw images are provided for an additional fee.")}</li>
                        <li>{t("5. In case of cancellation or time change, inform at least 2 days in advance.")}</li>
                        <li>{t("6. Фотографировать на телефон запрещено.")}</li>
                        <li>{t("7. Please come with spare shoes.")}</li>
                        <li>{t("8. In the case of 5 or more persons, the minimum number of photos is 15. In the case of 10 persons, 20.")}</li>
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
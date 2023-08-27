import {useTranslation} from "react-i18next";

export const Services = ({}) => {
    const { t } = useTranslation();

    return (
        <div className='services-wrapper'>
            <h1 className='global-title'>{t("our Services")}</h1>


            <div className='services-item'>


                <div className='left-side-row'/>
                <div className='text-wrapper'>
                    <ul className='ul-wrapper'>
                        <li>Lorem Ipsum is text of the printing Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing</li>
                        <li>Lorem Ipsum is text of the printing</li>
                    </ul>
                    <div className='read-more-wrapper'>
                        <button>
                            Read more
                        </button>
                    </div>
                </div>
                <div className='right-side-row'/>
            </div>
        </div>
    )
}
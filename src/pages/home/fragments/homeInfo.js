import {Images} from "../../../assets";
import {useTranslation} from "react-i18next";

export const HomeInfo = ({}) => {
    const { t } = useTranslation();


    return (
        <>
            <h1 className='photography-mobile-title'>{t('Photography course')}</h1>
        <div className='home-info-wrapper'>
            <div className='image-side'>
                <div className='image-wrapper-gold'>
                    <div className='image-wrapper-gray'>
                        <img src={Images.sargis} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className='text-side'>
                <h1 className='photography-title'>{t('Photography course')}</h1>
                <p className='subtitle'>
                    {t("Simultaneously with the opening of the Royal Studio, a three-month photography course will start. which enable both beginners and beginners to gain professional knowledge in the field of photography, as well as experienced photographers to improve their skills. The courses will be held in our studio and the course will be conducted by a person with many years of experience in this field. famous photographer Sargis Virabyan. Hurry up to register as space is very limited. At the end of the course, a certificate is issued, and the best students will be provided with work." )}
                </p>
                {/*<input type="text" placeholder={t('Email address')}/>*/}
                <button>
                    <a href="mailto:royal.studio.gyumri@gmail.com">
                        {t("Register")}
                    </a>
                 </button>
            </div>
        </div>
        </>
    )
}
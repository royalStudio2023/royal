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
                    ՍԱՐԳԻՍ ՎԻՐԱԲՅԱՆ ՖՈՏՈՍՏՈՒԴԻԱՆ անց է կացնում եռամսյա լուսանկարչական դասընթացներ
                    Նոր խմբակի դասընթացները կսկսվեն ՍԵՊՏԵՄԲԵՐԻՑ
                    Տրվում է վկայական
                    {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
                    {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type*/}
                    {/*and scrambled it to make a type specimen book. It has survived not only five centuries, but also the*/}
                    {/*leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s*/}
                    {/*with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with*/}
                    {/*desktop*/}
                </p>
                <input type="text" placeholder={t('Email address')}/>
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
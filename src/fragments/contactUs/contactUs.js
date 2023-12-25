import {Images} from "../../assets";
import {useTranslation} from "react-i18next";
import React from "react";


export const ContactUs = ({}) => {
    const { t } = useTranslation();

    return (
        <div className='contact-us-wrapper' id={'contact'}>

            <div className='title-and-line'>
                <h1 className='global-title'>{t("Contact us")}</h1>
                <div className='line'/>
            </div>

            <div className='contact-us'>

                <div className='title-and-text-wrapper'>
                    <p className='title'>{t("Address and telephone")}</p>
                    <p>
                        <a style={{marginTop: '12px'}} className='phone-number'
                           href="https://api.whatsapp.com/send?phone=+37444033043">{t("Book")}</a>
                        <br/>
                        <br/>
                        <a className='text-style' href={'tel:+37444033043'}>044 033 043</a>


                    </p>
                    <p className={'text-style-address'} style={{marginTop: '10px',}}>
                        <a
                            target={'_blank'}
                            href='https://www.google.com/maps/place/Venecia/@40.8294862,43.8318849,20.22z/data=!4m6!3m5!1s0x4041f9a0b8c3af09:0xa11e75fec87a868c!8m2!3d40.8296413!4d43.8318712!16s%2Fg%2F1tjffb1s?entry=ttu'
                           >

                            {t("Our address is: Paruyr Sevak 4a, next to SPU (former Pedagogical University).")}

                            {/*Armenia Gyumri, Paruyr Sevak 4a*/}
                        </a>
                    </p>
                </div>
                <div className='vector'/>
                <div className='title-and-text-wrapper'>
                    <p className='title'>{t("Social network")}</p>
                    <div className='social-accounts'>
                        <a href="https://www.facebook.com/royal.studio.gyumri2023" target={'_blank'}>
                            <img src={Images.face} alt="facebook"/>
                        </a>
                        <a href="https://www.tiktok.com/@royal.studio05?_t=8f4hjH2JxX0&_r=1" target={'_blank'}>
                            <img src={Images.tiktok} alt="tiktok"/>
                        </a>
                        <a href="https://www.instagram.com/royal.studio.gyumri/?hl=en" target={'_blank'}>
                            <img src={Images.insta} alt="instagram" />
                        </a>
                    </div>
                </div>
                <div className='vector'/>
                <div className='title-and-text-wrapper' style={{textAlign: 'end',width:'auto'}}>
                    <p className='title'>{t("Mon - Sat")}</p>
                    <p className='subtitle'> 11:00 - 21:00</p>
                </div>

            </div>
        </div>
    )
}
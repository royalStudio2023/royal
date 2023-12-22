import React from 'react'
import {Images} from "../../assets";
import {useLocation, useNavigate} from "react-router";
import {Drawer} from "@mui/material";
import {Languages} from "./languages";
import {useTranslation} from "react-i18next";


export const TopHeader = ({}) => {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const location = useLocation()
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(!state);
    };

    const handleClick = (link) => {
        navigate(link)
    }

    const handleClickNavigate = (link) => {
        navigate(link)
        setState(false)
    }

    return (
        <div>
            <div className='top-header-mobile'>
                <button className='icon-btn' onClick={() => handleClick('/')}>
                    <img src={Images.logoSvg} alt="icon"/>
                </button>

                <button className='open-btn' onClick={toggleDrawer}>
                    {state ?
                        <img src={Images.closeVector} alt="icon"/>
                        :
                        <img src={Images.openDrawer} alt="icon"/>
                    }
                </button>

            </div>
            <div className='top-header-wrapper'>
                <button className='icon-btn' onClick={() => handleClick('/')}>
                    <img src={Images.logoSvg} alt="icon"/>
                </button>
                <div className='links-wrapper'>
                    <button
                        style={{color: location?.pathname === '/gallery' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClick('/gallery')}
                    >
                        {t("Photographer/gallery")}
                    </button>
                    <button
                        style={{color: location?.pathname === '/halls' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClick('/halls')}
                    >
                        {t("Halls")}
                    </button>
                    <button
                        style={{color: location?.pathname === '/services' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClick('/services')}
                    >
                        {t("Services")}
                    </button>
                    <a href={'#contact'}> {t("Contact us")}</a>
                </div>
                <div className='language-and-phone'>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <a className='phone-number' href="tel:+37444033043">044 033 043</a>
                        <a style={{marginTop:'6px'}} className='phone-number' href="https://api.whatsapp.com/send?phone=+37444033043">{t("Book")}</a>
                    </div>
                    <Languages/>
                </div>
            </div>

            <Drawer
                open={state}
                onClose={toggleDrawer}
            >
                <div className='drawe-body'>
                    <div className='flex-end' style={{marginBottom: '20px'}}>
                        <Languages/>
                    </div>

                    <button
                        style={{color: location?.pathname === '/gallery' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClickNavigate('/gallery')}
                    >
                        {t("Photographer/gallery")}
                    </button>
                    <div className='mobile-line'/>
                    <button
                        style={{color: location?.pathname === '/halls' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClickNavigate('/halls')}
                    >
                        {t("Halls")}
                    </button>
                    <div className='mobile-line'/>

                    <button
                        style={{color: location?.pathname === '/services' ? '#B98C33' : '#BEBFC1'}}
                        onClick={() => handleClickNavigate('/services')}
                    >
                        {t("Services")}
                    </button>
                    <div className='mobile-line'/>

                    <a href={'#contact'} onClick={() => setState(false)}> {t("Contact us")}</a>
                </div>
            </Drawer>

        </div>
    )
}
import * as React from "react";
import {useTranslation} from "react-i18next";
import Popover from "@mui/material/Popover";
import {Images} from "../../assets";
import {StyledStyles} from "./styles";

const styles = {
    display: "flex",
    alignItems: "center",
    padding: "12px 15px",
    width: "150px",
    justifyContent: "space-between",
    border: "none",
    background:'transparent'

};

export function Languages() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const language = localStorage.getItem("language") ? localStorage.getItem("language") : 'ru';
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const {t, i18n} = useTranslation();

    console.log(language,'language')

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLanguage = (lng) => {
        if (language !== lng) {
            localStorage.setItem("language", lng);
            i18n.changeLanguage(lng);
            setAnchorEl(null);

        }
    };

    const renderIcon = (lng) => {
        if (language) {
            if (lng === language) {
                return <img src={Images.checkmark} alt="icon"/>
            }
        } else if (lng === "ru") {
            return <img src={Images.checkmark} alt="icon"/>
        }
    };

    const renderBackground = (lng) => {
        if (language) {
            if (lng === language) {
                return "#F5F7F9";
            }
        } else if (lng === "ru") {
            return "#F5F7F9";
        }
    };

    const renderLanguage = (lng) => {
        if (lng) {
            if (lng === "en") {
                return (
                    <>
                        <img src={Images.english} alt="icon"/>
                        {/*<p>English</p>*/}
                    </>
                );
            }
            if (lng === "ru") {
                return (
                    <>
                        <img src={Images.russia} alt="icon"/>
                        {/*<p>Русский</p>*/}
                    </>
                );
            }
            if (lng === "am") {
                return (
                    <>
                        <img src={Images.armenia} alt="icon"/>
                        {/*<p>հայերեն</p>*/}
                    </>
                );
            }
        } else {
            return (
                <>
                    <img src={Images.russia} alt="icon"/>
                    {/*<p>հայերեն</p>*/}
                </>
            );
        }
    };


     const languageList = [
        {name: "English", value: "en", icon: <img src={Images.english} alt="icon"/>},
        {name: "Русский", value: "ru", icon: <img src={Images.russia} alt="icon"/>},
        {name: "հայերեն", value: "am", icon: <img src={Images.armenia} alt="icon"/>}
    ];


    return (
        <StyledStyles>
            <div className="popover-wrapper">

                    <button className="language-button" onClick={handleClick}>
                        <div className="active-language">
                            {renderLanguage(language)}
                        </div>
                    </button>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    classes={{paper: "MuiPopover-paper"}}
                >
                    <div>
                        {languageList?.map((i, j) => (
                            <button
                                onClick={() => handleChangeLanguage(i?.value)}
                                key={j} style={{
                                ...styles,
                                background: renderBackground(i?.value),
                            }}
                            >
                                {i.icon}
                                <p>{i.name}</p>
                                <div style={{width: "20px", marginRight: "4px"}}>
                                    {renderIcon(i?.value)}
                                </div>
                            </button>
                        ))}
                    </div>
                </Popover>
            </div>
        </StyledStyles>
    );
}
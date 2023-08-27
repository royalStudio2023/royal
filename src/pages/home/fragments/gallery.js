import {useTranslation} from "react-i18next";
import {Images} from "../../../assets";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const Gallery = ({}) => {
    const { t } = useTranslation();


    return (
        <div className='gallery-wrapper'>
            <h1 className='global-title'>{t("the Gallery")}</h1>
            <div className='desktop-view'>
            <CarouselProvider
                naturalSlideWidth={1400}
                naturalSlideHeight={800}
                totalSlides={4}
            >
                <ButtonBack  className='prev-btn' >
                    <img src={Images.prew} alt="icon"/>
                </ButtonBack>
                <ButtonNext className='next-btn'>
                    <img src={Images.next} alt="icon"/>
                </ButtonNext>
                <Slider>
                    <Slide index={0} className='current-slice-wrapper'>
                        <img src={Images.hall} alt="icon" className='not-current-img' style={{margin: 0}}/>
                        <img src={Images.hall} alt="icon" className='current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                    </Slide>
                    <Slide index={1}>
                        <img src={Images.hall} alt="icon" className='not-current-img' style={{margin: 0}}/>
                        <img src={Images.hall} alt="icon" className='current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                    </Slide>
                    <Slide index={2}>
                        <img src={Images.hall} alt="icon" className='not-current-img' style={{margin: 0}}/>
                        <img src={Images.hall} alt="icon" className='current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                    </Slide>
                    <Slide index={3}>
                        <img src={Images.hall} alt="icon" className='not-current-img' style={{margin: 0}}/>
                        <img src={Images.hall} alt="icon" className='current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                        <img src={Images.hall} alt="icon" className='not-current-img'/>
                    </Slide>
                </Slider>
                <div className='slider-count'>
                    <DotGroup/>
                </div>
            </CarouselProvider>
            </div>

            <div className='mobile-view'>
                <CarouselProvider
                    naturalSlideWidth={350}
                    naturalSlideHeight={500}
                    totalSlides={4}
                    visibleSlides={1.2}
                >
                    <Slider>
                        <Slide index={0} className='current-slice-wrapper'>
                            <img src={Images.hall} alt="icon" className='current-img' />
                        </Slide>
                        <Slide index={1}>
                            <img src={Images.hall} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={3}>
                            <img src={Images.hall} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={4}>
                            <img src={Images.hall} alt="icon" className='current-img'/>
                        </Slide>
                    </Slider>
                    <div className='slider-count'>
                        <DotGroup/>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}
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
    const {t} = useTranslation();

    return (
        <div className='gallery-wrapper'>
            <h1 className='global-title'>{t("the Gallery")}</h1>
            <div className='desktop-view'>
                <CarouselProvider
                    naturalSlideWidth={1400}
                    naturalSlideHeight={800}
                    totalSlides={4}
                >
                    <ButtonBack className='prev-btn'>
                        <img src={Images.prew} alt="icon"/>
                    </ButtonBack>
                    <ButtonNext className='next-btn'>
                        <img src={Images.next} alt="icon"/>
                    </ButtonNext>
                    <Slider>
                        <Slide index={0} className='current-slice-wrapper'>
                            <img src={Images.g10} alt="icon" className='not-current-img' style={{margin: 0}}/>
                            <img src={Images.g3} alt="icon" className='current-img'/>
                            <img src={Images.g5} alt="icon" className='not-current-img'/>
                            <img src={Images.g7} alt="icon" className='not-current-img'/>
                        </Slide>
                        <Slide index={1}>
                            <img src={Images.g2} alt="icon" className='not-current-img' style={{margin: 0}}/>
                            <img src={Images.g6} alt="icon" className='current-img'/>
                            <img src={Images.g8} alt="icon" className='not-current-img'/>
                            <img src={Images.g9} alt="icon" className='not-current-img'/>
                        </Slide>
                        <Slide index={2}>
                            <img src={Images.g1} alt="icon" className='not-current-img' style={{margin: 0}}/>
                            <img src={Images.g4} alt="icon" className='current-img'/>
                            <img src={Images.g11} alt="icon" className='not-current-img'/>
                            <img src={Images.g12} alt="icon" className='not-current-img'/>
                        </Slide>
                        <Slide index={3}>
                            <img src={Images.g13} alt="icon" className='not-current-img' style={{margin: 0}}/>
                            <img src={Images.g14} alt="icon" className='current-img'/>
                            <img src={Images.g15} alt="icon" className='not-current-img'/>
                            <img src={Images.g16} alt="icon" className='not-current-img'/>
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
                    totalSlides={16}
                    visibleSlides={1}
                >
                    <Slider>
                        <Slide index={0} className='current-slice-wrapper'>
                            <img src={Images.g10} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={1}>
                            <img src={Images.g3} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={2}>
                            <img src={Images.g5} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={3}>
                            <img src={Images.g7} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={4}>
                            <img src={Images.g2} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={5}>
                            <img src={Images.g6} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={6}>
                            <img src={Images.g8} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={7}>
                            <img src={Images.g9} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={8}>
                            <img src={Images.g1} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={9}>
                            <img src={Images.g4} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={10}>
                            <img src={Images.g11} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={11}>
                            <img src={Images.g12} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={12}>
                            <img src={Images.g13} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={13}>
                            <img src={Images.g14} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={14}>
                            <img src={Images.g15} alt="icon" className='current-img'/>
                        </Slide>
                        <Slide index={15}>
                            <img src={Images.g16} alt="icon" className='current-img'/>
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

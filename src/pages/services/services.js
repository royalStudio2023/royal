import {Images} from "../../assets";
import {ServiceCard} from "./fragments";
import {useTranslation} from "react-i18next";


export const Services = ({}) => {
    const { t } = useTranslation();

    const serviceList = [
        {
            title: t('Filming of events'),
            description: t('Photo/video shooting of weddings, birthdays'),
            icon: Images.event,
            rightTo: true
        },
        {
            title: t('Photo sessions'),
            description: t('Realization of both outdoor and booth photo sessions'),
            icon: Images.photoshooting,
            rightTo: false
        },
        {
            title: t('Product photography'),
            icon: Images.product,
            rightTo: true
        },
        {
            title:  t('Printing of photo books'),
            icon: Images.maxresdefault,
            rightTo: false
        },
        {
            title:  t('Printing'),
            description:  t('Printing of photos, printing of pillows, t-shirts, photo stones, magnets, clocks, puzzles') ,
            icon: Images.printing,
            rightTo: true
        },
    ]

    return (
        <div className='services-page-wrapper'>
            <div className='flex-end'>
                <h1 className='global-title'>{t("our Services")}</h1>
            </div>
            <div className='services-items-wrapper'>
                {serviceList?.map((i, j) => (
                    <div key={j}>
                        <ServiceCard
                            title={i?.title}
                            description={i?.description}
                            icon={i?.icon}
                            rightTo={i?.rightTo}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
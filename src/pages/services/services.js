import {Images} from "../../assets";
import {ServiceCard} from "./fragments";
import {useTranslation} from "react-i18next";


export const Services = ({}) => {
    const { t } = useTranslation();

    const serviceList = [
        {
            title: 'Name of the service',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ' ,
            icon: Images.hall,
            rightTo: true
        },
        {
            title: 'Name of the service',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',
            icon: Images.hall,
            rightTo: false
        },
        {
            title: 'Name of the service',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',
            icon: Images.hall,
            rightTo: true
        },
        {
            title: 'Name of the service',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ' ,
            icon: Images.hall,
            rightTo: false
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
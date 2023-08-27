import {Card} from "./fragments/card";
import {Images} from "../../assets";
import {useTranslation} from "react-i18next";


export const Halls = ({}) => {
    const { t } = useTranslation();

    const list = [
        {
            title: 'Hall #1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',
            icon: Images.hall,
            rightTo: false
        },
        {
            title: 'Hall #2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',
            icon: Images.hall,
            rightTo: true
        },
        {
            title: 'Hall #1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',

            icon: Images.hall,
            rightTo: false
        },
        {
            title: 'Hall #2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ',
            icon: Images.hall,
            rightTo: true
        },
    ]
    return (
        <div className='halls-page-wrapper'>

            <div className='flex-end'>
                <h1 className='global-title'>{t("our Halls")}</h1>
            </div>


            <div className='hall-items-wrapper'>
                {list?.map((i, j) => (
                    <div key={j}>
                        <Card
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
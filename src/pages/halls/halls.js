import {Card} from "./fragments/card";
import {Images} from "../../assets";
import {useTranslation} from "react-i18next";

export const Halls = ({}) => {
    const {t} = useTranslation();

    const list = [
        {
            title: t('White dreams'),
            description: t("Love, romance, harmony of soul and mind. here are the feelings that will be expressed in the photos taken in this salon."),
            icon: Images.hall3,
            rightTo: true
        },
        {
            title: t('A fairy tale'),
            description: t('A colorful, fairy-tale, children\'s environment designed to capture fairy-tale photos of children of any age.'),
            icon: Images.hall8,
            rightTo: false
        },

        {
            title: t('School'),
            description: t('This hall is designed for schoolchildren of any age.'),
            icon: Images.hall2,
            rightTo: true
        },
        {
            title: 'Barbieland',
            description: t('The salon is designed for both adults and children to take photos in the image of Barbie.'),
            icon: Images.hall4,
            rightTo: false
        },


        {
            title: t('Back to the roots'),
            description: t('The old Armenian color, the warmth, the costumes and environment provided by us in the form of photos will bring you back to the old times and make you feel the warmth and breath of the old Armenian hearth.'),
            icon: Images.hall7,
            rightTo: true
        },


        {
            title: t('Sonata of the Moon'),
            description: t('Filled with elements of nature, this hall will make you disconnect from the outside world and immerse yourself in a romantic lunar environment.'),
            icon: Images.hall1,
            rightTo: false
        },
        {
            title: t('Portfolio shooting'),
            description: t('Black, white, brown, milky halls.'),
            icon: Images.hall5,
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
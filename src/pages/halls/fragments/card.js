export const Card = ({title, description, icon, rightTo}) => {
    return (
        <>
            {rightTo === false ?
                <div className='hall-card-wrapper'>
                    <div className='hall-info-wrapper'>
                        <h1 className='title'>{title}</h1>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='hall-image-wrapper'>
                        <img className='hall-image' src={icon} alt="icon"/>
                    </div>
                </div>
                :
                <div className='right-hall-card-wrapper'>
                    <div className='hall-image-wrapper'>
                        <img className='hall-image' src={icon} alt="icon"/>
                    </div>
                    <div className='hall-info-wrapper-end'>
                        <h1 className='title'>{title}</h1>
                        <p className='description'>{description}</p>
                    </div>
                </div>
            }
        </>
    )
}
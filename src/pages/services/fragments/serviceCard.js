export const ServiceCard = ({title, description, icon, rightTo}) => {

    return (
        <>
            {rightTo === false ?
                <div className='services-card-wrapper'>
                    <div className='services-info-wrapper'>
                        <div className='text-line'/>
                        <div className='services-info-padding'>
                            <h1  className='title'>{title}</h1>
                            <div className='description'>
                                       <span>
                                          {description}
                                       </span>
                            </div>
                        </div>
                        <div className='text-line'/>
                    </div>
                    <div className='hall-image-wrapper'>
                        <img className='hall-image' src={icon} alt="icon"/>
                    </div>
                </div>
                :
                <div className='services-card-end-wrapper'>
                    <div className='hall-image-wrapper'>
                        <img className='hall-image' src={icon} alt="icon"/>
                    </div>
                    <div className='right-services-info-wrapper'>
                        <div className='text-line'/>
                        <div className='services-info-padding-end'>
                            <h1 className='title'>{title}</h1>
                            <div className='description'>
                                <span>
                                {description}
                                </span>
                            </div>
                        </div>
                        <div className='text-line'/>
                    </div>
                </div>
            }
        </>
    )
}
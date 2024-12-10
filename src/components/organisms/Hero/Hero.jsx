import { images }  from '@/assets/images/index';
import { Tag }  from '@/components/molecules/Tag/Tag';
import "./style.scss"

export function Hero() {
    const Tagsdata = [
        {
            title: '1/2000s',
            type: 'time',
        },
        {
            title: 'f/11',
            type: 'social',
        },
        {
            title: '100',
            type: 'iso',
        },
        {
            title: 'Iceland',
            type: 'location',
        },
    ]

    return (
        <div className="app-hero" style={{backgroundImage: `url(${images.hero})`}}>
            <div className="container">
                <div className="app-hero__container">
                    <div className="app-hero__text-wrap">
                        <p className="app-hero__text">Photographer & Filmmaker</p>
                        <h1 className="app-hero__title">Aperture Studios</h1>
                        <p className="app-hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                    <div className="app-hero__tags">
                        {
                            Tagsdata.map(tag =>
                                <Tag title={tag.title} type={tag.type} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
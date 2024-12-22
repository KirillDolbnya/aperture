import { Tag }  from '@/components/molecules/Tag/Tag';
import "./style.scss";

export function Location({title, subtitle, image, tagsData}) {

    return(
        <div className="app-location" style={{ backgroundImage: `url(${image})` }}>
            <div className="wrap">
                <div className="app-location__wrap">
                    <div className="app-location__text">
                        <p className="app-location__title">{title}</p>
                        <p className="app-location__subtitle">{subtitle}</p>
                    </div>
                    <div className="app-location__tag">
                        {
                            tagsData.map(tag =>
                                <Tag title={tag.title} type={tag.type} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
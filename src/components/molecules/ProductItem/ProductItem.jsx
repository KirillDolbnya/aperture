import "./style.scss"
import { ButtonPicture } from "@/components/molecules/ButtonPicture/ButtonPicture";

export function ProductItem({title,description,image}) {
    return (
        <div className="app-product-item" style={{backgroundImage: `url(${image})`}}>
            <div className="app-product-item__text-wrap">
                <p className="app-product-item__title">{title}</p>
                <p className="app-product-item__desc">{description}</p>
            </div>
            <ButtonPicture disabled={false} onClick={(e) => e.preventDefault()}>
                Read more
            </ButtonPicture>
        </div>
    )
}
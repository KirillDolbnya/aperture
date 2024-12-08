import "./style.scss";
import { ProductItem } from "../ProductItem/ProductItem";
import { images } from "../../../assets/images/index";

export function ProductItems() {
    return (
        <div className="app-product">
            <div className="container">
                <div className="app-product__container">
                    <div className="app-product__text">
                        <h2>What we do.</h2>
                        <p>The areas that we're specialized in.</p>
                    </div>
                    <div className="app-product__items">
                        <ProductItem title={'Product Photography'} description={'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'} image={images.productItem} />
                        <ProductItem title={'Product Photography'} description={'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'} image={images.productItem} />
                        <ProductItem title={'Product Photography'} description={'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'} image={images.productItem} />
                        <ProductItem title={'Product Photography'} description={'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'} image={images.productItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}
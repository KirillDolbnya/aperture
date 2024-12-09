import "./style.scss";
import { ProductItem } from "@/components/molecules/ProductItem/ProductItem";
import { images } from "@/assets/images/index.js";

export function ProductItems() {
    const ProductsData = [
        {
            title: "Product Items",
            description: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
            image: images.productItem,
        },
        {
            title: "Product Items",
            description: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
            image: images.productItem,
        },
        {
            title: "Product Items",
            description: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
            image: images.productItem,
        },
        {
            title: "Product Items",
            description: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
            image: images.productItem,
        }
    ];

    return (
        <div className="app-product">
            <div className="container">
                <div className="app-product__container">
                    <div className="app-product__text">
                        <h2>What we do.</h2>
                        <p>The areas that we're specialized in.</p>
                    </div>
                    <div className="app-product__items">
                        { ProductsData.map(ProductData => <ProductItem title={ProductData.title} description={ProductData.description} image={ProductData.image} /> ) }
                    </div>
                </div>
            </div>
        </div>
    );
}
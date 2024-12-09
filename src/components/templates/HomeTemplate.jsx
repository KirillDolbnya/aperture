import { Header } from "../organisms/Header/Header";
import { Hero } from "../organisms/Hero/Hero";
import { ProductItems } from "../organisms/ProductItems/ProductItems";

export function HomeTemplate() {
    return (
        <>
        <Header />
        <Hero />
        <ProductItems />
        </>
    )
}

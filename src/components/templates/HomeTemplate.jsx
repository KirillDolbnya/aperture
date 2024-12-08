import { Header } from "../atoms/Header/Header";
import { Hero } from "../atoms/Hero/Hero";
import { ProductItems } from "../atoms/ProductItems/ProductItems";

export function HomeTemplate() {
    return (
        <>
        <Header />
        <Hero />
        <ProductItems />
        </>
    )
}

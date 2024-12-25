import { Header } from "@/components/organisms/Header/Header";
import { Hero } from "@/components/organisms/Hero/Hero";
import { ProductItems } from "@/components/organisms/ProductItems/ProductItems";
import { Location } from "@/components/organisms/Location/Location";
import { Clients } from "@/components/organisms/Clients/Clients";
import { Connection } from "@/components/organisms/Connection/Connection";
import { images } from "@/assets/images/index.js";

export function HomeTemplate() {
    const tagsJapan = [
        {
            title: '1"',
            type: 'time',
        },
        {
            title: 'f/16',
            type: 'social',
        },
        {
            title: '400',
            type: 'iso',
        },
        {
            title: 'Japan',
            type: 'location',
        },
    ]

    const tagsCostaRica = [
        {
            title: '1/400s',
            type: 'time',
        },
        {
            title: 'f/3,5',
            type: 'social',
        },
        {
            title: '100',
            type: 'iso',
        },
        {
            title: 'Costa Rica',
            type: 'location',
        },
    ]

    const tagsNepal = [
        {
            title: '6"',
            type: 'time',
        },
        {
            title: 'f/11',
            type: 'social',
        },
        {
            title: '800',
            type: 'iso',
        },
        {
            title: 'Nepal',
            type: 'location',
        },
    ]

    return (
        <>
        <Header />
        <Hero />
        <ProductItems />
        <Location title="Sunset at Mount Fuji" subtitle="Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non." image={images.app_location} tagsData={tagsJapan} />
        <Location title="Monstera Leafs" subtitle="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt." image={images.costarica} tagsData={tagsCostaRica} />
        <Clients title="Past clients" subtitle="Trusted by your favourite companies" />
        <Location title="Star fall in the Himalayas" subtitle="Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula." image={images.nepal} tagsData={tagsNepal} />
        <Connection title="Need help with photography or videography?" text="We're here for you!" />
        </>
    )
}

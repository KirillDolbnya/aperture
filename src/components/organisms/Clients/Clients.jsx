import "./style.scss";
import { Image } from "@/components/atoms/Image/Image";
import { images } from "@/assets/images/index";

export function Clients({title,subtitle}){
    return (
        <div className="app-clients">
            <div className="container">
                <div className="app-clients__container">
                    <div className="app-clients__text">
                        <p className="app-clients__title">{title}</p>
                        <p className="app-clients__subtitle">{subtitle}</p>
                    </div>
                    <div className="app-clients__images">
                        <Image img={images.logoClientOne}/>
                        <Image img={images.logoClientTwo}/>
                        <Image img={images.logoClientThree}/>
                        <Image img={images.logoClientFour}/>
                        <Image img={images.logoClientFive}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
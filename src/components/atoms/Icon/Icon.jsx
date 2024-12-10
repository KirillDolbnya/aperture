import "./style.scss";
import { images } from "@/assets/images/index";

export const Icon = ({ ClassName, img }) => {
    return(
        <div className={`icon ${ClassName}`}>
            <img src={images[img]} alt=""/>
        </div>
    )
}

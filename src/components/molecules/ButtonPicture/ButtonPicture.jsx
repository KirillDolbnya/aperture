import './style.scss';
import { images } from "@/assets/images/index";

export const ButtonPicture = ({children,disabled=false,onClick}) => {
    return (
        <button disabled={disabled} onClick={onClick} className="button-picture">
            <img src={images.button} alt=""/>
            {children}
        </button>
    )
}
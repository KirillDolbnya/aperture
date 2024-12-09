import { images } from "@/assets/images/index";
import { Link } from "react-router-dom";
import "./style.scss";

export const Logo = ({place}) => {
    let className;
    let image;

    if (place === 'header') {
        className = 'header__logo';
        image = images.logo;
    }else if (place === 'footer') {
        className = 'footer__logo';
        image = images.logo;
    }

    return (
        <Link className={className} to="/">
            <img src={image} alt=""/>
        </Link>
    )
}
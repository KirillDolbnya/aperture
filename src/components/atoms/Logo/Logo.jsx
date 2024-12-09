import { images } from "@/assets/images/index";
import { Link } from "react-router-dom";
import "./style.scss";

export const Logo = () => {

    return (
        <Link className="logo" to="/">
            <img src={images.logo} alt=""/>
        </Link>
    )
}
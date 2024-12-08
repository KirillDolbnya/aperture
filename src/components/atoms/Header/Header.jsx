import { images }  from '../../../assets/images/index';
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./style.scss"

export function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <div className="app-header__container">
                    <Link className="app-header__logo" to="/">
                        <img src={images.logo} alt="Логотип"/>
                    </Link>
                    <nav className="app-header__nav">
                        <ul className="app-header__nav-links">
                            <li className="app-header__nav-link">
                                <Link to="/">Business areas</Link>
                            </li>
                            <li className="app-header__nav-link">
                                <Link to="/">Featured images</Link>
                            </li>
                            <li className="app-header__nav-link">
                                <Link to="/">Gear cage</Link>
                            </li>
                            <li className="app-header__nav-link">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                        <Button classname="app-header__button">
                            Get template
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
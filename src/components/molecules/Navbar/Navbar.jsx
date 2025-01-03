import "./style.scss";
import { Button } from "@/components/atoms/Button/Button";
import { Link } from "react-router-dom";

export function Navbar({className, links, disabled}) {

    return (
        <nav className="navbar-wrap">
            <ul className={className}>
                {
                    links.map(link =>
                        <li className="navbar-item">
                            <Link to={`/${link}`}>{link.name}</Link>
                        </li>
                    )
                }
            </ul>

            <Button onClick={(e) => e.preventDefault()} disable={disabled}>
                Get template
            </Button>
        </nav>
    );
}
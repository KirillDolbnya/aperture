import "./style.scss";
import { Button } from "@/components/atoms/Button/Button";
import { Link } from "react-router-dom";

export function Navbar() {
    const links = [
        { name: 'Business areas' },
        { name: 'Featured images' },
        { name: 'Gear cage' },
        { name: 'Contact' },
    ];

    return (
        <nav className="navbar-wrap">
            <ul className="navbar">
                {
                    links.map(link =>
                        <li className="navbar-item">
                            <Link to={`/${link}`}>{link.name}</Link>
                        </li>
                    )
                }
            </ul>

            <Button onClick={(e) => e.preventDefault()}>
                Get template
            </Button>
        </nav>
    );
}
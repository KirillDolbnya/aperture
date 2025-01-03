import { Link } from "react-router-dom";

export const Social = ({icon,link,className}) => {
    return (
        <Link to={link} className={className}>
            {icon}
        </Link>
    )
}
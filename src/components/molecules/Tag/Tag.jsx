import "./style.scss";
import { Icon } from "@/components/atoms/Icon/Icon";

export function Tag({title,type}){
    return(
        <div className="tag">
            <Icon ClassName={type} img={type} />
            <p>{title}</p>
        </div>
    )
}
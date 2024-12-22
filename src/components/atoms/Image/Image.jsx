import "./style.scss";

export const Image = ({img}) => {
    return (
        <div className="image">
            <img src={img} alt=""/>
        </div>
    );
}
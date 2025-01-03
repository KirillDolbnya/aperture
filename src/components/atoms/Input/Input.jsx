import './style.scss';

export const Input = ({type,placeholder,className,disable}) => {
    return (
        <input type={type} placeholder={placeholder} className={className} disabled={disable} />
    )
}
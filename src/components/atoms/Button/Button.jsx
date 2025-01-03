import './style.scss';

export const Button = ({children,onClick,className,disable}) => {

    return (
        <button className={className + ` button`} onClick={onClick} disabled={disable}>
            {children}
        </button>
    )
}
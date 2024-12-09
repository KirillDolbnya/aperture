import './style.scss';

export const Button = ({children,onClick,disable = false}) => {

    return (
        <button className={`button`} disabled={disable} onClick={onClick}>
            {children}
        </button>
    )
}
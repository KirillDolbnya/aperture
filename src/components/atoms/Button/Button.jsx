import './style.scss';

export const Button = ({children, classname}) => {
    return (
        <button className={classname}>
            {children}
        </button>
    )
}
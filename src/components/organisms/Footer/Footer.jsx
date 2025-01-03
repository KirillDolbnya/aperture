import "./style.scss";
import { Navbar } from "@/components/molecules/Navbar/Navbar";
import { Logo } from  "@/components/atoms/Logo/Logo";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button/Button";
import { Social } from "@/components/atoms/Social/Social";

export function Footer() {
    const areasLinks = [
        { name: 'Product Photography' },
        { name: 'Architecture Photography' },
        { name: 'Drone Photography' },
        { name: 'Wildlife Photography' },
    ];

    const pagesLinks = [
        { name: 'Gear cage' },
        { name: 'Featured images' },
        { name: 'Contact' },
        { name: 'Style guide' },
        { name: 'Instructions' },
        { name: 'Changelog' },
    ];

    const socialIcons = [
        {
            icon: <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 2.55654C23.1169 2.94873 22.168 3.21203 21.1724 3.3327C22.1899 2.72384 22.9688 1.75844 23.3363 0.609283C22.3846 1.17426 21.3288 1.58291 20.2098 1.80506C19.313 0.84789 18.0322 0.25 16.6171 0.25C13.8965 0.25 11.6915 2.45232 11.6915 5.173C11.6915 5.5597 11.7353 5.93544 11.8176 6.29473C7.72575 6.08903 4.09736 4.1308 1.67021 1.14958C1.24786 1.87637 1.00377 2.72384 1.00377 3.62616C1.00377 5.33481 1.87316 6.84051 3.19232 7.72363C2.38601 7.69895 1.62633 7.47679 0.962633 7.10654V7.16962C0.962633 9.5557 2.66027 11.5441 4.9119 11.9966C4.50051 12.1091 4.06445 12.1694 3.61467 12.1694C3.29654 12.1694 2.98937 12.1392 2.69044 12.0816C3.31574 14.0371 5.13404 15.4605 7.28694 15.5017C5.60302 16.8209 3.48303 17.608 1.17381 17.608C0.77614 17.608 0.386699 17.5861 0 17.5395C2.18032 18.9354 4.76654 19.75 7.54748 19.75C16.6034 19.75 21.5564 12.2489 21.5564 5.74346C21.5564 5.52954 21.5509 5.31835 21.5427 5.10717C22.5053 4.41055 23.3418 3.54388 24 2.55654Z"
                    fill="#C0C0C0"/>
            </svg>,
            link: '#'
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 5.76825C8.5638 5.76825 5.76825 8.5638 5.76825 12C5.76825 15.4362 8.5638 18.2293 12 18.2293C15.4362 18.2293 18.2293 15.4338 18.2293 12C18.2317 8.5638 15.4362 5.76825 12 5.76825ZM12 15.8536C9.87422 15.8536 8.14641 14.1258 8.14641 12C8.14641 9.87422 9.87422 8.14641 12 8.14641C14.1258 8.14641 15.8536 9.87422 15.8536 12C15.8536 14.1258 14.1258 15.8536 12 15.8536ZM17.0936 0H6.90637C3.09889 0 0 3.09889 0 6.90637V17.0936C0 20.9011 3.09889 24 6.90637 24H17.0936C20.9011 24 24 20.9011 24 17.0936V6.90637C24 3.09889 20.9035 0 17.0936 0ZM21.6243 17.0936C21.6243 19.5907 19.5907 21.6218 17.0936 21.6218H6.90637C4.4093 21.6218 2.37816 19.5907 2.37816 17.0936V6.90637C2.37816 4.4093 4.4093 2.37816 6.90637 2.37816H17.0936C19.5907 2.37816 21.6218 4.4093 21.6218 6.90637V17.0936H21.6243ZM18.3167 3.96764C17.4188 3.96764 16.6859 4.69808 16.6859 5.59838C16.6859 6.49626 17.4164 7.22912 18.3167 7.22912C19.2146 7.22912 19.9474 6.49869 19.9474 5.59838C19.9474 4.69808 19.2146 3.96764 18.3167 3.96764Z"
                    fill="#C0C0C0"/>
            </svg>,
            link: '#'
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.625 7.7714H13.7902V5.2806C13.7902 4.34518 14.4182 4.12573 14.8582 4.12573H17.5586V0.0137159L13.8344 0C9.70352 0 8.76556 3.06686 8.76556 5.03098V7.7714H6.375V12.0069H8.76556V24H13.7929V12.0096H17.1851L17.625 7.7714Z"
                    fill="#C0C0C0"/>
            </svg>,
            link: '#'
        }
    ]

    return (
        <div className="app-footer">
            <div className="container">
                <div className="app-footer__container">

                    <div className="app-footer__top">
                        <div className="app-footer__top--left">
                            <Logo/>
                            <p>Photographers & videographers capturing the world around us.</p>
                        </div>
                        <div className="app-footer__top--right">
                            <div className="app-footer__top--right-areas app-footer__top--right-navbar">
                                <p>Business areas</p>
                                <Navbar className={'app-footer__top--right-navbar'} links={areasLinks} disabled={true}/>
                            </div>
                            <div className="app-footer__top--right-right-pages app-footer__top--right-navbar">
                                <p>Pages</p>
                                <Navbar className={'app-footer__top--right-navbar'} links={pagesLinks} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className="app-footer__center">
                        <div className="app-footer__center--text">
                            <p className="app-footer__center--text__title">Subscribe to our newsletter</p>
                            <p className="app-footer__center--text__subtitle">Read about all the things we do.</p>
                        </div>
                        <form className="app-footer__center--form">
                            <Input type="email" placeholder="Email" className={'app-footer__center--form__input'} disable={false} />
                            <Button className="app-footer__center--form__btn" onClick={(e) => e.preventDefault()} disable={false} />
                        </form>
                    </div>

                    <div className="app-footer__bottom">
                        <p className="app-footer__bottom--title">© Aperture Photography, Inc. All rights reserved.Licensing.</p>
                        <div className="app-footer__bottom--socials">
                            {socialIcons.map(socialIcon =>
                                <Social icon={socialIcon.icon} link={socialIcon.link} className={'app-footer__bottom--social'} />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
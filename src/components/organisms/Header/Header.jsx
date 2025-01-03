import { Logo } from "@/components/atoms/Logo/Logo";
import { Navbar } from "@/components/molecules/Navbar/Navbar";
import "./style.scss"

export function Header() {
    const links = [
        { name: 'Business areas' },
        { name: 'Featured images' },
        { name: 'Gear cage' },
        { name: 'Contact' },
    ];

    return (
        <header className="app-header">
            <div className="container">
                <div className="app-header__container">
                    <Logo />
                    <Navbar className={'navbar'} links={links} disabled={false}  />
                </div>
            </div>
        </header>
    )
}
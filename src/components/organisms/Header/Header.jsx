import { Logo } from "@/components/atoms/Logo/Logo";
import { Navbar } from "@/components/molecules/Navbar/Navbar";
import "./style.scss"

export function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <div className="app-header__container">
                    <Logo />
                    <Navbar />
                </div>
            </div>
        </header>
    )
}


import './styles.css';
import homeIcon from '../../assets/home-icon.svg';

export default function Header() {
    return(
        <header className="dflex ai">
            <nav className="container dflex jc">
                <div className="dflex ai">
                    <div className="mr20">
                        Início
                    </div>
                    <div className="mr20">
                        Produtos
                    </div>
                    <div className="mr20">
                        Sobre nós
                    </div>
                </div>
                <div>
                    <img src={homeIcon} alt="Home icon" />
                </div>
            </nav>
        </header>
    );
}
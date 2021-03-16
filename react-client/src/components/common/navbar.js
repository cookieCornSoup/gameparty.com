
import './navbar.css';
import logoImage from '../../assets/GPNLogo.png'
export default function Navbar(){

    const navbarClick = (e)=>{
        alert("준비중입니다.");
        e.preventDefault();
    }

    return (
        <navbar class="navbar">
            <div class="navbar-container">
                <div class="navbar-left">
                    <img src={logoImage} alt="로고 이미지" className="logo"/>
                    <ul className="menu-list">
                        <a href="" onClick={navbarClick}>
                            <li className="menu-item">Party</li>
                        </a>
                        <a href="" onClick={navbarClick}>
                            <li className="menu-item">Matching</li>
                        </a>
                        <a href="" onClick={navbarClick}>
                            <li className="menu-item">Service</li>
                        </a>
                        <a href="" onClick={navbarClick}>
                            <li className="menu-item">Download</li>
                        </a>
                        <a href="" onClick={navbarClick}>
                            <li className="menu-item">Contact</li>
                        </a>
                    </ul>
                </div>
                <div className="navbar-right">
                    
                </div>
                
            </div>
        </navbar>
    );
}
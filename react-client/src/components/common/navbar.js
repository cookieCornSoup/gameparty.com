
import './navbar.css';
import logoImage from '../../assets/GPNLogo.png'
export default function Navbar(){

    const onClickMenu = (e)=>{
        alert("현재 메뉴는 준비중입니다.");
        e.preventDefault();
    }

    return (
        <navbar class="g-navbar">
            <div class="navbar-container">
                <div class="navbar-left">
                    <img src={logoImage} alt="로고 이미지" className="logo"/>
                    <ul className="menu-list">
                        <a href="" onClick={onClickMenu}>
                            <li className="menu-item">Party</li>
                        </a>
                        <a href="" onClick={onClickMenu}>
                            <li className="menu-item">Matching</li>
                        </a>
                        <a href="" onClick={onClickMenu}>
                            <li className="menu-item">Service</li>
                        </a>
                        <a href="" onClick={onClickMenu}>
                            <li className="menu-item">Download</li>
                        </a>
                        <a href="" onClick={onClickMenu}>
                            <li className="menu-item">Contact</li>
                        </a>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="">Login</a>
                </div>
                
            </div>
        </navbar>
    );
}
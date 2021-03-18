
import './login.css';
export default function LoginPopup() {
    const onClickClose = (e)=>{
      
        e.preventDefault();
    }
    return (<>
        <div className="login-wrapper">
            <div className="login-popup">
                <button className="login-close"> X </button>

                <div class="login-title">
                    <h3>GameParty 로그인</h3>
                </div>

                <div class="login-form-wrapper">
                    <form>
                        <div class="login-form">
                            <span className="login-input-type">이메일</span>
                            <input type="text" placeholder="email" className="login-input" />
                        </div>

                        <div class="login-form">
                            <span className="login-input-type">비밀번호</span>
                            <input type="password" placeholder="password" className="login-input" />
                        </div>
 
                        <button> 로그인</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
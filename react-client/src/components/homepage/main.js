import video from '../../assets/main.mp4';
import './main.css';
export default function Main() {
    return (
      <section class ="main">
            <video autoplay="autoplay" loop muted plays-inline="true" defaultmuted id="main-video">
               <source src={video} type="video/mp4"/>
            </video>

            <div class="main-container">
                <center>
                    <h1>GameParty.com</h1>
                    <h3>Enjoy the game with many players.<br/>
                        Become the best player with manners, skills, and sense.</h3> 
                        <button> Let's Play </button>      
                </center>
            </div>
      </section>
    );
}
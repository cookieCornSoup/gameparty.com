import './user-gameboard.css';
import { Container, Row, Col } from 'react-bootstrap';
import userIcon from '../../assets/user-icon.png'
import { Button, ButtonToolbar } from 'react-bootstrap';
export function GameBoardCard(props) {
    return (<>
        <div className="g-match-card">
            <div className="match-update-date">
            방금 전
            </div>
            <div className="match-title">
            솔로랭크 골드3 원딜구함
            </div>
            <div className="match-description">
            원딜분 구해요
            </div> 
            <div className="match-bottom-wrapper">
            <Button>입장</Button>
            <h4>작성자이름</h4>
            </div> 
        </div>
    </>)

}
export function GameBoard(props) {
    return (
        <>
            <Container className="g-board-current-match-container">
                <div className="g-board-current-match">
                    <GameBoardCard></GameBoardCard>
                    <GameBoardCard></GameBoardCard>
                    <GameBoardCard></GameBoardCard> 
                    <GameBoardCard></GameBoardCard>
                    <GameBoardCard></GameBoardCard>
                    <GameBoardCard></GameBoardCard> 
                </div>
            </Container>
        </>
    )
}


export default function BoardContainer() {
    console.log("test");
    return (
        <section class="user-gameboard-wrapper">
            <Container>
                <Row>
                    <Col xs={12}>
                        <center>
                            <h1 class="gameboard-title">
                                지금 게임파티 유저들과 함께 해보세요!
                                </h1>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="gameboard-bar">
                            <div className="g-board-bar-left">
                                <img src={userIcon} alt="Img" class="g-board-bar-icon"></img>
                                <h3>유저 매치</h3>
                            </div>
                            <div className="g-board-bar-right">
                                <Button className="g-board-match-type-btn" variant="dark">일반</Button>{' '}
                                <Button className="g-board-match-type-btn" variant="dark">랭크</Button>{' '}
                                <Button className="g-board-match-type-btn" variant="dark">자유랭크</Button>{' '}
                                <Button className="g-board-match-type-btn" variant="dark">기타</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



            <GameBoard>

            </GameBoard>
        </section>);
}
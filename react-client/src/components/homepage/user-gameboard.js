import './user-gameboard.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import { Button } from 'react-bootstrap';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function secondToMatchUpdateText(matchUpdateDate){
    let matchUpdateDateText = "알 수 없음";
    if (matchUpdateDate <= 60) {
        matchUpdateDateText = "방금 전";
    }
    else {
        let minute = Math.floor((matchUpdateDate / 60));
        matchUpdateDateText = minute + "분 전";
    } 
    return matchUpdateDateText;
}


export function GameBoardCard(props) {
 

    // 초를 분으로 변환
    let matchUpdateDateText = secondToMatchUpdateText(props.matchUpdateDate);
     

    return (<>
        <div className="g-match-card">
            <div className="match-update-date">
                {matchUpdateDateText}
            </div>
            <div className="match-title">
                {props.matchTitle}
            </div>
            <div className="match-description">
                {props.matchDescription}
            </div>
            <div className="match-bottom-wrapper">
                <FontAwesomeIcon icon={faUser} className="match-user-count-ico" />
                <p className="match-user-count"> {props.matchUserCurrent}/{props.matchUserMax}명 모집됨</p>
                <Button className="match-join-btn">입장</Button>
            </div>
        </div>
    </>)

}


export function GameBoard(props) {
      
    const sampleData = [
        {
            matchUpdateDate: 30,
            matchTitle: "브실골 양학 솔랭 하실분?",
            matchDescription: "브실골 양학 솔랭하실분 본캐인증 필수 본계 최소 다이아3이상 ㄱㄱ",
            matchUserMax: 2,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 60,
            matchTitle: "5대5 내전하실분 모집함",
            matchDescription: "내전ㄱㄱ",
            matchUserMax: 10,
            matchUserCurrent: 9
        },
        {
            matchUpdateDate: 120,
            matchTitle: "일반게임 즐빡겜팟!!",
            matchDescription: "일반게임 즐빡겜 팟입니다. 20세이상 성인만 욕 안하고 즐겜하실분 오세요 마이크 필수!",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 240,
            matchTitle: "데이터 넣기 귀차나",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 412,
            matchTitle: "고길동이 꼴받게 하잔아",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 666,
            matchTitle: "안녕 딪이몬 내꿈을 꾸며 자미들래",
            matchDescription: "난니옹 딪이몬!!",
            matchUserMax: 5,
            matchUserCurrent: 1
        }
    ]

    const matchList = sampleData.map(match =><GameBoardCard matchUpdateDate = {match.matchUpdateDate} matchUserCurrent={match.matchUserCurrent} matchUserMax={match.matchUserMax} matchDescription={match.matchDescription} matchTitle={match.matchTitle}/>);
    return (
        <>
            <Container className="g-board-current-match-container">
                <div className="g-board-current-match">
                    {matchList}
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
                                <FontAwesomeIcon icon={faUser} className="g-board-match-icon" size="2x" />
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
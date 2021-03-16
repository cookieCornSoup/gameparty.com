import './user-gameboard.css';
import { Container, Row, Col } from 'react-bootstrap';
import userIcon from '../../assets/user-icon.png'
import { Button, ButtonToolbar } from 'react-bootstrap';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export function GameBoardCard(props) {
    const sampleData = [
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        },
        {
            matchUpdateDate: 30,
            matchTitle: "같이 게임하실 분?",
            matchDescription: "솔랭티어 브론즈 이상 아무나 구해요",
            matchUserMax: 5,
            matchUserCurrent: 1
        }
    ]

    let matchUpdateDateText = "알 수 없음";
    if (props.matchUpdateDate <= 30) {
        matchUpdateDateText = "방금 전";
    }
    else {
        let minute = Math.floor((props.matchUpdateDate / 60));
        matchUpdateDateText = minute + "분 전";
    }

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
    return (
        <>
            <Container className="g-board-current-match-container">
                <div className="g-board-current-match">
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>
                    <GameBoardCard matchUserMax={5} matchUserCurrent={1} matchUpdateDate={20} matchDescription="나보다 잘하는 사람 문상 1억원 드림 진짜임 믿고오셈 내가 캐리해줌" matchTitle="같이 게임할 실버유저 구함"></GameBoardCard>

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
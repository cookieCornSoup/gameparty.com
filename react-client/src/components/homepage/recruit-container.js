import './user-gameboard.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { RecruitBoard } from './recruit-board'
import { useState, useEffect } from 'react';
export default function RecruitContainer() {

    const sampleMatchTypes = [
        { match_type: 0, match_title: '일반' },
        { match_type: 1, match_title: '랭크' },
        { match_type: 2, match_title: '자유랭크' },
        { match_type: 3, match_title: '기타' },
    ];
    const [recruitArray, setRecruitArray] = useState([]);
    const [curMatchType, setCurMatchType] = useState(0);
    
    useEffect(x=>{
        console.log("현재 매치타입 : " + curMatchType);
    }, [curMatchType]);

    
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
                                {

                                    sampleMatchTypes.map(x =>
                                        <Button className="g-board-match-type-btn"
                                            variant="dark"
                                            match_type={x.match_type}
                                            match_title={x.match_title}
                                            onClick = {(e)=>{ setCurMatchType(x.match_type); e.preventDefault();}}>
                                            {x.match_title}
                                        </Button>)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <RecruitBoard />
        </section>);
}
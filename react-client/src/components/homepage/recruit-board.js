import './user-gameboard.css';
import { Container } from 'react-bootstrap';  
import { RecruitCard } from './recruit-card';
export function RecruitBoard(props) { 
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

    const matchList = sampleData.map(match => <RecruitCard matchUpdateDate = {match.matchUpdateDate} matchUserCurrent={match.matchUserCurrent} matchUserMax={match.matchUserMax} matchDescription={match.matchDescription} matchTitle={match.matchTitle}/>);
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

 
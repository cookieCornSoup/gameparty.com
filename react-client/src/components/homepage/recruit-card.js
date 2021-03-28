import './user-gameboard.css'; 
import { Button } from 'react-bootstrap';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from 'react'; 

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


export function RecruitCard(props) {
    
    const matchUpdateDateText = secondToMatchUpdateText(props.matchUpdateDate);
 
 
    const onClickJoin = (e)=>{  
        e.preventDefault();
    };
    

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
                <Button onClick = {onClickJoin} className="match-join-btn">입장</Button>
            </div>
        </div>
    </>) 
}

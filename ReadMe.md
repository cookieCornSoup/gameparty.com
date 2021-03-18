# GameParty.com
 손쉽게 게임 파티를 모집하는 서비스. 해당 프로젝트는 실제 상업용 서비스가 아니며, api서버 및 리액트 프로그래밍, AWS와도커를 이용한 배포를 및 안드로이드 프론트엔드를 학습하기위해 만든 포트폴리오 문서입니다.

# TODO LIST
 - node.js express를 기반으로한 api서버 작성 contributor : **@shlifedev**, **@gongul**
 - Android Apllication으로 프론트사이드 개발 contributor : **@cookieCornSoup**
 - 리액트를 사용한 웹 프론트엔드 및 웹서버 개발 : **@shlifedev**
 - Docker, AWS를 이용한 라이브서버 배포 contributor : **@shlifedev**
 
# Service Features & Concept
 - (api-server)같이 게임 할 파티를 손쉽게 모집해주는 서비스
 - (api-server)플레이어기능 혹은 신고기능이 있음
 - (api-server)리그오브레전드, 배틀그라운드 등 인기 게임을 지원
 - (web-socket)서로 비슷한 실력의 플레이어끼리 실시간 매칭할 수 있는 WebSocket이 있음
 - (web-socket)매칭이 될시 매칭된 유저끼리 통신가능한 채팅방이 만들어짐
 - (web-socket)`시간남으면추가` 보이스채팅 시스템 (discord처럼)
 - (web-socket)`시간남으면추가` 즐겁게 게임한 플레이어와 친구추가 & 파티플레이 가능

----------------------------------------------------
 

 ## API Develop Features
 - 소셜로그인 및 자체 서비스 로그인
 
| Service | Description |
| --- | --- |
| Google | 구글 로그인 | 
| GameParty | 자체 로그인 | 

 ### 로그인타입 및 계정연동 부가설명 
  
| Service | Description |
| --------- | -------------------------------------------------- |
| 소셜로그인 | 소셜계정 정보를 받아서 로그인. 소셜db에서 유저db를 참조 | 
| 자체로그인 | email&password를 사용한 로그인. 유저db만을 사용함. |  
| 계정연동   | 자체로그인의 경우만 사용가능하고 채널연동이 안되어있는경우 소셜로그인을 붙임. |  

 
 - 게임 계정 본인 인증 
  
| Verify-Account | Description |
| --- | --- |
| `자동인증` | 리그오브레전드 같은 경우는 api키 발급후 가능함. |
| `수동인증` | api키발급 & 유저정보 확인이 불가능한 경우 | 


 - 유저의 게임실력 자동입력 
 
| User MMR | Description |
| --- | --- |
| `자동인증` | 리그오브레전드 같은 경우는 api키 발급후 가능함. |
| `수동입력` | api키발급 & 유저정보 확인이 불가능한 경우 | 

- 필터 별 파티 메치메이킹

예시 : 리그오브 레전드

| 필터타입 | 예시 | 예시 | 예시 |
| ------- | ---- | ---- | ---- |
| 실력 | 상관없음 | 비슷한 실력대 | 최근 고승률 |
| 나이 | 상관없음 | n세이상 | n세이하 |
| 매치타입 | 일반게임 | 랭크게임 | - |

- 매너 유저 추천기능


- 필터 별 파티 메치메이킹



# Specification

| Table | Description |
| ---------     | -------------------------------------------------- |
| User          | gameparty에 종속된 유저정보 로그인시 사용  
| Social        | 채널정보  로그인시 사용   
| Profile       | 유저 프로필
| GameAccount   | 연결된 게임계정, User의 id를 외래키로 사용함.   
| UserLikes     | 유저가 유저를 추천한 정보. User id값 2개를 외래키로 사용함
| UserReports   | 유저신고 정보. 


---------------------------------------------------------------------------------------------------------------------------------------

 

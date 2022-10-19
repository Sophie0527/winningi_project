# lululab Reservation System Project

## 🔍 미리보기

> 메인 차트 통계페이지

&nbsp; &nbsp; &nbsp;<img src="https://raw.githubusercontent.com/oka7759/2sa_images/master/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B51.gif"  width="600" height="530"/>
<br/>
<br/>

> 게시판

&nbsp; &nbsp; &nbsp;<img src="https://raw.githubusercontent.com/oka7759/2sa_images/master/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B52.gif"  width="600" height="450"/>
<br/>
<br/>


## 🚩 프로젝트 개요

- **진행기간** : 10/18~ 10/20
- **과제주관** : Winningi
- **참여명단** : 정억화, 손소희
- **프로젝트 설명** : 차트페이지와 계시판을 구성하였습니다.
- **배포** : [배포 바로가기](https://team13-winningi.netlify.app/)

<br/>
<br/>

## 💻 Technlogies

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

## ⚙ 데이터 관리

- 통계와 계시판 데이터 관리 유지 를 위해 **firebase**를 사용하여 파일과 데이터를 관리 하였습니다.<br/>

 
<br/>
<br/>

## 🛠 구현사항과 해결방법

> MISSION 1

### 차트 통계 페이지
: 차트 라이브러리를 이용하여 다양한 차트 그래프 구현

#### 1-1 &nbsp; 예약 페이지로 이동하기위해 Calendar를 활용<br/>
- #### 디자인과 직관성이 좋은 ANTD 라이브러리에 차트 컴포넌트를 사용 하였습니다.
  
- #### 방문자와 게시글을 한번에 데이터로 받아와 javascript로 가공 하였습니다. <br/>
  
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
  const key = Data.flatMap(Object.keys);
  const result = [];
  const newArray = () => {
    const arrA = [];
    const arrB = [];
    for (let i = 0; i < Data.length; i++) {
      arrA.push(Object.values(Data[i])[0].visitor);
      arrB.push(Object.keys(Data[i])[0]);
    }
    arrB.reduce((_, curr, idx) => {
      result.push({ x: curr, y: arrA[idx] });
      return result;
    });
  };
  newArray();
        

     ```
    </details>
    
- #### 연령 통계 차트<br/>
  디자인적이고 심플한 원형 디자인의 그래프를 추가하였습니다.
    
<br/>
<br/>

> MISSION 2

### 게시판 페이지

#### 2-1 게시판 DB, 첨부파일 firebase로 관리 <br/>
- #### 첨부파일 firebas 스토리지에 첨부<br/>
 
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
       const firebasGet = async () => {
       setLoading(true);
       await storage
         .ref('images/' + antPics.name)
         .put(antPics)
         .then(snapshot => {
           return snapshot.ref.getDownloadURL();
         })
         .then(url => {
           setInputValue({
             ...inputValue,
             id: index + 1,
             url: url,
             date: writeTime,
           });
           setLoading(false);
         });
      };
     ```
    </details>
    
- #### 게시글 firebas 실시간데이터 베이스에 기록<br/>
 
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
     axios.put(
        `https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board/${index}.json`,
        { ...inputValue }
      )
     ```
    </details>    

- #### 게시글 작성, 수정 기능을 구현 했습니다.

    


## ⚙ 프로젝트 관리

##### 프로젝트 관리 및 설계와 관련된 사항 [내용보기!](https://www.notion.so/wecode/13-81a1c15f26404a789850d53fb87acfc3)

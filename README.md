# lululab Reservation System Project

## ๐ ๋ฏธ๋ฆฌ๋ณด๊ธฐ

> ๋ฉ์ธ ์ฐจํธ ํต๊ณํ์ด์ง

&nbsp; &nbsp; &nbsp;<img src="https://raw.githubusercontent.com/oka7759/2sa_images/master/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B51.gif"  width="600" height="530"/>
<br/>
<br/>

> ๊ฒ์ํ

&nbsp; &nbsp; &nbsp;<img src="https://raw.githubusercontent.com/oka7759/2sa_images/master/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B52.gif"  width="600" height="450"/>
<br/>
<br/>


## ๐ฉ ํ๋ก์ ํธ ๊ฐ์

- **์งํ๊ธฐ๊ฐ** : 10/18~ 10/20
- **๊ณผ์ ์ฃผ๊ด** : Winningi
- **์ฐธ์ฌ๋ช๋จ** : ์ ์ตํ, ์์ํฌ
- **ํ๋ก์ ํธ ์ค๋ช** : ์ฐจํธํ์ด์ง์ ๊ณ์ํ์ ๊ตฌ์ฑํ์์ต๋๋ค.
- **๋ฐฐํฌ** : [๋ฐฐํฌ ๋ฐ๋ก๊ฐ๊ธฐ](https://team13-winningi.netlify.app/)

<br/>
<br/>

## ๐ป Technlogies

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

## โ ๋ฐ์ดํฐ ๊ด๋ฆฌ

- ํต๊ณ์ ๊ณ์ํ ๋ฐ์ดํฐ ๊ด๋ฆฌ ์ ์ง ๋ฅผ ์ํด **firebase**๋ฅผ ์ฌ์ฉํ์ฌ ํ์ผ๊ณผ ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌ ํ์์ต๋๋ค.<br/>

 
<br/>
<br/>

## ๐  ๊ตฌํ์ฌํญ๊ณผ ํด๊ฒฐ๋ฐฉ๋ฒ

> MISSION 1

### ์ฐจํธ ํต๊ณ ํ์ด์ง
: ์ฐจํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ ๋ค์ํ ์ฐจํธ ๊ทธ๋ํ ๊ตฌํ

#### 1-1 &nbsp; ์์ฝ ํ์ด์ง๋ก ์ด๋ํ๊ธฐ์ํด Calendar๋ฅผ ํ์ฉ<br/>
- #### ๋์์ธ๊ณผ ์ง๊ด์ฑ์ด ์ข์ ANTD ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์ฐจํธ ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉ ํ์์ต๋๋ค.
  
- #### ๋ฐฉ๋ฌธ์์ ๊ฒ์๊ธ์ ํ๋ฒ์ ๋ฐ์ดํฐ๋ก ๋ฐ์์ javascript๋ก ๊ฐ๊ณต ํ์์ต๋๋ค. <br/>
  
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
    
- #### ์ฐ๋ น ํต๊ณ ์ฐจํธ<br/>
  ๋์์ธ์ ์ด๊ณ  ์ฌํํ ์ํ ๋์์ธ์ ๊ทธ๋ํ๋ฅผ ์ถ๊ฐํ์์ต๋๋ค.
    
<br/>
<br/>

> MISSION 2

### ๊ฒ์ํ ํ์ด์ง

#### 2-1 ๊ฒ์ํ DB, ์ฒจ๋ถํ์ผ firebase๋ก ๊ด๋ฆฌ <br/>
- #### ์ฒจ๋ถํ์ผ firebas ์คํ ๋ฆฌ์ง์ ์ฒจ๋ถ<br/>
 
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
    
- #### ๊ฒ์๊ธ firebas ์ค์๊ฐ๋ฐ์ดํฐ ๋ฒ ์ด์ค์ ๊ธฐ๋ก<br/>
 
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
     axios.put(
        `https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board/${index}.json`,
        { ...inputValue }
      )
     ```
    </details>    

- #### ๊ฒ์๊ธ ์์ฑ, ์์  ๊ธฐ๋ฅ์ ๊ตฌํ ํ์ต๋๋ค.

    


## โ ํ๋ก์ ํธ ๊ด๋ฆฌ

##### ํ๋ก์ ํธ ๊ด๋ฆฌ ๋ฐ ์ค๊ณ์ ๊ด๋ จ๋ ์ฌํญ [๋ด์ฉ๋ณด๊ธฐ!](https://www.notion.so/wecode/13-81a1c15f26404a789850d53fb87acfc3)

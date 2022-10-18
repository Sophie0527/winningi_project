import React from 'react';
import styled from 'styled-components';

const MainFooter = () => {
  const userData = {
    name: 'Bill',
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
    email: 'helloi@winningi.com',
    github: 'https://github.com/winningi',
    instagram: 'https://www.instagram.com/winningi/',
    twitter: 'https://twitter.com/winningi',
  };

  return (
    <Container>
      <img src={userData.image} alt="user_image" />
      <h2>{userData.name}</h2>
      <h4>{userData.email}</h4>
      <div>
        <p>
          <a href={userData.github}>GitHub</a>
        </p>
        <p>
          <a href={userData.instagram}>instagram</a>
        </p>
        <p>
          <a href={userData.twitter}>twitter</a>
        </p>
      </div>
    </Container>
  );
};
export default MainFooter;

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
  height: 250px;
  background-color: #f5f5f5;
  width: 100%;
  font-size: 30px;
  padding: 20px;
  img {
    width: 70px;
    border-radius: 50px;
    border: 1.5px solid #6395f9;
  }
  h2 {
    color: #657798;
    font-size: 25px;
    padding: 20px;
    font-weight: 600;
  }
  h4 {
    color: #657798;
    font-size: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    p {
      font-size: 13px;
      padding: 0 20px;
    }
  }
`;

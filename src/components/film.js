import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Emoji from 'react-emoji-render';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Root = styled.div`
  width: 98%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding: 5px;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  border-radius: 15px;  
`;

const Logo = styled.div`
  width: 90px;
  height: 120px;
  background-image: url(${({url}) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border-radius: 5px;
`;

const Rating = styled(Typography)`
  width: 40px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  color: white;
  background-color: green;
  position: absolute;
  top: 5px;
  left: -10px;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Name = styled.a`
  color: black;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
  p {
    font-size: 20px;
  }
`;

const Year = styled(Typography)`
  font-size: 13px;
  margin-left: 5px;
`;

const Country = styled(Typography)`
  font-size: 15px;
`;

const Smiles = styled.div`
  display: flex;
`;

const Smile = styled(Emoji)`
  font-size: 18px;
`;

function Film({ film }) {
  const genres = useSelector(state => state.genres.genres)
  const [smiles, setSmiles] = useState([]);
  useEffect(() => {
    let findSmiles = [];
    film.genres.map((genre) => {
      let res = genres.find((item) => item.genre == genre.genre);
      if (res && res.smile) {
        findSmiles.push(res.smile)
      }
    })
    setSmiles(findSmiles)
  }, [film])
  return (
    <Root>
      <Content>
        <Logo url={film.posterUrlPreview}><Rating>{film.rating}</Rating></Logo>
        <Description>
          <Info>
            <Name href={`http://www.kinopoisk.ru/film/${film.filmId}/`} target="_blank"><Typography>{film.nameRu}</Typography></Name>
            <Year>{film.year}</Year>
          </Info>
          <Info>
            <Country>
            {
              film.countries.map((country) => {
                return `${country.country} `
              })
            }
            </Country>
          </Info>
          <Smiles>
          {
            smiles.map((smile, i) => <Smile key={i} text={smile} />) 
          }
          </Smiles>
        </Description>
      </Content>
    </Root>
  );
}

export default Film;

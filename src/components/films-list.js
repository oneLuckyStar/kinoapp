import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Film from './film';
import { Typography } from '@material-ui/core';
import { getFilms } from '../actions/films';
import Emoji from 'react-emoji-render';
import CircularProgress from '@material-ui/core/CircularProgress';

const Root = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

const AllFilms = styled.div`
  width: 900px;
  @media (max-width: 900px) {
    width: 100%;
  }
  margin: 0 auto;
  background-color: white;
  padding: 20px 0;
`;

const Pages = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Page = styled(Typography)`
  font-size: 20px;
  margin-right: 25px;
  color: ${({active}) => active ===  'active' ? 'green' : 'black'};
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }
`;

const Loading = styled(CircularProgress)`
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  color: green;
  padding: 5px;
`;

const Error = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0,0,0,0.5);
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
`;

const Smile = styled(Emoji)`
  font-size: 20px;
  color: rgba(0,0,0,1);
`;

function FilmList() {
  const dispatch = useDispatch()
  const films = useSelector(state => state.films)
  const genres = useSelector(state => state.genres.selected)
  const [pages, setPages] = useState([])
  const [selectPage, setSelectPage] = useState(1)

  useEffect(() => {
    let newPages = [];
    for (let index = 1; index <= films.pagesCount; index++) {
      newPages.push(index)
    }
    setPages(newPages)
  }, [films])

  useEffect(() => {
    dispatch(getFilms(selectPage))
  }, [selectPage])

  useEffect(() => {
    setSelectPage(1)
  }, [genres])

  if (films.error) return (
    <Root>
      <Error>Ошибка</Error>
    </Root>
  );

  if (films.loading) return (
    <Root>
      <Loading />
    </Root>
  );

  if (films.films.length == 0) return (
    <Root>
      <Error>На ваше настроение еще не сняли фильмов. Будьте чуточку проще<Smile text={'🤙'} /></Error>
    </Root>
  );

  return (
    <Root>
      <AllFilms>
      {
        films.films.map((film, i) => (
          <Film key={film.filmId} film={film}></Film>
        ))
      }
      <Pages>
      {
        pages.map((page) => <Page key={page} active={page == selectPage ? 'active' : 'unactive'} onClick={() => setSelectPage(page)}>{page}</Page>)
      }
      </Pages>
      </AllFilms>
    </Root>
  );
};

export default FilmList;

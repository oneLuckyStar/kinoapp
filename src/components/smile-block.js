import  React, { useEffect } from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';
import { useDispatch, useSelector } from 'react-redux';
import { getGenresInfo, toggleSelect } from '../actions/genres';
import CircularProgress from '@material-ui/core/CircularProgress';

const Root = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: whitesmoke;
  box-shadow: 0px 1px 10px 0px #000000;
  z-index: 2;
  position: sticky;
  top: 0;
`;


const Smiles = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: whitesmoke;
  padding: 10px;
  display: flex;
  flex-shrink: 0;
  @media (min-width: 500px) {
	  justify-content: center;
	  align-items: center;
	  flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    overflow-x: scroll;
	flex-wrap: nowrap;
  }
`;

const SmileBtn = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  border: ${ ({ selected }) => selected === 'selected' ? '1px solid green' : 'none'};
  background-color: ${ ({ selected }) => selected === 'selected' ? '#ccffe4' : 'transparent'};
  border-radius: 20px;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  :last-child {
    margin-right: 0;
  };
  outline: none;
`;

const Smile = styled(Emoji)`
  font-size: 20px;
`;

const Loading = styled(CircularProgress)`
  margin: 0 auto;
  display: block;
  text-align: center;
  color: green;
  padding: 5px;
`;

function SmileBlock() {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  const films = useSelector(state => state.films)
  
  useEffect(() => {
    dispatch(getGenresInfo());
  }, [dispatch])

  if (genres.error) return (
    <Root>
      <p>Ошибка</p>
    </Root>
  );

  if (genres.loading) return (
    <Root>
      <Loading />
    </Root>
  );

  return (
    <Root>
	<Smiles>
    {
      genres.genres.map((genre) => (
        <SmileBtn
          key={genre.id}
          selected={genres.selected.indexOf(genre.id) != -1 ? 'selected' : 'unselected'}
          onClick={() => {
            if(!films.loading) {
              dispatch(toggleSelect(genre.id))
            }
          }}>
          <Smile text={genre.smile} />
        </SmileBtn>
      ))
    }
	</Smiles>
    </Root>
  );
}

export default SmileBlock;

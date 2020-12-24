import styled from 'styled-components';
import SmileBlock from './../smile-block';
import FilmList from './../films-list';
import { Typography } from '@material-ui/core';

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

const Footer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background-color: whitesmoke;
  box-shadow: 0px 1px 10px 0px #000000;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
`;

const TextFooter = styled(Typography)`
`;

function Main() {
  return (
    <Root>
      <SmileBlock />
      <FilmList />   
      <Footer>
        <TextFooter>© Абрамова Ирина, Алексеева Владлена, Копцова Елизавета</TextFooter>
      </Footer>   
    </Root>
  );
}

export default Main;

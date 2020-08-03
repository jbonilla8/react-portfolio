import React from 'react';
import styled from 'styled-components';

const ReactApps = () => (
  <ReactAppsWrapper>
    <Container>
      <h1>React Applications</h1>
      <Tiles>
        <Tile1>Tile 1</Tile1>
        <Tile2>Tile 2</Tile2>
        <Tile3>Tile 3</Tile3>
      </Tiles>
    </Container>
  </ReactAppsWrapper>
);

export default ReactApps;

const ReactAppsWrapper = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
`;

const Container = styled.div`
  grid-column: 2/3;
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: 30% 5% 30% 5% 30%;
  grid-template-rows: auto;
  height: 300px;
`;

const Tile1 = styled.div`
  grid-column: 1/2;
  border-radius: 10px;
  background-color: #b0c4d4;
`;

const Tile2 = styled.div`
  grid-column: 3/4;
  border-radius: 10px;
  background-color: #b0c4d4;
`;

const Tile3 = styled.div`
  grid-column: 5/6;
  border-radius: 10px;
  background-color: #b0c4d4;
`;

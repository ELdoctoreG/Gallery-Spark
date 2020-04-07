import React from 'react';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`


const NotFound = () => (
    <NotFoundStyled>
        <h3>No Result Found</h3>
        <p>Your search did not return any results. Please try again.</p>
    </NotFoundStyled>
)

export default NotFound;

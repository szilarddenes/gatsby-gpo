import styled from 'styled-components';
import divider2Svg from 'assets/illustrations/divider2Svg.svg';



export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const FullSvg = styled.div`
display:inline-block;
position:relative;
width: 100%;
height: 250px;
background-image: url(${divider2Svg});
background-repeat: no-repeat;
background-size:cover;

`

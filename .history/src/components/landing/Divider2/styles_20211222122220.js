import styled from 'styled-components';
import divider2Svg from 'assets/illustrations/divider2Svg.svg';
import divider2MobSvgXL from 'assets/illustrations/divider2MobSvgXL.svg';
import divider2MobSvg from 'assets/illustrations/divider2MobSvg.svg';



export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const FullSvg = styled.div`
display:inline-block;
position:relative;
width: 100%;
height: 200px;
background-image: url(${divider2Svg});

@media(max-width:959px){
background-image: url(${divider2MobSvgXL});
display:inline-block;
position:relative;
width: 100%;
background-size:contain;
height: 200px;
background-position: center center;
}

@media(max-width:600px){
  background-image: url(${divider2MobSvg});
  display:inline-block;
  position:relative;
  width: 100%;
  background-size:contain;
  height: 500px;
  background-position: center center;
  }


background-repeat: no-repeat;
background-size:cover;
background-position: center center;

`

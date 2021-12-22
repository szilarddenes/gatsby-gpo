import styled from 'styled-components';
import divider2Svg from 'assets/illustrations/divider2Svg.svg';
import divider2MobSvgXL from 'assets/illustrations/divider2MobSvgXL.svg';
import divider2MobSvg from 'assets/illustrations/divider2MobSvg.svg';



export const Wrapper = styled.div`
  @media(min-width:900px){

}
`;

export const FullSvg = styled.div`
display:inline-block;
position:relative;
width: 100%;
height: 200px;
background-image: url(${divider2Svg});

@media(max-width:900px){
background-image: url(${divider2MobSvg});
display:inline-block;
position:relative;
width: 100%;
background-size:contain;
height: 240px;
background-position: center center;
}




background-repeat: no-repeat;
background-size:contain;
background-position: center center;

`

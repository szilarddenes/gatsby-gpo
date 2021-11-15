import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, CardHead, CardBody,CardSvg, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import Card1Img from 'assets/illustrations/card1_img.webp'
import Card2Img from 'assets/illustrations/card2_img.webp'
import Card3Img from 'assets/illustrations/card3_img.webp'
import Card1Svg from 'assets/illustrations/card1_svg.svg'
import Card2Svg from 'assets/illustrations/card2_svg.svg'
import Card3Svg from 'assets/illustrations/card3_svg.svg'

const Oktatas = () => {
  const { theme } = useContext(ThemeContext);
  var nodes = [{
    "id": 1,
    "url": "url placeholder",
    "name": 'card1',
    "background":'url('+ Card1Img + ')',
    "svg":Card1Svg,
    "description": `Szeretnél 750-kg feletti utánfutót, lakókocsit, lószállítót vontatni?
    Szerezd meg nálunk B-kategóriás jogosítványod mellé az igazolást, amellyel vezethetsz akár 4250 kg össztömegű szerelvényt is!
    Mindössze pár óra vezetés és kész. 
    Jelentkezéshez csak a személyid és jogosítványod kell, orvosi és kresz vizsga nem szükséges. `,
    "stargazers": {
      "totalCount": 13,
    },
    "forkCount": 40
  },
  {
    "id": 2,
    "url": "url placeholder",
    "name": 'card2',
    "background":'url('+ Card2Img + ')',
    "svg":Card2Svg,
    "description": false,
    "stargazers": {
      "totalCount": 15,
    },
    "forkCount": false
  },
  {
    "id": 3,
    "url": "url placeholder",
    "name": 'card3',
    "background":'url('+ Card3Img + ')',
    "svg":Card3Svg,
    "description": false,
    "stargazers": {
      "totalCount": 35,
    },
    "forkCount": false
  }
]

  return (
    <Wrapper as={Container} id="oktatas" >
      <h2>Oktatás</h2>
      <Grid>

        {nodes.map(( item ) => (
          <Item key={item.id} as="a" href={item.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} 
           
            >
              <CardSvg>
              <img src={item.svg} />
              </CardSvg>
              <div style={{backgroundImage:`${item.background}`,  backgroundRepeat: 'no-repeat', backgroundSize:'contain', minHeight:'33%',height:'100%', minWidth:'100%', width:'100%'}}  >
              </div>
                


              <CardBody>
                <p>{item.description}</p>
              </CardBody>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{item.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{item.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}

      </Grid>
    <div class="card">
		<div class="card__icon" ><i class="fas fa-money-check-alt fa-4x"></i></div>
		<div class="card__title">🤑 Money</div>
		<div class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi. Fugiat veniam nam numquam doloribus, modi facilis autem. Modi eius esse perspiciatis tempore corrupti.</div>
	  </div>

    </Wrapper>
  );

};

export default Oktatas
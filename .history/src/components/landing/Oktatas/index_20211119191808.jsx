import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Container, Card, CardHead, CardBody,CardSvg, Button, ItemA, Centered } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import Card1Img from 'assets/illustrations/card1_img.webp'
import Card2Img from 'assets/illustrations/card2_img.webp'
import Card3Img from 'assets/illustrations/card3_img.webp'


const Oktatas = () => {
  const { theme } = useContext(ThemeContext);
  var nodes = [{
    "id": 1,
    "url": "url placeholder",
    "name": 'card1',
    "background":'url('+ Card1Img + ')',
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
    "description":  `Szeretnél 750-kg feletti utánfutót, lakókocsit, lószállítót vontatni?
    Szerezd meg nálunk B-kategóriás jogosítványod mellé az igazolást, amellyel vezethetsz akár 4250 kg össztömegű szerelvényt is!
    Mindössze pár óra vezetés és kész. 
    Jelentkezéshez csak a személyid és jogosítványod kell, orvosi és kresz vizsga nem szükséges. `,
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
    "description":  `Szeretnél 750-kg feletti utánfutót, lakókocsit, lószállítót vontatni?
    Szerezd meg nálunk B-kategóriás jogosítványod mellé az igazolást, amellyel vezethetsz akár 4250 kg össztömegű szerelvényt is!
    Mindössze pár óra vezetés és kész. 
    Jelentkezéshez csak a személyid és jogosítványod kell, orvosi és kresz vizsga nem szükséges. `,
    "stargazers": {
      "totalCount": 35,
    },
    "forkCount": false
  }
]

  return (
    <Wrapper as={Container} id="oktatas" >
      <h1>Oktatás</h1>
      <Grid>

        {nodes.map(( item ) => (
          <Item key={item.id}  href={item.url} target="_blank" rel="noopener noreferrer" theme={theme} as={ItemA}>
            <Card theme={theme} 
            
            >
              <CardHead style={{backgroundImage:`${item.background}`,  backgroundRepeat: 'no-repeat', backgroundSize:'contain',  minWidth:'100%', width:'100%'}} >
              </CardHead> 
            
              <CardSvg>
              <img src={item.svg} />
              </CardSvg>
              <CardBody>
                <p>{item.description}</p>
              <Centered>
              <Button as={AnchorLink} to="#contact">
              Iratkozz
              </Button>
              </Centered> 
              </CardBody>

              {/* <TitleWrap>
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
              </TitleWrap> */}
            </Card>
          </Item>
        ))}

      </Grid>



    </Wrapper>
  );

};

export default Oktatas
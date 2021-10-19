import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import Card1Img from 'assets/illustrations/card1_img.png'

const Oktatas = () => {
  const { theme } = useContext(ThemeContext);
  var nodes = [{
    "id": 1,
    "url": "url placeholder",
    "name": 'card1',
    "background": uCard1Img,
    "description": false,
    "stargazers": {
      "totalCount": 13,
    },
    "forkCount": 40
  },
  {
    "id": 2,
    "url": "url placeholder",
    "name": 'card2',
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
            <Card theme={theme} style={{backgroundImage:`${item.background}`,  backgroundRepeat: 'no-repeat'}}>
              <Content>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Content>
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
    </Wrapper>
  );

};

export default Oktatas
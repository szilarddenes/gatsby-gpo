import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  var nodes = [{
    "id": 1,
    "url": "url placeholder",
    "name": false,
    "description": false,
    "stargazers": {
      "totalCount": 25,
    },
    "forkCount": false
  },
  {
    "id": 2,
    "url": "url placeholder",
    "name": false,
    "description": false,
    "stargazers": {
      "totalCount": 15,
    },
    "forkCount": false
  },
  {
    "id": 3,
    "url": "url placeholder",
    "name": false,
    "description": false,
    "stargazers": {
      "totalCount": 35,
    },
    "forkCount": false
  }
]

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>

        {nodes.map(( item ) => (
          <Item key={item.id} as="a" href={item.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
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
                  {/* <Languages>
                    {
                      item.languages.items.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages> */}
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}

      </Grid>
    </Wrapper>
  );

};

export default Projects
import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'
import Character from './CharacterComponents/Character'
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';

// ROUTING THINGS
import {Route, Switch, Link, NavLink} from 'react-router-dom'


class App extends React.Component {

  state = {
    characters: [
    {
      id: 1,
      name: "The Cat in the Hat",
      gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
      slug: "cat",
    },
    {
      id: 2,
      name: "Horton",
      gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
      slug: "horton",
    },
    {
      id: 3,
      name: "The Lorax",
      gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
      slug: "lorax"
    },
    {
      id: 4,
      name: "Thing1",
      gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
      slug: "thing1",
    },
    {
      id: 5,
      name: "Thing2",
      gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
      slug: "thing2",
    },
   ]
  }

  decideWhichCharacterToShow = (routerProps) => {
    // the return value of this function is a JSX component
      // that JSX component gets rendered onto the page
    let theDynamicPartOfURL = routerProps.match.params.slug_variable

    let theFoundCharacter = this.state.characters.find(characterPOJO => {
      return characterPOJO.slug === theDynamicPartOfURL
    })

    if (theFoundCharacter) {
      return <Character
          name={theFoundCharacter.name}
          gif={theFoundCharacter.gif}
        />
    } else
    {
      return <NotFound/>
    }
  }





  render() {

    let arrayOfComponents = this.state.characters.map(characterPOJO => {
      return (<li key={characterPOJO.id}>
        <NavLink to={`/characters/${characterPOJO.slug}`}>
          {characterPOJO.name}
        </NavLink>
      </li>)
    })


    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                { arrayOfComponents }
              </ul>
            </aside>
        </header>


        <Switch>
          {/* WAY 3 TO RENDER A COMPONENT */}
          <Route path="/characters/:slug_variable"
            render={this.decideWhichCharacterToShow}
          />

          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>

      </div>
    );
  }
}


// WAY 1 TO RENDER A COMPONENT
// <Route path="/cat" exact component={Cat} />

//
// WAY 2 TO RENDER A COMPONENT

// <Route path="/horton" exact strict>
//   <Horton />
// </Route>
//
// <Route path="/lorax" exact>
//   <Lorax />
// </Route>
//
// <Route path="/thing1" exact>
//   <Thing1 />
// </Route>
//
// <Route path="/thing2" exact>
//   <Thing2 />
// </Route>


export default App

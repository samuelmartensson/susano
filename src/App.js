import React, { useEffect, useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Page from './components/Page';
import styled from 'styled-components';
import HomePage from './pages/HomePage';

const InnerMargin = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const GlobalContext = createContext();

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    if (!state) {
      fetch('http://localhost/headless/wordpress/wp-json/wp/v2/posts')
        .then((res) => res.json())
        .then((data) => setState(data));
    }
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state }}>
      <InnerMargin>
        <NavigationBar data={state} />
        <Route exact path="/sustest">
          <HomePage />
        </Route>
        {state &&
          state.map((item, key) => (
            <Route key={key} exact path={`/sustest/${item.slug}`}>
              <Page
                title={item.title.rendered}
                content={item.content.rendered}
                links={item.link}
              />
            </Route>
          ))}
      </InnerMargin>
    </GlobalContext.Provider>
  );
}

export default App;

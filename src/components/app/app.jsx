import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFound from 'components/404/404';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { useAppSelector } from 'hooks';
import OptionalRoute from 'components/optional-route/optional-route';

const App = () => {
  const { isDataLoaded } = useAppSelector(({ DATA }) => DATA);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/quest">
            <Route exact path=":id">
              <OptionalRoute>
                <DetailedQuest />
              </OptionalRoute>
            </Route>
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

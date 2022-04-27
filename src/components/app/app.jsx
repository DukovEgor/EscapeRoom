import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router } from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFound from 'components/404/404';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { useAppSelector } from 'hooks';
import OptionalRoute from 'components/optional-route/optional-route';
import { Routes } from 'react-router-dom';

const App = () => {
  const { isDataLoaded } = useAppSelector(({ DATA }) => DATA);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Routes>
          <Route path="/quest">
            <Route
              path=":id"
              element={
                <OptionalRoute>
                  <DetailedQuest />
                </OptionalRoute>
              }
            />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

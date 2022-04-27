import logo from 'assets/img/logo.svg';
import { useAppDispatch, useAppSelector } from 'hooks';
import { changeLink } from 'store/app-process';
import * as S from './header.styled';

const Header = () => {
  const { activeLink } = useAppSelector(({ PROCESS }) => PROCESS);

  const dispatch = useAppDispatch();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image
            src={logo}
            alt="Логотип Escape Room"
            width="134"
            height="50"
          />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={activeLink === 'quests'}
                to="/"
                onClick={() => dispatch(changeLink('quests'))}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={activeLink === 'contacts'}
                to="/contacts"
                onClick={() => dispatch(changeLink('contacts'))}
              >
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;

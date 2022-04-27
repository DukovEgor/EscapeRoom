import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useParams } from 'react-router-dom';
import { fetchOfferAction } from 'store/api-actions';
import { levelVocabulary, typeVocabulary } from 'utils/const';

const DetailedQuest = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(id));
  }, [dispatch, id]);

  const { offer } = useAppSelector(({ DATA }) => DATA);

  const { title, coverImg, level, peopleCount, type, duration, description } =
    offer;

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened((prevState) => !prevState);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={coverImg}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{typeVocabulary[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {peopleCount && peopleCount.join('-')} чел
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levelVocabulary[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal onButtonClose={onBookingBtnClick} />
        )}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

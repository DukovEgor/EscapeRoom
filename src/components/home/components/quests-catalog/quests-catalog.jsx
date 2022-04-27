import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useAppDispatch, useAppSelector } from 'hooks';
import { levelVocabulary, typeVocabulary } from 'utils/const';
import { changeTab } from 'store/app-process';
import { getFilteredOffers } from 'utils/utils';

const ICONS = [
  <IconAllQuests />,
  <IconAdventures />,
  <IconHorrors />,
  <IconMystic />,
  <IconDetective />,
  <IconScifi />,
];

const tabsArray = Object.entries(typeVocabulary);

const QuestsCatalog = () => {
  const { offers } = useAppSelector(({ DATA }) => DATA);

  const { activeTab } = useAppSelector(({ PROCESS }) => PROCESS);

  const dispatch = useAppDispatch();

  const filteredOffers = getFilteredOffers(offers.slice(), activeTab);
  return (
    <>
      <S.Tabs>
        {tabsArray.map(([key, value], idx) => (
          <S.TabItem key={key}>
            <S.TabBtn
              isActive={activeTab === key}
              onClick={() => dispatch(changeTab(key))}
            >
              {ICONS[idx]}
              <S.TabTitle>{value}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>

      <S.QuestsList>
        {filteredOffers.map((offer) => {
          const { id, title, previewImg, level, peopleCount } = offer;
          return (
            <S.QuestItem key={id}>
              <S.QuestItemLink to={`/quest/${id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt="квест Склеп"
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {peopleCount.join('-')} чел
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {levelVocabulary[level]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          );
        })}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;

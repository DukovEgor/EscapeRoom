import { useAppSelector } from 'hooks';
import { useParams } from 'react-router-dom';

export default function OptionalRoute({ children }) {
  const { id } = useParams();
  const offerId = Number(id);

  const { offers } = useAppSelector(({ DATA }) => DATA);

  return offers.some((index) => index.id === offerId) ? (
    children
  ) : (
    <Navigate to={'*'} />
  );
}

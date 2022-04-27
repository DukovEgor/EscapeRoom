import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'hooks';
import { fetchOrderAction } from 'store/api-actions';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ onButtonClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors, isDirty, isSubmitting, submitCount },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUseNativeValidation: false,
  });

  const onFormSubmit = (data) => {
    dispatch(fetchOrderAction(data));
    reset();
    navigate('/');
  };

  useEffect(() => {
    toast.warning(errors.name?.message);
    toast.warning(errors.phone?.message);
    toast.warning(errors.peopleCount?.message);
    toast.warning(errors.isLegal?.message);
  }, [
    errors.bookingname?.message,
    errors.isLegal,
    errors.name,
    errors.peopleCount,
    errors.phone,
    submitCount,
  ]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onButtonClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="bookingname"
              name="bookingname"
              placeholder="Имя"
              {...register('name', {
                required: '"Имя" это обязательное поле',
                pattern: {
                  value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                  message:
                    '"Имя" не может состоять из цифр и специальных символов',
                },
              })}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              {...register('phone', {
                required: '"Телефон" это обязательное поле',
                pattern: {
                  value: /^\d+$/,
                  message:
                    'Пожалуйста, проверьте правильность введенного номера телефона',
                },
                maxLength: {
                  value: 10,
                  message:
                    'Укажите номер тефона в формате: 925 260 26 06 без пробелов',
                },
                minLength: {
                  value: 10,
                  message:
                    'Укажите номер тефона в формате: 925 260 26 06 без пробелов',
                },
              })}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              {...register('peopleCount', {
                required: '"Количество участников" это обязательное поле',
              })}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={!isDirty || isSubmitting}>
            Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              {...register('isLegal', {
                required:
                  'Пожалуйста, ознакомьтесь с правовыми документами и поставьте галочку перед тем, как продолжить',
              })}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;

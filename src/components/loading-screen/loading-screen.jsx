import ReactLoading from 'react-loading';

export default function LoadingScreen() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'inherit',
      }}
    >
      <ReactLoading type={'spinningBubbles'} color={'#fff'} />
      <p className={'places__found'}>Loading...</p>
    </div>
  );
}

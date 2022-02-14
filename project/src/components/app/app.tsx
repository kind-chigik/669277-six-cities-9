import Main from '../main/main';

type OfferProps = {
  offersCount: number;
}

function App(props: OfferProps): JSX.Element {
  return <Main offersCount = {props.offersCount} />;
}

export default App;

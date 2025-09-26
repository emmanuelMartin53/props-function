import Maman from "./Maman";

const Toto = ({name, leState, responseToto}) => { // {props.name, props.leState, props.responseToto}

  console.log(leState);

  if (leState.messageMaman !== null) {
    <button>Réponse de Toto</button>
  }
  <button disabled>Réponse de Toto</button>


  const btnResponseToto = (leState.messageMaman !== null) ?
    (<button onClick={responseToto}>Réponse de Toto</button>) :
    (<button disabled>Réponse de Toto</button>)


  return (
    <div>
     <h2>{name}</h2>
    {btnResponseToto}
    <p>{leState.messageToto}</p>
    </div>
  )
}

export default Toto;

const Toto = ({name, leState, reponseTotoProps})=> {
  // console.log(name, leState)
  return (
    <div>
        <h2>{name}</h2>
        <button
            // Compléter cette section
            disabled={leState.disabled}
            onClick={() => reponseTotoProps("Non je n'ai pas envie, je veux regarder la télé")}
        >Réponse</button>

        <p>{leState.messageToto}</p>
    </div>
  )
}

export default Toto

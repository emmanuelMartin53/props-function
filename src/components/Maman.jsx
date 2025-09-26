import { Component } from "react";
import Toto from "./Toto";


class Maman extends Component {

  state = {
    messageMaman: null,
    messageToto: null
  }

  ordreMaman = () => {
    this.setState({
      messageMaman: "Va ranger ta chambre !"
    })
  }

  reponseToto = () => {
    this.setState({
      messageToto: "Oui j'y vais"
    })
  }

  render () {
    return(
      <div>
        <h1>Maman</h1>
        <button onClick={this.ordreMaman}>ordre de la mère</button>
        <p>{this.state.messageMaman}</p>
        <hr />
        <Toto name="Toto" leState={this.state} responseToto={this.reponseToto}/>
      </div>
    );
  }
}

export default Maman;

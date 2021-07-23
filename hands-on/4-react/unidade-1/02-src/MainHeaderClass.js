import logo from './logo.svg';
import { Component } from "react";

export class MainHeaderClass extends Component {
    state = {
        count: 0
    }

    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{this.props.message}</h1>
                <p>Você clicou {this.state.count} vezes no botão.</p>
                <button onClick = {() => this.setState({count: this.state.count + 1})}>Incrementar</button>
            </header>
        )
    }
}
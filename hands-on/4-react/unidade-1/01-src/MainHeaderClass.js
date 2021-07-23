import logo from './logo.svg';
import { Component } from "react";

export class MainHeaderClass extends Component {
    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{this.props.message}</h1>
            </header>
        )
    }
}
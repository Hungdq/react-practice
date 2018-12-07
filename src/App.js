import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Name1', age: 21 },
            { name: 'Name2', age: 22 },
            { name: 'Name3', age: 23 }
        ]
    }

    switchNameHandler = (newName) => {
        this.setState( {
            persons: [
                { name: newName, age: 231 },
                { name: 'Nam13123e2', age: 242 },
                { name: 'Nam23e3', age: 253 }
            ]
        } )
    }

    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'HEHEHEHE', age: 231 },
                { name: event.target.value, age: 242 },
                { name: 'Nam23e3', age: 253 }
            ]
        } )
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div className="App">
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('KAKAKAKA')}>CLICK HERE</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'HUNGDQ')}>
                    TETETETE
                </Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].name}
                    changed={this.nameChangedHandler}>
                    xxxx
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].name}>
                </Person>
            </div>
        );
    }
}

export default App;

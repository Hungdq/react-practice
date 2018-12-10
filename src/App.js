import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Name1', age: 21 },
            { id: 2, name: 'Name2', age: 22 },
            { id: 3, name: 'Name3', age: 23 }
        ],
        showPersons: false
    }

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const persons = [...this.state.persons];
        persons[personIndex].name = event.target.value;

        this.setState({
            persons: persons
        });

        console.log(persons);
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = this.state.persons.map((p, index) => {
                return <Person
                    changed={(event) => this.changeNameHandler(event, p.id)}
                    name={p.name}
                    age={p.age}
                    key={index}
                    click={() => this.deletePersonHandler(index)} />
            });
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;

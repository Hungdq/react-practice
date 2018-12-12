import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);

        this.state = {
            persons: [
                { id: 1, name: 'Name1', age: 21 },
                { id: 2, name: 'Name2', age: 22 },
                { id: 3, name: 'Name3', age: 23 }
            ],
            showPersons: false
        }
    }

    componentWillMount() {
        console.log('[App.js] Inside ComponentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] inside ComponentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside ShouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[UPDATE App.js] Inside ComponentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[UPDATE App.js] Inside ComponentDidUpdate', prevProps, prevState, snapshot);
    }

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
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
        console.log('[App.js] inside render()');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.changeNameHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside ComponentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside ComponentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('[UPDATE Persons.js] Inside ComponentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside ShouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[UPDATE Persons.js] Inside ComponentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[UPDATE Persons.js] Inside ComponentDidUpdate', prevProps, prevState, snapshot);
    }

    render () {
        console.log('[Persons.js] inside render');

        return this.props.persons.map((person, index) => {
            return <Person
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)} />
        });
    }
}

export default Persons

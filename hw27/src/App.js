import React, {Component, Fragment} from 'react';
import ToDo from './components/ToDo/ToDo';

class App extends Component {
    state = {
        list: [
            {
                id: 1,
                title: `Task 1`
            },
            {
                id: 2,
                title: `Task 2`
            },
            {
                id: 3,
                title: `Task 3`
            },
            {
                id: 4,
                title: `Task 4`
            }
        ]
    }

    render() {
        return (
            <div>
                <ToDo list={this.state.list}/>
            </div>)
    }
}

export default App;
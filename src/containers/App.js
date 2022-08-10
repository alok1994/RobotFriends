import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
//import { robot } from "./robots";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {this.setState({ robot: users})})
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    } 
    render () {
        const filterRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })
        if (this.state.robot.length === 0 ){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robot={filterRobot}/> 
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
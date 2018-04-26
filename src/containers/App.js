import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ? //if/else !===0
			<h1>Loading Components....</h1> :
		(	
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots: users})
			})
		;//fetch
	}
	
}

export default App;
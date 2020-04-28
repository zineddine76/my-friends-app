import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';
import Scroll from './Scroll';
import './App.css'

const state = {
	friends: friends,
	searchfield: ''
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			friends: [],
			searchfield: ''
		}
	}

	componentDidMount() {

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({ friends: users })});
	
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}, () => {		
		console.log(friends.filter(friend => friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))); 
		}

		);

		

	}

	render () {
       
       const filterfriends = this.state.friends.filter(friend => {
			return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

       if (this.state.friends.length ===0){
       	return <h1> Loading </h1>
       	}
       	else {
       		return(
       	
          <div className='tc'>
		  <h1> Zino Friends </h1>
		  <SearchBox searchChange={this.onSearchChange}/>
		  <Scroll>
		  <CardList friends={filterfriends}/>
		  </Scroll>
		  </div>
		

		)
		}
		
	}
	
}

export default App;
import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			if (this.props.onEnter) {
				this.props.onEnter(this.input.value);
			}
		}
	}

	render() {
		return (
			<div style={SearchBar.styles.div}>
				<h3>Search for an Artist</h3>
				<input
					ref={(node) => { this.input = node; }}
					style={SearchBar.styles.input}
					onKeyPress={this.handleKeyPress}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onEnter: React.PropTypes.func,
};

// class SearchBar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			searchTerm: '',
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.handleKeyPress = this.handleKeyPress.bind(this);
// 	}
//
// 	handleInputChange(event) {
// 		// console.log(event.target.value);
// 		this.setState({
// 			searchTerm: event.target.value,
// 		});
// 	}
//
// 	handleKeyPress(event) {
// 		if (event.key === 'Enter') {
// 			this.props.getAlbums(this.state.searchTerm);
// 		}
// 	}
//
// 	render() {
// 		return (
// 			<div style={SearchBar.styles.div}>
// 				<h3>Search for an Artist</h3>
// 				<input
// 					onChange={this.handleInputChange}
// 					onKeyPress={this.handleKeyPress}
// 					style={SearchBar.styles.input}
// 				/>
// 			</div>
// 		);
// 	}
// }
//
// SearchBar.propTypes = {
// 	getAlbums: React.PropTypes.func.isRequired,
// };

SearchBar.styles = {
	div: {
		margin: 30,
		textAlign: 'center',
	},
	input: {
		width: '60%',
	},
};

export default SearchBar;

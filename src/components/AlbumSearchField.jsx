import React from 'react';
import SearchBar from '../components/SearchBar';
import * as musicApi from '../api/musicApi';

class AlbumSearchField extends React.Component {
	constructor(props) {
		super(props);

		this.searchAlbums = this.searchAlbums.bind(this);
	}

	searchAlbums(searchTerm) {
		const { store } = this.context;
		musicApi.getAlbums(searchTerm, (payload) => {
			store.dispatch({
				type: 'UPDATE_ALBUMS',
				albums: payload.albums.items,
			});
		});
	}

	render() {
		return (
			<SearchBar onEnter={this.searchAlbums} />
		);
	}
}

AlbumSearchField.contextTypes = {
	store: React.PropTypes.object,
};

// const mapStateToProps = (state) => ({
//
// });
//
// const mapDispatchToProps = (dispatch) => ({
// 	onEnter: (searchTerm) => {
// 		dispatch({
// 			type: 'SEARCH_ALBUMS',
// 			searchTerm,
// 		});
// 	}
// });
//
// const AlbumSearchField = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(SearchBar);

export default AlbumSearchField;

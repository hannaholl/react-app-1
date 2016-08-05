import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import AlbumSearchField from './components/AlbumSearchField';
import AlbumList from './components/AlbumList';
// import TrackList from './components/TrackList';
// import * as musicApi from './api/musicApi';

const App = () => (
	<div>
		<AlbumSearchField />
		<AlbumList />
	</div>
);

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('container')
);

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = ({
// 			albums: [],
// 			tracks: [],
// 			currentPreview: null,
// 		});
// 		this.getAlbums = this.getAlbums.bind(this);
// 		this.processAlbums = this.processAlbums.bind(this);
// 		this.getTracks = this.getTracks.bind(this);
// 		this.processTracks = this.processTracks.bind(this);
// 		this.playPreview = this.playPreview.bind(this);
// 	}
//
// 	getAlbums(artist) {
// 		musicApi.getAlbums(artist, this.processAlbums);
// 	}
//
// 	getTracks(albumId) {
// 		musicApi.getTracks(albumId, this.processTracks);
// 	}
//
// 	processAlbums(payload) {
// 		this.setState({
// 			albums: payload.albums.items,
// 			tracks: [],
// 		});
// 	}
//
// 	processTracks(payload) {
// 		this.setState({
// 			tracks: payload.tracks.items,
// 		});
// 	}
//
// 	playPreview(previewUrl) {
// 		if (this.state.currentPreview) {
// 			const curAudioObject = this.state.currentPreview;
// 			curAudioObject.pause();
// 		}
//
// 		const newAudioObject = new Audio(previewUrl);
// 		this.setState({
// 			currentPreview: newAudioObject,
// 		});
//
// 		newAudioObject.play();
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<p>Hi</p>
// 				<SearchBar getAlbums={this.getAlbums} />
// 				<AlbumList albums={this.state.albums} getTracks={this.getTracks} />
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('container')
// );

// <TrackList tracks={this.state.tracks} playPreview={this.playPreview} />

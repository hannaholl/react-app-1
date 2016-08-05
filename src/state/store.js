import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
	console.log('action', action);
	switch (action.type) {
		case 'UPDATE_ALBUMS':
			return {
				...state,
				albums: action.albums
			};
		default:
			return state;
	}
};

export default function configureStore() {
	const store = createStore(
		rootReducer
	);

	return store;
}

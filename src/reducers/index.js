import { combineReducers } from 'redux';
import BookReducer from './book.reducer';
import ActiveBook from './active-book.reducer';

const rootReducer = combineReducers({
	books: BookReducer,
	activeBook: ActiveBook
});

export default rootReducer;
import { combineReducers } from 'redux'
import editorReducer from './Editor/editorReducer';

export default combineReducers({
    editor: editorReducer
})
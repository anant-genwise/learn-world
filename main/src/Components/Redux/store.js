import { applyMiddleware } from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import {composeWithDevTools} from "redux-devtools-extension"

export const store = configureStore( {reducer}, composeWithDevTools(applyMiddleware(thunk)))

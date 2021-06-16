import { combineReducers } from 'redux';
import {connectRouter, RouterState} from 'connected-react-router';
import { History } from 'history';
import {State} from "./types";


export default (history: History) =>
    combineReducers<State>({
        main: function counter(state = { name: 'Yandex' }, action) {
            return state;
        },
        router: connectRouter(history),
    });

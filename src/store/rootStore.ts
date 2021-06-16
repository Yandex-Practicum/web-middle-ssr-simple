import { createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import createRootReducer from './rootReducer';
import {State} from "./types";

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export function configureStore(initialState: State, url = '/') {
    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();

    const store = createStore(
        createRootReducer(history),
        initialState,
    );

    return { store, history };
}

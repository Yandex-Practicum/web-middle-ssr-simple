import {State} from "./types";
import {RouterState} from "connected-react-router";

export const getInitialState = (pathname: string = '/'): State => {
    return {
        main: {
            name: 'Yandex'
        },
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};

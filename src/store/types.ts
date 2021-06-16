import {RouterState} from "connected-react-router";

export interface State {
    main: {
        name: string;
    };
    router: RouterState;
}

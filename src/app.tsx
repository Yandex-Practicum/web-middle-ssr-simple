import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";

const Contacts: React.FC = () => <div>Contacts component</div>

const App: React.FC = () => {
    // Попробуйте открыть приложение с разными значениями роутера и проверьте ответ от SSR-сервера
    return (<div>
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/contacts" component={Contacts} />
        </Switch>
    </div>);
};

export default App;

import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";

const Contacts: React.FC = () => <div>Contacts component</div>

const App: React.FC = () => {
    return (<div>
        <Switch>
            // Попробуйте открывать приложения с разными значениями роутера и проверьте ответ от SSR сервера
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/contacts" component={Contacts} />
        </Switch>
    </div>);
};

export default App;

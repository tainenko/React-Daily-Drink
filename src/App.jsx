import React from 'react';
import {Provider} from "react-redux";
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import store from "./components/store";
import DrinkListPage from "./components/drinklist";
import {DrinkDetailPage} from "./components/drinkdetail"

const history = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route exact path="/" component={DrinkListPage}/>
                    <Route path="/detail" component={DrinkDetailPage}/>
                </Router>
            </Provider>

        )
    }
};
export {history};
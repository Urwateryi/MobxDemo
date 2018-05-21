import React, { PureComponent } from 'react';
import TestPage from "./app/TestPage";
import { Provider } from 'mobx-react'
import stores from './app/stores'

export default class App extends PureComponent {
    render() {
        return (
            <Provider rootStore={stores}>
                <TestPage/>
            </Provider>
        );
    }
}

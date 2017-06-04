import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

window.addEventListener('message', (event) => {
    ReactDOM.render(
        <AppContainer>
            <App message={event.data.test} />
        </AppContainer>,
        document.getElementById('root')
    );
});

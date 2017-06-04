import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 className={style.h1}>{this.props.message}</h1>
                <h2>LOL</h2>
            </div>
        );
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired,
};

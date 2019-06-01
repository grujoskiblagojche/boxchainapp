import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export const AppContext = React.createContext();


export default class Provider extends Component {
    state = {
        token: '',
        saveToken: async () => {
            try {
                const resp = await AsyncStorage.setItem('userToken', 'abc');
                return resp;
            }
            catch (error) {
                this.setState({ error })
            }

        },
        removeToken: async () => {
            try {
                const resp = await AsyncStorage.removeItem('userToken');
                return resp
            }
            catch (error) {
                this.setState({ error })
            }
        },
        getToken: async () => {
            try {
                const resp = await AsyncStorage.getItem('userToken');
                return resp;
            }
            catch (error) {
                this.setState({ error })
            }
        }

    }

    componentWillMount() {
        AsyncStorage.getItem('userToken')
            .then((token) => {
                this.setState({ token })
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
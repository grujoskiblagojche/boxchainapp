import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Key from '../components/Key';

export default class CreateBox extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        key: null,
        keys: []
    } // state

    updateInputState = value => {
        this.setState({
            key: value
        })
    }

    createBox = () => {

    }

    addKey = () => {
        // if ((this.state.key.trim() === '') || (this.state.keys.length === 6) ) {
        if (this.state.key.trim() === null) {
            return;
        }
        this.setState(prevState => {
            return {
                key: null,
                keys: prevState.keys.concat(prevState.key)
            }
        })
    }

    removeKey = index => {
        this.setState(prevState => {
            return {
                keys: prevState.keys.filter((key, i) => {
                    return i !== index;
                })
            }
        })
    }

    render() {
        const keysOutput = this.state.keys.map((key, index) => (
            <Key secret={ key } key={ index } onKeyDelete={ () => this.removeKey(index) } />
        ));

        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Create Box' } />

                    <View style={ [grid.flex_column, ui.t_60, ui.cockpit] }>
                        <Text style={ [typo.info, ui.b_15] }>Make sure you use correct keys</Text>
                        <Input
                            value={ this.state.key }
                            onChangeText={ (value) => this.updateInputState(value) }
                            placeholder={ 'key' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            {
                                (this.state.keys.length > 2) ?
                                <Button
                                    onPressHandler={ this.createBox }
                                    action={ true }
                                    iconName={ 'check' } 
                                    iconColor={ '#ffffff' } /> : null }
                            
                            {
                                (this.state.keys.length < 6) ?
                                <Button
                                    onPressHandler={ this.addKey }
                                    iconName={ 'arrow-right' } 
                                    iconColor={ '#ffffff' } /> : null }
                        </View>
                    </View>

                    <View style={ [grid.flex_column, ui.t_15] }>
                        { keysOutput }
                    </View>

                </View>
            </View>
        )
    }

} // CreateBox
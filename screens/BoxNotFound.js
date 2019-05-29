import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// components
import Header from '../components/Header';

export default class BoxNotFound extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Oops!' } />

                    <View style={ [grid.flex_column, ui.t_60] }>
                        <Text style={ [typo.subtitle, ui.b_15] }>Box do not exist.</Text>
                        <Text style={ typo.text }>Make sure you use correct keys.</Text>
                    </View>

                    <View style={ [grid.flex_row, grid.flex_row_v_center, grid.spaceBetween, ui.appFooter] }>
                        <TouchableOpacity>
                            <Text style={ [typo.action] }>Search again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={ [typo.action] }>Create new box</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // BoxNotFound
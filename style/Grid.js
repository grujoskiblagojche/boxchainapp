import { StyleSheet } from 'react-native';

const grid = StyleSheet.create({
    app: { // app grid fix
        flex: 1,
        justifyContent: 'center'
    },
    appWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '80%'
    },
    container_full: {
        flex: 1,
        width: '95%'
    },
    flex_row: {
        flexDirection: 'row'
    },
    flex_row_end: {
        justifyContent: 'flex-end'
    },
    flex_row_v_center: {
        alignItems: 'center'
    },
    flex_row_h_center: {
        justifyContent: 'center'
    },
    flex_column: {
        flex: 1
    },
    flex_column_v_center: {
        justifyContent: 'center'
    },
    flex_column_h_center: {
        alignItems: 'center'
    },
    flex_abs_center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    }
})

export default grid;
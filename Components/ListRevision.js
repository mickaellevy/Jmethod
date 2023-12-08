import React from 'react'
import { StyleSheet, View} from 'react-native';


class ListRevision extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
    
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default ListRevision

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'red',
    },
  });

  
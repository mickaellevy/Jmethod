import React from 'react'
import { StyleSheet, View, Text} from 'react-native';


class emptyList extends React.Component {

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

export default emptyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'blue',
    },
  });

  
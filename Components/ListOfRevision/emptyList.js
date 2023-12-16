import React from 'react'
import { StyleSheet, View, Text} from 'react-native';


class EmptyList extends React.Component {

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

export default EmptyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'blue',
    },
  });

  
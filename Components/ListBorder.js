import React from 'react'
import { StyleSheet, SafeAreaView, View, Text} from 'react-native';

import Header from './Header'

class ListBorder extends React.Component {

    render() {
    
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <Header/>
                </View>
                <View style={styles.ListBox}>
                    <Text>List</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default ListBorder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#404E7C',
    },
    headerBox: {
        flex:1,
        width:'100%',
        backgroundColor :'#404E7C',
    },
    ListBox: {
        flex:9,
        width:'100%',
        backgroundColor :'white',
    }
  });

  
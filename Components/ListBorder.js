import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Touchable, TouchableOpacity} from 'react-native';

import Header from './Header'
import ListRevision from './ListRevision';

class ListBorder extends React.Component {

    constructor(props){
        super(props)
        
    }

    _alterRevision = () =>{
        this.props.navigation.navigate('alterRevision', {id : null})
    }

    render() {
    
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox} >
                    <Header headerText={'RÉVISIONS'} headerSymbol={'plus'} navOption ={this._alterRevision}/>
                </View>
                <View style={styles.ListBox}>
                    <ListRevision/>
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
        backgroundColor : '#71B48D',
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

  
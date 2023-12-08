import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Touchable, TouchableOpacity} from 'react-native';

import Header from './Header'
import ListRevision from './ListOfRevision/ListRevision';
import emptyList from './ListOfRevision/emptyList';

import { getAllRevision } from '../Realm/realmUtils';

class ListBorder extends React.Component {

    constructor(props){
        super(props)
        this.revisions = getAllRevision();
    }

    _alterRevision = () =>{
        this.props.navigation.navigate('alterRevision', {id : null})
    }

    _displayList(){
        if (this.revisions.length==0){
            return <emptyList/>
        }else{
            return <ListRevision revisions={this.revisions}/>
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox} >
                    <Header headerText={'RÉVISIONS'} headerSymbol={'plus'} navOption ={this._alterRevision}/>
                </View>
                <View style={styles.ListBox}>
                    {this._displayList()}
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

  
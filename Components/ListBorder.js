import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Touchable, TouchableOpacity} from 'react-native';

import Header from './Header'
import ListRevision from './ListOfRevision/ListRevision';
import emptyList from './ListOfRevision/emptyList';

import { getAllRevision } from '../Realm/realmUtils';

class ListBorder extends React.Component {

    constructor(props){
        super(props)
        this.revisions = this._cleanRevision(getAllRevision())
    }

    _alterRevision = () =>{
        this.props.navigation.navigate('alterRevision', {id : null})
    }

    _cleanRevision(listToClean){
        let today = new Date()
        let newListToClean = listToClean.map(item => ({ ...item })); // Create a new array with copies of items
        for (let revision in newListToClean) {
            newListToClean[revision]['revisionList'] = JSON.parse(newListToClean[revision]['revisionList']);
            let dateJ0 = new Date(newListToClean[revision]['dateJ0'])
            let nextRevIn = Infinity
            for (let revisionDay in Object.keys(newListToClean[revision]['revisionList'])){
                let key = Object.keys(newListToClean[revision]['revisionList'])[revisionDay]
                if (newListToClean[revision]['revisionList'][key] == false){
                    dateOfRev = this._dateAddDays(parseInt(key), dateJ0);
                    thisRevIn = Math.floor((dateOfRev-today)/(1000*3600*24))+1
                    if (thisRevIn < nextRevIn){
                        nextRevIn = thisRevIn
                    }
                }
            }
            newListToClean[revision]['nextRevIn'] = nextRevIn
        }
        console.log(newListToClean)
        return newListToClean;
    }

    _dateAddDays(a, b) {
        var d = new Date(b || new Date());
        d.setDate(d.getDate() + a);
        return d;
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

  
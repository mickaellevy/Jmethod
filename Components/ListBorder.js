import React from 'react'
import { StyleSheet, SafeAreaView, View} from 'react-native';

import Header from './Header';
import ListRevision from './ListOfRevision/ListRevision';
import EmptyList from './ListOfRevision/emptyList';

import { getAllRevision } from '../Realm/realmUtils';

class ListBorder extends React.Component {

    constructor(props){
        super(props)
        this.revisions = this._cleanRevision(getAllRevision())
    }

    _alterRevision = (id) =>{
        let goodRev;
        for (let revision in this.revisions){
            if (this.revisions[revision]["recordID"] == id){
                goodRev = this.revisions[revision]
            }
        }
        this.props.navigation.navigate('alterRevision', {id :id, name : goodRev.name, dateJ0:goodRev.dateJ0.toString(), revisionList: goodRev.revisionList})
    }

    _alterRevisionEmpty = ()=>{
        this.props.navigation.navigate('alterRevision', {id :""})
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
        return newListToClean;
    }

    _dateAddDays(a, b) {
        var d = new Date(b || new Date());
        d.setDate(d.getDate() + a);
        return d;
      }

    _displayList(){
        if (this.revisions.length==0){
            return <EmptyList/>
        }else{
            return <ListRevision revisions={this.revisions} navOption ={this._alterRevision}/>
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox} >
                    <Header headerText={'RÉVISIONS'} headerSymbol={'plus'} navOption ={this._alterRevisionEmpty}/>
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

  
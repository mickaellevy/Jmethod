import React from 'react'
import { StyleSheet, SafeAreaView, View, Text} from 'react-native';

import Header from './Header'
import Form from './Form/Form'

class AlterRevision extends React.Component {

    constructor(props){
        super(props)
    }

    _getHome = () =>{
        this.props.navigation.navigate('revisions')
    }

    render() {
    
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox} >
                    <Header headerText={'MODIFIER'} headerSymbol={'back'} navOption = {this._getHome}/>
                </View>
                <View style={styles.formBox}>
                    <Form navOption = {this._getHome} id={this.props.route.params.id} title={this.props.route.params.name} dateJ0={new Date(this.props.route.params.dateJ0)} revisionList={this.props.route.params.revisionList}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default AlterRevision

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
    formBox: {
        flex:9,
        width:'100%',
        backgroundColor :'white',
    }
  });

  
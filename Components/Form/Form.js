import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import ItemRevision from './itemRevision';
import AddRevision from './addRevision';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.title = "";
        this.itemRevisionList = {1: false, 3: false};
    }

    _setTitle(text){
        this.title = text
    }
    _placeholder(){
        console.log('wouhou')
    }

    _changeValidation(index, bool){
        const newItemRevisionList = { ...this.itemRevisionList };
        newItemRevisionList[index.toString()] = bool;
        this.itemRevisionList = newItemRevisionList;
    }

    _removeItem(index){
        const newItemRevisionList = { ...this.itemRevisionList };
        delete newItemRevisionList[index.toString()];
        this.setState({ itemRevisionList: newItemRevisionList });
        this.itemRevisionList = newItemRevisionList;
    }

    _addItem(value){
        const newItemRevisionList = { ...this.itemRevisionList };
        newItemRevisionList[value.toString()]= false;
        this.setState({ itemRevisionList: newItemRevisionList });
        this.itemRevisionList = newItemRevisionList;
    }

    _getItemRevisions(){
        console.log("render")
        keys  = Object.keys(this.itemRevisionList)
        keys = keys.map((item) => parseInt(item, 10));
        data = []
        for (key in keys){
            data.push(
                <ItemRevision 
                    key={key} 
                    revisionTime={keys[key]}
                    done={this.itemRevisionList[keys[key].toString()]} 
                    changeValidation={this._changeValidation.bind(this)} 
                    removeItem={this._removeItem.bind(this)}
                />
            )
        }
        return data
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.titleInput}
                    placeholder='Nom du cours'
                    onChangeText={(text) => this._setTitle(text)}
                />
                <View style={styles.startDateContainer}>
                    <Text style={styles.dateJ0Title}>Date J0 :</Text>
                    <Text style={styles.dateJ0Actual}>01/08/2000</Text>
                </View>
                <View style={styles.itemRevisionContainer}>
                    {this._getItemRevisions()}
                    <AddRevision addItem={this._addItem.bind(this)}/>
                </View>
                <View style={styles.sendButtons}>
                    <TouchableOpacity style={styles.validateButton} onPress={() => this._placeholder()}>
                        <Text style={styles.validateText}>VALIDER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => this._placeholder()}>
                        <Text style={styles.validateText}>SUPPRIMER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 10,
    },
    titleInput:{
        borderColor: '#71B48D',
        borderWidth : 2,
        borderRadius : 5,
        fontFamily: 'AmericanTypewriter',
        fontSize : 20,
        height : 40,
        padding : 10,
        textAlign :'center',
        marginTop:7,
    },
    startDateContainer:{
        flexDirection : 'row',
        height : 40,
        marginTop: 20,
        alignItems: 'center',
    },
    dateJ0Title:{
        fontSize:17,
        fontFamily: 'AmericanTypewriter',
        flex:1,
        textAlign: 'right',
        paddingRight : 5,
    },
    dateJ0Actual:{
        fontSize:17,
        fontFamily: 'AmericanTypewriter-Bold',
        color: '#71B48D',
        flex:1,
        paddingLeft:5,
    },
    sendButtons:{
        alignItems: 'center',
        height:90,
        justifyContent: 'space-around',
        paddingHorizontal:10
    },
    validateButton:{
        backgroundColor:'#71B48D',
        width: '100%',
        height:35,
        justifyContent:'center',
        borderWidth : 2,
        borderRadius : 5,
        borderColor: '#295B3E'
    },
    deleteButton:{
        backgroundColor:'#D56062',
        width: '100%',
        height:35,
        justifyContent:'center',
        borderWidth : 2,
        borderRadius : 5,
        borderColor: '#782223',
    },
    validateText:{
        fontSize:17,
        fontFamily: 'AmericanTypewriter-Bold',
        color: 'white',
        textAlign:'center',
    },
    itemRevisionContainer:{
        padding:10,
        marginTop:5,
    },
  });

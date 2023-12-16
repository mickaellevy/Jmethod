import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker'
import AntDesign from '@expo/vector-icons/AntDesign';

import ItemRevision from './itemRevision';
import AddRevision from './addRevision';

import {runInvalidAnimation} from '../../Animations/animationsUtils'
import {createNewRevision, modifyRevision, deleteRevision} from '../../Realm/realmUtils'

class Form extends React.Component {

    constructor(props){
        super(props);
        this.itemRevisionList = {0: false, 3: false, 7: false, 15: false, 30: false, 45: false, 60: false};
        this.state ={
            title : "",
            open : false,
            date : new Date(),
            errorMessage: "",
            centerPosition: new Animated.Value(0)
        }
        if( props.id != ""){
            this.itemRevisionList = props.revisionList;
            this.state ={
                title : props.title,
                date : props.dateJ0,
            }
        }
    }

    _setTitle(text){
        this.setState({title : text})
    }

    _changeValidation(index, bool){
        const newItemRevisionList = { ...this.itemRevisionList };
        newItemRevisionList[index.toString()] = bool;
        this.setState({ itemRevisionList: newItemRevisionList });
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
                    date={this.state.date}
                />
            )
        }
        return data
    }

    _displayDelete(){
        if (this.props.id != ""){
            return (
                <TouchableOpacity style={styles.deleteButton} onPress={() => this._deleteRevision()}>
                        <Text style={styles.validateText}>SUPPRIMER</Text>
                </TouchableOpacity>
            )
        }
    }

    _validate(){
        if(this.state.title != ""){
            if(Object.keys(this.itemRevisionList).length != 0){
                this.setState({errorMessage: ''})
                if(this.props.id==""){
                    createNewRevision(this.state.title, this.state.date, this.itemRevisionList)
                }else {
                    modifyRevision(this.props.id, this.state.title, this.state.date, this.itemRevisionList)
                }
                this.props.navOption()
            }
            else {
                this.setState({errorMessage: 'Pas de révisions'})
                runInvalidAnimation(this.state.centerPosition, 5)
            }
        }
        else{
            this.setState({errorMessage: 'Pas de titre du cours'})
            runInvalidAnimation(this.state.centerPosition, 5)
        }
    }

    _resetValues(){
        if (this.props.id == ""){
            this.itemRevisionList = {0: false, 1: false, 3: false, 7: false, 15: false, 30: false};
            this.textInput.clear()
            this.setState({date : new Date(), title:""})
        } else {
            this.itemRevisionList = this.props.revisionList;
            this.setState({date : this.props.dateJ0, title: this.props.title})
        }
    }

    _deleteRevision(){
        console.log('delete')
        deleteRevision(this.props.id)
        this.props.navOption()
    }

    render() {
        return (
            <ScrollView style={styles.container} alwaysBounceVertical={false}>
                <TextInput
                    style={styles.titleInput}
                    placeholder='Nom du cours'
                    value={this.state.title}
                    onChangeText={(text) => this._setTitle(text)}
                    ref={input => { this.textInput = input }}
                />
                <View style={styles.startDateContainer}>
                    <Text style={styles.dateJ0Title}>Date J0 :</Text>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateJ0Actual}>{this.state.date.toLocaleDateString('en-GB')}</Text>
                        <TouchableOpacity style={styles.calendarButton} onPress={() => this.setState({open:true})}>
                            <AntDesign name={"calendar"} size={20} style={styles.calendarIcon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <DatePicker modal mode={"date"} open={this.state.open} date={this.state.date}
                        onConfirm={(date) => {
                            this.setState({open: false, date: date})
                            
                        }}
                        onCancel={() => {
                            this.setState({open: false})
                        }}
                    />
                </View>
                <View style={styles.itemRevisionContainer}>
                    {this._getItemRevisions()}
                    <AddRevision addItem={this._addItem.bind(this)}/>
                </View>
                <View style={styles.sendButtons}>
                    <View style={styles.validateButtonBox}>
                        <Text style={styles.errorMessageSend}>{this.state.errorMessage}</Text>
                        <Animated.View style={{left:this.state.centerPosition}}>
                            <TouchableOpacity style={styles.validateButton} onPress={() => this._validate()}>
                                <Text style={styles.validateText}>VALIDER</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                    <TouchableOpacity style={styles.resetButton} onPress={() => this._resetValues()}>
                        <Text style={styles.validateText}>RESET</Text>
                    </TouchableOpacity>
                    {this._displayDelete()}
                </View>
            </ScrollView>
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
    dateBox:{
        flex:1,
        paddingLeft:5,
        flexDirection:'row',
        alignItems:'center',
    },
    dateJ0Actual:{
        fontSize:17,
        fontFamily: 'AmericanTypewriter-Bold',
        color: '#71B48D',
    },
    calendarButton:{
        backgroundColor:'#71B48D',
        borderRadius: 4,
        width: 25,
        height: 25,
        justifyContent:'center',
        alignItems:'center',
        marginLeft : 10,
    },
    calendarIcon: {
        color: 'white',
    },
    sendButtons:{
        alignItems: 'center',
        //height:100,
        //justifyContent: 'space-around',
        paddingHorizontal:10,
        marginBottom:40,
    },
    validateButtonBox:{
        width: '100%',
        marginBottom:9,
    },
    errorMessageSend:{
        fontFamily:"americanTypewriter",
        fontSize: 10,
        color: '#D56062',
        marginLeft: 10,
        marginBottom: 2,
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
    resetButton:{
        backgroundColor:'#8193CC',
        width: '100%',
        height:35,
        justifyContent:'center',
        borderWidth : 2,
        borderRadius : 5,
        borderColor: '#404E7C',
        marginBottom:9,
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

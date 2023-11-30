import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import {runInvalidAnimation} from '../../Animations/animationsUtils'

class AddRevision extends React.Component {

    constructor(props){
        super(props);
        this.value;
        this.displayErrorMessage;
        this.state = {
            centerPosition: new Animated.Value(0)
          }
    }

    
    _setNewNumber(text){
        if (text != ""){
            let value = parseInt(text,10)
            this.value = value
            if (!isNaN(this.value)){
                if (this.value >=0){
                    this.displayErrorMessage = ""
                }
                else{
                    this.displayErrorMessage = "Ce champ n'est pas valide : insérez un nombre positif"
                }
            }
            else {
                this.displayErrorMessage = "Ce champ n'est pas valide : insérez un nombre"
            }
        }
        else{
            this.displayErrorMessage = ""
        }
        this.forceUpdate()
    }

    _validateItem(){
        if (this.value != undefined && !isNaN(this.value) && this.value>=0){
            this.props.addItem(this.value)
            this.value = NaN
            this.textInput.clear()
        }
        else {
            runInvalidAnimation(this.state.centerPosition, 5)
        }
    }


    render() {
        return (
            <View style={styles.maxiContainer}>
                <Animated.View style={[styles.container, { left: this.state.centerPosition }]}>
                    <Text style={styles.newRev}>Nouvelle révision :</Text>
                    <TextInput
                        style={styles.titleInput}
                        placeholder='nombre de jours'
                        onChangeText={(text) => this._setNewNumber(text)}
                        ref={input => { this.textInput = input }}
                    />
                    <TouchableOpacity onPress={() => this._validateItem()}>
                        <AntDesign name={"plus"} size={27} style={styles.IconNo}/>
                    </TouchableOpacity>
                </Animated.View>
               <Text style={styles.errorMessage}>{this.displayErrorMessage}</Text>
            </View>
            
            
        )
    }
}


export default AddRevision

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#71B48D',
        marginVertical:2,
        paddingHorizontal: 10,
    },
    newRev: {
        fontFamily:"americanTypewriter",
    },
    errorMessage:{
        fontFamily:"americanTypewriter",
        fontSize: 10,
        color: '#D56062',
        marginLeft: 10,
    },
    maxiContainer:{
        height: 50,
    }
  });

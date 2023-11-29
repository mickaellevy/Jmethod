import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated, Easing} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


class AddRevision extends React.Component {

    constructor(props){
        super(props);
        this.value;
        this.displayErrorMessage;
        this.state = {
            centerPosition: new Animated.Value(0)
          }
    }

    _runInvalidAnnimation() {
        Animated.sequence([
        Animated.timing(
          this.state.centerPosition,
          {
            toValue: 5,
            duration: 50, // Le temps est en milliseconds ici (3000ms = 3sec)
            easing: Easing.linear,
            useNativeDriver: false,
          }
        ),
        Animated.timing(
            this.state.centerPosition,
            {
              toValue: -5,
              duration: 100, // Le temps est en milliseconds ici (3000ms = 3sec)
              easing: Easing.linear,
              useNativeDriver: false,
            }
          ),
          Animated.timing(
            this.state.centerPosition,
            {
              toValue: 5,
              duration: 100, // Le temps est en milliseconds ici (3000ms = 3sec)
              easing: Easing.linear,
              useNativeDriver: false,
            }
          ),
          Animated.timing(
            this.state.centerPosition,
            {
              toValue: 0,
              duration: 50, // Le temps est en milliseconds ici (3000ms = 3sec)
              easing: Easing.linear,
              useNativeDriver: false,
            }
          )
        ]).start() // N'oubliez pas de lancer votre animation avec la fonction start()
    }
    
    _setNewNumber(text){
        if (text != ""){
            let value = parseInt(text,10)
            this.value = value
            if (isNaN(this.value)){
                this.displayErrorMessage = "Ce champ n'est pas valide : insérez un nombre"
            }
            else {
                this.displayErrorMessage = ""
            }
        }
        else{
            this.displayErrorMessage = ""
        }
        this.forceUpdate()
    }

    _validateItem(){
        if (this.value != undefined && !isNaN(this.value)){
            this.props.addItem(this.value)
            this.value = NaN
            this.textInput.clear()
        }
        else {
            this._runInvalidAnnimation()
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

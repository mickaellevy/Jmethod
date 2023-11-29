import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';



class Header extends React.Component {

    constructor(props){
        super(props);
    }

    _getSymbol(symbol){
        if (symbol == "plus"){
            return <AntDesign name={"plus"} size={40} style={styles.Icon}/>
        }
        else if (symbol == "back"){
            return <AntDesign name={"left"} size={40} style={styles.Icon}/>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox} >
                    <Text style={styles.title}>{this.props.headerText}</Text>
                </View>
                <View style={styles.plusBox} >
                    <TouchableOpacity onPress={() => this.props.navOption()}>
                        {this._getSymbol(this.props.headerSymbol)}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#71B48D',
        borderBottomWidth : 4,
        borderColor: '#295B3E',
    },
    titleBox:{
        flex:4,
        height: '100%',
        justifyContent: 'center',
    },
    plusBox:{
        flex:1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        marginLeft: 10,
        fontSize : 30,
        fontFamily: 'AmericanTypewriter-Bold',
        color : 'white'
    },
    Icon:{
        color:'white',
    },
  });

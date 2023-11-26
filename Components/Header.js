import React from 'react'
import { StyleSheet, View, Text} from 'react-native';



class Header extends React.Component {

    render() {
    
        return (
            <View style={styles.container}>
                <View style={styles.titleBox} >
                    <Text style={styles.title}>Mes cours :</Text>
                </View>
                <View style={styles.plusBox} >

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
        backgroundColor : '#404E7C',
    },
    titleBox:{
        flex:4,
        height: '100%',
        justifyContent: 'center',
    },
    plusBox:{
        flex:1,
        height: '100%',
        backgroundColor : 'yellow',
    },
    title:{
        marginLeft: 10,
        fontSize : 30,
        fontFamily: 'AmericanTypewriter-Bold',
        color : '#FAEBF2'
    }
  });

  
import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

class RevisionLine extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
    
        return (
            <View style={styles.container}>
                <Text style={styles.revisionName}>{this.props.name}</Text>
                <View style={styles.nextRevisionBox}>
                    <Text style={styles.nextRevText}>Prochaine revision :</Text>
                    <Text style={styles.nextRevDate}>3 jours</Text>
                </View>
                <AntDesign name={"right"} size={35} style={styles.Icon}/>
            </View>
        )
    }
}

export default RevisionLine

const styles = StyleSheet.create({
    container: {
        height:50,
        width:'100%',
        alignItems: 'center',
        flexDirection:'row',
        borderBottomWidth: 1,
        borderColor:'#71B48D'
    },
    revisionName:{
        width: '60%',
        paddingLeft:5,
        fontSize:17,
        fontFamily: 'AmericanTypewriter-Bold',
        color: '#71B48D',
    },
    nextRevisionBox:{
        width:'30%',
        height: '100%',
    },
    nextRevText:{
        fontFamily: 'AmericanTypewriter',
        fontSize:10,
        paddingTop:4,
        height:'30%',
        color:'grey',
    },
    nextRevDate:{
        fontFamily: 'AmericanTypewriter',
        fontSize:17,
        height:'70%',
        paddingTop:5,
    },
    Icon:{
        width:'10%',
    }
  });

  
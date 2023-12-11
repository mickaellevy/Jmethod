import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

class RevisionLine extends React.Component {

    constructor(props){
        super(props)
        this.globalFontColor;
        this.titleFontColor;
        this.arrowColor;
        this.displayTimeToRev;
        this.TimeToRevAnnounce;
    }

    _displayNextRevCorrectly(){
        if(this.props.nextRevIn==0){
            this.globalFontColor= 'black';
            this.titleFontColor= '#71B48D';
            this.arrowColor='grey';
            this.TimeToRevAnnounce= <Text style={styles.nextRevText}>Prochaine revision dans:</Text>;
            this.displayTimeToRev= <Text style={[styles.nextRevDate,{color:this.globalFontColor}]}>Aujourd'hui</Text>
        }else if(this.props.nextRevIn==Infinity){
            this.globalFontColor= 'lightgrey';
            this.titleFontColor= 'lightgrey';
            this.arrowColor='lightgrey';
            this.displayTimeToRev= <Text style={[styles.Archived,{color:this.globalFontColor}]}>Archivé</Text>
        }else if (this.props.nextRevIn<0){
            this.globalFontColor = '#D56062';
            this.titleFontColor = '#D56062';
            this.arrowColor = '#D56062';
            this.TimeToRevAnnounce = <Text style={[styles.nextRevText,{color:this.globalFontColor}]}>Retard de :</Text>;
            this.displayTimeToRev = <Text style={[styles.nextRevDate,{color:this.globalFontColor}]}>{-1*this.props.nextRevIn} jours</Text>
        }else{
            this.globalFontColor= 'black';
            this.titleFontColor= '#71B48D';
            this.arrowColor='grey';
            this.TimeToRevAnnounce= <Text style={styles.nextRevText}>Prochaine revision dans:</Text>;
            this.displayTimeToRev= <Text style={[styles.nextRevDate,{color:this.globalFontColor}]}>{this.props.nextRevIn} jours</Text>
        }
    }

    _navigateToDetail(){
        this.props.navOption(this.props.id);
    }

    render() {
        this._displayNextRevCorrectly()
        return (
            <TouchableOpacity style={styles.container} onPress={() => this._navigateToDetail()}>
                <Text style={[styles.revisionName, {color: this.titleFontColor}]}>{this.props.name}</Text>
                <View style={styles.nextRevisionBox}>
                    {this.TimeToRevAnnounce}
                    {this.displayTimeToRev}
                </View>
                <AntDesign name={"right"} size={35} style={[styles.Icon, {color:this.arrowColor}]}/>
            </TouchableOpacity>
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
        width: '50%',
        paddingLeft:5,
        fontSize:17,
        fontFamily: 'AmericanTypewriter-Bold',
    },
    nextRevisionBox:{
        width:'40%',
        height: '100%',
        justifyContent:'center',
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
    Archived:{
        fontFamily: 'AmericanTypewriter',
        fontSize:17,
        color:'lightgrey',
    },
    Icon:{
        width:'10%',
    }
  });

  
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


class ItemRevision extends React.Component {

    constructor(props){
        super(props);
    }

    _getDoneIcon(){
        if (this.props.done==true){
            return <AntDesign name={"check"} size={27} style={styles.IconYes}/>
        }
        else if (this.props.done==false){
            return <AntDesign name={"close"} size={27} style={styles.IconNo}/>
        }
    }

    _dateAddDays(a, b) {
        var d = new Date(b || new Date());
        d.setDate(d.getDate() + a);
        return d;
      }

    _getDate(){
        var date= this.props.date;
        date = this._dateAddDays(this.props.revisionTime, date);
        return date.toLocaleDateString('en-GB');
    }

    _switchValidateIcon(){
        console.log(this.props)
        this.props.changeValidation(this.props.revisionTime, !this.props.done);
    }

    componentDidUpdate(){
        
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.revisionTime}>J{this.props.revisionTime}</Text>
                <Text style={styles.revisionDate}>{this._getDate()}</Text>
                <TouchableOpacity onPress={() => this._switchValidateIcon()}>
                    {this._getDoneIcon()}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.removeItem(this.props.revisionTime)}>
                    <AntDesign name={"minus"} size={27}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ItemRevision

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
    IconNo:{
        color: "#D56062"
    },
    IconYes:{
        color: "#71B48D"
    },
    revisionTime:{
        width:'20%',
        fontSize:20,
        fontFamily:'AmericanTypewriter-Bold',
        textAlign: 'center',
    },
    revisionDate:{
        width:'50%',
        fontSize:20,
        fontFamily:'AmericanTypewriter',
        textAlign: 'center',
        color: 'grey'
    }
  });

import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native';

import RevisionLine from './RevisionLine';


class ListRevision extends React.Component {

    constructor(props){
        super(props)
        //console.log(this.props['revisions'][0])
    }


    render() {
    
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.revisions}
                    renderItem={({item})=> <RevisionLine name={item.name} dateJ0={item.dateJ0} revisionList={item.revisionList}/>}
                    keyExtractor={item => item.recordID}
                    style={styles.list}
                />
            </View>
        )
    }
}

export default ListRevision

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width:'100%',
    }
  });

  
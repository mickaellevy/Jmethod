import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native';

import RevisionLine from './RevisionLine';


class ListRevision extends React.Component {

    constructor(props){
        super(props)
        this.revisions = this._sortList(props['revisions'])
    }

    _sortList(listToSort) {
        let newListToSort = listToSort.map(item => ({ ...item })); // Create a new array with copies of items
        for (i=0; i< newListToSort.length; i++) {
            for (j=0; j<newListToSort.length -1; j++){
                if (newListToSort[j]['nextRevIn']>newListToSort[j+1]['nextRevIn']){
                    [newListToSort[j],newListToSort[j+1]]=[newListToSort[j+1],newListToSort[j]]
                }
            }
        }
        return newListToSort
    }


    render() {
    
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.revisions}
                    renderItem={({item})=> <RevisionLine name={item.name} nextRevIn={item.nextRevIn} id={item.recordID} navOption ={this.props.navOption}/>}
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

  
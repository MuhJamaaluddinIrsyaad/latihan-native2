import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'

const header = (props) => {
  return (
    <View style={styles.bgHeader}>
        <Icon name="bars" size={30} color="#ffffff" />
        <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{position: 'relative', marginRight: 12}}>
            <Icon name="heart" size={30} color="red" />
            <Text style={{color:'white', fontWeight:'bold' , position: 'absolute',top: 4, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>{props.totalLike}</Text>
        </View>
        <Icon name="user-circle" size={30} color="#ffffff" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bgHeader: {
      backgroundColor: '#2C598D',
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex',
      padding: 10,
      flexDirection: 'row'
    },
  });

  const mapStateToProps = (state) => {
    return {
      totalLike : state.totalLike,
    }
  }

export default connect(mapStateToProps)(header)
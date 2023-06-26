import { View, Text, Image, StyleSheet, Button} from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const card = (props) => {

  const navigation = useNavigation();

    const setLike = (index) => {
        props.changeState(true,index);
        props.handlePlus();
    }
    
    const setUnLike = (index) => {
      props.changeState(false,index);
        props.handleMinus();
    }

  return (
           <View 
           key={props.list.id} 
           style={(props.index%2===0)?styles.cardLeft:styles.cardRight}>
            <View style={[styles.card, styles.elevation]}>
            <Image
            style={styles.img} 
            source={{uri: getImage(props.list.poster_path)}}/>
            <View style = {{position: 'absolute', right: 0, margin: 14, backgroundColor: 'white', paddingRight:8, paddingLeft:8, paddingBottom:10, paddingTop:14, borderRadius: 500}}>
              <Icon name="heart" size={30} color={(props.list.isLove)?'red':'#a9a9a9'} onPress={() => {!props.list.isLove ? setLike(props.index) : setUnLike(props.index)}}/> 
            </View> 
            <View style={styles.cardContent}>
              <Text style={styles.titleText}>
                {props.list.original_title}
              </Text>
              <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style = {{flex: 1}}>
                    <Text>
                        Realese : {props.list.release_date}
                    </Text>
                </View>               
              </View>
            </View>
            <Button style={{borderRadius: 48}} onPress={() => {navigation.navigate('Detail', {itemId: props.list.id})}} title="Show Detail Movie">
                Show Detail Movie
            </Button>
          </View>
          </View>
  )
}

const mapStateToProps = (state) => {
    return {
      totalLike : state.totalLike,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type: 'PLUS_LIKE'}),
        handleMinus : () => dispatch({type: 'MINUS_LIKE'}),
    }
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 4,
      flex: 1,
      marginBottom: 32,
    },
    bgHeader: {
      backgroundColor: '#2C598D',
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      display: 'flex',
      padding: 10,
      flexDirection: 'row'
    },
    card: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: 'white',
      alignSelf: 'auto',
      flex: 1,
      display: 'flex',
      position: 'relative',
    },
    cardLeft: {
      paddingRight: 8,
      width: '50%',
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'row'
    },
    cardRight: {
      paddingLeft: 8,
      width: '50%',
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'row'
    },
    elevation: {
      elevation: 10,
      shadowColor: '#52006A',
    },
    img: {
      borderRadius: 8,
      height: 300,
      width: '100%',
      marginBottom: 8,
    },
    cardContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 16
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(card);
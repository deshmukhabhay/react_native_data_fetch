import React, {useEffect} from 'react';

import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Loader from '../components/Loader';
import Comment from '../components/Comment';
import {fetchComments, resetComments} from '../store/reducers/comments';
import { startLoader, stopLoader } from '../store/reducers/loader';

export default function Dashboard() {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.loader.isLoading);
  const comments = useSelector(store => store.comments.data);

  const fetchCommentsData= async()=>{
    try {
        dispatch(startLoader());
        const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
        dispatch(fetchComments(data));
        dispatch(stopLoader());
    } catch (error) {
        dispatch(resetComments());
        dispatch(stopLoader());
    }
  }
  useEffect(() => {
    fetchCommentsData()
  }, []);


  if (isLoading) {
    return <Loader />;
  }else{
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={comments}
            renderItem={Comment}
            keyExtractor={item => item.id}
            // extraData={selectedId}
          />
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    padding:20,
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'pink'
  },
});

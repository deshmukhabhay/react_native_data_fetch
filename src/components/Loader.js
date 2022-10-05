import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Loader() {
  const isLoading = useSelector(store => store.loader.isLoading);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={isLoading} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

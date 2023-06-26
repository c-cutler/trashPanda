import { StatusBar } from 'expo-status-bar';
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

interface MyButtonProps {
  title: string,
  color?: string,
  onIncrement?: (event: GestureResponderEvent) => void,
  showButton?: boolean
}

interface CardProps {
  error?: boolean,
  loading?: boolean,
  title?: boolean
}

function MyButton({title, color = '#1ACDA5'} : MyButtonProps) {
  return (
    <Button title={title} color={color}/>
  );
}

function CounterButton({title, color = '#1ACDA5', onIncrement, showButton} : MyButtonProps) {
  return (
    <View>
      <Text>abc</Text>
      {showButton ? <Button title={title} color={color} onPress={onIncrement}/> : null}
    </View>
  )
}

function Card({error, loading, title} : CardProps) {
  let result;

  if (error) {
    result = <Text style={{color:'red'}}>Error</Text>
  } else if (loading) {
    result = <Text>Loading...</Text>
  } else {
    result = <Text style={{fontSize:25}}>title</Text>
  }

  return result;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <MyButton title="Press me!" color='#000'/>
      <CounterButton title={`Click here to increase count: ${count}`} onIncrement={() => setCount(count + 1)} showButton={true}/>
      <Card error={true}/>
      <Card title={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

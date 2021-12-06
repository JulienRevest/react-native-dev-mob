import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, ButtonProps, ColorSchemeName } from 'react-native';

function CountButton({title, onPress}: ButtonProps) {
    return <Button  
            onPress={onPress}
            title={title} />
}

const useCount = (initialValue: number): [number, (value: number) => void] => {
  const [count, setCount] = useState(initialValue);

  const handleChangeCount = (value: number) => {
      setCount(count + value);
  }

  useEffect(()=>{
      const timeoutId = setTimeout(() => {
          handleChangeCount(1);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      }
  }, []);

  

  return [count, handleChangeCount]
}

let colorScheme: ColorSchemeName;

export default function CounterScreen() {
  const [count, handleChangeCount] = useCount(0);

    return (
        <>
            <Text style={styles.text}>Bonjour {count}</Text>
            <CountButton title="+" onPress={() => handleChangeCount(1)}></CountButton>
            <CountButton title="-" onPress={() => handleChangeCount(-1)}></CountButton>
        </>
    );
}

const styles = StyleSheet.create({
  text: {
    color: colorScheme === 'dark' ? 'white' : 'black',
  }
});

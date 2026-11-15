
import React, {useState} from 'react';

import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from './src/utils/counter';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(currentValue => incrementCounter(currentValue));
  };

  const handleDecrement = () => {
    setCount(currentValue => decrementCounter(currentValue));
  };

  const handleReset = () => {
    setCount(resetCounter());
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#F5F7FB"
          barStyle="dark-content"
        />

        <View style={styles.content}>

          <Text style={styles.title}>
            Counter Application
          </Text>

          <Text style={styles.subtitle}>
            React Native + TypeScript
          </Text>

          <View style={styles.counterCard}>
            <Text style={styles.counterLabel}>
              CURRENT COUNT
            </Text>

            <Text
              testID="counter-value"
              accessibilityLabel={`Current count is ${count}`}
              style={styles.counterValue}>
              {count}
            </Text>

            <Text style={styles.counterDescription}>
              Manage your counter
            </Text>
          </View>

          <View style={styles.buttonContainer}>

            <Pressable
              testID="decrement-button"
              accessibilityRole="button"
              accessibilityLabel="Decrease counter"
              disabled={count === 0}
              onPress={handleDecrement}
              style={({pressed}) => [
                styles.button,
                styles.decrementButton,
                count === 0 && styles.disabledButton,
                pressed && styles.pressedButton,
              ]}>
              <Text style={styles.buttonText}>
                −
              </Text>
            </Pressable>

            <Pressable
              testID="reset-button"
              accessibilityRole="button"
              accessibilityLabel="Reset counter"
              disabled={count === 0}
              onPress={handleReset}
              style={({pressed}) => [
                styles.button,
                styles.resetButton,
                count === 0 && styles.disabledButton,
                pressed && styles.pressedButton,
              ]}>
              <Text style={styles.resetButtonText}>
                Reset
              </Text>
            </Pressable>

            <Pressable
              testID="increment-button"
              accessibilityRole="button"
              accessibilityLabel="Increase counter"
              onPress={handleIncrement}
              style={({pressed}) => [
                styles.button,
                styles.incrementButton,
                pressed && styles.pressedButton,
              ]}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </Pressable>

          </View>

          <Text style={styles.footer}>
            Built with React Native CLI
          </Text>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#172554',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },

  counterCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 40,
    alignItems: 'center',
    marginTop: 45,
    elevation: 4,
  },

  counterLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#64748B',
  },

  counterValue: {
    fontSize: 76,
    fontWeight: '800',
    color: '#2563EB',
    marginVertical: 15,
  },

  counterDescription: {
    fontSize: 14,
    color: '#94A3B8',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 35,
  },

  button: {
    width: 65,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  decrementButton: {
    backgroundColor: '#EF4444',
  },

  incrementButton: {
    backgroundColor: '#2563EB',
  },

  resetButton: {
    width: 90,
    backgroundColor: '#E2E8F0',
  },

  disabledButton: {
    opacity: 0.35,
  },

  pressedButton: {
    opacity: 0.7,
  },

  buttonText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  resetButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
  },

  footer: {
    marginTop: 60,
    fontSize: 12,
    color: '#94A3B8',
  },
});

export default App;

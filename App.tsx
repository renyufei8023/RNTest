/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Home';
import Home2 from './src/Home2';
import Home3 from './src/Home3';
import Home4 from './src/Home4';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home5 from './src/Home5';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
        <NativeStack.Navigator
        >
            
            <NativeStack.Screen 
                name='tabbar'
                options={{headerShown: false}}
                component={() => {
                    return (
                        <Tab.Navigator
                            id='tab'
                            screenOptions={{headerShown: false}}
                        >
                            <Tab.Screen
                                name='home1'
                                component={Home}
                            />
                            <Tab.Screen
                                name='home2'
                                component={Home2}
                            />
                            <Tab.Screen
                                name='home3'
                                component={Home3}
                            />
                            <Tab.Screen
                                name='home4'
                                component={Home4}
                            />
                            {/* <NativeStack.Navigator>
                            </NativeStack.Navigator> */}
                                
                        </Tab.Navigator>

                    )
                }
                }
            />
            <NativeStack.Screen
                name='home5'
                component={Home5}
            />
        </NativeStack.Navigator>
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

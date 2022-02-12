import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {

  const {signout} = useContext(AuthContext);
  return ( <SafeAreaView forceInset={{top: 'always'}}>
    <Text style={{fontSize: 48}}> AccountScreen </Text>
    <Button title="Sign Out" onPress={signout} />
</SafeAreaView>

  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
  }
}

const styles=StyleSheet.create({});

export default AccountScreen;
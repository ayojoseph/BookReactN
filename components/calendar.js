import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Navigator } from 'react-navigation';

class calendarScreen extends React.Component{
    render() {
        return(
            <View>
                <Button 
                    title={'Go to Form'}
                    onPress={() => this.props.navigation.navigate('Form')}
                />
                <Text>This is the Calendar Screen </Text>
            </View>
        );
    }
}

export default calendarScreen;
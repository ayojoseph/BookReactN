import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";


export default class formScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Request a Booking</Text>
          <FormLabel style={styles.formlabel}>First Name</FormLabel>
          <FormInput
            raised  
            inputStyle= {styles.forminput}
            />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
  
          <FormLabel
            labelStyle= {styles.formlabel}
            title='Tester'
          />
          <FormInput 
            raised  
            inputStyle= {styles.forminput}
          />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
  
          <FormLabel>City</FormLabel>
          <FormInput 
            raised  
            inputStyle= {styles.forminput}
          />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
  
          <FormLabel>Phone Number</FormLabel>
          <FormInput 
            raised  
            inputStyle= {styles.forminput}
          />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
  
          <Button 
            large
            rightIcon={{name: 'send', size: 32}}
            buttonStyle={styles.buttonsubmit}
            textStyle={{textAlign: 'center'}}
            title={`CLICK ME!!!`}
            onPress={() => this.props.navigation.navigate('Home')}/>
  
            {/* <Calendar 
              current={'2018-11-01'}
            /> */}
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8aa5d1',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    formlabel: {
      textAlign: 'right',
      color: 'black'
    },
    forminput: {
      backgroundColor: '#ffff', 
      borderRadius: 20
    },
    buttonsubmit: {
      borderRadius: 20,
      backgroundColor: '#e5bd89',
      marginTop: 20
  
    }
  });
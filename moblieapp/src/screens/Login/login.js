import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const login = (props) => {

  const { handleSubmit } = props;

  const onSubmit = (values) => console.log(values);

  const renderInput = ({ input: { onChange, ...input }, ...rest}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...input} {...rest} />
  };

  return (
    <View style={styles.root}>
      <Field
        name={'email'}
        props={{
          placeholder: 'Email'
        }}
        component={renderInput}
      />
      <Field
        name={'password'}
        props={{
          placeholder: 'Password',
          secureTextEntry: true
        }}
        component={renderInput}
      />
      <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 32,
    justifyContent: 'center'
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4
  }
});
export default compose(
  connect(null, null),
  reduxForm({ form: 'signin' })
)(login);
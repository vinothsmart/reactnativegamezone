import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        intialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              //   value={props.values.title}
              value={props.values}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              //   value={props.values.body}
              value={props.values}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 to 5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              //   value={props.values}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

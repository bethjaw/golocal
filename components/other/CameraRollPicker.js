import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImagePickerIOS,
  Image,
} from 'react-native'

export default class CameraRollPicker extends React.Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.image?
          <Image
            style={{ width: 380, height: 280 }} 
            source={{ uri: this.state.image }} /> :
          null
        }
      </View>
    );
  }
}

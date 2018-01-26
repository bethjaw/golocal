import React from 'react'
import { View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  ImagePickerIOS,
} from 'react-native'


export default class AddImage extends React.Component {
  constructor(props){
    super(props)
  }

  uploadImage(){
        ImagePickerIOS.openSelectDialog({}, imageUri => {
          const xhr = new XMLHttpRequest()
          xhr.open('PUT', 'https://golocal-capstone.s3.us-east-2.amazonaws.com/images/image.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQNY3QXWUOIVWUEA%2F20180126%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20180126T184651Z&X-Amz-Expires=900&X-Amz-Signature=0f28ef202019c0c8b6c7b672a973e4c2c24eb254614a0c8ea399e505a9e28285&X-Amz-SignedHeaders=host')
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                  console.log('Image successfully uploaded to S3')
              } else {
                  console.log('Error while sending the image to S3')
                }
              }
            }
          xhr.setRequestHeader('Content-Type', 'image/jpeg')
          // xhr.setRequestHeader('X-Amz-ACL', 'public-read')
          xhr.send({
            uri: imageUri,
            type: 'image/jpeg',
            name: `${this.props.navigation.state.params.id}.jpg`,
            })
          }, error => console.log(error));
        }

    render(){
      console.log('addImage', this.props.props);
      return (
        <View>
          <TouchableOpacity style={styles.imageContainer}
            onPress={() => this.uploadImage()}
            >
            <Text style={styles.addImage}>Add an Image</Text>
          </TouchableOpacity>
        </View>
      )
    }
}


const styles = StyleSheet.create({
  addImage: {
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 310,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 30,
    backgroundColor: '#000',
  },
});

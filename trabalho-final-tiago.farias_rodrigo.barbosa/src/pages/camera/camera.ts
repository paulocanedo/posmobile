import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers: [ Camera ]
})
export class CameraPage {

  public images: Array<{src: String}>;

  constructor(public navCtrl: NavController, private camera: Camera) {
    this.images = [];
  }

  takePicture():void {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift({src: base64Image});
    }, (error) => {
      console.error(error);
    });

  }
}

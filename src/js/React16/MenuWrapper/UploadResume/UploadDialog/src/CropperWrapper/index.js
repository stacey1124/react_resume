import React, { Component, Fragment, useRef } from 'react'
import img from '../MutipleUpload/img/icon-upload.jpg'
import Cropper from 'cropperjs'

// 默认参数
const defaultCropperOptions = {
  dragMode: 'crop',
  scaleX: 1,
  scaleY: 1,
  enable: true,
  zoomTo: 1,
  rotateTo: 0,
  guides: false,
  center: false,
  aspectRatio: 1,
  minCropBoxWidth: 30,
  minCropBoxHeight: 30,
  maxWidth: 400,
  maxHeight: 400,
  zoomOnWheel: false,
  movable: false
};

export default class CropperWrapper extends Component {
  constructor(props) {
    super(props)
    this.imgRef = element => this.image = element;
    this.wrapperRef = element => this.wrapRef = element;
    this.cropperRef = element => this.cropRef = element;
  }
  componentDidMount() {
    // console.log("this.image1", this.image)
    // console.log("this.wrapRef1", this.wrapRef)
    const cropper = new Cropper(this.image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      }
    })
  }
  // handleCropper = () => {
  //   console.log("this.image", this.image)
  //   var cropper = new Cropper(this.image, {
  //     aspectRatio: 16 / 9,
  //     viewMode: 1,
  //     dragMode: 'crop',
  //     crop: function (e) {
  //         console.log(e.detail.x);
  //         console.log(e.detail.y);
  //         console.log(e.detail.width);
  //         console.log(e.detail.height);
  //         console.log(e.detail.rotate);
  //         console.log(e.detail.scaleX);
  //         console.log(e.detail.scaleY);
  //     }
  // });
  // }
  render() {
    return (
      <div ref={this.wrapperRef}>
        <img ref={this.imgRef} src={img} style={{display: 'block', width: "100%"}} onClick={this.handleCropper} />
      </div>
    )
  }
}
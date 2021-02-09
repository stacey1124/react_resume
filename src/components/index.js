import React, { Fragment, useState, useEffect, useRef } from "react"
import { Select, Input } from 'antd'
import fetch from 'isomorphic-fetch'
import useImageLazy from './useImageLazy'
import styles from './index.module.scss'
import './index.scss'

const { Option } = Select
const { Search } = Input
//首页
export default () => {
  const imgRef = useRef([])
  let urls = [
    "//dimg07.c-ctrip.com/images/100o1f000001gp6di1DB0_C_221_166.jpg",
    "//dimg05.c-ctrip.com/images/100f180000013p2c086E4_C_221_166.jpg",
    "//dimg05.c-ctrip.com/images/100b11000000qcd4zEAD7_C_221_166.jpg",
    "//dimg06.c-ctrip.com/images/100c180000014rkpq4C68_C_221_166.jpg",
    "//dimg06.c-ctrip.com/images/100c180000014rkpq4C68_C_221_166.jpg",
    "//dimg07.c-ctrip.com/images/100e0h0000008rp39A12F_C_221_166.jpg",
    "//dimg07.c-ctrip.com/images/100e0h0000008rp39A12F_C_221_166.jpg",
    "//dimg01.c-ctrip.com/images/fd/tg/g4/M06/9C/D8/CggYHFXRUw2AAJrSABIhk3trj7Y885_C_221_166.jpg",
    "//dimg08.c-ctrip.com/images/100r1f000001gon9mBC5D_C_221_166.jpg"
    // "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    // "http://webresource.c-ctrip.com/ResCorpHome/platform/pic/c2b/pc_head.png?v=3"
  ]
  let bannerUrls = [
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg",
    "https://pages.c-ctrip.com/hdz/chunjie2/yemian/PC%E6%9C%AC%E5%9C%B0%E6%B8%B8%E4%BA%8C%E7%BB%B4%E7%A0%81_02.jpg"
  ]
  const[data, setData] = useState([])
  const[count, setCount] = useState(0)
  const countRef = useRef()
  const timeId = useRef()
  useEffect(() => {

    
  })
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8080/mock/11/api/stacey/getImage/urls')
  //   .then((res) => console.log('res::', res))
    
  //   return () => {
  //     // cleanup
  //   }
  // })
  useImageLazy(imgRef.current)
  // console.log('imgRef.current::', imgRef.current);

  useEffect(() => {
    if(count > 10) {
      clearInterval(timeId.current)
    }
  })
  let selectVal = 'school';
  const handleChange = (val) => {
    selectVal = val
  }
  const onSearch = (val) => {
    // console.log('val::', val, selectVal);
    // console.log('fetch::', fetch);
    
    fetch('http://127.0.0.1:8080/mock/11/api/stacey/school/search')
    .then((res)=>console.log("res",res))
    
  }

  return(
    <Fragment>
      <div className="wrapper" ref={countRef}>
        <div className="header-video">
          <video src="http://seedland.cheng95.com/statical/base/static/dist/img/video.52123e59.mp4"
            autoplay="autoplay"
            loop="loop"
            // controls="controls"
            muted="muted" //静音
            width="100%"
          ></video>
        </div>
        <div className="search-wrap">
          <div className="search-left">
            <Select className={styles.select} defaultValue="school" style={{width: 140}}
              onChange={handleChange}
            >
              <Option value="school">校园招聘</Option>
              <Option value="society">社会招聘</Option>
            </Select>
          </div>
          <div className="search-right">
            <Search className={styles.Search}
              placeholder="搜索工作职位"
              onSearch={onSearch}
            ></Search>
          </div>
        </div>
        <div className="album">

          {urls.map((url)=>(<img src={url}></img>))}
        </div>
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        <div className="banner">
          {bannerUrls.map((url, index)=>
            // <div className="img-placeholder" ref={el => imgRef.current[index] = el}>
              <img 
                ref={el => imgRef.current[index] = el}
                data-src={url}
              />
            // </div>
          )}
        </div>
      </div>

      <div className="footer">
        页面底部
      </div>
    </Fragment>
  )
}

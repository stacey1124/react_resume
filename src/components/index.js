import { Fragment } from "react"
import { Select, Input } from 'antd'
import styles from './index.module.scss'
import './index.scss'

const { Option } = Select
const { Search } = Input
//首页
export default () => {
  // let selectVal;
  // const handleChange = (val) => {
  //   selectVal = val
  // }
  // const onSearch = (val) => {
  //   console.log('val::', val, selectVal);
    
  // }

  return(
    <Fragment>
      <div className="wrapper">
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
      </div>
      <div className="footer">页面底部</div>
    </Fragment>
  )
}

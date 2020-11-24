import React from 'react'
import AddNewSite from './newcommon.index'

export default class Add extends React.Component {
  render() {
    return (
      <div>
        campus_settings
        <AddNewSite 
          project_id={2}
          siteList={[1,2,3]}
          onSuccess={() => {
            
          }}
        >
          <span>
            新增场次
          </span>
        </AddNewSite>
      </div>
    )
  }
}
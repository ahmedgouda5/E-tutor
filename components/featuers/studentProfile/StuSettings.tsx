import React from 'react'
import ProfileSettings from './StuUi/StuAccountSetting'

const StuSettings = ({title}: {title: string}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>
          <ProfileSettings/>
        </div>
    </div>
  )
}

export default StuSettings
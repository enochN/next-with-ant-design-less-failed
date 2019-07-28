import * as React from 'react'

import { Icon } from 'antd'

import bbb from '../assets/images/icon/Notice.svg'

const Bell: React.FC = () => (
  <div style={{width: 200, height: 200}}>
    <Icon component={bbb} style={{width: '100%', height: '100%', verticalAlign: 'middle', fontSize: '24px'}} />
  </div>
)
export default Bell
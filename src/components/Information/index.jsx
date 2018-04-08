import React, { Component } from 'react'

import {
	Tabs
}	from 'antd'

import './index.less'

import Notice from './Notice'
import Bidding from './Bidding'
import About from './About'




const TabPane = Tabs.TabPane;

class Information extends Component{
	render(){
		return(
			<div className="information">
				<div className='header-tab'>
					<Tabs defaultActiveKey="1">
					  <TabPane tab="平台公告" key="1">
					  		<Notice/>
					  </TabPane>
					  <TabPane tab="发标预告" key="2">
					  		<Bidding/>
					  </TabPane>
					  <TabPane tab="关于汇诚" key="3">
					  		<About/>
					  </TabPane>
					</Tabs>
				</div>
			</div>
		)
	}
}

export default Information
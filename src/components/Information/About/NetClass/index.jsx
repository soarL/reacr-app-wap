import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import NetCredit from './NetCredit'
import Policy from './Policy'
import {
	Tabs
} from 'antd'
import './index.less'

const TabPane = Tabs.TabPane


class NetClass extends Component{
	render(){
		return(
			<div className='net-class'>
				<ReturnHeader title='网贷课堂' href='/information'/>
				<div className='box padding-RL-15'>
					<div className='header'>
						<Tabs defaultActiveKey="2" type="card">
						   <TabPane tab="网贷问答" key="1">
						    <NetCredit/>                                    
						   </TabPane>
						   <TabPane tab="政策解读" key="2">
						   	<Policy/>
						   </TabPane>
						 </Tabs>
					</div>
				</div>
			</div>
		)
	}
}

export default NetClass
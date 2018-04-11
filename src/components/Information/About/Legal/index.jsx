import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Laws from './Laws'
import Clause from './Clause'
import Warning from './Warning'
import Borrow from './Borrow'
import {
	Tabs
} from 'antd'
import './index.less'

const TabPane = Tabs.TabPane
class Legal extends Component{
	render(){
		return(
			<div className='legal'>
				<ReturnHeader title='法律法规' href='/information'/>
				<div className='box padding-RL-15'>
					<div className='header'>
						<Tabs defaultActiveKey="1" type="card" onChange={this.callback}>
						   <TabPane tab="监管法规" key="1" >
								<Laws/>                                   
						   </TabPane>
						   <TabPane tab="法律条款" key="2">
						   		<Clause/>
						   </TabPane>
						   <TabPane tab="风险提示" key="3">
						   		<Warning/>
						   </TabPane>
						   <TabPane tab="借款须知" key="4">
						   		<Borrow/>
						   </TabPane>
						 </Tabs>
					</div>
				</div>
			</div>
		)
	}
}

export default Legal
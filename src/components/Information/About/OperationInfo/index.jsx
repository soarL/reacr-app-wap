import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import OperaData from './OperaData'
import Report from './Report'
import aboutAPI from '@/api/about'
import {
	Tabs
} from 'antd'
import './index.less'


const TabPane = Tabs.TabPane

class OperationInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			opendata:{
				data:{}
			}
		}
	}
	async componentDidMount() {
		let data = await aboutAPI.getOpendata()
		this.setState({
			opendata:data
		})
	}
	render(){
		return(
			<div className="operation-info">
				<ReturnHeader title='运营信息' href='/information'/>
				<div className='box padding-RL-15'>
					<div className='header'>
						<Tabs defaultActiveKey="1" type="card">
						   <TabPane tab="运营数据" key="1">
								<OperaData data = {this.state.opendata}/>
						   </TabPane>
						   <TabPane tab="运营报告" key="2">
						   		<Report/>
						   </TabPane>
						 </Tabs>
					</div>
				</div>
			</div>
		)
	}
}

export default OperationInfo
import React,{ Component } from 'react'
import Title from '@/components/Information/About/Title'
import aboutAPI from '@/api/about'
import {
	Row,
	Col
} from 'antd'
import { assetURL } from '@/config'
 

class ItemChild extends Component{
	render(){
		return(
			<Col span={12} className='item-child'>
				<div>
					<img src={assetURL + this.props.src} alt={this.props.title}/>
				</div>
				<h2>{this.props.title}</h2>
			</Col>
		)
	}
}

class Item extends Component{
	render(){
		return(
			<div>
				<Title title={this.props.year}/>
				<Row className="items">
					{
						this.props.items.map((value,index)=><ItemChild key={index} title={value.title} src={value.src}/>)
					}
				</Row>
			</div>
		)
	}
}

class Report extends Component{
	constructor(props){
		super(props)
		this.state={
			report:[]
		}
	}
	async componentDidMount() {
		let data = await aboutAPI.getReportData()
		this.setState({
			report:data
		})
	}
	render(){
		return(
			<div className='report'>
				<div className='box padding-RL-15'>
					{
						this.state.report.map((value,index)=><Item year={value.year} key={index} items={value.items}/>)
					}
				</div>
			</div>
		)
	}
}

export default Report
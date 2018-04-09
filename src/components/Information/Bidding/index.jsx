import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import {
	Icon,
	Row,
	Col
} from 'antd'
import './index.less'


class Items extends Component{
	render(){
		return(
			<div className='box items'>
				<Link to='/bidding/page/:id'>
					<h4>{this.props.title}</h4>
				</Link>
				<Row className="detail">
					<Col span={8}>
						<Icon type="eye-o" /><span>{this.props.eye}</span>
					</Col>
					<Col span={16}>
						<Icon type="clock-circle-o" /><span>{this.props.time}</span>
					</Col>
				</Row>
			</div>
		)
	}
}

const arr = [
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:520,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
	{title:'2018年3月29新标预告',eye:600,time:'2018-1-20 09:40:30'},
]


class Bidding extends Component{


	render(){
		return(
			<div className='notice'>
				{arr.map((value,index)=><Items key={ index } title={value.title} eye={value.eye} time={value.time}/>)}
			</div>
		)
	}
}

export default Bidding
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
				<Link to='/notice/page/5446465'>
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
	{title:'汇诚普惠新系统上线！',eye:600,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠新系统上线！',eye:500,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠asd 新系统上线！',eye:10,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠新统上线！',eye:20,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠系统上线！',eye:30,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠新系统上线！',eye:50,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠新asd统上线！',eye:123,time:'2018-1-20 09:40:30'},
	{title:'汇诚普惠新系统上线！',eye:32,time:'2018-1-20 09:40:30'},
]


class Notice extends Component{


	render(){
		return(
			<div className='notice'>
				{arr.map((value,index)=><Items key={ index } title={value.title} eye={value.eye} time={value.time}/>)}
			</div>
		)
	}
}

export default Notice
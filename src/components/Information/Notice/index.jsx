import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import aboutAPI from '@/api/about'
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
				<Link to={'/notice/page/' + this.props.news_id}>
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

class Notice extends Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	async componentDidMount() {
		let data = await aboutAPI.getNotice()
		this.setState({
			arr:data
		})
	}
	render(){
		return(
			<div className='notice'>
				{this.state.arr.map((value,index)=><Items key={ index } title={value.news_title} eye={value.news_num} time={value.news_time} news_id={value.id}/>)}
			</div>
		)
	}
}

export default Notice
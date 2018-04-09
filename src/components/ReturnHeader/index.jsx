import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import {
	Row,
	Col,
	Icon,
} from 'antd'
import './index.less'

class ReturnHeader extends Component{
	render(){
		return(
			<Row className='return-header'>
				<Col span={2} >
					<Link to={this.props.href} className='left'><Icon type="left" /></Link>
				</Col>
				<Col span={20}>
					{this.props.title}
				</Col>
				<Col span={2}>
					
				</Col>
			</Row>
		)
	}
}

export default ReturnHeader
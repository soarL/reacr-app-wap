import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import {
	Row,
	Col,
	Icon
} from 'antd'
import './index.less'


class OptionItem extends Component{
	render(){
		return(
			<Row className="item">
				<Link to={this.props.href}>
					<Col span={23}>{this.props.title}</Col>
					<Col span={1} className="icon"><Icon type="right" /></Col>
				</Link>
			</Row>
		)
	}
}


const option = [
	{title:'关于我们',href:'/about/index'},
	{title:'对外公示',href:'/'},
	{title:'运营信息',href:'/'},
	{title:'风险管理',href:'/'},
	{title:'电子合同',href:'/'},
	{title:'法律法规',href:'/'},
	{title:'网贷课堂',href:'/'}
]

class About extends Component{
	render(){
		return(
			<div className='about'>
				<div className="box logo">
					<img src="http://asset.eph.com/src/images/public/logo.png" alt="logo"/>
				</div>
				<Row className="box fuwu">
					<Col span={12}>
						<Row>
							<Col span={7} className="icon">
								<span className='icon-box'>
									<Icon type="customer-service" />
								</span>
							</Col>
							<Col span={17} className='chart chart-1'>
								<h3><a href="tel:400-080-8885">400-080-8885</a></h3>
								<p>服务时间：90:00-21:00</p>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Row>
							<Col span={7} className='icon'>
								<span className='icon-box'>
									<Icon type="qq" />
								</span>
							</Col>
							<Col span={17} className="chart">
								<h3>在线客服</h3>
								<p>服务时间：90:00-21:00</p>
							</Col>
						</Row>
					</Col>
				</Row>

				<div className="box option">
					{option.map((value,index)=><OptionItem key={index} title={value.title} href={value.href}/>)}
				</div>
				<div className='box vesion'>
					<Row>
						<Col span={21} className='vesion-t'>版本号</Col>
						<Col span={3}>v1.1.2</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default About
import React,{ Component} from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import './index.less'
import aboutAPI from '@/api/about'
import {
	Row,
	Col,
	Icon,
	Spin
} from 'antd'

class AuditItem extends Component{
	render(){
		return(
			<Col span={12}>
				<div className='box-border'>
					{
						this.props.src ? <img src={this.props.src} alt={this.props.title} /> : ''
					}
					<div className='content'>
						<a href={this.props.href} target='_blank' rel="noopener noreferrer">
							<h2 style={this.props.src ? {color:'#fff'} : {color:'#000'}}>{this.props.title}</h2>
							<p>点击阅读<Icon type='right'/></p>
						</a>
					</div>
				</div>
			</Col>
		)
	}
}

class ItemsTr extends Component{
	render(){
		return(
			<tr>
				<td width='75%'>{this.props.nape}</td>
				<td width='25%'>{this.props.state}</td>
			</tr>
		)
	}
}

class Foreign extends Component{
	constructor(props){
		super(props)
		this.state={
			auditItems:[],
			legalItems:[],
			itemsTr:[],
			loading:true
		}
	}
	async componentDidMount() {
		let data = await aboutAPI.getForeignItems()
		this.setState({
			auditItems:data.auditItems,
			legalItems:data.legalItems,
			itemsTr:data.itemsTr,
			loading:false
		})
	}
	render(){
		return(
			<div className='foreign'>
				<ReturnHeader title='对外公示' href='/information'/>
				<div className='box padding-RL-15'>
					<div className='great'>
						<Title title='重大事件'/>
						<div>
							<Spin tip='Loading...' spinning={this.state.loading}>
								<table className='table'>
									<tbody>
										
											{
												this.state.itemsTr.map((value,index)=><ItemsTr nape={value.nape} state={value.state} key={index}/>)
											}
										
									</tbody>
								</table>
							</Spin>
						</div>
					</div>
					<div className='audit'>
						<Title title='审计报告'/>
						<Row>
							<Spin tip='Loading...' spinning={this.state.loading}>
							{
								this.state.auditItems.map((value,index)=><AuditItem key={index} src={value.src} title={value.title} href={value.href}/>)
							}
							</Spin>
						</Row>
					</div>
					<div className='audit'>
						<Title title='法人承诺书'/>
						<Row>
							<Spin tip='Loading...' spinning={this.state.loading}>
							{
								this.state.legalItems.map((value,index)=><AuditItem key={index} src={value.src} title={value.title} href={value.href}/>)
							}
							</Spin>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

export default Foreign
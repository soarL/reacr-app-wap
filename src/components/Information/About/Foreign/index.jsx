import React,{ Component} from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import './index.less'
import {
	Row,
	Col,
	Icon
} from 'antd'

const auditItems = [
	{src:'',title:'2016年4月至12月审计报告',href:'https://asset.91hc.com/src/images/index/disclosure/audit/2016%E5%B9%B44%E6%9C%88%E8%87%B312%E6%9C%88%E5%AE%A1%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf'},
	{src:'',title:'2017年度审计报告',href:'https://asset.91hc.com/src/images/index/disclosure/audit/2017%E5%B9%B4%E5%AE%A1%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf'},
	{src:'',title:'2018年1至2月审计报告',href:'https://asset.91hc.com/src/images/index/disclosure/audit/2018%E5%B9%B41-2%E6%9C%88%E5%AE%A1%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf'},
	{src:'',title:'专项审计报告',href:'https://asset.91hc.com/src/images/index/disclosure/audit/%E4%B8%93%E9%A1%B9%E5%AE%A1%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf'},
	{src:'',title:'法律意见书',href:'https://asset.91hc.com/src/images/index/disclosure/audit/%E6%B3%95%E5%BE%8B%E6%84%8F%E8%A7%81%E4%B9%A6.pdf'},
]

const legalItems = [
	{src:'',title:'法人承诺书',href:'https://asset.91hc.com/src/images/index/disclosure/promisebook.gif'},
]


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

class Foreign extends Component{
	render(){
		return(
			<div className='foreign'>
				<ReturnHeader title='对外公示' href='/information'/>
				<div className='box padding-RL-15'>
					<div className='great'>
						<Title title='重大事件'/>
						<div>
							<table className='table'>
								<tbody>
									<tr>
										<td width='75%'>公司减资、合并、分立、解散或申请破产</td>
										<td width='25%'>无</td>
									</tr>
									<tr>
										<td>公司依法进入破产程序</td>
										<td>无</td>
									</tr>
									<tr>
										<td>公司被责令停业、整顿、关闭</td>
										<td>无</td>
									</tr>
									<tr>
										<td>公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚</td>
										<td>无</td>
									</tr>
									<tr>
										<td>公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施</td>
										<td>无</td>
									</tr>
									<tr>
										<td>公司主要或者全部业务陷入停顿</td>
										<td>无</td>
									</tr>
									<tr>
										<td>存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项</td>
										<td>无</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='audit'>
						<Title title='审计报告'/>
						<Row>
							{
								auditItems.map((value,index)=><AuditItem key={index} src={value.src} title={value.title} href={value.href}/>)
							}
						</Row>
					</div>
					<div className='audit'>
						<Title title='法人承诺书'/>
						<Row>
							{
								legalItems.map((value,index)=><AuditItem key={index} src={value.src} title={value.title} href={value.href}/>)
							}
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

export default Foreign
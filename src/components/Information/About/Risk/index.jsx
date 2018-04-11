import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import {
	Row,
	Col
} from 'antd'
import './index.less'



const items=[
	{title:'预警信号风险提示①',info:'借款客户经营状况发生严重下滑、财务状况变差、还款能力出现较大变化'},
	{title:'预警信号风险提示②',info:'借款客户实际控制人或者经营决策人失联、财务人员频繁更换'},
	{title:'预警信号风险提示③',info:'新闻、百度等媒体有负面报道信息；供应商投诉长期拖欠货款等负面评价'},
	{title:'预警信号风险提示④',info:'经全国法院被执行人信息查询、风险信息网查询借款客户涉诉、民间借贷纠纷、受到行政处罚、税务处罚等'},
	{title:'预警信号风险提示⑤',info:'密切关注借款资金用途，如发现挪用作为股票投资、期货、其他金融衍生品等及有欺诈行为或其他损害出借人利益行为，立即要求提前清偿本平台本金和利息'},
	{title:'预警信号风险提示⑥',info:'每月查询同盾、上海资信、宜信资信等第三方数据，如发现借款人在其他超过5家不同的网络借贷信息中介机构平台申请借款；或各家平台借款余额超过500万元；或在其他平台出现借款逾期的，立即要求提前清偿本平台本金和利息'},
	{title:'预警信号风险提示⑦',info:'征信查询借款客户银行借款发生逾期或欠息；或者客户拒绝提供相关企业征信、实际控制人征信等相关信用审核有关文件'},
	{title:'预警信号风险提示⑧',info:'生产经营异常，负债突然猛增、负债比率过高、流动比率过低、获利能力大幅下降、银行收入流水大幅减少、存货异常变大、水电费支出大幅减少等'},
]

class Item extends Component{
	render(){
		return(
			<Col span={12} >
				<div className='item-box'>
					<div className=" header">
						<img src={require('./asset/alarm.png')} alt="alarm"/>
					</div>
					<h4>{this.props.title}</h4>
					<p>{this.props.info}</p>
				</div>
			</Col>
		)
	}
}

class Risk extends Component{
	render(){
		return(
			<div className="risk">
				<ReturnHeader title='风险管理' href='/information'/>
				<div className="banner">
					<img src={require('./asset/banner.png')} alt="banner"/>
				</div>
				<div className="box padding-RL-15 img-box">
					<Title title='风险管理架构'/>
					<div>
						<img src={require('./asset/senior.png')} alt="senior"/>
					</div>
					<Title title='项目风险评估'/>
					<div>
						<img src={require('./asset/risk.png')} alt="risk"/>
					</div>
					<Title title='催收方式'/>
					<div>
						<img src={require('./asset/collection.png')} alt="collection"/>
					</div>
				</div>
				<div className="box padding-RL-15">
					<Title title='贷后风险预警'/>
					<Row className='after-risk'>
						{
							items.map((value,index)=><Item title={value.title} info={value.info} key={index}/>)
						}
					</Row>
				</div>
			</div>
		)
	}
}

export default Risk
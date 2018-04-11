import React,{ Component } from 'react'
import Pilu from './Pilu'
import ZhiYin from './ZhiYin'
import BeiAn from './BeiAn'
import GuanLi from './GuanLi'

import {
	Modal
} from 'antd'

const items=[
	{title:'《网络借贷信息中介机构业务活动信息披露指引》',sketch:'《网络借贷信息中介机构业务活动信息披露指引》的出台，标志着网贷行业“1+3”制度（1个办法，3个指引）框架基本搭建完成，初步形成了较为完善的制度政策体系，进一步明确网贷行业规则，有效防范网贷风险，保护消费者权益，加快行业合规进程，实现网贷机构优胜劣汰，真正做到监管有法可依、行业有章可循。',time:'2017.08.28',detail:"Pilu"},
	{title:'《网络借贷资金存管业务指引》',sketch:'为贯彻落实人民银行等十部门《关于促进互联网金融健康发展的指导意见》和中国银监会等四部门《网络借贷信息中介机构业务活动管理暂行办法》关于建立客户资金第三方存管制度的工作部署和要求，实现客户资金与网络借贷信息中介机构自有资金分账管理，防范网络借贷资金挪用风险，银监会研究制定了网络借贷资金存管业务指引。',time:'2017.08.28',detail:"ZhiYin"},
	{title:'《网络借贷信息中介机构备案登记管理指引》',sketch:'银监会联合工信部、工商局发布了《网络借贷信息中介备案登记管理指引》，为新注册及已经设立并开展经营的网贷平台备案登记给予指引。',time:'2017.08.28',detail:"BeiAn"},
	{title:'《网络借贷信息中介机构业务活动管理暂行办法》',sketch:'为规范网络借贷信息中介机构业务活动，保护出借人、借款人、网络借贷信息中介机构及相关当事人合法权益，促进网络借贷行业健康发展，更好满足中小微企业和个人投融资需求，银监会发布了《网路借贷信息中介机构业务活动管理暂行办法》。',time:'2017.08.28',detail:"GuanLi"}
]

class Item extends Component{
	constructor(props){
		super(props)
		this.state={
			visible:false
		}
	}

	openPhotosShow=()=>{
		this.setState(a=>({visible:!this.state.visible}))
	}
	
	render(){
		let Component = Pilu
		if(this.props.detail==='ZhiYin'){
			Component = ZhiYin
		}else if(this.props.detail==='BeiAn'){
			Component = BeiAn
		}else if(this.props.detail==='GuanLi'){
			Component = GuanLi
		}
		return(
			<div className='item-box'>
				<h3>{this.props.title}</h3>
				<p>{this.props.sketch}<span onClick={this.openPhotosShow}>展开阅读全文 ></span></p>
				<h4>发布于{this.props.time}</h4>
				<Modal
		          title={this.props.title}
		          visible={this.state.visible}
		          footer={null}
		          destroyOnClose={ true }
		          onCancel={this.openPhotosShow}
		        >
		         <Component/>
		        </Modal>
			</div>
		)
	}
}

class Laws extends Component{
	render(){
		return(
			<div className='Laws'>
			{
				items.map((value,index)=><Item title={value.title} sketch={value.sketch} key={index} time={value.time} detail={value.detail}/>)
			}
			</div>
		)
	}
}
export default Laws
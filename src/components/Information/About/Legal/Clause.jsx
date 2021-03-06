import React,{ Component } from 'react'

const items=[
	{title:'关于投资人通过汇城普惠平台出借资金获得收益的合法性',sketch:'《释法[2015]18号最高人民法院关于审理民间借贷案件适用法律若干问题的规定》第二十六条：“借贷双方约定的利率未超过年利率24%，出借人请求借款人按照约定的利率支付利息的，人民法院应于予支持。”汇城普惠的出借利息收益均未超过24%，为合法利息收益，受到法律保护。',time:'2017.08.28'},
	{title:'关于电子合同的合法性',sketch:'根据《合同法》和《电子签名法》的规定，当事人可以采用合同书、信件和数据电文（包括电报、电传、传真、电子数据交换和电子邮件）等形式订立合同，并通过以电子形式所含、所符用于识别签名人身份并表明签名人认可其中内容的数据电文等电子签名方式进行签署，当事人不能仅因合同采用电子签名、数据电文的形式就否定其法律效力。',time:'2017.08.28'},
	{title:'关于汇城普惠平台提供居间撮合服务的合法性',sketch:'《合同法》第23章关于“居间合同”的规定，特别是第424条规定的“居间合同是居间人向委托人报告订立合同的机会或者提供订立合同的媒介服务，委托人支付报酬的合同”。汇城普惠平台作为网贷信息中介服务机构，为民间借贷提供撮合，使借贷双方形成借贷关系并收取相关报酬的居间服务有着明确的法律基础。',time:'2017.08.28'},
	{title:'关于投资人及借款人双方民间借贷关系的合法性',sketch:'《合同法》第196条：“借款合同是借款人想贷款人借款，到期返还借款并支付利息的合同”。《合同法》允许自然人等普通民间主体之间发生借贷关系，并允许出借方到期可以收回本金和符合法律规定的利息。',time:'2017.08.28'},
]

class Item extends Component{

	render(){
		return(
			<div className='item-box'>
				<h3>{this.props.title}</h3>
				<p>{this.props.sketch}</p>
				<h4>发布于{this.props.time}</h4>
			</div>
		)
	}
}

class Clause extends Component{
	render(){
		return(
			<div className='Laws'>
			{
				items.map((value,index)=><Item title={value.title} sketch={value.sketch} key={index} time={value.time} />)
			}
			</div>
		)
	}
}
export default Clause
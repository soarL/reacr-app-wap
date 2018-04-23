import React, { Component} from 'react'
import ReturnHeader from '@/components/ReturnHeader' 
import aboutAPI from '@/api/about'

class Num extends Component{
	constructor(props){
		super(props)
		this.state={
			title:'',
			author:'',
			time:'',
			content:''
		}
	}
	async componentWillMount() {
		let data = await aboutAPI.getAnnounceShow(this.props.match.params.id)
		this.setState({
			title:data.news_title,
			author:'汇诚',
			time:data.news_time,
			content:data.news_body
		})
	}
	render(){
		return(
			<div className='notice-item-page'>
				<ReturnHeader title='新标预告' href='/information'/>
				<div className="body">
					<div className='title'>
						<h3>{this.state.title}</h3>
						<p><span>作者：{this.state.author}</span>   <span>时间：{this.state.time}</span> </p>					
					</div>
					<div className='content' dangerouslySetInnerHTML={{__html:this.state.content}}>
					</div>
				</div>
			</div>
		)
	}
} 

export default Num
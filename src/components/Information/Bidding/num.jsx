import React, { Component} from 'react'
import ReturnHeader from '@/components/ReturnHeader' 


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
	componentWillMount() {
		this.setState({
			title:'新标预告',
			author:'汇诚',
			time:'2018-01-05',
			content:'有新标了'
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
					<div className='content'>
						{this.state.content}
					</div>
				</div>
			</div>
		)
	}
} 

export default Num
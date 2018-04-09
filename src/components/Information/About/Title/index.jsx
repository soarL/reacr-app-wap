import React,{ Component } from 'react'
import './index.less'


class Title extends Component{
	render(){
		return(
			<div className='information-title'>
				{this.props.title}
			</div>
		)
	}
}

export default Title
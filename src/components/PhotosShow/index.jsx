import React,{ Component } from 'react'
import {
	Icon,
	Spin
} from 'antd'
import './index.less'


class Item extends Component{
	constructor(props){
		super(props)
		this.state={
			loading:true
		}
	}
	componentDidMount(){
		document.getElementById('img').onload=(e)=>{
			this.setState({
			loading:false
			})
		}
	}
	render(){
		return(
			<div className='item'>
				<Spin spinning={this.state.loading} tip="Loading...">
					<img src={this.props.src} alt={this.props.src} id='img'/>
				</Spin>
			</div>
		)
	}
}

const items = [
	{'src':'https://asset.91hc.com/src/images/index/disclosure/honor_img_1.jpg'},
	{'src':'https://asset.91hc.com/src/images/index/disclosure/honor_img_2.jpg'},
	{'src':'https://asset.91hc.com/src/images/index/disclosure/honor_img_3.jpg'},
	{'src':'https://asset.91hc.com/src/images/index/disclosure/honor_img_4.jpg'},
	{'src':'https://asset.91hc.com/src/images/index/disclosure/honor_img_5.jpg'},
]

class PhotosShow extends Component{
	constructor(props){
		super(props)
		this.state={
			index:0
		}
	}

	next = ()=>{
		if(this.state.index===items.length - 1){
			this.setState({
				index:0
			})
		}else{
			this.setState({
				index:this.state.index + 1
			})
		}
	}
	prev = ()=>{
		if(this.state.index===0){
			this.setState({
				index:items.length - 1
			})
		}else{
			this.setState({
				index:this.state.index - 1
			})
		}
	}
  	render(){
  		return(
  			<div className='photos-show'>
  				{items.map((value,index)=>{
  					if(index===this.state.index){
  						return <Item src={value.src} key={index} index={index}/>
  					}else{
  						return false
  					}
  				})}

  				<div onClick={this.next} className='next'><Icon type="right" /></div>
  				<div onClick={this.prev} className='prev'><Icon type="left" /></div>
  				
  			</div>
  		)
  	}
}

export default PhotosShow
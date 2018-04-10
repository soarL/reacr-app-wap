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
				<h3>{this.props.title}</h3>
			</div>
		)
	}
}



class SeniorItem extends Component{
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
			<div className='senior-item'>
				<Spin spinning={this.state.loading} tip="Loading...">
					<div className='senior-item-box'>
						<img src={this.props.src} alt={this.props.src} id='img'/>
						<h3>{this.props.name}</h3>
						<h4>{this.props.duty}</h4>
						<div className='line'></div>
						<div>
							<p>{this.props.introduce}</p>
						</div>
					</div>
				</Spin>
			</div>
		)
	}
}

class PhotosShow extends Component{
	constructor(props){
		super(props)
		this.state={
			index:this.props.defaultIndex
		}
	}

	next = ()=>{
		if(this.state.index===this.props.imgArr.length - 1){
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
				index:this.props.imgArr.length - 1
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


  				{this.props.imgArr.map((value,index)=>{
  					if(this.props.mode==='senior'){
  						if(index===this.state.index){
  							return <SeniorItem src={value.src} key={index} index={index} introduce={value.introduce} name={value.name} duty={value.duty}/>
  						}else{
  							return false
  						}
  					}else{
	  					if(index===this.state.index){
	  						return <Item src={value.src} key={index} index={index} title={value.title}/>
	  					}else{
	  						return false
	  					}
  					}
  				})}

  				<div onClick={this.next} className='next'><Icon type="right" /></div>
  				<div onClick={this.prev} className='prev'><Icon type="left" /></div>
  				
  			</div>
  		)
  	}
}

export default PhotosShow
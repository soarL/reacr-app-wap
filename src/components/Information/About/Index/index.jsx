import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import { Button,Modal } from 'antd'
import PhotosShow from '@/components/PhotosShow'
import './index.less'


class AboutIndex extends Component{
	constructor(props){
		super(props)
		this.state={
			visible:false
		}
	}
	openPhotosShow = () => {
		this.setState(a=>({visible:!this.state.visible}))
	};
	render(){
		return(
			<div className='box'>
				<ReturnHeader title='公司概况' href='/information'/>
				<div className='padding-RL-15 about-index-body'>
					<div className='brief'>
						<Title title='公司简介'/>
						<p>
							回成都阿达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨分局向存款VB阿萨德八分裤和是科技创新货币USA电话覅荟萃显著撒的后端绥芬河设定已你的私服
						</p>
						<p>
							尿素氮阿萨德出手机会不合法哦啊是到付偶家手机端打扫房间意识到积分传
						</p>
						<p>
							阿萨德阿达按说明你是草拟嘲笑你是驾驶的甲壳虫阿萨德爱神的箭啊喀斯柯达 
						</p>
					</div>
					<div className='basic-info'>
						<Title title='公司简介'/>
						<table className='table'>
							<tbody>
								<tr>
									<td width='25%'>公司名称</td>
									<td width='75%'>福州汇诚金融外包服务有限公司</td>
								</tr>
								<tr>
									<td>公司名称</td>
									<td>福州汇诚金融外包服务有限公司</td>
								</tr>
								<tr>
									<td>公司名称</td>
									<td>福州汇诚金融外包服务有限公司</td>
								</tr>
								<tr>
									<td>公司名称</td>
									<td>asd福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司福州汇诚金融外包服务有限公司asd</td>
								</tr>
								<tr>
									<td>公司名称</td>
									<td>福州汇诚金融外包服务有限公司</td>
								</tr>
								<tr>
									<td>公司名称</td>
									<td>福州汇诚金融外包服务有限公司</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className='honor'>
						<Title title='荣誉资质'/>
						<Button type="primary" onClick={this.openPhotosShow}>打开</Button>
						<Modal
				          footer={null}
				          visible={this.state.visible}
				          onCancel={this.openPhotosShow}
				        >
				        	<PhotosShow />
				        </Modal>
					</div>
				</div>

			</div>
		)
	}
}

export default AboutIndex
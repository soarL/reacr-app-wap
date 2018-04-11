import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import aboutAPI from '@/api/about'
import { 
	Modal,
	Row,
	Col,
	Icon,
	Spin
} from 'antd'
import PhotosShow from '@/components/PhotosShow'
import './index.less'


const honorItems = [
	{'src':require('./asset/honor_img_1.jpg'),title:'汇诚普惠营业执照'},
	{'src':require('./asset/honor_img_2.jpg'),title:'汇诚普惠网国际域名注册证书'},
	{'src':require('./asset/honor_img_3.jpg'),title:'福建省互联网金融协会会员单位证书'},
	{'src':require('./asset/honor_img_4.jpg'),title:'汇诚普惠组织机构代码证'},
	{'src':require('./asset/honor_img_5.jpg'),title:'汇诚普惠开户许可证'},
	{'src':require('./asset/honor_img_6.png'),title:'安全评测报告'},
]

class HonorItem extends Component{
	render(){
		return(
			<Col span={12} className='img-box-1'>
				<div className='img-border' onClick={this.props.handle}>
					<img src={this.props.src} alt={this.props.title}/>
				</div>
				<h3>{this.props.title}</h3>
			</Col>
		)
	}
}

class SeniorItem extends Component{
	render(){
		return(
			<Col span={12} className='img-box-1'>
				<div className='senior-border' onClick={this.props.handle}>
					<img src={this.props.src} alt={this.props.name}/>
					<h3>{this.props.name}</h3>
					<p>{this.props.duty}</p>
					<div>详细介绍<Icon type='right'/></div>
				</div>
			</Col>
		)
	}
}

class PartnerItem extends Component{
	render(){
		return(
			<Col span={12}>
				<div className="partner-item-border">
					<img src={this.props.src} alt={this.props.src}/>
				</div>
			</Col>
		)
	}
}


class AboutIndex extends Component{
	constructor(props){
		super(props)
		this.state={
			honorModal:false,
			seniorModal:false,
			honorOverflow:{height:'240px'},
			honorIconType:'down',
			seniorIconType:'down',
			honorIndex:0,
			seniorIndex:0,
			seniorOverflow:{height:'240px'},
			seniorItems:[],
			partnerItems:[],
			loading:true,

		}
	}

	HonorOverflow=()=>{
		this.setState(a=>{
			if(this.state.honorOverflow.height==='240px'){
				return {honorOverflow:{height:'auto'},honorIconType:'up'}
			}else{
				return {honorOverflow:{height:'240px'},honorIconType:'down'}
			}
		})
	}
	SeniorOverflow=()=>{
		this.setState(a=>{
			if(this.state.seniorOverflow.height==='240px'){
				return {seniorOverflow:{height:'auto'},seniorIconType:'up'}
			}else{
				return {seniorOverflow:{height:'240px'},seniorIconType:'down'}
			}
		})
	}
	openPhotosShow = (index)=>{
		this.setState(a=>({honorModal:!this.state.honorModal,honorIndex:index}))
	}
	openSeniorPhotoShow = (index)=>{
		this.setState(a=>({seniorModal:!this.state.seniorModal,seniorIndex:index}))
	}
	async componentDidMount() {
		let data = await aboutAPI.getIndexData()
		this.setState({
			seniorItems:data.seniorItems,
			partnerItems:data.partnerItems,
			loading:false
		})
	}
	render(){
		return(
			<div className='box'>
				<ReturnHeader title='公司概况' href='/information'/>
				<div className='padding-RL-15 about-index-body'>
					<div className='brief'>
						<Title title='公司简介'/>
						<p>
							汇诚普惠（www.91hc.com）成立于2016年4月22日，注册资本5000万元，是福州汇诚金融外包服务有限公司旗下网络借贷信息中介平台。平台于2016年6月18日正式上线运营，目前业务涵盖房优贷款、车险优贷款，借助于计算机云存储、电子合同存证、移动支付和征信大数据等多项互联网技术，为广大出借人和借款人提供高效、便捷、优质的网络借贷服务。
						</p>
						<p>
							2017年11月，汇诚普惠系统全新升级上线，平台始终坚持合规经营，主动拥抱监管，全面接受政府及社会公众的监督，并履行相应的信息披露义务。 公司坚信，互联网金融不仅可以解决个人及中小微企业融资难的问题，同时也给广大出借人带来更高的财富收益。本着“诚信为本、共赢发展”的经营理念，公司将不断努力在互联网金融普惠之路上前行。
						</p>
						<p>
							未来，互联网金融将进入规范化运营的新阶段，平台始终将围绕着“合规为先、风控为重、产品为主、服务至上”的经营思路，竭诚为客户提供优质的网贷信息中介服务。
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
									<td>公司类型</td>
									<td>有限责任公司</td>
								</tr>
								<tr>
									<td>注册资本</td>
									<td>伍仟万圆整</td>
								</tr>
								<tr>
									<td>注册地址</td>
									<td>福建省福州市鼓楼区温泉街道五四路71号国贸广场二层Q单元-1</td>
								</tr>
								<tr>
									<td>办公场地</td>
									<td>福建省福州市鼓楼区温泉街道五四路71号国贸广场二层H单元-1</td>
								</tr>
								<tr>
									<td>成立时间</td>
									<td>2016年04月22日</td>
								</tr>
								<tr>
									<td>法定代表人</td>
									<td>刘振洲</td>
								</tr>
								<tr>
									<td>经营范围</td>
									<td>接受金融机构委托从事金融信息技术外包；接受金融机构委托从事金融业  务流程外包；商务信息咨询、数据处理服务；市场信息咨询、市场调查；电子技术的技术开发、技术服务供应链管理；承办设计、制作、代理发布国内的各类广告；企业管理咨询、企业投资咨询（不含金融、证券、期货）；企业形象策划；办公设备及配件的代购代销。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</td>
								</tr>
								<tr>
									<td>平台名称</td>
									<td>汇诚普惠</td>
								</tr>
								<tr>
									<td>网站域名</td>
									<td>www.91hc.com</td>
								</tr>
								<tr>
									<td>平台上线时间</td>
									<td>2017年06月18日</td>
								</tr>
								<tr>
									<td>统一社会信用代码</td>
									<td>91350104MA347QHDXN</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='honor'>
						<Title title='荣誉资质'/>
						<div className='overflow-img-box' style={this.state.honorOverflow}>
							<Row className='img-box'>
								{
									honorItems.map((value,index)=><HonorItem handle={this.openPhotosShow.bind(this,index)} key={index} src={value.src} title={value.title}/>)
								}
							</Row>
						</div>
						<div className='more' onClick={this.HonorOverflow}>
							<Icon type={this.state.honorIconType} />
						</div>
						<Modal
				          footer={null}
				          destroyOnClose={ true }
				          visible={this.state.honorModal}
				          onCancel={this.openPhotosShow}
				        >
				        	<PhotosShow imgArr={ honorItems } defaultIndex={this.state.honorIndex}/>
				        </Modal>
					</div>
					<div className="senior">
						<Title title='公司高管'/>

						<div className='overflow-img-box' style={this.state.seniorOverflow}>
							<Spin tip='Loading...' spinning={this.state.loading}>
							<Row className='img-box'>
								{
									this.state.seniorItems.map((value,index)=><SeniorItem src={value.src} name={value.name} duty={value.duty} key={index} handle={this.openSeniorPhotoShow.bind(this,index)} />)
								}
							</Row>
							</Spin>
						</div>
						<div className='more' onClick={this.SeniorOverflow}>
							<Icon type={this.state.seniorIconType} />
						</div>

						<Modal
				          footer={null}
				          destroyOnClose={ true }
				          visible={this.state.seniorModal}
				          onCancel={this.openSeniorPhotoShow}
				        >
				        	<PhotosShow imgArr={ this.state.seniorItems } defaultIndex={this.state.seniorIndex} mode='senior'/>
				        </Modal>
					</div>
					<div className="stock">
						<Title title='股权信息'/>
						<p>（截止2017年11月20日）</p>
						<h2>福州汇诚金融外包服务有限公司股权结构图</h2>
						<div className='stock-info'>
							<img src={require('./asset/stock-info.png')} alt="stock-info"/>
						</div>
					</div>
					<div className="framework">
						<Title title='组织架构'/>
						<div>
							<img src={require('./asset/framework.png')} alt="framework"/>
						</div>
					</div>
					<div className='contact-us'>
						<Title title='联系我们'/>
						<div  className='iframe'>
							<iframe src='./map.html' title='asdasd'></iframe>
						</div>
						<p>地址：福建省福州市鼓楼区五四路国贸广场2楼H单元</p>
						<p>电话：400-080-8885</p>
					</div>
					<div className="partner">
						<Title title='合作机构'/>
						<Spin tip='Loading...' spinning={this.state.loading}>
							<Row>
								{
									this.state.partnerItems.map((value,index)=><PartnerItem  src={value.src} key={index}/>)
								}
							</Row>
						</Spin>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutIndex
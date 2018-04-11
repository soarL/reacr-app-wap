import React,{ Component } from 'react'
import ReturnHeader from '@/components/ReturnHeader'
import Title from '@/components/Information/About/Title'
import './index.less'

class Contract extends Component{
	render(){
		return(
			<div className='contract'>
				<ReturnHeader title='电子合同' href='/information'/>
				<div className='banner'>
					<img src={require('./asset/banner.png')} alt="banner"/> 
				</div>
				<div className='box padding-RL-15'>
					<div className='jieru'>
						<Title title='接入安存电子数据保全系统'/>
						<p> 杭州安存网络科技有限公司创建于2008年，”打造诚信信息世界”是安存的愿景，“瞬间证明虚拟世界的真实性”是安存的任务。凭借20年中国法律服务及信息安全领域专业研发经验沉淀，安存致力于服务全球电子数据存证领域。</p>
						<p>基于互联网+的产业浪潮，各行各业都在加速互联网化，数据呈爆炸式增长，大数据时代已经正式到来，企业及个人的行为方式越来越趋于数据化、无纸化。2013年1月1日实施的《中华人民共和国民事诉讼法》第63条已经明确将电子数据列为单一证据类别—电子数据证据成为法定证据。安存，基于全数据生命周期电子数据存管与证明体系，从数据生成与创建、数据存储与传输、数据取证的数据生命环节，闭环解决电子数据与司法证据间的要求差异，使之符合司法要求。</p>
						<p>安存电子数据保全系统（无忧存证）是为汇诚普惠客户量身打造的一套专业的电子数据存证。为投资人提供出借凭证保全服务，保全后的出借凭证将被加密固定，无法人为篡改，提升电子合同的真实有效性，为客户的合法权益保驾护航。</p>
					</div>
					<div className="shuzhi">
						<Title title='电子数据存证'/>
						<p>对平台的数据、信息进行最高级别加密传输保护、分布式云存储隔离和安全防护保障，保证数据实时同步备份过程及存储过程中没有被 篡改，使得电子存证相关的法律服务具有法律效力。</p>
						<div className='img-box'>
							<img src={require('./asset/suzhi.png')} alt="suzhi"/>
						</div>
					</div>
					<div className="baoquan">
						<Title title='投资证据链信息保全'/>
						<div className='img-box'>
							<img src={require('./asset/baoquan.png')} alt="suzhi"/>
						</div>
					</div>
					<div className='jishu'>
						<Title title='技术安全'/>
						<div className='img-box'>
							<img src={require('./asset/jishu.png')} alt="suzhi"/>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
export default Contract
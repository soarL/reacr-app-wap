import React,{ Component } from 'react'
import Title from '@/components/Information/About/Title'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import {
	Row,
	Col
} from 'antd'

class OperaData extends Component{

	componentDidUpdate() {
		const sex = echarts.init(document.getElementById('sex'))
		const age = echarts.init(document.getElementById('age'))
		sex.setOption({
			backgroundColor: '#fff', //图表的配置颜色
			color: ['#3b8ce1', '#dbdbdb'], //每一项对应的颜色
		    series : [{
                    name:'男女比例',  //名字--用于tooltip的显示
                    type:'pie',    //类型--饼状图
                    clockWise:false,   //饼图的扇区是否是顺时针排布。
                    radius : [45,60], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
                    center:['30%', '50%'], //饼图片的中心
                    hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
                    zlevel:2,
                    data:[  //系列中的数据内容数组
                        {
                            value:this.props.data.data.investerManRate,     //数据值总的值
                            name:'男'  //数据项名称。
                        },
                        {
                            value:this.props.data.data.investerWomenRate,     //剩下的值
                            name:'女'
                        }
                    ],
                    label:{
                    	show:false
                    }
                }]
		});
		age.setOption({
			backgroundColor: '#fff', //图表的配置颜色
			color: ['#e8d67d', '#a1cf87','#eaac7b','#3b8ce1','#c2c7d6','#dbdbdb'], //每一项对应的颜色
		    series : [{
                    name:'年龄分布',  //名字--用于tooltip的显示
                    type:'pie',    //类型--饼状图
                    clockWise:false,   //饼图的扇区是否是顺时针排布。
                    radius : [45,60], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
                    center:['30%', '50%'], //饼图片的中心
                    hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
                    zlevel:2,
                    data:[  //系列中的数据内容数组
                        {
                            value:this.props.data.data.invester18,     //数据值总的值
                            name:'25岁以下'  //数据项名称。
                        },
                        {
                            value:this.props.data.data.invester26,     //剩下的值
                            name:'26~30岁'
                        },
                        {
                            value:this.props.data.data.invester31,     //剩下的值
                            name:'31~35岁'
                        },
                        {
                            value:this.props.data.data.invester36,     //剩下的值
                            name:'36~40岁'
                        },
                        {
                            value:this.props.data.data.invester41,     //剩下的值
                            name:'41~45岁'
                        },
                        {
                            value:this.props.data.data.invester46,     //剩下的值
                            name:'46~50岁'
                        }
                    ],
                    label:{
                    	show:false
                    }
                }]
		});
	}
	render(){
		const data = this.props.data.data
		return(
			<div className='opera-data'>
				<div className='info'>
					<Title title='平台运营信息'/>
					<p className='jiezhi'>（截止{data.date}）</p>
					<Row className='row'>
						<Col span={12} className='item'>
							<h2>{data.total ? data.total + 1586.9 : " 0 "}万</h2>
							<p>累计交易总额</p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.count ? data.count + 47 : " 0 "}</h2>
							<p>累计交易笔数</p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.totalZoneEr ? data.totalZoneEr: " 0 "}万</h2>
							<p>累计借款总余额 </p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.totalBlack ? data.totalBlack : " 0 "}万</h2>
							<p>关联关系借款余额</p>
						</Col>
					</Row>
				</div>

				<div className='info'>
					<Title title='借款人情况'/>
					<Row className='row'>
						<Col span={12} className='item'>
							<h2>{data.loanerCount ? data.loanerCount + 42 : " 0 "}</h2>
							<p>累计借款人数量</p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.nLoanerCount ? data.nLoanerCount : " 0 "}</h2>
							<p>当前借款人数量</p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.tenLoaner ? data.tenLoaner : " 0 "}%</h2>
							<p>前十大借款人待还金额占比 </p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.firstLoaner ? data.firstLoaner : " 0 "}%</h2>
							<p>最大单一借款人待还金额占比</p>
						</Col>
					</Row>
				</div>

				<div className='lender'>
					<Title title='出借人情况'/>
					<Row className='row'>
						<Col span={12}>
							<h2>{data.investerCount ? data.investerCount + 37 : " 0 "}</h2>
							<p>累计出借人数量</p>
						</Col>
						<Col span={12}>
							<h2>{data.nInvesterCount ? data.nInvesterCount : " 0 "}</h2>
							<p>当前借款人数量</p>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Row className='sex-info'>
								<Col span={10}>
									<h3>性别分布</h3>
								</Col>
								<Col span={14}>
									<Row>
										<Col span={8}>
											男
										</Col>
										<Col span={12}>
											{data.investerManRate ? data.investerManRate : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#3b8ce1"}}></span>
										</Col>
										<Col span={8}>
											女
										</Col>
										<Col span={12}>
											{data.investerWomenRate ? data.investerWomenRate : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#dbdbdb"}}></span>
										</Col>
									</Row>
								</Col>
							</Row>
							<div id='sex' style={{height:'150px'}}></div>
						</Col>
						<Col span={24}>
							<Row className='sex-info'>
								<Col span={10}>
									<h3>年龄分布</h3>
								</Col>
								<Col span={14}>
									<Row>
										<Col span={8}>
											25岁以下
										</Col>
										<Col span={12}>
											 {data.invester18 ? data.invester18 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#e8d67d"}}></span>
										</Col>
										<Col span={8}>
											26~30岁
										</Col>
										<Col span={12}>
											{data.invester26 ? data.invester26 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#a1cf87"}}></span>
										</Col>

										<Col span={8}>
											31~35岁
										</Col>
										<Col span={12}>
											{data.invester31 ? data.invester31 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#eaac7b"}}></span>
										</Col>

										<Col span={8}>
											36~40岁
										</Col>
										<Col span={12}>
											{data.invester36 ? data.invester36 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#3b8ce1"}}></span>
										</Col>

										<Col span={8}>
											41~45岁
										</Col>
										<Col span={12}>
											{data.invester41 ? data.invester41 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#c2c7d6"}}></span>
										</Col>

										<Col span={8}>
											46~50岁
										</Col>
										<Col span={12}>
											{data.invester46 ? data.invester46 : " 0.00 "}%
										</Col>
										<Col span={4}>
											<span className="dian" style={{backgroundColor:"#dbdbdb"}}></span>
										</Col>
									</Row>

								</Col>
							</Row>
							<div id='age' style={{height:'150px'}}></div>
						</Col>
					</Row>
				</div>

				<div className='info'>
					<Title title='逾期情况'/>
					<Row className='row'>
						<Col span={12} className='item'>
							<h2>{data.delayTotal ? data.delayTotal : " 0"}万</h2>
							<p>逾期金额</p>
						</Col>
						<Col span={12} className='item'>
							<h2>{data.delay ? data.delay : " 0"}</h2>
							<p>逾期笔数</p>
						</Col>
						<Col span={12} className='item'>
							<h2>0.00万</h2>
							<p>逾期90天以上金额 </p>
						</Col>
						<Col span={12} className='item'>
							<h2>0</h2>
							<p>逾期90天以上笔数</p>
						</Col>
					</Row>
				</div>

				<div className='lender'>
					<Title title='代偿情况'/>
					<Row className='row'>
						<Col span={12}>
							<h2>0万</h2>
							<p>代偿金额</p>
						</Col>
						<Col span={12}>
							<h2>0</h2>
							<p>代偿笔数</p>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}


export default OperaData
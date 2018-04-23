import Server from '@/api/server'
import Storage from '@/api/localStorage'

class About extends Server{
	async getReportData(){

		let data = Storage.get('operationinfo')
		if(!data){
			data = await this.GETJSON('./data/json/information/about/operationinfo.json')
			Storage.add({operationinfo:data})
		}
		return data.report
	}
	async getForeignItems(){
		let data = Storage.get('foreign')
		if(!data){
			data = await this.GETJSON('./data/json/information/about/foreign.json')
			Storage.add({foreign:data})
		}
		return {
			auditItems:data.auditItems,
			legalItems:data.legalItems,
			itemsTr:data.itemsTr
		}
	}
	async getIndexData(){
		let data = Storage.get('aboutIndex')

		if(!data){
			data = await this.GETJSON('./data/json/information/about/index.json')
			Storage.add({aboutIndex:data})
		}
		return{
			seniorItems:data.seniorItems,
			partnerItems:data.partnerItems
		}
	}
	async getNotice(){
		let data = await this.GET('api/list?type=notice')
		return data.newsList.data
	}
	async getNoticeShow(id=0){
		let data = await this.GET('api/show',{id})
		return data.news
	}
	async getAnnounce(){
		let data = await this.GET('api/list?type=announce')
		return data.newsList.data
	}
	async getAnnounceShow(id=0){
		let data = await this.GET('api/show',{id})
		return data.news
	}
	async getOpendata(id=0){
		let data = await this.GET('api/opendata')
		return data
	}
}

export default new About()
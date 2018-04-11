import Server from '@/api/server'

class About extends Server{
	async getReportData(){
		let data = await this.GETJSON('./data/json/information/about/operationinfo.json')
		return data.report
	}
	async getForeignItems(){
		let data = await this.GETJSON('./data/json/information/about/foreign.json')
		return {
			auditItems:data.auditItems,
			legalItems:data.legalItems,
			itemsTr:data.itemsTr
		}
	}
	async getIndexData(){
		let data = await this.GETJSON('./data/json/information/about/index.json')
		return{
			seniorItems:data.seniorItems,
			partnerItems:data.partnerItems
		}
	}
}

export default new About()
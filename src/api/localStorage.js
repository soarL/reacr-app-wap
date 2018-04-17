/**
 * Storage 本地化存储类 过期时间默认7小时。
 * add 添加属性，和改一起
 * del 删除属性，
 * delAll 删除全部，
 * get 查
 */ 
import {
	message
} from 'antd'
import Server from '@/api/server'

class Storage extends Server{
	constructor(props){
		super(props)
		if(!window.localStorage){
			message.error('您的浏览器不支持Storage!会导致本站功能无法正常使用！建议使用Chrome浏览器。或者其他浏览器！')
		}else{
			this.Storage = window.localStorage
			this.updata()
		}
	}

	updata = async ()=>{
		let data = await this.GETJSON('./data/version.json')
		this.version = data.version
	}

	add(data={}){
		for(let key in data){
			if(typeof data[key] === 'object'){
				data[key]['version'] = this.version
				this.Storage.setItem(key,JSON.stringify(data[key]))
			}else{
				let datas = {
					value:data[key]
				}
				datas['version'] = this.version
				this.Storage.setItem(key,JSON.stringify(datas))
			}
		}
	}
	del(key){
		this.Storage.removeItem(key)
	}
	delAll(){
		this.Storage.clear()
	}
	get(key){
		let data = this.Storage.getItem(key)
		if(!data){
			return false
		}
		if(!JSON.parse(data).version){
			return false
		}
		if(JSON.parse(data).version===this.version){
			return JSON.parse(data)
		}
		return false
	}
}

export default new Storage()
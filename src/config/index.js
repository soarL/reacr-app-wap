let baseURL,
	assetURL,
	ENV = process.env.NODE_ENV,
	web={
		main:'https://www.91hc.com',
		user:'https://user.91hc.com'
	}

if(ENV==="development"){
	// 开发环境中使用代理避免跨域问题，留空
	baseURL=''
	assetURL=''
}else{
	// 生产环境中接口地址
	baseURL='http://api.hcjrfw.com/api'
	// 打包后文件存放的目录。
	assetURL = "http://192.168.1.132"
}

export {
	baseURL,
	web,
	assetURL
}
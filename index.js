const express = require('express');
const app = express();

// 中间件解析 JSON 请求体
app.use(express.json());

// 定义路由处理函数
const handleRequest0 = (req, res) => {
	const response = {
		"status": "OK"
	};
	sendJsonResponse(res, response);
};

const handleRequest1 = (req, res) => {
	  const response = {
		      "cacheExpirationDays": 365,
		      "message": "Device Valid",
		      "resultCode": "GOOD"
		    };
	  sendJsonResponse(res, response);
};

const handleRequest2 = (req, res) => {
	  const response = {
		      "featId": "",
		      "registered": true,
		      "expDate": "2299-01-01",
		      "key": ""
		    };
	  sendJsonResponse(res, response);
};

const handleRequest3 = (req, res) => {
	  const response = {
		      "deviceStatus": "0",
		      "planType": "Lifetime",
		      "subscriptions": {}
		    };
	  sendJsonResponse(res, response);
};

// 发送 JSON 响应的辅助函数
const sendJsonResponse = (res, data) => {
	  res.setHeader('Content-Type', 'application/json; charset=utf-8');
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "*");
	  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	  res.header("Access-Control-Allow-Credentials", "true");
	  res.json(data);
};

// 使用 app.all() 处理 GET 和 POST 请求
app.all('/', handleRequest0);
app.all('/admin/service/registration/validateDevice', handleRequest1);
app.all('/admin/service/registration/validate', handleRequest2);
app.all('/admin/service/registration/getStatus', handleRequest3);

// 启动服务器
app.listen(3000, () => {
	  console.log('Server listening on port 3000');
});

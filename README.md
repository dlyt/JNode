## Installation

1.  Clone the repository: git clone https://github.com/dlyt/JNode.git
*  Install the application: `npm install`
*  Place your own Mysql URI in conf/db.js and models/index.js
*  Start the server: `npm start`
*  View in browser at http://localhost:3000
*  test: `npm test`

## API示例

### 请求url:
* http://localhost:3000/api/city

### 请求方式:
* POST

### 参数:

| 参数名 | 必选 | 类型 | 说明 |
|:-------------:|:-------------|:-------------|:-------------|
| city | true | string | 城市名称 |

### 返回示例
```
{
  "code": "0",
  "msg": "请求成功",
  "value": 23
}
```

### 返回参数说明

| 参数名| 类型 | 说明 |
|:-------------:|:-------------|:-------------|
| code | int | 0: 表示请求成功, 1: 表示请求失败 |
| value | int | 城市ID |

# 购物车

## 介绍

> 主要实现了一个虚拟的购物车，以便让它的用户能够同时购买多件商品，从而获得更好的购物体验，支持多件商品，多个折扣，以及优惠

## 需求分析

- 输入功能

- 支持产品目录

- 支持多个不同类目的促销

- 支持订购多个商品

- 支持结算日期

- 支持优惠券优惠

## 功能设计

### 值的收集

- textarea的value收集

- 产品目录的数据mock

### 行为收集

- 点击输出textarea的异常value处理

### 值的处理

- textarea值的分割
  - 促销信息
    - 促销日期
      - 日期转换

    - 促销折扣
    - 促销品类

  - 所购产品
    - 数量
    - 商品
    - 单价

  - 结算日期
    - 日期转换

  - 优惠券信息
    - 日期
      - 日期转换

    - 门槛
    - 折扣


#### 公用方法

- 日期方法处理
- 浮点值的精度计算
- 判断是否结算日期对于促销or优惠是否过期

### 值的计算

- 看需求促销和优惠是可以共享的
- 促销公式为
  - N代表物品数量，T代表类目，P代表价格， D代表折扣，isT代表是否是折扣类目
  - `discountResult = isT ? N * （P * D）:  N * P`
- 优惠公式为，pro 代表多个产品，thr 代表门槛，M代表优惠金额 ,由上个公式得
  - `reducedPrice = pro * discountResult > thr ? (pro * discountResult - M) : pro * discountResult` 

### 界面展示

- 输入界面
- 预置的case
- 点击按钮
- 结果展示包含错误展示

## 运行方法

- 界面计算运行
  - 直接用浏览器打`index.html`文件即可
- 单元测试运行
  - `node`环境为14.15.0
  - 需要按照`jest`
  - 运行 `npm run jest`命令

## 功能介绍

- 输入框
  - 按照制式格式输入购物车信息

- case 按钮
  - 点击case按钮会直接 在 `textarea`里产生预置的数据
- checkout按钮
  - 点击按钮会直接计算购物车的信息，生成结果或者错误信息
- 结算信息
  - 展示结果或错误信息

## 代码目录

```txt
+ test   单元测试文件夹
	- calc.test.js  计算类的单元测试
	- split.test.js 分割字符串类的单元测试
	- testData.js   单元测试的测试数据
	
- calc.js   计算类
- index.css 首页样式
- index.html 首页页面
- index.js 首页JS主要是dom操作
- mock.js 类目的mock数据
- package.json 项目信息
- README.md 自述文件
- split.js 分割类
- yarn.lock 锁文件
```


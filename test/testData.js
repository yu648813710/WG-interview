// 测试数据
const testData = {
    normalData: {
        inputData: `
        2021.11.11 | 0.95 | 日用品 
        2021.11.11 | 0.90 | 电子 
        10 * 餐巾纸 : 29.00 
        10 * 伏特加 : 799.00
        1 * 笔记本电脑 : 4000.00
    
        2021.11.11 
        2021.12.12 1500 300 
        `,
        splitTextVal: `
        2021.11.11 | 0.95 | 日用品 
        2021.11.11 | 0.90 | 电子 
        10 * 餐巾纸 : 29.00 
        10 * 伏特加 : 799.00
        1 * 笔记本电脑 : 4000.00
    
        2021.11.11 
        2021.12.12 1500 300 
        `,
        splitPromotionInfo: [
            {
                date: '2021.11.11',
                discount: '0.95',
                goodsType: '日用品',
            },{
                date: '2021.11.11',
                discount: '0.90',
                goodsType: '电子',
            },
        ],
        splitGoodsInfo: [
            {
                num: '10',
                goodsName: '餐巾纸',
                price: '29.00',
            },{
                num: '10',
                goodsName: '伏特加',
                price: '799.00',
            },{
                num: '1',
                goodsName: '笔记本电脑',
                price: '4000.00',
            },
        ],
        splitClosingDateInfo: '2021.11.11',
        splitCouponInfo: {
            date: '2021.12.12',
            threshold: '1500',
            couponNum: '300',
        },
        calcGoodsData: [
            {
                num: '10',
                goodsName: '餐巾纸',
                price: '29.00',
                type: '日用品',
                discountPrice: 275.5,
            },{
                num: '10',
                goodsName: '伏特加',
                price: '799.00',
                type: '酒类',
                discountPrice: 7990,
            },{
                num: '1',
                goodsName: '笔记本电脑',
                price: '4000.00',
                type: '电子',
                discountPrice: 3600,
            },
        ],
        calcResult: '11565.50'
    },
    lackGoodsData: { // 缺少商品数据
        inputData: `
        2021.11.11 | 0.7 | 电子 
    
        2021.11.11 
        2021.12.2 1000 200 
        `,
        splitTextVal: `
        2021.11.11 | 0.7 | 电子 
    
        2021.11.11 
        2021.12.2 1000 200 
        `,
        splitErrInfo: '请输入商品信息',
        calcGoodsData: [],
        calcResult: '0.00'
    },
    lackClosingData: { // 缺少提交日期
        inputData: `
        2021.11.11 | 0.95 | 日用品 
        10 * 餐巾纸 : 29.00 
        10 * 伏特加 : 799.00
        1 * 笔记本电脑 : 4000.00
    
        2014.3.2 1000 200 
        `,
        splitTextVal: `
        2021.11.11 | 0.95 | 日用品 
        10 * 餐巾纸 : 29.00 
        10 * 伏特加 : 799.00
        1 * 笔记本电脑 : 4000.00
    
        2014.3.2 1000 200 
        `,
        splitErrInfo: '请输入结算日期',
        calcGoodsData: [],
        calcResult: '0.00'
    },
    nullData: { // 空数据
        splitErrInfo: '暂无输入数据',
        inputData: ``,
        calcGoodsData: [],
        calcResult: '0.00'
    },
};

module.exports = testData;
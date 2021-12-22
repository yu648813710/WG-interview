class Parse {
    constructor(val) {
      this.textVal = val;
      this.transformData();
    }
    
    // 输入信息
    textVal = null;

    // 错误信息
    errInfo = null;

    // 促销信息
    promotionInfo = null;
    // 商品信息
    goodsInfo = null;
    // 结算日期
    closingDateInfo = null;
    // 优惠券信息
    couponInfo = null;
    // 会员信息
    memberInfo = null;
    
    // 处理错误信息
    setErrorInfo (val) {
        this.errInfo = val;
    }

    // 转换数据
    transformData () {
        if(!this.textVal) {
            this.setErrorInfo('暂无输入数据');

            return;
        }; 

        this.getPromotionInfo();
        this.getGoodsInfo();
        this.getCouponInfo();
        this.getClosingDateInfo();
        this.getMemberInfo();
    }

    // 判断是否为正确日期
    isDate (dateStr) {
        if (!dateStr) return false;
        return !isNaN(new Date(dateStr).getTime());
    }

    // 获取促销信息
    getPromotionInfo () {
        const regex = /^\d{4}.\d{1,2}.\d{1,2}\s\|\s\d{1}.\d{1,2}\s\|\s[\s\S]+$/;

        const strArr = this.textVal.split('\n').map(res => res.trim());

        this.promotionInfo = strArr.filter(res => regex.test(res)).map(res => {
            const resArr = res.split('|');

            return {
                date: resArr[0].trim(), // 促销日期
                discount: resArr[1].trim(), // 促销折扣
                goodsType: resArr[2].trim(), // 促销类目
            }
        }).filter(res => this.isDate(res.date));;
    }

    // 获取 商品信息
    getGoodsInfo () {
        const regex = /^\d+\s\*\s[\s\S]+\s\:\s\d+\.\d{2}$/;

        const strArr = this.textVal.split('\n').map(res => res.trim());

        const resultArr = strArr.filter(res => regex.test(res)).map(res => {
            const resArr = res.split('*');

        const strGoodsAndPrice = resArr[1].split(':');

            return {
                num: resArr[0].trim(), // 商品数量
                goodsName: strGoodsAndPrice[0].trim(), // 商品名称
                price: strGoodsAndPrice[1].trim(), // 商品价格
            }
        });

        if (!resultArr.length) {
            this.setErrorInfo('请输入商品信息');
        }

        this.goodsInfo = resultArr;
    }

    // 获取 优惠券信息
    getCouponInfo () {
        const regex = /^\d{4}.\d{1,2}.\d{1,2}\s\d+\s\d+\s[\s\S]+$/;

        const strArr = this.textVal.split('\n').map(res => res.trim());

        const resultArr = strArr.filter(res => regex.test(res)).map(res => {
            const resArr = res.split(' ');

            return {
                date: resArr[0], // 日期
                threshold: resArr[1], // 门槛
                couponNum: resArr[2], // 优惠金额
                type: resArr[3], // 类目类型
            }
        }).filter(res => this.isDate(res.date));

        this.couponInfo = resultArr
    }

    // 获取 结算日期
    getClosingDateInfo () {
        const regex = /^\d{4}.\d{1,2}.\d{1,2}$/;

        const strArr = this.textVal.split('\n').map(res => res.trim());

        const resultArr = strArr.filter(res => regex.test(res)).filter(res => this.isDate(res));

        if (!resultArr.length) {
            this.setErrorInfo('请输入结算日期');
        }

        this.closingDateInfo = resultArr[0];
    }
    // 获取会员信息
    getMemberInfo () {
      const regex = /[SGU][\s\S]+/;

      const strArr = this.textVal.split('\n').map(res => res.trim());

      const result = strArr.filter(res => regex.test(res))[0];
      
      this.memberInfo = result;
    }
};

// 解决 node 与 浏览器环境不一样问题
var window;

if (!window) {
    module.exports = Parse;
}
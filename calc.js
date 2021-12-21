class Calc {
    constructor(data, mockData) {
        this.shoppingCartData = data;
        this.categoryData = mockData;

        this.calcResult()
    }
    // 购物车数据
    shoppingCartData = null;
    // 类目商品数据
    categoryData = null;
    // 商品数据
    goodsData = null;
    // 倍数
    multiple = 100;

    // 结果
    result = null;

    calcResult() {
        if (!this.shoppingCartData) return;

        const { 
            couponInfo, // 优惠数据
            goodsInfo, // 商品数据
            promotionInfo, // 折扣数据
            closingDateInfo // 提交日期
         } = this.shoppingCartData;

        if(!goodsInfo || !goodsInfo.length || !closingDateInfo) return;
        
        this.goodsDataAddType(goodsInfo);

        this.calcPromotion(promotionInfo, closingDateInfo);

        this.calcCoupon(couponInfo, closingDateInfo);
    }

    // 数值计算
    numMath(prevNum, nextNum, type) {
        const mulPrevNum = prevNum * this.multiple;
        const mulNextNum = nextNum * this.multiple;

        switch (type) {
            case '+':
                return (mulPrevNum + mulNextNum) / this.multiple;
            case '-':
                return (mulPrevNum - mulNextNum) / this.multiple;
            case '*':
                return (mulPrevNum * mulNextNum) / (this.multiple ** 2);
        }
    }

    // 计算优惠or折扣日期相比较提交日期是否 过期
    isOverdue(discountsDate, submitDate) {
        const discountsTime = new Date(discountsDate).getTime();
        const submitTime = new Date(submitDate).getTime();

        return discountsTime < submitTime;
    }

    // 加工商品数据给商品数据带上类目
    goodsDataAddType(data) {
        const itemData = this.categoryData.map(res => res.item.map(itemRes => ({
            ...itemRes,
            type: res.name,
        }))).flat(Infinity);

        this.goodsData = data.map(res => {
            const typeArr = itemData.filter(itemRes => itemRes.name === res.goodsName);
            
            return {
                ...res,
                type: typeArr[0] ? typeArr[0].type : null, 
            }
        }).filter(res => res.type);
    }

    // 计算折扣
    calcPromotion (promotionInfo, closingDate) {
        // 过滤失效折扣以及非法折扣
        const validPromotionData = promotionInfo.filter(res => !this.isOverdue(res.date, closingDate)).filter(res => !isNaN(+res.discount))

        this.goodsData = this.goodsData.map(res => {
            const promotionInfo = validPromotionData.filter(proRes => proRes.goodsType === res.type)[0];

            const discount = promotionInfo ? promotionInfo.discount : 1;

            const discountPrice = this.numMath(res.num, this.numMath(res.price, discount, '*'), '*')

            return {
                ...res,
                discountPrice
            }
        })
    }

    // 计算优惠
    calcCoupon (couponInfo, closingDate) {
        const discountTotal = this.goodsData.reduce((prevNum, res) => this.numMath(prevNum, res.discountPrice, '+') ,0);

        if(!couponInfo) {
            this.result = discountTotal.toFixed(2);
            return; 
        }

        const {date, threshold, couponNum} = couponInfo;


        if (this.isOverdue(date, closingDate)) {
            this.result = discountTotal.toFixed(2);
            return; 
        }

        if (threshold > discountTotal) {
            this.result = discountTotal.toFixed(2);
            return; 
        }

        this.result = this.numMath(discountTotal, couponNum, '-').toFixed(2);
    }
}

// 解决 node 与 浏览器环境不一样问题
var window;

if (!window) {
    module.exports = Calc;
}
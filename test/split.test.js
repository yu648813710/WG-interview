const Split = require("../split");
const testData = require("./testData");

describe("test split class", () => {
  test("test normalData", () => {
    const normalData = testData.normalData;
    const splitResult = new Split(normalData.inputData);
    expect(splitResult.textVal).toEqual(normalData.splitTextVal);
    expect(splitResult.errInfo).toBeNull();
    expect(splitResult.promotionInfo).toEqual(normalData.splitPromotionInfo);
    expect(splitResult.goodsInfo).toEqual(normalData.splitGoodsInfo);
    expect(splitResult.couponInfo).toEqual(normalData.splitCouponInfo);
    expect(splitResult.closingDateInfo).toBe(normalData.splitClosingDateInfo);
  });

  test("test lackGoodsData", () => {
    const lackGoodsData = testData.lackGoodsData;
    const splitResult = new Split(lackGoodsData.inputData);
    expect(splitResult.textVal).toEqual(lackGoodsData.splitTextVal);
    expect(splitResult.errInfo).toBe(lackGoodsData.splitErrInfo);
  });

  test("test lackGoodsData", () => {
    const lackGoodsData = testData.lackGoodsData;
    const splitResult = new Split(lackGoodsData.inputData);
    expect(splitResult.textVal).toEqual(lackGoodsData.splitTextVal);
    expect(splitResult.errInfo).toBe(lackGoodsData.splitErrInfo);
  });

  test("test lackClosingData", () => {
    const lackClosingData = testData.lackClosingData;
    const splitResult = new Split(lackClosingData.inputData);
    expect(splitResult.textVal).toEqual(lackClosingData.splitTextVal);
    expect(splitResult.errInfo).toBe(lackClosingData.splitErrInfo);
  });

  test("test nullData", () => {
    const nullData = testData.nullData;
    const splitResult = new Split(nullData.inputData);
    expect(splitResult.textVal).toBe("");
    expect(splitResult.errInfo).toBe(nullData.splitErrInfo);
    expect(splitResult.promotionInfo).toBeNull();
    expect(splitResult.goodsInfo).toBeNull();
    expect(splitResult.couponInfo).toBeNull();
    expect(splitResult.closingDateInfo).toBeNull();
  });

  test("test setErrorInfo", () => {
    const splitResult = new Split();
    const testStr = "测试";
    splitResult.setErrorInfo(testStr);
    expect(splitResult.errInfo).toBe(testStr);
  });

  test("test isDate", () => {
    const { isDate } = new Split();
    const correctDateStr = "2022.1.1";
    const errDateStr = "2022.111.1";
    const nullDateStr = "";
    const other = "asdasd";
    expect(isDate(correctDateStr)).toBeTruthy();
    expect(isDate(errDateStr)).toBeFalsy();
    expect(isDate(nullDateStr)).toBeFalsy();
    expect(isDate(other)).toBeFalsy();
  });
});

const Calc = require("../calc");
const Split = require("../split");
const mockData = require("../mock");
const testData = require("./testData");

describe("test calc class", () => {
  test("test normalData", () => {
    const normalData = testData.normalData;
    const splitResultObj = new Split(normalData.inputData);
    const calcResult = new Calc(splitResultObj, mockData);
    expect(calcResult.result).toBe(normalData.calcResult);
    expect(calcResult.goodsData).toEqual(normalData.calcGoodsData);
  });
  
  test("test lackGoodsData", () => {
    const lackGoodsData = testData.lackGoodsData;
    const splitResultObj = new Split(lackGoodsData.inputData);
    const calcResult = new Calc(splitResultObj, mockData);
    expect(calcResult.result).toBeNull();
    expect(calcResult.goodsData).toBeNull();
  });
  
  test("test lackClosingData", () => {
    const lackClosingData = testData.lackClosingData;
    const splitResultObj = new Split(lackClosingData.inputData);
    const calcResult = new Calc(splitResultObj, mockData);
    expect(calcResult.result).toBeNull();
    expect(calcResult.goodsData).toBeNull();
  });
  
  test("test nullData", () => {
    const nullData = testData.nullData;
    const splitResultObj = new Split(nullData.inputData);
    const calcResult = new Calc(splitResultObj, mockData);
    expect(calcResult.result).toBeNull();
    expect(calcResult.goodsData).toBeNull();
  });
  
  test("test numMath", () => {
    const calcResult = new Calc();
    expect(calcResult.numMath(0.05, 0.01, '*')).toBe(0.0005);
    expect(calcResult.numMath(0.05, 0.01, '+')).toBe(0.06);
    expect(calcResult.numMath(0.05, 0.01, '-')).toBe(0.04);
  });
  
  test("test isOverdue", () => {
    const calcResult = new Calc();
    const testDate = '2021.12.19'

    expect(calcResult.isOverdue('2021.11.01', testDate)).toBeTruthy();
    expect(calcResult.isOverdue(testDate, testDate)).toBeFalsy();
    expect(calcResult.isOverdue('2021.12.20', testDate)).toBeFalsy();
  });
});

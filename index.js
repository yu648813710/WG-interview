
const checkout = function () {
  const inputDom = document.getElementById("input");

  const val = inputDom.value;

  const splitResultObj = new Split(val);

  const { errInfo } = splitResultObj;

  if (errInfo) {
    setResult(errInfo);
    return;
  }

  const { result } = new Calc(splitResultObj, mockData);
  setResult(`金额为${result}`);
};

const setResult = function (val) {
  const resultValDom = document.getElementById("resultVal");

  const strHtml = `<p>${val}</p>`;

  resultValDom.innerHTML = strHtml;
};

const caseMap = {
  A: `2013.11.11 | 0.7 | 电子 
  1 * ipad : 2399.00 
  1 * 显示器 : 1799.00
  12 * 啤酒 : 25.00
  5 * 面包 : 9.00

  2013.11.11 
  2014.3.2 1000 200 `,
  B: `
  3 * 蔬菜 : 5.98 
  8 * 餐巾纸 : 3.20
  
  2014.01.01
  `,
};

const caseInput = function (type) {
  const inputDom = document.getElementById("input");
  inputDom.value = caseMap[type];
};

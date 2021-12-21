// 类目数据
const mockData = [
    {
        name: '电子',
        key: 'electronic',
        item: [
            {
                name: 'ipad',
                key: 'ipad',
            },{
                name: 'iphone',
                key: 'iphone',
            },{
                name: '显示器',
                key: 'displayer',
            },{
                name: '笔记本电脑',
                key: 'computer',
            },{
                name: '键盘',
                key: 'keyboard',
            },
        ]
    },
    {
        name: '食品',
        key: 'food',
        item: [
            {
                name: '面包',
                key: 'bread',
            },
            {
                name: '饼干',
                key: 'biscuits',
            },
            {
                name: '蛋糕',
                key: 'cake',
            },
            {
                name: '牛肉',
                key: 'beef',
            },
            {
                name: '鱼',
                key: 'fish',
            },
            {
                name: '蔬菜',
                key: 'vegetable',
            },
        ]  
    },
    {
        name: '日用品',
        key: 'dailyNecessities',
        item: [
            {
                name: '餐巾纸',
                key: 'napkin',
            },
            {
                name: '收纳箱',
                key: 'containingBox',
            },
            {
                name: '咖啡杯',
                key: 'coffeeCup',
            },
            {
                name: '雨伞',
                key: 'umbrella',
            },
        ]  
    },
    {
        name: '酒类',
        key: 'liquor',
        item: [
            {
                name: '啤酒',
                key: 'beer',
            },
            {
                name: '白酒',
                key: 'liqueur',
            },
            {
                name: '伏特加',
                key: 'vodka',
            },
        ]  
    }
];

// 解决 node 与 浏览器环境不一样问题
var window;

if (!window) {
    module.exports = mockData;
}
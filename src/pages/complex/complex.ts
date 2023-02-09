interface status {
    name: string;
    num: number
}
export default class Complex implements status {
    num: number
    name: string
    constructor(num: number, name: string) {
        this.num = num
        this.name = name
    }

    getNum = function (): number {
        return 1
    }
    static getChildrenList(num: number) {
        let childrenList: { height: number; width: number; backgrounColor: string }[] = []
        for (let i = 0; i < num; i++) {
            childrenList.push({
                "height": this.getElementSize(),
                "width": this.getElementSize(),
                "backgrounColor": this.getElementBackgrounColor(),
            })
        }
        return childrenList
    }
    // 获取元素大小
    static getElementSize(): number {
        return Math.floor(Math.random() * 150)
    }
    // 元素颜色
    static getElementBackgrounColor(): string {
        const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let bgColor = []
        const index = 6;
        for (let i = 0; i < index; i++) {
            bgColor.push(colorArr[Math.floor(Math.random() * colorArr.length)])
        }
        return bgColor.join('')
    }
    /**
     * @deprecated 主轴方向参数
     * @returns JSON 
     */
    static getDirection() {
        const newArr = [
            {
                type: 'row',
                status: false,
                name: '横向',
            },
            {
                type: 'column',
                status: false,
                name: '纵向',
            }
        ]
        return newArr
    }

    /**
     * @deprecated 换行参数
     * @returns JSON 
     */
    static getWrap() {
        const newArr = [
            {
                type: 'wrap',
                status: false,
                name: '换行',
            },
            {
                type: 'nowrap',
                status: false,
                name: '不换行',
            }
        ]
        return newArr
    }

    /**
     * @deprecated 主轴对齐方式参数
     * @returns JSON 
     */
    static getAlignContent() {
        const newArr = [
            {
                type: 'center',/* 将项目放置在中点 */
                status: false,
                name: 'center',
            },
            {
                type: 'flex-start',
                status: false,
                name: 'flex-start',
            },
            {
                type: 'flex-end',
                status: false,
                name: 'flex-end',
            },
            {
                type: 'space-between',
                status: false,
                name: 'space-between',
            },
            {
                type: 'space-around',
                status: false,
                name: 'space-around',
            },
            {
                type: 'space-evenly',
                status: false,
                name: 'space-evenly',
            }, {
                type: 'normal', // 默认对齐
                status: false,
                name: 'normal',
            }, {
                type: 'stretch',
                status: false,
                name: 'stretch',
            }, {
                type: 'start',/* 最先放置项目 */
                status: false,
                name: 'start',
            }, {
                type: 'end',/* 最后放置项目 */
                status: false,
                name: 'end',
            }, {
                type: 'baseline',/* 基线对齐 */
                status: false,
                name: 'baseline',
            }, {
                type: 'first baseline',/* 开始基线对齐 */
                status: false,
                name: 'first baseline',
            }, {
                type: 'last baseline',/* 最后基线对齐 */
                status: false,
                name: 'last baseline',
            },
            {
                type: 'safe center',/* 溢出对齐 */
                status: false,
                name: 'safe center',
            },
            {
                type: 'unsafe center',/* 溢出对齐 */
                status: false,
                name: 'unsafe center',
            },
            {
                type: 'inherit',/* 继承 */
                status: false,
                name: 'inherit',
            },
            {
                type: 'initial',/* 初始值 */
                status: false,
                name: 'initial',
            },
            {
                type: 'unset',/* 未设置 */
                status: false,
                name: 'unset',
            },

        ]
        return newArr
    }

    /**
     * @deprecated 主轴对齐方式参数
     * @returns JSON 
     */
    static getJustifyContent() {
        const newArr = [
            {
                type: 'center',
                status: false,
                name: 'center',
            },
            {
                type: 'flex-start',
                status: false,
                name: 'flex-start',
            },
            {
                type: 'flex-end',
                status: false,
                name: 'flex-end',
            }, {
                type: 'space-around',
                status: false,
                name: 'space-around',
            },
            {
                type: 'space-between',
                status: false,
                name: 'space-between',
            },
            {
                type: 'stretch',
                status: false,
                name: 'stretch',
            },

        ]
        return newArr
    }

    /**
     * @deprecated 副轴上的排序方式参数
     * @returns JSON 
     */
    static getAlignItems() {
        const newArr = [
            {
                type: 'center',
                status: false,
                name: 'center',
            },
            {
                type: 'flex-start',
                status: false,
                name: 'flex-start',
            },
            {
                type: 'flex-end',
                status: false,
                name: 'flex-end',
            }, {
                type: 'stretch',
                status: false,
                name: 'stretch',
            },
            {
                type: 'baseline',
                status: false,
                name: 'baseline',
            }]
        return newArr
    }


}



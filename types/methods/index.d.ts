/**
 * 常用公共方法
 */
import type { Collection } from '../public';
/**
 * @returns {number} output value
 * @param str
 */
export declare function byteLength(str: string): number;
/**
 * @param {Array} actual
 * @returns {Array}
 */
export declare function cleanArray(actual: number[]): number[];
/**
 * url参数转对象
 * @param {string} url
 * @returns {Object}
 */
export declare function param2Obj(url: string): Record<string, any>;
/**
 * @param {string} val
 * @returns {string}
 */
export declare function html2Text(val: string): string;
/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export declare function objectMerge(target: Record<string, any>, source: any[]): any[] | Record<string, any>;
/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export declare function toggleClass(element: Element, className: string): void;
/**
 * @param {Array} arr
 * @returns {Array}
 */
export declare function uniqueArr(arr: any[]): any[];
/**
 * 判断变量类型
 * @param v
 * @returns {string}
 */
export declare function myTypeof(v: any): string;
/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
export declare function isValidVal(val: any): boolean;
/**
 * 去掉对象属性前后空格
 */
export declare function trimObj(obj: Record<string, any>): Record<string, any>;
/**
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param {Array/Object} group - 集合，被查找的集合，必填
 * @param {Function/String/Number/Boolean} condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} childKey - 集合子元素的key，默认值 children
 * @param {Array} path - 递归用参数，逻辑内部参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export declare function findPath({ group, condition, pathKey, childKey, path }: {
    group: Collection;
    condition: (item: any) => boolean;
    pathKey?: any;
    childKey?: any;
    path?: string[];
}): Array<string | number>;
/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {Array|Object} group 被查找的集合
 * @param {Function|String|Number|Boolean} condition 查找的条件或值
 * @param {Boolean} getPath 是否返回路径，默认为：false，返回找到的元素
 * @returns {*}
 */
export declare function findCollection(group: Collection, condition: (e: any) => boolean, getPath?: boolean): any;
/**
 * 描述：数值类型格式化
 * @returns
 * @param str 待转换的字符串，
 * @param dftVal 如果str为空或者parseFloat解析结果为NaN时 返回的默认值 ，不传默认返回0
 * @param num 保留几位小数 不传默认保留2位
 * @param actNum 结果需要乘以的数字
 * @param endStr 结尾需要拼接的字符串
 */
export declare function parseFloatFormat(str: string | number, dftVal: string | number, num: number, actNum: number, endStr: string): string | number;
/**
 * 图片拼接
 */
export declare function imageSplicing(path: string): string;

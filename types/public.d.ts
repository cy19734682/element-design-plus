import type { SlateDescendant } from '@wangeditor/editor';
import type { ElTableColumn } from 'element-plus';
declare module '@wangeditor/editor' {
    interface SlateText {
        text: string;
    }
    interface SlateElement {
        type: string;
        children: SlateDescendant[];
    }
}
declare global {
    interface Window {
        BMap?: any;
        _global?: Record<string, any>;
        _AMapSecurityConfig?: Record<string, any>;
        AMapSecure?: string;
        ActiveXObject?: (type: string) => void;
    }
}
export interface PlainObject extends Object {
    [k: keyof any]: any;
}
export type Collection = PlainObject | PlainObject[];
export interface Option {
    label?: string;
    val?: string | number;
    disabled?: boolean;
    [x: string]: any;
}
export interface FormItem {
    ak?: string;
    activeColor?: string;
    activeText?: string;
    activeValue?: string | boolean | number;
    align?: string;
    allowHalf?: boolean;
    autoUpload?: boolean;
    append?: string;
    asyncOption?: boolean;
    autoSize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    checkboxType?: string;
    changeOption?: boolean | {
        valKey: string;
        key: string;
    } | {
        valKey: string;
        key: string;
        notRequired?: boolean;
    }[];
    checkStrictly?: boolean;
    class?: string;
    collectLabel?: {
        valKey: string;
        key: string;
    } | {
        valKey: string;
        key: string;
    }[];
    colors?: string[] | object;
    controls?: boolean;
    controlsPosition?: boolean;
    columns?: typeof ElTableColumn[];
    data?: object;
    dateType?: string;
    defaultVal?: any;
    defaultVal2?: any;
    disabled?: boolean;
    disabledDate?: Function;
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
    disabledVoidColor?: string;
    editorConfig?: object;
    endPlaceholder?: string;
    fill?: string;
    fileName?: string;
    filterable?: boolean;
    format?: string[];
    formatTooltip?: <T>(d: T) => T;
    headers?: object;
    height?: number | string;
    icon?: string;
    inputPlaceholder?: string;
    inactiveColor?: string;
    inactiveText?: string;
    inactiveValue?: string | boolean | number;
    isRange?: boolean;
    itemBorder?: boolean;
    key?: string;
    key2?: string;
    label?: string;
    labelKey?: string;
    length?: number;
    level?: number;
    listType?: string;
    localOption?: any[];
    marks?: object;
    mapHeight?: string;
    max?: number;
    minLength?: number;
    maxLength?: number;
    maxSize?: number;
    min?: number;
    mode?: string;
    multiple?: boolean;
    pageSize?: number;
    options?: Option[];
    optionFilter?: <T>(d: T) => T;
    optionLabel?: string | string[];
    optionUrl?: string;
    optionVal?: string;
    password?: boolean;
    paramData?: object;
    pickerOptions?: object;
    placeholder?: string;
    placement?: string;
    precision?: number;
    prepend?: string;
    readonly?: boolean;
    separator?: string;
    scoreTemplate?: string;
    selectKey?: string;
    selectWidth?: string;
    selectPlaceholder?: string;
    show?: {
        key: string;
        val: any[];
    } | {
        key: string;
        val: any[];
    }[] | (<T>(d: T) => T);
    showAllLevels?: boolean;
    showOr?: boolean;
    showPassword?: boolean;
    showStops?: boolean;
    showScore?: boolean;
    showText?: boolean;
    showTooltip?: boolean;
    slotName?: string;
    slotPosition?: string;
    step?: number;
    startPlaceholder?: string;
    searchForm?: Option[];
    textColor?: string;
    texts?: string[];
    toolbarConfig?: object;
    type: string;
    trigger: string;
    url?: string;
    val?: any;
    valKey?: string;
    vertical?: boolean;
    voidColor?: string;
    width?: number | string;
    withCredentials?: boolean;
    radioType?: string;
    range?: boolean;
    rangeSeparator?: string;
    [x: string]: any;
}

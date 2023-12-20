import type { FormItem } from '../../public';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: FormItem[] | undefined;
    formRules?: Record<string, any> | undefined;
    showMessage?: boolean | undefined;
    inlineMessage?: boolean | undefined;
    itemWidth?: string | undefined;
    labelWidth?: string | undefined;
    inline?: boolean | undefined;
    labelPosition?: "top" | "right" | "left" | undefined;
    size?: "default" | "small" | "large" | undefined;
    showLongOkBt?: boolean | undefined;
    showInlineClearBt?: boolean | undefined;
    showInlineOkBt?: boolean | undefined;
    longOkBtTxt?: string | undefined;
    inlineOkBtTxt?: string | undefined;
    inlineClearBtTxt?: string | undefined;
    inlineOkBtIcon?: any;
    inlineClearBtIcon?: any;
    btnLoading?: boolean | undefined;
    trim?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    formData: () => never[];
    formRules: () => {};
    showMessage: boolean;
    inlineMessage: boolean;
    itemWidth: string;
    labelWidth: string;
    inline: boolean;
    labelPosition: string;
    size: string;
    showLongOkBt: boolean;
    showInlineClearBt: boolean;
    showInlineOkBt: boolean;
    btnLoading: boolean;
    trim: boolean;
    disabled: boolean;
}>, {
    clearForm: () => void;
    resetForm: () => Promise<void>;
    reRenderForm: () => Promise<void>;
    updateDataGroup: (data: Record<string, any>, notClearOthers?: boolean) => void;
    updateFormDataT: (d: any[] | Record<string, any>) => void;
    changeLoading: (v?: boolean | undefined) => void;
    getDataGroup: () => Record<string, any>;
    submit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-item-change" | "on-submit")[], "on-item-change" | "on-submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: FormItem[] | undefined;
    formRules?: Record<string, any> | undefined;
    showMessage?: boolean | undefined;
    inlineMessage?: boolean | undefined;
    itemWidth?: string | undefined;
    labelWidth?: string | undefined;
    inline?: boolean | undefined;
    labelPosition?: "top" | "right" | "left" | undefined;
    size?: "default" | "small" | "large" | undefined;
    showLongOkBt?: boolean | undefined;
    showInlineClearBt?: boolean | undefined;
    showInlineOkBt?: boolean | undefined;
    longOkBtTxt?: string | undefined;
    inlineOkBtTxt?: string | undefined;
    inlineClearBtTxt?: string | undefined;
    inlineOkBtIcon?: any;
    inlineClearBtIcon?: any;
    btnLoading?: boolean | undefined;
    trim?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    formData: () => never[];
    formRules: () => {};
    showMessage: boolean;
    inlineMessage: boolean;
    itemWidth: string;
    labelWidth: string;
    inline: boolean;
    labelPosition: string;
    size: string;
    showLongOkBt: boolean;
    showInlineClearBt: boolean;
    showInlineOkBt: boolean;
    btnLoading: boolean;
    trim: boolean;
    disabled: boolean;
}>>> & {
    "onOn-item-change"?: ((...args: any[]) => any) | undefined;
    "onOn-submit"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "default" | "small" | "large";
    labelPosition: "top" | "right" | "left";
    labelWidth: string;
    inline: boolean;
    inlineMessage: boolean;
    showMessage: boolean;
    trim: boolean;
    formData: FormItem[];
    formRules: Record<string, any>;
    itemWidth: string;
    showLongOkBt: boolean;
    showInlineClearBt: boolean;
    showInlineOkBt: boolean;
    btnLoading: boolean;
}, {}>, Partial<Record<any, (_: {
    dataGroup: Record<string, any>;
}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

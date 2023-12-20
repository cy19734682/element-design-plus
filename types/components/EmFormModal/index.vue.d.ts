declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    formData?: any[] | undefined;
    width?: string | undefined;
    btnLoading?: boolean | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
}>, {
    formData: () => never[];
    width: string;
    btnLoading: boolean;
}>, {
    resetForm: () => Promise<void>;
    reRenderForm: () => Promise<void>;
    updateDataGroup: (data: Record<string, any>, notClearOthers?: boolean | undefined) => void;
    updateFormDataT: (data: Record<string, any>) => void;
    changeLoading: (val?: boolean | undefined) => void;
    open: () => void;
    close: () => void;
    submit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-search" | "on-close")[], "on-search" | "on-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    formData?: any[] | undefined;
    width?: string | undefined;
    btnLoading?: boolean | undefined;
    okBtTxt?: string | undefined;
    cancelBtTxt?: string | undefined;
}>, {
    formData: () => never[];
    width: string;
    btnLoading: boolean;
}>>> & {
    "onOn-search"?: ((...args: any[]) => any) | undefined;
    "onOn-close"?: ((...args: any[]) => any) | undefined;
}, {
    width: string;
    formData: any[];
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

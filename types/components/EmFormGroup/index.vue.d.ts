declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: any[] | undefined;
}>, {
    formData: () => never[];
}>, {
    resetForm: () => Promise<void>;
    reRenderForm: () => Promise<void>;
    updateDataGroup: (data: Record<string, any>, notClearOthers?: boolean | undefined) => void;
    updateFormDataT: (data: Record<string, any>) => void;
    changeLoading: (val?: boolean | undefined) => void;
    submit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-search"[], "on-search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    formData?: any[] | undefined;
}>, {
    formData: () => never[];
}>>> & {
    "onOn-search"?: ((...args: any[]) => any) | undefined;
}, {
    formData: any[];
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

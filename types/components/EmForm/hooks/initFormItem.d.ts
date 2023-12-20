/**
 * 初始化表单
 * @param formData
 */
export declare function initFormItems(formData: any[]): {
    formDataT: globalThis.Ref<any[]>;
    tempKeys: globalThis.Ref<Record<string, any>>;
    dataGroup: globalThis.Ref<Record<string, any>>;
    clearFormData: (t: string, k: any) => void;
    resetFormItems: () => void;
};

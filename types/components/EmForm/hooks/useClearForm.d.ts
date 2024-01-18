import type { Ref } from 'vue';
/**
 * 重置表单相关hooks
 * @param formData 表单Props的值
 * @param formDataT
 * @param tempKeys
 * @param dataGroup
 * @param elFormRef
 */
export default function (formData: any[] | undefined, formDataT: Ref<any[]>, tempKeys: Ref<Record<string, any>>, dataGroup: Ref<Record<string, any>>, elFormRef: Ref<any>): {
    resetForm: () => Promise<void>;
    reRenderForm: () => Promise<void>;
    clearForm: () => void;
    clearFormData: (t: string, k: any) => void;
};

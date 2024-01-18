import type { Ref } from 'vue';
/**
 * 更新表单相关hooks
 */
export default function (formData: any[] | undefined, formDataT: Ref<any[]>, tempKeys: Ref<Record<string, any>>, dataGroup: Ref<Record<string, any>>, elFormRef: Ref<any>): {
    updateDataGroup: (data: Record<string, any>, notClearOthers?: boolean) => void;
    updateFormDataT: (d: any[] | Record<string, any>) => void;
};

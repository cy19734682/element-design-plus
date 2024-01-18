import type { Ref } from 'vue';
/**
 * 初始化表单
 * @param formData
 * @param formDataT
 * @param tempKeys
 * @param dataGroup
 */
export default function (formData: any[] | undefined, formDataT: Ref<any[]>, tempKeys: Ref<Record<string, any>>, dataGroup: Ref<Record<string, any>>): {
    initDataGroup: () => void;
    initItems: () => void;
};

/**
 * 重置表单相关hooks
 * @param formData 表单Props的值
 */
export default function (formData?: any[]): {
    resetForm: () => Promise<void>;
    reRenderForm: () => Promise<void>;
    clearForm: () => void;
    clearFormData: (t: string, k: any) => void;
};

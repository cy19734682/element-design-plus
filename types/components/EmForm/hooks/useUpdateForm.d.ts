/**
 * 更新表单相关hooks
 */
export default function (): {
    updateDataGroup: (data: Record<string, any>, notClearOthers?: boolean) => void;
    updateFormDataT: (d: any[] | Record<string, any>) => void;
};

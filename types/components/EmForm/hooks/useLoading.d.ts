/**
 * 提交按钮loading效果
 * @returns {{}}
 */
export default function (): {
    showLoading: globalThis.Ref<boolean>;
    changeLoading: (v?: boolean) => void;
};

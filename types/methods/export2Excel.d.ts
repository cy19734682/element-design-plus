/**
 * 通过表格dom导出Excel
 * @param id 表格ID
 * @param b 开始列数
 * @param e 结束列数
 * @param filename 导出名称
 * @param bookType 导出文件格式
 */
export declare function exportTableToExcel(id: string, b: number, e: number, filename?: string, bookType?: any): void;
/**
 * 通过JSON数据导出Excel
 * @param multiHeader
 * @param header
 * @param data
 * @param filename
 * @param merges
 * @param autoWidth
 * @param bookType
 */
export declare function exportJsonToExcel({ multiHeader, header, data, filename, merges, autoWidth, bookType }: Record<string, any>): void;

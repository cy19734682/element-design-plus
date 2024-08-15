import { saveAs } from 'file-saver';
import JSZip from 'jszip'

/**
 * 压缩并导出文件
 * @param th 表头
 * @param jsonData 数据
 * @param fileName 文件名称
 */
export function exportTxtToZip(th:any[], jsonData: any[], fileName: string) {
  const zip = new JSZip()
  const zip_name = fileName || 'file'
  const data = jsonData
  let txtData = `${th}\r\n`
  data.forEach((row:Record<string, any>) => {
    let tempStr = ''
    tempStr = row.toString()
    txtData += `${tempStr}\r\n`
  })
  zip.file(`data.txt`, txtData)
  zip.generateAsync({
    type: "blob"
  }).then((blob: Blob) => {
    saveAs(blob, `${zip_name}.zip`)
  }, () => {
    alert('导出失败')
  })
}

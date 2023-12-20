import { saveAs } from 'file-saver';
import JSZip from 'jszip'

/**
 * 压缩并导出text文件
 * @param th
 * @param jsonData
 * @param txtName
 * @param zipName
 */
export function exportTxtToZip(th:any[], jsonData: any[], txtName: string, zipName: string) {
  const zip = new JSZip()
  const txt_name = txtName || 'file'
  const zip_name = zipName || 'file'
  const data = jsonData
  let txtData = `${th}\r\n`
  data.forEach((row:Record<string, any>) => {
    let tempStr = ''
    tempStr = row.toString()
    txtData += `${tempStr}\r\n`
  })
  zip.file(`${txt_name}.txt`, txtData)
  zip.generateAsync({
    type: "blob"
  }).then((blob: Blob) => {
    saveAs(blob, `${zip_name}.zip`)
  }, () => {
    alert('导出失败')
  })
}

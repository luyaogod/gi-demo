import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 逐一导入您的mock.ts文件
// 如果使用 vite.mock.config.ts，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import tableModule from '../mock/table'
import systemModule from '../mock/system'

export function setupProdMockServer() {
  createProdMockServer([...tableModule, ...systemModule])
}

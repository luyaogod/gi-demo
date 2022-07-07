import axios from '@/utils/axios'
const prefix = '/mock'

// 获取部门数据
export function getSystemDeptList() {
  return axios.get(`${prefix}/system/dept/list`)
}

// 获取用户数据
export function getSystemUserList(data: any) {
  return axios.get(`${prefix}/system/user/list`, data)
}

// 获取角色数据
export function getSystemRoleList(data?: any) {
  return axios.get(`${prefix}/system/role/list`, data)
}

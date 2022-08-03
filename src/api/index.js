import { get, post } from '../utils/request'

// 用户登入
export const login = async (data) => post('user/userLogin', data)
// 用户登出
export const logout = async (data) => post('user/userLogout', data)
// 获取游戏列表
export const gamecoinaddress = async (data) => get('Systeminfo/gamecoinaddress', data)
// 系统基础配置
export const defaultinfo = async (data) => get('Systeminfo/Defaultinfo', data)
// 用户注册
export const register = async (data) => post('user/reg', data)
// 获取用户讯息
export const getAccount = async (data) => post('UserCenter/getInfo', data)
// 更新用户讯息
export const update_user_api = async (data) => post('Usercenter/userUpdate', data)

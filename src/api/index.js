import { get, post } from '../utils/request'

export const login = async (data) => post('user/userLogin', data)
export const logout = async (data) => post('user/userLogout', data)
export const gamecoinaddress = async (data) => get('Systeminfo/gamecoinaddress', data)
export const defaultinfo = async (data) => get('Systeminfo/Defaultinfo', data)
export const register = async (data) => post('user/reg', data)
export const getAccount = async (data) => post('UserCenter/getInfo', data)

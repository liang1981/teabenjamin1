import { HttpsProxyAgent } from 'https-proxy-agent'; 
import dotenv from 'dotenv';

dotenv.config();
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const proxyStr = `http://${USER_NAME}:${PASSWORD}@${HOST}:${PORT}`;
  // 创建代理服务器的代理代理
const proxyAgent = new HttpsProxyAgent(proxyStr);
  // 设置 axios 请求配置，包括代理和代理认证头部
export const axiosConfig = {
    httpsAgent: proxyAgent,
    // 其他请求配置...
};
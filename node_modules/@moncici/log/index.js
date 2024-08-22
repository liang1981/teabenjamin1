import { formatTimestamp } from '@moncici/date-time-processor';

// 保存原始的 console.log 方法
const originalConsoleLog = console.log;

// 覆盖 console.log 方法来添加时间戳
export const log = function(...args) {

    // 创建一个新的错误对象来获取堆栈信息
    const err = new Error();
    const stack = err.stack.split('\n');
  
    // 第0行是'Error'，第1行是当前函数的调用，所以我们需要第2行
    const callerLine = stack[2].trim();
    const callerLineMatch = callerLine.match(/at (.+):(\d+):(\d+)/) || [];
    const callerInfo = callerLineMatch[1] ? `${callerLineMatch[1]}: Line ${callerLineMatch[2]}` : 'Unknown source';

  // 获取当前时间的格式化字符串
  const timestamp = formatTimestamp(new Date());
  // 调用原始的 console.log 方法，附加时间戳和原始参数
  originalConsoleLog(`${timestamp} - ${callerInfo}: `, ...args);
};

log(112, 'hello world')
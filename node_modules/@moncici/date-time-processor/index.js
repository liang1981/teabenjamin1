
const TIME_ZONES = [
    'UTC',
    'Europe/London',
    'Europe/Berlin',
    'Africa/Cairo',
    'Asia/Beirut',
    'Asia/Dubai',
    'Asia/Karachi',
    'Asia/Kolkata',
    'Asia/Jakarta',
    'Asia/Shanghai',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Pacific/Auckland',
    'America/Anchorage',
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
    'America/Caracas',
    'America/Sao_Paulo'
];


export function formatTimestamp(timestamp, timeZone = 'Asia/Shanghai') {
    // 创建一个Date对象
    const date = new Date(timestamp);
  
    // 定义时间格式化选项，包括指定的时区
    const options = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false,
      timeZone: timeZone // 使用函数参数指定的时区
    };
  
    // 创建一个Intl.DateTimeFormat对象
    const dateTimeFormat = new Intl.DateTimeFormat('zh-CN', options);
  
    // 格式化日期
    const formattedDate = dateTimeFormat.format(date);
  
    return formattedDate;
}
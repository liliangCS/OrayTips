// OrayTips接口
export interface IOrayTips {
  success: TTips2StatusFunc;
  warning: TTips2StatusFunc;
  info: TTips2StatusFunc;
  error: TTips2StatusFunc;
  tips: TTips2CustomFunc;
}

// 状态枚举
export enum ETipStatus {
  success,
  warning,
  info,
  error,
  default
}
 
// 状态消息发送函数
export type TTips2StatusFunc = (msg: string) => void;
// 自定义消息发送函数
export type TTips2CustomFunc = (config: ICustomTipsConfig) => void;

// 样式配置
export interface IStyleConfig {
  [key: string]: string;
}

// 自定义消息配置
export interface ICustomTipsConfig {
  msg: string;
  style?: IStyleConfig;
  delay?: number;
}
interface IOrayTips {
  success: TSendTipsFunc;
  warning: TSendTipsFunc;
  info: TSendTipsFunc;
  error: TSendTipsFunc;
}

enum ETipStatus {
  success,
  warning,
  info,
  error
}
 
type TSendTipsFunc = (msg: string) => void;

export {
  IOrayTips,
  ETipStatus,
  TSendTipsFunc
}
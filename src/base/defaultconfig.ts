// 默认样式配置
export const defaultStyleConfig = {
  boxSizing: "border-box",
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  fontSize: "13px",
  padding: "9px 12px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "#000",
  marginBottom: "8px"
}

// 成功状态样式配置
export const successStyleConfig = {
  color: "#67c23a"
}

// 警告状态样式配置
export const warningStyleConfig = {
  color: "#e6a23c"
}

// 信息状态样式配置
export const infoStyleConfig = {
  color: "#909399"
}

// 失败状态样式配置
export const errorStyleConfig = {
  color: "#f56c6c"
}

// 状态_配置_映射
export const statusMapStyleConfig = {
  0: successStyleConfig,
  1: warningStyleConfig,
  2: infoStyleConfig,
  3: errorStyleConfig
}
import { IOrayTips, ETipStatus, ICustomTipsConfig } from "../base/basedefine";
import { HandlerForDocument } from "./handler4dom";
import { statusMapStyleConfig  } from "../base/defaultconfig"

/**
 * OrayTips类
 */
class OrayTips implements IOrayTips {
  // 提示文本
  private _message: string;
  public get message(): string {
    return this._message;
  }
  public set message(v: string) {
    this._message = v;
  }

  // 提示状态
  private _status: ETipStatus;
  public get status(): ETipStatus {
    return this._status;
  }
  public set status(v: ETipStatus) {
    this._status = v;
  }

  public success(msg: string) {
    this.message = msg;
    this.status = ETipStatus.success;
    new HandlerForDocument(this.message, statusMapStyleConfig[this.status]);
  }

  public warning(msg: string) {
    this.message = msg;
    this.status = ETipStatus.warning;
    new HandlerForDocument(this.message, statusMapStyleConfig[this.status]);
  }

  public info(msg: string) {
    this.message = msg;
    this.status = ETipStatus.info;
    new HandlerForDocument(this.message, statusMapStyleConfig[this.status]);
  }

  public error(msg: string) {
    this.message = msg;
    this.status = ETipStatus.error;
    new HandlerForDocument(this.message, statusMapStyleConfig[this.status]);
  }

  public tips(config: ICustomTipsConfig) {
    this.message = config.msg;
    this.status = ETipStatus.default;
    new HandlerForDocument(this.message, config.style ?? {}, config.delay ?? 1000);
  }
}

export default new OrayTips();
import { IOrayTips, ETipStatus } from "../base/basedefine";

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
  }

  public warning(msg: string) {
    this.message = msg;
    this.status = ETipStatus.warning
  }

  public info(msg: string) {
    this.message = msg;
    this.status = ETipStatus.info;
  }

  public error(msg: string) {
    this.message = msg;
    this.status = ETipStatus.error;
  }
}

export default new OrayTips();
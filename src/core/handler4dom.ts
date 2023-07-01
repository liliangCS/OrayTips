import Handler from "../base/handler";
import { defaultStyleConfig } from "../base/defaultconfig";
import type { IStyleConfig } from "../base/basedefine";

/**
 * html文档处理器
 */
export class HandlerForDocument extends Handler {
  // 元素
  private _element: HTMLDivElement;
  public get element(): HTMLDivElement {
    return this._element;
  }
  public set element(v: HTMLDivElement) {
    this._element = v;
  }

  constructor(msg: string, customStyleConfig: IStyleConfig = {}, delay: number = 1000) {
    super();
    this.element = document.createElement("div");
    this.initStyles(customStyleConfig);
    this.initText(msg);
    this.initShow(delay);
  } 

  public initStyles(config: IStyleConfig): void {
    const styleObj = Object.assign(defaultStyleConfig, config)
    for(const key of Object.keys(styleObj)) {
      this.element.style[key] = styleObj[key]
    }
  }

  public initText(msg: string): void {
    this.element.innerText = msg;
  }

  public initShow(delay: number): void {
    document.body.appendChild(this.element);
    setTimeout(() => {
      document.body.removeChild(this.element);
    }, delay)
  }
}
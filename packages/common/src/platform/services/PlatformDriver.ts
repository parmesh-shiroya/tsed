import {PathParamsType} from "../../mvc";
import {IPlatformDriver, IPlatformRouteOptions} from "../interfaces/IPlatformDriver";
import {PlatformHandler} from "./PlatformHandler";

export class PlatformDriver<T> implements IPlatformDriver<T> {
  public raw: T & any;

  constructor(protected platformHandler: PlatformHandler) {}

  use(...handlers: any[]) {
    this.raw.use(...this.mapHandlers(handlers));

    return this;
  }

  addRoute({method, path, handlers}: IPlatformRouteOptions) {
    this.raw[method](path, ...this.mapHandlers(handlers));

    return this;
  }

  all(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "all", path, handlers});
  }

  get(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "get", path, handlers});
  }

  post(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "post", path, handlers});
  }

  put(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "put", path, handlers});
  }

  delete(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "delete", path, handlers});
  }

  patch(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "patch", path, handlers});
  }

  head(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "head", path, handlers});
  }

  options(path: PathParamsType, ...handlers: any[]) {
    return this.addRoute({method: "options", path, handlers});
  }

  mapHandlers(handlers: any[]) {
    return handlers.map(handler => {
      if (typeof handler === "string") {
        return handler;
      }

      if (handler instanceof PlatformDriver) {
        return handler.raw;
      }

      return this.platformHandler.createHandler(handler);
    });
  }
}

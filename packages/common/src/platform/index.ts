import "./interfaces/Express";

// Module
export * from "./PlatformModule";

// builder
export * from "./builder/ControllerBuilder";

// decorators
export * from "./decorators/context";
export * from "./decorators/ExpressRouter"; // TODO will be moved to express in v6

// interfaces
export * from "./interfaces/IRoute";
export * from "./interfaces/IHandlerContext";
export * from "./interfaces/IPlatformDriver";

// middlewares
export * from "./middlewares/SendResponseMiddleware";
export * from "./middlewares/bindEndpointMiddleware";
export * from "./middlewares/statusAndHeadersMiddleware";

// domain
export * from "./domain/HandlerContext";
export * from "./domain/RequestContext";
export * from "./domain/RequestLogger";
export * from "./domain/RequestLogger";
export * from "./domain/ControllerProvider";

// providers
export * from "./services/Platform";
export * from "./services/PlatformDriver";
export * from "./services/PlatformHandler";
export * from "./services/PlatformRouter";
export * from "./services/PlatformApplication";
export * from "./services/RouteService";

// registries
export * from "./registries/ControllerRegistry";

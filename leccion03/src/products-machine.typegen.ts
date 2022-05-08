// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    assignProducts: "REPORT_DATA_RESOLVED";
    assignPredicate: "CHANGE_PREDICATE";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
    "done.invoke.fetchProducts": {
      type: "done.invoke.fetchProducts";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.fetchProducts": {
      type: "error.platform.fetchProducts";
      data: unknown;
    };
  };
  invokeSrcNameMap: {
    fetchProducts: "done.invoke.fetchProducts";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchProducts: "xstate.init";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "idle" | "ready";
  tags: never;
}

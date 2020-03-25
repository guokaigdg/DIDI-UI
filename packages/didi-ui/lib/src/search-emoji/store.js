"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NAMESPACE = "emoji-mart";
var isLocalStorageSupported = typeof window !== "undefined" && "localStorage" in window;
var _JSON = JSON;
var getter;
var setter;
function setHandlers(handlers) {
    handlers || (handlers = {});
    getter = handlers.getter;
    setter = handlers.setter;
}
function setNamespace(namespace) {
    NAMESPACE = namespace;
}
function update(state) {
    for (var key in state) {
        var value = state[key];
        set(key, value);
    }
}
function set(key, value) {
    if (setter) {
        setter(key, value);
    }
    else {
        if (!isLocalStorageSupported)
            return;
        try {
            window.localStorage[NAMESPACE + "." + key] = _JSON.stringify(value);
        }
        catch (e) { }
    }
}
function get(key) {
    if (getter) {
        return getter(key);
    }
    else {
        if (!isLocalStorageSupported)
            return;
        try {
            var value = window.localStorage[NAMESPACE + "." + key];
            if (value) {
                return _JSON.parse(value);
            }
        }
        catch (e) {
            return;
        }
    }
}
exports.default = { update: update, set: set, get: get, setNamespace: setNamespace, setHandlers: setHandlers };
//# sourceMappingURL=store.js.map
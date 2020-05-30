"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrEmpty = exports.isNullOrUndefined = void 0;
exports.isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
//# sourceMappingURL=util.js.map
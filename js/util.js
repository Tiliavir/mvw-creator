"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrEmpty = exports.isNullOrUndefined = void 0;
const isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrUndefined = isNullOrUndefined;
const isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
exports.isNullOrEmpty = isNullOrEmpty;
//# sourceMappingURL=util.js.map
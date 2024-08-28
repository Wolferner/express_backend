"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TwitService_twits;
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitService = void 0;
class TwitService {
    constructor() {
        _TwitService_twits.set(this, [
            {
                id: 1,
                text: 'Hello world',
            },
            {
                id: 2,
                text: 'Goodbye world',
            },
        ]);
    }
    create(twit) {
        __classPrivateFieldGet(this, _TwitService_twits, "f").push(twit);
        return twit;
    }
    getAll() {
        return __classPrivateFieldGet(this, _TwitService_twits, "f");
    }
    getOne(id) {
        if (!id)
            throw new Error('Id is required');
        return __classPrivateFieldGet(this, _TwitService_twits, "f").find(t => t.id === id);
    }
    delete(id) {
        if (!id)
            throw new Error('Id is required');
        __classPrivateFieldSet(this, _TwitService_twits, __classPrivateFieldGet(this, _TwitService_twits, "f").filter(t => t.id !== id), "f");
    }
    update(id, todo) {
        const index = __classPrivateFieldGet(this, _TwitService_twits, "f").findIndex(t => t.id === id);
        __classPrivateFieldGet(this, _TwitService_twits, "f")[index] = todo;
    }
}
_TwitService_twits = new WeakMap();
exports.twitService = new TwitService();

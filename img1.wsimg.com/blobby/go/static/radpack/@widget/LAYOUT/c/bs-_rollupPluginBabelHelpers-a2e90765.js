define("@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers-a2e90765.js", ["exports"], (function(e) {
    "use strict";

    function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
        }, r.apply(this, arguments)
    }
    e._ = function(e, r, t) {
        return (r = function(e) {
            var r = function(e, r) {
                if ("object" != typeof e || null === e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, r || "default");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof r ? r : String(r)
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }, e.a = r
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-_rollupPluginBabelHelpers-a2e90765.js.map
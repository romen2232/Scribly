function e5(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != 'string' && !Array.isArray(r)) {
            for (const o in r)
                if (o !== 'default' && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] },
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    );
}
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === 'childList')
                for (const s of i.addedNodes)
                    s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === 'use-credentials'
                ? (i.credentials = 'include')
                : o.crossOrigin === 'anonymous'
                ? (i.credentials = 'omit')
                : (i.credentials = 'same-origin'),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
var Ee =
    typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {};
function Et(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e;
}
var $h = { exports: {} },
    Ba = {},
    Ch = { exports: {} },
    q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ji = Symbol.for('react.element'),
    t5 = Symbol.for('react.portal'),
    n5 = Symbol.for('react.fragment'),
    r5 = Symbol.for('react.strict_mode'),
    o5 = Symbol.for('react.profiler'),
    i5 = Symbol.for('react.provider'),
    s5 = Symbol.for('react.context'),
    a5 = Symbol.for('react.forward_ref'),
    l5 = Symbol.for('react.suspense'),
    u5 = Symbol.for('react.memo'),
    c5 = Symbol.for('react.lazy'),
    Gd = Symbol.iterator;
function f5(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Gd && e[Gd]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var kh = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Th = Object.assign,
    _h = {};
function ao(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = _h),
        (this.updater = n || kh);
}
ao.prototype.isReactComponent = {};
ao.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
ao.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ph() {}
Ph.prototype = ao.prototype;
function Yc(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = _h),
        (this.updater = n || kh);
}
var Zc = (Yc.prototype = new Ph());
Zc.constructor = Yc;
Th(Zc, ao.prototype);
Zc.isPureReactComponent = !0;
var qd = Array.isArray,
    Oh = Object.prototype.hasOwnProperty,
    Xc = { current: null },
    Lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nh(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = '' + t.key),
        t))
            Oh.call(t, r) && !Lh.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ji,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Xc.current,
    };
}
function d5(e, t) {
    return {
        $$typeof: ji,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function ef(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === ji;
}
function p5(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Qd = /\/+/g;
function Rl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? p5('' + e.key)
        : t.toString(36);
}
function Rs(e, t, n, r, o) {
    var i = typeof e;
    (i === 'undefined' || i === 'boolean') && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case 'string':
            case 'number':
                s = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case ji:
                    case t5:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === '' ? '.' + Rl(s, 0) : r),
            qd(o)
                ? ((n = ''),
                  e != null && (n = e.replace(Qd, '$&/') + '/'),
                  Rs(o, t, n, '', function (u) {
                      return u;
                  }))
                : o != null &&
                  (ef(o) &&
                      (o = d5(
                          o,
                          n +
                              (!o.key || (s && s.key === o.key)
                                  ? ''
                                  : ('' + o.key).replace(Qd, '$&/') + '/') +
                              e,
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === '' ? '.' : r + ':'), qd(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Rl(i, a);
            s += Rs(i, t, n, l, o);
        }
    else if (((l = f5(e)), typeof l == 'function'))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + Rl(i, a++)), (s += Rs(i, t, n, l, o));
    else if (i === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            ))
        );
    return s;
}
function is(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        Rs(e, r, '', '', function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function h5(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                },
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ge = { current: null },
    Fs = { transition: null },
    g5 = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: Fs,
        ReactCurrentOwner: Xc,
    };
q.Children = {
    map: is,
    forEach: function (e, t, n) {
        is(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            is(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            is(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!ef(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.',
            );
        return e;
    },
};
q.Component = ao;
q.Fragment = n5;
q.Profiler = o5;
q.PureComponent = Yc;
q.StrictMode = r5;
q.Suspense = l5;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g5;
q.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
        );
    var r = Th({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Xc.current)),
            t.key !== void 0 && (o = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t)
            Oh.call(t, l) &&
                !Lh.hasOwnProperty(l) &&
                (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: ji, type: e.type, key: o, ref: i, props: r, _owner: s };
};
q.createContext = function (e) {
    return (
        (e = {
            $$typeof: s5,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: i5, _context: e }),
        (e.Consumer = e)
    );
};
q.createElement = Nh;
q.createFactory = function (e) {
    var t = Nh.bind(null, e);
    return (t.type = e), t;
};
q.createRef = function () {
    return { current: null };
};
q.forwardRef = function (e) {
    return { $$typeof: a5, render: e };
};
q.isValidElement = ef;
q.lazy = function (e) {
    return { $$typeof: c5, _payload: { _status: -1, _result: e }, _init: h5 };
};
q.memo = function (e, t) {
    return { $$typeof: u5, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
    var t = Fs.transition;
    Fs.transition = {};
    try {
        e();
    } finally {
        Fs.transition = t;
    }
};
q.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
q.useCallback = function (e, t) {
    return Ge.current.useCallback(e, t);
};
q.useContext = function (e) {
    return Ge.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
    return Ge.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
    return Ge.current.useEffect(e, t);
};
q.useId = function () {
    return Ge.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
    return Ge.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
    return Ge.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
    return Ge.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
    return Ge.current.useReducer(e, t, n);
};
q.useRef = function (e) {
    return Ge.current.useRef(e);
};
q.useState = function (e) {
    return Ge.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
    return Ge.current.useTransition();
};
q.version = '18.2.0';
Ch.exports = q;
var b = Ch.exports;
const D = Et(b),
    m5 = e5({ __proto__: null, default: D }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v5 = b,
    y5 = Symbol.for('react.element'),
    w5 = Symbol.for('react.fragment'),
    x5 = Object.prototype.hasOwnProperty,
    b5 =
        v5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    S5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rh(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = '' + n),
        t.key !== void 0 && (i = '' + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) x5.call(t, r) && !S5.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: y5,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: b5.current,
    };
}
Ba.Fragment = w5;
Ba.jsx = Rh;
Ba.jsxs = Rh;
$h.exports = Ba;
var C = $h.exports,
    Cu = {},
    Fh = { exports: {} },
    ct = {},
    Ah = { exports: {} },
    jh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(A, V) {
        var W = A.length;
        A.push(V);
        e: for (; 0 < W; ) {
            var ce = (W - 1) >>> 1,
                be = A[ce];
            if (0 < o(be, V)) (A[ce] = V), (A[W] = be), (W = ce);
            else break e;
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0];
    }
    function r(A) {
        if (A.length === 0) return null;
        var V = A[0],
            W = A.pop();
        if (W !== V) {
            A[0] = W;
            e: for (var ce = 0, be = A.length, vr = be >>> 1; ce < vr; ) {
                var Ut = 2 * (ce + 1) - 1,
                    Eo = A[Ut],
                    Bt = Ut + 1,
                    yr = A[Bt];
                if (0 > o(Eo, W))
                    Bt < be && 0 > o(yr, Eo)
                        ? ((A[ce] = yr), (A[Bt] = W), (ce = Bt))
                        : ((A[ce] = Eo), (A[Ut] = W), (ce = Ut));
                else if (Bt < be && 0 > o(yr, W))
                    (A[ce] = yr), (A[Bt] = W), (ce = Bt);
                else break e;
            }
        }
        return V;
    }
    function o(A, V) {
        var W = A.sortIndex - V.sortIndex;
        return W !== 0 ? W : A.id - V.id;
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        v = !1,
        g = !1,
        x = !1,
        $ = typeof setTimeout == 'function' ? setTimeout : null,
        m = typeof clearTimeout == 'function' ? clearTimeout : null,
        h = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(A) {
        for (var V = n(u); V !== null; ) {
            if (V.callback === null) r(u);
            else if (V.startTime <= A)
                r(u), (V.sortIndex = V.expirationTime), t(l, V);
            else break;
            V = n(u);
        }
    }
    function E(A) {
        if (((x = !1), y(A), !g))
            if (n(l) !== null) (g = !0), ge(k);
            else {
                var V = n(u);
                V !== null && ee(E, V.startTime - A);
            }
    }
    function k(A, V) {
        (g = !1), x && ((x = !1), m(S), (S = -1)), (v = !0);
        var W = d;
        try {
            for (
                y(V), f = n(l);
                f !== null && (!(f.expirationTime > V) || (A && !j()));

            ) {
                var ce = f.callback;
                if (typeof ce == 'function') {
                    (f.callback = null), (d = f.priorityLevel);
                    var be = ce(f.expirationTime <= V);
                    (V = e.unstable_now()),
                        typeof be == 'function'
                            ? (f.callback = be)
                            : f === n(l) && r(l),
                        y(V);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var vr = !0;
            else {
                var Ut = n(u);
                Ut !== null && ee(E, Ut.startTime - V), (vr = !1);
            }
            return vr;
        } finally {
            (f = null), (d = W), (v = !1);
        }
    }
    var O = !1,
        N = null,
        S = -1,
        I = 5,
        z = -1;
    function j() {
        return !(e.unstable_now() - z < I);
    }
    function K() {
        if (N !== null) {
            var A = e.unstable_now();
            z = A;
            var V = !0;
            try {
                V = N(!0, A);
            } finally {
                V ? P() : ((O = !1), (N = null));
            }
        } else O = !1;
    }
    var P;
    if (typeof h == 'function')
        P = function () {
            h(K);
        };
    else if (typeof MessageChannel < 'u') {
        var R = new MessageChannel(),
            Z = R.port2;
        (R.port1.onmessage = K),
            (P = function () {
                Z.postMessage(null);
            });
    } else
        P = function () {
            $(K, 0);
        };
    function ge(A) {
        (N = A), O || ((O = !0), P());
    }
    function ee(A, V) {
        S = $(function () {
            A(e.unstable_now());
        }, V);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (A) {
            A.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            g || v || ((g = !0), ge(k));
        }),
        (e.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (I = 0 < A ? Math.floor(1e3 / A) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (A) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var V = 3;
                    break;
                default:
                    V = d;
            }
            var W = d;
            d = V;
            try {
                return A();
            } finally {
                d = W;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (A, V) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    A = 3;
            }
            var W = d;
            d = A;
            try {
                return V();
            } finally {
                d = W;
            }
        }),
        (e.unstable_scheduleCallback = function (A, V, W) {
            var ce = e.unstable_now();
            switch (
                (typeof W == 'object' && W !== null
                    ? ((W = W.delay),
                      (W = typeof W == 'number' && 0 < W ? ce + W : ce))
                    : (W = ce),
                A)
            ) {
                case 1:
                    var be = -1;
                    break;
                case 2:
                    be = 250;
                    break;
                case 5:
                    be = 1073741823;
                    break;
                case 4:
                    be = 1e4;
                    break;
                default:
                    be = 5e3;
            }
            return (
                (be = W + be),
                (A = {
                    id: c++,
                    callback: V,
                    priorityLevel: A,
                    startTime: W,
                    expirationTime: be,
                    sortIndex: -1,
                }),
                W > ce
                    ? ((A.sortIndex = W),
                      t(u, A),
                      n(l) === null &&
                          A === n(u) &&
                          (x ? (m(S), (S = -1)) : (x = !0), ee(E, W - ce)))
                    : ((A.sortIndex = be),
                      t(l, A),
                      g || v || ((g = !0), ge(k))),
                A
            );
        }),
        (e.unstable_shouldYield = j),
        (e.unstable_wrapCallback = function (A) {
            var V = d;
            return function () {
                var W = d;
                d = V;
                try {
                    return A.apply(this, arguments);
                } finally {
                    d = W;
                }
            };
        });
})(jh);
Ah.exports = jh;
var E5 = Ah.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih = b,
    ut = E5;
function L(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var Mh = new Set(),
    si = {};
function hr(e, t) {
    Zr(e, t), Zr(e + 'Capture', t);
}
function Zr(e, t) {
    for (si[e] = t, e = 0; e < t.length; e++) Mh.add(t[e]);
}
var sn = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    ku = Object.prototype.hasOwnProperty,
    $5 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Jd = {},
    Yd = {};
function C5(e) {
    return ku.call(Yd, e)
        ? !0
        : ku.call(Jd, e)
        ? !1
        : $5.test(e)
        ? (Yd[e] = !0)
        : ((Jd[e] = !0), !1);
}
function k5(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function T5(e, t, n, r) {
    if (t === null || typeof t > 'u' || k5(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function qe(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var je = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        je[e] = new qe(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    je[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    je[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    je[e] = new qe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        je[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    je[e] = new qe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    je[e] = new qe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    je[e] = new qe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    je[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tf = /[\-:]([a-z])/g;
function nf(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(tf, nf);
        je[t] = new qe(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(tf, nf);
        je[t] = new qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(tf, nf);
    je[t] = new qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    je[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new qe(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    je[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rf(e, t, n, r) {
    var o = je.hasOwnProperty(t) ? je[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (T5(t, n, o, r) && (n = null),
        r || o === null
            ? C5(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ss = Symbol.for('react.element'),
    Lr = Symbol.for('react.portal'),
    Nr = Symbol.for('react.fragment'),
    of = Symbol.for('react.strict_mode'),
    Tu = Symbol.for('react.profiler'),
    zh = Symbol.for('react.provider'),
    Dh = Symbol.for('react.context'),
    sf = Symbol.for('react.forward_ref'),
    _u = Symbol.for('react.suspense'),
    Pu = Symbol.for('react.suspense_list'),
    af = Symbol.for('react.memo'),
    vn = Symbol.for('react.lazy'),
    Uh = Symbol.for('react.offscreen'),
    Zd = Symbol.iterator;
function ko(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Zd && e[Zd]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var he = Object.assign,
    Fl;
function Io(e) {
    if (Fl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Fl = (t && t[1]) || '';
        }
    return (
        `
` +
        Fl +
        e
    );
}
var Al = !1;
function jl(e, t) {
    if (!e || Al) return '';
    Al = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == 'string') {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var l =
                                    `
` + o[s].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        l.includes('<anonymous>') &&
                                        (l = l.replace(
                                            '<anonymous>',
                                            e.displayName,
                                        )),
                                    l
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Al = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Io(e) : '';
}
function _5(e) {
    switch (e.tag) {
        case 5:
            return Io(e.type);
        case 16:
            return Io('Lazy');
        case 13:
            return Io('Suspense');
        case 19:
            return Io('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = jl(e.type, !1)), e;
        case 11:
            return (e = jl(e.type.render, !1)), e;
        case 1:
            return (e = jl(e.type, !0)), e;
        default:
            return '';
    }
}
function Ou(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case Nr:
            return 'Fragment';
        case Lr:
            return 'Portal';
        case Tu:
            return 'Profiler';
        case of:
            return 'StrictMode';
        case _u:
            return 'Suspense';
        case Pu:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case Dh:
                return (e.displayName || 'Context') + '.Consumer';
            case zh:
                return (e._context.displayName || 'Context') + '.Provider';
            case sf:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case af:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Ou(e.type) || 'Memo'
                );
            case vn:
                (t = e._payload), (e = e._init);
                try {
                    return Ou(e(t));
                } catch {}
        }
    return null;
}
function P5(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName ||
                    (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Ou(t);
        case 8:
            return t === of ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function Mn(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function Bh(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    );
}
function O5(e) {
    var t = Bh(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = '' + s), i.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = '' + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function as(e) {
    e._valueTracker || (e._valueTracker = O5(e));
}
function Hh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (
        e && (r = Bh(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Xs(e) {
    if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Lu(e, t) {
    var n = t.checked;
    return he({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Xd(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Mn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        });
}
function Vh(e, t) {
    (t = t.checked), t != null && rf(e, 'checked', t, !1);
}
function Nu(e, t) {
    Vh(e, t);
    var n = Mn(t.value),
        r = t.type;
    if (n != null)
        r === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value')
        ? Ru(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Ru(e, t.type, Mn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function e0(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n);
}
function Ru(e, t, n) {
    (t !== 'number' || Xs(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Mo = Array.isArray;
function Wr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + Mn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Fu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return he({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function t0(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(L(92));
            if (Mo(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Mn(n) };
}
function Kh(e, t) {
    var n = Mn(t.value),
        r = Mn(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r);
}
function n0(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t);
}
function Wh(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Au(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? Wh(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
}
var ls,
    Gh = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t;
        else {
            for (
                ls = ls || document.createElement('div'),
                    ls.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ls.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ai(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Ko = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    L5 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ko).forEach(function (e) {
    L5.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ko[t] = Ko[e]);
    });
});
function qh(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
          typeof t != 'number' ||
          t === 0 ||
          (Ko.hasOwnProperty(e) && Ko[e])
        ? ('' + t).trim()
        : t + 'px';
}
function Qh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                o = qh(n, t[n], r);
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var N5 = he(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    },
);
function ju(e, t) {
    if (t) {
        if (N5[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(L(60));
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(L(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(L(62));
    }
}
function Iu(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var Mu = null;
function lf(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var zu = null,
    Gr = null,
    qr = null;
function r0(e) {
    if ((e = zi(e))) {
        if (typeof zu != 'function') throw Error(L(280));
        var t = e.stateNode;
        t && ((t = Ga(t)), zu(e.stateNode, e.type, t));
    }
}
function Jh(e) {
    Gr ? (qr ? qr.push(e) : (qr = [e])) : (Gr = e);
}
function Yh() {
    if (Gr) {
        var e = Gr,
            t = qr;
        if (((qr = Gr = null), r0(e), t))
            for (e = 0; e < t.length; e++) r0(t[e]);
    }
}
function Zh(e, t) {
    return e(t);
}
function Xh() {}
var Il = !1;
function e1(e, t, n) {
    if (Il) return e(t, n);
    Il = !0;
    try {
        return Zh(e, t, n);
    } finally {
        (Il = !1), (Gr !== null || qr !== null) && (Xh(), Yh());
    }
}
function li(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ga(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
    return n;
}
var Du = !1;
if (sn)
    try {
        var To = {};
        Object.defineProperty(To, 'passive', {
            get: function () {
                Du = !0;
            },
        }),
            window.addEventListener('test', To, To),
            window.removeEventListener('test', To, To);
    } catch {
        Du = !1;
    }
function R5(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Wo = !1,
    ea = null,
    ta = !1,
    Uu = null,
    F5 = {
        onError: function (e) {
            (Wo = !0), (ea = e);
        },
    };
function A5(e, t, n, r, o, i, s, a, l) {
    (Wo = !1), (ea = null), R5.apply(F5, arguments);
}
function j5(e, t, n, r, o, i, s, a, l) {
    if ((A5.apply(this, arguments), Wo)) {
        if (Wo) {
            var u = ea;
            (Wo = !1), (ea = null);
        } else throw Error(L(198));
        ta || ((ta = !0), (Uu = u));
    }
}
function gr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function t1(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function o0(e) {
    if (gr(e) !== e) throw Error(L(188));
}
function I5(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = gr(e)), t === null)) throw Error(L(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return o0(o), e;
                if (i === r) return o0(o), t;
                i = i.sibling;
            }
            throw Error(L(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(L(189));
            }
        }
        if (n.alternate !== r) throw Error(L(190));
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t;
}
function n1(e) {
    return (e = I5(e)), e !== null ? r1(e) : null;
}
function r1(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = r1(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var o1 = ut.unstable_scheduleCallback,
    i0 = ut.unstable_cancelCallback,
    M5 = ut.unstable_shouldYield,
    z5 = ut.unstable_requestPaint,
    we = ut.unstable_now,
    D5 = ut.unstable_getCurrentPriorityLevel,
    uf = ut.unstable_ImmediatePriority,
    i1 = ut.unstable_UserBlockingPriority,
    na = ut.unstable_NormalPriority,
    U5 = ut.unstable_LowPriority,
    s1 = ut.unstable_IdlePriority,
    Ha = null,
    Mt = null;
function B5(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == 'function')
        try {
            Mt.onCommitFiberRoot(
                Ha,
                e,
                void 0,
                (e.current.flags & 128) === 128,
            );
        } catch {}
}
var _t = Math.clz32 ? Math.clz32 : K5,
    H5 = Math.log,
    V5 = Math.LN2;
function K5(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((H5(e) / V5) | 0)) | 0;
}
var us = 64,
    cs = 4194304;
function zo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function ra(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = zo(a)) : ((i &= s), i !== 0 && (r = zo(i)));
    } else (s = n & ~o), s !== 0 ? (r = zo(s)) : i !== 0 && (r = zo(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - _t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function W5(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function G5(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var s = 31 - _t(i),
            a = 1 << s,
            l = o[s];
        l === -1
            ? (!(a & n) || a & r) && (o[s] = W5(a, t))
            : l <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function Bu(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function a1() {
    var e = us;
    return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ii(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - _t(t)),
        (e[t] = n);
}
function q5(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - _t(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function cf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - _t(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var te = 0;
function l1(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var u1,
    ff,
    c1,
    f1,
    d1,
    Hu = !1,
    fs = [],
    kn = null,
    Tn = null,
    _n = null,
    ui = new Map(),
    ci = new Map(),
    wn = [],
    Q5 =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function s0(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            kn = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Tn = null;
            break;
        case 'mouseover':
        case 'mouseout':
            _n = null;
            break;
        case 'pointerover':
        case 'pointerout':
            ui.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            ci.delete(t.pointerId);
    }
}
function _o(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = zi(t)), t !== null && ff(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function J5(e, t, n, r, o) {
    switch (t) {
        case 'focusin':
            return (kn = _o(kn, e, t, n, r, o)), !0;
        case 'dragenter':
            return (Tn = _o(Tn, e, t, n, r, o)), !0;
        case 'mouseover':
            return (_n = _o(_n, e, t, n, r, o)), !0;
        case 'pointerover':
            var i = o.pointerId;
            return ui.set(i, _o(ui.get(i) || null, e, t, n, r, o)), !0;
        case 'gotpointercapture':
            return (
                (i = o.pointerId),
                ci.set(i, _o(ci.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function p1(e) {
    var t = Xn(e.target);
    if (t !== null) {
        var n = gr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = t1(n)), t !== null)) {
                    (e.blockedOn = t),
                        d1(e.priority, function () {
                            c1(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function As(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Mu = r), n.target.dispatchEvent(r), (Mu = null);
        } else return (t = zi(n)), t !== null && ff(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function a0(e, t, n) {
    As(e) && n.delete(t);
}
function Y5() {
    (Hu = !1),
        kn !== null && As(kn) && (kn = null),
        Tn !== null && As(Tn) && (Tn = null),
        _n !== null && As(_n) && (_n = null),
        ui.forEach(a0),
        ci.forEach(a0);
}
function Po(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Hu ||
            ((Hu = !0),
            ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Y5)));
}
function fi(e) {
    function t(o) {
        return Po(o, e);
    }
    if (0 < fs.length) {
        Po(fs[0], e);
        for (var n = 1; n < fs.length; n++) {
            var r = fs[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        kn !== null && Po(kn, e),
            Tn !== null && Po(Tn, e),
            _n !== null && Po(_n, e),
            ui.forEach(t),
            ci.forEach(t),
            n = 0;
        n < wn.length;
        n++
    )
        (r = wn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); )
        p1(n), n.blockedOn === null && wn.shift();
}
var Qr = fn.ReactCurrentBatchConfig,
    oa = !0;
function Z5(e, t, n, r) {
    var o = te,
        i = Qr.transition;
    Qr.transition = null;
    try {
        (te = 1), df(e, t, n, r);
    } finally {
        (te = o), (Qr.transition = i);
    }
}
function X5(e, t, n, r) {
    var o = te,
        i = Qr.transition;
    Qr.transition = null;
    try {
        (te = 4), df(e, t, n, r);
    } finally {
        (te = o), (Qr.transition = i);
    }
}
function df(e, t, n, r) {
    if (oa) {
        var o = Vu(e, t, n, r);
        if (o === null) ql(e, t, r, ia, n), s0(e, r);
        else if (J5(o, e, t, n, r)) r.stopPropagation();
        else if ((s0(e, r), t & 4 && -1 < Q5.indexOf(e))) {
            for (; o !== null; ) {
                var i = zi(o);
                if (
                    (i !== null && u1(i),
                    (i = Vu(e, t, n, r)),
                    i === null && ql(e, t, r, ia, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else ql(e, t, r, null, n);
    }
}
var ia = null;
function Vu(e, t, n, r) {
    if (((ia = null), (e = lf(r)), (e = Xn(e)), e !== null))
        if (((t = gr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = t1(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ia = e), null;
}
function h1(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (D5()) {
                case uf:
                    return 1;
                case i1:
                    return 4;
                case na:
                case U5:
                    return 16;
                case s1:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Sn = null,
    pf = null,
    js = null;
function g1() {
    if (js) return js;
    var e,
        t = pf,
        n = t.length,
        r,
        o = 'value' in Sn ? Sn.value : Sn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (js = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Is(e) {
    var t = e.keyCode;
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function ds() {
    return !0;
}
function l0() {
    return !1;
}
function ft(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? ds
                : l0),
            (this.isPropagationStopped = l0),
            this
        );
    }
    return (
        he(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = ds));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = ds));
            },
            persist: function () {},
            isPersistent: ds,
        }),
        t
    );
}
var lo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    hf = ft(lo),
    Mi = he({}, lo, { view: 0, detail: 0 }),
    e3 = ft(Mi),
    zl,
    Dl,
    Oo,
    Va = he({}, Mi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: gf,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Oo &&
                      (Oo && e.type === 'mousemove'
                          ? ((zl = e.screenX - Oo.screenX),
                            (Dl = e.screenY - Oo.screenY))
                          : (Dl = zl = 0),
                      (Oo = e)),
                  zl);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Dl;
        },
    }),
    u0 = ft(Va),
    t3 = he({}, Va, { dataTransfer: 0 }),
    n3 = ft(t3),
    r3 = he({}, Mi, { relatedTarget: 0 }),
    Ul = ft(r3),
    o3 = he({}, lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i3 = ft(o3),
    s3 = he({}, lo, {
        clipboardData: function (e) {
            return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    a3 = ft(s3),
    l3 = he({}, lo, { data: 0 }),
    c0 = ft(l3),
    u3 = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    c3 = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    f3 = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };
function d3(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = f3[e])
        ? !!t[e]
        : !1;
}
function gf() {
    return d3;
}
var p3 = he({}, Mi, {
        key: function (e) {
            if (e.key) {
                var t = u3[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = Is(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? c3[e.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: gf,
        charCode: function (e) {
            return e.type === 'keypress' ? Is(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? Is(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0;
        },
    }),
    h3 = ft(p3),
    g3 = he({}, Va, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    f0 = ft(g3),
    m3 = he({}, Mi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: gf,
    }),
    v3 = ft(m3),
    y3 = he({}, lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    w3 = ft(y3),
    x3 = he({}, Va, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    b3 = ft(x3),
    S3 = [9, 13, 27, 32],
    mf = sn && 'CompositionEvent' in window,
    Go = null;
sn && 'documentMode' in document && (Go = document.documentMode);
var E3 = sn && 'TextEvent' in window && !Go,
    m1 = sn && (!mf || (Go && 8 < Go && 11 >= Go)),
    d0 = String.fromCharCode(32),
    p0 = !1;
function v1(e, t) {
    switch (e) {
        case 'keyup':
            return S3.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function y1(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Rr = !1;
function $3(e, t) {
    switch (e) {
        case 'compositionend':
            return y1(t);
        case 'keypress':
            return t.which !== 32 ? null : ((p0 = !0), d0);
        case 'textInput':
            return (e = t.data), e === d0 && p0 ? null : e;
        default:
            return null;
    }
}
function C3(e, t) {
    if (Rr)
        return e === 'compositionend' || (!mf && v1(e, t))
            ? ((e = g1()), (js = pf = Sn = null), (Rr = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return m1 && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var k3 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function h0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!k3[e.type] : t === 'textarea';
}
function w1(e, t, n, r) {
    Jh(r),
        (t = sa(t, 'onChange')),
        0 < t.length &&
            ((n = new hf('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }));
}
var qo = null,
    di = null;
function T3(e) {
    O1(e, 0);
}
function Ka(e) {
    var t = jr(e);
    if (Hh(t)) return e;
}
function _3(e, t) {
    if (e === 'change') return t;
}
var x1 = !1;
if (sn) {
    var Bl;
    if (sn) {
        var Hl = 'oninput' in document;
        if (!Hl) {
            var g0 = document.createElement('div');
            g0.setAttribute('oninput', 'return;'),
                (Hl = typeof g0.oninput == 'function');
        }
        Bl = Hl;
    } else Bl = !1;
    x1 = Bl && (!document.documentMode || 9 < document.documentMode);
}
function m0() {
    qo && (qo.detachEvent('onpropertychange', b1), (di = qo = null));
}
function b1(e) {
    if (e.propertyName === 'value' && Ka(di)) {
        var t = [];
        w1(t, di, e, lf(e)), e1(T3, t);
    }
}
function P3(e, t, n) {
    e === 'focusin'
        ? (m0(), (qo = t), (di = n), qo.attachEvent('onpropertychange', b1))
        : e === 'focusout' && m0();
}
function O3(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return Ka(di);
}
function L3(e, t) {
    if (e === 'click') return Ka(t);
}
function N3(e, t) {
    if (e === 'input' || e === 'change') return Ka(t);
}
function R3(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == 'function' ? Object.is : R3;
function pi(e, t) {
    if (Ot(e, t)) return !0;
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ku.call(t, o) || !Ot(e[o], t[o])) return !1;
    }
    return !0;
}
function v0(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function y0(e, t) {
    var n = v0(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = v0(n);
    }
}
function S1(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? S1(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function E1() {
    for (var e = window, t = Xs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Xs(e.document);
    }
    return t;
}
function vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function F3(e) {
    var t = E1(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        S1(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && vf(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = y0(n, i));
                var s = y0(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var A3 = sn && 'documentMode' in document && 11 >= document.documentMode,
    Fr = null,
    Ku = null,
    Qo = null,
    Wu = !1;
function w0(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wu ||
        Fr == null ||
        Fr !== Xs(r) ||
        ((r = Fr),
        'selectionStart' in r && vf(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Qo && pi(Qo, r)) ||
            ((Qo = r),
            (r = sa(Ku, 'onSelect')),
            0 < r.length &&
                ((t = new hf('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Fr))));
}
function ps(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var Ar = {
        animationend: ps('Animation', 'AnimationEnd'),
        animationiteration: ps('Animation', 'AnimationIteration'),
        animationstart: ps('Animation', 'AnimationStart'),
        transitionend: ps('Transition', 'TransitionEnd'),
    },
    Vl = {},
    $1 = {};
sn &&
    (($1 = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Ar.animationend.animation,
        delete Ar.animationiteration.animation,
        delete Ar.animationstart.animation),
    'TransitionEvent' in window || delete Ar.transitionend.transition);
function Wa(e) {
    if (Vl[e]) return Vl[e];
    if (!Ar[e]) return e;
    var t = Ar[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in $1) return (Vl[e] = t[n]);
    return e;
}
var C1 = Wa('animationend'),
    k1 = Wa('animationiteration'),
    T1 = Wa('animationstart'),
    _1 = Wa('transitionend'),
    P1 = new Map(),
    x0 =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function Dn(e, t) {
    P1.set(e, t), hr(t, [e]);
}
for (var Kl = 0; Kl < x0.length; Kl++) {
    var Wl = x0[Kl],
        j3 = Wl.toLowerCase(),
        I3 = Wl[0].toUpperCase() + Wl.slice(1);
    Dn(j3, 'on' + I3);
}
Dn(C1, 'onAnimationEnd');
Dn(k1, 'onAnimationIteration');
Dn(T1, 'onAnimationStart');
Dn('dblclick', 'onDoubleClick');
Dn('focusin', 'onFocus');
Dn('focusout', 'onBlur');
Dn(_1, 'onTransitionEnd');
Zr('onMouseEnter', ['mouseout', 'mouseover']);
Zr('onMouseLeave', ['mouseout', 'mouseover']);
Zr('onPointerEnter', ['pointerout', 'pointerover']);
Zr('onPointerLeave', ['pointerout', 'pointerover']);
hr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
    ),
);
hr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
    ),
);
hr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
hr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
hr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
hr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Do =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    M3 = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Do),
    );
function b0(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), j5(r, t, void 0, e), (e.currentTarget = null);
}
function O1(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== i && o.isPropagationStopped()))
                        break e;
                    b0(o, a, u), (i = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (l = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        l !== i && o.isPropagationStopped())
                    )
                        break e;
                    b0(o, a, u), (i = l);
                }
        }
    }
    if (ta) throw ((e = Uu), (ta = !1), (Uu = null), e);
}
function se(e, t) {
    var n = t[Yu];
    n === void 0 && (n = t[Yu] = new Set());
    var r = e + '__bubble';
    n.has(r) || (L1(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
    var r = 0;
    t && (r |= 4), L1(n, e, r, t);
}
var hs = '_reactListening' + Math.random().toString(36).slice(2);
function hi(e) {
    if (!e[hs]) {
        (e[hs] = !0),
            Mh.forEach(function (n) {
                n !== 'selectionchange' &&
                    (M3.has(n) || Gl(n, !1, e), Gl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hs] || ((t[hs] = !0), Gl('selectionchange', !1, t));
    }
}
function L1(e, t, n, r) {
    switch (h1(t)) {
        case 1:
            var o = Z5;
            break;
        case 4:
            o = X5;
            break;
        default:
            o = df;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Du ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo),
                            l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Xn(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    e1(function () {
        var u = i,
            c = lf(n),
            f = [];
        e: {
            var d = P1.get(e);
            if (d !== void 0) {
                var v = hf,
                    g = e;
                switch (e) {
                    case 'keypress':
                        if (Is(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        v = h3;
                        break;
                    case 'focusin':
                        (g = 'focus'), (v = Ul);
                        break;
                    case 'focusout':
                        (g = 'blur'), (v = Ul);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        v = Ul;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        v = u0;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        v = n3;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        v = v3;
                        break;
                    case C1:
                    case k1:
                    case T1:
                        v = i3;
                        break;
                    case _1:
                        v = w3;
                        break;
                    case 'scroll':
                        v = e3;
                        break;
                    case 'wheel':
                        v = b3;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        v = a3;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        v = f0;
                }
                var x = (t & 4) !== 0,
                    $ = !x && e === 'scroll',
                    m = x ? (d !== null ? d + 'Capture' : null) : d;
                x = [];
                for (var h = u, y; h !== null; ) {
                    y = h;
                    var E = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            E !== null &&
                            ((y = E),
                            m !== null &&
                                ((E = li(h, m)),
                                E != null && x.push(gi(h, E, y)))),
                        $)
                    )
                        break;
                    h = h.return;
                }
                0 < x.length &&
                    ((d = new v(d, g, null, n, c)),
                    f.push({ event: d, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === 'mouseover' || e === 'pointerover'),
                    (v = e === 'mouseout' || e === 'pointerout'),
                    d &&
                        n !== Mu &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (Xn(g) || g[an]))
                )
                    break e;
                if (
                    (v || d) &&
                    ((d =
                        c.window === c
                            ? c
                            : (d = c.ownerDocument)
                            ? d.defaultView || d.parentWindow
                            : window),
                    v
                        ? ((g = n.relatedTarget || n.toElement),
                          (v = u),
                          (g = g ? Xn(g) : null),
                          g !== null &&
                              (($ = gr(g)),
                              g !== $ || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((v = null), (g = u)),
                    v !== g)
                ) {
                    if (
                        ((x = u0),
                        (E = 'onMouseLeave'),
                        (m = 'onMouseEnter'),
                        (h = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((x = f0),
                            (E = 'onPointerLeave'),
                            (m = 'onPointerEnter'),
                            (h = 'pointer')),
                        ($ = v == null ? d : jr(v)),
                        (y = g == null ? d : jr(g)),
                        (d = new x(E, h + 'leave', v, n, c)),
                        (d.target = $),
                        (d.relatedTarget = y),
                        (E = null),
                        Xn(c) === u &&
                            ((x = new x(m, h + 'enter', g, n, c)),
                            (x.target = y),
                            (x.relatedTarget = $),
                            (E = x)),
                        ($ = E),
                        v && g)
                    )
                        t: {
                            for (x = v, m = g, h = 0, y = x; y; y = br(y)) h++;
                            for (y = 0, E = m; E; E = br(E)) y++;
                            for (; 0 < h - y; ) (x = br(x)), h--;
                            for (; 0 < y - h; ) (m = br(m)), y--;
                            for (; h--; ) {
                                if (
                                    x === m ||
                                    (m !== null && x === m.alternate)
                                )
                                    break t;
                                (x = br(x)), (m = br(m));
                            }
                            x = null;
                        }
                    else x = null;
                    v !== null && S0(f, d, v, x, !1),
                        g !== null && $ !== null && S0(f, $, g, x, !0);
                }
            }
            e: {
                if (
                    ((d = u ? jr(u) : window),
                    (v = d.nodeName && d.nodeName.toLowerCase()),
                    v === 'select' || (v === 'input' && d.type === 'file'))
                )
                    var k = _3;
                else if (h0(d))
                    if (x1) k = N3;
                    else {
                        k = O3;
                        var O = P3;
                    }
                else
                    (v = d.nodeName) &&
                        v.toLowerCase() === 'input' &&
                        (d.type === 'checkbox' || d.type === 'radio') &&
                        (k = L3);
                if (k && (k = k(e, u))) {
                    w1(f, k, n, c);
                    break e;
                }
                O && O(e, d, u),
                    e === 'focusout' &&
                        (O = d._wrapperState) &&
                        O.controlled &&
                        d.type === 'number' &&
                        Ru(d, 'number', d.value);
            }
            switch (((O = u ? jr(u) : window), e)) {
                case 'focusin':
                    (h0(O) || O.contentEditable === 'true') &&
                        ((Fr = O), (Ku = u), (Qo = null));
                    break;
                case 'focusout':
                    Qo = Ku = Fr = null;
                    break;
                case 'mousedown':
                    Wu = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Wu = !1), w0(f, n, c);
                    break;
                case 'selectionchange':
                    if (A3) break;
                case 'keydown':
                case 'keyup':
                    w0(f, n, c);
            }
            var N;
            if (mf)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var S = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            S = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            S = 'onCompositionUpdate';
                            break e;
                    }
                    S = void 0;
                }
            else
                Rr
                    ? v1(e, n) && (S = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (S = 'onCompositionStart');
            S &&
                (m1 &&
                    n.locale !== 'ko' &&
                    (Rr || S !== 'onCompositionStart'
                        ? S === 'onCompositionEnd' && Rr && (N = g1())
                        : ((Sn = c),
                          (pf = 'value' in Sn ? Sn.value : Sn.textContent),
                          (Rr = !0))),
                (O = sa(u, S)),
                0 < O.length &&
                    ((S = new c0(S, e, null, n, c)),
                    f.push({ event: S, listeners: O }),
                    N
                        ? (S.data = N)
                        : ((N = y1(n)), N !== null && (S.data = N)))),
                (N = E3 ? $3(e, n) : C3(e, n)) &&
                    ((u = sa(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((c = new c0(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            c,
                        )),
                        f.push({ event: c, listeners: u }),
                        (c.data = N)));
        }
        O1(f, t);
    });
}
function gi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function sa(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = li(e, n)),
            i != null && r.unshift(gi(e, i, o)),
            (i = li(e, t)),
            i != null && r.push(gi(e, i, o))),
            (e = e.return);
    }
    return r;
}
function br(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function S0(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            o
                ? ((l = li(n, i)), l != null && s.unshift(gi(n, l, a)))
                : o || ((l = li(n, i)), l != null && s.push(gi(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var z3 = /\r\n?/g,
    D3 = /\u0000|\uFFFD/g;
function E0(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            z3,
            `
`,
        )
        .replace(D3, '');
}
function gs(e, t, n) {
    if (((t = E0(t)), E0(e) !== t && n)) throw Error(L(425));
}
function aa() {}
var Gu = null,
    qu = null;
function Qu(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Ju = typeof setTimeout == 'function' ? setTimeout : void 0,
    U3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $0 = typeof Promise == 'function' ? Promise : void 0,
    B3 =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof $0 < 'u'
            ? function (e) {
                  return $0.resolve(null).then(e).catch(H3);
              }
            : Ju;
function H3(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ql(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(o), fi(t);
                    return;
                }
                r--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
        n = o;
    } while (n);
    fi(t);
}
function Pn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function C0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var uo = Math.random().toString(36).slice(2),
    Rt = '__reactFiber$' + uo,
    mi = '__reactProps$' + uo,
    an = '__reactContainer$' + uo,
    Yu = '__reactEvents$' + uo,
    V3 = '__reactListeners$' + uo,
    K3 = '__reactHandles$' + uo;
function Xn(e) {
    var t = e[Rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[an] || n[Rt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = C0(e); e !== null; ) {
                    if ((n = e[Rt])) return n;
                    e = C0(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function zi(e) {
    return (
        (e = e[Rt] || e[an]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function jr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33));
}
function Ga(e) {
    return e[mi] || null;
}
var Zu = [],
    Ir = -1;
function Un(e) {
    return { current: e };
}
function le(e) {
    0 > Ir || ((e.current = Zu[Ir]), (Zu[Ir] = null), Ir--);
}
function re(e, t) {
    Ir++, (Zu[Ir] = e.current), (e.current = t);
}
var zn = {},
    He = Un(zn),
    et = Un(!1),
    ir = zn;
function Xr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function tt(e) {
    return (e = e.childContextTypes), e != null;
}
function la() {
    le(et), le(He);
}
function k0(e, t, n) {
    if (He.current !== zn) throw Error(L(168));
    re(He, t), re(et, n);
}
function N1(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(L(108, P5(e) || 'Unknown', o));
    return he({}, n, r);
}
function ua(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            zn),
        (ir = He.current),
        re(He, e),
        re(et, et.current),
        !0
    );
}
function T0(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n
        ? ((e = N1(e, t, ir)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          le(et),
          le(He),
          re(He, e))
        : le(et),
        re(et, n);
}
var Yt = null,
    qa = !1,
    Jl = !1;
function R1(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
}
function W3(e) {
    (qa = !0), R1(e);
}
function Bn() {
    if (!Jl && Yt !== null) {
        Jl = !0;
        var e = 0,
            t = te;
        try {
            var n = Yt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Yt = null), (qa = !1);
        } catch (o) {
            throw (Yt !== null && (Yt = Yt.slice(e + 1)), o1(uf, Bn), o);
        } finally {
            (te = t), (Jl = !1);
        }
    }
    return null;
}
var Mr = [],
    zr = 0,
    ca = null,
    fa = 0,
    mt = [],
    vt = 0,
    sr = null,
    Zt = 1,
    Xt = '';
function Qn(e, t) {
    (Mr[zr++] = fa), (Mr[zr++] = ca), (ca = e), (fa = t);
}
function F1(e, t, n) {
    (mt[vt++] = Zt), (mt[vt++] = Xt), (mt[vt++] = sr), (sr = e);
    var r = Zt;
    e = Xt;
    var o = 32 - _t(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - _t(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (Zt = (1 << (32 - _t(t) + o)) | (n << o) | r),
            (Xt = i + e);
    } else (Zt = (1 << i) | (n << o) | r), (Xt = e);
}
function yf(e) {
    e.return !== null && (Qn(e, 1), F1(e, 1, 0));
}
function wf(e) {
    for (; e === ca; )
        (ca = Mr[--zr]), (Mr[zr] = null), (fa = Mr[--zr]), (Mr[zr] = null);
    for (; e === sr; )
        (sr = mt[--vt]),
            (mt[vt] = null),
            (Xt = mt[--vt]),
            (mt[vt] = null),
            (Zt = mt[--vt]),
            (mt[vt] = null);
}
var lt = null,
    st = null,
    ue = !1,
    Tt = null;
function A1(e, t) {
    var n = yt(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _0(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (lt = e), (st = Pn(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (lt = e), (st = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = sr !== null ? { id: Zt, overflow: Xt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = yt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (lt = e),
                      (st = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ec(e) {
    if (ue) {
        var t = st;
        if (t) {
            var n = t;
            if (!_0(e, t)) {
                if (Xu(e)) throw Error(L(418));
                t = Pn(n.nextSibling);
                var r = lt;
                t && _0(e, t)
                    ? A1(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (lt = e));
            }
        } else {
            if (Xu(e)) throw Error(L(418));
            (e.flags = (e.flags & -4097) | 2), (ue = !1), (lt = e);
        }
    }
}
function P0(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    lt = e;
}
function ms(e) {
    if (e !== lt) return !1;
    if (!ue) return P0(e), (ue = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !Qu(e.type, e.memoizedProps))),
        t && (t = st))
    ) {
        if (Xu(e)) throw (j1(), Error(L(418)));
        for (; t; ) A1(e, t), (t = Pn(t.nextSibling));
    }
    if ((P0(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            st = Pn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            st = null;
        }
    } else st = lt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
}
function j1() {
    for (var e = st; e; ) e = Pn(e.nextSibling);
}
function eo() {
    (st = lt = null), (ue = !1);
}
function xf(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
}
var G3 = fn.ReactCurrentBatchConfig;
function Ct(e, t) {
    if (e && e.defaultProps) {
        (t = he({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var da = Un(null),
    pa = null,
    Dr = null,
    bf = null;
function Sf() {
    bf = Dr = pa = null;
}
function Ef(e) {
    var t = da.current;
    le(da), (e._currentValue = t);
}
function tc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Jr(e, t) {
    (pa = e),
        (bf = Dr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function bt(e) {
    var t = e._currentValue;
    if (bf !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Dr === null)) {
            if (pa === null) throw Error(L(308));
            (Dr = e), (pa.dependencies = { lanes: 0, firstContext: e });
        } else Dr = Dr.next = e;
    return t;
}
var er = null;
function $f(e) {
    er === null ? (er = [e]) : er.push(e);
}
function I1(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), $f(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        ln(e, r)
    );
}
function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var yn = !1;
function Cf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function M1(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function rn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function On(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), J & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            ln(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), $f(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        ln(e, n)
    );
}
function Ms(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), cf(e, n);
    }
}
function O0(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function ha(e, t, n, r) {
    var o = e.updateQueue;
    yn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (a = c.lastBaseUpdate),
            a !== s &&
                (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
                (c.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var f = o.baseState;
        (s = 0), (c = u = l = null), (a = i);
        do {
            var d = a.lane,
                v = a.eventTime;
            if ((r & d) === d) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var g = e,
                        x = a;
                    switch (((d = t), (v = n), x.tag)) {
                        case 1:
                            if (((g = x.payload), typeof g == 'function')) {
                                f = g.call(v, f, d);
                                break e;
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = (g.flags & -65537) | 128;
                        case 0:
                            if (
                                ((g = x.payload),
                                (d =
                                    typeof g == 'function'
                                        ? g.call(v, f, d)
                                        : g),
                                d == null)
                            )
                                break e;
                            f = he({}, f, d);
                            break e;
                        case 2:
                            yn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (d = o.effects),
                    d === null ? (o.effects = [a]) : d.push(a));
            } else
                (v = {
                    eventTime: v,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    c === null ? ((u = c = v), (l = f)) : (c = c.next = v),
                    (s |= d);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (d = a),
                    (a = d.next),
                    (d.next = null),
                    (o.lastBaseUpdate = d),
                    (o.shared.pending = null);
            }
        } while (1);
        if (
            (c === null && (l = f),
            (o.baseState = l),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = c),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (lr |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function L0(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != 'function'))
                    throw Error(L(191, o));
                o.call(r);
            }
        }
}
var z1 = new Ih.Component().refs;
function nc(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : he({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qa = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? gr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = We(),
            o = Nn(e),
            i = rn(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = On(e, i, o)),
            t !== null && (Pt(t, e, o, r), Ms(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = We(),
            o = Nn(e),
            i = rn(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = On(e, i, o)),
            t !== null && (Pt(t, e, o, r), Ms(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = We(),
            r = Nn(e),
            o = rn(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = On(e, o, r)),
            t !== null && (Pt(t, e, r, n), Ms(t, e, r));
    },
};
function N0(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, i, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !pi(n, r) || !pi(o, i)
            : !0
    );
}
function D1(e, t, n) {
    var r = !1,
        o = zn,
        i = t.contextType;
    return (
        typeof i == 'object' && i !== null
            ? (i = bt(i))
            : ((o = tt(t) ? ir : He.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Xr(e, o) : zn)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Qa),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function R0(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
}
function rc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = z1), Cf(e);
    var i = t.contextType;
    typeof i == 'object' && i !== null
        ? (o.context = bt(i))
        : ((i = tt(t) ? ir : He.current), (o.context = Xr(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == 'function' && (nc(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof o.getSnapshotBeforeUpdate == 'function' ||
            (typeof o.UNSAFE_componentWillMount != 'function' &&
                typeof o.componentWillMount != 'function') ||
            ((t = o.state),
            typeof o.componentWillMount == 'function' && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == 'function' &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && Qa.enqueueReplaceState(o, o.state, null),
            ha(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Lo(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(L(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(L(147, e));
            var o = r,
                i = '' + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var a = o.refs;
                      a === z1 && (a = o.refs = {}),
                          s === null ? delete a[i] : (a[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != 'string') throw Error(L(284));
        if (!n._owner) throw Error(L(290, e));
    }
    return e;
}
function vs(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            L(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e,
            ),
        ))
    );
}
function F0(e) {
    var t = e._init;
    return t(e._payload);
}
function U1(e) {
    function t(m, h) {
        if (e) {
            var y = m.deletions;
            y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
        }
    }
    function n(m, h) {
        if (!e) return null;
        for (; h !== null; ) t(m, h), (h = h.sibling);
        return null;
    }
    function r(m, h) {
        for (m = new Map(); h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
                (h = h.sibling);
        return m;
    }
    function o(m, h) {
        return (m = Rn(m, h)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, h, y) {
        return (
            (m.index = y),
            e
                ? ((y = m.alternate),
                  y !== null
                      ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
                      : ((m.flags |= 2), h))
                : ((m.flags |= 1048576), h)
        );
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, h, y, E) {
        return h === null || h.tag !== 6
            ? ((h = ru(y, m.mode, E)), (h.return = m), h)
            : ((h = o(h, y)), (h.return = m), h);
    }
    function l(m, h, y, E) {
        var k = y.type;
        return k === Nr
            ? c(m, h, y.props.children, E, y.key)
            : h !== null &&
              (h.elementType === k ||
                  (typeof k == 'object' &&
                      k !== null &&
                      k.$$typeof === vn &&
                      F0(k) === h.type))
            ? ((E = o(h, y.props)), (E.ref = Lo(m, h, y)), (E.return = m), E)
            : ((E = Vs(y.type, y.key, y.props, null, m.mode, E)),
              (E.ref = Lo(m, h, y)),
              (E.return = m),
              E);
    }
    function u(m, h, y, E) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== y.containerInfo ||
            h.stateNode.implementation !== y.implementation
            ? ((h = ou(y, m.mode, E)), (h.return = m), h)
            : ((h = o(h, y.children || [])), (h.return = m), h);
    }
    function c(m, h, y, E, k) {
        return h === null || h.tag !== 7
            ? ((h = or(y, m.mode, E, k)), (h.return = m), h)
            : ((h = o(h, y)), (h.return = m), h);
    }
    function f(m, h, y) {
        if ((typeof h == 'string' && h !== '') || typeof h == 'number')
            return (h = ru('' + h, m.mode, y)), (h.return = m), h;
        if (typeof h == 'object' && h !== null) {
            switch (h.$$typeof) {
                case ss:
                    return (
                        (y = Vs(h.type, h.key, h.props, null, m.mode, y)),
                        (y.ref = Lo(m, null, h)),
                        (y.return = m),
                        y
                    );
                case Lr:
                    return (h = ou(h, m.mode, y)), (h.return = m), h;
                case vn:
                    var E = h._init;
                    return f(m, E(h._payload), y);
            }
            if (Mo(h) || ko(h))
                return (h = or(h, m.mode, y, null)), (h.return = m), h;
            vs(m, h);
        }
        return null;
    }
    function d(m, h, y, E) {
        var k = h !== null ? h.key : null;
        if ((typeof y == 'string' && y !== '') || typeof y == 'number')
            return k !== null ? null : a(m, h, '' + y, E);
        if (typeof y == 'object' && y !== null) {
            switch (y.$$typeof) {
                case ss:
                    return y.key === k ? l(m, h, y, E) : null;
                case Lr:
                    return y.key === k ? u(m, h, y, E) : null;
                case vn:
                    return (k = y._init), d(m, h, k(y._payload), E);
            }
            if (Mo(y) || ko(y)) return k !== null ? null : c(m, h, y, E, null);
            vs(m, y);
        }
        return null;
    }
    function v(m, h, y, E, k) {
        if ((typeof E == 'string' && E !== '') || typeof E == 'number')
            return (m = m.get(y) || null), a(h, m, '' + E, k);
        if (typeof E == 'object' && E !== null) {
            switch (E.$$typeof) {
                case ss:
                    return (
                        (m = m.get(E.key === null ? y : E.key) || null),
                        l(h, m, E, k)
                    );
                case Lr:
                    return (
                        (m = m.get(E.key === null ? y : E.key) || null),
                        u(h, m, E, k)
                    );
                case vn:
                    var O = E._init;
                    return v(m, h, y, O(E._payload), k);
            }
            if (Mo(E) || ko(E))
                return (m = m.get(y) || null), c(h, m, E, k, null);
            vs(h, E);
        }
        return null;
    }
    function g(m, h, y, E) {
        for (
            var k = null, O = null, N = h, S = (h = 0), I = null;
            N !== null && S < y.length;
            S++
        ) {
            N.index > S ? ((I = N), (N = null)) : (I = N.sibling);
            var z = d(m, N, y[S], E);
            if (z === null) {
                N === null && (N = I);
                break;
            }
            e && N && z.alternate === null && t(m, N),
                (h = i(z, h, S)),
                O === null ? (k = z) : (O.sibling = z),
                (O = z),
                (N = I);
        }
        if (S === y.length) return n(m, N), ue && Qn(m, S), k;
        if (N === null) {
            for (; S < y.length; S++)
                (N = f(m, y[S], E)),
                    N !== null &&
                        ((h = i(N, h, S)),
                        O === null ? (k = N) : (O.sibling = N),
                        (O = N));
            return ue && Qn(m, S), k;
        }
        for (N = r(m, N); S < y.length; S++)
            (I = v(N, m, S, y[S], E)),
                I !== null &&
                    (e &&
                        I.alternate !== null &&
                        N.delete(I.key === null ? S : I.key),
                    (h = i(I, h, S)),
                    O === null ? (k = I) : (O.sibling = I),
                    (O = I));
        return (
            e &&
                N.forEach(function (j) {
                    return t(m, j);
                }),
            ue && Qn(m, S),
            k
        );
    }
    function x(m, h, y, E) {
        var k = ko(y);
        if (typeof k != 'function') throw Error(L(150));
        if (((y = k.call(y)), y == null)) throw Error(L(151));
        for (
            var O = (k = null), N = h, S = (h = 0), I = null, z = y.next();
            N !== null && !z.done;
            S++, z = y.next()
        ) {
            N.index > S ? ((I = N), (N = null)) : (I = N.sibling);
            var j = d(m, N, z.value, E);
            if (j === null) {
                N === null && (N = I);
                break;
            }
            e && N && j.alternate === null && t(m, N),
                (h = i(j, h, S)),
                O === null ? (k = j) : (O.sibling = j),
                (O = j),
                (N = I);
        }
        if (z.done) return n(m, N), ue && Qn(m, S), k;
        if (N === null) {
            for (; !z.done; S++, z = y.next())
                (z = f(m, z.value, E)),
                    z !== null &&
                        ((h = i(z, h, S)),
                        O === null ? (k = z) : (O.sibling = z),
                        (O = z));
            return ue && Qn(m, S), k;
        }
        for (N = r(m, N); !z.done; S++, z = y.next())
            (z = v(N, m, S, z.value, E)),
                z !== null &&
                    (e &&
                        z.alternate !== null &&
                        N.delete(z.key === null ? S : z.key),
                    (h = i(z, h, S)),
                    O === null ? (k = z) : (O.sibling = z),
                    (O = z));
        return (
            e &&
                N.forEach(function (K) {
                    return t(m, K);
                }),
            ue && Qn(m, S),
            k
        );
    }
    function $(m, h, y, E) {
        if (
            (typeof y == 'object' &&
                y !== null &&
                y.type === Nr &&
                y.key === null &&
                (y = y.props.children),
            typeof y == 'object' && y !== null)
        ) {
            switch (y.$$typeof) {
                case ss:
                    e: {
                        for (var k = y.key, O = h; O !== null; ) {
                            if (O.key === k) {
                                if (((k = y.type), k === Nr)) {
                                    if (O.tag === 7) {
                                        n(m, O.sibling),
                                            (h = o(O, y.props.children)),
                                            (h.return = m),
                                            (m = h);
                                        break e;
                                    }
                                } else if (
                                    O.elementType === k ||
                                    (typeof k == 'object' &&
                                        k !== null &&
                                        k.$$typeof === vn &&
                                        F0(k) === O.type)
                                ) {
                                    n(m, O.sibling),
                                        (h = o(O, y.props)),
                                        (h.ref = Lo(m, O, y)),
                                        (h.return = m),
                                        (m = h);
                                    break e;
                                }
                                n(m, O);
                                break;
                            } else t(m, O);
                            O = O.sibling;
                        }
                        y.type === Nr
                            ? ((h = or(y.props.children, m.mode, E, y.key)),
                              (h.return = m),
                              (m = h))
                            : ((E = Vs(
                                  y.type,
                                  y.key,
                                  y.props,
                                  null,
                                  m.mode,
                                  E,
                              )),
                              (E.ref = Lo(m, h, y)),
                              (E.return = m),
                              (m = E));
                    }
                    return s(m);
                case Lr:
                    e: {
                        for (O = y.key; h !== null; ) {
                            if (h.key === O)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo ===
                                        y.containerInfo &&
                                    h.stateNode.implementation ===
                                        y.implementation
                                ) {
                                    n(m, h.sibling),
                                        (h = o(h, y.children || [])),
                                        (h.return = m),
                                        (m = h);
                                    break e;
                                } else {
                                    n(m, h);
                                    break;
                                }
                            else t(m, h);
                            h = h.sibling;
                        }
                        (h = ou(y, m.mode, E)), (h.return = m), (m = h);
                    }
                    return s(m);
                case vn:
                    return (O = y._init), $(m, h, O(y._payload), E);
            }
            if (Mo(y)) return g(m, h, y, E);
            if (ko(y)) return x(m, h, y, E);
            vs(m, y);
        }
        return (typeof y == 'string' && y !== '') || typeof y == 'number'
            ? ((y = '' + y),
              h !== null && h.tag === 6
                  ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
                  : (n(m, h), (h = ru(y, m.mode, E)), (h.return = m), (m = h)),
              s(m))
            : n(m, h);
    }
    return $;
}
var to = U1(!0),
    B1 = U1(!1),
    Di = {},
    zt = Un(Di),
    vi = Un(Di),
    yi = Un(Di);
function tr(e) {
    if (e === Di) throw Error(L(174));
    return e;
}
function kf(e, t) {
    switch ((re(yi, t), re(vi, e), re(zt, Di), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Au(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Au(t, e));
    }
    le(zt), re(zt, t);
}
function no() {
    le(zt), le(vi), le(yi);
}
function H1(e) {
    tr(yi.current);
    var t = tr(zt.current),
        n = Au(t, e.type);
    t !== n && (re(vi, e), re(zt, n));
}
function Tf(e) {
    vi.current === e && (le(zt), le(vi));
}
var de = Un(0);
function ga(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Yl = [];
function _f() {
    for (var e = 0; e < Yl.length; e++)
        Yl[e]._workInProgressVersionPrimary = null;
    Yl.length = 0;
}
var zs = fn.ReactCurrentDispatcher,
    Zl = fn.ReactCurrentBatchConfig,
    ar = 0,
    pe = null,
    ke = null,
    Le = null,
    ma = !1,
    Jo = !1,
    wi = 0,
    q3 = 0;
function Me() {
    throw Error(L(321));
}
function Pf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ot(e[n], t[n])) return !1;
    return !0;
}
function Of(e, t, n, r, o, i) {
    if (
        ((ar = i),
        (pe = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (zs.current = e === null || e.memoizedState === null ? Z3 : X3),
        (e = n(r, o)),
        Jo)
    ) {
        i = 0;
        do {
            if (((Jo = !1), (wi = 0), 25 <= i)) throw Error(L(301));
            (i += 1),
                (Le = ke = null),
                (t.updateQueue = null),
                (zs.current = e4),
                (e = n(r, o));
        } while (Jo);
    }
    if (
        ((zs.current = va),
        (t = ke !== null && ke.next !== null),
        (ar = 0),
        (Le = ke = pe = null),
        (ma = !1),
        t)
    )
        throw Error(L(300));
    return e;
}
function Lf() {
    var e = wi !== 0;
    return (wi = 0), e;
}
function Nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Le === null ? (pe.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function St() {
    if (ke === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = Le === null ? pe.memoizedState : Le.next;
    if (t !== null) (Le = t), (ke = e);
    else {
        if (e === null) throw Error(L(310));
        (ke = e),
            (e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null,
            }),
            Le === null ? (pe.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
}
function xi(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function Xl(e) {
    var t = St(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = ke,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((ar & c) === c)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
                    (pe.lanes |= c),
                    (lr |= c);
            }
            u = u.next;
        } while (u !== null && u !== i);
        l === null ? (s = r) : (l.next = a),
            Ot(r, t.memoizedState) || (Ze = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (pe.lanes |= i), (lr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function eu(e) {
    var t = St(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        Ot(i, t.memoizedState) || (Ze = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function V1() {}
function K1(e, t) {
    var n = pe,
        r = St(),
        o = t(),
        i = !Ot(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (Ze = !0)),
        (r = r.queue),
        Nf(q1.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            bi(9, G1.bind(null, n, r, o, t), void 0, null),
            Re === null)
        )
            throw Error(L(349));
        ar & 30 || W1(n, t, o);
    }
    return o;
}
function W1(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = pe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (pe.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function G1(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Q1(t) && J1(e);
}
function q1(e, t, n) {
    return n(function () {
        Q1(t) && J1(e);
    });
}
function Q1(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ot(e, n);
    } catch {
        return !0;
    }
}
function J1(e) {
    var t = ln(e, 1);
    t !== null && Pt(t, e, 1, -1);
}
function A0(e) {
    var t = Nt();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xi,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Y3.bind(null, pe, e)),
        [t.memoizedState, e]
    );
}
function bi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = pe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (pe.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Y1() {
    return St().memoizedState;
}
function Ds(e, t, n, r) {
    var o = Nt();
    (pe.flags |= e),
        (o.memoizedState = bi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ja(e, t, n, r) {
    var o = St();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ke !== null) {
        var s = ke.memoizedState;
        if (((i = s.destroy), r !== null && Pf(r, s.deps))) {
            o.memoizedState = bi(t, n, i, r);
            return;
        }
    }
    (pe.flags |= e), (o.memoizedState = bi(1 | t, n, i, r));
}
function j0(e, t) {
    return Ds(8390656, 8, e, t);
}
function Nf(e, t) {
    return Ja(2048, 8, e, t);
}
function Z1(e, t) {
    return Ja(4, 2, e, t);
}
function X1(e, t) {
    return Ja(4, 4, e, t);
}
function eg(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function tg(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ja(4, 4, eg.bind(null, t, e), n)
    );
}
function Rf() {}
function ng(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pf(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function rg(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pf(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function og(e, t, n) {
    return ar & 21
        ? (Ot(n, t) ||
              ((n = a1()), (pe.lanes |= n), (lr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Ze = !0)),
          (e.memoizedState = n));
}
function Q3(e, t) {
    var n = te;
    (te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Zl.transition;
    Zl.transition = {};
    try {
        e(!1), t();
    } finally {
        (te = n), (Zl.transition = r);
    }
}
function ig() {
    return St().memoizedState;
}
function J3(e, t, n) {
    var r = Nn(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        sg(e))
    )
        ag(t, n);
    else if (((n = I1(e, t, n, r)), n !== null)) {
        var o = We();
        Pt(n, e, r, o), lg(n, t, r);
    }
}
function Y3(e, t, n) {
    var r = Nn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (sg(e)) ag(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), Ot(a, s))) {
                    var l = t.interleaved;
                    l === null
                        ? ((o.next = o), $f(t))
                        : ((o.next = l.next), (l.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = I1(e, t, o, r)),
            n !== null && ((o = We()), Pt(n, e, r, o), lg(n, t, r));
    }
}
function sg(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
}
function ag(e, t) {
    Jo = ma = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function lg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), cf(e, n);
    }
}
var va = {
        readContext: bt,
        useCallback: Me,
        useContext: Me,
        useEffect: Me,
        useImperativeHandle: Me,
        useInsertionEffect: Me,
        useLayoutEffect: Me,
        useMemo: Me,
        useReducer: Me,
        useRef: Me,
        useState: Me,
        useDebugValue: Me,
        useDeferredValue: Me,
        useTransition: Me,
        useMutableSource: Me,
        useSyncExternalStore: Me,
        useId: Me,
        unstable_isNewReconciler: !1,
    },
    Z3 = {
        readContext: bt,
        useCallback: function (e, t) {
            return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: bt,
        useEffect: j0,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Ds(4194308, 4, eg.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Ds(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ds(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Nt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Nt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = J3.bind(null, pe, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Nt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: A0,
        useDebugValue: Rf,
        useDeferredValue: function (e) {
            return (Nt().memoizedState = e);
        },
        useTransition: function () {
            var e = A0(!1),
                t = e[0];
            return (e = Q3.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = pe,
                o = Nt();
            if (ue) {
                if (n === void 0) throw Error(L(407));
                n = n();
            } else {
                if (((n = t()), Re === null)) throw Error(L(349));
                ar & 30 || W1(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                j0(q1.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                bi(9, G1.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Nt(),
                t = Re.identifierPrefix;
            if (ue) {
                var n = Xt,
                    r = Zt;
                (n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = wi++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = q3++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    X3 = {
        readContext: bt,
        useCallback: ng,
        useContext: bt,
        useEffect: Nf,
        useImperativeHandle: tg,
        useInsertionEffect: Z1,
        useLayoutEffect: X1,
        useMemo: rg,
        useReducer: Xl,
        useRef: Y1,
        useState: function () {
            return Xl(xi);
        },
        useDebugValue: Rf,
        useDeferredValue: function (e) {
            var t = St();
            return og(t, ke.memoizedState, e);
        },
        useTransition: function () {
            var e = Xl(xi)[0],
                t = St().memoizedState;
            return [e, t];
        },
        useMutableSource: V1,
        useSyncExternalStore: K1,
        useId: ig,
        unstable_isNewReconciler: !1,
    },
    e4 = {
        readContext: bt,
        useCallback: ng,
        useContext: bt,
        useEffect: Nf,
        useImperativeHandle: tg,
        useInsertionEffect: Z1,
        useLayoutEffect: X1,
        useMemo: rg,
        useReducer: eu,
        useRef: Y1,
        useState: function () {
            return eu(xi);
        },
        useDebugValue: Rf,
        useDeferredValue: function (e) {
            var t = St();
            return ke === null
                ? (t.memoizedState = e)
                : og(t, ke.memoizedState, e);
        },
        useTransition: function () {
            var e = eu(xi)[0],
                t = St().memoizedState;
            return [e, t];
        },
        useMutableSource: V1,
        useSyncExternalStore: K1,
        useId: ig,
        unstable_isNewReconciler: !1,
    };
function ro(e, t) {
    try {
        var n = '',
            r = t;
        do (n += _5(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function tu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var t4 = typeof WeakMap == 'function' ? WeakMap : Map;
function ug(e, t, n) {
    (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            wa || ((wa = !0), (hc = r)), oc(e, t);
        }),
        n
    );
}
function cg(e, t, n) {
    (n = rn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                oc(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == 'function' &&
            (n.callback = function () {
                oc(e, t),
                    typeof r != 'function' &&
                        (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : '',
                });
            }),
        n
    );
}
function I0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new t4();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = g4.bind(null, e, t, n)), t.then(e, e));
}
function M0(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function z0(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = rn(-1, 1)), (t.tag = 2), On(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var n4 = fn.ReactCurrentOwner,
    Ze = !1;
function Ke(e, t, n, r) {
    t.child = e === null ? B1(t, null, n, r) : to(t, e.child, n, r);
}
function D0(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        Jr(t, o),
        (r = Of(e, t, n, r, i, o)),
        (n = Lf()),
        e !== null && !Ze
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              un(e, t, o))
            : (ue && n && yf(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
    );
}
function U0(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == 'function' &&
            !Uf(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), fg(e, t, i, r, o))
            : ((e = Vs(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : pi),
            n(s, r) && e.ref === t.ref)
        )
            return un(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = Rn(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function fg(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (pi(i, r) && e.ref === t.ref)
            if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (Ze = !0);
            else return (t.lanes = e.lanes), un(e, t, o);
    }
    return ic(e, t, n, r, o);
}
function dg(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                re(Br, ot),
                (ot |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    re(Br, ot),
                    (ot |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                re(Br, ot),
                (ot |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            re(Br, ot),
            (ot |= r);
    return Ke(e, t, o, n), t.child;
}
function pg(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ic(e, t, n, r, o) {
    var i = tt(n) ? ir : He.current;
    return (
        (i = Xr(t, i)),
        Jr(t, o),
        (n = Of(e, t, n, r, i, o)),
        (r = Lf()),
        e !== null && !Ze
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              un(e, t, o))
            : (ue && r && yf(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
    );
}
function B0(e, t, n, r, o) {
    if (tt(n)) {
        var i = !0;
        ua(t);
    } else i = !1;
    if ((Jr(t, o), t.stateNode === null))
        Us(e, t), D1(t, n, r), rc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == 'object' && u !== null
            ? (u = bt(u))
            : ((u = tt(n) ? ir : He.current), (u = Xr(t, u)));
        var c = n.getDerivedStateFromProps,
            f =
                typeof c == 'function' ||
                typeof s.getSnapshotBeforeUpdate == 'function';
        f ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof s.componentWillReceiveProps != 'function') ||
            ((a !== r || l !== u) && R0(t, s, r, u)),
            (yn = !1);
        var d = t.memoizedState;
        (s.state = d),
            ha(t, r, s, o),
            (l = t.memoizedState),
            a !== r || d !== l || et.current || yn
                ? (typeof c == 'function' &&
                      (nc(t, n, c, r), (l = t.memoizedState)),
                  (a = yn || N0(t, n, a, r, d, l, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != 'function' &&
                                typeof s.componentWillMount != 'function') ||
                            (typeof s.componentWillMount == 'function' &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == 'function' &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            M1(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : Ct(t.type, a)),
            (s.props = u),
            (f = t.pendingProps),
            (d = s.context),
            (l = n.contextType),
            typeof l == 'object' && l !== null
                ? (l = bt(l))
                : ((l = tt(n) ? ir : He.current), (l = Xr(t, l)));
        var v = n.getDerivedStateFromProps;
        (c =
            typeof v == 'function' ||
            typeof s.getSnapshotBeforeUpdate == 'function') ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof s.componentWillReceiveProps != 'function') ||
            ((a !== f || d !== l) && R0(t, s, r, l)),
            (yn = !1),
            (d = t.memoizedState),
            (s.state = d),
            ha(t, r, s, o);
        var g = t.memoizedState;
        a !== f || d !== g || et.current || yn
            ? (typeof v == 'function' &&
                  (nc(t, n, v, r), (g = t.memoizedState)),
              (u = yn || N0(t, n, u, r, d, g, l) || !1)
                  ? (c ||
                        (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                            typeof s.componentWillUpdate != 'function') ||
                        (typeof s.componentWillUpdate == 'function' &&
                            s.componentWillUpdate(r, g, l),
                        typeof s.UNSAFE_componentWillUpdate == 'function' &&
                            s.UNSAFE_componentWillUpdate(r, g, l)),
                    typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != 'function' ||
                        (a === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != 'function' ||
                        (a === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (s.props = r),
              (s.state = g),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != 'function' ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return sc(e, t, n, r, i, o);
}
function sc(e, t, n, r, o, i) {
    pg(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && T0(t, n, !1), un(e, t, i);
    (r = t.stateNode), (n4.current = t);
    var a =
        s && typeof n.getDerivedStateFromError != 'function'
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = to(t, e.child, null, i)),
              (t.child = to(t, null, a, i)))
            : Ke(e, t, a, i),
        (t.memoizedState = r.state),
        o && T0(t, n, !0),
        t.child
    );
}
function hg(e) {
    var t = e.stateNode;
    t.pendingContext
        ? k0(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && k0(e, t.context, !1),
        kf(e, t.containerInfo);
}
function H0(e, t, n, r, o) {
    return eo(), xf(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function lc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function gg(e, t, n) {
    var r = t.pendingProps,
        o = de.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) ||
            (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        re(de, o & 1),
        e === null)
    )
        return (
            ec(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: 'hidden', children: s }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = s))
                            : (i = Xa(s, r, 0, null)),
                        (e = or(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = lc(n)),
                        (t.memoizedState = ac),
                        e)
                      : Ff(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
        return r4(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: 'hidden', children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = l),
                  (t.deletions = null))
                : ((r = Rn(o, l)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null
                ? (i = Rn(a, i))
                : ((i = or(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? lc(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = ac),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = Rn(i, { mode: 'visible', children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Ff(e, t) {
    return (
        (t = Xa({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function ys(e, t, n, r) {
    return (
        r !== null && xf(r),
        to(t, e.child, null, n),
        (e = Ff(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function r4(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = tu(Error(L(422)))), ys(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = Xa({ mode: 'visible', children: r.children }, o, 0, null)),
              (i = or(i, o, s, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && to(t, e.child, null, s),
              (t.child.memoizedState = lc(s)),
              (t.memoizedState = ac),
              i);
    if (!(t.mode & 1)) return ys(e, t, s, null);
    if (o.data === '$!') {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (i = Error(L(419))), (r = tu(i, r, void 0)), ys(e, t, s, r)
        );
    }
    if (((a = (s & e.childLanes) !== 0), Ze || a)) {
        if (((r = Re), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), ln(e, o), Pt(r, e, o, -1));
        }
        return Df(), (r = tu(Error(L(421)))), ys(e, t, s, r);
    }
    return o.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = m4.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (st = Pn(o.nextSibling)),
          (lt = t),
          (ue = !0),
          (Tt = null),
          e !== null &&
              ((mt[vt++] = Zt),
              (mt[vt++] = Xt),
              (mt[vt++] = sr),
              (Zt = e.id),
              (Xt = e.overflow),
              (sr = t)),
          (t = Ff(t, r.children)),
          (t.flags |= 4096),
          t);
}
function V0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), tc(e.return, t, n);
}
function nu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function mg(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((Ke(e, t, r.children, n), (r = de.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && V0(e, n, t);
                else if (e.tag === 19) V0(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((re(de, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case 'forwards':
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && ga(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    nu(t, !1, o, n, i);
                break;
            case 'backwards':
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && ga(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                nu(t, !0, n, null, i);
                break;
            case 'together':
                nu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Us(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function un(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (lr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Rn(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function o4(e, t, n) {
    switch (t.tag) {
        case 3:
            hg(t), eo();
            break;
        case 5:
            H1(t);
            break;
        case 1:
            tt(t.type) && ua(t);
            break;
        case 4:
            kf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            re(da, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (re(de, de.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? gg(e, t, n)
                    : (re(de, de.current & 1),
                      (e = un(e, t, n)),
                      e !== null ? e.sibling : null);
            re(de, de.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return mg(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                re(de, de.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), dg(e, t, n);
    }
    return un(e, t, n);
}
var vg, uc, yg, wg;
vg = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
uc = function () {};
yg = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), tr(zt.current);
        var i = null;
        switch (n) {
            case 'input':
                (o = Lu(e, o)), (r = Lu(e, r)), (i = []);
                break;
            case 'select':
                (o = he({}, o, { value: void 0 })),
                    (r = he({}, r, { value: void 0 })),
                    (i = []);
                break;
            case 'textarea':
                (o = Fu(e, o)), (r = Fu(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = aa);
        }
        ju(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === 'style') {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (si.hasOwnProperty(u)
                            ? i || (i = [])
                            : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (
                ((a = o != null ? o[u] : void 0),
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            )
                if (u === 'style')
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) ||
                                (l && l.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ''));
                        for (s in l)
                            l.hasOwnProperty(s) &&
                                a[s] !== l[s] &&
                                (n || (n = {}), (n[s] = l[s]));
                    } else n || (i || (i = []), i.push(u, n)), (n = l);
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(u, l))
                        : u === 'children'
                        ? (typeof l != 'string' && typeof l != 'number') ||
                          (i = i || []).push(u, '' + l)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (si.hasOwnProperty(u)
                              ? (l != null &&
                                    u === 'onScroll' &&
                                    se('scroll', e),
                                i || a === l || (i = []))
                              : (i = i || []).push(u, l));
        }
        n && (i = i || []).push('style', n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
wg = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function No(e, t) {
    if (!ue)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function i4(e, t, n) {
    var r = t.pendingProps;
    switch ((wf(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ze(t), null;
        case 1:
            return tt(t.type) && la(), ze(t), null;
        case 3:
            return (
                (r = t.stateNode),
                no(),
                le(et),
                le(He),
                _f(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (ms(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Tt !== null && (vc(Tt), (Tt = null)))),
                uc(e, t),
                ze(t),
                null
            );
        case 5:
            Tf(t);
            var o = tr(yi.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                yg(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(L(166));
                    return ze(t), null;
                }
                if (((e = tr(zt.current)), ms(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[Rt] = t), (r[mi] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            se('cancel', r), se('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            se('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (o = 0; o < Do.length; o++) se(Do[o], r);
                            break;
                        case 'source':
                            se('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            se('error', r), se('load', r);
                            break;
                        case 'details':
                            se('toggle', r);
                            break;
                        case 'input':
                            Xd(r, i), se('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                se('invalid', r);
                            break;
                        case 'textarea':
                            t0(r, i), se('invalid', r);
                    }
                    ju(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === 'children'
                                ? typeof a == 'string'
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          gs(r.textContent, a, e),
                                      (o = ['children', a]))
                                    : typeof a == 'number' &&
                                      r.textContent !== '' + a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          gs(r.textContent, a, e),
                                      (o = ['children', '' + a]))
                                : si.hasOwnProperty(s) &&
                                  a != null &&
                                  s === 'onScroll' &&
                                  se('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            as(r), e0(r, i, !0);
                            break;
                        case 'textarea':
                            as(r), n0(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof i.onClick == 'function' && (r.onclick = aa);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = Wh(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = s.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === 'select' &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Rt] = t),
                        (e[mi] = r),
                        vg(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Iu(n, r)), n)) {
                            case 'dialog':
                                se('cancel', e), se('close', e), (o = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                se('load', e), (o = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (o = 0; o < Do.length; o++) se(Do[o], e);
                                o = r;
                                break;
                            case 'source':
                                se('error', e), (o = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                se('error', e), se('load', e), (o = r);
                                break;
                            case 'details':
                                se('toggle', e), (o = r);
                                break;
                            case 'input':
                                Xd(e, r), (o = Lu(e, r)), se('invalid', e);
                                break;
                            case 'option':
                                o = r;
                                break;
                            case 'select':
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = he({}, r, { value: void 0 })),
                                    se('invalid', e);
                                break;
                            case 'textarea':
                                t0(e, r), (o = Fu(e, r)), se('invalid', e);
                                break;
                            default:
                                o = r;
                        }
                        ju(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === 'style'
                                    ? Qh(e, l)
                                    : i === 'dangerouslySetInnerHTML'
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && Gh(e, l))
                                    : i === 'children'
                                    ? typeof l == 'string'
                                        ? (n !== 'textarea' || l !== '') &&
                                          ai(e, l)
                                        : typeof l == 'number' && ai(e, '' + l)
                                    : i !== 'suppressContentEditableWarning' &&
                                      i !== 'suppressHydrationWarning' &&
                                      i !== 'autoFocus' &&
                                      (si.hasOwnProperty(i)
                                          ? l != null &&
                                            i === 'onScroll' &&
                                            se('scroll', e)
                                          : l != null && rf(e, i, l, s));
                            }
                        switch (n) {
                            case 'input':
                                as(e), e0(e, r, !1);
                                break;
                            case 'textarea':
                                as(e), n0(e);
                                break;
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + Mn(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Wr(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Wr(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0,
                                          );
                                break;
                            default:
                                typeof o.onClick == 'function' &&
                                    (e.onclick = aa);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ze(t), null;
        case 6:
            if (e && t.stateNode != null) wg(e, t, e.memoizedProps, r);
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(L(166));
                if (((n = tr(yi.current)), tr(zt.current), ms(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Rt] = t),
                        (i = r.nodeValue !== n) && ((e = lt), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                gs(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    gs(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Rt] = t),
                        (t.stateNode = r);
            }
            return ze(t), null;
        case 13:
            if (
                (le(de),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (ue && st !== null && t.mode & 1 && !(t.flags & 128))
                    j1(), eo(), (t.flags |= 98560), (i = !1);
                else if (((i = ms(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(L(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(L(317));
                        i[Rt] = t;
                    } else
                        eo(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ze(t), (i = !1);
                } else Tt !== null && (vc(Tt), (Tt = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || de.current & 1
                              ? Te === 0 && (Te = 3)
                              : Df())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ze(t),
                  null);
        case 4:
            return (
                no(),
                uc(e, t),
                e === null && hi(t.stateNode.containerInfo),
                ze(t),
                null
            );
        case 10:
            return Ef(t.type._context), ze(t), null;
        case 17:
            return tt(t.type) && la(), ze(t), null;
        case 19:
            if ((le(de), (i = t.memoizedState), i === null)) return ze(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) No(i, !1);
                else {
                    if (Te !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = ga(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        No(i, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  s.memoizedProps),
                                              (i.memoizedState =
                                                  s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return re(de, (de.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        we() > oo &&
                        ((t.flags |= 128),
                        (r = !0),
                        No(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ga(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            No(i, !0),
                            i.tail === null &&
                                i.tailMode === 'hidden' &&
                                !s.alternate &&
                                !ue)
                        )
                            return ze(t), null;
                    } else
                        2 * we() - i.renderingStartTime > oo &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            No(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = we()),
                  (t.sibling = null),
                  (n = de.current),
                  re(de, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ze(t), null);
        case 22:
        case 23:
            return (
                zf(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? ot & 1073741824 &&
                      (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ze(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(L(156, t.tag));
}
function s4(e, t) {
    switch ((wf(t), t.tag)) {
        case 1:
            return (
                tt(t.type) && la(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                no(),
                le(et),
                le(He),
                _f(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Tf(t), null;
        case 13:
            if (
                (le(de),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(L(340));
                eo();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return le(de), null;
        case 4:
            return no(), null;
        case 10:
            return Ef(t.type._context), null;
        case 22:
        case 23:
            return zf(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ws = !1,
    De = !1,
    a4 = typeof WeakSet == 'function' ? WeakSet : Set,
    M = null;
function Ur(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (r) {
                ve(e, t, r);
            }
        else n.current = null;
}
function cc(e, t, n) {
    try {
        n();
    } catch (r) {
        ve(e, t, r);
    }
}
var K0 = !1;
function l4(e, t) {
    if (((Gu = oa), (e = E1()), vf(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var v;
                            f !== n ||
                                (o !== 0 && f.nodeType !== 3) ||
                                (a = s + o),
                                f !== i ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (l = s + r),
                                f.nodeType === 3 && (s += f.nodeValue.length),
                                (v = f.firstChild) !== null;

                        )
                            (d = f), (f = v);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (d === n && ++u === o && (a = s),
                                d === i && ++c === r && (l = s),
                                (v = f.nextSibling) !== null)
                            )
                                break;
                            (f = d), (d = f.parentNode);
                        }
                        f = v;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        qu = { focusedElem: e, selectionRange: n }, oa = !1, M = t;
        M !== null;

    )
        if (
            ((t = M),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (M = e);
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (g !== null) {
                                    var x = g.memoizedProps,
                                        $ = g.memoizedState,
                                        m = t.stateNode,
                                        h = m.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? x
                                                : Ct(t.type, x),
                                            $,
                                        );
                                    m.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = '')
                                    : y.nodeType === 9 &&
                                      y.documentElement &&
                                      y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(L(163));
                        }
                } catch (E) {
                    ve(t, t.return, E);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (M = e);
                    break;
                }
                M = t.return;
            }
    return (g = K0), (K0 = !1), g;
}
function Yo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && cc(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Ya(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function fc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function xg(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), xg(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Rt],
                delete t[mi],
                delete t[Yu],
                delete t[V3],
                delete t[K3])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function bg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function W0(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || bg(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function dc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = aa));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (dc(e, t, n), e = e.sibling; e !== null; )
            dc(e, t, n), (e = e.sibling);
}
function pc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (pc(e, t, n), e = e.sibling; e !== null; )
            pc(e, t, n), (e = e.sibling);
}
var Fe = null,
    kt = !1;
function gn(e, t, n) {
    for (n = n.child; n !== null; ) Sg(e, t, n), (n = n.sibling);
}
function Sg(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == 'function')
        try {
            Mt.onCommitFiberUnmount(Ha, n);
        } catch {}
    switch (n.tag) {
        case 5:
            De || Ur(n, t);
        case 6:
            var r = Fe,
                o = kt;
            (Fe = null),
                gn(e, t, n),
                (Fe = r),
                (kt = o),
                Fe !== null &&
                    (kt
                        ? ((e = Fe),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : Fe.removeChild(n.stateNode));
            break;
        case 18:
            Fe !== null &&
                (kt
                    ? ((e = Fe),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Ql(e.parentNode, n)
                          : e.nodeType === 1 && Ql(e, n),
                      fi(e))
                    : Ql(Fe, n.stateNode));
            break;
        case 4:
            (r = Fe),
                (o = kt),
                (Fe = n.stateNode.containerInfo),
                (kt = !0),
                gn(e, t, n),
                (Fe = r),
                (kt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !De &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag),
                        s !== void 0 && (i & 2 || i & 4) && cc(n, t, s),
                        (o = o.next);
                } while (o !== r);
            }
            gn(e, t, n);
            break;
        case 1:
            if (
                !De &&
                (Ur(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    ve(n, t, a);
                }
            gn(e, t, n);
            break;
        case 21:
            gn(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((De = (r = De) || n.memoizedState !== null),
                  gn(e, t, n),
                  (De = r))
                : gn(e, t, n);
            break;
        default:
            gn(e, t, n);
    }
}
function G0(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new a4()),
            t.forEach(function (r) {
                var o = v4.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function $t(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Fe = a.stateNode), (kt = !1);
                            break e;
                        case 3:
                            (Fe = a.stateNode.containerInfo), (kt = !0);
                            break e;
                        case 4:
                            (Fe = a.stateNode.containerInfo), (kt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Fe === null) throw Error(L(160));
                Sg(i, s, o), (Fe = null), (kt = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (u) {
                ve(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Eg(t, e), (t = t.sibling);
}
function Eg(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (($t(t, e), Lt(e), r & 4)) {
                try {
                    Yo(3, e, e.return), Ya(3, e);
                } catch (x) {
                    ve(e, e.return, x);
                }
                try {
                    Yo(5, e, e.return);
                } catch (x) {
                    ve(e, e.return, x);
                }
            }
            break;
        case 1:
            $t(t, e), Lt(e), r & 512 && n !== null && Ur(n, n.return);
            break;
        case 5:
            if (
                ($t(t, e),
                Lt(e),
                r & 512 && n !== null && Ur(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    ai(o, '');
                } catch (x) {
                    ve(e, e.return, x);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === 'input' &&
                            i.type === 'radio' &&
                            i.name != null &&
                            Vh(o, i),
                            Iu(a, s);
                        var u = Iu(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s],
                                f = l[s + 1];
                            c === 'style'
                                ? Qh(o, f)
                                : c === 'dangerouslySetInnerHTML'
                                ? Gh(o, f)
                                : c === 'children'
                                ? ai(o, f)
                                : rf(o, c, f, u);
                        }
                        switch (a) {
                            case 'input':
                                Nu(o, i);
                                break;
                            case 'textarea':
                                Kh(o, i);
                                break;
                            case 'select':
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var v = i.value;
                                v != null
                                    ? Wr(o, !!i.multiple, v, !1)
                                    : d !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Wr(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0,
                                            )
                                          : Wr(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : '',
                                                !1,
                                            ));
                        }
                        o[mi] = i;
                    } catch (x) {
                        ve(e, e.return, x);
                    }
            }
            break;
        case 6:
            if (($t(t, e), Lt(e), r & 4)) {
                if (e.stateNode === null) throw Error(L(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (x) {
                    ve(e, e.return, x);
                }
            }
            break;
        case 3:
            if (
                ($t(t, e),
                Lt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    fi(t.containerInfo);
                } catch (x) {
                    ve(e, e.return, x);
                }
            break;
        case 4:
            $t(t, e), Lt(e);
            break;
        case 13:
            $t(t, e),
                Lt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (If = we())),
                r & 4 && G0(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((De = (u = De) || c), $t(t, e), (De = u))
                    : $t(t, e),
                Lt(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                )
                    for (M = e, c = e.child; c !== null; ) {
                        for (f = M = c; M !== null; ) {
                            switch (((d = M), (v = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Yo(4, d, d.return);
                                    break;
                                case 1:
                                    Ur(d, d.return);
                                    var g = d.stateNode;
                                    if (
                                        typeof g.componentWillUnmount ==
                                        'function'
                                    ) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount();
                                        } catch (x) {
                                            ve(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ur(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Q0(f);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = d), (M = v)) : Q0(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (o = f.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == 'function'
                                              ? i.setProperty(
                                                    'display',
                                                    'none',
                                                    'important',
                                                )
                                              : (i.display = 'none'))
                                        : ((a = f.stateNode),
                                          (l = f.memoizedProps.style),
                                          (s =
                                              l != null &&
                                              l.hasOwnProperty('display')
                                                  ? l.display
                                                  : null),
                                          (a.style.display = qh('display', s)));
                            } catch (x) {
                                ve(e, e.return, x);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u
                                    ? ''
                                    : f.memoizedProps;
                            } catch (x) {
                                ve(e, e.return, x);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            $t(t, e), Lt(e), r & 4 && G0(e);
            break;
        case 21:
            break;
        default:
            $t(t, e), Lt(e);
    }
}
function Lt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (bg(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(L(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ai(o, ''), (r.flags &= -33));
                    var i = W0(e);
                    pc(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = W0(e);
                    dc(e, a, s);
                    break;
                default:
                    throw Error(L(161));
            }
        } catch (l) {
            ve(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function u4(e, t, n) {
    (M = e), $g(e);
}
function $g(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var o = M,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ws;
            if (!s) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || De;
                a = ws;
                var u = De;
                if (((ws = s), (De = l) && !u))
                    for (M = o; M !== null; )
                        (s = M),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? J0(o)
                                : l !== null
                                ? ((l.return = s), (M = l))
                                : J0(o);
                for (; i !== null; ) (M = i), $g(i), (i = i.sibling);
                (M = o), (ws = a), (De = u);
            }
            q0(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (M = i))
                : q0(e);
    }
}
function q0(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            De || Ya(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !De)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Ct(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate,
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && L0(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                L0(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        l.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && fi(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(L(163));
                    }
                De || (t.flags & 512 && fc(t));
            } catch (d) {
                ve(t, t.return, d);
            }
        }
        if (t === e) {
            M = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Q0(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function J0(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ya(4, t);
                    } catch (l) {
                        ve(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == 'function') {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            ve(t, o, l);
                        }
                    }
                    var i = t.return;
                    try {
                        fc(t);
                    } catch (l) {
                        ve(t, i, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        fc(t);
                    } catch (l) {
                        ve(t, s, l);
                    }
            }
        } catch (l) {
            ve(t, t.return, l);
        }
        if (t === e) {
            M = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (M = a);
            break;
        }
        M = t.return;
    }
}
var c4 = Math.ceil,
    ya = fn.ReactCurrentDispatcher,
    Af = fn.ReactCurrentOwner,
    wt = fn.ReactCurrentBatchConfig,
    J = 0,
    Re = null,
    Se = null,
    Ae = 0,
    ot = 0,
    Br = Un(0),
    Te = 0,
    Si = null,
    lr = 0,
    Za = 0,
    jf = 0,
    Zo = null,
    Ye = null,
    If = 0,
    oo = 1 / 0,
    Jt = null,
    wa = !1,
    hc = null,
    Ln = null,
    xs = !1,
    En = null,
    xa = 0,
    Xo = 0,
    gc = null,
    Bs = -1,
    Hs = 0;
function We() {
    return J & 6 ? we() : Bs !== -1 ? Bs : (Bs = we());
}
function Nn(e) {
    return e.mode & 1
        ? J & 2 && Ae !== 0
            ? Ae & -Ae
            : G3.transition !== null
            ? (Hs === 0 && (Hs = a1()), Hs)
            : ((e = te),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : h1(e.type))),
              e)
        : 1;
}
function Pt(e, t, n, r) {
    if (50 < Xo) throw ((Xo = 0), (gc = null), Error(L(185)));
    Ii(e, n, r),
        (!(J & 2) || e !== Re) &&
            (e === Re && (!(J & 2) && (Za |= n), Te === 4 && xn(e, Ae)),
            nt(e, r),
            n === 1 &&
                J === 0 &&
                !(t.mode & 1) &&
                ((oo = we() + 500), qa && Bn()));
}
function nt(e, t) {
    var n = e.callbackNode;
    G5(e, t);
    var r = ra(e, e === Re ? Ae : 0);
    if (r === 0)
        n !== null && i0(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && i0(n), t === 1))
            e.tag === 0 ? W3(Y0.bind(null, e)) : R1(Y0.bind(null, e)),
                B3(function () {
                    !(J & 6) && Bn();
                }),
                (n = null);
        else {
            switch (l1(r)) {
                case 1:
                    n = uf;
                    break;
                case 4:
                    n = i1;
                    break;
                case 16:
                    n = na;
                    break;
                case 536870912:
                    n = s1;
                    break;
                default:
                    n = na;
            }
            n = Ng(n, Cg.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Cg(e, t) {
    if (((Bs = -1), (Hs = 0), J & 6)) throw Error(L(327));
    var n = e.callbackNode;
    if (Yr() && e.callbackNode !== n) return null;
    var r = ra(e, e === Re ? Ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ba(e, r);
    else {
        t = r;
        var o = J;
        J |= 2;
        var i = Tg();
        (Re !== e || Ae !== t) && ((Jt = null), (oo = we() + 500), rr(e, t));
        do
            try {
                p4();
                break;
            } catch (a) {
                kg(e, a);
            }
        while (1);
        Sf(),
            (ya.current = i),
            (J = o),
            Se !== null ? (t = 0) : ((Re = null), (Ae = 0), (t = Te));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = Bu(e)), o !== 0 && ((r = o), (t = mc(e, o)))),
            t === 1)
        )
            throw ((n = Si), rr(e, 0), xn(e, r), nt(e, we()), n);
        if (t === 6) xn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !f4(o) &&
                    ((t = ba(e, r)),
                    t === 2 &&
                        ((i = Bu(e)), i !== 0 && ((r = i), (t = mc(e, i)))),
                    t === 1))
            )
                throw ((n = Si), rr(e, 0), xn(e, r), nt(e, we()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    Jn(e, Ye, Jt);
                    break;
                case 3:
                    if (
                        (xn(e, r),
                        (r & 130023424) === r &&
                            ((t = If + 500 - we()), 10 < t))
                    ) {
                        if (ra(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            We(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Ju(Jn.bind(null, e, Ye, Jt), t);
                        break;
                    }
                    Jn(e, Ye, Jt);
                    break;
                case 4:
                    if ((xn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - _t(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = we() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * c4(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ju(Jn.bind(null, e, Ye, Jt), r);
                        break;
                    }
                    Jn(e, Ye, Jt);
                    break;
                case 5:
                    Jn(e, Ye, Jt);
                    break;
                default:
                    throw Error(L(329));
            }
        }
    }
    return nt(e, we()), e.callbackNode === n ? Cg.bind(null, e) : null;
}
function mc(e, t) {
    var n = Zo;
    return (
        e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256),
        (e = ba(e, t)),
        e !== 2 && ((t = Ye), (Ye = n), t !== null && vc(t)),
        e
    );
}
function vc(e) {
    Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function f4(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ot(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function xn(e, t) {
    for (
        t &= ~jf,
            t &= ~Za,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - _t(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Y0(e) {
    if (J & 6) throw Error(L(327));
    Yr();
    var t = ra(e, 0);
    if (!(t & 1)) return nt(e, we()), null;
    var n = ba(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bu(e);
        r !== 0 && ((t = r), (n = mc(e, r)));
    }
    if (n === 1) throw ((n = Si), rr(e, 0), xn(e, t), nt(e, we()), n);
    if (n === 6) throw Error(L(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Jn(e, Ye, Jt),
        nt(e, we()),
        null
    );
}
function Mf(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t);
    } finally {
        (J = n), J === 0 && ((oo = we() + 500), qa && Bn());
    }
}
function ur(e) {
    En !== null && En.tag === 0 && !(J & 6) && Yr();
    var t = J;
    J |= 1;
    var n = wt.transition,
        r = te;
    try {
        if (((wt.transition = null), (te = 1), e)) return e();
    } finally {
        (te = r), (wt.transition = n), (J = t), !(J & 6) && Bn();
    }
}
function zf() {
    (ot = Br.current), le(Br);
}
function rr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), U3(n)), Se !== null))
        for (n = Se.return; n !== null; ) {
            var r = n;
            switch ((wf(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && la();
                    break;
                case 3:
                    no(), le(et), le(He), _f();
                    break;
                case 5:
                    Tf(r);
                    break;
                case 4:
                    no();
                    break;
                case 13:
                    le(de);
                    break;
                case 19:
                    le(de);
                    break;
                case 10:
                    Ef(r.type._context);
                    break;
                case 22:
                case 23:
                    zf();
            }
            n = n.return;
        }
    if (
        ((Re = e),
        (Se = e = Rn(e.current, null)),
        (Ae = ot = t),
        (Te = 0),
        (Si = null),
        (jf = Za = lr = 0),
        (Ye = Zo = null),
        er !== null)
    ) {
        for (t = 0; t < er.length; t++)
            if (((n = er[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        er = null;
    }
    return e;
}
function kg(e, t) {
    do {
        var n = Se;
        try {
            if ((Sf(), (zs.current = va), ma)) {
                for (var r = pe.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                ma = !1;
            }
            if (
                ((ar = 0),
                (Le = ke = pe = null),
                (Jo = !1),
                (wi = 0),
                (Af.current = null),
                n === null || n.return === null)
            ) {
                (Te = 1), (Si = t), (Se = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (
                    ((t = Ae),
                    (a.flags |= 32768),
                    l !== null &&
                        typeof l == 'object' &&
                        typeof l.then == 'function')
                ) {
                    var u = l,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null),
                              (c.memoizedState = null));
                    }
                    var v = M0(s);
                    if (v !== null) {
                        (v.flags &= -257),
                            z0(v, s, a, i, t),
                            v.mode & 1 && I0(i, u, t),
                            (t = v),
                            (l = u);
                        var g = t.updateQueue;
                        if (g === null) {
                            var x = new Set();
                            x.add(l), (t.updateQueue = x);
                        } else g.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            I0(i, u, t), Df();
                            break e;
                        }
                        l = Error(L(426));
                    }
                } else if (ue && a.mode & 1) {
                    var $ = M0(s);
                    if ($ !== null) {
                        !($.flags & 65536) && ($.flags |= 256),
                            z0($, s, a, i, t),
                            xf(ro(l, a));
                        break e;
                    }
                }
                (i = l = ro(l, a)),
                    Te !== 4 && (Te = 2),
                    Zo === null ? (Zo = [i]) : Zo.push(i),
                    (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var m = ug(i, l, t);
                            O0(i, m);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type,
                                y = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof h.getDerivedStateFromError ==
                                    'function' ||
                                    (y !== null &&
                                        typeof y.componentDidCatch ==
                                            'function' &&
                                        (Ln === null || !Ln.has(y))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var E = cg(i, a, t);
                                O0(i, E);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Pg(n);
        } catch (k) {
            (t = k), Se === n && n !== null && (Se = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Tg() {
    var e = ya.current;
    return (ya.current = va), e === null ? va : e;
}
function Df() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
        Re === null || (!(lr & 268435455) && !(Za & 268435455)) || xn(Re, Ae);
}
function ba(e, t) {
    var n = J;
    J |= 2;
    var r = Tg();
    (Re !== e || Ae !== t) && ((Jt = null), rr(e, t));
    do
        try {
            d4();
            break;
        } catch (o) {
            kg(e, o);
        }
    while (1);
    if ((Sf(), (J = n), (ya.current = r), Se !== null)) throw Error(L(261));
    return (Re = null), (Ae = 0), Te;
}
function d4() {
    for (; Se !== null; ) _g(Se);
}
function p4() {
    for (; Se !== null && !M5(); ) _g(Se);
}
function _g(e) {
    var t = Lg(e.alternate, e, ot);
    (e.memoizedProps = e.pendingProps),
        t === null ? Pg(e) : (Se = t),
        (Af.current = null);
}
function Pg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = s4(n, t)), n !== null)) {
                (n.flags &= 32767), (Se = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Te = 6), (Se = null);
                return;
            }
        } else if (((n = i4(n, t, ot)), n !== null)) {
            Se = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Se = t;
            return;
        }
        Se = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
}
function Jn(e, t, n) {
    var r = te,
        o = wt.transition;
    try {
        (wt.transition = null), (te = 1), h4(e, t, n, r);
    } finally {
        (wt.transition = o), (te = r);
    }
    return null;
}
function h4(e, t, n, r) {
    do Yr();
    while (En !== null);
    if (J & 6) throw Error(L(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(L(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (q5(e, i),
        e === Re && ((Se = Re = null), (Ae = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            xs ||
            ((xs = !0),
            Ng(na, function () {
                return Yr(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = wt.transition), (wt.transition = null);
        var s = te;
        te = 1;
        var a = J;
        (J |= 4),
            (Af.current = null),
            l4(e, n),
            Eg(n, e),
            F3(qu),
            (oa = !!Gu),
            (qu = Gu = null),
            (e.current = n),
            u4(n),
            z5(),
            (J = a),
            (te = s),
            (wt.transition = i);
    } else e.current = n;
    if (
        (xs && ((xs = !1), (En = e), (xa = o)),
        (i = e.pendingLanes),
        i === 0 && (Ln = null),
        B5(n.stateNode),
        nt(e, we()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (wa) throw ((wa = !1), (e = hc), (hc = null), e);
    return (
        xa & 1 && e.tag !== 0 && Yr(),
        (i = e.pendingLanes),
        i & 1 ? (e === gc ? Xo++ : ((Xo = 0), (gc = e))) : (Xo = 0),
        Bn(),
        null
    );
}
function Yr() {
    if (En !== null) {
        var e = l1(xa),
            t = wt.transition,
            n = te;
        try {
            if (((wt.transition = null), (te = 16 > e ? 16 : e), En === null))
                var r = !1;
            else {
                if (((e = En), (En = null), (xa = 0), J & 6))
                    throw Error(L(331));
                var o = J;
                for (J |= 4, M = e.current; M !== null; ) {
                    var i = M,
                        s = i.child;
                    if (M.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (M = u; M !== null; ) {
                                    var c = M;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Yo(8, c, i);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (M = f);
                                    else
                                        for (; M !== null; ) {
                                            c = M;
                                            var d = c.sibling,
                                                v = c.return;
                                            if ((xg(c), c === u)) {
                                                M = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = v), (M = d);
                                                break;
                                            }
                                            M = v;
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var x = g.child;
                                if (x !== null) {
                                    g.child = null;
                                    do {
                                        var $ = x.sibling;
                                        (x.sibling = null), (x = $);
                                    } while (x !== null);
                                }
                            }
                            M = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        (s.return = i), (M = s);
                    else
                        e: for (; M !== null; ) {
                            if (((i = M), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yo(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                (m.return = i.return), (M = m);
                                break e;
                            }
                            M = i.return;
                        }
                }
                var h = e.current;
                for (M = h; M !== null; ) {
                    s = M;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        (y.return = s), (M = y);
                    else
                        e: for (s = h; M !== null; ) {
                            if (((a = M), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ya(9, a);
                                    }
                                } catch (k) {
                                    ve(a, a.return, k);
                                }
                            if (a === s) {
                                M = null;
                                break e;
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                (E.return = a.return), (M = E);
                                break e;
                            }
                            M = a.return;
                        }
                }
                if (
                    ((J = o),
                    Bn(),
                    Mt && typeof Mt.onPostCommitFiberRoot == 'function')
                )
                    try {
                        Mt.onPostCommitFiberRoot(Ha, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (te = n), (wt.transition = t);
        }
    }
    return !1;
}
function Z0(e, t, n) {
    (t = ro(n, t)),
        (t = ug(e, t, 1)),
        (e = On(e, t, 1)),
        (t = We()),
        e !== null && (Ii(e, 1, t), nt(e, t));
}
function ve(e, t, n) {
    if (e.tag === 3) Z0(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Z0(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (Ln === null || !Ln.has(r)))
                ) {
                    (e = ro(n, e)),
                        (e = cg(t, e, 1)),
                        (t = On(t, e, 1)),
                        (e = We()),
                        t !== null && (Ii(t, 1, e), nt(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function g4(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = We()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Re === e &&
            (Ae & n) === n &&
            (Te === 4 ||
            (Te === 3 && (Ae & 130023424) === Ae && 500 > we() - If)
                ? rr(e, 0)
                : (jf |= n)),
        nt(e, t);
}
function Og(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304))
            : (t = 1));
    var n = We();
    (e = ln(e, t)), e !== null && (Ii(e, t, n), nt(e, n));
}
function m4(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Og(e, n);
}
function v4(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314));
    }
    r !== null && r.delete(t), Og(e, n);
}
var Lg;
Lg = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Ze = !1), o4(e, t, n);
            Ze = !!(e.flags & 131072);
        }
    else (Ze = !1), ue && t.flags & 1048576 && F1(t, fa, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Us(e, t), (e = t.pendingProps);
            var o = Xr(t, He.current);
            Jr(t, n), (o = Of(null, t, r, e, o, n));
            var i = Lf();
            return (
                (t.flags |= 1),
                typeof o == 'object' &&
                o !== null &&
                typeof o.render == 'function' &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      tt(r) ? ((i = !0), ua(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      Cf(t),
                      (o.updater = Qa),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      rc(t, r, e, n),
                      (t = sc(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      ue && i && yf(t),
                      Ke(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Us(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = w4(r)),
                    (e = Ct(r, e)),
                    o)
                ) {
                    case 0:
                        t = ic(null, t, r, e, n);
                        break e;
                    case 1:
                        t = B0(null, t, r, e, n);
                        break e;
                    case 11:
                        t = D0(null, t, r, e, n);
                        break e;
                    case 14:
                        t = U0(null, t, r, Ct(r.type, e), n);
                        break e;
                }
                throw Error(L(306, r, ''));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ct(r, o)),
                ic(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ct(r, o)),
                B0(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((hg(t), e === null)) throw Error(L(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    M1(e, t),
                    ha(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = ro(Error(L(423)), t)), (t = H0(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = ro(Error(L(424)), t)), (t = H0(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            st = Pn(t.stateNode.containerInfo.firstChild),
                                lt = t,
                                ue = !0,
                                Tt = null,
                                n = B1(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((eo(), r === o)) {
                        t = un(e, t, n);
                        break e;
                    }
                    Ke(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                H1(t),
                e === null && ec(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Qu(r, o)
                    ? (s = null)
                    : i !== null && Qu(r, i) && (t.flags |= 32),
                pg(e, t),
                Ke(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ec(t), null;
        case 13:
            return gg(e, t, n);
        case 4:
            return (
                kf(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = to(t, null, r, n)) : Ke(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ct(r, o)),
                D0(e, t, r, o, n)
            );
        case 7:
            return Ke(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ke(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ke(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (s = o.value),
                    re(da, r._currentValue),
                    (r._currentValue = s),
                    i !== null)
                )
                    if (Ot(i.value, s)) {
                        if (i.children === o.children && !et.current) {
                            t = un(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = rn(-1, n & -n)), (l.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null
                                                    ? (l.next = l)
                                                    : ((l.next = c.next),
                                                      (c.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            tc(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null))
                                    throw Error(L(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    tc(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                Ke(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Jr(t, n),
                (o = bt(o)),
                (r = r(o)),
                (t.flags |= 1),
                Ke(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = Ct(r, t.pendingProps)),
                (o = Ct(r.type, o)),
                U0(e, t, r, o, n)
            );
        case 15:
            return fg(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ct(r, o)),
                Us(e, t),
                (t.tag = 1),
                tt(r) ? ((e = !0), ua(t)) : (e = !1),
                Jr(t, n),
                D1(t, r, o),
                rc(t, r, o, n),
                sc(null, t, r, !0, e, n)
            );
        case 19:
            return mg(e, t, n);
        case 22:
            return dg(e, t, n);
    }
    throw Error(L(156, t.tag));
};
function Ng(e, t) {
    return o1(e, t);
}
function y4(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function yt(e, t, n, r) {
    return new y4(e, t, n, r);
}
function Uf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function w4(e) {
    if (typeof e == 'function') return Uf(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === sf)) return 11;
        if (e === af) return 14;
    }
    return 2;
}
function Rn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = yt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Vs(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == 'function')) Uf(e) && (s = 1);
    else if (typeof e == 'string') s = 5;
    else
        e: switch (e) {
            case Nr:
                return or(n.children, o, i, t);
            case of:
                (s = 8), (o |= 8);
                break;
            case Tu:
                return (
                    (e = yt(12, n, t, o | 2)),
                    (e.elementType = Tu),
                    (e.lanes = i),
                    e
                );
            case _u:
                return (
                    (e = yt(13, n, t, o)),
                    (e.elementType = _u),
                    (e.lanes = i),
                    e
                );
            case Pu:
                return (
                    (e = yt(19, n, t, o)),
                    (e.elementType = Pu),
                    (e.lanes = i),
                    e
                );
            case Uh:
                return Xa(n, o, i, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case zh:
                            s = 10;
                            break e;
                        case Dh:
                            s = 9;
                            break e;
                        case sf:
                            s = 11;
                            break e;
                        case af:
                            s = 14;
                            break e;
                        case vn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(L(130, e == null ? e : typeof e, ''));
        }
    return (
        (t = yt(s, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function or(e, t, n, r) {
    return (e = yt(7, e, r, t)), (e.lanes = n), e;
}
function Xa(e, t, n, r) {
    return (
        (e = yt(22, e, r, t)),
        (e.elementType = Uh),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function ru(e, t, n) {
    return (e = yt(6, e, null, t)), (e.lanes = n), e;
}
function ou(e, t, n) {
    return (
        (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function x4(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ml(0)),
        (this.expirationTimes = Ml(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ml(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Bf(e, t, n, r, o, i, s, a, l) {
    return (
        (e = new x4(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = yt(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Cf(i),
        e
    );
}
function b4(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Lr,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Rg(e) {
    if (!e) return zn;
    e = e._reactInternals;
    e: {
        if (gr(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (tt(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(L(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (tt(n)) return N1(e, n, t);
    }
    return t;
}
function Fg(e, t, n, r, o, i, s, a, l) {
    return (
        (e = Bf(n, r, !0, e, o, i, s, a, l)),
        (e.context = Rg(null)),
        (n = e.current),
        (r = We()),
        (o = Nn(n)),
        (i = rn(r, o)),
        (i.callback = t ?? null),
        On(n, i, o),
        (e.current.lanes = o),
        Ii(e, o, r),
        nt(e, r),
        e
    );
}
function el(e, t, n, r) {
    var o = t.current,
        i = We(),
        s = Nn(o);
    return (
        (n = Rg(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = rn(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = On(o, t, s)),
        e !== null && (Pt(e, o, s, i), Ms(e, o, s)),
        s
    );
}
function Sa(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function X0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Hf(e, t) {
    X0(e, t), (e = e.alternate) && X0(e, t);
}
function S4() {
    return null;
}
var Ag =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function Vf(e) {
    this._internalRoot = e;
}
tl.prototype.render = Vf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    el(e, t, null, null);
};
tl.prototype.unmount = Vf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ur(function () {
            el(null, e, null, null);
        }),
            (t[an] = null);
    }
};
function tl(e) {
    this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = f1();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
        wn.splice(n, 0, e), n === 0 && p1(e);
    }
};
function Kf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function ep() {}
function E4(e, t, n, r, o) {
    if (o) {
        if (typeof r == 'function') {
            var i = r;
            r = function () {
                var u = Sa(s);
                i.call(u);
            };
        }
        var s = Fg(t, r, e, 0, null, !1, !1, '', ep);
        return (
            (e._reactRootContainer = s),
            (e[an] = s.current),
            hi(e.nodeType === 8 ? e.parentNode : e),
            ur(),
            s
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == 'function') {
        var a = r;
        r = function () {
            var u = Sa(l);
            a.call(u);
        };
    }
    var l = Bf(e, 0, !1, null, null, !1, !1, '', ep);
    return (
        (e._reactRootContainer = l),
        (e[an] = l.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        ur(function () {
            el(t, l, n, r);
        }),
        l
    );
}
function rl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == 'function') {
            var a = o;
            o = function () {
                var l = Sa(s);
                a.call(l);
            };
        }
        el(t, s, e, o);
    } else s = E4(n, t, e, o, r);
    return Sa(s);
}
u1 = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = zo(t.pendingLanes);
                n !== 0 &&
                    (cf(t, n | 1),
                    nt(t, we()),
                    !(J & 6) && ((oo = we() + 500), Bn()));
            }
            break;
        case 13:
            ur(function () {
                var r = ln(e, 1);
                if (r !== null) {
                    var o = We();
                    Pt(r, e, 1, o);
                }
            }),
                Hf(e, 1);
    }
};
ff = function (e) {
    if (e.tag === 13) {
        var t = ln(e, 134217728);
        if (t !== null) {
            var n = We();
            Pt(t, e, 134217728, n);
        }
        Hf(e, 134217728);
    }
};
c1 = function (e) {
    if (e.tag === 13) {
        var t = Nn(e),
            n = ln(e, t);
        if (n !== null) {
            var r = We();
            Pt(n, e, t, r);
        }
        Hf(e, t);
    }
};
f1 = function () {
    return te;
};
d1 = function (e, t) {
    var n = te;
    try {
        return (te = e), t();
    } finally {
        te = n;
    }
};
zu = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Nu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]',
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ga(r);
                        if (!o) throw Error(L(90));
                        Hh(r), Nu(r, o);
                    }
                }
            }
            break;
        case 'textarea':
            Kh(e, n);
            break;
        case 'select':
            (t = n.value), t != null && Wr(e, !!n.multiple, t, !1);
    }
};
Zh = Mf;
Xh = ur;
var $4 = { usingClientEntryPoint: !1, Events: [zi, jr, Ga, Jh, Yh, Mf] },
    Ro = {
        findFiberByHostInstance: Xn,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    C4 = {
        bundleType: Ro.bundleType,
        version: Ro.version,
        rendererPackageName: Ro.rendererPackageName,
        rendererConfig: Ro.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: fn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = n1(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ro.findFiberByHostInstance || S4,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bs.isDisabled && bs.supportsFiber)
        try {
            (Ha = bs.inject(C4)), (Mt = bs);
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $4;
ct.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kf(t)) throw Error(L(200));
    return b4(e, t, null, n);
};
ct.createRoot = function (e, t) {
    if (!Kf(e)) throw Error(L(299));
    var n = !1,
        r = '',
        o = Ag;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Bf(e, 1, !1, null, null, n, !1, r, o)),
        (e[an] = t.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        new Vf(t)
    );
};
ct.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(L(188))
            : ((e = Object.keys(e).join(',')), Error(L(268, e)));
    return (e = n1(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
    return ur(e);
};
ct.hydrate = function (e, t, n) {
    if (!nl(t)) throw Error(L(200));
    return rl(null, e, t, !0, n);
};
ct.hydrateRoot = function (e, t, n) {
    if (!Kf(e)) throw Error(L(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = '',
        s = Ag;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Fg(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[an] = t.current),
        hi(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new tl(t);
};
ct.render = function (e, t, n) {
    if (!nl(t)) throw Error(L(200));
    return rl(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function (e) {
    if (!nl(e)) throw Error(L(40));
    return e._reactRootContainer
        ? (ur(function () {
              rl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[an] = null);
              });
          }),
          !0)
        : !1;
};
ct.unstable_batchedUpdates = Mf;
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!nl(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return rl(e, t, n, !1, r);
};
ct.version = '18.2.0-next-9e3b772b8-20220608';
function jg() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg);
        } catch (e) {
            console.error(e);
        }
}
jg(), (Fh.exports = ct);
var Ig = Fh.exports;
const k4 = Et(Ig);
var tp = Ig;
(Cu.createRoot = tp.createRoot), (Cu.hydrateRoot = tp.hydrateRoot);
const T4 = 'modulepreload',
    _4 = function (e) {
        return '/static/' + e;
    },
    np = {},
    co = function (t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName('link');
        return Promise.all(
            n.map((i) => {
                if (((i = _4(i)), i in np)) return;
                np[i] = !0;
                const s = i.endsWith('.css'),
                    a = s ? '[rel="stylesheet"]' : '';
                if (!!r)
                    for (let c = o.length - 1; c >= 0; c--) {
                        const f = o[c];
                        if (f.href === i && (!s || f.rel === 'stylesheet'))
                            return;
                    }
                else if (document.querySelector(`link[href="${i}"]${a}`))
                    return;
                const u = document.createElement('link');
                if (
                    ((u.rel = s ? 'stylesheet' : T4),
                    s || ((u.as = 'script'), (u.crossOrigin = '')),
                    (u.href = i),
                    document.head.appendChild(u),
                    s)
                )
                    return new Promise((c, f) => {
                        u.addEventListener('load', c),
                            u.addEventListener('error', () =>
                                f(new Error(`Unable to preload CSS for ${i}`)),
                            );
                    });
            }),
        )
            .then(() => t())
            .catch((i) => {
                const s = new Event('vite:preloadError', { cancelable: !0 });
                if (
                    ((s.payload = i),
                    window.dispatchEvent(s),
                    !s.defaultPrevented)
                )
                    throw i;
            });
    };
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ei() {
    return (
        (Ei = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Ei.apply(this, arguments)
    );
}
var $n;
(function (e) {
    (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})($n || ($n = {}));
const rp = 'popstate';
function P4(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return yc(
            '',
            { pathname: i, search: s, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || 'default',
        );
    }
    function n(r, o) {
        return typeof o == 'string' ? o : Ea(o);
    }
    return L4(t, n, null, e);
}
function $e(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Wf(e, t) {
    if (!e) {
        typeof console < 'u' && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function O4() {
    return Math.random().toString(36).substr(2, 8);
}
function op(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function yc(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Ei(
            {
                pathname: typeof e == 'string' ? e : e.pathname,
                search: '',
                hash: '',
            },
            typeof t == 'string' ? fo(t) : t,
            { state: n, key: (t && t.key) || r || O4() },
        )
    );
}
function Ea(e) {
    let { pathname: t = '/', search: n = '', hash: r = '' } = e;
    return (
        n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
        r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
        t
    );
}
function fo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf('#');
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf('?');
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function L4(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        a = $n.Pop,
        l = null,
        u = c();
    u == null && ((u = 0), s.replaceState(Ei({}, s.state, { idx: u }), ''));
    function c() {
        return (s.state || { idx: null }).idx;
    }
    function f() {
        a = $n.Pop;
        let $ = c(),
            m = $ == null ? null : $ - u;
        (u = $), l && l({ action: a, location: x.location, delta: m });
    }
    function d($, m) {
        a = $n.Push;
        let h = yc(x.location, $, m);
        n && n(h, $), (u = c() + 1);
        let y = op(h, u),
            E = x.createHref(h);
        try {
            s.pushState(y, '', E);
        } catch (k) {
            if (k instanceof DOMException && k.name === 'DataCloneError')
                throw k;
            o.location.assign(E);
        }
        i && l && l({ action: a, location: x.location, delta: 1 });
    }
    function v($, m) {
        a = $n.Replace;
        let h = yc(x.location, $, m);
        n && n(h, $), (u = c());
        let y = op(h, u),
            E = x.createHref(h);
        s.replaceState(y, '', E),
            i && l && l({ action: a, location: x.location, delta: 0 });
    }
    function g($) {
        let m =
                o.location.origin !== 'null'
                    ? o.location.origin
                    : o.location.href,
            h = typeof $ == 'string' ? $ : Ea($);
        return (
            $e(
                m,
                'No window.location.(origin|href) available to create URL for href: ' +
                    h,
            ),
            new URL(h, m)
        );
    }
    let x = {
        get action() {
            return a;
        },
        get location() {
            return e(o, s);
        },
        listen($) {
            if (l)
                throw new Error('A history only accepts one active listener');
            return (
                o.addEventListener(rp, f),
                (l = $),
                () => {
                    o.removeEventListener(rp, f), (l = null);
                }
            );
        },
        createHref($) {
            return t(o, $);
        },
        createURL: g,
        encodeLocation($) {
            let m = g($);
            return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: d,
        replace: v,
        go($) {
            return s.go($);
        },
    };
    return x;
}
var ip;
(function (e) {
    (e.data = 'data'),
        (e.deferred = 'deferred'),
        (e.redirect = 'redirect'),
        (e.error = 'error');
})(ip || (ip = {}));
function N4(e, t, n) {
    n === void 0 && (n = '/');
    let r = typeof t == 'string' ? fo(t) : t,
        o = Gf(r.pathname || '/', n);
    if (o == null) return null;
    let i = Mg(e);
    R4(i);
    let s = null;
    for (let a = 0; s == null && a < i.length; ++a) s = B4(i[a], K4(o));
    return s;
}
function Mg(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = '');
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || '' : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i,
        };
        l.relativePath.startsWith('/') &&
            ($e(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    'must start with the combined path of all its parent routes.',
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = Fn([r, l.relativePath]),
            c = n.concat(l);
        i.children &&
            i.children.length > 0 &&
            ($e(
                i.index !== !0,
                'Index routes must not have child routes. Please remove ' +
                    ('all child routes from route path "' + u + '".'),
            ),
            Mg(i.children, t, c, u)),
            !(i.path == null && !i.index) &&
                t.push({ path: u, score: D4(u, i.index), routesMeta: c });
    };
    return (
        e.forEach((i, s) => {
            var a;
            if (i.path === '' || !((a = i.path) != null && a.includes('?')))
                o(i, s);
            else for (let l of zg(i.path)) o(i, s, l);
        }),
        t
    );
}
function zg(e) {
    let t = e.split('/');
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith('?'),
        i = n.replace(/\?$/, '');
    if (r.length === 0) return o ? [i, ''] : [i];
    let s = zg(r.join('/')),
        a = [];
    return (
        a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
        o && a.push(...s),
        a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
    );
}
function R4(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : U4(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex),
              ),
    );
}
const F4 = /^:\w+$/,
    A4 = 3,
    j4 = 2,
    I4 = 1,
    M4 = 10,
    z4 = -2,
    sp = (e) => e === '*';
function D4(e, t) {
    let n = e.split('/'),
        r = n.length;
    return (
        n.some(sp) && (r += z4),
        t && (r += j4),
        n
            .filter((o) => !sp(o))
            .reduce((o, i) => o + (F4.test(i) ? A4 : i === '' ? I4 : M4), r)
    );
}
function U4(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function B4(e, t) {
    let { routesMeta: n } = e,
        r = {},
        o = '/',
        i = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = o === '/' ? t : t.slice(o.length) || '/',
            c = H4(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: l,
                },
                u,
            );
        if (!c) return null;
        Object.assign(r, c.params);
        let f = a.route;
        i.push({
            params: r,
            pathname: Fn([o, c.pathname]),
            pathnameBase: Q4(Fn([o, c.pathnameBase])),
            route: f,
        }),
            c.pathnameBase !== '/' && (o = Fn([o, c.pathnameBase]));
    }
    return i;
}
function H4(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = V4(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, '$1'),
        a = o.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            if (c === '*') {
                let d = a[f] || '';
                s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1');
            }
            return (u[c] = W4(a[f] || '', c)), u;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e,
    };
}
function V4(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Wf(
            e === '*' || !e.endsWith('*') || e.endsWith('/*'),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, '/*') +
                    '" because the `*` character must ') +
                'always follow a `/` in the pattern. To get rid of this warning, ' +
                ('please change the route path to "' +
                    e.replace(/\*$/, '/*') +
                    '".'),
        );
    let r = [],
        o =
            '^' +
            e
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                .replace(/\/:(\w+)/g, (s, a) => (r.push(a), '/([^\\/]+)'));
    return (
        e.endsWith('*')
            ? (r.push('*'),
              (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : n
            ? (o += '\\/*$')
            : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
        [new RegExp(o, t ? void 0 : 'i'), r]
    );
}
function K4(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            Wf(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ('encoding (' + t + ').'),
            ),
            e
        );
    }
}
function W4(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            Wf(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (' due to a bad percent encoding (' + n + ').'),
            ),
            e
        );
    }
}
function Gf(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith('/') ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== '/' ? null : e.slice(n) || '/';
}
function G4(e, t) {
    t === void 0 && (t = '/');
    let {
        pathname: n,
        search: r = '',
        hash: o = '',
    } = typeof e == 'string' ? fo(e) : e;
    return {
        pathname: n ? (n.startsWith('/') ? n : q4(n, t)) : t,
        search: J4(r),
        hash: Y4(o),
    };
}
function q4(e, t) {
    let n = t.replace(/\/+$/, '').split('/');
    return (
        e.split('/').forEach((o) => {
            o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
        }),
        n.length > 1 ? n.join('/') : '/'
    );
}
function iu(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ('`to.' +
            t +
            '` field [' +
            JSON.stringify(r) +
            '].  Please separate it out to the ') +
        ('`to.' +
            n +
            '` field. Alternatively you may provide the full path as ') +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Dg(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
}
function Ug(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == 'string'
        ? (o = fo(e))
        : ((o = Ei({}, e)),
          $e(
              !o.pathname || !o.pathname.includes('?'),
              iu('?', 'pathname', 'search', o),
          ),
          $e(
              !o.pathname || !o.pathname.includes('#'),
              iu('#', 'pathname', 'hash', o),
          ),
          $e(
              !o.search || !o.search.includes('#'),
              iu('#', 'search', 'hash', o),
          ));
    let i = e === '' || o.pathname === '',
        s = i ? '/' : o.pathname,
        a;
    if (r || s == null) a = n;
    else {
        let f = t.length - 1;
        if (s.startsWith('..')) {
            let d = s.split('/');
            for (; d[0] === '..'; ) d.shift(), (f -= 1);
            o.pathname = d.join('/');
        }
        a = f >= 0 ? t[f] : '/';
    }
    let l = G4(o, a),
        u = s && s !== '/' && s.endsWith('/'),
        c = (i || s === '.') && n.endsWith('/');
    return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const Fn = (e) => e.join('/').replace(/\/\/+/g, '/'),
    Q4 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    J4 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    Y4 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Z4(e) {
    return (
        e != null &&
        typeof e.status == 'number' &&
        typeof e.statusText == 'string' &&
        typeof e.internal == 'boolean' &&
        'data' in e
    );
}
const Bg = ['post', 'put', 'patch', 'delete'];
new Set(Bg);
const X4 = ['get', ...Bg];
new Set(X4);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $a() {
    return (
        ($a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        $a.apply(this, arguments)
    );
}
const qf = b.createContext(null),
    ew = b.createContext(null),
    po = b.createContext(null),
    ol = b.createContext(null),
    Hn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Hg = b.createContext(null);
function tw(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ui() || $e(!1);
    let { basename: r, navigator: o } = b.useContext(po),
        { hash: i, pathname: s, search: a } = Kg(e, { relative: n }),
        l = s;
    return (
        r !== '/' && (l = s === '/' ? r : Fn([r, s])),
        o.createHref({ pathname: l, search: a, hash: i })
    );
}
function Ui() {
    return b.useContext(ol) != null;
}
function ho() {
    return Ui() || $e(!1), b.useContext(ol).location;
}
function Vg(e) {
    b.useContext(po).static || b.useLayoutEffect(e);
}
function go() {
    let { isDataRoute: e } = b.useContext(Hn);
    return e ? hw() : nw();
}
function nw() {
    Ui() || $e(!1);
    let e = b.useContext(qf),
        { basename: t, navigator: n } = b.useContext(po),
        { matches: r } = b.useContext(Hn),
        { pathname: o } = ho(),
        i = JSON.stringify(Dg(r).map((l) => l.pathnameBase)),
        s = b.useRef(!1);
    return (
        Vg(() => {
            s.current = !0;
        }),
        b.useCallback(
            function (l, u) {
                if ((u === void 0 && (u = {}), !s.current)) return;
                if (typeof l == 'number') {
                    n.go(l);
                    return;
                }
                let c = Ug(l, JSON.parse(i), o, u.relative === 'path');
                e == null &&
                    t !== '/' &&
                    (c.pathname = c.pathname === '/' ? t : Fn([t, c.pathname])),
                    (u.replace ? n.replace : n.push)(c, u.state, u);
            },
            [t, n, i, o, e],
        )
    );
}
function zC() {
    let { matches: e } = b.useContext(Hn),
        t = e[e.length - 1];
    return t ? t.params : {};
}
function Kg(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { matches: r } = b.useContext(Hn),
        { pathname: o } = ho(),
        i = JSON.stringify(Dg(r).map((s) => s.pathnameBase));
    return b.useMemo(() => Ug(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function rw(e, t) {
    return ow(e, t);
}
function ow(e, t, n) {
    Ui() || $e(!1);
    let { navigator: r } = b.useContext(po),
        { matches: o } = b.useContext(Hn),
        i = o[o.length - 1],
        s = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : '/';
    i && i.route;
    let l = ho(),
        u;
    if (t) {
        var c;
        let x = typeof t == 'string' ? fo(t) : t;
        a === '/' || ((c = x.pathname) != null && c.startsWith(a)) || $e(!1),
            (u = x);
    } else u = l;
    let f = u.pathname || '/',
        d = a === '/' ? f : f.slice(a.length) || '/',
        v = N4(e, { pathname: d }),
        g = uw(
            v &&
                v.map((x) =>
                    Object.assign({}, x, {
                        params: Object.assign({}, s, x.params),
                        pathname: Fn([
                            a,
                            r.encodeLocation
                                ? r.encodeLocation(x.pathname).pathname
                                : x.pathname,
                        ]),
                        pathnameBase:
                            x.pathnameBase === '/'
                                ? a
                                : Fn([
                                      a,
                                      r.encodeLocation
                                          ? r.encodeLocation(x.pathnameBase)
                                                .pathname
                                          : x.pathnameBase,
                                  ]),
                    }),
                ),
            o,
            n,
        );
    return t && g
        ? b.createElement(
              ol.Provider,
              {
                  value: {
                      location: $a(
                          {
                              pathname: '/',
                              search: '',
                              hash: '',
                              state: null,
                              key: 'default',
                          },
                          u,
                      ),
                      navigationType: $n.Pop,
                  },
              },
              g,
          )
        : g;
}
function iw() {
    let e = pw(),
        t = Z4(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
        i = null;
    return b.createElement(
        b.Fragment,
        null,
        b.createElement('h2', null, 'Unexpected Application Error!'),
        b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        n ? b.createElement('pre', { style: o }, n) : null,
        i,
    );
}
const sw = b.createElement(iw, null);
class aw extends b.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== 'idle' && t.revalidation === 'idle')
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error || n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            'React Router caught the following error during render',
            t,
            n,
        );
    }
    render() {
        return this.state.error
            ? b.createElement(
                  Hn.Provider,
                  { value: this.props.routeContext },
                  b.createElement(Hg.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  }),
              )
            : this.props.children;
    }
}
function lw(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = b.useContext(qf);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        b.createElement(Hn.Provider, { value: t }, r)
    );
}
function uw(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null;
    }
    let i = e,
        s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let a = i.findIndex(
            (l) => l.route.id && (s == null ? void 0 : s[l.route.id]),
        );
        a >= 0 || $e(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
    }
    return i.reduceRight((a, l, u) => {
        let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
            f = null;
        n && (f = l.route.errorElement || sw);
        let d = t.concat(i.slice(0, u + 1)),
            v = () => {
                let g;
                return (
                    c
                        ? (g = f)
                        : l.route.Component
                        ? (g = b.createElement(l.route.Component, null))
                        : l.route.element
                        ? (g = l.route.element)
                        : (g = a),
                    b.createElement(lw, {
                        match: l,
                        routeContext: {
                            outlet: a,
                            matches: d,
                            isDataRoute: n != null,
                        },
                        children: g,
                    })
                );
            };
        return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
            ? b.createElement(aw, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: f,
                  error: c,
                  children: v(),
                  routeContext: { outlet: null, matches: d, isDataRoute: !0 },
              })
            : v();
    }, null);
}
var wc;
(function (e) {
    (e.UseBlocker = 'useBlocker'),
        (e.UseRevalidator = 'useRevalidator'),
        (e.UseNavigateStable = 'useNavigate');
})(wc || (wc = {}));
var $i;
(function (e) {
    (e.UseBlocker = 'useBlocker'),
        (e.UseLoaderData = 'useLoaderData'),
        (e.UseActionData = 'useActionData'),
        (e.UseRouteError = 'useRouteError'),
        (e.UseNavigation = 'useNavigation'),
        (e.UseRouteLoaderData = 'useRouteLoaderData'),
        (e.UseMatches = 'useMatches'),
        (e.UseRevalidator = 'useRevalidator'),
        (e.UseNavigateStable = 'useNavigate'),
        (e.UseRouteId = 'useRouteId');
})($i || ($i = {}));
function cw(e) {
    let t = b.useContext(qf);
    return t || $e(!1), t;
}
function fw(e) {
    let t = b.useContext(ew);
    return t || $e(!1), t;
}
function dw(e) {
    let t = b.useContext(Hn);
    return t || $e(!1), t;
}
function Wg(e) {
    let t = dw(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || $e(!1), n.route.id;
}
function pw() {
    var e;
    let t = b.useContext(Hg),
        n = fw($i.UseRouteError),
        r = Wg($i.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function hw() {
    let { router: e } = cw(wc.UseNavigateStable),
        t = Wg($i.UseNavigateStable),
        n = b.useRef(!1);
    return (
        Vg(() => {
            n.current = !0;
        }),
        b.useCallback(
            function (o, i) {
                i === void 0 && (i = {}),
                    n.current &&
                        (typeof o == 'number'
                            ? e.navigate(o)
                            : e.navigate(o, $a({ fromRouteId: t }, i)));
            },
            [e, t],
        )
    );
}
function rt(e) {
    $e(!1);
}
function gw(e) {
    let {
        basename: t = '/',
        children: n = null,
        location: r,
        navigationType: o = $n.Pop,
        navigator: i,
        static: s = !1,
    } = e;
    Ui() && $e(!1);
    let a = t.replace(/^\/*/, '/'),
        l = b.useMemo(
            () => ({ basename: a, navigator: i, static: s }),
            [a, i, s],
        );
    typeof r == 'string' && (r = fo(r));
    let {
            pathname: u = '/',
            search: c = '',
            hash: f = '',
            state: d = null,
            key: v = 'default',
        } = r,
        g = b.useMemo(() => {
            let x = Gf(u, a);
            return x == null
                ? null
                : {
                      location: {
                          pathname: x,
                          search: c,
                          hash: f,
                          state: d,
                          key: v,
                      },
                      navigationType: o,
                  };
        }, [a, u, c, f, d, v, o]);
    return g == null
        ? null
        : b.createElement(
              po.Provider,
              { value: l },
              b.createElement(ol.Provider, { children: n, value: g }),
          );
}
function mw(e) {
    let { children: t, location: n } = e;
    return rw(xc(t), n);
}
var ap;
(function (e) {
    (e[(e.pending = 0)] = 'pending'),
        (e[(e.success = 1)] = 'success'),
        (e[(e.error = 2)] = 'error');
})(ap || (ap = {}));
new Promise(() => {});
function xc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        b.Children.forEach(e, (r, o) => {
            if (!b.isValidElement(r)) return;
            let i = [...t, o];
            if (r.type === b.Fragment) {
                n.push.apply(n, xc(r.props.children, i));
                return;
            }
            r.type !== rt && $e(!1),
                !r.props.index || !r.props.children || $e(!1);
            let s = {
                id: r.props.id || i.join('-'),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.ErrorBoundary != null ||
                    r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = xc(r.props.children, i)),
                n.push(s);
        }),
        n
    );
}
var An = {},
    Qf = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ Qf.parse = ww;
Qf.serialize = xw;
var vw = decodeURIComponent,
    yw = encodeURIComponent,
    Ss = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function ww(e, t) {
    if (typeof e != 'string')
        throw new TypeError('argument str must be a string');
    for (
        var n = {}, r = t || {}, o = e.split(';'), i = r.decode || vw, s = 0;
        s < o.length;
        s++
    ) {
        var a = o[s],
            l = a.indexOf('=');
        if (!(l < 0)) {
            var u = a.substring(0, l).trim();
            if (n[u] == null) {
                var c = a.substring(l + 1, a.length).trim();
                c[0] === '"' && (c = c.slice(1, -1)), (n[u] = bw(c, i));
            }
        }
    }
    return n;
}
function xw(e, t, n) {
    var r = n || {},
        o = r.encode || yw;
    if (typeof o != 'function') throw new TypeError('option encode is invalid');
    if (!Ss.test(e)) throw new TypeError('argument name is invalid');
    var i = o(t);
    if (i && !Ss.test(i)) throw new TypeError('argument val is invalid');
    var s = e + '=' + i;
    if (r.maxAge != null) {
        var a = r.maxAge - 0;
        if (isNaN(a) || !isFinite(a))
            throw new TypeError('option maxAge is invalid');
        s += '; Max-Age=' + Math.floor(a);
    }
    if (r.domain) {
        if (!Ss.test(r.domain)) throw new TypeError('option domain is invalid');
        s += '; Domain=' + r.domain;
    }
    if (r.path) {
        if (!Ss.test(r.path)) throw new TypeError('option path is invalid');
        s += '; Path=' + r.path;
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != 'function')
            throw new TypeError('option expires is invalid');
        s += '; Expires=' + r.expires.toUTCString();
    }
    if (
        (r.httpOnly && (s += '; HttpOnly'),
        r.secure && (s += '; Secure'),
        r.sameSite)
    ) {
        var l =
            typeof r.sameSite == 'string'
                ? r.sameSite.toLowerCase()
                : r.sameSite;
        switch (l) {
            case !0:
                s += '; SameSite=Strict';
                break;
            case 'lax':
                s += '; SameSite=Lax';
                break;
            case 'strict':
                s += '; SameSite=Strict';
                break;
            case 'none':
                s += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    return s;
}
function bw(e, t) {
    try {
        return t(e);
    } catch {
        return e;
    }
}
var Bi = { exports: {} },
    Hr = { decodeValues: !0, map: !1, silent: !1 };
function bc(e) {
    return typeof e == 'string' && !!e.trim();
}
function Sc(e, t) {
    var n = e.split(';').filter(bc),
        r = n.shift(),
        o = Sw(r),
        i = o.name,
        s = o.value;
    t = t ? Object.assign({}, Hr, t) : Hr;
    try {
        s = t.decodeValues ? decodeURIComponent(s) : s;
    } catch (l) {
        console.error(
            "set-cookie-parser encountered an error while decoding a cookie with value '" +
                s +
                "'. Set options.decodeValues to false to disable this feature.",
            l,
        );
    }
    var a = { name: i, value: s };
    return (
        n.forEach(function (l) {
            var u = l.split('='),
                c = u.shift().trimLeft().toLowerCase(),
                f = u.join('=');
            c === 'expires'
                ? (a.expires = new Date(f))
                : c === 'max-age'
                ? (a.maxAge = parseInt(f, 10))
                : c === 'secure'
                ? (a.secure = !0)
                : c === 'httponly'
                ? (a.httpOnly = !0)
                : c === 'samesite'
                ? (a.sameSite = f)
                : (a[c] = f);
        }),
        a
    );
}
function Sw(e) {
    var t = '',
        n = '',
        r = e.split('=');
    return (
        r.length > 1 ? ((t = r.shift()), (n = r.join('='))) : (n = e),
        { name: t, value: n }
    );
}
function Gg(e, t) {
    if (((t = t ? Object.assign({}, Hr, t) : Hr), !e)) return t.map ? {} : [];
    if (e.headers)
        if (typeof e.headers.getSetCookie == 'function')
            e = e.headers.getSetCookie();
        else if (e.headers['set-cookie']) e = e.headers['set-cookie'];
        else {
            var n =
                e.headers[
                    Object.keys(e.headers).find(function (o) {
                        return o.toLowerCase() === 'set-cookie';
                    })
                ];
            !n &&
                e.headers.cookie &&
                !t.silent &&
                console.warn(
                    'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.',
                ),
                (e = n);
        }
    if (
        (Array.isArray(e) || (e = [e]),
        (t = t ? Object.assign({}, Hr, t) : Hr),
        t.map)
    ) {
        var r = {};
        return e.filter(bc).reduce(function (o, i) {
            var s = Sc(i, t);
            return (o[s.name] = s), o;
        }, r);
    } else
        return e.filter(bc).map(function (o) {
            return Sc(o, t);
        });
}
function Ew(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != 'string') return [];
    var t = [],
        n = 0,
        r,
        o,
        i,
        s,
        a;
    function l() {
        for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
        return n < e.length;
    }
    function u() {
        return (o = e.charAt(n)), o !== '=' && o !== ';' && o !== ',';
    }
    for (; n < e.length; ) {
        for (r = n, a = !1; l(); )
            if (((o = e.charAt(n)), o === ',')) {
                for (i = n, n += 1, l(), s = n; n < e.length && u(); ) n += 1;
                n < e.length && e.charAt(n) === '='
                    ? ((a = !0), (n = s), t.push(e.substring(r, i)), (r = n))
                    : (n = i + 1);
            } else n += 1;
        (!a || n >= e.length) && t.push(e.substring(r, e.length));
    }
    return t;
}
Bi.exports = Gg;
Bi.exports.parse = Gg;
Bi.exports.parseString = Sc;
Bi.exports.splitCookiesString = Ew;
var $w = Bi.exports,
    At = {},
    en =
        (Ee && Ee.__assign) ||
        function () {
            return (
                (en =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            t = arguments[n];
                            for (var o in t)
                                Object.prototype.hasOwnProperty.call(t, o) &&
                                    (e[o] = t[o]);
                        }
                        return e;
                    }),
                en.apply(this, arguments)
            );
        };
Object.defineProperty(At, '__esModule', { value: !0 });
At.areCookiesEqual =
    At.hasSameProperties =
    At.createCookie =
    At.isBrowser =
        void 0;
function Cw() {
    return typeof window < 'u';
}
At.isBrowser = Cw;
function kw(e, t, n) {
    var r = n.sameSite;
    r === !0 && (r = 'strict'), (r === void 0 || r === !1) && (r = 'lax');
    var o = en(en({}, n), { sameSite: r });
    return delete o.encode, en({ name: e, value: t }, o);
}
At.createCookie = kw;
function qg(e, t) {
    var n = Object.getOwnPropertyNames(e),
        r = Object.getOwnPropertyNames(t);
    if (n.length !== r.length) return !1;
    for (var o = 0; o < n.length; o++) {
        var i = n[o];
        if (e[i] !== t[i]) return !1;
    }
    return !0;
}
At.hasSameProperties = qg;
function Tw(e, t) {
    var n = e.sameSite === t.sameSite;
    return (
        typeof e.sameSite == 'string' &&
            typeof t.sameSite == 'string' &&
            (n = e.sameSite.toLowerCase() === t.sameSite.toLowerCase()),
        qg(
            en(en({}, e), { sameSite: void 0 }),
            en(en({}, t), { sameSite: void 0 }),
        ) && n
    );
}
At.areCookiesEqual = Tw;
var Ci =
    (Ee && Ee.__assign) ||
    function () {
        return (
            (Ci =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) {
                        t = arguments[n];
                        for (var o in t)
                            Object.prototype.hasOwnProperty.call(t, o) &&
                                (e[o] = t[o]);
                    }
                    return e;
                }),
            Ci.apply(this, arguments)
        );
    };
Object.defineProperty(An, '__esModule', { value: !0 });
var Ec = (An.destroyCookie = ti = An.setCookie = Jf = An.parseCookies = void 0),
    ei = Qf,
    _w = $w,
    Ks = At;
function Qg(e, t) {
    var n, r;
    return !(
        (r =
            (n = e == null ? void 0 : e.req) === null || n === void 0
                ? void 0
                : n.headers) === null || r === void 0
    ) && r.cookie
        ? ei.parse(e.req.headers.cookie, t)
        : Ks.isBrowser()
        ? ei.parse(document.cookie, t)
        : {};
}
var Jf = (An.parseCookies = Qg);
function Yf(e, t, n, r) {
    var o, i;
    if (
        (r === void 0 && (r = {}),
        !((o = e == null ? void 0 : e.res) === null || o === void 0) &&
            o.getHeader &&
            e.res.setHeader)
    ) {
        if (
            !((i = e == null ? void 0 : e.res) === null || i === void 0) &&
            i.finished
        )
            return (
                console.warn(
                    'Not setting "' + t + '" cookie. Response has finished.',
                ),
                console.warn('You should set cookie before res.send()'),
                {}
            );
        var s = e.res.getHeader('Set-Cookie') || [];
        typeof s == 'string' && (s = [s]), typeof s == 'number' && (s = []);
        var a = _w.parse(s, { decodeValues: !1 }),
            l = Ks.createCookie(t, n, r),
            u = [];
        a.forEach(function (c) {
            if (!Ks.areCookiesEqual(c, l)) {
                var f = ei.serialize(
                    c.name,
                    c.value,
                    Ci(
                        {
                            encode: function (d) {
                                return d;
                            },
                        },
                        c,
                    ),
                );
                u.push(f);
            }
        }),
            u.push(ei.serialize(t, n, r)),
            e.res.setHeader('Set-Cookie', u);
    }
    if (Ks.isBrowser()) {
        if (r && r.httpOnly)
            throw new Error('Can not set a httpOnly cookie in the browser.');
        document.cookie = ei.serialize(t, n, r);
    }
    return {};
}
var ti = (An.setCookie = Yf);
function Jg(e, t, n) {
    return Yf(e, t, '', Ci(Ci({}, n || {}), { maxAge: -1 }));
}
Ec = An.destroyCookie = Jg;
An.default = { set: Yf, get: Qg, destroy: Jg };
function Yg(e) {
    var t,
        n,
        r = '';
    if (typeof e == 'string' || typeof e == 'number') r += e;
    else if (typeof e == 'object')
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Yg(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
function tn() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
        (e = arguments[n++]) && (t = Yg(e)) && (r && (r += ' '), (r += t));
    return r;
}
const ni = (e) => typeof e == 'number' && !isNaN(e),
    cr = (e) => typeof e == 'string',
    Xe = (e) => typeof e == 'function',
    Ws = (e) => (cr(e) || Xe(e) ? e : null),
    su = (e) => b.isValidElement(e) || cr(e) || Xe(e) || ni(e);
function Pw(e, t, n) {
    n === void 0 && (n = 300);
    const { scrollHeight: r, style: o } = e;
    requestAnimationFrame(() => {
        (o.minHeight = 'initial'),
            (o.height = r + 'px'),
            (o.transition = `all ${n}ms`),
            requestAnimationFrame(() => {
                (o.height = '0'),
                    (o.padding = '0'),
                    (o.margin = '0'),
                    setTimeout(t, n);
            });
    });
}
function il(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: o = !0,
        collapseDuration: i = 300,
    } = e;
    return function (s) {
        let {
            children: a,
            position: l,
            preventExitTransition: u,
            done: c,
            nodeRef: f,
            isIn: d,
        } = s;
        const v = r ? `${t}--${l}` : t,
            g = r ? `${n}--${l}` : n,
            x = b.useRef(0);
        return (
            b.useLayoutEffect(() => {
                const $ = f.current,
                    m = v.split(' '),
                    h = (y) => {
                        y.target === f.current &&
                            ($.dispatchEvent(new Event('d')),
                            $.removeEventListener('animationend', h),
                            $.removeEventListener('animationcancel', h),
                            x.current === 0 &&
                                y.type !== 'animationcancel' &&
                                $.classList.remove(...m));
                    };
                $.classList.add(...m),
                    $.addEventListener('animationend', h),
                    $.addEventListener('animationcancel', h);
            }, []),
            b.useEffect(() => {
                const $ = f.current,
                    m = () => {
                        $.removeEventListener('animationend', m),
                            o ? Pw($, c, i) : c();
                    };
                d ||
                    (u
                        ? m()
                        : ((x.current = 1),
                          ($.className += ` ${g}`),
                          $.addEventListener('animationend', m)));
            }, [d]),
            D.createElement(D.Fragment, null, a)
        );
    };
}
function lp(e, t) {
    return e != null
        ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
          }
        : {};
}
const gt = {
        list: new Map(),
        emitQueue: new Map(),
        on(e, t) {
            return (
                this.list.has(e) || this.list.set(e, []),
                this.list.get(e).push(t),
                this
            );
        },
        off(e, t) {
            if (t) {
                const n = this.list.get(e).filter((r) => r !== t);
                return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
        },
        cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return (
                t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
        },
        emit(e) {
            this.list.has(e) &&
                this.list.get(e).forEach((t) => {
                    const n = setTimeout(() => {
                        t(...[].slice.call(arguments, 1));
                    }, 0);
                    this.emitQueue.has(e) || this.emitQueue.set(e, []),
                        this.emitQueue.get(e).push(n);
                });
        },
    },
    Es = (e) => {
        let { theme: t, type: n, ...r } = e;
        return D.createElement('svg', {
            viewBox: '0 0 24 24',
            width: '100%',
            height: '100%',
            fill:
                t === 'colored'
                    ? 'currentColor'
                    : `var(--toastify-icon-color-${n})`,
            ...r,
        });
    },
    au = {
        info: function (e) {
            return D.createElement(
                Es,
                { ...e },
                D.createElement('path', {
                    d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
                }),
            );
        },
        warning: function (e) {
            return D.createElement(
                Es,
                { ...e },
                D.createElement('path', {
                    d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
                }),
            );
        },
        success: function (e) {
            return D.createElement(
                Es,
                { ...e },
                D.createElement('path', {
                    d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
                }),
            );
        },
        error: function (e) {
            return D.createElement(
                Es,
                { ...e },
                D.createElement('path', {
                    d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
                }),
            );
        },
        spinner: function () {
            return D.createElement('div', { className: 'Toastify__spinner' });
        },
    };
function Ow(e) {
    const [, t] = b.useReducer((v) => v + 1, 0),
        [n, r] = b.useState([]),
        o = b.useRef(null),
        i = b.useRef(new Map()).current,
        s = (v) => n.indexOf(v) !== -1,
        a = b.useRef({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: s,
            getToast: (v) => i.get(v),
        }).current;
    function l(v) {
        let { containerId: g } = v;
        const { limit: x } = a.props;
        !x ||
            (g && a.containerId !== g) ||
            ((a.count -= a.queue.length), (a.queue = []));
    }
    function u(v) {
        r((g) => (v == null ? [] : g.filter((x) => x !== v)));
    }
    function c() {
        const { toastContent: v, toastProps: g, staleId: x } = a.queue.shift();
        d(v, g, x);
    }
    function f(v, g) {
        let { delay: x, staleId: $, ...m } = g;
        if (
            !su(v) ||
            (function (K) {
                return (
                    !o.current ||
                    (a.props.enableMultiContainer &&
                        K.containerId !== a.props.containerId) ||
                    (i.has(K.toastId) && K.updateId == null)
                );
            })(m)
        )
            return;
        const { toastId: h, updateId: y, data: E } = m,
            { props: k } = a,
            O = () => u(h),
            N = y == null;
        N && a.count++;
        const S = {
            ...k,
            style: k.toastStyle,
            key: a.toastKey++,
            ...Object.fromEntries(
                Object.entries(m).filter((K) => {
                    let [P, R] = K;
                    return R != null;
                }),
            ),
            toastId: h,
            updateId: y,
            data: E,
            closeToast: O,
            isIn: !1,
            className: Ws(m.className || k.toastClassName),
            bodyClassName: Ws(m.bodyClassName || k.bodyClassName),
            progressClassName: Ws(m.progressClassName || k.progressClassName),
            autoClose:
                !m.isLoading &&
                ((I = m.autoClose),
                (z = k.autoClose),
                I === !1 || (ni(I) && I > 0) ? I : z),
            deleteToast() {
                const K = lp(i.get(h), 'removed');
                i.delete(h), gt.emit(4, K);
                const P = a.queue.length;
                if (
                    ((a.count =
                        h == null ? a.count - a.displayedToast : a.count - 1),
                    a.count < 0 && (a.count = 0),
                    P > 0)
                ) {
                    const R = h == null ? a.props.limit : 1;
                    if (P === 1 || R === 1) a.displayedToast++, c();
                    else {
                        const Z = R > P ? P : R;
                        a.displayedToast = Z;
                        for (let ge = 0; ge < Z; ge++) c();
                    }
                } else t();
            },
        };
        var I, z;
        (S.iconOut = (function (K) {
            let { theme: P, type: R, isLoading: Z, icon: ge } = K,
                ee = null;
            const A = { theme: P, type: R };
            return (
                ge === !1 ||
                    (Xe(ge)
                        ? (ee = ge(A))
                        : b.isValidElement(ge)
                        ? (ee = b.cloneElement(ge, A))
                        : cr(ge) || ni(ge)
                        ? (ee = ge)
                        : Z
                        ? (ee = au.spinner())
                        : ((V) => V in au)(R) && (ee = au[R](A))),
                ee
            );
        })(S)),
            Xe(m.onOpen) && (S.onOpen = m.onOpen),
            Xe(m.onClose) && (S.onClose = m.onClose),
            (S.closeButton = k.closeButton),
            m.closeButton === !1 || su(m.closeButton)
                ? (S.closeButton = m.closeButton)
                : m.closeButton === !0 &&
                  (S.closeButton = !su(k.closeButton) || k.closeButton);
        let j = v;
        b.isValidElement(v) && !cr(v.type)
            ? (j = b.cloneElement(v, { closeToast: O, toastProps: S, data: E }))
            : Xe(v) && (j = v({ closeToast: O, toastProps: S, data: E })),
            k.limit && k.limit > 0 && a.count > k.limit && N
                ? a.queue.push({ toastContent: j, toastProps: S, staleId: $ })
                : ni(x)
                ? setTimeout(() => {
                      d(j, S, $);
                  }, x)
                : d(j, S, $);
    }
    function d(v, g, x) {
        const { toastId: $ } = g;
        x && i.delete(x);
        const m = { content: v, props: g };
        i.set($, m),
            r((h) => [...h, $].filter((y) => y !== x)),
            gt.emit(4, lp(m, m.props.updateId == null ? 'added' : 'updated'));
    }
    return (
        b.useEffect(
            () => (
                (a.containerId = e.containerId),
                gt
                    .cancelEmit(3)
                    .on(0, f)
                    .on(1, (v) => o.current && u(v))
                    .on(5, l)
                    .emit(2, a),
                () => {
                    i.clear(), gt.emit(3, a);
                }
            ),
            [],
        ),
        b.useEffect(() => {
            (a.props = e), (a.isToastActive = s), (a.displayedToast = n.length);
        }),
        {
            getToastToRender: function (v) {
                const g = new Map(),
                    x = Array.from(i.values());
                return (
                    e.newestOnTop && x.reverse(),
                    x.forEach(($) => {
                        const { position: m } = $.props;
                        g.has(m) || g.set(m, []), g.get(m).push($);
                    }),
                    Array.from(g, ($) => v($[0], $[1]))
                );
            },
            containerRef: o,
            isToastActive: s,
        }
    );
}
function up(e) {
    return e.targetTouches && e.targetTouches.length >= 1
        ? e.targetTouches[0].clientX
        : e.clientX;
}
function cp(e) {
    return e.targetTouches && e.targetTouches.length >= 1
        ? e.targetTouches[0].clientY
        : e.clientY;
}
function Lw(e) {
    const [t, n] = b.useState(!1),
        [r, o] = b.useState(!1),
        i = b.useRef(null),
        s = b.useRef({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
        }).current,
        a = b.useRef(e),
        {
            autoClose: l,
            pauseOnHover: u,
            closeToast: c,
            onClick: f,
            closeOnClick: d,
        } = e;
    function v(E) {
        if (e.draggable) {
            E.nativeEvent.type === 'touchstart' &&
                E.nativeEvent.preventDefault(),
                (s.didMove = !1),
                document.addEventListener('mousemove', m),
                document.addEventListener('mouseup', h),
                document.addEventListener('touchmove', m),
                document.addEventListener('touchend', h);
            const k = i.current;
            (s.canCloseOnClick = !0),
                (s.canDrag = !0),
                (s.boundingRect = k.getBoundingClientRect()),
                (k.style.transition = ''),
                (s.x = up(E.nativeEvent)),
                (s.y = cp(E.nativeEvent)),
                e.draggableDirection === 'x'
                    ? ((s.start = s.x),
                      (s.removalDistance =
                          k.offsetWidth * (e.draggablePercent / 100)))
                    : ((s.start = s.y),
                      (s.removalDistance =
                          k.offsetHeight *
                          (e.draggablePercent === 80
                              ? 1.5 * e.draggablePercent
                              : e.draggablePercent / 100)));
        }
    }
    function g(E) {
        if (s.boundingRect) {
            const { top: k, bottom: O, left: N, right: S } = s.boundingRect;
            E.nativeEvent.type !== 'touchend' &&
            e.pauseOnHover &&
            s.x >= N &&
            s.x <= S &&
            s.y >= k &&
            s.y <= O
                ? $()
                : x();
        }
    }
    function x() {
        n(!0);
    }
    function $() {
        n(!1);
    }
    function m(E) {
        const k = i.current;
        s.canDrag &&
            k &&
            ((s.didMove = !0),
            t && $(),
            (s.x = up(E)),
            (s.y = cp(E)),
            (s.delta =
                e.draggableDirection === 'x' ? s.x - s.start : s.y - s.start),
            s.start !== s.x && (s.canCloseOnClick = !1),
            (k.style.transform = `translate${e.draggableDirection}(${s.delta}px)`),
            (k.style.opacity =
                '' + (1 - Math.abs(s.delta / s.removalDistance))));
    }
    function h() {
        document.removeEventListener('mousemove', m),
            document.removeEventListener('mouseup', h),
            document.removeEventListener('touchmove', m),
            document.removeEventListener('touchend', h);
        const E = i.current;
        if (s.canDrag && s.didMove && E) {
            if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
                return o(!0), void e.closeToast();
            (E.style.transition = 'transform 0.2s, opacity 0.2s'),
                (E.style.transform = `translate${e.draggableDirection}(0)`),
                (E.style.opacity = '1');
        }
    }
    b.useEffect(() => {
        a.current = e;
    }),
        b.useEffect(
            () => (
                i.current && i.current.addEventListener('d', x, { once: !0 }),
                Xe(e.onOpen) &&
                    e.onOpen(b.isValidElement(e.children) && e.children.props),
                () => {
                    const E = a.current;
                    Xe(E.onClose) &&
                        E.onClose(
                            b.isValidElement(E.children) && E.children.props,
                        );
                }
            ),
            [],
        ),
        b.useEffect(
            () => (
                e.pauseOnFocusLoss &&
                    (document.hasFocus() || $(),
                    window.addEventListener('focus', x),
                    window.addEventListener('blur', $)),
                () => {
                    e.pauseOnFocusLoss &&
                        (window.removeEventListener('focus', x),
                        window.removeEventListener('blur', $));
                }
            ),
            [e.pauseOnFocusLoss],
        );
    const y = { onMouseDown: v, onTouchStart: v, onMouseUp: g, onTouchEnd: g };
    return (
        l && u && ((y.onMouseEnter = $), (y.onMouseLeave = x)),
        d &&
            (y.onClick = (E) => {
                f && f(E), s.canCloseOnClick && c();
            }),
        {
            playToast: x,
            pauseToast: $,
            isRunning: t,
            preventExitTransition: r,
            toastRef: i,
            eventHandlers: y,
        }
    );
}
function Zg(e) {
    let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
    return D.createElement(
        'button',
        {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: 'button',
            onClick: (o) => {
                o.stopPropagation(), t(o);
            },
            'aria-label': r,
        },
        D.createElement(
            'svg',
            { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
            D.createElement('path', {
                fillRule: 'evenodd',
                d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
            }),
        ),
    );
}
function Nw(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: o = 'default',
        hide: i,
        className: s,
        style: a,
        controlledProgress: l,
        progress: u,
        rtl: c,
        isIn: f,
        theme: d,
    } = e;
    const v = i || (l && u === 0),
        g = {
            ...a,
            animationDuration: `${t}ms`,
            animationPlayState: n ? 'running' : 'paused',
            opacity: v ? 0 : 1,
        };
    l && (g.transform = `scaleX(${u})`);
    const x = tn(
            'Toastify__progress-bar',
            l
                ? 'Toastify__progress-bar--controlled'
                : 'Toastify__progress-bar--animated',
            `Toastify__progress-bar-theme--${d}`,
            `Toastify__progress-bar--${o}`,
            { 'Toastify__progress-bar--rtl': c },
        ),
        $ = Xe(s) ? s({ rtl: c, type: o, defaultClassName: x }) : tn(x, s);
    return D.createElement('div', {
        role: 'progressbar',
        'aria-hidden': v ? 'true' : 'false',
        'aria-label': 'notification timer',
        className: $,
        style: g,
        [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
            l && u < 1
                ? null
                : () => {
                      f && r();
                  },
    });
}
const Rw = (e) => {
        const {
                isRunning: t,
                preventExitTransition: n,
                toastRef: r,
                eventHandlers: o,
            } = Lw(e),
            {
                closeButton: i,
                children: s,
                autoClose: a,
                onClick: l,
                type: u,
                hideProgressBar: c,
                closeToast: f,
                transition: d,
                position: v,
                className: g,
                style: x,
                bodyClassName: $,
                bodyStyle: m,
                progressClassName: h,
                progressStyle: y,
                updateId: E,
                role: k,
                progress: O,
                rtl: N,
                toastId: S,
                deleteToast: I,
                isIn: z,
                isLoading: j,
                iconOut: K,
                closeOnClick: P,
                theme: R,
            } = e,
            Z = tn(
                'Toastify__toast',
                `Toastify__toast-theme--${R}`,
                `Toastify__toast--${u}`,
                { 'Toastify__toast--rtl': N },
                { 'Toastify__toast--close-on-click': P },
            ),
            ge = Xe(g)
                ? g({ rtl: N, position: v, type: u, defaultClassName: Z })
                : tn(Z, g),
            ee = !!O || !a,
            A = { closeToast: f, type: u, theme: R };
        let V = null;
        return (
            i === !1 ||
                (V = Xe(i)
                    ? i(A)
                    : b.isValidElement(i)
                    ? b.cloneElement(i, A)
                    : Zg(A)),
            D.createElement(
                d,
                {
                    isIn: z,
                    done: I,
                    position: v,
                    preventExitTransition: n,
                    nodeRef: r,
                },
                D.createElement(
                    'div',
                    {
                        id: S,
                        onClick: l,
                        className: ge,
                        ...o,
                        style: x,
                        ref: r,
                    },
                    D.createElement(
                        'div',
                        {
                            ...(z && { role: k }),
                            className: Xe($)
                                ? $({ type: u })
                                : tn('Toastify__toast-body', $),
                            style: m,
                        },
                        K != null &&
                            D.createElement(
                                'div',
                                {
                                    className: tn('Toastify__toast-icon', {
                                        'Toastify--animate-icon Toastify__zoom-enter':
                                            !j,
                                    }),
                                },
                                K,
                            ),
                        D.createElement('div', null, s),
                    ),
                    V,
                    D.createElement(Nw, {
                        ...(E && !ee ? { key: `pb-${E}` } : {}),
                        rtl: N,
                        theme: R,
                        delay: a,
                        isRunning: t,
                        isIn: z,
                        closeToast: f,
                        hide: c,
                        type: u,
                        style: y,
                        className: h,
                        controlledProgress: ee,
                        progress: O || 0,
                    }),
                ),
            )
        );
    },
    sl = function (e, t) {
        return (
            t === void 0 && (t = !1),
            {
                enter: `Toastify--animate Toastify__${e}-enter`,
                exit: `Toastify--animate Toastify__${e}-exit`,
                appendPosition: t,
            }
        );
    },
    Fw = il(sl('bounce', !0));
il(sl('slide', !0));
il(sl('zoom'));
il(sl('flip'));
const $c = b.forwardRef((e, t) => {
    const { getToastToRender: n, containerRef: r, isToastActive: o } = Ow(e),
        { className: i, style: s, rtl: a, containerId: l } = e;
    function u(c) {
        const f = tn(
            'Toastify__toast-container',
            `Toastify__toast-container--${c}`,
            { 'Toastify__toast-container--rtl': a },
        );
        return Xe(i)
            ? i({ position: c, rtl: a, defaultClassName: f })
            : tn(f, Ws(i));
    }
    return (
        b.useEffect(() => {
            t && (t.current = r.current);
        }, []),
        D.createElement(
            'div',
            { ref: r, className: 'Toastify', id: l },
            n((c, f) => {
                const d = f.length ? { ...s } : { ...s, pointerEvents: 'none' };
                return D.createElement(
                    'div',
                    { className: u(c), style: d, key: `container-${c}` },
                    f.map((v, g) => {
                        let { content: x, props: $ } = v;
                        return D.createElement(
                            Rw,
                            {
                                ...$,
                                isIn: o($.toastId),
                                style: {
                                    ...$.style,
                                    '--nth': g + 1,
                                    '--len': f.length,
                                },
                                key: `toast-${$.key}`,
                            },
                            x,
                        );
                    }),
                );
            }),
        )
    );
});
($c.displayName = 'ToastContainer'),
    ($c.defaultProps = {
        position: 'top-right',
        transition: Fw,
        autoClose: 5e3,
        closeButton: Zg,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        draggable: !0,
        draggablePercent: 80,
        draggableDirection: 'x',
        role: 'alert',
        theme: 'light',
    });
let lu,
    Yn = new Map(),
    Uo = [],
    Aw = 1;
function Xg() {
    return '' + Aw++;
}
function jw(e) {
    return e && (cr(e.toastId) || ni(e.toastId)) ? e.toastId : Xg();
}
function ri(e, t) {
    return (
        Yn.size > 0 ? gt.emit(0, e, t) : Uo.push({ content: e, options: t }),
        t.toastId
    );
}
function Ca(e, t) {
    return { ...t, type: (t && t.type) || e, toastId: jw(t) };
}
function $s(e) {
    return (t, n) => ri(t, Ca(e, n));
}
function Y(e, t) {
    return ri(e, Ca('default', t));
}
(Y.loading = (e, t) =>
    ri(
        e,
        Ca('default', {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
        }),
    )),
    (Y.promise = function (e, t, n) {
        let r,
            { pending: o, error: i, success: s } = t;
        o &&
            (r = cr(o) ? Y.loading(o, n) : Y.loading(o.render, { ...n, ...o }));
        const a = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null,
            },
            l = (c, f, d) => {
                if (f == null) return void Y.dismiss(r);
                const v = { type: c, ...a, ...n, data: d },
                    g = cr(f) ? { render: f } : f;
                return (
                    r
                        ? Y.update(r, { ...v, ...g })
                        : Y(g.render, { ...v, ...g }),
                    d
                );
            },
            u = Xe(e) ? e() : e;
        return (
            u.then((c) => l('success', s, c)).catch((c) => l('error', i, c)), u
        );
    }),
    (Y.success = $s('success')),
    (Y.info = $s('info')),
    (Y.error = $s('error')),
    (Y.warning = $s('warning')),
    (Y.warn = Y.warning),
    (Y.dark = (e, t) => ri(e, Ca('default', { theme: 'dark', ...t }))),
    (Y.dismiss = (e) => {
        Yn.size > 0
            ? gt.emit(1, e)
            : (Uo = Uo.filter((t) => e != null && t.options.toastId !== e));
    }),
    (Y.clearWaitingQueue = function (e) {
        return e === void 0 && (e = {}), gt.emit(5, e);
    }),
    (Y.isActive = (e) => {
        let t = !1;
        return (
            Yn.forEach((n) => {
                n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
        );
    }),
    (Y.update = function (e, t) {
        t === void 0 && (t = {}),
            setTimeout(() => {
                const n = (function (r, o) {
                    let { containerId: i } = o;
                    const s = Yn.get(i || lu);
                    return s && s.getToast(r);
                })(e, t);
                if (n) {
                    const { props: r, content: o } = n,
                        i = {
                            delay: 100,
                            ...r,
                            ...t,
                            toastId: t.toastId || e,
                            updateId: Xg(),
                        };
                    i.toastId !== e && (i.staleId = e);
                    const s = i.render || o;
                    delete i.render, ri(s, i);
                }
            }, 0);
    }),
    (Y.done = (e) => {
        Y.update(e, { progress: 1 });
    }),
    (Y.onChange = (e) => (
        gt.on(4, e),
        () => {
            gt.off(4, e);
        }
    )),
    (Y.POSITION = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        TOP_CENTER: 'top-center',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        BOTTOM_CENTER: 'bottom-center',
    }),
    (Y.TYPE = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        DEFAULT: 'default',
    }),
    gt
        .on(2, (e) => {
            (lu = e.containerId || e),
                Yn.set(lu, e),
                Uo.forEach((t) => {
                    gt.emit(0, t.content, t.options);
                }),
                (Uo = []);
        })
        .on(3, (e) => {
            Yn.delete(e.containerId || e),
                Yn.size === 0 && gt.off(0).off(1).off(5);
        });
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cc() {
    return (
        (Cc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Cc.apply(this, arguments)
    );
}
function Iw(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        i;
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
function Mw(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function zw(e, t) {
    return e.button === 0 && (!t || t === '_self') && !Mw(e);
}
function kc(e) {
    return (
        e === void 0 && (e = ''),
        new URLSearchParams(
            typeof e == 'string' ||
            Array.isArray(e) ||
            e instanceof URLSearchParams
                ? e
                : Object.keys(e).reduce((t, n) => {
                      let r = e[n];
                      return t.concat(
                          Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]],
                      );
                  }, []),
        )
    );
}
function Dw(e, t) {
    let n = kc(e);
    if (t)
        for (let r of t.keys())
            n.has(r) ||
                t.getAll(r).forEach((o) => {
                    n.append(r, o);
                });
    return n;
}
const Uw = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
    ],
    Bw = 'startTransition',
    fp = m5[Bw];
function Hw(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        i = b.useRef();
    i.current == null && (i.current = P4({ window: o, v5Compat: !0 }));
    let s = i.current,
        [a, l] = b.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        c = b.useCallback(
            (f) => {
                u && fp ? fp(() => l(f)) : l(f);
            },
            [l, u],
        );
    return (
        b.useLayoutEffect(() => s.listen(c), [s, c]),
        b.createElement(gw, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: s,
        })
    );
}
const Vw =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u',
    Kw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ki = b.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: o,
                reloadDocument: i,
                replace: s,
                state: a,
                target: l,
                to: u,
                preventScrollReset: c,
            } = t,
            f = Iw(t, Uw),
            { basename: d } = b.useContext(po),
            v,
            g = !1;
        if (typeof u == 'string' && Kw.test(u) && ((v = u), Vw))
            try {
                let h = new URL(window.location.href),
                    y = u.startsWith('//')
                        ? new URL(h.protocol + u)
                        : new URL(u),
                    E = Gf(y.pathname, d);
                y.origin === h.origin && E != null
                    ? (u = E + y.search + y.hash)
                    : (g = !0);
            } catch {}
        let x = tw(u, { relative: o }),
            $ = Ww(u, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: o,
            });
        function m(h) {
            r && r(h), h.defaultPrevented || $(h);
        }
        return b.createElement(
            'a',
            Cc({}, f, {
                href: v || x,
                onClick: g || i ? r : m,
                ref: n,
                target: l,
            }),
        );
    });
var dp;
(function (e) {
    (e.UseScrollRestoration = 'useScrollRestoration'),
        (e.UseSubmit = 'useSubmit'),
        (e.UseSubmitFetcher = 'useSubmitFetcher'),
        (e.UseFetcher = 'useFetcher');
})(dp || (dp = {}));
var pp;
(function (e) {
    (e.UseFetchers = 'useFetchers'),
        (e.UseScrollRestoration = 'useScrollRestoration');
})(pp || (pp = {}));
function Ww(e, t) {
    let {
            target: n,
            replace: r,
            state: o,
            preventScrollReset: i,
            relative: s,
        } = t === void 0 ? {} : t,
        a = go(),
        l = ho(),
        u = Kg(e, { relative: s });
    return b.useCallback(
        (c) => {
            if (zw(c, n)) {
                c.preventDefault();
                let f = r !== void 0 ? r : Ea(l) === Ea(u);
                a(e, {
                    replace: f,
                    state: o,
                    preventScrollReset: i,
                    relative: s,
                });
            }
        },
        [l, a, u, r, o, n, e, i, s],
    );
}
function DC(e) {
    let t = b.useRef(kc(e)),
        n = b.useRef(!1),
        r = ho(),
        o = b.useMemo(
            () => Dw(r.search, n.current ? null : t.current),
            [r.search],
        ),
        i = go(),
        s = b.useCallback(
            (a, l) => {
                const u = kc(typeof a == 'function' ? a(o) : a);
                (n.current = !0), i('?' + u, l);
            },
            [i, o],
        );
    return [o, s];
}
const Gw = {}.VITE_BACKEND_URL,
    Gs = 'scribly.auth',
    em = 'scribly.refresh',
    hp = 'scribly.user';
function tm(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: qw } = Object.prototype,
    { getPrototypeOf: Zf } = Object,
    al = ((e) => (t) => {
        const n = qw.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Dt = (e) => ((e = e.toLowerCase()), (t) => al(t) === e),
    ll = (e) => (t) => typeof t === e,
    { isArray: mo } = Array,
    Ti = ll('undefined');
function Qw(e) {
    return (
        e !== null &&
        !Ti(e) &&
        e.constructor !== null &&
        !Ti(e.constructor) &&
        xt(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const nm = Dt('ArrayBuffer');
function Jw(e) {
    let t;
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && nm(e.buffer)),
        t
    );
}
const Yw = ll('string'),
    xt = ll('function'),
    rm = ll('number'),
    ul = (e) => e !== null && typeof e == 'object',
    Zw = (e) => e === !0 || e === !1,
    qs = (e) => {
        if (al(e) !== 'object') return !1;
        const t = Zf(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    Xw = Dt('Date'),
    e6 = Dt('File'),
    t6 = Dt('Blob'),
    n6 = Dt('FileList'),
    r6 = (e) => ul(e) && xt(e.pipe),
    o6 = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (xt(e.append) &&
                    ((t = al(e)) === 'formdata' ||
                        (t === 'object' &&
                            xt(e.toString) &&
                            e.toString() === '[object FormData]'))))
        );
    },
    i6 = Dt('URLSearchParams'),
    s6 = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Hi(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let r, o;
    if ((typeof e != 'object' && (e = [e]), mo(e)))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = i.length;
        let a;
        for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
    }
}
function om(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        o;
    for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
    return null;
}
const im = (() =>
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
            ? self
            : typeof window < 'u'
            ? window
            : global)(),
    sm = (e) => !Ti(e) && e !== im;
function Tc() {
    const { caseless: e } = (sm(this) && this) || {},
        t = {},
        n = (r, o) => {
            const i = (e && om(t, o)) || o;
            qs(t[i]) && qs(r)
                ? (t[i] = Tc(t[i], r))
                : qs(r)
                ? (t[i] = Tc({}, r))
                : mo(r)
                ? (t[i] = r.slice())
                : (t[i] = r);
        };
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && Hi(arguments[r], n);
    return t;
}
const a6 = (e, t, n, { allOwnKeys: r } = {}) => (
        Hi(
            t,
            (o, i) => {
                n && xt(o) ? (e[i] = tm(o, n)) : (e[i] = o);
            },
            { allOwnKeys: r },
        ),
        e
    ),
    l6 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    u6 = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    c6 = (e, t, n, r) => {
        let o, i, s;
        const a = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
                (s = o[i]),
                    (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
            e = n !== !1 && Zf(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    f6 = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    d6 = (e) => {
        if (!e) return null;
        if (mo(e)) return e;
        let t = e.length;
        if (!rm(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    p6 = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && Zf(Uint8Array)),
    h6 = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (; (o = r.next()) && !o.done; ) {
            const i = o.value;
            t.call(e, i[0], i[1]);
        }
    },
    g6 = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    m6 = Dt('HTMLFormElement'),
    v6 = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
            return r.toUpperCase() + o;
        }),
    gp = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    y6 = Dt('RegExp'),
    am = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Hi(n, (o, i) => {
            t(o, i, e) !== !1 && (r[i] = o);
        }),
            Object.defineProperties(e, r);
    },
    w6 = (e) => {
        am(e, (t, n) => {
            if (xt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (xt(r)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'",
                        );
                    });
            }
        });
    },
    x6 = (e, t) => {
        const n = {},
            r = (o) => {
                o.forEach((i) => {
                    n[i] = !0;
                });
            };
        return mo(e) ? r(e) : r(String(e).split(t)), n;
    },
    b6 = () => {},
    S6 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    uu = 'abcdefghijklmnopqrstuvwxyz',
    mp = '0123456789',
    lm = { DIGIT: mp, ALPHA: uu, ALPHA_DIGIT: uu + uu.toUpperCase() + mp },
    E6 = (e = 16, t = lm.ALPHA_DIGIT) => {
        let n = '';
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function $6(e) {
    return !!(
        e &&
        xt(e.append) &&
        e[Symbol.toStringTag] === 'FormData' &&
        e[Symbol.iterator]
    );
}
const C6 = (e) => {
        const t = new Array(10),
            n = (r, o) => {
                if (ul(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!('toJSON' in r)) {
                        t[o] = r;
                        const i = mo(r) ? [] : {};
                        return (
                            Hi(r, (s, a) => {
                                const l = n(s, o + 1);
                                !Ti(l) && (i[a] = l);
                            }),
                            (t[o] = void 0),
                            i
                        );
                    }
                }
                return r;
            };
        return n(e, 0);
    },
    k6 = Dt('AsyncFunction'),
    T6 = (e) => e && (ul(e) || xt(e)) && xt(e.then) && xt(e.catch),
    _ = {
        isArray: mo,
        isArrayBuffer: nm,
        isBuffer: Qw,
        isFormData: o6,
        isArrayBufferView: Jw,
        isString: Yw,
        isNumber: rm,
        isBoolean: Zw,
        isObject: ul,
        isPlainObject: qs,
        isUndefined: Ti,
        isDate: Xw,
        isFile: e6,
        isBlob: t6,
        isRegExp: y6,
        isFunction: xt,
        isStream: r6,
        isURLSearchParams: i6,
        isTypedArray: p6,
        isFileList: n6,
        forEach: Hi,
        merge: Tc,
        extend: a6,
        trim: s6,
        stripBOM: l6,
        inherits: u6,
        toFlatObject: c6,
        kindOf: al,
        kindOfTest: Dt,
        endsWith: f6,
        toArray: d6,
        forEachEntry: h6,
        matchAll: g6,
        isHTMLForm: m6,
        hasOwnProperty: gp,
        hasOwnProp: gp,
        reduceDescriptors: am,
        freezeMethods: w6,
        toObjectSet: x6,
        toCamelCase: v6,
        noop: b6,
        toFiniteNumber: S6,
        findKey: om,
        global: im,
        isContextDefined: sm,
        ALPHABET: lm,
        generateString: E6,
        isSpecCompliantForm: $6,
        toJSONObject: C6,
        isAsyncFn: k6,
        isThenable: T6,
    };
function Q(e, t, n, r, o) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && (this.response = o);
}
_.inherits(Q, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: _.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const um = Q.prototype,
    cm = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    cm[e] = { value: e };
});
Object.defineProperties(Q, cm);
Object.defineProperty(um, 'isAxiosError', { value: !0 });
Q.from = (e, t, n, r, o, i) => {
    const s = Object.create(um);
    return (
        _.toFlatObject(
            e,
            s,
            function (l) {
                return l !== Error.prototype;
            },
            (a) => a !== 'isAxiosError',
        ),
        Q.call(s, e.message, t, n, r, o),
        (s.cause = e),
        (s.name = e.name),
        i && Object.assign(s, i),
        s
    );
};
const _6 = null;
function _c(e) {
    return _.isPlainObject(e) || _.isArray(e);
}
function fm(e) {
    return _.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function vp(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (o, i) {
                  return (o = fm(o)), !n && i ? '[' + o + ']' : o;
              })
              .join(n ? '.' : '')
        : t;
}
function P6(e) {
    return _.isArray(e) && !e.some(_c);
}
const O6 = _.toFlatObject(_, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function cl(e, t, n) {
    if (!_.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new FormData()),
        (n = _.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (x, $) {
                return !_.isUndefined($[x]);
            },
        ));
    const r = n.metaTokens,
        o = n.visitor || c,
        i = n.dots,
        s = n.indexes,
        l = (n.Blob || (typeof Blob < 'u' && Blob)) && _.isSpecCompliantForm(t);
    if (!_.isFunction(o)) throw new TypeError('visitor must be a function');
    function u(g) {
        if (g === null) return '';
        if (_.isDate(g)) return g.toISOString();
        if (!l && _.isBlob(g))
            throw new Q('Blob is not supported. Use a Buffer instead.');
        return _.isArrayBuffer(g) || _.isTypedArray(g)
            ? l && typeof Blob == 'function'
                ? new Blob([g])
                : Buffer.from(g)
            : g;
    }
    function c(g, x, $) {
        let m = g;
        if (g && !$ && typeof g == 'object') {
            if (_.endsWith(x, '{}'))
                (x = r ? x : x.slice(0, -2)), (g = JSON.stringify(g));
            else if (
                (_.isArray(g) && P6(g)) ||
                ((_.isFileList(g) || _.endsWith(x, '[]')) && (m = _.toArray(g)))
            )
                return (
                    (x = fm(x)),
                    m.forEach(function (y, E) {
                        !(_.isUndefined(y) || y === null) &&
                            t.append(
                                s === !0
                                    ? vp([x], E, i)
                                    : s === null
                                    ? x
                                    : x + '[]',
                                u(y),
                            );
                    }),
                    !1
                );
        }
        return _c(g) ? !0 : (t.append(vp($, x, i), u(g)), !1);
    }
    const f = [],
        d = Object.assign(O6, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: _c,
        });
    function v(g, x) {
        if (!_.isUndefined(g)) {
            if (f.indexOf(g) !== -1)
                throw Error('Circular reference detected in ' + x.join('.'));
            f.push(g),
                _.forEach(g, function (m, h) {
                    (!(_.isUndefined(m) || m === null) &&
                        o.call(t, m, _.isString(h) ? h.trim() : h, x, d)) ===
                        !0 && v(m, x ? x.concat(h) : [h]);
                }),
                f.pop();
        }
    }
    if (!_.isObject(e)) throw new TypeError('data must be an object');
    return v(e), t;
}
function yp(e) {
    const t = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r];
    });
}
function Xf(e, t) {
    (this._pairs = []), e && cl(e, this, t);
}
const dm = Xf.prototype;
dm.append = function (t, n) {
    this._pairs.push([t, n]);
};
dm.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, yp);
          }
        : yp;
    return this._pairs
        .map(function (o) {
            return n(o[0]) + '=' + n(o[1]);
        }, '')
        .join('&');
};
function L6(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function pm(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || L6,
        o = n && n.serialize;
    let i;
    if (
        (o
            ? (i = o(t, n))
            : (i = _.isURLSearchParams(t)
                  ? t.toString()
                  : new Xf(t, n).toString(r)),
        i)
    ) {
        const s = e.indexOf('#');
        s !== -1 && (e = e.slice(0, s)),
            (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
    }
    return e;
}
class N6 {
    constructor() {
        this.handlers = [];
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        _.forEach(this.handlers, function (r) {
            r !== null && t(r);
        });
    }
}
const wp = N6,
    hm = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    R6 = typeof URLSearchParams < 'u' ? URLSearchParams : Xf,
    F6 = typeof FormData < 'u' ? FormData : null,
    A6 = typeof Blob < 'u' ? Blob : null,
    j6 = (() => {
        let e;
        return typeof navigator < 'u' &&
            ((e = navigator.product) === 'ReactNative' ||
                e === 'NativeScript' ||
                e === 'NS')
            ? !1
            : typeof window < 'u' && typeof document < 'u';
    })(),
    I6 = (() =>
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function')(),
    jt = {
        isBrowser: !0,
        classes: { URLSearchParams: R6, FormData: F6, Blob: A6 },
        isStandardBrowserEnv: j6,
        isStandardBrowserWebWorkerEnv: I6,
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    };
function M6(e, t) {
    return cl(
        e,
        new jt.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, o, i) {
                    return jt.isNode && _.isBuffer(n)
                        ? (this.append(r, n.toString('base64')), !1)
                        : i.defaultVisitor.apply(this, arguments);
                },
            },
            t,
        ),
    );
}
function z6(e) {
    return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
        t[0] === '[]' ? '' : t[1] || t[0],
    );
}
function D6(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
    return t;
}
function gm(e) {
    function t(n, r, o, i) {
        let s = n[i++];
        const a = Number.isFinite(+s),
            l = i >= n.length;
        return (
            (s = !s && _.isArray(o) ? o.length : s),
            l
                ? (_.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
                : ((!o[s] || !_.isObject(o[s])) && (o[s] = []),
                  t(n, r, o[s], i) && _.isArray(o[s]) && (o[s] = D6(o[s])),
                  !a)
        );
    }
    if (_.isFormData(e) && _.isFunction(e.entries)) {
        const n = {};
        return (
            _.forEachEntry(e, (r, o) => {
                t(z6(r), o, n, 0);
            }),
            n
        );
    }
    return null;
}
const U6 = { 'Content-Type': void 0 };
function B6(e, t, n) {
    if (_.isString(e))
        try {
            return (t || JSON.parse)(e), _.trim(e);
        } catch (r) {
            if (r.name !== 'SyntaxError') throw r;
        }
    return (n || JSON.stringify)(e);
}
const fl = {
    transitional: hm,
    adapter: ['xhr', 'http'],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || '',
                o = r.indexOf('application/json') > -1,
                i = _.isObject(t);
            if (
                (i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
            )
                return o && o ? JSON.stringify(gm(t)) : t;
            if (
                _.isArrayBuffer(t) ||
                _.isBuffer(t) ||
                _.isStream(t) ||
                _.isFile(t) ||
                _.isBlob(t)
            )
                return t;
            if (_.isArrayBufferView(t)) return t.buffer;
            if (_.isURLSearchParams(t))
                return (
                    n.setContentType(
                        'application/x-www-form-urlencoded;charset=utf-8',
                        !1,
                    ),
                    t.toString()
                );
            let a;
            if (i) {
                if (r.indexOf('application/x-www-form-urlencoded') > -1)
                    return M6(t, this.formSerializer).toString();
                if (
                    (a = _.isFileList(t)) ||
                    r.indexOf('multipart/form-data') > -1
                ) {
                    const l = this.env && this.env.FormData;
                    return cl(
                        a ? { 'files[]': t } : t,
                        l && new l(),
                        this.formSerializer,
                    );
                }
            }
            return i || o
                ? (n.setContentType('application/json', !1), B6(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || fl.transitional,
                r = n && n.forcedJSONParsing,
                o = this.responseType === 'json';
            if (t && _.isString(t) && ((r && !this.responseType) || o)) {
                const s = !(n && n.silentJSONParsing) && o;
                try {
                    return JSON.parse(t);
                } catch (a) {
                    if (s)
                        throw a.name === 'SyntaxError'
                            ? Q.from(
                                  a,
                                  Q.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response,
                              )
                            : a;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: jt.classes.FormData, Blob: jt.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
_.forEach(['delete', 'get', 'head'], function (t) {
    fl.headers[t] = {};
});
_.forEach(['post', 'put', 'patch'], function (t) {
    fl.headers[t] = _.merge(U6);
});
const ed = fl,
    H6 = _.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    V6 = (e) => {
        const t = {};
        let n, r, o;
        return (
            e &&
                e
                    .split(
                        `
`,
                    )
                    .forEach(function (s) {
                        (o = s.indexOf(':')),
                            (n = s.substring(0, o).trim().toLowerCase()),
                            (r = s.substring(o + 1).trim()),
                            !(!n || (t[n] && H6[n])) &&
                                (n === 'set-cookie'
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ', ' + r : r));
                    }),
            t
        );
    },
    xp = Symbol('internals');
function Fo(e) {
    return e && String(e).trim().toLowerCase();
}
function Qs(e) {
    return e === !1 || e == null ? e : _.isArray(e) ? e.map(Qs) : String(e);
}
function K6(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const W6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cu(e, t, n, r, o) {
    if (_.isFunction(r)) return r.call(this, t, n);
    if ((o && (t = n), !!_.isString(t))) {
        if (_.isString(r)) return t.indexOf(r) !== -1;
        if (_.isRegExp(r)) return r.test(t);
    }
}
function G6(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function q6(e, t) {
    const n = _.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (o, i, s) {
                return this[r].call(this, t, o, i, s);
            },
            configurable: !0,
        });
    });
}
class dl {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const o = this;
        function i(a, l, u) {
            const c = Fo(l);
            if (!c) throw new Error('header name must be a non-empty string');
            const f = _.findKey(o, c);
            (!f ||
                o[f] === void 0 ||
                u === !0 ||
                (u === void 0 && o[f] !== !1)) &&
                (o[f || l] = Qs(a));
        }
        const s = (a, l) => _.forEach(a, (u, c) => i(u, c, l));
        return (
            _.isPlainObject(t) || t instanceof this.constructor
                ? s(t, n)
                : _.isString(t) && (t = t.trim()) && !W6(t)
                ? s(V6(t), n)
                : t != null && i(n, t, r),
            this
        );
    }
    get(t, n) {
        if (((t = Fo(t)), t)) {
            const r = _.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return K6(o);
                if (_.isFunction(n)) return n.call(this, o, r);
                if (_.isRegExp(n)) return n.exec(o);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(t, n) {
        if (((t = Fo(t)), t)) {
            const r = _.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || cu(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function i(s) {
            if (((s = Fo(s)), s)) {
                const a = _.findKey(r, s);
                a && (!n || cu(r, r[a], a, n)) && (delete r[a], (o = !0));
            }
        }
        return _.isArray(t) ? t.forEach(i) : i(t), o;
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            o = !1;
        for (; r--; ) {
            const i = n[r];
            (!t || cu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
        }
        return o;
    }
    normalize(t) {
        const n = this,
            r = {};
        return (
            _.forEach(this, (o, i) => {
                const s = _.findKey(r, i);
                if (s) {
                    (n[s] = Qs(o)), delete n[i];
                    return;
                }
                const a = t ? G6(i) : String(i).trim();
                a !== i && delete n[i], (n[a] = Qs(o)), (r[a] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            _.forEach(this, (r, o) => {
                r != null &&
                    r !== !1 &&
                    (n[o] = t && _.isArray(r) ? r.join(', ') : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach((o) => r.set(o)), r;
    }
    static accessor(t) {
        const r = (this[xp] = this[xp] = { accessors: {} }).accessors,
            o = this.prototype;
        function i(s) {
            const a = Fo(s);
            r[a] || (q6(o, s), (r[a] = !0));
        }
        return _.isArray(t) ? t.forEach(i) : i(t), this;
    }
}
dl.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
]);
_.freezeMethods(dl.prototype);
_.freezeMethods(dl);
const on = dl;
function fu(e, t) {
    const n = this || ed,
        r = t || n,
        o = on.from(r.headers);
    let i = r.data;
    return (
        _.forEach(e, function (a) {
            i = a.call(n, i, o.normalize(), t ? t.status : void 0);
        }),
        o.normalize(),
        i
    );
}
function mm(e) {
    return !!(e && e.__CANCEL__);
}
function Vi(e, t, n) {
    Q.call(this, e ?? 'canceled', Q.ERR_CANCELED, t, n),
        (this.name = 'CanceledError');
}
_.inherits(Vi, Q, { __CANCEL__: !0 });
function Q6(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new Q(
                  'Request failed with status code ' + n.status,
                  [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n,
              ),
          );
}
const J6 = jt.isStandardBrowserEnv
    ? (function () {
          return {
              write: function (n, r, o, i, s, a) {
                  const l = [];
                  l.push(n + '=' + encodeURIComponent(r)),
                      _.isNumber(o) &&
                          l.push('expires=' + new Date(o).toGMTString()),
                      _.isString(i) && l.push('path=' + i),
                      _.isString(s) && l.push('domain=' + s),
                      a === !0 && l.push('secure'),
                      (document.cookie = l.join('; '));
              },
              read: function (n) {
                  const r = document.cookie.match(
                      new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
                  );
                  return r ? decodeURIComponent(r[3]) : null;
              },
              remove: function (n) {
                  this.write(n, '', Date.now() - 864e5);
              },
          };
      })()
    : (function () {
          return {
              write: function () {},
              read: function () {
                  return null;
              },
              remove: function () {},
          };
      })();
function Y6(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Z6(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function vm(e, t) {
    return e && !Y6(t) ? Z6(e, t) : t;
}
const X6 = jt.isStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
          let r;
          function o(i) {
              let s = i;
              return (
                  t && (n.setAttribute('href', s), (s = n.href)),
                  n.setAttribute('href', s),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, '') : '',
                      hash: n.hash ? n.hash.replace(/^#/, '') : '',
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === '/'
                              ? n.pathname
                              : '/' + n.pathname,
                  }
              );
          }
          return (
              (r = o(window.location.href)),
              function (s) {
                  const a = _.isString(s) ? o(s) : s;
                  return a.protocol === r.protocol && a.host === r.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function ex(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
}
function tx(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let o = 0,
        i = 0,
        s;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (l) {
            const u = Date.now(),
                c = r[i];
            s || (s = u), (n[o] = l), (r[o] = u);
            let f = i,
                d = 0;
            for (; f !== o; ) (d += n[f++]), (f = f % e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t))
                return;
            const v = c && u - c;
            return v ? Math.round((d * 1e3) / v) : void 0;
        }
    );
}
function bp(e, t) {
    let n = 0;
    const r = tx(50, 250);
    return (o) => {
        const i = o.loaded,
            s = o.lengthComputable ? o.total : void 0,
            a = i - n,
            l = r(a),
            u = i <= s;
        n = i;
        const c = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: a,
            rate: l || void 0,
            estimated: l && s && u ? (s - i) / l : void 0,
            event: o,
        };
        (c[t ? 'download' : 'upload'] = !0), e(c);
    };
}
const nx = typeof XMLHttpRequest < 'u',
    rx =
        nx &&
        function (e) {
            return new Promise(function (n, r) {
                let o = e.data;
                const i = on.from(e.headers).normalize(),
                    s = e.responseType;
                let a;
                function l() {
                    e.cancelToken && e.cancelToken.unsubscribe(a),
                        e.signal && e.signal.removeEventListener('abort', a);
                }
                _.isFormData(o) &&
                    (jt.isStandardBrowserEnv || jt.isStandardBrowserWebWorkerEnv
                        ? i.setContentType(!1)
                        : i.setContentType('multipart/form-data;', !1));
                let u = new XMLHttpRequest();
                if (e.auth) {
                    const v = e.auth.username || '',
                        g = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : '';
                    i.set('Authorization', 'Basic ' + btoa(v + ':' + g));
                }
                const c = vm(e.baseURL, e.url);
                u.open(
                    e.method.toUpperCase(),
                    pm(c, e.params, e.paramsSerializer),
                    !0,
                ),
                    (u.timeout = e.timeout);
                function f() {
                    if (!u) return;
                    const v = on.from(
                            'getAllResponseHeaders' in u &&
                                u.getAllResponseHeaders(),
                        ),
                        x = {
                            data:
                                !s || s === 'text' || s === 'json'
                                    ? u.responseText
                                    : u.response,
                            status: u.status,
                            statusText: u.statusText,
                            headers: v,
                            config: e,
                            request: u,
                        };
                    Q6(
                        function (m) {
                            n(m), l();
                        },
                        function (m) {
                            r(m), l();
                        },
                        x,
                    ),
                        (u = null);
                }
                if (
                    ('onloadend' in u
                        ? (u.onloadend = f)
                        : (u.onreadystatechange = function () {
                              !u ||
                                  u.readyState !== 4 ||
                                  (u.status === 0 &&
                                      !(
                                          u.responseURL &&
                                          u.responseURL.indexOf('file:') === 0
                                      )) ||
                                  setTimeout(f);
                          }),
                    (u.onabort = function () {
                        u &&
                            (r(new Q('Request aborted', Q.ECONNABORTED, e, u)),
                            (u = null));
                    }),
                    (u.onerror = function () {
                        r(new Q('Network Error', Q.ERR_NETWORK, e, u)),
                            (u = null);
                    }),
                    (u.ontimeout = function () {
                        let g = e.timeout
                            ? 'timeout of ' + e.timeout + 'ms exceeded'
                            : 'timeout exceeded';
                        const x = e.transitional || hm;
                        e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
                            r(
                                new Q(
                                    g,
                                    x.clarifyTimeoutError
                                        ? Q.ETIMEDOUT
                                        : Q.ECONNABORTED,
                                    e,
                                    u,
                                ),
                            ),
                            (u = null);
                    }),
                    jt.isStandardBrowserEnv)
                ) {
                    const v =
                        (e.withCredentials || X6(c)) &&
                        e.xsrfCookieName &&
                        J6.read(e.xsrfCookieName);
                    v && i.set(e.xsrfHeaderName, v);
                }
                o === void 0 && i.setContentType(null),
                    'setRequestHeader' in u &&
                        _.forEach(i.toJSON(), function (g, x) {
                            u.setRequestHeader(x, g);
                        }),
                    _.isUndefined(e.withCredentials) ||
                        (u.withCredentials = !!e.withCredentials),
                    s && s !== 'json' && (u.responseType = e.responseType),
                    typeof e.onDownloadProgress == 'function' &&
                        u.addEventListener(
                            'progress',
                            bp(e.onDownloadProgress, !0),
                        ),
                    typeof e.onUploadProgress == 'function' &&
                        u.upload &&
                        u.upload.addEventListener(
                            'progress',
                            bp(e.onUploadProgress),
                        ),
                    (e.cancelToken || e.signal) &&
                        ((a = (v) => {
                            u &&
                                (r(!v || v.type ? new Vi(null, e, u) : v),
                                u.abort(),
                                (u = null));
                        }),
                        e.cancelToken && e.cancelToken.subscribe(a),
                        e.signal &&
                            (e.signal.aborted
                                ? a()
                                : e.signal.addEventListener('abort', a)));
                const d = ex(c);
                if (d && jt.protocols.indexOf(d) === -1) {
                    r(
                        new Q(
                            'Unsupported protocol ' + d + ':',
                            Q.ERR_BAD_REQUEST,
                            e,
                        ),
                    );
                    return;
                }
                u.send(o || null);
            });
        },
    Js = { http: _6, xhr: rx };
_.forEach(Js, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t });
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t });
    }
});
const ox = {
    getAdapter: (e) => {
        e = _.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        for (
            let o = 0;
            o < t &&
            ((n = e[o]), !(r = _.isString(n) ? Js[n.toLowerCase()] : n));
            o++
        );
        if (!r)
            throw r === !1
                ? new Q(
                      `Adapter ${n} is not supported by the environment`,
                      'ERR_NOT_SUPPORT',
                  )
                : new Error(
                      _.hasOwnProp(Js, n)
                          ? `Adapter '${n}' is not available in the build`
                          : `Unknown adapter '${n}'`,
                  );
        if (!_.isFunction(r)) throw new TypeError('adapter is not a function');
        return r;
    },
    adapters: Js,
};
function du(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new Vi(null, e);
}
function Sp(e) {
    return (
        du(e),
        (e.headers = on.from(e.headers)),
        (e.data = fu.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        ox
            .getAdapter(e.adapter || ed.adapter)(e)
            .then(
                function (r) {
                    return (
                        du(e),
                        (r.data = fu.call(e, e.transformResponse, r)),
                        (r.headers = on.from(r.headers)),
                        r
                    );
                },
                function (r) {
                    return (
                        mm(r) ||
                            (du(e),
                            r &&
                                r.response &&
                                ((r.response.data = fu.call(
                                    e,
                                    e.transformResponse,
                                    r.response,
                                )),
                                (r.response.headers = on.from(
                                    r.response.headers,
                                )))),
                        Promise.reject(r)
                    );
                },
            )
    );
}
const Ep = (e) => (e instanceof on ? e.toJSON() : e);
function io(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, f) {
        return _.isPlainObject(u) && _.isPlainObject(c)
            ? _.merge.call({ caseless: f }, u, c)
            : _.isPlainObject(c)
            ? _.merge({}, c)
            : _.isArray(c)
            ? c.slice()
            : c;
    }
    function o(u, c, f) {
        if (_.isUndefined(c)) {
            if (!_.isUndefined(u)) return r(void 0, u, f);
        } else return r(u, c, f);
    }
    function i(u, c) {
        if (!_.isUndefined(c)) return r(void 0, c);
    }
    function s(u, c) {
        if (_.isUndefined(c)) {
            if (!_.isUndefined(u)) return r(void 0, u);
        } else return r(void 0, c);
    }
    function a(u, c, f) {
        if (f in t) return r(u, c);
        if (f in e) return r(void 0, u);
    }
    const l = {
        url: i,
        method: i,
        data: i,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (u, c) => o(Ep(u), Ep(c), !0),
    };
    return (
        _.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
            const f = l[c] || o,
                d = f(e[c], t[c], c);
            (_.isUndefined(d) && f !== a) || (n[c] = d);
        }),
        n
    );
}
const ym = '1.4.0',
    td = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
        td[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
    },
);
const $p = {};
td.transitional = function (t, n, r) {
    function o(i, s) {
        return (
            '[Axios v' +
            ym +
            "] Transitional option '" +
            i +
            "'" +
            s +
            (r ? '. ' + r : '')
        );
    }
    return (i, s, a) => {
        if (t === !1)
            throw new Q(
                o(s, ' has been removed' + (n ? ' in ' + n : '')),
                Q.ERR_DEPRECATED,
            );
        return (
            n &&
                !$p[s] &&
                (($p[s] = !0),
                console.warn(
                    o(
                        s,
                        ' has been deprecated since v' +
                            n +
                            ' and will be removed in the near future',
                    ),
                )),
            t ? t(i, s, a) : !0
        );
    };
};
function ix(e, t, n) {
    if (typeof e != 'object')
        throw new Q('options must be an object', Q.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const i = r[o],
            s = t[i];
        if (s) {
            const a = e[i],
                l = a === void 0 || s(a, i, e);
            if (l !== !0)
                throw new Q(
                    'option ' + i + ' must be ' + l,
                    Q.ERR_BAD_OPTION_VALUE,
                );
            continue;
        }
        if (n !== !0) throw new Q('Unknown option ' + i, Q.ERR_BAD_OPTION);
    }
}
const Pc = { assertOptions: ix, validators: td },
    mn = Pc.validators;
class ka {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new wp(), response: new wp() });
    }
    request(t, n) {
        typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = io(this.defaults, n));
        const { transitional: r, paramsSerializer: o, headers: i } = n;
        r !== void 0 &&
            Pc.assertOptions(
                r,
                {
                    silentJSONParsing: mn.transitional(mn.boolean),
                    forcedJSONParsing: mn.transitional(mn.boolean),
                    clarifyTimeoutError: mn.transitional(mn.boolean),
                },
                !1,
            ),
            o != null &&
                (_.isFunction(o)
                    ? (n.paramsSerializer = { serialize: o })
                    : Pc.assertOptions(
                          o,
                          { encode: mn.function, serialize: mn.function },
                          !0,
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                'get'
            ).toLowerCase());
        let s;
        (s = i && _.merge(i.common, i[n.method])),
            s &&
                _.forEach(
                    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                    (g) => {
                        delete i[g];
                    },
                ),
            (n.headers = on.concat(s, i));
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function (x) {
            (typeof x.runWhen == 'function' && x.runWhen(n) === !1) ||
                ((l = l && x.synchronous), a.unshift(x.fulfilled, x.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (x) {
            u.push(x.fulfilled, x.rejected);
        });
        let c,
            f = 0,
            d;
        if (!l) {
            const g = [Sp.bind(this), void 0];
            for (
                g.unshift.apply(g, a),
                    g.push.apply(g, u),
                    d = g.length,
                    c = Promise.resolve(n);
                f < d;

            )
                c = c.then(g[f++], g[f++]);
            return c;
        }
        d = a.length;
        let v = n;
        for (f = 0; f < d; ) {
            const g = a[f++],
                x = a[f++];
            try {
                v = g(v);
            } catch ($) {
                x.call(this, $);
                break;
            }
        }
        try {
            c = Sp.call(this, v);
        } catch (g) {
            return Promise.reject(g);
        }
        for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
        return c;
    }
    getUri(t) {
        t = io(this.defaults, t);
        const n = vm(t.baseURL, t.url);
        return pm(n, t.params, t.paramsSerializer);
    }
}
_.forEach(['delete', 'get', 'head', 'options'], function (t) {
    ka.prototype[t] = function (n, r) {
        return this.request(
            io(r || {}, { method: t, url: n, data: (r || {}).data }),
        );
    };
});
_.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
        return function (i, s, a) {
            return this.request(
                io(a || {}, {
                    method: t,
                    headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: i,
                    data: s,
                }),
            );
        };
    }
    (ka.prototype[t] = n()), (ka.prototype[t + 'Form'] = n(!0));
});
const Ys = ka;
class nd {
    constructor(t) {
        if (typeof t != 'function')
            throw new TypeError('executor must be a function.');
        let n;
        this.promise = new Promise(function (i) {
            n = i;
        });
        const r = this;
        this.promise.then((o) => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0; ) r._listeners[i](o);
            r._listeners = null;
        }),
            (this.promise.then = (o) => {
                let i;
                const s = new Promise((a) => {
                    r.subscribe(a), (i = a);
                }).then(o);
                return (
                    (s.cancel = function () {
                        r.unsubscribe(i);
                    }),
                    s
                );
            }),
            t(function (i, s, a) {
                r.reason || ((r.reason = new Vi(i, s, a)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let t;
        return {
            token: new nd(function (o) {
                t = o;
            }),
            cancel: t,
        };
    }
}
const sx = nd;
function ax(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function lx(e) {
    return _.isObject(e) && e.isAxiosError === !0;
}
const Oc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Oc).forEach(([e, t]) => {
    Oc[t] = e;
});
const ux = Oc;
function wm(e) {
    const t = new Ys(e),
        n = tm(Ys.prototype.request, t);
    return (
        _.extend(n, Ys.prototype, t, { allOwnKeys: !0 }),
        _.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (o) {
            return wm(io(e, o));
        }),
        n
    );
}
const _e = wm(ed);
_e.Axios = Ys;
_e.CanceledError = Vi;
_e.CancelToken = sx;
_e.isCancel = mm;
_e.VERSION = ym;
_e.toFormData = cl;
_e.AxiosError = Q;
_e.Cancel = _e.CanceledError;
_e.all = function (t) {
    return Promise.all(t);
};
_e.spread = ax;
_e.isAxiosError = lx;
_e.mergeConfig = io;
_e.AxiosHeaders = on;
_e.formToJSON = (e) => gm(_.isHTMLForm(e) ? new FormData(e) : e);
_e.HttpStatusCode = ux;
_e.default = _e;
const cx = _e,
    Ta = {
        prefix: String(Math.round(Math.random() * 1e10)),
        current: 0,
        isSSR: !1,
    },
    rd = D.createContext(Ta);
let fx = !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
    ),
    pu = new WeakMap();
function dx(e = !1) {
    let t = b.useContext(rd),
        n = b.useRef(null);
    if (n.current === null && !e) {
        var r, o;
        let i =
            (r = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ===
                null ||
            r === void 0 ||
            (o = r.ReactCurrentOwner) === null ||
            o === void 0
                ? void 0
                : o.current;
        if (i) {
            let s = pu.get(i);
            s == null
                ? pu.set(i, { id: t.current, state: i.memoizedState })
                : i.memoizedState !== s.state &&
                  ((t.current = s.id), pu.delete(i));
        }
        n.current = ++t.current;
    }
    return n.current;
}
function px(e) {
    let t = b.useContext(rd);
    t === Ta &&
        !fx &&
        console.warn(
            'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.',
        );
    let n = dx(!!e),
        r = `react-aria${t.prefix}`;
    return e || `${r}-${n}`;
}
function hx(e) {
    let t = D.useId(),
        [n] = b.useState(od()),
        r = n ? 'react-aria' : `react-aria${Ta.prefix}`;
    return e || `${r}-${t}`;
}
const gx = typeof D.useId == 'function' ? hx : px;
function mx() {
    return !1;
}
function vx() {
    return !0;
}
function yx(e) {
    return () => {};
}
function od() {
    return typeof D.useSyncExternalStore == 'function'
        ? D.useSyncExternalStore(yx, mx, vx)
        : b.useContext(rd).isSSR;
}
class wx {
    getStringForLocale(t, n) {
        let r = this.strings[n];
        r ||
            ((r = xx(n, this.strings, this.defaultLocale)),
            (this.strings[n] = r));
        let o = r[t];
        if (!o)
            throw new Error(`Could not find intl message ${t} in ${n} locale`);
        return o;
    }
    constructor(t, n = 'en-US') {
        (this.strings = { ...t }), (this.defaultLocale = n);
    }
}
function xx(e, t, n = 'en-US') {
    if (t[e]) return t[e];
    let r = bx(e);
    if (t[r]) return t[r];
    for (let o in t) if (o.startsWith(r + '-')) return t[o];
    return t[n];
}
function bx(e) {
    return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
const Cp = new Map(),
    kp = new Map();
class Sx {
    format(t, n) {
        let r = this.strings.getStringForLocale(t, this.locale);
        return typeof r == 'function' ? r(n, this) : r;
    }
    plural(t, n, r = 'cardinal') {
        let o = n['=' + t];
        if (o) return typeof o == 'function' ? o() : o;
        let i = this.locale + ':' + r,
            s = Cp.get(i);
        s ||
            ((s = new Intl.PluralRules(this.locale, { type: r })),
            Cp.set(i, s));
        let a = s.select(t);
        return (o = n[a] || n.other), typeof o == 'function' ? o() : o;
    }
    number(t) {
        let n = kp.get(this.locale);
        return (
            n ||
                ((n = new Intl.NumberFormat(this.locale)),
                kp.set(this.locale, n)),
            n.format(t)
        );
    }
    select(t, n) {
        let r = t[n] || t.other;
        return typeof r == 'function' ? r() : r;
    }
    constructor(t, n) {
        (this.locale = t), (this.strings = n);
    }
}
function Ex(e, t) {
    if (t.has(e))
        throw new TypeError(
            'Cannot initialize the same private elements twice on an object',
        );
}
function $x(e, t, n) {
    Ex(e, t), t.set(e, n);
}
const Be = typeof document < 'u' ? D.useLayoutEffect : () => {};
function Cx(e) {
    let [t, n] = b.useState(e),
        r = b.useRef(t),
        o = b.useRef(null),
        i = b.useCallback(() => {
            let a = o.current.next();
            for (; !a.done && r.current === a.value; ) a = o.current.next();
            if (a.done) {
                o.current = null;
                return;
            }
            n(a.value), (r.current = a.value);
        }, [n, r, o]);
    Be(() => {
        o.current && i();
    });
    let s = b.useCallback(
        (a) => {
            (o.current = a(r.current)), i();
        },
        [i, o, r],
    );
    return [t, s];
}
let _a = new Map();
function xm(e) {
    let [t, n] = b.useState(e),
        r = b.useRef(null),
        o = gx(t),
        i = b.useCallback((s) => {
            r.current = s;
        }, []);
    return (
        _a.set(o, i),
        Be(() => {
            let s = o;
            return () => {
                _a.delete(s);
            };
        }, [o]),
        b.useEffect(() => {
            let s = r.current;
            s && ((r.current = null), n(s));
        }),
        o
    );
}
function kx(e, t) {
    if (e === t) return e;
    let n = _a.get(e);
    if (n) return n(t), t;
    let r = _a.get(t);
    return r ? (r(e), e) : t;
}
function UC(e = []) {
    let t = xm(),
        [n, r] = Cx(t),
        o = b.useCallback(() => {
            r(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, r]);
    return Be(o, [t, o, ...e]), n;
}
function Tx(...e) {
    return (...t) => {
        for (let n of e) typeof n == 'function' && n(...t);
    };
}
function _i(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let r = e[n];
        for (let o in r) {
            let i = t[o],
                s = r[o];
            typeof i == 'function' &&
            typeof s == 'function' &&
            o[0] === 'o' &&
            o[1] === 'n' &&
            o.charCodeAt(2) >= 65 &&
            o.charCodeAt(2) <= 90
                ? (t[o] = Tx(i, s))
                : (o === 'className' || o === 'UNSAFE_className') &&
                  typeof i == 'string' &&
                  typeof s == 'string'
                ? (t[o] = tn(i, s))
                : o === 'id' && i && s
                ? (t.id = kx(i, s))
                : (t[o] = s !== void 0 ? s : i);
        }
    }
    return t;
}
function BC(...e) {
    return e.length === 1
        ? e[0]
        : (t) => {
              for (let n of e)
                  typeof n == 'function' ? n(t) : n != null && (n.current = t);
          };
}
const _x = new Set(['id']),
    Px = new Set([
        'aria-label',
        'aria-labelledby',
        'aria-describedby',
        'aria-details',
    ]),
    Ox = /^(data-.*)$/;
function HC(e, t = {}) {
    let { labelable: n, propNames: r } = t,
        o = {};
    for (const i in e)
        Object.prototype.hasOwnProperty.call(e, i) &&
            (_x.has(i) ||
                (n && Px.has(i)) ||
                (r != null && r.has(i)) ||
                Ox.test(i)) &&
            (o[i] = e[i]);
    return o;
}
function Vr(e) {
    if (Lx()) e.focus({ preventScroll: !0 });
    else {
        let t = Nx(e);
        e.focus(), Rx(t);
    }
}
let Cs = null;
function Lx() {
    if (Cs == null) {
        Cs = !1;
        try {
            var e = document.createElement('div');
            e.focus({
                get preventScroll() {
                    return (Cs = !0), !0;
                },
            });
        } catch {}
    }
    return Cs;
}
function Nx(e) {
    for (
        var t = e.parentNode,
            n = [],
            r = document.scrollingElement || document.documentElement;
        t instanceof HTMLElement && t !== r;

    )
        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
            n.push({
                element: t,
                scrollTop: t.scrollTop,
                scrollLeft: t.scrollLeft,
            }),
            (t = t.parentNode);
    return (
        r instanceof HTMLElement &&
            n.push({
                element: r,
                scrollTop: r.scrollTop,
                scrollLeft: r.scrollLeft,
            }),
        n
    );
}
function Rx(e) {
    for (let { element: t, scrollTop: n, scrollLeft: r } of e)
        (t.scrollTop = n), (t.scrollLeft = r);
}
let kr = new Map(),
    Lc = new Set();
function Tp() {
    if (typeof window > 'u') return;
    let e = (n) => {
            let r = kr.get(n.target);
            r ||
                ((r = new Set()),
                kr.set(n.target, r),
                n.target.addEventListener('transitioncancel', t)),
                r.add(n.propertyName);
        },
        t = (n) => {
            let r = kr.get(n.target);
            if (
                r &&
                (r.delete(n.propertyName),
                r.size === 0 &&
                    (n.target.removeEventListener('transitioncancel', t),
                    kr.delete(n.target)),
                kr.size === 0)
            ) {
                for (let o of Lc) o();
                Lc.clear();
            }
        };
    document.body.addEventListener('transitionrun', e),
        document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
    (document.readyState !== 'loading'
        ? Tp()
        : document.addEventListener('DOMContentLoaded', Tp));
function bm(e) {
    requestAnimationFrame(() => {
        kr.size === 0 ? e() : Lc.add(e);
    });
}
function Fx() {
    let e = b.useRef(new Map()),
        t = b.useCallback((o, i, s, a) => {
            let l =
                a != null && a.once
                    ? (...u) => {
                          e.current.delete(s), s(...u);
                      }
                    : s;
            e.current.set(s, { type: i, eventTarget: o, fn: l, options: a }),
                o.addEventListener(i, s, a);
        }, []),
        n = b.useCallback((o, i, s, a) => {
            var l;
            let u =
                ((l = e.current.get(s)) === null || l === void 0
                    ? void 0
                    : l.fn) || s;
            o.removeEventListener(i, u, a), e.current.delete(s);
        }, []),
        r = b.useCallback(() => {
            e.current.forEach((o, i) => {
                n(o.eventTarget, o.type, i, o.options);
            });
        }, [n]);
    return (
        b.useEffect(() => r, [r]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r,
        }
    );
}
function Ax(e, t) {
    let { id: n, 'aria-label': r, 'aria-labelledby': o } = e;
    return (
        (n = xm(n)),
        o && r
            ? (o = [...new Set([n, ...o.trim().split(/\s+/)])].join(' '))
            : o && (o = o.trim().split(/\s+/).join(' ')),
        !r && !o && t && (r = t),
        { id: n, 'aria-label': r, 'aria-labelledby': o }
    );
}
function Sm(e, t) {
    Be(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref.current = null;
                }
            );
    }, [e, t]);
}
function jx(e) {
    var t;
    return typeof window > 'u' || window.navigator == null
        ? !1
        : ((t = window.navigator.userAgentData) === null || t === void 0
              ? void 0
              : t.brands.some((n) => e.test(n.brand))) ||
              e.test(window.navigator.userAgent);
}
function id(e) {
    var t;
    return typeof window < 'u' && window.navigator != null
        ? e.test(
              ((t = window.navigator.userAgentData) === null || t === void 0
                  ? void 0
                  : t.platform) || window.navigator.platform,
          )
        : !1;
}
function Em() {
    return id(/^Mac/i);
}
function Ix() {
    return id(/^iPhone/i);
}
function Mx() {
    return id(/^iPad/i) || (Em() && navigator.maxTouchPoints > 1);
}
function $m() {
    return Ix() || Mx();
}
function zx() {
    return jx(/Android/i);
}
function bn(e) {
    const t = b.useRef(null);
    return (
        Be(() => {
            t.current = e;
        }, [e]),
        b.useCallback((...n) => {
            const r = t.current;
            return r(...n);
        }, [])
    );
}
function Nc(e) {
    return e.mozInputSource === 0 && e.isTrusted
        ? !0
        : zx() && e.pointerType
        ? e.type === 'click' && e.buttons === 1
        : e.detail === 0 && !e.pointerType;
}
function Dx(e) {
    return (
        (e.width === 0 && e.height === 0) ||
        (e.width === 1 &&
            e.height === 1 &&
            e.pressure === 0 &&
            e.detail === 0 &&
            e.pointerType === 'mouse')
    );
}
const Ux = new Set([
        'Arab',
        'Syrc',
        'Samr',
        'Mand',
        'Thaa',
        'Mend',
        'Nkoo',
        'Adlm',
        'Rohg',
        'Hebr',
    ]),
    Bx = new Set([
        'ae',
        'ar',
        'arc',
        'bcc',
        'bqi',
        'ckb',
        'dv',
        'fa',
        'glk',
        'he',
        'ku',
        'mzn',
        'nqo',
        'pnb',
        'ps',
        'sd',
        'ug',
        'ur',
        'yi',
    ]);
function Cm(e) {
    if (Intl.Locale) {
        let n = new Intl.Locale(e).maximize().script;
        return Ux.has(n);
    }
    let t = e.split('-')[0];
    return Bx.has(t);
}
function km() {
    let e =
        (typeof navigator < 'u' &&
            (navigator.language || navigator.userLanguage)) ||
        'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = 'en-US';
    }
    return { locale: e, direction: Cm(e) ? 'rtl' : 'ltr' };
}
let Rc = km(),
    Bo = new Set();
function _p() {
    Rc = km();
    for (let e of Bo) e(Rc);
}
function Tm() {
    let e = od(),
        [t, n] = b.useState(Rc);
    return (
        b.useEffect(
            () => (
                Bo.size === 0 && window.addEventListener('languagechange', _p),
                Bo.add(n),
                () => {
                    Bo.delete(n),
                        Bo.size === 0 &&
                            window.removeEventListener('languagechange', _p);
                }
            ),
            [],
        ),
        e ? { locale: 'en-US', direction: 'ltr' } : t
    );
}
const _m = D.createContext(null);
function Hx(e) {
    let { locale: t, children: n } = e,
        r = Tm(),
        o = t ? { locale: t, direction: Cm(t) ? 'rtl' : 'ltr' } : r;
    return D.createElement(_m.Provider, { value: o }, n);
}
function Vx() {
    let e = Tm();
    return b.useContext(_m) || e;
}
const Pp = new WeakMap();
function Kx(e) {
    let t = Pp.get(e);
    return t || ((t = new wx(e)), Pp.set(e, t)), t;
}
function Wx(e) {
    let { locale: t } = Vx(),
        n = b.useMemo(() => Kx(e), [e]);
    return b.useMemo(() => new Sx(t, n), [t, n]);
}
function Gx(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function Pm(e, t, n) {
    if (!t.has(e))
        throw new TypeError(
            'attempted to ' + n + ' private field on non-instance',
        );
    return t.get(e);
}
function qx(e, t) {
    var n = Pm(e, t, 'get');
    return Gx(e, n);
}
function Qx(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable)
            throw new TypeError('attempted to set read only private field');
        t.value = n;
    }
}
function Op(e, t, n) {
    var r = Pm(e, t, 'set');
    return Qx(e, r, n), n;
}
let Kr = 'default',
    Fc = '',
    Zs = new WeakMap();
function Lp(e) {
    $m()
        ? (Kr === 'default' &&
              ((Fc = document.documentElement.style.webkitUserSelect),
              (document.documentElement.style.webkitUserSelect = 'none')),
          (Kr = 'disabled'))
        : (e instanceof HTMLElement || e instanceof SVGElement) &&
          (Zs.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function ks(e) {
    if ($m()) {
        if (Kr !== 'disabled') return;
        (Kr = 'restoring'),
            setTimeout(() => {
                bm(() => {
                    Kr === 'restoring' &&
                        (document.documentElement.style.webkitUserSelect ===
                            'none' &&
                            (document.documentElement.style.webkitUserSelect =
                                Fc || ''),
                        (Fc = ''),
                        (Kr = 'default'));
                });
            }, 300);
    } else if (
        (e instanceof HTMLElement || e instanceof SVGElement) &&
        e &&
        Zs.has(e)
    ) {
        let t = Zs.get(e);
        e.style.userSelect === 'none' && (e.style.userSelect = t),
            e.getAttribute('style') === '' && e.removeAttribute('style'),
            Zs.delete(e);
    }
}
const Om = D.createContext(null);
Om.displayName = 'PressResponderContext';
function Jx(e) {
    let t = b.useContext(Om);
    if (t) {
        let { register: n, ...r } = t;
        (e = _i(r, e)), n();
    }
    return Sm(t, e.ref), e;
}
var Ts = new WeakMap();
class _s {
    continuePropagation() {
        Op(this, Ts, !1);
    }
    get shouldStopPropagation() {
        return qx(this, Ts);
    }
    constructor(t, n, r) {
        $x(this, Ts, { writable: !0, value: void 0 }),
            Op(this, Ts, !0),
            (this.type = t),
            (this.pointerType = n),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey);
    }
}
function VC(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: r,
            onPressEnd: o,
            onPressUp: i,
            isDisabled: s,
            isPressed: a,
            preventFocusOnPress: l,
            shouldCancelOnPointerExit: u,
            allowTextSelectionOnPress: c,
            ref: f,
            ...d
        } = Jx(e),
        [v, g] = b.useState(!1),
        x = b.useRef({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
        }),
        { addGlobalListener: $, removeAllGlobalListeners: m } = Fx(),
        h = bn((S, I) => {
            let z = x.current;
            if (s || z.didFirePressStart) return;
            let j = !0;
            if (r) {
                let K = new _s('pressstart', I, S);
                r(K), (j = K.shouldStopPropagation);
            }
            return n && n(!0), (z.didFirePressStart = !0), g(!0), j;
        }),
        y = bn((S, I, z = !0) => {
            let j = x.current;
            if (!j.didFirePressStart) return;
            (j.ignoreClickAfterPress = !0), (j.didFirePressStart = !1);
            let K = !0;
            if (o) {
                let P = new _s('pressend', I, S);
                o(P), (K = P.shouldStopPropagation);
            }
            if ((n && n(!1), g(!1), t && z && !s)) {
                let P = new _s('press', I, S);
                t(P), K && (K = P.shouldStopPropagation);
            }
            return K;
        }),
        E = bn((S, I) => {
            if (!s) {
                if (i) {
                    let z = new _s('pressup', I, S);
                    return i(z), z.shouldStopPropagation;
                }
                return !0;
            }
        }),
        k = bn((S) => {
            let I = x.current;
            I.isPressed &&
                (I.isOverTarget && y(qt(I.target, S), I.pointerType, !1),
                (I.isPressed = !1),
                (I.isOverTarget = !1),
                (I.activePointerId = null),
                (I.pointerType = null),
                m(),
                c || ks(I.target));
        }),
        O = bn((S) => {
            u && k(S);
        }),
        N = b.useMemo(() => {
            let S = x.current,
                I = {
                    onKeyDown(j) {
                        if (
                            hu(j.nativeEvent, j.currentTarget) &&
                            j.currentTarget.contains(j.target)
                        ) {
                            Rp(j.target, j.key) && j.preventDefault();
                            let K = !0;
                            !S.isPressed &&
                                !j.repeat &&
                                ((S.target = j.currentTarget),
                                (S.isPressed = !0),
                                (K = h(j, 'keyboard')),
                                $(document, 'keyup', z, !1)),
                                K && j.stopPropagation();
                        } else
                            j.key === 'Enter' &&
                                Ac(j.currentTarget) &&
                                j.stopPropagation();
                    },
                    onKeyUp(j) {
                        hu(j.nativeEvent, j.currentTarget) &&
                            !j.repeat &&
                            j.currentTarget.contains(j.target) &&
                            E(qt(S.target, j), 'keyboard');
                    },
                    onClick(j) {
                        if (
                            !(j && !j.currentTarget.contains(j.target)) &&
                            j &&
                            j.button === 0
                        ) {
                            let K = !0;
                            if (
                                (s && j.preventDefault(),
                                !S.ignoreClickAfterPress &&
                                    !S.ignoreEmulatedMouseEvents &&
                                    (S.pointerType === 'virtual' ||
                                        Nc(j.nativeEvent)))
                            ) {
                                !s && !l && Vr(j.currentTarget);
                                let P = h(j, 'virtual'),
                                    R = E(j, 'virtual'),
                                    Z = y(j, 'virtual');
                                K = P && R && Z;
                            }
                            (S.ignoreEmulatedMouseEvents = !1),
                                (S.ignoreClickAfterPress = !1),
                                K && j.stopPropagation();
                        }
                    },
                },
                z = (j) => {
                    if (S.isPressed && hu(j, S.target)) {
                        Rp(j.target, j.key) && j.preventDefault(),
                            (S.isPressed = !1);
                        let K = j.target,
                            P = y(
                                qt(S.target, j),
                                'keyboard',
                                S.target.contains(K),
                            );
                        m(),
                            P && j.stopPropagation(),
                            S.target instanceof HTMLElement &&
                                S.target.contains(K) &&
                                (Ac(S.target) ||
                                    S.target.getAttribute('role') === 'link') &&
                                S.target.click();
                    }
                };
            if (typeof PointerEvent < 'u') {
                (I.onPointerDown = (R) => {
                    if (R.button !== 0 || !R.currentTarget.contains(R.target))
                        return;
                    if (Dx(R.nativeEvent)) {
                        S.pointerType = 'virtual';
                        return;
                    }
                    gu(R.currentTarget) && R.preventDefault(),
                        (S.pointerType = R.pointerType);
                    let Z = !0;
                    S.isPressed ||
                        ((S.isPressed = !0),
                        (S.isOverTarget = !0),
                        (S.activePointerId = R.pointerId),
                        (S.target = R.currentTarget),
                        !s && !l && Vr(R.currentTarget),
                        c || Lp(S.target),
                        (Z = h(R, S.pointerType)),
                        $(document, 'pointermove', j, !1),
                        $(document, 'pointerup', K, !1),
                        $(document, 'pointercancel', P, !1)),
                        Z && R.stopPropagation();
                }),
                    (I.onMouseDown = (R) => {
                        R.currentTarget.contains(R.target) &&
                            R.button === 0 &&
                            (gu(R.currentTarget) && R.preventDefault(),
                            R.stopPropagation());
                    }),
                    (I.onPointerUp = (R) => {
                        !R.currentTarget.contains(R.target) ||
                            S.pointerType === 'virtual' ||
                            (R.button === 0 &&
                                Sr(R, R.currentTarget) &&
                                E(R, S.pointerType || R.pointerType));
                    });
                let j = (R) => {
                        R.pointerId === S.activePointerId &&
                            (Sr(R, S.target)
                                ? S.isOverTarget ||
                                  ((S.isOverTarget = !0),
                                  h(qt(S.target, R), S.pointerType))
                                : S.isOverTarget &&
                                  ((S.isOverTarget = !1),
                                  y(qt(S.target, R), S.pointerType, !1),
                                  O(R)));
                    },
                    K = (R) => {
                        R.pointerId === S.activePointerId &&
                            S.isPressed &&
                            R.button === 0 &&
                            (Sr(R, S.target)
                                ? y(qt(S.target, R), S.pointerType)
                                : S.isOverTarget &&
                                  y(qt(S.target, R), S.pointerType, !1),
                            (S.isPressed = !1),
                            (S.isOverTarget = !1),
                            (S.activePointerId = null),
                            (S.pointerType = null),
                            m(),
                            c || ks(S.target));
                    },
                    P = (R) => {
                        k(R);
                    };
                I.onDragStart = (R) => {
                    R.currentTarget.contains(R.target) && k(R);
                };
            } else {
                (I.onMouseDown = (P) => {
                    if (P.button !== 0 || !P.currentTarget.contains(P.target))
                        return;
                    if (
                        (gu(P.currentTarget) && P.preventDefault(),
                        S.ignoreEmulatedMouseEvents)
                    ) {
                        P.stopPropagation();
                        return;
                    }
                    (S.isPressed = !0),
                        (S.isOverTarget = !0),
                        (S.target = P.currentTarget),
                        (S.pointerType = Nc(P.nativeEvent)
                            ? 'virtual'
                            : 'mouse'),
                        !s && !l && Vr(P.currentTarget),
                        h(P, S.pointerType) && P.stopPropagation(),
                        $(document, 'mouseup', j, !1);
                }),
                    (I.onMouseEnter = (P) => {
                        if (!P.currentTarget.contains(P.target)) return;
                        let R = !0;
                        S.isPressed &&
                            !S.ignoreEmulatedMouseEvents &&
                            ((S.isOverTarget = !0), (R = h(P, S.pointerType))),
                            R && P.stopPropagation();
                    }),
                    (I.onMouseLeave = (P) => {
                        if (!P.currentTarget.contains(P.target)) return;
                        let R = !0;
                        S.isPressed &&
                            !S.ignoreEmulatedMouseEvents &&
                            ((S.isOverTarget = !1),
                            (R = y(P, S.pointerType, !1)),
                            O(P)),
                            R && P.stopPropagation();
                    }),
                    (I.onMouseUp = (P) => {
                        P.currentTarget.contains(P.target) &&
                            !S.ignoreEmulatedMouseEvents &&
                            P.button === 0 &&
                            E(P, S.pointerType);
                    });
                let j = (P) => {
                    if (P.button === 0) {
                        if (
                            ((S.isPressed = !1),
                            m(),
                            S.ignoreEmulatedMouseEvents)
                        ) {
                            S.ignoreEmulatedMouseEvents = !1;
                            return;
                        }
                        Sr(P, S.target)
                            ? y(qt(S.target, P), S.pointerType)
                            : S.isOverTarget &&
                              y(qt(S.target, P), S.pointerType, !1),
                            (S.isOverTarget = !1);
                    }
                };
                (I.onTouchStart = (P) => {
                    if (!P.currentTarget.contains(P.target)) return;
                    let R = Yx(P.nativeEvent);
                    if (!R) return;
                    (S.activePointerId = R.identifier),
                        (S.ignoreEmulatedMouseEvents = !0),
                        (S.isOverTarget = !0),
                        (S.isPressed = !0),
                        (S.target = P.currentTarget),
                        (S.pointerType = 'touch'),
                        !s && !l && Vr(P.currentTarget),
                        c || Lp(S.target),
                        h(P, S.pointerType) && P.stopPropagation(),
                        $(window, 'scroll', K, !0);
                }),
                    (I.onTouchMove = (P) => {
                        if (!P.currentTarget.contains(P.target)) return;
                        if (!S.isPressed) {
                            P.stopPropagation();
                            return;
                        }
                        let R = Np(P.nativeEvent, S.activePointerId),
                            Z = !0;
                        R && Sr(R, P.currentTarget)
                            ? S.isOverTarget ||
                              ((S.isOverTarget = !0), (Z = h(P, S.pointerType)))
                            : S.isOverTarget &&
                              ((S.isOverTarget = !1),
                              (Z = y(P, S.pointerType, !1)),
                              O(P)),
                            Z && P.stopPropagation();
                    }),
                    (I.onTouchEnd = (P) => {
                        if (!P.currentTarget.contains(P.target)) return;
                        if (!S.isPressed) {
                            P.stopPropagation();
                            return;
                        }
                        let R = Np(P.nativeEvent, S.activePointerId),
                            Z = !0;
                        R && Sr(R, P.currentTarget)
                            ? (E(P, S.pointerType), (Z = y(P, S.pointerType)))
                            : S.isOverTarget && (Z = y(P, S.pointerType, !1)),
                            Z && P.stopPropagation(),
                            (S.isPressed = !1),
                            (S.activePointerId = null),
                            (S.isOverTarget = !1),
                            (S.ignoreEmulatedMouseEvents = !0),
                            c || ks(S.target),
                            m();
                    }),
                    (I.onTouchCancel = (P) => {
                        P.currentTarget.contains(P.target) &&
                            (P.stopPropagation(), S.isPressed && k(P));
                    });
                let K = (P) => {
                    S.isPressed &&
                        P.target.contains(S.target) &&
                        k({
                            currentTarget: S.target,
                            shiftKey: !1,
                            ctrlKey: !1,
                            metaKey: !1,
                            altKey: !1,
                        });
                };
                I.onDragStart = (P) => {
                    P.currentTarget.contains(P.target) && k(P);
                };
            }
            return I;
        }, [$, s, l, m, c, k, O, y, h, E]);
    return (
        b.useEffect(
            () => () => {
                c || ks(x.current.target);
            },
            [c],
        ),
        { isPressed: a || v, pressProps: _i(d, N) }
    );
}
function Ac(e) {
    return e.tagName === 'A' && e.hasAttribute('href');
}
function hu(e, t) {
    const { key: n, code: r } = e,
        o = t,
        i = o.getAttribute('role');
    return (
        (n === 'Enter' || n === ' ' || n === 'Spacebar' || r === 'Space') &&
        !(
            (o instanceof HTMLInputElement && !Lm(o, n)) ||
            o instanceof HTMLTextAreaElement ||
            o.isContentEditable
        ) &&
        (!Ac(o) || (i === 'button' && n !== 'Enter')) &&
        !(i === 'link' && n !== 'Enter')
    );
}
function Yx(e) {
    const { targetTouches: t } = e;
    return t.length > 0 ? t[0] : null;
}
function Np(e, t) {
    const n = e.changedTouches;
    for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (o.identifier === t) return o;
    }
    return null;
}
function qt(e, t) {
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
    };
}
function Zx(e) {
    let t = e.width / 2 || e.radiusX || 0,
        n = e.height / 2 || e.radiusY || 0;
    return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t,
    };
}
function Xx(e, t) {
    return !(
        e.left > t.right ||
        t.left > e.right ||
        e.top > t.bottom ||
        t.top > e.bottom
    );
}
function Sr(e, t) {
    let n = t.getBoundingClientRect(),
        r = Zx(e);
    return Xx(n, r);
}
function gu(e) {
    return !(e instanceof HTMLElement) || !e.draggable;
}
function Rp(e, t) {
    return e instanceof HTMLInputElement
        ? !Lm(e, t)
        : e instanceof HTMLButtonElement
        ? e.type !== 'submit' && e.type !== 'reset'
        : !0;
}
const e8 = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset',
]);
function Lm(e, t) {
    return e.type === 'checkbox' || e.type === 'radio'
        ? t === ' '
        : e8.has(e.type);
}
class t8 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(t, n) {
        (this.nativeEvent = n),
            (this.target = n.target),
            (this.currentTarget = n.currentTarget),
            (this.relatedTarget = n.relatedTarget),
            (this.bubbles = n.bubbles),
            (this.cancelable = n.cancelable),
            (this.defaultPrevented = n.defaultPrevented),
            (this.eventPhase = n.eventPhase),
            (this.isTrusted = n.isTrusted),
            (this.timeStamp = n.timeStamp),
            (this.type = t);
    }
}
function Nm(e) {
    let t = b.useRef({ isFocused: !1, observer: null });
    Be(() => {
        const r = t.current;
        return () => {
            r.observer && (r.observer.disconnect(), (r.observer = null));
        };
    }, []);
    let n = bn((r) => {
        e == null || e(r);
    });
    return b.useCallback(
        (r) => {
            if (
                r.target instanceof HTMLButtonElement ||
                r.target instanceof HTMLInputElement ||
                r.target instanceof HTMLTextAreaElement ||
                r.target instanceof HTMLSelectElement
            ) {
                t.current.isFocused = !0;
                let o = r.target,
                    i = (s) => {
                        (t.current.isFocused = !1),
                            o.disabled && n(new t8('blur', s)),
                            t.current.observer &&
                                (t.current.observer.disconnect(),
                                (t.current.observer = null));
                    };
                o.addEventListener('focusout', i, { once: !0 }),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && o.disabled) {
                            t.current.observer.disconnect();
                            let s =
                                o === document.activeElement
                                    ? null
                                    : document.activeElement;
                            o.dispatchEvent(
                                new FocusEvent('blur', { relatedTarget: s }),
                            ),
                                o.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: s,
                                    }),
                                );
                        }
                    })),
                    t.current.observer.observe(o, {
                        attributes: !0,
                        attributeFilter: ['disabled'],
                    });
            }
        },
        [n],
    );
}
function Rm(e) {
    let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
    const i = b.useCallback(
            (l) => {
                if (l.target === l.currentTarget)
                    return r && r(l), o && o(!1), !0;
            },
            [r, o],
        ),
        s = Nm(i),
        a = b.useCallback(
            (l) => {
                l.target === l.currentTarget &&
                    document.activeElement === l.target &&
                    (n && n(l), o && o(!0), s(l));
            },
            [o, n, s],
        );
    return {
        focusProps: {
            onFocus: !t && (n || o || r) ? a : void 0,
            onBlur: !t && (r || o) ? i : void 0,
        },
    };
}
let vo = null,
    jc = new Set(),
    Fp = !1,
    fr = !1,
    Ic = !1;
const n8 = { Tab: !0, Escape: !0 };
function sd(e, t) {
    for (let n of jc) n(e, t);
}
function r8(e) {
    return !(
        e.metaKey ||
        (!Em() && e.altKey) ||
        e.ctrlKey ||
        e.key === 'Control' ||
        e.key === 'Shift' ||
        e.key === 'Meta'
    );
}
function Ap(e) {
    (fr = !0), r8(e) && ((vo = 'keyboard'), sd('keyboard', e));
}
function Er(e) {
    (vo = 'pointer'),
        (e.type === 'mousedown' || e.type === 'pointerdown') &&
            ((fr = !0), sd('pointer', e));
}
function o8(e) {
    Nc(e) && ((fr = !0), (vo = 'virtual'));
}
function i8(e) {
    e.target === window ||
        e.target === document ||
        (!fr && !Ic && ((vo = 'virtual'), sd('virtual', e)),
        (fr = !1),
        (Ic = !1));
}
function s8() {
    (fr = !1), (Ic = !0);
}
function Mc() {
    if (typeof window > 'u' || Fp) return;
    let e = HTMLElement.prototype.focus;
    (HTMLElement.prototype.focus = function () {
        (fr = !0), e.apply(this, arguments);
    }),
        document.addEventListener('keydown', Ap, !0),
        document.addEventListener('keyup', Ap, !0),
        document.addEventListener('click', o8, !0),
        window.addEventListener('focus', i8, !0),
        window.addEventListener('blur', s8, !1),
        typeof PointerEvent < 'u'
            ? (document.addEventListener('pointerdown', Er, !0),
              document.addEventListener('pointermove', Er, !0),
              document.addEventListener('pointerup', Er, !0))
            : (document.addEventListener('mousedown', Er, !0),
              document.addEventListener('mousemove', Er, !0),
              document.addEventListener('mouseup', Er, !0)),
        (Fp = !0);
}
typeof document < 'u' &&
    (document.readyState !== 'loading'
        ? Mc()
        : document.addEventListener('DOMContentLoaded', Mc));
function Fm() {
    return vo !== 'pointer';
}
function a8() {
    return vo;
}
function l8(e, t, n) {
    return !(e && t === 'keyboard' && n instanceof KeyboardEvent && !n8[n.key]);
}
function u8(e, t, n) {
    Mc(),
        b.useEffect(() => {
            let r = (o, i) => {
                l8(n == null ? void 0 : n.isTextInput, o, i) && e(Fm());
            };
            return (
                jc.add(r),
                () => {
                    jc.delete(r);
                }
            );
        }, t);
}
function ad(e) {
    let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o,
        } = e,
        i = b.useRef({ isFocusWithin: !1 }),
        s = b.useCallback(
            (u) => {
                i.current.isFocusWithin &&
                    !u.currentTarget.contains(u.relatedTarget) &&
                    ((i.current.isFocusWithin = !1), n && n(u), o && o(!1));
            },
            [n, o, i],
        ),
        a = Nm(s),
        l = b.useCallback(
            (u) => {
                !i.current.isFocusWithin &&
                    document.activeElement === u.target &&
                    (r && r(u),
                    o && o(!0),
                    (i.current.isFocusWithin = !0),
                    a(u));
            },
            [r, o, a],
        );
    return t
        ? { focusWithinProps: { onFocus: null, onBlur: null } }
        : { focusWithinProps: { onFocus: l, onBlur: s } };
}
let Pa = !1,
    mu = 0;
function zc() {
    (Pa = !0),
        setTimeout(() => {
            Pa = !1;
        }, 50);
}
function jp(e) {
    e.pointerType === 'touch' && zc();
}
function c8() {
    if (!(typeof document > 'u'))
        return (
            typeof PointerEvent < 'u'
                ? document.addEventListener('pointerup', jp)
                : document.addEventListener('touchend', zc),
            mu++,
            () => {
                mu--,
                    !(mu > 0) &&
                        (typeof PointerEvent < 'u'
                            ? document.removeEventListener('pointerup', jp)
                            : document.removeEventListener('touchend', zc));
            }
        );
}
function KC(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
        [i, s] = b.useState(!1),
        a = b.useRef({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
        }).current;
    b.useEffect(c8, []);
    let { hoverProps: l, triggerHoverEnd: u } = b.useMemo(() => {
        let c = (v, g) => {
                if (
                    ((a.pointerType = g),
                    o ||
                        g === 'touch' ||
                        a.isHovered ||
                        !v.currentTarget.contains(v.target))
                )
                    return;
                a.isHovered = !0;
                let x = v.currentTarget;
                (a.target = x),
                    t && t({ type: 'hoverstart', target: x, pointerType: g }),
                    n && n(!0),
                    s(!0);
            },
            f = (v, g) => {
                if (
                    ((a.pointerType = ''),
                    (a.target = null),
                    g === 'touch' || !a.isHovered)
                )
                    return;
                a.isHovered = !1;
                let x = v.currentTarget;
                r && r({ type: 'hoverend', target: x, pointerType: g }),
                    n && n(!1),
                    s(!1);
            },
            d = {};
        return (
            typeof PointerEvent < 'u'
                ? ((d.onPointerEnter = (v) => {
                      (Pa && v.pointerType === 'mouse') || c(v, v.pointerType);
                  }),
                  (d.onPointerLeave = (v) => {
                      !o &&
                          v.currentTarget.contains(v.target) &&
                          f(v, v.pointerType);
                  }))
                : ((d.onTouchStart = () => {
                      a.ignoreEmulatedMouseEvents = !0;
                  }),
                  (d.onMouseEnter = (v) => {
                      !a.ignoreEmulatedMouseEvents && !Pa && c(v, 'mouse'),
                          (a.ignoreEmulatedMouseEvents = !1);
                  }),
                  (d.onMouseLeave = (v) => {
                      !o && v.currentTarget.contains(v.target) && f(v, 'mouse');
                  })),
            { hoverProps: d, triggerHoverEnd: f }
        );
    }, [t, n, r, o, a]);
    return (
        b.useEffect(() => {
            o && u({ currentTarget: a.target }, a.pointerType);
        }, [o]),
        { hoverProps: l, isHovered: i }
    );
}
function f8(e) {
    let {
            ref: t,
            onInteractOutside: n,
            isDisabled: r,
            onInteractOutsideStart: o,
        } = e,
        i = b.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
        s = bn((l) => {
            n && Ps(l, t) && (o && o(l), (i.current.isPointerDown = !0));
        }),
        a = bn((l) => {
            n && n(l);
        });
    b.useEffect(() => {
        let l = i.current;
        if (!r)
            if (typeof PointerEvent < 'u') {
                let u = (c) => {
                    l.isPointerDown && Ps(c, t) && a(c), (l.isPointerDown = !1);
                };
                return (
                    document.addEventListener('pointerdown', s, !0),
                    document.addEventListener('pointerup', u, !0),
                    () => {
                        document.removeEventListener('pointerdown', s, !0),
                            document.removeEventListener('pointerup', u, !0);
                    }
                );
            } else {
                let u = (f) => {
                        l.ignoreEmulatedMouseEvents
                            ? (l.ignoreEmulatedMouseEvents = !1)
                            : l.isPointerDown && Ps(f, t) && a(f),
                            (l.isPointerDown = !1);
                    },
                    c = (f) => {
                        (l.ignoreEmulatedMouseEvents = !0),
                            l.isPointerDown && Ps(f, t) && a(f),
                            (l.isPointerDown = !1);
                    };
                return (
                    document.addEventListener('mousedown', s, !0),
                    document.addEventListener('mouseup', u, !0),
                    document.addEventListener('touchstart', s, !0),
                    document.addEventListener('touchend', c, !0),
                    () => {
                        document.removeEventListener('mousedown', s, !0),
                            document.removeEventListener('mouseup', u, !0),
                            document.removeEventListener('touchstart', s, !0),
                            document.removeEventListener('touchend', c, !0);
                    }
                );
            }
    }, [t, r, s, a]);
}
function Ps(e, t) {
    if (e.button > 0) return !1;
    if (e.target) {
        const n = e.target.ownerDocument;
        if (
            !n ||
            !n.documentElement.contains(e.target) ||
            e.target.closest('[data-react-aria-top-layer]')
        )
            return !1;
    }
    return t.current && !t.current.contains(e.target);
}
function Ip(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        let r = {
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented() {
                return n.isDefaultPrevented();
            },
            stopPropagation() {
                console.error(
                    'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.',
                );
            },
            continuePropagation() {
                t = !1;
            },
        };
        e(r), t && n.stopPropagation();
    };
}
function d8(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : { onKeyDown: Ip(e.onKeyDown), onKeyUp: Ip(e.onKeyUp) },
    };
}
function Am(e) {
    if (a8() === 'virtual') {
        let t = document.activeElement;
        bm(() => {
            document.activeElement === t && document.contains(e) && Vr(e);
        });
    } else Vr(e);
}
function p8(e) {
    if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
    let { display: t, visibility: n } = e.style,
        r = t !== 'none' && n !== 'hidden' && n !== 'collapse';
    if (r) {
        const { getComputedStyle: o } = e.ownerDocument.defaultView;
        let { display: i, visibility: s } = o(e);
        r = i !== 'none' && s !== 'hidden' && s !== 'collapse';
    }
    return r;
}
function h8(e, t) {
    return (
        !e.hasAttribute('hidden') &&
        (e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY'
            ? e.hasAttribute('open')
            : !0)
    );
}
function jm(e, t) {
    return (
        e.nodeName !== '#comment' &&
        p8(e) &&
        h8(e, t) &&
        (!e.parentElement || jm(e.parentElement, e))
    );
}
const Mp = D.createContext(null);
let ae = null;
function g8(e) {
    let { children: t, contain: n, restoreFocus: r, autoFocus: o } = e,
        i = b.useRef(),
        s = b.useRef(),
        a = b.useRef([]),
        { parentNode: l } = b.useContext(Mp) || {},
        u = b.useMemo(() => new Dc({ scopeRef: a }), [a]);
    Be(() => {
        let d = l || ye.root;
        if (ye.getTreeNode(d.scopeRef) && ae && !La(ae, d.scopeRef)) {
            let v = ye.getTreeNode(ae);
            v && (d = v);
        }
        d.addChild(u), ye.addNode(u);
    }, [u, l]),
        Be(() => {
            let d = ye.getTreeNode(a);
            d.contain = n;
        }, [n]),
        Be(() => {
            let d = i.current.nextSibling,
                v = [];
            for (; d && d !== s.current; ) v.push(d), (d = d.nextSibling);
            a.current = v;
        }, [t]),
        S8(a, r, n),
        w8(a, n),
        $8(a, r, n),
        b8(a, o),
        b.useEffect(() => {
            if (a) {
                let d = document.activeElement,
                    v = null;
                if (Ue(d, a.current)) {
                    for (let g of ye.traverse())
                        Ue(d, g.scopeRef.current) && (v = g);
                    v === ye.getTreeNode(a) && (ae = v.scopeRef);
                }
                return () => {
                    let g = ye.getTreeNode(a).parent.scopeRef;
                    (a === ae || La(a, ae)) &&
                        (!g || ye.getTreeNode(g)) &&
                        (ae = g),
                        ye.removeTreeNode(a);
                };
            }
        }, [a]);
    let c = b.useMemo(() => m8(a), []),
        f = b.useMemo(() => ({ focusManager: c, parentNode: u }), [u, c]);
    return D.createElement(
        Mp.Provider,
        { value: f },
        D.createElement('span', {
            'data-focus-scope-start': !0,
            hidden: !0,
            ref: i,
        }),
        t,
        D.createElement('span', {
            'data-focus-scope-end': !0,
            hidden: !0,
            ref: s,
        }),
    );
}
function m8(e) {
    return {
        focusNext(t = {}) {
            let n = e.current,
                { from: r, tabbable: o, wrap: i, accept: s } = t,
                a = r || document.activeElement,
                l = n[0].previousElementSibling,
                u = Cn(nr(n), { tabbable: o, accept: s }, n);
            u.currentNode = Ue(a, n) ? a : l;
            let c = u.nextNode();
            return (
                !c && i && ((u.currentNode = l), (c = u.nextNode())),
                c && nn(c, !0),
                c
            );
        },
        focusPrevious(t = {}) {
            let n = e.current,
                { from: r, tabbable: o, wrap: i, accept: s } = t,
                a = r || document.activeElement,
                l = n[n.length - 1].nextElementSibling,
                u = Cn(nr(n), { tabbable: o, accept: s }, n);
            u.currentNode = Ue(a, n) ? a : l;
            let c = u.previousNode();
            return (
                !c && i && ((u.currentNode = l), (c = u.previousNode())),
                c && nn(c, !0),
                c
            );
        },
        focusFirst(t = {}) {
            let n = e.current,
                { tabbable: r, accept: o } = t,
                i = Cn(nr(n), { tabbable: r, accept: o }, n);
            i.currentNode = n[0].previousElementSibling;
            let s = i.nextNode();
            return s && nn(s, !0), s;
        },
        focusLast(t = {}) {
            let n = e.current,
                { tabbable: r, accept: o } = t,
                i = Cn(nr(n), { tabbable: r, accept: o }, n);
            i.currentNode = n[n.length - 1].nextElementSibling;
            let s = i.previousNode();
            return s && nn(s, !0), s;
        },
    };
}
const ld = [
        'input:not([disabled]):not([type=hidden])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        'a[href]',
        'area[href]',
        'summary',
        'iframe',
        'object',
        'embed',
        'audio[controls]',
        'video[controls]',
        '[contenteditable]',
    ],
    v8 =
        ld.join(':not([hidden]),') +
        ',[tabindex]:not([disabled]):not([hidden])';
ld.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const y8 = ld.join(':not([hidden]):not([tabindex="-1"]),');
function nr(e) {
    return e[0].parentElement;
}
function Ho(e) {
    let t = ye.getTreeNode(ae);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function w8(e, t) {
    let n = b.useRef(),
        r = b.useRef(null);
    Be(() => {
        let o = e.current;
        if (!t) {
            r.current && (cancelAnimationFrame(r.current), (r.current = null));
            return;
        }
        let i = (l) => {
                if (
                    l.key !== 'Tab' ||
                    l.altKey ||
                    l.ctrlKey ||
                    l.metaKey ||
                    !Ho(e)
                )
                    return;
                let u = document.activeElement,
                    c = e.current;
                if (!Ue(u, c)) return;
                let f = Cn(nr(c), { tabbable: !0 }, c);
                f.currentNode = u;
                let d = l.shiftKey ? f.previousNode() : f.nextNode();
                d ||
                    ((f.currentNode = l.shiftKey
                        ? c[c.length - 1].nextElementSibling
                        : c[0].previousElementSibling),
                    (d = l.shiftKey ? f.previousNode() : f.nextNode())),
                    l.preventDefault(),
                    d && nn(d, !0);
            },
            s = (l) => {
                (!ae || La(ae, e)) && Ue(l.target, e.current)
                    ? ((ae = e), (n.current = l.target))
                    : Ho(e) && !Oa(l.target, e)
                    ? n.current
                        ? n.current.focus()
                        : ae && Na(ae.current)
                    : Ho(e) && (n.current = l.target);
            },
            a = (l) => {
                r.current && cancelAnimationFrame(r.current),
                    (r.current = requestAnimationFrame(() => {
                        Ho(e) &&
                            !Oa(document.activeElement, e) &&
                            ((ae = e),
                            document.body.contains(l.target)
                                ? ((n.current = l.target), n.current.focus())
                                : ae && Na(ae.current));
                    }));
            };
        return (
            document.addEventListener('keydown', i, !1),
            document.addEventListener('focusin', s, !1),
            o.forEach((l) => l.addEventListener('focusin', s, !1)),
            o.forEach((l) => l.addEventListener('focusout', a, !1)),
            () => {
                document.removeEventListener('keydown', i, !1),
                    document.removeEventListener('focusin', s, !1),
                    o.forEach((l) => l.removeEventListener('focusin', s, !1)),
                    o.forEach((l) => l.removeEventListener('focusout', a, !1));
            }
        );
    }, [e, t]),
        Be(
            () => () => {
                r.current && cancelAnimationFrame(r.current);
            },
            [r],
        );
}
function Im(e) {
    return Oa(e);
}
function Ue(e, t) {
    return t.some((n) => n.contains(e));
}
function Oa(e, t = null) {
    if (e instanceof Element && e.closest('[data-react-aria-top-layer]'))
        return !0;
    for (let { scopeRef: n } of ye.traverse(ye.getTreeNode(t)))
        if (Ue(e, n.current)) return !0;
    return !1;
}
function x8(e) {
    return Oa(e, ae);
}
function La(e, t) {
    var n;
    let r =
        (n = ye.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function nn(e, t = !1) {
    if (e != null && !t)
        try {
            Am(e);
        } catch {}
    else if (e != null)
        try {
            e.focus();
        } catch {}
}
function Na(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = Cn(nr(e), { tabbable: t }, e);
    r.currentNode = n;
    let o = r.nextNode();
    t &&
        !o &&
        ((r = Cn(nr(e), { tabbable: !1 }, e)),
        (r.currentNode = n),
        (o = r.nextNode())),
        nn(o);
}
function b8(e, t) {
    const n = D.useRef(t);
    b.useEffect(() => {
        n.current &&
            ((ae = e), Ue(document.activeElement, ae.current) || Na(e.current)),
            (n.current = !1);
    }, [e]);
}
function S8(e, t, n) {
    Be(() => {
        if (t || n) return;
        let r = e.current,
            o = (i) => {
                let s = i.target;
                Ue(s, e.current) ? (ae = e) : Im(s) || (ae = null);
            };
        return (
            document.addEventListener('focusin', o, !1),
            r.forEach((i) => i.addEventListener('focusin', o, !1)),
            () => {
                document.removeEventListener('focusin', o, !1),
                    r.forEach((i) => i.removeEventListener('focusin', o, !1));
            }
        );
    }, [e, t, n]);
}
function E8(e) {
    let t = ye.getTreeNode(ae);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (t == null ? void 0 : t.scopeRef) === e;
}
function $8(e, t, n) {
    const r = b.useRef(typeof document < 'u' ? document.activeElement : null);
    Be(() => {
        let o = e.current;
        if (!t || n) return;
        let i = () => {
            (!ae || La(ae, e)) &&
                Ue(document.activeElement, e.current) &&
                (ae = e);
        };
        return (
            document.addEventListener('focusin', i, !1),
            o.forEach((s) => s.addEventListener('focusin', i, !1)),
            () => {
                document.removeEventListener('focusin', i, !1),
                    o.forEach((s) => s.removeEventListener('focusin', i, !1));
            }
        );
    }, [e, n]),
        Be(() => {
            if (!t) return;
            let o = (i) => {
                if (
                    i.key !== 'Tab' ||
                    i.altKey ||
                    i.ctrlKey ||
                    i.metaKey ||
                    !Ho(e)
                )
                    return;
                let s = document.activeElement;
                if (!Ue(s, e.current)) return;
                let a = ye.getTreeNode(e).nodeToRestore,
                    l = Cn(document.body, { tabbable: !0 });
                l.currentNode = s;
                let u = i.shiftKey ? l.previousNode() : l.nextNode();
                if (
                    ((!document.body.contains(a) || a === document.body) &&
                        ((a = null), (ye.getTreeNode(e).nodeToRestore = null)),
                    (!u || !Ue(u, e.current)) && a)
                ) {
                    l.currentNode = a;
                    do u = i.shiftKey ? l.previousNode() : l.nextNode();
                    while (Ue(u, e.current));
                    i.preventDefault(),
                        i.stopPropagation(),
                        u ? nn(u, !0) : Im(a) ? nn(a, !0) : s.blur();
                }
            };
            return (
                n || document.addEventListener('keydown', o, !0),
                () => {
                    n || document.removeEventListener('keydown', o, !0);
                }
            );
        }, [e, t, n]),
        Be(() => {
            if (t)
                return (
                    (ye.getTreeNode(e).nodeToRestore = r.current),
                    () => {
                        let o = ye.getTreeNode(e).nodeToRestore;
                        if (
                            t &&
                            o &&
                            (Ue(document.activeElement, e.current) ||
                                (document.activeElement === document.body &&
                                    E8(e)))
                        ) {
                            let i = ye.clone();
                            requestAnimationFrame(() => {
                                if (document.activeElement === document.body) {
                                    let s = i.getTreeNode(e);
                                    for (; s; ) {
                                        if (
                                            s.nodeToRestore &&
                                            document.body.contains(
                                                s.nodeToRestore,
                                            )
                                        ) {
                                            nn(s.nodeToRestore);
                                            return;
                                        }
                                        s = s.parent;
                                    }
                                    for (s = i.getTreeNode(e); s; ) {
                                        if (
                                            s.scopeRef &&
                                            ye.getTreeNode(s.scopeRef)
                                        ) {
                                            Na(s.scopeRef.current, !0);
                                            return;
                                        }
                                        s = s.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [e, t]);
}
function Cn(e, t, n) {
    let r = t != null && t.tabbable ? y8 : v8,
        o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(i) {
                var s;
                return !(t == null || (s = t.from) === null || s === void 0) &&
                    s.contains(i)
                    ? NodeFilter.FILTER_REJECT
                    : i.matches(r) &&
                      jm(i) &&
                      (!n || Ue(i, n)) &&
                      (!(t != null && t.accept) || t.accept(i))
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
            },
        });
    return t != null && t.from && (o.currentNode = t.from), o;
}
class ud {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(t) {
        return this.fastMap.get(t);
    }
    addTreeNode(t, n, r) {
        let o = this.fastMap.get(n ?? null),
            i = new Dc({ scopeRef: t });
        o.addChild(i),
            (i.parent = o),
            this.fastMap.set(t, i),
            r && (i.nodeToRestore = r);
    }
    addNode(t) {
        this.fastMap.set(t.scopeRef, t);
    }
    removeTreeNode(t) {
        if (t === null) return;
        let n = this.fastMap.get(t),
            r = n.parent;
        for (let i of this.traverse())
            i !== n &&
                n.nodeToRestore &&
                i.nodeToRestore &&
                n.scopeRef.current &&
                Ue(i.nodeToRestore, n.scopeRef.current) &&
                (i.nodeToRestore = n.nodeToRestore);
        let o = n.children;
        r.removeChild(n),
            o.size > 0 && o.forEach((i) => r.addChild(i)),
            this.fastMap.delete(n.scopeRef);
    }
    *traverse(t = this.root) {
        if ((t.scopeRef != null && (yield t), t.children.size > 0))
            for (let n of t.children) yield* this.traverse(n);
    }
    clone() {
        let t = new ud();
        for (let n of this.traverse())
            t.addTreeNode(n.scopeRef, n.parent.scopeRef, n.nodeToRestore);
        return t;
    }
    constructor() {
        (this.fastMap = new Map()),
            (this.root = new Dc({ scopeRef: null })),
            this.fastMap.set(null, this.root);
    }
}
class Dc {
    addChild(t) {
        this.children.add(t), (t.parent = this);
    }
    removeChild(t) {
        this.children.delete(t), (t.parent = void 0);
    }
    constructor(t) {
        (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = t.scopeRef);
    }
}
let ye = new ud();
function WC(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: r } = e,
        o = b.useRef({ isFocused: !1, isFocusVisible: t || Fm() }),
        [i, s] = b.useState(!1),
        [a, l] = b.useState(
            () => o.current.isFocused && o.current.isFocusVisible,
        ),
        u = b.useCallback(
            () => l(o.current.isFocused && o.current.isFocusVisible),
            [],
        ),
        c = b.useCallback(
            (v) => {
                (o.current.isFocused = v), s(v), u();
            },
            [u],
        );
    u8(
        (v) => {
            (o.current.isFocusVisible = v), u();
        },
        [],
        { isTextInput: n },
    );
    let { focusProps: f } = Rm({ isDisabled: r, onFocusChange: c }),
        { focusWithinProps: d } = ad({
            isDisabled: !r,
            onFocusWithinChange: c,
        });
    return { isFocused: i, isFocusVisible: a, focusProps: r ? d : f };
}
let C8 = D.createContext(null);
function k8(e) {
    let t = b.useContext(C8) || {};
    Sm(t, e);
    let { ref: n, ...r } = t;
    return r;
}
function GC(e, t) {
    let { focusProps: n } = Rm(e),
        { keyboardProps: r } = d8(e),
        o = _i(n, r),
        i = k8(t),
        s = e.isDisabled ? {} : i,
        a = b.useRef(e.autoFocus);
    return (
        b.useEffect(() => {
            a.current && t.current && Am(t.current), (a.current = !1);
        }, [t]),
        {
            focusableProps: _i(
                {
                    ...o,
                    tabIndex:
                        e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
                },
                s,
            ),
        }
    );
}
const zp = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap',
};
function T8(e = {}) {
    let { style: t, isFocusable: n } = e,
        [r, o] = b.useState(!1),
        { focusWithinProps: i } = ad({
            isDisabled: !n,
            onFocusWithinChange: (a) => o(a),
        }),
        s = b.useMemo(() => (r ? t : t ? { ...zp, ...t } : zp), [r]);
    return { visuallyHiddenProps: { ...i, style: s } };
}
function _8(e) {
    let {
            children: t,
            elementType: n = 'div',
            isFocusable: r,
            style: o,
            ...i
        } = e,
        { visuallyHiddenProps: s } = T8(e);
    return D.createElement(n, _i(i, s), t);
}
function P8(e) {
    return e && e.__esModule ? e.default : e;
}
const Qt = [];
function qC(e, t) {
    let {
        onClose: n,
        shouldCloseOnBlur: r,
        isOpen: o,
        isDismissable: i = !1,
        isKeyboardDismissDisabled: s = !1,
        shouldCloseOnInteractOutside: a,
    } = e;
    b.useEffect(
        () => (
            o && Qt.push(t),
            () => {
                let g = Qt.indexOf(t);
                g >= 0 && Qt.splice(g, 1);
            }
        ),
        [o, t],
    );
    let l = () => {
            Qt[Qt.length - 1] === t && n && n();
        },
        u = (g) => {
            (!a || a(g.target)) &&
                Qt[Qt.length - 1] === t &&
                (g.stopPropagation(), g.preventDefault());
        },
        c = (g) => {
            (!a || a(g.target)) &&
                (Qt[Qt.length - 1] === t &&
                    (g.stopPropagation(), g.preventDefault()),
                l());
        },
        f = (g) => {
            g.key === 'Escape' &&
                !s &&
                (g.stopPropagation(), g.preventDefault(), l());
        };
    f8({ ref: t, onInteractOutside: i ? c : null, onInteractOutsideStart: u });
    let { focusWithinProps: d } = ad({
            isDisabled: !r,
            onBlurWithin: (g) => {
                (g.relatedTarget && x8(g.relatedTarget)) ||
                    ((!a || a(g.relatedTarget)) && n());
            },
        }),
        v = (g) => {
            g.target === g.currentTarget && g.preventDefault();
        };
    return {
        overlayProps: { onKeyDown: f, ...d },
        underlayProps: { onPointerDown: v },
    };
}
const Uc = D.createContext(null);
function O8(e) {
    let { children: t } = e,
        n = b.useContext(Uc),
        [r, o] = b.useState(0),
        i = b.useMemo(
            () => ({
                parent: n,
                modalCount: r,
                addModal() {
                    o((s) => s + 1), n && n.addModal();
                },
                removeModal() {
                    o((s) => s - 1), n && n.removeModal();
                },
            }),
            [n, r],
        );
    return D.createElement(Uc.Provider, { value: i }, t);
}
function L8() {
    let e = b.useContext(Uc);
    return {
        modalProviderProps: {
            'aria-hidden': e && e.modalCount > 0 ? !0 : null,
        },
    };
}
function N8(e) {
    let { modalProviderProps: t } = L8();
    return D.createElement('div', { 'data-overlay-container': !0, ...e, ...t });
}
function R8(e) {
    return D.createElement(O8, null, D.createElement(N8, e));
}
var Mm = {},
    zm = {};
zm = { dismiss: 'تجاهل' };
var Dm = {};
Dm = { dismiss: 'Отхвърляне' };
var Um = {};
Um = { dismiss: 'Odstranit' };
var Bm = {};
Bm = { dismiss: 'Luk' };
var Hm = {};
Hm = { dismiss: 'Schließen' };
var Vm = {};
Vm = { dismiss: 'Απόρριψη' };
var Km = {};
Km = { dismiss: 'Dismiss' };
var Wm = {};
Wm = { dismiss: 'Descartar' };
var Gm = {};
Gm = { dismiss: 'Lõpeta' };
var qm = {};
qm = { dismiss: 'Hylkää' };
var Qm = {};
Qm = { dismiss: 'Rejeter' };
var Jm = {};
Jm = { dismiss: 'התעלם' };
var Ym = {};
Ym = { dismiss: 'Odbaci' };
var Zm = {};
Zm = { dismiss: 'Elutasítás' };
var Xm = {};
Xm = { dismiss: 'Ignora' };
var e2 = {};
e2 = { dismiss: '閉じる' };
var t2 = {};
t2 = { dismiss: '무시' };
var n2 = {};
n2 = { dismiss: 'Atmesti' };
var r2 = {};
r2 = { dismiss: 'Nerādīt' };
var o2 = {};
o2 = { dismiss: 'Lukk' };
var i2 = {};
i2 = { dismiss: 'Negeren' };
var s2 = {};
s2 = { dismiss: 'Zignoruj' };
var a2 = {};
a2 = { dismiss: 'Descartar' };
var l2 = {};
l2 = { dismiss: 'Dispensar' };
var u2 = {};
u2 = { dismiss: 'Revocare' };
var c2 = {};
c2 = { dismiss: 'Пропустить' };
var f2 = {};
f2 = { dismiss: 'Zrušiť' };
var d2 = {};
d2 = { dismiss: 'Opusti' };
var p2 = {};
p2 = { dismiss: 'Odbaci' };
var h2 = {};
h2 = { dismiss: 'Avvisa' };
var g2 = {};
g2 = { dismiss: 'Kapat' };
var m2 = {};
m2 = { dismiss: 'Скасувати' };
var v2 = {};
v2 = { dismiss: '取消' };
var y2 = {};
y2 = { dismiss: '關閉' };
Mm = {
    'ar-AE': zm,
    'bg-BG': Dm,
    'cs-CZ': Um,
    'da-DK': Bm,
    'de-DE': Hm,
    'el-GR': Vm,
    'en-US': Km,
    'es-ES': Wm,
    'et-EE': Gm,
    'fi-FI': qm,
    'fr-FR': Qm,
    'he-IL': Jm,
    'hr-HR': Ym,
    'hu-HU': Zm,
    'it-IT': Xm,
    'ja-JP': e2,
    'ko-KR': t2,
    'lt-LT': n2,
    'lv-LV': r2,
    'nb-NO': o2,
    'nl-NL': i2,
    'pl-PL': s2,
    'pt-BR': a2,
    'pt-PT': l2,
    'ro-RO': u2,
    'ru-RU': c2,
    'sk-SK': f2,
    'sl-SI': d2,
    'sr-SP': p2,
    'sv-SE': h2,
    'tr-TR': g2,
    'uk-UA': m2,
    'zh-CN': v2,
    'zh-TW': y2,
};
function QC(e) {
    let { onDismiss: t, ...n } = e,
        r = Wx(P8(Mm)),
        o = Ax(n, r.format('dismiss')),
        i = () => {
            t && t();
        };
    return D.createElement(
        _8,
        null,
        D.createElement('button', { ...o, tabIndex: -1, onClick: i }),
    );
}
let Ao = new WeakMap(),
    ht = [];
function JC(e, t = document.body) {
    let n = new Set(e),
        r = new Set(),
        o = (l) => {
            for (let d of l.querySelectorAll(
                '[data-live-announcer], [data-react-aria-top-layer]',
            ))
                n.add(d);
            let u = (d) => {
                    if (
                        n.has(d) ||
                        (r.has(d.parentElement) &&
                            d.parentElement.getAttribute('role') !== 'row')
                    )
                        return NodeFilter.FILTER_REJECT;
                    for (let v of n)
                        if (d.contains(v)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                },
                c = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: u,
                }),
                f = u(l);
            if (
                (f === NodeFilter.FILTER_ACCEPT && i(l),
                f !== NodeFilter.FILTER_REJECT)
            ) {
                let d = c.nextNode();
                for (; d != null; ) i(d), (d = c.nextNode());
            }
        },
        i = (l) => {
            var u;
            let c = (u = Ao.get(l)) !== null && u !== void 0 ? u : 0;
            (l.getAttribute('aria-hidden') === 'true' && c === 0) ||
                (c === 0 && l.setAttribute('aria-hidden', 'true'),
                r.add(l),
                Ao.set(l, c + 1));
        };
    ht.length && ht[ht.length - 1].disconnect(), o(t);
    let s = new MutationObserver((l) => {
        for (let u of l)
            if (
                !(u.type !== 'childList' || u.addedNodes.length === 0) &&
                ![...n, ...r].some((c) => c.contains(u.target))
            ) {
                for (let c of u.removedNodes)
                    c instanceof Element && (n.delete(c), r.delete(c));
                for (let c of u.addedNodes)
                    (c instanceof HTMLElement || c instanceof SVGElement) &&
                    (c.dataset.liveAnnouncer === 'true' ||
                        c.dataset.reactAriaTopLayer === 'true')
                        ? n.add(c)
                        : c instanceof Element && o(c);
            }
    });
    s.observe(t, { childList: !0, subtree: !0 });
    let a = {
        observe() {
            s.observe(t, { childList: !0, subtree: !0 });
        },
        disconnect() {
            s.disconnect();
        },
    };
    return (
        ht.push(a),
        () => {
            s.disconnect();
            for (let l of r) {
                let u = Ao.get(l);
                u === 1
                    ? (l.removeAttribute('aria-hidden'), Ao.delete(l))
                    : Ao.set(l, u - 1);
            }
            a === ht[ht.length - 1]
                ? (ht.pop(), ht.length && ht[ht.length - 1].observe())
                : ht.splice(ht.indexOf(a), 1);
        }
    );
}
const Bc = D.createContext(null);
function YC(e) {
    let t = od(),
        { portalContainer: n = t ? null : document.body, isExiting: r } = e,
        [o, i] = b.useState(!1),
        s = b.useMemo(() => ({ contain: o, setContain: i }), [o, i]);
    if (!n) return null;
    let a;
    return (
        e.disableFocusManagement
            ? (a = D.createElement(Bc.Provider, { value: s }, e.children))
            : (a = D.createElement(
                  Bc.Provider,
                  { value: s },
                  D.createElement(
                      g8,
                      { restoreFocus: !0, contain: o && !r },
                      e.children,
                  ),
              )),
        k4.createPortal(a, n)
    );
}
function ZC() {
    let e = b.useContext(Bc),
        t = e == null ? void 0 : e.setContain;
    Be(() => {
        t == null || t(!0);
    }, [t]);
}
var F8 = ({ children: e, locale: t = 'en' }) =>
        C.jsx(Hx, { locale: t, children: C.jsx(R8, { children: e }) }),
    w2 = [
        '0',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        '1',
        '2',
        '3',
        '3.5',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '20',
        '24',
        '28',
        '32',
        '36',
        '40',
        '44',
        '48',
        '52',
        '56',
        '60',
        '64',
        '72',
        '80',
        '96',
    ],
    XC = w2.map((e) => `unit-${e}`),
    A8 = (e) => ({
        color: `hsl(var(--${e}-foreground))`,
        backgroundColor: `hsl(var(--${e}-background))`,
    }),
    ek = [
        'outline-none',
        'data-[focus-visible=true]:z-10',
        'data-[focus-visible=true]:outline-2',
        'data-[focus-visible=true]:outline-focus',
        'data-[focus-visible=true]:outline-offset-2',
    ],
    tk = [
        'absolute',
        'top-1/2',
        'left-1/2',
        '-translate-x-1/2',
        '-translate-y-1/2',
    ],
    j8 = (e) => e === 'light' || e === 'dark',
    I8 = [1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    M8 = [20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96],
    z8 = (e) => {
        const t = {
                xs: 2,
                sm: 3,
                md: 4,
                lg: 5.5,
                xl: 9,
                '2xl': 12,
                '3xl': 20,
                '4xl': 30,
                '5xl': 56,
                '6xl': 72,
                '7xl': 96,
                '8xl': 128,
                '9xl': 160,
            },
            n = { 0: '0px' };
        return (
            Object.entries(t).forEach(([r, o]) => {
                n[r] = o ? `${e * o}px` : `${e}px`;
            }),
            I8.forEach((r) => {
                let o = `${r}`;
                if (o.includes('.')) {
                    const [i, s] = o.split('.');
                    o = `${i}_${s}`;
                }
                n[o] = `${e * r}px`;
            }),
            M8.forEach((r) => {
                const o = `${r}`;
                n[o] = `${e * r}px`;
            }),
            n
        );
    };
function D8(e) {
    return w2.reduce((n, r) => {
        let o = `var(--${e}-spacing-unit-${r})`;
        if (r.includes('.')) {
            const [i, s] = r.split('.');
            o = `var(--${e}-spacing-unit-${i}_${s})`;
        }
        return { ...n, [`unit-${r}`]: o };
    }, {});
}
var U8 = {
        '.leading-inherit': { 'line-height': 'inherit' },
        '.bg-img-inherit': { 'background-image': 'inherit' },
        '.bg-clip-inherit': { 'background-clip': 'inherit' },
        '.text-fill-inherit': { '-webkit-text-fill-color': 'inherit' },
        '.tap-highlight-transparent': {
            '-webkit-tap-highlight-color': 'transparent',
        },
    },
    B8 = {
        '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': { display: 'none' },
        },
        '.scrollbar-default': {
            '-ms-overflow-style': 'auto',
            'scrollbar-width': 'auto',
            '&::-webkit-scrollbar': { display: 'block' },
        },
    },
    Je = '250ms',
    H8 = {
        '.transition-all': {
            'transition-property': 'all',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-background': {
            'transition-property': 'background',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition': {
            'transition-property':
                'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-colors': {
            'transition-property':
                'color, background-color, border-color, text-decoration-color, fill, stroke',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-opacity': {
            'transition-property': 'opacity',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-colors-opacity': {
            'transition-property':
                'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-width': {
            'transition-property': 'width',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-height': {
            'transition-property': 'height',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-left': {
            'transition-property': 'left',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-shadow': {
            'transition-property': 'box-shadow',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-transform': {
            'transition-property': 'transform',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-transform-opacity': {
            'transition-property': 'transform, opacity',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-transform-background': {
            'transition-property': 'transform, background',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
        '.transition-transform-colors': {
            ' transition-property':
                'transform, color, background, background-color, border-color, text-decoration-color, fill, stroke',
            'transition-timing-function': 'ease',
            'transition-duration': Je,
        },
    },
    V8 = { ...U8, ...H8, ...B8 },
    K8 = Pi;
Pi.flatten = Pi;
Pi.unflatten = S2;
function x2(e) {
    return (
        e &&
        e.constructor &&
        typeof e.constructor.isBuffer == 'function' &&
        e.constructor.isBuffer(e)
    );
}
function b2(e) {
    return e;
}
function Pi(e, t) {
    t = t || {};
    const n = t.delimiter || '.',
        r = t.maxDepth,
        o = t.transformKey || b2,
        i = {};
    function s(a, l, u) {
        (u = u || 1),
            Object.keys(a).forEach(function (c) {
                const f = a[c],
                    d = t.safe && Array.isArray(f),
                    v = Object.prototype.toString.call(f),
                    g = x2(f),
                    x = v === '[object Object]' || v === '[object Array]',
                    $ = l ? l + n + o(c) : o(c);
                if (
                    !d &&
                    !g &&
                    x &&
                    Object.keys(f).length &&
                    (!t.maxDepth || u < r)
                )
                    return s(f, $, u + 1);
                i[$] = f;
            });
    }
    return s(e), i;
}
function S2(e, t) {
    t = t || {};
    const n = t.delimiter || '.',
        r = t.overwrite || !1,
        o = t.transformKey || b2,
        i = {};
    if (x2(e) || Object.prototype.toString.call(e) !== '[object Object]')
        return e;
    function a(c) {
        const f = Number(c);
        return isNaN(f) || c.indexOf('.') !== -1 || t.object ? c : f;
    }
    function l(c, f, d) {
        return Object.keys(d).reduce(function (v, g) {
            return (v[c + n + g] = d[g]), v;
        }, f);
    }
    function u(c) {
        const f = Object.prototype.toString.call(c),
            d = f === '[object Array]',
            v = f === '[object Object]';
        if (c) {
            if (d) return !c.length;
            if (v) return !Object.keys(c).length;
        } else return !0;
    }
    return (
        (e = Object.keys(e).reduce(function (c, f) {
            const d = Object.prototype.toString.call(e[f]);
            return !(d === '[object Object]' || d === '[object Array]') ||
                u(e[f])
                ? ((c[f] = e[f]), c)
                : l(f, c, Pi(e[f], t));
        }, {})),
        Object.keys(e).forEach(function (c) {
            const f = c.split(n).map(o);
            let d = a(f.shift()),
                v = a(f[0]),
                g = i;
            for (; v !== void 0; ) {
                if (d === '__proto__') return;
                const x = Object.prototype.toString.call(g[d]),
                    $ = x === '[object Object]' || x === '[object Array]';
                if (!r && !$ && typeof g[d] < 'u') return;
                ((r && !$) || (!r && g[d] == null)) &&
                    (g[d] = typeof v == 'number' && !t.object ? [] : {}),
                    (g = g[d]),
                    f.length > 0 && ((d = a(f.shift())), (v = a(f[0])));
            }
            g[d] = S2(e[c], t);
        }),
        i
    );
}
const W8 = Et(K8);
function Zn(e) {
    const t = {},
        n = Object.keys(e),
        r = n.length;
    for (let o = 0; o < r / 2; o++) {
        const i = n[o],
            s = n[r - 1 - o];
        (t[i] = e[s]), (t[s] = e[i]);
    }
    if (r % 2 !== 0) {
        const o = n[Math.floor(r / 2)];
        t[o] = e[o];
    }
    return t;
}
function G8(e) {
    const t = {};
    for (const n in e) {
        if (n.endsWith('-DEFAULT')) {
            t[n.replace('-DEFAULT', '')] = e[n];
            continue;
        }
        t[n] = e[n];
    }
    return t;
}
var q8 = (e) => G8(W8(e, { safe: !0, delimiter: '-' })),
    Q8 = {
        50: '#fefce8',
        100: '#fdedd3',
        200: '#fbdba7',
        300: '#f9c97c',
        400: '#f7b750',
        500: '#f5a524',
        600: '#c4841d',
        700: '#936316',
        800: '#62420e',
        900: '#312107',
    },
    J8 = {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
    },
    Y8 = {
        50: '#F0FCFF',
        100: '#E6FAFE',
        200: '#D7F8FE',
        300: '#C3F4FD',
        400: '#A5EEFD',
        500: '#7EE7FC',
        600: '#06B7DB',
        700: '#09AACD',
        800: '#0E8AAA',
        900: '#053B48',
    },
    Z8 = {
        50: '#e8faf0',
        100: '#d1f4e0',
        200: '#a2e9c1',
        300: '#74dfa2',
        400: '#45d483',
        500: '#17c964',
        600: '#12a150',
        700: '#0e793c',
        800: '#095028',
        900: '#052814',
    },
    X8 = {
        50: '#ffedfa',
        100: '#ffdcf5',
        200: '#ffb8eb',
        300: '#ff95e1',
        400: '#ff71d7',
        500: '#ff4ecd',
        600: '#cc3ea4',
        700: '#992f7b',
        800: '#661f52',
        900: '#331029',
    },
    eb = {
        50: '#f2eafa',
        100: '#e4d4f4',
        200: '#c9a9e9',
        300: '#ae7ede',
        400: '#9353d3',
        500: '#7828c8',
        600: '#6020a0',
        700: '#481878',
        800: '#301050',
        900: '#180828',
    },
    tb = {
        50: '#fee7ef',
        100: '#fdd0df',
        200: '#faa0bf',
        300: '#f871a0',
        400: '#f54180',
        500: '#f31260',
        600: '#c20e4d',
        700: '#920b3a',
        800: '#610726',
        900: '#310413',
    },
    nb = {
        50: '#e6f1fe',
        100: '#cce3fd',
        200: '#99c7fb',
        300: '#66aaf9',
        400: '#338ef7',
        500: '#006FEE',
        600: '#005bc4',
        700: '#004493',
        800: '#002e62',
        900: '#001731',
    },
    H = {
        white: '#ffffff',
        black: '#000000',
        blue: nb,
        green: Z8,
        pink: X8,
        purple: eb,
        red: tb,
        yellow: Q8,
        cyan: Y8,
        zinc: J8,
    };
function Dp(e, t, n) {
    return Math.min(Math.max(e, n), t);
}
class rb extends Error {
    constructor(t) {
        super(`Failed to parse color: "${t}"`);
    }
}
var Vo = rb;
function ob(e) {
    if (typeof e != 'string') throw new Vo(e);
    if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
    let t = e.trim();
    t = db.test(e) ? ab(e) : e;
    const n = lb.exec(t);
    if (n) {
        const s = Array.from(n).slice(1);
        return [
            ...s.slice(0, 3).map((a) => parseInt(Oi(a, 2), 16)),
            parseInt(Oi(s[3] || 'f', 2), 16) / 255,
        ];
    }
    const r = ub.exec(t);
    if (r) {
        const s = Array.from(r).slice(1);
        return [
            ...s.slice(0, 3).map((a) => parseInt(a, 16)),
            parseInt(s[3] || 'ff', 16) / 255,
        ];
    }
    const o = cb.exec(t);
    if (o) {
        const s = Array.from(o).slice(1);
        return [
            ...s.slice(0, 3).map((a) => parseInt(a, 10)),
            parseFloat(s[3] || '1'),
        ];
    }
    const i = fb.exec(t);
    if (i) {
        const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
        if (Dp(0, 100, a) !== a) throw new Vo(e);
        if (Dp(0, 100, l) !== l) throw new Vo(e);
        return [...pb(s, a, l), Number.isNaN(u) ? 1 : u];
    }
    throw new Vo(e);
}
function ib(e) {
    let t = 5381,
        n = e.length;
    for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
    return (t >>> 0) % 2341;
}
const Up = (e) => parseInt(e.replace(/_/g, ''), 36),
    sb =
        '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
            .split(' ')
            .reduce((e, t) => {
                const n = Up(t.substring(0, 3)),
                    r = Up(t.substring(3)).toString(16);
                let o = '';
                for (let i = 0; i < 6 - r.length; i++) o += '0';
                return (e[n] = `${o}${r}`), e;
            }, {});
function ab(e) {
    const t = e.toLowerCase().trim(),
        n = sb[ib(t)];
    if (!n) throw new Vo(e);
    return `#${n}`;
}
const Oi = (e, t) =>
        Array.from(Array(t))
            .map(() => e)
            .join(''),
    lb = new RegExp(`^#${Oi('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
    ub = new RegExp(`^#${Oi('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
    cb = new RegExp(
        `^rgba?\\(\\s*(\\d+)\\s*${Oi(
            ',\\s*(\\d+)\\s*',
            2,
        )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
        'i',
    ),
    fb =
        /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
    db = /^[a-z]+$/i,
    Bp = (e) => Math.round(e * 255),
    pb = (e, t, n) => {
        let r = n / 100;
        if (t === 0) return [r, r, r].map(Bp);
        const o = (((e % 360) + 360) % 360) / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            s = i * (1 - Math.abs((o % 2) - 1));
        let a = 0,
            l = 0,
            u = 0;
        o >= 0 && o < 1
            ? ((a = i), (l = s))
            : o >= 1 && o < 2
            ? ((a = s), (l = i))
            : o >= 2 && o < 3
            ? ((l = i), (u = s))
            : o >= 3 && o < 4
            ? ((l = s), (u = i))
            : o >= 4 && o < 5
            ? ((a = s), (u = i))
            : o >= 5 && o < 6 && ((a = i), (u = s));
        const c = r - i / 2,
            f = a + c,
            d = l + c,
            v = u + c;
        return [f, d, v].map(Bp);
    };
function hb(e) {
    if (e === 'transparent') return 0;
    function t(i) {
        const s = i / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const [n, r, o] = ob(e);
    return 0.2126 * t(n) + 0.7152 * t(r) + 0.0722 * t(o);
}
function gb(e) {
    return hb(e) > 0.179;
}
function Ft(e) {
    return gb(e) ? '#000' : '#fff';
}
var E2 = {
        light: {
            background: { DEFAULT: '#FFFFFF' },
            foreground: { ...H.zinc, DEFAULT: '#11181C' },
            divider: { DEFAULT: 'rgba(17, 17, 17, 0.15)' },
            focus: { DEFAULT: H.blue[500] },
            overlay: { DEFAULT: '#000000' },
            content1: { DEFAULT: '#FFFFFF', foreground: '#11181C' },
            content2: { DEFAULT: H.zinc[100], foreground: H.zinc[800] },
            content3: { DEFAULT: H.zinc[200], foreground: H.zinc[700] },
            content4: { DEFAULT: H.zinc[300], foreground: H.zinc[600] },
        },
        dark: {
            background: { DEFAULT: '#000000' },
            foreground: { ...Zn(H.zinc), DEFAULT: '#ECEDEE' },
            focus: { DEFAULT: H.blue[500] },
            overlay: { DEFAULT: '#000000' },
            divider: { DEFAULT: 'rgba(255, 255, 255, 0.15)' },
            content1: { DEFAULT: H.zinc[900], foreground: H.zinc[50] },
            content2: { DEFAULT: H.zinc[800], foreground: H.zinc[100] },
            content3: { DEFAULT: H.zinc[700], foreground: H.zinc[200] },
            content4: { DEFAULT: H.zinc[600], foreground: H.zinc[300] },
        },
    },
    mb = {
        ...E2.light,
        default: {
            ...H.zinc,
            foreground: Ft(H.zinc[300]),
            DEFAULT: H.zinc[300],
        },
        primary: {
            ...H.blue,
            foreground: Ft(H.blue[500]),
            DEFAULT: H.blue[500],
        },
        secondary: {
            ...H.purple,
            foreground: Ft(H.purple[500]),
            DEFAULT: H.purple[500],
        },
        success: {
            ...H.green,
            foreground: Ft(H.green[500]),
            DEFAULT: H.green[500],
        },
        warning: {
            ...H.yellow,
            foreground: Ft(H.yellow[500]),
            DEFAULT: H.yellow[500],
        },
        danger: { ...H.red, foreground: H.white, DEFAULT: H.red[500] },
    },
    vb = {
        ...E2.dark,
        default: {
            ...Zn(H.zinc),
            foreground: Ft(H.zinc[700]),
            DEFAULT: H.zinc[700],
        },
        primary: {
            ...Zn(H.blue),
            foreground: Ft(H.blue[500]),
            DEFAULT: H.blue[500],
        },
        secondary: {
            ...Zn(H.purple),
            foreground: Ft(H.purple[400]),
            DEFAULT: H.purple[400],
        },
        success: {
            ...Zn(H.green),
            foreground: Ft(H.green[500]),
            DEFAULT: H.green[500],
        },
        warning: {
            ...Zn(H.yellow),
            foreground: Ft(H.yellow[500]),
            DEFAULT: H.yellow[500],
        },
        danger: { ...Zn(H.red), foreground: H.white, DEFAULT: H.red[500] },
    },
    vu = { light: mb, dark: vb },
    Hp = {
        spacingUnit: 4,
        disabledOpacity: '.5',
        dividerWeight: '1px',
        fontSize: {
            tiny: '0.75rem',
            small: '0.875rem',
            medium: '1rem',
            large: '1.125rem',
        },
        lineHeight: {
            tiny: '1rem',
            small: '1.25rem',
            medium: '1.5rem',
            large: '1.75rem',
        },
        radius: { small: '8px', medium: '12px', large: '14px' },
        borderWidth: { small: '1px', medium: '2px', large: '3px' },
        boxShadow: {
            small: '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            medium: '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            large: '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
        },
    },
    yb = {},
    wb = {
        boxShadow: {
            small: '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            medium: '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            large: '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
        },
    },
    xb = {
        animation: {
            'drip-expand': 'drip-expand 420ms linear',
            'spinner-ease-spin': 'spinner-spin 0.8s ease infinite',
            'spinner-linear-spin': 'spinner-spin 0.8s linear infinite',
            'appearance-in': 'appearance-in 250ms ease-out normal both',
            'appearance-out': 'appearance-out 60ms ease-in normal both',
            'indeterminate-bar':
                'indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal none running',
        },
        keyframes: {
            shimmer: { '100%': { transform: 'translateX(100%)' } },
            'spinner-spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            },
            'drip-expand': {
                '0%': { opacity: '0.2', transform: 'scale(0)' },
                '100%': { opacity: '0', transform: 'scale(2)' },
            },
            'appearance-in': {
                '0%': { opacity: '0', transform: 'translateZ(0)  scale(0.95)' },
                '60%': {
                    opacity: '0.75',
                    backfaceVisibility: 'hidden',
                    webkitFontSmoothing: 'antialiased',
                    transform: 'translateZ(0) scale(1.05)',
                },
                '100%': { opacity: '1', transform: 'translateZ(0) scale(1)' },
            },
            'appearance-out': {
                '0%': { opacity: '1', transform: 'scale(1)' },
                '100%': { opacity: '0', transform: 'scale(0.85)' },
            },
            'indeterminate-bar': {
                '0%': { transform: 'translateX(-50%) scaleX(0.2)' },
                '100%': { transform: 'translateX(100%) scaleX(1)' },
            },
        },
    },
    $2 = { exports: {} },
    bb = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
    },
    C2 = { exports: {} },
    Sb = function (t) {
        return !t || typeof t == 'string'
            ? !1
            : t instanceof Array ||
                  Array.isArray(t) ||
                  (t.length >= 0 &&
                      (t.splice instanceof Function ||
                          (Object.getOwnPropertyDescriptor(t, t.length - 1) &&
                              t.constructor.name !== 'String')));
    },
    Eb = Sb,
    $b = Array.prototype.concat,
    Cb = Array.prototype.slice,
    Vp = (C2.exports = function (t) {
        for (var n = [], r = 0, o = t.length; r < o; r++) {
            var i = t[r];
            Eb(i) ? (n = $b.call(n, Cb.call(i))) : n.push(i);
        }
        return n;
    });
Vp.wrap = function (e) {
    return function () {
        return e(Vp(arguments));
    };
};
var kb = C2.exports,
    oi = bb,
    Ki = kb,
    k2 = Object.hasOwnProperty,
    T2 = Object.create(null);
for (var yu in oi) k2.call(oi, yu) && (T2[oi[yu]] = yu);
var at = ($2.exports = { to: {}, get: {} });
at.get = function (e) {
    var t = e.substring(0, 3).toLowerCase(),
        n,
        r;
    switch (t) {
        case 'hsl':
            (n = at.get.hsl(e)), (r = 'hsl');
            break;
        case 'hwb':
            (n = at.get.hwb(e)), (r = 'hwb');
            break;
        default:
            (n = at.get.rgb(e)), (r = 'rgb');
            break;
    }
    return n ? { model: r, value: n } : null;
};
at.get.rgb = function (e) {
    if (!e) return null;
    var t = /^#([a-f0-9]{3,4})$/i,
        n = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
        r =
            /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        o =
            /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        i = /^(\w+)$/,
        s = [0, 0, 0, 1],
        a,
        l,
        u;
    if ((a = e.match(n))) {
        for (u = a[2], a = a[1], l = 0; l < 3; l++) {
            var c = l * 2;
            s[l] = parseInt(a.slice(c, c + 2), 16);
        }
        u && (s[3] = parseInt(u, 16) / 255);
    } else if ((a = e.match(t))) {
        for (a = a[1], u = a[3], l = 0; l < 3; l++)
            s[l] = parseInt(a[l] + a[l], 16);
        u && (s[3] = parseInt(u + u, 16) / 255);
    } else if ((a = e.match(r))) {
        for (l = 0; l < 3; l++) s[l] = parseInt(a[l + 1], 0);
        a[4] &&
            (a[5]
                ? (s[3] = parseFloat(a[4]) * 0.01)
                : (s[3] = parseFloat(a[4])));
    } else if ((a = e.match(o))) {
        for (l = 0; l < 3; l++) s[l] = Math.round(parseFloat(a[l + 1]) * 2.55);
        a[4] &&
            (a[5]
                ? (s[3] = parseFloat(a[4]) * 0.01)
                : (s[3] = parseFloat(a[4])));
    } else
        return (a = e.match(i))
            ? a[1] === 'transparent'
                ? [0, 0, 0, 0]
                : k2.call(oi, a[1])
                ? ((s = oi[a[1]]), (s[3] = 1), s)
                : null
            : null;
    for (l = 0; l < 3; l++) s[l] = jn(s[l], 0, 255);
    return (s[3] = jn(s[3], 0, 1)), s;
};
at.get.hsl = function (e) {
    if (!e) return null;
    var t =
            /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        n = e.match(t);
    if (n) {
        var r = parseFloat(n[4]),
            o = ((parseFloat(n[1]) % 360) + 360) % 360,
            i = jn(parseFloat(n[2]), 0, 100),
            s = jn(parseFloat(n[3]), 0, 100),
            a = jn(isNaN(r) ? 1 : r, 0, 1);
        return [o, i, s, a];
    }
    return null;
};
at.get.hwb = function (e) {
    if (!e) return null;
    var t =
            /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        n = e.match(t);
    if (n) {
        var r = parseFloat(n[4]),
            o = ((parseFloat(n[1]) % 360) + 360) % 360,
            i = jn(parseFloat(n[2]), 0, 100),
            s = jn(parseFloat(n[3]), 0, 100),
            a = jn(isNaN(r) ? 1 : r, 0, 1);
        return [o, i, s, a];
    }
    return null;
};
at.to.hex = function () {
    var e = Ki(arguments);
    return (
        '#' +
        Os(e[0]) +
        Os(e[1]) +
        Os(e[2]) +
        (e[3] < 1 ? Os(Math.round(e[3] * 255)) : '')
    );
};
at.to.rgb = function () {
    var e = Ki(arguments);
    return e.length < 4 || e[3] === 1
        ? 'rgb(' +
              Math.round(e[0]) +
              ', ' +
              Math.round(e[1]) +
              ', ' +
              Math.round(e[2]) +
              ')'
        : 'rgba(' +
              Math.round(e[0]) +
              ', ' +
              Math.round(e[1]) +
              ', ' +
              Math.round(e[2]) +
              ', ' +
              e[3] +
              ')';
};
at.to.rgb.percent = function () {
    var e = Ki(arguments),
        t = Math.round((e[0] / 255) * 100),
        n = Math.round((e[1] / 255) * 100),
        r = Math.round((e[2] / 255) * 100);
    return e.length < 4 || e[3] === 1
        ? 'rgb(' + t + '%, ' + n + '%, ' + r + '%)'
        : 'rgba(' + t + '%, ' + n + '%, ' + r + '%, ' + e[3] + ')';
};
at.to.hsl = function () {
    var e = Ki(arguments);
    return e.length < 4 || e[3] === 1
        ? 'hsl(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%)'
        : 'hsla(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%, ' + e[3] + ')';
};
at.to.hwb = function () {
    var e = Ki(arguments),
        t = '';
    return (
        e.length >= 4 && e[3] !== 1 && (t = ', ' + e[3]),
        'hwb(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%' + t + ')'
    );
};
at.to.keyword = function (e) {
    return T2[e.slice(0, 3)];
};
function jn(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
function Os(e) {
    var t = Math.round(e).toString(16).toUpperCase();
    return t.length < 2 ? '0' + t : t;
}
var Tb = $2.exports,
    _b = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
    };
const Li = _b,
    _2 = {};
for (const e of Object.keys(Li)) _2[Li[e]] = e;
const U = {
    rgb: { channels: 3, labels: 'rgb' },
    hsl: { channels: 3, labels: 'hsl' },
    hsv: { channels: 3, labels: 'hsv' },
    hwb: { channels: 3, labels: 'hwb' },
    cmyk: { channels: 4, labels: 'cmyk' },
    xyz: { channels: 3, labels: 'xyz' },
    lab: { channels: 3, labels: 'lab' },
    lch: { channels: 3, labels: 'lch' },
    hex: { channels: 1, labels: ['hex'] },
    keyword: { channels: 1, labels: ['keyword'] },
    ansi16: { channels: 1, labels: ['ansi16'] },
    ansi256: { channels: 1, labels: ['ansi256'] },
    hcg: { channels: 3, labels: ['h', 'c', 'g'] },
    apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
    gray: { channels: 1, labels: ['gray'] },
};
var P2 = U;
for (const e of Object.keys(U)) {
    if (!('channels' in U[e]))
        throw new Error('missing channels property: ' + e);
    if (!('labels' in U[e]))
        throw new Error('missing channel labels property: ' + e);
    if (U[e].labels.length !== U[e].channels)
        throw new Error('channel and label counts mismatch: ' + e);
    const { channels: t, labels: n } = U[e];
    delete U[e].channels,
        delete U[e].labels,
        Object.defineProperty(U[e], 'channels', { value: t }),
        Object.defineProperty(U[e], 'labels', { value: n });
}
U.rgb.hsl = function (e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.min(t, n, r),
        i = Math.max(t, n, r),
        s = i - o;
    let a, l;
    i === o
        ? (a = 0)
        : t === i
        ? (a = (n - r) / s)
        : n === i
        ? (a = 2 + (r - t) / s)
        : r === i && (a = 4 + (t - n) / s),
        (a = Math.min(a * 60, 360)),
        a < 0 && (a += 360);
    const u = (o + i) / 2;
    return (
        i === o
            ? (l = 0)
            : u <= 0.5
            ? (l = s / (i + o))
            : (l = s / (2 - i - o)),
        [a, l * 100, u * 100]
    );
};
U.rgb.hsv = function (e) {
    let t, n, r, o, i;
    const s = e[0] / 255,
        a = e[1] / 255,
        l = e[2] / 255,
        u = Math.max(s, a, l),
        c = u - Math.min(s, a, l),
        f = function (d) {
            return (u - d) / 6 / c + 1 / 2;
        };
    return (
        c === 0
            ? ((o = 0), (i = 0))
            : ((i = c / u),
              (t = f(s)),
              (n = f(a)),
              (r = f(l)),
              s === u
                  ? (o = r - n)
                  : a === u
                  ? (o = 1 / 3 + t - r)
                  : l === u && (o = 2 / 3 + n - t),
              o < 0 ? (o += 1) : o > 1 && (o -= 1)),
        [o * 360, i * 100, u * 100]
    );
};
U.rgb.hwb = function (e) {
    const t = e[0],
        n = e[1];
    let r = e[2];
    const o = U.rgb.hsl(e)[0],
        i = (1 / 255) * Math.min(t, Math.min(n, r));
    return (
        (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))), [o, i * 100, r * 100]
    );
};
U.rgb.cmyk = function (e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.min(1 - t, 1 - n, 1 - r),
        i = (1 - t - o) / (1 - o) || 0,
        s = (1 - n - o) / (1 - o) || 0,
        a = (1 - r - o) / (1 - o) || 0;
    return [i * 100, s * 100, a * 100, o * 100];
};
function Pb(e, t) {
    return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
U.rgb.keyword = function (e) {
    const t = _2[e];
    if (t) return t;
    let n = 1 / 0,
        r;
    for (const o of Object.keys(Li)) {
        const i = Li[o],
            s = Pb(e, i);
        s < n && ((n = s), (r = o));
    }
    return r;
};
U.keyword.rgb = function (e) {
    return Li[e];
};
U.rgb.xyz = function (e) {
    let t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255;
    (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92);
    const o = t * 0.4124 + n * 0.3576 + r * 0.1805,
        i = t * 0.2126 + n * 0.7152 + r * 0.0722,
        s = t * 0.0193 + n * 0.1192 + r * 0.9505;
    return [o * 100, i * 100, s * 100];
};
U.rgb.lab = function (e) {
    const t = U.rgb.xyz(e);
    let n = t[0],
        r = t[1],
        o = t[2];
    (n /= 95.047),
        (r /= 100),
        (o /= 108.883),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116);
    const i = 116 * r - 16,
        s = 500 * (n - r),
        a = 200 * (r - o);
    return [i, s, a];
};
U.hsl.rgb = function (e) {
    const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    let o, i, s;
    if (n === 0) return (s = r * 255), [s, s, s];
    r < 0.5 ? (o = r * (1 + n)) : (o = r + n - r * n);
    const a = 2 * r - o,
        l = [0, 0, 0];
    for (let u = 0; u < 3; u++)
        (i = t + (1 / 3) * -(u - 1)),
            i < 0 && i++,
            i > 1 && i--,
            6 * i < 1
                ? (s = a + (o - a) * 6 * i)
                : 2 * i < 1
                ? (s = o)
                : 3 * i < 2
                ? (s = a + (o - a) * (2 / 3 - i) * 6)
                : (s = a),
            (l[u] = s * 255);
    return l;
};
U.hsl.hsv = function (e) {
    const t = e[0];
    let n = e[1] / 100,
        r = e[2] / 100,
        o = n;
    const i = Math.max(r, 0.01);
    (r *= 2), (n *= r <= 1 ? r : 2 - r), (o *= i <= 1 ? i : 2 - i);
    const s = (r + n) / 2,
        a = r === 0 ? (2 * o) / (i + o) : (2 * n) / (r + n);
    return [t, a * 100, s * 100];
};
U.hsv.rgb = function (e) {
    const t = e[0] / 60,
        n = e[1] / 100;
    let r = e[2] / 100;
    const o = Math.floor(t) % 6,
        i = t - Math.floor(t),
        s = 255 * r * (1 - n),
        a = 255 * r * (1 - n * i),
        l = 255 * r * (1 - n * (1 - i));
    switch (((r *= 255), o)) {
        case 0:
            return [r, l, s];
        case 1:
            return [a, r, s];
        case 2:
            return [s, r, l];
        case 3:
            return [s, a, r];
        case 4:
            return [l, s, r];
        case 5:
            return [r, s, a];
    }
};
U.hsv.hsl = function (e) {
    const t = e[0],
        n = e[1] / 100,
        r = e[2] / 100,
        o = Math.max(r, 0.01);
    let i, s;
    s = (2 - n) * r;
    const a = (2 - n) * o;
    return (
        (i = n * o),
        (i /= a <= 1 ? a : 2 - a),
        (i = i || 0),
        (s /= 2),
        [t, i * 100, s * 100]
    );
};
U.hwb.rgb = function (e) {
    const t = e[0] / 360;
    let n = e[1] / 100,
        r = e[2] / 100;
    const o = n + r;
    let i;
    o > 1 && ((n /= o), (r /= o));
    const s = Math.floor(6 * t),
        a = 1 - r;
    (i = 6 * t - s), s & 1 && (i = 1 - i);
    const l = n + i * (a - n);
    let u, c, f;
    switch (s) {
        default:
        case 6:
        case 0:
            (u = a), (c = l), (f = n);
            break;
        case 1:
            (u = l), (c = a), (f = n);
            break;
        case 2:
            (u = n), (c = a), (f = l);
            break;
        case 3:
            (u = n), (c = l), (f = a);
            break;
        case 4:
            (u = l), (c = n), (f = a);
            break;
        case 5:
            (u = a), (c = n), (f = l);
            break;
    }
    return [u * 255, c * 255, f * 255];
};
U.cmyk.rgb = function (e) {
    const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100,
        o = e[3] / 100,
        i = 1 - Math.min(1, t * (1 - o) + o),
        s = 1 - Math.min(1, n * (1 - o) + o),
        a = 1 - Math.min(1, r * (1 - o) + o);
    return [i * 255, s * 255, a * 255];
};
U.xyz.rgb = function (e) {
    const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100;
    let o, i, s;
    return (
        (o = t * 3.2406 + n * -1.5372 + r * -0.4986),
        (i = t * -0.9689 + n * 1.8758 + r * 0.0415),
        (s = t * 0.0557 + n * -0.204 + r * 1.057),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        (s = Math.min(Math.max(0, s), 1)),
        [o * 255, i * 255, s * 255]
    );
};
U.xyz.lab = function (e) {
    let t = e[0],
        n = e[1],
        r = e[2];
    (t /= 95.047),
        (n /= 100),
        (r /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116);
    const o = 116 * n - 16,
        i = 500 * (t - n),
        s = 200 * (n - r);
    return [o, i, s];
};
U.lab.xyz = function (e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    let o, i, s;
    (i = (t + 16) / 116), (o = n / 500 + i), (s = i - r / 200);
    const a = i ** 3,
        l = o ** 3,
        u = s ** 3;
    return (
        (i = a > 0.008856 ? a : (i - 16 / 116) / 7.787),
        (o = l > 0.008856 ? l : (o - 16 / 116) / 7.787),
        (s = u > 0.008856 ? u : (s - 16 / 116) / 7.787),
        (o *= 95.047),
        (i *= 100),
        (s *= 108.883),
        [o, i, s]
    );
};
U.lab.lch = function (e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    let o;
    (o = (Math.atan2(r, n) * 360) / 2 / Math.PI), o < 0 && (o += 360);
    const s = Math.sqrt(n * n + r * r);
    return [t, s, o];
};
U.lch.lab = function (e) {
    const t = e[0],
        n = e[1],
        o = (e[2] / 360) * 2 * Math.PI,
        i = n * Math.cos(o),
        s = n * Math.sin(o);
    return [t, i, s];
};
U.rgb.ansi16 = function (e, t = null) {
    const [n, r, o] = e;
    let i = t === null ? U.rgb.hsv(e)[2] : t;
    if (((i = Math.round(i / 50)), i === 0)) return 30;
    let s =
        30 +
        ((Math.round(o / 255) << 2) |
            (Math.round(r / 255) << 1) |
            Math.round(n / 255));
    return i === 2 && (s += 60), s;
};
U.hsv.ansi16 = function (e) {
    return U.rgb.ansi16(U.hsv.rgb(e), e[2]);
};
U.rgb.ansi256 = function (e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    return t === n && n === r
        ? t < 8
            ? 16
            : t > 248
            ? 231
            : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
              36 * Math.round((t / 255) * 5) +
              6 * Math.round((n / 255) * 5) +
              Math.round((r / 255) * 5);
};
U.ansi16.rgb = function (e) {
    let t = e % 10;
    if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
    const n = (~~(e > 50) + 1) * 0.5,
        r = (t & 1) * n * 255,
        o = ((t >> 1) & 1) * n * 255,
        i = ((t >> 2) & 1) * n * 255;
    return [r, o, i];
};
U.ansi256.rgb = function (e) {
    if (e >= 232) {
        const i = (e - 232) * 10 + 8;
        return [i, i, i];
    }
    e -= 16;
    let t;
    const n = (Math.floor(e / 36) / 5) * 255,
        r = (Math.floor((t = e % 36) / 6) / 5) * 255,
        o = ((t % 6) / 5) * 255;
    return [n, r, o];
};
U.rgb.hex = function (e) {
    const n = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
    )
        .toString(16)
        .toUpperCase();
    return '000000'.substring(n.length) + n;
};
U.hex.rgb = function (e) {
    const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let n = t[0];
    t[0].length === 3 &&
        (n = n
            .split('')
            .map((a) => a + a)
            .join(''));
    const r = parseInt(n, 16),
        o = (r >> 16) & 255,
        i = (r >> 8) & 255,
        s = r & 255;
    return [o, i, s];
};
U.rgb.hcg = function (e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.max(Math.max(t, n), r),
        i = Math.min(Math.min(t, n), r),
        s = o - i;
    let a, l;
    return (
        s < 1 ? (a = i / (1 - s)) : (a = 0),
        s <= 0
            ? (l = 0)
            : o === t
            ? (l = ((n - r) / s) % 6)
            : o === n
            ? (l = 2 + (r - t) / s)
            : (l = 4 + (t - n) / s),
        (l /= 6),
        (l %= 1),
        [l * 360, s * 100, a * 100]
    );
};
U.hsl.hcg = function (e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n);
    let o = 0;
    return r < 1 && (o = (n - 0.5 * r) / (1 - r)), [e[0], r * 100, o * 100];
};
U.hsv.hcg = function (e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t * n;
    let o = 0;
    return r < 1 && (o = (n - r) / (1 - r)), [e[0], r * 100, o * 100];
};
U.hcg.rgb = function (e) {
    const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    if (n === 0) return [r * 255, r * 255, r * 255];
    const o = [0, 0, 0],
        i = (t % 1) * 6,
        s = i % 1,
        a = 1 - s;
    let l = 0;
    switch (Math.floor(i)) {
        case 0:
            (o[0] = 1), (o[1] = s), (o[2] = 0);
            break;
        case 1:
            (o[0] = a), (o[1] = 1), (o[2] = 0);
            break;
        case 2:
            (o[0] = 0), (o[1] = 1), (o[2] = s);
            break;
        case 3:
            (o[0] = 0), (o[1] = a), (o[2] = 1);
            break;
        case 4:
            (o[0] = s), (o[1] = 0), (o[2] = 1);
            break;
        default:
            (o[0] = 1), (o[1] = 0), (o[2] = a);
    }
    return (
        (l = (1 - n) * r),
        [(n * o[0] + l) * 255, (n * o[1] + l) * 255, (n * o[2] + l) * 255]
    );
};
U.hcg.hsv = function (e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t + n * (1 - t);
    let o = 0;
    return r > 0 && (o = t / r), [e[0], o * 100, r * 100];
};
U.hcg.hsl = function (e) {
    const t = e[1] / 100,
        r = (e[2] / 100) * (1 - t) + 0.5 * t;
    let o = 0;
    return (
        r > 0 && r < 0.5
            ? (o = t / (2 * r))
            : r >= 0.5 && r < 1 && (o = t / (2 * (1 - r))),
        [e[0], o * 100, r * 100]
    );
};
U.hcg.hwb = function (e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t + n * (1 - t);
    return [e[0], (r - t) * 100, (1 - r) * 100];
};
U.hwb.hcg = function (e) {
    const t = e[1] / 100,
        r = 1 - e[2] / 100,
        o = r - t;
    let i = 0;
    return o < 1 && (i = (r - o) / (1 - o)), [e[0], o * 100, i * 100];
};
U.apple.rgb = function (e) {
    return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
};
U.rgb.apple = function (e) {
    return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
};
U.gray.rgb = function (e) {
    return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
};
U.gray.hsl = function (e) {
    return [0, 0, e[0]];
};
U.gray.hsv = U.gray.hsl;
U.gray.hwb = function (e) {
    return [0, 100, e[0]];
};
U.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
};
U.gray.lab = function (e) {
    return [e[0], 0, 0];
};
U.gray.hex = function (e) {
    const t = Math.round((e[0] / 100) * 255) & 255,
        r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return '000000'.substring(r.length) + r;
};
U.rgb.gray = function (e) {
    return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
};
const Ra = P2;
function Ob() {
    const e = {},
        t = Object.keys(Ra);
    for (let n = t.length, r = 0; r < n; r++)
        e[t[r]] = { distance: -1, parent: null };
    return e;
}
function Lb(e) {
    const t = Ob(),
        n = [e];
    for (t[e].distance = 0; n.length; ) {
        const r = n.pop(),
            o = Object.keys(Ra[r]);
        for (let i = o.length, s = 0; s < i; s++) {
            const a = o[s],
                l = t[a];
            l.distance === -1 &&
                ((l.distance = t[r].distance + 1),
                (l.parent = r),
                n.unshift(a));
        }
    }
    return t;
}
function Nb(e, t) {
    return function (n) {
        return t(e(n));
    };
}
function Rb(e, t) {
    const n = [t[e].parent, e];
    let r = Ra[t[e].parent][e],
        o = t[e].parent;
    for (; t[o].parent; )
        n.unshift(t[o].parent),
            (r = Nb(Ra[t[o].parent][o], r)),
            (o = t[o].parent);
    return (r.conversion = n), r;
}
var Fb = function (e) {
    const t = Lb(e),
        n = {},
        r = Object.keys(t);
    for (let o = r.length, i = 0; i < o; i++) {
        const s = r[i];
        t[s].parent !== null && (n[s] = Rb(s, t));
    }
    return n;
};
const Hc = P2,
    Ab = Fb,
    Tr = {},
    jb = Object.keys(Hc);
function Ib(e) {
    const t = function (...n) {
        const r = n[0];
        return r == null ? r : (r.length > 1 && (n = r), e(n));
    };
    return 'conversion' in e && (t.conversion = e.conversion), t;
}
function Mb(e) {
    const t = function (...n) {
        const r = n[0];
        if (r == null) return r;
        r.length > 1 && (n = r);
        const o = e(n);
        if (typeof o == 'object')
            for (let i = o.length, s = 0; s < i; s++) o[s] = Math.round(o[s]);
        return o;
    };
    return 'conversion' in e && (t.conversion = e.conversion), t;
}
jb.forEach((e) => {
    (Tr[e] = {}),
        Object.defineProperty(Tr[e], 'channels', { value: Hc[e].channels }),
        Object.defineProperty(Tr[e], 'labels', { value: Hc[e].labels });
    const t = Ab(e);
    Object.keys(t).forEach((r) => {
        const o = t[r];
        (Tr[e][r] = Mb(o)), (Tr[e][r].raw = Ib(o));
    });
});
var zb = Tr;
const _r = Tb,
    it = zb,
    O2 = ['keyword', 'gray', 'hex'],
    Vc = {};
for (const e of Object.keys(it)) Vc[[...it[e].labels].sort().join('')] = e;
const Fa = {};
function Ne(e, t) {
    if (!(this instanceof Ne)) return new Ne(e, t);
    if ((t && t in O2 && (t = null), t && !(t in it)))
        throw new Error('Unknown model: ' + t);
    let n, r;
    if (e == null)
        (this.model = 'rgb'), (this.color = [0, 0, 0]), (this.valpha = 1);
    else if (e instanceof Ne)
        (this.model = e.model),
            (this.color = [...e.color]),
            (this.valpha = e.valpha);
    else if (typeof e == 'string') {
        const o = _r.get(e);
        if (o === null)
            throw new Error('Unable to parse color from string: ' + e);
        (this.model = o.model),
            (r = it[this.model].channels),
            (this.color = o.value.slice(0, r)),
            (this.valpha = typeof o.value[r] == 'number' ? o.value[r] : 1);
    } else if (e.length > 0) {
        (this.model = t || 'rgb'), (r = it[this.model].channels);
        const o = Array.prototype.slice.call(e, 0, r);
        (this.color = Kc(o, r)),
            (this.valpha = typeof e[r] == 'number' ? e[r] : 1);
    } else if (typeof e == 'number')
        (this.model = 'rgb'),
            (this.color = [(e >> 16) & 255, (e >> 8) & 255, e & 255]),
            (this.valpha = 1);
    else {
        this.valpha = 1;
        const o = Object.keys(e);
        'alpha' in e &&
            (o.splice(o.indexOf('alpha'), 1),
            (this.valpha = typeof e.alpha == 'number' ? e.alpha : 0));
        const i = o.sort().join('');
        if (!(i in Vc))
            throw new Error(
                'Unable to parse color from object: ' + JSON.stringify(e),
            );
        this.model = Vc[i];
        const { labels: s } = it[this.model],
            a = [];
        for (n = 0; n < s.length; n++) a.push(e[s[n]]);
        this.color = Kc(a);
    }
    if (Fa[this.model])
        for (r = it[this.model].channels, n = 0; n < r; n++) {
            const o = Fa[this.model][n];
            o && (this.color[n] = o(this.color[n]));
        }
    (this.valpha = Math.max(0, Math.min(1, this.valpha))),
        Object.freeze && Object.freeze(this);
}
Ne.prototype = {
    toString() {
        return this.string();
    },
    toJSON() {
        return this[this.model]();
    },
    string(e) {
        let t = this.model in _r.to ? this : this.rgb();
        t = t.round(typeof e == 'number' ? e : 1);
        const n = t.valpha === 1 ? t.color : [...t.color, this.valpha];
        return _r.to[t.model](n);
    },
    percentString(e) {
        const t = this.rgb().round(typeof e == 'number' ? e : 1),
            n = t.valpha === 1 ? t.color : [...t.color, this.valpha];
        return _r.to.rgb.percent(n);
    },
    array() {
        return this.valpha === 1
            ? [...this.color]
            : [...this.color, this.valpha];
    },
    object() {
        const e = {},
            { channels: t } = it[this.model],
            { labels: n } = it[this.model];
        for (let r = 0; r < t; r++) e[n[r]] = this.color[r];
        return this.valpha !== 1 && (e.alpha = this.valpha), e;
    },
    unitArray() {
        const e = this.rgb().color;
        return (
            (e[0] /= 255),
            (e[1] /= 255),
            (e[2] /= 255),
            this.valpha !== 1 && e.push(this.valpha),
            e
        );
    },
    unitObject() {
        const e = this.rgb().object();
        return (
            (e.r /= 255),
            (e.g /= 255),
            (e.b /= 255),
            this.valpha !== 1 && (e.alpha = this.valpha),
            e
        );
    },
    round(e) {
        return (
            (e = Math.max(e || 0, 0)),
            new Ne([...this.color.map(Ub(e)), this.valpha], this.model)
        );
    },
    alpha(e) {
        return e !== void 0
            ? new Ne([...this.color, Math.max(0, Math.min(1, e))], this.model)
            : this.valpha;
    },
    red: me('rgb', 0, Ce(255)),
    green: me('rgb', 1, Ce(255)),
    blue: me('rgb', 2, Ce(255)),
    hue: me(
        ['hsl', 'hsv', 'hsl', 'hwb', 'hcg'],
        0,
        (e) => ((e % 360) + 360) % 360,
    ),
    saturationl: me('hsl', 1, Ce(100)),
    lightness: me('hsl', 2, Ce(100)),
    saturationv: me('hsv', 1, Ce(100)),
    value: me('hsv', 2, Ce(100)),
    chroma: me('hcg', 1, Ce(100)),
    gray: me('hcg', 2, Ce(100)),
    white: me('hwb', 1, Ce(100)),
    wblack: me('hwb', 2, Ce(100)),
    cyan: me('cmyk', 0, Ce(100)),
    magenta: me('cmyk', 1, Ce(100)),
    yellow: me('cmyk', 2, Ce(100)),
    black: me('cmyk', 3, Ce(100)),
    x: me('xyz', 0, Ce(95.047)),
    y: me('xyz', 1, Ce(100)),
    z: me('xyz', 2, Ce(108.833)),
    l: me('lab', 0, Ce(100)),
    a: me('lab', 1),
    b: me('lab', 2),
    keyword(e) {
        return e !== void 0 ? new Ne(e) : it[this.model].keyword(this.color);
    },
    hex(e) {
        return e !== void 0 ? new Ne(e) : _r.to.hex(this.rgb().round().color);
    },
    hexa(e) {
        if (e !== void 0) return new Ne(e);
        const t = this.rgb().round().color;
        let n = Math.round(this.valpha * 255)
            .toString(16)
            .toUpperCase();
        return n.length === 1 && (n = '0' + n), _r.to.hex(t) + n;
    },
    rgbNumber() {
        const e = this.rgb().color;
        return ((e[0] & 255) << 16) | ((e[1] & 255) << 8) | (e[2] & 255);
    },
    luminosity() {
        const e = this.rgb().color,
            t = [];
        for (const [n, r] of e.entries()) {
            const o = r / 255;
            t[n] = o <= 0.04045 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
    },
    contrast(e) {
        const t = this.luminosity(),
            n = e.luminosity();
        return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
    },
    level(e) {
        const t = this.contrast(e);
        return t >= 7 ? 'AAA' : t >= 4.5 ? 'AA' : '';
    },
    isDark() {
        const e = this.rgb().color;
        return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 1e4 < 128;
    },
    isLight() {
        return !this.isDark();
    },
    negate() {
        const e = this.rgb();
        for (let t = 0; t < 3; t++) e.color[t] = 255 - e.color[t];
        return e;
    },
    lighten(e) {
        const t = this.hsl();
        return (t.color[2] += t.color[2] * e), t;
    },
    darken(e) {
        const t = this.hsl();
        return (t.color[2] -= t.color[2] * e), t;
    },
    saturate(e) {
        const t = this.hsl();
        return (t.color[1] += t.color[1] * e), t;
    },
    desaturate(e) {
        const t = this.hsl();
        return (t.color[1] -= t.color[1] * e), t;
    },
    whiten(e) {
        const t = this.hwb();
        return (t.color[1] += t.color[1] * e), t;
    },
    blacken(e) {
        const t = this.hwb();
        return (t.color[2] += t.color[2] * e), t;
    },
    grayscale() {
        const e = this.rgb().color,
            t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
        return Ne.rgb(t, t, t);
    },
    fade(e) {
        return this.alpha(this.valpha - this.valpha * e);
    },
    opaquer(e) {
        return this.alpha(this.valpha + this.valpha * e);
    },
    rotate(e) {
        const t = this.hsl();
        let n = t.color[0];
        return (
            (n = (n + e) % 360), (n = n < 0 ? 360 + n : n), (t.color[0] = n), t
        );
    },
    mix(e, t) {
        if (!e || !e.rgb)
            throw new Error(
                'Argument to "mix" was not a Color instance, but rather an instance of ' +
                    typeof e,
            );
        const n = e.rgb(),
            r = this.rgb(),
            o = t === void 0 ? 0.5 : t,
            i = 2 * o - 1,
            s = n.alpha() - r.alpha(),
            a = ((i * s === -1 ? i : (i + s) / (1 + i * s)) + 1) / 2,
            l = 1 - a;
        return Ne.rgb(
            a * n.red() + l * r.red(),
            a * n.green() + l * r.green(),
            a * n.blue() + l * r.blue(),
            n.alpha() * o + r.alpha() * (1 - o),
        );
    },
};
for (const e of Object.keys(it)) {
    if (O2.includes(e)) continue;
    const { channels: t } = it[e];
    (Ne.prototype[e] = function (...n) {
        return this.model === e
            ? new Ne(this)
            : n.length > 0
            ? new Ne(n, e)
            : new Ne(
                  [...Bb(it[this.model][e].raw(this.color)), this.valpha],
                  e,
              );
    }),
        (Ne[e] = function (...n) {
            let r = n[0];
            return typeof r == 'number' && (r = Kc(n, t)), new Ne(r, e);
        });
}
function Db(e, t) {
    return Number(e.toFixed(t));
}
function Ub(e) {
    return function (t) {
        return Db(t, e);
    };
}
function me(e, t, n) {
    e = Array.isArray(e) ? e : [e];
    for (const r of e) (Fa[r] || (Fa[r] = []))[t] = n;
    return (
        (e = e[0]),
        function (r) {
            let o;
            return r !== void 0
                ? (n && (r = n(r)), (o = this[e]()), (o.color[t] = r), o)
                : ((o = this[e]().color[t]), n && (o = n(o)), o);
        }
    );
}
function Ce(e) {
    return function (t) {
        return Math.max(0, Math.min(e, t));
    };
}
function Bb(e) {
    return Array.isArray(e) ? e : [e];
}
function Kc(e, t) {
    for (let n = 0; n < t; n++) typeof e[n] != 'number' && (e[n] = 0);
    return e;
}
var Hb = Ne;
const Vb = Et(Hb);
var L2 = {},
    N2 = {};
(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
                return n;
            },
        });
    function t(r, o) {
        return { handler: r, config: o };
    }
    t.withOptions = function (r, o = () => ({})) {
        const i = function (s) {
            return { __options: s, handler: r(s), config: o(s) };
        };
        return (
            (i.__isOptionsFunction = !0),
            (i.__pluginFunction = r),
            (i.__configFunction = o),
            i
        );
    };
    const n = t;
})(N2);
(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
                return r;
            },
        });
    const t = n(N2);
    function n(o) {
        return o && o.__esModule ? o : { default: o };
    }
    const r = t.default;
})(L2);
let wu = L2;
var Kb = (wu.__esModule ? wu : { default: wu }).default;
const Wb = Et(Kb);
var Gb = 'Expected a function',
    R2 = '__lodash_hash_undefined__',
    F2 = 1 / 0,
    qb = '[object Function]',
    Qb = '[object GeneratorFunction]',
    Jb = '[object Symbol]',
    Yb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Zb = /^\w*$/,
    Xb = /^\./,
    e7 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    t7 = /[\\^$.*+?()[\]{}|]/g,
    n7 = /\\(\\)?/g,
    r7 = /^\[object .+?Constructor\]$/,
    o7 = typeof Ee == 'object' && Ee && Ee.Object === Object && Ee,
    i7 = typeof self == 'object' && self && self.Object === Object && self,
    cd = o7 || i7 || Function('return this')();
function s7(e, t) {
    return e == null ? void 0 : e[t];
}
function a7(e) {
    var t = !1;
    if (e != null && typeof e.toString != 'function')
        try {
            t = !!(e + '');
        } catch {}
    return t;
}
var l7 = Array.prototype,
    u7 = Function.prototype,
    A2 = Object.prototype,
    xu = cd['__core-js_shared__'],
    Kp = (function () {
        var e = /[^.]+$/.exec((xu && xu.keys && xu.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })(),
    j2 = u7.toString,
    fd = A2.hasOwnProperty,
    I2 = A2.toString,
    c7 = RegExp(
        '^' +
            j2
                .call(fd)
                .replace(t7, '\\$&')
                .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?',
                ) +
            '$',
    ),
    Wp = cd.Symbol,
    f7 = l7.splice,
    d7 = M2(cd, 'Map'),
    Ni = M2(Object, 'create'),
    Gp = Wp ? Wp.prototype : void 0,
    qp = Gp ? Gp.toString : void 0;
function dr(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function p7() {
    this.__data__ = Ni ? Ni(null) : {};
}
function h7(e) {
    return this.has(e) && delete this.__data__[e];
}
function g7(e) {
    var t = this.__data__;
    if (Ni) {
        var n = t[e];
        return n === R2 ? void 0 : n;
    }
    return fd.call(t, e) ? t[e] : void 0;
}
function m7(e) {
    var t = this.__data__;
    return Ni ? t[e] !== void 0 : fd.call(t, e);
}
function v7(e, t) {
    var n = this.__data__;
    return (n[e] = Ni && t === void 0 ? R2 : t), this;
}
dr.prototype.clear = p7;
dr.prototype.delete = h7;
dr.prototype.get = g7;
dr.prototype.has = m7;
dr.prototype.set = v7;
function yo(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function y7() {
    this.__data__ = [];
}
function w7(e) {
    var t = this.__data__,
        n = pl(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : f7.call(t, n, 1), !0;
}
function x7(e) {
    var t = this.__data__,
        n = pl(t, e);
    return n < 0 ? void 0 : t[n][1];
}
function b7(e) {
    return pl(this.__data__, e) > -1;
}
function S7(e, t) {
    var n = this.__data__,
        r = pl(n, e);
    return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
}
yo.prototype.clear = y7;
yo.prototype.delete = w7;
yo.prototype.get = x7;
yo.prototype.has = b7;
yo.prototype.set = S7;
function mr(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function E7() {
    this.__data__ = { hash: new dr(), map: new (d7 || yo)(), string: new dr() };
}
function $7(e) {
    return hl(this, e).delete(e);
}
function C7(e) {
    return hl(this, e).get(e);
}
function k7(e) {
    return hl(this, e).has(e);
}
function T7(e, t) {
    return hl(this, e).set(e, t), this;
}
mr.prototype.clear = E7;
mr.prototype.delete = $7;
mr.prototype.get = C7;
mr.prototype.has = k7;
mr.prototype.set = T7;
function pl(e, t) {
    for (var n = e.length; n--; ) if (M7(e[n][0], t)) return n;
    return -1;
}
function _7(e, t) {
    t = N7(t, e) ? [t] : L7(t);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[j7(t[n++])];
    return n && n == r ? e : void 0;
}
function P7(e) {
    if (!D2(e) || F7(e)) return !1;
    var t = z7(e) || a7(e) ? c7 : r7;
    return t.test(I7(e));
}
function O7(e) {
    if (typeof e == 'string') return e;
    if (pd(e)) return qp ? qp.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -F2 ? '-0' : t;
}
function L7(e) {
    return z2(e) ? e : A7(e);
}
function hl(e, t) {
    var n = e.__data__;
    return R7(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function M2(e, t) {
    var n = s7(e, t);
    return P7(n) ? n : void 0;
}
function N7(e, t) {
    if (z2(e)) return !1;
    var n = typeof e;
    return n == 'number' ||
        n == 'symbol' ||
        n == 'boolean' ||
        e == null ||
        pd(e)
        ? !0
        : Zb.test(e) || !Yb.test(e) || (t != null && e in Object(t));
}
function R7(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
}
function F7(e) {
    return !!Kp && Kp in e;
}
var A7 = dd(function (e) {
    e = U7(e);
    var t = [];
    return (
        Xb.test(e) && t.push(''),
        e.replace(e7, function (n, r, o, i) {
            t.push(o ? i.replace(n7, '$1') : r || n);
        }),
        t
    );
});
function j7(e) {
    if (typeof e == 'string' || pd(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -F2 ? '-0' : t;
}
function I7(e) {
    if (e != null) {
        try {
            return j2.call(e);
        } catch {}
        try {
            return e + '';
        } catch {}
    }
    return '';
}
function dd(e, t) {
    if (typeof e != 'function' || (t && typeof t != 'function'))
        throw new TypeError(Gb);
    var n = function () {
        var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            i = n.cache;
        if (i.has(o)) return i.get(o);
        var s = e.apply(this, r);
        return (n.cache = i.set(o, s)), s;
    };
    return (n.cache = new (dd.Cache || mr)()), n;
}
dd.Cache = mr;
function M7(e, t) {
    return e === t || (e !== e && t !== t);
}
var z2 = Array.isArray;
function z7(e) {
    var t = D2(e) ? I2.call(e) : '';
    return t == qb || t == Qb;
}
function D2(e) {
    var t = typeof e;
    return !!e && (t == 'object' || t == 'function');
}
function D7(e) {
    return !!e && typeof e == 'object';
}
function pd(e) {
    return typeof e == 'symbol' || (D7(e) && I2.call(e) == Jb);
}
function U7(e) {
    return e == null ? '' : O7(e);
}
function B7(e, t, n) {
    var r = e == null ? void 0 : _7(e, t);
    return r === void 0 ? n : r;
}
var H7 = B7;
const Ls = Et(H7);
var V7 = 200,
    hd = '__lodash_hash_undefined__',
    K7 = 1 / 0,
    U2 = 9007199254740991,
    W7 = '[object Arguments]',
    G7 = '[object Function]',
    q7 = '[object GeneratorFunction]',
    Q7 = '[object Symbol]',
    J7 = /[\\^$.*+?()[\]{}|]/g,
    Y7 = /^\[object .+?Constructor\]$/,
    Z7 = /^(?:0|[1-9]\d*)$/,
    X7 = typeof Ee == 'object' && Ee && Ee.Object === Object && Ee,
    eS = typeof self == 'object' && self && self.Object === Object && self,
    gd = X7 || eS || Function('return this')();
function tS(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
}
function nS(e, t) {
    var n = e ? e.length : 0;
    return !!n && iS(e, t, 0) > -1;
}
function rS(e, t, n) {
    for (var r = -1, o = e ? e.length : 0; ++r < o; ) if (n(t, e[r])) return !0;
    return !1;
}
function B2(e, t) {
    for (var n = -1, r = e ? e.length : 0, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
    return o;
}
function md(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
}
function oS(e, t, n, r) {
    for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
    return -1;
}
function iS(e, t, n) {
    if (t !== t) return oS(e, sS, n);
    for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
    return -1;
}
function sS(e) {
    return e !== e;
}
function aS(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
}
function lS(e) {
    return function (t) {
        return e(t);
    };
}
function uS(e, t) {
    return e.has(t);
}
function cS(e, t) {
    return e == null ? void 0 : e[t];
}
function fS(e) {
    var t = !1;
    if (e != null && typeof e.toString != 'function')
        try {
            t = !!(e + '');
        } catch {}
    return t;
}
function H2(e, t) {
    return function (n) {
        return e(t(n));
    };
}
var dS = Array.prototype,
    pS = Function.prototype,
    gl = Object.prototype,
    bu = gd['__core-js_shared__'],
    Qp = (function () {
        var e = /[^.]+$/.exec((bu && bu.keys && bu.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
    })(),
    V2 = pS.toString,
    wo = gl.hasOwnProperty,
    vd = gl.toString,
    hS = RegExp(
        '^' +
            V2.call(wo)
                .replace(J7, '\\$&')
                .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?',
                ) +
            '$',
    ),
    Jp = gd.Symbol,
    gS = H2(Object.getPrototypeOf, Object),
    mS = gl.propertyIsEnumerable,
    vS = dS.splice,
    Yp = Jp ? Jp.isConcatSpreadable : void 0,
    Wc = Object.getOwnPropertySymbols,
    Zp = Math.max,
    yS = W2(gd, 'Map'),
    Ri = W2(Object, 'create');
function pr(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function wS() {
    this.__data__ = Ri ? Ri(null) : {};
}
function xS(e) {
    return this.has(e) && delete this.__data__[e];
}
function bS(e) {
    var t = this.__data__;
    if (Ri) {
        var n = t[e];
        return n === hd ? void 0 : n;
    }
    return wo.call(t, e) ? t[e] : void 0;
}
function SS(e) {
    var t = this.__data__;
    return Ri ? t[e] !== void 0 : wo.call(t, e);
}
function ES(e, t) {
    var n = this.__data__;
    return (n[e] = Ri && t === void 0 ? hd : t), this;
}
pr.prototype.clear = wS;
pr.prototype.delete = xS;
pr.prototype.get = bS;
pr.prototype.has = SS;
pr.prototype.set = ES;
function xo(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function $S() {
    this.__data__ = [];
}
function CS(e) {
    var t = this.__data__,
        n = ml(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : vS.call(t, n, 1), !0;
}
function kS(e) {
    var t = this.__data__,
        n = ml(t, e);
    return n < 0 ? void 0 : t[n][1];
}
function TS(e) {
    return ml(this.__data__, e) > -1;
}
function _S(e, t) {
    var n = this.__data__,
        r = ml(n, e);
    return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
}
xo.prototype.clear = $S;
xo.prototype.delete = CS;
xo.prototype.get = kS;
xo.prototype.has = TS;
xo.prototype.set = _S;
function bo(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
function PS() {
    this.__data__ = { hash: new pr(), map: new (yS || xo)(), string: new pr() };
}
function OS(e) {
    return vl(this, e).delete(e);
}
function LS(e) {
    return vl(this, e).get(e);
}
function NS(e) {
    return vl(this, e).has(e);
}
function RS(e, t) {
    return vl(this, e).set(e, t), this;
}
bo.prototype.clear = PS;
bo.prototype.delete = OS;
bo.prototype.get = LS;
bo.prototype.has = NS;
bo.prototype.set = RS;
function Aa(e) {
    var t = -1,
        n = e ? e.length : 0;
    for (this.__data__ = new bo(); ++t < n; ) this.add(e[t]);
}
function FS(e) {
    return this.__data__.set(e, hd), this;
}
function AS(e) {
    return this.__data__.has(e);
}
Aa.prototype.add = Aa.prototype.push = FS;
Aa.prototype.has = AS;
function jS(e, t) {
    var n = yd(e) || G2(e) ? aS(e.length, String) : [],
        r = n.length,
        o = !!r;
    for (var i in e)
        (t || wo.call(e, i)) &&
            !(o && (i == 'length' || qS(i, r))) &&
            n.push(i);
    return n;
}
function ml(e, t) {
    for (var n = e.length; n--; ) if (tE(e[n][0], t)) return n;
    return -1;
}
function IS(e, t, n, r) {
    var o = -1,
        i = nS,
        s = !0,
        a = e.length,
        l = [],
        u = t.length;
    if (!a) return l;
    n && (t = B2(t, lS(n))),
        r
            ? ((i = rS), (s = !1))
            : t.length >= V7 && ((i = uS), (s = !1), (t = new Aa(t)));
    e: for (; ++o < a; ) {
        var c = e[o],
            f = n ? n(c) : c;
        if (((c = r || c !== 0 ? c : 0), s && f === f)) {
            for (var d = u; d--; ) if (t[d] === f) continue e;
            l.push(c);
        } else i(t, f, r) || l.push(c);
    }
    return l;
}
function K2(e, t, n, r, o) {
    var i = -1,
        s = e.length;
    for (n || (n = GS), o || (o = []); ++i < s; ) {
        var a = e[i];
        t > 0 && n(a)
            ? t > 1
                ? K2(a, t - 1, n, r, o)
                : md(o, a)
            : r || (o[o.length] = a);
    }
    return o;
}
function MS(e, t, n) {
    var r = t(e);
    return yd(e) ? r : md(r, n(e));
}
function zS(e) {
    if (!wd(e) || JS(e)) return !1;
    var t = Q2(e) || fS(e) ? hS : Y7;
    return t.test(eE(e));
}
function DS(e) {
    if (!wd(e)) return ZS(e);
    var t = YS(e),
        n = [];
    for (var r in e) (r == 'constructor' && (t || !wo.call(e, r))) || n.push(r);
    return n;
}
function US(e, t) {
    return (
        (e = Object(e)),
        BS(e, t, function (n, r) {
            return r in e;
        })
    );
}
function BS(e, t, n) {
    for (var r = -1, o = t.length, i = {}; ++r < o; ) {
        var s = t[r],
            a = e[s];
        n(a, s) && (i[s] = a);
    }
    return i;
}
function HS(e, t) {
    return (
        (t = Zp(t === void 0 ? e.length - 1 : t, 0)),
        function () {
            for (
                var n = arguments,
                    r = -1,
                    o = Zp(n.length - t, 0),
                    i = Array(o);
                ++r < o;

            )
                i[r] = n[t + r];
            r = -1;
            for (var s = Array(t + 1); ++r < t; ) s[r] = n[r];
            return (s[t] = i), tS(e, this, s);
        }
    );
}
function VS(e) {
    return MS(e, iE, WS);
}
function vl(e, t) {
    var n = e.__data__;
    return QS(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function W2(e, t) {
    var n = cS(e, t);
    return zS(n) ? n : void 0;
}
var KS = Wc ? H2(Wc, Object) : Y2,
    WS = Wc
        ? function (e) {
              for (var t = []; e; ) md(t, KS(e)), (e = gS(e));
              return t;
          }
        : Y2;
function GS(e) {
    return yd(e) || G2(e) || !!(Yp && e && e[Yp]);
}
function qS(e, t) {
    return (
        (t = t ?? U2),
        !!t &&
            (typeof e == 'number' || Z7.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
    );
}
function QS(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
}
function JS(e) {
    return !!Qp && Qp in e;
}
function YS(e) {
    var t = e && e.constructor,
        n = (typeof t == 'function' && t.prototype) || gl;
    return e === n;
}
function ZS(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
}
function XS(e) {
    if (typeof e == 'string' || oE(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -K7 ? '-0' : t;
}
function eE(e) {
    if (e != null) {
        try {
            return V2.call(e);
        } catch {}
        try {
            return e + '';
        } catch {}
    }
    return '';
}
function tE(e, t) {
    return e === t || (e !== e && t !== t);
}
function G2(e) {
    return (
        nE(e) &&
        wo.call(e, 'callee') &&
        (!mS.call(e, 'callee') || vd.call(e) == W7)
    );
}
var yd = Array.isArray;
function q2(e) {
    return e != null && rE(e.length) && !Q2(e);
}
function nE(e) {
    return J2(e) && q2(e);
}
function Q2(e) {
    var t = wd(e) ? vd.call(e) : '';
    return t == G7 || t == q7;
}
function rE(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= U2;
}
function wd(e) {
    var t = typeof e;
    return !!e && (t == 'object' || t == 'function');
}
function J2(e) {
    return !!e && typeof e == 'object';
}
function oE(e) {
    return typeof e == 'symbol' || (J2(e) && vd.call(e) == Q7);
}
function iE(e) {
    return q2(e) ? jS(e, !0) : DS(e);
}
var sE = HS(function (e, t) {
    return e == null ? {} : ((t = B2(K2(t, 1), XS)), US(e, IS(VS(e), t)));
});
function Y2() {
    return [];
}
var aE = sE;
const lE = Et(aE);
var Z2 = 9007199254740991,
    uE = '[object Arguments]',
    cE = '[object Function]',
    fE = '[object GeneratorFunction]',
    dE = /^(?:0|[1-9]\d*)$/;
function pE(e, t) {
    for (var n = -1, r = e ? e.length : 0; ++n < r && t(e[n], n, e) !== !1; );
    return e;
}
function hE(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
}
function gE(e, t) {
    return function (n) {
        return e(t(n));
    };
}
var yl = Object.prototype,
    xd = yl.hasOwnProperty,
    X2 = yl.toString,
    mE = yl.propertyIsEnumerable,
    vE = gE(Object.keys, Object);
function yE(e, t) {
    var n = ev(e) || _E(e) ? hE(e.length, String) : [],
        r = n.length,
        o = !!r;
    for (var i in e)
        (t || xd.call(e, i)) &&
            !(o && (i == 'length' || CE(i, r))) &&
            n.push(i);
    return n;
}
var wE = EE(bE),
    xE = $E();
function bE(e, t) {
    return e && xE(e, t, FE);
}
function SE(e) {
    if (!kE(e)) return vE(e);
    var t = [];
    for (var n in Object(e)) xd.call(e, n) && n != 'constructor' && t.push(n);
    return t;
}
function EE(e, t) {
    return function (n, r) {
        if (n == null) return n;
        if (!bd(n)) return e(n, r);
        for (
            var o = n.length, i = t ? o : -1, s = Object(n);
            (t ? i-- : ++i < o) && r(s[i], i, s) !== !1;

        );
        return n;
    };
}
function $E(e) {
    return function (t, n, r) {
        for (var o = -1, i = Object(t), s = r(t), a = s.length; a--; ) {
            var l = s[e ? a : ++o];
            if (n(i[l], l, i) === !1) break;
        }
        return t;
    };
}
function CE(e, t) {
    return (
        (t = t ?? Z2),
        !!t &&
            (typeof e == 'number' || dE.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
    );
}
function kE(e) {
    var t = e && e.constructor,
        n = (typeof t == 'function' && t.prototype) || yl;
    return e === n;
}
function TE(e, t) {
    var n = ev(e) ? pE : wE;
    return n(e, typeof t == 'function' ? t : AE);
}
function _E(e) {
    return (
        PE(e) &&
        xd.call(e, 'callee') &&
        (!mE.call(e, 'callee') || X2.call(e) == uE)
    );
}
var ev = Array.isArray;
function bd(e) {
    return e != null && LE(e.length) && !OE(e);
}
function PE(e) {
    return RE(e) && bd(e);
}
function OE(e) {
    var t = NE(e) ? X2.call(e) : '';
    return t == cE || t == fE;
}
function LE(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Z2;
}
function NE(e) {
    var t = typeof e;
    return !!e && (t == 'object' || t == 'function');
}
function RE(e) {
    return !!e && typeof e == 'object';
}
function FE(e) {
    return bd(e) ? yE(e) : SE(e);
}
function AE(e) {
    return e;
}
var jE = TE;
const Pr = Et(jE);
var ja = { exports: {} };
ja.exports;
(function (e, t) {
    var n = 200,
        r = 'Expected a function',
        o = '__lodash_hash_undefined__',
        i = 1,
        s = 2,
        a = 1 / 0,
        l = 9007199254740991,
        u = '[object Arguments]',
        c = '[object Array]',
        f = '[object Boolean]',
        d = '[object Date]',
        v = '[object Error]',
        g = '[object Function]',
        x = '[object GeneratorFunction]',
        $ = '[object Map]',
        m = '[object Number]',
        h = '[object Object]',
        y = '[object Promise]',
        E = '[object RegExp]',
        k = '[object Set]',
        O = '[object String]',
        N = '[object Symbol]',
        S = '[object WeakMap]',
        I = '[object ArrayBuffer]',
        z = '[object DataView]',
        j = '[object Float32Array]',
        K = '[object Float64Array]',
        P = '[object Int8Array]',
        R = '[object Int16Array]',
        Z = '[object Int32Array]',
        ge = '[object Uint8Array]',
        ee = '[object Uint8ClampedArray]',
        A = '[object Uint16Array]',
        V = '[object Uint32Array]',
        W = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ce = /^\w*$/,
        be = /^\./,
        vr =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ut = /[\\^$.*+?()[\]{}|]/g,
        Eo = /\\(\\)?/g,
        Bt = /^\[object .+?Constructor\]$/,
        yr = /^(?:0|[1-9]\d*)$/,
        oe = {};
    (oe[j] =
        oe[K] =
        oe[P] =
        oe[R] =
        oe[Z] =
        oe[ge] =
        oe[ee] =
        oe[A] =
        oe[V] =
            !0),
        (oe[u] =
            oe[c] =
            oe[I] =
            oe[f] =
            oe[z] =
            oe[d] =
            oe[v] =
            oe[g] =
            oe[$] =
            oe[m] =
            oe[h] =
            oe[E] =
            oe[k] =
            oe[O] =
            oe[S] =
                !1);
    var Cd = typeof Ee == 'object' && Ee && Ee.Object === Object && Ee,
        Rv = typeof self == 'object' && self && self.Object === Object && self,
        dn = Cd || Rv || Function('return this')(),
        kd = t && !t.nodeType && t,
        Td = kd && !0 && e && !e.nodeType && e,
        Fv = Td && Td.exports === kd,
        _d = Fv && Cd.process,
        Pd = (function () {
            try {
                return _d && _d.binding('util');
            } catch {}
        })(),
        Od = Pd && Pd.isTypedArray;
    function Av(p, w) {
        for (var T = -1, F = p ? p.length : 0; ++T < F; )
            if (w(p[T], T, p)) return !0;
        return !1;
    }
    function jv(p) {
        return function (w) {
            return w == null ? void 0 : w[p];
        };
    }
    function Iv(p, w) {
        for (var T = -1, F = Array(p); ++T < p; ) F[T] = w(T);
        return F;
    }
    function Mv(p) {
        return function (w) {
            return p(w);
        };
    }
    function zv(p, w) {
        return p == null ? void 0 : p[w];
    }
    function Sl(p) {
        var w = !1;
        if (p != null && typeof p.toString != 'function')
            try {
                w = !!(p + '');
            } catch {}
        return w;
    }
    function Dv(p) {
        var w = -1,
            T = Array(p.size);
        return (
            p.forEach(function (F, G) {
                T[++w] = [G, F];
            }),
            T
        );
    }
    function Uv(p, w) {
        return function (T) {
            return p(w(T));
        };
    }
    function Bv(p) {
        var w = -1,
            T = Array(p.size);
        return (
            p.forEach(function (F) {
                T[++w] = F;
            }),
            T
        );
    }
    var Hv = Array.prototype,
        Vv = Function.prototype,
        Gi = Object.prototype,
        El = dn['__core-js_shared__'],
        Ld = (function () {
            var p = /[^.]+$/.exec((El && El.keys && El.keys.IE_PROTO) || '');
            return p ? 'Symbol(src)_1.' + p : '';
        })(),
        Nd = Vv.toString,
        Ht = Gi.hasOwnProperty,
        wr = Gi.toString,
        Kv = RegExp(
            '^' +
                Nd.call(Ht)
                    .replace(Ut, '\\$&')
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?',
                    ) +
                '$',
        ),
        Rd = dn.Symbol,
        Fd = dn.Uint8Array,
        Wv = Gi.propertyIsEnumerable,
        Gv = Hv.splice,
        qv = Uv(Object.keys, Object),
        $l = xr(dn, 'DataView'),
        $o = xr(dn, 'Map'),
        Cl = xr(dn, 'Promise'),
        kl = xr(dn, 'Set'),
        Tl = xr(dn, 'WeakMap'),
        Co = xr(Object, 'create'),
        Qv = Kn($l),
        Jv = Kn($o),
        Yv = Kn(Cl),
        Zv = Kn(kl),
        Xv = Kn(Tl),
        qi = Rd ? Rd.prototype : void 0,
        _l = qi ? qi.valueOf : void 0,
        Ad = qi ? qi.toString : void 0;
    function Vn(p) {
        var w = -1,
            T = p ? p.length : 0;
        for (this.clear(); ++w < T; ) {
            var F = p[w];
            this.set(F[0], F[1]);
        }
    }
    function ey() {
        this.__data__ = Co ? Co(null) : {};
    }
    function ty(p) {
        return this.has(p) && delete this.__data__[p];
    }
    function ny(p) {
        var w = this.__data__;
        if (Co) {
            var T = w[p];
            return T === o ? void 0 : T;
        }
        return Ht.call(w, p) ? w[p] : void 0;
    }
    function ry(p) {
        var w = this.__data__;
        return Co ? w[p] !== void 0 : Ht.call(w, p);
    }
    function oy(p, w) {
        var T = this.__data__;
        return (T[p] = Co && w === void 0 ? o : w), this;
    }
    (Vn.prototype.clear = ey),
        (Vn.prototype.delete = ty),
        (Vn.prototype.get = ny),
        (Vn.prototype.has = ry),
        (Vn.prototype.set = oy);
    function Vt(p) {
        var w = -1,
            T = p ? p.length : 0;
        for (this.clear(); ++w < T; ) {
            var F = p[w];
            this.set(F[0], F[1]);
        }
    }
    function iy() {
        this.__data__ = [];
    }
    function sy(p) {
        var w = this.__data__,
            T = Ji(w, p);
        if (T < 0) return !1;
        var F = w.length - 1;
        return T == F ? w.pop() : Gv.call(w, T, 1), !0;
    }
    function ay(p) {
        var w = this.__data__,
            T = Ji(w, p);
        return T < 0 ? void 0 : w[T][1];
    }
    function ly(p) {
        return Ji(this.__data__, p) > -1;
    }
    function uy(p, w) {
        var T = this.__data__,
            F = Ji(T, p);
        return F < 0 ? T.push([p, w]) : (T[F][1] = w), this;
    }
    (Vt.prototype.clear = iy),
        (Vt.prototype.delete = sy),
        (Vt.prototype.get = ay),
        (Vt.prototype.has = ly),
        (Vt.prototype.set = uy);
    function Kt(p) {
        var w = -1,
            T = p ? p.length : 0;
        for (this.clear(); ++w < T; ) {
            var F = p[w];
            this.set(F[0], F[1]);
        }
    }
    function cy() {
        this.__data__ = {
            hash: new Vn(),
            map: new ($o || Vt)(),
            string: new Vn(),
        };
    }
    function fy(p) {
        return Yi(this, p).delete(p);
    }
    function dy(p) {
        return Yi(this, p).get(p);
    }
    function py(p) {
        return Yi(this, p).has(p);
    }
    function hy(p, w) {
        return Yi(this, p).set(p, w), this;
    }
    (Kt.prototype.clear = cy),
        (Kt.prototype.delete = fy),
        (Kt.prototype.get = dy),
        (Kt.prototype.has = py),
        (Kt.prototype.set = hy);
    function Qi(p) {
        var w = -1,
            T = p ? p.length : 0;
        for (this.__data__ = new Kt(); ++w < T; ) this.add(p[w]);
    }
    function gy(p) {
        return this.__data__.set(p, o), this;
    }
    function my(p) {
        return this.__data__.has(p);
    }
    (Qi.prototype.add = Qi.prototype.push = gy), (Qi.prototype.has = my);
    function Wt(p) {
        this.__data__ = new Vt(p);
    }
    function vy() {
        this.__data__ = new Vt();
    }
    function yy(p) {
        return this.__data__.delete(p);
    }
    function wy(p) {
        return this.__data__.get(p);
    }
    function xy(p) {
        return this.__data__.has(p);
    }
    function by(p, w) {
        var T = this.__data__;
        if (T instanceof Vt) {
            var F = T.__data__;
            if (!$o || F.length < n - 1) return F.push([p, w]), this;
            T = this.__data__ = new Kt(F);
        }
        return T.set(p, w), this;
    }
    (Wt.prototype.clear = vy),
        (Wt.prototype.delete = yy),
        (Wt.prototype.get = wy),
        (Wt.prototype.has = xy),
        (Wt.prototype.set = by);
    function Sy(p, w) {
        var T = Wn(p) || Hd(p) ? Iv(p.length, String) : [],
            F = T.length,
            G = !!F;
        for (var B in p)
            (w || Ht.call(p, B)) &&
                !(G && (B == 'length' || zd(B, F))) &&
                T.push(B);
        return T;
    }
    function Ji(p, w) {
        for (var T = p.length; T--; ) if (Bd(p[T][0], w)) return T;
        return -1;
    }
    var Ey = Iy();
    function $y(p, w) {
        return p && Ey(p, w, ns);
    }
    function jd(p, w) {
        w = Zi(w, p) ? [w] : Id(w);
        for (var T = 0, F = w.length; p != null && T < F; ) p = p[Xi(w[T++])];
        return T && T == F ? p : void 0;
    }
    function Cy(p) {
        return wr.call(p);
    }
    function ky(p, w) {
        return p != null && w in Object(p);
    }
    function Pl(p, w, T, F, G) {
        return p === w
            ? !0
            : p == null || w == null || (!es(p) && !ts(w))
            ? p !== p && w !== w
            : Ty(p, w, Pl, T, F, G);
    }
    function Ty(p, w, T, F, G, B) {
        var X = Wn(p),
            ne = Wn(w),
            fe = c,
            Pe = c;
        X || ((fe = pn(p)), (fe = fe == u ? h : fe)),
            ne || ((Pe = pn(w)), (Pe = Pe == u ? h : Pe));
        var Ve = fe == h && !Sl(p),
            Qe = Pe == h && !Sl(w),
            Oe = fe == Pe;
        if (Oe && !Ve)
            return (
                B || (B = new Wt()),
                X || Gy(p) ? Md(p, w, T, F, G, B) : My(p, w, fe, T, F, G, B)
            );
        if (!(G & s)) {
            var dt = Ve && Ht.call(p, '__wrapped__'),
                pt = Qe && Ht.call(w, '__wrapped__');
            if (dt || pt) {
                var hn = dt ? p.value() : p,
                    Gt = pt ? w.value() : w;
                return B || (B = new Wt()), T(hn, Gt, F, G, B);
            }
        }
        return Oe ? (B || (B = new Wt()), zy(p, w, T, F, G, B)) : !1;
    }
    function _y(p, w, T, F) {
        var G = T.length,
            B = G,
            X = !F;
        if (p == null) return !B;
        for (p = Object(p); G--; ) {
            var ne = T[G];
            if (X && ne[2] ? ne[1] !== p[ne[0]] : !(ne[0] in p)) return !1;
        }
        for (; ++G < B; ) {
            ne = T[G];
            var fe = ne[0],
                Pe = p[fe],
                Ve = ne[1];
            if (X && ne[2]) {
                if (Pe === void 0 && !(fe in p)) return !1;
            } else {
                var Qe = new Wt();
                if (F) var Oe = F(Pe, Ve, fe, p, w, Qe);
                if (!(Oe === void 0 ? Pl(Ve, Pe, F, i | s, Qe) : Oe)) return !1;
            }
        }
        return !0;
    }
    function Py(p) {
        if (!es(p) || Hy(p)) return !1;
        var w = Kd(p) || Sl(p) ? Kv : Bt;
        return w.test(Kn(p));
    }
    function Oy(p) {
        return ts(p) && Ll(p.length) && !!oe[wr.call(p)];
    }
    function Ly(p) {
        return typeof p == 'function'
            ? p
            : p == null
            ? Zy
            : typeof p == 'object'
            ? Wn(p)
                ? Fy(p[0], p[1])
                : Ry(p)
            : Xy(p);
    }
    function Ny(p) {
        if (!Vy(p)) return qv(p);
        var w = [];
        for (var T in Object(p))
            Ht.call(p, T) && T != 'constructor' && w.push(T);
        return w;
    }
    function Ry(p) {
        var w = Dy(p);
        return w.length == 1 && w[0][2]
            ? Ud(w[0][0], w[0][1])
            : function (T) {
                  return T === p || _y(T, p, w);
              };
    }
    function Fy(p, w) {
        return Zi(p) && Dd(w)
            ? Ud(Xi(p), w)
            : function (T) {
                  var F = Qy(T, p);
                  return F === void 0 && F === w
                      ? Jy(T, p)
                      : Pl(w, F, void 0, i | s);
              };
    }
    function Ay(p) {
        return function (w) {
            return jd(w, p);
        };
    }
    function jy(p) {
        if (typeof p == 'string') return p;
        if (Nl(p)) return Ad ? Ad.call(p) : '';
        var w = p + '';
        return w == '0' && 1 / p == -a ? '-0' : w;
    }
    function Id(p) {
        return Wn(p) ? p : Ky(p);
    }
    function Iy(p) {
        return function (w, T, F) {
            for (var G = -1, B = Object(w), X = F(w), ne = X.length; ne--; ) {
                var fe = X[p ? ne : ++G];
                if (T(B[fe], fe, B) === !1) break;
            }
            return w;
        };
    }
    function Md(p, w, T, F, G, B) {
        var X = G & s,
            ne = p.length,
            fe = w.length;
        if (ne != fe && !(X && fe > ne)) return !1;
        var Pe = B.get(p);
        if (Pe && B.get(w)) return Pe == w;
        var Ve = -1,
            Qe = !0,
            Oe = G & i ? new Qi() : void 0;
        for (B.set(p, w), B.set(w, p); ++Ve < ne; ) {
            var dt = p[Ve],
                pt = w[Ve];
            if (F) var hn = X ? F(pt, dt, Ve, w, p, B) : F(dt, pt, Ve, p, w, B);
            if (hn !== void 0) {
                if (hn) continue;
                Qe = !1;
                break;
            }
            if (Oe) {
                if (
                    !Av(w, function (Gt, Gn) {
                        if (!Oe.has(Gn) && (dt === Gt || T(dt, Gt, F, G, B)))
                            return Oe.add(Gn);
                    })
                ) {
                    Qe = !1;
                    break;
                }
            } else if (!(dt === pt || T(dt, pt, F, G, B))) {
                Qe = !1;
                break;
            }
        }
        return B.delete(p), B.delete(w), Qe;
    }
    function My(p, w, T, F, G, B, X) {
        switch (T) {
            case z:
                if (
                    p.byteLength != w.byteLength ||
                    p.byteOffset != w.byteOffset
                )
                    return !1;
                (p = p.buffer), (w = w.buffer);
            case I:
                return !(
                    p.byteLength != w.byteLength || !F(new Fd(p), new Fd(w))
                );
            case f:
            case d:
            case m:
                return Bd(+p, +w);
            case v:
                return p.name == w.name && p.message == w.message;
            case E:
            case O:
                return p == w + '';
            case $:
                var ne = Dv;
            case k:
                var fe = B & s;
                if ((ne || (ne = Bv), p.size != w.size && !fe)) return !1;
                var Pe = X.get(p);
                if (Pe) return Pe == w;
                (B |= i), X.set(p, w);
                var Ve = Md(ne(p), ne(w), F, G, B, X);
                return X.delete(p), Ve;
            case N:
                if (_l) return _l.call(p) == _l.call(w);
        }
        return !1;
    }
    function zy(p, w, T, F, G, B) {
        var X = G & s,
            ne = ns(p),
            fe = ne.length,
            Pe = ns(w),
            Ve = Pe.length;
        if (fe != Ve && !X) return !1;
        for (var Qe = fe; Qe--; ) {
            var Oe = ne[Qe];
            if (!(X ? Oe in w : Ht.call(w, Oe))) return !1;
        }
        var dt = B.get(p);
        if (dt && B.get(w)) return dt == w;
        var pt = !0;
        B.set(p, w), B.set(w, p);
        for (var hn = X; ++Qe < fe; ) {
            Oe = ne[Qe];
            var Gt = p[Oe],
                Gn = w[Oe];
            if (F) var Wd = X ? F(Gn, Gt, Oe, w, p, B) : F(Gt, Gn, Oe, p, w, B);
            if (!(Wd === void 0 ? Gt === Gn || T(Gt, Gn, F, G, B) : Wd)) {
                pt = !1;
                break;
            }
            hn || (hn = Oe == 'constructor');
        }
        if (pt && !hn) {
            var rs = p.constructor,
                os = w.constructor;
            rs != os &&
                'constructor' in p &&
                'constructor' in w &&
                !(
                    typeof rs == 'function' &&
                    rs instanceof rs &&
                    typeof os == 'function' &&
                    os instanceof os
                ) &&
                (pt = !1);
        }
        return B.delete(p), B.delete(w), pt;
    }
    function Yi(p, w) {
        var T = p.__data__;
        return By(w) ? T[typeof w == 'string' ? 'string' : 'hash'] : T.map;
    }
    function Dy(p) {
        for (var w = ns(p), T = w.length; T--; ) {
            var F = w[T],
                G = p[F];
            w[T] = [F, G, Dd(G)];
        }
        return w;
    }
    function xr(p, w) {
        var T = zv(p, w);
        return Py(T) ? T : void 0;
    }
    var pn = Cy;
    (($l && pn(new $l(new ArrayBuffer(1))) != z) ||
        ($o && pn(new $o()) != $) ||
        (Cl && pn(Cl.resolve()) != y) ||
        (kl && pn(new kl()) != k) ||
        (Tl && pn(new Tl()) != S)) &&
        (pn = function (p) {
            var w = wr.call(p),
                T = w == h ? p.constructor : void 0,
                F = T ? Kn(T) : void 0;
            if (F)
                switch (F) {
                    case Qv:
                        return z;
                    case Jv:
                        return $;
                    case Yv:
                        return y;
                    case Zv:
                        return k;
                    case Xv:
                        return S;
                }
            return w;
        });
    function Uy(p, w, T) {
        w = Zi(w, p) ? [w] : Id(w);
        for (var F, G = -1, X = w.length; ++G < X; ) {
            var B = Xi(w[G]);
            if (!(F = p != null && T(p, B))) break;
            p = p[B];
        }
        if (F) return F;
        var X = p ? p.length : 0;
        return !!X && Ll(X) && zd(B, X) && (Wn(p) || Hd(p));
    }
    function zd(p, w) {
        return (
            (w = w ?? l),
            !!w &&
                (typeof p == 'number' || yr.test(p)) &&
                p > -1 &&
                p % 1 == 0 &&
                p < w
        );
    }
    function Zi(p, w) {
        if (Wn(p)) return !1;
        var T = typeof p;
        return T == 'number' ||
            T == 'symbol' ||
            T == 'boolean' ||
            p == null ||
            Nl(p)
            ? !0
            : ce.test(p) || !W.test(p) || (w != null && p in Object(w));
    }
    function By(p) {
        var w = typeof p;
        return w == 'string' || w == 'number' || w == 'symbol' || w == 'boolean'
            ? p !== '__proto__'
            : p === null;
    }
    function Hy(p) {
        return !!Ld && Ld in p;
    }
    function Vy(p) {
        var w = p && p.constructor,
            T = (typeof w == 'function' && w.prototype) || Gi;
        return p === T;
    }
    function Dd(p) {
        return p === p && !es(p);
    }
    function Ud(p, w) {
        return function (T) {
            return T == null
                ? !1
                : T[p] === w && (w !== void 0 || p in Object(T));
        };
    }
    var Ky = Ol(function (p) {
        p = qy(p);
        var w = [];
        return (
            be.test(p) && w.push(''),
            p.replace(vr, function (T, F, G, B) {
                w.push(G ? B.replace(Eo, '$1') : F || T);
            }),
            w
        );
    });
    function Xi(p) {
        if (typeof p == 'string' || Nl(p)) return p;
        var w = p + '';
        return w == '0' && 1 / p == -a ? '-0' : w;
    }
    function Kn(p) {
        if (p != null) {
            try {
                return Nd.call(p);
            } catch {}
            try {
                return p + '';
            } catch {}
        }
        return '';
    }
    function Ol(p, w) {
        if (typeof p != 'function' || (w && typeof w != 'function'))
            throw new TypeError(r);
        var T = function () {
            var F = arguments,
                G = w ? w.apply(this, F) : F[0],
                B = T.cache;
            if (B.has(G)) return B.get(G);
            var X = p.apply(this, F);
            return (T.cache = B.set(G, X)), X;
        };
        return (T.cache = new (Ol.Cache || Kt)()), T;
    }
    Ol.Cache = Kt;
    function Bd(p, w) {
        return p === w || (p !== p && w !== w);
    }
    function Hd(p) {
        return (
            Wy(p) &&
            Ht.call(p, 'callee') &&
            (!Wv.call(p, 'callee') || wr.call(p) == u)
        );
    }
    var Wn = Array.isArray;
    function Vd(p) {
        return p != null && Ll(p.length) && !Kd(p);
    }
    function Wy(p) {
        return ts(p) && Vd(p);
    }
    function Kd(p) {
        var w = es(p) ? wr.call(p) : '';
        return w == g || w == x;
    }
    function Ll(p) {
        return typeof p == 'number' && p > -1 && p % 1 == 0 && p <= l;
    }
    function es(p) {
        var w = typeof p;
        return !!p && (w == 'object' || w == 'function');
    }
    function ts(p) {
        return !!p && typeof p == 'object';
    }
    function Nl(p) {
        return typeof p == 'symbol' || (ts(p) && wr.call(p) == N);
    }
    var Gy = Od ? Mv(Od) : Oy;
    function qy(p) {
        return p == null ? '' : jy(p);
    }
    function Qy(p, w, T) {
        var F = p == null ? void 0 : jd(p, w);
        return F === void 0 ? T : F;
    }
    function Jy(p, w) {
        return p != null && Uy(p, w, ky);
    }
    function ns(p) {
        return Vd(p) ? Sy(p) : Ny(p);
    }
    function Yy(p, w) {
        var T = {};
        return (
            (w = Ly(w)),
            $y(p, function (F, G, B) {
                T[w(F, G, B)] = F;
            }),
            T
        );
    }
    function Zy(p) {
        return p;
    }
    function Xy(p) {
        return Zi(p) ? jv(Xi(p)) : Ay(p);
    }
    e.exports = Yy;
})(ja, ja.exports);
var IE = ja.exports;
const ME = Et(IE);
var zE = 1 / 0,
    DE = '[object Symbol]',
    UE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    BE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    tv = '\\ud800-\\udfff',
    HE = '\\u0300-\\u036f\\ufe20-\\ufe23',
    VE = '\\u20d0-\\u20f0',
    nv = '\\u2700-\\u27bf',
    rv = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    KE = '\\xac\\xb1\\xd7\\xf7',
    WE = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    GE = '\\u2000-\\u206f',
    qE =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    ov = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    QE = '\\ufe0e\\ufe0f',
    iv = KE + WE + GE + qE,
    Sd = "['’]",
    Xp = '[' + iv + ']',
    sv = '[' + HE + VE + ']',
    av = '\\d+',
    JE = '[' + nv + ']',
    lv = '[' + rv + ']',
    uv = '[^' + tv + iv + av + nv + rv + ov + ']',
    YE = '\\ud83c[\\udffb-\\udfff]',
    ZE = '(?:' + sv + '|' + YE + ')',
    XE = '[^' + tv + ']',
    cv = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    fv = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Or = '[' + ov + ']',
    e9 = '\\u200d',
    eh = '(?:' + lv + '|' + uv + ')',
    t9 = '(?:' + Or + '|' + uv + ')',
    th = '(?:' + Sd + '(?:d|ll|m|re|s|t|ve))?',
    nh = '(?:' + Sd + '(?:D|LL|M|RE|S|T|VE))?',
    dv = ZE + '?',
    pv = '[' + QE + ']?',
    n9 = '(?:' + e9 + '(?:' + [XE, cv, fv].join('|') + ')' + pv + dv + ')*',
    r9 = pv + dv + n9,
    o9 = '(?:' + [JE, cv, fv].join('|') + ')' + r9,
    i9 = RegExp(Sd, 'g'),
    s9 = RegExp(sv, 'g'),
    a9 = RegExp(
        [
            Or + '?' + lv + '+' + th + '(?=' + [Xp, Or, '$'].join('|') + ')',
            t9 + '+' + nh + '(?=' + [Xp, Or + eh, '$'].join('|') + ')',
            Or + '?' + eh + '+' + th,
            Or + '+' + nh,
            av,
            o9,
        ].join('|'),
        'g',
    ),
    l9 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    u9 = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 'ss',
    },
    c9 = typeof Ee == 'object' && Ee && Ee.Object === Object && Ee,
    f9 = typeof self == 'object' && self && self.Object === Object && self,
    d9 = c9 || f9 || Function('return this')();
function p9(e, t, n, r) {
    var o = -1,
        i = e ? e.length : 0;
    for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
    return n;
}
function h9(e) {
    return e.match(UE) || [];
}
function g9(e) {
    return function (t) {
        return e == null ? void 0 : e[t];
    };
}
var m9 = g9(u9);
function v9(e) {
    return l9.test(e);
}
function y9(e) {
    return e.match(a9) || [];
}
var w9 = Object.prototype,
    x9 = w9.toString,
    rh = d9.Symbol,
    oh = rh ? rh.prototype : void 0,
    ih = oh ? oh.toString : void 0;
function b9(e) {
    if (typeof e == 'string') return e;
    if ($9(e)) return ih ? ih.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -zE ? '-0' : t;
}
function S9(e) {
    return function (t) {
        return p9(T9(C9(t).replace(i9, '')), e, '');
    };
}
function E9(e) {
    return !!e && typeof e == 'object';
}
function $9(e) {
    return typeof e == 'symbol' || (E9(e) && x9.call(e) == DE);
}
function hv(e) {
    return e == null ? '' : b9(e);
}
function C9(e) {
    return (e = hv(e)), e && e.replace(BE, m9).replace(s9, '');
}
var k9 = S9(function (e, t, n) {
    return e + (n ? '-' : '') + t.toLowerCase();
});
function T9(e, t, n) {
    return (
        (e = hv(e)),
        (t = n ? void 0 : t),
        t === void 0 ? (v9(e) ? y9(e) : h9(e)) : e.match(t) || []
    );
}
var _9 = k9;
const P9 = Et(_9);
var O9 = function (t) {
    return L9(t) && !N9(t);
};
function L9(e) {
    return !!e && typeof e == 'object';
}
function N9(e) {
    var t = Object.prototype.toString.call(e);
    return t === '[object RegExp]' || t === '[object Date]' || A9(e);
}
var R9 = typeof Symbol == 'function' && Symbol.for,
    F9 = R9 ? Symbol.for('react.element') : 60103;
function A9(e) {
    return e.$$typeof === F9;
}
function j9(e) {
    return Array.isArray(e) ? [] : {};
}
function Fi(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? so(j9(e), e, t) : e;
}
function I9(e, t, n) {
    return e.concat(t).map(function (r) {
        return Fi(r, n);
    });
}
function M9(e, t) {
    if (!t.customMerge) return so;
    var n = t.customMerge(e);
    return typeof n == 'function' ? n : so;
}
function z9(e) {
    return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(e).filter(function (t) {
              return Object.propertyIsEnumerable.call(e, t);
          })
        : [];
}
function sh(e) {
    return Object.keys(e).concat(z9(e));
}
function gv(e, t) {
    try {
        return t in e;
    } catch {
        return !1;
    }
}
function D9(e, t) {
    return (
        gv(e, t) &&
        !(
            Object.hasOwnProperty.call(e, t) &&
            Object.propertyIsEnumerable.call(e, t)
        )
    );
}
function U9(e, t, n) {
    var r = {};
    return (
        n.isMergeableObject(e) &&
            sh(e).forEach(function (o) {
                r[o] = Fi(e[o], n);
            }),
        sh(t).forEach(function (o) {
            D9(e, o) ||
                (gv(e, o) && n.isMergeableObject(t[o])
                    ? (r[o] = M9(o, n)(e[o], t[o], n))
                    : (r[o] = Fi(t[o], n)));
        }),
        r
    );
}
function so(e, t, n) {
    (n = n || {}),
        (n.arrayMerge = n.arrayMerge || I9),
        (n.isMergeableObject = n.isMergeableObject || O9),
        (n.cloneUnlessOtherwiseSpecified = Fi);
    var r = Array.isArray(t),
        o = Array.isArray(e),
        i = r === o;
    return i ? (r ? n.arrayMerge(e, t, n) : U9(e, t, n)) : Fi(t, n);
}
so.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error('first argument should be an array');
    return t.reduce(function (r, o) {
        return so(r, o, n);
    }, {});
};
var B9 = so,
    H9 = B9;
const qn = Et(H9);
var V9 = 'nextui',
    K9 = (e = {}, t, n) => {
        const r = { variants: [], utilities: {}, colors: {} };
        return (
            Pr(e, ({ extend: o, layout: i, colors: s }, a) => {
                let l = `.${a},[data-theme="${a}"]`;
                const u = a === 'light' || a === 'dark' ? a : o;
                a === t && (l = `:root,${l}`),
                    (r.utilities[l] = u ? { 'color-scheme': u } : {});
                const c = q8(s),
                    f = i ? ME(i, (d, v) => P9(v)) : {};
                r.variants.push({
                    name: a,
                    definition: [`&.${a}`, `&[data-theme='${a}']`],
                }),
                    Pr(c, (d, v) => {
                        if (d)
                            try {
                                const [g, x, $, m] = Vb(d)
                                        .hsl()
                                        .round()
                                        .array(),
                                    h = `--${n}-${v}`,
                                    y = `--${n}-${v}-opacity`;
                                (r.utilities[l][h] = `${g} ${x}% ${$}%`),
                                    typeof m == 'number' &&
                                        (r.utilities[l][y] = m.toFixed(2)),
                                    (r.colors[v] = ({
                                        opacityVariable: E,
                                        opacityValue: k,
                                    }) =>
                                        isNaN(+k)
                                            ? E
                                                ? `hsl(var(${h}) / var(${y}, var(${E})))`
                                                : `hsl(var(${h}) / var(${y}, 1))`
                                            : `hsl(var(${h}) / ${k})`);
                            } catch (g) {
                                console.log(
                                    'error',
                                    g == null ? void 0 : g.message,
                                );
                            }
                    }),
                    Pr(f, (d, v) => {
                        if (d)
                            if (typeof d == 'object')
                                Pr(d, (g, x) => {
                                    const $ = `--${n}-${v}-${x}`;
                                    r.utilities[l][$] = g;
                                });
                            else if (v === 'spacing-unit') {
                                const g = `--${n}-${v}`;
                                r.utilities[l][g] = d;
                                const x = z8(Number(d));
                                Pr(x, ($, m) => {
                                    const h = `--${n}-${v}-${m}`;
                                    r.utilities[l][h] = $;
                                });
                            } else {
                                const g = `--${n}-${v}`;
                                r.utilities[l][g] = d;
                            }
                    });
            }),
            r
        );
    },
    W9 = (e = {}, t, n, r) => {
        const o = K9(e, t, n),
            i = {
                'unit-1': `var(--${n}-spacing-unit)`,
                'unit-2': `var(--${n}-spacing-unit-2`,
                'unit-3': `var(--${n}-spacing-unit-3)`,
                'unit-3.5': `var(--${n}-spacing-unit-3_5)`,
                'unit-4': `var(--${n}-spacing-unit-4)`,
                'unit-5': `var(--${n}-spacing-unit-5)`,
                'unit-6': `var(--${n}-spacing-unit-6)`,
                'unit-7': `var(--${n}-spacing-unit-7)`,
                'unit-8': `var(--${n}-spacing-unit-8)`,
                'unit-9': `var(--${n}-spacing-unit-9)`,
                'unit-10': `var(--${n}-spacing-unit-10)`,
                'unit-11': `var(--${n}-spacing-unit-11)`,
                'unit-12': `var(--${n}-spacing-unit-12)`,
                'unit-16': `var(--${n}-spacing-unit-16)`,
                'unit-20': `var(--${n}-spacing-unit-20)`,
                'unit-24': `var(--${n}-spacing-unit-24)`,
            };
        return Wb(
            ({ addBase: s, addUtilities: a, addVariant: l }) => {
                s({ ':root, [data-theme]': { ...A8(n) } }),
                    a({ ...o.utilities, ...V8 }),
                    o.variants.forEach((u) => {
                        l(u.name, u.definition);
                    });
            },
            {
                theme: {
                    extend: {
                        colors: { ...(r ? H : {}), ...o.colors },
                        height: { divider: `var(--${n}-divider-weight)` },
                        width: { divider: `var(--${n}-divider-weight)` },
                        spacing: { unit: `var(--${n}-spacing-unit)`, ...D8(n) },
                        minWidth: { ...i },
                        minHeight: { ...i },
                        fontSize: {
                            tiny: [
                                `var(--${n}-font-size-tiny)`,
                                `var(--${n}-line-height-tiny)`,
                            ],
                            small: [
                                `var(--${n}-font-size-small)`,
                                `var(--${n}-line-height-small)`,
                            ],
                            medium: [
                                `var(--${n}-font-size-medium)`,
                                `var(--${n}-line-height-medium)`,
                            ],
                            large: [
                                `var(--${n}-font-size-large)`,
                                `var(--${n}-line-height-large)`,
                            ],
                        },
                        borderRadius: {
                            small: `var(--${n}-radius-small)`,
                            medium: `var(--${n}-radius-medium)`,
                            large: `var(--${n}-radius-large)`,
                        },
                        opacity: { disabled: `var(--${n}-disabled-opacity)` },
                        borderWidth: {
                            small: `var(--${n}-border-width-small)`,
                            medium: `var(--${n}-border-width-medium)`,
                            large: `var(--${n}-border-width-large)`,
                            1: '1px',
                            1.5: '1.5px',
                            3: '3px',
                            5: '5px',
                        },
                        boxShadow: {
                            small: `var(--${n}-box-shadow-small)`,
                            medium: `var(--${n}-box-shadow-medium)`,
                            large: `var(--${n}-box-shadow-large)`,
                        },
                        backgroundImage: {
                            'stripe-gradient':
                                'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)',
                        },
                        transitionDuration: {
                            0: '0ms',
                            250: '250ms',
                            400: '400ms',
                        },
                        transitionTimingFunction: {
                            'soft-spring':
                                'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
                        },
                        ...xb,
                    },
                },
            },
        );
    },
    G9 = (e = {}) => {
        const {
                themes: t = {},
                defaultTheme: n = 'light',
                layout: r,
                defaultExtendTheme: o = 'light',
                prefix: i = V9,
                addCommonColors: s = !1,
            } = e,
            a = Ls(t, 'light.colors', {}),
            l = Ls(t, 'dark.colors', {}),
            u = r && typeof r == 'object' ? qn(Hp, r) : Hp,
            c = { light: { ...u, ...yb }, dark: { ...u, ...wb } };
        let f = lE(t, ['light', 'dark']) || {};
        Pr(f, ({ extend: x, colors: $, layout: m }, h) => {
            const y = x && j8(x) ? x : o;
            $ && typeof $ == 'object' && (f[h].colors = qn(vu[y], $)),
                m &&
                    typeof m == 'object' &&
                    (f[h].layout = qn(x ? c[x] : u, m));
        });
        const d = {
                layout: qn(c.light, Ls(t, 'light.layout', {})),
                colors: qn(vu.light, a),
            },
            v = {
                layout: qn(c.dark, Ls(t, 'dark.layout', {})),
                colors: qn(vu.dark, l),
            },
            g = { light: d, dark: v, ...f };
        return W9(g, n, i, s);
    },
    mv = {},
    vv = {},
    Ed = { exports: {} },
    ie = String,
    yv = function () {
        return {
            isColorSupported: !1,
            reset: ie,
            bold: ie,
            dim: ie,
            italic: ie,
            underline: ie,
            inverse: ie,
            hidden: ie,
            strikethrough: ie,
            black: ie,
            red: ie,
            green: ie,
            yellow: ie,
            blue: ie,
            magenta: ie,
            cyan: ie,
            white: ie,
            gray: ie,
            bgBlack: ie,
            bgRed: ie,
            bgGreen: ie,
            bgYellow: ie,
            bgBlue: ie,
            bgMagenta: ie,
            bgCyan: ie,
            bgWhite: ie,
        };
    };
Ed.exports = yv();
Ed.exports.createColors = yv;
var q9 = Ed.exports;
(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
    function t(l, u) {
        for (var c in u)
            Object.defineProperty(l, c, { enumerable: !0, get: u[c] });
    }
    t(e, {
        dim: function () {
            return s;
        },
        default: function () {
            return a;
        },
    });
    const n = r(q9);
    function r(l) {
        return l && l.__esModule ? l : { default: l };
    }
    let o = new Set();
    function i(l, u, c) {
        (typeof process < 'u' && {}.JEST_WORKER_ID) ||
            (c && o.has(c)) ||
            (c && o.add(c),
            console.warn(''),
            u.forEach((f) => console.warn(l, '-', f)));
    }
    function s(l) {
        return n.default.dim(l);
    }
    const a = {
        info(l, u) {
            i(
                n.default.bold(n.default.cyan('info')),
                ...(Array.isArray(l) ? [l] : [u, l]),
            );
        },
        warn(l, u) {
            i(
                n.default.bold(n.default.yellow('warn')),
                ...(Array.isArray(l) ? [l] : [u, l]),
            );
        },
        risk(l, u) {
            i(
                n.default.bold(n.default.magenta('risk')),
                ...(Array.isArray(l) ? [l] : [u, l]),
            );
        },
    };
})(vv);
(function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
                return o;
            },
        });
    const t = n(vv);
    function n(i) {
        return i && i.__esModule ? i : { default: i };
    }
    function r({ version: i, from: s, to: a }) {
        t.default.warn(`${s}-color-renamed`, [
            `As of Tailwind CSS ${i}, \`${s}\` has been renamed to \`${a}\`.`,
            'Update your configuration file to silence this warning.',
        ]);
    }
    const o = {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
        },
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
        },
        zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
        },
        neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
        },
        stone: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
        },
        red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
        },
        orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
        },
        amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
        },
        yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
        },
        lime: {
            50: '#f7fee7',
            100: '#ecfccb',
            200: '#d9f99d',
            300: '#bef264',
            400: '#a3e635',
            500: '#84cc16',
            600: '#65a30d',
            700: '#4d7c0f',
            800: '#3f6212',
            900: '#365314',
            950: '#1a2e05',
        },
        green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
        },
        emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
        },
        teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
            950: '#042f2e',
        },
        cyan: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
        },
        sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
        },
        blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
        },
        indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
        },
        violet: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
        },
        purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764',
        },
        fuchsia: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
            950: '#4a044e',
        },
        pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
            950: '#500724',
        },
        rose: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
            950: '#4c0519',
        },
        get lightBlue() {
            return (
                r({ version: 'v2.2', from: 'lightBlue', to: 'sky' }), this.sky
            );
        },
        get warmGray() {
            return (
                r({ version: 'v3.0', from: 'warmGray', to: 'stone' }),
                this.stone
            );
        },
        get trueGray() {
            return (
                r({ version: 'v3.0', from: 'trueGray', to: 'neutral' }),
                this.neutral
            );
        },
        get coolGray() {
            return (
                r({ version: 'v3.0', from: 'coolGray', to: 'gray' }), this.gray
            );
        },
        get blueGray() {
            return (
                r({ version: 'v3.0', from: 'blueGray', to: 'slate' }),
                this.slate
            );
        },
    };
})(mv);
let Su = mv;
var Q9 = (Su.__esModule ? Su : { default: Su }).default;
const J9 = Et(Q9),
    Eu = {
        content: [
            './src/**/*.{html,js,jsx,ts,tsx}',
            './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        ],
        safelist: [
            'bg-red-400',
            'bg-green-400',
            'bg-sky-400',
            'bg-tiviElectricPurple-50',
            'bg-tiviElectricPurple-100',
        ],
        theme: {
            extend: {
                boxShadow: {
                    'inner-dark': 'inset 0 -6px 0 0 rgba(0, 0, 0, 0.06)',
                    'inner-light': 'inset 0 -6px 0 0 rgba(255, 255, 255, 0.06)',
                    'none-important': '0 0 #0000 !important',
                },
                keyframes: {
                    slideIn: {
                        '0%': { transform: 'translateY(-100%)', opacity: 0 },
                        '100%': { transform: 'translateY(0)', opacity: 1 },
                    },
                    slideOut: {
                        '0%': { transform: 'translateY(0)', opacity: 1 },
                        '100%': { transform: 'translateY(-100%)', opacity: 0 },
                    },
                },
                animation: {
                    slideIn: 'slideIn 0.5s forwards',
                    slideOut: 'slideOut 0.5s forwards',
                },
                fontFamily: {
                    casualHandy: ['HandyCasualCondensed', 'sans-serif'],
                },
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                tiviElectricViolet: '#B601FD',
                tiviElectricPurple: { 50: '#F3D6FF', 100: '#D286FE' },
                tiviPhlox: '#DD0CFC',
                ...J9,
                mainBackground: {
                    50: '#ffffff',
                    100: '#fffefb',
                    200: '#fffdf6',
                    300: '#d9d7d1',
                    400: '#b3b1ad',
                    500: '#8d8c88',
                    600: '#666663',
                    700: '#40403f',
                    800: '#1a1a1a',
                    900: '#0d0d0d',
                    950: '#000000',
                },
                primaryPink: {
                    50: '#f1b4c8',
                    100: '#eea4bc',
                    200: '#eb95b1',
                    300: '#e886a6',
                    400: '#e5779b',
                    500: '#e26890',
                    600: '#cb5e82',
                    700: '#b55373',
                    800: '#9e4965',
                    900: '#883e56',
                    950: '#713448',
                },
                primaryBlue: {
                    50: '#a5cdce',
                    100: '#93c3c4',
                    200: '#81b9ba',
                    300: '#6fafb1',
                    400: '#5da5a7',
                    500: '#4b9b9d',
                    600: '#448c8d',
                    700: '#3c7c7e',
                    800: '#356d6e',
                    900: '#2d5d5e',
                    950: '#264e4f',
                },
                secondaryYellow: {
                    50: '#F9DE95',
                    100: '#F7D77F',
                    200: '#F6D06A',
                    300: '#F5C955',
                    400: '#F3C33F',
                    500: '#F2BC2A',
                    600: '#DAA926',
                    700: '#C29622',
                    800: '#A9841D',
                    900: '#917119',
                    950: '#795E15',
                },
            },
        },
        darkMode: 'class',
        plugins: [G9()],
    };
function Y9(e) {
    const t = /[a-z]/.test(e),
        n = /[A-Z]/.test(e),
        r = /\d/.test(e);
    return e.length >= 8 && t && n && r;
}
function Z9(e) {
    return /^[a-zA-Z][a-zA-Z0-9-_]{4,14}$/.test(e);
}
function nk(e) {
    e = e || new Date();
    let t;
    typeof e == 'string' ? (t = new Date(e)) : (t = e);
    const n = t.getDate(),
        r = t.getMonth() + 1,
        o = t.getFullYear();
    return `${n}/${r}/${o}`;
}
function X9(e) {
    return e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
}
function e$(e) {
    return e.replace(/_\w/g, (t) => t[1].toUpperCase());
}
function Gc(e) {
    return typeof e != 'object' || e === null
        ? e
        : Array.isArray(e)
        ? e.map((t) => Gc(t))
        : Object.fromEntries(Object.entries(e).map(([t, n]) => [X9(t), Gc(n)]));
}
function qc(e) {
    return typeof e != 'object' || e === null
        ? e
        : Array.isArray(e)
        ? e.map((t) => qc(t))
        : Object.fromEntries(Object.entries(e).map(([t, n]) => [e$(t), qc(n)]));
}
function rk(e) {
    const t = [...e];
    let n = t.length,
        r,
        o;
    for (; n !== 0; )
        (r = Math.floor(Math.random() * n)),
            n--,
            (o = t[n]),
            (t[n] = t[r]),
            (t[r] = o);
    return t;
}
function t$(e, t, n) {
    var l, u;
    const r = t === '' && n,
        o = r
            ? e.favorite
            : e.folderName.toLowerCase().includes(t.toLowerCase()) &&
              (!n || e.favorite),
        i =
            ((l = e.notes) == null
                ? void 0
                : l.filter((c) => {
                      var f;
                      return r
                          ? c.favorite
                          : ((f = c.noteName) == null
                                ? void 0
                                : f.toLowerCase().includes(t.toLowerCase())) &&
                                (!n || c.favorite);
                  })) || [],
        s =
            ((u = e.subfolders) == null
                ? void 0
                : u.map((c) => t$(c, t, n)).filter((c) => c !== null)) || [];
    return o || i.length > 0 || s.length > 0
        ? { ...e, notes: i, subfolders: s }
        : null;
}
function n$(e, t) {
    var l;
    if (e.startsWith('#')) return e.replace('#', '');
    const n = e.replace('bg-', ''),
        r = (l = Eu == null ? void 0 : Eu.theme) == null ? void 0 : l.colors;
    let o = n.replace('bg-', ''),
        i = t;
    n.split('-').length > 1 && ((o = n.split('-')[0]), (i = n.split('-')[1])),
        typeof i == 'string' && (i = parseInt(i));
    const s = r[o];
    if (!s) throw new Error(`Color ${o} not found in Tailwind config.`);
    if (typeof s == 'string') {
        if (i)
            throw new Error(
                `Shade ${i} was specified, but color ${o} is a string and doesn't have shades.`,
            );
        return s;
    }
    const a = s[i];
    if (!a)
        throw new Error(
            `Shade ${i} of color ${o} not found in Tailwind config.`,
        );
    return a.replace('#', '');
}
function r$(e) {
    e.charAt(0) === '#' && (e = e.slice(1));
    const t = parseInt(e.substring(0, 2), 16) / 255,
        n = parseInt(e.substring(2, 4), 16) / 255,
        r = parseInt(e.substring(4, 6), 16) / 255,
        o = (s) =>
            s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    return 0.2126 * o(t) + 0.7152 * o(n) + 0.0722 * o(r) > 0.5;
}
const o$ = Jf(),
    cn = cx.create({ baseURL: Gw });
let ah = 0;
const i$ = 2;
cn.interceptors.response.use(
    (e) => (e.data && (e.data = qc(e.data)), e),
    async (e) => {
        const t = e.config;
        if (e.response.status === 401 && !t._retry && ah <= i$) {
            (t._retry = !0), ah++;
            const n = o$[em];
            if (n !== null)
                try {
                    const { access: r } = await u$(n);
                    return (
                        ti(void 0, Gs, r, { sameSite: !0, maxAge: 60 * 60 }),
                        (t.headers.Authorization = `Bearer ${r}`),
                        cn(t)
                    );
                } catch (r) {
                    return Promise.reject(r);
                }
        }
        return Promise.reject(e);
    },
);
cn.interceptors.request.use((e) => (e.data && (e.data = Gc(e.data)), e));
const s$ = async (e) => {
        try {
            return (
                await cn.get('/api/v1/auth/me/', {
                    headers: { Authorization: `Bearer ${e}` },
                })
            ).data;
        } catch (t) {
            throw new Error(`Error retrieving user: ${t}`);
        }
    },
    wv = async (e) => {
        try {
            return (
                await cn.post('/api/v1/auth/register/', e, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
            ).data;
        } catch (t) {
            throw new Error(`Error registering user: ${t}`);
        }
    },
    a$ = async (e) => {
        try {
            return (
                await cn.post(
                    '/api/v1/auth/activate/',
                    { token: e },
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    },
                )
            ).data;
        } catch (t) {
            throw new Error(`Error activating user: ${t}`);
        }
    },
    l$ = async (e, t) => {
        try {
            return (
                console.log(cn),
                (
                    await cn.post(
                        '/api/v1/auth/login/',
                        { email: e, password: t },
                        { headers: { 'Content-Type': 'application/json' } },
                    )
                ).data
            );
        } catch (n) {
            throw new Error(`Error logging in user: ${n}`);
        }
    },
    u$ = async (e) => {
        try {
            return (
                await cn.post(
                    '/api/v1/auth/login/refresh/',
                    { refresh: e },
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    },
                )
            ).data;
        } catch (t) {
            throw new Error(`Error refreshing token: ${t}`);
        }
    };
function c$() {
    if (console && console.warn) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`),
            console.warn(...t);
    }
}
const lh = {};
function Qc() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    (typeof t[0] == 'string' && lh[t[0]]) ||
        (typeof t[0] == 'string' && (lh[t[0]] = new Date()), c$(...t));
}
const xv = (e, t) => () => {
    if (e.isInitialized) t();
    else {
        const n = () => {
            setTimeout(() => {
                e.off('initialized', n);
            }, 0),
                t();
        };
        e.on('initialized', n);
    }
};
function uh(e, t, n) {
    e.loadNamespaces(t, xv(e, n));
}
function ch(e, t, n, r) {
    typeof n == 'string' && (n = [n]),
        n.forEach((o) => {
            e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
        }),
        e.loadLanguages(t, xv(e, r));
}
function f$(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
        o = t.options ? t.options.fallbackLng : !1,
        i = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const s = (a, l) => {
        const u = t.services.backendConnector.state[`${a}|${l}`];
        return u === -1 || u === 2;
    };
    return n.bindI18n &&
        n.bindI18n.indexOf('languageChanging') > -1 &&
        t.services.backendConnector.backend &&
        t.isLanguageChangingTo &&
        !s(t.isLanguageChangingTo, e)
        ? !1
        : !!(
              t.hasResourceBundle(r, e) ||
              !t.services.backendConnector.backend ||
              (t.options.resources && !t.options.partialBundledLanguages) ||
              (s(r, e) && (!o || s(i, e)))
          );
}
function d$(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
        ? (Qc('i18n.languages were undefined or empty', t.languages), !0)
        : t.options.ignoreJSONStructure !== void 0
        ? t.hasLoadedNamespace(e, {
              lng: n.lng,
              precheck: (o, i) => {
                  if (
                      n.bindI18n &&
                      n.bindI18n.indexOf('languageChanging') > -1 &&
                      o.services.backendConnector.backend &&
                      o.isLanguageChangingTo &&
                      !i(o.isLanguageChangingTo, e)
                  )
                      return !1;
              },
          })
        : f$(e, t, n);
}
const p$ =
        /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    h$ = {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"',
        '&nbsp;': ' ',
        '&#160;': ' ',
        '&copy;': '©',
        '&#169;': '©',
        '&reg;': '®',
        '&#174;': '®',
        '&hellip;': '…',
        '&#8230;': '…',
        '&#x2F;': '/',
        '&#47;': '/',
    },
    g$ = (e) => h$[e],
    m$ = (e) => e.replace(p$, g$);
let Jc = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    useSuspense: !0,
    unescape: m$,
};
function v$() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jc = { ...Jc, ...e };
}
function y$() {
    return Jc;
}
let bv;
function w$(e) {
    bv = e;
}
function x$() {
    return bv;
}
const b$ = {
        type: '3rdParty',
        init(e) {
            v$(e.options.react), w$(e);
        },
    },
    S$ = b.createContext();
class E$ {
    constructor() {
        this.usedNamespaces = {};
    }
    addUsedNamespaces(t) {
        t.forEach((n) => {
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
        });
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
    }
}
const $$ = (e, t) => {
    const n = b.useRef();
    return (
        b.useEffect(() => {
            n.current = t ? n.current : e;
        }, [e, t]),
        n.current
    );
};
function So(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
        { i18n: r, defaultNS: o } = b.useContext(S$) || {},
        i = n || r || x$();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new E$()), !i)) {
        Qc(
            'You will need to pass in an i18next instance by using initReactI18next',
        );
        const y = (k, O) =>
                typeof O == 'string'
                    ? O
                    : O &&
                      typeof O == 'object' &&
                      typeof O.defaultValue == 'string'
                    ? O.defaultValue
                    : Array.isArray(k)
                    ? k[k.length - 1]
                    : k,
            E = [y, {}, !1];
        return (E.t = y), (E.i18n = {}), (E.ready = !1), E;
    }
    i.options.react &&
        i.options.react.wait !== void 0 &&
        Qc(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
        );
    const s = { ...y$(), ...i.options.react, ...t },
        { useSuspense: a, keyPrefix: l } = s;
    let u = e || o || (i.options && i.options.defaultNS);
    (u = typeof u == 'string' ? [u] : u || ['translation']),
        i.reportNamespaces.addUsedNamespaces &&
            i.reportNamespaces.addUsedNamespaces(u);
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        u.every((y) => d$(y, i, s));
    function f() {
        return i.getFixedT(
            t.lng || null,
            s.nsMode === 'fallback' ? u : u[0],
            l,
        );
    }
    const [d, v] = b.useState(f);
    let g = u.join();
    t.lng && (g = `${t.lng}${g}`);
    const x = $$(g),
        $ = b.useRef(!0);
    b.useEffect(() => {
        const { bindI18n: y, bindI18nStore: E } = s;
        ($.current = !0),
            !c &&
                !a &&
                (t.lng
                    ? ch(i, t.lng, u, () => {
                          $.current && v(f);
                      })
                    : uh(i, u, () => {
                          $.current && v(f);
                      })),
            c && x && x !== g && $.current && v(f);
        function k() {
            $.current && v(f);
        }
        return (
            y && i && i.on(y, k),
            E && i && i.store.on(E, k),
            () => {
                ($.current = !1),
                    y && i && y.split(' ').forEach((O) => i.off(O, k)),
                    E && i && E.split(' ').forEach((O) => i.store.off(O, k));
            }
        );
    }, [i, g]);
    const m = b.useRef(!0);
    b.useEffect(() => {
        $.current && !m.current && v(f), (m.current = !1);
    }, [i, l]);
    const h = [d, i, c];
    if (((h.t = d), (h.i18n = i), (h.ready = c), c || (!c && !a))) return h;
    throw new Promise((y) => {
        t.lng ? ch(i, t.lng, u, () => y()) : uh(i, u, () => y());
    });
}
const wl = b.createContext({}),
    C$ = ({ children: e }) => {
        const { t } = So(),
            n = go(),
            [r, o] = b.useState(null),
            [i, s] = b.useState(null),
            [a, l] = b.useState(!1),
            [u, c] = b.useState(!1),
            [f, d] = b.useState(null),
            v = b.useCallback(
                async ({ email: h, password: y }) => {
                    l(!0);
                    try {
                        const E = await l$(h, y);
                        if (E) {
                            const { access: k, refresh: O } = E,
                                N = await s$(k);
                            if ((l(!1), !N)) {
                                Y('Error al iniciar sesión', {
                                    position: 'top-right',
                                    type: 'error',
                                    pauseOnHover: !1,
                                });
                                return;
                            }
                            ti(void 0, em, O, {
                                sameSite: !0,
                                maxAge: 60 * 60 * 24 * 7,
                            }),
                                ti(void 0, Gs, k, {
                                    sameSite: !0,
                                    maxAge: 60 * 60,
                                });
                            const S = JSON.stringify(N);
                            ti(void 0, hp, S, {
                                sameSite: !0,
                                maxAge: 60 * 60,
                            }),
                                Y(`Bienvenide ${N.username}`, {
                                    position: 'top-right',
                                    type: 'success',
                                    pauseOnHover: !1,
                                }),
                                n(t('/')),
                                o(N),
                                s(i),
                                c(!0);
                        }
                    } catch {
                        l(!1),
                            Y(t('login.Error'), {
                                position: 'top-right',
                                type: 'error',
                                pauseOnHover: !1,
                                autoClose: 2e3,
                            });
                    }
                },
                [n],
            ),
            g = b.useCallback(
                async ({ email: h, password: y, username: E }) => {
                    if ((l(!0), !Y9(y))) {
                        l(!1),
                            Y(t('register.weakPassword'), {
                                position: 'top-right',
                                type: 'error',
                                pauseOnHover: !0,
                                autoClose: 5e3,
                            });
                        return;
                    }
                    if (!Z9(E)) {
                        l(!1),
                            Y(t('register.InvalidUsername'), {
                                position: 'top-right',
                                type: 'error',
                                pauseOnHover: !0,
                                autoClose: 5e3,
                            });
                        return;
                    }
                    try {
                        const k = await wv({
                            email: h,
                            password: y,
                            username: E,
                        });
                        l(!1),
                            d(h),
                            k &&
                                (Y(t('register.Welcome'), {
                                    position: 'top-right',
                                    type: 'success',
                                    pauseOnHover: !1,
                                    autoClose: 2e3,
                                }),
                                n(t('/activate')));
                    } catch {
                        l(!1),
                            Y(t('register.Error'), {
                                position: 'top-right',
                                type: 'error',
                                pauseOnHover: !1,
                                autoClose: 2e3,
                            });
                    }
                },
                [n],
            ),
            x = b.useCallback(() => {
                Ec(void 0, Gs),
                    Ec(void 0, hp),
                    o(null),
                    s(null),
                    c(!1),
                    n(t('/login'));
            }, []),
            $ = async () =>
                new Promise((y) => {
                    const k = Jf()[Gs];
                    k ? (s(k), y(!1)) : (n(t('/login')), y(!0));
                }),
            m = async (h) => {
                l(!0);
                try {
                    const y = await a$(h);
                    l(!1),
                        y &&
                            (Y(t('activate.Success'), {
                                position: 'top-right',
                                type: 'success',
                                pauseOnHover: !1,
                                autoClose: 2e3,
                            }),
                            c(!0),
                            n(t('/login')));
                } catch {
                    l(!1),
                        Y(t('activate.Error'), {
                            position: 'top-right',
                            type: 'error',
                            pauseOnHover: !1,
                            autoClose: 2e3,
                        });
                }
            };
        return C.jsx(wl.Provider, {
            value: {
                isAuthenticated: !!i,
                user: r,
                loginUser: v,
                loading: a,
                checkToken: $,
                logout: x,
                registerUser: g,
                activateUser: m,
                activate: u,
                email: f,
            },
            children: e,
        });
    };
const xl = ({ text: e }) => {
        const { t } = So();
        return C.jsx('div', {
            className: 'flex h-full w-full items-center justify-center',
            children: C.jsxs('div', {
                className: 'card',
                children: [
                    C.jsxs('div', {
                        className: 'moon shrink-0',
                        children: [
                            C.jsx('div', { className: 'eye left' }),
                            C.jsx('div', { className: 'eye right' }),
                            C.jsx('div', { className: 'mouth' }),
                        ],
                    }),
                    C.jsx('p', {
                        className: 'm-0 max-w-xs',
                        children: e || t('Loading'),
                    }),
                ],
            }),
        });
    },
    Wi = (e) => {
        const t = (n) => {
            const r = go(),
                o = b.useContext(wl),
                { isAuthenticated: i, loading: s, checkToken: a } = o,
                [l, u] = b.useState(!0);
            return (
                b.useEffect(() => {
                    (async () => {
                        const f = await a();
                        u(f);
                    })();
                }, [l]),
                b.useEffect(() => {
                    !l && !s && !i && r('/login');
                }, [i, s, l]),
                s || l ? C.jsx(xl, {}) : C.jsx(e, { ...n })
            );
        };
        return (t.displayName = `WithAuth(${Ev(e)})`), t;
    },
    Sv = (e) => {
        const t = (n) => {
            const r = go(),
                o = b.useContext(wl),
                { isAuthenticated: i, loading: s } = o;
            return (
                b.useEffect(() => {
                    !s && i && r('/');
                }, [i, s]),
                s ? C.jsx(xl, {}) : C.jsx(e, { ...n })
            );
        };
        return (t.displayName = `WithNoAuth(${Ev(e)})`), t;
    };
function Ev(e) {
    return e.displayName || e.name || 'Component';
}
const ii = ({ label: e, inputType: t, ...n }) => {
    let r = null;
    e &&
        (r = C.jsx('label', {
            className: 'sr-only ',
            htmlFor: n.name,
            children: e,
        }));
    const o = [
        'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondaryYellow-800 focus:outline-none focus:ring-secondaryYellow-800 sm:text-sm bg-mainBackground-100 focus:bg-mainBackground-50',
        n.className,
    ];
    return C.jsxs('div', {
        className: 'mb-4 flex w-full flex-col ',
        children: [
            r,
            C.jsx('input', {
                className: o.join(' '),
                type: t,
                name: n.name,
                ...n,
            }),
        ],
    });
};
function $v({ bgColor: e, className: t, children: n, linkTo: r, ...o }) {
    const i = n$(e),
        s = r$(i);
    console.log(s);
    const [a, l] = b.useState(!1),
        u = {
            backgroundColor: `#${i}`,
            boxShadow: a
                ? 'none'
                : s
                ? 'inset 0 -6px 0 0 rgba(0, 0, 0, 0.06)'
                : 'inset 0 -6px 0 0 rgba(255, 255, 255, 0.13)',
        },
        f = [
            /p-\d+/.test(t || '') ? '' : 'p-6',
            'active:translate-y-1.5 active:shadow-none-important ',
            t,
        ].filter(Boolean);
    return r
        ? C.jsx(ki, {
              to: r,
              className: f.join(' '),
              style: u,
              onMouseDown: () => l(!0),
              onMouseUp: () => l(!1),
              onTouchStart: () => l(!0),
              onTouchEnd: () => l(!1),
              onMouseLeave: () => l(!1),
              children: n,
          })
        : C.jsx('button', {
              className: f.join(' '),
              style: u,
              onMouseDown: () => l(!0),
              onMouseUp: () => l(!1),
              onTouchStart: () => l(!0),
              onTouchEnd: () => l(!1),
              onMouseLeave: () => l(!1),
              ...o,
              children: n,
          });
}
function Cv({ to: e, children: t, className: n, color: r }) {
    const i = [
        "relative font-bold  duration-500 transition-colors after:absolute after:bottom-[-0.25em] after:left-0 after:h-[0.15rem] after:w-0 after:bg-primaryBlue-600 after:duration-500 after:content-[''] after:transition-all after:hover:w-full",
        r === 'blue'
            ? 'text-primaryBlue-700 hover:text-primaryPink-700 after:bg-primaryPink-700'
            : 'text-primaryPink-700 hover:text-primaryBlue-700 after:bg-primaryBlue-700',
        n,
    ];
    return C.jsx('span', {
        className: 'mt-[3em]',
        children: C.jsx(ki, { to: e, className: i.join(' '), children: t }),
    });
}
const k$ = ({ onSubmit: e }) => {
        const { t } = So(),
            [n, r] = b.useState(''),
            [o, i] = b.useState(''),
            s = (a) => {
                a.preventDefault(), e(n, o);
            };
        return C.jsxs('main', {
            className: 'h-96',
            children: [
                C.jsx('h2', {
                    className: 'py-4 text-center text-2xl font-bold',
                    children: t('login.Title'),
                }),
                C.jsxs('p', {
                    children: [
                        t('login.NoAccount'),
                        ' ',
                        C.jsx(Cv, {
                            to: t('/register'),
                            color: 'pink',
                            children: t('login.Register'),
                        }),
                    ],
                }),
                C.jsxs('form', {
                    className: 'space-y-6 pt-8',
                    onSubmit: s,
                    children: [
                        C.jsx(ii, {
                            label: t('login.Email'),
                            inputType: 'email',
                            name: t('login.Email'),
                            placeholder: t('login.Email'),
                            required: !0,
                            value: n,
                            onChange: (a) => r(a.target.value),
                        }),
                        C.jsx(ii, {
                            label: t('login.Password'),
                            inputType: 'password',
                            placeholder: t('login.Password'),
                            name: 'password',
                            value: o,
                            required: !0,
                            onChange: (a) => i(a.target.value),
                        }),
                        C.jsx($v, {
                            className:
                                'mt-4 w-full rounded  px-3 py-2 font-bold text-secondaryYellow-500 duration-200 ease-in-out transition',
                            bgColor: 'zinc-800 ',
                            children: t('login.Login'),
                        }),
                    ],
                }),
            ],
        });
    },
    T$ = ({ children: e }) =>
        C.jsx('div', {
            className:
                'mx-auto flex h-full max-w-3xl flex-col  items-center justify-center px-4 duration-300 transition-opacity sm:px-6 md:px-8',
            children: e,
        });
const _$ = ({ children: e, color: t, className: n }) => {
        const [r, o] = b.useState(window.innerWidth > 1024),
            i = () => {
                switch (t) {
                    case 'blue':
                        return 'fill-primaryBlue-500';
                    case 'yellow':
                        return 'fill-secondaryYellow-500';
                    default:
                        return 'fill-primaryPink-500';
                }
            },
            s = () => {
                o(window.innerWidth >= 1024), console.log(window.innerWidth);
            };
        b.useEffect(
            () => (
                window.addEventListener('resize', s),
                () => window.removeEventListener('resize', s)
            ),
        );
        const a = r
            ? [
                  'absolute bottom-0 right-0 h-20 w-full overflow-hidden lg:bottom-0 lg:right-0 lg:h-full lg:w-1/5',
                  i(),
                  n,
              ]
            : [
                  ' absolute bottom-0 right-0 h-20 w-full overflow-hidden lg:bottom-auto lg:left-0 lg:top-0 lg:h-full lg:w-1/5',
                  i(),
                  n,
              ];
        return C.jsx(C.Fragment, {
            children: r
                ? C.jsxs('aside', {
                      className: a.join(' '),
                      children: [
                          C.jsx('svg', {
                              id: 'Modo_de_aislamiento',
                              'data-name': 'Modo de aislamiento',
                              xmlns: 'http://www.w3.org/2000/svg',
                              viewBox: '0 0 151.32 500',
                              preserveAspectRatio: 'none',
                              width: '100%',
                              height: '100%',
                              children: C.jsx('path', {
                                  id: 'pathToAnimate',
                                  d: 'M719.65,899c73.56-192.66-18-347,0-500H868.57V899Z',
                                  transform: 'translate(-717.26 -398.99)',
                              }),
                          }),
                          e,
                      ],
                  })
                : C.jsxs('footer', {
                      className: a.join(' '),
                      children: [
                          C.jsx('svg', {
                              viewBox: '0 0 500 150',
                              preserveAspectRatio: 'none',
                              width: '100%',
                              height: '100%',
                              children: C.jsx('path', {
                                  d: 'M-9.59,2.29 C172.68,132.71 349.20,-50.09 524.27,16.22 L500.00,150.33 L0.00,150.33 Z',
                              }),
                          }),
                          e,
                      ],
                  }),
        });
    },
    P$ = ({ children: e, color: t, className: n }) => {
        const [r, o] = b.useState(window.innerWidth > 1024),
            i = () => {
                switch (t) {
                    case 'pink':
                        return 'fill-primaryPink-500';
                    case 'yellow':
                        return 'fill-secondaryYellow-500';
                    default:
                        return 'fill-primaryBlue-500';
                }
            },
            s = r
                ? [
                      'absolute bottom-0 right-0 h-20 w-full overflow-hidden lg:bottom-auto lg:left-0 lg:top-0 lg:h-full lg:w-1/5',
                      i(),
                      n,
                  ]
                : [
                      ' absolute left-0 top-0 h-20 w-full overflow-hidden lg:bottom-auto lg:left-0 lg:top-0 lg:h-full lg:w-1/5',
                      i(),
                      n,
                  ],
            a = () => {
                o(window.innerWidth >= 1024);
            };
        return (
            b.useEffect(
                () => (
                    window.addEventListener('resize', a),
                    () => window.removeEventListener('resize', a)
                ),
            ),
            C.jsx(C.Fragment, {
                children: r
                    ? C.jsxs('aside', {
                          className: s.join(' '),
                          children: [
                              C.jsx('svg', {
                                  id: 'Modo_de_aislamiento',
                                  'data-name': 'Modo de aislamiento',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  viewBox: '0 0 151.32 500',
                                  width: '100%',
                                  preserveAspectRatio: 'none',
                                  height: '100%',
                                  className: '-z-10',
                                  children: C.jsx('path', {
                                      d: 'M645.51,387c-73.56,192.65,18,347,0,500H496.59V387Z',
                                      transform: 'translate(-496.59 -386.99)',
                                  }),
                              }),
                              C.jsx('div', {
                                  className:
                                      'absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center',
                                  children: e,
                              }),
                          ],
                      })
                    : C.jsxs('header', {
                          className: s.join(' '),
                          children: [
                              C.jsx('svg', {
                                  id: 'Capa_1',
                                  'data-name': 'Capa 1',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  viewBox: '0 0 500 150',
                                  width: '100%',
                                  preserveAspectRatio: 'none',
                                  height: '100%',
                                  className: '-z-10 overflow-hidden',
                                  children: C.jsx('path', {
                                      d: 'M879.45,889.57c-170.71-131.19-336,52.69-500-14V740.65h500Z',
                                      transform: 'translate(-379.45 -740.65)',
                                  }),
                              }),
                              C.jsx('div', {
                                  className:
                                      'absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center',
                                  style: { clipPath: 'url(#wavyClip)' },
                                  children: e,
                              }),
                          ],
                      }),
            })
        );
    },
    O$ = ({ children: e }) =>
        C.jsxs('div', {
            className:
                'relative flex h-full flex-col items-center justify-center',
            children: [C.jsx(P$, {}), e, C.jsx(_$, {})],
        }),
    kv = ({ className: e }) => {
        const t = ['flex justify-center font-casualHandy', e];
        return C.jsx('div', {
            className: 'w-full text-9xl',
            children: C.jsxs('h1', {
                className: t.join(' '),
                children: [
                    'Scribly',
                    C.jsx('div', {
                        className: 'ml-0.5 w-fit rotate-6',
                        children: '!',
                    }),
                ],
            }),
        });
    },
    L$ = ({ onSubmit: e }) => {
        const { t } = So(),
            [n, r] = b.useState(''),
            [o, i] = b.useState(''),
            [s, a] = b.useState(''),
            l = (u) => {
                u.preventDefault(), e(n, o, s);
            };
        return C.jsxs('main', {
            className: 'h-96',
            children: [
                C.jsx('h2', {
                    className: 'my-4 text-center text-2xl font-bold',
                    children: t('register.Register'),
                }),
                C.jsxs('p', {
                    children: [
                        t('register.Already'),
                        '  ',
                        C.jsx(Cv, {
                            to: t('/login'),
                            color: 'blue',
                            children: t('login.Login'),
                        }),
                    ],
                }),
                C.jsxs('form', {
                    className: 'mt-8 space-y-6',
                    onSubmit: l,
                    children: [
                        C.jsx(ii, {
                            label: t('register.Email'),
                            inputType: 'email',
                            name: t('register.Email'),
                            placeholder: t('register.Email'),
                            value: n,
                            onChange: (u) => r(u.target.value),
                            required: !0,
                        }),
                        C.jsx(ii, {
                            label: t('register.Username'),
                            inputType: 'text',
                            name: t('register.Username'),
                            placeholder: t('register.Username'),
                            value: s,
                            required: !0,
                            onChange: (u) => a(u.target.value),
                        }),
                        C.jsx(ii, {
                            label: 'Password',
                            inputType: 'password',
                            placeholder: 'Password',
                            name: 'password',
                            value: o,
                            required: !0,
                            onChange: (u) => i(u.target.value),
                        }),
                        C.jsx($v, {
                            className:
                                'mt-4 w-full rounded  px-3 py-2 font-bold text-secondaryYellow-500 duration-200 ease-in-out transition',
                            bgColor: 'zinc-800 ',
                            children: t('register.Register'),
                        }),
                    ],
                }),
            ],
        });
    },
    Tv = () => {
        const e = ho(),
            { t } = So(),
            { loginUser: n, loading: r } = b.useContext(wl),
            o = async (s, a) => {
                n({ email: s, password: a });
            },
            i = async (s, a, l) => {
                wv({ email: s, password: a, username: l });
            };
        return r
            ? C.jsx(xl, {})
            : C.jsx(O$, {
                  children: C.jsx(T$, {
                      children: C.jsxs('div', {
                          className: 'min-h-[550px] pt-9',
                          children: [
                              C.jsx(kv, {}),
                              C.jsx('div', {
                                  className: 'duration-300 transition-all',
                                  children:
                                      e.pathname === t('/login')
                                          ? C.jsx(k$, { onSubmit: o })
                                          : e.pathname === t('/register')
                                          ? C.jsx(L$, { onSubmit: i })
                                          : C.jsxs('div', {
                                                className:
                                                    'flex flex-col items-center justify-center space-y-4',
                                                children: [
                                                    C.jsx(ki, {
                                                        to: '/login',
                                                        className:
                                                            'text-center text-tiviElectricViolet',
                                                        children: 'Login',
                                                    }),
                                                    C.jsx(ki, {
                                                        to: '/register',
                                                        className:
                                                            'text-center text-tiviElectricViolet',
                                                        children: 'Register',
                                                    }),
                                                ],
                                            }),
                              }),
                          ],
                      }),
                  }),
              });
    };
var _v = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    fh = D.createContext && D.createContext(_v),
    In =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (In =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            t = arguments[n];
                            for (var o in t)
                                Object.prototype.hasOwnProperty.call(t, o) &&
                                    (e[o] = t[o]);
                        }
                        return e;
                    }),
                In.apply(this, arguments)
            );
        },
    N$ =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                    t.indexOf(r) < 0 &&
                    (n[r] = e[r]);
            if (e != null && typeof Object.getOwnPropertySymbols == 'function')
                for (
                    var o = 0, r = Object.getOwnPropertySymbols(e);
                    o < r.length;
                    o++
                )
                    t.indexOf(r[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                        (n[r[o]] = e[r[o]]);
            return n;
        };
function Pv(e) {
    return (
        e &&
        e.map(function (t, n) {
            return D.createElement(t.tag, In({ key: n }, t.attr), Pv(t.child));
        })
    );
}
function xe(e) {
    return function (t) {
        return D.createElement(
            R$,
            In({ attr: In({}, e.attr) }, t),
            Pv(e.child),
        );
    };
}
function R$(e) {
    var t = function (n) {
        var r = e.attr,
            o = e.size,
            i = e.title,
            s = N$(e, ['attr', 'size', 'title']),
            a = o || n.size || '1em',
            l;
        return (
            n.className && (l = n.className),
            e.className && (l = (l ? l + ' ' : '') + e.className),
            D.createElement(
                'svg',
                In(
                    {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                        strokeWidth: '0',
                    },
                    n.attr,
                    r,
                    s,
                    {
                        className: l,
                        style: In(
                            In({ color: e.color || n.color }, n.style),
                            e.style,
                        ),
                        height: a,
                        width: a,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                ),
                i && D.createElement('title', null, i),
                e.children,
            )
        );
    };
    return fh !== void 0
        ? D.createElement(fh.Consumer, null, function (n) {
              return t(n);
          })
        : t(_v);
}
function F$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z',
                },
            },
        ],
    })(e);
}
function A$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 576 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z',
                },
            },
        ],
    })(e);
}
function j$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z',
                },
            },
        ],
    })(e);
}
function I$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z',
                },
            },
        ],
    })(e);
}
function M$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 448 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z',
                },
            },
        ],
    })(e);
}
function z$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 640 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z',
                },
            },
        ],
    })(e);
}
function D$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z',
                },
            },
        ],
    })(e);
}
function U$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z',
                },
            },
        ],
    })(e);
}
function B$(e) {
    return xe({
        tag: 'svg',
        attr: { role: 'img', viewBox: '0 0 24 24' },
        child: [
            { tag: 'title', attr: {}, child: [] },
            {
                tag: 'path',
                attr: {
                    d: 'M20.1 5.52V1.5h-.18c-3.36.15-6.15 2.31-7.83 4.02l-.09.09-.09-.09C10.2 3.81 7.44 1.65 4.08 1.5H3.9v4.02H0v6.93c0 1.68.06 3.36.18 4.74a5.57 5.57 0 005.19 5.1c2.13.12 4.38.21 6.63.21s4.5-.09 6.63-.24a5.57 5.57 0 005.19-5.1c.12-1.38.18-3.06.18-4.74v-6.9zm0 6.93c0 1.59-.06 3.15-.18 4.41-.09.81-.75 1.47-1.56 1.5a90 90 0 01-12.72 0c-.81-.03-1.5-.69-1.56-1.5-.12-1.26-.18-2.85-.18-4.41V5.52c2.82.12 5.64 3.15 6.48 4.32L12 12.09l1.62-2.25c.84-1.2 3.66-4.2 6.48-4.32z',
                },
            },
        ],
    })(e);
}
function H$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
            {
                tag: 'path',
                attr: {
                    d: 'M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2H5zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z',
                },
            },
        ],
    })(e);
}
function ok(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z',
                },
            },
        ],
    })(e);
}
function ik(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z',
                },
            },
        ],
    })(e);
}
function V$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
                },
            },
        ],
    })(e);
}
function K$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z',
                },
            },
        ],
    })(e);
}
function W$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z',
                },
            },
        ],
    })(e);
}
function G$(e) {
    return xe({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z',
                },
            },
        ],
    })(e);
}
function q$(e) {
    return xe({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z',
                },
            },
        ],
    })(e);
}
function Q$(e) {
    return xe({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z',
                },
            },
        ],
    })(e);
}
function J$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M200,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM94,80A10,10,0,1,1,84,70,10,10,0,0,1,94,80Zm0,96a10,10,0,1,1-10-10A10,10,0,0,1,94,176Zm0-48a10,10,0,1,1-10-10A10,10,0,0,1,94,128Z',
                },
            },
        ],
    })(e);
}
function Y$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M128,20a92.1,92.1,0,0,0-92,92c0,23.19,12.26,53.33,32.8,80.63C84.58,213.6,108.41,236,128,236s43.42-22.4,59.2-43.37C207.74,165.33,220,135.19,220,112A92.1,92.1,0,0,0,128,20Zm52.8,167.82C162.44,212.23,141.71,228,128,228s-34.44-15.77-52.8-40.18C56,162.24,44,133.19,44,112a84,84,0,0,1,168,0C212,133.19,200.05,162.24,180.8,187.82ZM116,136a36,36,0,0,0-36-36,12,12,0,0,0-12,12,36,36,0,0,0,36,36A12,12,0,0,0,116,136Zm-12,4a28,28,0,0,1-28-28,4,4,0,0,1,4-4,28,28,0,0,1,28,28A4,4,0,0,1,104,140Zm72-40a36,36,0,0,0-36,36,12,12,0,0,0,12,12,36,36,0,0,0,36-36A12,12,0,0,0,176,100Zm-24,40a4,4,0,0,1-4-4,28,28,0,0,1,28-28,4,4,0,0,1,4,4A28,28,0,0,1,152,140Zm-4,44a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,184Z',
                },
            },
        ],
    })(e);
}
function Z$(e) {
    return xe({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M496.938 14.063c-95.14 3.496-172.297 24.08-231.282 55.812l-29.47 49.28-4.967-28.093c-10.535 7.402-20.314 15.222-29.314 23.407l-14.687 45.06-5.032-25.155c-40.65 45.507-60.41 99.864-58.938 155.906 47.273-93.667 132.404-172.727 211.97-221.155l9.717 15.97c-75.312 45.838-156.387 121.202-202.187 208.25h12.156c19.78-12.02 39.16-26.858 58.406-43.44l-30.28 1.595 54.218-23.094c46.875-43.637 93.465-94.974 143.313-138.28l-24.47-5.19 56.5-21.03c26.853-20.485 54.8-37.844 84.344-49.843zM59.53 312.03v30.408H194V312.03H59.53zm20.376 49.095L47.25 389.813 24.97 474.78l14.53 15.876h177.22l14.56-15.875L209 389.814l-30.906-28.688H79.906z',
                },
            },
        ],
    })(e);
}
const sk = (e) => C.jsx(I$, { ...e }),
    ak = (e) => C.jsx(j$, { ...e }),
    lk = (e) => C.jsx(A$, { ...e }),
    uk = (e) => C.jsx(q$, { ...e }),
    ck = (e) => C.jsx(G$, { ...e }),
    fk = (e) => C.jsx(V$, { ...e }),
    dk = (e) => C.jsx(W$, { ...e }),
    pk = (e) => C.jsx(D$, { ...e }),
    hk = (e) => C.jsx(F$, { ...e }),
    X$ = (e) => C.jsx(U$, { ...e }),
    gk = (e) => C.jsx(z$, { ...e }),
    mk = (e) => C.jsx(M$, { ...e }),
    vk = (e) => C.jsx(B$, { ...e }),
    yk = (e) => C.jsx(H$, { ...e }),
    wk = (e) => C.jsx(K$, { ...e }),
    xk = (e) => C.jsx(Z$, { ...e }),
    bk = (e) => C.jsx(Y$, { ...e }),
    Sk = (e) => C.jsx(J$, { ...e }),
    Ek = (e) => C.jsx(Q$, { ...e }),
    $k = () =>
        C.jsxs('div', {
            className: 'allRelative h-full w-full overflow-hidden  bg-sky-200',
            children: [
                C.jsx('div', {
                    className: 'frame',
                    children: C.jsx('div', {
                        className: 'plane-container',
                        children: C.jsx('a', {
                            href: 'http://customer.io/',
                            target: '_blank',
                            rel: 'noreferrer',
                            children: C.jsxs('svg', {
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg',
                                x: '0px',
                                y: '0px',
                                width: '1131.53px',
                                height: '379.304px',
                                viewBox: '0 0 1131.53 379.304',
                                enableBackground: 'new 0 0 1131.53 379.304',
                                xmlSpace: 'preserve',
                                className: 'plane',
                                children: [
                                    C.jsx('polygon', {
                                        fill: '#D8D8D8',
                                        points: '72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  ',
                                    }),
                                    C.jsx('polygon', {
                                        fill: '#C4C4C3',
                                        points: '1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   ',
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
                C.jsxs('div', {
                    className: 'clouds',
                    children: [
                        C.jsx('svg', {
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            x: '0px',
                            y: '0px',
                            width: '762px',
                            height: '331px',
                            viewBox: '0 0 762 331',
                            enableBackground: 'new 0 0 762 331',
                            xmlSpace: 'preserve',
                            className: 'cloud big front slowest',
                            children: C.jsx('path', {
                                fill: '#FFFFFF',
                                d: `M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z`,
                            }),
                        }),
                        C.jsx('svg', {
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            x: '0px',
                            y: '0px',
                            width: '762px',
                            height: '331px',
                            viewBox: '0 0 762 331',
                            enableBackground: 'new 0 0 762 331',
                            xmlSpace: 'preserve',
                            className: 'cloud distant smaller',
                            children: C.jsx('path', {
                                fill: '#FFFFFF',
                                d: `M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z`,
                            }),
                        }),
                        C.jsx('svg', {
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            x: '0px',
                            y: '0px',
                            width: '762px',
                            height: '331px',
                            viewBox: '0 0 762 331',
                            enableBackground: 'new 0 0 762 331',
                            xmlSpace: 'preserve',
                            className: 'cloud small slow',
                            children: C.jsx('path', {
                                fill: '#FFFFFF',
                                d: `M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z`,
                            }),
                        }),
                        C.jsx('svg', {
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            x: '0px',
                            y: '0px',
                            width: '762px',
                            height: '331px',
                            viewBox: '0 0 762 331',
                            enableBackground: 'new 0 0 762 331',
                            xmlSpace: 'preserve',
                            className: 'cloud distant super-slow massive',
                            children: C.jsx('path', {
                                fill: '#FFFFFF',
                                d: `M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z`,
                            }),
                        }),
                        C.jsx('svg', {
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            x: '0px',
                            y: '0px',
                            width: '762px',
                            height: '331px',
                            viewBox: '0 0 762 331',
                            enableBackground: 'new 0 0 762 331',
                            xmlSpace: 'preserve',
                            className: 'cloud slower',
                            children: C.jsx('path', {
                                fill: '#FFFFFF',
                                d: `M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z`,
                            }),
                        }),
                    ],
                }),
            ],
        });
function eC(e) {
    const t = go();
    return C.jsxs('header', {
        className: 'flex w-full justify-between',
        children: [
            C.jsxs('nav', {
                className:
                    'flex w-full items-center justify-between bg-mainBackground-100 px-4 py-2',
                children: [
                    C.jsx('button', {
                        onClick: () => t(-1),
                        className:
                            'duration-150 ease-in-out transition hover:text-primaryBlue-500',
                        children: C.jsx(X$, { className: 'h-16 w-16 ' }),
                    }),
                    C.jsx(ki, {
                        to: '/',
                        children: C.jsx(kv, {
                            className:
                                'text-5xl duration-150 ease-in-out transition hover:text-primaryPink-500',
                        }),
                    }),
                ],
            }),
            e.children,
        ],
    });
}
const Ov = () =>
        C.jsxs('div', {
            id: 'notFound',
            children: [
                C.jsx(eC, {}),
                C.jsx('main', {
                    id: 'main',
                    children: C.jsx('div', {
                        className: 'fof',
                        children: C.jsx('h1', { children: 'Error 404' }),
                    }),
                }),
            ],
        }),
    Ck = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: Ov },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    tC = b.lazy(() =>
        co(
            () => import('./home-63169ac4.js'),
            ['assets/home-63169ac4.js', 'assets/index-179c6cbe.js'],
        ),
    ),
    nC = b.lazy(() =>
        co(
            () => import('./new-e4ff0455.js'),
            [
                'assets/new-e4ff0455.js',
                'assets/Note-d300367a.js',
                'assets/index-179c6cbe.js',
                'assets/notes-0819c811.js',
                'assets/Tree-0fce1b46.js',
            ],
        ),
    ),
    rC = b.lazy(() =>
        co(
            () => import('./folders-44b0850a.js'),
            [
                'assets/folders-44b0850a.js',
                'assets/Tree-0fce1b46.js',
                'assets/notes-0819c811.js',
            ],
        ),
    ),
    dh = b.lazy(() => co(() => import('./activate-c36f46d2.js'), [])),
    oC = b.lazy(() =>
        co(
            () => import('./profile-1624161a.js'),
            ['assets/profile-1624161a.js', 'assets/notes-0819c811.js'],
        ),
    ),
    iC = b.lazy(() =>
        co(
            () => import('./lesson-763247dd.js'),
            [
                'assets/lesson-763247dd.js',
                'assets/Note-d300367a.js',
                'assets/index-179c6cbe.js',
                'assets/notes-0819c811.js',
                'assets/Tree-0fce1b46.js',
            ],
        ),
    ),
    ph = Wi(tC),
    sC = Wi(nC),
    aC = Wi(rC),
    hh = Wi(oC),
    lC = Wi(iC),
    uC = Sv(Tv),
    cC = Sv(Tv);
function fC() {
    const { t: e } = So();
    return C.jsxs(C.Fragment, {
        children: [
            C.jsx($c, {
                position: 'top-right',
                autoClose: 5e3,
                hideProgressBar: !1,
                newestOnTop: !1,
                closeOnClick: !0,
                rtl: !1,
                pauseOnFocusLoss: !0,
                draggable: !0,
                pauseOnHover: !0,
                theme: 'light',
            }),
            C.jsx(C$, {
                children: C.jsx(b.Suspense, {
                    fallback: C.jsx(xl, {}),
                    children: C.jsxs(mw, {
                        children: [
                            C.jsx(rt, { path: e('/'), element: C.jsx(ph, {}) }),
                            C.jsx(rt, {
                                path: e('/about'),
                                element: C.jsx(ph, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/note'),
                                element: C.jsx(sC, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/folders'),
                                element: C.jsx(aC, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/login'),
                                element: C.jsx(uC, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/register'),
                                element: C.jsx(cC, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/activate') + '/:token',
                                element: C.jsx(dh, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/activate'),
                                element: C.jsx(dh, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/profile') + '/:username',
                                element: C.jsx(hh, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/profile'),
                                element: C.jsx(hh, {}),
                            }),
                            C.jsx(rt, {
                                path: e('/lesson') + '/:lessonId',
                                element: C.jsx(lC, {}),
                            }),
                            C.jsx(rt, { path: '*', element: C.jsx(Ov, {}) }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
const dC = {
    type: 'logger',
    log(e) {
        this.output('log', e);
    },
    warn(e) {
        this.output('warn', e);
    },
    error(e) {
        this.output('error', e);
    },
    output(e, t) {
        console && console[e] && console[e].apply(console, t);
    },
};
class Ia {
    constructor(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, n);
    }
    init(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (this.prefix = n.prefix || 'i18next:'),
            (this.logger = t || dC),
            (this.options = n),
            (this.debug = n.debug);
    }
    log() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, 'log', '', !0);
    }
    warn() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, 'warn', '', !0);
    }
    error() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, 'error', '');
    }
    deprecate() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
    }
    forward(t, n, r, o) {
        return o && !this.debug
            ? null
            : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`),
              this.logger[n](t));
    }
    create(t) {
        return new Ia(this.logger, {
            prefix: `${this.prefix}:${t}:`,
            ...this.options,
        });
    }
    clone(t) {
        return (
            (t = t || this.options),
            (t.prefix = t.prefix || this.prefix),
            new Ia(this.logger, t)
        );
    }
}
var It = new Ia();
class bl {
    constructor() {
        this.observers = {};
    }
    on(t, n) {
        return (
            t.split(' ').forEach((r) => {
                (this.observers[r] = this.observers[r] || []),
                    this.observers[r].push(n);
            }),
            this
        );
    }
    off(t, n) {
        if (this.observers[t]) {
            if (!n) {
                delete this.observers[t];
                return;
            }
            this.observers[t] = this.observers[t].filter((r) => r !== n);
        }
    }
    emit(t) {
        for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
        )
            r[o - 1] = arguments[o];
        this.observers[t] &&
            [].concat(this.observers[t]).forEach((s) => {
                s(...r);
            }),
            this.observers['*'] &&
                [].concat(this.observers['*']).forEach((s) => {
                    s.apply(s, [t, ...r]);
                });
    }
}
function jo() {
    let e, t;
    const n = new Promise((r, o) => {
        (e = r), (t = o);
    });
    return (n.resolve = e), (n.reject = t), n;
}
function gh(e) {
    return e == null ? '' : '' + e;
}
function pC(e, t, n) {
    e.forEach((r) => {
        t[r] && (n[r] = t[r]);
    });
}
function $d(e, t, n) {
    function r(s) {
        return s && s.indexOf('###') > -1 ? s.replace(/###/g, '.') : s;
    }
    function o() {
        return !e || typeof e == 'string';
    }
    const i = typeof t != 'string' ? [].concat(t) : t.split('.');
    for (; i.length > 1; ) {
        if (o()) return {};
        const s = r(i.shift());
        !e[s] && n && (e[s] = new n()),
            Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {});
    }
    return o() ? {} : { obj: e, k: r(i.shift()) };
}
function mh(e, t, n) {
    const { obj: r, k: o } = $d(e, t, Object);
    r[o] = n;
}
function hC(e, t, n, r) {
    const { obj: o, k: i } = $d(e, t, Object);
    (o[i] = o[i] || []), r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function Ma(e, t) {
    const { obj: n, k: r } = $d(e, t);
    if (n) return n[r];
}
function gC(e, t, n) {
    const r = Ma(e, n);
    return r !== void 0 ? r : Ma(t, n);
}
function Lv(e, t, n) {
    for (const r in t)
        r !== '__proto__' &&
            r !== 'constructor' &&
            (r in e
                ? typeof e[r] == 'string' ||
                  e[r] instanceof String ||
                  typeof t[r] == 'string' ||
                  t[r] instanceof String
                    ? n && (e[r] = t[r])
                    : Lv(e[r], t[r], n)
                : (e[r] = t[r]));
    return e;
}
function $r(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var mC = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
};
function vC(e) {
    return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => mC[t]) : e;
}
const yC = [' ', ',', '?', '!', ';'];
function wC(e, t, n) {
    (t = t || ''), (n = n || '');
    const r = yC.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const o = new RegExp(
        `(${r.map((s) => (s === '?' ? '\\?' : s)).join('|')})`,
    );
    let i = !o.test(e);
    if (!i) {
        const s = e.indexOf(n);
        s > 0 && !o.test(e.substring(0, s)) && (i = !0);
    }
    return i;
}
function za(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length; ++i) {
        if (!o || (typeof o[r[i]] == 'string' && i + 1 < r.length)) return;
        if (o[r[i]] === void 0) {
            let s = 2,
                a = r.slice(i, i + s).join(n),
                l = o[a];
            for (; l === void 0 && r.length > i + s; )
                s++, (a = r.slice(i, i + s).join(n)), (l = o[a]);
            if (l === void 0) return;
            if (l === null) return null;
            if (t.endsWith(a)) {
                if (typeof l == 'string') return l;
                if (a && typeof l[a] == 'string') return l[a];
            }
            const u = r.slice(i + s).join(n);
            return u ? za(l, u, n) : void 0;
        }
        o = o[r[i]];
    }
    return o;
}
function Da(e) {
    return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class vh extends bl {
    constructor(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { ns: ['translation'], defaultNS: 'translation' };
        super(),
            (this.data = t || {}),
            (this.options = n),
            this.options.keySeparator === void 0 &&
                (this.options.keySeparator = '.'),
            this.options.ignoreJSONStructure === void 0 &&
                (this.options.ignoreJSONStructure = !0);
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
    }
    removeNamespaces(t) {
        const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1);
    }
    getResource(t, n, r) {
        let o =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const i =
                o.keySeparator !== void 0
                    ? o.keySeparator
                    : this.options.keySeparator,
            s =
                o.ignoreJSONStructure !== void 0
                    ? o.ignoreJSONStructure
                    : this.options.ignoreJSONStructure;
        let a = [t, n];
        r && typeof r != 'string' && (a = a.concat(r)),
            r && typeof r == 'string' && (a = a.concat(i ? r.split(i) : r)),
            t.indexOf('.') > -1 && (a = t.split('.'));
        const l = Ma(this.data, a);
        return l || !s || typeof r != 'string'
            ? l
            : za(this.data && this.data[t] && this.data[t][n], r, i);
    }
    addResource(t, n, r, o) {
        let i =
            arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : { silent: !1 };
        const s =
            i.keySeparator !== void 0
                ? i.keySeparator
                : this.options.keySeparator;
        let a = [t, n];
        r && (a = a.concat(s ? r.split(s) : r)),
            t.indexOf('.') > -1 && ((a = t.split('.')), (o = n), (n = a[1])),
            this.addNamespaces(n),
            mh(this.data, a, o),
            i.silent || this.emit('added', t, n, r, o);
    }
    addResources(t, n, r) {
        let o =
            arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : { silent: !1 };
        for (const i in r)
            (typeof r[i] == 'string' ||
                Object.prototype.toString.apply(r[i]) === '[object Array]') &&
                this.addResource(t, n, i, r[i], { silent: !0 });
        o.silent || this.emit('added', t, n, r);
    }
    addResourceBundle(t, n, r, o, i) {
        let s =
                arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : { silent: !1 },
            a = [t, n];
        t.indexOf('.') > -1 &&
            ((a = t.split('.')), (o = r), (r = n), (n = a[1])),
            this.addNamespaces(n);
        let l = Ma(this.data, a) || {};
        o ? Lv(l, r, i) : (l = { ...l, ...r }),
            mh(this.data, a, l),
            s.silent || this.emit('added', t, n, r);
    }
    removeResourceBundle(t, n) {
        this.hasResourceBundle(t, n) && delete this.data[t][n],
            this.removeNamespaces(n),
            this.emit('removed', t, n);
    }
    hasResourceBundle(t, n) {
        return this.getResource(t, n) !== void 0;
    }
    getResourceBundle(t, n) {
        return (
            n || (n = this.options.defaultNS),
            this.options.compatibilityAPI === 'v1'
                ? { ...this.getResource(t, n) }
                : this.getResource(t, n)
        );
    }
    getDataByLanguage(t) {
        return this.data[t];
    }
    hasLanguageSomeTranslations(t) {
        const n = this.getDataByLanguage(t);
        return !!((n && Object.keys(n)) || []).find(
            (o) => n[o] && Object.keys(n[o]).length > 0,
        );
    }
    toJSON() {
        return this.data;
    }
}
var Nv = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e;
    },
    handle(e, t, n, r, o) {
        return (
            e.forEach((i) => {
                this.processors[i] &&
                    (t = this.processors[i].process(t, n, r, o));
            }),
            t
        );
    },
};
const yh = {};
class Ua extends bl {
    constructor(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
            pC(
                [
                    'resourceStore',
                    'languageUtils',
                    'pluralResolver',
                    'interpolator',
                    'backendConnector',
                    'i18nFormat',
                    'utils',
                ],
                t,
                this,
            ),
            (this.options = n),
            this.options.keySeparator === void 0 &&
                (this.options.keySeparator = '.'),
            (this.logger = It.create('translator'));
    }
    changeLanguage(t) {
        t && (this.language = t);
    }
    exists(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} };
        if (t == null) return !1;
        const r = this.resolve(t, n);
        return r && r.res !== void 0;
    }
    extractFromKey(t, n) {
        let r =
            n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ':');
        const o =
            n.keySeparator !== void 0
                ? n.keySeparator
                : this.options.keySeparator;
        let i = n.ns || this.options.defaultNS || [];
        const s = r && t.indexOf(r) > -1,
            a =
                !this.options.userDefinedKeySeparator &&
                !n.keySeparator &&
                !this.options.userDefinedNsSeparator &&
                !n.nsSeparator &&
                !wC(t, r, o);
        if (s && !a) {
            const l = t.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0) return { key: t, namespaces: i };
            const u = t.split(r);
            (r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
                (i = u.shift()),
                (t = u.join(o));
        }
        return typeof i == 'string' && (i = [i]), { key: t, namespaces: i };
    }
    translate(t, n, r) {
        if (
            (typeof n != 'object' &&
                this.options.overloadTranslationOptionHandler &&
                (n = this.options.overloadTranslationOptionHandler(arguments)),
            typeof n == 'object' && (n = { ...n }),
            n || (n = {}),
            t == null)
        )
            return '';
        Array.isArray(t) || (t = [String(t)]);
        const o =
                n.returnDetails !== void 0
                    ? n.returnDetails
                    : this.options.returnDetails,
            i =
                n.keySeparator !== void 0
                    ? n.keySeparator
                    : this.options.keySeparator,
            { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
            l = a[a.length - 1],
            u = n.lng || this.language,
            c =
                n.appendNamespaceToCIMode ||
                this.options.appendNamespaceToCIMode;
        if (u && u.toLowerCase() === 'cimode') {
            if (c) {
                const E = n.nsSeparator || this.options.nsSeparator;
                return o
                    ? {
                          res: `${l}${E}${s}`,
                          usedKey: s,
                          exactUsedKey: s,
                          usedLng: u,
                          usedNS: l,
                      }
                    : `${l}${E}${s}`;
            }
            return o
                ? { res: s, usedKey: s, exactUsedKey: s, usedLng: u, usedNS: l }
                : s;
        }
        const f = this.resolve(t, n);
        let d = f && f.res;
        const v = (f && f.usedKey) || s,
            g = (f && f.exactUsedKey) || s,
            x = Object.prototype.toString.apply(d),
            $ = ['[object Number]', '[object Function]', '[object RegExp]'],
            m =
                n.joinArrays !== void 0
                    ? n.joinArrays
                    : this.options.joinArrays,
            h = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (
            h &&
            d &&
            typeof d != 'string' &&
            typeof d != 'boolean' &&
            typeof d != 'number' &&
            $.indexOf(x) < 0 &&
            !(typeof m == 'string' && x === '[object Array]')
        ) {
            if (!n.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler ||
                    this.logger.warn(
                        'accessing an object - but returnObjects options is not enabled!',
                    );
                const E = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(v, d, { ...n, ns: a })
                    : `key '${s} (${this.language})' returned an object instead of string.`;
                return o ? ((f.res = E), f) : E;
            }
            if (i) {
                const E = x === '[object Array]',
                    k = E ? [] : {},
                    O = E ? g : v;
                for (const N in d)
                    if (Object.prototype.hasOwnProperty.call(d, N)) {
                        const S = `${O}${i}${N}`;
                        (k[N] = this.translate(S, {
                            ...n,
                            joinArrays: !1,
                            ns: a,
                        })),
                            k[N] === S && (k[N] = d[N]);
                    }
                d = k;
            }
        } else if (h && typeof m == 'string' && x === '[object Array]')
            (d = d.join(m)), d && (d = this.extendTranslation(d, t, n, r));
        else {
            let E = !1,
                k = !1;
            const O = n.count !== void 0 && typeof n.count != 'string',
                N = Ua.hasDefaultValue(n),
                S = O ? this.pluralResolver.getSuffix(u, n.count, n) : '',
                I =
                    n.ordinal && O
                        ? this.pluralResolver.getSuffix(u, n.count, {
                              ordinal: !1,
                          })
                        : '',
                z =
                    n[`defaultValue${S}`] ||
                    n[`defaultValue${I}`] ||
                    n.defaultValue;
            !this.isValidLookup(d) && N && ((E = !0), (d = z)),
                this.isValidLookup(d) || ((k = !0), (d = s));
            const K =
                    (n.missingKeyNoValueFallbackToKey ||
                        this.options.missingKeyNoValueFallbackToKey) &&
                    k
                        ? void 0
                        : d,
                P = N && z !== d && this.options.updateMissing;
            if (k || E || P) {
                if (
                    (this.logger.log(
                        P ? 'updateKey' : 'missingKey',
                        u,
                        l,
                        s,
                        P ? z : d,
                    ),
                    i)
                ) {
                    const ee = this.resolve(s, { ...n, keySeparator: !1 });
                    ee &&
                        ee.res &&
                        this.logger.warn(
                            'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                        );
                }
                let R = [];
                const Z = this.languageUtils.getFallbackCodes(
                    this.options.fallbackLng,
                    n.lng || this.language,
                );
                if (this.options.saveMissingTo === 'fallback' && Z && Z[0])
                    for (let ee = 0; ee < Z.length; ee++) R.push(Z[ee]);
                else
                    this.options.saveMissingTo === 'all'
                        ? (R = this.languageUtils.toResolveHierarchy(
                              n.lng || this.language,
                          ))
                        : R.push(n.lng || this.language);
                const ge = (ee, A, V) => {
                    const W = N && V !== d ? V : K;
                    this.options.missingKeyHandler
                        ? this.options.missingKeyHandler(ee, l, A, W, P, n)
                        : this.backendConnector &&
                          this.backendConnector.saveMissing &&
                          this.backendConnector.saveMissing(ee, l, A, W, P, n),
                        this.emit('missingKey', ee, l, A, d);
                };
                this.options.saveMissing &&
                    (this.options.saveMissingPlurals && O
                        ? R.forEach((ee) => {
                              this.pluralResolver
                                  .getSuffixes(ee, n)
                                  .forEach((A) => {
                                      ge(
                                          [ee],
                                          s + A,
                                          n[`defaultValue${A}`] || z,
                                      );
                                  });
                          })
                        : ge(R, s, z));
            }
            (d = this.extendTranslation(d, t, n, f, r)),
                k &&
                    d === s &&
                    this.options.appendNamespaceToMissingKey &&
                    (d = `${l}:${s}`),
                (k || E) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== 'v1'
                        ? (d = this.options.parseMissingKeyHandler(
                              this.options.appendNamespaceToMissingKey
                                  ? `${l}:${s}`
                                  : s,
                              E ? d : void 0,
                          ))
                        : (d = this.options.parseMissingKeyHandler(d)));
        }
        return o ? ((f.res = d), f) : d;
    }
    extendTranslation(t, n, r, o, i) {
        var s = this;
        if (this.i18nFormat && this.i18nFormat.parse)
            t = this.i18nFormat.parse(
                t,
                { ...this.options.interpolation.defaultVariables, ...r },
                o.usedLng,
                o.usedNS,
                o.usedKey,
                { resolved: o },
            );
        else if (!r.skipInterpolation) {
            r.interpolation &&
                this.interpolator.init({
                    ...r,
                    interpolation: {
                        ...this.options.interpolation,
                        ...r.interpolation,
                    },
                });
            const u =
                typeof t == 'string' &&
                (r &&
                r.interpolation &&
                r.interpolation.skipOnVariables !== void 0
                    ? r.interpolation.skipOnVariables
                    : this.options.interpolation.skipOnVariables);
            let c;
            if (u) {
                const d = t.match(this.interpolator.nestingRegexp);
                c = d && d.length;
            }
            let f = r.replace && typeof r.replace != 'string' ? r.replace : r;
            if (
                (this.options.interpolation.defaultVariables &&
                    (f = {
                        ...this.options.interpolation.defaultVariables,
                        ...f,
                    }),
                (t = this.interpolator.interpolate(
                    t,
                    f,
                    r.lng || this.language,
                    r,
                )),
                u)
            ) {
                const d = t.match(this.interpolator.nestingRegexp),
                    v = d && d.length;
                c < v && (r.nest = !1);
            }
            !r.lng &&
                this.options.compatibilityAPI !== 'v1' &&
                o &&
                o.res &&
                (r.lng = o.usedLng),
                r.nest !== !1 &&
                    (t = this.interpolator.nest(
                        t,
                        function () {
                            for (
                                var d = arguments.length,
                                    v = new Array(d),
                                    g = 0;
                                g < d;
                                g++
                            )
                                v[g] = arguments[g];
                            return i && i[0] === v[0] && !r.context
                                ? (s.logger.warn(
                                      `It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`,
                                  ),
                                  null)
                                : s.translate(...v, n);
                        },
                        r,
                    )),
                r.interpolation && this.interpolator.reset();
        }
        const a = r.postProcess || this.options.postProcess,
            l = typeof a == 'string' ? [a] : a;
        return (
            t != null &&
                l &&
                l.length &&
                r.applyPostProcessor !== !1 &&
                (t = Nv.handle(
                    l,
                    t,
                    n,
                    this.options && this.options.postProcessPassResolved
                        ? { i18nResolved: o, ...r }
                        : r,
                    this,
                )),
            t
        );
    }
    resolve(t) {
        let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
            r,
            o,
            i,
            s,
            a;
        return (
            typeof t == 'string' && (t = [t]),
            t.forEach((l) => {
                if (this.isValidLookup(r)) return;
                const u = this.extractFromKey(l, n),
                    c = u.key;
                o = c;
                let f = u.namespaces;
                this.options.fallbackNS &&
                    (f = f.concat(this.options.fallbackNS));
                const d = n.count !== void 0 && typeof n.count != 'string',
                    v =
                        d &&
                        !n.ordinal &&
                        n.count === 0 &&
                        this.pluralResolver.shouldUseIntlApi(),
                    g =
                        n.context !== void 0 &&
                        (typeof n.context == 'string' ||
                            typeof n.context == 'number') &&
                        n.context !== '',
                    x = n.lngs
                        ? n.lngs
                        : this.languageUtils.toResolveHierarchy(
                              n.lng || this.language,
                              n.fallbackLng,
                          );
                f.forEach(($) => {
                    this.isValidLookup(r) ||
                        ((a = $),
                        !yh[`${x[0]}-${$}`] &&
                            this.utils &&
                            this.utils.hasLoadedNamespace &&
                            !this.utils.hasLoadedNamespace(a) &&
                            ((yh[`${x[0]}-${$}`] = !0),
                            this.logger.warn(
                                `key "${o}" for languages "${x.join(
                                    ', ',
                                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                            )),
                        x.forEach((m) => {
                            if (this.isValidLookup(r)) return;
                            s = m;
                            const h = [c];
                            if (
                                this.i18nFormat &&
                                this.i18nFormat.addLookupKeys
                            )
                                this.i18nFormat.addLookupKeys(h, c, m, $, n);
                            else {
                                let E;
                                d &&
                                    (E = this.pluralResolver.getSuffix(
                                        m,
                                        n.count,
                                        n,
                                    ));
                                const k = `${this.options.pluralSeparator}zero`,
                                    O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (
                                    (d &&
                                        (h.push(c + E),
                                        n.ordinal &&
                                            E.indexOf(O) === 0 &&
                                            h.push(
                                                c +
                                                    E.replace(
                                                        O,
                                                        this.options
                                                            .pluralSeparator,
                                                    ),
                                            ),
                                        v && h.push(c + k)),
                                    g)
                                ) {
                                    const N = `${c}${this.options.contextSeparator}${n.context}`;
                                    h.push(N),
                                        d &&
                                            (h.push(N + E),
                                            n.ordinal &&
                                                E.indexOf(O) === 0 &&
                                                h.push(
                                                    N +
                                                        E.replace(
                                                            O,
                                                            this.options
                                                                .pluralSeparator,
                                                        ),
                                                ),
                                            v && h.push(N + k));
                                }
                            }
                            let y;
                            for (; (y = h.pop()); )
                                this.isValidLookup(r) ||
                                    ((i = y),
                                    (r = this.getResource(m, $, y, n)));
                        }));
                });
            }),
            { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: a }
        );
    }
    isValidLookup(t) {
        return (
            t !== void 0 &&
            !(!this.options.returnNull && t === null) &&
            !(!this.options.returnEmptyString && t === '')
        );
    }
    getResource(t, n, r) {
        let o =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(t, n, r, o)
            : this.resourceStore.getResource(t, n, r, o);
    }
    static hasDefaultValue(t) {
        const n = 'defaultValue';
        for (const r in t)
            if (
                Object.prototype.hasOwnProperty.call(t, r) &&
                n === r.substring(0, n.length) &&
                t[r] !== void 0
            )
                return !0;
        return !1;
    }
}
function $u(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
class wh {
    constructor(t) {
        (this.options = t),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = It.create('languageUtils'));
    }
    getScriptPartFromCode(t) {
        if (((t = Da(t)), !t || t.indexOf('-') < 0)) return null;
        const n = t.split('-');
        return n.length === 2 ||
            (n.pop(), n[n.length - 1].toLowerCase() === 'x')
            ? null
            : this.formatLanguageCode(n.join('-'));
    }
    getLanguagePartFromCode(t) {
        if (((t = Da(t)), !t || t.indexOf('-') < 0)) return t;
        const n = t.split('-');
        return this.formatLanguageCode(n[0]);
    }
    formatLanguageCode(t) {
        if (typeof t == 'string' && t.indexOf('-') > -1) {
            const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
            let r = t.split('-');
            return (
                this.options.lowerCaseLng
                    ? (r = r.map((o) => o.toLowerCase()))
                    : r.length === 2
                    ? ((r[0] = r[0].toLowerCase()),
                      (r[1] = r[1].toUpperCase()),
                      n.indexOf(r[1].toLowerCase()) > -1 &&
                          (r[1] = $u(r[1].toLowerCase())))
                    : r.length === 3 &&
                      ((r[0] = r[0].toLowerCase()),
                      r[1].length === 2 && (r[1] = r[1].toUpperCase()),
                      r[0] !== 'sgn' &&
                          r[2].length === 2 &&
                          (r[2] = r[2].toUpperCase()),
                      n.indexOf(r[1].toLowerCase()) > -1 &&
                          (r[1] = $u(r[1].toLowerCase())),
                      n.indexOf(r[2].toLowerCase()) > -1 &&
                          (r[2] = $u(r[2].toLowerCase()))),
                r.join('-')
            );
        }
        return this.options.cleanCode || this.options.lowerCaseLng
            ? t.toLowerCase()
            : t;
    }
    isSupportedCode(t) {
        return (
            (this.options.load === 'languageOnly' ||
                this.options.nonExplicitSupportedLngs) &&
                (t = this.getLanguagePartFromCode(t)),
            !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(t) > -1
        );
    }
    getBestMatchFromCodes(t) {
        if (!t) return null;
        let n;
        return (
            t.forEach((r) => {
                if (n) return;
                const o = this.formatLanguageCode(r);
                (!this.options.supportedLngs || this.isSupportedCode(o)) &&
                    (n = o);
            }),
            !n &&
                this.options.supportedLngs &&
                t.forEach((r) => {
                    if (n) return;
                    const o = this.getLanguagePartFromCode(r);
                    if (this.isSupportedCode(o)) return (n = o);
                    n = this.options.supportedLngs.find((i) => {
                        if (i === o) return i;
                        if (
                            !(i.indexOf('-') < 0 && o.indexOf('-') < 0) &&
                            i.indexOf(o) === 0
                        )
                            return i;
                    });
                }),
            n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
            n
        );
    }
    getFallbackCodes(t, n) {
        if (!t) return [];
        if (
            (typeof t == 'function' && (t = t(n)),
            typeof t == 'string' && (t = [t]),
            Object.prototype.toString.apply(t) === '[object Array]')
        )
            return t;
        if (!n) return t.default || [];
        let r = t[n];
        return (
            r || (r = t[this.getScriptPartFromCode(n)]),
            r || (r = t[this.formatLanguageCode(n)]),
            r || (r = t[this.getLanguagePartFromCode(n)]),
            r || (r = t.default),
            r || []
        );
    }
    toResolveHierarchy(t, n) {
        const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
            o = [],
            i = (s) => {
                s &&
                    (this.isSupportedCode(s)
                        ? o.push(s)
                        : this.logger.warn(
                              `rejecting language code not found in supportedLngs: ${s}`,
                          ));
            };
        return (
            typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
                ? (this.options.load !== 'languageOnly' &&
                      i(this.formatLanguageCode(t)),
                  this.options.load !== 'languageOnly' &&
                      this.options.load !== 'currentOnly' &&
                      i(this.getScriptPartFromCode(t)),
                  this.options.load !== 'currentOnly' &&
                      i(this.getLanguagePartFromCode(t)))
                : typeof t == 'string' && i(this.formatLanguageCode(t)),
            r.forEach((s) => {
                o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
            }),
            o
        );
    }
}
let xC = [
        {
            lngs: [
                'ach',
                'ak',
                'am',
                'arn',
                'br',
                'fil',
                'gun',
                'ln',
                'mfe',
                'mg',
                'mi',
                'oc',
                'pt',
                'pt-BR',
                'tg',
                'tl',
                'ti',
                'tr',
                'uz',
                'wa',
            ],
            nr: [1, 2],
            fc: 1,
        },
        {
            lngs: [
                'af',
                'an',
                'ast',
                'az',
                'bg',
                'bn',
                'ca',
                'da',
                'de',
                'dev',
                'el',
                'en',
                'eo',
                'es',
                'et',
                'eu',
                'fi',
                'fo',
                'fur',
                'fy',
                'gl',
                'gu',
                'ha',
                'hi',
                'hu',
                'hy',
                'ia',
                'it',
                'kk',
                'kn',
                'ku',
                'lb',
                'mai',
                'ml',
                'mn',
                'mr',
                'nah',
                'nap',
                'nb',
                'ne',
                'nl',
                'nn',
                'no',
                'nso',
                'pa',
                'pap',
                'pms',
                'ps',
                'pt-PT',
                'rm',
                'sco',
                'se',
                'si',
                'so',
                'son',
                'sq',
                'sv',
                'sw',
                'ta',
                'te',
                'tk',
                'ur',
                'yo',
            ],
            nr: [1, 2],
            fc: 2,
        },
        {
            lngs: [
                'ay',
                'bo',
                'cgg',
                'fa',
                'ht',
                'id',
                'ja',
                'jbo',
                'ka',
                'km',
                'ko',
                'ky',
                'lo',
                'ms',
                'sah',
                'su',
                'th',
                'tt',
                'ug',
                'vi',
                'wo',
                'zh',
            ],
            nr: [1],
            fc: 3,
        },
        {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
        },
        { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
        { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
        { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
        { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
        { lngs: ['fr'], nr: [1, 2], fc: 9 },
        { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
        { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
        { lngs: ['is'], nr: [1, 2], fc: 12 },
        { lngs: ['jv'], nr: [0, 1], fc: 13 },
        { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
        { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
        { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
        { lngs: ['mk'], nr: [1, 2], fc: 17 },
        { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
        { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
        { lngs: ['or'], nr: [2, 1], fc: 2 },
        { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
        { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
        { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
    ],
    bC = {
        1: function (e) {
            return +(e > 1);
        },
        2: function (e) {
            return +(e != 1);
        },
        3: function (e) {
            return 0;
        },
        4: function (e) {
            return e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2;
        },
        5: function (e) {
            return e == 0
                ? 0
                : e == 1
                ? 1
                : e == 2
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
        },
        6: function (e) {
            return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
        },
        7: function (e) {
            return e == 1
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2;
        },
        8: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
        },
        9: function (e) {
            return +(e >= 2);
        },
        10: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
        },
        11: function (e) {
            return e == 1 || e == 11
                ? 0
                : e == 2 || e == 12
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3;
        },
        12: function (e) {
            return +(e % 10 != 1 || e % 100 == 11);
        },
        13: function (e) {
            return +(e !== 0);
        },
        14: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
        },
        15: function (e) {
            return e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2;
        },
        16: function (e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
        },
        17: function (e) {
            return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
        },
        18: function (e) {
            return e == 0 ? 0 : e == 1 ? 1 : 2;
        },
        19: function (e) {
            return e == 1
                ? 0
                : e == 0 || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3;
        },
        20: function (e) {
            return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
        },
        21: function (e) {
            return e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0;
        },
        22: function (e) {
            return e == 1
                ? 0
                : e == 2
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3;
        },
    };
const SC = ['v1', 'v2', 'v3'],
    EC = ['v4'],
    xh = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function $C() {
    const e = {};
    return (
        xC.forEach((t) => {
            t.lngs.forEach((n) => {
                e[n] = { numbers: t.nr, plurals: bC[t.fc] };
            });
        }),
        e
    );
}
class CC {
    constructor(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (this.languageUtils = t),
            (this.options = n),
            (this.logger = It.create('pluralResolver')),
            (!this.options.compatibilityJSON ||
                EC.includes(this.options.compatibilityJSON)) &&
                (typeof Intl > 'u' || !Intl.PluralRules) &&
                ((this.options.compatibilityJSON = 'v3'),
                this.logger.error(
                    'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
                )),
            (this.rules = $C());
    }
    addRule(t, n) {
        this.rules[t] = n;
    }
    getRule(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi())
            try {
                return new Intl.PluralRules(Da(t), {
                    type: n.ordinal ? 'ordinal' : 'cardinal',
                });
            } catch {
                return;
            }
        return (
            this.rules[t] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(t)]
        );
    }
    needsPlural(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return this.shouldUseIntlApi()
            ? r && r.resolvedOptions().pluralCategories.length > 1
            : r && r.numbers.length > 1;
    }
    getPluralFormsOfKey(t, n) {
        let r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, r).map((o) => `${n}${o}`);
    }
    getSuffixes(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return r
            ? this.shouldUseIntlApi()
                ? r
                      .resolvedOptions()
                      .pluralCategories.sort((o, i) => xh[o] - xh[i])
                      .map(
                          (o) =>
                              `${this.options.prepend}${
                                  n.ordinal
                                      ? `ordinal${this.options.prepend}`
                                      : ''
                              }${o}`,
                      )
                : r.numbers.map((o) => this.getSuffix(t, o, n))
            : [];
    }
    getSuffix(t, n) {
        let r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const o = this.getRule(t, r);
        return o
            ? this.shouldUseIntlApi()
                ? `${this.options.prepend}${
                      r.ordinal ? `ordinal${this.options.prepend}` : ''
                  }${o.select(n)}`
                : this.getSuffixRetroCompatible(o, n)
            : (this.logger.warn(`no plural rule found for: ${t}`), '');
    }
    getSuffixRetroCompatible(t, n) {
        const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
        let o = t.numbers[r];
        this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1 &&
            (o === 2 ? (o = 'plural') : o === 1 && (o = ''));
        const i = () =>
            this.options.prepend && o.toString()
                ? this.options.prepend + o.toString()
                : o.toString();
        return this.options.compatibilityJSON === 'v1'
            ? o === 1
                ? ''
                : typeof o == 'number'
                ? `_plural_${o.toString()}`
                : i()
            : this.options.compatibilityJSON === 'v2' ||
              (this.options.simplifyPluralSuffix &&
                  t.numbers.length === 2 &&
                  t.numbers[0] === 1)
            ? i()
            : this.options.prepend && r.toString()
            ? this.options.prepend + r.toString()
            : r.toString();
    }
    shouldUseIntlApi() {
        return !SC.includes(this.options.compatibilityJSON);
    }
}
function bh(e, t, n) {
    let r =
            arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : '.',
        o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        i = gC(e, t, n);
    return (
        !i &&
            o &&
            typeof n == 'string' &&
            ((i = za(e, n, r)), i === void 0 && (i = za(t, n, r))),
        i
    );
}
class kC {
    constructor() {
        let t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (this.logger = It.create('interpolator')),
            (this.options = t),
            (this.format =
                (t.interpolation && t.interpolation.format) || ((n) => n)),
            this.init(t);
    }
    init() {
        let t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = { escapeValue: !0 });
        const n = t.interpolation;
        (this.escape = n.escape !== void 0 ? n.escape : vC),
            (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
            (this.useRawValueToEscape =
                n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
            (this.prefix = n.prefix ? $r(n.prefix) : n.prefixEscaped || '{{'),
            (this.suffix = n.suffix ? $r(n.suffix) : n.suffixEscaped || '}}'),
            (this.formatSeparator = n.formatSeparator
                ? n.formatSeparator
                : n.formatSeparator || ','),
            (this.unescapePrefix = n.unescapeSuffix
                ? ''
                : n.unescapePrefix || '-'),
            (this.unescapeSuffix = this.unescapePrefix
                ? ''
                : n.unescapeSuffix || ''),
            (this.nestingPrefix = n.nestingPrefix
                ? $r(n.nestingPrefix)
                : n.nestingPrefixEscaped || $r('$t(')),
            (this.nestingSuffix = n.nestingSuffix
                ? $r(n.nestingSuffix)
                : n.nestingSuffixEscaped || $r(')')),
            (this.nestingOptionsSeparator = n.nestingOptionsSeparator
                ? n.nestingOptionsSeparator
                : n.nestingOptionsSeparator || ','),
            (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
            (this.alwaysFormat =
                n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
            this.resetRegExp();
    }
    reset() {
        this.options && this.init(this.options);
    }
    resetRegExp() {
        const t = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(t, 'g');
        const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(n, 'g');
        const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(r, 'g');
    }
    interpolate(t, n, r, o) {
        let i, s, a;
        const l =
            (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
            {};
        function u(g) {
            return g.replace(/\$/g, '$$$$');
        }
        const c = (g) => {
            if (g.indexOf(this.formatSeparator) < 0) {
                const h = bh(
                    n,
                    l,
                    g,
                    this.options.keySeparator,
                    this.options.ignoreJSONStructure,
                );
                return this.alwaysFormat
                    ? this.format(h, void 0, r, {
                          ...o,
                          ...n,
                          interpolationkey: g,
                      })
                    : h;
            }
            const x = g.split(this.formatSeparator),
                $ = x.shift().trim(),
                m = x.join(this.formatSeparator).trim();
            return this.format(
                bh(
                    n,
                    l,
                    $,
                    this.options.keySeparator,
                    this.options.ignoreJSONStructure,
                ),
                m,
                r,
                { ...o, ...n, interpolationkey: $ },
            );
        };
        this.resetRegExp();
        const f =
                (o && o.missingInterpolationHandler) ||
                this.options.missingInterpolationHandler,
            d =
                o &&
                o.interpolation &&
                o.interpolation.skipOnVariables !== void 0
                    ? o.interpolation.skipOnVariables
                    : this.options.interpolation.skipOnVariables;
        return (
            [
                { regex: this.regexpUnescape, safeValue: (g) => u(g) },
                {
                    regex: this.regexp,
                    safeValue: (g) =>
                        this.escapeValue ? u(this.escape(g)) : u(g),
                },
            ].forEach((g) => {
                for (a = 0; (i = g.regex.exec(t)); ) {
                    const x = i[1].trim();
                    if (((s = c(x)), s === void 0))
                        if (typeof f == 'function') {
                            const m = f(t, i, o);
                            s = typeof m == 'string' ? m : '';
                        } else if (
                            o &&
                            Object.prototype.hasOwnProperty.call(o, x)
                        )
                            s = '';
                        else if (d) {
                            s = i[0];
                            continue;
                        } else
                            this.logger.warn(
                                `missed to pass in variable ${x} for interpolating ${t}`,
                            ),
                                (s = '');
                    else
                        typeof s != 'string' &&
                            !this.useRawValueToEscape &&
                            (s = gh(s));
                    const $ = g.safeValue(s);
                    if (
                        ((t = t.replace(i[0], $)),
                        d
                            ? ((g.regex.lastIndex += s.length),
                              (g.regex.lastIndex -= i[0].length))
                            : (g.regex.lastIndex = 0),
                        a++,
                        a >= this.maxReplaces)
                    )
                        break;
                }
            }),
            t
        );
    }
    nest(t, n) {
        let r =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {},
            o,
            i,
            s;
        function a(l, u) {
            const c = this.nestingOptionsSeparator;
            if (l.indexOf(c) < 0) return l;
            const f = l.split(new RegExp(`${c}[ ]*{`));
            let d = `{${f[1]}`;
            (l = f[0]), (d = this.interpolate(d, s));
            const v = d.match(/'/g),
                g = d.match(/"/g);
            ((v && v.length % 2 === 0 && !g) || g.length % 2 !== 0) &&
                (d = d.replace(/'/g, '"'));
            try {
                (s = JSON.parse(d)), u && (s = { ...u, ...s });
            } catch (x) {
                return (
                    this.logger.warn(
                        `failed parsing options string in nesting for key ${l}`,
                        x,
                    ),
                    `${l}${c}${d}`
                );
            }
            return delete s.defaultValue, l;
        }
        for (; (o = this.nestingRegexp.exec(t)); ) {
            let l = [];
            (s = { ...r }),
                (s = s.replace && typeof s.replace != 'string' ? s.replace : s),
                (s.applyPostProcessor = !1),
                delete s.defaultValue;
            let u = !1;
            if (
                o[0].indexOf(this.formatSeparator) !== -1 &&
                !/{.*}/.test(o[1])
            ) {
                const c = o[1].split(this.formatSeparator).map((f) => f.trim());
                (o[1] = c.shift()), (l = c), (u = !0);
            }
            if (
                ((i = n(a.call(this, o[1].trim(), s), s)),
                i && o[0] === t && typeof i != 'string')
            )
                return i;
            typeof i != 'string' && (i = gh(i)),
                i ||
                    (this.logger.warn(
                        `missed to resolve ${o[1]} for nesting ${t}`,
                    ),
                    (i = '')),
                u &&
                    (i = l.reduce(
                        (c, f) =>
                            this.format(c, f, r.lng, {
                                ...r,
                                interpolationkey: o[1].trim(),
                            }),
                        i.trim(),
                    )),
                (t = t.replace(o[0], i)),
                (this.regexp.lastIndex = 0);
        }
        return t;
    }
}
function TC(e) {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf('(') > -1) {
        const r = e.split('(');
        t = r[0].toLowerCase().trim();
        const o = r[1].substring(0, r[1].length - 1);
        t === 'currency' && o.indexOf(':') < 0
            ? n.currency || (n.currency = o.trim())
            : t === 'relativetime' && o.indexOf(':') < 0
            ? n.range || (n.range = o.trim())
            : o.split(';').forEach((s) => {
                  if (!s) return;
                  const [a, ...l] = s.split(':'),
                      u = l
                          .join(':')
                          .trim()
                          .replace(/^'+|'+$/g, '');
                  n[a.trim()] || (n[a.trim()] = u),
                      u === 'false' && (n[a.trim()] = !1),
                      u === 'true' && (n[a.trim()] = !0),
                      isNaN(u) || (n[a.trim()] = parseInt(u, 10));
              });
    }
    return { formatName: t, formatOptions: n };
}
function Cr(e) {
    const t = {};
    return function (r, o, i) {
        const s = o + JSON.stringify(i);
        let a = t[s];
        return a || ((a = e(Da(o), i)), (t[s] = a)), a(r);
    };
}
class _C {
    constructor() {
        let t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (this.logger = It.create('formatter')),
            (this.options = t),
            (this.formats = {
                number: Cr((n, r) => {
                    const o = new Intl.NumberFormat(n, { ...r });
                    return (i) => o.format(i);
                }),
                currency: Cr((n, r) => {
                    const o = new Intl.NumberFormat(n, {
                        ...r,
                        style: 'currency',
                    });
                    return (i) => o.format(i);
                }),
                datetime: Cr((n, r) => {
                    const o = new Intl.DateTimeFormat(n, { ...r });
                    return (i) => o.format(i);
                }),
                relativetime: Cr((n, r) => {
                    const o = new Intl.RelativeTimeFormat(n, { ...r });
                    return (i) => o.format(i, r.range || 'day');
                }),
                list: Cr((n, r) => {
                    const o = new Intl.ListFormat(n, { ...r });
                    return (i) => o.format(i);
                }),
            }),
            this.init(t);
    }
    init(t) {
        const r = (
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} }
        ).interpolation;
        this.formatSeparator = r.formatSeparator
            ? r.formatSeparator
            : r.formatSeparator || ',';
    }
    add(t, n) {
        this.formats[t.toLowerCase().trim()] = n;
    }
    addCached(t, n) {
        this.formats[t.toLowerCase().trim()] = Cr(n);
    }
    format(t, n, r) {
        let o =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return n.split(this.formatSeparator).reduce((a, l) => {
            const { formatName: u, formatOptions: c } = TC(l);
            if (this.formats[u]) {
                let f = a;
                try {
                    const d =
                            (o &&
                                o.formatParams &&
                                o.formatParams[o.interpolationkey]) ||
                            {},
                        v = d.locale || d.lng || o.locale || o.lng || r;
                    f = this.formats[u](a, v, { ...c, ...o, ...d });
                } catch (d) {
                    this.logger.warn(d);
                }
                return f;
            } else this.logger.warn(`there was no format function for ${u}`);
            return a;
        }, t);
    }
}
function PC(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class OC extends bl {
    constructor(t, n, r) {
        let o =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
            (this.backend = t),
            (this.store = n),
            (this.services = r),
            (this.languageUtils = r.languageUtils),
            (this.options = o),
            (this.logger = It.create('backendConnector')),
            (this.waitingReads = []),
            (this.maxParallelReads = o.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
            (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
                this.backend.init &&
                this.backend.init(r, o.backend, o);
    }
    queueLoad(t, n, r, o) {
        const i = {},
            s = {},
            a = {},
            l = {};
        return (
            t.forEach((u) => {
                let c = !0;
                n.forEach((f) => {
                    const d = `${u}|${f}`;
                    !r.reload && this.store.hasResourceBundle(u, f)
                        ? (this.state[d] = 2)
                        : this.state[d] < 0 ||
                          (this.state[d] === 1
                              ? s[d] === void 0 && (s[d] = !0)
                              : ((this.state[d] = 1),
                                (c = !1),
                                s[d] === void 0 && (s[d] = !0),
                                i[d] === void 0 && (i[d] = !0),
                                l[f] === void 0 && (l[f] = !0)));
                }),
                    c || (a[u] = !0);
            }),
            (Object.keys(i).length || Object.keys(s).length) &&
                this.queue.push({
                    pending: s,
                    pendingCount: Object.keys(s).length,
                    loaded: {},
                    errors: [],
                    callback: o,
                }),
            {
                toLoad: Object.keys(i),
                pending: Object.keys(s),
                toLoadLanguages: Object.keys(a),
                toLoadNamespaces: Object.keys(l),
            }
        );
    }
    loaded(t, n, r) {
        const o = t.split('|'),
            i = o[0],
            s = o[1];
        n && this.emit('failedLoading', i, s, n),
            r && this.store.addResourceBundle(i, s, r),
            (this.state[t] = n ? -1 : 2);
        const a = {};
        this.queue.forEach((l) => {
            hC(l.loaded, [i], s),
                PC(l, t),
                n && l.errors.push(n),
                l.pendingCount === 0 &&
                    !l.done &&
                    (Object.keys(l.loaded).forEach((u) => {
                        a[u] || (a[u] = {});
                        const c = l.loaded[u];
                        c.length &&
                            c.forEach((f) => {
                                a[u][f] === void 0 && (a[u][f] = !0);
                            });
                    }),
                    (l.done = !0),
                    l.errors.length ? l.callback(l.errors) : l.callback());
        }),
            this.emit('loaded', a),
            (this.queue = this.queue.filter((l) => !l.done));
    }
    read(t, n, r) {
        let o =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : 0,
            i =
                arguments.length > 4 && arguments[4] !== void 0
                    ? arguments[4]
                    : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length) return s(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: n,
                fcName: r,
                tried: o,
                wait: i,
                callback: s,
            });
            return;
        }
        this.readingCalls++;
        const a = (u, c) => {
                if ((this.readingCalls--, this.waitingReads.length > 0)) {
                    const f = this.waitingReads.shift();
                    this.read(
                        f.lng,
                        f.ns,
                        f.fcName,
                        f.tried,
                        f.wait,
                        f.callback,
                    );
                }
                if (u && c && o < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, t, n, r, o + 1, i * 2, s);
                    }, i);
                    return;
                }
                s(u, c);
            },
            l = this.backend[r].bind(this.backend);
        if (l.length === 2) {
            try {
                const u = l(t, n);
                u && typeof u.then == 'function'
                    ? u.then((c) => a(null, c)).catch(a)
                    : a(null, u);
            } catch (u) {
                a(u);
            }
            return;
        }
        return l(t, n, a);
    }
    prepareLoading(t, n) {
        let r =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {},
            o = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return (
                this.logger.warn(
                    'No backend was added via i18next.use. Will not load resources.',
                ),
                o && o()
            );
        typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
            typeof n == 'string' && (n = [n]);
        const i = this.queueLoad(t, n, r, o);
        if (!i.toLoad.length) return i.pending.length || o(), null;
        i.toLoad.forEach((s) => {
            this.loadOne(s);
        });
    }
    load(t, n, r) {
        this.prepareLoading(t, n, {}, r);
    }
    reload(t, n, r) {
        this.prepareLoading(t, n, { reload: !0 }, r);
    }
    loadOne(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        const r = t.split('|'),
            o = r[0],
            i = r[1];
        this.read(o, i, 'read', void 0, void 0, (s, a) => {
            s &&
                this.logger.warn(
                    `${n}loading namespace ${i} for language ${o} failed`,
                    s,
                ),
                !s &&
                    a &&
                    this.logger.log(
                        `${n}loaded namespace ${i} for language ${o}`,
                        a,
                    ),
                this.loaded(t, s, a);
        });
    }
    saveMissing(t, n, r, o, i) {
        let s =
                arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : {},
            a =
                arguments.length > 6 && arguments[6] !== void 0
                    ? arguments[6]
                    : () => {};
        if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(n)
        ) {
            this.logger.warn(
                `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
            );
            return;
        }
        if (!(r == null || r === '')) {
            if (this.backend && this.backend.create) {
                const l = { ...s, isUpdate: i },
                    u = this.backend.create.bind(this.backend);
                if (u.length < 6)
                    try {
                        let c;
                        u.length === 5
                            ? (c = u(t, n, r, o, l))
                            : (c = u(t, n, r, o)),
                            c && typeof c.then == 'function'
                                ? c.then((f) => a(null, f)).catch(a)
                                : a(null, c);
                    } catch (c) {
                        a(c);
                    }
                else u(t, n, r, o, a, l);
            }
            !t || !t[0] || this.store.addResource(t[0], n, r, o);
        }
    }
}
function Sh() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ['translation'],
        defaultNS: ['translation'],
        fallbackLng: ['dev'],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: 'all',
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: 'fallback',
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function (t) {
            let n = {};
            if (
                (typeof t[1] == 'object' && (n = t[1]),
                typeof t[1] == 'string' && (n.defaultValue = t[1]),
                typeof t[2] == 'string' && (n.tDescription = t[2]),
                typeof t[2] == 'object' || typeof t[3] == 'object')
            ) {
                const r = t[3] || t[2];
                Object.keys(r).forEach((o) => {
                    n[o] = r[o];
                });
            }
            return n;
        },
        interpolation: {
            escapeValue: !0,
            format: (e, t, n, r) => e,
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !0,
        },
    };
}
function Eh(e) {
    return (
        typeof e.ns == 'string' && (e.ns = [e.ns]),
        typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
        typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
        e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
        e
    );
}
function Ns() {}
function LC(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
        typeof e[n] == 'function' && (e[n] = e[n].bind(e));
    });
}
class Ai extends bl {
    constructor() {
        let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        if (
            (super(),
            (this.options = Eh(t)),
            (this.services = {}),
            (this.logger = It),
            (this.modules = { external: [] }),
            LC(this),
            n && !this.isInitialized && !t.isClone)
        ) {
            if (!this.options.initImmediate) return this.init(t, n), this;
            setTimeout(() => {
                this.init(t, n);
            }, 0);
        }
    }
    init() {
        var t = this;
        let n =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        typeof n == 'function' && ((r = n), (n = {})),
            !n.defaultNS &&
                n.defaultNS !== !1 &&
                n.ns &&
                (typeof n.ns == 'string'
                    ? (n.defaultNS = n.ns)
                    : n.ns.indexOf('translation') < 0 &&
                      (n.defaultNS = n.ns[0]));
        const o = Sh();
        (this.options = { ...o, ...this.options, ...Eh(n) }),
            this.options.compatibilityAPI !== 'v1' &&
                (this.options.interpolation = {
                    ...o.interpolation,
                    ...this.options.interpolation,
                }),
            n.keySeparator !== void 0 &&
                (this.options.userDefinedKeySeparator = n.keySeparator),
            n.nsSeparator !== void 0 &&
                (this.options.userDefinedNsSeparator = n.nsSeparator);
        function i(c) {
            return c ? (typeof c == 'function' ? new c() : c) : null;
        }
        if (!this.options.isClone) {
            this.modules.logger
                ? It.init(i(this.modules.logger), this.options)
                : It.init(null, this.options);
            let c;
            this.modules.formatter
                ? (c = this.modules.formatter)
                : typeof Intl < 'u' && (c = _C);
            const f = new wh(this.options);
            this.store = new vh(this.options.resources, this.options);
            const d = this.services;
            (d.logger = It),
                (d.resourceStore = this.store),
                (d.languageUtils = f),
                (d.pluralResolver = new CC(f, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                })),
                c &&
                    (!this.options.interpolation.format ||
                        this.options.interpolation.format ===
                            o.interpolation.format) &&
                    ((d.formatter = i(c)),
                    d.formatter.init(d, this.options),
                    (this.options.interpolation.format =
                        d.formatter.format.bind(d.formatter))),
                (d.interpolator = new kC(this.options)),
                (d.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                }),
                (d.backendConnector = new OC(
                    i(this.modules.backend),
                    d.resourceStore,
                    d,
                    this.options,
                )),
                d.backendConnector.on('*', function (v) {
                    for (
                        var g = arguments.length,
                            x = new Array(g > 1 ? g - 1 : 0),
                            $ = 1;
                        $ < g;
                        $++
                    )
                        x[$ - 1] = arguments[$];
                    t.emit(v, ...x);
                }),
                this.modules.languageDetector &&
                    ((d.languageDetector = i(this.modules.languageDetector)),
                    d.languageDetector.init &&
                        d.languageDetector.init(
                            d,
                            this.options.detection,
                            this.options,
                        )),
                this.modules.i18nFormat &&
                    ((d.i18nFormat = i(this.modules.i18nFormat)),
                    d.i18nFormat.init && d.i18nFormat.init(this)),
                (this.translator = new Ua(this.services, this.options)),
                this.translator.on('*', function (v) {
                    for (
                        var g = arguments.length,
                            x = new Array(g > 1 ? g - 1 : 0),
                            $ = 1;
                        $ < g;
                        $++
                    )
                        x[$ - 1] = arguments[$];
                    t.emit(v, ...x);
                }),
                this.modules.external.forEach((v) => {
                    v.init && v.init(this);
                });
        }
        if (
            ((this.format = this.options.interpolation.format),
            r || (r = Ns),
            this.options.fallbackLng &&
                !this.services.languageDetector &&
                !this.options.lng)
        ) {
            const c = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
            );
            c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
        }
        !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn(
                'init: no languageDetector is used and no lng is defined',
            ),
            [
                'getResource',
                'hasResourceBundle',
                'getResourceBundle',
                'getDataByLanguage',
            ].forEach((c) => {
                this[c] = function () {
                    return t.store[c](...arguments);
                };
            }),
            [
                'addResource',
                'addResources',
                'addResourceBundle',
                'removeResourceBundle',
            ].forEach((c) => {
                this[c] = function () {
                    return t.store[c](...arguments), t;
                };
            });
        const l = jo(),
            u = () => {
                const c = (f, d) => {
                    this.isInitialized &&
                        !this.initializedStoreOnce &&
                        this.logger.warn(
                            'init: i18next is already initialized. You should call init just once!',
                        ),
                        (this.isInitialized = !0),
                        this.options.isClone ||
                            this.logger.log('initialized', this.options),
                        this.emit('initialized', this.options),
                        l.resolve(d),
                        r(f, d);
                };
                if (
                    this.languages &&
                    this.options.compatibilityAPI !== 'v1' &&
                    !this.isInitialized
                )
                    return c(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, c);
            };
        return (
            this.options.resources || !this.options.initImmediate
                ? u()
                : setTimeout(u, 0),
            l
        );
    }
    loadResources(t) {
        let r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ns;
        const o = typeof t == 'string' ? t : this.language;
        if (
            (typeof t == 'function' && (r = t),
            !this.options.resources || this.options.partialBundledLanguages)
        ) {
            if (o && o.toLowerCase() === 'cimode') return r();
            const i = [],
                s = (a) => {
                    if (!a) return;
                    this.services.languageUtils
                        .toResolveHierarchy(a)
                        .forEach((u) => {
                            i.indexOf(u) < 0 && i.push(u);
                        });
                };
            o
                ? s(o)
                : this.services.languageUtils
                      .getFallbackCodes(this.options.fallbackLng)
                      .forEach((l) => s(l)),
                this.options.preload &&
                    this.options.preload.forEach((a) => s(a)),
                this.services.backendConnector.load(i, this.options.ns, (a) => {
                    !a &&
                        !this.resolvedLanguage &&
                        this.language &&
                        this.setResolvedLanguage(this.language),
                        r(a);
                });
        } else r(null);
    }
    reloadResources(t, n, r) {
        const o = jo();
        return (
            t || (t = this.languages),
            n || (n = this.options.ns),
            r || (r = Ns),
            this.services.backendConnector.reload(t, n, (i) => {
                o.resolve(), r(i);
            }),
            o
        );
    }
    use(t) {
        if (!t)
            throw new Error(
                'You are passing an undefined module! Please check the object you are passing to i18next.use()',
            );
        if (!t.type)
            throw new Error(
                'You are passing a wrong module! Please check the object you are passing to i18next.use()',
            );
        return (
            t.type === 'backend' && (this.modules.backend = t),
            (t.type === 'logger' || (t.log && t.warn && t.error)) &&
                (this.modules.logger = t),
            t.type === 'languageDetector' &&
                (this.modules.languageDetector = t),
            t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
            t.type === 'postProcessor' && Nv.addPostProcessor(t),
            t.type === 'formatter' && (this.modules.formatter = t),
            t.type === '3rdParty' && this.modules.external.push(t),
            this
        );
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
            for (let n = 0; n < this.languages.length; n++) {
                const r = this.languages[n];
                if (
                    !(['cimode', 'dev'].indexOf(r) > -1) &&
                    this.store.hasLanguageSomeTranslations(r)
                ) {
                    this.resolvedLanguage = r;
                    break;
                }
            }
    }
    changeLanguage(t, n) {
        var r = this;
        this.isLanguageChangingTo = t;
        const o = jo();
        this.emit('languageChanging', t);
        const i = (l) => {
                (this.language = l),
                    (this.languages =
                        this.services.languageUtils.toResolveHierarchy(l)),
                    (this.resolvedLanguage = void 0),
                    this.setResolvedLanguage(l);
            },
            s = (l, u) => {
                u
                    ? (i(u),
                      this.translator.changeLanguage(u),
                      (this.isLanguageChangingTo = void 0),
                      this.emit('languageChanged', u),
                      this.logger.log('languageChanged', u))
                    : (this.isLanguageChangingTo = void 0),
                    o.resolve(function () {
                        return r.t(...arguments);
                    }),
                    n &&
                        n(l, function () {
                            return r.t(...arguments);
                        });
            },
            a = (l) => {
                !t && !l && this.services.languageDetector && (l = []);
                const u =
                    typeof l == 'string'
                        ? l
                        : this.services.languageUtils.getBestMatchFromCodes(l);
                u &&
                    (this.language || i(u),
                    this.translator.language ||
                        this.translator.changeLanguage(u),
                    this.services.languageDetector &&
                        this.services.languageDetector.cacheUserLanguage &&
                        this.services.languageDetector.cacheUserLanguage(u)),
                    this.loadResources(u, (c) => {
                        s(c, u);
                    });
            };
        return (
            !t &&
            this.services.languageDetector &&
            !this.services.languageDetector.async
                ? a(this.services.languageDetector.detect())
                : !t &&
                  this.services.languageDetector &&
                  this.services.languageDetector.async
                ? this.services.languageDetector.detect.length === 0
                    ? this.services.languageDetector.detect().then(a)
                    : this.services.languageDetector.detect(a)
                : a(t),
            o
        );
    }
    getFixedT(t, n, r) {
        var o = this;
        const i = function (s, a) {
            let l;
            if (typeof a != 'object') {
                for (
                    var u = arguments.length,
                        c = new Array(u > 2 ? u - 2 : 0),
                        f = 2;
                    f < u;
                    f++
                )
                    c[f - 2] = arguments[f];
                l = o.options.overloadTranslationOptionHandler(
                    [s, a].concat(c),
                );
            } else l = { ...a };
            (l.lng = l.lng || i.lng),
                (l.lngs = l.lngs || i.lngs),
                (l.ns = l.ns || i.ns),
                (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
            const d = o.options.keySeparator || '.';
            let v;
            return (
                l.keyPrefix && Array.isArray(s)
                    ? (v = s.map((g) => `${l.keyPrefix}${d}${g}`))
                    : (v = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s),
                o.t(v, l)
            );
        };
        return (
            typeof t == 'string' ? (i.lng = t) : (i.lngs = t),
            (i.ns = n),
            (i.keyPrefix = r),
            i
        );
    }
    t() {
        return this.translator && this.translator.translate(...arguments);
    }
    exists() {
        return this.translator && this.translator.exists(...arguments);
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t;
    }
    hasLoadedNamespace(t) {
        let n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return (
                this.logger.warn(
                    'hasLoadedNamespace: i18next was not initialized',
                    this.languages,
                ),
                !1
            );
        if (!this.languages || !this.languages.length)
            return (
                this.logger.warn(
                    'hasLoadedNamespace: i18n.languages were undefined or empty',
                    this.languages,
                ),
                !1
            );
        const r = n.lng || this.resolvedLanguage || this.languages[0],
            o = this.options ? this.options.fallbackLng : !1,
            i = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === 'cimode') return !0;
        const s = (a, l) => {
            const u = this.services.backendConnector.state[`${a}|${l}`];
            return u === -1 || u === 2;
        };
        if (n.precheck) {
            const a = n.precheck(this, s);
            if (a !== void 0) return a;
        }
        return !!(
            this.hasResourceBundle(r, t) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (s(r, t) && (!o || s(i, t)))
        );
    }
    loadNamespaces(t, n) {
        const r = jo();
        return this.options.ns
            ? (typeof t == 'string' && (t = [t]),
              t.forEach((o) => {
                  this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
              }),
              this.loadResources((o) => {
                  r.resolve(), n && n(o);
              }),
              r)
            : (n && n(), Promise.resolve());
    }
    loadLanguages(t, n) {
        const r = jo();
        typeof t == 'string' && (t = [t]);
        const o = this.options.preload || [],
            i = t.filter((s) => o.indexOf(s) < 0);
        return i.length
            ? ((this.options.preload = o.concat(i)),
              this.loadResources((s) => {
                  r.resolve(), n && n(s);
              }),
              r)
            : (n && n(), Promise.resolve());
    }
    dir(t) {
        if (
            (t ||
                (t =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
            !t)
        )
            return 'rtl';
        const n = [
                'ar',
                'shu',
                'sqr',
                'ssh',
                'xaa',
                'yhd',
                'yud',
                'aao',
                'abh',
                'abv',
                'acm',
                'acq',
                'acw',
                'acx',
                'acy',
                'adf',
                'ads',
                'aeb',
                'aec',
                'afb',
                'ajp',
                'apc',
                'apd',
                'arb',
                'arq',
                'ars',
                'ary',
                'arz',
                'auz',
                'avl',
                'ayh',
                'ayl',
                'ayn',
                'ayp',
                'bbz',
                'pga',
                'he',
                'iw',
                'ps',
                'pbt',
                'pbu',
                'pst',
                'prp',
                'prd',
                'ug',
                'ur',
                'ydd',
                'yds',
                'yih',
                'ji',
                'yi',
                'hbo',
                'men',
                'xmn',
                'fa',
                'jpr',
                'peo',
                'pes',
                'prs',
                'dv',
                'sam',
                'ckb',
            ],
            r = (this.services && this.services.languageUtils) || new wh(Sh());
        return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
            t.toLowerCase().indexOf('-arab') > 1
            ? 'rtl'
            : 'ltr';
    }
    static createInstance() {
        let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        return new Ai(t, n);
    }
    cloneInstance() {
        let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : Ns;
        const r = t.forkResourceStore;
        r && delete t.forkResourceStore;
        const o = { ...this.options, ...t, isClone: !0 },
            i = new Ai(o);
        return (
            (t.debug !== void 0 || t.prefix !== void 0) &&
                (i.logger = i.logger.clone(t)),
            ['store', 'services', 'language'].forEach((a) => {
                i[a] = this[a];
            }),
            (i.services = { ...this.services }),
            (i.services.utils = {
                hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            r &&
                ((i.store = new vh(this.store.data, o)),
                (i.services.resourceStore = i.store)),
            (i.translator = new Ua(i.services, o)),
            i.translator.on('*', function (a) {
                for (
                    var l = arguments.length,
                        u = new Array(l > 1 ? l - 1 : 0),
                        c = 1;
                    c < l;
                    c++
                )
                    u[c - 1] = arguments[c];
                i.emit(a, ...u);
            }),
            i.init(o, n),
            (i.translator.options = o),
            (i.translator.backendConnector.services.utils = {
                hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            i
        );
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
        };
    }
}
const Ie = Ai.createInstance();
Ie.createInstance = Ai.createInstance;
Ie.createInstance;
Ie.dir;
Ie.init;
Ie.loadResources;
Ie.reloadResources;
Ie.use;
Ie.changeLanguage;
Ie.getFixedT;
const kk = Ie.t;
Ie.exists;
Ie.setDefaultNamespace;
Ie.hasLoadedNamespace;
Ie.loadNamespaces;
Ie.loadLanguages;
const NC = 'Saber más',
    RC = 'Cargando...',
    FC = 'scribly@gmail.com',
    AC = 'o',
    jC = 'idCarpeta',
    IC = 'idNota',
    MC = {
        'login.Title': 'Login',
        'login.Username': 'Username',
        'login.Email': 'Email',
        'login.Password': 'Contraseña',
        'login.Login': 'Inicia sesión',
        'login.Error': 'Correo o contraseña incorrectos',
        'login.Remember': 'Recordar',
        'login.Forgot': '¿Olvidaste tu contraseña?',
        'login.Register': 'Regístrate',
        'login.NoAccount': '¿No tienes una cuenta?',
        'register.Title': 'Registro',
        'register.Username': 'Username',
        'register.Email': 'Email',
        'register.Password': 'Contraseña',
        'register.Register': 'Regístrate',
        'register.Error': 'Error al registrarse',
        'register.Success': 'Registro exitoso',
        'register.Login': 'Inicia sesión',
        'register.Already': '¿Ya tienes una cuenta?',
        'register.Terms':
            'Al registrarte, aceptas nuestros Términos y Política de privacidad.',
        'register.UsernameTaken': 'El nombre de usuario ya está en uso',
        'register.InvalidUsername':
            'El nombre de usuario debe tener entre 3 y 20 caracteres, y solo puede contener letras, números, guiones y guiones bajos',
        'register.EmailTaken': 'El correo ya está en uso',
        'register.Welcome': '¡Bienvenide a bordo!',
        'register.weakPassword':
            'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número',
        'activate.Thanks': '¡Muchas gracias!',
        'activate.Success': 'Tu cuenta ha sido activada',
        'activate.Error': 'Error al activar tu cuenta',
        'activate.ConfirmationSent':
            'Hemos enviado un correo de confirmación a tu cuenta, por favor revisa tu bandeja de entrada',
        'activate.GoToMail': 'Ir a mi correo',
        'activate.NoEmail': '¿No lo ves?',
        'activate.CheckSpam': 'Revisa en tu carpeta de spam o ',
        'activate.resend': 'reenvía un correo',
        'activate.Sent': 'Correo enviado',
        'profile.Title': 'Perfil',
        'profile.Since': 'Miembro desde',
        'profile.Notes': 'Notas',
        'profile.Followers': 'Seguidores',
        'profile.Following': 'Siguiendo',
        'profile.AddFriends': 'Agregar amigos',
        'profile.EditProfile': 'Editar perfil',
        'profile.Logout': 'Cerrar sesión',
        'profile.SeeMore': 'Ver más',
        'folders.Title': 'Carpetas',
        'folders.Name': 'Nombre',
        'folders.Description': 'Descripción',
        'folders.Modal.Title': 'Nueva carpeta',
        'folders.Modal.Name': 'Nombre',
        'folders.modal.cancel': 'Cancelar',
        'folders.modal.create': 'Crear',
        'folders.NoFolders': 'No se han encontrado carpetas ni notas',
        'note.NewNote': 'Nueva nota',
        'note.Title': 'Título',
        'note.Analyze': 'Analizar',
        'note.Save': 'Guardar',
        'note.AnalyzeError': 'Hemos tenido un error al analizar tu nota',
        'category.Title': 'Categorías',
        'category.Poetry': 'Poesía',
        'category.Script': 'Guión',
        'category.Prose': 'Ficción',
        'community.Title': 'Comunidad',
        'badge.Title': 'Insignias',
        'badge.Level': 'Nivel',
        'lessons.Unit': 'Unidad',
        'task.Title': 'Tarea',
        'task.Description': 'Descripción',
        'task.Correct': 'Correcto',
        'task.Incorrect': 'Incorrecto',
        'task.Submit': 'Enviar',
        'task.Next': 'Siguiente',
        'task.Skip': 'Saltar tarea',
        'task.SkipText': '¿Estás seguro de que quieres saltar esta tarea?',
        'task.NoPoints': 'No obtendrás puntos por esta tarea',
        'task.SkipNext': 'Saltar y continuar',
        'task.Review': 'Revisar',
        'task.Retry': 'Reintentar',
        'ratings.AverageRating': 'Puntuación media',
        knowMore: NC,
        Loading: RC,
        'loading.Longer': 'Esto puede tardar un poco más de lo normal...',
        emailAccount: FC,
        or: AC,
        '/': '/',
        '/login': '/login',
        '/register': '/registro',
        '/activate': '/activar',
        '/folders': '/carpetas',
        '/folders/:folderId': '/carpetas/:folderId',
        '/folders/:folderId/:noteId': '/carpetas/:folderId/:noteId',
        '/profile': '/perfil',
        '/profile/:username': '/perfil/:username',
        '/note': '/nota',
        '/new/:folderId': '/nueva/:folderId',
        '/followers': '/seguidores',
        '/following': '/siguiendo',
        '/about': '/acerca',
        '/lesson': '/leccion',
        folderId: jC,
        noteId: IC,
    };
Ie.use(b$).init({
    fallbackLng: 'es',
    lng: 'es',
    resources: { es: { translation: MC } },
    ns: ['translation'],
    defaultNS: 'translation',
});
Ie.languages = ['es'];
Cu.createRoot(document.getElementById('root')).render(
    C.jsx(D.StrictMode, {
        children: C.jsx(Hw, {
            children: C.jsx(F8, { children: C.jsx(fC, {}) }),
        }),
    }),
);
export {
    WC as $,
    Gs as A,
    $v as B,
    hk as C,
    KC as D,
    _i as E,
    sk as F,
    nk as G,
    eC as H,
    ii as I,
    ok as J,
    vk as K,
    ki as L,
    ik as M,
    rk as N,
    s$ as O,
    mk as P,
    Y as Q,
    wk as R,
    kv as S,
    Ek as T,
    hp as U,
    Et as V,
    ck as W,
    ak as X,
    lk as Y,
    uk as Z,
    co as _,
    yk as a,
    XC as a0,
    D as a1,
    VC as a2,
    GC as a3,
    HC as a4,
    UC as a5,
    Am as a6,
    ZC as a7,
    QC as a8,
    qC as a9,
    JC as aa,
    BC as ab,
    YC as ac,
    Tx as ad,
    Ck as ae,
    cn as b,
    xl as c,
    ho as d,
    pk as e,
    gk as f,
    Sk as g,
    bk as h,
    xk as i,
    C as j,
    DC as k,
    go as l,
    fk as m,
    dk as n,
    wl as o,
    Jf as p,
    zC as q,
    b as r,
    t$ as s,
    kk as t,
    So as u,
    O$ as v,
    $k as w,
    Cv as x,
    ek as y,
    tk as z,
};

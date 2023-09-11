import {
    r as y,
    l as re,
    j as a,
    N as de,
    B as A,
    b as ue,
    u as he,
    p as te,
    A as U,
    Q as we,
    q as ye,
    c as ke,
    H as Ce,
} from './index-9db94e76.js';
import { N as Me } from './Note-d300367a.js';
import {
    u as Te,
    c as Se,
    m as Ne,
    a as Ee,
    b as je,
    d as Ie,
} from './notes-0819c811.js';
import { c as Oe } from './index-179c6cbe.js';
import { m as Le } from './Tree-0fce1b46.js';
const Pe = (n, t, l) => {
    const i = t - n;
    return ((((l - n) % i) + i) % i) + n;
};
function Re(...n) {
    const t = y.useRef(0),
        [l, i] = y.useState(n[t.current]),
        o = y.useCallback(
            (b) => {
                (t.current =
                    typeof b != 'number' ? Pe(0, n.length, t.current + 1) : b),
                    i(n[t.current]);
            },
            [n.length, ...n],
        );
    return [l, o];
}
const Fe = ({ theory: n, onEnd: t }) => {
        const l = n.split(`

`),
            [i, o] = y.useState(0),
            [b, M] = y.useState(0),
            f = re(),
            [m, T] = Re('mainBackground', 'blue'),
            [j, P] = y.useState(!1);
        return (
            console.log(m, j),
            y.useEffect(() => {
                const s = (S) => {
                        const k = window.innerWidth;
                        S.clientX > k / 2
                            ? (P(!0),
                              T(),
                              i < l.length - 1 ? o((N) => N + 1) : t())
                            : (i > 0 ? o((N) => N - 1) : f(-1), T(), P(!0));
                    },
                    c = (S) => {
                        M((N) => N + S.deltaY),
                            b > 250
                                ? i < l.length - 1
                                    ? (o((N) => N + 1), M(0))
                                    : t()
                                : b < -250 &&
                                  (i > 0 ? (o((N) => N - 1), M(0)) : f(-1));
                    };
                return (
                    window.addEventListener('click', s),
                    window.addEventListener('wheel', c),
                    () => {
                        window.removeEventListener('click', s),
                            window.removeEventListener('wheel', c);
                    }
                );
            }, [i, l.length, t, b, f]),
            a.jsxs('div', {
                className:
                    'flex h-screen items-center justify-center p-48 text-center text-5xl font-extrabold leading-loose',
                children: [a.jsx(a.Fragment, {}), l[i]],
            })
        );
    },
    Be = ({ task: n, onSubmit: t, onSkip: l }) => {
        const [i] = y.useState(
                de(
                    n.text.split(`

`),
                ),
            ),
            [o, b] = y.useState(-1);
        y.useEffect(() => {
            b(-1);
        }, [n]);
        const M = (m) => {
                if (m === -1) return;
                const T = [...i],
                    j = T[m];
                T.splice(m, 1), T.unshift(j);
                const P = {
                    answerText: T.join(`

`),
                };
                t(P, n);
            },
            f = () => {
                l(n);
            };
        return a.jsxs('div', {
            className:
                'relative flex h-full flex-col items-center justify-around gap-4',
            children: [
                a.jsx('h2', {
                    className:
                        ' mb-12 mt-16 w-8/12 text-center text-4xl font-bold',
                    children: n.taskDescription,
                }),
                a.jsx('div', {
                    className: 'flex w-7/12 justify-between text-left text-xl',
                    children: i.map((m, T) =>
                        a.jsx(
                            'button',
                            {
                                className: `w-5/12 rounded-xl ${
                                    o === T
                                        ? 'border-4 border-primaryBlue-500 p-7'
                                        : 'border-2 p-8'
                                }`,
                                onClick: () => b(o === T ? -1 : T),
                                children: m,
                            },
                            T,
                        ),
                    ),
                }),
                a.jsx(A, {
                    className: `h-24 w-1/2 rounded-xl border-2 p-4 text-2xl font-bold text-white ${
                        o === -1 ? 'bg-gray-500' : 'bg-primaryPink-100'
                    }`,
                    bgColor: o === -1 ? 'gray-500' : 'primaryPink-500',
                    ...(o === -1 && { disabled: !0 }),
                    onClick: () => M(o),
                    children: 'Submit',
                }),
                a.jsx(A, {
                    className:
                        'absolute bottom-2 left-2 rounded-xl border-2 bg-zinc-800 p-4 font-bold text-secondaryYellow-500',
                    bgColor: 'zinc-800',
                    onClick: f,
                    children: 'Skip',
                }),
            ],
        });
    },
    _e = ({ task: n, onSubmit: t, onSkip: l }) => {
        const [i, o] = y.useState([]),
            [b, M] = y.useState([]),
            [f, m] = y.useState(null);
        y.useEffect(() => {
            const s = /\[(.*?)\]/g,
                c = n.text.match(s) || [],
                S = de(c.map((B) => B.replace(/\[|\]/g, '')));
            M(S);
            const N = n.text
                .split(
                    `

`,
                )[0]
                .split(s)
                .map((B, R) => (R % 2 !== 0 ? null : B));
            o(N);
        }, [n.text]);
        const T = (s, c) => {
                m(s);
                const S = c.map((k) => (typeof k != 'string' ? s : k));
                o(S);
            },
            j = () => {
                const S = {
                    answerText: `${i
                        .map((k) => (k === f ? `[${k}]` : k))
                        .join('')}

${b.map((k) => `[${k}]`).join('')}`,
                };
                t(S, n);
            },
            P = () => {
                l(n);
            };
        return a.jsx(a.Fragment, {
            children: a.jsxs('div', {
                className:
                    'relative flex h-full flex-col items-center justify-around gap-4',
                children: [
                    ' ',
                    a.jsx('h2', {
                        className:
                            'mb-12 mt-16 w-8/12 text-center text-4xl font-bold',
                        children: n.taskDescription,
                    }),
                    a.jsx('div', {
                        className:
                            'flex w-8/12 items-baseline justify-between border p-2 text-left text-xl',
                        children: i.map(
                            (s, c) =>
                                s ||
                                a.jsx(
                                    'span',
                                    {
                                        className:
                                            'underline-space mx-2 inline-block w-40 border-b-2 border-dotted border-gray-800',
                                    },
                                    c,
                                ),
                        ),
                    }),
                    a.jsx('div', {
                        className: 'flex space-x-2',
                        children: b.map((s, c) =>
                            a.jsx(
                                'button',
                                {
                                    className: `rounded border p-2 hover:bg-blue-200 ${
                                        f === s ? 'opacity-50' : ''
                                    }`,
                                    onClick: () => {
                                        if (f === s)
                                            m(null),
                                                o((S) =>
                                                    S.map((k) =>
                                                        k === s ? null : k,
                                                    ),
                                                );
                                        else {
                                            const S = i.map((k) =>
                                                k === f ? null : k,
                                            );
                                            T(s, S);
                                        }
                                    },
                                    children: s,
                                },
                                c,
                            ),
                        ),
                    }),
                    a.jsx(A, {
                        className: `h-24 w-1/2 rounded-xl border-2 p-4 text-2xl font-bold text-white ${
                            f === null ? 'bg-gray-500' : 'bg-primaryPink-100'
                        }`,
                        bgColor: f === null ? 'gray-500' : 'primaryPink-500',
                        ...(f === null && { disabled: !0 }),
                        onClick: j,
                        children: 'Submit',
                    }),
                    a.jsx(A, {
                        className:
                            'absolute bottom-2 left-2 rounded-xl border-2 p-4 font-bold text-secondaryYellow-500',
                        bgColor: 'zinc-800',
                        onClick: P,
                        children: 'Skip',
                    }),
                ],
            }),
        });
    },
    Ae = ({ task: n, onSubmit: t, initialNote: l }) => {
        const [i, o] = y.useState(l),
            b = (f) => {
                o(f);
            },
            M = async () => {
                const f = i.noteContent ?? '';
                f.length > 100
                    ? (alert(f.slice(0, 100)), alert(f.slice(100)))
                    : alert(f);
                const m = { answerText: f, answerNote: i.id };
                t(m, n);
            };
        return a.jsxs('div', {
            className:
                'relative flex h-full flex-col items-center justify-around gap-4',
            children: [
                a.jsx('div', {
                    children: a.jsx(Me, { note: l, onNoteChange: b }),
                }),
                a.jsx(A, {
                    className:
                        'h-24 w-1/2 rounded-xl border-2 bg-primaryBlue-500 p-4 text-2xl font-bold text-white',
                    bgColor: 'primaryBlue-500',
                    onClick: () => M(),
                    children: 'Submit',
                }),
            ],
        });
    },
    We = async (n, t) => {
        try {
            return (
                await ue.post(
                    `/api/v1/lesson/start/${n}/`,
                    {},
                    { headers: { Authorization: `Bearer ${t}` } },
                )
            ).data;
        } catch (l) {
            throw new Error(`Error retrieving lessonUser: ${l}`);
        }
    },
    De = (n) => {
        const [t, l] = y.useState(null),
            [i, o] = y.useState(!1),
            b = re(),
            { t: M } = he(),
            f = te();
        return (
            isNaN(Number(n)) && b(M('/')),
            y.useEffect(() => {
                o(!0),
                    We(Number(n), f[U])
                        .then((m) => {
                            l(m);
                        })
                        .catch((m) => {
                            we.error(M(m.message)), b(M('/'));
                        })
                        .finally(() => {
                            o(!1);
                        });
            }, [n, b, M]),
            { lessonUser: t, loading: i }
        );
    },
    ie = async (n, t, l) => {
        try {
            return (
                await ue.patch(`/api/v1/task/answer/${n}/user/`, t, {
                    headers: { Authorization: `Bearer ${l}` },
                })
            ).data;
        } catch (i) {
            throw new Error(`Error partially updating task user: ${i}`);
        }
    };
var ne = {};
(function n(t, l, i, o) {
    var b = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
    );
    function M() {}
    function f(r) {
        var e = l.exports.Promise,
            p = e !== void 0 ? e : t.Promise;
        return typeof p == 'function' ? new p(r) : (r(M, M), null);
    }
    var m = (function () {
            var r = Math.floor(16.666666666666668),
                e,
                p,
                d = {},
                x = 0;
            return (
                typeof requestAnimationFrame == 'function' &&
                typeof cancelAnimationFrame == 'function'
                    ? ((e = function (g) {
                          var u = Math.random();
                          return (
                              (d[u] = requestAnimationFrame(function h(C) {
                                  x === C || x + r - 1 < C
                                      ? ((x = C), delete d[u], g())
                                      : (d[u] = requestAnimationFrame(h));
                              })),
                              u
                          );
                      }),
                      (p = function (g) {
                          d[g] && cancelAnimationFrame(d[g]);
                      }))
                    : ((e = function (g) {
                          return setTimeout(g, r);
                      }),
                      (p = function (g) {
                          return clearTimeout(g);
                      })),
                { frame: e, cancel: p }
            );
        })(),
        T = (function () {
            var r,
                e,
                p = {};
            function d(x) {
                function g(u, h) {
                    x.postMessage({ options: u || {}, callback: h });
                }
                (x.init = function (h) {
                    var C = h.transferControlToOffscreen();
                    x.postMessage({ canvas: C }, [C]);
                }),
                    (x.fire = function (h, C, F) {
                        if (e) return g(h, null), e;
                        var v = Math.random().toString(36).slice(2);
                        return (
                            (e = f(function (L) {
                                function O(w) {
                                    w.data.callback === v &&
                                        (delete p[v],
                                        x.removeEventListener('message', O),
                                        (e = null),
                                        F(),
                                        L());
                                }
                                x.addEventListener('message', O),
                                    g(h, v),
                                    (p[v] = O.bind(null, {
                                        data: { callback: v },
                                    }));
                            })),
                            e
                        );
                    }),
                    (x.reset = function () {
                        x.postMessage({ reset: !0 });
                        for (var h in p) p[h](), delete p[h];
                    });
            }
            return function () {
                if (r) return r;
                if (!i && b) {
                    var x = [
                        'var CONFETTI, SIZE = {}, module = {};',
                        '(' + n.toString() + ')(this, module, true, SIZE);',
                        'onmessage = function(msg) {',
                        '  if (msg.data.options) {',
                        '    CONFETTI(msg.data.options).then(function () {',
                        '      if (msg.data.callback) {',
                        '        postMessage({ callback: msg.data.callback });',
                        '      }',
                        '    });',
                        '  } else if (msg.data.reset) {',
                        '    CONFETTI && CONFETTI.reset();',
                        '  } else if (msg.data.resize) {',
                        '    SIZE.width = msg.data.resize.width;',
                        '    SIZE.height = msg.data.resize.height;',
                        '  } else if (msg.data.canvas) {',
                        '    SIZE.width = msg.data.canvas.width;',
                        '    SIZE.height = msg.data.canvas.height;',
                        '    CONFETTI = module.exports.create(msg.data.canvas);',
                        '  }',
                        '}',
                    ].join(`
`);
                    try {
                        r = new Worker(URL.createObjectURL(new Blob([x])));
                    } catch (g) {
                        return (
                            typeof console !== void 0 &&
                                typeof console.warn == 'function' &&
                                console.warn('🎊 Could not load worker', g),
                            null
                        );
                    }
                    d(r);
                }
                return r;
            };
        })(),
        j = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ['square', 'circle'],
            zIndex: 100,
            colors: [
                '#26ccff',
                '#a25afd',
                '#ff5e7e',
                '#88ff5a',
                '#fcff42',
                '#ffa62d',
                '#ff36ff',
            ],
            disableForReducedMotion: !1,
            scalar: 1,
        };
    function P(r, e) {
        return e ? e(r) : r;
    }
    function s(r) {
        return r != null;
    }
    function c(r, e, p) {
        return P(r && s(r[e]) ? r[e] : j[e], p);
    }
    function S(r) {
        return r < 0 ? 0 : Math.floor(r);
    }
    function k(r, e) {
        return Math.floor(Math.random() * (e - r)) + r;
    }
    function N(r) {
        return parseInt(r, 16);
    }
    function B(r) {
        return r.map(R);
    }
    function R(r) {
        var e = String(r).replace(/[^0-9a-f]/gi, '');
        return (
            e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            {
                r: N(e.substring(0, 2)),
                g: N(e.substring(2, 4)),
                b: N(e.substring(4, 6)),
            }
        );
    }
    function q(r) {
        var e = c(r, 'origin', Object);
        return (e.x = c(e, 'x', Number)), (e.y = c(e, 'y', Number)), e;
    }
    function I(r) {
        (r.width = document.documentElement.clientWidth),
            (r.height = document.documentElement.clientHeight);
    }
    function D(r) {
        var e = r.getBoundingClientRect();
        (r.width = e.width), (r.height = e.height);
    }
    function V(r) {
        var e = document.createElement('canvas');
        return (
            (e.style.position = 'fixed'),
            (e.style.top = '0px'),
            (e.style.left = '0px'),
            (e.style.pointerEvents = 'none'),
            (e.style.zIndex = r),
            e
        );
    }
    function X(r, e, p, d, x, g, u, h, C) {
        r.save(),
            r.translate(e, p),
            r.rotate(g),
            r.scale(d, x),
            r.arc(0, 0, 1, u, h, C),
            r.restore();
    }
    function Z(r) {
        var e = r.angle * (Math.PI / 180),
            p = r.spread * (Math.PI / 180);
        return {
            x: r.x,
            y: r.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity,
            angle2D: -e + (0.5 * p - Math.random() * p),
            tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
            color: r.color,
            shape: r.shape,
            tick: 0,
            totalTicks: r.ticks,
            decay: r.decay,
            drift: r.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: r.gravity * 3,
            ovalScalar: 0.6,
            scalar: r.scalar,
        };
    }
    function K(r, e) {
        (e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
            (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
            (e.wobble += e.wobbleSpeed),
            (e.velocity *= e.decay),
            (e.tiltAngle += 0.1),
            (e.tiltSin = Math.sin(e.tiltAngle)),
            (e.tiltCos = Math.cos(e.tiltAngle)),
            (e.random = Math.random() + 2),
            (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
            (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble));
        var p = e.tick++ / e.totalTicks,
            d = e.x + e.random * e.tiltCos,
            x = e.y + e.random * e.tiltSin,
            g = e.wobbleX + e.random * e.tiltCos,
            u = e.wobbleY + e.random * e.tiltSin;
        if (
            ((r.fillStyle =
                'rgba(' +
                e.color.r +
                ', ' +
                e.color.g +
                ', ' +
                e.color.b +
                ', ' +
                (1 - p) +
                ')'),
            r.beginPath(),
            e.shape === 'circle')
        )
            r.ellipse
                ? r.ellipse(
                      e.x,
                      e.y,
                      Math.abs(g - d) * e.ovalScalar,
                      Math.abs(u - x) * e.ovalScalar,
                      (Math.PI / 10) * e.wobble,
                      0,
                      2 * Math.PI,
                  )
                : X(
                      r,
                      e.x,
                      e.y,
                      Math.abs(g - d) * e.ovalScalar,
                      Math.abs(u - x) * e.ovalScalar,
                      (Math.PI / 10) * e.wobble,
                      0,
                      2 * Math.PI,
                  );
        else if (e.shape === 'star')
            for (
                var h = (Math.PI / 2) * 3,
                    C = 4 * e.scalar,
                    F = 8 * e.scalar,
                    v = e.x,
                    L = e.y,
                    O = 5,
                    w = Math.PI / O;
                O--;

            )
                (v = e.x + Math.cos(h) * F),
                    (L = e.y + Math.sin(h) * F),
                    r.lineTo(v, L),
                    (h += w),
                    (v = e.x + Math.cos(h) * C),
                    (L = e.y + Math.sin(h) * C),
                    r.lineTo(v, L),
                    (h += w);
        else
            r.moveTo(Math.floor(e.x), Math.floor(e.y)),
                r.lineTo(Math.floor(e.wobbleX), Math.floor(x)),
                r.lineTo(Math.floor(g), Math.floor(u)),
                r.lineTo(Math.floor(d), Math.floor(e.wobbleY));
        return r.closePath(), r.fill(), e.tick < e.totalTicks;
    }
    function Q(r, e, p, d, x) {
        var g = e.slice(),
            u = r.getContext('2d'),
            h,
            C,
            F = f(function (v) {
                function L() {
                    (h = C = null),
                        u.clearRect(0, 0, d.width, d.height),
                        x(),
                        v();
                }
                function O() {
                    i &&
                        !(d.width === o.width && d.height === o.height) &&
                        ((d.width = r.width = o.width),
                        (d.height = r.height = o.height)),
                        !d.width &&
                            !d.height &&
                            (p(r), (d.width = r.width), (d.height = r.height)),
                        u.clearRect(0, 0, d.width, d.height),
                        (g = g.filter(function (w) {
                            return K(u, w);
                        })),
                        g.length ? (h = m.frame(O)) : L();
                }
                (h = m.frame(O)), (C = L);
            });
        return {
            addFettis: function (v) {
                return (g = g.concat(v)), F;
            },
            canvas: r,
            promise: F,
            reset: function () {
                h && m.cancel(h), C && C();
            },
        };
    }
    function z(r, e) {
        var p = !r,
            d = !!c(e || {}, 'resize'),
            x = c(e, 'disableForReducedMotion', Boolean),
            g = b && !!c(e || {}, 'useWorker'),
            u = g ? T() : null,
            h = p ? I : D,
            C = r && u ? !!r.__confetti_initialized : !1,
            F =
                typeof matchMedia == 'function' &&
                matchMedia('(prefers-reduced-motion)').matches,
            v;
        function L(w, G, J) {
            for (
                var W = c(w, 'particleCount', S),
                    H = c(w, 'angle', Number),
                    Y = c(w, 'spread', Number),
                    _ = c(w, 'startVelocity', Number),
                    fe = c(w, 'decay', Number),
                    me = c(w, 'gravity', Number),
                    pe = c(w, 'drift', Number),
                    ae = c(w, 'colors', B),
                    ge = c(w, 'ticks', Number),
                    se = c(w, 'shapes'),
                    be = c(w, 'scalar'),
                    oe = q(w),
                    le = W,
                    ee = [],
                    xe = r.width * oe.x,
                    ve = r.height * oe.y;
                le--;

            )
                ee.push(
                    Z({
                        x: xe,
                        y: ve,
                        angle: H,
                        spread: Y,
                        startVelocity: _,
                        color: ae[le % ae.length],
                        shape: se[k(0, se.length)],
                        ticks: ge,
                        decay: fe,
                        gravity: me,
                        drift: pe,
                        scalar: be,
                    }),
                );
            return v ? v.addFettis(ee) : ((v = Q(r, ee, h, G, J)), v.promise);
        }
        function O(w) {
            var G = x || c(w, 'disableForReducedMotion', Boolean),
                J = c(w, 'zIndex', Number);
            if (G && F)
                return f(function (_) {
                    _();
                });
            p && v
                ? (r = v.canvas)
                : p && !r && ((r = V(J)), document.body.appendChild(r)),
                d && !C && h(r);
            var W = { width: r.width, height: r.height };
            u && !C && u.init(r),
                (C = !0),
                u && (r.__confetti_initialized = !0);
            function H() {
                if (u) {
                    var _ = {
                        getBoundingClientRect: function () {
                            if (!p) return r.getBoundingClientRect();
                        },
                    };
                    h(_),
                        u.postMessage({
                            resize: { width: _.width, height: _.height },
                        });
                    return;
                }
                W.width = W.height = null;
            }
            function Y() {
                (v = null),
                    d && t.removeEventListener('resize', H),
                    p &&
                        r &&
                        (document.body.removeChild(r), (r = null), (C = !1));
            }
            return (
                d && t.addEventListener('resize', H, !1),
                u ? u.fire(w, W, Y) : L(w, W, Y)
            );
        }
        return (
            (O.reset = function () {
                u && u.reset(), v && v.reset();
            }),
            O
        );
    }
    var $;
    function E() {
        return $ || ($ = z(null, { useWorker: !0, resize: !0 })), $;
    }
    (l.exports = function () {
        return E().apply(this, arguments);
    }),
        (l.exports.reset = function () {
            E().reset();
        }),
        (l.exports.create = z);
})(
    (function () {
        return typeof window < 'u'
            ? window
            : typeof self < 'u'
            ? self
            : this || {};
    })(),
    ne,
    !1,
);
const $e = ne.exports;
ne.exports.create;
const ce = te(),
    ze = Oe((n) => ({
        isTheoryEnd: !1,
        currentIndex: 0,
        currentTask: null,
        writingNote: null,
        skippedTask: !1,
        currentTaskUser: null,
        tasks: null,
        isModalOpen: !1,
        setIsTheoryEnd: (t) => n({ isTheoryEnd: t }),
        setCurrentIndex: (t) => n({ currentIndex: t }),
        setCurrentTask: (t) => n({ currentTask: t }),
        setWritingNote: (t) => n({ writingNote: t }),
        setSkippedTask: (t) => n({ skippedTask: t }),
        setCurrentTaskUser: (t) => n({ currentTaskUser: t }),
        setTasks: (t) => n({ tasks: t }),
        setIsModalOpen: (t) => n({ isModalOpen: t }),
        handleSkipTask: async (t) => {
            try {
                const l = await ie(t.id, { answerText: 'skipped' }, ce[U]);
                n({ currentTaskUser: l }),
                    n({ skippedTask: !0 }),
                    n({ isModalOpen: !0 });
            } catch (l) {
                console.error('Error skipping the task:', l);
            }
        },
        handleSubmitTask: async (t, l) => {
            n({ skippedTask: !1 });
            try {
                const i = await ie(l.id, t, ce[U]);
                n({ currentTaskUser: i }),
                    n({ isModalOpen: !0 }),
                    i.answerBoolean && $e();
            } catch (i) {
                console.error('Error submitting the task:', i);
            }
        },
    })),
    Xe = () => {
        const {
                isTheoryEnd: n,
                setIsTheoryEnd: t,
                currentIndex: l,
                setCurrentIndex: i,
                currentTask: o,
                setCurrentTask: b,
                writingNote: M,
                setWritingNote: f,
                skippedTask: m,
                setSkippedTask: T,
                tasks: j,
                setTasks: P,
                currentTaskUser: s,
                isModalOpen: c,
                setIsModalOpen: S,
                handleSkipTask: k,
                handleSubmitTask: N,
            } = ze(),
            { lessonId: B } = ye(),
            { lessonUser: R, loading: q } = De(B || ''),
            { t: I } = he(),
            { isOpen: D, onOpen: V, onOpenChange: X } = Te(),
            Z = te(),
            K = re();
        y.useEffect(() => {
            c && V();
        }, [c]),
            y.useEffect(() => {
                D || S(!1);
            }, [D]),
            y.useEffect(() => {
                R && P(R.taskUser.map((E) => E.task));
            }, [R]),
            y.useEffect(() => {
                j && b(j[l]);
            }, [j, l]),
            y.useEffect(() => {
                let E = !0;
                return (
                    (o == null ? void 0 : o.type) === 'WRITE' &&
                        Se(
                            { noteName: o.taskName, noteContent: '' },
                            Z[U],
                        ).then((r) => {
                            E && f(r);
                        }),
                    () => {
                        E = !1;
                    }
                );
            }, [o]);
        const Q = () => t(!n),
            z = async () => {
                if (!j) return;
                const E = l + 1;
                E < j.length ? (i(E), T(!1)) : K(I('/finishLesson'));
            };
        if (!R || q) return a.jsx(ke, {});
        const $ = () => {
            if (!o) return null;
            const E = { task: o, onSubmit: N, onSkip: k };
            switch (o.type) {
                case 'CHOOSE':
                    return a.jsx(Be, { ...E });
                case 'COMPLETE':
                    return a.jsx(_e, { ...E });
                case 'WRITE':
                    return M && a.jsx(Ae, { ...E, initialNote: M });
                default:
                    return null;
            }
        };
        return a.jsxs('div', {
            className: 'flex h-full flex-col',
            children: [
                a.jsx(Ce, {}),
                n
                    ? a.jsx(
                          'div',
                          { className: 'tasks h-full', children: $() },
                          o == null ? void 0 : o.id,
                      )
                    : a.jsx(Fe, { theory: R.lesson.lessonTheory, onEnd: Q }),
                a.jsx(Ne, {
                    isOpen: D,
                    onOpenChange: X,
                    backdrop: m ? 'opaque' : 'transparent',
                    placement: 'bottom',
                    classNames: {
                        header:
                            s != null && s.answerBoolean && !m
                                ? 'bg-green-400'
                                : 'bg-red-400',
                        closeButton: 'text-black',
                    },
                    children: a.jsx(Ee, {
                        className: 'bg-mainBackground-200',
                        children: (E) =>
                            a.jsxs(a.Fragment, {
                                children: [
                                    a.jsx(je, {
                                        children: m
                                            ? I('task.Skip')
                                            : s != null && s.answerBoolean
                                            ? I('task.Correct')
                                            : I('task.Incorrect'),
                                    }),
                                    a.jsx(Ie, {
                                        children: m
                                            ? a.jsxs(a.Fragment, {
                                                  children: [
                                                      I('task.SkipText'),
                                                      a.jsx('br', {}),
                                                      I('task.NoPoints'),
                                                  ],
                                              })
                                            : s == null
                                            ? void 0
                                            : s.responseText,
                                    }),
                                    a.jsxs(Le, {
                                        children: [
                                            a.jsx(A, {
                                                className: `rounded-xl
                                             p-4 font-semibold hover:shadow-[0px_0px_5px_rgba(0,0,0,0.35)]
                                    `,
                                                bgColor:
                                                    m ||
                                                    !(
                                                        s != null &&
                                                        s.answerBoolean
                                                    )
                                                        ? 'primaryPink-500'
                                                        : 'primaryBlue-50',
                                                onClick: () => {
                                                    E();
                                                },
                                                children:
                                                    s != null && s.answerBoolean
                                                        ? I('task.Review')
                                                        : I('task.Retry'),
                                            }),
                                            a.jsx(A, {
                                                className: `rounded-xl  p-4 font-bold hover:shadow-[0px_0px_5px_rgba(0,0,0,0.35)] ${
                                                    m ||
                                                    !(
                                                        s != null &&
                                                        s.answerBoolean
                                                    )
                                                        ? ''
                                                        : 'text-white'
                                                }
                                        `,
                                                bgColor:
                                                    m ||
                                                    !(
                                                        s != null &&
                                                        s.answerBoolean
                                                    )
                                                        ? 'bg-gray-300'
                                                        : 'bg-primaryBlue-500',
                                                onClick: () => {
                                                    E(), z();
                                                },
                                                children: I(
                                                    m
                                                        ? 'task.SkipNext'
                                                        : 'task.Next',
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                }),
            ],
        });
    };
export { Xe as default };

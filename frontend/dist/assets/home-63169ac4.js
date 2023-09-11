import {
    j as e,
    B as P,
    t as b,
    L as C,
    a as R,
    K as k,
    r as w,
    b as L,
    p as O,
    A as H,
    c as _,
    u as A,
    d as B,
    S as U,
    F,
    e as Y,
    C as z,
    P as I,
    f as D,
    g as J,
    h as $,
    i as K,
} from './index-9db94e76.js';
import { c as M } from './index-179c6cbe.js';
function T(s, r) {
    let n;
    try {
        n = s();
    } catch {
        return;
    }
    return {
        getItem: (o) => {
            var t;
            const u = (g) =>
                    g === null
                        ? null
                        : JSON.parse(g, r == null ? void 0 : r.reviver),
                d = (t = n.getItem(o)) != null ? t : null;
            return d instanceof Promise ? d.then(u) : u(d);
        },
        setItem: (o, t) =>
            n.setItem(o, JSON.stringify(t, r == null ? void 0 : r.replacer)),
        removeItem: (o) => n.removeItem(o),
    };
}
const N = (s) => (r) => {
        try {
            const n = s(r);
            return n instanceof Promise
                ? n
                : {
                      then(a) {
                          return N(a)(n);
                      },
                      catch(a) {
                          return this;
                      },
                  };
        } catch (n) {
            return {
                then(a) {
                    return this;
                },
                catch(a) {
                    return N(a)(n);
                },
            };
        }
    },
    q = (s, r) => (n, a, o) => {
        let t = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: (i) => i,
                version: 0,
                merge: (i, f) => ({ ...f, ...i }),
                ...r,
            },
            u = !1;
        const d = new Set(),
            g = new Set();
        let m;
        try {
            m = t.getStorage();
        } catch {}
        if (!m)
            return s(
                (...i) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`,
                    ),
                        n(...i);
                },
                a,
                o,
            );
        const p = N(t.serialize),
            S = () => {
                const i = t.partialize({ ...a() });
                let f;
                const l = p({ state: i, version: t.version })
                    .then((v) => m.setItem(t.name, v))
                    .catch((v) => {
                        f = v;
                    });
                if (f) throw f;
                return l;
            },
            j = o.setState;
        o.setState = (i, f) => {
            j(i, f), S();
        };
        const h = s(
            (...i) => {
                n(...i), S();
            },
            a,
            o,
        );
        let x;
        const c = () => {
            var i;
            if (!m) return;
            (u = !1), d.forEach((l) => l(a()));
            const f =
                ((i = t.onRehydrateStorage) == null
                    ? void 0
                    : i.call(t, a())) || void 0;
            return N(m.getItem.bind(m))(t.name)
                .then((l) => {
                    if (l) return t.deserialize(l);
                })
                .then((l) => {
                    if (l)
                        if (
                            typeof l.version == 'number' &&
                            l.version !== t.version
                        ) {
                            if (t.migrate) return t.migrate(l.state, l.version);
                            console.error(
                                "State loaded from storage couldn't be migrated since no migrate function was provided",
                            );
                        } else return l.state;
                })
                .then((l) => {
                    var v;
                    return (
                        (x = t.merge(l, (v = a()) != null ? v : h)),
                        n(x, !0),
                        S()
                    );
                })
                .then(() => {
                    f == null || f(x, void 0), (u = !0), g.forEach((l) => l(x));
                })
                .catch((l) => {
                    f == null || f(void 0, l);
                });
        };
        return (
            (o.persist = {
                setOptions: (i) => {
                    (t = { ...t, ...i }), i.getStorage && (m = i.getStorage());
                },
                clearStorage: () => {
                    m == null || m.removeItem(t.name);
                },
                getOptions: () => t,
                rehydrate: () => c(),
                hasHydrated: () => u,
                onHydrate: (i) => (
                    d.add(i),
                    () => {
                        d.delete(i);
                    }
                ),
                onFinishHydration: (i) => (
                    g.add(i),
                    () => {
                        g.delete(i);
                    }
                ),
            }),
            c(),
            x || h
        );
    },
    G = (s, r) => (n, a, o) => {
        let t = {
                storage: T(() => localStorage),
                partialize: (c) => c,
                version: 0,
                merge: (c, i) => ({ ...i, ...c }),
                ...r,
            },
            u = !1;
        const d = new Set(),
            g = new Set();
        let m = t.storage;
        if (!m)
            return s(
                (...c) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`,
                    ),
                        n(...c);
                },
                a,
                o,
            );
        const p = () => {
                const c = t.partialize({ ...a() });
                return m.setItem(t.name, { state: c, version: t.version });
            },
            S = o.setState;
        o.setState = (c, i) => {
            S(c, i), p();
        };
        const j = s(
            (...c) => {
                n(...c), p();
            },
            a,
            o,
        );
        let h;
        const x = () => {
            var c, i;
            if (!m) return;
            (u = !1),
                d.forEach((l) => {
                    var v;
                    return l((v = a()) != null ? v : j);
                });
            const f =
                ((i = t.onRehydrateStorage) == null
                    ? void 0
                    : i.call(t, (c = a()) != null ? c : j)) || void 0;
            return N(m.getItem.bind(m))(t.name)
                .then((l) => {
                    if (l)
                        if (
                            typeof l.version == 'number' &&
                            l.version !== t.version
                        ) {
                            if (t.migrate) return t.migrate(l.state, l.version);
                            console.error(
                                "State loaded from storage couldn't be migrated since no migrate function was provided",
                            );
                        } else return l.state;
                })
                .then((l) => {
                    var v;
                    return (
                        (h = t.merge(l, (v = a()) != null ? v : j)),
                        n(h, !0),
                        p()
                    );
                })
                .then(() => {
                    f == null || f(h, void 0),
                        (h = a()),
                        (u = !0),
                        g.forEach((l) => l(h));
                })
                .catch((l) => {
                    f == null || f(void 0, l);
                });
        };
        return (
            (o.persist = {
                setOptions: (c) => {
                    (t = { ...t, ...c }), c.storage && (m = c.storage);
                },
                clearStorage: () => {
                    m == null || m.removeItem(t.name);
                },
                getOptions: () => t,
                rehydrate: () => x(),
                hasHydrated: () => u,
                onHydrate: (c) => (
                    d.add(c),
                    () => {
                        d.delete(c);
                    }
                ),
                onFinishHydration: (c) => (
                    g.add(c),
                    () => {
                        g.delete(c);
                    }
                ),
            }),
            t.skipHydration || x(),
            h || j
        );
    },
    Q = (s, r) =>
        'getStorage' in r || 'serialize' in r || 'deserialize' in r
            ? q(s, r)
            : G(s, r),
    W = Q,
    X = W(
        (s) => ({
            category: 'POETRY',
            setCategory: (r) => s(() => ({ category: r })),
        }),
        { name: 'category-storage', storage: T(() => sessionStorage) },
    ),
    E = M()(X);
function Z({
    unitNumber: s,
    description: r,
    backgroundColor: n,
    currentLesson: a,
}) {
    return e.jsx(P, {
        className: ' max-w-2xl rounded-xl px-3 py-1.5 text-black',
        bgColor: n,
        children: e.jsxs('header', {
            className: 'flex w-96 items-center justify-between p-4',
            children: [
                e.jsxs('div', {
                    className: 'flex flex-col gap-1',
                    children: [
                        e.jsx('h2', {
                            className: 'text-2xl font-bold',
                            children: b('lessons.Unit') + ' ' + s,
                        }),
                        e.jsx('p', { className: 'text-lg', children: r }),
                    ],
                }),
                e.jsx(C, {
                    to: b('/lesson/' + a),
                    className:
                        'flex h-12 w-12 items-center justify-center rounded-full bg-white text-black',
                    children: e.jsx(R, { size: 32 }),
                }),
            ],
        }),
    });
}
function V({ bgColor: s, lesson: r, extraClasses: n, disabled: a }) {
    const o = ['flex flex-col', n];
    return (
        a && o.push('opacity-50 cursor-not-allowed'),
        e.jsxs('div', {
            className: o.join(' '),
            children: [
                e.jsx(P, {
                    linkTo: b('/lesson') + '/' + r.id,
                    className:
                        'mx-6 mt-10 flex h-32 w-32 items-center justify-center rounded-full',
                    bgColor: s,
                    ...(a && { disabled: !0 }),
                    children: e.jsx(k, {}),
                }),
                e.jsx(C, {
                    to: b('/lesson') + '/' + r.id,
                    className:
                        'absolute -bottom-12 w-full text-center font-bold',
                    children: r.lessonName,
                }),
            ],
        })
    );
}
function ee({ unit: s, first: r }) {
    const { lessons: n, unitColor: a, unitName: o, unitNumber: t } = s,
        [u, d] = w.useState(),
        [g, m] = w.useState(r),
        [p, S] = w.useState(!1),
        j = (h) => {
            switch (h % 5) {
                case 0:
                    return 'self-start';
                case 2:
                case 3:
                    return 'self-end';
                default:
                    return 'self-middle';
            }
        };
    return e.jsxs('div', {
        className: 'py-6',
        children: [
            e.jsx('div', {
                onClick: () => m(!g),
                children: e.jsx(Z, {
                    unitNumber: t,
                    description: o,
                    backgroundColor: a,
                    currentLesson: u,
                }),
            }),
            e.jsx('div', {
                className: 'flex flex-col items-center justify-center',
                children:
                    g &&
                    n.map((h, x) => {
                        let c = !1;
                        return (
                            x > 0 &&
                                (h.percentage === 0 && n[x - 1].percentage !== 0
                                    ? p
                                        ? (d(n[x - 1].id), S(!1))
                                        : (c = !0)
                                    : h.percentage === 0 &&
                                      n[x - 1].percentage === 0 &&
                                      (c = !0)),
                            e.jsx(
                                V,
                                {
                                    bgColor: 'secondaryYellow-500',
                                    lesson: h,
                                    extraClasses: j(x),
                                    disabled: c,
                                },
                                h.id,
                            )
                        );
                    }),
            }),
        ],
    });
}
const te = async (s, r) => {
    try {
        return (
            await L.get(`/api/v1/units/${s}/`, {
                headers: { Authorization: `Bearer ${r}` },
            })
        ).data;
    } catch (n) {
        throw new Error(`Error retrieving units by category: ${n}`);
    }
};
function se() {
    const { category: s } = E(),
        r = O(),
        [n, a] = w.useState([]),
        [o, t] = w.useState(!1);
    return (
        w.useEffect(() => {
            t(!0),
                te(s, r[H])
                    .then((u) => {
                        a(u), t(!1);
                    })
                    .catch((u) => {
                        console.log(u), t(!1);
                    });
        }, [s]),
        o
            ? e.jsx('main', { className: 'h-full', children: e.jsx(_, {}) })
            : e.jsx('main', {
                  className:
                      'flex h-full w-full flex-col items-center overflow-scroll py-12',
                  children: n.map((u, d) =>
                      e.jsx(ee, { unit: u, first: d === 0 }, u.id),
                  ),
              })
    );
}
const re = ({ children: s, className: r }) => {
        const n = [
            'flex h-full min-w-min flex-col items-center border-r-4 p-8',
            r,
        ];
        return e.jsx('aside', { className: n.join(' '), children: s });
    },
    y = ({
        icon: s,
        title: r,
        linkTo: n,
        onClick: a,
        disabled: o,
        className: t,
        bgColor: u,
    }) => {
        const d = [
            'mt-3.5 flex h-12 w-full items-center justify-start rounded-lg p-6  duration-150 ease-in-out transition',
            t,
            o
                ? 'cursor-default'
                : 'hover:font-bold hover:shadow-inner-dark hover:active:translate-y-1.5 hover:active:shadow-none',
            u ?? 'hover:bg-secondaryYellow-400',
        ].join(' ');
        return n
            ? e.jsxs(C, {
                  to: n,
                  className: d,
                  children: [
                      s,
                      e.jsx('span', { className: 'ml-4 text-xl', children: r }),
                  ],
              })
            : e.jsx('li', {
                  className: 'w-full',
                  children: e.jsxs('button', {
                      className: d,
                      onClick: a,
                      children: [
                          s,
                          e.jsx('span', {
                              className: 'ml-4 text-xl',
                              children: r,
                          }),
                      ],
                  }),
              });
    };
function ne() {
    return e.jsx('div', {
        className: 'flex h-screen items-center justify-center',
        children: e.jsx('div', {
            className: 'text-5xl font-bold text-blue-500',
            children: 'About Page',
        }),
    });
}
const le = () => {
    const { t: s } = A(),
        [r, n] = w.useState(!1),
        { setCategory: a, category: o } = E(),
        t = B(),
        u = (d) => {
            switch (d) {
                case 'POETRY':
                    return e.jsx(y, {
                        icon: e.jsx(K, { className: 'h-6 w-6' }),
                        title: s('category.Poetry'),
                        onClick: () => {
                            a('POETRY'), n(!r);
                        },
                        className: 'ml-10 w-48 ',
                        ...(o === 'POETRY' && !r && { disabled: !0 }),
                        bgColor: 'hover:bg-primaryBlue-400',
                    });
                case 'PROSE':
                    return e.jsx(y, {
                        icon: e.jsx($, { className: 'h-6 w-6' }),
                        title: s('category.Prose'),
                        onClick: () => {
                            a('PROSE'), n(!r);
                        },
                        className: 'ml-10 w-48 ',
                        ...(o === 'PROSE' && !r && { disabled: !0 }),
                        bgColor: 'hover:bg-primaryPink-400',
                    });
                case 'SCRIPT':
                    return e.jsx(y, {
                        icon: e.jsx(J, { className: 'h-6 w-6' }),
                        title: s('category.Script'),
                        onClick: () => {
                            a('SCRIPT'), n(!r);
                        },
                        className: 'ml-10 w-48 ',
                        ...(o === 'SCRIPT' && !r && { disabled: !0 }),
                    });
                default:
                    return null;
            }
        };
    return e.jsxs('div', {
        className: 'flex h-full w-full items-center justify-between',
        children: [
            e.jsxs(re, {
                children: [
                    e.jsx(C, { to: s('/'), children: e.jsx(U, {}) }),
                    e.jsxs('nav', {
                        className:
                            'flex h-full w-64 flex-col items-start justify-between ',
                        children: [
                            e.jsxs('ul', {
                                className: 'w-full',
                                children: [
                                    e.jsx(y, {
                                        icon: e.jsx(F, {
                                            className: 'h-6 w-6',
                                        }),
                                        title: s('folders.Title'),
                                        linkTo: s('/folders'),
                                    }),
                                    e.jsx(y, {
                                        icon: e.jsx(Y, {
                                            className: 'h-6 w-6',
                                        }),
                                        title: s('note.NewNote'),
                                        linkTo: s('/note'),
                                    }),
                                    e.jsx(y, {
                                        icon: e.jsx(z, {
                                            className: 'h-6 w-6',
                                        }),
                                        title: s('category.Title'),
                                        onClick: () => n(!r),
                                    }),
                                    e.jsxs('div', {
                                        className: ' flex flex-col',
                                        children: [
                                            u(o),
                                            r &&
                                                e.jsxs(e.Fragment, {
                                                    children: [
                                                        o !== 'POETRY' &&
                                                            u('POETRY'),
                                                        o !== 'PROSE' &&
                                                            u('PROSE'),
                                                        o !== 'SCRIPT' &&
                                                            u('SCRIPT'),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs('ul', {
                                className: 'w-full',
                                children: [
                                    e.jsx(y, {
                                        icon: e.jsx(I, {
                                            className: 'h-6 w-6',
                                        }),
                                        title: s('profile.Title'),
                                        linkTo: s('/profile'),
                                    }),
                                    e.jsx(y, {
                                        icon: e.jsx(D, {
                                            className: 'h-6 w-6',
                                        }),
                                        title: s('community.Title'),
                                        linkTo: s('/community'),
                                    }),
                                    t.pathname === s('/about') &&
                                        e.jsx(y, {
                                            icon: e.jsx(I, {
                                                className: 'h-6 w-6',
                                            }),
                                            title: s('lessons.Title'),
                                            linkTo: s('/'),
                                        }),
                                    t.pathname === s('/') &&
                                        e.jsx(y, {
                                            icon: e.jsx(I, {
                                                className: 'h-6 w-6',
                                            }),
                                            title: s('about.Title'),
                                            linkTo: s('/about'),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            t.pathname === s('/about') && e.jsx(ne, {}),
            t.pathname === s('/') && e.jsx(se, {}),
        ],
    });
};
export { le as default };

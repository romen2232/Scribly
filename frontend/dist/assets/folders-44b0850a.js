import {
    j as e,
    m as M,
    n as O,
    p as E,
    r as a,
    u as A,
    s as R,
    A as p,
    Q as x,
    H,
    c as L,
    I as g,
    B as j,
} from './index-9db94e76.js';
import { a as P, A as Q, T as y, m as q, c as z } from './Tree-0fce1b46.js';
import { u as K, m as U, a as W, b as G, d as J } from './notes-0819c811.js';
function V({ onChange: l, showFavorites: t, setShowFavorites: n }) {
    return e.jsx('div', {
        className: 'my-5 mr-10 w-full',
        children: e.jsxs('div', {
            className:
                'relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-mainBackground-100  shadow-lg',
            children: [
                e.jsx('label', {
                    className:
                        'grid h-full w-12 cursor-text place-items-center text-gray-300',
                    htmlFor: 'search',
                    children: e.jsx('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        className: 'h-6 w-6',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                        children: e.jsx('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2',
                            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                        }),
                    }),
                }),
                e.jsx('input', {
                    className:
                        'peer h-full w-full bg-mainBackground-100 pr-2 text-sm text-gray-700 outline-none',
                    type: 'text',
                    id: 'search',
                    placeholder: 'Carpetas, notas...',
                    autoComplete: 'off',
                    onChange: l,
                }),
                e.jsx('div', {
                    className:
                        'flex h-full items-center justify-center border-l-1 border-gray-200 px-4 text-gray-400',
                    children: t
                        ? e.jsx(M, {
                              className: 'h-7 w-7',
                              onClick: () => n(!1),
                          })
                        : e.jsx(O, {
                              className: 'h-7 w-7',
                              onClick: () => n(!0),
                          }),
                }),
            ],
        }),
    });
}
const $ = () => {
    const l = E(),
        [t, n] = a.useState(),
        { t: r } = A(),
        { isOpen: w, onOpen: F, onOpenChange: N } = K(),
        [i, b] = a.useState(''),
        [h, v] = a.useState(),
        [d, k] = a.useState(!1),
        [u, C] = a.useState(''),
        [m, _] = a.useState(''),
        [B, S] = a.useState(-1);
    a.useEffect(() => {
        c();
    }, []),
        a.useEffect(() => {
            if (t) {
                const s = R(t, i, d);
                v(s);
            }
        }, [i, t, d]);
    const f = (s) => {
            S(s), F();
        },
        I = (s, o, T) => {
            z({ folderName: s, folderDescription: o, folderParent: T }, l[p])
                .then(() => {
                    x.success(r('folders.toast.success')), c();
                })
                .catch((D) => {
                    x.error(r(D.message));
                });
        },
        c = () => {
            P(l[p])
                .then((s) => {
                    n(s);
                })
                .catch((s) => {
                    x.error(r(s.message));
                });
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(H, {}),
            e.jsx('h1', {
                className:
                    'flex w-full justify-center py-10 text-4xl font-extrabold ',
                children: r('folders.Title'),
            }),
            e.jsxs('nav', {
                className: 'flex w-full items-center px-12',
                children: [
                    e.jsx(V, {
                        onChange: (s) => b(s.target.value),
                        setShowFavorites: k,
                        showFavorites: d,
                    }),
                    e.jsx(Q, {
                        parentFolderId: (t == null ? void 0 : t.id) ?? -1,
                        openModal: f,
                    }),
                ],
            }),
            i || d
                ? h
                    ? e.jsx(y, { rootFolder: h, openModal: f, updateRoot: c })
                    : e.jsx('p', {
                          className:
                              'w-full pt-24 text-center text-3xl font-bold',
                          children: r('folders.NoFolders'),
                      })
                : t
                ? e.jsx(y, { rootFolder: t, openModal: f, updateRoot: c })
                : e.jsx(L, {}),
            e.jsx(U, {
                isOpen: w,
                onOpenChange: N,
                placement: 'top-center',
                className: 'bg-mainBackground-200',
                children: e.jsx(W, {
                    children: (s) =>
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(G, {
                                    children: e.jsx('h1', {
                                        className: 'text-2xl font-bold',
                                        children: r('folders.Modal.Title'),
                                    }),
                                }),
                                e.jsxs(J, {
                                    children: [
                                        e.jsx(g, {
                                            label: r('folders.Name'),
                                            inputType: 'text',
                                            name: r('folder.Name'),
                                            placeholder: r('folders.Name'),
                                            required: !0,
                                            value: u,
                                            onChange: (o) => C(o.target.value),
                                        }),
                                        e.jsx(g, {
                                            label: r('folders.Description'),
                                            inputType: 'text',
                                            name: r('folder.Description'),
                                            placeholder: r(
                                                'folders.Description',
                                            ),
                                            required: !0,
                                            value: m,
                                            onChange: (o) => _(o.target.value),
                                        }),
                                    ],
                                }),
                                e.jsxs(q, {
                                    children: [
                                        e.jsx(j, {
                                            className:
                                                'w-full rounded-lg bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600 sm:w-auto',
                                            bgColor: 'gray-200',
                                            onClick: () => {
                                                s();
                                            },
                                            children: r('folders.modal.cancel'),
                                        }),
                                        e.jsx(j, {
                                            className:
                                                'w-full rounded-lg bg-primaryBlue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primaryBlue-800 focus:outline-none focus:ring-4 focus:ring-primaryBlue-300 sm:w-auto',
                                            bgColor: 'primaryBlue-700',
                                            onClick: () => {
                                                u === '' ||
                                                    m === '' ||
                                                    (I(u, m, B), s());
                                            },
                                            children: r('folders.modal.create'),
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
export { $ as default };

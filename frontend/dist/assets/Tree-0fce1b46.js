import { j as T, q as P, g as B, h as H, p as S } from './notes-0819c811.js';
import {
    j as e,
    r as m,
    l as _,
    u as C,
    W as z,
    X as D,
    b as x,
    p as U,
    Y as M,
    F as R,
    Z as q,
    m as F,
    n as K,
    A as E,
    L as W,
} from './index-9db94e76.js';
var $ = T((s, n) => {
    const { as: a, children: o, className: l, ...r } = s,
        { slots: i, classNames: t } = P(),
        d = B(n),
        u = a || 'footer';
    return e.jsx(u, {
        ref: d,
        className: i.footer({ class: H(t == null ? void 0 : t.footer, l) }),
        ...r,
        children: o,
    });
});
$.displayName = 'NextUI.ModalFooter';
var Q = $;
const X = () => {
    const [s, n] = m.useState(!1),
        a = m.useRef(null),
        o = () => n(!0),
        l = () => n(!1);
    return (
        m.useEffect(() => {
            const r = a.current;
            if (r)
                return (
                    r.addEventListener('mouseover', o),
                    r.addEventListener('mouseout', l),
                    () => {
                        r.removeEventListener('mouseover', o),
                            r.removeEventListener('mouseout', l);
                    }
                );
        }, [a, o, l]),
        { ref: a, isHovered: s }
    );
};
function Y({ parentFolderId: s, openModal: n }) {
    const a = 'mr-5 h-8 w-8 hover:cursor-pointer',
        o = _(),
        { t: l } = C(),
        r = (t, d) => {
            t.stopPropagation(), n == null || n(d);
        },
        i = (t, d) => {
            t.stopPropagation(), o(l('/note') + '?' + l('folderId') + `=${d}`);
        };
    return e.jsxs('div', {
        className: 'flex ',
        children: [
            e.jsx(z, { className: a, onClick: (t) => i(t, s) }),
            e.jsx(D, { className: a, onClick: (t) => r(t, s) }),
        ],
    });
}
const V = async (s, n) => {
        try {
            return (
                await x.post('/api/v1/folders/', s, {
                    headers: {
                        Authorization: `Bearer ${n}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
            ).data;
        } catch (a) {
            throw new Error(`Error creating folder: ${a}`);
        }
    },
    ee = async (s, n) => {
        try {
            return (
                await x.get(`/api/v1/folder/${s}/`, {
                    headers: { Authorization: `Bearer ${n}` },
                })
            ).data;
        } catch (a) {
            throw new Error(`Error retrieving folder: ${a}`);
        }
    },
    Z = async (s, n, a) => {
        try {
            return (
                await x.patch(`/api/v1/folder/${s}/`, n, {
                    headers: {
                        Authorization: `Bearer ${a}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
            ).data;
        } catch (o) {
            throw new Error(`Error partially updating folder: ${o}`);
        }
    },
    se = async (s) => {
        try {
            return (
                await x.get('/api/v1/user/folder/root', {
                    headers: { Authorization: `Bearer ${s}` },
                })
            ).data;
        } catch (n) {
            throw new Error(`Error retrieving root folder: ${n}`);
        }
    };
function h({
    folder: s,
    name: n,
    description: a,
    index: o,
    favorite: l,
    data: r,
    onlyFolders: i,
    openModal: t,
    updateRoot: d,
    changeFolder: u,
}) {
    var I, g;
    const { ref: b, isHovered: k } = X(),
        [f, w] = m.useState(l),
        { t: v } = C(),
        [p, A] = m.useState(i ?? !1),
        j = U(),
        y = ['ml-0', 'ml-16', 'ml-32', 'ml-48'],
        O = () => {
            if (i) {
                u && u(r);
                return;
            }
            A(!p);
        },
        N = (c) => {
            c.stopPropagation(),
                c.preventDefault(),
                s
                    ? Z(r.id, { favorite: !f }, j[E]).then(() => {
                          w(!f), d && d();
                      })
                    : S(r.id, { favorite: !f }, j[E]).then(() => {
                          w(!f), d && d();
                      });
        },
        L = ({ children: c }) =>
            !s && 'folder' in r
                ? e.jsx(W, {
                      to:
                          v('/note') +
                          '?' +
                          v('noteId') +
                          '=' +
                          r.id +
                          '&' +
                          v('folderId') +
                          '=' +
                          r.folder,
                      className: 'flex items-center justify-between',
                      children: c,
                  })
                : c;
    return (i && !s) || (!s && 'noteName' in r && r.noteName === '')
        ? null
        : e.jsxs(e.Fragment, {
              children: [
                  e.jsx('div', {
                      className: 'w-full px-4 pb-3',
                      children: e.jsx(L, {
                          children: e.jsxs('div', {
                              ref: b,
                              onClick: O,
                              className: `hover:bg-hover:shadow flex w-full cursor-pointer items-center justify-between rounded-md p-3 duration-300 ease-in-out transition ${
                                  s
                                      ? 'hover:bg-primaryPink-100'
                                      : 'hover:bg-primaryBlue-100'
                              } hover:shadow-lg ${y[o]}`,
                              children: [
                                  e.jsxs('div', {
                                      className: 'flex items-center',
                                      children: [
                                          s
                                              ? p
                                                  ? e.jsx(M, {
                                                        className: 'h-8 w-8',
                                                    })
                                                  : e.jsx(R, {
                                                        className: 'h-8 w-8',
                                                    })
                                              : e.jsx(q, {
                                                    className: 'h-8 w-8',
                                                }),
                                          e.jsxs('div', {
                                              className: 'px-3',
                                              children: [
                                                  e.jsx('h4', {
                                                      className: 'font-bold',
                                                      children: n,
                                                  }),
                                                  e.jsx('p', {
                                                      className: 'text-xs',
                                                      children: a,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  e.jsxs('div', {
                                      className: 'flex items-center gap-10',
                                      children: [
                                          !i &&
                                              k &&
                                              s &&
                                              'depth' in r &&
                                              r.depth &&
                                              r.depth <= 5 &&
                                              e.jsx(Y, {
                                                  parentFolderId: r.id,
                                                  openModal: t,
                                              }),
                                          e.jsx('div', {
                                              children:
                                                  !i &&
                                                  (f
                                                      ? e.jsx(F, {
                                                            className:
                                                                'h-7 w-7',
                                                            onClick: N,
                                                        })
                                                      : e.jsx(K, {
                                                            className:
                                                                'h-7 w-7',
                                                            onClick: N,
                                                        })),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
                  p &&
                      'subfolders' in r &&
                      e.jsx(e.Fragment, {
                          children:
                              (I = r.subfolders) == null
                                  ? void 0
                                  : I.map((c) =>
                                        e.jsx(
                                            h,
                                            {
                                                folder: !0,
                                                name: c.folderName,
                                                description:
                                                    c.folderDescription,
                                                index: o + 1,
                                                data: c,
                                                onlyFolders: i,
                                                changeFolder: u,
                                                openModal: t,
                                            },
                                            c.id,
                                        ),
                                    ),
                      }),
                  p &&
                      !i &&
                      'notes' in r &&
                      e.jsx(e.Fragment, {
                          children:
                              (g = r.notes) == null
                                  ? void 0
                                  : g.map((c) =>
                                        e.jsx(
                                            h,
                                            {
                                                folder: !1,
                                                name: c.noteName,
                                                index: o + 1,
                                                data: c,
                                            },
                                            c.id,
                                        ),
                                    ),
                      }),
              ],
          });
}
function re({
    rootFolder: s,
    openModal: n,
    changeFolder: a,
    updateRoot: o,
    onlyFolders: l,
}) {
    var r, i;
    return e.jsxs('div', {
        className: 'ml- flex w-full flex-col px-12 text-xl',
        children: [
            (r = s == null ? void 0 : s.subfolders) == null
                ? void 0
                : r.map((t) =>
                      e.jsx(
                          h,
                          {
                              folder: !0,
                              index: 0,
                              data: t,
                              name: t.folderName,
                              description: t.folderDescription,
                              favorite: t.favorite,
                              onlyFolders: l,
                              changeFolder: a,
                              openModal: n,
                              updateRoot: o,
                          },
                          t.id,
                      ),
                  ),
            l
                ? null
                : (i = s == null ? void 0 : s.notes) == null
                ? void 0
                : i.map((t) =>
                      e.jsx(
                          h,
                          {
                              folder: !1,
                              index: 0,
                              data: t,
                              name: t.noteName,
                              favorite: t.favorite,
                              updateRoot: o,
                              changeFolder: a,
                          },
                          t.id,
                      ),
                  ),
        ],
    });
}
export { Y as A, re as T, se as a, V as c, Q as m, ee as r };

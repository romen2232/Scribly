import {
    p as P,
    r as o,
    k as T,
    u as y,
    l as E,
    j as i,
    c as F,
    H as R,
    A as l,
} from './index-9db94e76.js';
import { N as U } from './Note-d300367a.js';
import { r as k, a as A } from './Tree-0fce1b46.js';
import { r as H, c as _ } from './notes-0819c811.js';
import './index-179c6cbe.js';
const K = () => {
    const n = P(),
        [g, h] = o.useState({}),
        [x, N] = o.useState({}),
        [p, I] = T(),
        c = new URLSearchParams(window.location.search),
        { t: s } = y(),
        [r, u] = o.useState(Number(p.get(s('folderId')) ?? -1)),
        [w, f] = o.useState(Number(p.get(s('noteId')) ?? -1)),
        [j, m] = o.useState(!0),
        S = E();
    o.useEffect(() => {
        let a;
        const d = async () => {
                if ((m(!0), isNaN(r) && u(-1), r !== -1))
                    try {
                        const t = await k(r, n[l]);
                        h(t);
                        return;
                    } catch {
                        u(-1);
                    }
                const e = await A(n[l]);
                h(e),
                    e.id &&
                        (u(e.id),
                        c.set(s('folderId'), e.id.toString()),
                        S('?' + c.toString(), { replace: !0 }));
            },
            L = async () => {
                if (w !== -1)
                    try {
                        const t = await H(w, n[l]);
                        t.id && f(t.id), N(t);
                        return;
                    } catch {
                        f(-1);
                    }
                if (r === -1) return;
                const e = await _({ folder: r }, n[l]);
                N(e),
                    e.id &&
                        (f(e.id),
                        c.set(s('noteId'), e.id.toString()),
                        S('?' + c.toString(), { replace: !0 })),
                    (a = setTimeout(() => {
                        m(!1);
                    }, 250));
            };
        return (
            d(),
            L(),
            (a = setTimeout(() => {
                m(!1);
            }, 250)),
            () => {
                clearTimeout(a);
            }
        );
    }, [r]);
    const v = (a) => {
        const d = new URLSearchParams(window.location.search);
        d.set(s('folderId'), a.toString()), I(d);
    };
    return j
        ? i.jsx(F, {})
        : i.jsxs('div', {
              className: 'text-tiviBlack h-full max-h-screen overflow-hidden',
              children: [
                  i.jsx(R, {}),
                  i.jsx('main', {
                      className: ' flex h-full flex-col',
                      children: i.jsx(U, { folder: g, note: x, updateURL: v }),
                  }),
              ],
          });
};
export { K as default };

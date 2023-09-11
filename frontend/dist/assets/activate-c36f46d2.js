import {
    u as o,
    r as n,
    o as c,
    q as m,
    j as t,
    v as d,
    w as r,
    B as u,
    x,
} from './index-9db94e76.js';
const h = (s) => {
        let e = s.split('@')[1] ?? s;
        return (
            e.includes('gmail')
                ? (e = 'https://mail.google.com/mail/u/0/')
                : e.includes('outlook') || e.includes('hotmail')
                ? (e = 'https://outlook.live.com/mail/0/inbox')
                : e.includes('yahoo')
                ? (e = 'https://mail.yahoo.com/d/folders/1')
                : e.includes('icloud')
                ? (e = 'https://www.icloud.com/#mail')
                : e.includes('zoho')
                ? (e = 'https://mail.zoho.com/zm/#mail/folder/inbox')
                : e.includes('aol')
                ? (e = 'https://mail.aol.com/webmail-std/en-us/suite')
                : e.includes('yandex')
                ? (e = 'https://mail.yandex.com/')
                : e.includes('protonmail')
                ? (e = 'https://mail.protonmail.com/inbox')
                : e.includes('tutanota')
                ? (e = 'https://mail.tutanota.com/')
                : e.includes('gmx')
                ? (e = 'https://www.gmx.com/')
                : e.includes('mail')
                ? (e = 'https://www.mail.com/')
                : e.includes('fastmail')
                ? (e = 'https://www.fastmail.com/mail/')
                : (e = ''),
            e
        );
    },
    p = () => {
        const { t: s } = o(),
            { email: e, activateUser: a } = n.useContext(c),
            { token: l } = m(),
            i = h(e ?? '');
        return (
            l && a(l),
            t.jsx(d, {
                children: t.jsxs('div', {
                    className:
                        'flex h-full flex-col items-center justify-center',
                    children: [
                        t.jsx('div', {
                            className: 'h-64 w-64 overflow-hidden rounded-full',
                            children: t.jsx(r, {}),
                        }),
                        t.jsxs('div', {
                            className:
                                'flex flex-col items-center justify-center px-28',
                            children: [
                                t.jsx('h2', {
                                    className:
                                        'my-4 text-center text-2xl font-bold',
                                    children: s('activate.Thanks'),
                                }),
                                t.jsx('p', {
                                    className: ' text-center',
                                    children: s('activate.ConfirmationSent'),
                                }),
                                i !== ''
                                    ? t.jsx(u, {
                                          linkTo: i,
                                          className:
                                              'mt-4 w-full rounded  px-3 py-2 font-bold text-secondaryYellow-500 duration-200 ease-in-out transition',
                                          bgColor: 'zinc-800 ',
                                          children: s('activate.GoToMail'),
                                      })
                                    : null,
                                t.jsxs('p', {
                                    className: 'mt-8 text-center text-xs',
                                    children: [
                                        s('activate.NoEmail'),
                                        t.jsx('br', {}),
                                        s('activate.CheckSpam'),
                                        t.jsx(x, {
                                            to: '/login',
                                            color: 'pink',
                                            children: s('activate.resend'),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    };
export { p as default };

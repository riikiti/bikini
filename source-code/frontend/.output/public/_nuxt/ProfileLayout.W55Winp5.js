import { _ as k } from './index.vue.KgNAwuLv.js'
import { _ as v } from './_plugin-vue_export-helper.x3n3nnut.js'
import {
  o as t,
  c as e,
  a as n,
  b1 as u,
  H as y,
  Z as g,
  aa as w,
  a7 as $,
  b as s,
  U as r,
  w as a,
  a2 as p,
  F as _,
  V as S,
  t as l,
  a1 as V,
  d as b
} from './entry.-G-ktP1b.js'
import { N as B } from './Space.6LiddmI6.js'
import { N as C } from './Alert.KajP6s4M.js'
import './nuxt-link.M68NXVdN.js'
import './index.Vc_HxgLC.js'
import './utils.etXNvgjn.js'
import './Tag.z5-eXjHq.js'
import './EUserAccoutType.8nCACn_d.js'
import './Popover.57CORh-g.js'
import './format-length.4l65r8M5.js'
import './createLucideIcon.Mm55B4SN.js'
import './ChevronRight.NlGVPM9Q.js'
import './happens-in.HIJlj3JZ.js'
import './utils.GbULsUkY.js'
import './Empty.mreOzUBv.js'
import './user.pGRvsrqG.js'
import './heart.xz6mz4mF.js'
import './mail.S3-EJT0G.js'
import './get-slot.bpfTnPl7.js'
const z = {},
  A = { class: 'px-2 sm:px-4 h-screen' },
  F = { class: 'max-w-[1368px] mx-auto h-full' }
function L(i, m) {
  return t(), e('div', A, [n('div', F, [u(i.$slots, 'default')])])
}
const T = v(z, [['render', L]]),
  D = { key: 0, class: 'mt-2 sticky top-16 z-30' },
  E = { class: 'max-w-[1366px] mx-auto mt-2' },
  H = { class: 'flex items-center gap-1' },
  nt = y({
    __name: 'ProfileLayout',
    setup(i) {
      const m = g(),
        { check: c } = w(m)
      return (d, P) => {
        const f = k,
          x = $('nuxt-link'),
          h = T
        return (
          t(),
          e(
            _,
            null,
            [
              s(f),
              r(c).length
                ? (t(),
                  e('div', D, [
                    n('div', E, [
                      s(
                        r(C),
                        { title: 'Ваш профиль не активен.', type: 'warning', closable: '' },
                        {
                          default: a(() => [
                            s(
                              r(B),
                              { vertical: '', size: 'large' },
                              {
                                default: a(() => [
                                  (t(!0),
                                  e(
                                    _,
                                    null,
                                    S(
                                      r(c),
                                      (o, N) => (
                                        t(),
                                        e('div', { key: N }, [
                                          n('div', H, [
                                            n('span', null, l(o.title), 1),
                                            o.route
                                              ? (t(),
                                                V(
                                                  x,
                                                  {
                                                    key: 0,
                                                    class: 'text-black font-medium',
                                                    to: o.route
                                                  },
                                                  {
                                                    default: a(() => [b(l(o.routeName), 1)]),
                                                    _: 2
                                                  },
                                                  1032,
                                                  ['to']
                                                ))
                                              : p('', !0)
                                          ])
                                        ])
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      )
                    ])
                  ]))
                : p('', !0),
              s(h, { class: 'pt-12' }, { default: a(() => [u(d.$slots, 'default')]), _: 3 })
            ],
            64
          )
        )
      }
    }
  })
export { nt as default }

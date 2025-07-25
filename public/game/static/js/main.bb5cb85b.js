/*! For license information please see main.bb5cb85b.js.LICENSE.txt */
(() => {
  'use strict';
  var t = {
      43: (t, e, n) => {
        t.exports = n(202);
      },
      153: (t, e, n) => {
        var i = n(43),
          r = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          s = Object.prototype.hasOwnProperty,
          a =
            i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(t, e, n) {
          var i,
            o = {},
            u = null,
            c = null;
          for (i in (void 0 !== n && (u = '' + n),
          void 0 !== e.key && (u = '' + e.key),
          void 0 !== e.ref && (c = e.ref),
          e))
            s.call(e, i) && !l.hasOwnProperty(i) && (o[i] = e[i]);
          if (t && t.defaultProps)
            for (i in (e = t.defaultProps)) void 0 === o[i] && (o[i] = e[i]);
          return {
            $$typeof: r,
            type: t,
            key: u,
            ref: c,
            props: o,
            _owner: a.current,
          };
        }
        ((e.jsx = u), (e.jsxs = u));
      },
      202: (t, e) => {
        var n = Symbol.for('react.element'),
          i = Symbol.for('react.portal'),
          r = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          s = Symbol.for('react.profiler'),
          a = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          h = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(t, e, n) {
          ((this.props = t),
            (this.context = e),
            (this.refs = g),
            (this.updater = n || p));
        }
        function y() {}
        function b(t, e, n) {
          ((this.props = t),
            (this.context = e),
            (this.refs = g),
            (this.updater = n || p));
        }
        ((v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (t, e) {
            if ('object' !== typeof t && 'function' !== typeof t && null != t)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, t, e, 'setState');
          }),
          (v.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
          }),
          (y.prototype = v.prototype));
        var x = (b.prototype = new y());
        ((x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0));
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          S = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(t, e, i) {
          var r,
            o = {},
            s = null,
            a = null;
          if (null != e)
            for (r in (void 0 !== e.ref && (a = e.ref),
            void 0 !== e.key && (s = '' + e.key),
            e))
              _.call(e, r) && !k.hasOwnProperty(r) && (o[r] = e[r]);
          var l = arguments.length - 2;
          if (1 === l) o.children = i;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (t && t.defaultProps)
            for (r in (l = t.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
          return {
            $$typeof: n,
            type: t,
            key: s,
            ref: a,
            props: o,
            _owner: S.current,
          };
        }
        function P(t) {
          return 'object' === typeof t && null !== t && t.$$typeof === n;
        }
        var M = /\/+/g;
        function C(t, e) {
          return 'object' === typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })('' + t.key)
            : e.toString(36);
        }
        function T(t, e, r, o, s) {
          var a = typeof t;
          ('undefined' !== a && 'boolean' !== a) || (t = null);
          var l = !1;
          if (null === t) l = !0;
          else
            switch (a) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case n:
                  case i:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = t))),
              (t = '' === o ? '.' + C(l, 0) : o),
              w(s)
                ? ((r = ''),
                  null != t && (r = t.replace(M, '$&/') + '/'),
                  T(s, e, r, '', function (t) {
                    return t;
                  }))
                : null != s &&
                  (P(s) &&
                    (s = (function (t, e) {
                      return {
                        $$typeof: n,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      s,
                      r +
                        (!s.key || (l && l.key === s.key)
                          ? ''
                          : ('' + s.key).replace(M, '$&/') + '/') +
                        t,
                    )),
                  e.push(s)),
              1
            );
          if (((l = 0), (o = '' === o ? '.' : o + ':'), w(t)))
            for (var u = 0; u < t.length; u++) {
              var c = o + C((a = t[u]), u);
              l += T(a, e, r, c, s);
            }
          else if (
            ((c = (function (t) {
              return null === t || 'object' !== typeof t
                ? null
                : 'function' === typeof (t = (f && t[f]) || t['@@iterator'])
                  ? t
                  : null;
            })(t)),
            'function' === typeof c)
          )
            for (t = c.call(t), u = 0; !(a = t.next()).done; )
              l += T((a = a.value), e, r, (c = o + C(a, u++)), s);
          else if ('object' === a)
            throw (
              (e = String(t)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === e
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e) +
                  '). If you meant to render a collection of children, use an array instead.',
              )
            );
          return l;
        }
        function D(t, e, n) {
          if (null == t) return t;
          var i = [],
            r = 0;
          return (
            T(t, i, '', '', function (t) {
              return e.call(n, t, r++);
            }),
            i
          );
        }
        function A(t) {
          if (-1 === t._status) {
            var e = t._result;
            ((e = e()).then(
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 1), (t._result = e));
              },
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 2), (t._result = e));
              },
            ),
              -1 === t._status && ((t._status = 0), (t._result = e)));
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var O = { current: null },
          F = { transition: null },
          R = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: S,
          };
        function L() {
          throw Error(
            'act(...) is not supported in production builds of React.',
          );
        }
        ((e.Children = {
          map: D,
          forEach: function (t, e, n) {
            D(
              t,
              function () {
                e.apply(this, arguments);
              },
              n,
            );
          },
          count: function (t) {
            var e = 0;
            return (
              D(t, function () {
                e++;
              }),
              e
            );
          },
          toArray: function (t) {
            return (
              D(t, function (t) {
                return t;
              }) || []
            );
          },
          only: function (t) {
            if (!P(t))
              throw Error(
                'React.Children.only expected to receive a single React element child.',
              );
            return t;
          },
        }),
          (e.Component = v),
          (e.Fragment = r),
          (e.Profiler = s),
          (e.PureComponent = b),
          (e.StrictMode = o),
          (e.Suspense = c),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (e.act = L),
          (e.cloneElement = function (t, e, i) {
            if (null === t || void 0 === t)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  t +
                  '.',
              );
            var r = m({}, t.props),
              o = t.key,
              s = t.ref,
              a = t._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((s = e.ref), (a = S.current)),
                void 0 !== e.key && (o = '' + e.key),
                t.type && t.type.defaultProps)
              )
                var l = t.type.defaultProps;
              for (u in e)
                _.call(e, u) &&
                  !k.hasOwnProperty(u) &&
                  (r[u] = void 0 === e[u] && void 0 !== l ? l[u] : e[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) r.children = i;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              r.children = l;
            }
            return {
              $$typeof: n,
              type: t.type,
              key: o,
              ref: s,
              props: r,
              _owner: a,
            };
          }),
          (e.createContext = function (t) {
            return (
              ((t = {
                $$typeof: l,
                _currentValue: t,
                _currentValue2: t,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: t }),
              (t.Consumer = t)
            );
          }),
          (e.createElement = E),
          (e.createFactory = function (t) {
            var e = E.bind(null, t);
            return ((e.type = t), e);
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (t) {
            return { $$typeof: u, render: t };
          }),
          (e.isValidElement = P),
          (e.lazy = function (t) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: t },
              _init: A,
            };
          }),
          (e.memo = function (t, e) {
            return { $$typeof: h, type: t, compare: void 0 === e ? null : e };
          }),
          (e.startTransition = function (t) {
            var e = F.transition;
            F.transition = {};
            try {
              t();
            } finally {
              F.transition = e;
            }
          }),
          (e.unstable_act = L),
          (e.useCallback = function (t, e) {
            return O.current.useCallback(t, e);
          }),
          (e.useContext = function (t) {
            return O.current.useContext(t);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (t) {
            return O.current.useDeferredValue(t);
          }),
          (e.useEffect = function (t, e) {
            return O.current.useEffect(t, e);
          }),
          (e.useId = function () {
            return O.current.useId();
          }),
          (e.useImperativeHandle = function (t, e, n) {
            return O.current.useImperativeHandle(t, e, n);
          }),
          (e.useInsertionEffect = function (t, e) {
            return O.current.useInsertionEffect(t, e);
          }),
          (e.useLayoutEffect = function (t, e) {
            return O.current.useLayoutEffect(t, e);
          }),
          (e.useMemo = function (t, e) {
            return O.current.useMemo(t, e);
          }),
          (e.useReducer = function (t, e, n) {
            return O.current.useReducer(t, e, n);
          }),
          (e.useRef = function (t) {
            return O.current.useRef(t);
          }),
          (e.useState = function (t) {
            return O.current.useState(t);
          }),
          (e.useSyncExternalStore = function (t, e, n) {
            return O.current.useSyncExternalStore(t, e, n);
          }),
          (e.useTransition = function () {
            return O.current.useTransition();
          }),
          (e.version = '18.3.1'));
      },
      234: (t, e) => {
        function n(t, e) {
          var n = t.length;
          t.push(e);
          t: for (; 0 < n; ) {
            var i = (n - 1) >>> 1,
              r = t[i];
            if (!(0 < o(r, e))) break t;
            ((t[i] = e), (t[n] = r), (n = i));
          }
        }
        function i(t) {
          return 0 === t.length ? null : t[0];
        }
        function r(t) {
          if (0 === t.length) return null;
          var e = t[0],
            n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var i = 0, r = t.length, s = r >>> 1; i < s; ) {
              var a = 2 * (i + 1) - 1,
                l = t[a],
                u = a + 1,
                c = t[u];
              if (0 > o(l, n))
                u < r && 0 > o(c, l)
                  ? ((t[i] = c), (t[u] = n), (i = u))
                  : ((t[i] = l), (t[a] = n), (i = a));
              else {
                if (!(u < r && 0 > o(c, n))) break t;
                ((t[i] = c), (t[u] = n), (i = u));
              }
            }
          }
          return e;
        }
        function o(t, e) {
          var n = t.sortIndex - e.sortIndex;
          return 0 !== n ? n : t.id - e.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var a = Date,
            l = a.now();
          e.unstable_now = function () {
            return a.now() - l;
          };
        }
        var u = [],
          c = [],
          h = 1,
          d = null,
          f = 3,
          p = !1,
          m = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(t) {
          for (var e = i(c); null !== e; ) {
            if (null === e.callback) r(c);
            else {
              if (!(e.startTime <= t)) break;
              (r(c), (e.sortIndex = e.expirationTime), n(u, e));
            }
            e = i(c);
          }
        }
        function w(t) {
          if (((g = !1), x(t), !m))
            if (null !== i(u)) ((m = !0), F(_));
            else {
              var e = i(c);
              null !== e && R(w, e.startTime - t);
            }
        }
        function _(t, n) {
          ((m = !1), g && ((g = !1), y(P), (P = -1)), (p = !0));
          var o = f;
          try {
            for (
              x(n), d = i(u);
              null !== d && (!(d.expirationTime > n) || (t && !T()));

            ) {
              var s = d.callback;
              if ('function' === typeof s) {
                ((d.callback = null), (f = d.priorityLevel));
                var a = s(d.expirationTime <= n);
                ((n = e.unstable_now()),
                  'function' === typeof a
                    ? (d.callback = a)
                    : d === i(u) && r(u),
                  x(n));
              } else r(u);
              d = i(u);
            }
            if (null !== d) var l = !0;
            else {
              var h = i(c);
              (null !== h && R(w, h.startTime - n), (l = !1));
            }
            return l;
          } finally {
            ((d = null), (f = o), (p = !1));
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          k = !1,
          E = null,
          P = -1,
          M = 5,
          C = -1;
        function T() {
          return !(e.unstable_now() - C < M);
        }
        function D() {
          if (null !== E) {
            var t = e.unstable_now();
            C = t;
            var n = !0;
            try {
              n = E(!0, t);
            } finally {
              n ? S() : ((k = !1), (E = null));
            }
          } else k = !1;
        }
        if ('function' === typeof b)
          S = function () {
            b(D);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var A = new MessageChannel(),
            O = A.port2;
          ((A.port1.onmessage = D),
            (S = function () {
              O.postMessage(null);
            }));
        } else
          S = function () {
            v(D, 0);
          };
        function F(t) {
          ((E = t), k || ((k = !0), S()));
        }
        function R(t, n) {
          P = v(function () {
            t(e.unstable_now());
          }, n);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (t) {
            t.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            m || p || ((m = !0), F(_));
          }),
          (e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (M = 0 < t ? Math.floor(1e3 / t) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return i(u);
          }),
          (e.unstable_next = function (t) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break;
              default:
                e = f;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (t, e) {
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                t = 3;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (e.unstable_scheduleCallback = function (t, r, o) {
            var s = e.unstable_now();
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? s + o : s)
                : (o = s),
              t)
            ) {
              case 1:
                var a = -1;
                break;
              case 2:
                a = 250;
                break;
              case 5:
                a = 1073741823;
                break;
              case 4:
                a = 1e4;
                break;
              default:
                a = 5e3;
            }
            return (
              (t = {
                id: h++,
                callback: r,
                priorityLevel: t,
                startTime: o,
                expirationTime: (a = o + a),
                sortIndex: -1,
              }),
              o > s
                ? ((t.sortIndex = o),
                  n(c, t),
                  null === i(u) &&
                    t === i(c) &&
                    (g ? (y(P), (P = -1)) : (g = !0), R(w, o - s)))
                : ((t.sortIndex = a), n(u, t), m || p || ((m = !0), F(_))),
              t
            );
          }),
          (e.unstable_shouldYield = T),
          (e.unstable_wrapCallback = function (t) {
            var e = f;
            return function () {
              var n = f;
              f = e;
              try {
                return t.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          }));
      },
      391: (t, e, n) => {
        var i = n(950);
        ((e.createRoot = i.createRoot), (e.hydrateRoot = i.hydrateRoot));
      },
      579: (t, e, n) => {
        t.exports = n(153);
      },
      730: (t, e, n) => {
        var i = n(43),
          r = n(853);
        function o(t) {
          for (
            var e =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
              n = 1;
            n < arguments.length;
            n++
          )
            e += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var s = new Set(),
          a = {};
        function l(t, e) {
          (u(t, e), u(t + 'Capture', e));
        }
        function u(t, e) {
          for (a[t] = e, t = 0; t < e.length; t++) s.add(e[t]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          h = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function m(t, e, n, i, r, o, s) {
          ((this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
            (this.attributeName = i),
            (this.attributeNamespace = r),
            (this.mustUseProperty = n),
            (this.propertyName = t),
            (this.type = e),
            (this.sanitizeURL = o),
            (this.removeEmptyString = s));
        }
        var g = {};
        ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (t) {
            g[t] = new m(t, 0, !1, t, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (t) {
            var e = t[0];
            g[e] = new m(e, 1, !1, t[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (t) {
              g[t] = new m(t, 2, !1, t.toLowerCase(), null, !1, !1);
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (t) {
            g[t] = new m(t, 2, !1, t, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (t) {
              g[t] = new m(t, 3, !1, t.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
            g[t] = new m(t, 3, !0, t, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (t) {
            g[t] = new m(t, 4, !1, t, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (t) {
            g[t] = new m(t, 6, !1, t, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (t) {
            g[t] = new m(t, 5, !1, t.toLowerCase(), null, !1, !1);
          }));
        var v = /[\-:]([a-z])/g;
        function y(t) {
          return t[1].toUpperCase();
        }
        function b(t, e, n, i) {
          var r = g.hasOwnProperty(e) ? g[e] : null;
          (null !== r
            ? 0 !== r.type
            : i ||
              !(2 < e.length) ||
              ('o' !== e[0] && 'O' !== e[0]) ||
              ('n' !== e[1] && 'N' !== e[1])) &&
            ((function (t, e, n, i) {
              if (
                null === e ||
                'undefined' === typeof e ||
                (function (t, e, n, i) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof e) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !i &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                            'aria-' !== t)
                      );
                    default:
                      return !1;
                  }
                })(t, e, n, i)
              )
                return !0;
              if (i) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !e;
                  case 4:
                    return !1 === e;
                  case 5:
                    return isNaN(e);
                  case 6:
                    return isNaN(e) || 1 > e;
                }
              return !1;
            })(e, n, r, i) && (n = null),
            i || null === r
              ? (function (t) {
                  return (
                    !!h.call(p, t) ||
                    (!h.call(f, t) &&
                      (d.test(t) ? (p[t] = !0) : ((f[t] = !0), !1)))
                  );
                })(e) &&
                (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
              : r.mustUseProperty
                ? (t[r.propertyName] = null === n ? 3 !== r.type && '' : n)
                : ((e = r.attributeName),
                  (i = r.attributeNamespace),
                  null === n
                    ? t.removeAttribute(e)
                    : ((n =
                        3 === (r = r.type) || (4 === r && !0 === n)
                          ? ''
                          : '' + n),
                      i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
        }
        ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (t) {
            var e = t.replace(v, y);
            g[e] = new m(e, 1, !1, t, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (t) {
              var e = t.replace(v, y);
              g[e] = new m(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
            var e = t.replace(v, y);
            g[e] = new m(
              e,
              1,
              !1,
              t,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (t) {
            g[t] = new m(t, 1, !1, t.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (t) {
            g[t] = new m(t, 1, !1, t.toLowerCase(), null, !0, !0);
          }));
        var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          _ = Symbol.for('react.portal'),
          S = Symbol.for('react.fragment'),
          k = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          P = Symbol.for('react.provider'),
          M = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          D = Symbol.for('react.suspense_list'),
          A = Symbol.for('react.memo'),
          O = Symbol.for('react.lazy');
        (Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode'));
        var F = Symbol.for('react.offscreen');
        (Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker'));
        var R = Symbol.iterator;
        function L(t) {
          return null === t || 'object' !== typeof t
            ? null
            : 'function' === typeof (t = (R && t[R]) || t['@@iterator'])
              ? t
              : null;
        }
        var N,
          j = Object.assign;
        function I(t) {
          if (void 0 === N)
            try {
              throw Error();
            } catch (n) {
              var e = n.stack.trim().match(/\n( *(at )?)/);
              N = (e && e[1]) || '';
            }
          return '\n' + N + t;
        }
        var z = !1;
        function V(t, e) {
          if (!t || z) return '';
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e)
              if (
                ((e = function () {
                  throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (u) {
                  var i = u;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (u) {
                  i = u;
                }
                t.call(e.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                i = u;
              }
              t();
            }
          } catch (u) {
            if (u && i && 'string' === typeof u.stack) {
              for (
                var r = u.stack.split('\n'),
                  o = i.stack.split('\n'),
                  s = r.length - 1,
                  a = o.length - 1;
                1 <= s && 0 <= a && r[s] !== o[a];

              )
                a--;
              for (; 1 <= s && 0 <= a; s--, a--)
                if (r[s] !== o[a]) {
                  if (1 !== s || 1 !== a)
                    do {
                      if ((s--, 0 > --a || r[s] !== o[a])) {
                        var l = '\n' + r[s].replace(' at new ', ' at ');
                        return (
                          t.displayName &&
                            l.includes('<anonymous>') &&
                            (l = l.replace('<anonymous>', t.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= a);
                  break;
                }
            }
          } finally {
            ((z = !1), (Error.prepareStackTrace = n));
          }
          return (t = t ? t.displayName || t.name : '') ? I(t) : '';
        }
        function B(t) {
          switch (t.tag) {
            case 5:
              return I(t.type);
            case 16:
              return I('Lazy');
            case 13:
              return I('Suspense');
            case 19:
              return I('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (t = V(t.type, !1));
            case 11:
              return (t = V(t.type.render, !1));
            case 1:
              return (t = V(t.type, !0));
            default:
              return '';
          }
        }
        function U(t) {
          if (null == t) return null;
          if ('function' === typeof t) return t.displayName || t.name || null;
          if ('string' === typeof t) return t;
          switch (t) {
            case S:
              return 'Fragment';
            case _:
              return 'Portal';
            case E:
              return 'Profiler';
            case k:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case D:
              return 'SuspenseList';
          }
          if ('object' === typeof t)
            switch (t.$$typeof) {
              case M:
                return (t.displayName || 'Context') + '.Consumer';
              case P:
                return (t._context.displayName || 'Context') + '.Provider';
              case C:
                var e = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      '' !== (t = e.displayName || e.name || '')
                        ? 'ForwardRef(' + t + ')'
                        : 'ForwardRef'),
                  t
                );
              case A:
                return null !== (e = t.displayName || null)
                  ? e
                  : U(t.type) || 'Memo';
              case O:
                ((e = t._payload), (t = t._init));
                try {
                  return U(t(e));
                } catch (n) {}
            }
          return null;
        }
        function W(t) {
          var e = t.type;
          switch (t.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (e.displayName || 'Context') + '.Consumer';
            case 10:
              return (e._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (t = (t = e.render).displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return e;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return U(e);
            case 8:
              return e === k ? 'StrictMode' : 'Mode';
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
              if ('function' === typeof e)
                return e.displayName || e.name || null;
              if ('string' === typeof e) return e;
          }
          return null;
        }
        function H(t) {
          switch (typeof t) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return t;
            default:
              return '';
          }
        }
        function $(t) {
          var e = t.type;
          return (
            (t = t.nodeName) &&
            'input' === t.toLowerCase() &&
            ('checkbox' === e || 'radio' === e)
          );
        }
        function Y(t) {
          t._valueTracker ||
            (t._valueTracker = (function (t) {
              var e = $(t) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                i = '' + t[e];
              if (
                !t.hasOwnProperty(e) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var r = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                      return r.call(this);
                    },
                    set: function (t) {
                      ((i = '' + t), o.call(this, t));
                    },
                  }),
                  Object.defineProperty(t, e, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return i;
                    },
                    setValue: function (t) {
                      i = '' + t;
                    },
                    stopTracking: function () {
                      ((t._valueTracker = null), delete t[e]);
                    },
                  }
                );
              }
            })(t));
        }
        function q(t) {
          if (!t) return !1;
          var e = t._valueTracker;
          if (!e) return !0;
          var n = e.getValue(),
            i = '';
          return (
            t && (i = $(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = i) !== n && (e.setValue(t), !0)
          );
        }
        function K(t) {
          if (
            'undefined' ===
            typeof (t =
              t || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return t.activeElement || t.body;
          } catch (e) {
            return t.body;
          }
        }
        function X(t, e) {
          var n = e.checked;
          return j({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked,
          });
        }
        function Q(t, e) {
          var n = null == e.defaultValue ? '' : e.defaultValue,
            i = null != e.checked ? e.checked : e.defaultChecked;
          ((n = H(null != e.value ? e.value : n)),
            (t._wrapperState = {
              initialChecked: i,
              initialValue: n,
              controlled:
                'checkbox' === e.type || 'radio' === e.type
                  ? null != e.checked
                  : null != e.value,
            }));
        }
        function G(t, e) {
          null != (e = e.checked) && b(t, 'checked', e, !1);
        }
        function J(t, e) {
          G(t, e);
          var n = H(e.value),
            i = e.type;
          if (null != n)
            'number' === i
              ? ((0 === n && '' === t.value) || t.value != n) &&
                (t.value = '' + n)
              : t.value !== '' + n && (t.value = '' + n);
          else if ('submit' === i || 'reset' === i)
            return void t.removeAttribute('value');
          (e.hasOwnProperty('value')
            ? tt(t, e.type, n)
            : e.hasOwnProperty('defaultValue') &&
              tt(t, e.type, H(e.defaultValue)),
            null == e.checked &&
              null != e.defaultChecked &&
              (t.defaultChecked = !!e.defaultChecked));
        }
        function Z(t, e, n) {
          if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
            var i = e.type;
            if (
              !(
                ('submit' !== i && 'reset' !== i) ||
                (void 0 !== e.value && null !== e.value)
              )
            )
              return;
            ((e = '' + t._wrapperState.initialValue),
              n || e === t.value || (t.value = e),
              (t.defaultValue = e));
          }
          ('' !== (n = t.name) && (t.name = ''),
            (t.defaultChecked = !!t._wrapperState.initialChecked),
            '' !== n && (t.name = n));
        }
        function tt(t, e, n) {
          ('number' === e && K(t.ownerDocument) === t) ||
            (null == n
              ? (t.defaultValue = '' + t._wrapperState.initialValue)
              : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
        }
        var et = Array.isArray;
        function nt(t, e, n, i) {
          if (((t = t.options), e)) {
            e = {};
            for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
            for (n = 0; n < t.length; n++)
              ((r = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== r && (t[n].selected = r),
                r && i && (t[n].defaultSelected = !0));
          } else {
            for (n = '' + H(n), e = null, r = 0; r < t.length; r++) {
              if (t[r].value === n)
                return (
                  (t[r].selected = !0),
                  void (i && (t[r].defaultSelected = !0))
                );
              null !== e || t[r].disabled || (e = t[r]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function it(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
          return j({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: '' + t._wrapperState.initialValue,
          });
        }
        function rt(t, e) {
          var n = e.value;
          if (null == n) {
            if (((n = e.children), (e = e.defaultValue), null != n)) {
              if (null != e) throw Error(o(92));
              if (et(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              e = n;
            }
            (null == e && (e = ''), (n = e));
          }
          t._wrapperState = { initialValue: H(n) };
        }
        function ot(t, e) {
          var n = H(e.value),
            i = H(e.defaultValue);
          (null != n &&
            ((n = '' + n) !== t.value && (t.value = n),
            null == e.defaultValue &&
              t.defaultValue !== n &&
              (t.defaultValue = n)),
            null != i && (t.defaultValue = '' + i));
        }
        function st(t) {
          var e = t.textContent;
          e === t._wrapperState.initialValue &&
            '' !== e &&
            null !== e &&
            (t.value = e);
        }
        function at(t) {
          switch (t) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function lt(t, e) {
          return null == t || 'http://www.w3.org/1999/xhtml' === t
            ? at(e)
            : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
              ? 'http://www.w3.org/1999/xhtml'
              : t;
        }
        var ut,
          ct,
          ht =
            ((ct = function (t, e) {
              if (
                'http://www.w3.org/2000/svg' !== t.namespaceURI ||
                'innerHTML' in t
              )
                t.innerHTML = e;
              else {
                for (
                  (ut = ut || document.createElement('div')).innerHTML =
                    '<svg>' + e.valueOf().toString() + '</svg>',
                    e = ut.firstChild;
                  t.firstChild;

                )
                  t.removeChild(t.firstChild);
                for (; e.firstChild; ) t.appendChild(e.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (t, e, n, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ct(t, e);
                  });
                }
              : ct);
        function dt(t, e) {
          if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = e);
          }
          t.textContent = e;
        }
        var ft = {
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
          pt = ['Webkit', 'ms', 'Moz', 'O'];
        function mt(t, e, n) {
          return null == e || 'boolean' === typeof e || '' === e
            ? ''
            : n ||
                'number' !== typeof e ||
                0 === e ||
                (ft.hasOwnProperty(t) && ft[t])
              ? ('' + e).trim()
              : e + 'px';
        }
        function gt(t, e) {
          for (var n in ((t = t.style), e))
            if (e.hasOwnProperty(n)) {
              var i = 0 === n.indexOf('--'),
                r = mt(n, e[n], i);
              ('float' === n && (n = 'cssFloat'),
                i ? t.setProperty(n, r) : (t[n] = r));
            }
        }
        Object.keys(ft).forEach(function (t) {
          pt.forEach(function (e) {
            ((e = e + t.charAt(0).toUpperCase() + t.substring(1)),
              (ft[e] = ft[t]));
          });
        });
        var vt = j(
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
        function yt(t, e) {
          if (e) {
            if (
              vt[t] &&
              (null != e.children || null != e.dangerouslySetInnerHTML)
            )
              throw Error(o(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(o(60));
              if (
                'object' !== typeof e.dangerouslySetInnerHTML ||
                !('__html' in e.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != e.style && 'object' !== typeof e.style)
              throw Error(o(62));
          }
        }
        function bt(t, e) {
          if (-1 === t.indexOf('-')) return 'string' === typeof e.is;
          switch (t) {
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
        var xt = null;
        function wt(t) {
          return (
            (t = t.target || t.srcElement || window).correspondingUseElement &&
              (t = t.correspondingUseElement),
            3 === t.nodeType ? t.parentNode : t
          );
        }
        var _t = null,
          St = null,
          kt = null;
        function Et(t) {
          if ((t = br(t))) {
            if ('function' !== typeof _t) throw Error(o(280));
            var e = t.stateNode;
            e && ((e = wr(e)), _t(t.stateNode, t.type, e));
          }
        }
        function Pt(t) {
          St ? (kt ? kt.push(t) : (kt = [t])) : (St = t);
        }
        function Mt() {
          if (St) {
            var t = St,
              e = kt;
            if (((kt = St = null), Et(t), e))
              for (t = 0; t < e.length; t++) Et(e[t]);
          }
        }
        function Ct(t, e) {
          return t(e);
        }
        function Tt() {}
        var Dt = !1;
        function At(t, e, n) {
          if (Dt) return t(e, n);
          Dt = !0;
          try {
            return Ct(t, e, n);
          } finally {
            ((Dt = !1), (null !== St || null !== kt) && (Tt(), Mt()));
          }
        }
        function Ot(t, e) {
          var n = t.stateNode;
          if (null === n) return null;
          var i = wr(n);
          if (null === i) return null;
          n = i[e];
          t: switch (e) {
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
              ((i = !i.disabled) ||
                (i = !(
                  'button' === (t = t.type) ||
                  'input' === t ||
                  'select' === t ||
                  'textarea' === t
                )),
                (t = !i));
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (n && 'function' !== typeof n) throw Error(o(231, e, typeof n));
          return n;
        }
        var Ft = !1;
        if (c)
          try {
            var Rt = {};
            (Object.defineProperty(Rt, 'passive', {
              get: function () {
                Ft = !0;
              },
            }),
              window.addEventListener('test', Rt, Rt),
              window.removeEventListener('test', Rt, Rt));
          } catch (ct) {
            Ft = !1;
          }
        function Lt(t, e, n, i, r, o, s, a, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Nt = !1,
          jt = null,
          It = !1,
          zt = null,
          Vt = {
            onError: function (t) {
              ((Nt = !0), (jt = t));
            },
          };
        function Bt(t, e, n, i, r, o, s, a, l) {
          ((Nt = !1), (jt = null), Lt.apply(Vt, arguments));
        }
        function Ut(t) {
          var e = t,
            n = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do {
              (0 !== (4098 & (e = t).flags) && (n = e.return), (t = e.return));
            } while (t);
          }
          return 3 === e.tag ? n : null;
        }
        function Wt(t) {
          if (13 === t.tag) {
            var e = t.memoizedState;
            if (
              (null === e &&
                null !== (t = t.alternate) &&
                (e = t.memoizedState),
              null !== e)
            )
              return e.dehydrated;
          }
          return null;
        }
        function Ht(t) {
          if (Ut(t) !== t) throw Error(o(188));
        }
        function $t(t) {
          return null !==
            (t = (function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Ut(t))) throw Error(o(188));
                return e !== t ? null : t;
              }
              for (var n = t, i = e; ; ) {
                var r = n.return;
                if (null === r) break;
                var s = r.alternate;
                if (null === s) {
                  if (null !== (i = r.return)) {
                    n = i;
                    continue;
                  }
                  break;
                }
                if (r.child === s.child) {
                  for (s = r.child; s; ) {
                    if (s === n) return (Ht(r), t);
                    if (s === i) return (Ht(r), e);
                    s = s.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== i.return) ((n = r), (i = s));
                else {
                  for (var a = !1, l = r.child; l; ) {
                    if (l === n) {
                      ((a = !0), (n = r), (i = s));
                      break;
                    }
                    if (l === i) {
                      ((a = !0), (i = r), (n = s));
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!a) {
                    for (l = s.child; l; ) {
                      if (l === n) {
                        ((a = !0), (n = s), (i = r));
                        break;
                      }
                      if (l === i) {
                        ((a = !0), (i = s), (n = r));
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!a) throw Error(o(189));
                  }
                }
                if (n.alternate !== i) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? t : e;
            })(t))
            ? Yt(t)
            : null;
        }
        function Yt(t) {
          if (5 === t.tag || 6 === t.tag) return t;
          for (t = t.child; null !== t; ) {
            var e = Yt(t);
            if (null !== e) return e;
            t = t.sibling;
          }
          return null;
        }
        var qt = r.unstable_scheduleCallback,
          Kt = r.unstable_cancelCallback,
          Xt = r.unstable_shouldYield,
          Qt = r.unstable_requestPaint,
          Gt = r.unstable_now,
          Jt = r.unstable_getCurrentPriorityLevel,
          Zt = r.unstable_ImmediatePriority,
          te = r.unstable_UserBlockingPriority,
          ee = r.unstable_NormalPriority,
          ne = r.unstable_LowPriority,
          ie = r.unstable_IdlePriority,
          re = null,
          oe = null;
        var se = Math.clz32
            ? Math.clz32
            : function (t) {
                return (
                  (t >>>= 0),
                  0 === t ? 32 : (31 - ((ae(t) / le) | 0)) | 0
                );
              },
          ae = Math.log,
          le = Math.LN2;
        var ue = 64,
          ce = 4194304;
        function he(t) {
          switch (t & -t) {
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
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function de(t, e) {
          var n = t.pendingLanes;
          if (0 === n) return 0;
          var i = 0,
            r = t.suspendedLanes,
            o = t.pingedLanes,
            s = 268435455 & n;
          if (0 !== s) {
            var a = s & ~r;
            0 !== a ? (i = he(a)) : 0 !== (o &= s) && (i = he(o));
          } else 0 !== (s = n & ~r) ? (i = he(s)) : 0 !== o && (i = he(o));
          if (0 === i) return 0;
          if (
            0 !== e &&
            e !== i &&
            0 === (e & r) &&
            ((r = i & -i) >= (o = e & -e) || (16 === r && 0 !== (4194240 & o)))
          )
            return e;
          if ((0 !== (4 & i) && (i |= 16 & n), 0 !== (e = t.entangledLanes)))
            for (t = t.entanglements, e &= i; 0 < e; )
              ((r = 1 << (n = 31 - se(e))), (i |= t[n]), (e &= ~r));
          return i;
        }
        function fe(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
              return e + 250;
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
              return e + 5e3;
            default:
              return -1;
          }
        }
        function pe(t) {
          return 0 !== (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
              ? 1073741824
              : 0;
        }
        function me() {
          var t = ue;
          return (0 === (4194240 & (ue <<= 1)) && (ue = 64), t);
        }
        function ge(t) {
          for (var e = [], n = 0; 31 > n; n++) e.push(t);
          return e;
        }
        function ve(t, e, n) {
          ((t.pendingLanes |= e),
            536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(e = 31 - se(e))] = n));
        }
        function ye(t, e) {
          var n = (t.entangledLanes |= e);
          for (t = t.entanglements; n; ) {
            var i = 31 - se(n),
              r = 1 << i;
            ((r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r));
          }
        }
        var be = 0;
        function xe(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 !== (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var we,
          _e,
          Se,
          ke,
          Ee,
          Pe = !1,
          Me = [],
          Ce = null,
          Te = null,
          De = null,
          Ae = new Map(),
          Oe = new Map(),
          Fe = [],
          Re =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function Le(t, e) {
          switch (t) {
            case 'focusin':
            case 'focusout':
              Ce = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Te = null;
              break;
            case 'mouseover':
            case 'mouseout':
              De = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Ae.delete(e.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Oe.delete(e.pointerId);
          }
        }
        function Ne(t, e, n, i, r, o) {
          return null === t || t.nativeEvent !== o
            ? ((t = {
                blockedOn: e,
                domEventName: n,
                eventSystemFlags: i,
                nativeEvent: o,
                targetContainers: [r],
              }),
              null !== e && null !== (e = br(e)) && _e(e),
              t)
            : ((t.eventSystemFlags |= i),
              (e = t.targetContainers),
              null !== r && -1 === e.indexOf(r) && e.push(r),
              t);
        }
        function je(t) {
          var e = yr(t.target);
          if (null !== e) {
            var n = Ut(e);
            if (null !== n)
              if (13 === (e = n.tag)) {
                if (null !== (e = Wt(n)))
                  return (
                    (t.blockedOn = e),
                    void Ee(t.priority, function () {
                      Se(n);
                    })
                  );
              } else if (
                3 === e &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (t.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          t.blockedOn = null;
        }
        function Ie(t) {
          if (null !== t.blockedOn) return !1;
          for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Xe(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== n)
              return (null !== (e = br(n)) && _e(e), (t.blockedOn = n), !1);
            var i = new (n = t.nativeEvent).constructor(n.type, n);
            ((xt = i), n.target.dispatchEvent(i), (xt = null), e.shift());
          }
          return !0;
        }
        function ze(t, e, n) {
          Ie(t) && n.delete(e);
        }
        function Ve() {
          ((Pe = !1),
            null !== Ce && Ie(Ce) && (Ce = null),
            null !== Te && Ie(Te) && (Te = null),
            null !== De && Ie(De) && (De = null),
            Ae.forEach(ze),
            Oe.forEach(ze));
        }
        function Be(t, e) {
          t.blockedOn === e &&
            ((t.blockedOn = null),
            Pe ||
              ((Pe = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Ve)));
        }
        function Ue(t) {
          function e(e) {
            return Be(e, t);
          }
          if (0 < Me.length) {
            Be(Me[0], t);
            for (var n = 1; n < Me.length; n++) {
              var i = Me[n];
              i.blockedOn === t && (i.blockedOn = null);
            }
          }
          for (
            null !== Ce && Be(Ce, t),
              null !== Te && Be(Te, t),
              null !== De && Be(De, t),
              Ae.forEach(e),
              Oe.forEach(e),
              n = 0;
            n < Fe.length;
            n++
          )
            (i = Fe[n]).blockedOn === t && (i.blockedOn = null);
          for (; 0 < Fe.length && null === (n = Fe[0]).blockedOn; )
            (je(n), null === n.blockedOn && Fe.shift());
        }
        var We = x.ReactCurrentBatchConfig,
          He = !0;
        function $e(t, e, n, i) {
          var r = be,
            o = We.transition;
          We.transition = null;
          try {
            ((be = 1), qe(t, e, n, i));
          } finally {
            ((be = r), (We.transition = o));
          }
        }
        function Ye(t, e, n, i) {
          var r = be,
            o = We.transition;
          We.transition = null;
          try {
            ((be = 4), qe(t, e, n, i));
          } finally {
            ((be = r), (We.transition = o));
          }
        }
        function qe(t, e, n, i) {
          if (He) {
            var r = Xe(t, e, n, i);
            if (null === r) (Hi(t, e, i, Ke, n), Le(t, i));
            else if (
              (function (t, e, n, i, r) {
                switch (e) {
                  case 'focusin':
                    return ((Ce = Ne(Ce, t, e, n, i, r)), !0);
                  case 'dragenter':
                    return ((Te = Ne(Te, t, e, n, i, r)), !0);
                  case 'mouseover':
                    return ((De = Ne(De, t, e, n, i, r)), !0);
                  case 'pointerover':
                    var o = r.pointerId;
                    return (
                      Ae.set(o, Ne(Ae.get(o) || null, t, e, n, i, r)),
                      !0
                    );
                  case 'gotpointercapture':
                    return (
                      (o = r.pointerId),
                      Oe.set(o, Ne(Oe.get(o) || null, t, e, n, i, r)),
                      !0
                    );
                }
                return !1;
              })(r, t, e, n, i)
            )
              i.stopPropagation();
            else if ((Le(t, i), 4 & e && -1 < Re.indexOf(t))) {
              for (; null !== r; ) {
                var o = br(r);
                if (
                  (null !== o && we(o),
                  null === (o = Xe(t, e, n, i)) && Hi(t, e, i, Ke, n),
                  o === r)
                )
                  break;
                r = o;
              }
              null !== r && i.stopPropagation();
            } else Hi(t, e, i, null, n);
          }
        }
        var Ke = null;
        function Xe(t, e, n, i) {
          if (((Ke = null), null !== (t = yr((t = wt(i))))))
            if (null === (e = Ut(t))) t = null;
            else if (13 === (n = e.tag)) {
              if (null !== (t = Wt(e))) return t;
              t = null;
            } else if (3 === n) {
              if (e.stateNode.current.memoizedState.isDehydrated)
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              t = null;
            } else e !== t && (t = null);
          return ((Ke = t), null);
        }
        function Qe(t) {
          switch (t) {
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
              switch (Jt()) {
                case Zt:
                  return 1;
                case te:
                  return 4;
                case ee:
                case ne:
                  return 16;
                case ie:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Ge = null,
          Je = null,
          Ze = null;
        function tn() {
          if (Ze) return Ze;
          var t,
            e,
            n = Je,
            i = n.length,
            r = 'value' in Ge ? Ge.value : Ge.textContent,
            o = r.length;
          for (t = 0; t < i && n[t] === r[t]; t++);
          var s = i - t;
          for (e = 1; e <= s && n[i - e] === r[o - e]; e++);
          return (Ze = r.slice(t, 1 < e ? 1 - e : void 0));
        }
        function en(t) {
          var e = t.keyCode;
          return (
            'charCode' in t
              ? 0 === (t = t.charCode) && 13 === e && (t = 13)
              : (t = e),
            10 === t && (t = 13),
            32 <= t || 13 === t ? t : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(t) {
          function e(e, n, i, r, o) {
            for (var s in ((this._reactName = e),
            (this._targetInst = i),
            (this.type = n),
            (this.nativeEvent = r),
            (this.target = o),
            (this.currentTarget = null),
            t))
              t.hasOwnProperty(s) && ((e = t[s]), (this[s] = e ? e(r) : r[s]));
            return (
              (this.isDefaultPrevented = (
                null != r.defaultPrevented
                  ? r.defaultPrevented
                  : !1 === r.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            j(e.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                  (t.preventDefault
                    ? t.preventDefault()
                    : 'unknown' !== typeof t.returnValue &&
                      (t.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                  (t.stopPropagation
                    ? t.stopPropagation()
                    : 'unknown' !== typeof t.cancelBubble &&
                      (t.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            e
          );
        }
        var sn,
          an,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          hn = j({}, un, { view: 0, detail: 0 }),
          dn = on(hn),
          fn = j({}, hn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
              return void 0 === t.relatedTarget
                ? t.fromElement === t.srcElement
                  ? t.toElement
                  : t.fromElement
                : t.relatedTarget;
            },
            movementX: function (t) {
              return 'movementX' in t
                ? t.movementX
                : (t !== ln &&
                    (ln && 'mousemove' === t.type
                      ? ((sn = t.screenX - ln.screenX),
                        (an = t.screenY - ln.screenY))
                      : (an = sn = 0),
                    (ln = t)),
                  sn);
            },
            movementY: function (t) {
              return 'movementY' in t ? t.movementY : an;
            },
          }),
          pn = on(fn),
          mn = on(j({}, fn, { dataTransfer: 0 })),
          gn = on(j({}, hn, { relatedTarget: 0 })),
          vn = on(
            j({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = j({}, un, {
            clipboardData: function (t) {
              return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          xn = on(j({}, un, { data: 0 })),
          wn = {
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
          _n = {
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
          Sn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function kn(t) {
          var e = this.nativeEvent;
          return e.getModifierState
            ? e.getModifierState(t)
            : !!(t = Sn[t]) && !!e[t];
        }
        function En() {
          return kn;
        }
        var Pn = j({}, hn, {
            key: function (t) {
              if (t.key) {
                var e = wn[t.key] || t.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === t.type
                ? 13 === (t = en(t))
                  ? 'Enter'
                  : String.fromCharCode(t)
                : 'keydown' === t.type || 'keyup' === t.type
                  ? _n[t.keyCode] || 'Unidentified'
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
            getModifierState: En,
            charCode: function (t) {
              return 'keypress' === t.type ? en(t) : 0;
            },
            keyCode: function (t) {
              return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return 'keypress' === t.type
                ? en(t)
                : 'keydown' === t.type || 'keyup' === t.type
                  ? t.keyCode
                  : 0;
            },
          }),
          Mn = on(Pn),
          Cn = on(
            j({}, fn, {
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
          ),
          Tn = on(
            j({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          Dn = on(
            j({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          An = j({}, fn, {
            deltaX: function (t) {
              return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                  ? -t.wheelDeltaX
                  : 0;
            },
            deltaY: function (t) {
              return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                  ? -t.wheelDeltaY
                  : 'wheelDelta' in t
                    ? -t.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = on(An),
          Fn = [9, 13, 27, 32],
          Rn = c && 'CompositionEvent' in window,
          Ln = null;
        c && 'documentMode' in document && (Ln = document.documentMode);
        var Nn = c && 'TextEvent' in window && !Ln,
          jn = c && (!Rn || (Ln && 8 < Ln && 11 >= Ln)),
          In = String.fromCharCode(32),
          zn = !1;
        function Vn(t, e) {
          switch (t) {
            case 'keyup':
              return -1 !== Fn.indexOf(e.keyCode);
            case 'keydown':
              return 229 !== e.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Bn(t) {
          return 'object' === typeof (t = t.detail) && 'data' in t
            ? t.data
            : null;
        }
        var Un = !1;
        var Wn = {
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
        function Hn(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return 'input' === e ? !!Wn[t.type] : 'textarea' === e;
        }
        function $n(t, e, n, i) {
          (Pt(i),
            0 < (e = Yi(e, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, i)),
              t.push({ event: n, listeners: e })));
        }
        var Yn = null,
          qn = null;
        function Kn(t) {
          Ii(t, 0);
        }
        function Xn(t) {
          if (q(xr(t))) return t;
        }
        function Qn(t, e) {
          if ('change' === t) return e;
        }
        var Gn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var ti = document.createElement('div');
              (ti.setAttribute('oninput', 'return;'),
                (Zn = 'function' === typeof ti.oninput));
            }
            Jn = Zn;
          } else Jn = !1;
          Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function ei() {
          Yn && (Yn.detachEvent('onpropertychange', ni), (qn = Yn = null));
        }
        function ni(t) {
          if ('value' === t.propertyName && Xn(qn)) {
            var e = [];
            ($n(e, qn, t, wt(t)), At(Kn, e));
          }
        }
        function ii(t, e, n) {
          'focusin' === t
            ? (ei(), (qn = n), (Yn = e).attachEvent('onpropertychange', ni))
            : 'focusout' === t && ei();
        }
        function ri(t) {
          if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
            return Xn(qn);
        }
        function oi(t, e) {
          if ('click' === t) return Xn(e);
        }
        function si(t, e) {
          if ('input' === t || 'change' === t) return Xn(e);
        }
        var ai =
          'function' === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              };
        function li(t, e) {
          if (ai(t, e)) return !0;
          if (
            'object' !== typeof t ||
            null === t ||
            'object' !== typeof e ||
            null === e
          )
            return !1;
          var n = Object.keys(t),
            i = Object.keys(e);
          if (n.length !== i.length) return !1;
          for (i = 0; i < n.length; i++) {
            var r = n[i];
            if (!h.call(e, r) || !ai(t[r], e[r])) return !1;
          }
          return !0;
        }
        function ui(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function ci(t, e) {
          var n,
            i = ui(t);
          for (t = 0; i; ) {
            if (3 === i.nodeType) {
              if (((n = t + i.textContent.length), t <= e && n >= e))
                return { node: i, offset: e - t };
              t = n;
            }
            t: {
              for (; i; ) {
                if (i.nextSibling) {
                  i = i.nextSibling;
                  break t;
                }
                i = i.parentNode;
              }
              i = void 0;
            }
            i = ui(i);
          }
        }
        function hi(t, e) {
          return (
            !(!t || !e) &&
            (t === e ||
              ((!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? hi(t, e.parentNode)
                  : 'contains' in t
                    ? t.contains(e)
                    : !!t.compareDocumentPosition &&
                      !!(16 & t.compareDocumentPosition(e)))))
          );
        }
        function di() {
          for (var t = window, e = K(); e instanceof t.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof e.contentWindow.location.href;
            } catch (i) {
              n = !1;
            }
            if (!n) break;
            e = K((t = e.contentWindow).document);
          }
          return e;
        }
        function fi(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return (
            e &&
            (('input' === e &&
              ('text' === t.type ||
                'search' === t.type ||
                'tel' === t.type ||
                'url' === t.type ||
                'password' === t.type)) ||
              'textarea' === e ||
              'true' === t.contentEditable)
          );
        }
        function pi(t) {
          var e = di(),
            n = t.focusedElem,
            i = t.selectionRange;
          if (
            e !== n &&
            n &&
            n.ownerDocument &&
            hi(n.ownerDocument.documentElement, n)
          ) {
            if (null !== i && fi(n))
              if (
                ((e = i.start),
                void 0 === (t = i.end) && (t = e),
                'selectionStart' in n)
              )
                ((n.selectionStart = e),
                  (n.selectionEnd = Math.min(t, n.value.length)));
              else if (
                (t =
                  ((e = n.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var r = n.textContent.length,
                  o = Math.min(i.start, r);
                ((i = void 0 === i.end ? o : Math.min(i.end, r)),
                  !t.extend && o > i && ((r = i), (i = o), (o = r)),
                  (r = ci(n, o)));
                var s = ci(n, i);
                r &&
                  s &&
                  (1 !== t.rangeCount ||
                    t.anchorNode !== r.node ||
                    t.anchorOffset !== r.offset ||
                    t.focusNode !== s.node ||
                    t.focusOffset !== s.offset) &&
                  ((e = e.createRange()).setStart(r.node, r.offset),
                  t.removeAllRanges(),
                  o > i
                    ? (t.addRange(e), t.extend(s.node, s.offset))
                    : (e.setEnd(s.node, s.offset), t.addRange(e)));
              }
            for (e = [], t = n; (t = t.parentNode); )
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < e.length;
              n++
            )
              (((t = e[n]).element.scrollLeft = t.left),
                (t.element.scrollTop = t.top));
          }
        }
        var mi = c && 'documentMode' in document && 11 >= document.documentMode,
          gi = null,
          vi = null,
          yi = null,
          bi = !1;
        function xi(t, e, n) {
          var i =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          bi ||
            null == gi ||
            gi !== K(i) ||
            ('selectionStart' in (i = gi) && fi(i)
              ? (i = { start: i.selectionStart, end: i.selectionEnd })
              : (i = {
                  anchorNode: (i = (
                    (i.ownerDocument && i.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: i.anchorOffset,
                  focusNode: i.focusNode,
                  focusOffset: i.focusOffset,
                }),
            (yi && li(yi, i)) ||
              ((yi = i),
              0 < (i = Yi(vi, 'onSelect')).length &&
                ((e = new cn('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: i }),
                (e.target = gi))));
        }
        function wi(t, e) {
          var n = {};
          return (
            (n[t.toLowerCase()] = e.toLowerCase()),
            (n['Webkit' + t] = 'webkit' + e),
            (n['Moz' + t] = 'moz' + e),
            n
          );
        }
        var _i = {
            animationend: wi('Animation', 'AnimationEnd'),
            animationiteration: wi('Animation', 'AnimationIteration'),
            animationstart: wi('Animation', 'AnimationStart'),
            transitionend: wi('Transition', 'TransitionEnd'),
          },
          Si = {},
          ki = {};
        function Ei(t) {
          if (Si[t]) return Si[t];
          if (!_i[t]) return t;
          var e,
            n = _i[t];
          for (e in n)
            if (n.hasOwnProperty(e) && e in ki) return (Si[t] = n[e]);
          return t;
        }
        c &&
          ((ki = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete _i.animationend.animation,
            delete _i.animationiteration.animation,
            delete _i.animationstart.animation),
          'TransitionEvent' in window || delete _i.transitionend.transition);
        var Pi = Ei('animationend'),
          Mi = Ei('animationiteration'),
          Ci = Ei('animationstart'),
          Ti = Ei('transitionend'),
          Di = new Map(),
          Ai =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Oi(t, e) {
          (Di.set(t, e), l(e, [t]));
        }
        for (var Fi = 0; Fi < Ai.length; Fi++) {
          var Ri = Ai[Fi];
          Oi(Ri.toLowerCase(), 'on' + (Ri[0].toUpperCase() + Ri.slice(1)));
        }
        (Oi(Pi, 'onAnimationEnd'),
          Oi(Mi, 'onAnimationIteration'),
          Oi(Ci, 'onAnimationStart'),
          Oi('dblclick', 'onDoubleClick'),
          Oi('focusin', 'onFocus'),
          Oi('focusout', 'onBlur'),
          Oi(Ti, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          l(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          l(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          l('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          l(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          l(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          l(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ));
        var Li =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Ni = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Li),
          );
        function ji(t, e, n) {
          var i = t.type || 'unknown-event';
          ((t.currentTarget = n),
            (function (t, e, n, i, r, s, a, l, u) {
              if ((Bt.apply(this, arguments), Nt)) {
                if (!Nt) throw Error(o(198));
                var c = jt;
                ((Nt = !1), (jt = null), It || ((It = !0), (zt = c)));
              }
            })(i, e, void 0, t),
            (t.currentTarget = null));
        }
        function Ii(t, e) {
          e = 0 !== (4 & e);
          for (var n = 0; n < t.length; n++) {
            var i = t[n],
              r = i.event;
            i = i.listeners;
            t: {
              var o = void 0;
              if (e)
                for (var s = i.length - 1; 0 <= s; s--) {
                  var a = i[s],
                    l = a.instance,
                    u = a.currentTarget;
                  if (((a = a.listener), l !== o && r.isPropagationStopped()))
                    break t;
                  (ji(r, a, u), (o = l));
                }
              else
                for (s = 0; s < i.length; s++) {
                  if (
                    ((l = (a = i[s]).instance),
                    (u = a.currentTarget),
                    (a = a.listener),
                    l !== o && r.isPropagationStopped())
                  )
                    break t;
                  (ji(r, a, u), (o = l));
                }
            }
          }
          if (It) throw ((t = zt), (It = !1), (zt = null), t);
        }
        function zi(t, e) {
          var n = e[mr];
          void 0 === n && (n = e[mr] = new Set());
          var i = t + '__bubble';
          n.has(i) || (Wi(e, t, 2, !1), n.add(i));
        }
        function Vi(t, e, n) {
          var i = 0;
          (e && (i |= 4), Wi(n, t, i, e));
        }
        var Bi = '_reactListening' + Math.random().toString(36).slice(2);
        function Ui(t) {
          if (!t[Bi]) {
            ((t[Bi] = !0),
              s.forEach(function (e) {
                'selectionchange' !== e &&
                  (Ni.has(e) || Vi(e, !1, t), Vi(e, !0, t));
              }));
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[Bi] || ((e[Bi] = !0), Vi('selectionchange', !1, e));
          }
        }
        function Wi(t, e, n, i) {
          switch (Qe(e)) {
            case 1:
              var r = $e;
              break;
            case 4:
              r = Ye;
              break;
            default:
              r = qe;
          }
          ((n = r.bind(null, e, n, t)),
            (r = void 0),
            !Ft ||
              ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) ||
              (r = !0),
            i
              ? void 0 !== r
                ? t.addEventListener(e, n, { capture: !0, passive: r })
                : t.addEventListener(e, n, !0)
              : void 0 !== r
                ? t.addEventListener(e, n, { passive: r })
                : t.addEventListener(e, n, !1));
        }
        function Hi(t, e, n, i, r) {
          var o = i;
          if (0 === (1 & e) && 0 === (2 & e) && null !== i)
            t: for (;;) {
              if (null === i) return;
              var s = i.tag;
              if (3 === s || 4 === s) {
                var a = i.stateNode.containerInfo;
                if (a === r || (8 === a.nodeType && a.parentNode === r)) break;
                if (4 === s)
                  for (s = i.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === r ||
                        (8 === l.nodeType && l.parentNode === r))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== a; ) {
                  if (null === (s = yr(a))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    i = o = s;
                    continue t;
                  }
                  a = a.parentNode;
                }
              }
              i = i.return;
            }
          At(function () {
            var i = o,
              r = wt(n),
              s = [];
            t: {
              var a = Di.get(t);
              if (void 0 !== a) {
                var l = cn,
                  u = t;
                switch (t) {
                  case 'keypress':
                    if (0 === en(n)) break t;
                  case 'keydown':
                  case 'keyup':
                    l = Mn;
                    break;
                  case 'focusin':
                    ((u = 'focus'), (l = gn));
                    break;
                  case 'focusout':
                    ((u = 'blur'), (l = gn));
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break t;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = pn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = Tn;
                    break;
                  case Pi:
                  case Mi:
                  case Ci:
                    l = vn;
                    break;
                  case Ti:
                    l = Dn;
                    break;
                  case 'scroll':
                    l = dn;
                    break;
                  case 'wheel':
                    l = On;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = Cn;
                }
                var c = 0 !== (4 & e),
                  h = !c && 'scroll' === t,
                  d = c ? (null !== a ? a + 'Capture' : null) : a;
                c = [];
                for (var f, p = i; null !== p; ) {
                  var m = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== d &&
                        null != (m = Ot(p, d)) &&
                        c.push($i(p, m, f))),
                    h)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((a = new l(a, u, null, n, r)),
                  s.push({ event: a, listeners: c }));
              }
            }
            if (0 === (7 & e)) {
              if (
                ((l = 'mouseout' === t || 'pointerout' === t),
                (!(a = 'mouseover' === t || 'pointerover' === t) ||
                  n === xt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yr(u) && !u[pr])) &&
                  (l || a) &&
                  ((a =
                    r.window === r
                      ? r
                      : (a = r.ownerDocument)
                        ? a.defaultView || a.parentWindow
                        : window),
                  l
                    ? ((l = i),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yr(u)
                          : null) &&
                        (u !== (h = Ut(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = i)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (p = 'mouse'),
                  ('pointerout' !== t && 'pointerover' !== t) ||
                    ((c = Cn),
                    (m = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (p = 'pointer')),
                  (h = null == l ? a : xr(l)),
                  (f = null == u ? a : xr(u)),
                  ((a = new c(m, p + 'leave', l, n, r)).target = h),
                  (a.relatedTarget = f),
                  (m = null),
                  yr(r) === i &&
                    (((c = new c(d, p + 'enter', u, n, r)).target = f),
                    (c.relatedTarget = h),
                    (m = c)),
                  (h = m),
                  l && u)
                )
                  t: {
                    for (d = u, p = 0, f = c = l; f; f = qi(f)) p++;
                    for (f = 0, m = d; m; m = qi(m)) f++;
                    for (; 0 < p - f; ) ((c = qi(c)), p--);
                    for (; 0 < f - p; ) ((d = qi(d)), f--);
                    for (; p--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break t;
                      ((c = qi(c)), (d = qi(d)));
                    }
                    c = null;
                  }
                else c = null;
                (null !== l && Ki(s, a, l, c, !1),
                  null !== u && null !== h && Ki(s, h, u, c, !0));
              }
              if (
                'select' ===
                  (l =
                    (a = i ? xr(i) : window).nodeName &&
                    a.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === a.type)
              )
                var g = Qn;
              else if (Hn(a))
                if (Gn) g = si;
                else {
                  g = ri;
                  var v = ii;
                }
              else
                (l = a.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === a.type || 'radio' === a.type) &&
                  (g = oi);
              switch (
                (g && (g = g(t, i))
                  ? $n(s, g, n, r)
                  : (v && v(t, a, i),
                    'focusout' === t &&
                      (v = a._wrapperState) &&
                      v.controlled &&
                      'number' === a.type &&
                      tt(a, 'number', a.value)),
                (v = i ? xr(i) : window),
                t)
              ) {
                case 'focusin':
                  (Hn(v) || 'true' === v.contentEditable) &&
                    ((gi = v), (vi = i), (yi = null));
                  break;
                case 'focusout':
                  yi = vi = gi = null;
                  break;
                case 'mousedown':
                  bi = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ((bi = !1), xi(s, n, r));
                  break;
                case 'selectionchange':
                  if (mi) break;
                case 'keydown':
                case 'keyup':
                  xi(s, n, r);
              }
              var y;
              if (Rn)
                t: {
                  switch (t) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break t;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break t;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break t;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Vn(t, n) && (b = 'onCompositionEnd')
                  : 'keydown' === t &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              (b &&
                (jn &&
                  'ko' !== n.locale &&
                  (Un || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Un && (y = tn())
                    : ((Je = 'value' in (Ge = r) ? Ge.value : Ge.textContent),
                      (Un = !0))),
                0 < (v = Yi(i, b)).length &&
                  ((b = new xn(b, t, null, n, r)),
                  s.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Nn
                  ? (function (t, e) {
                      switch (t) {
                        case 'compositionend':
                          return Bn(e);
                        case 'keypress':
                          return 32 !== e.which ? null : ((zn = !0), In);
                        case 'textInput':
                          return (t = e.data) === In && zn ? null : t;
                        default:
                          return null;
                      }
                    })(t, n)
                  : (function (t, e) {
                      if (Un)
                        return 'compositionend' === t || (!Rn && Vn(t, e))
                          ? ((t = tn()), (Ze = Je = Ge = null), (Un = !1), t)
                          : null;
                      switch (t) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(e.ctrlKey || e.altKey || e.metaKey) ||
                            (e.ctrlKey && e.altKey)
                          ) {
                            if (e.char && 1 < e.char.length) return e.char;
                            if (e.which) return String.fromCharCode(e.which);
                          }
                          return null;
                        case 'compositionend':
                          return jn && 'ko' !== e.locale ? null : e.data;
                      }
                    })(t, n)) &&
                  0 < (i = Yi(i, 'onBeforeInput')).length &&
                  ((r = new xn('onBeforeInput', 'beforeinput', null, n, r)),
                  s.push({ event: r, listeners: i }),
                  (r.data = y)));
            }
            Ii(s, e);
          });
        }
        function $i(t, e, n) {
          return { instance: t, listener: e, currentTarget: n };
        }
        function Yi(t, e) {
          for (var n = e + 'Capture', i = []; null !== t; ) {
            var r = t,
              o = r.stateNode;
            (5 === r.tag &&
              null !== o &&
              ((r = o),
              null != (o = Ot(t, n)) && i.unshift($i(t, o, r)),
              null != (o = Ot(t, e)) && i.push($i(t, o, r))),
              (t = t.return));
          }
          return i;
        }
        function qi(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Ki(t, e, n, i, r) {
          for (var o = e._reactName, s = []; null !== n && n !== i; ) {
            var a = n,
              l = a.alternate,
              u = a.stateNode;
            if (null !== l && l === i) break;
            (5 === a.tag &&
              null !== u &&
              ((a = u),
              r
                ? null != (l = Ot(n, o)) && s.unshift($i(n, l, a))
                : r || (null != (l = Ot(n, o)) && s.push($i(n, l, a)))),
              (n = n.return));
          }
          0 !== s.length && t.push({ event: e, listeners: s });
        }
        var Xi = /\r\n?/g,
          Qi = /\u0000|\uFFFD/g;
        function Gi(t) {
          return ('string' === typeof t ? t : '' + t)
            .replace(Xi, '\n')
            .replace(Qi, '');
        }
        function Ji(t, e, n) {
          if (((e = Gi(e)), Gi(t) !== e && n)) throw Error(o(425));
        }
        function Zi() {}
        var tr = null,
          er = null;
        function nr(t, e) {
          return (
            'textarea' === t ||
            'noscript' === t ||
            'string' === typeof e.children ||
            'number' === typeof e.children ||
            ('object' === typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html)
          );
        }
        var ir = 'function' === typeof setTimeout ? setTimeout : void 0,
          rr = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          or = 'function' === typeof Promise ? Promise : void 0,
          sr =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof or
                ? function (t) {
                    return or.resolve(null).then(t).catch(ar);
                  }
                : ir;
        function ar(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function lr(t, e) {
          var n = e,
            i = 0;
          do {
            var r = n.nextSibling;
            if ((t.removeChild(n), r && 8 === r.nodeType))
              if ('/$' === (n = r.data)) {
                if (0 === i) return (t.removeChild(r), void Ue(e));
                i--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || i++;
            n = r;
          } while (n);
          Ue(e);
        }
        function ur(t) {
          for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break;
            if (8 === e) {
              if ('$' === (e = t.data) || '$!' === e || '$?' === e) break;
              if ('/$' === e) return null;
            }
          }
          return t;
        }
        function cr(t) {
          t = t.previousSibling;
          for (var e = 0; t; ) {
            if (8 === t.nodeType) {
              var n = t.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === e) return t;
                e--;
              } else '/$' === n && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        var hr = Math.random().toString(36).slice(2),
          dr = '__reactFiber$' + hr,
          fr = '__reactProps$' + hr,
          pr = '__reactContainer$' + hr,
          mr = '__reactEvents$' + hr,
          gr = '__reactListeners$' + hr,
          vr = '__reactHandles$' + hr;
        function yr(t) {
          var e = t[dr];
          if (e) return e;
          for (var n = t.parentNode; n; ) {
            if ((e = n[pr] || n[dr])) {
              if (
                ((n = e.alternate),
                null !== e.child || (null !== n && null !== n.child))
              )
                for (t = cr(t); null !== t; ) {
                  if ((n = t[dr])) return n;
                  t = cr(t);
                }
              return e;
            }
            n = (t = n).parentNode;
          }
          return null;
        }
        function br(t) {
          return !(t = t[dr] || t[pr]) ||
            (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
            ? null
            : t;
        }
        function xr(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(o(33));
        }
        function wr(t) {
          return t[fr] || null;
        }
        var _r = [],
          Sr = -1;
        function kr(t) {
          return { current: t };
        }
        function Er(t) {
          0 > Sr || ((t.current = _r[Sr]), (_r[Sr] = null), Sr--);
        }
        function Pr(t, e) {
          (Sr++, (_r[Sr] = t.current), (t.current = e));
        }
        var Mr = {},
          Cr = kr(Mr),
          Tr = kr(!1),
          Dr = Mr;
        function Ar(t, e) {
          var n = t.type.contextTypes;
          if (!n) return Mr;
          var i = t.stateNode;
          if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
            return i.__reactInternalMemoizedMaskedChildContext;
          var r,
            o = {};
          for (r in n) o[r] = e[r];
          return (
            i &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                e),
              (t.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Or(t) {
          return null !== (t = t.childContextTypes) && void 0 !== t;
        }
        function Fr() {
          (Er(Tr), Er(Cr));
        }
        function Rr(t, e, n) {
          if (Cr.current !== Mr) throw Error(o(168));
          (Pr(Cr, e), Pr(Tr, n));
        }
        function Lr(t, e, n) {
          var i = t.stateNode;
          if (
            ((e = e.childContextTypes), 'function' !== typeof i.getChildContext)
          )
            return n;
          for (var r in (i = i.getChildContext()))
            if (!(r in e)) throw Error(o(108, W(t) || 'Unknown', r));
          return j({}, n, i);
        }
        function Nr(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              Mr),
            (Dr = Cr.current),
            Pr(Cr, t),
            Pr(Tr, Tr.current),
            !0
          );
        }
        function jr(t, e, n) {
          var i = t.stateNode;
          if (!i) throw Error(o(169));
          (n
            ? ((t = Lr(t, e, Dr)),
              (i.__reactInternalMemoizedMergedChildContext = t),
              Er(Tr),
              Er(Cr),
              Pr(Cr, t))
            : Er(Tr),
            Pr(Tr, n));
        }
        var Ir = null,
          zr = !1,
          Vr = !1;
        function Br(t) {
          null === Ir ? (Ir = [t]) : Ir.push(t);
        }
        function Ur() {
          if (!Vr && null !== Ir) {
            Vr = !0;
            var t = 0,
              e = be;
            try {
              var n = Ir;
              for (be = 1; t < n.length; t++) {
                var i = n[t];
                do {
                  i = i(!0);
                } while (null !== i);
              }
              ((Ir = null), (zr = !1));
            } catch (r) {
              throw (null !== Ir && (Ir = Ir.slice(t + 1)), qt(Zt, Ur), r);
            } finally {
              ((be = e), (Vr = !1));
            }
          }
          return null;
        }
        var Wr = [],
          Hr = 0,
          $r = null,
          Yr = 0,
          qr = [],
          Kr = 0,
          Xr = null,
          Qr = 1,
          Gr = '';
        function Jr(t, e) {
          ((Wr[Hr++] = Yr), (Wr[Hr++] = $r), ($r = t), (Yr = e));
        }
        function Zr(t, e, n) {
          ((qr[Kr++] = Qr), (qr[Kr++] = Gr), (qr[Kr++] = Xr), (Xr = t));
          var i = Qr;
          t = Gr;
          var r = 32 - se(i) - 1;
          ((i &= ~(1 << r)), (n += 1));
          var o = 32 - se(e) + r;
          if (30 < o) {
            var s = r - (r % 5);
            ((o = (i & ((1 << s) - 1)).toString(32)),
              (i >>= s),
              (r -= s),
              (Qr = (1 << (32 - se(e) + r)) | (n << r) | i),
              (Gr = o + t));
          } else ((Qr = (1 << o) | (n << r) | i), (Gr = t));
        }
        function to(t) {
          null !== t.return && (Jr(t, 1), Zr(t, 1, 0));
        }
        function eo(t) {
          for (; t === $r; )
            (($r = Wr[--Hr]),
              (Wr[Hr] = null),
              (Yr = Wr[--Hr]),
              (Wr[Hr] = null));
          for (; t === Xr; )
            ((Xr = qr[--Kr]),
              (qr[Kr] = null),
              (Gr = qr[--Kr]),
              (qr[Kr] = null),
              (Qr = qr[--Kr]),
              (qr[Kr] = null));
        }
        var no = null,
          io = null,
          ro = !1,
          oo = null;
        function so(t, e) {
          var n = Au(5, null, null, 0);
          ((n.elementType = 'DELETED'),
            (n.stateNode = e),
            (n.return = t),
            null === (e = t.deletions)
              ? ((t.deletions = [n]), (t.flags |= 16))
              : e.push(n));
        }
        function ao(t, e) {
          switch (t.tag) {
            case 5:
              var n = t.type;
              return (
                null !==
                  (e =
                    1 !== e.nodeType ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                      ? null
                      : e) &&
                ((t.stateNode = e), (no = t), (io = ur(e.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                ((t.stateNode = e), (no = t), (io = null), !0)
              );
            case 13:
              return (
                null !== (e = 8 !== e.nodeType ? null : e) &&
                ((n = null !== Xr ? { id: Qr, overflow: Gr } : null),
                (t.memoizedState = {
                  dehydrated: e,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Au(18, null, null, 0)).stateNode = e),
                (n.return = t),
                (t.child = n),
                (no = t),
                (io = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(t) {
          return 0 !== (1 & t.mode) && 0 === (128 & t.flags);
        }
        function uo(t) {
          if (ro) {
            var e = io;
            if (e) {
              var n = e;
              if (!ao(t, e)) {
                if (lo(t)) throw Error(o(418));
                e = ur(n.nextSibling);
                var i = no;
                e && ao(t, e)
                  ? so(i, n)
                  : ((t.flags = (-4097 & t.flags) | 2), (ro = !1), (no = t));
              }
            } else {
              if (lo(t)) throw Error(o(418));
              ((t.flags = (-4097 & t.flags) | 2), (ro = !1), (no = t));
            }
          }
        }
        function co(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          no = t;
        }
        function ho(t) {
          if (t !== no) return !1;
          if (!ro) return (co(t), (ro = !0), !1);
          var e;
          if (
            ((e = 3 !== t.tag) &&
              !(e = 5 !== t.tag) &&
              (e =
                'head' !== (e = t.type) &&
                'body' !== e &&
                !nr(t.type, t.memoizedProps)),
            e && (e = io))
          ) {
            if (lo(t)) throw (fo(), Error(o(418)));
            for (; e; ) (so(t, e), (e = ur(e.nextSibling)));
          }
          if ((co(t), 13 === t.tag)) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(o(317));
            t: {
              for (t = t.nextSibling, e = 0; t; ) {
                if (8 === t.nodeType) {
                  var n = t.data;
                  if ('/$' === n) {
                    if (0 === e) {
                      io = ur(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || e++;
                }
                t = t.nextSibling;
              }
              io = null;
            }
          } else io = no ? ur(t.stateNode.nextSibling) : null;
          return !0;
        }
        function fo() {
          for (var t = io; t; ) t = ur(t.nextSibling);
        }
        function po() {
          ((io = no = null), (ro = !1));
        }
        function mo(t) {
          null === oo ? (oo = [t]) : oo.push(t);
        }
        var go = x.ReactCurrentBatchConfig;
        function vo(t, e, n) {
          if (
            null !== (t = n.ref) &&
            'function' !== typeof t &&
            'object' !== typeof t
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var i = n.stateNode;
              }
              if (!i) throw Error(o(147, t));
              var r = i,
                s = '' + t;
              return null !== e &&
                null !== e.ref &&
                'function' === typeof e.ref &&
                e.ref._stringRef === s
                ? e.ref
                : ((e = function (t) {
                    var e = r.refs;
                    null === t ? delete e[s] : (e[s] = t);
                  }),
                  (e._stringRef = s),
                  e);
            }
            if ('string' !== typeof t) throw Error(o(284));
            if (!n._owner) throw Error(o(290, t));
          }
          return t;
        }
        function yo(t, e) {
          throw (
            (t = Object.prototype.toString.call(e)),
            Error(
              o(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t,
              ),
            )
          );
        }
        function bo(t) {
          return (0, t._init)(t._payload);
        }
        function xo(t) {
          function e(e, n) {
            if (t) {
              var i = e.deletions;
              null === i ? ((e.deletions = [n]), (e.flags |= 16)) : i.push(n);
            }
          }
          function n(n, i) {
            if (!t) return null;
            for (; null !== i; ) (e(n, i), (i = i.sibling));
            return null;
          }
          function i(t, e) {
            for (t = new Map(); null !== e; )
              (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling));
            return t;
          }
          function r(t, e) {
            return (((t = Fu(t, e)).index = 0), (t.sibling = null), t);
          }
          function s(e, n, i) {
            return (
              (e.index = i),
              t
                ? null !== (i = e.alternate)
                  ? (i = i.index) < n
                    ? ((e.flags |= 2), n)
                    : i
                  : ((e.flags |= 2), n)
                : ((e.flags |= 1048576), n)
            );
          }
          function a(e) {
            return (t && null === e.alternate && (e.flags |= 2), e);
          }
          function l(t, e, n, i) {
            return null === e || 6 !== e.tag
              ? (((e = ju(n, t.mode, i)).return = t), e)
              : (((e = r(e, n)).return = t), e);
          }
          function u(t, e, n, i) {
            var o = n.type;
            return o === S
              ? h(t, e, n.props.children, i, n.key)
              : null !== e &&
                  (e.elementType === o ||
                    ('object' === typeof o &&
                      null !== o &&
                      o.$$typeof === O &&
                      bo(o) === e.type))
                ? (((i = r(e, n.props)).ref = vo(t, e, n)), (i.return = t), i)
                : (((i = Ru(n.type, n.key, n.props, null, t.mode, i)).ref = vo(
                    t,
                    e,
                    n,
                  )),
                  (i.return = t),
                  i);
          }
          function c(t, e, n, i) {
            return null === e ||
              4 !== e.tag ||
              e.stateNode.containerInfo !== n.containerInfo ||
              e.stateNode.implementation !== n.implementation
              ? (((e = Iu(n, t.mode, i)).return = t), e)
              : (((e = r(e, n.children || [])).return = t), e);
          }
          function h(t, e, n, i, o) {
            return null === e || 7 !== e.tag
              ? (((e = Lu(n, t.mode, i, o)).return = t), e)
              : (((e = r(e, n)).return = t), e);
          }
          function d(t, e, n) {
            if (('string' === typeof e && '' !== e) || 'number' === typeof e)
              return (((e = ju('' + e, t.mode, n)).return = t), e);
            if ('object' === typeof e && null !== e) {
              switch (e.$$typeof) {
                case w:
                  return (
                    ((n = Ru(e.type, e.key, e.props, null, t.mode, n)).ref = vo(
                      t,
                      null,
                      e,
                    )),
                    (n.return = t),
                    n
                  );
                case _:
                  return (((e = Iu(e, t.mode, n)).return = t), e);
                case O:
                  return d(t, (0, e._init)(e._payload), n);
              }
              if (et(e) || L(e))
                return (((e = Lu(e, t.mode, n, null)).return = t), e);
              yo(t, e);
            }
            return null;
          }
          function f(t, e, n, i) {
            var r = null !== e ? e.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== r ? null : l(t, e, '' + n, i);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === r ? u(t, e, n, i) : null;
                case _:
                  return n.key === r ? c(t, e, n, i) : null;
                case O:
                  return f(t, e, (r = n._init)(n._payload), i);
              }
              if (et(n) || L(n)) return null !== r ? null : h(t, e, n, i, null);
              yo(t, n);
            }
            return null;
          }
          function p(t, e, n, i, r) {
            if (('string' === typeof i && '' !== i) || 'number' === typeof i)
              return l(e, (t = t.get(n) || null), '' + i, r);
            if ('object' === typeof i && null !== i) {
              switch (i.$$typeof) {
                case w:
                  return u(
                    e,
                    (t = t.get(null === i.key ? n : i.key) || null),
                    i,
                    r,
                  );
                case _:
                  return c(
                    e,
                    (t = t.get(null === i.key ? n : i.key) || null),
                    i,
                    r,
                  );
                case O:
                  return p(t, e, n, (0, i._init)(i._payload), r);
              }
              if (et(i) || L(i))
                return h(e, (t = t.get(n) || null), i, r, null);
              yo(e, i);
            }
            return null;
          }
          function m(r, o, a, l) {
            for (
              var u = null, c = null, h = o, m = (o = 0), g = null;
              null !== h && m < a.length;
              m++
            ) {
              h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
              var v = f(r, h, a[m], l);
              if (null === v) {
                null === h && (h = g);
                break;
              }
              (t && h && null === v.alternate && e(r, h),
                (o = s(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (h = g));
            }
            if (m === a.length) return (n(r, h), ro && Jr(r, m), u);
            if (null === h) {
              for (; m < a.length; m++)
                null !== (h = d(r, a[m], l)) &&
                  ((o = s(h, o, m)),
                  null === c ? (u = h) : (c.sibling = h),
                  (c = h));
              return (ro && Jr(r, m), u);
            }
            for (h = i(r, h); m < a.length; m++)
              null !== (g = p(h, r, m, a[m], l)) &&
                (t &&
                  null !== g.alternate &&
                  h.delete(null === g.key ? m : g.key),
                (o = s(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              t &&
                h.forEach(function (t) {
                  return e(r, t);
                }),
              ro && Jr(r, m),
              u
            );
          }
          function g(r, a, l, u) {
            var c = L(l);
            if ('function' !== typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var h = (c = null), m = a, g = (a = 0), v = null, y = l.next();
              null !== m && !y.done;
              g++, y = l.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = f(r, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              (t && m && null === b.alternate && e(r, m),
                (a = s(b, a, g)),
                null === h ? (c = b) : (h.sibling = b),
                (h = b),
                (m = v));
            }
            if (y.done) return (n(r, m), ro && Jr(r, g), c);
            if (null === m) {
              for (; !y.done; g++, y = l.next())
                null !== (y = d(r, y.value, u)) &&
                  ((a = s(y, a, g)),
                  null === h ? (c = y) : (h.sibling = y),
                  (h = y));
              return (ro && Jr(r, g), c);
            }
            for (m = i(r, m); !y.done; g++, y = l.next())
              null !== (y = p(m, r, g, y.value, u)) &&
                (t &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (a = s(y, a, g)),
                null === h ? (c = y) : (h.sibling = y),
                (h = y));
            return (
              t &&
                m.forEach(function (t) {
                  return e(r, t);
                }),
              ro && Jr(r, g),
              c
            );
          }
          return function t(i, o, s, l) {
            if (
              ('object' === typeof s &&
                null !== s &&
                s.type === S &&
                null === s.key &&
                (s = s.props.children),
              'object' === typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case w:
                  t: {
                    for (var u = s.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = s.type) === S) {
                          if (7 === c.tag) {
                            (n(i, c.sibling),
                              ((o = r(c, s.props.children)).return = i),
                              (i = o));
                            break t;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === O &&
                            bo(u) === c.type)
                        ) {
                          (n(i, c.sibling),
                            ((o = r(c, s.props)).ref = vo(i, c, s)),
                            (o.return = i),
                            (i = o));
                          break t;
                        }
                        n(i, c);
                        break;
                      }
                      (e(i, c), (c = c.sibling));
                    }
                    s.type === S
                      ? (((o = Lu(s.props.children, i.mode, l, s.key)).return =
                          i),
                        (i = o))
                      : (((l = Ru(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          i.mode,
                          l,
                        )).ref = vo(i, o, s)),
                        (l.return = i),
                        (i = l));
                  }
                  return a(i);
                case _:
                  t: {
                    for (c = s.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === s.containerInfo &&
                          o.stateNode.implementation === s.implementation
                        ) {
                          (n(i, o.sibling),
                            ((o = r(o, s.children || [])).return = i),
                            (i = o));
                          break t;
                        }
                        n(i, o);
                        break;
                      }
                      (e(i, o), (o = o.sibling));
                    }
                    (((o = Iu(s, i.mode, l)).return = i), (i = o));
                  }
                  return a(i);
                case O:
                  return t(i, o, (c = s._init)(s._payload), l);
              }
              if (et(s)) return m(i, o, s, l);
              if (L(s)) return g(i, o, s, l);
              yo(i, s);
            }
            return ('string' === typeof s && '' !== s) || 'number' === typeof s
              ? ((s = '' + s),
                null !== o && 6 === o.tag
                  ? (n(i, o.sibling), ((o = r(o, s)).return = i), (i = o))
                  : (n(i, o), ((o = ju(s, i.mode, l)).return = i), (i = o)),
                a(i))
              : n(i, o);
          };
        }
        var wo = xo(!0),
          _o = xo(!1),
          So = kr(null),
          ko = null,
          Eo = null,
          Po = null;
        function Mo() {
          Po = Eo = ko = null;
        }
        function Co(t) {
          var e = So.current;
          (Er(So), (t._currentValue = e));
        }
        function To(t, e, n) {
          for (; null !== t; ) {
            var i = t.alternate;
            if (
              ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), null !== i && (i.childLanes |= e))
                : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e),
              t === n)
            )
              break;
            t = t.return;
          }
        }
        function Do(t, e) {
          ((ko = t),
            (Po = Eo = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 !== (t.lanes & e) && (ba = !0), (t.firstContext = null)));
        }
        function Ao(t) {
          var e = t._currentValue;
          if (Po !== t)
            if (
              ((t = { context: t, memoizedValue: e, next: null }), null === Eo)
            ) {
              if (null === ko) throw Error(o(308));
              ((Eo = t), (ko.dependencies = { lanes: 0, firstContext: t }));
            } else Eo = Eo.next = t;
          return e;
        }
        var Oo = null;
        function Fo(t) {
          null === Oo ? (Oo = [t]) : Oo.push(t);
        }
        function Ro(t, e, n, i) {
          var r = e.interleaved;
          return (
            null === r
              ? ((n.next = n), Fo(e))
              : ((n.next = r.next), (r.next = n)),
            (e.interleaved = n),
            Lo(t, i)
          );
        }
        function Lo(t, e) {
          t.lanes |= e;
          var n = t.alternate;
          for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
            ((t.childLanes |= e),
              null !== (n = t.alternate) && (n.childLanes |= e),
              (n = t),
              (t = t.return));
          return 3 === n.tag ? n.stateNode : null;
        }
        var No = !1;
        function jo(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Io(t, e) {
          ((t = t.updateQueue),
            e.updateQueue === t &&
              (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              }));
        }
        function zo(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Vo(t, e, n) {
          var i = t.updateQueue;
          if (null === i) return null;
          if (((i = i.shared), 0 !== (2 & Cl))) {
            var r = i.pending;
            return (
              null === r ? (e.next = e) : ((e.next = r.next), (r.next = e)),
              (i.pending = e),
              Lo(t, n)
            );
          }
          return (
            null === (r = i.interleaved)
              ? ((e.next = e), Fo(i))
              : ((e.next = r.next), (r.next = e)),
            (i.interleaved = e),
            Lo(t, n)
          );
        }
        function Bo(t, e, n) {
          if (
            null !== (e = e.updateQueue) &&
            ((e = e.shared), 0 !== (4194240 & n))
          ) {
            var i = e.lanes;
            ((n |= i &= t.pendingLanes), (e.lanes = n), ye(t, n));
          }
        }
        function Uo(t, e) {
          var n = t.updateQueue,
            i = t.alternate;
          if (null !== i && n === (i = i.updateQueue)) {
            var r = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                (null === o ? (r = o = s) : (o = o.next = s), (n = n.next));
              } while (null !== n);
              null === o ? (r = o = e) : (o = o.next = e);
            } else r = o = e;
            return (
              (n = {
                baseState: i.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: o,
                shared: i.shared,
                effects: i.effects,
              }),
              void (t.updateQueue = n)
            );
          }
          (null === (t = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = e)
            : (t.next = e),
            (n.lastBaseUpdate = e));
        }
        function Wo(t, e, n, i) {
          var r = t.updateQueue;
          No = !1;
          var o = r.firstBaseUpdate,
            s = r.lastBaseUpdate,
            a = r.shared.pending;
          if (null !== a) {
            r.shared.pending = null;
            var l = a,
              u = l.next;
            ((l.next = null), null === s ? (o = u) : (s.next = u), (s = l));
            var c = t.alternate;
            null !== c &&
              (a = (c = c.updateQueue).lastBaseUpdate) !== s &&
              (null === a ? (c.firstBaseUpdate = u) : (a.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== o) {
            var h = r.baseState;
            for (s = 0, c = u = l = null, a = o; ; ) {
              var d = a.lane,
                f = a.eventTime;
              if ((i & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                t: {
                  var p = t,
                    m = a;
                  switch (((d = e), (f = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (p = m.payload)) {
                        h = p.call(f, h, d);
                        break t;
                      }
                      h = p;
                      break t;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (p = m.payload)
                              ? p.call(f, h, d)
                              : p) ||
                        void 0 === d
                      )
                        break t;
                      h = j({}, h, d);
                      break t;
                    case 2:
                      No = !0;
                  }
                }
                null !== a.callback &&
                  0 !== a.lane &&
                  ((t.flags |= 64),
                  null === (d = r.effects) ? (r.effects = [a]) : d.push(a));
              } else
                ((f = {
                  eventTime: f,
                  lane: d,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (l = h)) : (c = c.next = f),
                  (s |= d));
              if (null === (a = a.next)) {
                if (null === (a = r.shared.pending)) break;
                ((a = (d = a).next),
                  (d.next = null),
                  (r.lastBaseUpdate = d),
                  (r.shared.pending = null));
              }
            }
            if (
              (null === c && (l = h),
              (r.baseState = l),
              (r.firstBaseUpdate = u),
              (r.lastBaseUpdate = c),
              null !== (e = r.shared.interleaved))
            ) {
              r = e;
              do {
                ((s |= r.lane), (r = r.next));
              } while (r !== e);
            } else null === o && (r.shared.lanes = 0);
            ((Nl |= s), (t.lanes = s), (t.memoizedState = h));
          }
        }
        function Ho(t, e, n) {
          if (((t = e.effects), (e.effects = null), null !== t))
            for (e = 0; e < t.length; e++) {
              var i = t[e],
                r = i.callback;
              if (null !== r) {
                if (((i.callback = null), (i = n), 'function' !== typeof r))
                  throw Error(o(191, r));
                r.call(i);
              }
            }
        }
        var $o = {},
          Yo = kr($o),
          qo = kr($o),
          Ko = kr($o);
        function Xo(t) {
          if (t === $o) throw Error(o(174));
          return t;
        }
        function Qo(t, e) {
          switch ((Pr(Ko, e), Pr(qo, t), Pr(Yo, $o), (t = e.nodeType))) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : lt(null, '');
              break;
            default:
              e = lt(
                (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
                (t = t.tagName),
              );
          }
          (Er(Yo), Pr(Yo, e));
        }
        function Go() {
          (Er(Yo), Er(qo), Er(Ko));
        }
        function Jo(t) {
          Xo(Ko.current);
          var e = Xo(Yo.current),
            n = lt(e, t.type);
          e !== n && (Pr(qo, t), Pr(Yo, n));
        }
        function Zo(t) {
          qo.current === t && (Er(Yo), Er(qo));
        }
        var ts = kr(0);
        function es(t) {
          for (var e = t; null !== e; ) {
            if (13 === e.tag) {
              var n = e.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return e;
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
              if (0 !== (128 & e.flags)) return e;
            } else if (null !== e.child) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
          return null;
        }
        var ns = [];
        function is() {
          for (var t = 0; t < ns.length; t++)
            ns[t]._workInProgressVersionPrimary = null;
          ns.length = 0;
        }
        var rs = x.ReactCurrentDispatcher,
          os = x.ReactCurrentBatchConfig,
          ss = 0,
          as = null,
          ls = null,
          us = null,
          cs = !1,
          hs = !1,
          ds = 0,
          fs = 0;
        function ps() {
          throw Error(o(321));
        }
        function ms(t, e) {
          if (null === e) return !1;
          for (var n = 0; n < e.length && n < t.length; n++)
            if (!ai(t[n], e[n])) return !1;
          return !0;
        }
        function gs(t, e, n, i, r, s) {
          if (
            ((ss = s),
            (as = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (rs.current = null === t || null === t.memoizedState ? Zs : ta),
            (t = n(i, r)),
            hs)
          ) {
            s = 0;
            do {
              if (((hs = !1), (ds = 0), 25 <= s)) throw Error(o(301));
              ((s += 1),
                (us = ls = null),
                (e.updateQueue = null),
                (rs.current = ea),
                (t = n(i, r)));
            } while (hs);
          }
          if (
            ((rs.current = Js),
            (e = null !== ls && null !== ls.next),
            (ss = 0),
            (us = ls = as = null),
            (cs = !1),
            e)
          )
            throw Error(o(300));
          return t;
        }
        function vs() {
          var t = 0 !== ds;
          return ((ds = 0), t);
        }
        function ys() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === us ? (as.memoizedState = us = t) : (us = us.next = t),
            us
          );
        }
        function bs() {
          if (null === ls) {
            var t = as.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = ls.next;
          var e = null === us ? as.memoizedState : us.next;
          if (null !== e) ((us = e), (ls = t));
          else {
            if (null === t) throw Error(o(310));
            ((t = {
              memoizedState: (ls = t).memoizedState,
              baseState: ls.baseState,
              baseQueue: ls.baseQueue,
              queue: ls.queue,
              next: null,
            }),
              null === us ? (as.memoizedState = us = t) : (us = us.next = t));
          }
          return us;
        }
        function xs(t, e) {
          return 'function' === typeof e ? e(t) : e;
        }
        function ws(t) {
          var e = bs(),
            n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var i = ls,
            r = i.baseQueue,
            s = n.pending;
          if (null !== s) {
            if (null !== r) {
              var a = r.next;
              ((r.next = s.next), (s.next = a));
            }
            ((i.baseQueue = r = s), (n.pending = null));
          }
          if (null !== r) {
            ((s = r.next), (i = i.baseState));
            var l = (a = null),
              u = null,
              c = s;
            do {
              var h = c.lane;
              if ((ss & h) === h)
                (null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (i = c.hasEagerState ? c.eagerState : t(i, c.action)));
              else {
                var d = {
                  lane: h,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                (null === u ? ((l = u = d), (a = i)) : (u = u.next = d),
                  (as.lanes |= h),
                  (Nl |= h));
              }
              c = c.next;
            } while (null !== c && c !== s);
            (null === u ? (a = i) : (u.next = l),
              ai(i, e.memoizedState) || (ba = !0),
              (e.memoizedState = i),
              (e.baseState = a),
              (e.baseQueue = u),
              (n.lastRenderedState = i));
          }
          if (null !== (t = n.interleaved)) {
            r = t;
            do {
              ((s = r.lane), (as.lanes |= s), (Nl |= s), (r = r.next));
            } while (r !== t);
          } else null === r && (n.lanes = 0);
          return [e.memoizedState, n.dispatch];
        }
        function _s(t) {
          var e = bs(),
            n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var i = n.dispatch,
            r = n.pending,
            s = e.memoizedState;
          if (null !== r) {
            n.pending = null;
            var a = (r = r.next);
            do {
              ((s = t(s, a.action)), (a = a.next));
            } while (a !== r);
            (ai(s, e.memoizedState) || (ba = !0),
              (e.memoizedState = s),
              null === e.baseQueue && (e.baseState = s),
              (n.lastRenderedState = s));
          }
          return [s, i];
        }
        function Ss() {}
        function ks(t, e) {
          var n = as,
            i = bs(),
            r = e(),
            s = !ai(i.memoizedState, r);
          if (
            (s && ((i.memoizedState = r), (ba = !0)),
            (i = i.queue),
            Ns(Ms.bind(null, n, i, t), [t]),
            i.getSnapshot !== e ||
              s ||
              (null !== us && 1 & us.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              As(9, Ps.bind(null, n, i, r, e), void 0, null),
              null === Tl)
            )
              throw Error(o(349));
            0 !== (30 & ss) || Es(n, e, r);
          }
          return r;
        }
        function Es(t, e, n) {
          ((t.flags |= 16384),
            (t = { getSnapshot: e, value: n }),
            null === (e = as.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (as.updateQueue = e),
                (e.stores = [t]))
              : null === (n = e.stores)
                ? (e.stores = [t])
                : n.push(t));
        }
        function Ps(t, e, n, i) {
          ((e.value = n), (e.getSnapshot = i), Cs(e) && Ts(t));
        }
        function Ms(t, e, n) {
          return n(function () {
            Cs(e) && Ts(t);
          });
        }
        function Cs(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !ai(t, n);
          } catch (i) {
            return !0;
          }
        }
        function Ts(t) {
          var e = Lo(t, 1);
          null !== e && nu(e, t, 1, -1);
        }
        function Ds(t) {
          var e = ys();
          return (
            'function' === typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xs,
              lastRenderedState: t,
            }),
            (e.queue = t),
            (t = t.dispatch = Ks.bind(null, as, t)),
            [e.memoizedState, t]
          );
        }
        function As(t, e, n, i) {
          return (
            (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
            null === (e = as.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (as.updateQueue = e),
                (e.lastEffect = t.next = t))
              : null === (n = e.lastEffect)
                ? (e.lastEffect = t.next = t)
                : ((i = n.next),
                  (n.next = t),
                  (t.next = i),
                  (e.lastEffect = t)),
            t
          );
        }
        function Os() {
          return bs().memoizedState;
        }
        function Fs(t, e, n, i) {
          var r = ys();
          ((as.flags |= t),
            (r.memoizedState = As(1 | e, n, void 0, void 0 === i ? null : i)));
        }
        function Rs(t, e, n, i) {
          var r = bs();
          i = void 0 === i ? null : i;
          var o = void 0;
          if (null !== ls) {
            var s = ls.memoizedState;
            if (((o = s.destroy), null !== i && ms(i, s.deps)))
              return void (r.memoizedState = As(e, n, o, i));
          }
          ((as.flags |= t), (r.memoizedState = As(1 | e, n, o, i)));
        }
        function Ls(t, e) {
          return Fs(8390656, 8, t, e);
        }
        function Ns(t, e) {
          return Rs(2048, 8, t, e);
        }
        function js(t, e) {
          return Rs(4, 2, t, e);
        }
        function Is(t, e) {
          return Rs(4, 4, t, e);
        }
        function zs(t, e) {
          return 'function' === typeof e
            ? ((t = t()),
              e(t),
              function () {
                e(null);
              })
            : null !== e && void 0 !== e
              ? ((t = t()),
                (e.current = t),
                function () {
                  e.current = null;
                })
              : void 0;
        }
        function Vs(t, e, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([t]) : null),
            Rs(4, 4, zs.bind(null, e, t), n)
          );
        }
        function Bs() {}
        function Us(t, e) {
          var n = bs();
          e = void 0 === e ? null : e;
          var i = n.memoizedState;
          return null !== i && null !== e && ms(e, i[1])
            ? i[0]
            : ((n.memoizedState = [t, e]), t);
        }
        function Ws(t, e) {
          var n = bs();
          e = void 0 === e ? null : e;
          var i = n.memoizedState;
          return null !== i && null !== e && ms(e, i[1])
            ? i[0]
            : ((t = t()), (n.memoizedState = [t, e]), t);
        }
        function Hs(t, e, n) {
          return 0 === (21 & ss)
            ? (t.baseState && ((t.baseState = !1), (ba = !0)),
              (t.memoizedState = n))
            : (ai(n, e) ||
                ((n = me()), (as.lanes |= n), (Nl |= n), (t.baseState = !0)),
              e);
        }
        function $s(t, e) {
          var n = be;
          ((be = 0 !== n && 4 > n ? n : 4), t(!0));
          var i = os.transition;
          os.transition = {};
          try {
            (t(!1), e());
          } finally {
            ((be = n), (os.transition = i));
          }
        }
        function Ys() {
          return bs().memoizedState;
        }
        function qs(t, e, n) {
          var i = eu(t);
          if (
            ((n = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Xs(t))
          )
            Qs(e, n);
          else if (null !== (n = Ro(t, e, n, i))) {
            (nu(n, t, i, tu()), Gs(n, e, i));
          }
        }
        function Ks(t, e, n) {
          var i = eu(t),
            r = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Xs(t)) Qs(e, r);
          else {
            var o = t.alternate;
            if (
              0 === t.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = e.lastRenderedReducer)
            )
              try {
                var s = e.lastRenderedState,
                  a = o(s, n);
                if (((r.hasEagerState = !0), (r.eagerState = a), ai(a, s))) {
                  var l = e.interleaved;
                  return (
                    null === l
                      ? ((r.next = r), Fo(e))
                      : ((r.next = l.next), (l.next = r)),
                    void (e.interleaved = r)
                  );
                }
              } catch (u) {}
            null !== (n = Ro(t, e, r, i)) &&
              (nu(n, t, i, (r = tu())), Gs(n, e, i));
          }
        }
        function Xs(t) {
          var e = t.alternate;
          return t === as || (null !== e && e === as);
        }
        function Qs(t, e) {
          hs = cs = !0;
          var n = t.pending;
          (null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
            (t.pending = e));
        }
        function Gs(t, e, n) {
          if (0 !== (4194240 & n)) {
            var i = e.lanes;
            ((n |= i &= t.pendingLanes), (e.lanes = n), ye(t, n));
          }
        }
        var Js = {
            readContext: Ao,
            useCallback: ps,
            useContext: ps,
            useEffect: ps,
            useImperativeHandle: ps,
            useInsertionEffect: ps,
            useLayoutEffect: ps,
            useMemo: ps,
            useReducer: ps,
            useRef: ps,
            useState: ps,
            useDebugValue: ps,
            useDeferredValue: ps,
            useTransition: ps,
            useMutableSource: ps,
            useSyncExternalStore: ps,
            useId: ps,
            unstable_isNewReconciler: !1,
          },
          Zs = {
            readContext: Ao,
            useCallback: function (t, e) {
              return ((ys().memoizedState = [t, void 0 === e ? null : e]), t);
            },
            useContext: Ao,
            useEffect: Ls,
            useImperativeHandle: function (t, e, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([t]) : null),
                Fs(4194308, 4, zs.bind(null, e, t), n)
              );
            },
            useLayoutEffect: function (t, e) {
              return Fs(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return Fs(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var n = ys();
              return (
                (e = void 0 === e ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
              );
            },
            useReducer: function (t, e, n) {
              var i = ys();
              return (
                (e = void 0 !== n ? n(e) : e),
                (i.memoizedState = i.baseState = e),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                }),
                (i.queue = t),
                (t = t.dispatch = qs.bind(null, as, t)),
                [i.memoizedState, t]
              );
            },
            useRef: function (t) {
              return ((t = { current: t }), (ys().memoizedState = t));
            },
            useState: Ds,
            useDebugValue: Bs,
            useDeferredValue: function (t) {
              return (ys().memoizedState = t);
            },
            useTransition: function () {
              var t = Ds(!1),
                e = t[0];
              return (
                (t = $s.bind(null, t[1])),
                (ys().memoizedState = t),
                [e, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, n) {
              var i = as,
                r = ys();
              if (ro) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = e()), null === Tl)) throw Error(o(349));
                0 !== (30 & ss) || Es(i, e, n);
              }
              r.memoizedState = n;
              var s = { value: n, getSnapshot: e };
              return (
                (r.queue = s),
                Ls(Ms.bind(null, i, s, t), [t]),
                (i.flags |= 2048),
                As(9, Ps.bind(null, i, s, n, e), void 0, null),
                n
              );
            },
            useId: function () {
              var t = ys(),
                e = Tl.identifierPrefix;
              if (ro) {
                var n = Gr;
                ((e =
                  ':' +
                  e +
                  'R' +
                  (n = (Qr & ~(1 << (32 - se(Qr) - 1))).toString(32) + n)),
                  0 < (n = ds++) && (e += 'H' + n.toString(32)),
                  (e += ':'));
              } else e = ':' + e + 'r' + (n = fs++).toString(32) + ':';
              return (t.memoizedState = e);
            },
            unstable_isNewReconciler: !1,
          },
          ta = {
            readContext: Ao,
            useCallback: Us,
            useContext: Ao,
            useEffect: Ns,
            useImperativeHandle: Vs,
            useInsertionEffect: js,
            useLayoutEffect: Is,
            useMemo: Ws,
            useReducer: ws,
            useRef: Os,
            useState: function () {
              return ws(xs);
            },
            useDebugValue: Bs,
            useDeferredValue: function (t) {
              return Hs(bs(), ls.memoizedState, t);
            },
            useTransition: function () {
              return [ws(xs)[0], bs().memoizedState];
            },
            useMutableSource: Ss,
            useSyncExternalStore: ks,
            useId: Ys,
            unstable_isNewReconciler: !1,
          },
          ea = {
            readContext: Ao,
            useCallback: Us,
            useContext: Ao,
            useEffect: Ns,
            useImperativeHandle: Vs,
            useInsertionEffect: js,
            useLayoutEffect: Is,
            useMemo: Ws,
            useReducer: _s,
            useRef: Os,
            useState: function () {
              return _s(xs);
            },
            useDebugValue: Bs,
            useDeferredValue: function (t) {
              var e = bs();
              return null === ls
                ? (e.memoizedState = t)
                : Hs(e, ls.memoizedState, t);
            },
            useTransition: function () {
              return [_s(xs)[0], bs().memoizedState];
            },
            useMutableSource: Ss,
            useSyncExternalStore: ks,
            useId: Ys,
            unstable_isNewReconciler: !1,
          };
        function na(t, e) {
          if (t && t.defaultProps) {
            for (var n in ((e = j({}, e)), (t = t.defaultProps)))
              void 0 === e[n] && (e[n] = t[n]);
            return e;
          }
          return e;
        }
        function ia(t, e, n, i) {
          ((n =
            null === (n = n(i, (e = t.memoizedState))) || void 0 === n
              ? e
              : j({}, e, n)),
            (t.memoizedState = n),
            0 === t.lanes && (t.updateQueue.baseState = n));
        }
        var ra = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Ut(t) === t;
          },
          enqueueSetState: function (t, e, n) {
            t = t._reactInternals;
            var i = tu(),
              r = eu(t),
              o = zo(i, r);
            ((o.payload = e),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (e = Vo(t, o, r)) && (nu(e, t, r, i), Bo(e, t, r)));
          },
          enqueueReplaceState: function (t, e, n) {
            t = t._reactInternals;
            var i = tu(),
              r = eu(t),
              o = zo(i, r);
            ((o.tag = 1),
              (o.payload = e),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (e = Vo(t, o, r)) && (nu(e, t, r, i), Bo(e, t, r)));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var n = tu(),
              i = eu(t),
              r = zo(n, i);
            ((r.tag = 2),
              void 0 !== e && null !== e && (r.callback = e),
              null !== (e = Vo(t, r, i)) && (nu(e, t, i, n), Bo(e, t, i)));
          },
        };
        function oa(t, e, n, i, r, o, s) {
          return 'function' === typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(i, o, s)
            : !e.prototype ||
                !e.prototype.isPureReactComponent ||
                !li(n, i) ||
                !li(r, o);
        }
        function sa(t, e, n) {
          var i = !1,
            r = Mr,
            o = e.contextType;
          return (
            'object' === typeof o && null !== o
              ? (o = Ao(o))
              : ((r = Or(e) ? Dr : Cr.current),
                (o = (i = null !== (i = e.contextTypes) && void 0 !== i)
                  ? Ar(t, r)
                  : Mr)),
            (e = new e(n, o)),
            (t.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            (e.updater = ra),
            (t.stateNode = e),
            (e._reactInternals = t),
            i &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                r),
              (t.__reactInternalMemoizedMaskedChildContext = o)),
            e
          );
        }
        function aa(t, e, n, i) {
          ((t = e.state),
            'function' === typeof e.componentWillReceiveProps &&
              e.componentWillReceiveProps(n, i),
            'function' === typeof e.UNSAFE_componentWillReceiveProps &&
              e.UNSAFE_componentWillReceiveProps(n, i),
            e.state !== t && ra.enqueueReplaceState(e, e.state, null));
        }
        function la(t, e, n, i) {
          var r = t.stateNode;
          ((r.props = n), (r.state = t.memoizedState), (r.refs = {}), jo(t));
          var o = e.contextType;
          ('object' === typeof o && null !== o
            ? (r.context = Ao(o))
            : ((o = Or(e) ? Dr : Cr.current), (r.context = Ar(t, o))),
            (r.state = t.memoizedState),
            'function' === typeof (o = e.getDerivedStateFromProps) &&
              (ia(t, e, o, n), (r.state = t.memoizedState)),
            'function' === typeof e.getDerivedStateFromProps ||
              'function' === typeof r.getSnapshotBeforeUpdate ||
              ('function' !== typeof r.UNSAFE_componentWillMount &&
                'function' !== typeof r.componentWillMount) ||
              ((e = r.state),
              'function' === typeof r.componentWillMount &&
                r.componentWillMount(),
              'function' === typeof r.UNSAFE_componentWillMount &&
                r.UNSAFE_componentWillMount(),
              e !== r.state && ra.enqueueReplaceState(r, r.state, null),
              Wo(t, n, r, i),
              (r.state = t.memoizedState)),
            'function' === typeof r.componentDidMount && (t.flags |= 4194308));
        }
        function ua(t, e) {
          try {
            var n = '',
              i = e;
            do {
              ((n += B(i)), (i = i.return));
            } while (i);
            var r = n;
          } catch (o) {
            r = '\nError generating stack: ' + o.message + '\n' + o.stack;
          }
          return { value: t, source: e, stack: r, digest: null };
        }
        function ca(t, e, n) {
          return {
            value: t,
            source: null,
            stack: null != n ? n : null,
            digest: null != e ? e : null,
          };
        }
        function ha(t, e) {
          try {
            console.error(e.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var da = 'function' === typeof WeakMap ? WeakMap : Map;
        function fa(t, e, n) {
          (((n = zo(-1, n)).tag = 3), (n.payload = { element: null }));
          var i = e.value;
          return (
            (n.callback = function () {
              (Hl || ((Hl = !0), ($l = i)), ha(0, e));
            }),
            n
          );
        }
        function pa(t, e, n) {
          (n = zo(-1, n)).tag = 3;
          var i = t.type.getDerivedStateFromError;
          if ('function' === typeof i) {
            var r = e.value;
            ((n.payload = function () {
              return i(r);
            }),
              (n.callback = function () {
                ha(0, e);
              }));
          }
          var o = t.stateNode;
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                (ha(0, e),
                  'function' !== typeof i &&
                    (null === Yl ? (Yl = new Set([this])) : Yl.add(this)));
                var t = e.stack;
                this.componentDidCatch(e.value, {
                  componentStack: null !== t ? t : '',
                });
              }),
            n
          );
        }
        function ma(t, e, n) {
          var i = t.pingCache;
          if (null === i) {
            i = t.pingCache = new da();
            var r = new Set();
            i.set(e, r);
          } else void 0 === (r = i.get(e)) && ((r = new Set()), i.set(e, r));
          r.has(n) || (r.add(n), (t = Eu.bind(null, t, e, n)), e.then(t, t));
        }
        function ga(t) {
          do {
            var e;
            if (
              ((e = 13 === t.tag) &&
                (e = null === (e = t.memoizedState) || null !== e.dehydrated),
              e)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function va(t, e, n, i, r) {
          return 0 === (1 & t.mode)
            ? (t === e
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((e = zo(-1, 1)).tag = 2), Vo(n, e, 1))),
                  (n.lanes |= 1)),
              t)
            : ((t.flags |= 65536), (t.lanes = r), t);
        }
        var ya = x.ReactCurrentOwner,
          ba = !1;
        function xa(t, e, n, i) {
          e.child = null === t ? _o(e, null, n, i) : wo(e, t.child, n, i);
        }
        function wa(t, e, n, i, r) {
          n = n.render;
          var o = e.ref;
          return (
            Do(e, r),
            (i = gs(t, e, n, i, o, r)),
            (n = vs()),
            null === t || ba
              ? (ro && n && to(e), (e.flags |= 1), xa(t, e, i, r), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~r),
                Ha(t, e, r))
          );
        }
        function _a(t, e, n, i, r) {
          if (null === t) {
            var o = n.type;
            return 'function' !== typeof o ||
              Ou(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((t = Ru(n.type, null, i, e, e.mode, r)).ref = e.ref),
                (t.return = e),
                (e.child = t))
              : ((e.tag = 15), (e.type = o), Sa(t, e, o, i, r));
          }
          if (((o = t.child), 0 === (t.lanes & r))) {
            var s = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : li)(s, i) &&
              t.ref === e.ref
            )
              return Ha(t, e, r);
          }
          return (
            (e.flags |= 1),
            ((t = Fu(o, i)).ref = e.ref),
            (t.return = e),
            (e.child = t)
          );
        }
        function Sa(t, e, n, i, r) {
          if (null !== t) {
            var o = t.memoizedProps;
            if (li(o, i) && t.ref === e.ref) {
              if (((ba = !1), (e.pendingProps = i = o), 0 === (t.lanes & r)))
                return ((e.lanes = t.lanes), Ha(t, e, r));
              0 !== (131072 & t.flags) && (ba = !0);
            }
          }
          return Pa(t, e, n, i, r);
        }
        function ka(t, e, n) {
          var i = e.pendingProps,
            r = i.children,
            o = null !== t ? t.memoizedState : null;
          if ('hidden' === i.mode)
            if (0 === (1 & e.mode))
              ((e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pr(Fl, Ol),
                (Ol |= n));
            else {
              if (0 === (1073741824 & n))
                return (
                  (t = null !== o ? o.baseLanes | n : n),
                  (e.lanes = e.childLanes = 1073741824),
                  (e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  }),
                  (e.updateQueue = null),
                  Pr(Fl, Ol),
                  (Ol |= t),
                  null
                );
              ((e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (i = null !== o ? o.baseLanes : n),
                Pr(Fl, Ol),
                (Ol |= i));
            }
          else
            (null !== o
              ? ((i = o.baseLanes | n), (e.memoizedState = null))
              : (i = n),
              Pr(Fl, Ol),
              (Ol |= i));
          return (xa(t, e, r, n), e.child);
        }
        function Ea(t, e) {
          var n = e.ref;
          ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
            ((e.flags |= 512), (e.flags |= 2097152));
        }
        function Pa(t, e, n, i, r) {
          var o = Or(n) ? Dr : Cr.current;
          return (
            (o = Ar(e, o)),
            Do(e, r),
            (n = gs(t, e, n, i, o, r)),
            (i = vs()),
            null === t || ba
              ? (ro && i && to(e), (e.flags |= 1), xa(t, e, n, r), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~r),
                Ha(t, e, r))
          );
        }
        function Ma(t, e, n, i, r) {
          if (Or(n)) {
            var o = !0;
            Nr(e);
          } else o = !1;
          if ((Do(e, r), null === e.stateNode))
            (Wa(t, e), sa(e, n, i), la(e, n, i, r), (i = !0));
          else if (null === t) {
            var s = e.stateNode,
              a = e.memoizedProps;
            s.props = a;
            var l = s.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = Ao(u))
              : (u = Ar(e, (u = Or(n) ? Dr : Cr.current)));
            var c = n.getDerivedStateFromProps,
              h =
                'function' === typeof c ||
                'function' === typeof s.getSnapshotBeforeUpdate;
            (h ||
              ('function' !== typeof s.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof s.componentWillReceiveProps) ||
              ((a !== i || l !== u) && aa(e, s, i, u)),
              (No = !1));
            var d = e.memoizedState;
            ((s.state = d),
              Wo(e, i, s, r),
              (l = e.memoizedState),
              a !== i || d !== l || Tr.current || No
                ? ('function' === typeof c &&
                    (ia(e, n, c, i), (l = e.memoizedState)),
                  (a = No || oa(e, n, a, i, d, l, u))
                    ? (h ||
                        ('function' !== typeof s.UNSAFE_componentWillMount &&
                          'function' !== typeof s.componentWillMount) ||
                        ('function' === typeof s.componentWillMount &&
                          s.componentWillMount(),
                        'function' === typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      'function' === typeof s.componentDidMount &&
                        (e.flags |= 4194308))
                    : ('function' === typeof s.componentDidMount &&
                        (e.flags |= 4194308),
                      (e.memoizedProps = i),
                      (e.memoizedState = l)),
                  (s.props = i),
                  (s.state = l),
                  (s.context = u),
                  (i = a))
                : ('function' === typeof s.componentDidMount &&
                    (e.flags |= 4194308),
                  (i = !1)));
          } else {
            ((s = e.stateNode),
              Io(t, e),
              (a = e.memoizedProps),
              (u = e.type === e.elementType ? a : na(e.type, a)),
              (s.props = u),
              (h = e.pendingProps),
              (d = s.context),
              'object' === typeof (l = n.contextType) && null !== l
                ? (l = Ao(l))
                : (l = Ar(e, (l = Or(n) ? Dr : Cr.current))));
            var f = n.getDerivedStateFromProps;
            ((c =
              'function' === typeof f ||
              'function' === typeof s.getSnapshotBeforeUpdate) ||
              ('function' !== typeof s.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof s.componentWillReceiveProps) ||
              ((a !== h || d !== l) && aa(e, s, i, l)),
              (No = !1),
              (d = e.memoizedState),
              (s.state = d),
              Wo(e, i, s, r));
            var p = e.memoizedState;
            a !== h || d !== p || Tr.current || No
              ? ('function' === typeof f &&
                  (ia(e, n, f, i), (p = e.memoizedState)),
                (u = No || oa(e, n, u, i, d, p, l) || !1)
                  ? (c ||
                      ('function' !== typeof s.UNSAFE_componentWillUpdate &&
                        'function' !== typeof s.componentWillUpdate) ||
                      ('function' === typeof s.componentWillUpdate &&
                        s.componentWillUpdate(i, p, l),
                      'function' === typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(i, p, l)),
                    'function' === typeof s.componentDidUpdate &&
                      (e.flags |= 4),
                    'function' === typeof s.getSnapshotBeforeUpdate &&
                      (e.flags |= 1024))
                  : ('function' !== typeof s.componentDidUpdate ||
                      (a === t.memoizedProps && d === t.memoizedState) ||
                      (e.flags |= 4),
                    'function' !== typeof s.getSnapshotBeforeUpdate ||
                      (a === t.memoizedProps && d === t.memoizedState) ||
                      (e.flags |= 1024),
                    (e.memoizedProps = i),
                    (e.memoizedState = p)),
                (s.props = i),
                (s.state = p),
                (s.context = l),
                (i = u))
              : ('function' !== typeof s.componentDidUpdate ||
                  (a === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 4),
                'function' !== typeof s.getSnapshotBeforeUpdate ||
                  (a === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 1024),
                (i = !1));
          }
          return Ca(t, e, n, i, o, r);
        }
        function Ca(t, e, n, i, r, o) {
          Ea(t, e);
          var s = 0 !== (128 & e.flags);
          if (!i && !s) return (r && jr(e, n, !1), Ha(t, e, o));
          ((i = e.stateNode), (ya.current = e));
          var a =
            s && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : i.render();
          return (
            (e.flags |= 1),
            null !== t && s
              ? ((e.child = wo(e, t.child, null, o)),
                (e.child = wo(e, null, a, o)))
              : xa(t, e, a, o),
            (e.memoizedState = i.state),
            r && jr(e, n, !0),
            e.child
          );
        }
        function Ta(t) {
          var e = t.stateNode;
          (e.pendingContext
            ? Rr(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && Rr(0, e.context, !1),
            Qo(t, e.containerInfo));
        }
        function Da(t, e, n, i, r) {
          return (po(), mo(r), (e.flags |= 256), xa(t, e, n, i), e.child);
        }
        var Aa,
          Oa,
          Fa,
          Ra,
          La = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Na(t) {
          return { baseLanes: t, cachePool: null, transitions: null };
        }
        function ja(t, e, n) {
          var i,
            r = e.pendingProps,
            s = ts.current,
            a = !1,
            l = 0 !== (128 & e.flags);
          if (
            ((i = l) ||
              (i = (null === t || null !== t.memoizedState) && 0 !== (2 & s)),
            i
              ? ((a = !0), (e.flags &= -129))
              : (null !== t && null === t.memoizedState) || (s |= 1),
            Pr(ts, 1 & s),
            null === t)
          )
            return (
              uo(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 === (1 & e.mode)
                    ? (e.lanes = 1)
                    : '$!' === t.data
                      ? (e.lanes = 8)
                      : (e.lanes = 1073741824),
                  null)
                : ((l = r.children),
                  (t = r.fallback),
                  a
                    ? ((r = e.mode),
                      (a = e.child),
                      (l = { mode: 'hidden', children: l }),
                      0 === (1 & r) && null !== a
                        ? ((a.childLanes = 0), (a.pendingProps = l))
                        : (a = Nu(l, r, 0, null)),
                      (t = Lu(t, r, n, null)),
                      (a.return = e),
                      (t.return = e),
                      (a.sibling = t),
                      (e.child = a),
                      (e.child.memoizedState = Na(n)),
                      (e.memoizedState = La),
                      t)
                    : Ia(e, l))
            );
          if (null !== (s = t.memoizedState) && null !== (i = s.dehydrated))
            return (function (t, e, n, i, r, s, a) {
              if (n)
                return 256 & e.flags
                  ? ((e.flags &= -257), za(t, e, a, (i = ca(Error(o(422))))))
                  : null !== e.memoizedState
                    ? ((e.child = t.child), (e.flags |= 128), null)
                    : ((s = i.fallback),
                      (r = e.mode),
                      (i = Nu(
                        { mode: 'visible', children: i.children },
                        r,
                        0,
                        null,
                      )),
                      ((s = Lu(s, r, a, null)).flags |= 2),
                      (i.return = e),
                      (s.return = e),
                      (i.sibling = s),
                      (e.child = i),
                      0 !== (1 & e.mode) && wo(e, t.child, null, a),
                      (e.child.memoizedState = Na(a)),
                      (e.memoizedState = La),
                      s);
              if (0 === (1 & e.mode)) return za(t, e, a, null);
              if ('$!' === r.data) {
                if ((i = r.nextSibling && r.nextSibling.dataset))
                  var l = i.dgst;
                return (
                  (i = l),
                  za(t, e, a, (i = ca((s = Error(o(419))), i, void 0)))
                );
              }
              if (((l = 0 !== (a & t.childLanes)), ba || l)) {
                if (null !== (i = Tl)) {
                  switch (a & -a) {
                    case 4:
                      r = 2;
                      break;
                    case 16:
                      r = 8;
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
                      r = 32;
                      break;
                    case 536870912:
                      r = 268435456;
                      break;
                    default:
                      r = 0;
                  }
                  0 !== (r = 0 !== (r & (i.suspendedLanes | a)) ? 0 : r) &&
                    r !== s.retryLane &&
                    ((s.retryLane = r), Lo(t, r), nu(i, t, r, -1));
                }
                return (mu(), za(t, e, a, (i = ca(Error(o(421))))));
              }
              return '$?' === r.data
                ? ((e.flags |= 128),
                  (e.child = t.child),
                  (e = Mu.bind(null, t)),
                  (r._reactRetry = e),
                  null)
                : ((t = s.treeContext),
                  (io = ur(r.nextSibling)),
                  (no = e),
                  (ro = !0),
                  (oo = null),
                  null !== t &&
                    ((qr[Kr++] = Qr),
                    (qr[Kr++] = Gr),
                    (qr[Kr++] = Xr),
                    (Qr = t.id),
                    (Gr = t.overflow),
                    (Xr = e)),
                  (e = Ia(e, i.children)),
                  (e.flags |= 4096),
                  e);
            })(t, e, l, r, i, s, n);
          if (a) {
            ((a = r.fallback), (l = e.mode), (i = (s = t.child).sibling));
            var u = { mode: 'hidden', children: r.children };
            return (
              0 === (1 & l) && e.child !== s
                ? (((r = e.child).childLanes = 0),
                  (r.pendingProps = u),
                  (e.deletions = null))
                : ((r = Fu(s, u)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== i
                ? (a = Fu(i, a))
                : ((a = Lu(a, l, n, null)).flags |= 2),
              (a.return = e),
              (r.return = e),
              (r.sibling = a),
              (e.child = r),
              (r = a),
              (a = e.child),
              (l =
                null === (l = t.child.memoizedState)
                  ? Na(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (a.memoizedState = l),
              (a.childLanes = t.childLanes & ~n),
              (e.memoizedState = La),
              r
            );
          }
          return (
            (t = (a = t.child).sibling),
            (r = Fu(a, { mode: 'visible', children: r.children })),
            0 === (1 & e.mode) && (r.lanes = n),
            (r.return = e),
            (r.sibling = null),
            null !== t &&
              (null === (n = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : n.push(t)),
            (e.child = r),
            (e.memoizedState = null),
            r
          );
        }
        function Ia(t, e) {
          return (
            ((e = Nu(
              { mode: 'visible', children: e },
              t.mode,
              0,
              null,
            )).return = t),
            (t.child = e)
          );
        }
        function za(t, e, n, i) {
          return (
            null !== i && mo(i),
            wo(e, t.child, null, n),
            ((t = Ia(e, e.pendingProps.children)).flags |= 2),
            (e.memoizedState = null),
            t
          );
        }
        function Va(t, e, n) {
          t.lanes |= e;
          var i = t.alternate;
          (null !== i && (i.lanes |= e), To(t.return, e, n));
        }
        function Ba(t, e, n, i, r) {
          var o = t.memoizedState;
          null === o
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: i,
                tail: n,
                tailMode: r,
              })
            : ((o.isBackwards = e),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = i),
              (o.tail = n),
              (o.tailMode = r));
        }
        function Ua(t, e, n) {
          var i = e.pendingProps,
            r = i.revealOrder,
            o = i.tail;
          if ((xa(t, e, i.children, n), 0 !== (2 & (i = ts.current))))
            ((i = (1 & i) | 2), (e.flags |= 128));
          else {
            if (null !== t && 0 !== (128 & t.flags))
              t: for (t = e.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && Va(t, n, e);
                else if (19 === t.tag) Va(t, n, e);
                else if (null !== t.child) {
                  ((t.child.return = t), (t = t.child));
                  continue;
                }
                if (t === e) break t;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
              }
            i &= 1;
          }
          if ((Pr(ts, i), 0 === (1 & e.mode))) e.memoizedState = null;
          else
            switch (r) {
              case 'forwards':
                for (n = e.child, r = null; null !== n; )
                  (null !== (t = n.alternate) && null === es(t) && (r = n),
                    (n = n.sibling));
                (null === (n = r)
                  ? ((r = e.child), (e.child = null))
                  : ((r = n.sibling), (n.sibling = null)),
                  Ba(e, !1, r, n, o));
                break;
              case 'backwards':
                for (n = null, r = e.child, e.child = null; null !== r; ) {
                  if (null !== (t = r.alternate) && null === es(t)) {
                    e.child = r;
                    break;
                  }
                  ((t = r.sibling), (r.sibling = n), (n = r), (r = t));
                }
                Ba(e, !0, n, null, o);
                break;
              case 'together':
                Ba(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }
          return e.child;
        }
        function Wa(t, e) {
          0 === (1 & e.mode) &&
            null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
        }
        function Ha(t, e, n) {
          if (
            (null !== t && (e.dependencies = t.dependencies),
            (Nl |= e.lanes),
            0 === (n & e.childLanes))
          )
            return null;
          if (null !== t && e.child !== t.child) throw Error(o(153));
          if (null !== e.child) {
            for (
              n = Fu((t = e.child), t.pendingProps), e.child = n, n.return = e;
              null !== t.sibling;

            )
              ((t = t.sibling),
                ((n = n.sibling = Fu(t, t.pendingProps)).return = e));
            n.sibling = null;
          }
          return e.child;
        }
        function $a(t, e) {
          if (!ro)
            switch (t.tailMode) {
              case 'hidden':
                e = t.tail;
                for (var n = null; null !== e; )
                  (null !== e.alternate && (n = e), (e = e.sibling));
                null === n ? (t.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = t.tail;
                for (var i = null; null !== n; )
                  (null !== n.alternate && (i = n), (n = n.sibling));
                null === i
                  ? e || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (i.sibling = null);
            }
        }
        function Ya(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            n = 0,
            i = 0;
          if (e)
            for (var r = t.child; null !== r; )
              ((n |= r.lanes | r.childLanes),
                (i |= 14680064 & r.subtreeFlags),
                (i |= 14680064 & r.flags),
                (r.return = t),
                (r = r.sibling));
          else
            for (r = t.child; null !== r; )
              ((n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags),
                (i |= r.flags),
                (r.return = t),
                (r = r.sibling));
          return ((t.subtreeFlags |= i), (t.childLanes = n), e);
        }
        function qa(t, e, n) {
          var i = e.pendingProps;
          switch ((eo(e), e.tag)) {
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
              return (Ya(e), null);
            case 1:
            case 17:
              return (Or(e.type) && Fr(), Ya(e), null);
            case 3:
              return (
                (i = e.stateNode),
                Go(),
                Er(Tr),
                Er(Cr),
                is(),
                i.pendingContext &&
                  ((i.context = i.pendingContext), (i.pendingContext = null)),
                (null !== t && null !== t.child) ||
                  (ho(e)
                    ? (e.flags |= 4)
                    : null === t ||
                      (t.memoizedState.isDehydrated && 0 === (256 & e.flags)) ||
                      ((e.flags |= 1024),
                      null !== oo && (su(oo), (oo = null)))),
                Oa(t, e),
                Ya(e),
                null
              );
            case 5:
              Zo(e);
              var r = Xo(Ko.current);
              if (((n = e.type), null !== t && null != e.stateNode))
                (Fa(t, e, n, i, r),
                  t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
              else {
                if (!i) {
                  if (null === e.stateNode) throw Error(o(166));
                  return (Ya(e), null);
                }
                if (((t = Xo(Yo.current)), ho(e))) {
                  ((i = e.stateNode), (n = e.type));
                  var s = e.memoizedProps;
                  switch (
                    ((i[dr] = e), (i[fr] = s), (t = 0 !== (1 & e.mode)), n)
                  ) {
                    case 'dialog':
                      (zi('cancel', i), zi('close', i));
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      zi('load', i);
                      break;
                    case 'video':
                    case 'audio':
                      for (r = 0; r < Li.length; r++) zi(Li[r], i);
                      break;
                    case 'source':
                      zi('error', i);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      (zi('error', i), zi('load', i));
                      break;
                    case 'details':
                      zi('toggle', i);
                      break;
                    case 'input':
                      (Q(i, s), zi('invalid', i));
                      break;
                    case 'select':
                      ((i._wrapperState = { wasMultiple: !!s.multiple }),
                        zi('invalid', i));
                      break;
                    case 'textarea':
                      (rt(i, s), zi('invalid', i));
                  }
                  for (var l in (yt(n, s), (r = null), s))
                    if (s.hasOwnProperty(l)) {
                      var u = s[l];
                      'children' === l
                        ? 'string' === typeof u
                          ? i.textContent !== u &&
                            (!0 !== s.suppressHydrationWarning &&
                              Ji(i.textContent, u, t),
                            (r = ['children', u]))
                          : 'number' === typeof u &&
                            i.textContent !== '' + u &&
                            (!0 !== s.suppressHydrationWarning &&
                              Ji(i.textContent, u, t),
                            (r = ['children', '' + u]))
                        : a.hasOwnProperty(l) &&
                          null != u &&
                          'onScroll' === l &&
                          zi('scroll', i);
                    }
                  switch (n) {
                    case 'input':
                      (Y(i), Z(i, s, !0));
                      break;
                    case 'textarea':
                      (Y(i), st(i));
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof s.onClick && (i.onclick = Zi);
                  }
                  ((i = r), (e.updateQueue = i), null !== i && (e.flags |= 4));
                } else {
                  ((l = 9 === r.nodeType ? r : r.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === t && (t = at(n)),
                    'http://www.w3.org/1999/xhtml' === t
                      ? 'script' === n
                        ? (((t = l.createElement('div')).innerHTML =
                            '<script><\/script>'),
                          (t = t.removeChild(t.firstChild)))
                        : 'string' === typeof i.is
                          ? (t = l.createElement(n, { is: i.is }))
                          : ((t = l.createElement(n)),
                            'select' === n &&
                              ((l = t),
                              i.multiple
                                ? (l.multiple = !0)
                                : i.size && (l.size = i.size)))
                      : (t = l.createElementNS(t, n)),
                    (t[dr] = e),
                    (t[fr] = i),
                    Aa(t, e, !1, !1),
                    (e.stateNode = t));
                  t: {
                    switch (((l = bt(n, i)), n)) {
                      case 'dialog':
                        (zi('cancel', t), zi('close', t), (r = i));
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        (zi('load', t), (r = i));
                        break;
                      case 'video':
                      case 'audio':
                        for (r = 0; r < Li.length; r++) zi(Li[r], t);
                        r = i;
                        break;
                      case 'source':
                        (zi('error', t), (r = i));
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        (zi('error', t), zi('load', t), (r = i));
                        break;
                      case 'details':
                        (zi('toggle', t), (r = i));
                        break;
                      case 'input':
                        (Q(t, i), (r = X(t, i)), zi('invalid', t));
                        break;
                      case 'option':
                      default:
                        r = i;
                        break;
                      case 'select':
                        ((t._wrapperState = { wasMultiple: !!i.multiple }),
                          (r = j({}, i, { value: void 0 })),
                          zi('invalid', t));
                        break;
                      case 'textarea':
                        (rt(t, i), (r = it(t, i)), zi('invalid', t));
                    }
                    for (s in (yt(n, r), (u = r)))
                      if (u.hasOwnProperty(s)) {
                        var c = u[s];
                        'style' === s
                          ? gt(t, c)
                          : 'dangerouslySetInnerHTML' === s
                            ? null != (c = c ? c.__html : void 0) && ht(t, c)
                            : 'children' === s
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && dt(t, c)
                                : 'number' === typeof c && dt(t, '' + c)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                'autoFocus' !== s &&
                                (a.hasOwnProperty(s)
                                  ? null != c &&
                                    'onScroll' === s &&
                                    zi('scroll', t)
                                  : null != c && b(t, s, c, l));
                      }
                    switch (n) {
                      case 'input':
                        (Y(t), Z(t, i, !1));
                        break;
                      case 'textarea':
                        (Y(t), st(t));
                        break;
                      case 'option':
                        null != i.value &&
                          t.setAttribute('value', '' + H(i.value));
                        break;
                      case 'select':
                        ((t.multiple = !!i.multiple),
                          null != (s = i.value)
                            ? nt(t, !!i.multiple, s, !1)
                            : null != i.defaultValue &&
                              nt(t, !!i.multiple, i.defaultValue, !0));
                        break;
                      default:
                        'function' === typeof r.onClick && (t.onclick = Zi);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        i = !!i.autoFocus;
                        break t;
                      case 'img':
                        i = !0;
                        break t;
                      default:
                        i = !1;
                    }
                  }
                  i && (e.flags |= 4);
                }
                null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              }
              return (Ya(e), null);
            case 6:
              if (t && null != e.stateNode) Ra(t, e, t.memoizedProps, i);
              else {
                if ('string' !== typeof i && null === e.stateNode)
                  throw Error(o(166));
                if (((n = Xo(Ko.current)), Xo(Yo.current), ho(e))) {
                  if (
                    ((i = e.stateNode),
                    (n = e.memoizedProps),
                    (i[dr] = e),
                    (s = i.nodeValue !== n) && null !== (t = no))
                  )
                    switch (t.tag) {
                      case 3:
                        Ji(i.nodeValue, n, 0 !== (1 & t.mode));
                        break;
                      case 5:
                        !0 !== t.memoizedProps.suppressHydrationWarning &&
                          Ji(i.nodeValue, n, 0 !== (1 & t.mode));
                    }
                  s && (e.flags |= 4);
                } else
                  (((i = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(i))[dr] = e),
                    (e.stateNode = i));
              }
              return (Ya(e), null);
            case 13:
              if (
                (Er(ts),
                (i = e.memoizedState),
                null === t ||
                  (null !== t.memoizedState &&
                    null !== t.memoizedState.dehydrated))
              ) {
                if (
                  ro &&
                  null !== io &&
                  0 !== (1 & e.mode) &&
                  0 === (128 & e.flags)
                )
                  (fo(), po(), (e.flags |= 98560), (s = !1));
                else if (((s = ho(e)), null !== i && null !== i.dehydrated)) {
                  if (null === t) {
                    if (!s) throw Error(o(318));
                    if (
                      !(s =
                        null !== (s = e.memoizedState) ? s.dehydrated : null)
                    )
                      throw Error(o(317));
                    s[dr] = e;
                  } else
                    (po(),
                      0 === (128 & e.flags) && (e.memoizedState = null),
                      (e.flags |= 4));
                  (Ya(e), (s = !1));
                } else (null !== oo && (su(oo), (oo = null)), (s = !0));
                if (!s) return 65536 & e.flags ? e : null;
              }
              return 0 !== (128 & e.flags)
                ? ((e.lanes = n), e)
                : ((i = null !== i) !==
                    (null !== t && null !== t.memoizedState) &&
                    i &&
                    ((e.child.flags |= 8192),
                    0 !== (1 & e.mode) &&
                      (null === t || 0 !== (1 & ts.current)
                        ? 0 === Rl && (Rl = 3)
                        : mu())),
                  null !== e.updateQueue && (e.flags |= 4),
                  Ya(e),
                  null);
            case 4:
              return (
                Go(),
                Oa(t, e),
                null === t && Ui(e.stateNode.containerInfo),
                Ya(e),
                null
              );
            case 10:
              return (Co(e.type._context), Ya(e), null);
            case 19:
              if ((Er(ts), null === (s = e.memoizedState)))
                return (Ya(e), null);
              if (((i = 0 !== (128 & e.flags)), null === (l = s.rendering)))
                if (i) $a(s, !1);
                else {
                  if (0 !== Rl || (null !== t && 0 !== (128 & t.flags)))
                    for (t = e.child; null !== t; ) {
                      if (null !== (l = es(t))) {
                        for (
                          e.flags |= 128,
                            $a(s, !1),
                            null !== (i = l.updateQueue) &&
                              ((e.updateQueue = i), (e.flags |= 4)),
                            e.subtreeFlags = 0,
                            i = n,
                            n = e.child;
                          null !== n;

                        )
                          ((t = i),
                            ((s = n).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = t),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (t = l.dependencies),
                                (s.dependencies =
                                  null === t
                                    ? null
                                    : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext,
                                      })),
                            (n = n.sibling));
                        return (Pr(ts, (1 & ts.current) | 2), e.child);
                      }
                      t = t.sibling;
                    }
                  null !== s.tail &&
                    Gt() > Ul &&
                    ((e.flags |= 128),
                    (i = !0),
                    $a(s, !1),
                    (e.lanes = 4194304));
                }
              else {
                if (!i)
                  if (null !== (t = es(l))) {
                    if (
                      ((e.flags |= 128),
                      (i = !0),
                      null !== (n = t.updateQueue) &&
                        ((e.updateQueue = n), (e.flags |= 4)),
                      $a(s, !0),
                      null === s.tail &&
                        'hidden' === s.tailMode &&
                        !l.alternate &&
                        !ro)
                    )
                      return (Ya(e), null);
                  } else
                    2 * Gt() - s.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((e.flags |= 128),
                      (i = !0),
                      $a(s, !1),
                      (e.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = e.child), (e.child = l))
                  : (null !== (n = s.last) ? (n.sibling = l) : (e.child = l),
                    (s.last = l));
              }
              return null !== s.tail
                ? ((e = s.tail),
                  (s.rendering = e),
                  (s.tail = e.sibling),
                  (s.renderingStartTime = Gt()),
                  (e.sibling = null),
                  (n = ts.current),
                  Pr(ts, i ? (1 & n) | 2 : 1 & n),
                  e)
                : (Ya(e), null);
            case 22:
            case 23:
              return (
                hu(),
                (i = null !== e.memoizedState),
                null !== t &&
                  (null !== t.memoizedState) !== i &&
                  (e.flags |= 8192),
                i && 0 !== (1 & e.mode)
                  ? 0 !== (1073741824 & Ol) &&
                    (Ya(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : Ya(e),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, e.tag));
        }
        function Ka(t, e) {
          switch ((eo(e), e.tag)) {
            case 1:
              return (
                Or(e.type) && Fr(),
                65536 & (t = e.flags)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 3:
              return (
                Go(),
                Er(Tr),
                Er(Cr),
                is(),
                0 !== (65536 & (t = e.flags)) && 0 === (128 & t)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 5:
              return (Zo(e), null);
            case 13:
              if (
                (Er(ts),
                null !== (t = e.memoizedState) && null !== t.dehydrated)
              ) {
                if (null === e.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (t = e.flags)
                ? ((e.flags = (-65537 & t) | 128), e)
                : null;
            case 19:
              return (Er(ts), null);
            case 4:
              return (Go(), null);
            case 10:
              return (Co(e.type._context), null);
            case 22:
            case 23:
              return (hu(), null);
            default:
              return null;
          }
        }
        ((Aa = function (t, e) {
          for (var n = e.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
        }),
          (Oa = function () {}),
          (Fa = function (t, e, n, i) {
            var r = t.memoizedProps;
            if (r !== i) {
              ((t = e.stateNode), Xo(Yo.current));
              var o,
                s = null;
              switch (n) {
                case 'input':
                  ((r = X(t, r)), (i = X(t, i)), (s = []));
                  break;
                case 'select':
                  ((r = j({}, r, { value: void 0 })),
                    (i = j({}, i, { value: void 0 })),
                    (s = []));
                  break;
                case 'textarea':
                  ((r = it(t, r)), (i = it(t, i)), (s = []));
                  break;
                default:
                  'function' !== typeof r.onClick &&
                    'function' === typeof i.onClick &&
                    (t.onclick = Zi);
              }
              for (c in (yt(n, i), (n = null), r))
                if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && null != r[c])
                  if ('style' === c) {
                    var l = r[c];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (a.hasOwnProperty(c)
                        ? s || (s = [])
                        : (s = s || []).push(c, null));
              for (c in i) {
                var u = i[c];
                if (
                  ((l = null != r ? r[c] : void 0),
                  i.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ('style' === c)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          l[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else (n || (s || (s = []), s.push(c, n)), (n = u));
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (s = s || []).push(c, u))
                      : 'children' === c
                        ? ('string' !== typeof u && 'number' !== typeof u) ||
                          (s = s || []).push(c, '' + u)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (a.hasOwnProperty(c)
                            ? (null != u && 'onScroll' === c && zi('scroll', t),
                              s || l === u || (s = []))
                            : (s = s || []).push(c, u));
              }
              n && (s = s || []).push('style', n);
              var c = s;
              (e.updateQueue = c) && (e.flags |= 4);
            }
          }),
          (Ra = function (t, e, n, i) {
            n !== i && (e.flags |= 4);
          }));
        var Xa = !1,
          Qa = !1,
          Ga = 'function' === typeof WeakSet ? WeakSet : Set,
          Ja = null;
        function Za(t, e) {
          var n = t.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (i) {
                ku(t, e, i);
              }
            else n.current = null;
        }
        function tl(t, e, n) {
          try {
            n();
          } catch (i) {
            ku(t, e, i);
          }
        }
        var el = !1;
        function nl(t, e, n) {
          var i = e.updateQueue;
          if (null !== (i = null !== i ? i.lastEffect : null)) {
            var r = (i = i.next);
            do {
              if ((r.tag & t) === t) {
                var o = r.destroy;
                ((r.destroy = void 0), void 0 !== o && tl(e, n, o));
              }
              r = r.next;
            } while (r !== i);
          }
        }
        function il(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var n = (e = e.next);
            do {
              if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i();
              }
              n = n.next;
            } while (n !== e);
          }
        }
        function rl(t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            (t.tag, (t = n), 'function' === typeof e ? e(t) : (e.current = t));
          }
        }
        function ol(t) {
          var e = t.alternate;
          (null !== e && ((t.alternate = null), ol(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            5 === t.tag &&
              null !== (e = t.stateNode) &&
              (delete e[dr],
              delete e[fr],
              delete e[mr],
              delete e[gr],
              delete e[vr]),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null));
        }
        function sl(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function al(t) {
          t: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || sl(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags) continue t;
              if (null === t.child || 4 === t.tag) continue t;
              ((t.child.return = t), (t = t.child));
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function ll(t, e, n) {
          var i = t.tag;
          if (5 === i || 6 === i)
            ((t = t.stateNode),
              e
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(t, e)
                  : n.insertBefore(t, e)
                : (8 === n.nodeType
                    ? (e = n.parentNode).insertBefore(t, n)
                    : (e = n).appendChild(t),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== e.onclick ||
                    (e.onclick = Zi)));
          else if (4 !== i && null !== (t = t.child))
            for (ll(t, e, n), t = t.sibling; null !== t; )
              (ll(t, e, n), (t = t.sibling));
        }
        function ul(t, e, n) {
          var i = t.tag;
          if (5 === i || 6 === i)
            ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
          else if (4 !== i && null !== (t = t.child))
            for (ul(t, e, n), t = t.sibling; null !== t; )
              (ul(t, e, n), (t = t.sibling));
        }
        var cl = null,
          hl = !1;
        function dl(t, e, n) {
          for (n = n.child; null !== n; ) (fl(t, e, n), (n = n.sibling));
        }
        function fl(t, e, n) {
          if (oe && 'function' === typeof oe.onCommitFiberUnmount)
            try {
              oe.onCommitFiberUnmount(re, n);
            } catch (a) {}
          switch (n.tag) {
            case 5:
              Qa || Za(n, e);
            case 6:
              var i = cl,
                r = hl;
              ((cl = null),
                dl(t, e, n),
                (hl = r),
                null !== (cl = i) &&
                  (hl
                    ? ((t = cl),
                      (n = n.stateNode),
                      8 === t.nodeType
                        ? t.parentNode.removeChild(n)
                        : t.removeChild(n))
                    : cl.removeChild(n.stateNode)));
              break;
            case 18:
              null !== cl &&
                (hl
                  ? ((t = cl),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? lr(t.parentNode, n)
                      : 1 === t.nodeType && lr(t, n),
                    Ue(t))
                  : lr(cl, n.stateNode));
              break;
            case 4:
              ((i = cl),
                (r = hl),
                (cl = n.stateNode.containerInfo),
                (hl = !0),
                dl(t, e, n),
                (cl = i),
                (hl = r));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qa &&
                null !== (i = n.updateQueue) &&
                null !== (i = i.lastEffect)
              ) {
                r = i = i.next;
                do {
                  var o = r,
                    s = o.destroy;
                  ((o = o.tag),
                    void 0 !== s &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tl(n, e, s),
                    (r = r.next));
                } while (r !== i);
              }
              dl(t, e, n);
              break;
            case 1:
              if (
                !Qa &&
                (Za(n, e),
                'function' === typeof (i = n.stateNode).componentWillUnmount)
              )
                try {
                  ((i.props = n.memoizedProps),
                    (i.state = n.memoizedState),
                    i.componentWillUnmount());
                } catch (a) {
                  ku(n, e, a);
                }
              dl(t, e, n);
              break;
            case 21:
              dl(t, e, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qa = (i = Qa) || null !== n.memoizedState),
                  dl(t, e, n),
                  (Qa = i))
                : dl(t, e, n);
              break;
            default:
              dl(t, e, n);
          }
        }
        function pl(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var n = t.stateNode;
            (null === n && (n = t.stateNode = new Ga()),
              e.forEach(function (e) {
                var i = Cu.bind(null, t, e);
                n.has(e) || (n.add(e), e.then(i, i));
              }));
          }
        }
        function ml(t, e) {
          var n = e.deletions;
          if (null !== n)
            for (var i = 0; i < n.length; i++) {
              var r = n[i];
              try {
                var s = t,
                  a = e,
                  l = a;
                t: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      ((cl = l.stateNode), (hl = !1));
                      break t;
                    case 3:
                    case 4:
                      ((cl = l.stateNode.containerInfo), (hl = !0));
                      break t;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(o(160));
                (fl(s, a, r), (cl = null), (hl = !1));
                var u = r.alternate;
                (null !== u && (u.return = null), (r.return = null));
              } catch (c) {
                ku(r, e, c);
              }
            }
          if (12854 & e.subtreeFlags)
            for (e = e.child; null !== e; ) (gl(e, t), (e = e.sibling));
        }
        function gl(t, e) {
          var n = t.alternate,
            i = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(e, t), vl(t), 4 & i)) {
                try {
                  (nl(3, t, t.return), il(3, t));
                } catch (g) {
                  ku(t, t.return, g);
                }
                try {
                  nl(5, t, t.return);
                } catch (g) {
                  ku(t, t.return, g);
                }
              }
              break;
            case 1:
              (ml(e, t), vl(t), 512 & i && null !== n && Za(n, n.return));
              break;
            case 5:
              if (
                (ml(e, t),
                vl(t),
                512 & i && null !== n && Za(n, n.return),
                32 & t.flags)
              ) {
                var r = t.stateNode;
                try {
                  dt(r, '');
                } catch (g) {
                  ku(t, t.return, g);
                }
              }
              if (4 & i && null != (r = t.stateNode)) {
                var s = t.memoizedProps,
                  a = null !== n ? n.memoizedProps : s,
                  l = t.type,
                  u = t.updateQueue;
                if (((t.updateQueue = null), null !== u))
                  try {
                    ('input' === l &&
                      'radio' === s.type &&
                      null != s.name &&
                      G(r, s),
                      bt(l, a));
                    var c = bt(l, s);
                    for (a = 0; a < u.length; a += 2) {
                      var h = u[a],
                        d = u[a + 1];
                      'style' === h
                        ? gt(r, d)
                        : 'dangerouslySetInnerHTML' === h
                          ? ht(r, d)
                          : 'children' === h
                            ? dt(r, d)
                            : b(r, h, d, c);
                    }
                    switch (l) {
                      case 'input':
                        J(r, s);
                        break;
                      case 'textarea':
                        ot(r, s);
                        break;
                      case 'select':
                        var f = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        null != p
                          ? nt(r, !!s.multiple, p, !1)
                          : f !== !!s.multiple &&
                            (null != s.defaultValue
                              ? nt(r, !!s.multiple, s.defaultValue, !0)
                              : nt(r, !!s.multiple, s.multiple ? [] : '', !1));
                    }
                    r[fr] = s;
                  } catch (g) {
                    ku(t, t.return, g);
                  }
              }
              break;
            case 6:
              if ((ml(e, t), vl(t), 4 & i)) {
                if (null === t.stateNode) throw Error(o(162));
                ((r = t.stateNode), (s = t.memoizedProps));
                try {
                  r.nodeValue = s;
                } catch (g) {
                  ku(t, t.return, g);
                }
              }
              break;
            case 3:
              if (
                (ml(e, t),
                vl(t),
                4 & i && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ue(e.containerInfo);
                } catch (g) {
                  ku(t, t.return, g);
                }
              break;
            case 4:
            default:
              (ml(e, t), vl(t));
              break;
            case 13:
              (ml(e, t),
                vl(t),
                8192 & (r = t.child).flags &&
                  ((s = null !== r.memoizedState),
                  (r.stateNode.isHidden = s),
                  !s ||
                    (null !== r.alternate &&
                      null !== r.alternate.memoizedState) ||
                    (Bl = Gt())),
                4 & i && pl(t));
              break;
            case 22:
              if (
                ((h = null !== n && null !== n.memoizedState),
                1 & t.mode
                  ? ((Qa = (c = Qa) || h), ml(e, t), (Qa = c))
                  : ml(e, t),
                vl(t),
                8192 & i)
              ) {
                if (
                  ((c = null !== t.memoizedState),
                  (t.stateNode.isHidden = c) && !h && 0 !== (1 & t.mode))
                )
                  for (Ja = t, h = t.child; null !== h; ) {
                    for (d = Ja = h; null !== Ja; ) {
                      switch (((p = (f = Ja).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, f, f.return);
                          break;
                        case 1:
                          Za(f, f.return);
                          var m = f.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            ((i = f), (n = f.return));
                            try {
                              ((e = i),
                                (m.props = e.memoizedProps),
                                (m.state = e.memoizedState),
                                m.componentWillUnmount());
                            } catch (g) {
                              ku(i, n, g);
                            }
                          }
                          break;
                        case 5:
                          Za(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            wl(d);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = f), (Ja = p)) : wl(d);
                    }
                    h = h.sibling;
                  }
                t: for (h = null, d = t; ; ) {
                  if (5 === d.tag) {
                    if (null === h) {
                      h = d;
                      try {
                        ((r = d.stateNode),
                          c
                            ? 'function' === typeof (s = r.style).setProperty
                              ? s.setProperty('display', 'none', 'important')
                              : (s.display = 'none')
                            : ((l = d.stateNode),
                              (a =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (l.style.display = mt('display', a))));
                      } catch (g) {
                        ku(t, t.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === h)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (g) {
                        ku(t, t.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === t) &&
                    null !== d.child
                  ) {
                    ((d.child.return = d), (d = d.child));
                    continue;
                  }
                  if (d === t) break t;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === t) break t;
                    (h === d && (h = null), (d = d.return));
                  }
                  (h === d && (h = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling));
                }
              }
              break;
            case 19:
              (ml(e, t), vl(t), 4 & i && pl(t));
            case 21:
          }
        }
        function vl(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              t: {
                for (var n = t.return; null !== n; ) {
                  if (sl(n)) {
                    var i = n;
                    break t;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (i.tag) {
                case 5:
                  var r = i.stateNode;
                  (32 & i.flags && (dt(r, ''), (i.flags &= -33)),
                    ul(t, al(t), r));
                  break;
                case 3:
                case 4:
                  var s = i.stateNode.containerInfo;
                  ll(t, al(t), s);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (a) {
              ku(t, t.return, a);
            }
            t.flags &= -3;
          }
          4096 & e && (t.flags &= -4097);
        }
        function yl(t, e, n) {
          ((Ja = t), bl(t, e, n));
        }
        function bl(t, e, n) {
          for (var i = 0 !== (1 & t.mode); null !== Ja; ) {
            var r = Ja,
              o = r.child;
            if (22 === r.tag && i) {
              var s = null !== r.memoizedState || Xa;
              if (!s) {
                var a = r.alternate,
                  l = (null !== a && null !== a.memoizedState) || Qa;
                a = Xa;
                var u = Qa;
                if (((Xa = s), (Qa = l) && !u))
                  for (Ja = r; null !== Ja; )
                    ((l = (s = Ja).child),
                      22 === s.tag && null !== s.memoizedState
                        ? _l(r)
                        : null !== l
                          ? ((l.return = s), (Ja = l))
                          : _l(r));
                for (; null !== o; ) ((Ja = o), bl(o, e, n), (o = o.sibling));
                ((Ja = r), (Xa = a), (Qa = u));
              }
              xl(t);
            } else
              0 !== (8772 & r.subtreeFlags) && null !== o
                ? ((o.return = r), (Ja = o))
                : xl(t);
          }
        }
        function xl(t) {
          for (; null !== Ja; ) {
            var e = Ja;
            if (0 !== (8772 & e.flags)) {
              var n = e.alternate;
              try {
                if (0 !== (8772 & e.flags))
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa || il(5, e);
                      break;
                    case 1:
                      var i = e.stateNode;
                      if (4 & e.flags && !Qa)
                        if (null === n) i.componentDidMount();
                        else {
                          var r =
                            e.elementType === e.type
                              ? n.memoizedProps
                              : na(e.type, n.memoizedProps);
                          i.componentDidUpdate(
                            r,
                            n.memoizedState,
                            i.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var s = e.updateQueue;
                      null !== s && Ho(e, s, i);
                      break;
                    case 3:
                      var a = e.updateQueue;
                      if (null !== a) {
                        if (((n = null), null !== e.child))
                          switch (e.child.tag) {
                            case 5:
                            case 1:
                              n = e.child.stateNode;
                          }
                        Ho(e, a, n);
                      }
                      break;
                    case 5:
                      var l = e.stateNode;
                      if (null === n && 4 & e.flags) {
                        n = l;
                        var u = e.memoizedProps;
                        switch (e.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === e.memoizedState) {
                        var c = e.alternate;
                        if (null !== c) {
                          var h = c.memoizedState;
                          if (null !== h) {
                            var d = h.dehydrated;
                            null !== d && Ue(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Qa || (512 & e.flags && rl(e));
              } catch (f) {
                ku(e, e.return, f);
              }
            }
            if (e === t) {
              Ja = null;
              break;
            }
            if (null !== (n = e.sibling)) {
              ((n.return = e.return), (Ja = n));
              break;
            }
            Ja = e.return;
          }
        }
        function wl(t) {
          for (; null !== Ja; ) {
            var e = Ja;
            if (e === t) {
              Ja = null;
              break;
            }
            var n = e.sibling;
            if (null !== n) {
              ((n.return = e.return), (Ja = n));
              break;
            }
            Ja = e.return;
          }
        }
        function _l(t) {
          for (; null !== Ja; ) {
            var e = Ja;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var n = e.return;
                  try {
                    il(4, e);
                  } catch (l) {
                    ku(e, n, l);
                  }
                  break;
                case 1:
                  var i = e.stateNode;
                  if ('function' === typeof i.componentDidMount) {
                    var r = e.return;
                    try {
                      i.componentDidMount();
                    } catch (l) {
                      ku(e, r, l);
                    }
                  }
                  var o = e.return;
                  try {
                    rl(e);
                  } catch (l) {
                    ku(e, o, l);
                  }
                  break;
                case 5:
                  var s = e.return;
                  try {
                    rl(e);
                  } catch (l) {
                    ku(e, s, l);
                  }
              }
            } catch (l) {
              ku(e, e.return, l);
            }
            if (e === t) {
              Ja = null;
              break;
            }
            var a = e.sibling;
            if (null !== a) {
              ((a.return = e.return), (Ja = a));
              break;
            }
            Ja = e.return;
          }
        }
        var Sl,
          kl = Math.ceil,
          El = x.ReactCurrentDispatcher,
          Pl = x.ReactCurrentOwner,
          Ml = x.ReactCurrentBatchConfig,
          Cl = 0,
          Tl = null,
          Dl = null,
          Al = 0,
          Ol = 0,
          Fl = kr(0),
          Rl = 0,
          Ll = null,
          Nl = 0,
          jl = 0,
          Il = 0,
          zl = null,
          Vl = null,
          Bl = 0,
          Ul = 1 / 0,
          Wl = null,
          Hl = !1,
          $l = null,
          Yl = null,
          ql = !1,
          Kl = null,
          Xl = 0,
          Ql = 0,
          Gl = null,
          Jl = -1,
          Zl = 0;
        function tu() {
          return 0 !== (6 & Cl) ? Gt() : -1 !== Jl ? Jl : (Jl = Gt());
        }
        function eu(t) {
          return 0 === (1 & t.mode)
            ? 1
            : 0 !== (2 & Cl) && 0 !== Al
              ? Al & -Al
              : null !== go.transition
                ? (0 === Zl && (Zl = me()), Zl)
                : 0 !== (t = be)
                  ? t
                  : (t = void 0 === (t = window.event) ? 16 : Qe(t.type));
        }
        function nu(t, e, n, i) {
          if (50 < Ql) throw ((Ql = 0), (Gl = null), Error(o(185)));
          (ve(t, n, i),
            (0 !== (2 & Cl) && t === Tl) ||
              (t === Tl && (0 === (2 & Cl) && (jl |= n), 4 === Rl && au(t, Al)),
              iu(t, i),
              1 === n &&
                0 === Cl &&
                0 === (1 & e.mode) &&
                ((Ul = Gt() + 500), zr && Ur())));
        }
        function iu(t, e) {
          var n = t.callbackNode;
          !(function (t, e) {
            for (
              var n = t.suspendedLanes,
                i = t.pingedLanes,
                r = t.expirationTimes,
                o = t.pendingLanes;
              0 < o;

            ) {
              var s = 31 - se(o),
                a = 1 << s,
                l = r[s];
              (-1 === l
                ? (0 !== (a & n) && 0 === (a & i)) || (r[s] = fe(a, e))
                : l <= e && (t.expiredLanes |= a),
                (o &= ~a));
            }
          })(t, e);
          var i = de(t, t === Tl ? Al : 0);
          if (0 === i)
            (null !== n && Kt(n),
              (t.callbackNode = null),
              (t.callbackPriority = 0));
          else if (((e = i & -i), t.callbackPriority !== e)) {
            if ((null != n && Kt(n), 1 === e))
              (0 === t.tag
                ? (function (t) {
                    ((zr = !0), Br(t));
                  })(lu.bind(null, t))
                : Br(lu.bind(null, t)),
                sr(function () {
                  0 === (6 & Cl) && Ur();
                }),
                (n = null));
            else {
              switch (xe(i)) {
                case 1:
                  n = Zt;
                  break;
                case 4:
                  n = te;
                  break;
                case 16:
                default:
                  n = ee;
                  break;
                case 536870912:
                  n = ie;
              }
              n = Tu(n, ru.bind(null, t));
            }
            ((t.callbackPriority = e), (t.callbackNode = n));
          }
        }
        function ru(t, e) {
          if (((Jl = -1), (Zl = 0), 0 !== (6 & Cl))) throw Error(o(327));
          var n = t.callbackNode;
          if (_u() && t.callbackNode !== n) return null;
          var i = de(t, t === Tl ? Al : 0);
          if (0 === i) return null;
          if (0 !== (30 & i) || 0 !== (i & t.expiredLanes) || e) e = gu(t, i);
          else {
            e = i;
            var r = Cl;
            Cl |= 2;
            var s = pu();
            for (
              (Tl === t && Al === e) ||
              ((Wl = null), (Ul = Gt() + 500), du(t, e));
              ;

            )
              try {
                yu();
                break;
              } catch (l) {
                fu(t, l);
              }
            (Mo(),
              (El.current = s),
              (Cl = r),
              null !== Dl ? (e = 0) : ((Tl = null), (Al = 0), (e = Rl)));
          }
          if (0 !== e) {
            if (
              (2 === e && 0 !== (r = pe(t)) && ((i = r), (e = ou(t, r))),
              1 === e)
            )
              throw ((n = Ll), du(t, 0), au(t, i), iu(t, Gt()), n);
            if (6 === e) au(t, i);
            else {
              if (
                ((r = t.current.alternate),
                0 === (30 & i) &&
                  !(function (t) {
                    for (var e = t; ; ) {
                      if (16384 & e.flags) {
                        var n = e.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var i = 0; i < n.length; i++) {
                            var r = n[i],
                              o = r.getSnapshot;
                            r = r.value;
                            try {
                              if (!ai(o(), r)) return !1;
                            } catch (a) {
                              return !1;
                            }
                          }
                      }
                      if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
                        ((n.return = e), (e = n));
                      else {
                        if (e === t) break;
                        for (; null === e.sibling; ) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        ((e.sibling.return = e.return), (e = e.sibling));
                      }
                    }
                    return !0;
                  })(r) &&
                  (2 === (e = gu(t, i)) &&
                    0 !== (s = pe(t)) &&
                    ((i = s), (e = ou(t, s))),
                  1 === e))
              )
                throw ((n = Ll), du(t, 0), au(t, i), iu(t, Gt()), n);
              switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(t, Vl, Wl);
                  break;
                case 3:
                  if (
                    (au(t, i),
                    (130023424 & i) === i && 10 < (e = Bl + 500 - Gt()))
                  ) {
                    if (0 !== de(t, 0)) break;
                    if (((r = t.suspendedLanes) & i) !== i) {
                      (tu(), (t.pingedLanes |= t.suspendedLanes & r));
                      break;
                    }
                    t.timeoutHandle = ir(wu.bind(null, t, Vl, Wl), e);
                    break;
                  }
                  wu(t, Vl, Wl);
                  break;
                case 4:
                  if ((au(t, i), (4194240 & i) === i)) break;
                  for (e = t.eventTimes, r = -1; 0 < i; ) {
                    var a = 31 - se(i);
                    ((s = 1 << a), (a = e[a]) > r && (r = a), (i &= ~s));
                  }
                  if (
                    ((i = r),
                    10 <
                      (i =
                        (120 > (i = Gt() - i)
                          ? 120
                          : 480 > i
                            ? 480
                            : 1080 > i
                              ? 1080
                              : 1920 > i
                                ? 1920
                                : 3e3 > i
                                  ? 3e3
                                  : 4320 > i
                                    ? 4320
                                    : 1960 * kl(i / 1960)) - i))
                  ) {
                    t.timeoutHandle = ir(wu.bind(null, t, Vl, Wl), i);
                    break;
                  }
                  wu(t, Vl, Wl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return (iu(t, Gt()), t.callbackNode === n ? ru.bind(null, t) : null);
        }
        function ou(t, e) {
          var n = zl;
          return (
            t.current.memoizedState.isDehydrated && (du(t, e).flags |= 256),
            2 !== (t = gu(t, e)) && ((e = Vl), (Vl = n), null !== e && su(e)),
            t
          );
        }
        function su(t) {
          null === Vl ? (Vl = t) : Vl.push.apply(Vl, t);
        }
        function au(t, e) {
          for (
            e &= ~Il,
              e &= ~jl,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;

          ) {
            var n = 31 - se(e),
              i = 1 << n;
            ((t[n] = -1), (e &= ~i));
          }
        }
        function lu(t) {
          if (0 !== (6 & Cl)) throw Error(o(327));
          _u();
          var e = de(t, 0);
          if (0 === (1 & e)) return (iu(t, Gt()), null);
          var n = gu(t, e);
          if (0 !== t.tag && 2 === n) {
            var i = pe(t);
            0 !== i && ((e = i), (n = ou(t, i)));
          }
          if (1 === n) throw ((n = Ll), du(t, 0), au(t, e), iu(t, Gt()), n);
          if (6 === n) throw Error(o(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = e),
            wu(t, Vl, Wl),
            iu(t, Gt()),
            null
          );
        }
        function uu(t, e) {
          var n = Cl;
          Cl |= 1;
          try {
            return t(e);
          } finally {
            0 === (Cl = n) && ((Ul = Gt() + 500), zr && Ur());
          }
        }
        function cu(t) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & Cl) && _u();
          var e = Cl;
          Cl |= 1;
          var n = Ml.transition,
            i = be;
          try {
            if (((Ml.transition = null), (be = 1), t)) return t();
          } finally {
            ((be = i), (Ml.transition = n), 0 === (6 & (Cl = e)) && Ur());
          }
        }
        function hu() {
          ((Ol = Fl.current), Er(Fl));
        }
        function du(t, e) {
          ((t.finishedWork = null), (t.finishedLanes = 0));
          var n = t.timeoutHandle;
          if ((-1 !== n && ((t.timeoutHandle = -1), rr(n)), null !== Dl))
            for (n = Dl.return; null !== n; ) {
              var i = n;
              switch ((eo(i), i.tag)) {
                case 1:
                  null !== (i = i.type.childContextTypes) &&
                    void 0 !== i &&
                    Fr();
                  break;
                case 3:
                  (Go(), Er(Tr), Er(Cr), is());
                  break;
                case 5:
                  Zo(i);
                  break;
                case 4:
                  Go();
                  break;
                case 13:
                case 19:
                  Er(ts);
                  break;
                case 10:
                  Co(i.type._context);
                  break;
                case 22:
                case 23:
                  hu();
              }
              n = n.return;
            }
          if (
            ((Tl = t),
            (Dl = t = Fu(t.current, null)),
            (Al = Ol = e),
            (Rl = 0),
            (Ll = null),
            (Il = jl = Nl = 0),
            (Vl = zl = null),
            null !== Oo)
          ) {
            for (e = 0; e < Oo.length; e++)
              if (null !== (i = (n = Oo[e]).interleaved)) {
                n.interleaved = null;
                var r = i.next,
                  o = n.pending;
                if (null !== o) {
                  var s = o.next;
                  ((o.next = r), (i.next = s));
                }
                n.pending = i;
              }
            Oo = null;
          }
          return t;
        }
        function fu(t, e) {
          for (;;) {
            var n = Dl;
            try {
              if ((Mo(), (rs.current = Js), cs)) {
                for (var i = as.memoizedState; null !== i; ) {
                  var r = i.queue;
                  (null !== r && (r.pending = null), (i = i.next));
                }
                cs = !1;
              }
              if (
                ((ss = 0),
                (us = ls = as = null),
                (hs = !1),
                (ds = 0),
                (Pl.current = null),
                null === n || null === n.return)
              ) {
                ((Rl = 1), (Ll = e), (Dl = null));
                break;
              }
              t: {
                var s = t,
                  a = n.return,
                  l = n,
                  u = e;
                if (
                  ((e = Al),
                  (l.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    h = l,
                    d = h.tag;
                  if (0 === (1 & h.mode) && (0 === d || 11 === d || 15 === d)) {
                    var f = h.alternate;
                    f
                      ? ((h.updateQueue = f.updateQueue),
                        (h.memoizedState = f.memoizedState),
                        (h.lanes = f.lanes))
                      : ((h.updateQueue = null), (h.memoizedState = null));
                  }
                  var p = ga(a);
                  if (null !== p) {
                    ((p.flags &= -257),
                      va(p, a, l, 0, e),
                      1 & p.mode && ma(s, c, e),
                      (u = c));
                    var m = (e = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      (g.add(u), (e.updateQueue = g));
                    } else m.add(u);
                    break t;
                  }
                  if (0 === (1 & e)) {
                    (ma(s, c, e), mu());
                    break t;
                  }
                  u = Error(o(426));
                } else if (ro && 1 & l.mode) {
                  var v = ga(a);
                  if (null !== v) {
                    (0 === (65536 & v.flags) && (v.flags |= 256),
                      va(v, a, l, 0, e),
                      mo(ua(u, l)));
                    break t;
                  }
                }
                ((s = u = ua(u, l)),
                  4 !== Rl && (Rl = 2),
                  null === zl ? (zl = [s]) : zl.push(s),
                  (s = a));
                do {
                  switch (s.tag) {
                    case 3:
                      ((s.flags |= 65536),
                        (e &= -e),
                        (s.lanes |= e),
                        Uo(s, fa(0, u, e)));
                      break t;
                    case 1:
                      l = u;
                      var y = s.type,
                        b = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Yl || !Yl.has(b))))
                      ) {
                        ((s.flags |= 65536),
                          (e &= -e),
                          (s.lanes |= e),
                          Uo(s, pa(s, l, e)));
                        break t;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              xu(n);
            } catch (x) {
              ((e = x), Dl === n && null !== n && (Dl = n = n.return));
              continue;
            }
            break;
          }
        }
        function pu() {
          var t = El.current;
          return ((El.current = Js), null === t ? Js : t);
        }
        function mu() {
          ((0 !== Rl && 3 !== Rl && 2 !== Rl) || (Rl = 4),
            null === Tl ||
              (0 === (268435455 & Nl) && 0 === (268435455 & jl)) ||
              au(Tl, Al));
        }
        function gu(t, e) {
          var n = Cl;
          Cl |= 2;
          var i = pu();
          for ((Tl === t && Al === e) || ((Wl = null), du(t, e)); ; )
            try {
              vu();
              break;
            } catch (r) {
              fu(t, r);
            }
          if ((Mo(), (Cl = n), (El.current = i), null !== Dl))
            throw Error(o(261));
          return ((Tl = null), (Al = 0), Rl);
        }
        function vu() {
          for (; null !== Dl; ) bu(Dl);
        }
        function yu() {
          for (; null !== Dl && !Xt(); ) bu(Dl);
        }
        function bu(t) {
          var e = Sl(t.alternate, t, Ol);
          ((t.memoizedProps = t.pendingProps),
            null === e ? xu(t) : (Dl = e),
            (Pl.current = null));
        }
        function xu(t) {
          var e = t;
          do {
            var n = e.alternate;
            if (((t = e.return), 0 === (32768 & e.flags))) {
              if (null !== (n = qa(n, e, Ol))) return void (Dl = n);
            } else {
              if (null !== (n = Ka(n, e)))
                return ((n.flags &= 32767), void (Dl = n));
              if (null === t) return ((Rl = 6), void (Dl = null));
              ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
            }
            if (null !== (e = e.sibling)) return void (Dl = e);
            Dl = e = t;
          } while (null !== e);
          0 === Rl && (Rl = 5);
        }
        function wu(t, e, n) {
          var i = be,
            r = Ml.transition;
          try {
            ((Ml.transition = null),
              (be = 1),
              (function (t, e, n, i) {
                do {
                  _u();
                } while (null !== Kl);
                if (0 !== (6 & Cl)) throw Error(o(327));
                n = t.finishedWork;
                var r = t.finishedLanes;
                if (null === n) return null;
                if (
                  ((t.finishedWork = null),
                  (t.finishedLanes = 0),
                  n === t.current)
                )
                  throw Error(o(177));
                ((t.callbackNode = null), (t.callbackPriority = 0));
                var s = n.lanes | n.childLanes;
                if (
                  ((function (t, e) {
                    var n = t.pendingLanes & ~e;
                    ((t.pendingLanes = e),
                      (t.suspendedLanes = 0),
                      (t.pingedLanes = 0),
                      (t.expiredLanes &= e),
                      (t.mutableReadLanes &= e),
                      (t.entangledLanes &= e),
                      (e = t.entanglements));
                    var i = t.eventTimes;
                    for (t = t.expirationTimes; 0 < n; ) {
                      var r = 31 - se(n),
                        o = 1 << r;
                      ((e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~o));
                    }
                  })(t, s),
                  t === Tl && ((Dl = Tl = null), (Al = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    ql ||
                    ((ql = !0),
                    Tu(ee, function () {
                      return (_u(), null);
                    })),
                  (s = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || s)
                ) {
                  ((s = Ml.transition), (Ml.transition = null));
                  var a = be;
                  be = 1;
                  var l = Cl;
                  ((Cl |= 4),
                    (Pl.current = null),
                    (function (t, e) {
                      if (((tr = He), fi((t = di())))) {
                        if ('selectionStart' in t)
                          var n = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        else
                          t: {
                            var i =
                              (n =
                                ((n = t.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (i && 0 !== i.rangeCount) {
                              n = i.anchorNode;
                              var r = i.anchorOffset,
                                s = i.focusNode;
                              i = i.focusOffset;
                              try {
                                (n.nodeType, s.nodeType);
                              } catch (w) {
                                n = null;
                                break t;
                              }
                              var a = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                h = 0,
                                d = t,
                                f = null;
                              e: for (;;) {
                                for (
                                  var p;
                                  d !== n ||
                                    (0 !== r && 3 !== d.nodeType) ||
                                    (l = a + r),
                                    d !== s ||
                                      (0 !== i && 3 !== d.nodeType) ||
                                      (u = a + i),
                                    3 === d.nodeType &&
                                      (a += d.nodeValue.length),
                                    null !== (p = d.firstChild);

                                )
                                  ((f = d), (d = p));
                                for (;;) {
                                  if (d === t) break e;
                                  if (
                                    (f === n && ++c === r && (l = a),
                                    f === s && ++h === i && (u = a),
                                    null !== (p = d.nextSibling))
                                  )
                                    break;
                                  f = (d = f).parentNode;
                                }
                                d = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        er = { focusedElem: t, selectionRange: n },
                          He = !1,
                          Ja = e;
                        null !== Ja;

                      )
                        if (
                          ((t = (e = Ja).child),
                          0 !== (1028 & e.subtreeFlags) && null !== t)
                        )
                          ((t.return = e), (Ja = t));
                        else
                          for (; null !== Ja; ) {
                            e = Ja;
                            try {
                              var m = e.alternate;
                              if (0 !== (1024 & e.flags))
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = e.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? g
                                            : na(e.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = e.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              ku(e, e.return, w);
                            }
                            if (null !== (t = e.sibling)) {
                              ((t.return = e.return), (Ja = t));
                              break;
                            }
                            Ja = e.return;
                          }
                      ((m = el), (el = !1));
                    })(t, n),
                    gl(n, t),
                    pi(er),
                    (He = !!tr),
                    (er = tr = null),
                    (t.current = n),
                    yl(n, t, r),
                    Qt(),
                    (Cl = l),
                    (be = a),
                    (Ml.transition = s));
                } else t.current = n;
                if (
                  (ql && ((ql = !1), (Kl = t), (Xl = r)),
                  (s = t.pendingLanes),
                  0 === s && (Yl = null),
                  (function (t) {
                    if (oe && 'function' === typeof oe.onCommitFiberRoot)
                      try {
                        oe.onCommitFiberRoot(
                          re,
                          t,
                          void 0,
                          128 === (128 & t.current.flags),
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  iu(t, Gt()),
                  null !== e)
                )
                  for (i = t.onRecoverableError, n = 0; n < e.length; n++)
                    ((r = e[n]),
                      i(r.value, {
                        componentStack: r.stack,
                        digest: r.digest,
                      }));
                if (Hl) throw ((Hl = !1), (t = $l), ($l = null), t);
                (0 !== (1 & Xl) && 0 !== t.tag && _u(),
                  (s = t.pendingLanes),
                  0 !== (1 & s)
                    ? t === Gl
                      ? Ql++
                      : ((Ql = 0), (Gl = t))
                    : (Ql = 0),
                  Ur());
              })(t, e, n, i));
          } finally {
            ((Ml.transition = r), (be = i));
          }
          return null;
        }
        function _u() {
          if (null !== Kl) {
            var t = xe(Xl),
              e = Ml.transition,
              n = be;
            try {
              if (((Ml.transition = null), (be = 16 > t ? 16 : t), null === Kl))
                var i = !1;
              else {
                if (((t = Kl), (Kl = null), (Xl = 0), 0 !== (6 & Cl)))
                  throw Error(o(331));
                var r = Cl;
                for (Cl |= 4, Ja = t.current; null !== Ja; ) {
                  var s = Ja,
                    a = s.child;
                  if (0 !== (16 & Ja.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Ja = c; null !== Ja; ) {
                          var h = Ja;
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, h, s);
                          }
                          var d = h.child;
                          if (null !== d) ((d.return = h), (Ja = d));
                          else
                            for (; null !== Ja; ) {
                              var f = (h = Ja).sibling,
                                p = h.return;
                              if ((ol(h), h === c)) {
                                Ja = null;
                                break;
                              }
                              if (null !== f) {
                                ((f.return = p), (Ja = f));
                                break;
                              }
                              Ja = p;
                            }
                        }
                      }
                      var m = s.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            ((g.sibling = null), (g = v));
                          } while (null !== g);
                        }
                      }
                      Ja = s;
                    }
                  }
                  if (0 !== (2064 & s.subtreeFlags) && null !== a)
                    ((a.return = s), (Ja = a));
                  else
                    t: for (; null !== Ja; ) {
                      if (0 !== (2048 & (s = Ja).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, s, s.return);
                        }
                      var y = s.sibling;
                      if (null !== y) {
                        ((y.return = s.return), (Ja = y));
                        break t;
                      }
                      Ja = s.return;
                    }
                }
                var b = t.current;
                for (Ja = b; null !== Ja; ) {
                  var x = (a = Ja).child;
                  if (0 !== (2064 & a.subtreeFlags) && null !== x)
                    ((x.return = a), (Ja = x));
                  else
                    t: for (a = b; null !== Ja; ) {
                      if (0 !== (2048 & (l = Ja).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              il(9, l);
                          }
                        } catch (_) {
                          ku(l, l.return, _);
                        }
                      if (l === a) {
                        Ja = null;
                        break t;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        ((w.return = l.return), (Ja = w));
                        break t;
                      }
                      Ja = l.return;
                    }
                }
                if (
                  ((Cl = r),
                  Ur(),
                  oe && 'function' === typeof oe.onPostCommitFiberRoot)
                )
                  try {
                    oe.onPostCommitFiberRoot(re, t);
                  } catch (_) {}
                i = !0;
              }
              return i;
            } finally {
              ((be = n), (Ml.transition = e));
            }
          }
          return !1;
        }
        function Su(t, e, n) {
          ((t = Vo(t, (e = fa(0, (e = ua(n, e)), 1)), 1)),
            (e = tu()),
            null !== t && (ve(t, 1, e), iu(t, e)));
        }
        function ku(t, e, n) {
          if (3 === t.tag) Su(t, t, n);
          else
            for (; null !== e; ) {
              if (3 === e.tag) {
                Su(e, t, n);
                break;
              }
              if (1 === e.tag) {
                var i = e.stateNode;
                if (
                  'function' === typeof e.type.getDerivedStateFromError ||
                  ('function' === typeof i.componentDidCatch &&
                    (null === Yl || !Yl.has(i)))
                ) {
                  ((e = Vo(e, (t = pa(e, (t = ua(n, t)), 1)), 1)),
                    (t = tu()),
                    null !== e && (ve(e, 1, t), iu(e, t)));
                  break;
                }
              }
              e = e.return;
            }
        }
        function Eu(t, e, n) {
          var i = t.pingCache;
          (null !== i && i.delete(e),
            (e = tu()),
            (t.pingedLanes |= t.suspendedLanes & n),
            Tl === t &&
              (Al & n) === n &&
              (4 === Rl ||
              (3 === Rl && (130023424 & Al) === Al && 500 > Gt() - Bl)
                ? du(t, 0)
                : (Il |= n)),
            iu(t, e));
        }
        function Pu(t, e) {
          0 === e &&
            (0 === (1 & t.mode)
              ? (e = 1)
              : ((e = ce), 0 === (130023424 & (ce <<= 1)) && (ce = 4194304)));
          var n = tu();
          null !== (t = Lo(t, e)) && (ve(t, e, n), iu(t, n));
        }
        function Mu(t) {
          var e = t.memoizedState,
            n = 0;
          (null !== e && (n = e.retryLane), Pu(t, n));
        }
        function Cu(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var i = t.stateNode,
                r = t.memoizedState;
              null !== r && (n = r.retryLane);
              break;
            case 19:
              i = t.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          (null !== i && i.delete(e), Pu(t, n));
        }
        function Tu(t, e) {
          return qt(t, e);
        }
        function Du(t, e, n, i) {
          ((this.tag = t),
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
            (this.pendingProps = e),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = i),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Au(t, e, n, i) {
          return new Du(t, e, n, i);
        }
        function Ou(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function Fu(t, e) {
          var n = t.alternate;
          return (
            null === n
              ? (((n = Au(t.tag, e, t.key, t.mode)).elementType =
                  t.elementType),
                (n.type = t.type),
                (n.stateNode = t.stateNode),
                (n.alternate = t),
                (t.alternate = n))
              : ((n.pendingProps = e),
                (n.type = t.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & t.flags),
            (n.childLanes = t.childLanes),
            (n.lanes = t.lanes),
            (n.child = t.child),
            (n.memoizedProps = t.memoizedProps),
            (n.memoizedState = t.memoizedState),
            (n.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (n.dependencies =
              null === e
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
            (n.sibling = t.sibling),
            (n.index = t.index),
            (n.ref = t.ref),
            n
          );
        }
        function Ru(t, e, n, i, r, s) {
          var a = 2;
          if (((i = t), 'function' === typeof t)) Ou(t) && (a = 1);
          else if ('string' === typeof t) a = 5;
          else
            t: switch (t) {
              case S:
                return Lu(n.children, r, s, e);
              case k:
                ((a = 8), (r |= 8));
                break;
              case E:
                return (
                  ((t = Au(12, n, e, 2 | r)).elementType = E),
                  (t.lanes = s),
                  t
                );
              case T:
                return (
                  ((t = Au(13, n, e, r)).elementType = T),
                  (t.lanes = s),
                  t
                );
              case D:
                return (
                  ((t = Au(19, n, e, r)).elementType = D),
                  (t.lanes = s),
                  t
                );
              case F:
                return Nu(n, r, s, e);
              default:
                if ('object' === typeof t && null !== t)
                  switch (t.$$typeof) {
                    case P:
                      a = 10;
                      break t;
                    case M:
                      a = 9;
                      break t;
                    case C:
                      a = 11;
                      break t;
                    case A:
                      a = 14;
                      break t;
                    case O:
                      ((a = 16), (i = null));
                      break t;
                  }
                throw Error(o(130, null == t ? t : typeof t, ''));
            }
          return (
            ((e = Au(a, n, e, r)).elementType = t),
            (e.type = i),
            (e.lanes = s),
            e
          );
        }
        function Lu(t, e, n, i) {
          return (((t = Au(7, t, i, e)).lanes = n), t);
        }
        function Nu(t, e, n, i) {
          return (
            ((t = Au(22, t, i, e)).elementType = F),
            (t.lanes = n),
            (t.stateNode = { isHidden: !1 }),
            t
          );
        }
        function ju(t, e, n) {
          return (((t = Au(6, t, null, e)).lanes = n), t);
        }
        function Iu(t, e, n) {
          return (
            ((e = Au(
              4,
              null !== t.children ? t.children : [],
              t.key,
              e,
            )).lanes = n),
            (e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            e
          );
        }
        function zu(t, e, n, i, r) {
          ((this.tag = e),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ge(0)),
            (this.expirationTimes = ge(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ge(0)),
            (this.identifierPrefix = i),
            (this.onRecoverableError = r),
            (this.mutableSourceEagerHydrationData = null));
        }
        function Vu(t, e, n, i, r, o, s, a, l) {
          return (
            (t = new zu(t, e, n, a, l)),
            1 === e ? ((e = 1), !0 === o && (e |= 8)) : (e = 0),
            (o = Au(3, null, null, e)),
            (t.current = o),
            (o.stateNode = t),
            (o.memoizedState = {
              element: i,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            jo(o),
            t
          );
        }
        function Bu(t) {
          if (!t) return Mr;
          t: {
            if (Ut((t = t._reactInternals)) !== t || 1 !== t.tag)
              throw Error(o(170));
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Or(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(o(171));
          }
          if (1 === t.tag) {
            var n = t.type;
            if (Or(n)) return Lr(t, n, e);
          }
          return e;
        }
        function Uu(t, e, n, i, r, o, s, a, l) {
          return (
            ((t = Vu(n, i, !0, t, 0, o, 0, a, l)).context = Bu(null)),
            (n = t.current),
            ((o = zo((i = tu()), (r = eu(n)))).callback =
              void 0 !== e && null !== e ? e : null),
            Vo(n, o, r),
            (t.current.lanes = r),
            ve(t, r, i),
            iu(t, i),
            t
          );
        }
        function Wu(t, e, n, i) {
          var r = e.current,
            o = tu(),
            s = eu(r);
          return (
            (n = Bu(n)),
            null === e.context ? (e.context = n) : (e.pendingContext = n),
            ((e = zo(o, s)).payload = { element: t }),
            null !== (i = void 0 === i ? null : i) && (e.callback = i),
            null !== (t = Vo(r, e, s)) && (nu(t, r, s, o), Bo(t, r, s)),
            s
          );
        }
        function Hu(t) {
          return (t = t.current).child
            ? (t.child.tag, t.child.stateNode)
            : null;
        }
        function $u(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var n = t.retryLane;
            t.retryLane = 0 !== n && n < e ? n : e;
          }
        }
        function Yu(t, e) {
          ($u(t, e), (t = t.alternate) && $u(t, e));
        }
        Sl = function (t, e, n) {
          if (null !== t)
            if (t.memoizedProps !== e.pendingProps || Tr.current) ba = !0;
            else {
              if (0 === (t.lanes & n) && 0 === (128 & e.flags))
                return (
                  (ba = !1),
                  (function (t, e, n) {
                    switch (e.tag) {
                      case 3:
                        (Ta(e), po());
                        break;
                      case 5:
                        Jo(e);
                        break;
                      case 1:
                        Or(e.type) && Nr(e);
                        break;
                      case 4:
                        Qo(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var i = e.type._context,
                          r = e.memoizedProps.value;
                        (Pr(So, i._currentValue), (i._currentValue = r));
                        break;
                      case 13:
                        if (null !== (i = e.memoizedState))
                          return null !== i.dehydrated
                            ? (Pr(ts, 1 & ts.current), (e.flags |= 128), null)
                            : 0 !== (n & e.child.childLanes)
                              ? ja(t, e, n)
                              : (Pr(ts, 1 & ts.current),
                                null !== (t = Ha(t, e, n)) ? t.sibling : null);
                        Pr(ts, 1 & ts.current);
                        break;
                      case 19:
                        if (
                          ((i = 0 !== (n & e.childLanes)),
                          0 !== (128 & t.flags))
                        ) {
                          if (i) return Ua(t, e, n);
                          e.flags |= 128;
                        }
                        if (
                          (null !== (r = e.memoizedState) &&
                            ((r.rendering = null),
                            (r.tail = null),
                            (r.lastEffect = null)),
                          Pr(ts, ts.current),
                          i)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return ((e.lanes = 0), ka(t, e, n));
                    }
                    return Ha(t, e, n);
                  })(t, e, n)
                );
              ba = 0 !== (131072 & t.flags);
            }
          else
            ((ba = !1), ro && 0 !== (1048576 & e.flags) && Zr(e, Yr, e.index));
          switch (((e.lanes = 0), e.tag)) {
            case 2:
              var i = e.type;
              (Wa(t, e), (t = e.pendingProps));
              var r = Ar(e, Cr.current);
              (Do(e, n), (r = gs(null, e, i, t, r, n)));
              var s = vs();
              return (
                (e.flags |= 1),
                'object' === typeof r &&
                null !== r &&
                'function' === typeof r.render &&
                void 0 === r.$$typeof
                  ? ((e.tag = 1),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    Or(i) ? ((s = !0), Nr(e)) : (s = !1),
                    (e.memoizedState =
                      null !== r.state && void 0 !== r.state ? r.state : null),
                    jo(e),
                    (r.updater = ra),
                    (e.stateNode = r),
                    (r._reactInternals = e),
                    la(e, i, t, n),
                    (e = Ca(null, e, i, !0, s, n)))
                  : ((e.tag = 0),
                    ro && s && to(e),
                    xa(null, e, r, n),
                    (e = e.child)),
                e
              );
            case 16:
              i = e.elementType;
              t: {
                switch (
                  (Wa(t, e),
                  (t = e.pendingProps),
                  (i = (r = i._init)(i._payload)),
                  (e.type = i),
                  (r = e.tag =
                    (function (t) {
                      if ('function' === typeof t) return Ou(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === C) return 11;
                        if (t === A) return 14;
                      }
                      return 2;
                    })(i)),
                  (t = na(i, t)),
                  r)
                ) {
                  case 0:
                    e = Pa(null, e, i, t, n);
                    break t;
                  case 1:
                    e = Ma(null, e, i, t, n);
                    break t;
                  case 11:
                    e = wa(null, e, i, t, n);
                    break t;
                  case 14:
                    e = _a(null, e, i, na(i.type, t), n);
                    break t;
                }
                throw Error(o(306, i, ''));
              }
              return e;
            case 0:
              return (
                (i = e.type),
                (r = e.pendingProps),
                Pa(t, e, i, (r = e.elementType === i ? r : na(i, r)), n)
              );
            case 1:
              return (
                (i = e.type),
                (r = e.pendingProps),
                Ma(t, e, i, (r = e.elementType === i ? r : na(i, r)), n)
              );
            case 3:
              t: {
                if ((Ta(e), null === t)) throw Error(o(387));
                ((i = e.pendingProps),
                  (r = (s = e.memoizedState).element),
                  Io(t, e),
                  Wo(e, i, null, n));
                var a = e.memoizedState;
                if (((i = a.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: i,
                      isDehydrated: !1,
                      cache: a.cache,
                      pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                      transitions: a.transitions,
                    }),
                    (e.updateQueue.baseState = s),
                    (e.memoizedState = s),
                    256 & e.flags)
                  ) {
                    e = Da(t, e, i, n, (r = ua(Error(o(423)), e)));
                    break t;
                  }
                  if (i !== r) {
                    e = Da(t, e, i, n, (r = ua(Error(o(424)), e)));
                    break t;
                  }
                  for (
                    io = ur(e.stateNode.containerInfo.firstChild),
                      no = e,
                      ro = !0,
                      oo = null,
                      n = _o(e, null, i, n),
                      e.child = n;
                    n;

                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((po(), i === r)) {
                    e = Ha(t, e, n);
                    break t;
                  }
                  xa(t, e, i, n);
                }
                e = e.child;
              }
              return e;
            case 5:
              return (
                Jo(e),
                null === t && uo(e),
                (i = e.type),
                (r = e.pendingProps),
                (s = null !== t ? t.memoizedProps : null),
                (a = r.children),
                nr(i, r)
                  ? (a = null)
                  : null !== s && nr(i, s) && (e.flags |= 32),
                Ea(t, e),
                xa(t, e, a, n),
                e.child
              );
            case 6:
              return (null === t && uo(e), null);
            case 13:
              return ja(t, e, n);
            case 4:
              return (
                Qo(e, e.stateNode.containerInfo),
                (i = e.pendingProps),
                null === t ? (e.child = wo(e, null, i, n)) : xa(t, e, i, n),
                e.child
              );
            case 11:
              return (
                (i = e.type),
                (r = e.pendingProps),
                wa(t, e, i, (r = e.elementType === i ? r : na(i, r)), n)
              );
            case 7:
              return (xa(t, e, e.pendingProps, n), e.child);
            case 8:
            case 12:
              return (xa(t, e, e.pendingProps.children, n), e.child);
            case 10:
              t: {
                if (
                  ((i = e.type._context),
                  (r = e.pendingProps),
                  (s = e.memoizedProps),
                  (a = r.value),
                  Pr(So, i._currentValue),
                  (i._currentValue = a),
                  null !== s)
                )
                  if (ai(s.value, a)) {
                    if (s.children === r.children && !Tr.current) {
                      e = Ha(t, e, n);
                      break t;
                    }
                  } else
                    for (
                      null !== (s = e.child) && (s.return = e);
                      null !== s;

                    ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        a = s.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === i) {
                            if (1 === s.tag) {
                              (u = zo(-1, n & -n)).tag = 2;
                              var c = s.updateQueue;
                              if (null !== c) {
                                var h = (c = c.shared).pending;
                                (null === h
                                  ? (u.next = u)
                                  : ((u.next = h.next), (h.next = u)),
                                  (c.pending = u));
                              }
                            }
                            ((s.lanes |= n),
                              null !== (u = s.alternate) && (u.lanes |= n),
                              To(s.return, n, e),
                              (l.lanes |= n));
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === s.tag)
                        a = s.type === e.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (a = s.return)) throw Error(o(341));
                        ((a.lanes |= n),
                          null !== (l = a.alternate) && (l.lanes |= n),
                          To(a, n, e),
                          (a = s.sibling));
                      } else a = s.child;
                      if (null !== a) a.return = s;
                      else
                        for (a = s; null !== a; ) {
                          if (a === e) {
                            a = null;
                            break;
                          }
                          if (null !== (s = a.sibling)) {
                            ((s.return = a.return), (a = s));
                            break;
                          }
                          a = a.return;
                        }
                      s = a;
                    }
                (xa(t, e, r.children, n), (e = e.child));
              }
              return e;
            case 9:
              return (
                (r = e.type),
                (i = e.pendingProps.children),
                Do(e, n),
                (i = i((r = Ao(r)))),
                (e.flags |= 1),
                xa(t, e, i, n),
                e.child
              );
            case 14:
              return (
                (r = na((i = e.type), e.pendingProps)),
                _a(t, e, i, (r = na(i.type, r)), n)
              );
            case 15:
              return Sa(t, e, e.type, e.pendingProps, n);
            case 17:
              return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : na(i, r)),
                Wa(t, e),
                (e.tag = 1),
                Or(i) ? ((t = !0), Nr(e)) : (t = !1),
                Do(e, n),
                sa(e, i, r),
                la(e, i, r, n),
                Ca(null, e, i, !0, t, n)
              );
            case 19:
              return Ua(t, e, n);
            case 22:
              return ka(t, e, n);
          }
          throw Error(o(156, e.tag));
        };
        var qu =
          'function' === typeof reportError
            ? reportError
            : function (t) {
                console.error(t);
              };
        function Ku(t) {
          this._internalRoot = t;
        }
        function Xu(t) {
          this._internalRoot = t;
        }
        function Qu(t) {
          return !(
            !t ||
            (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
          );
        }
        function Gu(t) {
          return !(
            !t ||
            (1 !== t.nodeType &&
              9 !== t.nodeType &&
              11 !== t.nodeType &&
              (8 !== t.nodeType ||
                ' react-mount-point-unstable ' !== t.nodeValue))
          );
        }
        function Ju() {}
        function Zu(t, e, n, i, r) {
          var o = n._reactRootContainer;
          if (o) {
            var s = o;
            if ('function' === typeof r) {
              var a = r;
              r = function () {
                var t = Hu(s);
                a.call(t);
              };
            }
            Wu(e, s, t, r);
          } else
            s = (function (t, e, n, i, r) {
              if (r) {
                if ('function' === typeof i) {
                  var o = i;
                  i = function () {
                    var t = Hu(s);
                    o.call(t);
                  };
                }
                var s = Uu(e, i, t, 0, null, !1, 0, '', Ju);
                return (
                  (t._reactRootContainer = s),
                  (t[pr] = s.current),
                  Ui(8 === t.nodeType ? t.parentNode : t),
                  cu(),
                  s
                );
              }
              for (; (r = t.lastChild); ) t.removeChild(r);
              if ('function' === typeof i) {
                var a = i;
                i = function () {
                  var t = Hu(l);
                  a.call(t);
                };
              }
              var l = Vu(t, 0, !1, null, 0, !1, 0, '', Ju);
              return (
                (t._reactRootContainer = l),
                (t[pr] = l.current),
                Ui(8 === t.nodeType ? t.parentNode : t),
                cu(function () {
                  Wu(e, l, n, i);
                }),
                l
              );
            })(n, e, t, r, i);
          return Hu(s);
        }
        ((Xu.prototype.render = Ku.prototype.render =
          function (t) {
            var e = this._internalRoot;
            if (null === e) throw Error(o(409));
            Wu(t, e, null, null);
          }),
          (Xu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var t = this._internalRoot;
              if (null !== t) {
                this._internalRoot = null;
                var e = t.containerInfo;
                (cu(function () {
                  Wu(null, t, null, null);
                }),
                  (e[pr] = null));
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (t) {
            if (t) {
              var e = ke();
              t = { blockedOn: null, target: t, priority: e };
              for (
                var n = 0;
                n < Fe.length && 0 !== e && e < Fe[n].priority;
                n++
              );
              (Fe.splice(n, 0, t), 0 === n && je(t));
            }
          }),
          (we = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var n = he(e.pendingLanes);
                  0 !== n &&
                    (ye(e, 1 | n),
                    iu(e, Gt()),
                    0 === (6 & Cl) && ((Ul = Gt() + 500), Ur()));
                }
                break;
              case 13:
                (cu(function () {
                  var e = Lo(t, 1);
                  if (null !== e) {
                    var n = tu();
                    nu(e, t, 1, n);
                  }
                }),
                  Yu(t, 1));
            }
          }),
          (_e = function (t) {
            if (13 === t.tag) {
              var e = Lo(t, 134217728);
              if (null !== e) nu(e, t, 134217728, tu());
              Yu(t, 134217728);
            }
          }),
          (Se = function (t) {
            if (13 === t.tag) {
              var e = eu(t),
                n = Lo(t, e);
              if (null !== n) nu(n, t, e, tu());
              Yu(t, e);
            }
          }),
          (ke = function () {
            return be;
          }),
          (Ee = function (t, e) {
            var n = be;
            try {
              return ((be = t), e());
            } finally {
              be = n;
            }
          }),
          (_t = function (t, e, n) {
            switch (e) {
              case 'input':
                if ((J(t, n), (e = n.name), 'radio' === n.type && null != e)) {
                  for (n = t; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + e) +
                        '][type="radio"]',
                    ),
                      e = 0;
                    e < n.length;
                    e++
                  ) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                      var r = wr(i);
                      if (!r) throw Error(o(90));
                      (q(i), J(i, r));
                    }
                  }
                }
                break;
              case 'textarea':
                ot(t, n);
                break;
              case 'select':
                null != (e = n.value) && nt(t, !!n.multiple, e, !1);
            }
          }),
          (Ct = uu),
          (Tt = cu));
        var tc = {
            usingClientEntryPoint: !1,
            Events: [br, xr, wr, Pt, Mt, uu],
          },
          ec = {
            findFiberByHostInstance: yr,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: ec.bundleType,
            version: ec.version,
            rendererPackageName: ec.rendererPackageName,
            rendererConfig: ec.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (t) {
              return null === (t = $t(t)) ? null : t.stateNode;
            },
            findFiberByHostInstance:
              ec.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              ((re = ic.inject(nc)), (oe = ic));
            } catch (ct) {}
        }
        ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (e.createPortal = function (t, e) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qu(e)) throw Error(o(200));
            return (function (t, e, n) {
              var i =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == i ? null : '' + i,
                children: t,
                containerInfo: e,
                implementation: n,
              };
            })(t, e, null, n);
          }),
          (e.createRoot = function (t, e) {
            if (!Qu(t)) throw Error(o(299));
            var n = !1,
              i = '',
              r = qu;
            return (
              null !== e &&
                void 0 !== e &&
                (!0 === e.unstable_strictMode && (n = !0),
                void 0 !== e.identifierPrefix && (i = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (r = e.onRecoverableError)),
              (e = Vu(t, 1, !1, null, 0, n, 0, i, r)),
              (t[pr] = e.current),
              Ui(8 === t.nodeType ? t.parentNode : t),
              new Ku(e)
            );
          }),
          (e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ('function' === typeof t.render) throw Error(o(188));
              throw ((t = Object.keys(t).join(',')), Error(o(268, t)));
            }
            return (t = null === (t = $t(e)) ? null : t.stateNode);
          }),
          (e.flushSync = function (t) {
            return cu(t);
          }),
          (e.hydrate = function (t, e, n) {
            if (!Gu(e)) throw Error(o(200));
            return Zu(null, t, e, !0, n);
          }),
          (e.hydrateRoot = function (t, e, n) {
            if (!Qu(t)) throw Error(o(405));
            var i = (null != n && n.hydratedSources) || null,
              r = !1,
              s = '',
              a = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (s = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (e = Uu(e, null, t, 1, null != n ? n : null, r, 0, s, a)),
              (t[pr] = e.current),
              Ui(t),
              i)
            )
              for (t = 0; t < i.length; t++)
                ((r = (r = (n = i[t])._getVersion)(n._source)),
                  null == e.mutableSourceEagerHydrationData
                    ? (e.mutableSourceEagerHydrationData = [n, r])
                    : e.mutableSourceEagerHydrationData.push(n, r));
            return new Xu(e);
          }),
          (e.render = function (t, e, n) {
            if (!Gu(e)) throw Error(o(200));
            return Zu(null, t, e, !1, n);
          }),
          (e.unmountComponentAtNode = function (t) {
            if (!Gu(t)) throw Error(o(40));
            return (
              !!t._reactRootContainer &&
              (cu(function () {
                Zu(null, null, t, !1, function () {
                  ((t._reactRootContainer = null), (t[pr] = null));
                });
              }),
              !0)
            );
          }),
          (e.unstable_batchedUpdates = uu),
          (e.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
            if (!Gu(n)) throw Error(o(200));
            if (null == t || void 0 === t._reactInternals) throw Error(o(38));
            return Zu(t, e, n, !1, i);
          }),
          (e.version = '18.3.1-next-f1338f8080-20240426'));
      },
      853: (t, e, n) => {
        t.exports = n(234);
      },
      950: (t, e, n) => {
        (!(function t() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (e) {
              console.error(e);
            }
        })(),
          (t.exports = n(730)));
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var o = (e[i] = { exports: {} });
    return (t[i](o, o.exports, n), o.exports);
  }
  ((() => {
    var t,
      e = Object.getPrototypeOf
        ? (t) => Object.getPrototypeOf(t)
        : (t) => t.__proto__;
    n.t = function (i, r) {
      if ((1 & r && (i = this(i)), 8 & r)) return i;
      if ('object' === typeof i && i) {
        if (4 & r && i.__esModule) return i;
        if (16 & r && 'function' === typeof i.then) return i;
      }
      var o = Object.create(null);
      n.r(o);
      var s = {};
      t = t || [null, e({}), e([]), e(e)];
      for (var a = 2 & r && i; 'object' == typeof a && !~t.indexOf(a); a = e(a))
        Object.getOwnPropertyNames(a).forEach((t) => (s[t] = () => i[t]));
      return ((s.default = () => i), n.d(o, s), o);
    };
  })(),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      ('undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 }));
    }));
  var i = {};
  (n.r(i),
    n.d(i, {
      hasBrowserEnv: () => Zu,
      hasStandardBrowserEnv: () => ec,
      hasStandardBrowserWebWorkerEnv: () => nc,
      navigator: () => tc,
      origin: () => ic,
    }));
  var r,
    o = n(43),
    s = n.t(o, 2),
    a = n(391);
  function l() {
    return (
      (l = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      l.apply(this, arguments)
    );
  }
  !(function (t) {
    ((t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE'));
  })(r || (r = {}));
  const u = 'popstate';
  function c(t, e) {
    if (!1 === t || null === t || 'undefined' === typeof t) throw new Error(e);
  }
  function h(t, e) {
    if (!t) {
      'undefined' !== typeof console && console.warn(e);
      try {
        throw new Error(e);
      } catch (n) {}
    }
  }
  function d(t, e) {
    return { usr: t.state, key: t.key, idx: e };
  }
  function f(t, e, n, i) {
    return (
      void 0 === n && (n = null),
      l(
        {
          pathname: 'string' === typeof t ? t : t.pathname,
          search: '',
          hash: '',
        },
        'string' === typeof e ? m(e) : e,
        {
          state: n,
          key: (e && e.key) || i || Math.random().toString(36).substr(2, 8),
        },
      )
    );
  }
  function p(t) {
    let { pathname: e = '/', search: n = '', hash: i = '' } = t;
    return (
      n && '?' !== n && (e += '?' === n.charAt(0) ? n : '?' + n),
      i && '#' !== i && (e += '#' === i.charAt(0) ? i : '#' + i),
      e
    );
  }
  function m(t) {
    let e = {};
    if (t) {
      let n = t.indexOf('#');
      n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
      let i = t.indexOf('?');
      (i >= 0 && ((e.search = t.substr(i)), (t = t.substr(0, i))),
        t && (e.pathname = t));
    }
    return e;
  }
  function g(t, e, n, i) {
    void 0 === i && (i = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = i,
      a = o.history,
      h = r.Pop,
      m = null,
      g = v();
    function v() {
      return (a.state || { idx: null }).idx;
    }
    function y() {
      h = r.Pop;
      let t = v(),
        e = null == t ? null : t - g;
      ((g = t), m && m({ action: h, location: x.location, delta: e }));
    }
    function b(t) {
      let e =
          'null' !== o.location.origin ? o.location.origin : o.location.href,
        n = 'string' === typeof t ? t : p(t);
      return (
        (n = n.replace(/ $/, '%20')),
        c(
          e,
          'No window.location.(origin|href) available to create URL for href: ' +
            n,
        ),
        new URL(n, e)
      );
    }
    null == g && ((g = 0), a.replaceState(l({}, a.state, { idx: g }), ''));
    let x = {
      get action() {
        return h;
      },
      get location() {
        return t(o, a);
      },
      listen(t) {
        if (m) throw new Error('A history only accepts one active listener');
        return (
          o.addEventListener(u, y),
          (m = t),
          () => {
            (o.removeEventListener(u, y), (m = null));
          }
        );
      },
      createHref: (t) => e(o, t),
      createURL: b,
      encodeLocation(t) {
        let e = b(t);
        return { pathname: e.pathname, search: e.search, hash: e.hash };
      },
      push: function (t, e) {
        h = r.Push;
        let i = f(x.location, t, e);
        (n && n(i, t), (g = v() + 1));
        let l = d(i, g),
          u = x.createHref(i);
        try {
          a.pushState(l, '', u);
        } catch (c) {
          if (c instanceof DOMException && 'DataCloneError' === c.name) throw c;
          o.location.assign(u);
        }
        s && m && m({ action: h, location: x.location, delta: 1 });
      },
      replace: function (t, e) {
        h = r.Replace;
        let i = f(x.location, t, e);
        (n && n(i, t), (g = v()));
        let o = d(i, g),
          l = x.createHref(i);
        (a.replaceState(o, '', l),
          s && m && m({ action: h, location: x.location, delta: 0 }));
      },
      go: (t) => a.go(t),
    };
    return x;
  }
  var v;
  !(function (t) {
    ((t.data = 'data'),
      (t.deferred = 'deferred'),
      (t.redirect = 'redirect'),
      (t.error = 'error'));
  })(v || (v = {}));
  new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
  function y(t, e, n) {
    return (void 0 === n && (n = '/'), b(t, e, n, !1));
  }
  function b(t, e, n, i) {
    let r = F(('string' === typeof e ? m(e) : e).pathname || '/', n);
    if (null == r) return null;
    let o = x(t);
    !(function (t) {
      t.sort((t, e) =>
        t.score !== e.score
          ? e.score - t.score
          : (function (t, e) {
              let n =
                t.length === e.length &&
                t.slice(0, -1).every((t, n) => t === e[n]);
              return n ? t[t.length - 1] - e[e.length - 1] : 0;
            })(
              t.routesMeta.map((t) => t.childrenIndex),
              e.routesMeta.map((t) => t.childrenIndex),
            ),
      );
    })(o);
    let s = null;
    for (let a = 0; null == s && a < o.length; ++a) {
      let t = O(r);
      s = D(o[a], t, i);
    }
    return s;
  }
  function x(t, e, n, i) {
    (void 0 === e && (e = []),
      void 0 === n && (n = []),
      void 0 === i && (i = ''));
    let r = (t, r, o) => {
      let s = {
        relativePath: void 0 === o ? t.path || '' : o,
        caseSensitive: !0 === t.caseSensitive,
        childrenIndex: r,
        route: t,
      };
      s.relativePath.startsWith('/') &&
        (c(
          s.relativePath.startsWith(i),
          'Absolute route path "' +
            s.relativePath +
            '" nested under path "' +
            i +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
        ),
        (s.relativePath = s.relativePath.slice(i.length)));
      let a = I([i, s.relativePath]),
        l = n.concat(s);
      (t.children &&
        t.children.length > 0 &&
        (c(
          !0 !== t.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            a +
            '".',
        ),
        x(t.children, e, l, a)),
        (null != t.path || t.index) &&
          e.push({ path: a, score: T(a, t.index), routesMeta: l }));
    };
    return (
      t.forEach((t, e) => {
        var n;
        if ('' !== t.path && null != (n = t.path) && n.includes('?'))
          for (let i of w(t.path)) r(t, e, i);
        else r(t, e);
      }),
      e
    );
  }
  function w(t) {
    let e = t.split('/');
    if (0 === e.length) return [];
    let [n, ...i] = e,
      r = n.endsWith('?'),
      o = n.replace(/\?$/, '');
    if (0 === i.length) return r ? [o, ''] : [o];
    let s = w(i.join('/')),
      a = [];
    return (
      a.push(...s.map((t) => ('' === t ? o : [o, t].join('/')))),
      r && a.push(...s),
      a.map((e) => (t.startsWith('/') && '' === e ? '/' : e))
    );
  }
  const _ = /^:[\w-]+$/,
    S = 3,
    k = 2,
    E = 1,
    P = 10,
    M = -2,
    C = (t) => '*' === t;
  function T(t, e) {
    let n = t.split('/'),
      i = n.length;
    return (
      n.some(C) && (i += M),
      e && (i += k),
      n
        .filter((t) => !C(t))
        .reduce((t, e) => t + (_.test(e) ? S : '' === e ? E : P), i)
    );
  }
  function D(t, e, n) {
    void 0 === n && (n = !1);
    let { routesMeta: i } = t,
      r = {},
      o = '/',
      s = [];
    for (let a = 0; a < i.length; ++a) {
      let t = i[a],
        l = a === i.length - 1,
        u = '/' === o ? e : e.slice(o.length) || '/',
        c = A(
          { path: t.relativePath, caseSensitive: t.caseSensitive, end: l },
          u,
        ),
        h = t.route;
      if (
        (!c &&
          l &&
          n &&
          !i[i.length - 1].route.index &&
          (c = A(
            { path: t.relativePath, caseSensitive: t.caseSensitive, end: !1 },
            u,
          )),
        !c)
      )
        return null;
      (Object.assign(r, c.params),
        s.push({
          params: r,
          pathname: I([o, c.pathname]),
          pathnameBase: z(I([o, c.pathnameBase])),
          route: h,
        }),
        '/' !== c.pathnameBase && (o = I([o, c.pathnameBase])));
    }
    return s;
  }
  function A(t, e) {
    'string' === typeof t && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, i] = (function (t, e, n) {
        void 0 === e && (e = !1);
        void 0 === n && (n = !0);
        h(
          '*' === t || !t.endsWith('*') || t.endsWith('/*'),
          'Route path "' +
            t +
            '" will be treated as if it were "' +
            t.replace(/\*$/, '/*') +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            t.replace(/\*$/, '/*') +
            '".',
        );
        let i = [],
          r =
            '^' +
            t
              .replace(/\/*\*?$/, '')
              .replace(/^\/*/, '/')
              .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (t, e, n) => (
                  i.push({ paramName: e, isOptional: null != n }),
                  n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                ),
              );
        t.endsWith('*')
          ? (i.push({ paramName: '*' }),
            (r += '*' === t || '/*' === t ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
          : n
            ? (r += '\\/*$')
            : '' !== t && '/' !== t && (r += '(?:(?=\\/|$))');
        let o = new RegExp(r, e ? void 0 : 'i');
        return [o, i];
      })(t.path, t.caseSensitive, t.end),
      r = e.match(n);
    if (!r) return null;
    let o = r[0],
      s = o.replace(/(.)\/+$/, '$1'),
      a = r.slice(1),
      l = i.reduce((t, e, n) => {
        let { paramName: i, isOptional: r } = e;
        if ('*' === i) {
          let t = a[n] || '';
          s = o.slice(0, o.length - t.length).replace(/(.)\/+$/, '$1');
        }
        const l = a[n];
        return ((t[i] = r && !l ? void 0 : (l || '').replace(/%2F/g, '/')), t);
      }, {});
    return { params: l, pathname: o, pathnameBase: s, pattern: t };
  }
  function O(t) {
    try {
      return t
        .split('/')
        .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
        .join('/');
    } catch (e) {
      return (
        h(
          !1,
          'The URL path "' +
            t +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            e +
            ').',
        ),
        t
      );
    }
  }
  function F(t, e) {
    if ('/' === e) return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith('/') ? e.length - 1 : e.length,
      i = t.charAt(n);
    return i && '/' !== i ? null : t.slice(n) || '/';
  }
  function R(t, e, n, i) {
    return (
      "Cannot include a '" +
      t +
      "' character in a manually specified `to." +
      e +
      '` field [' +
      JSON.stringify(i) +
      '].  Please separate it out to the `to.' +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function L(t) {
    return t.filter(
      (t, e) => 0 === e || (t.route.path && t.route.path.length > 0),
    );
  }
  function N(t, e) {
    let n = L(t);
    return e
      ? n.map((t, e) => (e === n.length - 1 ? t.pathname : t.pathnameBase))
      : n.map((t) => t.pathnameBase);
  }
  function j(t, e, n, i) {
    let r;
    (void 0 === i && (i = !1),
      'string' === typeof t
        ? (r = m(t))
        : ((r = l({}, t)),
          c(
            !r.pathname || !r.pathname.includes('?'),
            R('?', 'pathname', 'search', r),
          ),
          c(
            !r.pathname || !r.pathname.includes('#'),
            R('#', 'pathname', 'hash', r),
          ),
          c(
            !r.search || !r.search.includes('#'),
            R('#', 'search', 'hash', r),
          )));
    let o,
      s = '' === t || '' === r.pathname,
      a = s ? '/' : r.pathname;
    if (null == a) o = n;
    else {
      let t = e.length - 1;
      if (!i && a.startsWith('..')) {
        let e = a.split('/');
        for (; '..' === e[0]; ) (e.shift(), (t -= 1));
        r.pathname = e.join('/');
      }
      o = t >= 0 ? e[t] : '/';
    }
    let u = (function (t, e) {
        void 0 === e && (e = '/');
        let {
            pathname: n,
            search: i = '',
            hash: r = '',
          } = 'string' === typeof t ? m(t) : t,
          o = n
            ? n.startsWith('/')
              ? n
              : (function (t, e) {
                  let n = e.replace(/\/+$/, '').split('/');
                  return (
                    t.split('/').forEach((t) => {
                      '..' === t
                        ? n.length > 1 && n.pop()
                        : '.' !== t && n.push(t);
                    }),
                    n.length > 1 ? n.join('/') : '/'
                  );
                })(n, e)
            : e;
        return { pathname: o, search: V(i), hash: B(r) };
      })(r, o),
      h = a && '/' !== a && a.endsWith('/'),
      d = (s || '.' === a) && n.endsWith('/');
    return (u.pathname.endsWith('/') || (!h && !d) || (u.pathname += '/'), u);
  }
  const I = (t) => t.join('/').replace(/\/\/+/g, '/'),
    z = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
    V = (t) => (t && '?' !== t ? (t.startsWith('?') ? t : '?' + t) : ''),
    B = (t) => (t && '#' !== t ? (t.startsWith('#') ? t : '#' + t) : '');
  Error;
  function U(t) {
    return (
      null != t &&
      'number' === typeof t.status &&
      'string' === typeof t.statusText &&
      'boolean' === typeof t.internal &&
      'data' in t
    );
  }
  const W = ['post', 'put', 'patch', 'delete'],
    H = (new Set(W), ['get', ...W]);
  (new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]));
  Symbol('deferred');
  function $() {
    return (
      ($ = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      $.apply(this, arguments)
    );
  }
  const Y = o.createContext(null);
  const q = o.createContext(null);
  const K = o.createContext(null);
  const X = o.createContext(null);
  const Q = o.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const G = o.createContext(null);
  function J() {
    return null != o.useContext(X);
  }
  function Z() {
    return (J() || c(!1), o.useContext(X).location);
  }
  function tt(t) {
    o.useContext(K).static || o.useLayoutEffect(t);
  }
  function et() {
    let { isDataRoute: t } = o.useContext(Q);
    return t
      ? (function () {
          let { router: t } = ct(lt.UseNavigateStable),
            e = dt(ut.UseNavigateStable),
            n = o.useRef(!1);
          tt(() => {
            n.current = !0;
          });
          let i = o.useCallback(
            function (i, r) {
              (void 0 === r && (r = {}),
                n.current &&
                  ('number' === typeof i
                    ? t.navigate(i)
                    : t.navigate(i, $({ fromRouteId: e }, r))));
            },
            [t, e],
          );
          return i;
        })()
      : (function () {
          J() || c(!1);
          let t = o.useContext(Y),
            { basename: e, future: n, navigator: i } = o.useContext(K),
            { matches: r } = o.useContext(Q),
            { pathname: s } = Z(),
            a = JSON.stringify(N(r, n.v7_relativeSplatPath)),
            l = o.useRef(!1);
          tt(() => {
            l.current = !0;
          });
          let u = o.useCallback(
            function (n, r) {
              if ((void 0 === r && (r = {}), !l.current)) return;
              if ('number' === typeof n) return void i.go(n);
              let o = j(n, JSON.parse(a), s, 'path' === r.relative);
              (null == t &&
                '/' !== e &&
                (o.pathname = '/' === o.pathname ? e : I([e, o.pathname])),
                (r.replace ? i.replace : i.push)(o, r.state, r));
            },
            [e, i, a, s, t],
          );
          return u;
        })();
  }
  function nt(t, e, n, i) {
    J() || c(!1);
    let { navigator: s } = o.useContext(K),
      { matches: a } = o.useContext(Q),
      l = a[a.length - 1],
      u = l ? l.params : {},
      h = (l && l.pathname, l ? l.pathnameBase : '/');
    l && l.route;
    let d,
      f = Z();
    if (e) {
      var p;
      let t = 'string' === typeof e ? m(e) : e;
      ('/' === h ||
        (null == (p = t.pathname) ? void 0 : p.startsWith(h)) ||
        c(!1),
        (d = t));
    } else d = f;
    let g = d.pathname || '/',
      v = g;
    if ('/' !== h) {
      let t = h.replace(/^\//, '').split('/');
      v = '/' + g.replace(/^\//, '').split('/').slice(t.length).join('/');
    }
    let b = y(t, { pathname: v });
    let x = at(
      b &&
        b.map((t) =>
          Object.assign({}, t, {
            params: Object.assign({}, u, t.params),
            pathname: I([
              h,
              s.encodeLocation
                ? s.encodeLocation(t.pathname).pathname
                : t.pathname,
            ]),
            pathnameBase:
              '/' === t.pathnameBase
                ? h
                : I([
                    h,
                    s.encodeLocation
                      ? s.encodeLocation(t.pathnameBase).pathname
                      : t.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      i,
    );
    return e && x
      ? o.createElement(
          X.Provider,
          {
            value: {
              location: $(
                {
                  pathname: '/',
                  search: '',
                  hash: '',
                  state: null,
                  key: 'default',
                },
                d,
              ),
              navigationType: r.Pop,
            },
          },
          x,
        )
      : x;
  }
  function it() {
    let t = (function () {
        var t;
        let e = o.useContext(G),
          n = ht(ut.UseRouteError),
          i = dt(ut.UseRouteError);
        if (void 0 !== e) return e;
        return null == (t = n.errors) ? void 0 : t[i];
      })(),
      e = U(t)
        ? t.status + ' ' + t.statusText
        : t instanceof Error
          ? t.message
          : JSON.stringify(t),
      n = t instanceof Error ? t.stack : null,
      i = 'rgba(200,200,200, 0.5)',
      r = { padding: '0.5rem', backgroundColor: i };
    return o.createElement(
      o.Fragment,
      null,
      o.createElement('h2', null, 'Unexpected Application Error!'),
      o.createElement('h3', { style: { fontStyle: 'italic' } }, e),
      n ? o.createElement('pre', { style: r }, n) : null,
      null,
    );
  }
  const rt = o.createElement(it, null);
  class ot extends o.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, e) {
      return e.location !== t.location ||
        ('idle' !== e.revalidation && 'idle' === t.revalidation)
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: void 0 !== t.error ? t.error : e.error,
            location: e.location,
            revalidation: t.revalidation || e.revalidation,
          };
    }
    componentDidCatch(t, e) {
      console.error(
        'React Router caught the following error during render',
        t,
        e,
      );
    }
    render() {
      return void 0 !== this.state.error
        ? o.createElement(
            Q.Provider,
            { value: this.props.routeContext },
            o.createElement(G.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function st(t) {
    let { routeContext: e, match: n, children: i } = t,
      r = o.useContext(Y);
    return (
      r &&
        r.static &&
        r.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (r.staticContext._deepestRenderedBoundaryId = n.route.id),
      o.createElement(Q.Provider, { value: e }, i)
    );
  }
  function at(t, e, n, i) {
    var r;
    if (
      (void 0 === e && (e = []),
      void 0 === n && (n = null),
      void 0 === i && (i = null),
      null == t)
    ) {
      var s;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else {
        if (
          !(
            null != (s = i) &&
            s.v7_partialHydration &&
            0 === e.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        t = n.matches;
      }
    }
    let a = t,
      l = null == (r = n) ? void 0 : r.errors;
    if (null != l) {
      let t = a.findIndex(
        (t) => t.route.id && void 0 !== (null == l ? void 0 : l[t.route.id]),
      );
      (t >= 0 || c(!1), (a = a.slice(0, Math.min(a.length, t + 1))));
    }
    let u = !1,
      h = -1;
    if (n && i && i.v7_partialHydration)
      for (let o = 0; o < a.length; o++) {
        let t = a[o];
        if (
          ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
            (h = o),
          t.route.id)
        ) {
          let { loaderData: e, errors: i } = n,
            r =
              t.route.loader &&
              void 0 === e[t.route.id] &&
              (!i || void 0 === i[t.route.id]);
          if (t.route.lazy || r) {
            ((u = !0), (a = h >= 0 ? a.slice(0, h + 1) : [a[0]]));
            break;
          }
        }
      }
    return a.reduceRight((t, i, r) => {
      let s,
        c = !1,
        d = null,
        f = null;
      var p;
      n &&
        ((s = l && i.route.id ? l[i.route.id] : void 0),
        (d = i.route.errorElement || rt),
        u &&
          (h < 0 && 0 === r
            ? ((p = 'route-fallback'),
              !1 || ft[p] || (ft[p] = !0),
              (c = !0),
              (f = null))
            : h === r &&
              ((c = !0), (f = i.route.hydrateFallbackElement || null))));
      let m = e.concat(a.slice(0, r + 1)),
        g = () => {
          let e;
          return (
            (e = s
              ? d
              : c
                ? f
                : i.route.Component
                  ? o.createElement(i.route.Component, null)
                  : i.route.element
                    ? i.route.element
                    : t),
            o.createElement(st, {
              match: i,
              routeContext: { outlet: t, matches: m, isDataRoute: null != n },
              children: e,
            })
          );
        };
      return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === r)
        ? o.createElement(ot, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: s,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var lt = (function (t) {
      return (
        (t.UseBlocker = 'useBlocker'),
        (t.UseRevalidator = 'useRevalidator'),
        (t.UseNavigateStable = 'useNavigate'),
        t
      );
    })(lt || {}),
    ut = (function (t) {
      return (
        (t.UseBlocker = 'useBlocker'),
        (t.UseLoaderData = 'useLoaderData'),
        (t.UseActionData = 'useActionData'),
        (t.UseRouteError = 'useRouteError'),
        (t.UseNavigation = 'useNavigation'),
        (t.UseRouteLoaderData = 'useRouteLoaderData'),
        (t.UseMatches = 'useMatches'),
        (t.UseRevalidator = 'useRevalidator'),
        (t.UseNavigateStable = 'useNavigate'),
        (t.UseRouteId = 'useRouteId'),
        t
      );
    })(ut || {});
  function ct(t) {
    let e = o.useContext(Y);
    return (e || c(!1), e);
  }
  function ht(t) {
    let e = o.useContext(q);
    return (e || c(!1), e);
  }
  function dt(t) {
    let e = (function () {
        let t = o.useContext(Q);
        return (t || c(!1), t);
      })(),
      n = e.matches[e.matches.length - 1];
    return (n.route.id || c(!1), n.route.id);
  }
  const ft = {};
  function pt(t, e) {
    (null == t || t.v7_startTransition,
      void 0 === (null == t ? void 0 : t.v7_relativeSplatPath) &&
        (!e || e.v7_relativeSplatPath),
      e &&
        (e.v7_fetcherPersist,
        e.v7_normalizeFormMethod,
        e.v7_partialHydration,
        e.v7_skipActionErrorRevalidation));
  }
  s.startTransition;
  function mt(t) {
    c(!1);
  }
  function gt(t) {
    let {
      basename: e = '/',
      children: n = null,
      location: i,
      navigationType: s = r.Pop,
      navigator: a,
      static: l = !1,
      future: u,
    } = t;
    J() && c(!1);
    let h = e.replace(/^\/*/, '/'),
      d = o.useMemo(
        () => ({
          basename: h,
          navigator: a,
          static: l,
          future: $({ v7_relativeSplatPath: !1 }, u),
        }),
        [h, u, a, l],
      );
    'string' === typeof i && (i = m(i));
    let {
        pathname: f = '/',
        search: p = '',
        hash: g = '',
        state: v = null,
        key: y = 'default',
      } = i,
      b = o.useMemo(() => {
        let t = F(f, h);
        return null == t
          ? null
          : {
              location: { pathname: t, search: p, hash: g, state: v, key: y },
              navigationType: s,
            };
      }, [h, f, p, g, v, y, s]);
    return null == b
      ? null
      : o.createElement(
          K.Provider,
          { value: d },
          o.createElement(X.Provider, { children: n, value: b }),
        );
  }
  function vt(t) {
    let { children: e, location: n } = t;
    return nt(yt(e), n);
  }
  new Promise(() => {});
  o.Component;
  function yt(t, e) {
    void 0 === e && (e = []);
    let n = [];
    return (
      o.Children.forEach(t, (t, i) => {
        if (!o.isValidElement(t)) return;
        let r = [...e, i];
        if (t.type === o.Fragment)
          return void n.push.apply(n, yt(t.props.children, r));
        (t.type !== mt && c(!1), t.props.index && t.props.children && c(!1));
        let s = {
          id: t.props.id || r.join('-'),
          caseSensitive: t.props.caseSensitive,
          element: t.props.element,
          Component: t.props.Component,
          index: t.props.index,
          path: t.props.path,
          loader: t.props.loader,
          action: t.props.action,
          errorElement: t.props.errorElement,
          ErrorBoundary: t.props.ErrorBoundary,
          hasErrorBoundary:
            null != t.props.ErrorBoundary || null != t.props.errorElement,
          shouldRevalidate: t.props.shouldRevalidate,
          handle: t.props.handle,
          lazy: t.props.lazy,
        };
        (t.props.children && (s.children = yt(t.props.children, r)), n.push(s));
      }),
      n
    );
  }
  var bt = n(950),
    xt = n.t(bt, 2);
  new Set([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
  ]);
  try {
    window.__reactRouterVersion = '6';
  } catch (Iy) {}
  new Map();
  const wt = s.startTransition;
  (xt.flushSync, s.useId);
  function _t(t) {
    let { basename: e, children: n, future: i, window: r } = t,
      s = o.useRef();
    var a;
    null == s.current &&
      (s.current =
        (void 0 === (a = { window: r, v5Compat: !0 }) && (a = {}),
        g(
          function (t, e) {
            let { pathname: n, search: i, hash: r } = t.location;
            return f(
              '',
              { pathname: n, search: i, hash: r },
              (e.state && e.state.usr) || null,
              (e.state && e.state.key) || 'default',
            );
          },
          function (t, e) {
            return 'string' === typeof e ? e : p(e);
          },
          null,
          a,
        )));
    let l = s.current,
      [u, c] = o.useState({ action: l.action, location: l.location }),
      { v7_startTransition: h } = i || {},
      d = o.useCallback(
        (t) => {
          h && wt ? wt(() => c(t)) : c(t);
        },
        [c, h],
      );
    return (
      o.useLayoutEffect(() => l.listen(d), [l, d]),
      o.useEffect(() => pt(i), [i]),
      o.createElement(gt, {
        basename: e,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: l,
        future: i,
      })
    );
  }
  'undefined' !== typeof window &&
    'undefined' !== typeof window.document &&
    window.document.createElement;
  var St, kt;
  ((function (t) {
    ((t.UseScrollRestoration = 'useScrollRestoration'),
      (t.UseSubmit = 'useSubmit'),
      (t.UseSubmitFetcher = 'useSubmitFetcher'),
      (t.UseFetcher = 'useFetcher'),
      (t.useViewTransitionState = 'useViewTransitionState'));
  })(St || (St = {})),
    (function (t) {
      ((t.UseFetcher = 'useFetcher'),
        (t.UseFetchers = 'useFetchers'),
        (t.UseScrollRestoration = 'useScrollRestoration'));
    })(kt || (kt = {})));
  function Et(t) {
    if ('undefined' === typeof Proxy) return t;
    const e = new Map();
    return new Proxy(
      function () {
        return t(...arguments);
      },
      {
        get: (n, i) =>
          'create' === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
      },
    );
  }
  function Pt(t) {
    return (
      (Pt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      Pt(t)
    );
  }
  function Mt(t) {
    var e = (function (t, e) {
      if ('object' != Pt(t) || !t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, e || 'default');
        if ('object' != Pt(i)) return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return ('string' === e ? String : Number)(t);
    })(t, 'string');
    return 'symbol' == Pt(e) ? e : e + '';
  }
  function Ct(t, e, n) {
    return (
      (e = Mt(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Tt(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      (e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i));
    }
    return n;
  }
  function Dt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Tt(Object(n), !0).forEach(function (e) {
            Ct(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Tt(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
    }
    return t;
  }
  function At(t) {
    return null !== t && 'object' === typeof t && 'function' === typeof t.start;
  }
  function Ot(t, e) {
    if (null == t) return {};
    var n,
      i,
      r = (function (t, e) {
        if (null == t) return {};
        var n = {};
        for (var i in t)
          if ({}.hasOwnProperty.call(t, i)) {
            if (-1 !== e.indexOf(i)) continue;
            n[i] = t[i];
          }
        return n;
      })(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (i = 0; i < o.length; i++)
        ((n = o[i]),
          -1 === e.indexOf(n) &&
            {}.propertyIsEnumerable.call(t, n) &&
            (r[n] = t[n]));
    }
    return r;
  }
  function Ft(t) {
    const e = [{}, {}];
    return (
      null === t ||
        void 0 === t ||
        t.values.forEach((t, n) => {
          ((e[0][n] = t.get()), (e[1][n] = t.getVelocity()));
        }),
      e
    );
  }
  function Rt(t, e, n, i) {
    if ('function' === typeof e) {
      const [r, o] = Ft(i);
      e = e(void 0 !== n ? n : t.custom, r, o);
    }
    if (
      ('string' === typeof e && (e = t.variants && t.variants[e]),
      'function' === typeof e)
    ) {
      const [r, o] = Ft(i);
      e = e(void 0 !== n ? n : t.custom, r, o);
    }
    return e;
  }
  function Lt(t, e, n) {
    const i = t.getProps();
    return Rt(i, e, void 0 !== n ? n : i.custom, t);
  }
  function Nt(t, e) {
    var n, i;
    return null !==
      (n =
        null !== (i = null === t || void 0 === t ? void 0 : t[e]) &&
        void 0 !== i
          ? i
          : null === t || void 0 === t
            ? void 0
            : t.default) && void 0 !== n
      ? n
      : t;
  }
  const jt = (t) => t,
    It = {},
    zt = [
      'setup',
      'read',
      'resolveKeyframes',
      'preUpdate',
      'update',
      'preRender',
      'render',
      'postRender',
    ],
    Vt = { value: null, addProjectionMetrics: null };
  function Bt(t, e) {
    let n = !1,
      i = !0;
    const r = { delta: 0, timestamp: 0, isProcessing: !1 },
      o = () => (n = !0),
      s = zt.reduce(
        (t, n) => (
          (t[n] = (function (t, e) {
            let n = new Set(),
              i = new Set(),
              r = !1,
              o = !1;
            const s = new WeakSet();
            let a = { delta: 0, timestamp: 0, isProcessing: !1 },
              l = 0;
            function u(e) {
              (s.has(e) && (c.schedule(e), t()), l++, e(a));
            }
            const c = {
              schedule: function (t) {
                const e =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2] &&
                  r
                    ? n
                    : i;
                return (
                  arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1] &&
                    s.add(t),
                  e.has(t) || e.add(t),
                  t
                );
              },
              cancel: (t) => {
                (i.delete(t), s.delete(t));
              },
              process: (t) => {
                ((a = t),
                  r
                    ? (o = !0)
                    : ((r = !0),
                      ([n, i] = [i, n]),
                      n.forEach(u),
                      e && Vt.value && Vt.value.frameloop[e].push(l),
                      (l = 0),
                      n.clear(),
                      (r = !1),
                      o && ((o = !1), c.process(t))));
              },
            };
            return c;
          })(o, e ? n : void 0)),
          t
        ),
        {},
      ),
      {
        setup: a,
        read: l,
        resolveKeyframes: u,
        preUpdate: c,
        update: h,
        preRender: d,
        render: f,
        postRender: p,
      } = s,
      m = () => {
        const o = It.useManualTiming ? r.timestamp : performance.now();
        ((n = !1),
          It.useManualTiming ||
            (r.delta = i
              ? 1e3 / 60
              : Math.max(Math.min(o - r.timestamp, 40), 1)),
          (r.timestamp = o),
          (r.isProcessing = !0),
          a.process(r),
          l.process(r),
          u.process(r),
          c.process(r),
          h.process(r),
          d.process(r),
          f.process(r),
          p.process(r),
          (r.isProcessing = !1),
          n && e && ((i = !1), t(m)));
      },
      g = zt.reduce((e, o) => {
        const a = s[o];
        return (
          (e[o] = function (e) {
            let o =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              n || ((n = !0), (i = !0), r.isProcessing || t(m)),
              a.schedule(e, o, s)
            );
          }),
          e
        );
      }, {});
    return {
      schedule: g,
      cancel: (t) => {
        for (let e = 0; e < zt.length; e++) s[zt[e]].cancel(t);
      },
      state: r,
      steps: s,
    };
  }
  const {
      schedule: Ut,
      cancel: Wt,
      state: Ht,
      steps: $t,
    } = Bt(
      'undefined' !== typeof requestAnimationFrame ? requestAnimationFrame : jt,
      !0,
    ),
    Yt = [
      'transformPerspective',
      'x',
      'y',
      'z',
      'translateX',
      'translateY',
      'translateZ',
      'scale',
      'scaleX',
      'scaleY',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'skew',
      'skewX',
      'skewY',
    ],
    qt = (() => new Set(Yt))(),
    Kt = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...Yt]);
  function Xt(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function Qt(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  class Gt {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return (Xt(this.subscriptions, t), () => Qt(this.subscriptions, t));
    }
    notify(t, e, n) {
      const i = this.subscriptions.length;
      if (i)
        if (1 === i) this.subscriptions[0](t, e, n);
        else
          for (let r = 0; r < i; r++) {
            const i = this.subscriptions[r];
            i && i(t, e, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function Jt(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  let Zt;
  function te() {
    Zt = void 0;
  }
  const ee = {
      now: () => (
        void 0 === Zt &&
          ee.set(
            Ht.isProcessing || It.useManualTiming
              ? Ht.timestamp
              : performance.now(),
          ),
        Zt
      ),
      set: (t) => {
        ((Zt = t), queueMicrotask(te));
      },
    },
    ne = { current: void 0 };
  class ie {
    constructor(t) {
      var e = this;
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = function (t) {
          let n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const i = ee.now();
          var r, o;
          if (
            (e.updatedAt !== i && e.setPrevFrameValue(),
            (e.prev = e.current),
            e.setCurrent(t),
            e.current !== e.prev) &&
            (null === (r = e.events.change) ||
              void 0 === r ||
              r.notify(e.current),
            e.dependents)
          )
            for (const s of e.dependents) s.dirty();
          n &&
            (null === (o = e.events.renderRequest) ||
              void 0 === o ||
              o.notify(e.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(t),
        (this.owner = n.owner));
    }
    setCurrent(t) {
      var e;
      ((this.current = t),
        (this.updatedAt = ee.now()),
        null === this.canTrackVelocity &&
          void 0 !== t &&
          (this.canTrackVelocity =
            ((e = this.current), !isNaN(parseFloat(e)))));
    }
    setPrevFrameValue() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.current;
      ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(t) {
      return this.on('change', t);
    }
    on(t, e) {
      this.events[t] || (this.events[t] = new Gt());
      const n = this.events[t].add(e);
      return 'change' === t
        ? () => {
            (n(),
              Ut.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (const t in this.events) this.events[t].clear();
    }
    attach(t, e) {
      ((this.passiveEffect = t), (this.stopPassiveEffect = e));
    }
    set(t) {
      let e =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      e && this.passiveEffect
        ? this.passiveEffect(t, this.updateAndNotify)
        : this.updateAndNotify(t, e);
    }
    setWithVelocity(t, e, n) {
      (this.set(e),
        (this.prev = void 0),
        (this.prevFrameValue = t),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(t) {
      let e =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      (this.updateAndNotify(t),
        (this.prev = t),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        e && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      var t;
      null === (t = this.events.change) ||
        void 0 === t ||
        t.notify(this.current);
    }
    addDependent(t) {
      (this.dependents || (this.dependents = new Set()),
        this.dependents.add(t));
    }
    removeDependent(t) {
      this.dependents && this.dependents.delete(t);
    }
    get() {
      return (ne.current && ne.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const t = ee.now();
      if (
        !this.canTrackVelocity ||
        void 0 === this.prevFrameValue ||
        t - this.updatedAt > 30
      )
        return 0;
      const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return Jt(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
    }
    start(t) {
      return (
        this.stop(),
        new Promise((e) => {
          ((this.hasAnimated = !0),
            (this.animation = t(e)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      var t, e;
      (null === (t = this.dependents) || void 0 === t || t.clear(),
        null === (e = this.events.destroy) || void 0 === e || e.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  }
  function re(t, e) {
    return new ie(t, e);
  }
  const oe = (t) => Array.isArray(t),
    se = ['transitionEnd', 'transition'];
  function ae(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, re(n));
  }
  function le(t) {
    return oe(t) ? t[t.length - 1] || 0 : t;
  }
  const ue = (t) => Boolean(t && t.getVelocity);
  function ce(t, e) {
    const n = t.getValue('willChange');
    if (((i = n), Boolean(ue(i) && i.add))) return n.add(e);
    if (!n && It.WillChange) {
      const n = new It.WillChange('auto');
      (t.addValue('willChange', n), n.add(e));
    }
    var i;
  }
  const he = (t) => t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
    de = 'data-' + he('framerAppearId');
  function fe(t) {
    return t.props[de];
  }
  const pe = (t, e) => (n) => e(t(n)),
    me = function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return e.reduce(pe);
    },
    ge = (t, e, n) => (n > e ? e : n < t ? t : n),
    ve = (t) => 1e3 * t,
    ye = (t) => t / 1e3,
    be = { layout: 0, mainThread: 0, waapi: 0 };
  const xe = (t) => (e) => 'string' === typeof e && e.startsWith(t),
    we = xe('--'),
    _e = xe('var(--'),
    Se = (t) => !!_e(t) && ke.test(t.split('/*')[0].trim()),
    ke =
      /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i,
    Ee = {
      test: (t) => 'number' === typeof t,
      parse: parseFloat,
      transform: (t) => t,
    },
    Pe = Dt(Dt({}, Ee), {}, { transform: (t) => ge(0, 1, t) }),
    Me = Dt(Dt({}, Ee), {}, { default: 1 }),
    Ce = (t) => Math.round(1e5 * t) / 1e5,
    Te = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
  const De =
      /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
    Ae = (t, e) => (n) =>
      Boolean(
        ('string' === typeof n && De.test(n) && n.startsWith(t)) ||
          (e &&
            !(function (t) {
              return null == t;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, e)),
      ),
    Oe = (t, e, n) => (i) => {
      if ('string' !== typeof i) return i;
      const [r, o, s, a] = i.match(Te);
      return {
        [t]: parseFloat(r),
        [e]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: void 0 !== a ? parseFloat(a) : 1,
      };
    },
    Fe = Dt(
      Dt({}, Ee),
      {},
      { transform: (t) => Math.round(((t) => ge(0, 255, t))(t)) },
    ),
    Re = {
      test: Ae('rgb', 'red'),
      parse: Oe('red', 'green', 'blue'),
      transform: (t) => {
        let { red: e, green: n, blue: i, alpha: r = 1 } = t;
        return (
          'rgba(' +
          Fe.transform(e) +
          ', ' +
          Fe.transform(n) +
          ', ' +
          Fe.transform(i) +
          ', ' +
          Ce(Pe.transform(r)) +
          ')'
        );
      },
    };
  const Le = {
      test: Ae('#'),
      parse: function (t) {
        let e = '',
          n = '',
          i = '',
          r = '';
        return (
          t.length > 5
            ? ((e = t.substring(1, 3)),
              (n = t.substring(3, 5)),
              (i = t.substring(5, 7)),
              (r = t.substring(7, 9)))
            : ((e = t.substring(1, 2)),
              (n = t.substring(2, 3)),
              (i = t.substring(3, 4)),
              (r = t.substring(4, 5)),
              (e += e),
              (n += n),
              (i += i),
              (r += r)),
          {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: r ? parseInt(r, 16) / 255 : 1,
          }
        );
      },
      transform: Re.transform,
    },
    Ne = (t) => ({
      test: (e) =>
        'string' === typeof e && e.endsWith(t) && 1 === e.split(' ').length,
      parse: parseFloat,
      transform: (e) => ''.concat(e).concat(t),
    }),
    je = Ne('deg'),
    Ie = Ne('%'),
    ze = Ne('px'),
    Ve = Ne('vh'),
    Be = Ne('vw'),
    Ue = (() =>
      Dt(
        Dt({}, Ie),
        {},
        {
          parse: (t) => Ie.parse(t) / 100,
          transform: (t) => Ie.transform(100 * t),
        },
      ))(),
    We = {
      test: Ae('hsl', 'hue'),
      parse: Oe('hue', 'saturation', 'lightness'),
      transform: (t) => {
        let { hue: e, saturation: n, lightness: i, alpha: r = 1 } = t;
        return (
          'hsla(' +
          Math.round(e) +
          ', ' +
          Ie.transform(Ce(n)) +
          ', ' +
          Ie.transform(Ce(i)) +
          ', ' +
          Ce(Pe.transform(r)) +
          ')'
        );
      },
    },
    He = {
      test: (t) => Re.test(t) || Le.test(t) || We.test(t),
      parse: (t) =>
        Re.test(t) ? Re.parse(t) : We.test(t) ? We.parse(t) : Le.parse(t),
      transform: (t) =>
        'string' === typeof t
          ? t
          : t.hasOwnProperty('red')
            ? Re.transform(t)
            : We.transform(t),
      getAnimatableNone: (t) => {
        const e = He.parse(t);
        return ((e.alpha = 0), He.transform(e));
      },
    },
    $e =
      /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
  const Ye = 'number',
    qe = 'color',
    Ke =
      /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
  function Xe(t) {
    const e = t.toString(),
      n = [],
      i = { color: [], number: [], var: [] },
      r = [];
    let o = 0;
    const s = e
      .replace(
        Ke,
        (t) => (
          He.test(t)
            ? (i.color.push(o), r.push(qe), n.push(He.parse(t)))
            : t.startsWith('var(')
              ? (i.var.push(o), r.push('var'), n.push(t))
              : (i.number.push(o), r.push(Ye), n.push(parseFloat(t))),
          ++o,
          '${}'
        ),
      )
      .split('${}');
    return { values: n, split: s, indexes: i, types: r };
  }
  function Qe(t) {
    return Xe(t).values;
  }
  function Ge(t) {
    const { split: e, types: n } = Xe(t),
      i = e.length;
    return (t) => {
      let r = '';
      for (let o = 0; o < i; o++)
        if (((r += e[o]), void 0 !== t[o])) {
          const e = n[o];
          r += e === Ye ? Ce(t[o]) : e === qe ? He.transform(t[o]) : t[o];
        }
      return r;
    };
  }
  const Je = (t) =>
    'number' === typeof t ? 0 : He.test(t) ? He.getAnimatableNone(t) : t;
  const Ze = {
    test: function (t) {
      var e, n;
      return (
        isNaN(t) &&
        'string' === typeof t &&
        ((null === (e = t.match(Te)) || void 0 === e ? void 0 : e.length) ||
          0) +
          ((null === (n = t.match($e)) || void 0 === n ? void 0 : n.length) ||
            0) >
          0
      );
    },
    parse: Qe,
    createTransformer: Ge,
    getAnimatableNone: function (t) {
      const e = Qe(t);
      return Ge(t)(e.map(Je));
    },
  };
  function tn(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
          ? e
          : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
    );
  }
  function en(t, e) {
    return (n) => (n > 0 ? e : t);
  }
  const nn = (t, e, n) => t + (e - t) * n,
    rn = (t, e, n) => {
      const i = t * t,
        r = n * (e * e - i) + i;
      return r < 0 ? 0 : Math.sqrt(r);
    },
    on = [Le, Re, We];
  function sn(t) {
    const e = ((n = t), on.find((t) => t.test(n)));
    var n;
    if (
      (Boolean(e),
      "'".concat(
        t,
        "' is not an animatable color. Use the equivalent color code instead.",
      ),
      !e)
    )
      return !1;
    let i = e.parse(t);
    return (
      e === We &&
        (i = (function (t) {
          let { hue: e, saturation: n, lightness: i, alpha: r } = t;
          ((e /= 360), (n /= 100), (i /= 100));
          let o = 0,
            s = 0,
            a = 0;
          if (n) {
            const t = i < 0.5 ? i * (1 + n) : i + n - i * n,
              r = 2 * i - t;
            ((o = tn(r, t, e + 1 / 3)),
              (s = tn(r, t, e)),
              (a = tn(r, t, e - 1 / 3)));
          } else o = s = a = i;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * s),
            blue: Math.round(255 * a),
            alpha: r,
          };
        })(i)),
      i
    );
  }
  const an = (t, e) => {
      const n = sn(t),
        i = sn(e);
      if (!n || !i) return en(t, e);
      const r = Dt({}, n);
      return (t) => (
        (r.red = rn(n.red, i.red, t)),
        (r.green = rn(n.green, i.green, t)),
        (r.blue = rn(n.blue, i.blue, t)),
        (r.alpha = nn(n.alpha, i.alpha, t)),
        Re.transform(r)
      );
    },
    ln = new Set(['none', 'hidden']);
  function un(t, e) {
    return (n) => nn(t, e, n);
  }
  function cn(t) {
    return 'number' === typeof t
      ? un
      : 'string' === typeof t
        ? Se(t)
          ? en
          : He.test(t)
            ? an
            : fn
        : Array.isArray(t)
          ? hn
          : 'object' === typeof t
            ? He.test(t)
              ? an
              : dn
            : en;
  }
  function hn(t, e) {
    const n = [...t],
      i = n.length,
      r = t.map((t, n) => cn(t)(t, e[n]));
    return (t) => {
      for (let e = 0; e < i; e++) n[e] = r[e](t);
      return n;
    };
  }
  function dn(t, e) {
    const n = Dt(Dt({}, t), e),
      i = {};
    for (const r in n)
      void 0 !== t[r] && void 0 !== e[r] && (i[r] = cn(t[r])(t[r], e[r]));
    return (t) => {
      for (const e in i) n[e] = i[e](t);
      return n;
    };
  }
  const fn = (t, e) => {
    const n = Ze.createTransformer(e),
      i = Xe(t),
      r = Xe(e);
    return i.indexes.var.length === r.indexes.var.length &&
      i.indexes.color.length === r.indexes.color.length &&
      i.indexes.number.length >= r.indexes.number.length
      ? (ln.has(t) && !r.values.length) || (ln.has(e) && !i.values.length)
        ? (function (t, e) {
            return ln.has(t)
              ? (n) => (n <= 0 ? t : e)
              : (n) => (n >= 1 ? e : t);
          })(t, e)
        : me(
            hn(
              (function (t, e) {
                const n = [],
                  i = { color: 0, var: 0, number: 0 };
                for (let o = 0; o < e.values.length; o++) {
                  var r;
                  const s = e.types[o],
                    a = t.indexes[s][i[s]],
                    l = null !== (r = t.values[a]) && void 0 !== r ? r : 0;
                  ((n[o] = l), i[s]++);
                }
                return n;
              })(i, r),
              r.values,
            ),
            n,
          )
      : ("Complex values '"
          .concat(t, "' and '")
          .concat(
            e,
            "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.",
          ),
        en(t, e));
  };
  function pn(t, e, n) {
    if ('number' === typeof t && 'number' === typeof e && 'number' === typeof n)
      return nn(t, e, n);
    return cn(t)(t, e);
  }
  const mn = (t) => {
      const e = (e) => {
        let { timestamp: n } = e;
        return t(n);
      };
      return {
        start: function () {
          let t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return Ut.update(e, t);
        },
        stop: () => Wt(e),
        now: () => (Ht.isProcessing ? Ht.timestamp : ee.now()),
      };
    },
    gn = function (t, e) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = '';
      const r = Math.max(Math.round(e / n), 2);
      for (let o = 0; o < r; o++)
        i += Math.round(1e4 * t(o / (r - 1))) / 1e4 + ', ';
      return 'linear('.concat(i.substring(0, i.length - 2), ')');
    },
    vn = 2e4;
  function yn(t) {
    let e = 0;
    let n = t.next(e);
    for (; !n.done && e < vn; ) ((e += 50), (n = t.next(e)));
    return e >= vn ? 1 / 0 : e;
  }
  function bn(t, e, n) {
    const i = Math.max(e - 5, 0);
    return Jt(n - t(i), e - i);
  }
  const xn = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    wn = 0.001;
  function _n(t) {
    let e,
      n,
      {
        duration: i = xn.duration,
        bounce: r = xn.bounce,
        velocity: o = xn.velocity,
        mass: s = xn.mass,
      } = t;
    ve(xn.maxDuration);
    let a = 1 - r;
    ((a = ge(xn.minDamping, xn.maxDamping, a)),
      (i = ge(xn.minDuration, xn.maxDuration, ye(i))),
      a < 1
        ? ((e = (t) => {
            const e = t * a,
              n = e * i,
              r = e - o,
              s = kn(t, a),
              l = Math.exp(-n);
            return wn - (r / s) * l;
          }),
          (n = (t) => {
            const n = t * a * i,
              r = n * o + o,
              s = Math.pow(a, 2) * Math.pow(t, 2) * i,
              l = Math.exp(-n),
              u = kn(Math.pow(t, 2), a);
            return ((-e(t) + wn > 0 ? -1 : 1) * ((r - s) * l)) / u;
          }))
        : ((e = (t) => Math.exp(-t * i) * ((t - o) * i + 1) - 0.001),
          (n = (t) => Math.exp(-t * i) * (i * i * (o - t)))));
    const l = (function (t, e, n) {
      let i = n;
      for (let r = 1; r < Sn; r++) i -= t(i) / e(i);
      return i;
    })(e, n, 5 / i);
    if (((i = ve(i)), isNaN(l)))
      return { stiffness: xn.stiffness, damping: xn.damping, duration: i };
    {
      const t = Math.pow(l, 2) * s;
      return { stiffness: t, damping: 2 * a * Math.sqrt(s * t), duration: i };
    }
  }
  const Sn = 12;
  function kn(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const En = ['duration', 'bounce'],
    Pn = ['stiffness', 'damping', 'mass'];
  function Mn(t, e) {
    return e.some((e) => void 0 !== t[e]);
  }
  function Cn() {
    let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : xn.visualDuration,
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : xn.bounce;
    const n =
      'object' !== typeof t
        ? { visualDuration: t, keyframes: [0, 1], bounce: e }
        : t;
    let { restSpeed: i, restDelta: r } = n;
    const o = n.keyframes[0],
      s = n.keyframes[n.keyframes.length - 1],
      a = { done: !1, value: o },
      {
        stiffness: l,
        damping: u,
        mass: c,
        duration: h,
        velocity: d,
        isResolvedFromDuration: f,
      } = (function (t) {
        let e = Dt(
          {
            velocity: xn.velocity,
            stiffness: xn.stiffness,
            damping: xn.damping,
            mass: xn.mass,
            isResolvedFromDuration: !1,
          },
          t,
        );
        if (!Mn(t, Pn) && Mn(t, En))
          if (t.visualDuration) {
            const n = t.visualDuration,
              i = (2 * Math.PI) / (1.2 * n),
              r = i * i,
              o = 2 * ge(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
            e = Dt(Dt({}, e), {}, { mass: xn.mass, stiffness: r, damping: o });
          } else {
            const n = _n(t);
            ((e = Dt(Dt(Dt({}, e), n), {}, { mass: xn.mass })),
              (e.isResolvedFromDuration = !0));
          }
        return e;
      })(Dt(Dt({}, n), {}, { velocity: -ye(n.velocity || 0) })),
      p = d || 0,
      m = u / (2 * Math.sqrt(l * c)),
      g = s - o,
      v = ye(Math.sqrt(l / c)),
      y = Math.abs(g) < 5;
    let b;
    if (
      (i || (i = y ? xn.restSpeed.granular : xn.restSpeed.default),
      r || (r = y ? xn.restDelta.granular : xn.restDelta.default),
      m < 1)
    ) {
      const t = kn(v, m);
      b = (e) => {
        const n = Math.exp(-m * v * e);
        return (
          s -
          n * (((p + m * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e))
        );
      };
    } else if (1 === m) b = (t) => s - Math.exp(-v * t) * (g + (p + v * g) * t);
    else {
      const t = v * Math.sqrt(m * m - 1);
      b = (e) => {
        const n = Math.exp(-m * v * e),
          i = Math.min(t * e, 300);
        return (
          s - (n * ((p + m * v * g) * Math.sinh(i) + t * g * Math.cosh(i))) / t
        );
      };
    }
    const x = {
      calculatedDuration: (f && h) || null,
      next: (t) => {
        const e = b(t);
        if (f) a.done = t >= h;
        else {
          let n = 0 === t ? p : 0;
          m < 1 && (n = 0 === t ? ve(p) : bn(b, t, e));
          const o = Math.abs(n) <= i,
            l = Math.abs(s - e) <= r;
          a.done = o && l;
        }
        return ((a.value = a.done ? s : e), a);
      },
      toString: () => {
        const t = Math.min(yn(x), vn),
          e = gn((e) => x.next(t * e).value, t, 30);
        return t + 'ms ' + e;
      },
      toTransition: () => {},
    };
    return x;
  }
  function Tn(t) {
    let {
      keyframes: e,
      velocity: n = 0,
      power: i = 0.8,
      timeConstant: r = 325,
      bounceDamping: o = 10,
      bounceStiffness: s = 500,
      modifyTarget: a,
      min: l,
      max: u,
      restDelta: c = 0.5,
      restSpeed: h,
    } = t;
    const d = e[0],
      f = { done: !1, value: d },
      p = (t) =>
        void 0 === l
          ? u
          : void 0 === u || Math.abs(l - t) < Math.abs(u - t)
            ? l
            : u;
    let m = i * n;
    const g = d + m,
      v = void 0 === a ? g : a(g);
    v !== g && (m = v - d);
    const y = (t) => -m * Math.exp(-t / r),
      b = (t) => v + y(t),
      x = (t) => {
        const e = y(t),
          n = b(t);
        ((f.done = Math.abs(e) <= c), (f.value = f.done ? v : n));
      };
    let w, _;
    const S = (t) => {
      var e;
      ((e = f.value), (void 0 !== l && e < l) || (void 0 !== u && e > u)) &&
        ((w = t),
        (_ = Cn({
          keyframes: [f.value, p(f.value)],
          velocity: bn(b, t, f.value),
          damping: o,
          stiffness: s,
          restDelta: c,
          restSpeed: h,
        })));
    };
    return (
      S(0),
      {
        calculatedDuration: null,
        next: (t) => {
          let e = !1;
          return (
            _ || void 0 !== w || ((e = !0), x(t), S(t)),
            void 0 !== w && t >= w ? _.next(t - w) : (!e && x(t), f)
          );
        },
      }
    );
  }
  Cn.applyToOptions = (t) => {
    const e = (function (t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
      const n = (arguments.length > 2 ? arguments[2] : void 0)(
          Dt(Dt({}, t), {}, { keyframes: [0, e] }),
        ),
        i = Math.min(yn(n), vn);
      return {
        type: 'keyframes',
        ease: (t) => n.next(i * t).value / e,
        duration: ye(i),
      };
    })(t, 100, Cn);
    return (
      (t.ease = e.ease),
      (t.duration = ve(e.duration)),
      (t.type = 'keyframes'),
      t
    );
  };
  const Dn = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
  function An(t, e, n, i) {
    if (t === e && n === i) return jt;
    const r = (e) =>
      (function (t, e, n, i, r) {
        let o,
          s,
          a = 0;
        do {
          ((s = e + (n - e) / 2),
            (o = Dn(s, i, r) - t),
            o > 0 ? (n = s) : (e = s));
        } while (Math.abs(o) > 1e-7 && ++a < 12);
        return s;
      })(e, 0, 1, t, n);
    return (t) => (0 === t || 1 === t ? t : Dn(r(t), e, i));
  }
  const On = An(0.42, 0, 1, 1),
    Fn = An(0, 0, 0.58, 1),
    Rn = An(0.42, 0, 0.58, 1),
    Ln = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
    Nn = (t) => (e) => 1 - t(1 - e),
    jn = An(0.33, 1.53, 0.69, 0.99),
    In = Nn(jn),
    zn = Ln(In),
    Vn = (t) =>
      (t *= 2) < 1 ? 0.5 * In(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
    Bn = (t) => 1 - Math.sin(Math.acos(t)),
    Un = Nn(Bn),
    Wn = Ln(Bn),
    Hn = (t) => Array.isArray(t) && 'number' === typeof t[0],
    $n = {
      linear: jt,
      easeIn: On,
      easeInOut: Rn,
      easeOut: Fn,
      circIn: Bn,
      circInOut: Wn,
      circOut: Un,
      backIn: In,
      backInOut: zn,
      backOut: jn,
      anticipate: Vn,
    },
    Yn = (t) => {
      if (Hn(t)) {
        t.length;
        const [e, n, i, r] = t;
        return An(e, n, i, r);
      }
      return 'string' === typeof t
        ? ("Invalid easing type '".concat(t, "'"), $n[t])
        : t;
    },
    qn = (t, e, n) => {
      const i = e - t;
      return 0 === i ? 1 : (n - t) / i;
    };
  function Kn(t, e) {
    let {
      clamp: n = !0,
      ease: i,
      mixer: r,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const o = t.length;
    if ((e.length, 1 === o)) return () => e[0];
    if (2 === o && e[0] === e[1]) return () => e[1];
    const s = t[0] === t[1];
    t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
    const a = (function (t, e, n) {
        const i = [],
          r = n || It.mix || pn,
          o = t.length - 1;
        for (let s = 0; s < o; s++) {
          let n = r(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] || jt : e;
            n = me(t, n);
          }
          i.push(n);
        }
        return i;
      })(e, i, r),
      l = a.length,
      u = (n) => {
        if (s && n < t[0]) return e[0];
        let i = 0;
        if (l > 1) for (; i < t.length - 2 && !(n < t[i + 1]); i++);
        const r = qn(t[i], t[i + 1], n);
        return a[i](r);
      };
    return n ? (e) => u(ge(t[0], t[o - 1], e)) : u;
  }
  function Xn(t) {
    const e = [0];
    return (
      (function (t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const r = qn(0, e, i);
          t.push(nn(n, 1, r));
        }
      })(e, t.length - 1),
      e
    );
  }
  function Qn(t) {
    let {
      duration: e = 300,
      keyframes: n,
      times: i,
      ease: r = 'easeInOut',
    } = t;
    const o = ((t) => Array.isArray(t) && 'number' !== typeof t[0])(r)
        ? r.map(Yn)
        : Yn(r),
      s = { done: !1, value: n[0] },
      a = (function (t, e) {
        return t.map((t) => t * e);
      })(i && i.length === n.length ? i : Xn(n), e),
      l = Kn(a, n, {
        ease: Array.isArray(o)
          ? o
          : ((u = n), (c = o), u.map(() => c || Rn).splice(0, u.length - 1)),
      });
    var u, c;
    return {
      calculatedDuration: e,
      next: (t) => ((s.value = l(t)), (s.done = t >= e), s),
    };
  }
  const Gn = (t) => null !== t;
  function Jn(t, e, n) {
    let { repeat: i, repeatType: r = 'loop' } = e,
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    const s = t.filter(Gn),
      a = o < 0 || (i && 'loop' !== r && i % 2 === 1) ? 0 : s.length - 1;
    return a && void 0 !== n ? n : s[a];
  }
  const Zn = { decay: Tn, inertia: Tn, tween: Qn, keyframes: Qn, spring: Cn };
  function ti(t) {
    'string' === typeof t.type && (t.type = Zn[t.type]);
  }
  class ei {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((t) => {
        this.resolve = t;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
  }
  const ni = (t) => t / 100;
  class ii extends ei {
    constructor(t) {
      (super(),
        (this.state = 'idle'),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.stop = () => {
          var t, e;
          const { motionValue: n } = this.options;
          (n && n.updatedAt !== ee.now() && this.tick(ee.now()),
            (this.isStopped = !0),
            'idle' !== this.state &&
              (this.teardown(),
              null === (t = (e = this.options).onStop) ||
                void 0 === t ||
                t.call(e)));
        }),
        be.mainThread++,
        (this.options = t),
        this.initAnimation(),
        this.play(),
        !1 === t.autoplay && this.pause());
    }
    initAnimation() {
      const { options: t } = this;
      ti(t);
      const {
        type: e = Qn,
        repeat: n = 0,
        repeatDelay: i = 0,
        repeatType: r,
        velocity: o = 0,
      } = t;
      let { keyframes: s } = t;
      const a = e || Qn;
      a !== Qn &&
        'number' !== typeof s[0] &&
        ((this.mixKeyframes = me(ni, pn(s[0], s[1]))), (s = [0, 100]));
      const l = a(Dt(Dt({}, t), {}, { keyframes: s }));
      ('mirror' === r &&
        (this.mirroredGenerator = a(
          Dt(Dt({}, t), {}, { keyframes: [...s].reverse(), velocity: -o }),
        )),
        null === l.calculatedDuration && (l.calculatedDuration = yn(l)));
      const { calculatedDuration: u } = l;
      ((this.calculatedDuration = u),
        (this.resolvedDuration = u + i),
        (this.totalDuration = this.resolvedDuration * (n + 1) - i),
        (this.generator = l));
    }
    updateTime(t) {
      const e = Math.round(t - this.startTime) * this.playbackSpeed;
      null !== this.holdTime
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = e);
    }
    tick(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const {
        generator: n,
        totalDuration: i,
        mixKeyframes: r,
        mirroredGenerator: o,
        resolvedDuration: s,
        calculatedDuration: a,
      } = this;
      if (null === this.startTime) return n.next(0);
      const {
        delay: l = 0,
        keyframes: u,
        repeat: c,
        repeatType: h,
        repeatDelay: d,
        type: f,
        onUpdate: p,
        finalKeyframe: m,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, t))
        : this.speed < 0 &&
          (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        e ? (this.currentTime = t) : this.updateTime(t));
      const g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
        v = this.playbackSpeed >= 0 ? g < 0 : g > i;
      ((this.currentTime = Math.max(g, 0)),
        'finished' === this.state &&
          null === this.holdTime &&
          (this.currentTime = i));
      let y = this.currentTime,
        b = n;
      if (c) {
        const t = Math.min(this.currentTime, i) / s;
        let e = Math.floor(t),
          n = t % 1;
        (!n && t >= 1 && (n = 1), 1 === n && e--, (e = Math.min(e, c + 1)));
        (Boolean(e % 2) &&
          ('reverse' === h
            ? ((n = 1 - n), d && (n -= d / s))
            : 'mirror' === h && (b = o)),
          (y = ge(0, 1, n) * s));
      }
      const x = v ? { done: !1, value: u[0] } : b.next(y);
      r && (x.value = r(x.value));
      let { done: w } = x;
      v ||
        null === a ||
        (w =
          this.playbackSpeed >= 0
            ? this.currentTime >= i
            : this.currentTime <= 0);
      const _ =
        null === this.holdTime &&
        ('finished' === this.state || ('running' === this.state && w));
      return (
        _ && f !== Tn && (x.value = Jn(u, this.options, m, this.speed)),
        p && p(x.value),
        _ && this.finish(),
        x
      );
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
    get duration() {
      return ye(this.calculatedDuration);
    }
    get time() {
      return ye(this.currentTime);
    }
    set time(t) {
      var e;
      ((t = ve(t)),
        (this.currentTime = t),
        null === this.startTime ||
        null !== this.holdTime ||
        0 === this.playbackSpeed
          ? (this.holdTime = t)
          : this.driver &&
            (this.startTime = this.driver.now() - t / this.playbackSpeed),
        null === (e = this.driver) || void 0 === e || e.start(!1));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      this.updateTime(ee.now());
      const e = this.playbackSpeed !== t;
      ((this.playbackSpeed = t), e && (this.time = ye(this.currentTime)));
    }
    play() {
      var t, e;
      if (this.isStopped) return;
      const { driver: n = mn, startTime: i } = this.options;
      (this.driver || (this.driver = n((t) => this.tick(t))),
        null === (t = (e = this.options).onPlay) || void 0 === t || t.call(e));
      const r = this.driver.now();
      ('finished' === this.state
        ? (this.updateFinished(), (this.startTime = r))
        : null !== this.holdTime
          ? (this.startTime = r - this.holdTime)
          : this.startTime ||
            (this.startTime = null !== i && void 0 !== i ? i : r),
        'finished' === this.state &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = 'running'),
        this.driver.start());
    }
    pause() {
      ((this.state = 'paused'),
        this.updateTime(ee.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      ('running' !== this.state && this.play(),
        (this.state = 'finished'),
        (this.holdTime = null));
    }
    finish() {
      var t, e;
      (this.notifyFinished(),
        this.teardown(),
        (this.state = 'finished'),
        null === (t = (e = this.options).onComplete) ||
          void 0 === t ||
          t.call(e));
    }
    cancel() {
      var t, e;
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        null === (t = (e = this.options).onCancel) ||
          void 0 === t ||
          t.call(e));
    }
    teardown() {
      ((this.state = 'idle'),
        this.stopDriver(),
        (this.startTime = this.holdTime = null),
        be.mainThread--);
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
      return ((this.startTime = 0), this.tick(t, !0));
    }
    attachTimeline(t) {
      var e;
      return (
        this.options.allowFlatten &&
          ((this.options.type = 'keyframes'),
          (this.options.ease = 'linear'),
          this.initAnimation()),
        null === (e = this.driver) || void 0 === e || e.stop(),
        t.observe(this)
      );
    }
  }
  const ri = (t) => (180 * t) / Math.PI,
    oi = (t) => {
      const e = ri(Math.atan2(t[1], t[0]));
      return ai(e);
    },
    si = {
      x: 4,
      y: 5,
      translateX: 4,
      translateY: 5,
      scaleX: 0,
      scaleY: 3,
      scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
      rotate: oi,
      rotateZ: oi,
      skewX: (t) => ri(Math.atan(t[1])),
      skewY: (t) => ri(Math.atan(t[2])),
      skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
    },
    ai = (t) => ((t %= 360) < 0 && (t += 360), t),
    li = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
    ui = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
    ci = {
      x: 12,
      y: 13,
      z: 14,
      translateX: 12,
      translateY: 13,
      translateZ: 14,
      scaleX: li,
      scaleY: ui,
      scale: (t) => (li(t) + ui(t)) / 2,
      rotateX: (t) => ai(ri(Math.atan2(t[6], t[5]))),
      rotateY: (t) => ai(ri(Math.atan2(-t[2], t[0]))),
      rotateZ: oi,
      rotate: oi,
      skewX: (t) => ri(Math.atan(t[4])),
      skewY: (t) => ri(Math.atan(t[1])),
      skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
    };
  function hi(t) {
    return t.includes('scale') ? 1 : 0;
  }
  function di(t, e) {
    if (!t || 'none' === t) return hi(e);
    const n = t.match(
      /^matrix3d\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/,
    );
    let i, r;
    if (n) ((i = ci), (r = n));
    else {
      const e = t.match(
        /^matrix\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/,
      );
      ((i = si), (r = e));
    }
    if (!r) return hi(e);
    const o = i[e],
      s = r[1].split(',').map(fi);
    return 'function' === typeof o ? o(s) : s[o];
  }
  function fi(t) {
    return parseFloat(t.trim());
  }
  const pi = (t) => t === Ee || t === ze,
    mi = new Set(['x', 'y', 'z']),
    gi = Yt.filter((t) => !mi.has(t));
  const vi = {
    width: (t, e) => {
      let { x: n } = t,
        { paddingLeft: i = '0', paddingRight: r = '0' } = e;
      return n.max - n.min - parseFloat(i) - parseFloat(r);
    },
    height: (t, e) => {
      let { y: n } = t,
        { paddingTop: i = '0', paddingBottom: r = '0' } = e;
      return n.max - n.min - parseFloat(i) - parseFloat(r);
    },
    top: (t, e) => {
      let { top: n } = e;
      return parseFloat(n);
    },
    left: (t, e) => {
      let { left: n } = e;
      return parseFloat(n);
    },
    bottom: (t, e) => {
      let { y: n } = t,
        { top: i } = e;
      return parseFloat(i) + (n.max - n.min);
    },
    right: (t, e) => {
      let { x: n } = t,
        { left: i } = e;
      return parseFloat(i) + (n.max - n.min);
    },
    x: (t, e) => {
      let { transform: n } = e;
      return di(n, 'x');
    },
    y: (t, e) => {
      let { transform: n } = e;
      return di(n, 'y');
    },
  };
  ((vi.translateX = vi.x), (vi.translateY = vi.y));
  const yi = new Set();
  let bi = !1,
    xi = !1,
    wi = !1;
  function _i() {
    if (xi) {
      const t = Array.from(yi).filter((t) => t.needsMeasurement),
        e = new Set(t.map((t) => t.element)),
        n = new Map();
      (e.forEach((t) => {
        const e = (function (t) {
          const e = [];
          return (
            gi.forEach((n) => {
              const i = t.getValue(n);
              void 0 !== i &&
                (e.push([n, i.get()]), i.set(n.startsWith('scale') ? 1 : 0));
            }),
            e
          );
        })(t);
        e.length && (n.set(t, e), t.render());
      }),
        t.forEach((t) => t.measureInitialState()),
        e.forEach((t) => {
          t.render();
          const e = n.get(t);
          e &&
            e.forEach((e) => {
              var n;
              let [i, r] = e;
              null === (n = t.getValue(i)) || void 0 === n || n.set(r);
            });
        }),
        t.forEach((t) => t.measureEndState()),
        t.forEach((t) => {
          void 0 !== t.suspendedScrollY &&
            window.scrollTo(0, t.suspendedScrollY);
        }));
    }
    ((xi = !1), (bi = !1), yi.forEach((t) => t.complete(wi)), yi.clear());
  }
  function Si() {
    yi.forEach((t) => {
      (t.readKeyframes(), t.needsMeasurement && (xi = !0));
    });
  }
  class ki {
    constructor(t, e, n, i, r) {
      let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      ((this.state = 'pending'),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...t]),
        (this.onComplete = e),
        (this.name = n),
        (this.motionValue = i),
        (this.element = r),
        (this.isAsync = o));
    }
    scheduleResolve() {
      ((this.state = 'scheduled'),
        this.isAsync
          ? (yi.add(this),
            bi || ((bi = !0), Ut.read(Si), Ut.resolveKeyframes(_i)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: t,
        name: e,
        element: n,
        motionValue: i,
      } = this;
      if (null === t[0]) {
        const r = null === i || void 0 === i ? void 0 : i.get(),
          o = t[t.length - 1];
        if (void 0 !== r) t[0] = r;
        else if (n && e) {
          const i = n.readValue(e, o);
          void 0 !== i && null !== i && (t[0] = i);
        }
        (void 0 === t[0] && (t[0] = o), i && void 0 === r && i.set(t[0]));
      }
      !(function (t) {
        for (let n = 1; n < t.length; n++) {
          var e;
          (null !== (e = t[n]) && void 0 !== e) || (t[n] = t[n - 1]);
        }
      })(t);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      ((this.state = 'complete'),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        yi.delete(this));
    }
    cancel() {
      'scheduled' === this.state && (yi.delete(this), (this.state = 'pending'));
    }
    resume() {
      'pending' === this.state && this.scheduleResolve();
    }
  }
  function Ei(t) {
    let e;
    return () => (void 0 === e && (e = t()), e);
  }
  const Pi = Ei(() => void 0 !== window.ScrollTimeline),
    Mi = {};
  function Ci(t, e) {
    const n = Ei(t);
    return () => {
      var t;
      return null !== (t = Mi[e]) && void 0 !== t ? t : n();
    };
  }
  const Ti = Ci(() => {
      try {
        document
          .createElement('div')
          .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
      } catch (Iy) {
        return !1;
      }
      return !0;
    }, 'linearEasing'),
    Di = (t) => {
      let [e, n, i, r] = t;
      return 'cubic-bezier('
        .concat(e, ', ')
        .concat(n, ', ')
        .concat(i, ', ')
        .concat(r, ')');
    },
    Ai = {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      circIn: Di([0, 0.65, 0.55, 1]),
      circOut: Di([0.55, 0, 1, 0.45]),
      backIn: Di([0.31, 0.01, 0.66, -0.59]),
      backOut: Di([0.33, 1.53, 0.69, 0.99]),
    };
  function Oi(t, e) {
    return t
      ? 'function' === typeof t
        ? Ti()
          ? gn(t, e)
          : 'ease-out'
        : Hn(t)
          ? Di(t)
          : Array.isArray(t)
            ? t.map((t) => Oi(t, e) || Ai.easeOut)
            : Ai[t]
      : void 0;
  }
  function Fi(t, e, n) {
    let {
        delay: i = 0,
        duration: r = 300,
        repeat: o = 0,
        repeatType: s = 'loop',
        ease: a = 'easeOut',
        times: l,
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      u =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
    const c = { [e]: n };
    l && (c.offset = l);
    const h = Oi(a, r);
    (Array.isArray(h) && (c.easing = h), Vt.value && be.waapi++);
    const d = {
      delay: i,
      duration: r,
      easing: Array.isArray(h) ? 'linear' : h,
      fill: 'both',
      iterations: o + 1,
      direction: 'reverse' === s ? 'alternate' : 'normal',
    };
    u && (d.pseudoElement = u);
    const f = t.animate(c, d);
    return (
      Vt.value &&
        f.finished.finally(() => {
          be.waapi--;
        }),
      f
    );
  }
  function Ri(t) {
    return 'function' === typeof t && 'applyToOptions' in t;
  }
  const Li = ['type'];
  class Ni extends ei {
    constructor(t) {
      if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
        return;
      const {
        element: e,
        name: n,
        keyframes: i,
        pseudoElement: r,
        allowFlatten: o = !1,
        finalKeyframe: s,
        onComplete: a,
      } = t;
      ((this.isPseudoElement = Boolean(r)),
        (this.allowFlatten = o),
        (this.options = t),
        t.type);
      const l = (function (t) {
        let { type: e } = t,
          n = Ot(t, Li);
        return Ri(e) && Ti()
          ? e.applyToOptions(n)
          : ((null !== (i = n.duration) && void 0 !== i) || (n.duration = 300),
            (null !== (r = n.ease) && void 0 !== r) || (n.ease = 'easeOut'),
            n);
        var i, r;
      })(t);
      ((this.animation = Fi(e, n, i, l, r)),
        !1 === l.autoplay && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !r)) {
            const t = Jn(i, this.options, s, this.speed);
            (this.updateMotionValue
              ? this.updateMotionValue(t)
              : (function (t, e, n) {
                  ((t) => t.startsWith('--'))(e)
                    ? t.style.setProperty(e, n)
                    : (t.style[e] = n);
                })(e, n, t),
              this.animation.cancel());
          }
          (null === a || void 0 === a || a(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        (this.animation.play(),
        'finished' === this.state && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      var t, e;
      null === (t = (e = this.animation).finish) || void 0 === t || t.call(e);
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (Iy) {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      const { state: t } = this;
      'idle' !== t &&
        'finished' !== t &&
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      var t, e;
      this.isPseudoElement ||
        null === (t = (e = this.animation).commitStyles) ||
        void 0 === t ||
        t.call(e);
    }
    get duration() {
      var t, e;
      const n =
        (null === (t = this.animation.effect) ||
        void 0 === t ||
        null === (e = t.getComputedTiming) ||
        void 0 === e
          ? void 0
          : e.call(t).duration) || 0;
      return ye(Number(n));
    }
    get time() {
      return ye(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
      ((this.finishedTime = null), (this.animation.currentTime = ve(t)));
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(t) {
      (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
    }
    get state() {
      return null !== this.finishedTime ? 'finished' : this.animation.playState;
    }
    get startTime() {
      return Number(this.animation.startTime);
    }
    set startTime(t) {
      this.animation.startTime = t;
    }
    attachTimeline(t) {
      let { timeline: e, observe: n } = t;
      var i;
      this.allowFlatten &&
        (null === (i = this.animation.effect) ||
          void 0 === i ||
          i.updateTiming({ easing: 'linear' }));
      return (
        (this.animation.onfinish = null),
        e && Pi() ? ((this.animation.timeline = e), jt) : n(this)
      );
    }
  }
  const ji = { anticipate: Vn, backInOut: zn, circInOut: Wn };
  function Ii(t) {
    'string' === typeof t.ease && t.ease in ji && (t.ease = ji[t.ease]);
  }
  const zi = ['motionValue', 'onUpdate', 'onComplete', 'element'];
  class Vi extends Ni {
    constructor(t) {
      (Ii(t),
        ti(t),
        super(t),
        t.startTime && (this.startTime = t.startTime),
        (this.options = t));
    }
    updateMotionValue(t) {
      var e;
      const n = this.options,
        { motionValue: i, onUpdate: r, onComplete: o, element: s } = n,
        a = Ot(n, zi);
      if (!i) return;
      if (void 0 !== t) return void i.set(t);
      const l = new ii(Dt(Dt({}, a), {}, { autoplay: !1 })),
        u = ve(
          null !== (e = this.finishedTime) && void 0 !== e ? e : this.time,
        );
      (i.setWithVelocity(l.sample(u - 10).value, l.sample(u).value, 10),
        l.stop());
    }
  }
  const Bi = (t, e) =>
    'zIndex' !== e &&
    (!('number' !== typeof t && !Array.isArray(t)) ||
      !(
        'string' !== typeof t ||
        (!Ze.test(t) && '0' !== t) ||
        t.startsWith('url(')
      ));
  function Ui(t) {
    return 'object' === typeof t && null !== t;
  }
  function Wi(t) {
    return Ui(t) && 'offsetHeight' in t;
  }
  const Hi = new Set(['opacity', 'clipPath', 'filter', 'transform']),
    $i = Ei(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
  const Yi = [
    'autoplay',
    'delay',
    'type',
    'repeat',
    'repeatDelay',
    'repeatType',
    'keyframes',
    'name',
    'motionValue',
    'element',
  ];
  class qi extends ei {
    constructor(t) {
      var e;
      let {
          autoplay: n = !0,
          delay: i = 0,
          type: r = 'keyframes',
          repeat: o = 0,
          repeatDelay: s = 0,
          repeatType: a = 'loop',
          keyframes: l,
          name: u,
          motionValue: c,
          element: h,
        } = t,
        d = Ot(t, Yi);
      (super(),
        (this.stop = () => {
          var t, e;
          this._animation &&
            (this._animation.stop(),
            null === (e = this.stopTimeline) || void 0 === e || e.call(this));
          null === (t = this.keyframeResolver) || void 0 === t || t.cancel();
        }),
        (this.createdAt = ee.now()));
      const f = Dt(
          {
            autoplay: n,
            delay: i,
            type: r,
            repeat: o,
            repeatDelay: s,
            repeatType: a,
            name: u,
            motionValue: c,
            element: h,
          },
          d,
        ),
        p = (null === h || void 0 === h ? void 0 : h.KeyframeResolver) || ki;
      ((this.keyframeResolver = new p(
        l,
        (t, e, n) => this.onKeyframesResolved(t, e, f, !n),
        u,
        c,
        h,
      )),
        null === (e = this.keyframeResolver) ||
          void 0 === e ||
          e.scheduleResolve());
    }
    onKeyframesResolved(t, e, n, i) {
      this.keyframeResolver = void 0;
      const {
        name: r,
        type: o,
        velocity: s,
        delay: a,
        isHandoff: l,
        onUpdate: u,
      } = n;
      ((this.resolvedAt = ee.now()),
        (function (t, e, n, i) {
          const r = t[0];
          if (null === r) return !1;
          if ('display' === e || 'visibility' === e) return !0;
          const o = t[t.length - 1],
            s = Bi(r, e),
            a = Bi(o, e);
          return (
            'You are trying to animate '
              .concat(e, ' from "')
              .concat(r, '" to "')
              .concat(o, '". ')
              .concat(
                r,
                ' is not an animatable value - to enable this animation set ',
              )
              .concat(r, ' to a value animatable to ')
              .concat(o, ' via the `style` property.'),
            !(!s || !a) &&
              ((function (t) {
                const e = t[0];
                if (1 === t.length) return !0;
                for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
              })(t) ||
                (('spring' === n || Ri(n)) && i))
          );
        })(t, r, o, s) ||
          ((!It.instantAnimations && a) ||
            null === u ||
            void 0 === u ||
            u(Jn(t, n, e)),
          (t[0] = t[t.length - 1]),
          (n.duration = 0),
          (n.repeat = 0)));
      const c = Dt(
          Dt(
            {
              startTime: i
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
            },
            n,
          ),
          {},
          { keyframes: t },
        ),
        h =
          !l &&
          (function (t) {
            var e;
            const {
              motionValue: n,
              name: i,
              repeatDelay: r,
              repeatType: o,
              damping: s,
              type: a,
            } = t;
            if (
              !Wi(
                null === n ||
                  void 0 === n ||
                  null === (e = n.owner) ||
                  void 0 === e
                  ? void 0
                  : e.current,
              )
            )
              return !1;
            const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
            return (
              $i() &&
              i &&
              Hi.has(i) &&
              ('transform' !== i || !u) &&
              !l &&
              !r &&
              'mirror' !== o &&
              0 !== s &&
              'inertia' !== a
            );
          })(c)
            ? new Vi(
                Dt(Dt({}, c), {}, { element: c.motionValue.owner.current }),
              )
            : new ii(c);
      (h.finished.then(() => this.notifyFinished()).catch(jt),
        this.pendingTimeline &&
          ((this.stopTimeline = h.attachTimeline(this.pendingTimeline)),
          (this.pendingTimeline = void 0)),
        (this._animation = h));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(t, e) {
      return this.finished.finally(t).then(() => {});
    }
    get animation() {
      var t;
      this._animation ||
        (null === (t = this.keyframeResolver) || void 0 === t || t.resume(),
        (wi = !0),
        Si(),
        _i(),
        (wi = !1));
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t) {
      this.animation.time = t;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t) {
      this.animation.speed = t;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(t))
          : (this.pendingTimeline = t),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      var t;
      (this._animation && this.animation.cancel(),
        null === (t = this.keyframeResolver) || void 0 === t || t.cancel());
    }
  }
  const Ki = (t) => null !== t;
  const Xi = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
    Qi = { type: 'keyframes', duration: 0.8 },
    Gi = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    Ji = (t, e) => {
      let { keyframes: n } = e;
      return n.length > 2
        ? Qi
        : qt.has(t)
          ? t.startsWith('scale')
            ? {
                type: 'spring',
                stiffness: 550,
                damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10,
              }
            : Xi
          : Gi;
    },
    Zi = [
      'when',
      'delay',
      'delayChildren',
      'staggerChildren',
      'staggerDirection',
      'repeat',
      'repeatType',
      'repeatDelay',
      'from',
      'elapsed',
    ];
  const tr = function (t, e, n) {
      let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 ? arguments[5] : void 0;
      return (s) => {
        const a = Nt(i, t) || {},
          l = a.delay || i.delay || 0;
        let { elapsed: u = 0 } = i;
        u -= ve(l);
        const c = Dt(
          Dt(
            {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: 'easeOut',
              velocity: e.getVelocity(),
            },
            a,
          ),
          {},
          {
            delay: -u,
            onUpdate: (t) => {
              (e.set(t), a.onUpdate && a.onUpdate(t));
            },
            onComplete: () => {
              (s(), a.onComplete && a.onComplete());
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : r,
          },
        );
        ((function (t) {
          let {
              when: e,
              delay: n,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: o,
              repeat: s,
              repeatType: a,
              repeatDelay: l,
              from: u,
              elapsed: c,
            } = t,
            h = Ot(t, Zi);
          return !!Object.keys(h).length;
        })(a) || Object.assign(c, Ji(t, c)),
          c.duration && (c.duration = ve(c.duration)),
          c.repeatDelay && (c.repeatDelay = ve(c.repeatDelay)),
          void 0 !== c.from && (c.keyframes[0] = c.from));
        let h = !1;
        if (
          ((!1 === c.type || (0 === c.duration && !c.repeatDelay)) &&
            ((c.duration = 0), 0 === c.delay && (h = !0)),
          (It.instantAnimations || It.skipAnimations) &&
            ((h = !0), (c.duration = 0), (c.delay = 0)),
          (c.allowFlatten = !a.type && !a.ease),
          h && !o && void 0 !== e.get())
        ) {
          const t = (function (t, e, n) {
            let { repeat: i, repeatType: r = 'loop' } = e;
            const o = t.filter(Ki),
              s = i && 'loop' !== r && i % 2 === 1 ? 0 : o.length - 1;
            return s && void 0 !== n ? n : o[s];
          })(c.keyframes, a);
          if (void 0 !== t)
            return void Ut.update(() => {
              (c.onUpdate(t), c.onComplete());
            });
        }
        return a.isSync ? new ii(c) : new qi(c);
      };
    },
    er = ['transition', 'transitionEnd'];
  function nr(t, e) {
    let { protectedKeys: n, needsAnimating: i } = t;
    const r = n.hasOwnProperty(e) && !0 !== i[e];
    return ((i[e] = !1), r);
  }
  function ir(t, e) {
    let {
        delay: n = 0,
        transitionOverride: i,
        type: r,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      { transition: o = t.getDefaultTransition(), transitionEnd: s } = e,
      a = Ot(e, er);
    i && (o = i);
    const l = [],
      u = r && t.animationState && t.animationState.getState()[r];
    for (const h in a) {
      var c;
      const e = t.getValue(
          h,
          null !== (c = t.latestValues[h]) && void 0 !== c ? c : null,
        ),
        i = a[h];
      if (void 0 === i || (u && nr(u, h))) continue;
      const r = Dt({ delay: n }, Nt(o || {}, h)),
        s = e.get();
      if (
        void 0 !== s &&
        !e.isAnimating &&
        !Array.isArray(i) &&
        i === s &&
        !r.velocity
      )
        continue;
      let d = !1;
      if (window.MotionHandoffAnimation) {
        const e = fe(t);
        if (e) {
          const t = window.MotionHandoffAnimation(e, h, Ut);
          null !== t && ((r.startTime = t), (d = !0));
        }
      }
      (ce(t, h),
        e.start(
          tr(
            h,
            e,
            i,
            t.shouldReduceMotion && Kt.has(h) ? { type: !1 } : r,
            t,
            d,
          ),
        ));
      const f = e.animation;
      f && l.push(f);
    }
    return (
      s &&
        Promise.all(l).then(() => {
          Ut.update(() => {
            s &&
              (function (t, e) {
                let n = Lt(t, e) || {},
                  { transitionEnd: i = {}, transition: r = {} } = n,
                  o = Ot(n, se);
                o = Dt(Dt({}, o), i);
                for (const s in o) ae(t, s, le(o[s]));
              })(t, s);
          });
        }),
      l
    );
  }
  function rr(t, e) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r = Lt(
      t,
      e,
      'exit' === i.type
        ? null === (n = t.presenceContext) || void 0 === n
          ? void 0
          : n.custom
        : void 0,
    );
    let { transition: o = t.getDefaultTransition() || {} } = r || {};
    i.transitionOverride && (o = i.transitionOverride);
    const s = r ? () => Promise.all(ir(t, r, i)) : () => Promise.resolve(),
      a =
        t.variantChildren && t.variantChildren.size
          ? function () {
              let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const {
                delayChildren: r = 0,
                staggerChildren: s,
                staggerDirection: a,
              } = o;
              return (function (t, e) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  r =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 0,
                  o =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : 1,
                  s = arguments.length > 6 ? arguments[6] : void 0;
                const a = [],
                  l = t.variantChildren.size,
                  u = (l - 1) * r,
                  c = 'function' === typeof i,
                  h = c
                    ? (t) => i(t, l)
                    : 1 === o
                      ? function () {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) * r
                          );
                        }
                      : function () {
                          return (
                            u -
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) *
                              r
                          );
                        };
                return (
                  Array.from(t.variantChildren)
                    .sort(or)
                    .forEach((t, r) => {
                      (t.notify('AnimationStart', e),
                        a.push(
                          rr(
                            t,
                            e,
                            Dt(
                              Dt({}, s),
                              {},
                              { delay: n + (c ? 0 : i) + h(r) },
                            ),
                          ).then(() => t.notify('AnimationComplete', e)),
                        ));
                    }),
                  Promise.all(a)
                );
              })(t, e, n, r, s, a, i);
            }
          : () => Promise.resolve(),
      { when: l } = o;
    if (l) {
      const [t, e] = 'beforeChildren' === l ? [s, a] : [a, s];
      return t().then(() => e());
    }
    return Promise.all([s(), a(i.delay)]);
  }
  function or(t, e) {
    return t.sortNodePosition(e);
  }
  function sr(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  function ar(t) {
    return 'string' === typeof t || Array.isArray(t);
  }
  const lr = [
      'animate',
      'whileInView',
      'whileFocus',
      'whileHover',
      'whileTap',
      'whileDrag',
      'exit',
    ],
    ur = ['initial', ...lr],
    cr = ur.length;
  function hr(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const e = (t.parent && hr(t.parent)) || {};
      return (void 0 !== t.props.initial && (e.initial = t.props.initial), e);
    }
    const e = {};
    for (let n = 0; n < cr; n++) {
      const i = ur[n],
        r = t.props[i];
      (ar(r) || !1 === r) && (e[i] = r);
    }
    return e;
  }
  const dr = ['transition', 'transitionEnd'],
    fr = [...lr].reverse(),
    pr = lr.length;
  function mr(t) {
    return (e) =>
      Promise.all(
        e.map((e) => {
          let { animation: n, options: i } = e;
          return (function (t, e) {
            let n,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if ((t.notify('AnimationStart', e), Array.isArray(e))) {
              const r = e.map((e) => rr(t, e, i));
              n = Promise.all(r);
            } else if ('string' === typeof e) n = rr(t, e, i);
            else {
              const r = 'function' === typeof e ? Lt(t, e, i.custom) : e;
              n = Promise.all(ir(t, r, i));
            }
            return n.then(() => {
              t.notify('AnimationComplete', e);
            });
          })(t, n, i);
        }),
      );
  }
  function gr(t) {
    let e = mr(t),
      n = br(),
      i = !0;
    const r = (e) => (n, i) => {
      var r;
      const o = Lt(
        t,
        i,
        'exit' === e
          ? null === (r = t.presenceContext) || void 0 === r
            ? void 0
            : r.custom
          : void 0,
      );
      if (o) {
        const { transition: t, transitionEnd: e } = o,
          i = Ot(o, dr);
        n = Dt(Dt(Dt({}, n), i), e);
      }
      return n;
    };
    function o(o) {
      const { props: s } = t,
        a = hr(t.parent) || {},
        l = [],
        u = new Set();
      let c = {},
        h = 1 / 0;
      for (let e = 0; e < pr; e++) {
        const d = fr[e],
          f = n[d],
          p = void 0 !== s[d] ? s[d] : a[d],
          m = ar(p),
          g = d === o ? f.isActive : null;
        !1 === g && (h = e);
        let v = p === a[d] && p !== s[d] && m;
        if (
          (v && i && t.manuallyAnimateOnMount && (v = !1),
          (f.protectedKeys = Dt({}, c)),
          (!f.isActive && null === g) ||
            (!p && !f.prevProp) ||
            At(p) ||
            'boolean' === typeof p)
        )
          continue;
        const y = vr(f.prevProp, p);
        let b = y || (d === o && f.isActive && !v && m) || (e > h && m),
          x = !1;
        const w = Array.isArray(p) ? p : [p];
        let _ = w.reduce(r(d), {});
        !1 === g && (_ = {});
        const { prevResolvedValues: S = {} } = f,
          k = Dt(Dt({}, S), _),
          E = (e) => {
            ((b = !0),
              u.has(e) && ((x = !0), u.delete(e)),
              (f.needsAnimating[e] = !0));
            const n = t.getValue(e);
            n && (n.liveStyle = !1);
          };
        for (const t in k) {
          const e = _[t],
            n = S[t];
          if (c.hasOwnProperty(t)) continue;
          let i = !1;
          ((i = oe(e) && oe(n) ? !sr(e, n) : e !== n),
            i
              ? void 0 !== e && null !== e
                ? E(t)
                : u.add(t)
              : void 0 !== e && u.has(t)
                ? E(t)
                : (f.protectedKeys[t] = !0));
        }
        ((f.prevProp = p),
          (f.prevResolvedValues = _),
          f.isActive && (c = Dt(Dt({}, c), _)),
          i && t.blockInitialAnimation && (b = !1));
        b &&
          (!(v && y) || x) &&
          l.push(...w.map((t) => ({ animation: t, options: { type: d } })));
      }
      if (u.size) {
        const e = {};
        if ('boolean' !== typeof s.initial) {
          const n = Lt(t, Array.isArray(s.initial) ? s.initial[0] : s.initial);
          n && n.transition && (e.transition = n.transition);
        }
        (u.forEach((n) => {
          const i = t.getBaseTarget(n),
            r = t.getValue(n);
          (r && (r.liveStyle = !0),
            (e[n] = null !== i && void 0 !== i ? i : null));
        }),
          l.push({ animation: e }));
      }
      let d = Boolean(l.length);
      return (
        !i ||
          (!1 !== s.initial && s.initial !== s.animate) ||
          t.manuallyAnimateOnMount ||
          (d = !1),
        (i = !1),
        d ? e(l) : Promise.resolve()
      );
    }
    return {
      animateChanges: o,
      setActive: function (e, i) {
        var r;
        if (n[e].isActive === i) return Promise.resolve();
        (null === (r = t.variantChildren) ||
          void 0 === r ||
          r.forEach((t) => {
            var n;
            return null === (n = t.animationState) || void 0 === n
              ? void 0
              : n.setActive(e, i);
          }),
          (n[e].isActive = i));
        const s = o(e);
        for (const t in n) n[t].protectedKeys = {};
        return s;
      },
      setAnimateFunction: function (n) {
        e = n(t);
      },
      getState: () => n,
      reset: () => {
        ((n = br()), (i = !0));
      },
    };
  }
  function vr(t, e) {
    return 'string' === typeof e ? e !== t : !!Array.isArray(e) && !sr(e, t);
  }
  function yr() {
    return {
      isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function br() {
    return {
      animate: yr(!0),
      whileInView: yr(),
      whileHover: yr(),
      whileTap: yr(),
      whileDrag: yr(),
      whileFocus: yr(),
      exit: yr(),
    };
  }
  class xr {
    constructor(t) {
      ((this.isMounted = !1), (this.node = t));
    }
    update() {}
  }
  let wr = 0;
  const _r = {
      animation: {
        Feature: class extends xr {
          constructor(t) {
            (super(t), t.animationState || (t.animationState = gr(t)));
          }
          updateAnimationControlsSubscription() {
            const { animate: t } = this.node.getProps();
            At(t) && (this.unmountControls = t.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            const { animate: t } = this.node.getProps(),
              { animate: e } = this.node.prevProps || {};
            t !== e && this.updateAnimationControlsSubscription();
          }
          unmount() {
            var t;
            (this.node.animationState.reset(),
              null === (t = this.unmountControls) ||
                void 0 === t ||
                t.call(this));
          }
        },
      },
      exit: {
        Feature: class extends xr {
          constructor() {
            (super(...arguments), (this.id = wr++));
          }
          update() {
            if (!this.node.presenceContext) return;
            const { isPresent: t, onExitComplete: e } =
                this.node.presenceContext,
              { isPresent: n } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === n) return;
            const i = this.node.animationState.setActive('exit', !t);
            e &&
              !t &&
              i.then(() => {
                e(this.id);
              });
          }
          mount() {
            const { register: t, onExitComplete: e } =
              this.node.presenceContext || {};
            (e && e(this.id), t && (this.unmount = t(this.id)));
          }
          unmount() {}
        },
      },
    },
    Sr = { x: !1, y: !1 };
  function kr() {
    return Sr.x || Sr.y;
  }
  function Er(t, e, n) {
    let i =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { passive: !0 };
    return (t.addEventListener(e, n, i), () => t.removeEventListener(e, n));
  }
  const Pr = (t) =>
    'mouse' === t.pointerType
      ? 'number' !== typeof t.button || t.button <= 0
      : !1 !== t.isPrimary;
  function Mr(t) {
    return { point: { x: t.pageX, y: t.pageY } };
  }
  function Cr(t, e, n, i) {
    return Er(
      t,
      e,
      (
        (t) => (e) =>
          Pr(e) && t(e, Mr(e))
      )(n),
      i,
    );
  }
  function Tr(t) {
    let { top: e, left: n, right: i, bottom: r } = t;
    return { x: { min: n, max: i }, y: { min: e, max: r } };
  }
  function Dr(t) {
    return t.max - t.min;
  }
  function Ar(t, e, n) {
    let i =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
    ((t.origin = i),
      (t.originPoint = nn(e.min, e.max, t.origin)),
      (t.scale = Dr(n) / Dr(e)),
      (t.translate = nn(n.min, n.max, t.origin) - t.originPoint),
      ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
        (t.scale = 1),
      ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) &&
        (t.translate = 0));
  }
  function Or(t, e, n, i) {
    (Ar(t.x, e.x, n.x, i ? i.originX : void 0),
      Ar(t.y, e.y, n.y, i ? i.originY : void 0));
  }
  function Fr(t, e, n) {
    ((t.min = n.min + e.min), (t.max = t.min + Dr(e)));
  }
  function Rr(t, e, n) {
    ((t.min = e.min - n.min), (t.max = t.min + Dr(e)));
  }
  function Lr(t, e, n) {
    (Rr(t.x, e.x, n.x), Rr(t.y, e.y, n.y));
  }
  const Nr = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  function jr(t) {
    return [t('x'), t('y')];
  }
  function Ir(t) {
    return void 0 === t || 1 === t;
  }
  function zr(t) {
    let { scale: e, scaleX: n, scaleY: i } = t;
    return !Ir(e) || !Ir(n) || !Ir(i);
  }
  function Vr(t) {
    return (
      zr(t) ||
      Br(t) ||
      t.z ||
      t.rotate ||
      t.rotateX ||
      t.rotateY ||
      t.skewX ||
      t.skewY
    );
  }
  function Br(t) {
    return Ur(t.x) || Ur(t.y);
  }
  function Ur(t) {
    return t && '0%' !== t;
  }
  function Wr(t, e, n) {
    return n + e * (t - n);
  }
  function Hr(t, e, n, i, r) {
    return (void 0 !== r && (t = Wr(t, r, i)), Wr(t, n, i) + e);
  }
  function $r(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      r = arguments.length > 4 ? arguments[4] : void 0;
    ((t.min = Hr(t.min, e, n, i, r)), (t.max = Hr(t.max, e, n, i, r)));
  }
  function Yr(t, e) {
    let { x: n, y: i } = e;
    ($r(t.x, n.translate, n.scale, n.originPoint),
      $r(t.y, i.translate, i.scale, i.originPoint));
  }
  const qr = 0.999999999999,
    Kr = 1.0000000000001;
  function Xr(t, e) {
    ((t.min = t.min + e), (t.max = t.max + e));
  }
  function Qr(t, e, n, i) {
    let r =
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
    $r(t, e, n, nn(t.min, t.max, r), i);
  }
  function Gr(t, e) {
    (Qr(t.x, e.x, e.scaleX, e.scale, e.originX),
      Qr(t.y, e.y, e.scaleY, e.scale, e.originY));
  }
  function Jr(t, e) {
    return Tr(
      (function (t, e) {
        if (!e) return t;
        const n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      })(t.getBoundingClientRect(), e),
    );
  }
  const Zr = (t) => {
    let { current: e } = t;
    return e ? e.ownerDocument.defaultView : null;
  };
  function to(t) {
    return (
      t &&
      'object' === typeof t &&
      Object.prototype.hasOwnProperty.call(t, 'current')
    );
  }
  const eo = (t, e) => Math.abs(t - e);
  class no {
    constructor(t, e) {
      let {
        transformPagePoint: n,
        contextWindow: i = window,
        dragSnapToOrigin: r = !1,
        distanceThreshold: o = 3,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
          const t = oo(this.lastMoveEventInfo, this.history),
            e = null !== this.startEvent,
            n =
              (function (t, e) {
                const n = eo(t.x, e.x),
                  i = eo(t.y, e.y);
                return Math.sqrt(n ** 2 + i ** 2);
              })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!e && !n) return;
          const { point: i } = t,
            { timestamp: r } = Ht;
          this.history.push(Dt(Dt({}, i), {}, { timestamp: r }));
          const { onStart: o, onMove: s } = this.handlers;
          (e ||
            (o && o(this.lastMoveEvent, t),
            (this.startEvent = this.lastMoveEvent)),
            s && s(this.lastMoveEvent, t));
        }),
        (this.handlePointerMove = (t, e) => {
          ((this.lastMoveEvent = t),
            (this.lastMoveEventInfo = io(e, this.transformPagePoint)),
            Ut.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (t, e) => {
          this.end();
          const {
            onEnd: n,
            onSessionEnd: i,
            resumeAnimation: r,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && r && r(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
          )
            return;
          const o = oo(
            'pointercancel' === t.type
              ? this.lastMoveEventInfo
              : io(e, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(t, o), i && i(t, o));
        }),
        !Pr(t))
      )
        return;
      ((this.dragSnapToOrigin = r),
        (this.handlers = e),
        (this.transformPagePoint = n),
        (this.distanceThreshold = o),
        (this.contextWindow = i || window));
      const s = io(Mr(t), this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Ht;
      this.history = [Dt(Dt({}, a), {}, { timestamp: l })];
      const { onSessionStart: u } = e;
      (u && u(t, oo(s, this.history)),
        (this.removeListeners = me(
          Cr(this.contextWindow, 'pointermove', this.handlePointerMove),
          Cr(this.contextWindow, 'pointerup', this.handlePointerUp),
          Cr(this.contextWindow, 'pointercancel', this.handlePointerUp),
        )));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      (this.removeListeners && this.removeListeners(), Wt(this.updatePoint));
    }
  }
  function io(t, e) {
    return e ? { point: e(t.point) } : t;
  }
  function ro(t, e) {
    return { x: t.x - e.x, y: t.y - e.y };
  }
  function oo(t, e) {
    let { point: n } = t;
    return {
      point: n,
      delta: ro(n, ao(e)),
      offset: ro(n, so(e)),
      velocity: lo(e, 0.1),
    };
  }
  function so(t) {
    return t[0];
  }
  function ao(t) {
    return t[t.length - 1];
  }
  function lo(t, e) {
    if (t.length < 2) return { x: 0, y: 0 };
    let n = t.length - 1,
      i = null;
    const r = ao(t);
    for (; n >= 0 && ((i = t[n]), !(r.timestamp - i.timestamp > ve(e))); ) n--;
    if (!i) return { x: 0, y: 0 };
    const o = ye(r.timestamp - i.timestamp);
    if (0 === o) return { x: 0, y: 0 };
    const s = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
    return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
  }
  function uo(t, e, n) {
    return {
      min: void 0 !== e ? t.min + e : void 0,
      max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
    };
  }
  function co(t, e) {
    let n = e.min - t.min,
      i = e.max - t.max;
    return (
      e.max - e.min < t.max - t.min && ([n, i] = [i, n]),
      { min: n, max: i }
    );
  }
  const ho = 0.35;
  function fo(t, e, n) {
    return { min: po(t, e), max: po(t, n) };
  }
  function po(t, e) {
    return 'number' === typeof t ? t : t[e] || 0;
  }
  const mo = new WeakMap();
  class go {
    constructor(t) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = t));
    }
    start(t) {
      let { snapToCursor: e = !1, distanceThreshold: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { presenceContext: i } = this.visualElement;
      if (i && !1 === i.isPresent) return;
      const { dragSnapToOrigin: r } = this.getProps();
      this.panSession = new no(
        t,
        {
          onSessionStart: (t) => {
            const { dragSnapToOrigin: n } = this.getProps();
            (n ? this.pauseAnimation() : this.stopAnimation(),
              e && this.snapToCursor(Mr(t).point));
          },
          onStart: (t, e) => {
            const {
              drag: n,
              dragPropagation: i,
              onDragStart: r,
            } = this.getProps();
            if (
              n &&
              !i &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock =
                'x' === (o = n) || 'y' === o
                  ? Sr[o]
                    ? null
                    : ((Sr[o] = !0),
                      () => {
                        Sr[o] = !1;
                      })
                  : Sr.x || Sr.y
                    ? null
                    : ((Sr.x = Sr.y = !0),
                      () => {
                        Sr.x = Sr.y = !1;
                      })),
              !this.openDragLock)
            )
              return;
            var o;
            ((this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              jr((t) => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (Ie.test(e)) {
                  const { projection: n } = this.visualElement;
                  if (n && n.layout) {
                    const i = n.layout.layoutBox[t];
                    if (i) {
                      e = Dr(i) * (parseFloat(e) / 100);
                    }
                  }
                }
                this.originPoint[t] = e;
              }),
              r && Ut.postRender(() => r(t, e)),
              ce(this.visualElement, 'transform'));
            const { animationState: s } = this.visualElement;
            s && s.setActive('whileDrag', !0);
          },
          onMove: (t, e) => {
            ((this.latestPointerEvent = t), (this.latestPanInfo = e));
            const {
              dragPropagation: n,
              dragDirectionLock: i,
              onDirectionLock: r,
              onDrag: o,
            } = this.getProps();
            if (!n && !this.openDragLock) return;
            const { offset: s } = e;
            if (i && null === this.currentDirection)
              return (
                (this.currentDirection = (function (t) {
                  let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 10,
                    n = null;
                  Math.abs(t.y) > e
                    ? (n = 'y')
                    : Math.abs(t.x) > e && (n = 'x');
                  return n;
                })(s)),
                void (
                  null !== this.currentDirection &&
                  r &&
                  r(this.currentDirection)
                )
              );
            (this.updateAxis('x', e.point, s),
              this.updateAxis('y', e.point, s),
              this.visualElement.render(),
              o && o(t, e));
          },
          onSessionEnd: (t, e) => {
            ((this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              this.stop(t, e),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          resumeAnimation: () =>
            jr((t) => {
              var e;
              return (
                'paused' === this.getAnimationState(t) &&
                (null === (e = this.getAxisMotionValue(t).animation) ||
                void 0 === e
                  ? void 0
                  : e.play())
              );
            }),
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: r,
          distanceThreshold: n,
          contextWindow: Zr(this.visualElement),
        },
      );
    }
    stop(t, e) {
      const n = t || this.latestPointerEvent,
        i = e || this.latestPanInfo,
        r = this.isDragging;
      if ((this.cancel(), !r || !i || !n)) return;
      const { velocity: o } = i;
      this.startAnimation(o);
      const { onDragEnd: s } = this.getProps();
      s && Ut.postRender(() => s(n, i));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: e } = this.visualElement;
      (t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      const { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        e && e.setActive('whileDrag', !1));
    }
    updateAxis(t, e, n) {
      const { drag: i } = this.getProps();
      if (!n || !vo(t, i, this.currentDirection)) return;
      const r = this.getAxisMotionValue(t);
      let o = this.originPoint[t] + n[t];
      (this.constraints &&
        this.constraints[t] &&
        (o = (function (t, e, n) {
          let { min: i, max: r } = e;
          return (
            void 0 !== i && t < i
              ? (t = n ? nn(i, t, n.min) : Math.max(t, i))
              : void 0 !== r &&
                t > r &&
                (t = n ? nn(r, t, n.max) : Math.min(t, r)),
            t
          );
        })(o, this.constraints[t], this.elastic[t])),
        r.set(o));
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: e, dragElastic: n } = this.getProps(),
        i =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : null === (t = this.visualElement.projection) || void 0 === t
              ? void 0
              : t.layout,
        r = this.constraints;
      (e && to(e)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : (this.constraints =
            !(!e || !i) &&
            (function (t, e) {
              let { top: n, left: i, bottom: r, right: o } = e;
              return { x: uo(t.x, i, o), y: uo(t.y, n, r) };
            })(i.layoutBox, e)),
        (this.elastic = (function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho;
          return (
            !1 === t ? (t = 0) : !0 === t && (t = ho),
            { x: fo(t, 'left', 'right'), y: fo(t, 'top', 'bottom') }
          );
        })(n)),
        r !== this.constraints &&
          i &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          jr((t) => {
            !1 !== this.constraints &&
              this.getAxisMotionValue(t) &&
              (this.constraints[t] = (function (t, e) {
                const n = {};
                return (
                  void 0 !== e.min && (n.min = e.min - t.min),
                  void 0 !== e.max && (n.max = e.max - t.min),
                  n
                );
              })(i.layoutBox[t], this.constraints[t]));
          }));
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: e } =
        this.getProps();
      if (!t || !to(t)) return !1;
      const n = t.current,
        { projection: i } = this.visualElement;
      if (!i || !i.layout) return !1;
      const r = (function (t, e, n) {
        const i = Jr(t, n),
          { scroll: r } = e;
        return (r && (Xr(i.x, r.offset.x), Xr(i.y, r.offset.y)), i);
      })(n, i.root, this.visualElement.getTransformPagePoint());
      let o = (function (t, e) {
        return { x: co(t.x, e.x), y: co(t.y, e.y) };
      })(i.layout.layoutBox, r);
      if (e) {
        const t = e(
          (function (t) {
            let { x: e, y: n } = t;
            return { top: n.min, right: e.max, bottom: n.max, left: e.min };
          })(o),
        );
        ((this.hasMutatedConstraints = !!t), t && (o = Tr(t)));
      }
      return o;
    }
    startAnimation(t) {
      const {
          drag: e,
          dragMomentum: n,
          dragElastic: i,
          dragTransition: r,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = jr((s) => {
          if (!vo(s, e, this.currentDirection)) return;
          let l = (a && a[s]) || {};
          o && (l = { min: 0, max: 0 });
          const u = i ? 200 : 1e6,
            c = i ? 40 : 1e7,
            h = Dt(
              Dt(
                {
                  type: 'inertia',
                  velocity: n ? t[s] : 0,
                  bounceStiffness: u,
                  bounceDamping: c,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                },
                r,
              ),
              l,
            );
          return this.startAxisValueAnimation(s, h);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(t, e) {
      const n = this.getAxisMotionValue(t);
      return (
        ce(this.visualElement, t),
        n.start(tr(t, n, 0, e, this.visualElement, !1))
      );
    }
    stopAnimation() {
      jr((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      jr((t) => {
        var e;
        return null === (e = this.getAxisMotionValue(t).animation) ||
          void 0 === e
          ? void 0
          : e.pause();
      });
    }
    getAnimationState(t) {
      var e;
      return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
        ? void 0
        : e.state;
    }
    getAxisMotionValue(t) {
      const e = '_drag'.concat(t.toUpperCase()),
        n = this.visualElement.getProps(),
        i = n[e];
      return (
        i ||
        this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      jr((e) => {
        const { drag: n } = this.getProps();
        if (!vo(e, n, this.currentDirection)) return;
        const { projection: i } = this.visualElement,
          r = this.getAxisMotionValue(e);
        if (i && i.layout) {
          const { min: n, max: o } = i.layout.layoutBox[e];
          r.set(t[e] - nn(n, o, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: e } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!to(e) || !n || !this.constraints) return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      jr((t) => {
        const e = this.getAxisMotionValue(t);
        if (e && !1 !== this.constraints) {
          const n = e.get();
          i[t] = (function (t, e) {
            let n = 0.5;
            const i = Dr(t),
              r = Dr(e);
            return (
              r > i
                ? (n = qn(e.min, e.max - i, t.min))
                : i > r && (n = qn(t.min, t.max - r, e.min)),
              ge(0, 1, n)
            );
          })({ min: n, max: n }, this.constraints[t]);
        }
      });
      const { transformTemplate: r } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = r ? r({}, '') : 'none'),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        jr((e) => {
          if (!vo(e, t, null)) return;
          const n = this.getAxisMotionValue(e),
            { min: r, max: o } = this.constraints[e];
          n.set(nn(r, o, i[e]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      mo.set(this.visualElement, this);
      const t = Cr(this.visualElement.current, 'pointerdown', (t) => {
          const { drag: e, dragListener: n = !0 } = this.getProps();
          e && n && this.start(t);
        }),
        e = () => {
          const { dragConstraints: t } = this.getProps();
          to(t) &&
            t.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: n } = this.visualElement,
        i = n.addEventListener('measure', e);
      (n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
        Ut.read(e));
      const r = Er(window, 'resize', () =>
          this.scalePositionWithinConstraints(),
        ),
        o = n.addEventListener('didUpdate', (t) => {
          let { delta: e, hasLayoutChanged: n } = t;
          this.isDragging &&
            n &&
            (jr((t) => {
              const n = this.getAxisMotionValue(t);
              n &&
                ((this.originPoint[t] += e[t].translate),
                n.set(n.get() + e[t].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        (r(), t(), i(), o && o());
      };
    }
    getProps() {
      const t = this.visualElement.getProps(),
        {
          drag: e = !1,
          dragDirectionLock: n = !1,
          dragPropagation: i = !1,
          dragConstraints: r = !1,
          dragElastic: o = ho,
          dragMomentum: s = !0,
        } = t;
      return Dt(
        Dt({}, t),
        {},
        {
          drag: e,
          dragDirectionLock: n,
          dragPropagation: i,
          dragConstraints: r,
          dragElastic: o,
          dragMomentum: s,
        },
      );
    }
  }
  function vo(t, e, n) {
    return (!0 === e || e === t) && (null === n || n === t);
  }
  const yo = (t) => (e, n) => {
    t && Ut.postRender(() => t(e, n));
  };
  var bo = n(579);
  const { schedule: xo, cancel: wo } = Bt(queueMicrotask, !1),
    _o = (0, o.createContext)(null);
  const So = (0, o.createContext)({}),
    ko = (0, o.createContext)({}),
    Eo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function Po(t, e) {
    return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
  }
  const Mo = {
      correct: (t, e) => {
        if (!e.target) return t;
        if ('string' === typeof t) {
          if (!ze.test(t)) return t;
          t = parseFloat(t);
        }
        const n = Po(t, e.target.x),
          i = Po(t, e.target.y);
        return ''.concat(n, '% ').concat(i, '%');
      },
    },
    Co = {
      correct: (t, e) => {
        let { treeScale: n, projectionDelta: i } = e;
        const r = t,
          o = Ze.parse(t);
        if (o.length > 5) return r;
        const s = Ze.createTransformer(t),
          a = 'number' !== typeof o[0] ? 1 : 0,
          l = i.x.scale * n.x,
          u = i.y.scale * n.y;
        ((o[0 + a] /= l), (o[1 + a] /= u));
        const c = nn(l, u, 0.5);
        return (
          'number' === typeof o[2 + a] && (o[2 + a] /= c),
          'number' === typeof o[3 + a] && (o[3 + a] /= c),
          s(o)
        );
      },
    },
    To = {};
  let Do = !1;
  class Ao extends o.Component {
    componentDidMount() {
      const {
          visualElement: t,
          layoutGroup: e,
          switchLayoutGroup: n,
          layoutId: i,
        } = this.props,
        { projection: r } = t;
      (!(function (t) {
        for (const e in t)
          ((To[e] = t[e]), we(e) && (To[e].isCSSVariable = !0));
      })(Fo),
        r &&
          (e.group && e.group.add(r),
          n && n.register && i && n.register(r),
          Do && r.root.didUpdate(),
          r.addEventListener('animationComplete', () => {
            this.safeToRemove();
          }),
          r.setOptions(
            Dt(
              Dt({}, r.options),
              {},
              { onExitComplete: () => this.safeToRemove() },
            ),
          )),
        (Eo.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(t) {
      const {
          layoutDependency: e,
          visualElement: n,
          drag: i,
          isPresent: r,
        } = this.props,
        { projection: o } = n;
      return o
        ? ((o.isPresent = r),
          (Do = !0),
          i || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
            ? o.willUpdate()
            : this.safeToRemove(),
          t.isPresent !== r &&
            (r
              ? o.promote()
              : o.relegate() ||
                Ut.postRender(() => {
                  const t = o.getStack();
                  (t && t.members.length) || this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t &&
        (t.root.didUpdate(),
        xo.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: t,
          layoutGroup: e,
          switchLayoutGroup: n,
        } = this.props,
        { projection: i } = t;
      i &&
        (i.scheduleCheckAfterUnmount(),
        e && e.group && e.group.remove(i),
        n && n.deregister && n.deregister(i));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function Oo(t) {
    const [e, n] = (function () {
        let t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const e = (0, o.useContext)(_o);
        if (null === e) return [!0, null];
        const { isPresent: n, onExitComplete: i, register: r } = e,
          s = (0, o.useId)();
        (0, o.useEffect)(() => {
          if (t) return r(s);
        }, [t]);
        const a = (0, o.useCallback)(() => t && i && i(s), [s, i, t]);
        return !n && i ? [!1, a] : [!0];
      })(),
      i = (0, o.useContext)(So);
    return (0, bo.jsx)(
      Ao,
      Dt(
        Dt({}, t),
        {},
        {
          layoutGroup: i,
          switchLayoutGroup: (0, o.useContext)(ko),
          isPresent: e,
          safeToRemove: n,
        },
      ),
    );
  }
  const Fo = {
    borderRadius: Dt(
      Dt({}, Mo),
      {},
      {
        applyTo: [
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ],
      },
    ),
    borderTopLeftRadius: Mo,
    borderTopRightRadius: Mo,
    borderBottomLeftRadius: Mo,
    borderBottomRightRadius: Mo,
    boxShadow: Co,
  };
  function Ro(t) {
    return Ui(t) && 'ownerSVGElement' in t;
  }
  const Lo = (t, e) => t.depth - e.depth;
  class No {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(t) {
      (Xt(this.children, t), (this.isDirty = !0));
    }
    remove(t) {
      (Qt(this.children, t), (this.isDirty = !0));
    }
    forEach(t) {
      (this.isDirty && this.children.sort(Lo),
        (this.isDirty = !1),
        this.children.forEach(t));
    }
  }
  function jo(t, e) {
    const n = ee.now(),
      i = (r) => {
        let { timestamp: o } = r;
        const s = o - n;
        s >= e && (Wt(i), t(s - e));
      };
    return (Ut.setup(i, !0), () => Wt(i));
  }
  function Io(t) {
    return ue(t) ? t.get() : t;
  }
  const zo = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
    Vo = zo.length,
    Bo = (t) => ('string' === typeof t ? parseFloat(t) : t),
    Uo = (t) => 'number' === typeof t || ze.test(t);
  function Wo(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius;
  }
  const Ho = Yo(0, 0.5, Un),
    $o = Yo(0.5, 0.95, jt);
  function Yo(t, e, n) {
    return (i) => (i < t ? 0 : i > e ? 1 : n(qn(t, e, i)));
  }
  function qo(t, e) {
    ((t.min = e.min), (t.max = e.max));
  }
  function Ko(t, e) {
    (qo(t.x, e.x), qo(t.y, e.y));
  }
  function Xo(t, e) {
    ((t.translate = e.translate),
      (t.scale = e.scale),
      (t.originPoint = e.originPoint),
      (t.origin = e.origin));
  }
  function Qo(t, e, n, i, r) {
    return (
      (t = Wr((t -= e), 1 / n, i)),
      void 0 !== r && (t = Wr(t, 1 / r, i)),
      t
    );
  }
  function Go(t, e, n, i, r) {
    let [o, s, a] = n;
    !(function (t) {
      let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
        r = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t,
        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t;
      Ie.test(e) &&
        ((e = parseFloat(e)), (e = nn(s.min, s.max, e / 100) - s.min));
      if ('number' !== typeof e) return;
      let a = nn(o.min, o.max, i);
      (t === o && (a -= e),
        (t.min = Qo(t.min, e, n, a, r)),
        (t.max = Qo(t.max, e, n, a, r)));
    })(t, e[o], e[s], e[a], e.scale, i, r);
  }
  const Jo = ['x', 'scaleX', 'originX'],
    Zo = ['y', 'scaleY', 'originY'];
  function ts(t, e, n, i) {
    (Go(t.x, e, Jo, n ? n.x : void 0, i ? i.x : void 0),
      Go(t.y, e, Zo, n ? n.y : void 0, i ? i.y : void 0));
  }
  function es(t) {
    return 0 === t.translate && 1 === t.scale;
  }
  function ns(t) {
    return es(t.x) && es(t.y);
  }
  function is(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function rs(t, e) {
    return (
      Math.round(t.min) === Math.round(e.min) &&
      Math.round(t.max) === Math.round(e.max)
    );
  }
  function os(t, e) {
    return rs(t.x, e.x) && rs(t.y, e.y);
  }
  function ss(t) {
    return Dr(t.x) / Dr(t.y);
  }
  function as(t, e) {
    return (
      t.translate === e.translate &&
      t.scale === e.scale &&
      t.originPoint === e.originPoint
    );
  }
  class ls {
    constructor() {
      this.members = [];
    }
    add(t) {
      (Xt(this.members, t), t.scheduleRender());
    }
    remove(t) {
      if (
        (Qt(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
      ) {
        const t = this.members[this.members.length - 1];
        t && this.promote(t);
      }
    }
    relegate(t) {
      const e = this.members.findIndex((e) => t === e);
      if (0 === e) return !1;
      let n;
      for (let i = e; i >= 0; i--) {
        const t = this.members[i];
        if (!1 !== t.isPresent) {
          n = t;
          break;
        }
      }
      return !!n && (this.promote(n), !0);
    }
    promote(t, e) {
      const n = this.lead;
      if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
        (n.instance && n.scheduleRender(),
          t.scheduleRender(),
          (t.resumeFrom = n),
          e && (t.resumeFrom.preserveOpacity = !0),
          n.snapshot &&
            ((t.snapshot = n.snapshot),
            (t.snapshot.latestValues = n.animationValues || n.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
        const { crossfade: i } = t.options;
        !1 === i && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: e, resumingFrom: n } = t;
        (e.onExitComplete && e.onExitComplete(),
          n && n.options.onExitComplete && n.options.onExitComplete());
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const us = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
    cs = ['', 'X', 'Y', 'Z'];
  let hs = 0;
  function ds(t, e, n, i) {
    const { latestValues: r } = e;
    r[t] && ((n[t] = r[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
  }
  function fs(t) {
    if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = fe(e);
    if (window.MotionHasOptimisedAnimation(n, 'transform')) {
      const { layout: e, layoutId: i } = t.options;
      window.MotionCancelOptimisedAnimation(n, 'transform', Ut, !(e || i));
    }
    const { parent: i } = t;
    i && !i.hasCheckedOptimisedAppear && fs(i);
  }
  function ps(t) {
    let {
      attachResizeListener: e,
      defaultParent: n,
      measureScroll: i,
      checkIsScrollRoot: r,
      resetTransform: o,
    } = t;
    return class {
      constructor() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null === n || void 0 === n
                ? void 0
                : n();
        ((this.id = hs++),
          (this.animationId = 0),
          (this.animationCommitId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            ((this.projectionUpdateScheduled = !1),
              Vt.value &&
                (us.nodes =
                  us.calculatedTargetDeltas =
                  us.calculatedProjections =
                    0),
              this.nodes.forEach(vs),
              this.nodes.forEach(ks),
              this.nodes.forEach(Es),
              this.nodes.forEach(ys),
              Vt.addProjectionMetrics && Vt.addProjectionMetrics(us));
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = t),
          (this.root = e ? e.root || e : this),
          (this.path = e ? [...e.path, e] : []),
          (this.parent = e),
          (this.depth = e ? e.depth + 1 : 0));
        for (let n = 0; n < this.path.length; n++)
          this.path[n].shouldResetTransform = !0;
        this.root === this && (this.nodes = new No());
      }
      addEventListener(t, e) {
        return (
          this.eventHandlers.has(t) || this.eventHandlers.set(t, new Gt()),
          this.eventHandlers.get(t).add(e)
        );
      }
      notifyListeners(t) {
        const e = this.eventHandlers.get(t);
        for (
          var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          i[r - 1] = arguments[r];
        e && e.notify(...i);
      }
      hasListeners(t) {
        return this.eventHandlers.has(t);
      }
      mount(t) {
        if (this.instance) return;
        var n;
        ((this.isSVG = Ro(t) && !(Ro((n = t)) && 'svg' === n.tagName)),
          (this.instance = t));
        const { layoutId: i, layout: r, visualElement: o } = this.options;
        if (
          (o && !o.current && o.mount(t),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (r || i) && (this.isLayoutDirty = !0),
          e)
        ) {
          let n,
            i = 0;
          const r = () => (this.root.updateBlockedByResize = !1);
          (Ut.read(() => {
            i = window.innerWidth;
          }),
            e(t, () => {
              const t = window.innerWidth;
              t !== i &&
                ((i = t),
                (this.root.updateBlockedByResize = !0),
                n && n(),
                (n = jo(r, 250)),
                Eo.hasAnimatedSinceResize &&
                  ((Eo.hasAnimatedSinceResize = !1), this.nodes.forEach(Ss)));
            }));
        }
        (i && this.root.registerSharedNode(i, this),
          !1 !== this.options.animate &&
            o &&
            (i || r) &&
            this.addEventListener('didUpdate', (t) => {
              let {
                delta: e,
                hasLayoutChanged: n,
                hasRelativeLayoutChanged: i,
                layout: r,
              } = t;
              if (this.isTreeAnimationBlocked())
                return (
                  (this.target = void 0),
                  void (this.relativeTarget = void 0)
                );
              const s =
                  this.options.transition || o.getDefaultTransition() || As,
                { onLayoutAnimationStart: a, onLayoutAnimationComplete: l } =
                  o.getProps(),
                u = !this.targetLayout || !os(this.targetLayout, r),
                c = !n && i;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                c ||
                (n && (u || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const t = Dt(
                  Dt({}, Nt(s, 'layout')),
                  {},
                  { onPlay: a, onComplete: l },
                );
                ((o.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, c));
              } else
                (n || Ss(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            }));
      }
      unmount() {
        (this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this));
        const t = this.getStack();
        (t && t.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          this.eventHandlers.clear(),
          Wt(this.updateProjection));
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(Ps),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: t } = this.options;
        return t && t.getProps().transformTemplate;
      }
      willUpdate() {
        let t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
          return void (
            this.options.onExitComplete && this.options.onExitComplete()
          );
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            fs(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let r = 0; r < this.path.length; r++) {
          const t = this.path[r];
          ((t.shouldResetTransform = !0),
            t.updateScroll('snapshot'),
            t.options.layoutRoot && t.willUpdate(!1));
        }
        const { layoutId: e, layout: n } = this.options;
        if (void 0 === e && !n) return;
        const i = this.getTransformTemplate();
        ((this.prevTransformTemplateValue = i
          ? i(this.latestValues, '')
          : void 0),
          this.updateSnapshot(),
          t && this.notifyListeners('willUpdate'));
      }
      update() {
        this.updateScheduled = !1;
        if (this.isUpdateBlocked())
          return (
            this.unblockUpdate(),
            this.clearAllSnapshots(),
            void this.nodes.forEach(xs)
          );
        if (this.animationId <= this.animationCommitId)
          return void this.nodes.forEach(ws);
        ((this.animationCommitId = this.animationId),
          this.isUpdating
            ? ((this.isUpdating = !1),
              this.nodes.forEach(_s),
              this.nodes.forEach(ms),
              this.nodes.forEach(gs))
            : this.nodes.forEach(ws),
          this.clearAllSnapshots());
        const t = ee.now();
        ((Ht.delta = ge(0, 1e3 / 60, t - Ht.timestamp)),
          (Ht.timestamp = t),
          (Ht.isProcessing = !0),
          $t.update.process(Ht),
          $t.preRender.process(Ht),
          $t.render.process(Ht),
          (Ht.isProcessing = !1));
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), xo.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        (this.nodes.forEach(bs), this.sharedNodes.forEach(Ms));
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          Ut.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        Ut.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot &&
          this.instance &&
          ((this.snapshot = this.measure()),
          !this.snapshot ||
            Dr(this.snapshot.measuredBox.x) ||
            Dr(this.snapshot.measuredBox.y) ||
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance) return;
        if (
          (this.updateScroll(),
          (!this.options.alwaysMeasureLayout || !this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let n = 0; n < this.path.length; n++) {
            this.path[n].updateScroll();
          }
        const t = this.layout;
        ((this.layout = this.measure(!1)),
          (this.layoutCorrected = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
          }),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners('measure', this.layout.layoutBox));
        const { visualElement: e } = this.options;
        e &&
          e.notify(
            'LayoutMeasure',
            this.layout.layoutBox,
            t ? t.layoutBox : void 0,
          );
      }
      updateScroll() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'measure',
          e = Boolean(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === t &&
            (e = !1),
          e && this.instance)
        ) {
          const e = r(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: e,
            offset: i(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e,
          };
        }
      }
      resetTransform() {
        if (!o) return;
        const t =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          e = this.projectionDelta && !ns(this.projectionDelta),
          n = this.getTransformTemplate(),
          i = n ? n(this.latestValues, '') : void 0,
          r = i !== this.prevTransformTemplateValue;
        t &&
          this.instance &&
          (e || Vr(this.latestValues) || r) &&
          (o(this.instance, i),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure() {
        let t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const e = this.measurePageBox();
        let n = this.removeElementScroll(e);
        var i;
        return (
          t && (n = this.removeTransform(n)),
          Rs((i = n).x),
          Rs(i.y),
          {
            animationId: this.root.animationId,
            measuredBox: e,
            layoutBox: n,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var t;
        const { visualElement: e } = this.options;
        if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        const n = e.measureViewportBox();
        if (
          !(
            (null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) ||
            this.path.some(Ns)
          )
        ) {
          const { scroll: t } = this.root;
          t && (Xr(n.x, t.offset.x), Xr(n.y, t.offset.y));
        }
        return n;
      }
      removeElementScroll(t) {
        var e;
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        if ((Ko(n, t), null !== (e = this.scroll) && void 0 !== e && e.wasRoot))
          return n;
        for (let i = 0; i < this.path.length; i++) {
          const e = this.path[i],
            { scroll: r, options: o } = e;
          e !== this.root &&
            r &&
            o.layoutScroll &&
            (r.wasRoot && Ko(n, t), Xr(n.x, r.offset.x), Xr(n.y, r.offset.y));
        }
        return n;
      }
      applyTransform(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Ko(n, t);
        for (let i = 0; i < this.path.length; i++) {
          const t = this.path[i];
          (!e &&
            t.options.layoutScroll &&
            t.scroll &&
            t !== t.root &&
            Gr(n, { x: -t.scroll.offset.x, y: -t.scroll.offset.y }),
            Vr(t.latestValues) && Gr(n, t.latestValues));
        }
        return (Vr(this.latestValues) && Gr(n, this.latestValues), n);
      }
      removeTransform(t) {
        const e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Ko(e, t);
        for (let n = 0; n < this.path.length; n++) {
          const t = this.path[n];
          if (!t.instance) continue;
          if (!Vr(t.latestValues)) continue;
          zr(t.latestValues) && t.updateSnapshot();
          const i = Nr();
          (Ko(i, t.measurePageBox()),
            ts(
              e,
              t.latestValues,
              t.snapshot ? t.snapshot.layoutBox : void 0,
              i,
            ));
        }
        return (Vr(this.latestValues) && ts(e, this.latestValues), e);
      }
      setTargetDelta(t) {
        ((this.targetDelta = t),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0));
      }
      setOptions(t) {
        this.options = Dt(
          Dt(Dt({}, this.options), t),
          {},
          { crossfade: void 0 === t.crossfade || t.crossfade },
        );
      }
      clearMeasurements() {
        ((this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1));
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Ht.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta() {
        var t;
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const n = this.getLead();
        (this.isProjectionDirty ||
          (this.isProjectionDirty = n.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = n.isSharedProjectionDirty));
        const i = Boolean(this.resumingFrom) || this !== n;
        if (
          !(
            e ||
            (i && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (null !== (t = this.parent) &&
              void 0 !== t &&
              t.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: r, layoutId: o } = this.options;
        if (this.layout && (r || o)) {
          if (
            ((this.resolvedRelativeTargetAt = Ht.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const t = this.getClosestProjectingParent();
            t && t.layout && 1 !== this.animationProgress
              ? ((this.relativeParent = t),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.relativeTargetOrigin = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                Lr(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  t.layout.layoutBox,
                ),
                Ko(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (this.relativeTarget || this.targetDelta) {
            var s, a, l;
            if (
              (this.target ||
                ((this.target = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.targetWithTransforms = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                })),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  (s = this.target),
                  (a = this.relativeTarget),
                  (l = this.relativeParent.target),
                  Fr(s.x, a.x, l.x),
                  Fr(s.y, a.y, l.y))
                : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox,
                        ))
                      : Ko(this.target, this.layout.layoutBox),
                    Yr(this.target, this.targetDelta))
                  : Ko(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const t = this.getClosestProjectingParent();
              t &&
              Boolean(t.resumingFrom) === Boolean(this.resumingFrom) &&
              !t.options.layoutScroll &&
              t.target &&
              1 !== this.animationProgress
                ? ((this.relativeParent = t),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.relativeTargetOrigin = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  Lr(this.relativeTargetOrigin, this.target, t.target),
                  Ko(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            Vt.value && us.calculatedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          this.parent &&
          !zr(this.parent.latestValues) &&
          !Br(this.parent.latestValues)
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return Boolean(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
            this.layout,
        );
      }
      calcProjection() {
        var t;
        const e = this.getLead(),
          n = Boolean(this.resumingFrom) || this !== e;
        let i = !0;
        if (
          ((this.isProjectionDirty ||
            (null !== (t = this.parent) &&
              void 0 !== t &&
              t.isProjectionDirty)) &&
            (i = !1),
          n &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (i = !1),
          this.resolvedRelativeTargetAt === Ht.timestamp && (i = !1),
          i)
        )
          return;
        const { layout: r, layoutId: o } = this.options;
        if (
          ((this.isTreeAnimating = Boolean(
            (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation,
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || (!r && !o))
        )
          return;
        Ko(this.layoutCorrected, this.layout.layoutBox);
        const s = this.treeScale.x,
          a = this.treeScale.y;
        (!(function (t, e, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const r = n.length;
          if (!r) return;
          let o, s;
          e.x = e.y = 1;
          for (let a = 0; a < r; a++) {
            ((o = n[a]), (s = o.projectionDelta));
            const { visualElement: r } = o.options;
            (r && r.props.style && 'contents' === r.props.style.display) ||
              (i &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                Gr(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
              s && ((e.x *= s.x.scale), (e.y *= s.y.scale), Yr(t, s)),
              i && Vr(o.latestValues) && Gr(t, o.latestValues));
          }
          (e.x < Kr && e.x > qr && (e.x = 1),
            e.y < Kr && e.y > qr && (e.y = 1));
        })(this.layoutCorrected, this.treeScale, this.path, n),
          !e.layout ||
            e.target ||
            (1 === this.treeScale.x && 1 === this.treeScale.y) ||
            ((e.target = e.layout.layoutBox),
            (e.targetWithTransforms = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            })));
        const { target: l } = e;
        l
          ? (this.projectionDelta && this.prevProjectionDelta
              ? (Xo(this.prevProjectionDelta.x, this.projectionDelta.x),
                Xo(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
            Or(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues,
            ),
            (this.treeScale.x === s &&
              this.treeScale.y === a &&
              as(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              as(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners('projectionUpdate', l)),
            Vt.value && us.calculatedProjections++)
          : this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender() {
        var t;
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (
          (null === (t = this.options.visualElement) ||
            void 0 === t ||
            t.scheduleRender(),
          e)
        ) {
          const t = this.getStack();
          t && t.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        ((this.prevProjectionDelta = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
          (this.projectionDelta = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }),
          (this.projectionDeltaWithTransform = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }));
      }
      setAnimationOrigin(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = this.snapshot,
          i = n ? n.latestValues : {},
          r = Dt({}, this.latestValues),
          o = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !e));
        const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
          a =
            (n ? n.source : void 0) !==
            (this.layout ? this.layout.source : void 0),
          l = this.getStack(),
          u = !l || l.members.length <= 1,
          c = Boolean(
            a && !u && !0 === this.options.crossfade && !this.path.some(Ds),
          );
        let h;
        ((this.animationProgress = 0),
          (this.mixTargetDelta = (e) => {
            const n = e / 1e3;
            var l, d;
            (Cs(o.x, t.x, n),
              Cs(o.y, t.y, n),
              this.setTargetDelta(o),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (Lr(
                  s,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                ),
                (function (t, e, n, i) {
                  (Ts(t.x, e.x, n.x, i), Ts(t.y, e.y, n.y, i));
                })(this.relativeTarget, this.relativeTargetOrigin, s, n),
                h &&
                  ((l = this.relativeTarget),
                  (d = h),
                  is(l.x, d.x) && is(l.y, d.y)) &&
                  (this.isProjectionDirty = !1),
                h || (h = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                Ko(h, this.relativeTarget)),
              a &&
                ((this.animationValues = r),
                (function (t, e, n, i, r, o) {
                  var s, a;
                  if (r)
                    ((t.opacity = nn(
                      0,
                      null !== (s = n.opacity) && void 0 !== s ? s : 1,
                      Ho(i),
                    )),
                      (t.opacityExit = nn(
                        null !== (a = e.opacity) && void 0 !== a ? a : 1,
                        0,
                        $o(i),
                      )));
                  else if (o) {
                    var l, u;
                    t.opacity = nn(
                      null !== (l = e.opacity) && void 0 !== l ? l : 1,
                      null !== (u = n.opacity) && void 0 !== u ? u : 1,
                      i,
                    );
                  }
                  for (let c = 0; c < Vo; c++) {
                    const r = 'border'.concat(zo[c], 'Radius');
                    let o = Wo(e, r),
                      s = Wo(n, r);
                    (void 0 === o && void 0 === s) ||
                      (o || (o = 0),
                      s || (s = 0),
                      0 === o || 0 === s || Uo(o) === Uo(s)
                        ? ((t[r] = Math.max(nn(Bo(o), Bo(s), i), 0)),
                          (Ie.test(s) || Ie.test(o)) && (t[r] += '%'))
                        : (t[r] = s));
                  }
                  (e.rotate || n.rotate) &&
                    (t.rotate = nn(e.rotate || 0, n.rotate || 0, i));
                })(r, i, this.latestValues, n, c, u)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = n));
          }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
      }
      startAnimation(t) {
        var e, n;
        (this.notifyListeners('animationStart'),
          null === (e = this.currentAnimation) || void 0 === e || e.stop(),
          null === (n = this.resumingFrom) ||
            void 0 === n ||
            null === (n = n.currentAnimation) ||
            void 0 === n ||
            n.stop(),
          this.pendingAnimation &&
            (Wt(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = Ut.update(() => {
            ((Eo.hasAnimatedSinceResize = !0),
              be.layout++,
              this.motionValue || (this.motionValue = re(0)),
              (this.currentAnimation = (function (t, e, n) {
                const i = ue(t) ? t : re(t);
                return (i.start(tr('', i, e, n)), i.animation);
              })(
                this.motionValue,
                [0, 1e3],
                Dt(
                  Dt({}, t),
                  {},
                  {
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onStop: () => {
                      be.layout--;
                    },
                    onComplete: () => {
                      (be.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation());
                    },
                  },
                ),
              )),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0));
          })));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const t = this.getStack();
        (t && t.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners('animationComplete'));
      }
      finishAnimation() {
        (this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(1e3),
          this.currentAnimation.stop()),
          this.completeAnimation());
      }
      applyTransformsToTarget() {
        const t = this.getLead();
        let {
          targetWithTransforms: e,
          target: n,
          layout: i,
          latestValues: r,
        } = t;
        if (e && n && i) {
          if (
            this !== t &&
            this.layout &&
            i &&
            Ls(this.options.animationType, this.layout.layoutBox, i.layoutBox)
          ) {
            n = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            const e = Dr(this.layout.layoutBox.x);
            ((n.x.min = t.target.x.min), (n.x.max = n.x.min + e));
            const i = Dr(this.layout.layoutBox.y);
            ((n.y.min = t.target.y.min), (n.y.max = n.y.min + i));
          }
          (Ko(e, n),
            Gr(e, r),
            Or(this.projectionDeltaWithTransform, this.layoutCorrected, e, r));
        }
      }
      registerSharedNode(t, e) {
        this.sharedNodes.has(t) || this.sharedNodes.set(t, new ls());
        this.sharedNodes.get(t).add(e);
        const n = e.options.initialPromotionConfig;
        e.promote({
          transition: n ? n.transition : void 0,
          preserveFollowOpacity:
            n && n.shouldPreserveFollowOpacity
              ? n.shouldPreserveFollowOpacity(e)
              : void 0,
        });
      }
      isLead() {
        const t = this.getStack();
        return !t || t.lead === this;
      }
      getLead() {
        var t;
        const { layoutId: e } = this.options;
        return (
          (e &&
            (null === (t = this.getStack()) || void 0 === t
              ? void 0
              : t.lead)) ||
          this
        );
      }
      getPrevLead() {
        var t;
        const { layoutId: e } = this.options;
        return e
          ? null === (t = this.getStack()) || void 0 === t
            ? void 0
            : t.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: t } = this.options;
        if (t) return this.root.sharedNodes.get(t);
      }
      promote() {
        let {
          needsReset: t,
          transition: e,
          preserveFollowOpacity: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const i = this.getStack();
        (i && i.promote(this, n),
          t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          e && this.setOptions({ transition: e }));
      }
      relegate() {
        const t = this.getStack();
        return !!t && t.relegate(this);
      }
      resetSkewAndRotation() {
        const { visualElement: t } = this.options;
        if (!t) return;
        let e = !1;
        const { latestValues: n } = t;
        if (
          ((n.z ||
            n.rotate ||
            n.rotateX ||
            n.rotateY ||
            n.rotateZ ||
            n.skewX ||
            n.skewY) &&
            (e = !0),
          !e)
        )
          return;
        const i = {};
        n.z && ds('z', t, i, this.animationValues);
        for (let r = 0; r < cs.length; r++)
          (ds('rotate'.concat(cs[r]), t, i, this.animationValues),
            ds('skew'.concat(cs[r]), t, i, this.animationValues));
        t.render();
        for (const r in i)
          (t.setStaticValue(r, i[r]),
            this.animationValues && (this.animationValues[r] = i[r]));
        t.scheduleRender();
      }
      applyProjectionStyles(t, e) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return void (t.visibility = 'hidden');
        const n = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (t.visibility = ''),
            (t.opacity = ''),
            (t.pointerEvents =
              Io(null === e || void 0 === e ? void 0 : e.pointerEvents) || ''),
            void (t.transform = n ? n(this.latestValues, '') : 'none')
          );
        const i = this.getLead();
        if (!this.projectionDelta || !this.layout || !i.target)
          return (
            this.options.layoutId &&
              ((t.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (t.pointerEvents =
                Io(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                '')),
            void (
              this.hasProjected &&
              !Vr(this.latestValues) &&
              ((t.transform = n ? n({}, '') : 'none'), (this.hasProjected = !1))
            )
          );
        t.visibility = '';
        const r = i.animationValues || i.latestValues;
        this.applyTransformsToTarget();
        let o = (function (t, e, n) {
          let i = '';
          const r = t.x.translate / e.x,
            o = t.y.translate / e.y,
            s = (null === n || void 0 === n ? void 0 : n.z) || 0;
          if (
            ((r || o || s) &&
              (i = 'translate3d('
                .concat(r, 'px, ')
                .concat(o, 'px, ')
                .concat(s, 'px) ')),
            (1 === e.x && 1 === e.y) ||
              (i += 'scale('.concat(1 / e.x, ', ').concat(1 / e.y, ') ')),
            n)
          ) {
            const {
              transformPerspective: t,
              rotate: e,
              rotateX: r,
              rotateY: o,
              skewX: s,
              skewY: a,
            } = n;
            (t && (i = 'perspective('.concat(t, 'px) ').concat(i)),
              e && (i += 'rotate('.concat(e, 'deg) ')),
              r && (i += 'rotateX('.concat(r, 'deg) ')),
              o && (i += 'rotateY('.concat(o, 'deg) ')),
              s && (i += 'skewX('.concat(s, 'deg) ')),
              a && (i += 'skewY('.concat(a, 'deg) ')));
          }
          const a = t.x.scale * e.x,
            l = t.y.scale * e.y;
          return (
            (1 === a && 1 === l) ||
              (i += 'scale('.concat(a, ', ').concat(l, ')')),
            i || 'none'
          );
        })(this.projectionDeltaWithTransform, this.treeScale, r);
        (n && (o = n(r, o)), (t.transform = o));
        const { x: s, y: a } = this.projectionDelta;
        var l, u;
        ((t.transformOrigin = ''
          .concat(100 * s.origin, '% ')
          .concat(100 * a.origin, '% 0')),
        i.animationValues)
          ? (t.opacity =
              i === this
                ? null !==
                    (l =
                      null !== (u = r.opacity) && void 0 !== u
                        ? u
                        : this.latestValues.opacity) && void 0 !== l
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : r.opacityExit)
          : (t.opacity =
              i === this
                ? void 0 !== r.opacity
                  ? r.opacity
                  : ''
                : void 0 !== r.opacityExit
                  ? r.opacityExit
                  : 0);
        for (const c in To) {
          if (void 0 === r[c]) continue;
          const { correct: e, applyTo: n, isCSSVariable: s } = To[c],
            a = 'none' === o ? r[c] : e(r[c], i);
          if (n) {
            const e = n.length;
            for (let i = 0; i < e; i++) t[n[i]] = a;
          } else
            s
              ? (this.options.visualElement.renderState.vars[c] = a)
              : (t[c] = a);
        }
        this.options.layoutId &&
          (t.pointerEvents =
            i === this
              ? Io(null === e || void 0 === e ? void 0 : e.pointerEvents) || ''
              : 'none');
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        (this.root.nodes.forEach((t) => {
          var e;
          return null === (e = t.currentAnimation) || void 0 === e
            ? void 0
            : e.stop();
        }),
          this.root.nodes.forEach(xs),
          this.root.sharedNodes.clear());
      }
    };
  }
  function ms(t) {
    t.updateLayout();
  }
  function gs(t) {
    var e;
    const n =
      (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
      t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
      const { layoutBox: e, measuredBox: i } = t.layout,
        { animationType: r } = t.options,
        o = n.source !== t.layout.source;
      'size' === r
        ? jr((t) => {
            const i = o ? n.measuredBox[t] : n.layoutBox[t],
              r = Dr(i);
            ((i.min = e[t].min), (i.max = i.min + r));
          })
        : Ls(r, n.layoutBox, e) &&
          jr((i) => {
            const r = o ? n.measuredBox[i] : n.layoutBox[i],
              s = Dr(e[i]);
            ((r.max = r.min + s),
              t.relativeTarget &&
                !t.currentAnimation &&
                ((t.isProjectionDirty = !0),
                (t.relativeTarget[i].max = t.relativeTarget[i].min + s)));
          });
      const s = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      Or(s, e, n.layoutBox);
      const a = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      o ? Or(a, t.applyTransform(i, !0), n.measuredBox) : Or(a, e, n.layoutBox);
      const l = !ns(s);
      let u = !1;
      if (!t.resumeFrom) {
        const i = t.getClosestProjectingParent();
        if (i && !i.resumeFrom) {
          const { snapshot: r, layout: o } = i;
          if (r && o) {
            const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Lr(s, n.layoutBox, r.layoutBox);
            const a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            (Lr(a, e, o.layoutBox),
              os(s, a) || (u = !0),
              i.options.layoutRoot &&
                ((t.relativeTarget = a),
                (t.relativeTargetOrigin = s),
                (t.relativeParent = i)));
          }
        }
      }
      t.notifyListeners('didUpdate', {
        layout: e,
        snapshot: n,
        delta: a,
        layoutDelta: s,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u,
      });
    } else if (t.isLead()) {
      const { onExitComplete: e } = t.options;
      e && e();
    }
    t.options.transition = void 0;
  }
  function vs(t) {
    (Vt.value && us.nodes++,
      t.parent &&
        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty ||
          (t.isSharedProjectionDirty = Boolean(
            t.isProjectionDirty ||
              t.parent.isProjectionDirty ||
              t.parent.isSharedProjectionDirty,
          )),
        t.isTransformDirty ||
          (t.isTransformDirty = t.parent.isTransformDirty)));
  }
  function ys(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
  }
  function bs(t) {
    t.clearSnapshot();
  }
  function xs(t) {
    t.clearMeasurements();
  }
  function ws(t) {
    t.isLayoutDirty = !1;
  }
  function _s(t) {
    const { visualElement: e } = t.options;
    (e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
      t.resetTransform());
  }
  function Ss(t) {
    (t.finishAnimation(),
      (t.targetDelta = t.relativeTarget = t.target = void 0),
      (t.isProjectionDirty = !0));
  }
  function ks(t) {
    t.resolveTargetDelta();
  }
  function Es(t) {
    t.calcProjection();
  }
  function Ps(t) {
    t.resetSkewAndRotation();
  }
  function Ms(t) {
    t.removeLeadSnapshot();
  }
  function Cs(t, e, n) {
    ((t.translate = nn(e.translate, 0, n)),
      (t.scale = nn(e.scale, 1, n)),
      (t.origin = e.origin),
      (t.originPoint = e.originPoint));
  }
  function Ts(t, e, n, i) {
    ((t.min = nn(e.min, n.min, i)), (t.max = nn(e.max, n.max, i)));
  }
  function Ds(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit;
  }
  const As = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Os = (t) =>
      'undefined' !== typeof navigator &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(t),
    Fs = Os('applewebkit/') && !Os('chrome/') ? Math.round : jt;
  function Rs(t) {
    ((t.min = Fs(t.min)), (t.max = Fs(t.max)));
  }
  function Ls(t, e, n) {
    return (
      'position' === t ||
      ('preserve-aspect' === t &&
        ((i = ss(e)), (r = ss(n)), (o = 0.2), !(Math.abs(i - r) <= o)))
    );
    var i, r, o;
  }
  function Ns(t) {
    var e;
    return (
      t !== t.root &&
      (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
    );
  }
  const js = ps({
      attachResizeListener: (t, e) => Er(t, 'resize', e),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Is = { current: void 0 },
    zs = ps({
      measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
      defaultParent: () => {
        if (!Is.current) {
          const t = new js({});
          (t.mount(window),
            t.setOptions({ layoutScroll: !0 }),
            (Is.current = t));
        }
        return Is.current;
      },
      resetTransform: (t, e) => {
        t.style.transform = void 0 !== e ? e : 'none';
      },
      checkIsScrollRoot: (t) =>
        Boolean('fixed' === window.getComputedStyle(t).position),
    }),
    Vs = {
      pan: {
        Feature: class extends xr {
          constructor() {
            (super(...arguments), (this.removePointerDownListener = jt));
          }
          onPointerDown(t) {
            this.session = new no(t, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
              contextWindow: Zr(this.node),
            });
          }
          createPanHandlers() {
            const {
              onPanSessionStart: t,
              onPanStart: e,
              onPan: n,
              onPanEnd: i,
            } = this.node.getProps();
            return {
              onSessionStart: yo(t),
              onStart: yo(e),
              onMove: n,
              onEnd: (t, e) => {
                (delete this.session, i && Ut.postRender(() => i(t, e)));
              },
            };
          }
          mount() {
            this.removePointerDownListener = Cr(
              this.node.current,
              'pointerdown',
              (t) => this.onPointerDown(t),
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            (this.removePointerDownListener(),
              this.session && this.session.end());
          }
        },
      },
      drag: {
        Feature: class extends xr {
          constructor(t) {
            (super(t),
              (this.removeGroupControls = jt),
              (this.removeListeners = jt),
              (this.controls = new go(t)));
          }
          mount() {
            const { dragControls: t } = this.node.getProps();
            (t && (this.removeGroupControls = t.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || jt));
          }
          unmount() {
            (this.removeGroupControls(), this.removeListeners());
          }
        },
        ProjectionNode: zs,
        MeasureLayout: Oo,
      },
    };
  function Bs(t, e) {
    const n = (function (t, e, n) {
        if (t instanceof EventTarget) return [t];
        if ('string' === typeof t) {
          var i;
          let r = document;
          e && (r = e.current);
          const o =
            null !== (i = null === n || void 0 === n ? void 0 : n[t]) &&
            void 0 !== i
              ? i
              : r.querySelectorAll(t);
          return o ? Array.from(o) : [];
        }
        return Array.from(t);
      })(t),
      i = new AbortController();
    return [
      n,
      Dt(Dt({ passive: !0 }, e), {}, { signal: i.signal }),
      () => i.abort(),
    ];
  }
  function Us(t) {
    return !('touch' === t.pointerType || kr());
  }
  function Ws(t, e, n) {
    const { props: i } = t;
    t.animationState &&
      i.whileHover &&
      t.animationState.setActive('whileHover', 'Start' === n);
    const r = i['onHover' + n];
    r && Ut.postRender(() => r(e, Mr(e)));
  }
  const Hs = (t, e) => !!e && (t === e || Hs(t, e.parentElement)),
    $s = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
  const Ys = new WeakSet();
  function qs(t) {
    return (e) => {
      'Enter' === e.key && t(e);
    };
  }
  function Ks(t, e) {
    t.dispatchEvent(
      new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 }),
    );
  }
  function Xs(t) {
    return Pr(t) && !kr();
  }
  function Qs(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const [i, r, o] = Bs(t, n),
      s = (t) => {
        const i = t.currentTarget;
        if (!Xs(t)) return;
        Ys.add(i);
        const o = e(i, t),
          s = (t, e) => {
            (window.removeEventListener('pointerup', a),
              window.removeEventListener('pointercancel', l),
              Ys.has(i) && Ys.delete(i),
              Xs(t) && 'function' === typeof o && o(t, { success: e }));
          },
          a = (t) => {
            s(
              t,
              i === window ||
                i === document ||
                n.useGlobalTarget ||
                Hs(i, t.target),
            );
          },
          l = (t) => {
            s(t, !1);
          };
        (window.addEventListener('pointerup', a, r),
          window.addEventListener('pointercancel', l, r));
      };
    return (
      i.forEach((t) => {
        var e;
        ((n.useGlobalTarget ? window : t).addEventListener('pointerdown', s, r),
          Wi(t) &&
            (t.addEventListener('focus', (t) =>
              ((t, e) => {
                const n = t.currentTarget;
                if (!n) return;
                const i = qs(() => {
                  if (Ys.has(n)) return;
                  Ks(n, 'down');
                  const t = qs(() => {
                    Ks(n, 'up');
                  });
                  (n.addEventListener('keyup', t, e),
                    n.addEventListener('blur', () => Ks(n, 'cancel'), e));
                });
                (n.addEventListener('keydown', i, e),
                  n.addEventListener(
                    'blur',
                    () => n.removeEventListener('keydown', i),
                    e,
                  ));
              })(t, r),
            ),
            (e = t),
            $s.has(e.tagName) ||
              -1 !== e.tabIndex ||
              t.hasAttribute('tabindex') ||
              (t.tabIndex = 0)));
      }),
      o
    );
  }
  function Gs(t, e, n) {
    const { props: i } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState &&
      i.whileTap &&
      t.animationState.setActive('whileTap', 'Start' === n);
    const r = i['onTap' + ('End' === n ? '' : n)];
    r && Ut.postRender(() => r(e, Mr(e)));
  }
  const Js = ['root'],
    Zs = new WeakMap(),
    ta = new WeakMap(),
    ea = (t) => {
      const e = Zs.get(t.target);
      e && e(t);
    },
    na = (t) => {
      t.forEach(ea);
    };
  function ia(t, e, n) {
    const i = (function (t) {
      let { root: e } = t,
        n = Ot(t, Js);
      const i = e || document;
      ta.has(i) || ta.set(i, {});
      const r = ta.get(i),
        o = JSON.stringify(n);
      return (
        r[o] || (r[o] = new IntersectionObserver(na, Dt({ root: e }, n))),
        r[o]
      );
    })(e);
    return (
      Zs.set(t, n),
      i.observe(t),
      () => {
        (Zs.delete(t), i.unobserve(t));
      }
    );
  }
  const ra = { some: 0, all: 1 };
  const oa = {
      inView: {
        Feature: class extends xr {
          constructor() {
            (super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1));
          }
          startObserver() {
            this.unmount();
            const { viewport: t = {} } = this.node.getProps(),
              { root: e, margin: n, amount: i = 'some', once: r } = t,
              o = {
                root: e ? e.current : void 0,
                rootMargin: n,
                threshold: 'number' === typeof i ? i : ra[i],
              };
            return ia(this.node.current, o, (t) => {
              const { isIntersecting: e } = t;
              if (this.isInView === e) return;
              if (((this.isInView = e), r && !e && this.hasEnteredView)) return;
              (e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive('whileInView', e));
              const { onViewportEnter: n, onViewportLeave: i } =
                  this.node.getProps(),
                o = e ? n : i;
              o && o(t);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ('undefined' === typeof IntersectionObserver) return;
            const { props: t, prevProps: e } = this.node,
              n = ['amount', 'margin', 'root'].some(
                (function (t) {
                  let { viewport: e = {} } = t,
                    { viewport: n = {} } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (t) => e[t] !== n[t];
                })(t, e),
              );
            n && this.startObserver();
          }
          unmount() {}
        },
      },
      tap: {
        Feature: class extends xr {
          mount() {
            const { current: t } = this.node;
            t &&
              (this.unmount = Qs(
                t,
                (t, e) => (
                  Gs(this.node, e, 'Start'),
                  (t, e) => {
                    let { success: n } = e;
                    return Gs(this.node, t, n ? 'End' : 'Cancel');
                  }
                ),
                { useGlobalTarget: this.node.props.globalTapTarget },
              ));
          }
          unmount() {}
        },
      },
      focus: {
        Feature: class extends xr {
          constructor() {
            (super(...arguments), (this.isActive = !1));
          }
          onFocus() {
            let t = !1;
            try {
              t = this.node.current.matches(':focus-visible');
            } catch (Iy) {
              t = !0;
            }
            t &&
              this.node.animationState &&
              (this.node.animationState.setActive('whileFocus', !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive('whileFocus', !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = me(
              Er(this.node.current, 'focus', () => this.onFocus()),
              Er(this.node.current, 'blur', () => this.onBlur()),
            );
          }
          unmount() {}
        },
      },
      hover: {
        Feature: class extends xr {
          mount() {
            const { current: t } = this.node;
            t &&
              (this.unmount = (function (t, e) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                const [i, r, o] = Bs(t, n),
                  s = (t) => {
                    if (!Us(t)) return;
                    const { target: n } = t,
                      i = e(n, t);
                    if ('function' !== typeof i || !n) return;
                    const o = (t) => {
                      Us(t) && (i(t), n.removeEventListener('pointerleave', o));
                    };
                    n.addEventListener('pointerleave', o, r);
                  };
                return (
                  i.forEach((t) => {
                    t.addEventListener('pointerenter', s, r);
                  }),
                  o
                );
              })(
                t,
                (t, e) => (
                  Ws(this.node, e, 'Start'),
                  (t) => Ws(this.node, t, 'End')
                ),
              ));
          }
          unmount() {}
        },
      },
    },
    sa = { layout: { ProjectionNode: zs, MeasureLayout: Oo } },
    aa = (0, o.createContext)({ strict: !1 }),
    la = (0, o.createContext)({
      transformPagePoint: (t) => t,
      isStatic: !1,
      reducedMotion: 'never',
    }),
    ua = (0, o.createContext)({});
  function ca(t) {
    return At(t.animate) || ur.some((e) => ar(t[e]));
  }
  function ha(t) {
    return Boolean(ca(t) || t.variants);
  }
  function da(t) {
    const { initial: e, animate: n } = (function (t, e) {
      if (ca(t)) {
        const { initial: e, animate: n } = t;
        return {
          initial: !1 === e || ar(e) ? e : void 0,
          animate: ar(n) ? n : void 0,
        };
      }
      return !1 !== t.inherit ? e : {};
    })(t, (0, o.useContext)(ua));
    return (0, o.useMemo)(() => ({ initial: e, animate: n }), [fa(e), fa(n)]);
  }
  function fa(t) {
    return Array.isArray(t) ? t.join(' ') : t;
  }
  const pa = 'undefined' !== typeof window,
    ma = {
      animation: [
        'animate',
        'variants',
        'whileHover',
        'whileTap',
        'exit',
        'whileInView',
        'whileFocus',
        'whileDrag',
      ],
      exit: ['exit'],
      drag: ['drag', 'dragControls'],
      focus: ['whileFocus'],
      hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
      tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
      pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
      inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
      layout: ['layout', 'layoutId'],
    },
    ga = {};
  for (const Vy in ma)
    ga[Vy] = { isEnabled: (t) => ma[Vy].some((e) => !!t[e]) };
  const va = Symbol.for('motionComponentSymbol');
  function ya(t, e, n) {
    return (0, o.useCallback)(
      (i) => {
        (i && t.onMount && t.onMount(i),
          e && (i ? e.mount(i) : e.unmount()),
          n && ('function' === typeof n ? n(i) : to(n) && (n.current = i)));
      },
      [e],
    );
  }
  const ba = pa ? o.useLayoutEffect : o.useEffect;
  function xa(t, e, n, i, r) {
    var s, a, l, u;
    const { visualElement: c } = (0, o.useContext)(ua),
      h = (0, o.useContext)(aa),
      d = (0, o.useContext)(_o),
      f = (0, o.useContext)(la).reducedMotion,
      p = (0, o.useRef)(null);
    ((i = i || h.renderer),
      !p.current &&
        i &&
        (p.current = i(t, {
          visualState: e,
          parent: c,
          props: n,
          presenceContext: d,
          blockInitialAnimation: !!d && !1 === d.initial,
          reducedMotionConfig: f,
        })));
    const m = p.current,
      g = (0, o.useContext)(ko);
    !m ||
      m.projection ||
      !r ||
      ('html' !== m.type && 'svg' !== m.type) ||
      (function (t, e, n, i) {
        const {
          layoutId: r,
          layout: o,
          drag: s,
          dragConstraints: a,
          layoutScroll: l,
          layoutRoot: u,
          layoutCrossfade: c,
        } = e;
        ((t.projection = new n(
          t.latestValues,
          e['data-framer-portal-id'] ? void 0 : wa(t.parent),
        )),
          t.projection.setOptions({
            layoutId: r,
            layout: o,
            alwaysMeasureLayout: Boolean(s) || (a && to(a)),
            visualElement: t,
            animationType: 'string' === typeof o ? o : 'both',
            initialPromotionConfig: i,
            crossfade: c,
            layoutScroll: l,
            layoutRoot: u,
          }));
      })(p.current, n, r, g);
    const v = (0, o.useRef)(!1);
    (0, o.useInsertionEffect)(() => {
      m && v.current && m.update(n, d);
    });
    const y = n[de],
      b = (0, o.useRef)(
        Boolean(y) &&
          !(
            null !== (s = (a = window).MotionHandoffIsComplete) &&
            void 0 !== s &&
            s.call(a, y)
          ) &&
          (null === (l = (u = window).MotionHasOptimisedAnimation) ||
          void 0 === l
            ? void 0
            : l.call(u, y)),
      );
    return (
      ba(() => {
        m &&
          ((v.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          xo.render(m.render),
          b.current && m.animationState && m.animationState.animateChanges());
      }),
      (0, o.useEffect)(() => {
        m &&
          (!b.current && m.animationState && m.animationState.animateChanges(),
          b.current &&
            (queueMicrotask(() => {
              var t, e;
              null === (t = (e = window).MotionHandoffMarkAsComplete) ||
                void 0 === t ||
                t.call(e, y);
            }),
            (b.current = !1)));
      }),
      m
    );
  }
  function wa(t) {
    if (t)
      return !1 !== t.options.allowProjection ? t.projection : wa(t.parent);
  }
  function _a(t) {
    var e, n;
    let {
      preloadedFeatures: i,
      createVisualElement: r,
      useRender: s,
      useVisualState: a,
      Component: l,
    } = t;
    function u(t, e) {
      let n;
      const i = Dt(
          Dt(Dt({}, (0, o.useContext)(la)), t),
          {},
          { layoutId: Sa(t) },
        ),
        { isStatic: u } = i,
        c = da(t),
        h = a(t, u);
      if (!u && pa) {
        !(function () {
          (0, o.useContext)(aa).strict;
          0;
        })();
        const t = (function (t) {
          const { drag: e, layout: n } = ga;
          if (!e && !n) return {};
          const i = Dt(Dt({}, e), n);
          return {
            MeasureLayout:
              (null !== e && void 0 !== e && e.isEnabled(t)) ||
              (null !== n && void 0 !== n && n.isEnabled(t))
                ? i.MeasureLayout
                : void 0,
            ProjectionNode: i.ProjectionNode,
          };
        })(i);
        ((n = t.MeasureLayout),
          (c.visualElement = xa(l, h, i, r, t.ProjectionNode)));
      }
      return (0, bo.jsxs)(ua.Provider, {
        value: c,
        children: [
          n && c.visualElement
            ? (0, bo.jsx)(n, Dt({ visualElement: c.visualElement }, i))
            : null,
          s(l, t, ya(h, c.visualElement, e), h, u, c.visualElement),
        ],
      });
    }
    (i &&
      (function (t) {
        for (const e in t) ga[e] = Dt(Dt({}, ga[e]), t[e]);
      })(i),
      (u.displayName = 'motion.'.concat(
        'string' === typeof l
          ? l
          : 'create('.concat(
              null !==
                (e =
                  null !== (n = l.displayName) && void 0 !== n ? n : l.name) &&
                void 0 !== e
                ? e
                : '',
              ')',
            ),
      )));
    const c = (0, o.forwardRef)(u);
    return ((c[va] = l), c);
  }
  function Sa(t) {
    let { layoutId: e } = t;
    const n = (0, o.useContext)(So).id;
    return n && void 0 !== e ? n + '-' + e : e;
  }
  function ka(t, e) {
    let { layout: n, layoutId: i } = e;
    return (
      qt.has(t) ||
      t.startsWith('origin') ||
      ((n || void 0 !== i) && (!!To[t] || 'opacity' === t))
    );
  }
  const Ea = (t, e) => (e && 'number' === typeof t ? e.transform(t) : t),
    Pa = Dt(Dt({}, Ee), {}, { transform: Math.round }),
    Ma = Dt(
      Dt(
        {
          borderWidth: ze,
          borderTopWidth: ze,
          borderRightWidth: ze,
          borderBottomWidth: ze,
          borderLeftWidth: ze,
          borderRadius: ze,
          radius: ze,
          borderTopLeftRadius: ze,
          borderTopRightRadius: ze,
          borderBottomRightRadius: ze,
          borderBottomLeftRadius: ze,
          width: ze,
          maxWidth: ze,
          height: ze,
          maxHeight: ze,
          top: ze,
          right: ze,
          bottom: ze,
          left: ze,
          padding: ze,
          paddingTop: ze,
          paddingRight: ze,
          paddingBottom: ze,
          paddingLeft: ze,
          margin: ze,
          marginTop: ze,
          marginRight: ze,
          marginBottom: ze,
          marginLeft: ze,
          backgroundPositionX: ze,
          backgroundPositionY: ze,
        },
        {
          rotate: je,
          rotateX: je,
          rotateY: je,
          rotateZ: je,
          scale: Me,
          scaleX: Me,
          scaleY: Me,
          scaleZ: Me,
          skew: je,
          skewX: je,
          skewY: je,
          distance: ze,
          translateX: ze,
          translateY: ze,
          translateZ: ze,
          x: ze,
          y: ze,
          z: ze,
          perspective: ze,
          transformPerspective: ze,
          opacity: Pe,
          originX: Ue,
          originY: Ue,
          originZ: ze,
        },
      ),
      {},
      { zIndex: Pa, fillOpacity: Pe, strokeOpacity: Pe, numOctaves: Pa },
    ),
    Ca = {
      x: 'translateX',
      y: 'translateY',
      z: 'translateZ',
      transformPerspective: 'perspective',
    },
    Ta = Yt.length;
  function Da(t, e, n) {
    const { style: i, vars: r, transformOrigin: o } = t;
    let s = !1,
      a = !1;
    for (const l in e) {
      const t = e[l];
      if (qt.has(l)) s = !0;
      else if (we(l)) r[l] = t;
      else {
        const e = Ea(t, Ma[l]);
        l.startsWith('origin') ? ((a = !0), (o[l] = e)) : (i[l] = e);
      }
    }
    if (
      (e.transform ||
        (s || n
          ? (i.transform = (function (t, e, n) {
              let i = '',
                r = !0;
              for (let o = 0; o < Ta; o++) {
                const s = Yt[o],
                  a = t[s];
                if (void 0 === a) continue;
                let l = !0;
                if (
                  ((l =
                    'number' === typeof a
                      ? a === (s.startsWith('scale') ? 1 : 0)
                      : 0 === parseFloat(a)),
                  !l || n)
                ) {
                  const t = Ea(a, Ma[s]);
                  (l ||
                    ((r = !1),
                    (i += ''.concat(Ca[s] || s, '(').concat(t, ') '))),
                    n && (e[s] = t));
                }
              }
              return (
                (i = i.trim()),
                n ? (i = n(e, r ? '' : i)) : r && (i = 'none'),
                i
              );
            })(e, t.transform, n))
          : i.transform && (i.transform = 'none')),
      a)
    ) {
      const { originX: t = '50%', originY: e = '50%', originZ: n = 0 } = o;
      i.transformOrigin = ''.concat(t, ' ').concat(e, ' ').concat(n);
    }
  }
  const Aa = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function Oa(t, e, n) {
    for (const i in e) ue(e[i]) || ka(i, n) || (t[i] = e[i]);
  }
  function Fa(t, e) {
    const n = {};
    return (
      Oa(n, t.style || {}, t),
      Object.assign(
        n,
        (function (t, e) {
          let { transformTemplate: n } = t;
          return (0, o.useMemo)(() => {
            const t = {
              style: {},
              transform: {},
              transformOrigin: {},
              vars: {},
            };
            return (Da(t, e, n), Object.assign({}, t.vars, t.style));
          }, [e]);
        })(t, e),
      ),
      n
    );
  }
  function Ra(t, e) {
    const n = {},
      i = Fa(t, e);
    return (
      t.drag &&
        !1 !== t.dragListener &&
        ((n.draggable = !1),
        (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
        (i.touchAction =
          !0 === t.drag ? 'none' : 'pan-'.concat('x' === t.drag ? 'y' : 'x'))),
      void 0 === t.tabIndex &&
        (t.onTap || t.onTapStart || t.whileTap) &&
        (n.tabIndex = 0),
      (n.style = i),
      n
    );
  }
  const La = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
    Na = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
  const ja = [
    'attrX',
    'attrY',
    'attrScale',
    'pathLength',
    'pathSpacing',
    'pathOffset',
  ];
  function Ia(t, e, n, i, r) {
    let {
      attrX: o,
      attrY: s,
      attrScale: a,
      pathLength: l,
      pathSpacing: u = 1,
      pathOffset: c = 0,
    } = e;
    if ((Da(t, Ot(e, ja), i), n))
      return void (t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
    ((t.attrs = t.style), (t.style = {}));
    const { attrs: h, style: d } = t;
    var f, p;
    (h.transform && ((d.transform = h.transform), delete h.transform),
    d.transform || h.transformOrigin) &&
      ((d.transformOrigin =
        null !== (f = h.transformOrigin) && void 0 !== f ? f : '50% 50%'),
      delete h.transformOrigin);
    d.transform &&
      ((d.transformBox =
        null !== (p = null === r || void 0 === r ? void 0 : r.transformBox) &&
        void 0 !== p
          ? p
          : 'fill-box'),
      delete h.transformBox);
    (void 0 !== o && (h.x = o),
      void 0 !== s && (h.y = s),
      void 0 !== a && (h.scale = a),
      void 0 !== l &&
        (function (t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            r =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4];
          t.pathLength = 1;
          const o = r ? La : Na;
          t[o.offset] = ze.transform(-i);
          const s = ze.transform(e),
            a = ze.transform(n);
          t[o.array] = ''.concat(s, ' ').concat(a);
        })(h, l, u, c, !1));
  }
  const za = () =>
      Dt(
        Dt({}, { style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        {},
        { attrs: {} },
      ),
    Va = (t) => 'string' === typeof t && 'svg' === t.toLowerCase();
  function Ba(t, e, n, i) {
    const r = (0, o.useMemo)(() => {
      const n = za();
      return (
        Ia(n, e, Va(i), t.transformTemplate, t.style),
        Dt(Dt({}, n.attrs), {}, { style: Dt({}, n.style) })
      );
    }, [e]);
    if (t.style) {
      const e = {};
      (Oa(e, t.style, t), (r.style = Dt(Dt({}, e), r.style)));
    }
    return r;
  }
  const Ua = new Set([
    'animate',
    'exit',
    'variants',
    'initial',
    'style',
    'values',
    'variants',
    'transition',
    'transformTemplate',
    'custom',
    'inherit',
    'onBeforeLayoutMeasure',
    'onAnimationStart',
    'onAnimationComplete',
    'onUpdate',
    'onDragStart',
    'onDrag',
    'onDragEnd',
    'onMeasureDragConstraints',
    'onDirectionLock',
    'onDragTransitionEnd',
    '_dragX',
    '_dragY',
    'onHoverStart',
    'onHoverEnd',
    'onViewportEnter',
    'onViewportLeave',
    'globalTapTarget',
    'ignoreStrict',
    'viewport',
  ]);
  function Wa(t) {
    return (
      t.startsWith('while') ||
      (t.startsWith('drag') && 'draggable' !== t) ||
      t.startsWith('layout') ||
      t.startsWith('onTap') ||
      t.startsWith('onPan') ||
      t.startsWith('onLayout') ||
      Ua.has(t)
    );
  }
  let Ha = (t) => !Wa(t);
  try {
    'function' === typeof ($a = require('@emotion/is-prop-valid').default) &&
      (Ha = (t) => (t.startsWith('on') ? !Wa(t) : $a(t)));
  } catch (zy) {}
  var $a;
  const Ya = [
    'animate',
    'circle',
    'defs',
    'desc',
    'ellipse',
    'g',
    'image',
    'line',
    'filter',
    'marker',
    'mask',
    'metadata',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'rect',
    'stop',
    'switch',
    'symbol',
    'svg',
    'text',
    'tspan',
    'use',
    'view',
  ];
  function qa(t) {
    return (
      'string' === typeof t &&
      !t.includes('-') &&
      !!(Ya.indexOf(t) > -1 || /[A-Z]/.test(t))
    );
  }
  function Ka() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (e, n, i, r, s) => {
      let { latestValues: a } = r;
      const l = (qa(e) ? Ba : Ra)(n, a, s, e),
        u = (function (t, e, n) {
          const i = {};
          for (const r in t)
            ('values' === r && 'object' === typeof t.values) ||
              ((Ha(r) ||
                (!0 === n && Wa(r)) ||
                (!e && !Wa(r)) ||
                (t.draggable && r.startsWith('onDrag'))) &&
                (i[r] = t[r]));
          return i;
        })(n, 'string' === typeof e, t),
        c = e !== o.Fragment ? Dt(Dt(Dt({}, u), l), {}, { ref: i }) : {},
        { children: h } = n,
        d = (0, o.useMemo)(() => (ue(h) ? h.get() : h), [h]);
      return (0, o.createElement)(e, Dt(Dt({}, c), {}, { children: d }));
    };
  }
  const Xa = ['transitionEnd', 'transition'];
  const Qa = (t) => (e, n) => {
    const i = (0, o.useContext)(ua),
      r = (0, o.useContext)(_o),
      s = () =>
        (function (t, e, n, i) {
          let { scrapeMotionValuesFromProps: r, createRenderState: o } = t;
          return { latestValues: Ga(e, n, i, r), renderState: o() };
        })(t, e, i, r);
    return n
      ? s()
      : (function (t) {
          const e = (0, o.useRef)(null);
          return (null === e.current && (e.current = t()), e.current);
        })(s);
  };
  function Ga(t, e, n, i) {
    const r = {},
      o = i(t, {});
    for (const d in o) r[d] = Io(o[d]);
    let { initial: s, animate: a } = t;
    const l = ca(t),
      u = ha(t);
    e &&
      u &&
      !l &&
      !1 !== t.inherit &&
      (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === s;
    const h = c ? a : s;
    if (h && 'boolean' !== typeof h && !At(h)) {
      const e = Array.isArray(h) ? h : [h];
      for (let n = 0; n < e.length; n++) {
        const i = Rt(t, e[n]);
        if (i) {
          const { transitionEnd: t, transition: e } = i,
            n = Ot(i, Xa);
          for (const i in n) {
            let t = n[i];
            if (Array.isArray(t)) {
              t = t[c ? t.length - 1 : 0];
            }
            null !== t && (r[i] = t);
          }
          for (const i in t) r[i] = t[i];
        }
      }
    }
    return r;
  }
  function Ja(t, e, n) {
    const { style: i } = t,
      r = {};
    for (const s in i) {
      var o;
      (ue(i[s]) ||
        (e.style && ue(e.style[s])) ||
        ka(s, t) ||
        void 0 !==
          (null === n ||
          void 0 === n ||
          null === (o = n.getValue(s)) ||
          void 0 === o
            ? void 0
            : o.liveStyle)) &&
        (r[s] = i[s]);
    }
    return r;
  }
  const Za = {
    useVisualState: Qa({
      scrapeMotionValuesFromProps: Ja,
      createRenderState: Aa,
    }),
  };
  function tl(t, e, n) {
    const i = Ja(t, e, n);
    for (const r in t)
      if (ue(t[r]) || ue(e[r])) {
        i[
          -1 !== Yt.indexOf(r)
            ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1)
            : r
        ] = t[r];
      }
    return i;
  }
  const el = {
    useVisualState: Qa({
      scrapeMotionValuesFromProps: tl,
      createRenderState: za,
    }),
  };
  function nl(t, e) {
    return function (n) {
      let { forwardMotionProps: i } =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { forwardMotionProps: !1 };
      return _a(
        Dt(
          Dt({}, qa(n) ? el : Za),
          {},
          {
            preloadedFeatures: t,
            useRender: Ka(i),
            createVisualElement: e,
            Component: n,
          },
        ),
      );
    };
  }
  const il = (t) => (e) => e.test(t),
    rl = [
      Ee,
      ze,
      Ie,
      je,
      Be,
      Ve,
      { test: (t) => 'auto' === t, parse: (t) => t },
    ],
    ol = (t) => rl.find(il(t)),
    sl = (t) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(t),
    al =
      /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
  function ll(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    'Max CSS variable fallback depth detected in property "'.concat(
      t,
      '". This may indicate a circular fallback dependency.',
    );
    const [i, r] = (function (t) {
      const e = al.exec(t);
      if (!e) return [,];
      const [, n, i, r] = e;
      return ['--'.concat(null !== n && void 0 !== n ? n : i), r];
    })(t);
    if (!i) return;
    const o = window.getComputedStyle(e).getPropertyValue(i);
    if (o) {
      const t = o.trim();
      return sl(t) ? parseFloat(t) : t;
    }
    return Se(r) ? ll(r, e, n + 1) : r;
  }
  const ul = (t) =>
    /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
      t,
    );
  function cl(t) {
    return 'number' === typeof t
      ? 0 === t
      : null === t || 'none' === t || '0' === t || ul(t);
  }
  const hl = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
  function dl(t) {
    const [e, n] = t.slice(0, -1).split('(');
    if ('drop-shadow' === e) return t;
    const [i] = n.match(Te) || [];
    if (!i) return t;
    const r = n.replace(i, '');
    let o = hl.has(e) ? 1 : 0;
    return (i !== n && (o *= 100), e + '(' + o + r + ')');
  }
  const fl =
      /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
    pl = Dt(
      Dt({}, Ze),
      {},
      {
        getAnimatableNone: (t) => {
          const e = t.match(fl);
          return e ? e.map(dl).join(' ') : t;
        },
      },
    ),
    ml = Dt(
      Dt({}, Ma),
      {},
      {
        color: He,
        backgroundColor: He,
        outlineColor: He,
        fill: He,
        stroke: He,
        borderColor: He,
        borderTopColor: He,
        borderRightColor: He,
        borderBottomColor: He,
        borderLeftColor: He,
        filter: pl,
        WebkitFilter: pl,
      },
    ),
    gl = (t) => ml[t];
  function vl(t, e) {
    let n = gl(t);
    return (
      n !== pl && (n = Ze),
      n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
    );
  }
  const yl = new Set(['auto', 'none', '0']);
  class bl extends ki {
    constructor(t, e, n, i, r) {
      super(t, e, n, i, r, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: e, name: n } = this;
      if (!e || !e.current) return;
      super.readKeyframes();
      for (let a = 0; a < t.length; a++) {
        let n = t[a];
        if ('string' === typeof n && ((n = n.trim()), Se(n))) {
          const i = ll(n, e.current);
          (void 0 !== i && (t[a] = i),
            a === t.length - 1 && (this.finalKeyframe = n));
        }
      }
      if ((this.resolveNoneKeyframes(), !Kt.has(n) || 2 !== t.length)) return;
      const [i, r] = t,
        o = ol(i),
        s = ol(r);
      if (o !== s)
        if (pi(o) && pi(s))
          for (let a = 0; a < t.length; a++) {
            const e = t[a];
            'string' === typeof e && (t[a] = parseFloat(e));
          }
        else vi[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: e } = this,
        n = [];
      for (let i = 0; i < t.length; i++)
        (null === t[i] || cl(t[i])) && n.push(i);
      n.length &&
        (function (t, e, n) {
          let i,
            r = 0;
          for (; r < t.length && !i; ) {
            const e = t[r];
            ('string' === typeof e &&
              !yl.has(e) &&
              Xe(e).values.length &&
              (i = t[r]),
              r++);
          }
          if (i && n) for (const o of e) t[o] = vl(n, i);
        })(t, n, e);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: e, name: n } = this;
      if (!t || !t.current) return;
      ('height' === n && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = vi[n](
          t.measureViewportBox(),
          window.getComputedStyle(t.current),
        )),
        (e[0] = this.measuredOrigin));
      const i = e[e.length - 1];
      void 0 !== i && t.getValue(n, i).jump(i, !1);
    }
    measureEndState() {
      var t;
      const { element: e, name: n, unresolvedKeyframes: i } = this;
      if (!e || !e.current) return;
      const r = e.getValue(n);
      r && r.jump(this.measuredOrigin, !1);
      const o = i.length - 1,
        s = i[o];
      ((i[o] = vi[n](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
        null !== (t = this.removedTransforms) &&
          void 0 !== t &&
          t.length &&
          this.removedTransforms.forEach((t) => {
            let [n, i] = t;
            e.getValue(n).set(i);
          }),
        this.resolveNoneKeyframes());
    }
  }
  const xl = [...rl, He, Ze],
    wl = { current: null },
    _l = { current: !1 };
  const Sl = new WeakMap();
  const kl = ['willChange'],
    El = [
      'AnimationStart',
      'AnimationComplete',
      'Update',
      'BeforeLayoutMeasure',
      'LayoutMeasure',
      'LayoutAnimationStart',
      'LayoutAnimationComplete',
    ];
  class Pl {
    scrapeMotionValuesFromProps(t, e, n) {
      return {};
    }
    constructor(t) {
      let {
          parent: e,
          props: n,
          presenceContext: i,
          reducedMotionConfig: r,
          blockInitialAnimation: o,
          visualState: s,
        } = t,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = ki),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const t = ee.now();
          this.renderScheduledAt < t &&
            ((this.renderScheduledAt = t), Ut.render(this.render, !1, !0));
        }));
      const { latestValues: l, renderState: u } = s;
      ((this.latestValues = l),
        (this.baseTarget = Dt({}, l)),
        (this.initialValues = n.initial ? Dt({}, l) : {}),
        (this.renderState = u),
        (this.parent = e),
        (this.props = n),
        (this.presenceContext = i),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = a),
        (this.blockInitialAnimation = Boolean(o)),
        (this.isControllingVariants = ca(n)),
        (this.isVariantNode = ha(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = Boolean(e && e.current)));
      const c = this.scrapeMotionValuesFromProps(n, {}, this),
        { willChange: h } = c,
        d = Ot(c, kl);
      for (const f in d) {
        const t = d[f];
        void 0 !== l[f] && ue(t) && t.set(l[f], !1);
      }
    }
    mount(t) {
      ((this.current = t),
        Sl.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
        _l.current ||
          (function () {
            if (((_l.current = !0), pa))
              if (window.matchMedia) {
                const t = window.matchMedia('(prefers-reduced-motion)'),
                  e = () => (wl.current = t.matches);
                (t.addEventListener('change', e), e());
              } else wl.current = !1;
          })(),
        (this.shouldReduceMotion =
          'never' !== this.reducedMotionConfig &&
          ('always' === this.reducedMotionConfig || wl.current)),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        Wt(this.notifyUpdate),
        Wt(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const e = this.features[t];
        e && (e.unmount(), (e.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, e) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const n = qt.has(t);
      n && this.onBindTransform && this.onBindTransform();
      const i = e.on('change', (e) => {
          ((this.latestValues[t] = e),
            this.props.onUpdate && Ut.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        r = e.on('renderRequest', this.scheduleRender);
      let o;
      (window.MotionCheckAppearSync &&
        (o = window.MotionCheckAppearSync(this, t, e)),
        this.valueSubscriptions.set(t, () => {
          (i(), r(), o && o(), e.owner && e.stop());
        }));
    }
    sortNodePosition(t) {
      return this.current &&
        this.sortInstanceNodePosition &&
        this.type === t.type
        ? this.sortInstanceNodePosition(this.current, t.current)
        : 0;
    }
    updateFeatures() {
      let t = 'animation';
      for (t in ga) {
        const e = ga[t];
        if (!e) continue;
        const { isEnabled: n, Feature: i } = e;
        if (
          (!this.features[t] &&
            i &&
            n(this.props) &&
            (this.features[t] = new i(this)),
          this.features[t])
        ) {
          const e = this.features[t];
          e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    update(t, e) {
      ((t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = e));
      for (let n = 0; n < El.length; n++) {
        const e = El[n];
        this.propEventSubscriptions[e] &&
          (this.propEventSubscriptions[e](),
          delete this.propEventSubscriptions[e]);
        const i = t['on' + e];
        i && (this.propEventSubscriptions[e] = this.on(e, i));
      }
      ((this.prevMotionValues = (function (t, e, n) {
        for (const i in e) {
          const r = e[i],
            o = n[i];
          if (ue(r)) t.addValue(i, r);
          else if (ue(o)) t.addValue(i, re(r, { owner: t }));
          else if (o !== r)
            if (t.hasValue(i)) {
              const e = t.getValue(i);
              !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
            } else {
              const e = t.getStaticValue(i);
              t.addValue(i, re(void 0 !== e ? e : r, { owner: t }));
            }
        }
        for (const i in n) void 0 === e[i] && t.removeValue(i);
        return e;
      })(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(t) {
      const e = this.getClosestVariantNode();
      if (e)
        return (
          e.variantChildren && e.variantChildren.add(t),
          () => e.variantChildren.delete(t)
        );
    }
    addValue(t, e) {
      const n = this.values.get(t);
      e !== n &&
        (n && this.removeValue(t),
        this.bindToMotionValue(t, e),
        this.values.set(t, e),
        (this.latestValues[t] = e.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      const e = this.valueSubscriptions.get(t);
      (e && (e(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState));
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, e) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let n = this.values.get(t);
      return (
        void 0 === n &&
          void 0 !== e &&
          ((n = re(null === e ? void 0 : e, { owner: this })),
          this.addValue(t, n)),
        n
      );
    }
    readValue(t, e) {
      var n;
      let i =
        void 0 === this.latestValues[t] && this.current
          ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
            void 0 !== n
            ? n
            : this.readValueFromInstance(this.current, t, this.options)
          : this.latestValues[t];
      var r;
      return (
        void 0 !== i &&
          null !== i &&
          ('string' === typeof i && (sl(i) || ul(i))
            ? (i = parseFloat(i))
            : ((r = i), !xl.find(il(r)) && Ze.test(e) && (i = vl(t, e))),
          this.setBaseTarget(t, ue(i) ? i.get() : i)),
        ue(i) ? i.get() : i
      );
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      const { initial: e } = this.props;
      let n;
      if ('string' === typeof e || 'object' === typeof e) {
        var i;
        const r = Rt(
          this.props,
          e,
          null === (i = this.presenceContext) || void 0 === i
            ? void 0
            : i.custom,
        );
        r && (n = r[t]);
      }
      if (e && void 0 !== n) return n;
      const r = this.getBaseTargetFromProps(this.props, t);
      return void 0 === r || ue(r)
        ? void 0 !== this.initialValues[t] && void 0 === n
          ? void 0
          : this.baseTarget[t]
        : r;
    }
    on(t, e) {
      return (
        this.events[t] || (this.events[t] = new Gt()),
        this.events[t].add(e)
      );
    }
    notify(t) {
      if (this.events[t]) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        this.events[t].notify(...n);
      }
    }
  }
  class Ml extends Pl {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = bl));
    }
    sortInstanceNodePosition(t, e) {
      return 2 & t.compareDocumentPosition(e) ? 1 : -1;
    }
    getBaseTargetFromProps(t, e) {
      return t.style ? t.style[e] : void 0;
    }
    removeValueFromRenderState(t, e) {
      let { vars: n, style: i } = e;
      (delete n[t], delete i[t]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      ue(t) &&
        (this.childSubscription = t.on('change', (t) => {
          this.current && (this.current.textContent = ''.concat(t));
        }));
    }
  }
  function Cl(t, e, n, i) {
    let { style: r, vars: o } = e;
    const s = t.style;
    let a;
    for (a in r) s[a] = r[a];
    for (a in (null === i || void 0 === i || i.applyProjectionStyles(s, n), o))
      s.setProperty(a, o[a]);
  }
  class Tl extends Ml {
    constructor() {
      (super(...arguments), (this.type = 'html'), (this.renderInstance = Cl));
    }
    readValueFromInstance(t, e) {
      var n, i;
      if (qt.has(e))
        return null !== (n = this.projection) && void 0 !== n && n.isProjecting
          ? hi(e)
          : ((t, e) => {
              const { transform: n = 'none' } = getComputedStyle(t);
              return di(n, e);
            })(t, e);
      {
        const n = ((i = t), window.getComputedStyle(i)),
          r = (we(e) ? n.getPropertyValue(e) : n[e]) || 0;
        return 'string' === typeof r ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(t, e) {
      let { transformPagePoint: n } = e;
      return Jr(t, n);
    }
    build(t, e, n) {
      Da(t, e, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, n) {
      return Ja(t, e, n);
    }
  }
  const Dl = new Set([
    'baseFrequency',
    'diffuseConstant',
    'kernelMatrix',
    'kernelUnitLength',
    'keySplines',
    'keyTimes',
    'limitingConeAngle',
    'markerHeight',
    'markerWidth',
    'numOctaves',
    'targetX',
    'targetY',
    'surfaceScale',
    'specularConstant',
    'specularExponent',
    'stdDeviation',
    'tableValues',
    'viewBox',
    'gradientTransform',
    'pathLength',
    'startOffset',
    'textLength',
    'lengthAdjust',
  ]);
  class Al extends Ml {
    constructor() {
      (super(...arguments),
        (this.type = 'svg'),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Nr));
    }
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (qt.has(e)) {
        const t = gl(e);
        return (t && t.default) || 0;
      }
      return ((e = Dl.has(e) ? e : he(e)), t.getAttribute(e));
    }
    scrapeMotionValuesFromProps(t, e, n) {
      return tl(t, e, n);
    }
    build(t, e, n) {
      Ia(t, e, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(t, e, n, i) {
      !(function (t, e, n, i) {
        Cl(t, e, void 0, i);
        for (const r in e.attrs)
          t.setAttribute(Dl.has(r) ? r : he(r), e.attrs[r]);
      })(t, e, 0, i);
    }
    mount(t) {
      ((this.isSVGTag = Va(t.tagName)), super.mount(t));
    }
  }
  const Ol = (t, e) =>
      qa(t) ? new Al(e) : new Tl(e, { allowProjection: t !== o.Fragment }),
    Fl = Et(nl(Dt(Dt(Dt(Dt({}, _r), oa), Vs), sa), Ol));
  var Rl = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    Ll = o.createContext && o.createContext(Rl),
    Nl = ['attr', 'size', 'title'];
  function jl(t, e) {
    if (null == t) return {};
    var n,
      i,
      r = (function (t, e) {
        if (null == t) return {};
        var n = {};
        for (var i in t)
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            if (e.indexOf(i) >= 0) continue;
            n[i] = t[i];
          }
        return n;
      })(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (i = 0; i < o.length; i++)
        ((n = o[i]),
          e.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(t, n) &&
              (r[n] = t[n])));
    }
    return r;
  }
  function Il() {
    return (
      (Il = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      Il.apply(this, arguments)
    );
  }
  function zl(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      (e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i));
    }
    return n;
  }
  function Vl(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? zl(Object(n), !0).forEach(function (e) {
            Bl(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : zl(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e),
              );
            });
    }
    return t;
  }
  function Bl(t, e, n) {
    return (
      (e = (function (t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || 'default');
            if ('object' != typeof i) return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' == typeof e ? e : e + '';
      })(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Ul(t) {
    return (
      t &&
      t.map((t, e) =>
        o.createElement(t.tag, Vl({ key: e }, t.attr), Ul(t.child)),
      )
    );
  }
  function Wl(t) {
    return (e) =>
      o.createElement(Hl, Il({ attr: Vl({}, t.attr) }, e), Ul(t.child));
  }
  function Hl(t) {
    var e = (e) => {
      var n,
        { attr: i, size: r, title: s } = t,
        a = jl(t, Nl),
        l = r || e.size || '1em';
      return (
        e.className && (n = e.className),
        t.className && (n = (n ? n + ' ' : '') + t.className),
        o.createElement(
          'svg',
          Il(
            { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
            e.attr,
            i,
            a,
            {
              className: n,
              style: Vl(Vl({ color: t.color || e.color }, e.style), t.style),
              height: l,
              width: l,
              xmlns: 'http://www.w3.org/2000/svg',
            },
          ),
          s && o.createElement('title', null, s),
          t.children,
        )
      );
    };
    return void 0 !== Ll
      ? o.createElement(Ll.Consumer, null, (t) => e(t))
      : e(Rl);
  }
  function $l(t) {
    return Wl({
      tag: 'svg',
      attr: { viewBox: '0 0 640 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z',
          },
          child: [],
        },
      ],
    })(t);
  }
  const Yl = [
    {
      id: 'judge',
      label: '\u0642\u0627\u0636\u06cc',
      icon: function (t) {
        return Wl({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z',
              },
              child: [],
            },
          ],
        })(t);
      },
      description:
        '\u0646\u0642\u0634 \u0628\u06cc\u200c\u0637\u0631\u0641 \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u062f\u0627\u062f\u06af\u0627\u0647 \u0648 \u0635\u062f\u0648\u0631 \u0631\u0623\u06cc \u0646\u0647\u0627\u06cc\u06cc.',
    },
    {
      id: 'defender',
      label: '\u0645\u062f\u0627\u0641\u0639',
      icon: function (t) {
        return Wl({
          tag: 'svg',
          attr: { viewBox: '0 0 640 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z',
              },
              child: [],
            },
          ],
        })(t);
      },
      description:
        '\u0627\u0632 \u062d\u0642\u0648\u0642 \u0645\u062a\u0647\u0645 \u062f\u0641\u0627\u0639 \u06a9\u0646 \u0648 \u0627\u0633\u062a\u062f\u0644\u0627\u0644 \u0642\u0627\u0646\u0648\u0646\u06cc \u0627\u0631\u0627\u0626\u0647 \u0628\u062f\u0647.',
    },
    {
      id: 'prosecutor',
      label: '\u062f\u0627\u062f\u0633\u062a\u0627\u0646',
      icon: function (t) {
        return Wl({
          tag: 'svg',
          attr: { viewBox: '0 0 448 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z',
              },
              child: [],
            },
          ],
        })(t);
      },
      description:
        '\u0628\u0627 \u062f\u0644\u0627\u06cc\u0644 \u0645\u062d\u06a9\u0645 \u062a\u0644\u0627\u0634 \u06a9\u0646 \u0645\u062a\u0647\u0645 \u0631\u0627 \u0645\u062c\u0631\u0645 \u062c\u0644\u0648\u0647 \u0628\u062f\u0647.',
    },
  ];
  function ql() {
    const t = et();
    return (0, bo.jsx)('div', {
      className:
        'min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4',
      children: (0, bo.jsxs)('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          (0, bo.jsx)(Fl.h1, {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            className: 'text-3xl font-bold text-center text-blue-800 mb-10',
            children:
              '\ud83c\udfad \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0642\u0634 \u0634\u0645\u0627 \u062f\u0631 \u0628\u0627\u0632\u06cc \u062d\u0642\u0648\u0642\u06cc',
          }),
          (0, bo.jsx)('div', {
            className: 'grid sm:grid-cols-2 md:grid-cols-3 gap-6',
            children: Yl.map((e, n) => {
              const i = e.icon;
              return (0, bo.jsxs)(
                Fl.div,
                {
                  whileHover: { scale: 1.05 },
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.1 * n },
                  onClick: () => {
                    return (
                      (n = e.id),
                      void t('/case-selection?role='.concat(n))
                    );
                    var n;
                  },
                  className:
                    'cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition',
                  children: [
                    (0, bo.jsx)(i, {
                      className: 'text-3xl text-blue-600 mb-3',
                    }),
                    (0, bo.jsx)('h2', {
                      className: 'text-xl font-semibold text-gray-800 mb-2',
                      children: e.label,
                    }),
                    (0, bo.jsx)('p', {
                      className: 'text-sm text-gray-600',
                      children: e.description,
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      }),
    });
  }
  function Kl() {
    const [t, e] = (0, o.useState)([]),
      [n, i] = (0, o.useState)(!0),
      r = et();
    return (
      (0, o.useEffect)(() => {
        (async () => {
          try {
            const t = await fetch('/api/case'),
              n = await t.json();
            e(n);
          } catch (t) {
            console.error(
              '\u274c \u062e\u0637\u0627 \u062f\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u06cc\u0633\u062a \u067e\u0631\u0648\u0646\u062f\u0647\u200c\u0647\u0627:',
              t,
            );
          } finally {
            i(!1);
          }
        })();
      }, []),
      (0, bo.jsx)('div', {
        className: 'min-h-screen bg-gray-100 py-12 px-4',
        children: (0, bo.jsxs)('div', {
          className: 'max-w-3xl mx-auto',
          children: [
            (0, bo.jsx)('h1', {
              className: 'text-2xl font-bold text-center text-gray-800 mb-8',
              children:
                '\ud83c\udfaf \u0627\u0646\u062a\u062e\u0627\u0628 \u06cc\u06a9 \u067e\u0631\u0648\u0646\u062f\u0647 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u0628\u0647 \u062c\u0644\u0633\u0647 \u0645\u0646\u0627\u0638\u0631\u0647',
            }),
            n
              ? (0, bo.jsx)('p', {
                  className: 'text-center',
                  children:
                    '\u23f3 \u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u067e\u0631\u0648\u0646\u062f\u0647\u200c\u0647\u0627...',
                })
              : (0, bo.jsx)('div', {
                  className: 'grid gap-6',
                  children: t.map((t) =>
                    (0, bo.jsxs)(
                      Fl.div,
                      {
                        whileHover: { scale: 1.02 },
                        className:
                          'bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all',
                        onClick: () => r('/hearing-room?caseId='.concat(t.id)),
                        children: [
                          (0, bo.jsxs)('div', {
                            className: 'flex items-center gap-3 mb-4',
                            children: [
                              (0, bo.jsx)($l, {
                                className: 'text-blue-600 text-xl',
                              }),
                              (0, bo.jsx)('h2', {
                                className:
                                  'text-lg font-semibold text-gray-800 truncate',
                                children: t.title,
                              }),
                            ],
                          }),
                          (0, bo.jsx)('p', {
                            className: 'text-gray-700 text-sm',
                            children: t.summary,
                          }),
                        ],
                      },
                      t.id,
                    ),
                  ),
                }),
          ],
        }),
      })
    );
  }
  function Xl(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  const { toString: Ql } = Object.prototype,
    { getPrototypeOf: Gl } = Object,
    { iterator: Jl, toStringTag: Zl } = Symbol,
    tu =
      ((eu = Object.create(null)),
      (t) => {
        const e = Ql.call(t);
        return eu[e] || (eu[e] = e.slice(8, -1).toLowerCase());
      });
  var eu;
  const nu = (t) => ((t = t.toLowerCase()), (e) => tu(e) === t),
    iu = (t) => (e) => typeof e === t,
    { isArray: ru } = Array,
    ou = iu('undefined');
  const su = nu('ArrayBuffer');
  const au = iu('string'),
    lu = iu('function'),
    uu = iu('number'),
    cu = (t) => null !== t && 'object' === typeof t,
    hu = (t) => {
      if ('object' !== tu(t)) return !1;
      const e = Gl(t);
      return (
        (null === e ||
          e === Object.prototype ||
          null === Object.getPrototypeOf(e)) &&
        !(Zl in t) &&
        !(Jl in t)
      );
    },
    du = nu('Date'),
    fu = nu('File'),
    pu = nu('Blob'),
    mu = nu('FileList'),
    gu = nu('URLSearchParams'),
    [vu, yu, bu, xu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
      nu,
    );
  function wu(t, e) {
    let n,
      i,
      { allOwnKeys: r = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== t && 'undefined' !== typeof t)
      if (('object' !== typeof t && (t = [t]), ru(t)))
        for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
      else {
        const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
          o = i.length;
        let s;
        for (n = 0; n < o; n++) ((s = i[n]), e.call(null, t[s], s, t));
      }
  }
  function _u(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i,
      r = n.length;
    for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
    return null;
  }
  const Su =
      'undefined' !== typeof globalThis
        ? globalThis
        : 'undefined' !== typeof self
          ? self
          : 'undefined' !== typeof window
            ? window
            : global,
    ku = (t) => !ou(t) && t !== Su;
  const Eu =
    ((Pu = 'undefined' !== typeof Uint8Array && Gl(Uint8Array)),
    (t) => Pu && t instanceof Pu);
  var Pu;
  const Mu = nu('HTMLFormElement'),
    Cu = ((t) => {
      let { hasOwnProperty: e } = t;
      return (t, n) => e.call(t, n);
    })(Object.prototype),
    Tu = nu('RegExp'),
    Du = (t, e) => {
      const n = Object.getOwnPropertyDescriptors(t),
        i = {};
      (wu(n, (n, r) => {
        let o;
        !1 !== (o = e(n, r, t)) && (i[r] = o || n);
      }),
        Object.defineProperties(t, i));
    };
  const Au = nu('AsyncFunction'),
    Ou = ((t, e) => {
      return t
        ? setImmediate
        : e
          ? ((n = 'axios@'.concat(Math.random())),
            (i = []),
            Su.addEventListener(
              'message',
              (t) => {
                let { source: e, data: r } = t;
                e === Su && r === n && i.length && i.shift()();
              },
              !1,
            ),
            (t) => {
              (i.push(t), Su.postMessage(n, '*'));
            })
          : (t) => setTimeout(t);
      var n, i;
    })('function' === typeof setImmediate, lu(Su.postMessage)),
    Fu =
      'undefined' !== typeof queueMicrotask
        ? queueMicrotask.bind(Su)
        : ('undefined' !== typeof process && process.nextTick) || Ou,
    Ru = {
      isArray: ru,
      isArrayBuffer: su,
      isBuffer: function (t) {
        return (
          null !== t &&
          !ou(t) &&
          null !== t.constructor &&
          !ou(t.constructor) &&
          lu(t.constructor.isBuffer) &&
          t.constructor.isBuffer(t)
        );
      },
      isFormData: (t) => {
        let e;
        return (
          t &&
          (('function' === typeof FormData && t instanceof FormData) ||
            (lu(t.append) &&
              ('formdata' === (e = tu(t)) ||
                ('object' === e &&
                  lu(t.toString) &&
                  '[object FormData]' === t.toString()))))
        );
      },
      isArrayBufferView: function (t) {
        let e;
        return (
          (e =
            'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && su(t.buffer)),
          e
        );
      },
      isString: au,
      isNumber: uu,
      isBoolean: (t) => !0 === t || !1 === t,
      isObject: cu,
      isPlainObject: hu,
      isReadableStream: vu,
      isRequest: yu,
      isResponse: bu,
      isHeaders: xu,
      isUndefined: ou,
      isDate: du,
      isFile: fu,
      isBlob: pu,
      isRegExp: Tu,
      isFunction: lu,
      isStream: (t) => cu(t) && lu(t.pipe),
      isURLSearchParams: gu,
      isTypedArray: Eu,
      isFileList: mu,
      forEach: wu,
      merge: function t() {
        const { caseless: e } = (ku(this) && this) || {},
          n = {},
          i = (i, r) => {
            const o = (e && _u(n, r)) || r;
            hu(n[o]) && hu(i)
              ? (n[o] = t(n[o], i))
              : hu(i)
                ? (n[o] = t({}, i))
                : ru(i)
                  ? (n[o] = i.slice())
                  : (n[o] = i);
          };
        for (let r = 0, o = arguments.length; r < o; r++)
          arguments[r] && wu(arguments[r], i);
        return n;
      },
      extend: function (t, e, n) {
        let { allOwnKeys: i } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          wu(
            e,
            (e, i) => {
              n && lu(e) ? (t[i] = Xl(e, n)) : (t[i] = e);
            },
            { allOwnKeys: i },
          ),
          t
        );
      },
      trim: (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
      stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
      inherits: (t, e, n, i) => {
        ((t.prototype = Object.create(e.prototype, i)),
          (t.prototype.constructor = t),
          Object.defineProperty(t, 'super', { value: e.prototype }),
          n && Object.assign(t.prototype, n));
      },
      toFlatObject: (t, e, n, i) => {
        let r, o, s;
        const a = {};
        if (((e = e || {}), null == t)) return e;
        do {
          for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0; )
            ((s = r[o]),
              (i && !i(s, t, e)) || a[s] || ((e[s] = t[s]), (a[s] = !0)));
          t = !1 !== n && Gl(t);
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e;
      },
      kindOf: tu,
      kindOfTest: nu,
      endsWith: (t, e, n) => {
        ((t = String(t)),
          (void 0 === n || n > t.length) && (n = t.length),
          (n -= e.length));
        const i = t.indexOf(e, n);
        return -1 !== i && i === n;
      },
      toArray: (t) => {
        if (!t) return null;
        if (ru(t)) return t;
        let e = t.length;
        if (!uu(e)) return null;
        const n = new Array(e);
        for (; e-- > 0; ) n[e] = t[e];
        return n;
      },
      forEachEntry: (t, e) => {
        const n = (t && t[Jl]).call(t);
        let i;
        for (; (i = n.next()) && !i.done; ) {
          const n = i.value;
          e.call(t, n[0], n[1]);
        }
      },
      matchAll: (t, e) => {
        let n;
        const i = [];
        for (; null !== (n = t.exec(e)); ) i.push(n);
        return i;
      },
      isHTMLForm: Mu,
      hasOwnProperty: Cu,
      hasOwnProp: Cu,
      reduceDescriptors: Du,
      freezeMethods: (t) => {
        Du(t, (e, n) => {
          if (lu(t) && -1 !== ['arguments', 'caller', 'callee'].indexOf(n))
            return !1;
          const i = t[n];
          lu(i) &&
            ((e.enumerable = !1),
            'writable' in e
              ? (e.writable = !1)
              : e.set ||
                (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (t, e) => {
        const n = {},
          i = (t) => {
            t.forEach((t) => {
              n[t] = !0;
            });
          };
        return (ru(t) ? i(t) : i(String(t).split(e)), n);
      },
      toCamelCase: (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
          return e.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (t, e) =>
        null != t && Number.isFinite((t = +t)) ? t : e,
      findKey: _u,
      global: Su,
      isContextDefined: ku,
      isSpecCompliantForm: function (t) {
        return !!(t && lu(t.append) && 'FormData' === t[Zl] && t[Jl]);
      },
      toJSONObject: (t) => {
        const e = new Array(10),
          n = (t, i) => {
            if (cu(t)) {
              if (e.indexOf(t) >= 0) return;
              if (!('toJSON' in t)) {
                e[i] = t;
                const r = ru(t) ? [] : {};
                return (
                  wu(t, (t, e) => {
                    const o = n(t, i + 1);
                    !ou(o) && (r[e] = o);
                  }),
                  (e[i] = void 0),
                  r
                );
              }
            }
            return t;
          };
        return n(t, 0);
      },
      isAsyncFn: Au,
      isThenable: (t) => t && (cu(t) || lu(t)) && lu(t.then) && lu(t.catch),
      setImmediate: Ou,
      asap: Fu,
      isIterable: (t) => null != t && lu(t[Jl]),
    };
  function Lu(t, e, n, i, r) {
    (Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = t),
      (this.name = 'AxiosError'),
      e && (this.code = e),
      n && (this.config = n),
      i && (this.request = i),
      r && ((this.response = r), (this.status = r.status ? r.status : null)));
  }
  Ru.inherits(Lu, Error, {
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
        config: Ru.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Nu = Lu.prototype,
    ju = {};
  ([
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
  ].forEach((t) => {
    ju[t] = { value: t };
  }),
    Object.defineProperties(Lu, ju),
    Object.defineProperty(Nu, 'isAxiosError', { value: !0 }),
    (Lu.from = (t, e, n, i, r, o) => {
      const s = Object.create(Nu);
      return (
        Ru.toFlatObject(
          t,
          s,
          function (t) {
            return t !== Error.prototype;
          },
          (t) => 'isAxiosError' !== t,
        ),
        Lu.call(s, t.message, e, n, i, r),
        (s.cause = t),
        (s.name = t.name),
        o && Object.assign(s, o),
        s
      );
    }));
  const Iu = Lu;
  function zu(t) {
    return Ru.isPlainObject(t) || Ru.isArray(t);
  }
  function Vu(t) {
    return Ru.endsWith(t, '[]') ? t.slice(0, -2) : t;
  }
  function Bu(t, e, n) {
    return t
      ? t
          .concat(e)
          .map(function (t, e) {
            return ((t = Vu(t)), !n && e ? '[' + t + ']' : t);
          })
          .join(n ? '.' : '')
      : e;
  }
  const Uu = Ru.toFlatObject(Ru, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  const Wu = function (t, e, n) {
    if (!Ru.isObject(t)) throw new TypeError('target must be an object');
    e = e || new FormData();
    const i = (n = Ru.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (t, e) {
          return !Ru.isUndefined(e[t]);
        },
      )).metaTokens,
      r = n.visitor || u,
      o = n.dots,
      s = n.indexes,
      a =
        (n.Blob || ('undefined' !== typeof Blob && Blob)) &&
        Ru.isSpecCompliantForm(e);
    if (!Ru.isFunction(r)) throw new TypeError('visitor must be a function');
    function l(t) {
      if (null === t) return '';
      if (Ru.isDate(t)) return t.toISOString();
      if (Ru.isBoolean(t)) return t.toString();
      if (!a && Ru.isBlob(t))
        throw new Iu('Blob is not supported. Use a Buffer instead.');
      return Ru.isArrayBuffer(t) || Ru.isTypedArray(t)
        ? a && 'function' === typeof Blob
          ? new Blob([t])
          : Buffer.from(t)
        : t;
    }
    function u(t, n, r) {
      let a = t;
      if (t && !r && 'object' === typeof t)
        if (Ru.endsWith(n, '{}'))
          ((n = i ? n : n.slice(0, -2)), (t = JSON.stringify(t)));
        else if (
          (Ru.isArray(t) &&
            (function (t) {
              return Ru.isArray(t) && !t.some(zu);
            })(t)) ||
          ((Ru.isFileList(t) || Ru.endsWith(n, '[]')) && (a = Ru.toArray(t)))
        )
          return (
            (n = Vu(n)),
            a.forEach(function (t, i) {
              !Ru.isUndefined(t) &&
                null !== t &&
                e.append(
                  !0 === s ? Bu([n], i, o) : null === s ? n : n + '[]',
                  l(t),
                );
            }),
            !1
          );
      return !!zu(t) || (e.append(Bu(r, n, o), l(t)), !1);
    }
    const c = [],
      h = Object.assign(Uu, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: zu,
      });
    if (!Ru.isObject(t)) throw new TypeError('data must be an object');
    return (
      (function t(n, i) {
        if (!Ru.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error('Circular reference detected in ' + i.join('.'));
          (c.push(n),
            Ru.forEach(n, function (n, o) {
              !0 ===
                (!(Ru.isUndefined(n) || null === n) &&
                  r.call(e, n, Ru.isString(o) ? o.trim() : o, i, h)) &&
                t(n, i ? i.concat(o) : [o]);
            }),
            c.pop());
        }
      })(t),
      e
    );
  };
  function Hu(t) {
    const e = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0',
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
      return e[t];
    });
  }
  function $u(t, e) {
    ((this._pairs = []), t && Wu(t, this, e));
  }
  const Yu = $u.prototype;
  ((Yu.append = function (t, e) {
    this._pairs.push([t, e]);
  }),
    (Yu.toString = function (t) {
      const e = t
        ? function (e) {
            return t.call(this, e, Hu);
          }
        : Hu;
      return this._pairs
        .map(function (t) {
          return e(t[0]) + '=' + e(t[1]);
        }, '')
        .join('&');
    }));
  const qu = $u;
  function Ku(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function Xu(t, e, n) {
    if (!e) return t;
    const i = (n && n.encode) || Ku;
    Ru.isFunction(n) && (n = { serialize: n });
    const r = n && n.serialize;
    let o;
    if (
      ((o = r
        ? r(e, n)
        : Ru.isURLSearchParams(e)
          ? e.toString()
          : new qu(e, n).toString(i)),
      o)
    ) {
      const e = t.indexOf('#');
      (-1 !== e && (t = t.slice(0, e)),
        (t += (-1 === t.indexOf('?') ? '?' : '&') + o));
    }
    return t;
  }
  const Qu = class {
      constructor() {
        this.handlers = [];
      }
      use(t, e, n) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
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
        Ru.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
    },
    Gu = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Ju = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          'undefined' !== typeof URLSearchParams ? URLSearchParams : qu,
        FormData: 'undefined' !== typeof FormData ? FormData : null,
        Blob: 'undefined' !== typeof Blob ? Blob : null,
      },
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    Zu = 'undefined' !== typeof window && 'undefined' !== typeof document,
    tc = ('object' === typeof navigator && navigator) || void 0,
    ec =
      Zu &&
      (!tc || ['ReactNative', 'NativeScript', 'NS'].indexOf(tc.product) < 0),
    nc =
      'undefined' !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      'function' === typeof self.importScripts,
    ic = (Zu && window.location.href) || 'http://localhost',
    rc = Dt(Dt({}, i), Ju);
  const oc = function (t) {
    function e(t, n, i, r) {
      let o = t[r++];
      if ('__proto__' === o) return !0;
      const s = Number.isFinite(+o),
        a = r >= t.length;
      if (((o = !o && Ru.isArray(i) ? i.length : o), a))
        return (Ru.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !s);
      (i[o] && Ru.isObject(i[o])) || (i[o] = []);
      return (
        e(t, n, i[o], r) &&
          Ru.isArray(i[o]) &&
          (i[o] = (function (t) {
            const e = {},
              n = Object.keys(t);
            let i;
            const r = n.length;
            let o;
            for (i = 0; i < r; i++) ((o = n[i]), (e[o] = t[o]));
            return e;
          })(i[o])),
        !s
      );
    }
    if (Ru.isFormData(t) && Ru.isFunction(t.entries)) {
      const n = {};
      return (
        Ru.forEachEntry(t, (t, i) => {
          e(
            (function (t) {
              return Ru.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                '[]' === t[0] ? '' : t[1] || t[0],
              );
            })(t),
            i,
            n,
            0,
          );
        }),
        n
      );
    }
    return null;
  };
  const sc = {
    transitional: Gu,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
      function (t, e) {
        const n = e.getContentType() || '',
          i = n.indexOf('application/json') > -1,
          r = Ru.isObject(t);
        r && Ru.isHTMLForm(t) && (t = new FormData(t));
        if (Ru.isFormData(t)) return i ? JSON.stringify(oc(t)) : t;
        if (
          Ru.isArrayBuffer(t) ||
          Ru.isBuffer(t) ||
          Ru.isStream(t) ||
          Ru.isFile(t) ||
          Ru.isBlob(t) ||
          Ru.isReadableStream(t)
        )
          return t;
        if (Ru.isArrayBufferView(t)) return t.buffer;
        if (Ru.isURLSearchParams(t))
          return (
            e.setContentType(
              'application/x-www-form-urlencoded;charset=utf-8',
              !1,
            ),
            t.toString()
          );
        let o;
        if (r) {
          if (n.indexOf('application/x-www-form-urlencoded') > -1)
            return (function (t, e) {
              return Wu(
                t,
                new rc.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (t, e, n, i) {
                      return rc.isNode && Ru.isBuffer(t)
                        ? (this.append(e, t.toString('base64')), !1)
                        : i.defaultVisitor.apply(this, arguments);
                    },
                  },
                  e,
                ),
              );
            })(t, this.formSerializer).toString();
          if ((o = Ru.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
            const e = this.env && this.env.FormData;
            return Wu(
              o ? { 'files[]': t } : t,
              e && new e(),
              this.formSerializer,
            );
          }
        }
        return r || i
          ? (e.setContentType('application/json', !1),
            (function (t, e, n) {
              if (Ru.isString(t))
                try {
                  return ((e || JSON.parse)(t), Ru.trim(t));
                } catch (Iy) {
                  if ('SyntaxError' !== Iy.name) throw Iy;
                }
              return (n || JSON.stringify)(t);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        const e = this.transitional || sc.transitional,
          n = e && e.forcedJSONParsing,
          i = 'json' === this.responseType;
        if (Ru.isResponse(t) || Ru.isReadableStream(t)) return t;
        if (t && Ru.isString(t) && ((n && !this.responseType) || i)) {
          const n = !(e && e.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (Iy) {
            if (n) {
              if ('SyntaxError' === Iy.name)
                throw Iu.from(
                  Iy,
                  Iu.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response,
                );
              throw Iy;
            }
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
    env: { FormData: rc.classes.FormData, Blob: rc.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': void 0,
      },
    },
  };
  Ru.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (t) => {
    sc.headers[t] = {};
  });
  const ac = sc,
    lc = Ru.toObjectSet([
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
    uc = Symbol('internals');
  function cc(t) {
    return t && String(t).trim().toLowerCase();
  }
  function hc(t) {
    return !1 === t || null == t ? t : Ru.isArray(t) ? t.map(hc) : String(t);
  }
  function dc(t, e, n, i, r) {
    return Ru.isFunction(i)
      ? i.call(this, e, n)
      : (r && (e = n),
        Ru.isString(e)
          ? Ru.isString(i)
            ? -1 !== e.indexOf(i)
            : Ru.isRegExp(i)
              ? i.test(e)
              : void 0
          : void 0);
  }
  class fc {
    constructor(t) {
      t && this.set(t);
    }
    set(t, e, n) {
      const i = this;
      function r(t, e, n) {
        const r = cc(e);
        if (!r) throw new Error('header name must be a non-empty string');
        const o = Ru.findKey(i, r);
        (!o || void 0 === i[o] || !0 === n || (void 0 === n && !1 !== i[o])) &&
          (i[o || e] = hc(t));
      }
      const o = (t, e) => Ru.forEach(t, (t, n) => r(t, n, e));
      if (Ru.isPlainObject(t) || t instanceof this.constructor) o(t, e);
      else if (
        Ru.isString(t) &&
        (t = t.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
      )
        o(
          ((t) => {
            const e = {};
            let n, i, r;
            return (
              t &&
                t.split('\n').forEach(function (t) {
                  ((r = t.indexOf(':')),
                    (n = t.substring(0, r).trim().toLowerCase()),
                    (i = t.substring(r + 1).trim()),
                    !n ||
                      (e[n] && lc[n]) ||
                      ('set-cookie' === n
                        ? e[n]
                          ? e[n].push(i)
                          : (e[n] = [i])
                        : (e[n] = e[n] ? e[n] + ', ' + i : i)));
                }),
              e
            );
          })(t),
          e,
        );
      else if (Ru.isObject(t) && Ru.isIterable(t)) {
        let n,
          i,
          r = {};
        for (const e of t) {
          if (!Ru.isArray(e))
            throw TypeError('Object iterator must return a key-value pair');
          r[(i = e[0])] = (n = r[i])
            ? Ru.isArray(n)
              ? [...n, e[1]]
              : [n, e[1]]
            : e[1];
        }
        o(r, e);
      } else null != t && r(e, t, n);
      return this;
    }
    get(t, e) {
      if ((t = cc(t))) {
        const n = Ru.findKey(this, t);
        if (n) {
          const t = this[n];
          if (!e) return t;
          if (!0 === e)
            return (function (t) {
              const e = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let i;
              for (; (i = n.exec(t)); ) e[i[1]] = i[2];
              return e;
            })(t);
          if (Ru.isFunction(e)) return e.call(this, t, n);
          if (Ru.isRegExp(e)) return e.exec(t);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(t, e) {
      if ((t = cc(t))) {
        const n = Ru.findKey(this, t);
        return !(!n || void 0 === this[n] || (e && !dc(0, this[n], n, e)));
      }
      return !1;
    }
    delete(t, e) {
      const n = this;
      let i = !1;
      function r(t) {
        if ((t = cc(t))) {
          const r = Ru.findKey(n, t);
          !r || (e && !dc(0, n[r], r, e)) || (delete n[r], (i = !0));
        }
      }
      return (Ru.isArray(t) ? t.forEach(r) : r(t), i);
    }
    clear(t) {
      const e = Object.keys(this);
      let n = e.length,
        i = !1;
      for (; n--; ) {
        const r = e[n];
        (t && !dc(0, this[r], r, t, !0)) || (delete this[r], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const e = this,
        n = {};
      return (
        Ru.forEach(this, (i, r) => {
          const o = Ru.findKey(n, r);
          if (o) return ((e[o] = hc(i)), void delete e[r]);
          const s = t
            ? (function (t) {
                return t
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
              })(r)
            : String(r).trim();
          (s !== r && delete e[r], (e[s] = hc(i)), (n[s] = !0));
        }),
        this
      );
    }
    concat() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return this.constructor.concat(this, ...e);
    }
    toJSON(t) {
      const e = Object.create(null);
      return (
        Ru.forEach(this, (n, i) => {
          null != n &&
            !1 !== n &&
            (e[i] = t && Ru.isArray(n) ? n.join(', ') : n);
        }),
        e
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((t) => {
          let [e, n] = t;
          return e + ': ' + n;
        })
        .join('\n');
    }
    getSetCookie() {
      return this.get('set-cookie') || [];
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t) {
      const e = new this(t);
      for (
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        i[r - 1] = arguments[r];
      return (i.forEach((t) => e.set(t)), e);
    }
    static accessor(t) {
      const e = (this[uc] = this[uc] = { accessors: {} }).accessors,
        n = this.prototype;
      function i(t) {
        const i = cc(t);
        e[i] ||
          (!(function (t, e) {
            const n = Ru.toCamelCase(' ' + e);
            ['get', 'set', 'has'].forEach((i) => {
              Object.defineProperty(t, i + n, {
                value: function (t, n, r) {
                  return this[i].call(this, e, t, n, r);
                },
                configurable: !0,
              });
            });
          })(n, t),
          (e[i] = !0));
      }
      return (Ru.isArray(t) ? t.forEach(i) : i(t), this);
    }
  }
  (fc.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
  ]),
    Ru.reduceDescriptors(fc.prototype, (t, e) => {
      let { value: n } = t,
        i = e[0].toUpperCase() + e.slice(1);
      return {
        get: () => n,
        set(t) {
          this[i] = t;
        },
      };
    }),
    Ru.freezeMethods(fc));
  const pc = fc;
  function mc(t, e) {
    const n = this || ac,
      i = e || n,
      r = pc.from(i.headers);
    let o = i.data;
    return (
      Ru.forEach(t, function (t) {
        o = t.call(n, o, r.normalize(), e ? e.status : void 0);
      }),
      r.normalize(),
      o
    );
  }
  function gc(t) {
    return !(!t || !t.__CANCEL__);
  }
  function vc(t, e, n) {
    (Iu.call(this, null == t ? 'canceled' : t, Iu.ERR_CANCELED, e, n),
      (this.name = 'CanceledError'));
  }
  Ru.inherits(vc, Iu, { __CANCEL__: !0 });
  const yc = vc;
  function bc(t, e, n) {
    const i = n.config.validateStatus;
    n.status && i && !i(n.status)
      ? e(
          new Iu(
            'Request failed with status code ' + n.status,
            [Iu.ERR_BAD_REQUEST, Iu.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n,
          ),
        )
      : t(n);
  }
  const xc = function (t, e) {
    t = t || 10;
    const n = new Array(t),
      i = new Array(t);
    let r,
      o = 0,
      s = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (a) {
        const l = Date.now(),
          u = i[s];
        (r || (r = l), (n[o] = a), (i[o] = l));
        let c = s,
          h = 0;
        for (; c !== o; ) ((h += n[c++]), (c %= t));
        if (((o = (o + 1) % t), o === s && (s = (s + 1) % t), l - r < e))
          return;
        const d = u && l - u;
        return d ? Math.round((1e3 * h) / d) : void 0;
      }
    );
  };
  const wc = function (t, e) {
      let n,
        i,
        r = 0,
        o = 1e3 / e;
      const s = function (e) {
        let o =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        ((r = o),
          (n = null),
          i && (clearTimeout(i), (i = null)),
          t.apply(null, e));
      };
      return [
        function () {
          const t = Date.now(),
            e = t - r;
          for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          e >= o
            ? s(l, t)
            : ((n = l),
              i ||
                (i = setTimeout(() => {
                  ((i = null), s(n));
                }, o - e)));
        },
        () => n && s(n),
      ];
    },
    _c = function (t, e) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        i = 0;
      const r = xc(50, 250);
      return wc((n) => {
        const o = n.loaded,
          s = n.lengthComputable ? n.total : void 0,
          a = o - i,
          l = r(a);
        i = o;
        t({
          loaded: o,
          total: s,
          progress: s ? o / s : void 0,
          bytes: a,
          rate: l || void 0,
          estimated: l && s && o <= s ? (s - o) / l : void 0,
          event: n,
          lengthComputable: null != s,
          [e ? 'download' : 'upload']: !0,
        });
      }, n);
    },
    Sc = (t, e) => {
      const n = null != t;
      return [(i) => e[0]({ lengthComputable: n, total: t, loaded: i }), e[1]];
    },
    kc = (t) =>
      function () {
        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
          n[i] = arguments[i];
        return Ru.asap(() => t(...n));
      },
    Ec = rc.hasStandardBrowserEnv
      ? ((t, e) => (n) => (
          (n = new URL(n, rc.origin)),
          t.protocol === n.protocol &&
            t.host === n.host &&
            (e || t.port === n.port)
        ))(
          new URL(rc.origin),
          rc.navigator && /(msie|trident)/i.test(rc.navigator.userAgent),
        )
      : () => !0,
    Pc = rc.hasStandardBrowserEnv
      ? {
          write(t, e, n, i, r, o) {
            const s = [t + '=' + encodeURIComponent(e)];
            (Ru.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
              Ru.isString(i) && s.push('path=' + i),
              Ru.isString(r) && s.push('domain=' + r),
              !0 === o && s.push('secure'),
              (document.cookie = s.join('; ')));
          },
          read(t) {
            const e = document.cookie.match(
              new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'),
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove(t) {
            this.write(t, '', Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function Mc(t, e, n) {
    let i = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    return t && (i || 0 == n)
      ? (function (t, e) {
          return e ? t.replace(/\/?\/$/, '') + '/' + e.replace(/^\/+/, '') : t;
        })(t, e)
      : e;
  }
  const Cc = (t) => (t instanceof pc ? Dt({}, t) : t);
  function Tc(t, e) {
    e = e || {};
    const n = {};
    function i(t, e, n, i) {
      return Ru.isPlainObject(t) && Ru.isPlainObject(e)
        ? Ru.merge.call({ caseless: i }, t, e)
        : Ru.isPlainObject(e)
          ? Ru.merge({}, e)
          : Ru.isArray(e)
            ? e.slice()
            : e;
    }
    function r(t, e, n, r) {
      return Ru.isUndefined(e)
        ? Ru.isUndefined(t)
          ? void 0
          : i(void 0, t, 0, r)
        : i(t, e, 0, r);
    }
    function o(t, e) {
      if (!Ru.isUndefined(e)) return i(void 0, e);
    }
    function s(t, e) {
      return Ru.isUndefined(e)
        ? Ru.isUndefined(t)
          ? void 0
          : i(void 0, t)
        : i(void 0, e);
    }
    function a(n, r, o) {
      return o in e ? i(n, r) : o in t ? i(void 0, n) : void 0;
    }
    const l = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      withXSRFToken: s,
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
      headers: (t, e, n) => r(Cc(t), Cc(e), 0, !0),
    };
    return (
      Ru.forEach(Object.keys(Object.assign({}, t, e)), function (i) {
        const o = l[i] || r,
          s = o(t[i], e[i], i);
        (Ru.isUndefined(s) && o !== a) || (n[i] = s);
      }),
      n
    );
  }
  const Dc = (t) => {
      const e = Tc({}, t);
      let n,
        {
          data: i,
          withXSRFToken: r,
          xsrfHeaderName: o,
          xsrfCookieName: s,
          headers: a,
          auth: l,
        } = e;
      if (
        ((e.headers = a = pc.from(a)),
        (e.url = Xu(
          Mc(e.baseURL, e.url, e.allowAbsoluteUrls),
          t.params,
          t.paramsSerializer,
        )),
        l &&
          a.set(
            'Authorization',
            'Basic ' +
              btoa(
                (l.username || '') +
                  ':' +
                  (l.password ? unescape(encodeURIComponent(l.password)) : ''),
              ),
          ),
        Ru.isFormData(i))
      )
        if (rc.hasStandardBrowserEnv || rc.hasStandardBrowserWebWorkerEnv)
          a.setContentType(void 0);
        else if (!1 !== (n = a.getContentType())) {
          const [t, ...e] = n
            ? n
                .split(';')
                .map((t) => t.trim())
                .filter(Boolean)
            : [];
          a.setContentType([t || 'multipart/form-data', ...e].join('; '));
        }
      if (
        rc.hasStandardBrowserEnv &&
        (r && Ru.isFunction(r) && (r = r(e)), r || (!1 !== r && Ec(e.url)))
      ) {
        const t = o && s && Pc.read(s);
        t && a.set(o, t);
      }
      return e;
    },
    Ac =
      'undefined' !== typeof XMLHttpRequest &&
      function (t) {
        return new Promise(function (e, n) {
          const i = Dc(t);
          let r = i.data;
          const o = pc.from(i.headers).normalize();
          let s,
            a,
            l,
            u,
            c,
            { responseType: h, onUploadProgress: d, onDownloadProgress: f } = i;
          function p() {
            (u && u(),
              c && c(),
              i.cancelToken && i.cancelToken.unsubscribe(s),
              i.signal && i.signal.removeEventListener('abort', s));
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const i = pc.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            );
            (bc(
              function (t) {
                (e(t), p());
              },
              function (t) {
                (n(t), p());
              },
              {
                data:
                  h && 'text' !== h && 'json' !== h
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: i,
                config: t,
                request: m,
              },
            ),
              (m = null));
          }
          (m.open(i.method.toUpperCase(), i.url, !0),
            (m.timeout = i.timeout),
            'onloadend' in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf('file:'))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new Iu('Request aborted', Iu.ECONNABORTED, t, m)),
                (m = null));
            }),
            (m.onerror = function () {
              (n(new Iu('Network Error', Iu.ERR_NETWORK, t, m)), (m = null));
            }),
            (m.ontimeout = function () {
              let e = i.timeout
                ? 'timeout of ' + i.timeout + 'ms exceeded'
                : 'timeout exceeded';
              const r = i.transitional || Gu;
              (i.timeoutErrorMessage && (e = i.timeoutErrorMessage),
                n(
                  new Iu(
                    e,
                    r.clarifyTimeoutError ? Iu.ETIMEDOUT : Iu.ECONNABORTED,
                    t,
                    m,
                  ),
                ),
                (m = null));
            }),
            void 0 === r && o.setContentType(null),
            'setRequestHeader' in m &&
              Ru.forEach(o.toJSON(), function (t, e) {
                m.setRequestHeader(e, t);
              }),
            Ru.isUndefined(i.withCredentials) ||
              (m.withCredentials = !!i.withCredentials),
            h && 'json' !== h && (m.responseType = i.responseType),
            f && (([l, c] = _c(f, !0)), m.addEventListener('progress', l)),
            d &&
              m.upload &&
              (([a, u] = _c(d)),
              m.upload.addEventListener('progress', a),
              m.upload.addEventListener('loadend', u)),
            (i.cancelToken || i.signal) &&
              ((s = (e) => {
                m &&
                  (n(!e || e.type ? new yc(null, t, m) : e),
                  m.abort(),
                  (m = null));
              }),
              i.cancelToken && i.cancelToken.subscribe(s),
              i.signal &&
                (i.signal.aborted
                  ? s()
                  : i.signal.addEventListener('abort', s))));
          const v = (function (t) {
            const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
            return (e && e[1]) || '';
          })(i.url);
          v && -1 === rc.protocols.indexOf(v)
            ? n(
                new Iu(
                  'Unsupported protocol ' + v + ':',
                  Iu.ERR_BAD_REQUEST,
                  t,
                ),
              )
            : m.send(r || null);
        });
      },
    Oc = (t, e) => {
      const { length: n } = (t = t ? t.filter(Boolean) : []);
      if (e || n) {
        let n,
          i = new AbortController();
        const r = function (t) {
          if (!n) {
            ((n = !0), s());
            const e = t instanceof Error ? t : this.reason;
            i.abort(
              e instanceof Iu ? e : new yc(e instanceof Error ? e.message : e),
            );
          }
        };
        let o =
          e &&
          setTimeout(() => {
            ((o = null),
              r(new Iu('timeout '.concat(e, ' of ms exceeded'), Iu.ETIMEDOUT)));
          }, e);
        const s = () => {
          t &&
            (o && clearTimeout(o),
            (o = null),
            t.forEach((t) => {
              t.unsubscribe
                ? t.unsubscribe(r)
                : t.removeEventListener('abort', r);
            }),
            (t = null));
        };
        t.forEach((t) => t.addEventListener('abort', r));
        const { signal: a } = i;
        return ((a.unsubscribe = () => Ru.asap(s)), a);
      }
    };
  function Fc(t, e) {
    ((this.v = t), (this.k = e));
  }
  function Rc(t) {
    return function () {
      return new Lc(t.apply(this, arguments));
    };
  }
  function Lc(t) {
    var e, n;
    function i(e, n) {
      try {
        var o = t[e](n),
          s = o.value,
          a = s instanceof Fc;
        Promise.resolve(a ? s.v : s).then(
          function (n) {
            if (a) {
              var l = 'return' === e ? 'return' : 'next';
              if (!s.k || n.done) return i(l, n);
              n = t[l](n).value;
            }
            r(o.done ? 'return' : 'normal', n);
          },
          function (t) {
            i('throw', t);
          },
        );
      } catch (t) {
        r('throw', t);
      }
    }
    function r(t, r) {
      switch (t) {
        case 'return':
          e.resolve({ value: r, done: !0 });
          break;
        case 'throw':
          e.reject(r);
          break;
        default:
          e.resolve({ value: r, done: !1 });
      }
      (e = e.next) ? i(e.key, e.arg) : (n = null);
    }
    ((this._invoke = function (t, r) {
      return new Promise(function (o, s) {
        var a = { key: t, arg: r, resolve: o, reject: s, next: null };
        n ? (n = n.next = a) : ((e = n = a), i(t, r));
      });
    }),
      'function' != typeof t.return && (this.return = void 0));
  }
  function Nc(t) {
    return new Fc(t, 0);
  }
  function jc(t) {
    var e = {},
      n = !1;
    function i(e, i) {
      return (
        (n = !0),
        (i = new Promise(function (n) {
          n(t[e](i));
        })),
        { done: !1, value: new Fc(i, 1) }
      );
    }
    return (
      (e[('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator'] =
        function () {
          return this;
        }),
      (e.next = function (t) {
        return n ? ((n = !1), t) : i('next', t);
      }),
      'function' == typeof t.throw &&
        (e.throw = function (t) {
          if (n) throw ((n = !1), t);
          return i('throw', t);
        }),
      'function' == typeof t.return &&
        (e.return = function (t) {
          return n ? ((n = !1), t) : i('return', t);
        }),
      e
    );
  }
  function Ic(t) {
    var e,
      n,
      i,
      r = 2;
    for (
      'undefined' != typeof Symbol &&
      ((n = Symbol.asyncIterator), (i = Symbol.iterator));
      r--;

    ) {
      if (n && null != (e = t[n])) return e.call(t);
      if (i && null != (e = t[i])) return new zc(e.call(t));
      ((n = '@@asyncIterator'), (i = '@@iterator'));
    }
    throw new TypeError('Object is not async iterable');
  }
  function zc(t) {
    function e(t) {
      if (Object(t) !== t)
        return Promise.reject(new TypeError(t + ' is not an object.'));
      var e = t.done;
      return Promise.resolve(t.value).then(function (t) {
        return { value: t, done: e };
      });
    }
    return (
      (zc = function (t) {
        ((this.s = t), (this.n = t.next));
      }),
      (zc.prototype = {
        s: null,
        n: null,
        next: function () {
          return e(this.n.apply(this.s, arguments));
        },
        return: function (t) {
          var n = this.s.return;
          return void 0 === n
            ? Promise.resolve({ value: t, done: !0 })
            : e(n.apply(this.s, arguments));
        },
        throw: function (t) {
          var n = this.s.return;
          return void 0 === n
            ? Promise.reject(t)
            : e(n.apply(this.s, arguments));
        },
      }),
      new zc(t)
    );
  }
  ((Lc.prototype[
    ('function' == typeof Symbol && Symbol.asyncIterator) || '@@asyncIterator'
  ] = function () {
    return this;
  }),
    (Lc.prototype.next = function (t) {
      return this._invoke('next', t);
    }),
    (Lc.prototype.throw = function (t) {
      return this._invoke('throw', t);
    }),
    (Lc.prototype.return = function (t) {
      return this._invoke('return', t);
    }));
  const Vc = function* (t, e) {
      let n = t.byteLength;
      if (!e || n < e) return void (yield t);
      let i,
        r = 0;
      for (; r < n; ) ((i = r + e), yield t.slice(r, i), (r = i));
    },
    Bc = (function () {
      var t = Rc(function* (t, e) {
        var n,
          i = !1,
          r = !1;
        try {
          for (
            var o, s = Ic(Uc(t));
            (i = !(o = yield Nc(s.next())).done);
            i = !1
          ) {
            const t = o.value;
            yield* jc(Ic(Vc(t, e)));
          }
        } catch (a) {
          ((r = !0), (n = a));
        } finally {
          try {
            i && null != s.return && (yield Nc(s.return()));
          } finally {
            if (r) throw n;
          }
        }
      });
      return function (e, n) {
        return t.apply(this, arguments);
      };
    })(),
    Uc = (function () {
      var t = Rc(function* (t) {
        if (t[Symbol.asyncIterator]) return void (yield* jc(Ic(t)));
        const e = t.getReader();
        try {
          for (;;) {
            const { done: t, value: n } = yield Nc(e.read());
            if (t) break;
            yield n;
          }
        } finally {
          yield Nc(e.cancel());
        }
      });
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    Wc = (t, e, n, i) => {
      const r = Bc(t, e);
      let o,
        s = 0,
        a = (t) => {
          o || ((o = !0), i && i(t));
        };
      return new ReadableStream(
        {
          async pull(t) {
            try {
              const { done: e, value: i } = await r.next();
              if (e) return (a(), void t.close());
              let o = i.byteLength;
              if (n) {
                let t = (s += o);
                n(t);
              }
              t.enqueue(new Uint8Array(i));
            } catch (e) {
              throw (a(e), e);
            }
          },
          cancel: (t) => (a(t), r.return()),
        },
        { highWaterMark: 2 },
      );
    },
    Hc =
      'function' === typeof fetch &&
      'function' === typeof Request &&
      'function' === typeof Response,
    $c = Hc && 'function' === typeof ReadableStream,
    Yc =
      Hc &&
      ('function' === typeof TextEncoder
        ? ((qc = new TextEncoder()), (t) => qc.encode(t))
        : async (t) => new Uint8Array(await new Response(t).arrayBuffer()));
  var qc;
  const Kc = function (t) {
      try {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return !!t(...n);
      } catch (Iy) {
        return !1;
      }
    },
    Xc =
      $c &&
      Kc(() => {
        let t = !1;
        const e = new Request(rc.origin, {
          body: new ReadableStream(),
          method: 'POST',
          get duplex() {
            return ((t = !0), 'half');
          },
        }).headers.has('Content-Type');
        return t && !e;
      }),
    Qc = $c && Kc(() => Ru.isReadableStream(new Response('').body)),
    Gc = { stream: Qc && ((t) => t.body) };
  var Jc;
  Hc &&
    ((Jc = new Response()),
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Gc[t] &&
        (Gc[t] = Ru.isFunction(Jc[t])
          ? (e) => e[t]()
          : (e, n) => {
              throw new Iu(
                "Response type '".concat(t, "' is not supported"),
                Iu.ERR_NOT_SUPPORT,
                n,
              );
            });
    }));
  const Zc = async (t, e) => {
      const n = Ru.toFiniteNumber(t.getContentLength());
      return null == n
        ? (async (t) => {
            if (null == t) return 0;
            if (Ru.isBlob(t)) return t.size;
            if (Ru.isSpecCompliantForm(t)) {
              const e = new Request(rc.origin, { method: 'POST', body: t });
              return (await e.arrayBuffer()).byteLength;
            }
            return Ru.isArrayBufferView(t) || Ru.isArrayBuffer(t)
              ? t.byteLength
              : (Ru.isURLSearchParams(t) && (t += ''),
                Ru.isString(t) ? (await Yc(t)).byteLength : void 0);
          })(e)
        : n;
    },
    th =
      Hc &&
      (async (t) => {
        let {
          url: e,
          method: n,
          data: i,
          signal: r,
          cancelToken: o,
          timeout: s,
          onDownloadProgress: a,
          onUploadProgress: l,
          responseType: u,
          headers: c,
          withCredentials: h = 'same-origin',
          fetchOptions: d,
        } = Dc(t);
        u = u ? (u + '').toLowerCase() : 'text';
        let f,
          p = Oc([r, o && o.toAbortSignal()], s);
        const m =
          p &&
          p.unsubscribe &&
          (() => {
            p.unsubscribe();
          });
        let g;
        try {
          if (
            l &&
            Xc &&
            'get' !== n &&
            'head' !== n &&
            0 !== (g = await Zc(c, i))
          ) {
            let t,
              n = new Request(e, { method: 'POST', body: i, duplex: 'half' });
            if (
              (Ru.isFormData(i) &&
                (t = n.headers.get('content-type')) &&
                c.setContentType(t),
              n.body)
            ) {
              const [t, e] = Sc(g, _c(kc(l)));
              i = Wc(n.body, 65536, t, e);
            }
          }
          Ru.isString(h) || (h = h ? 'include' : 'omit');
          const r = 'credentials' in Request.prototype;
          f = new Request(
            e,
            Dt(
              Dt({}, d),
              {},
              {
                signal: p,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: i,
                duplex: 'half',
                credentials: r ? h : void 0,
              },
            ),
          );
          let o = await fetch(f, d);
          const s = Qc && ('stream' === u || 'response' === u);
          if (Qc && (a || (s && m))) {
            const t = {};
            ['status', 'statusText', 'headers'].forEach((e) => {
              t[e] = o[e];
            });
            const e = Ru.toFiniteNumber(o.headers.get('content-length')),
              [n, i] = (a && Sc(e, _c(kc(a), !0))) || [];
            o = new Response(
              Wc(o.body, 65536, n, () => {
                (i && i(), m && m());
              }),
              t,
            );
          }
          u = u || 'text';
          let v = await Gc[Ru.findKey(Gc, u) || 'text'](o, t);
          return (
            !s && m && m(),
            await new Promise((e, n) => {
              bc(e, n, {
                data: v,
                headers: pc.from(o.headers),
                status: o.status,
                statusText: o.statusText,
                config: t,
                request: f,
              });
            })
          );
        } catch (v) {
          if (
            (m && m(),
            v && 'TypeError' === v.name && /Load failed|fetch/i.test(v.message))
          )
            throw Object.assign(new Iu('Network Error', Iu.ERR_NETWORK, t, f), {
              cause: v.cause || v,
            });
          throw Iu.from(v, v && v.code, t, f);
        }
      }),
    eh = { http: null, xhr: Ac, fetch: th };
  Ru.forEach(eh, (t, e) => {
    if (t) {
      try {
        Object.defineProperty(t, 'name', { value: e });
      } catch (Iy) {}
      Object.defineProperty(t, 'adapterName', { value: e });
    }
  });
  const nh = (t) => '- '.concat(t),
    ih = (t) => Ru.isFunction(t) || null === t || !1 === t,
    rh = (t) => {
      t = Ru.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, i;
      const r = {};
      for (let o = 0; o < e; o++) {
        let e;
        if (
          ((n = t[o]),
          (i = n),
          !ih(n) && ((i = eh[(e = String(n)).toLowerCase()]), void 0 === i))
        )
          throw new Iu("Unknown adapter '".concat(e, "'"));
        if (i) break;
        r[e || '#' + o] = i;
      }
      if (!i) {
        const t = Object.entries(r).map((t) => {
          let [e, n] = t;
          return (
            'adapter '.concat(e, ' ') +
            (!1 === n
              ? 'is not supported by the environment'
              : 'is not available in the build')
          );
        });
        let n = e
          ? t.length > 1
            ? 'since :\n' + t.map(nh).join('\n')
            : ' ' + nh(t[0])
          : 'as no adapter specified';
        throw new Iu(
          'There is no suitable adapter to dispatch the request ' + n,
          'ERR_NOT_SUPPORT',
        );
      }
      return i;
    };
  function oh(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new yc(null, t);
  }
  function sh(t) {
    (oh(t),
      (t.headers = pc.from(t.headers)),
      (t.data = mc.call(t, t.transformRequest)),
      -1 !== ['post', 'put', 'patch'].indexOf(t.method) &&
        t.headers.setContentType('application/x-www-form-urlencoded', !1));
    return rh(t.adapter || ac.adapter)(t).then(
      function (e) {
        return (
          oh(t),
          (e.data = mc.call(t, t.transformResponse, e)),
          (e.headers = pc.from(e.headers)),
          e
        );
      },
      function (e) {
        return (
          gc(e) ||
            (oh(t),
            e &&
              e.response &&
              ((e.response.data = mc.call(t, t.transformResponse, e.response)),
              (e.response.headers = pc.from(e.response.headers)))),
          Promise.reject(e)
        );
      },
    );
  }
  const ah = '1.10.0',
    lh = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (t, e) => {
      lh[t] = function (n) {
        return typeof n === t || 'a' + (e < 1 ? 'n ' : ' ') + t;
      };
    },
  );
  const uh = {};
  ((lh.transitional = function (t, e, n) {
    function i(t, e) {
      return (
        '[Axios v' +
        ah +
        "] Transitional option '" +
        t +
        "'" +
        e +
        (n ? '. ' + n : '')
      );
    }
    return (n, r, o) => {
      if (!1 === t)
        throw new Iu(
          i(r, ' has been removed' + (e ? ' in ' + e : '')),
          Iu.ERR_DEPRECATED,
        );
      return (
        e &&
          !uh[r] &&
          ((uh[r] = !0),
          console.warn(
            i(
              r,
              ' has been deprecated since v' +
                e +
                ' and will be removed in the near future',
            ),
          )),
        !t || t(n, r, o)
      );
    };
  }),
    (lh.spelling = function (t) {
      return (e, n) => (
        console.warn(''.concat(n, ' is likely a misspelling of ').concat(t)),
        !0
      );
    }));
  const ch = {
      assertOptions: function (t, e, n) {
        if ('object' !== typeof t)
          throw new Iu('options must be an object', Iu.ERR_BAD_OPTION_VALUE);
        const i = Object.keys(t);
        let r = i.length;
        for (; r-- > 0; ) {
          const o = i[r],
            s = e[o];
          if (s) {
            const e = t[o],
              n = void 0 === e || s(e, o, t);
            if (!0 !== n)
              throw new Iu(
                'option ' + o + ' must be ' + n,
                Iu.ERR_BAD_OPTION_VALUE,
              );
            continue;
          }
          if (!0 !== n) throw new Iu('Unknown option ' + o, Iu.ERR_BAD_OPTION);
        }
      },
      validators: lh,
    },
    hh = ch.validators;
  class dh {
    constructor(t) {
      ((this.defaults = t || {}),
        (this.interceptors = { request: new Qu(), response: new Qu() }));
    }
    async request(t, e) {
      try {
        return await this._request(t, e);
      } catch (n) {
        if (n instanceof Error) {
          let t = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(t)
            : (t = new Error());
          const e = t.stack ? t.stack.replace(/^.+\n/, '') : '';
          try {
            n.stack
              ? e &&
                !String(n.stack).endsWith(e.replace(/^.+\n.+\n/, '')) &&
                (n.stack += '\n' + e)
              : (n.stack = e);
          } catch (Iy) {}
        }
        throw n;
      }
    }
    _request(t, e) {
      ('string' === typeof t ? ((e = e || {}).url = t) : (e = t || {}),
        (e = Tc(this.defaults, e)));
      const { transitional: n, paramsSerializer: i, headers: r } = e;
      (void 0 !== n &&
        ch.assertOptions(
          n,
          {
            silentJSONParsing: hh.transitional(hh.boolean),
            forcedJSONParsing: hh.transitional(hh.boolean),
            clarifyTimeoutError: hh.transitional(hh.boolean),
          },
          !1,
        ),
        null != i &&
          (Ru.isFunction(i)
            ? (e.paramsSerializer = { serialize: i })
            : ch.assertOptions(
                i,
                { encode: hh.function, serialize: hh.function },
                !0,
              )),
        void 0 !== e.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (e.allowAbsoluteUrls = !0)),
        ch.assertOptions(
          e,
          {
            baseUrl: hh.spelling('baseURL'),
            withXsrfToken: hh.spelling('withXSRFToken'),
          },
          !0,
        ),
        (e.method = (e.method || this.defaults.method || 'get').toLowerCase()));
      let o = r && Ru.merge(r.common, r[e.method]);
      (r &&
        Ru.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (t) => {
            delete r[t];
          },
        ),
        (e.headers = pc.concat(o, r)));
      const s = [];
      let a = !0;
      this.interceptors.request.forEach(function (t) {
        ('function' === typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((a = a && t.synchronous), s.unshift(t.fulfilled, t.rejected));
      });
      const l = [];
      let u;
      this.interceptors.response.forEach(function (t) {
        l.push(t.fulfilled, t.rejected);
      });
      let c,
        h = 0;
      if (!a) {
        const t = [sh.bind(this), void 0];
        for (
          t.unshift.apply(t, s),
            t.push.apply(t, l),
            c = t.length,
            u = Promise.resolve(e);
          h < c;

        )
          u = u.then(t[h++], t[h++]);
        return u;
      }
      c = s.length;
      let d = e;
      for (h = 0; h < c; ) {
        const t = s[h++],
          e = s[h++];
        try {
          d = t(d);
        } catch (f) {
          e.call(this, f);
          break;
        }
      }
      try {
        u = sh.call(this, d);
      } catch (f) {
        return Promise.reject(f);
      }
      for (h = 0, c = l.length; h < c; ) u = u.then(l[h++], l[h++]);
      return u;
    }
    getUri(t) {
      return Xu(
        Mc((t = Tc(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer,
      );
    }
  }
  (Ru.forEach(['delete', 'get', 'head', 'options'], function (t) {
    dh.prototype[t] = function (e, n) {
      return this.request(
        Tc(n || {}, { method: t, url: e, data: (n || {}).data }),
      );
    };
  }),
    Ru.forEach(['post', 'put', 'patch'], function (t) {
      function e(e) {
        return function (n, i, r) {
          return this.request(
            Tc(r || {}, {
              method: t,
              headers: e ? { 'Content-Type': 'multipart/form-data' } : {},
              url: n,
              data: i,
            }),
          );
        };
      }
      ((dh.prototype[t] = e()), (dh.prototype[t + 'Form'] = e(!0)));
    }));
  const fh = dh;
  class ph {
    constructor(t) {
      if ('function' !== typeof t)
        throw new TypeError('executor must be a function.');
      let e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      const n = this;
      (this.promise.then((t) => {
        if (!n._listeners) return;
        let e = n._listeners.length;
        for (; e-- > 0; ) n._listeners[e](t);
        n._listeners = null;
      }),
        (this.promise.then = (t) => {
          let e;
          const i = new Promise((t) => {
            (n.subscribe(t), (e = t));
          }).then(t);
          return (
            (i.cancel = function () {
              n.unsubscribe(e);
            }),
            i
          );
        }),
        t(function (t, i, r) {
          n.reason || ((n.reason = new yc(t, i, r)), e(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      this.reason
        ? t(this.reason)
        : this._listeners
          ? this._listeners.push(t)
          : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const e = this._listeners.indexOf(t);
      -1 !== e && this._listeners.splice(e, 1);
    }
    toAbortSignal() {
      const t = new AbortController(),
        e = (e) => {
          t.abort(e);
        };
      return (
        this.subscribe(e),
        (t.signal.unsubscribe = () => this.unsubscribe(e)),
        t.signal
      );
    }
    static source() {
      let t;
      return {
        token: new ph(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
  }
  const mh = ph;
  const gh = {
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
  Object.entries(gh).forEach((t) => {
    let [e, n] = t;
    gh[n] = e;
  });
  const vh = gh;
  const yh = (function t(e) {
    const n = new fh(e),
      i = Xl(fh.prototype.request, n);
    return (
      Ru.extend(i, fh.prototype, n, { allOwnKeys: !0 }),
      Ru.extend(i, n, null, { allOwnKeys: !0 }),
      (i.create = function (n) {
        return t(Tc(e, n));
      }),
      i
    );
  })(ac);
  ((yh.Axios = fh),
    (yh.CanceledError = yc),
    (yh.CancelToken = mh),
    (yh.isCancel = gc),
    (yh.VERSION = ah),
    (yh.toFormData = Wu),
    (yh.AxiosError = Iu),
    (yh.Cancel = yh.CanceledError),
    (yh.all = function (t) {
      return Promise.all(t);
    }),
    (yh.spread = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    }),
    (yh.isAxiosError = function (t) {
      return Ru.isObject(t) && !0 === t.isAxiosError;
    }),
    (yh.mergeConfig = Tc),
    (yh.AxiosHeaders = pc),
    (yh.formToJSON = (t) => oc(Ru.isHTMLForm(t) ? new FormData(t) : t)),
    (yh.getAdapter = rh),
    (yh.HttpStatusCode = vh),
    (yh.default = yh));
  const bh = yh;
  function xh(t) {
    return (t + 0.5) | 0;
  }
  const wh = (t, e, n) => Math.max(Math.min(t, n), e);
  function _h(t) {
    return wh(xh(2.55 * t), 0, 255);
  }
  function Sh(t) {
    return wh(xh(255 * t), 0, 255);
  }
  function kh(t) {
    return wh(xh(t / 2.55) / 100, 0, 1);
  }
  function Eh(t) {
    return wh(xh(100 * t), 0, 100);
  }
  const Ph = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    Mh = [...'0123456789ABCDEF'],
    Ch = (t) => Mh[15 & t],
    Th = (t) => Mh[(240 & t) >> 4] + Mh[15 & t],
    Dh = (t) => (240 & t) >> 4 === (15 & t);
  function Ah(t) {
    var e = ((t) => Dh(t.r) && Dh(t.g) && Dh(t.b) && Dh(t.a))(t) ? Ch : Th;
    return t
      ? '#' +
          e(t.r) +
          e(t.g) +
          e(t.b) +
          ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
      : void 0;
  }
  const Oh =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Fh(t, e, n) {
    const i = e * Math.min(n, 1 - n),
      r = function (e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e + t / 30) % 12;
        return n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
      };
    return [r(0), r(8), r(4)];
  }
  function Rh(t, e, n) {
    const i = function (i) {
      let r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (i + t / 60) % 6;
      return n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
    };
    return [i(5), i(3), i(1)];
  }
  function Lh(t, e, n) {
    const i = Fh(t, 1, 0.5);
    let r;
    for (
      e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0;
      r < 3;
      r++
    )
      ((i[r] *= 1 - e - n), (i[r] += e));
    return i;
  }
  function Nh(t) {
    const e = t.r / 255,
      n = t.g / 255,
      i = t.b / 255,
      r = Math.max(e, n, i),
      o = Math.min(e, n, i),
      s = (r + o) / 2;
    let a, l, u;
    return (
      r !== o &&
        ((u = r - o),
        (l = s > 0.5 ? u / (2 - r - o) : u / (r + o)),
        (a = (function (t, e, n, i, r) {
          return t === r
            ? (e - n) / i + (e < n ? 6 : 0)
            : e === r
              ? (n - t) / i + 2
              : (t - e) / i + 4;
        })(e, n, i, u, r)),
        (a = 60 * a + 0.5)),
      [0 | a, l || 0, s]
    );
  }
  function jh(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Sh);
  }
  function Ih(t, e, n) {
    return jh(Fh, t, e, n);
  }
  function zh(t) {
    return ((t % 360) + 360) % 360;
  }
  function Vh(t) {
    const e = Oh.exec(t);
    let n,
      i = 255;
    if (!e) return;
    e[5] !== n && (i = e[6] ? _h(+e[5]) : Sh(+e[5]));
    const r = zh(+e[2]),
      o = +e[3] / 100,
      s = +e[4] / 100;
    return (
      (n =
        'hwb' === e[1]
          ? (function (t, e, n) {
              return jh(Lh, t, e, n);
            })(r, o, s)
          : 'hsv' === e[1]
            ? (function (t, e, n) {
                return jh(Rh, t, e, n);
              })(r, o, s)
            : Ih(r, o, s)),
      { r: n[0], g: n[1], b: n[2], a: i }
    );
  }
  const Bh = {
      x: 'dark',
      Z: 'light',
      Y: 're',
      X: 'blu',
      W: 'gr',
      V: 'medium',
      U: 'slate',
      A: 'ee',
      T: 'ol',
      S: 'or',
      B: 'ra',
      C: 'lateg',
      D: 'ights',
      R: 'in',
      Q: 'turquois',
      E: 'hi',
      P: 'ro',
      O: 'al',
      N: 'le',
      M: 'de',
      L: 'yello',
      F: 'en',
      K: 'ch',
      G: 'arks',
      H: 'ea',
      I: 'ightg',
      J: 'wh',
    },
    Uh = {
      OiceXe: 'f0f8ff',
      antiquewEte: 'faebd7',
      aqua: 'ffff',
      aquamarRe: '7fffd4',
      azuY: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '0',
      blanKedOmond: 'ffebcd',
      Xe: 'ff',
      XeviTet: '8a2be2',
      bPwn: 'a52a2a',
      burlywood: 'deb887',
      caMtXe: '5f9ea0',
      KartYuse: '7fff00',
      KocTate: 'd2691e',
      cSO: 'ff7f50',
      cSnflowerXe: '6495ed',
      cSnsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: 'ffff',
      xXe: '8b',
      xcyan: '8b8b',
      xgTMnPd: 'b8860b',
      xWay: 'a9a9a9',
      xgYF: '6400',
      xgYy: 'a9a9a9',
      xkhaki: 'bdb76b',
      xmagFta: '8b008b',
      xTivegYF: '556b2f',
      xSange: 'ff8c00',
      xScEd: '9932cc',
      xYd: '8b0000',
      xsOmon: 'e9967a',
      xsHgYF: '8fbc8f',
      xUXe: '483d8b',
      xUWay: '2f4f4f',
      xUgYy: '2f4f4f',
      xQe: 'ced1',
      xviTet: '9400d3',
      dAppRk: 'ff1493',
      dApskyXe: 'bfff',
      dimWay: '696969',
      dimgYy: '696969',
      dodgerXe: '1e90ff',
      fiYbrick: 'b22222',
      flSOwEte: 'fffaf0',
      foYstWAn: '228b22',
      fuKsia: 'ff00ff',
      gaRsbSo: 'dcdcdc',
      ghostwEte: 'f8f8ff',
      gTd: 'ffd700',
      gTMnPd: 'daa520',
      Way: '808080',
      gYF: '8000',
      gYFLw: 'adff2f',
      gYy: '808080',
      honeyMw: 'f0fff0',
      hotpRk: 'ff69b4',
      RdianYd: 'cd5c5c',
      Rdigo: '4b0082',
      ivSy: 'fffff0',
      khaki: 'f0e68c',
      lavFMr: 'e6e6fa',
      lavFMrXsh: 'fff0f5',
      lawngYF: '7cfc00',
      NmoncEffon: 'fffacd',
      ZXe: 'add8e6',
      ZcSO: 'f08080',
      Zcyan: 'e0ffff',
      ZgTMnPdLw: 'fafad2',
      ZWay: 'd3d3d3',
      ZgYF: '90ee90',
      ZgYy: 'd3d3d3',
      ZpRk: 'ffb6c1',
      ZsOmon: 'ffa07a',
      ZsHgYF: '20b2aa',
      ZskyXe: '87cefa',
      ZUWay: '778899',
      ZUgYy: '778899',
      ZstAlXe: 'b0c4de',
      ZLw: 'ffffe0',
      lime: 'ff00',
      limegYF: '32cd32',
      lRF: 'faf0e6',
      magFta: 'ff00ff',
      maPon: '800000',
      VaquamarRe: '66cdaa',
      VXe: 'cd',
      VScEd: 'ba55d3',
      VpurpN: '9370db',
      VsHgYF: '3cb371',
      VUXe: '7b68ee',
      VsprRggYF: 'fa9a',
      VQe: '48d1cc',
      VviTetYd: 'c71585',
      midnightXe: '191970',
      mRtcYam: 'f5fffa',
      mistyPse: 'ffe4e1',
      moccasR: 'ffe4b5',
      navajowEte: 'ffdead',
      navy: '80',
      Tdlace: 'fdf5e6',
      Tive: '808000',
      TivedBb: '6b8e23',
      Sange: 'ffa500',
      SangeYd: 'ff4500',
      ScEd: 'da70d6',
      pOegTMnPd: 'eee8aa',
      pOegYF: '98fb98',
      pOeQe: 'afeeee',
      pOeviTetYd: 'db7093',
      papayawEp: 'ffefd5',
      pHKpuff: 'ffdab9',
      peru: 'cd853f',
      pRk: 'ffc0cb',
      plum: 'dda0dd',
      powMrXe: 'b0e0e6',
      purpN: '800080',
      YbeccapurpN: '663399',
      Yd: 'ff0000',
      Psybrown: 'bc8f8f',
      PyOXe: '4169e1',
      saddNbPwn: '8b4513',
      sOmon: 'fa8072',
      sandybPwn: 'f4a460',
      sHgYF: '2e8b57',
      sHshell: 'fff5ee',
      siFna: 'a0522d',
      silver: 'c0c0c0',
      skyXe: '87ceeb',
      UXe: '6a5acd',
      UWay: '708090',
      UgYy: '708090',
      snow: 'fffafa',
      sprRggYF: 'ff7f',
      stAlXe: '4682b4',
      tan: 'd2b48c',
      teO: '8080',
      tEstN: 'd8bfd8',
      tomato: 'ff6347',
      Qe: '40e0d0',
      viTet: 'ee82ee',
      JHt: 'f5deb3',
      wEte: 'ffffff',
      wEtesmoke: 'f5f5f5',
      Lw: 'ffff00',
      LwgYF: '9acd32',
    };
  let Wh;
  function Hh(t) {
    Wh ||
      ((Wh = (function () {
        const t = {},
          e = Object.keys(Uh),
          n = Object.keys(Bh);
        let i, r, o, s, a;
        for (i = 0; i < e.length; i++) {
          for (s = a = e[i], r = 0; r < n.length; r++)
            ((o = n[r]), (a = a.replace(o, Bh[o])));
          ((o = parseInt(Uh[s], 16)),
            (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]));
        }
        return t;
      })()),
      (Wh.transparent = [0, 0, 0, 0]));
    const e = Wh[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
  }
  const $h =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const Yh = (t) =>
      t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
    qh = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function Kh(t, e, n) {
    if (t) {
      let i = Nh(t);
      ((i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
        (i = Ih(i)),
        (t.r = i[0]),
        (t.g = i[1]),
        (t.b = i[2]));
    }
  }
  function Xh(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Qh(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
          t.length > 3 && (e.a = Sh(t[3])))
        : ((e = Xh(t, { r: 0, g: 0, b: 0, a: 1 })).a = Sh(e.a)),
      e
    );
  }
  function Gh(t) {
    return 'r' === t.charAt(0)
      ? (function (t) {
          const e = $h.exec(t);
          let n,
            i,
            r,
            o = 255;
          if (e) {
            if (e[7] !== n) {
              const t = +e[7];
              o = e[8] ? _h(t) : wh(255 * t, 0, 255);
            }
            return (
              (n = +e[1]),
              (i = +e[3]),
              (r = +e[5]),
              (n = 255 & (e[2] ? _h(n) : wh(n, 0, 255))),
              (i = 255 & (e[4] ? _h(i) : wh(i, 0, 255))),
              (r = 255 & (e[6] ? _h(r) : wh(r, 0, 255))),
              { r: n, g: i, b: r, a: o }
            );
          }
        })(t)
      : Vh(t);
  }
  class Jh {
    constructor(t) {
      if (t instanceof Jh) return t;
      const e = typeof t;
      let n;
      ('object' === e
        ? (n = Qh(t))
        : 'string' === e &&
          (n =
            (function (t) {
              var e,
                n = t.length;
              return (
                '#' === t[0] &&
                  (4 === n || 5 === n
                    ? (e = {
                        r: 255 & (17 * Ph[t[1]]),
                        g: 255 & (17 * Ph[t[2]]),
                        b: 255 & (17 * Ph[t[3]]),
                        a: 5 === n ? 17 * Ph[t[4]] : 255,
                      })
                    : (7 !== n && 9 !== n) ||
                      (e = {
                        r: (Ph[t[1]] << 4) | Ph[t[2]],
                        g: (Ph[t[3]] << 4) | Ph[t[4]],
                        b: (Ph[t[5]] << 4) | Ph[t[6]],
                        a: 9 === n ? (Ph[t[7]] << 4) | Ph[t[8]] : 255,
                      })),
                e
              );
            })(t) ||
            Hh(t) ||
            Gh(t)),
        (this._rgb = n),
        (this._valid = !!n));
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = Xh(this._rgb);
      return (t && (t.a = kh(t.a)), t);
    }
    set rgb(t) {
      this._rgb = Qh(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
            (t.a < 255
              ? 'rgba('
                  .concat(t.r, ', ')
                  .concat(t.g, ', ')
                  .concat(t.b, ', ')
                  .concat(kh(t.a), ')')
              : 'rgb('.concat(t.r, ', ').concat(t.g, ', ').concat(t.b, ')'))
        : void 0;
      var t;
    }
    hexString() {
      return this._valid ? Ah(this._rgb) : void 0;
    }
    hslString() {
      return this._valid
        ? (function (t) {
            if (!t) return;
            const e = Nh(t),
              n = e[0],
              i = Eh(e[1]),
              r = Eh(e[2]);
            return t.a < 255
              ? 'hsla('
                  .concat(n, ', ')
                  .concat(i, '%, ')
                  .concat(r, '%, ')
                  .concat(kh(t.a), ')')
              : 'hsl('.concat(n, ', ').concat(i, '%, ').concat(r, '%)');
          })(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const n = this.rgb,
          i = t.rgb;
        let r;
        const o = e === r ? 0.5 : e,
          s = 2 * o - 1,
          a = n.a - i.a,
          l = ((s * a === -1 ? s : (s + a) / (1 + s * a)) + 1) / 2;
        ((r = 1 - l),
          (n.r = 255 & (l * n.r + r * i.r + 0.5)),
          (n.g = 255 & (l * n.g + r * i.g + 0.5)),
          (n.b = 255 & (l * n.b + r * i.b + 0.5)),
          (n.a = o * n.a + (1 - o) * i.a),
          (this.rgb = n));
      }
      return this;
    }
    interpolate(t, e) {
      return (
        t &&
          (this._rgb = (function (t, e, n) {
            const i = qh(kh(t.r)),
              r = qh(kh(t.g)),
              o = qh(kh(t.b));
            return {
              r: Sh(Yh(i + n * (qh(kh(e.r)) - i))),
              g: Sh(Yh(r + n * (qh(kh(e.g)) - r))),
              b: Sh(Yh(o + n * (qh(kh(e.b)) - o))),
              a: t.a + n * (e.a - t.a),
            };
          })(this._rgb, t._rgb, e)),
        this
      );
    }
    clone() {
      return new Jh(this.rgb);
    }
    alpha(t) {
      return ((this._rgb.a = Sh(t)), this);
    }
    clearer(t) {
      return ((this._rgb.a *= 1 - t), this);
    }
    greyscale() {
      const t = this._rgb,
        e = xh(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
      return ((t.r = t.g = t.b = e), this);
    }
    opaquer(t) {
      return ((this._rgb.a *= 1 + t), this);
    }
    negate() {
      const t = this._rgb;
      return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this);
    }
    lighten(t) {
      return (Kh(this._rgb, 2, t), this);
    }
    darken(t) {
      return (Kh(this._rgb, 2, -t), this);
    }
    saturate(t) {
      return (Kh(this._rgb, 1, t), this);
    }
    desaturate(t) {
      return (Kh(this._rgb, 1, -t), this);
    }
    rotate(t) {
      return (
        (function (t, e) {
          var n = Nh(t);
          ((n[0] = zh(n[0] + e)),
            (n = Ih(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2]));
        })(this._rgb, t),
        this
      );
    }
  }
  function Zh() {}
  const td = (() => {
    let t = 0;
    return () => t++;
  })();
  function ed(t) {
    return null === t || void 0 === t;
  }
  function nd(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
  }
  function id(t) {
    return (
      null !== t && '[object Object]' === Object.prototype.toString.call(t)
    );
  }
  function rd(t) {
    return ('number' === typeof t || t instanceof Number) && isFinite(+t);
  }
  function od(t, e) {
    return rd(t) ? t : e;
  }
  function sd(t, e) {
    return 'undefined' === typeof t ? e : t;
  }
  const ad = (t, e) =>
    'string' === typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
  function ld(t, e, n) {
    if (t && 'function' === typeof t.call) return t.apply(n, e);
  }
  function ud(t, e, n, i) {
    let r, o, s;
    if (nd(t))
      if (((o = t.length), i)) for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
      else for (r = 0; r < o; r++) e.call(n, t[r], r);
    else if (id(t))
      for (s = Object.keys(t), o = s.length, r = 0; r < o; r++)
        e.call(n, t[s[r]], s[r]);
  }
  function cd(t, e) {
    let n, i, r, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n)
      if (
        ((r = t[n]),
        (o = e[n]),
        r.datasetIndex !== o.datasetIndex || r.index !== o.index)
      )
        return !1;
    return !0;
  }
  function hd(t) {
    if (nd(t)) return t.map(hd);
    if (id(t)) {
      const e = Object.create(null),
        n = Object.keys(t),
        i = n.length;
      let r = 0;
      for (; r < i; ++r) e[n[r]] = hd(t[n[r]]);
      return e;
    }
    return t;
  }
  function dd(t) {
    return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
  }
  function fd(t, e, n, i) {
    if (!dd(t)) return;
    const r = e[t],
      o = n[t];
    id(r) && id(o) ? pd(r, o, i) : (e[t] = hd(o));
  }
  function pd(t, e, n) {
    const i = nd(e) ? e : [e],
      r = i.length;
    if (!id(t)) return t;
    const o = (n = n || {}).merger || fd;
    let s;
    for (let a = 0; a < r; ++a) {
      if (((s = i[a]), !id(s))) continue;
      const e = Object.keys(s);
      for (let i = 0, r = e.length; i < r; ++i) o(e[i], t, s, n);
    }
    return t;
  }
  function md(t, e) {
    return pd(t, e, { merger: gd });
  }
  function gd(t, e, n) {
    if (!dd(t)) return;
    const i = e[t],
      r = n[t];
    id(i) && id(r)
      ? md(i, r)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = hd(r));
  }
  const vd = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
  function yd(t, e) {
    const n =
      vd[e] ||
      (vd[e] = (function (t) {
        const e = (function (t) {
          const e = t.split('.'),
            n = [];
          let i = '';
          for (const r of e)
            ((i += r),
              i.endsWith('\\')
                ? (i = i.slice(0, -1) + '.')
                : (n.push(i), (i = '')));
          return n;
        })(t);
        return (t) => {
          for (const n of e) {
            if ('' === n) break;
            t = t && t[n];
          }
          return t;
        };
      })(e));
    return n(t);
  }
  function bd(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const xd = (t) => 'undefined' !== typeof t,
    wd = (t) => 'function' === typeof t,
    _d = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const n of t) if (!e.has(n)) return !1;
      return !0;
    };
  const Sd = Math.PI,
    kd = 2 * Sd,
    Ed = kd + Sd,
    Pd = Number.POSITIVE_INFINITY,
    Md = Sd / 180,
    Cd = Sd / 2,
    Td = Sd / 4,
    Dd = (2 * Sd) / 3,
    Ad = Math.log10,
    Od = Math.sign;
  function Fd(t, e, n) {
    return Math.abs(t - e) < n;
  }
  function Rd(t) {
    const e = Math.round(t);
    t = Fd(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Ad(t))),
      i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
  }
  function Ld(t) {
    return (
      !(function (t) {
        return (
          'symbol' === typeof t ||
          ('object' === typeof t &&
            null !== t &&
            !(Symbol.toPrimitive in t || 'toString' in t || 'valueOf' in t))
        );
      })(t) &&
      !isNaN(parseFloat(t)) &&
      isFinite(t)
    );
  }
  function Nd(t, e, n) {
    let i, r, o;
    for (i = 0, r = t.length; i < r; i++)
      ((o = t[i][n]),
        isNaN(o) ||
          ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o))));
  }
  function jd(t) {
    return t * (Sd / 180);
  }
  function Id(t) {
    return t * (180 / Sd);
  }
  function zd(t) {
    if (!rd(t)) return;
    let e = 1,
      n = 0;
    for (; Math.round(t * e) / e !== t; ) ((e *= 10), n++);
    return n;
  }
  function Vd(t, e) {
    const n = e.x - t.x,
      i = e.y - t.y,
      r = Math.sqrt(n * n + i * i);
    let o = Math.atan2(i, n);
    return (o < -0.5 * Sd && (o += kd), { angle: o, distance: r });
  }
  function Bd(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Ud(t, e) {
    return ((t - e + Ed) % kd) - Sd;
  }
  function Wd(t) {
    return ((t % kd) + kd) % kd;
  }
  function Hd(t, e, n, i) {
    const r = Wd(t),
      o = Wd(e),
      s = Wd(n),
      a = Wd(o - r),
      l = Wd(s - r),
      u = Wd(r - o),
      c = Wd(r - s);
    return r === o || r === s || (i && o === s) || (a > l && u < c);
  }
  function $d(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function Yd(t, e, n) {
    let i =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
  }
  function qd(t, e, n) {
    n = n || ((n) => t[n] < e);
    let i,
      r = t.length - 1,
      o = 0;
    for (; r - o > 1; ) ((i = (o + r) >> 1), n(i) ? (o = i) : (r = i));
    return { lo: o, hi: r };
  }
  const Kd = (t, e, n, i) =>
      qd(
        t,
        n,
        i
          ? (i) => {
              const r = t[i][e];
              return r < n || (r === n && t[i + 1][e] === n);
            }
          : (i) => t[i][e] < n,
      ),
    Xd = (t, e, n) => qd(t, n, (i) => t[i][e] >= n);
  const Qd = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function Gd(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners,
      r = i.indexOf(e);
    (-1 !== r && i.splice(r, 1),
      i.length > 0 ||
        (Qd.forEach((e) => {
          delete t[e];
        }),
        delete t._chartjs));
  }
  function Jd(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const Zd =
    'undefined' === typeof window
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  function tf(t, e) {
    let n = [],
      i = !1;
    return function () {
      for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
        o[s] = arguments[s];
      ((n = o),
        i ||
          ((i = !0),
          Zd.call(window, () => {
            ((i = !1), t.apply(e, n));
          })));
    };
  }
  const ef = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
    nf = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2);
  function rf(t, e, n) {
    const i = e.length;
    let r = 0,
      o = i;
    if (t._sorted) {
      const { iScale: s, vScale: a, _parsed: l } = t,
        u = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null,
        c = s.axis,
        { min: h, max: d, minDefined: f, maxDefined: p } = s.getUserBounds();
      if (f) {
        if (
          ((r = Math.min(
            Kd(l, c, h).lo,
            n ? i : Kd(e, c, s.getPixelForValue(h)).lo,
          )),
          u)
        ) {
          const t = l
            .slice(0, r + 1)
            .reverse()
            .findIndex((t) => !ed(t[a.axis]));
          r -= Math.max(0, t);
        }
        r = $d(r, 0, i - 1);
      }
      if (p) {
        let t = Math.max(
          Kd(l, s.axis, d, !0).hi + 1,
          n ? 0 : Kd(e, c, s.getPixelForValue(d), !0).hi + 1,
        );
        if (u) {
          const e = l.slice(t - 1).findIndex((t) => !ed(t[a.axis]));
          t += Math.max(0, e);
        }
        o = $d(t, r, i) - r;
      } else o = i - r;
    }
    return { start: r, count: o };
  }
  function of(t) {
    const { xScale: e, yScale: n, _scaleRanges: i } = t,
      r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!i) return ((t._scaleRanges = r), !0);
    const o =
      i.xmin !== e.min ||
      i.xmax !== e.max ||
      i.ymin !== n.min ||
      i.ymax !== n.max;
    return (Object.assign(i, r), o);
  }
  const sf = (t) => 0 === t || 1 === t,
    af = (t, e, n) =>
      -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * kd) / n),
    lf = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * kd) / n) + 1,
    uf = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: (t) => 1 - Math.cos(t * Cd),
      easeOutSine: (t) => Math.sin(t * Cd),
      easeInOutSine: (t) => -0.5 * (Math.cos(Sd * t) - 1),
      easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
      easeInOutExpo: (t) =>
        sf(t)
          ? t
          : t < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (sf(t) ? t : af(t, 0.075, 0.3)),
      easeOutElastic: (t) => (sf(t) ? t : lf(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        const e = 0.1125;
        return sf(t)
          ? t
          : t < 0.5
            ? 0.5 * af(2 * t, e, 0.45)
            : 0.5 + 0.5 * lf(2 * t - 1, e, 0.45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - uf.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625,
          n = 2.75;
        return t < 1 / n
          ? e * t * t
          : t < 2 / n
            ? e * (t -= 1.5 / n) * t + 0.75
            : t < 2.5 / n
              ? e * (t -= 2.25 / n) * t + 0.9375
              : e * (t -= 2.625 / n) * t + 0.984375;
      },
      easeInOutBounce: (t) =>
        t < 0.5
          ? 0.5 * uf.easeInBounce(2 * t)
          : 0.5 * uf.easeOutBounce(2 * t - 1) + 0.5,
    };
  function cf(t) {
    if (t && 'object' === typeof t) {
      const e = t.toString();
      return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
    }
    return !1;
  }
  function hf(t) {
    return cf(t) ? t : new Jh(t);
  }
  function df(t) {
    return cf(t) ? t : new Jh(t).saturate(0.5).darken(0.1).hexString();
  }
  const ff = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    pf = ['color', 'borderColor', 'backgroundColor'];
  const mf = new Map();
  function gf(t, e, n) {
    return (function (t, e) {
      e = e || {};
      const n = t + JSON.stringify(e);
      let i = mf.get(n);
      return (i || ((i = new Intl.NumberFormat(t, e)), mf.set(n, i)), i);
    })(e, n).format(t);
  }
  const vf = {
    values: (t) => (nd(t) ? t : '' + t),
    numeric(t, e, n) {
      if (0 === t) return '0';
      const i = this.chart.options.locale;
      let r,
        o = t;
      if (n.length > 1) {
        const e = Math.max(
          Math.abs(n[0].value),
          Math.abs(n[n.length - 1].value),
        );
        ((e < 1e-4 || e > 1e15) && (r = 'scientific'),
          (o = (function (t, e) {
            let n =
              e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
            Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
            return n;
          })(t, n)));
      }
      const s = Ad(Math.abs(o)),
        a = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
        l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a };
      return (Object.assign(l, this.options.ticks.format), gf(t, i, l));
    },
    logarithmic(t, e, n) {
      if (0 === t) return '0';
      const i = n[e].significand || t / Math.pow(10, Math.floor(Ad(t)));
      return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
        ? vf.numeric.call(this, t, e, n)
        : '';
    },
  };
  var yf = { formatters: vf };
  const bf = Object.create(null),
    xf = Object.create(null);
  function wf(t, e) {
    if (!e) return t;
    const n = e.split('.');
    for (let i = 0, r = n.length; i < r; ++i) {
      const e = n[i];
      t = t[e] || (t[e] = Object.create(null));
    }
    return t;
  }
  function _f(t, e, n) {
    return 'string' === typeof e ? pd(wf(t, e), n) : pd(wf(t, ''), e);
  }
  class Sf {
    constructor(t, e) {
      ((this.animation = void 0),
        (this.backgroundColor = 'rgba(0,0,0,0.1)'),
        (this.borderColor = 'rgba(0,0,0,0.1)'),
        (this.color = '#666'),
        (this.datasets = {}),
        (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = [
          'mousemove',
          'mouseout',
          'click',
          'touchstart',
          'touchmove',
        ]),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: 'normal',
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (t, e) => df(e.backgroundColor)),
        (this.hoverBorderColor = (t, e) => df(e.borderColor)),
        (this.hoverColor = (t, e) => df(e.color)),
        (this.indexAxis = 'x'),
        (this.interaction = {
          mode: 'nearest',
          intersect: !0,
          includeInvisible: !1,
        }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(t),
        this.apply(e));
    }
    set(t, e) {
      return _f(this, t, e);
    }
    get(t) {
      return wf(this, t);
    }
    describe(t, e) {
      return _f(xf, t, e);
    }
    override(t, e) {
      return _f(bf, t, e);
    }
    route(t, e, n, i) {
      const r = wf(this, t),
        o = wf(this, n),
        s = '_' + e;
      Object.defineProperties(r, {
        [s]: { value: r[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[s],
              e = o[i];
            return id(t) ? Object.assign({}, e, t) : sd(t, e);
          },
          set(t) {
            this[s] = t;
          },
        },
      });
    }
    apply(t) {
      t.forEach((t) => t(this));
    }
  }
  var kf = new Sf(
    {
      _scriptable: (t) => !t.startsWith('on'),
      _indexable: (t) => 'events' !== t,
      hover: { _fallback: 'interaction' },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [
      function (t) {
        (t.set('animation', {
          delay: void 0,
          duration: 1e3,
          easing: 'easeOutQuart',
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0,
        }),
          t.describe('animation', {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (t) =>
              'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
          }),
          t.set('animations', {
            colors: { type: 'color', properties: pf },
            numbers: { type: 'number', properties: ff },
          }),
          t.describe('animations', { _fallback: 'animation' }),
          t.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
              animations: {
                colors: { from: 'transparent' },
                visible: { type: 'boolean', duration: 0 },
              },
            },
            hide: {
              animations: {
                colors: { to: 'transparent' },
                visible: {
                  type: 'boolean',
                  easing: 'linear',
                  fn: (t) => 0 | t,
                },
              },
            },
          }));
      },
      function (t) {
        t.set('layout', {
          autoPadding: !0,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        });
      },
      function (t) {
        (t.set('scale', {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: 'ticks',
          clip: !0,
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1,
          },
          border: { display: !0, dash: [], dashOffset: 0, width: 1 },
          title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: yf.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
          },
        }),
          t.route('scale.ticks', 'color', '', 'color'),
          t.route('scale.grid', 'color', '', 'borderColor'),
          t.route('scale.border', 'color', '', 'borderColor'),
          t.route('scale.title', 'color', '', 'color'),
          t.describe('scale', {
            _fallback: !1,
            _scriptable: (t) =>
              !t.startsWith('before') &&
              !t.startsWith('after') &&
              'callback' !== t &&
              'parser' !== t,
            _indexable: (t) =>
              'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
          }),
          t.describe('scales', { _fallback: 'scale' }),
          t.describe('scale.ticks', {
            _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
            _indexable: (t) => 'backdropPadding' !== t,
          }));
      },
    ],
  );
  function Ef(t, e, n, i, r) {
    let o = e[r];
    return (
      o || ((o = e[r] = t.measureText(r).width), n.push(r)),
      o > i && (i = o),
      i
    );
  }
  function Pf(t, e, n, i) {
    let r = ((i = i || {}).data = i.data || {}),
      o = (i.garbageCollect = i.garbageCollect || []);
    (i.font !== e &&
      ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = e)),
      t.save(),
      (t.font = e));
    let s = 0;
    const a = n.length;
    let l, u, c, h, d;
    for (l = 0; l < a; l++)
      if (((h = n[l]), void 0 === h || null === h || nd(h))) {
        if (nd(h))
          for (u = 0, c = h.length; u < c; u++)
            ((d = h[u]),
              void 0 === d || null === d || nd(d) || (s = Ef(t, r, o, s, d)));
      } else s = Ef(t, r, o, s, h);
    t.restore();
    const f = o.length / 2;
    if (f > n.length) {
      for (l = 0; l < f; l++) delete r[o[l]];
      o.splice(0, f);
    }
    return s;
  }
  function Mf(t, e, n) {
    const i = t.currentDevicePixelRatio,
      r = 0 !== n ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - r) * i) / i + r;
  }
  function Cf(t, e) {
    (e || t) &&
      ((e = e || t.getContext('2d')).save(),
      e.resetTransform(),
      e.clearRect(0, 0, t.width, t.height),
      e.restore());
  }
  function Tf(t, e, n, i) {
    Df(t, e, n, i, null);
  }
  function Df(t, e, n, i, r) {
    let o, s, a, l, u, c, h, d;
    const f = e.pointStyle,
      p = e.rotation,
      m = e.radius;
    let g = (p || 0) * Md;
    if (
      f &&
      'object' === typeof f &&
      ((o = f.toString()),
      '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
    )
      return (
        t.save(),
        t.translate(n, i),
        t.rotate(g),
        t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
        void t.restore()
      );
    if (!(isNaN(m) || m <= 0)) {
      switch ((t.beginPath(), f)) {
        default:
          (r ? t.ellipse(n, i, r / 2, m, 0, 0, kd) : t.arc(n, i, m, 0, kd),
            t.closePath());
          break;
        case 'triangle':
          ((c = r ? r / 2 : m),
            t.moveTo(n + Math.sin(g) * c, i - Math.cos(g) * m),
            (g += Dd),
            t.lineTo(n + Math.sin(g) * c, i - Math.cos(g) * m),
            (g += Dd),
            t.lineTo(n + Math.sin(g) * c, i - Math.cos(g) * m),
            t.closePath());
          break;
        case 'rectRounded':
          ((u = 0.516 * m),
            (l = m - u),
            (s = Math.cos(g + Td) * l),
            (h = Math.cos(g + Td) * (r ? r / 2 - u : l)),
            (a = Math.sin(g + Td) * l),
            (d = Math.sin(g + Td) * (r ? r / 2 - u : l)),
            t.arc(n - h, i - a, u, g - Sd, g - Cd),
            t.arc(n + d, i - s, u, g - Cd, g),
            t.arc(n + h, i + a, u, g, g + Cd),
            t.arc(n - d, i + s, u, g + Cd, g + Sd),
            t.closePath());
          break;
        case 'rect':
          if (!p) {
            ((l = Math.SQRT1_2 * m),
              (c = r ? r / 2 : l),
              t.rect(n - c, i - l, 2 * c, 2 * l));
            break;
          }
          g += Td;
        case 'rectRot':
          ((h = Math.cos(g) * (r ? r / 2 : m)),
            (s = Math.cos(g) * m),
            (a = Math.sin(g) * m),
            (d = Math.sin(g) * (r ? r / 2 : m)),
            t.moveTo(n - h, i - a),
            t.lineTo(n + d, i - s),
            t.lineTo(n + h, i + a),
            t.lineTo(n - d, i + s),
            t.closePath());
          break;
        case 'crossRot':
          g += Td;
        case 'cross':
          ((h = Math.cos(g) * (r ? r / 2 : m)),
            (s = Math.cos(g) * m),
            (a = Math.sin(g) * m),
            (d = Math.sin(g) * (r ? r / 2 : m)),
            t.moveTo(n - h, i - a),
            t.lineTo(n + h, i + a),
            t.moveTo(n + d, i - s),
            t.lineTo(n - d, i + s));
          break;
        case 'star':
          ((h = Math.cos(g) * (r ? r / 2 : m)),
            (s = Math.cos(g) * m),
            (a = Math.sin(g) * m),
            (d = Math.sin(g) * (r ? r / 2 : m)),
            t.moveTo(n - h, i - a),
            t.lineTo(n + h, i + a),
            t.moveTo(n + d, i - s),
            t.lineTo(n - d, i + s),
            (g += Td),
            (h = Math.cos(g) * (r ? r / 2 : m)),
            (s = Math.cos(g) * m),
            (a = Math.sin(g) * m),
            (d = Math.sin(g) * (r ? r / 2 : m)),
            t.moveTo(n - h, i - a),
            t.lineTo(n + h, i + a),
            t.moveTo(n + d, i - s),
            t.lineTo(n - d, i + s));
          break;
        case 'line':
          ((s = r ? r / 2 : Math.cos(g) * m),
            (a = Math.sin(g) * m),
            t.moveTo(n - s, i - a),
            t.lineTo(n + s, i + a));
          break;
        case 'dash':
          (t.moveTo(n, i),
            t.lineTo(n + Math.cos(g) * (r ? r / 2 : m), i + Math.sin(g) * m));
          break;
        case !1:
          t.closePath();
      }
      (t.fill(), e.borderWidth > 0 && t.stroke());
    }
  }
  function Af(t, e, n) {
    return (
      (n = n || 0.5),
      !e ||
        (t &&
          t.x > e.left - n &&
          t.x < e.right + n &&
          t.y > e.top - n &&
          t.y < e.bottom + n)
    );
  }
  function Of(t, e) {
    (t.save(),
      t.beginPath(),
      t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
      t.clip());
  }
  function Ff(t) {
    t.restore();
  }
  function Rf(t, e, n, i, r) {
    if (!e) return t.lineTo(n.x, n.y);
    if ('middle' === r) {
      const i = (e.x + n.x) / 2;
      (t.lineTo(i, e.y), t.lineTo(i, n.y));
    } else ('after' === r) !== !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
  }
  function Lf(t, e, n, i) {
    if (!e) return t.lineTo(n.x, n.y);
    t.bezierCurveTo(
      i ? e.cp1x : e.cp2x,
      i ? e.cp1y : e.cp2y,
      i ? n.cp2x : n.cp1x,
      i ? n.cp2y : n.cp1y,
      n.x,
      n.y,
    );
  }
  function Nf(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
      const o = t.measureText(i),
        s = e - o.actualBoundingBoxLeft,
        a = e + o.actualBoundingBoxRight,
        l = n - o.actualBoundingBoxAscent,
        u = n + o.actualBoundingBoxDescent,
        c = r.strikethrough ? (l + u) / 2 : u;
      ((t.strokeStyle = t.fillStyle),
        t.beginPath(),
        (t.lineWidth = r.decorationWidth || 2),
        t.moveTo(s, c),
        t.lineTo(a, c),
        t.stroke());
    }
  }
  function jf(t, e) {
    const n = t.fillStyle;
    ((t.fillStyle = e.color),
      t.fillRect(e.left, e.top, e.width, e.height),
      (t.fillStyle = n));
  }
  function If(t, e, n, i, r) {
    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    const s = nd(e) ? e : [e],
      a = o.strokeWidth > 0 && '' !== o.strokeColor;
    let l, u;
    for (
      t.save(),
        t.font = r.string,
        (function (t, e) {
          (e.translation && t.translate(e.translation[0], e.translation[1]),
            ed(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline));
        })(t, o),
        l = 0;
      l < s.length;
      ++l
    )
      ((u = s[l]),
        o.backdrop && jf(t, o.backdrop),
        a &&
          (o.strokeColor && (t.strokeStyle = o.strokeColor),
          ed(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
          t.strokeText(u, n, i, o.maxWidth)),
        t.fillText(u, n, i, o.maxWidth),
        Nf(t, n, i, u, o),
        (i += Number(r.lineHeight)));
    t.restore();
  }
  function zf(t, e) {
    const { x: n, y: i, w: r, h: o, radius: s } = e;
    (t.arc(n + s.topLeft, i + s.topLeft, s.topLeft, 1.5 * Sd, Sd, !0),
      t.lineTo(n, i + o - s.bottomLeft),
      t.arc(n + s.bottomLeft, i + o - s.bottomLeft, s.bottomLeft, Sd, Cd, !0),
      t.lineTo(n + r - s.bottomRight, i + o),
      t.arc(
        n + r - s.bottomRight,
        i + o - s.bottomRight,
        s.bottomRight,
        Cd,
        0,
        !0,
      ),
      t.lineTo(n + r, i + s.topRight),
      t.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -Cd, !0),
      t.lineTo(n + s.topLeft, i));
  }
  const Vf = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Bf =
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function Uf(t, e) {
    const n = ('' + t).match(Vf);
    if (!n || 'normal' === n[1]) return 1.2 * e;
    switch (((t = +n[2]), n[3])) {
      case 'px':
        return t;
      case '%':
        t /= 100;
    }
    return e * t;
  }
  const Wf = (t) => +t || 0;
  function Hf(t, e) {
    const n = {},
      i = id(e),
      r = i ? Object.keys(e) : e,
      o = id(t) ? (i ? (n) => sd(t[n], t[e[n]]) : (e) => t[e]) : () => t;
    for (const s of r) n[s] = Wf(o(s));
    return n;
  }
  function $f(t) {
    return Hf(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function Yf(t) {
    return Hf(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function qf(t) {
    const e = $f(t);
    return ((e.width = e.left + e.right), (e.height = e.top + e.bottom), e);
  }
  function Kf(t, e) {
    ((t = t || {}), (e = e || kf.font));
    let n = sd(t.size, e.size);
    'string' === typeof n && (n = parseInt(n, 10));
    let i = sd(t.style, e.style);
    i &&
      !('' + i).match(Bf) &&
      (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const r = {
      family: sd(t.family, e.family),
      lineHeight: Uf(sd(t.lineHeight, e.lineHeight), n),
      size: n,
      style: i,
      weight: sd(t.weight, e.weight),
      string: '',
    };
    return (
      (r.string = (function (t) {
        return !t || ed(t.size) || ed(t.family)
          ? null
          : (t.style ? t.style + ' ' : '') +
              (t.weight ? t.weight + ' ' : '') +
              t.size +
              'px ' +
              t.family;
      })(r)),
      r
    );
  }
  function Xf(t, e, n, i) {
    let r,
      o,
      s,
      a = !0;
    for (r = 0, o = t.length; r < o; ++r)
      if (
        ((s = t[r]),
        void 0 !== s &&
          (void 0 !== e && 'function' === typeof s && ((s = s(e)), (a = !1)),
          void 0 !== n && nd(s) && ((s = s[n % s.length]), (a = !1)),
          void 0 !== s))
      )
        return (i && !a && (i.cacheable = !1), s);
  }
  function Qf(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Gf(t) {
    let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [''],
      n = arguments.length > 3 ? arguments[3] : void 0,
      i =
        arguments.length > 4 && void 0 !== arguments[4]
          ? arguments[4]
          : () => t[0];
    const r = (arguments.length > 2 ? arguments[2] : void 0) || t;
    'undefined' === typeof n && (n = lp('_fallback', t));
    const o = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: t,
      _rootScopes: r,
      _fallback: n,
      _getTarget: i,
      override: (i) => Gf([i, ...t], e, r, n),
    };
    return new Proxy(o, {
      deleteProperty: (e, n) => (
        delete e[n],
        delete e._keys,
        delete t[0][n],
        !0
      ),
      get: (n, i) =>
        np(n, i, () =>
          (function (t, e, n, i) {
            let r;
            for (const o of e)
              if (((r = lp(tp(o, t), n)), 'undefined' !== typeof r))
                return ep(t, r) ? sp(n, i, t, r) : r;
          })(i, e, t, n),
        ),
      getOwnPropertyDescriptor: (t, e) =>
        Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => up(t).includes(e),
      ownKeys: (t) => up(t),
      set(t, e, n) {
        const r = t._storage || (t._storage = i());
        return ((t[e] = r[e] = n), delete t._keys, !0);
      },
    });
  }
  function Jf(t, e, n, i) {
    const r = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: Zf(t, i),
      setContext: (e) => Jf(t, e, n, i),
      override: (r) => Jf(t.override(r), e, n, i),
    };
    return new Proxy(r, {
      deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
      get: (t, e, n) =>
        np(t, e, () =>
          (function (t, e, n) {
            const { _proxy: i, _context: r, _subProxy: o, _descriptors: s } = t;
            let a = i[e];
            wd(a) &&
              s.isScriptable(e) &&
              (a = (function (t, e, n, i) {
                const { _proxy: r, _context: o, _subProxy: s, _stack: a } = n;
                if (a.has(t))
                  throw new Error(
                    'Recursion detected: ' +
                      Array.from(a).join('->') +
                      '->' +
                      t,
                  );
                a.add(t);
                let l = e(o, s || i);
                (a.delete(t), ep(t, l) && (l = sp(r._scopes, r, t, l)));
                return l;
              })(e, a, t, n));
            nd(a) &&
              a.length &&
              (a = (function (t, e, n, i) {
                const {
                  _proxy: r,
                  _context: o,
                  _subProxy: s,
                  _descriptors: a,
                } = n;
                if ('undefined' !== typeof o.index && i(t))
                  return e[o.index % e.length];
                if (id(e[0])) {
                  const n = e,
                    i = r._scopes.filter((t) => t !== n);
                  e = [];
                  for (const l of n) {
                    const n = sp(i, r, t, l);
                    e.push(Jf(n, o, s && s[t], a));
                  }
                }
                return e;
              })(e, a, t, s.isIndexable));
            ep(e, a) && (a = Jf(a, r, o && o[e], s));
            return a;
          })(t, e, n),
        ),
      getOwnPropertyDescriptor: (e, n) =>
        e._descriptors.allKeys
          ? Reflect.has(t, n)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, n),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, n) => Reflect.has(t, n),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, n, i) => ((t[n] = i), delete e[n], !0),
    });
  }
  function Zf(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { scriptable: !0, indexable: !0 };
    const {
      _scriptable: n = e.scriptable,
      _indexable: i = e.indexable,
      _allKeys: r = e.allKeys,
    } = t;
    return {
      allKeys: r,
      scriptable: n,
      indexable: i,
      isScriptable: wd(n) ? n : () => n,
      isIndexable: wd(i) ? i : () => i,
    };
  }
  const tp = (t, e) => (t ? t + bd(e) : e),
    ep = (t, e) =>
      id(e) &&
      'adapters' !== t &&
      (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function np(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || 'constructor' === e)
      return t[e];
    const i = n();
    return ((t[e] = i), i);
  }
  function ip(t, e, n) {
    return wd(t) ? t(e, n) : t;
  }
  const rp = (t, e) =>
    !0 === t ? e : 'string' === typeof t ? yd(e, t) : void 0;
  function op(t, e, n, i, r) {
    for (const o of e) {
      const e = rp(n, o);
      if (e) {
        t.add(e);
        const o = ip(e._fallback, n, r);
        if ('undefined' !== typeof o && o !== n && o !== i) return o;
      } else if (!1 === e && 'undefined' !== typeof i && n !== i) return null;
    }
    return !1;
  }
  function sp(t, e, n, i) {
    const r = e._rootScopes,
      o = ip(e._fallback, n, i),
      s = [...t, ...r],
      a = new Set();
    a.add(i);
    let l = ap(a, s, n, o || n, i);
    return (
      null !== l &&
      ('undefined' === typeof o ||
        o === n ||
        ((l = ap(a, s, o, l, i)), null !== l)) &&
      Gf(Array.from(a), [''], r, o, () =>
        (function (t, e, n) {
          const i = t._getTarget();
          e in i || (i[e] = {});
          const r = i[e];
          if (nd(r) && id(n)) return n;
          return r || {};
        })(e, n, i),
      )
    );
  }
  function ap(t, e, n, i, r) {
    for (; n; ) n = op(t, e, n, i, r);
    return n;
  }
  function lp(t, e) {
    for (const n of e) {
      if (!n) continue;
      const e = n[t];
      if ('undefined' !== typeof e) return e;
    }
  }
  function up(t) {
    let e = t._keys;
    return (
      e ||
        (e = t._keys =
          (function (t) {
            const e = new Set();
            for (const n of t)
              for (const t of Object.keys(n).filter((t) => !t.startsWith('_')))
                e.add(t);
            return Array.from(e);
          })(t._scopes)),
      e
    );
  }
  function cp(t, e, n, i) {
    const { iScale: r } = t,
      { key: o = 'r' } = this._parsing,
      s = new Array(i);
    let a, l, u, c;
    for (a = 0, l = i; a < l; ++a)
      ((u = a + n), (c = e[u]), (s[a] = { r: r.parse(yd(c, o), u) }));
    return s;
  }
  const hp = Number.EPSILON || 1e-14,
    dp = (t, e) => e < t.length && !t[e].skip && t[e],
    fp = (t) => ('x' === t ? 'y' : 'x');
  function pp(t, e, n, i) {
    const r = t.skip ? e : t,
      o = e,
      s = n.skip ? e : n,
      a = Bd(o, r),
      l = Bd(s, o);
    let u = a / (a + l),
      c = l / (a + l);
    ((u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c));
    const h = i * u,
      d = i * c;
    return {
      previous: { x: o.x - h * (s.x - r.x), y: o.y - h * (s.y - r.y) },
      next: { x: o.x + d * (s.x - r.x), y: o.y + d * (s.y - r.y) },
    };
  }
  function mp(t) {
    let e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x';
    const n = fp(e),
      i = t.length,
      r = Array(i).fill(0),
      o = Array(i);
    let s,
      a,
      l,
      u = dp(t, 0);
    for (s = 0; s < i; ++s)
      if (((a = l), (l = u), (u = dp(t, s + 1)), l)) {
        if (u) {
          const t = u[e] - l[e];
          r[s] = 0 !== t ? (u[n] - l[n]) / t : 0;
        }
        o[s] = a
          ? u
            ? Od(r[s - 1]) !== Od(r[s])
              ? 0
              : (r[s - 1] + r[s]) / 2
            : r[s - 1]
          : r[s];
      }
    (!(function (t, e, n) {
      const i = t.length;
      let r,
        o,
        s,
        a,
        l,
        u = dp(t, 0);
      for (let c = 0; c < i - 1; ++c)
        ((l = u),
          (u = dp(t, c + 1)),
          l &&
            u &&
            (Fd(e[c], 0, hp)
              ? (n[c] = n[c + 1] = 0)
              : ((r = n[c] / e[c]),
                (o = n[c + 1] / e[c]),
                (a = Math.pow(r, 2) + Math.pow(o, 2)),
                a <= 9 ||
                  ((s = 3 / Math.sqrt(a)),
                  (n[c] = r * s * e[c]),
                  (n[c + 1] = o * s * e[c])))));
    })(t, r, o),
      (function (t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'x';
        const i = fp(n),
          r = t.length;
        let o,
          s,
          a,
          l = dp(t, 0);
        for (let u = 0; u < r; ++u) {
          if (((s = a), (a = l), (l = dp(t, u + 1)), !a)) continue;
          const r = a[n],
            c = a[i];
          (s &&
            ((o = (r - s[n]) / 3),
            (a['cp1'.concat(n)] = r - o),
            (a['cp1'.concat(i)] = c - o * e[u])),
            l &&
              ((o = (l[n] - r) / 3),
              (a['cp2'.concat(n)] = r + o),
              (a['cp2'.concat(i)] = c + o * e[u])));
        }
      })(t, o, e));
  }
  function gp(t, e, n) {
    return Math.max(Math.min(t, n), e);
  }
  function vp(t, e, n, i, r) {
    let o, s, a, l;
    if (
      (e.spanGaps && (t = t.filter((t) => !t.skip)),
      'monotone' === e.cubicInterpolationMode)
    )
      mp(t, r);
    else {
      let n = i ? t[t.length - 1] : t[0];
      for (o = 0, s = t.length; o < s; ++o)
        ((a = t[o]),
          (l = pp(n, a, t[Math.min(o + 1, s - (i ? 0 : 1)) % s], e.tension)),
          (a.cp1x = l.previous.x),
          (a.cp1y = l.previous.y),
          (a.cp2x = l.next.x),
          (a.cp2y = l.next.y),
          (n = a));
    }
    e.capBezierPoints &&
      (function (t, e) {
        let n,
          i,
          r,
          o,
          s,
          a = Af(t[0], e);
        for (n = 0, i = t.length; n < i; ++n)
          ((s = o),
            (o = a),
            (a = n < i - 1 && Af(t[n + 1], e)),
            o &&
              ((r = t[n]),
              s &&
                ((r.cp1x = gp(r.cp1x, e.left, e.right)),
                (r.cp1y = gp(r.cp1y, e.top, e.bottom))),
              a &&
                ((r.cp2x = gp(r.cp2x, e.left, e.right)),
                (r.cp2y = gp(r.cp2y, e.top, e.bottom)))));
      })(t, n);
  }
  function yp() {
    return 'undefined' !== typeof window && 'undefined' !== typeof document;
  }
  function bp(t) {
    let e = t.parentNode;
    return (e && '[object ShadowRoot]' === e.toString() && (e = e.host), e);
  }
  function xp(t, e, n) {
    let i;
    return (
      'string' === typeof t
        ? ((i = parseInt(t, 10)),
          -1 !== t.indexOf('%') && (i = (i / 100) * e.parentNode[n]))
        : (i = t),
      i
    );
  }
  const wp = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  const _p = ['top', 'right', 'bottom', 'left'];
  function Sp(t, e, n) {
    const i = {};
    n = n ? '-' + n : '';
    for (let r = 0; r < 4; r++) {
      const o = _p[r];
      i[o] = parseFloat(t[e + '-' + o + n]) || 0;
    }
    return ((i.width = i.left + i.right), (i.height = i.top + i.bottom), i);
  }
  function kp(t, e) {
    if ('native' in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
      r = wp(n),
      o = 'border-box' === r.boxSizing,
      s = Sp(r, 'padding'),
      a = Sp(r, 'border', 'width'),
      {
        x: l,
        y: u,
        box: c,
      } = (function (t, e) {
        const n = t.touches,
          i = n && n.length ? n[0] : t,
          { offsetX: r, offsetY: o } = i;
        let s,
          a,
          l = !1;
        if (
          ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
            r,
            o,
            t.target,
          )
        )
          ((s = r), (a = o));
        else {
          const t = e.getBoundingClientRect();
          ((s = i.clientX - t.left), (a = i.clientY - t.top), (l = !0));
        }
        return { x: s, y: a, box: l };
      })(t, n),
      h = s.left + (c && a.left),
      d = s.top + (c && a.top);
    let { width: f, height: p } = e;
    return (
      o && ((f -= s.width + a.width), (p -= s.height + a.height)),
      {
        x: Math.round((((l - h) / f) * n.width) / i),
        y: Math.round((((u - d) / p) * n.height) / i),
      }
    );
  }
  const Ep = (t) => Math.round(10 * t) / 10;
  function Pp(t, e, n, i) {
    const r = wp(t),
      o = Sp(r, 'margin'),
      s = xp(r.maxWidth, t, 'clientWidth') || Pd,
      a = xp(r.maxHeight, t, 'clientHeight') || Pd,
      l = (function (t, e, n) {
        let i, r;
        if (void 0 === e || void 0 === n) {
          const o = t && bp(t);
          if (o) {
            const t = o.getBoundingClientRect(),
              s = wp(o),
              a = Sp(s, 'border', 'width'),
              l = Sp(s, 'padding');
            ((e = t.width - l.width - a.width),
              (n = t.height - l.height - a.height),
              (i = xp(s.maxWidth, o, 'clientWidth')),
              (r = xp(s.maxHeight, o, 'clientHeight')));
          } else ((e = t.clientWidth), (n = t.clientHeight));
        }
        return { width: e, height: n, maxWidth: i || Pd, maxHeight: r || Pd };
      })(t, e, n);
    let { width: u, height: c } = l;
    if ('content-box' === r.boxSizing) {
      const t = Sp(r, 'border', 'width'),
        e = Sp(r, 'padding');
      ((u -= e.width + t.width), (c -= e.height + t.height));
    }
    ((u = Math.max(0, u - o.width)),
      (c = Math.max(0, i ? u / i : c - o.height)),
      (u = Ep(Math.min(u, s, l.maxWidth))),
      (c = Ep(Math.min(c, a, l.maxHeight))),
      u && !c && (c = Ep(u / 2)));
    return (
      (void 0 !== e || void 0 !== n) &&
        i &&
        l.height &&
        c > l.height &&
        ((c = l.height), (u = Ep(Math.floor(c * i)))),
      { width: u, height: c }
    );
  }
  function Mp(t, e, n) {
    const i = e || 1,
      r = Math.floor(t.height * i),
      o = Math.floor(t.width * i);
    ((t.height = Math.floor(t.height)), (t.width = Math.floor(t.width)));
    const s = t.canvas;
    return (
      s.style &&
        (n || (!s.style.height && !s.style.width)) &&
        ((s.style.height = ''.concat(t.height, 'px')),
        (s.style.width = ''.concat(t.width, 'px'))),
      (t.currentDevicePixelRatio !== i || s.height !== r || s.width !== o) &&
        ((t.currentDevicePixelRatio = i),
        (s.height = r),
        (s.width = o),
        t.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
    );
  }
  const Cp = (function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return ((t = !0), !1);
        },
      };
      yp() &&
        (window.addEventListener('test', null, e),
        window.removeEventListener('test', null, e));
    } catch (Iy) {}
    return t;
  })();
  function Tp(t, e) {
    const n = (function (t, e) {
        return wp(t).getPropertyValue(e);
      })(t, e),
      i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
  }
  function Dp(t, e, n, i) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
  }
  function Ap(t, e, n, i) {
    return {
      x: t.x + n * (e.x - t.x),
      y:
        'middle' === i
          ? n < 0.5
            ? t.y
            : e.y
          : 'after' === i
            ? n < 1
              ? t.y
              : e.y
            : n > 0
              ? e.y
              : t.y,
    };
  }
  function Op(t, e, n, i) {
    const r = { x: t.cp2x, y: t.cp2y },
      o = { x: e.cp1x, y: e.cp1y },
      s = Dp(t, r, n),
      a = Dp(r, o, n),
      l = Dp(o, e, n),
      u = Dp(s, a, n),
      c = Dp(a, l, n);
    return Dp(u, c, n);
  }
  function Fp(t, e, n) {
    return t
      ? (function (t, e) {
          return {
            x: (n) => t + t + e - n,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) =>
              'center' === t ? t : 'right' === t ? 'left' : 'right',
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        })(e, n)
      : {
          x: (t) => t,
          setWidth(t) {},
          textAlign: (t) => t,
          xPlus: (t, e) => t + e,
          leftForLtr: (t, e) => t,
        };
  }
  function Rp(t, e) {
    let n, i;
    ('ltr' !== e && 'rtl' !== e) ||
      ((n = t.canvas.style),
      (i = [
        n.getPropertyValue('direction'),
        n.getPropertyPriority('direction'),
      ]),
      n.setProperty('direction', e, 'important'),
      (t.prevTextDirection = i));
  }
  function Lp(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection,
      t.canvas.style.setProperty('direction', e[0], e[1]));
  }
  function Np(t) {
    return 'angle' === t
      ? { between: Hd, compare: Ud, normalize: Wd }
      : { between: Yd, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function jp(t) {
    let { start: e, end: n, count: i, loop: r, style: o } = t;
    return {
      start: e % i,
      end: n % i,
      loop: r && (n - e + 1) % i === 0,
      style: o,
    };
  }
  function Ip(t, e, n) {
    if (!n) return [t];
    const { property: i, start: r, end: o } = n,
      s = e.length,
      { compare: a, between: l, normalize: u } = Np(i),
      {
        start: c,
        end: h,
        loop: d,
        style: f,
      } = (function (t, e, n) {
        const { property: i, start: r, end: o } = n,
          { between: s, normalize: a } = Np(i),
          l = e.length;
        let u,
          c,
          { start: h, end: d, loop: f } = t;
        if (f) {
          for (
            h += l, d += l, u = 0, c = l;
            u < c && s(a(e[h % l][i]), r, o);
            ++u
          )
            (h--, d--);
          ((h %= l), (d %= l));
        }
        return (
          d < h && (d += l),
          { start: h, end: d, loop: f, style: t.style }
        );
      })(t, e, n),
      p = [];
    let m,
      g,
      v,
      y = !1,
      b = null;
    const x = () => y || (l(r, v, m) && 0 !== a(r, v)),
      w = () => !y || 0 === a(o, m) || l(o, v, m);
    for (let _ = c, S = c; _ <= h; ++_)
      ((g = e[_ % s]),
        g.skip ||
          ((m = u(g[i])),
          m !== v &&
            ((y = l(m, r, o)),
            null === b && x() && (b = 0 === a(m, r) ? _ : S),
            null !== b &&
              w() &&
              (p.push(jp({ start: b, end: _, loop: d, count: s, style: f })),
              (b = null)),
            (S = _),
            (v = m))));
    return (
      null !== b &&
        p.push(jp({ start: b, end: h, loop: d, count: s, style: f })),
      p
    );
  }
  function zp(t, e) {
    const n = [],
      i = t.segments;
    for (let r = 0; r < i.length; r++) {
      const o = Ip(i[r], t.points, e);
      o.length && n.push(...o);
    }
    return n;
  }
  function Vp(t, e, n, i) {
    return i && i.setContext && n
      ? (function (t, e, n, i) {
          const r = t._chart.getContext(),
            o = Bp(t.options),
            {
              _datasetIndex: s,
              options: { spanGaps: a },
            } = t,
            l = n.length,
            u = [];
          let c = o,
            h = e[0].start,
            d = h;
          function f(t, e, i, r) {
            const o = a ? -1 : 1;
            if (t !== e) {
              for (t += l; n[t % l].skip; ) t -= o;
              for (; n[e % l].skip; ) e += o;
              t % l !== e % l &&
                (u.push({ start: t % l, end: e % l, loop: i, style: r }),
                (c = r),
                (h = e % l));
            }
          }
          for (const p of e) {
            h = a ? h : p.start;
            let t,
              e = n[h % l];
            for (d = h + 1; d <= p.end; d++) {
              const o = n[d % l];
              ((t = Bp(
                i.setContext(
                  Qf(r, {
                    type: 'segment',
                    p0: e,
                    p1: o,
                    p0DataIndex: (d - 1) % l,
                    p1DataIndex: d % l,
                    datasetIndex: s,
                  }),
                ),
              )),
                Up(t, c) && f(h, d - 1, p.loop, c),
                (e = o),
                (c = t));
            }
            h < d - 1 && f(h, d - 1, p.loop, c);
          }
          return u;
        })(t, e, n, i)
      : e;
  }
  function Bp(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor,
    };
  }
  function Up(t, e) {
    if (!e) return !1;
    const n = [],
      i = function (t, e) {
        return cf(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e;
      };
    return JSON.stringify(t, i) !== JSON.stringify(e, i);
  }
  function Wp(t, e, n) {
    return t.options.clip ? t[n] : e[n];
  }
  function Hp(t, e) {
    const n = e._clip;
    if (n.disabled) return !1;
    const i = (function (t, e) {
      const { xScale: n, yScale: i } = t;
      return n && i
        ? {
            left: Wp(n, e, 'left'),
            right: Wp(n, e, 'right'),
            top: Wp(i, e, 'top'),
            bottom: Wp(i, e, 'bottom'),
          }
        : e;
    })(e, t.chartArea);
    return {
      left: !1 === n.left ? 0 : i.left - (!0 === n.left ? 0 : n.left),
      right:
        !1 === n.right ? t.width : i.right + (!0 === n.right ? 0 : n.right),
      top: !1 === n.top ? 0 : i.top - (!0 === n.top ? 0 : n.top),
      bottom:
        !1 === n.bottom
          ? t.height
          : i.bottom + (!0 === n.bottom ? 0 : n.bottom),
    };
  }
  class $p {
    constructor() {
      ((this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0));
    }
    _notify(t, e, n, i) {
      const r = e.listeners[i],
        o = e.duration;
      r.forEach((i) =>
        i({
          chart: t,
          initial: e.initial,
          numSteps: o,
          currentStep: Math.min(n - e.start, o),
        }),
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = Zd.call(window, () => {
          (this._update(),
            (this._request = null),
            this._running && this._refresh());
        })));
    }
    _update() {
      let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Date.now(),
        e = 0;
      (this._charts.forEach((n, i) => {
        if (!n.running || !n.items.length) return;
        const r = n.items;
        let o,
          s = r.length - 1,
          a = !1;
        for (; s >= 0; --s)
          ((o = r[s]),
            o._active
              ? (o._total > n.duration && (n.duration = o._total),
                o.tick(t),
                (a = !0))
              : ((r[s] = r[r.length - 1]), r.pop()));
        (a && (i.draw(), this._notify(i, n, t, 'progress')),
          r.length ||
            ((n.running = !1),
            this._notify(i, n, t, 'complete'),
            (n.initial = !1)),
          (e += r.length));
      }),
        (this._lastDate = t),
        0 === e && (this._running = !1));
    }
    _getAnims(t) {
      const e = this._charts;
      let n = e.get(t);
      return (
        n ||
          ((n = {
            running: !1,
            initial: !0,
            items: [],
            listeners: { complete: [], progress: [] },
          }),
          e.set(t, n)),
        n
      );
    }
    listen(t, e, n) {
      this._getAnims(t).listeners[e].push(n);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        ((e.running = !0),
        (e.start = Date.now()),
        (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const n = e.items;
      let i = n.length - 1;
      for (; i >= 0; --i) n[i].cancel();
      ((e.items = []), this._notify(t, e, Date.now(), 'complete'));
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var Yp = new $p();
  const qp = 'transparent',
    Kp = {
      boolean: (t, e, n) => (n > 0.5 ? e : t),
      color(t, e, n) {
        const i = hf(t || qp),
          r = i.valid && hf(e || qp);
        return r && r.valid ? r.mix(i, n).hexString() : e;
      },
      number: (t, e, n) => t + (e - t) * n,
    };
  class Xp {
    constructor(t, e, n, i) {
      const r = e[n];
      i = Xf([t.to, i, r, t.from]);
      const o = Xf([t.from, r, i]);
      ((this._active = !0),
        (this._fn = t.fn || Kp[t.type || typeof o]),
        (this._easing = uf[t.easing] || uf.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = e),
        (this._prop = n),
        (this._from = o),
        (this._to = i),
        (this._promises = void 0));
    }
    active() {
      return this._active;
    }
    update(t, e, n) {
      if (this._active) {
        this._notify(!1);
        const i = this._target[this._prop],
          r = n - this._start,
          o = this._duration - r;
        ((this._start = n),
          (this._duration = Math.floor(Math.max(o, t.duration))),
          (this._total += r),
          (this._loop = !!t.loop),
          (this._to = Xf([t.to, e, i, t.from])),
          (this._from = Xf([t.from, i, e])));
      }
    }
    cancel() {
      this._active &&
        (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        n = this._duration,
        i = this._prop,
        r = this._from,
        o = this._loop,
        s = this._to;
      let a;
      if (((this._active = r !== s && (o || e < n)), !this._active))
        return ((this._target[i] = s), void this._notify(!0));
      e < 0
        ? (this._target[i] = r)
        : ((a = (e / n) % 2),
          (a = o && a > 1 ? 2 - a : a),
          (a = this._easing(Math.min(1, Math.max(0, a)))),
          (this._target[i] = this._fn(r, s, a)));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, n) => {
        t.push({ res: e, rej: n });
      });
    }
    _notify(t) {
      const e = t ? 'res' : 'rej',
        n = this._promises || [];
      for (let i = 0; i < n.length; i++) n[i][e]();
    }
  }
  class Qp {
    constructor(t, e) {
      ((this._chart = t), (this._properties = new Map()), this.configure(e));
    }
    configure(t) {
      if (!id(t)) return;
      const e = Object.keys(kf.animation),
        n = this._properties;
      Object.getOwnPropertyNames(t).forEach((i) => {
        const r = t[i];
        if (!id(r)) return;
        const o = {};
        for (const t of e) o[t] = r[t];
        ((nd(r.properties) && r.properties) || [i]).forEach((t) => {
          (t !== i && n.has(t)) || n.set(t, o);
        });
      });
    }
    _animateOptions(t, e) {
      const n = e.options,
        i = (function (t, e) {
          if (!e) return;
          let n = t.options;
          if (!n) return void (t.options = e);
          n.$shared &&
            (t.options = n =
              Object.assign({}, n, { $shared: !1, $animations: {} }));
          return n;
        })(t, n);
      if (!i) return [];
      const r = this._createAnimations(i, n);
      return (
        n.$shared &&
          (function (t, e) {
            const n = [],
              i = Object.keys(e);
            for (let r = 0; r < i.length; r++) {
              const e = t[i[r]];
              e && e.active() && n.push(e.wait());
            }
            return Promise.all(n);
          })(t.options.$animations, n).then(
            () => {
              t.options = n;
            },
            () => {},
          ),
        r
      );
    }
    _createAnimations(t, e) {
      const n = this._properties,
        i = [],
        r = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        s = Date.now();
      let a;
      for (a = o.length - 1; a >= 0; --a) {
        const l = o[a];
        if ('$' === l.charAt(0)) continue;
        if ('options' === l) {
          i.push(...this._animateOptions(t, e));
          continue;
        }
        const u = e[l];
        let c = r[l];
        const h = n.get(l);
        if (c) {
          if (h && c.active()) {
            c.update(h, u, s);
            continue;
          }
          c.cancel();
        }
        h && h.duration
          ? ((r[l] = c = new Xp(h, t, l, u)), i.push(c))
          : (t[l] = u);
      }
      return i;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const n = this._createAnimations(t, e);
      return n.length ? (Yp.add(this._chart, n), !0) : void 0;
    }
  }
  function Gp(t, e) {
    const n = (t && t.options) || {},
      i = n.reverse,
      r = void 0 === n.min ? e : 0,
      o = void 0 === n.max ? e : 0;
    return { start: i ? o : r, end: i ? r : o };
  }
  function Jp(t, e) {
    const n = [],
      i = t._getSortedDatasetMetas(e);
    let r, o;
    for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index);
    return n;
  }
  function Zp(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const r = t.keys,
      o = 'single' === i.mode;
    let s, a, l, u;
    if (null === e) return;
    let c = !1;
    for (s = 0, a = r.length; s < a; ++s) {
      if (((l = +r[s]), l === n)) {
        if (((c = !0), i.all)) continue;
        break;
      }
      ((u = t.values[l]),
        rd(u) && (o || 0 === e || Od(e) === Od(u)) && (e += u));
    }
    return c || i.all ? e : 0;
  }
  function tm(t, e) {
    const n = t && t.options.stacked;
    return n || (void 0 === n && void 0 !== e.stack);
  }
  function em(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
  }
  function nm(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
      const e = t[r.index];
      if ((n && e > 0) || (!n && e < 0)) return r.index;
    }
    return null;
  }
  function im(t, e) {
    const { chart: n, _cachedMeta: i } = t,
      r = n._stacks || (n._stacks = {}),
      { iScale: o, vScale: s, index: a } = i,
      l = o.axis,
      u = s.axis,
      c = (function (t, e, n) {
        return ''
          .concat(t.id, '.')
          .concat(e.id, '.')
          .concat(n.stack || n.type);
      })(o, s, i),
      h = e.length;
    let d;
    for (let f = 0; f < h; ++f) {
      const t = e[f],
        { [l]: n, [u]: o } = t;
      ((d = (t._stacks || (t._stacks = {}))[u] = em(r, c, n)),
        (d[a] = o),
        (d._top = nm(d, s, !0, i.type)),
        (d._bottom = nm(d, s, !1, i.type)));
      (d._visualValues || (d._visualValues = {}))[a] = o;
    }
  }
  function rm(t, e) {
    const n = t.scales;
    return Object.keys(n)
      .filter((t) => n[t].axis === e)
      .shift();
  }
  function om(t, e) {
    const n = t.controller.index,
      i = t.vScale && t.vScale.axis;
    if (i) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
        (delete e[i][n],
          void 0 !== e[i]._visualValues &&
            void 0 !== e[i]._visualValues[n] &&
            delete e[i]._visualValues[n]);
      }
    }
  }
  const sm = (t) => 'reset' === t || 'none' === t,
    am = (t, e) => (e ? t : Object.assign({}, t));
  class lm {
    constructor(t, e) {
      ((this.chart = t),
        (this._ctx = t.ctx),
        (this.index = e),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        (this.datasetElementType = new.target.datasetElementType),
        (this.dataElementType = new.target.dataElementType),
        this.initialize());
    }
    initialize() {
      const t = this._cachedMeta;
      (this.configure(),
        this.linkScales(),
        (t._stacked = tm(t.vScale, t)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled('filler') &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
          ));
    }
    updateIndex(t) {
      (this.index !== t && om(this._cachedMeta), (this.index = t));
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        n = this.getDataset(),
        i = (t, e, n, i) => ('x' === t ? e : 'r' === t ? i : n),
        r = (e.xAxisID = sd(n.xAxisID, rm(t, 'x'))),
        o = (e.yAxisID = sd(n.yAxisID, rm(t, 'y'))),
        s = (e.rAxisID = sd(n.rAxisID, rm(t, 'r'))),
        a = e.indexAxis,
        l = (e.iAxisID = i(a, r, o, s)),
        u = (e.vAxisID = i(a, o, r, s));
      ((e.xScale = this.getScaleForId(r)),
        (e.yScale = this.getScaleForId(o)),
        (e.rScale = this.getScaleForId(s)),
        (e.iScale = this.getScaleForId(l)),
        (e.vScale = this.getScaleForId(u)));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update('reset');
    }
    _destroy() {
      const t = this._cachedMeta;
      (this._data && Gd(this._data, this), t._stacked && om(t));
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        n = this._data;
      if (id(e)) {
        const t = this._cachedMeta;
        this._data = (function (t, e) {
          const { iScale: n, vScale: i } = e,
            r = 'x' === n.axis ? 'x' : 'y',
            o = 'x' === i.axis ? 'x' : 'y',
            s = Object.keys(t),
            a = new Array(s.length);
          let l, u, c;
          for (l = 0, u = s.length; l < u; ++l)
            ((c = s[l]), (a[l] = { [r]: c, [o]: t[c] }));
          return a;
        })(e, t);
      } else if (n !== e) {
        if (n) {
          Gd(n, this);
          const t = this._cachedMeta;
          (om(t), (t._parsed = []));
        }
        (e &&
          Object.isExtensible(e) &&
          ((r = this),
          (i = e)._chartjs
            ? i._chartjs.listeners.push(r)
            : (Object.defineProperty(i, '_chartjs', {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [r] },
              }),
              Qd.forEach((t) => {
                const e = '_onData' + bd(t),
                  n = i[t];
                Object.defineProperty(i, t, {
                  configurable: !0,
                  enumerable: !1,
                  value() {
                    for (
                      var t = arguments.length, r = new Array(t), o = 0;
                      o < t;
                      o++
                    )
                      r[o] = arguments[o];
                    const s = n.apply(this, r);
                    return (
                      i._chartjs.listeners.forEach((t) => {
                        'function' === typeof t[e] && t[e](...r);
                      }),
                      s
                    );
                  },
                });
              }))),
          (this._syncList = []),
          (this._data = e));
      }
      var i, r;
    }
    addElements() {
      const t = this._cachedMeta;
      (this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType()));
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta,
        n = this.getDataset();
      let i = !1;
      this._dataCheck();
      const r = e._stacked;
      ((e._stacked = tm(e.vScale, e)),
        e.stack !== n.stack && ((i = !0), om(e), (e.stack = n.stack)),
        this._resyncElements(t),
        (i || r !== e._stacked) &&
          (im(this, e._parsed), (e._stacked = tm(e.vScale, e))));
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        n = t.getOptionScopes(this.getDataset(), e, !0);
      ((this.options = t.createResolver(n, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {}));
    }
    parse(t, e) {
      const { _cachedMeta: n, _data: i } = this,
        { iScale: r, _stacked: o } = n,
        s = r.axis;
      let a,
        l,
        u,
        c = (0 === t && e === i.length) || n._sorted,
        h = t > 0 && n._parsed[t - 1];
      if (!1 === this._parsing) ((n._parsed = i), (n._sorted = !0), (u = i));
      else {
        u = nd(i[t])
          ? this.parseArrayData(n, i, t, e)
          : id(i[t])
            ? this.parseObjectData(n, i, t, e)
            : this.parsePrimitiveData(n, i, t, e);
        const r = () => null === l[s] || (h && l[s] < h[s]);
        for (a = 0; a < e; ++a)
          ((n._parsed[a + t] = l = u[a]), c && (r() && (c = !1), (h = l)));
        n._sorted = c;
      }
      o && im(this, u);
    }
    parsePrimitiveData(t, e, n, i) {
      const { iScale: r, vScale: o } = t,
        s = r.axis,
        a = o.axis,
        l = r.getLabels(),
        u = r === o,
        c = new Array(i);
      let h, d, f;
      for (h = 0, d = i; h < d; ++h)
        ((f = h + n),
          (c[h] = { [s]: u || r.parse(l[f], f), [a]: o.parse(e[f], f) }));
      return c;
    }
    parseArrayData(t, e, n, i) {
      const { xScale: r, yScale: o } = t,
        s = new Array(i);
      let a, l, u, c;
      for (a = 0, l = i; a < l; ++a)
        ((u = a + n),
          (c = e[u]),
          (s[a] = { x: r.parse(c[0], u), y: o.parse(c[1], u) }));
      return s;
    }
    parseObjectData(t, e, n, i) {
      const { xScale: r, yScale: o } = t,
        { xAxisKey: s = 'x', yAxisKey: a = 'y' } = this._parsing,
        l = new Array(i);
      let u, c, h, d;
      for (u = 0, c = i; u < c; ++u)
        ((h = u + n),
          (d = e[h]),
          (l[u] = { x: r.parse(yd(d, s), h), y: o.parse(yd(d, a), h) }));
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, n) {
      const i = this.chart,
        r = this._cachedMeta,
        o = e[t.axis];
      return Zp(
        { keys: Jp(i, !0), values: e._stacks[t.axis]._visualValues },
        o,
        r.index,
        { mode: n },
      );
    }
    updateRangeFromParsed(t, e, n, i) {
      const r = n[e.axis];
      let o = null === r ? NaN : r;
      const s = i && n._stacks[e.axis];
      (i && s && ((i.values = s), (o = Zp(i, r, this._cachedMeta.index))),
        (t.min = Math.min(t.min, o)),
        (t.max = Math.max(t.max, o)));
    }
    getMinMax(t, e) {
      const n = this._cachedMeta,
        i = n._parsed,
        r = n._sorted && t === n.iScale,
        o = i.length,
        s = this._getOtherScale(t),
        a = ((t, e, n) =>
          t && !e.hidden && e._stacked && { keys: Jp(n, !0), values: null })(
          e,
          n,
          this.chart,
        ),
        l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: u, max: c } = (function (t) {
          const {
            min: e,
            max: n,
            minDefined: i,
            maxDefined: r,
          } = t.getUserBounds();
          return {
            min: i ? e : Number.NEGATIVE_INFINITY,
            max: r ? n : Number.POSITIVE_INFINITY,
          };
        })(s);
      let h, d;
      function f() {
        d = i[h];
        const e = d[s.axis];
        return !rd(d[t.axis]) || u > e || c < e;
      }
      for (
        h = 0;
        h < o && (f() || (this.updateRangeFromParsed(l, t, d, a), !r));
        ++h
      );
      if (r)
        for (h = o - 1; h >= 0; --h)
          if (!f()) {
            this.updateRangeFromParsed(l, t, d, a);
            break;
          }
      return l;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        n = [];
      let i, r, o;
      for (i = 0, r = e.length; i < r; ++i)
        ((o = e[i][t.axis]), rd(o) && n.push(o));
      return n;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = e.iScale,
        i = e.vScale,
        r = this.getParsed(t);
      return {
        label: n ? '' + n.getLabelForValue(r[n.axis]) : '',
        value: i ? '' + i.getLabelForValue(r[i.axis]) : '',
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      (this.update(t || 'default'),
        (e._clip = (function (t) {
          let e, n, i, r;
          return (
            id(t)
              ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
              : (e = n = i = r = t),
            { top: e, right: n, bottom: i, left: r, disabled: !1 === t }
          );
        })(
          sd(
            this.options.clip,
            (function (t, e, n) {
              if (!1 === n) return !1;
              const i = Gp(t, n),
                r = Gp(e, n);
              return {
                top: r.end,
                right: i.end,
                bottom: r.start,
                left: i.start,
              };
            })(e.xScale, e.yScale, this.getMaxOverflow()),
          ),
        )));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        n = this._cachedMeta,
        i = n.data || [],
        r = e.chartArea,
        o = [],
        s = this._drawStart || 0,
        a = this._drawCount || i.length - s,
        l = this.options.drawActiveElementsOnTop;
      let u;
      for (n.dataset && n.dataset.draw(t, r, s, a), u = s; u < s + a; ++u) {
        const e = i[u];
        e.hidden || (e.active && l ? o.push(e) : e.draw(t, r));
      }
      for (u = 0; u < o.length; ++u) o[u].draw(t, r);
    }
    getStyle(t, e) {
      const n = e ? 'active' : 'default';
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(n)
        : this.resolveDataElementOptions(t || 0, n);
    }
    getContext(t, e, n) {
      const i = this.getDataset();
      let r;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        ((r =
          e.$context ||
          (e.$context = (function (t, e, n) {
            return Qf(t, {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: n,
              index: e,
              mode: 'default',
              type: 'data',
            });
          })(this.getContext(), t, e))),
          (r.parsed = this.getParsed(t)),
          (r.raw = i.data[t]),
          (r.index = r.dataIndex = t));
      } else
        ((r =
          this.$context ||
          (this.$context = (function (t, e) {
            return Qf(t, {
              active: !1,
              dataset: void 0,
              datasetIndex: e,
              index: e,
              mode: 'default',
              type: 'dataset',
            });
          })(this.chart.getContext(), this.index))),
          (r.dataset = i),
          (r.index = r.datasetIndex = this.index));
      return ((r.active = !!e), (r.mode = n), r);
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t) {
      let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'default',
        n = arguments.length > 2 ? arguments[2] : void 0;
      const i = 'active' === e,
        r = this._cachedDataOpts,
        o = t + '-' + e,
        s = r[o],
        a = this.enableOptionSharing && xd(n);
      if (s) return am(s, a);
      const l = this.chart.config,
        u = l.datasetElementScopeKeys(this._type, t),
        c = i ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
        h = l.getOptionScopes(this.getDataset(), u),
        d = Object.keys(kf.elements[t]),
        f = l.resolveNamedOptions(h, d, () => this.getContext(n, i, e), c);
      return (
        f.$shared && ((f.$shared = a), (r[o] = Object.freeze(am(f, a)))),
        f
      );
    }
    _resolveAnimations(t, e, n) {
      const i = this.chart,
        r = this._cachedDataOpts,
        o = 'animation-'.concat(e),
        s = r[o];
      if (s) return s;
      let a;
      if (!1 !== i.options.animation) {
        const i = this.chart.config,
          r = i.datasetAnimationScopeKeys(this._type, e),
          o = i.getOptionScopes(this.getDataset(), r);
        a = i.createResolver(o, this.getContext(t, n, e));
      }
      const l = new Qp(i, a && a.animations);
      return (a && a._cacheable && (r[o] = Object.freeze(l)), l);
    }
    getSharedOptions(t) {
      if (t.$shared)
        return (
          this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        );
    }
    includeOptions(t, e) {
      return !e || sm(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const n = this.resolveDataElementOptions(t, e),
        i = this._sharedOptions,
        r = this.getSharedOptions(n),
        o = this.includeOptions(e, r) || r !== i;
      return (
        this.updateSharedOptions(r, e, n),
        { sharedOptions: r, includeOptions: o }
      );
    }
    updateElement(t, e, n, i) {
      sm(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n);
    }
    updateSharedOptions(t, e, n) {
      t && !sm(e) && this._resolveAnimations(void 0, e).update(t, n);
    }
    _setStyle(t, e, n, i) {
      t.active = i;
      const r = this.getStyle(e, i);
      this._resolveAnimations(e, n, i).update(t, {
        options: (!i && this.getSharedOptions(r)) || r,
      });
    }
    removeHoverStyle(t, e, n) {
      this._setStyle(t, n, 'active', !1);
    }
    setHoverStyle(t, e, n) {
      this._setStyle(t, n, 'active', !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !0);
    }
    _resyncElements(t) {
      const e = this._data,
        n = this._cachedMeta.data;
      for (const [s, a, l] of this._syncList) this[s](a, l);
      this._syncList = [];
      const i = n.length,
        r = e.length,
        o = Math.min(r, i);
      (o && this.parse(0, o),
        r > i
          ? this._insertElements(i, r - i, t)
          : r < i && this._removeElements(r, i - r));
    }
    _insertElements(t, e) {
      let n =
        !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const i = this._cachedMeta,
        r = i.data,
        o = t + e;
      let s;
      const a = (t) => {
        for (t.length += e, s = t.length - 1; s >= o; s--) t[s] = t[s - e];
      };
      for (a(r), s = t; s < o; ++s) r[s] = new this.dataElementType();
      (this._parsing && a(i._parsed),
        this.parse(t, e),
        n && this.updateElements(r, t, e, 'reset'));
    }
    updateElements(t, e, n, i) {}
    _removeElements(t, e) {
      const n = this._cachedMeta;
      if (this._parsing) {
        const i = n._parsed.splice(t, e);
        n._stacked && om(n, i);
      }
      n.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, n, i] = t;
        this[e](n, i);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(['_insertElements', this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(['_removeElements', t, e]);
      const n = arguments.length - 2;
      n && this._sync(['_insertElements', t, n]);
    }
    _onDataUnshift() {
      this._sync(['_insertElements', 0, arguments.length]);
    }
  }
  function um(t) {
    const e = t.iScale,
      n = (function (t, e) {
        if (!t._cache.$bar) {
          const n = t.getMatchingVisibleMetas(e);
          let i = [];
          for (let e = 0, r = n.length; e < r; e++)
            i = i.concat(n[e].controller.getAllParsedValues(t));
          t._cache.$bar = Jd(i.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      })(e, t.type);
    let i,
      r,
      o,
      s,
      a = e._length;
    const l = () => {
      32767 !== o &&
        -32768 !== o &&
        (xd(s) && (a = Math.min(a, Math.abs(o - s) || a)), (s = o));
    };
    for (i = 0, r = n.length; i < r; ++i) ((o = e.getPixelForValue(n[i])), l());
    for (s = void 0, i = 0, r = e.ticks.length; i < r; ++i)
      ((o = e.getPixelForTick(i)), l());
    return a;
  }
  function cm(t, e, n, i) {
    return (
      nd(t)
        ? (function (t, e, n, i) {
            const r = n.parse(t[0], i),
              o = n.parse(t[1], i),
              s = Math.min(r, o),
              a = Math.max(r, o);
            let l = s,
              u = a;
            (Math.abs(s) > Math.abs(a) && ((l = a), (u = s)),
              (e[n.axis] = u),
              (e._custom = {
                barStart: l,
                barEnd: u,
                start: r,
                end: o,
                min: s,
                max: a,
              }));
          })(t, e, n, i)
        : (e[n.axis] = n.parse(t, i)),
      e
    );
  }
  function hm(t, e, n, i) {
    const r = t.iScale,
      o = t.vScale,
      s = r.getLabels(),
      a = r === o,
      l = [];
    let u, c, h, d;
    for (u = n, c = n + i; u < c; ++u)
      ((d = e[u]),
        (h = {}),
        (h[r.axis] = a || r.parse(s[u], u)),
        l.push(cm(d, h, o, u)));
    return l;
  }
  function dm(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function fm(t, e, n, i) {
    let r = e.borderSkipped;
    const o = {};
    if (!r) return void (t.borderSkipped = o);
    if (!0 === r)
      return void (t.borderSkipped = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
      });
    const {
      start: s,
      end: a,
      reverse: l,
      top: u,
      bottom: c,
    } = (function (t) {
      let e, n, i, r, o;
      return (
        t.horizontal
          ? ((e = t.base > t.x), (n = 'left'), (i = 'right'))
          : ((e = t.base < t.y), (n = 'bottom'), (i = 'top')),
        e ? ((r = 'end'), (o = 'start')) : ((r = 'start'), (o = 'end')),
        { start: n, end: i, reverse: e, top: r, bottom: o }
      );
    })(t);
    ('middle' === r &&
      n &&
      ((t.enableBorderRadius = !0),
      (n._top || 0) === i
        ? (r = u)
        : (n._bottom || 0) === i
          ? (r = c)
          : ((o[pm(c, s, a, l)] = !0), (r = u))),
      (o[pm(r, s, a, l)] = !0),
      (t.borderSkipped = o));
  }
  function pm(t, e, n, i) {
    var r, o, s;
    return (
      i
        ? ((s = n),
          (t = mm((t = (r = t) === (o = e) ? s : r === s ? o : r), n, e)))
        : (t = mm(t, e, n)),
      t
    );
  }
  function mm(t, e, n) {
    return 'start' === t ? e : 'end' === t ? n : t;
  }
  function gm(t, e, n) {
    let { inflateAmount: i } = e;
    t.inflateAmount = 'auto' === i ? (1 === n ? 0.33 : 0) : i;
  }
  (Ct(lm, 'defaults', {}),
    Ct(lm, 'datasetElementType', null),
    Ct(lm, 'dataElementType', null));
  class vm extends lm {
    parsePrimitiveData(t, e, n, i) {
      return hm(t, e, n, i);
    }
    parseArrayData(t, e, n, i) {
      return hm(t, e, n, i);
    }
    parseObjectData(t, e, n, i) {
      const { iScale: r, vScale: o } = t,
        { xAxisKey: s = 'x', yAxisKey: a = 'y' } = this._parsing,
        l = 'x' === r.axis ? s : a,
        u = 'x' === o.axis ? s : a,
        c = [];
      let h, d, f, p;
      for (h = n, d = n + i; h < d; ++h)
        ((p = e[h]),
          (f = {}),
          (f[r.axis] = r.parse(yd(p, l), h)),
          c.push(cm(yd(p, u), f, o, h)));
      return c;
    }
    updateRangeFromParsed(t, e, n, i) {
      super.updateRangeFromParsed(t, e, n, i);
      const r = n._custom;
      r &&
        e === this._cachedMeta.vScale &&
        ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { iScale: n, vScale: i } = e,
        r = this.getParsed(t),
        o = r._custom,
        s = dm(o)
          ? '[' + o.start + ', ' + o.end + ']'
          : '' + i.getLabelForValue(r[i.axis]);
      return { label: '' + n.getLabelForValue(r[n.axis]), value: s };
    }
    initialize() {
      ((this.enableOptionSharing = !0), super.initialize());
      this._cachedMeta.stack = this.getDataset().stack;
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        {
          index: o,
          _cachedMeta: { vScale: s },
        } = this,
        a = s.getBasePixel(),
        l = s.isHorizontal(),
        u = this._getRuler(),
        { sharedOptions: c, includeOptions: h } = this._getSharedOptions(e, i);
      for (let d = e; d < e + n; d++) {
        const e = this.getParsed(d),
          n =
            r || ed(e[s.axis])
              ? { base: a, head: a }
              : this._calculateBarValuePixels(d),
          f = this._calculateBarIndexPixels(d, u),
          p = (e._stacks || {})[s.axis],
          m = {
            horizontal: l,
            base: n.base,
            enableBorderRadius:
              !p || dm(e._custom) || o === p._top || o === p._bottom,
            x: l ? n.head : f.center,
            y: l ? f.center : n.head,
            height: l ? f.size : Math.abs(n.size),
            width: l ? Math.abs(n.size) : f.size,
          };
        h &&
          (m.options =
            c || this.resolveDataElementOptions(d, t[d].active ? 'active' : i));
        const g = m.options || t[d].options;
        (fm(m, g, p, o), gm(m, g, u.ratio), this.updateElement(t[d], d, m, i));
      }
    }
    _getStacks(t, e) {
      const { iScale: n } = this._cachedMeta,
        i = n
          .getMatchingVisibleMetas(this._type)
          .filter((t) => t.controller.options.grouped),
        r = n.options.stacked,
        o = [],
        s = this._cachedMeta.controller.getParsed(e),
        a = s && s[n.axis],
        l = (t) => {
          const e = t._parsed.find((t) => t[n.axis] === a),
            i = e && e[t.vScale.axis];
          if (ed(i) || isNaN(i)) return !0;
        };
      for (const u of i)
        if (
          (void 0 === e || !l(u)) &&
          ((!1 === r ||
            -1 === o.indexOf(u.stack) ||
            (void 0 === r && void 0 === u.stack)) &&
            o.push(u.stack),
          u.index === t)
        )
          break;
      return (o.length || o.push(void 0), o);
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getAxisCount() {
      return this._getAxis().length;
    }
    getFirstScaleIdForIndexAxis() {
      const t = this.chart.scales,
        e = this.chart.options.indexAxis;
      return Object.keys(t)
        .filter((n) => t[n].axis === e)
        .shift();
    }
    _getAxis() {
      const t = {},
        e = this.getFirstScaleIdForIndexAxis();
      for (const n of this.chart.data.datasets)
        t[sd('x' === this.chart.options.indexAxis ? n.xAxisID : n.yAxisID, e)] =
          !0;
      return Object.keys(t);
    }
    _getStackIndex(t, e, n) {
      const i = this._getStacks(t, n),
        r = void 0 !== e ? i.indexOf(e) : -1;
      return -1 === r ? i.length - 1 : r;
    }
    _getRuler() {
      const t = this.options,
        e = this._cachedMeta,
        n = e.iScale,
        i = [];
      let r, o;
      for (r = 0, o = e.data.length; r < o; ++r)
        i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
      const s = t.barThickness;
      return {
        min: s || um(e),
        pixels: i,
        start: n._startPixel,
        end: n._endPixel,
        stackCount: this._getStackCount(),
        scale: n,
        grouped: t.grouped,
        ratio: s ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: { vScale: e, _stacked: n, index: i },
          options: { base: r, minBarLength: o },
        } = this,
        s = r || 0,
        a = this.getParsed(t),
        l = a._custom,
        u = dm(l);
      let c,
        h,
        d = a[e.axis],
        f = 0,
        p = n ? this.applyStack(e, a, n) : d;
      (p !== d && ((f = p - d), (p = d)),
        u &&
          ((d = l.barStart),
          (p = l.barEnd - l.barStart),
          0 !== d && Od(d) !== Od(l.barEnd) && (f = 0),
          (f += d)));
      const m = ed(r) || u ? f : r;
      let g = e.getPixelForValue(m);
      if (
        ((c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : g),
        (h = c - g),
        Math.abs(h) < o)
      ) {
        ((h =
          (function (t, e, n) {
            return 0 !== t
              ? Od(t)
              : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
          })(h, e, s) * o),
          d === s && (g -= h / 2));
        const t = e.getPixelForDecimal(0),
          r = e.getPixelForDecimal(1),
          l = Math.min(t, r),
          f = Math.max(t, r);
        ((g = Math.max(Math.min(g, f), l)),
          (c = g + h),
          n &&
            !u &&
            (a._stacks[e.axis]._visualValues[i] =
              e.getValueForPixel(c) - e.getValueForPixel(g)));
      }
      if (g === e.getPixelForValue(s)) {
        const t = (Od(h) * e.getLineWidthForValue(s)) / 2;
        ((g += t), (h -= t));
      }
      return { size: h, base: g, head: c, center: c + h / 2 };
    }
    _calculateBarIndexPixels(t, e) {
      const n = e.scale,
        i = this.options,
        r = i.skipNull,
        o = sd(i.maxBarThickness, 1 / 0);
      let s, a;
      const l = this._getAxisCount();
      if (e.grouped) {
        const n = r ? this._getStackCount(t) : e.stackCount,
          u =
            'flex' === i.barThickness
              ? (function (t, e, n, i) {
                  const r = e.pixels,
                    o = r[t];
                  let s = t > 0 ? r[t - 1] : null,
                    a = t < r.length - 1 ? r[t + 1] : null;
                  const l = n.categoryPercentage;
                  (null === s &&
                    (s = o - (null === a ? e.end - e.start : a - o)),
                    null === a && (a = o + o - s));
                  const u = o - ((o - Math.min(s, a)) / 2) * l;
                  return {
                    chunk: ((Math.abs(a - s) / 2) * l) / i,
                    ratio: n.barPercentage,
                    start: u,
                  };
                })(t, e, i, n * l)
              : (function (t, e, n, i) {
                  const r = n.barThickness;
                  let o, s;
                  return (
                    ed(r)
                      ? ((o = e.min * n.categoryPercentage),
                        (s = n.barPercentage))
                      : ((o = r * i), (s = 1)),
                    { chunk: o / i, ratio: s, start: e.pixels[t] - o / 2 }
                  );
                })(t, e, i, n * l),
          c =
            'x' === this.chart.options.indexAxis
              ? this.getDataset().xAxisID
              : this.getDataset().yAxisID,
          h = this._getAxis().indexOf(
            sd(c, this.getFirstScaleIdForIndexAxis()),
          ),
          d =
            this._getStackIndex(
              this.index,
              this._cachedMeta.stack,
              r ? t : void 0,
            ) + h;
        ((s = u.start + u.chunk * d + u.chunk / 2),
          (a = Math.min(o, u.chunk * u.ratio)));
      } else
        ((s = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
          (a = Math.min(o, e.min * e.ratio)));
      return { base: s - a / 2, head: s + a / 2, center: s, size: a };
    }
    draw() {
      const t = this._cachedMeta,
        e = t.vScale,
        n = t.data,
        i = n.length;
      let r = 0;
      for (; r < i; ++r)
        null === this.getParsed(r)[e.axis] ||
          n[r].hidden ||
          n[r].draw(this._ctx);
    }
  }
  (Ct(vm, 'id', 'bar'),
    Ct(vm, 'defaults', {
      datasetElementType: !1,
      dataElementType: 'bar',
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: !0,
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'base', 'width', 'height'],
        },
      },
    }),
    Ct(vm, 'overrides', {
      scales: {
        _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
        _value_: { type: 'linear', beginAtZero: !0 },
      },
    }));
  class ym extends lm {
    initialize() {
      ((this.enableOptionSharing = !0), super.initialize());
    }
    parsePrimitiveData(t, e, n, i) {
      const r = super.parsePrimitiveData(t, e, n, i);
      for (let o = 0; o < r.length; o++)
        r[o]._custom = this.resolveDataElementOptions(o + n).radius;
      return r;
    }
    parseArrayData(t, e, n, i) {
      const r = super.parseArrayData(t, e, n, i);
      for (let o = 0; o < r.length; o++) {
        const t = e[n + o];
        r[o]._custom = sd(t[2], this.resolveDataElementOptions(o + n).radius);
      }
      return r;
    }
    parseObjectData(t, e, n, i) {
      const r = super.parseObjectData(t, e, n, i);
      for (let o = 0; o < r.length; o++) {
        const t = e[n + o];
        r[o]._custom = sd(
          t && t.r && +t.r,
          this.resolveDataElementOptions(o + n).radius,
        );
      }
      return r;
    }
    getMaxOverflow() {
      const t = this._cachedMeta.data;
      let e = 0;
      for (let n = t.length - 1; n >= 0; --n)
        e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
      return e > 0 && e;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart.data.labels || [],
        { xScale: i, yScale: r } = e,
        o = this.getParsed(t),
        s = i.getLabelForValue(o.x),
        a = r.getLabelForValue(o.y),
        l = o._custom;
      return {
        label: n[t] || '',
        value: '(' + s + ', ' + a + (l ? ', ' + l : '') + ')',
      };
    }
    update(t) {
      const e = this._cachedMeta.data;
      this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        { iScale: o, vScale: s } = this._cachedMeta,
        { sharedOptions: a, includeOptions: l } = this._getSharedOptions(e, i),
        u = o.axis,
        c = s.axis;
      for (let h = e; h < e + n; h++) {
        const e = t[h],
          n = !r && this.getParsed(h),
          d = {},
          f = (d[u] = r ? o.getPixelForDecimal(0.5) : o.getPixelForValue(n[u])),
          p = (d[c] = r ? s.getBasePixel() : s.getPixelForValue(n[c]));
        ((d.skip = isNaN(f) || isNaN(p)),
          l &&
            ((d.options =
              a || this.resolveDataElementOptions(h, e.active ? 'active' : i)),
            r && (d.options.radius = 0)),
          this.updateElement(e, h, d, i));
      }
    }
    resolveDataElementOptions(t, e) {
      const n = this.getParsed(t);
      let i = super.resolveDataElementOptions(t, e);
      i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
      const r = i.radius;
      return (
        'active' !== e && (i.radius = 0),
        (i.radius += sd(n && n._custom, r)),
        i
      );
    }
  }
  (Ct(ym, 'id', 'bubble'),
    Ct(ym, 'defaults', {
      datasetElementType: !1,
      dataElementType: 'point',
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'borderWidth', 'radius'],
        },
      },
    }),
    Ct(ym, 'overrides', {
      scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    }));
  class bm extends lm {
    constructor(t, e) {
      (super(t, e),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0));
    }
    linkScales() {}
    parse(t, e) {
      const n = this.getDataset().data,
        i = this._cachedMeta;
      if (!1 === this._parsing) i._parsed = n;
      else {
        let r,
          o,
          s = (t) => +n[t];
        if (id(n[t])) {
          const { key: t = 'value' } = this._parsing;
          s = (e) => +yd(n[e], t);
        }
        for (r = t, o = t + e; r < o; ++r) i._parsed[r] = s(r);
      }
    }
    _getRotation() {
      return jd(this.options.rotation - 90);
    }
    _getCircumference() {
      return jd(this.options.circumference);
    }
    _getRotationExtents() {
      let t = kd,
        e = -kd;
      for (let n = 0; n < this.chart.data.datasets.length; ++n)
        if (
          this.chart.isDatasetVisible(n) &&
          this.chart.getDatasetMeta(n).type === this._type
        ) {
          const i = this.chart.getDatasetMeta(n).controller,
            r = i._getRotation(),
            o = i._getCircumference();
          ((t = Math.min(t, r)), (e = Math.max(e, r + o)));
        }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this.chart,
        { chartArea: n } = e,
        i = this._cachedMeta,
        r = i.data,
        o =
          this.getMaxBorderWidth() +
          this.getMaxOffset(r) +
          this.options.spacing,
        s = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
        a = Math.min(
          ((l = this.options.cutout),
          (u = s),
          'string' === typeof l && l.endsWith('%')
            ? parseFloat(l) / 100
            : +l / u),
          1,
        );
      var l, u;
      const c = this._getRingWeight(this.index),
        { circumference: h, rotation: d } = this._getRotationExtents(),
        {
          ratioX: f,
          ratioY: p,
          offsetX: m,
          offsetY: g,
        } = (function (t, e, n) {
          let i = 1,
            r = 1,
            o = 0,
            s = 0;
          if (e < kd) {
            const a = t,
              l = a + e,
              u = Math.cos(a),
              c = Math.sin(a),
              h = Math.cos(l),
              d = Math.sin(l),
              f = (t, e, i) =>
                Hd(t, a, l, !0) ? 1 : Math.max(e, e * n, i, i * n),
              p = (t, e, i) =>
                Hd(t, a, l, !0) ? -1 : Math.min(e, e * n, i, i * n),
              m = f(0, u, h),
              g = f(Cd, c, d),
              v = p(Sd, u, h),
              y = p(Sd + Cd, c, d);
            ((i = (m - v) / 2),
              (r = (g - y) / 2),
              (o = -(m + v) / 2),
              (s = -(g + y) / 2));
          }
          return { ratioX: i, ratioY: r, offsetX: o, offsetY: s };
        })(d, h, a),
        v = (n.width - o) / f,
        y = (n.height - o) / p,
        b = Math.max(Math.min(v, y) / 2, 0),
        x = ad(this.options.radius, b),
        w = (x - Math.max(x * a, 0)) / this._getVisibleDatasetWeightTotal();
      ((this.offsetX = m * x),
        (this.offsetY = g * x),
        (i.total = this.calculateTotal()),
        (this.outerRadius = x - w * this._getRingWeightOffset(this.index)),
        (this.innerRadius = Math.max(this.outerRadius - w * c, 0)),
        this.updateElements(r, 0, r.length, t));
    }
    _circumference(t, e) {
      const n = this.options,
        i = this._cachedMeta,
        r = this._getCircumference();
      return (e && n.animation.animateRotate) ||
        !this.chart.getDataVisibility(t) ||
        null === i._parsed[t] ||
        i.data[t].hidden
        ? 0
        : this.calculateCircumference((i._parsed[t] * r) / kd);
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        o = this.chart,
        s = o.chartArea,
        a = o.options.animation,
        l = (s.left + s.right) / 2,
        u = (s.top + s.bottom) / 2,
        c = r && a.animateScale,
        h = c ? 0 : this.innerRadius,
        d = c ? 0 : this.outerRadius,
        { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, i);
      let m,
        g = this._getRotation();
      for (m = 0; m < e; ++m) g += this._circumference(m, r);
      for (m = e; m < e + n; ++m) {
        const e = this._circumference(m, r),
          n = t[m],
          o = {
            x: l + this.offsetX,
            y: u + this.offsetY,
            startAngle: g,
            endAngle: g + e,
            circumference: e,
            outerRadius: d,
            innerRadius: h,
          };
        (p &&
          (o.options =
            f || this.resolveDataElementOptions(m, n.active ? 'active' : i)),
          (g += e),
          this.updateElement(n, m, o, i));
      }
    }
    calculateTotal() {
      const t = this._cachedMeta,
        e = t.data;
      let n,
        i = 0;
      for (n = 0; n < e.length; n++) {
        const r = t._parsed[n];
        null === r ||
          isNaN(r) ||
          !this.chart.getDataVisibility(n) ||
          e[n].hidden ||
          (i += Math.abs(r));
      }
      return i;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? kd * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart,
        i = n.data.labels || [],
        r = gf(e._parsed[t], n.options.locale);
      return { label: i[t] || '', value: r };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const n = this.chart;
      let i, r, o, s, a;
      if (!t)
        for (i = 0, r = n.data.datasets.length; i < r; ++i)
          if (n.isDatasetVisible(i)) {
            ((o = n.getDatasetMeta(i)), (t = o.data), (s = o.controller));
            break;
          }
      if (!t) return 0;
      for (i = 0, r = t.length; i < r; ++i)
        ((a = s.resolveDataElementOptions(i)),
          'inner' !== a.borderAlign &&
            (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0)));
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let n = 0, i = t.length; n < i; ++n) {
        const t = this.resolveDataElementOptions(n);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let n = 0; n < t; ++n)
        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
      return e;
    }
    _getRingWeight(t) {
      return Math.max(sd(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  (Ct(bm, 'id', 'doughnut'),
    Ct(bm, 'defaults', {
      datasetElementType: !1,
      dataElementType: 'arc',
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: 'number',
          properties: [
            'circumference',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'startAngle',
            'x',
            'y',
            'offset',
            'borderWidth',
            'spacing',
          ],
        },
      },
      cutout: '50%',
      rotation: 0,
      circumference: 360,
      radius: '100%',
      spacing: 0,
      indexAxis: 'r',
    }),
    Ct(bm, 'descriptors', {
      _scriptable: (t) => 'spacing' !== t,
      _indexable: (t) =>
        'spacing' !== t &&
        !t.startsWith('borderDash') &&
        !t.startsWith('hoverBorderDash'),
    }),
    Ct(bm, 'overrides', {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: n, color: i },
                } = t.legend.options;
                return e.labels.map((e, r) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(r);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: i,
                    lineWidth: o.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(r),
                    index: r,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, n) {
            (n.chart.toggleDataVisibility(e.index), n.chart.update());
          },
        },
      },
    }));
  class xm extends lm {
    initialize() {
      ((this.enableOptionSharing = !0),
        (this.supportsDecimation = !0),
        super.initialize());
    }
    update(t) {
      const e = this._cachedMeta,
        { dataset: n, data: i = [], _dataset: r } = e,
        o = this.chart._animationsDisabled;
      let { start: s, count: a } = rf(e, i, o);
      ((this._drawStart = s),
        (this._drawCount = a),
        of(e) && ((s = 0), (a = i.length)),
        (n._chart = this.chart),
        (n._datasetIndex = this.index),
        (n._decimated = !!r._decimated),
        (n.points = i));
      const l = this.resolveDatasetElementOptions(t);
      (this.options.showLine || (l.borderWidth = 0),
        (l.segment = this.options.segment),
        this.updateElement(n, void 0, { animated: !o, options: l }, t),
        this.updateElements(i, s, a, t));
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        { iScale: o, vScale: s, _stacked: a, _dataset: l } = this._cachedMeta,
        { sharedOptions: u, includeOptions: c } = this._getSharedOptions(e, i),
        h = o.axis,
        d = s.axis,
        { spanGaps: f, segment: p } = this.options,
        m = Ld(f) ? f : Number.POSITIVE_INFINITY,
        g = this.chart._animationsDisabled || r || 'none' === i,
        v = e + n,
        y = t.length;
      let b = e > 0 && this.getParsed(e - 1);
      for (let x = 0; x < y; ++x) {
        const n = t[x],
          f = g ? n : {};
        if (x < e || x >= v) {
          f.skip = !0;
          continue;
        }
        const y = this.getParsed(x),
          w = ed(y[d]),
          _ = (f[h] = o.getPixelForValue(y[h], x)),
          S = (f[d] =
            r || w
              ? s.getBasePixel()
              : s.getPixelForValue(a ? this.applyStack(s, y, a) : y[d], x));
        ((f.skip = isNaN(_) || isNaN(S) || w),
          (f.stop = x > 0 && Math.abs(y[h] - b[h]) > m),
          p && ((f.parsed = y), (f.raw = l.data[x])),
          c &&
            (f.options =
              u || this.resolveDataElementOptions(x, n.active ? 'active' : i)),
          g || this.updateElement(n, x, f, i),
          (b = y));
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        n = (e.options && e.options.borderWidth) || 0,
        i = t.data || [];
      if (!i.length) return n;
      const r = i[0].size(this.resolveDataElementOptions(0)),
        o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
      return Math.max(n, r, o) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      (t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw());
    }
  }
  (Ct(xm, 'id', 'line'),
    Ct(xm, 'defaults', {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    }),
    Ct(xm, 'overrides', {
      scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
    }));
  class wm extends lm {
    constructor(t, e) {
      (super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0));
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart,
        i = n.data.labels || [],
        r = gf(e._parsed[t].r, n.options.locale);
      return { label: i[t] || '', value: r };
    }
    parseObjectData(t, e, n, i) {
      return cp.bind(this)(t, e, n, i);
    }
    update(t) {
      const e = this._cachedMeta.data;
      (this._updateRadius(), this.updateElements(e, 0, e.length, t));
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return (
        t.data.forEach((t, n) => {
          const i = this.getParsed(n).r;
          !isNaN(i) &&
            this.chart.getDataVisibility(n) &&
            (i < e.min && (e.min = i), i > e.max && (e.max = i));
        }),
        e
      );
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        n = t.options,
        i = Math.min(e.right - e.left, e.bottom - e.top),
        r = Math.max(i / 2, 0),
        o =
          (r -
            Math.max(
              n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1,
              0,
            )) /
          t.getVisibleDatasetCount();
      ((this.outerRadius = r - o * this.index),
        (this.innerRadius = this.outerRadius - o));
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        o = this.chart,
        s = o.options.animation,
        a = this._cachedMeta.rScale,
        l = a.xCenter,
        u = a.yCenter,
        c = a.getIndexAngle(0) - 0.5 * Sd;
      let h,
        d = c;
      const f = 360 / this.countVisibleElements();
      for (h = 0; h < e; ++h) d += this._computeAngle(h, i, f);
      for (h = e; h < e + n; h++) {
        const e = t[h];
        let n = d,
          p = d + this._computeAngle(h, i, f),
          m = o.getDataVisibility(h)
            ? a.getDistanceFromCenterForValue(this.getParsed(h).r)
            : 0;
        ((d = p),
          r && (s.animateScale && (m = 0), s.animateRotate && (n = p = c)));
        const g = {
          x: l,
          y: u,
          innerRadius: 0,
          outerRadius: m,
          startAngle: n,
          endAngle: p,
          options: this.resolveDataElementOptions(h, e.active ? 'active' : i),
        };
        this.updateElement(e, h, g, i);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let e = 0;
      return (
        t.data.forEach((t, n) => {
          !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
        }),
        e
      );
    }
    _computeAngle(t, e, n) {
      return this.chart.getDataVisibility(t)
        ? jd(this.resolveDataElementOptions(t, e).angle || n)
        : 0;
    }
  }
  (Ct(wm, 'id', 'polarArea'),
    Ct(wm, 'defaults', {
      dataElementType: 'arc',
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: 'number',
          properties: [
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
          ],
        },
      },
      indexAxis: 'r',
      startAngle: 0,
    }),
    Ct(wm, 'overrides', {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: n, color: i },
                } = t.legend.options;
                return e.labels.map((e, r) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(r);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: i,
                    lineWidth: o.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(r),
                    index: r,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, n) {
            (n.chart.toggleDataVisibility(e.index), n.chart.update());
          },
        },
      },
      scales: {
        r: {
          type: 'radialLinear',
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    }));
  class _m extends bm {}
  (Ct(_m, 'id', 'pie'),
    Ct(_m, 'defaults', {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: '100%',
    }));
  class Sm extends lm {
    getLabelAndValue(t) {
      const e = this._cachedMeta.vScale,
        n = this.getParsed(t);
      return {
        label: e.getLabels()[t],
        value: '' + e.getLabelForValue(n[e.axis]),
      };
    }
    parseObjectData(t, e, n, i) {
      return cp.bind(this)(t, e, n, i);
    }
    update(t) {
      const e = this._cachedMeta,
        n = e.dataset,
        i = e.data || [],
        r = e.iScale.getLabels();
      if (((n.points = i), 'resize' !== t)) {
        const e = this.resolveDatasetElementOptions(t);
        this.options.showLine || (e.borderWidth = 0);
        const o = { _loop: !0, _fullLoop: r.length === i.length, options: e };
        this.updateElement(n, void 0, o, t);
      }
      this.updateElements(i, 0, i.length, t);
    }
    updateElements(t, e, n, i) {
      const r = this._cachedMeta.rScale,
        o = 'reset' === i;
      for (let s = e; s < e + n; s++) {
        const e = t[s],
          n = this.resolveDataElementOptions(s, e.active ? 'active' : i),
          a = r.getPointPositionForValue(s, this.getParsed(s).r),
          l = o ? r.xCenter : a.x,
          u = o ? r.yCenter : a.y,
          c = {
            x: l,
            y: u,
            angle: a.angle,
            skip: isNaN(l) || isNaN(u),
            options: n,
          };
        this.updateElement(e, s, c, i);
      }
    }
  }
  (Ct(Sm, 'id', 'radar'),
    Ct(Sm, 'defaults', {
      datasetElementType: 'line',
      dataElementType: 'point',
      indexAxis: 'r',
      showLine: !0,
      elements: { line: { fill: 'start' } },
    }),
    Ct(Sm, 'overrides', {
      aspectRatio: 1,
      scales: { r: { type: 'radialLinear' } },
    }));
  class km extends lm {
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart.data.labels || [],
        { xScale: i, yScale: r } = e,
        o = this.getParsed(t),
        s = i.getLabelForValue(o.x),
        a = r.getLabelForValue(o.y);
      return { label: n[t] || '', value: '(' + s + ', ' + a + ')' };
    }
    update(t) {
      const e = this._cachedMeta,
        { data: n = [] } = e,
        i = this.chart._animationsDisabled;
      let { start: r, count: o } = rf(e, n, i);
      if (
        ((this._drawStart = r),
        (this._drawCount = o),
        of(e) && ((r = 0), (o = n.length)),
        this.options.showLine)
      ) {
        this.datasetElementType || this.addElements();
        const { dataset: r, _dataset: o } = e;
        ((r._chart = this.chart),
          (r._datasetIndex = this.index),
          (r._decimated = !!o._decimated),
          (r.points = n));
        const s = this.resolveDatasetElementOptions(t);
        ((s.segment = this.options.segment),
          this.updateElement(r, void 0, { animated: !i, options: s }, t));
      } else
        this.datasetElementType &&
          (delete e.dataset, (this.datasetElementType = !1));
      this.updateElements(n, r, o, t);
    }
    addElements() {
      const { showLine: t } = this.options;
      (!this.datasetElementType &&
        t &&
        (this.datasetElementType = this.chart.registry.getElement('line')),
        super.addElements());
    }
    updateElements(t, e, n, i) {
      const r = 'reset' === i,
        { iScale: o, vScale: s, _stacked: a, _dataset: l } = this._cachedMeta,
        u = this.resolveDataElementOptions(e, i),
        c = this.getSharedOptions(u),
        h = this.includeOptions(i, c),
        d = o.axis,
        f = s.axis,
        { spanGaps: p, segment: m } = this.options,
        g = Ld(p) ? p : Number.POSITIVE_INFINITY,
        v = this.chart._animationsDisabled || r || 'none' === i;
      let y = e > 0 && this.getParsed(e - 1);
      for (let b = e; b < e + n; ++b) {
        const e = t[b],
          n = this.getParsed(b),
          u = v ? e : {},
          p = ed(n[f]),
          x = (u[d] = o.getPixelForValue(n[d], b)),
          w = (u[f] =
            r || p
              ? s.getBasePixel()
              : s.getPixelForValue(a ? this.applyStack(s, n, a) : n[f], b));
        ((u.skip = isNaN(x) || isNaN(w) || p),
          (u.stop = b > 0 && Math.abs(n[d] - y[d]) > g),
          m && ((u.parsed = n), (u.raw = l.data[b])),
          h &&
            (u.options =
              c || this.resolveDataElementOptions(b, e.active ? 'active' : i)),
          v || this.updateElement(e, b, u, i),
          (y = n));
      }
      this.updateSharedOptions(c, i, u);
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.data || [];
      if (!this.options.showLine) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; --n)
          t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2);
        return t > 0 && t;
      }
      const n = t.dataset,
        i = (n.options && n.options.borderWidth) || 0;
      if (!e.length) return i;
      const r = e[0].size(this.resolveDataElementOptions(0)),
        o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
      return Math.max(i, r, o) / 2;
    }
  }
  (Ct(km, 'id', 'scatter'),
    Ct(km, 'defaults', {
      datasetElementType: !1,
      dataElementType: 'point',
      showLine: !1,
      fill: !1,
    }),
    Ct(km, 'overrides', {
      interaction: { mode: 'point' },
      scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    }));
  function Em() {
    throw new Error(
      'This method is not implemented: Check that a complete date adapter is provided.',
    );
  }
  class Pm {
    static override(t) {
      Object.assign(Pm.prototype, t);
    }
    constructor(t) {
      (Ct(this, 'options', void 0), (this.options = t || {}));
    }
    init() {}
    formats() {
      return Em();
    }
    parse() {
      return Em();
    }
    format() {
      return Em();
    }
    add() {
      return Em();
    }
    diff() {
      return Em();
    }
    startOf() {
      return Em();
    }
    endOf() {
      return Em();
    }
  }
  var Mm = Pm;
  function Cm(t, e, n, i) {
    const { controller: r, data: o, _sorted: s } = t,
      a = r._cachedMeta.iScale,
      l = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
    if (a && e === a.axis && 'r' !== e && s && o.length) {
      const s = a._reversePixels ? Xd : Kd;
      if (!i) {
        const i = s(o, e, n);
        if (l) {
          const { vScale: e } = r._cachedMeta,
            { _parsed: n } = t,
            o = n
              .slice(0, i.lo + 1)
              .reverse()
              .findIndex((t) => !ed(t[e.axis]));
          i.lo -= Math.max(0, o);
          const s = n.slice(i.hi).findIndex((t) => !ed(t[e.axis]));
          i.hi += Math.max(0, s);
        }
        return i;
      }
      if (r._sharedOptions) {
        const t = o[0],
          i = 'function' === typeof t.getRange && t.getRange(e);
        if (i) {
          const t = s(o, e, n - i),
            r = s(o, e, n + i);
          return { lo: t.lo, hi: r.hi };
        }
      }
    }
    return { lo: 0, hi: o.length - 1 };
  }
  function Tm(t, e, n, i, r) {
    const o = t.getSortedVisibleDatasetMetas(),
      s = n[e];
    for (let a = 0, l = o.length; a < l; ++a) {
      const { index: t, data: n } = o[a],
        { lo: l, hi: u } = Cm(o[a], e, s, r);
      for (let e = l; e <= u; ++e) {
        const r = n[e];
        r.skip || i(r, t, e);
      }
    }
  }
  function Dm(t, e, n, i, r) {
    const o = [];
    if (!r && !t.isPointInArea(e)) return o;
    return (
      Tm(
        t,
        n,
        e,
        function (n, s, a) {
          (r || Af(n, t.chartArea, 0)) &&
            n.inRange(e.x, e.y, i) &&
            o.push({ element: n, datasetIndex: s, index: a });
        },
        !0,
      ),
      o
    );
  }
  function Am(t, e, n, i, r, o) {
    let s = [];
    const a = (function (t) {
      const e = -1 !== t.indexOf('x'),
        n = -1 !== t.indexOf('y');
      return function (t, i) {
        const r = e ? Math.abs(t.x - i.x) : 0,
          o = n ? Math.abs(t.y - i.y) : 0;
        return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
      };
    })(n);
    let l = Number.POSITIVE_INFINITY;
    return (
      Tm(t, n, e, function (n, u, c) {
        const h = n.inRange(e.x, e.y, r);
        if (i && !h) return;
        const d = n.getCenterPoint(r);
        if (!(!!o || t.isPointInArea(d)) && !h) return;
        const f = a(e, d);
        f < l
          ? ((s = [{ element: n, datasetIndex: u, index: c }]), (l = f))
          : f === l && s.push({ element: n, datasetIndex: u, index: c });
      }),
      s
    );
  }
  function Om(t, e, n, i, r, o) {
    return o || t.isPointInArea(e)
      ? 'r' !== n || i
        ? Am(t, e, n, i, r, o)
        : (function (t, e, n, i) {
            let r = [];
            return (
              Tm(t, n, e, function (t, n, o) {
                const { startAngle: s, endAngle: a } = t.getProps(
                    ['startAngle', 'endAngle'],
                    i,
                  ),
                  { angle: l } = Vd(t, { x: e.x, y: e.y });
                Hd(l, s, a) &&
                  r.push({ element: t, datasetIndex: n, index: o });
              }),
              r
            );
          })(t, e, n, r)
      : [];
  }
  function Fm(t, e, n, i, r) {
    const o = [],
      s = 'x' === n ? 'inXRange' : 'inYRange';
    let a = !1;
    return (
      Tm(t, n, e, (t, i, l) => {
        t[s] &&
          t[s](e[n], r) &&
          (o.push({ element: t, datasetIndex: i, index: l }),
          (a = a || t.inRange(e.x, e.y, r)));
      }),
      i && !a ? [] : o
    );
  }
  var Rm = {
    evaluateInteractionItems: Tm,
    modes: {
      index(t, e, n, i) {
        const r = kp(e, t),
          o = n.axis || 'x',
          s = n.includeInvisible || !1,
          a = n.intersect ? Dm(t, r, o, i, s) : Om(t, r, o, !1, i, s),
          l = [];
        return a.length
          ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
              const e = a[0].index,
                n = t.data[e];
              n &&
                !n.skip &&
                l.push({ element: n, datasetIndex: t.index, index: e });
            }),
            l)
          : [];
      },
      dataset(t, e, n, i) {
        const r = kp(e, t),
          o = n.axis || 'xy',
          s = n.includeInvisible || !1;
        let a = n.intersect ? Dm(t, r, o, i, s) : Om(t, r, o, !1, i, s);
        if (a.length > 0) {
          const e = a[0].datasetIndex,
            n = t.getDatasetMeta(e).data;
          a = [];
          for (let t = 0; t < n.length; ++t)
            a.push({ element: n[t], datasetIndex: e, index: t });
        }
        return a;
      },
      point: (t, e, n, i) =>
        Dm(t, kp(e, t), n.axis || 'xy', i, n.includeInvisible || !1),
      nearest(t, e, n, i) {
        const r = kp(e, t),
          o = n.axis || 'xy',
          s = n.includeInvisible || !1;
        return Om(t, r, o, n.intersect, i, s);
      },
      x: (t, e, n, i) => Fm(t, kp(e, t), 'x', n.intersect, i),
      y: (t, e, n, i) => Fm(t, kp(e, t), 'y', n.intersect, i),
    },
  };
  const Lm = ['left', 'top', 'right', 'bottom'];
  function Nm(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function jm(t, e) {
    return t.filter((t) => -1 === Lm.indexOf(t.pos) && t.box.axis === e);
  }
  function Im(t, e) {
    return t.sort((t, n) => {
      const i = e ? n : t,
        r = e ? t : n;
      return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
    });
  }
  function zm(t, e) {
    const n = (function (t) {
        const e = {};
        for (const n of t) {
          const { stack: t, pos: i, stackWeight: r } = n;
          if (!t || !Lm.includes(i)) continue;
          const o =
            e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
          (o.count++, (o.weight += r));
        }
        return e;
      })(t),
      { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
    let o, s, a;
    for (o = 0, s = t.length; o < s; ++o) {
      a = t[o];
      const { fullSize: s } = a.box,
        l = n[a.stack],
        u = l && a.stackWeight / l.weight;
      a.horizontal
        ? ((a.width = u ? u * i : s && e.availableWidth), (a.height = r))
        : ((a.width = i), (a.height = u ? u * r : s && e.availableHeight));
    }
    return n;
  }
  function Vm(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
  }
  function Bm(t, e) {
    ((t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right)));
  }
  function Um(t, e, n, i) {
    const { pos: r, box: o } = n,
      s = t.maxPadding;
    if (!id(r)) {
      n.size && (t[r] -= n.size);
      const e = i[n.stack] || { size: 0, count: 1 };
      ((e.size = Math.max(e.size, n.horizontal ? o.height : o.width)),
        (n.size = e.size / e.count),
        (t[r] += n.size));
    }
    o.getPadding && Bm(s, o.getPadding());
    const a = Math.max(0, e.outerWidth - Vm(s, t, 'left', 'right')),
      l = Math.max(0, e.outerHeight - Vm(s, t, 'top', 'bottom')),
      u = a !== t.w,
      c = l !== t.h;
    return (
      (t.w = a),
      (t.h = l),
      n.horizontal ? { same: u, other: c } : { same: c, other: u }
    );
  }
  function Wm(t, e) {
    const n = e.maxPadding;
    function i(t) {
      const i = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        t.forEach((t) => {
          i[t] = Math.max(e[t], n[t]);
        }),
        i
      );
    }
    return i(t ? ['left', 'right'] : ['top', 'bottom']);
  }
  function Hm(t, e, n, i) {
    const r = [];
    let o, s, a, l, u, c;
    for (o = 0, s = t.length, u = 0; o < s; ++o) {
      ((a = t[o]),
        (l = a.box),
        l.update(a.width || e.w, a.height || e.h, Wm(a.horizontal, e)));
      const { same: s, other: h } = Um(e, n, a, i);
      ((u |= s && r.length), (c = c || h), l.fullSize || r.push(a));
    }
    return (u && Hm(r, e, n, i)) || c;
  }
  function $m(t, e, n, i, r) {
    ((t.top = n),
      (t.left = e),
      (t.right = e + i),
      (t.bottom = n + r),
      (t.width = i),
      (t.height = r));
  }
  function Ym(t, e, n, i) {
    const r = n.padding;
    let { x: o, y: s } = e;
    for (const a of t) {
      const t = a.box,
        l = i[a.stack] || { count: 1, placed: 0, weight: 1 },
        u = a.stackWeight / l.weight || 1;
      if (a.horizontal) {
        const i = e.w * u,
          o = l.size || t.height;
        (xd(l.start) && (s = l.start),
          t.fullSize
            ? $m(t, r.left, s, n.outerWidth - r.right - r.left, o)
            : $m(t, e.left + l.placed, s, i, o),
          (l.start = s),
          (l.placed += i),
          (s = t.bottom));
      } else {
        const i = e.h * u,
          s = l.size || t.width;
        (xd(l.start) && (o = l.start),
          t.fullSize
            ? $m(t, o, r.top, s, n.outerHeight - r.bottom - r.top)
            : $m(t, o, e.top + l.placed, s, i),
          (l.start = o),
          (l.placed += i),
          (o = t.right));
      }
    }
    ((e.x = o), (e.y = s));
  }
  var qm = {
    addBox(t, e) {
      (t.boxes || (t.boxes = []),
        (e.fullSize = e.fullSize || !1),
        (e.position = e.position || 'top'),
        (e.weight = e.weight || 0),
        (e._layers =
          e._layers ||
          function () {
            return [
              {
                z: 0,
                draw(t) {
                  e.draw(t);
                },
              },
            ];
          }),
        t.boxes.push(e));
    },
    removeBox(t, e) {
      const n = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== n && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
      ((e.fullSize = n.fullSize),
        (e.position = n.position),
        (e.weight = n.weight));
    },
    update(t, e, n, i) {
      if (!t) return;
      const r = qf(t.options.layout.padding),
        o = Math.max(e - r.width, 0),
        s = Math.max(n - r.height, 0),
        a = (function (t) {
          const e = (function (t) {
              const e = [];
              let n, i, r, o, s, a;
              for (n = 0, i = (t || []).length; n < i; ++n)
                ((r = t[n]),
                  ({
                    position: o,
                    options: { stack: s, stackWeight: a = 1 },
                  } = r),
                  e.push({
                    index: n,
                    box: r,
                    pos: o,
                    horizontal: r.isHorizontal(),
                    weight: r.weight,
                    stack: s && o + s,
                    stackWeight: a,
                  }));
              return e;
            })(t),
            n = Im(
              e.filter((t) => t.box.fullSize),
              !0,
            ),
            i = Im(Nm(e, 'left'), !0),
            r = Im(Nm(e, 'right')),
            o = Im(Nm(e, 'top'), !0),
            s = Im(Nm(e, 'bottom')),
            a = jm(e, 'x'),
            l = jm(e, 'y');
          return {
            fullSize: n,
            leftAndTop: i.concat(o),
            rightAndBottom: r.concat(l).concat(s).concat(a),
            chartArea: Nm(e, 'chartArea'),
            vertical: i.concat(r).concat(l),
            horizontal: o.concat(s).concat(a),
          };
        })(t.boxes),
        l = a.vertical,
        u = a.horizontal;
      ud(t.boxes, (t) => {
        'function' === typeof t.beforeLayout && t.beforeLayout();
      });
      const c =
          l.reduce(
            (t, e) =>
              e.box.options && !1 === e.box.options.display ? t : t + 1,
            0,
          ) || 1,
        h = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: r,
          availableWidth: o,
          availableHeight: s,
          vBoxMaxWidth: o / 2 / c,
          hBoxMaxHeight: s / 2,
        }),
        d = Object.assign({}, r);
      Bm(d, qf(i));
      const f = Object.assign(
          { maxPadding: d, w: o, h: s, x: r.left, y: r.top },
          r,
        ),
        p = zm(l.concat(u), h);
      (Hm(a.fullSize, f, h, p),
        Hm(l, f, h, p),
        Hm(u, f, h, p) && Hm(l, f, h, p),
        (function (t) {
          const e = t.maxPadding;
          function n(n) {
            const i = Math.max(e[n] - t[n], 0);
            return ((t[n] += i), i);
          }
          ((t.y += n('top')), (t.x += n('left')), n('right'), n('bottom'));
        })(f),
        Ym(a.leftAndTop, f, h, p),
        (f.x += f.w),
        (f.y += f.h),
        Ym(a.rightAndBottom, f, h, p),
        (t.chartArea = {
          left: f.left,
          top: f.top,
          right: f.left + f.w,
          bottom: f.top + f.h,
          height: f.h,
          width: f.w,
        }),
        ud(a.chartArea, (e) => {
          const n = e.box;
          (Object.assign(n, t.chartArea),
            n.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 }));
        }));
    },
  };
  class Km {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, n) {}
    removeEventListener(t, e, n) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, n, i) {
      return (
        (e = Math.max(0, e || t.width)),
        (n = n || t.height),
        { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class Xm extends Km {
    acquireContext(t) {
      return (t && t.getContext && t.getContext('2d')) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Qm = '$chartjs',
    Gm = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      pointerenter: 'mouseenter',
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointerleave: 'mouseout',
      pointerout: 'mouseout',
    },
    Jm = (t) => null === t || '' === t;
  const Zm = !!Cp && { passive: !0 };
  function tg(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, Zm);
  }
  function eg(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
  }
  function ng(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((t) => {
        let e = !1;
        for (const n of t)
          ((e = e || eg(n.addedNodes, i)), (e = e && !eg(n.removedNodes, i)));
        e && n();
      });
    return (r.observe(document, { childList: !0, subtree: !0 }), r);
  }
  function ig(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((t) => {
        let e = !1;
        for (const n of t)
          ((e = e || eg(n.removedNodes, i)), (e = e && !eg(n.addedNodes, i)));
        e && n();
      });
    return (r.observe(document, { childList: !0, subtree: !0 }), r);
  }
  const rg = new Map();
  let og = 0;
  function sg() {
    const t = window.devicePixelRatio;
    t !== og &&
      ((og = t),
      rg.forEach((e, n) => {
        n.currentDevicePixelRatio !== t && e();
      }));
  }
  function ag(t, e, n) {
    const i = t.canvas,
      r = i && bp(i);
    if (!r) return;
    const o = tf((t, e) => {
        const i = r.clientWidth;
        (n(t, e), i < r.clientWidth && n());
      }, window),
      s = new ResizeObserver((t) => {
        const e = t[0],
          n = e.contentRect.width,
          i = e.contentRect.height;
        (0 === n && 0 === i) || o(n, i);
      });
    return (
      s.observe(r),
      (function (t, e) {
        (rg.size || window.addEventListener('resize', sg), rg.set(t, e));
      })(t, o),
      s
    );
  }
  function lg(t, e, n) {
    (n && n.disconnect(),
      'resize' === e &&
        (function (t) {
          (rg.delete(t), rg.size || window.removeEventListener('resize', sg));
        })(t));
  }
  function ug(t, e, n) {
    const i = t.canvas,
      r = tf((e) => {
        null !== t.ctx &&
          n(
            (function (t, e) {
              const n = Gm[t.type] || t.type,
                { x: i, y: r } = kp(t, e);
              return {
                type: n,
                chart: e,
                native: t,
                x: void 0 !== i ? i : null,
                y: void 0 !== r ? r : null,
              };
            })(e, t),
          );
      }, t);
    return (
      (function (t, e, n) {
        t && t.addEventListener(e, n, Zm);
      })(i, e, r),
      r
    );
  }
  class cg extends Km {
    acquireContext(t, e) {
      const n = t && t.getContext && t.getContext('2d');
      return n && n.canvas === t
        ? ((function (t, e) {
            const n = t.style,
              i = t.getAttribute('height'),
              r = t.getAttribute('width');
            if (
              ((t[Qm] = {
                initial: {
                  height: i,
                  width: r,
                  style: {
                    display: n.display,
                    height: n.height,
                    width: n.width,
                  },
                },
              }),
              (n.display = n.display || 'block'),
              (n.boxSizing = n.boxSizing || 'border-box'),
              Jm(r))
            ) {
              const e = Tp(t, 'width');
              void 0 !== e && (t.width = e);
            }
            if (Jm(i))
              if ('' === t.style.height) t.height = t.width / (e || 2);
              else {
                const e = Tp(t, 'height');
                void 0 !== e && (t.height = e);
              }
          })(t, e),
          n)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Qm]) return !1;
      const n = e[Qm].initial;
      ['height', 'width'].forEach((t) => {
        const i = n[t];
        ed(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
      });
      const i = n.style || {};
      return (
        Object.keys(i).forEach((t) => {
          e.style[t] = i[t];
        }),
        (e.width = e.width),
        delete e[Qm],
        !0
      );
    }
    addEventListener(t, e, n) {
      this.removeEventListener(t, e);
      const i = t.$proxies || (t.$proxies = {}),
        r = { attach: ng, detach: ig, resize: ag }[e] || ug;
      i[e] = r(t, e, n);
    }
    removeEventListener(t, e) {
      const n = t.$proxies || (t.$proxies = {}),
        i = n[e];
      if (!i) return;
      ((({ attach: lg, detach: lg, resize: lg })[e] || tg)(t, e, i),
        (n[e] = void 0));
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, n, i) {
      return Pp(t, e, n, i);
    }
    isAttached(t) {
      const e = t && bp(t);
      return !(!e || !e.isConnected);
    }
  }
  class hg {
    constructor() {
      (Ct(this, 'x', void 0),
        Ct(this, 'y', void 0),
        Ct(this, 'active', !1),
        Ct(this, 'options', void 0),
        Ct(this, '$animations', void 0));
    }
    tooltipPosition(t) {
      const { x: e, y: n } = this.getProps(['x', 'y'], t);
      return { x: e, y: n };
    }
    hasValue() {
      return Ld(this.x) && Ld(this.y);
    }
    getProps(t, e) {
      const n = this.$animations;
      if (!e || !n) return this;
      const i = {};
      return (
        t.forEach((t) => {
          i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
        }),
        i
      );
    }
  }
  function dg(t, e) {
    const n = t.options.ticks,
      i = (function (t) {
        const e = t.options.offset,
          n = t._tickSize(),
          i = t._length / n + (e ? 0 : 1),
          r = t._maxLength / n;
        return Math.floor(Math.min(i, r));
      })(t),
      r = Math.min(n.maxTicksLimit || i, i),
      o = n.major.enabled
        ? (function (t) {
            const e = [];
            let n, i;
            for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
            return e;
          })(e)
        : [],
      s = o.length,
      a = o[0],
      l = o[s - 1],
      u = [];
    if (s > r)
      return (
        (function (t, e, n, i) {
          let r,
            o = 0,
            s = n[0];
          for (i = Math.ceil(i), r = 0; r < t.length; r++)
            r === s && (e.push(t[r]), o++, (s = n[o * i]));
        })(e, u, o, s / r),
        u
      );
    const c = (function (t, e, n) {
      const i = (function (t) {
          const e = t.length;
          let n, i;
          if (e < 2) return !1;
          for (i = t[0], n = 1; n < e; ++n)
            if (t[n] - t[n - 1] !== i) return !1;
          return i;
        })(t),
        r = e.length / n;
      if (!i) return Math.max(r, 1);
      const o = (function (t) {
        const e = [],
          n = Math.sqrt(t);
        let i;
        for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
        return (n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e);
      })(i);
      for (let s = 0, a = o.length - 1; s < a; s++) {
        const t = o[s];
        if (t > r) return t;
      }
      return Math.max(r, 1);
    })(o, e, r);
    if (s > 0) {
      let t, n;
      const i = s > 1 ? Math.round((l - a) / (s - 1)) : null;
      for (fg(e, u, c, ed(i) ? 0 : a - i, a), t = 0, n = s - 1; t < n; t++)
        fg(e, u, c, o[t], o[t + 1]);
      return (fg(e, u, c, l, ed(i) ? e.length : l + i), u);
    }
    return (fg(e, u, c), u);
  }
  function fg(t, e, n, i, r) {
    const o = sd(i, 0),
      s = Math.min(sd(r, t.length), t.length);
    let a,
      l,
      u,
      c = 0;
    for (
      n = Math.ceil(n), r && ((a = r - i), (n = a / Math.floor(a / n))), u = o;
      u < 0;

    )
      (c++, (u = Math.round(o + c * n)));
    for (l = Math.max(o, 0); l < s; l++)
      l === u && (e.push(t[l]), c++, (u = Math.round(o + c * n)));
  }
  (Ct(hg, 'defaults', {}), Ct(hg, 'defaultRoutes', void 0));
  const pg = (t, e, n) => ('top' === e || 'left' === e ? t[e] + n : t[e] - n),
    mg = (t, e) => Math.min(e || t, t);
  function gg(t, e) {
    const n = [],
      i = t.length / e,
      r = t.length;
    let o = 0;
    for (; o < r; o += i) n.push(t[Math.floor(o)]);
    return n;
  }
  function vg(t, e, n) {
    const i = t.ticks.length,
      r = Math.min(e, i - 1),
      o = t._startPixel,
      s = t._endPixel,
      a = 1e-6;
    let l,
      u = t.getPixelForTick(r);
    if (
      !(
        n &&
        ((l =
          1 === i
            ? Math.max(u - o, s - u)
            : 0 === e
              ? (t.getPixelForTick(1) - u) / 2
              : (u - t.getPixelForTick(r - 1)) / 2),
        (u += r < e ? l : -l),
        u < o - a || u > s + a)
      )
    )
      return u;
  }
  function yg(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function bg(t, e) {
    if (!t.display) return 0;
    const n = Kf(t.font, e),
      i = qf(t.padding);
    return (nd(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
  }
  function xg(t, e, n) {
    let i = ef(t);
    return (
      ((n && 'right' !== e) || (!n && 'right' === e)) &&
        (i = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(i)),
      i
    );
  }
  class wg extends hg {
    constructor(t) {
      (super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0));
    }
    init(t) {
      ((this.options = t.setContext(this.getContext())),
        (this.axis = t.axis),
        (this._userMin = this.parse(t.min)),
        (this._userMax = this.parse(t.max)),
        (this._suggestedMin = this.parse(t.suggestedMin)),
        (this._suggestedMax = this.parse(t.suggestedMax)));
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let {
        _userMin: t,
        _userMax: e,
        _suggestedMin: n,
        _suggestedMax: i,
      } = this;
      return (
        (t = od(t, Number.POSITIVE_INFINITY)),
        (e = od(e, Number.NEGATIVE_INFINITY)),
        (n = od(n, Number.POSITIVE_INFINITY)),
        (i = od(i, Number.NEGATIVE_INFINITY)),
        { min: od(t, n), max: od(e, i), minDefined: rd(t), maxDefined: rd(e) }
      );
    }
    getMinMax(t) {
      let e,
        { min: n, max: i, minDefined: r, maxDefined: o } = this.getUserBounds();
      if (r && o) return { min: n, max: i };
      const s = this.getMatchingVisibleMetas();
      for (let a = 0, l = s.length; a < l; ++a)
        ((e = s[a].controller.getMinMax(this, t)),
          r || (n = Math.min(n, e.min)),
          o || (i = Math.max(i, e.max)));
      return (
        (n = o && n > i ? i : n),
        (i = r && n > i ? n : i),
        { min: od(n, od(i, n)), max: od(i, od(n, i)) }
      );
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
        t.labels ||
        []
      );
    }
    getLabelItems() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.chart.chartArea;
      return (
        this._labelItems || (this._labelItems = this._computeLabelItems(t))
      );
    }
    beforeLayout() {
      ((this._cache = {}), (this._dataLimitsCached = !1));
    }
    beforeUpdate() {
      ld(this.options.beforeUpdate, [this]);
    }
    update(t, e, n) {
      const { beginAtZero: i, grace: r, ticks: o } = this.options,
        s = o.sampleSize;
      (this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = n =
          Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal()
          ? this.width + n.left + n.right
          : this.height + n.top + n.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = (function (t, e, n) {
            const { min: i, max: r } = t,
              o = ad(e, (r - i) / 2),
              s = (t, e) => (n && 0 === t ? 0 : t + e);
            return { min: s(i, -Math.abs(o)), max: s(r, o) };
          })(this, r, i)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks());
      const a = s < this.ticks.length;
      (this._convertTicksToLabels(a ? gg(this.ticks, s) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || 'auto' === o.source) &&
          ((this.ticks = dg(this, this.ticks)),
          (this._labelSizes = null),
          this.afterAutoSkip()),
        a && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate());
    }
    configure() {
      let t,
        e,
        n = this.options.reverse;
      (this.isHorizontal()
        ? ((t = this.left), (e = this.right))
        : ((t = this.top), (e = this.bottom), (n = !n)),
        (this._startPixel = t),
        (this._endPixel = e),
        (this._reversePixels = n),
        (this._length = e - t),
        (this._alignToPixels = this.options.alignToPixels));
    }
    afterUpdate() {
      ld(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      ld(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      (this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = 0),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = 0),
          (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0));
    }
    afterSetDimensions() {
      ld(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      (this.chart.notifyPlugins(t, this.getContext()),
        ld(this.options[t], [this]));
    }
    beforeDataLimits() {
      this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
      this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
      ld(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let n, i, r;
      for (n = 0, i = t.length; n < i; n++)
        ((r = t[n]), (r.label = ld(e.callback, [r.value, n, t], this)));
    }
    afterTickToLabelConversion() {
      ld(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      ld(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        n = mg(this.ticks.length, t.ticks.maxTicksLimit),
        i = e.minRotation || 0,
        r = e.maxRotation;
      let o,
        s,
        a,
        l = i;
      if (
        !this._isVisible() ||
        !e.display ||
        i >= r ||
        n <= 1 ||
        !this.isHorizontal()
      )
        return void (this.labelRotation = i);
      const u = this._getLabelSizes(),
        c = u.widest.width,
        h = u.highest.height,
        d = $d(this.chart.width - c, 0, this.maxWidth);
      ((o = t.offset ? this.maxWidth / n : d / (n - 1)),
        c + 6 > o &&
          ((o = d / (n - (t.offset ? 0.5 : 1))),
          (s =
            this.maxHeight -
            yg(t.grid) -
            e.padding -
            bg(t.title, this.chart.options.font)),
          (a = Math.sqrt(c * c + h * h)),
          (l = Id(
            Math.min(
              Math.asin($d((u.highest.height + 6) / o, -1, 1)),
              Math.asin($d(s / a, -1, 1)) - Math.asin($d(h / a, -1, 1)),
            ),
          )),
          (l = Math.max(i, Math.min(r, l)))),
        (this.labelRotation = l));
    }
    afterCalculateLabelRotation() {
      ld(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      ld(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: e,
          options: { ticks: n, title: i, grid: r },
        } = this,
        o = this._isVisible(),
        s = this.isHorizontal();
      if (o) {
        const o = bg(i, e.options.font);
        if (
          (s
            ? ((t.width = this.maxWidth), (t.height = yg(r) + o))
            : ((t.height = this.maxHeight), (t.width = yg(r) + o)),
          n.display && this.ticks.length)
        ) {
          const {
              first: e,
              last: i,
              widest: r,
              highest: o,
            } = this._getLabelSizes(),
            a = 2 * n.padding,
            l = jd(this.labelRotation),
            u = Math.cos(l),
            c = Math.sin(l);
          if (s) {
            const e = n.mirror ? 0 : c * r.width + u * o.height;
            t.height = Math.min(this.maxHeight, t.height + e + a);
          } else {
            const e = n.mirror ? 0 : u * r.width + c * o.height;
            t.width = Math.min(this.maxWidth, t.width + e + a);
          }
          this._calculatePadding(e, i, c, u);
        }
      }
      (this._handleMargins(),
        s
          ? ((this.width = this._length =
              e.width - this._margins.left - this._margins.right),
            (this.height = t.height))
          : ((this.width = t.width),
            (this.height = this._length =
              e.height - this._margins.top - this._margins.bottom)));
    }
    _calculatePadding(t, e, n, i) {
      const {
          ticks: { align: r, padding: o },
          position: s,
        } = this.options,
        a = 0 !== this.labelRotation,
        l = 'top' !== s && 'x' === this.axis;
      if (this.isHorizontal()) {
        const s = this.getPixelForTick(0) - this.left,
          u = this.right - this.getPixelForTick(this.ticks.length - 1);
        let c = 0,
          h = 0;
        (a
          ? l
            ? ((c = i * t.width), (h = n * e.height))
            : ((c = n * t.height), (h = i * e.width))
          : 'start' === r
            ? (h = e.width)
            : 'end' === r
              ? (c = t.width)
              : 'inner' !== r && ((c = t.width / 2), (h = e.width / 2)),
          (this.paddingLeft = Math.max(
            ((c - s + o) * this.width) / (this.width - s),
            0,
          )),
          (this.paddingRight = Math.max(
            ((h - u + o) * this.width) / (this.width - u),
            0,
          )));
      } else {
        let n = e.height / 2,
          i = t.height / 2;
        ('start' === r
          ? ((n = 0), (i = t.height))
          : 'end' === r && ((n = e.height), (i = 0)),
          (this.paddingTop = n + o),
          (this.paddingBottom = i + o));
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(
          this.paddingRight,
          this._margins.right,
        )),
        (this._margins.bottom = Math.max(
          this.paddingBottom,
          this._margins.bottom,
        )));
    }
    afterFit() {
      ld(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return 'top' === e || 'bottom' === e || 'x' === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      let e, n;
      for (
        this.beforeTickToLabelConversion(),
          this.generateTickLabels(t),
          e = 0,
          n = t.length;
        e < n;
        e++
      )
        ed(t[e].label) && (t.splice(e, 1), n--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let n = this.ticks;
        (e < n.length && (n = gg(n, e)),
          (this._labelSizes = t =
            this._computeLabelSizes(
              n,
              n.length,
              this.options.ticks.maxTicksLimit,
            )));
      }
      return t;
    }
    _computeLabelSizes(t, e, n) {
      const { ctx: i, _longestTextCache: r } = this,
        o = [],
        s = [],
        a = Math.floor(e / mg(e, n));
      let l,
        u,
        c,
        h,
        d,
        f,
        p,
        m,
        g,
        v,
        y,
        b = 0,
        x = 0;
      for (l = 0; l < e; l += a) {
        if (
          ((h = t[l].label),
          (d = this._resolveTickFontOptions(l)),
          (i.font = f = d.string),
          (p = r[f] = r[f] || { data: {}, gc: [] }),
          (m = d.lineHeight),
          (g = v = 0),
          ed(h) || nd(h))
        ) {
          if (nd(h))
            for (u = 0, c = h.length; u < c; ++u)
              ((y = h[u]),
                ed(y) || nd(y) || ((g = Ef(i, p.data, p.gc, g, y)), (v += m)));
        } else ((g = Ef(i, p.data, p.gc, g, h)), (v = m));
        (o.push(g), s.push(v), (b = Math.max(g, b)), (x = Math.max(v, x)));
      }
      !(function (t, e) {
        ud(t, (t) => {
          const n = t.gc,
            i = n.length / 2;
          let r;
          if (i > e) {
            for (r = 0; r < i; ++r) delete t.data[n[r]];
            n.splice(0, i);
          }
        });
      })(r, e);
      const w = o.indexOf(b),
        _ = s.indexOf(x),
        S = (t) => ({ width: o[t] || 0, height: s[t] || 0 });
      return {
        first: S(0),
        last: S(e - 1),
        widest: S(w),
        highest: S(_),
        widths: o,
        heights: s,
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return $d(this._alignToPixels ? Mf(this.chart, e, 0) : e, -32768, 32767);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return (
          n.$context ||
          (n.$context = (function (t, e, n) {
            return Qf(t, { tick: n, index: e, type: 'tick' });
          })(this.getContext(), t, n))
        );
      }
      return (
        this.$context ||
        (this.$context = (function (t, e) {
          return Qf(t, { scale: e, type: 'scale' });
        })(this.chart.getContext(), this))
      );
    }
    _tickSize() {
      const t = this.options.ticks,
        e = jd(this.labelRotation),
        n = Math.abs(Math.cos(e)),
        i = Math.abs(Math.sin(e)),
        r = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        s = r ? r.widest.width + o : 0,
        a = r ? r.highest.height + o : 0;
      return this.isHorizontal()
        ? a * n > s * i
          ? s / n
          : a / i
        : a * i < s * n
          ? a / n
          : s / i;
    }
    _isVisible() {
      const t = this.options.display;
      return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        n = this.chart,
        i = this.options,
        { grid: r, position: o, border: s } = i,
        a = r.offset,
        l = this.isHorizontal(),
        u = this.ticks.length + (a ? 1 : 0),
        c = yg(r),
        h = [],
        d = s.setContext(this.getContext()),
        f = d.display ? d.width : 0,
        p = f / 2,
        m = function (t) {
          return Mf(n, t, f);
        };
      let g, v, y, b, x, w, _, S, k, E, P, M;
      if ('top' === o)
        ((g = m(this.bottom)),
          (w = this.bottom - c),
          (S = g - p),
          (E = m(t.top) + p),
          (M = t.bottom));
      else if ('bottom' === o)
        ((g = m(this.top)),
          (E = t.top),
          (M = m(t.bottom) - p),
          (w = g + p),
          (S = this.top + c));
      else if ('left' === o)
        ((g = m(this.right)),
          (x = this.right - c),
          (_ = g - p),
          (k = m(t.left) + p),
          (P = t.right));
      else if ('right' === o)
        ((g = m(this.left)),
          (k = t.left),
          (P = m(t.right) - p),
          (x = g + p),
          (_ = this.left + c));
      else if ('x' === e) {
        if ('center' === o) g = m((t.top + t.bottom) / 2 + 0.5);
        else if (id(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          g = m(this.chart.scales[t].getPixelForValue(e));
        }
        ((E = t.top), (M = t.bottom), (w = g + p), (S = w + c));
      } else if ('y' === e) {
        if ('center' === o) g = m((t.left + t.right) / 2);
        else if (id(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          g = m(this.chart.scales[t].getPixelForValue(e));
        }
        ((x = g - p), (_ = x - c), (k = t.left), (P = t.right));
      }
      const C = sd(i.ticks.maxTicksLimit, u),
        T = Math.max(1, Math.ceil(u / C));
      for (v = 0; v < u; v += T) {
        const t = this.getContext(v),
          e = r.setContext(t),
          i = s.setContext(t),
          o = e.lineWidth,
          u = e.color,
          c = i.dash || [],
          d = i.dashOffset,
          f = e.tickWidth,
          p = e.tickColor,
          m = e.tickBorderDash || [],
          g = e.tickBorderDashOffset;
        ((y = vg(this, v, a)),
          void 0 !== y &&
            ((b = Mf(n, y, o)),
            l ? (x = _ = k = P = b) : (w = S = E = M = b),
            h.push({
              tx1: x,
              ty1: w,
              tx2: _,
              ty2: S,
              x1: k,
              y1: E,
              x2: P,
              y2: M,
              width: o,
              color: u,
              borderDash: c,
              borderDashOffset: d,
              tickWidth: f,
              tickColor: p,
              tickBorderDash: m,
              tickBorderDashOffset: g,
            })));
      }
      return ((this._ticksLength = u), (this._borderValue = g), h);
    }
    _computeLabelItems(t) {
      const e = this.axis,
        n = this.options,
        { position: i, ticks: r } = n,
        o = this.isHorizontal(),
        s = this.ticks,
        { align: a, crossAlign: l, padding: u, mirror: c } = r,
        h = yg(n.grid),
        d = h + u,
        f = c ? -u : d,
        p = -jd(this.labelRotation),
        m = [];
      let g,
        v,
        y,
        b,
        x,
        w,
        _,
        S,
        k,
        E,
        P,
        M,
        C = 'middle';
      if ('top' === i)
        ((w = this.bottom - f), (_ = this._getXAxisLabelAlignment()));
      else if ('bottom' === i)
        ((w = this.top + f), (_ = this._getXAxisLabelAlignment()));
      else if ('left' === i) {
        const t = this._getYAxisLabelAlignment(h);
        ((_ = t.textAlign), (x = t.x));
      } else if ('right' === i) {
        const t = this._getYAxisLabelAlignment(h);
        ((_ = t.textAlign), (x = t.x));
      } else if ('x' === e) {
        if ('center' === i) w = (t.top + t.bottom) / 2 + d;
        else if (id(i)) {
          const t = Object.keys(i)[0],
            e = i[t];
          w = this.chart.scales[t].getPixelForValue(e) + d;
        }
        _ = this._getXAxisLabelAlignment();
      } else if ('y' === e) {
        if ('center' === i) x = (t.left + t.right) / 2 - d;
        else if (id(i)) {
          const t = Object.keys(i)[0],
            e = i[t];
          x = this.chart.scales[t].getPixelForValue(e);
        }
        _ = this._getYAxisLabelAlignment(h).textAlign;
      }
      'y' === e &&
        ('start' === a ? (C = 'top') : 'end' === a && (C = 'bottom'));
      const T = this._getLabelSizes();
      for (g = 0, v = s.length; g < v; ++g) {
        ((y = s[g]), (b = y.label));
        const t = r.setContext(this.getContext(g));
        ((S = this.getPixelForTick(g) + r.labelOffset),
          (k = this._resolveTickFontOptions(g)),
          (E = k.lineHeight),
          (P = nd(b) ? b.length : 1));
        const e = P / 2,
          n = t.color,
          a = t.textStrokeColor,
          u = t.textStrokeWidth;
        let h,
          d = _;
        if (
          (o
            ? ((x = S),
              'inner' === _ &&
                (d =
                  g === v - 1
                    ? this.options.reverse
                      ? 'left'
                      : 'right'
                    : 0 === g
                      ? this.options.reverse
                        ? 'right'
                        : 'left'
                      : 'center'),
              (M =
                'top' === i
                  ? 'near' === l || 0 !== p
                    ? -P * E + E / 2
                    : 'center' === l
                      ? -T.highest.height / 2 - e * E + E
                      : -T.highest.height + E / 2
                  : 'near' === l || 0 !== p
                    ? E / 2
                    : 'center' === l
                      ? T.highest.height / 2 - e * E
                      : T.highest.height - P * E),
              c && (M *= -1),
              0 === p || t.showLabelBackdrop || (x += (E / 2) * Math.sin(p)))
            : ((w = S), (M = ((1 - P) * E) / 2)),
          t.showLabelBackdrop)
        ) {
          const e = qf(t.backdropPadding),
            n = T.heights[g],
            i = T.widths[g];
          let r = M - e.top,
            o = 0 - e.left;
          switch (C) {
            case 'middle':
              r -= n / 2;
              break;
            case 'bottom':
              r -= n;
          }
          switch (_) {
            case 'center':
              o -= i / 2;
              break;
            case 'right':
              o -= i;
              break;
            case 'inner':
              g === v - 1 ? (o -= i) : g > 0 && (o -= i / 2);
          }
          h = {
            left: o,
            top: r,
            width: i + e.width,
            height: n + e.height,
            color: t.backdropColor,
          };
        }
        m.push({
          label: b,
          font: k,
          textOffset: M,
          options: {
            rotation: p,
            color: n,
            strokeColor: a,
            strokeWidth: u,
            textAlign: d,
            textBaseline: C,
            translation: [x, w],
            backdrop: h,
          },
        });
      }
      return m;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-jd(this.labelRotation)) return 'top' === t ? 'left' : 'right';
      let n = 'center';
      return (
        'start' === e.align
          ? (n = 'left')
          : 'end' === e.align
            ? (n = 'right')
            : 'inner' === e.align && (n = 'inner'),
        n
      );
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: e,
          ticks: { crossAlign: n, mirror: i, padding: r },
        } = this.options,
        o = t + r,
        s = this._getLabelSizes().widest.width;
      let a, l;
      return (
        'left' === e
          ? i
            ? ((l = this.right + r),
              'near' === n
                ? (a = 'left')
                : 'center' === n
                  ? ((a = 'center'), (l += s / 2))
                  : ((a = 'right'), (l += s)))
            : ((l = this.right - o),
              'near' === n
                ? (a = 'right')
                : 'center' === n
                  ? ((a = 'center'), (l -= s / 2))
                  : ((a = 'left'), (l = this.left)))
          : 'right' === e
            ? i
              ? ((l = this.left + r),
                'near' === n
                  ? (a = 'right')
                  : 'center' === n
                    ? ((a = 'center'), (l -= s / 2))
                    : ((a = 'left'), (l -= s)))
              : ((l = this.left + o),
                'near' === n
                  ? (a = 'left')
                  : 'center' === n
                    ? ((a = 'center'), (l += s / 2))
                    : ((a = 'right'), (l = this.right)))
            : (a = 'right'),
        { textAlign: a, x: l }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      return 'left' === e || 'right' === e
        ? { top: 0, left: this.left, bottom: t.height, right: this.right }
        : 'top' === e || 'bottom' === e
          ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
          : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: n,
        top: i,
        width: r,
        height: o,
      } = this;
      e && (t.save(), (t.fillStyle = e), t.fillRect(n, i, r, o), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const n = this.ticks.findIndex((e) => e.value === t);
      if (n >= 0) {
        return e.setContext(this.getContext(n)).lineWidth;
      }
      return 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        n = this.ctx,
        i =
          this._gridLineItems ||
          (this._gridLineItems = this._computeGridLineItems(t));
      let r, o;
      const s = (t, e, i) => {
        i.width &&
          i.color &&
          (n.save(),
          (n.lineWidth = i.width),
          (n.strokeStyle = i.color),
          n.setLineDash(i.borderDash || []),
          (n.lineDashOffset = i.borderDashOffset),
          n.beginPath(),
          n.moveTo(t.x, t.y),
          n.lineTo(e.x, e.y),
          n.stroke(),
          n.restore());
      };
      if (e.display)
        for (r = 0, o = i.length; r < o; ++r) {
          const t = i[r];
          (e.drawOnChartArea &&
            s({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            e.drawTicks &&
              s(
                { x: t.tx1, y: t.ty1 },
                { x: t.tx2, y: t.ty2 },
                {
                  color: t.tickColor,
                  width: t.tickWidth,
                  borderDash: t.tickBorderDash,
                  borderDashOffset: t.tickBorderDashOffset,
                },
              ));
        }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: e,
          options: { border: n, grid: i },
        } = this,
        r = n.setContext(this.getContext()),
        o = n.display ? r.width : 0;
      if (!o) return;
      const s = i.setContext(this.getContext(0)).lineWidth,
        a = this._borderValue;
      let l, u, c, h;
      (this.isHorizontal()
        ? ((l = Mf(t, this.left, o) - o / 2),
          (u = Mf(t, this.right, s) + s / 2),
          (c = h = a))
        : ((c = Mf(t, this.top, o) - o / 2),
          (h = Mf(t, this.bottom, s) + s / 2),
          (l = u = a)),
        e.save(),
        (e.lineWidth = r.width),
        (e.strokeStyle = r.color),
        e.beginPath(),
        e.moveTo(l, c),
        e.lineTo(u, h),
        e.stroke(),
        e.restore());
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx,
        n = this._computeLabelArea();
      n && Of(e, n);
      const i = this.getLabelItems(t);
      for (const r of i) {
        const t = r.options,
          n = r.font;
        If(e, r.label, 0, r.textOffset, n, t);
      }
      n && Ff(e);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: n, reverse: i },
      } = this;
      if (!n.display) return;
      const r = Kf(n.font),
        o = qf(n.padding),
        s = n.align;
      let a = r.lineHeight / 2;
      'bottom' === e || 'center' === e || id(e)
        ? ((a += o.bottom),
          nd(n.text) && (a += r.lineHeight * (n.text.length - 1)))
        : (a += o.top);
      const {
        titleX: l,
        titleY: u,
        maxWidth: c,
        rotation: h,
      } = (function (t, e, n, i) {
        const { top: r, left: o, bottom: s, right: a, chart: l } = t,
          { chartArea: u, scales: c } = l;
        let h,
          d,
          f,
          p = 0;
        const m = s - r,
          g = a - o;
        if (t.isHorizontal()) {
          if (((d = nf(i, o, a)), id(n))) {
            const t = Object.keys(n)[0],
              i = n[t];
            f = c[t].getPixelForValue(i) + m - e;
          } else
            f = 'center' === n ? (u.bottom + u.top) / 2 + m - e : pg(t, n, e);
          h = a - o;
        } else {
          if (id(n)) {
            const t = Object.keys(n)[0],
              i = n[t];
            d = c[t].getPixelForValue(i) - g + e;
          } else
            d = 'center' === n ? (u.left + u.right) / 2 - g + e : pg(t, n, e);
          ((f = nf(i, s, r)), (p = 'left' === n ? -Cd : Cd));
        }
        return { titleX: d, titleY: f, maxWidth: h, rotation: p };
      })(this, a, e, s);
      If(t, n.text, 0, 0, r, {
        color: n.color,
        maxWidth: c,
        rotation: h,
        textAlign: xg(s, e, i),
        textBaseline: 'middle',
        translation: [l, u],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = (t.ticks && t.ticks.z) || 0,
        n = sd(t.grid && t.grid.z, -1),
        i = sd(t.border && t.border.z, 0);
      return this._isVisible() && this.draw === wg.prototype.draw
        ? [
            {
              z: n,
              draw: (t) => {
                (this.drawBackground(), this.drawGrid(t), this.drawTitle());
              },
            },
            {
              z: i,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: e,
              draw: (t) => {
                this.drawLabels(t);
              },
            },
          ]
        : [
            {
              z: e,
              draw: (t) => {
                this.draw(t);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        n = this.axis + 'AxisID',
        i = [];
      let r, o;
      for (r = 0, o = e.length; r < o; ++r) {
        const o = e[r];
        o[n] !== this.id || (t && o.type !== t) || i.push(o);
      }
      return i;
    }
    _resolveTickFontOptions(t) {
      return Kf(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class _g {
    constructor(t, e, n) {
      ((this.type = t),
        (this.scope = e),
        (this.override = n),
        (this.items = Object.create(null)));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(
        this.type.prototype,
        t.prototype,
      );
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let n;
      (function (t) {
        return 'id' in t && 'defaults' in t;
      })(e) && (n = this.register(e));
      const i = this.items,
        r = t.id,
        o = this.scope + '.' + r;
      if (!r) throw new Error('class does not have id: ' + t);
      return (
        r in i ||
          ((i[r] = t),
          (function (t, e, n) {
            const i = pd(Object.create(null), [
              n ? kf.get(n) : {},
              kf.get(e),
              t.defaults,
            ]);
            (kf.set(e, i),
              t.defaultRoutes &&
                (function (t, e) {
                  Object.keys(e).forEach((n) => {
                    const i = n.split('.'),
                      r = i.pop(),
                      o = [t].concat(i).join('.'),
                      s = e[n].split('.'),
                      a = s.pop(),
                      l = s.join('.');
                    kf.route(o, r, l, a);
                  });
                })(e, t.defaultRoutes));
            t.descriptors && kf.describe(e, t.descriptors);
          })(t, o, n),
          this.override && kf.override(t.id, t.overrides)),
        o
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        n = t.id,
        i = this.scope;
      (n in e && delete e[n],
        i && n in kf[i] && (delete kf[i][n], this.override && delete bf[n]));
    }
  }
  class Sg {
    constructor() {
      ((this.controllers = new _g(lm, 'datasets', !0)),
        (this.elements = new _g(hg, 'elements')),
        (this.plugins = new _g(Object, 'plugins')),
        (this.scales = new _g(wg, 'scales')),
        (this._typedRegistries = [
          this.controllers,
          this.scales,
          this.elements,
        ]));
    }
    add() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('register', e);
    }
    remove() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('unregister', e);
    }
    addControllers() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('register', e, this.controllers);
    }
    addElements() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('register', e, this.elements);
    }
    addPlugins() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('register', e, this.plugins);
    }
    addScales() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('register', e, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, 'controller');
    }
    getElement(t) {
      return this._get(t, this.elements, 'element');
    }
    getPlugin(t) {
      return this._get(t, this.plugins, 'plugin');
    }
    getScale(t) {
      return this._get(t, this.scales, 'scale');
    }
    removeControllers() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('unregister', e, this.controllers);
    }
    removeElements() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('unregister', e, this.elements);
    }
    removePlugins() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('unregister', e, this.plugins);
    }
    removeScales() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      this._each('unregister', e, this.scales);
    }
    _each(t, e, n) {
      [...e].forEach((e) => {
        const i = n || this._getRegistryForType(e);
        n || i.isForType(e) || (i === this.plugins && e.id)
          ? this._exec(t, i, e)
          : ud(e, (e) => {
              const i = n || this._getRegistryForType(e);
              this._exec(t, i, e);
            });
      });
    }
    _exec(t, e, n) {
      const i = bd(t);
      (ld(n['before' + i], [], n), e[t](n), ld(n['after' + i], [], n));
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const n = this._typedRegistries[e];
        if (n.isForType(t)) return n;
      }
      return this.plugins;
    }
    _get(t, e, n) {
      const i = e.get(t);
      if (void 0 === i)
        throw new Error('"' + t + '" is not a registered ' + n + '.');
      return i;
    }
  }
  var kg = new Sg();
  class Eg {
    constructor() {
      this._init = [];
    }
    notify(t, e, n, i) {
      'beforeInit' === e &&
        ((this._init = this._createDescriptors(t, !0)),
        this._notify(this._init, t, 'install'));
      const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
        o = this._notify(r, t, e, n);
      return (
        'afterDestroy' === e &&
          (this._notify(r, t, 'stop'),
          this._notify(this._init, t, 'uninstall')),
        o
      );
    }
    _notify(t, e, n, i) {
      i = i || {};
      for (const r of t) {
        const t = r.plugin;
        if (!1 === ld(t[n], [e, i, r.options], t) && i.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      ed(this._cache) ||
        ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return (this._notifyStateChanges(t), e);
    }
    _createDescriptors(t, e) {
      const n = t && t.config,
        i = sd(n.options && n.options.plugins, {}),
        r = (function (t) {
          const e = {},
            n = [],
            i = Object.keys(kg.plugins.items);
          for (let o = 0; o < i.length; o++) n.push(kg.getPlugin(i[o]));
          const r = t.plugins || [];
          for (let o = 0; o < r.length; o++) {
            const t = r[o];
            -1 === n.indexOf(t) && (n.push(t), (e[t.id] = !0));
          }
          return { plugins: n, localIds: e };
        })(n);
      return !1 !== i || e
        ? (function (t, e, n, i) {
            let { plugins: r, localIds: o } = e;
            const s = [],
              a = t.getContext();
            for (const l of r) {
              const e = l.id,
                r = Pg(n[e], i);
              null !== r &&
                s.push({
                  plugin: l,
                  options: Mg(t.config, { plugin: l, local: o[e] }, r, a),
                });
            }
            return s;
          })(t, r, i, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        n = this._cache,
        i = (t, e) =>
          t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      (this._notify(i(e, n), t, 'stop'), this._notify(i(n, e), t, 'start'));
    }
  }
  function Pg(t, e) {
    return e || !1 !== t ? (!0 === t ? {} : t) : null;
  }
  function Mg(t, e, n, i) {
    let { plugin: r, local: o } = e;
    const s = t.pluginScopeKeys(r),
      a = t.getOptionScopes(n, s);
    return (
      o && r.defaults && a.push(r.defaults),
      t.createResolver(a, i, [''], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      })
    );
  }
  function Cg(t, e) {
    const n = kf.datasets[t] || {};
    return (
      ((e.datasets || {})[t] || {}).indexAxis ||
      e.indexAxis ||
      n.indexAxis ||
      'x'
    );
  }
  function Tg(t) {
    if ('x' === t || 'y' === t || 'r' === t) return t;
  }
  function Dg(t) {
    return 'top' === t || 'bottom' === t
      ? 'x'
      : 'left' === t || 'right' === t
        ? 'y'
        : void 0;
  }
  function Ag(t) {
    if (Tg(t)) return t;
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
      i < e;
      i++
    )
      n[i - 1] = arguments[i];
    for (const r of n) {
      const e =
        r.axis || Dg(r.position) || (t.length > 1 && Tg(t[0].toLowerCase()));
      if (e) return e;
    }
    throw new Error(
      "Cannot determine type of '".concat(
        t,
        "' axis. Please provide 'axis' or 'position' option.",
      ),
    );
  }
  function Og(t, e, n) {
    if (n[e + 'AxisID'] === t) return { axis: e };
  }
  function Fg(t, e) {
    const n = bf[t.type] || { scales: {} },
      i = e.scales || {},
      r = Cg(t.type, e),
      o = Object.create(null);
    return (
      Object.keys(i).forEach((e) => {
        const s = i[e];
        if (!id(s))
          return console.error(
            'Invalid scale configuration for scale: '.concat(e),
          );
        if (s._proxy)
          return console.warn(
            'Ignoring resolver passed as options for scale: '.concat(e),
          );
        const a = Ag(
            e,
            s,
            (function (t, e) {
              if (e.data && e.data.datasets) {
                const n = e.data.datasets.filter(
                  (e) => e.xAxisID === t || e.yAxisID === t,
                );
                if (n.length) return Og(t, 'x', n[0]) || Og(t, 'y', n[0]);
              }
              return {};
            })(e, t),
            kf.scales[s.type],
          ),
          l = (function (t, e) {
            return t === e ? '_index_' : '_value_';
          })(a, r),
          u = n.scales || {};
        o[e] = md(Object.create(null), [{ axis: a }, s, u[a], u[l]]);
      }),
      t.data.datasets.forEach((n) => {
        const r = n.type || t.type,
          s = n.indexAxis || Cg(r, e),
          a = (bf[r] || {}).scales || {};
        Object.keys(a).forEach((t) => {
          const e = (function (t, e) {
              let n = t;
              return (
                '_index_' === t
                  ? (n = e)
                  : '_value_' === t && (n = 'x' === e ? 'y' : 'x'),
                n
              );
            })(t, s),
            r = n[e + 'AxisID'] || e;
          ((o[r] = o[r] || Object.create(null)),
            md(o[r], [{ axis: e }, i[r], a[t]]));
        });
      }),
      Object.keys(o).forEach((t) => {
        const e = o[t];
        md(e, [kf.scales[e.type], kf.scale]);
      }),
      o
    );
  }
  function Rg(t) {
    const e = t.options || (t.options = {});
    ((e.plugins = sd(e.plugins, {})), (e.scales = Fg(t, e)));
  }
  function Lg(t) {
    return (
      ((t = t || {}).datasets = t.datasets || []),
      (t.labels = t.labels || []),
      t
    );
  }
  const Ng = new Map(),
    jg = new Set();
  function Ig(t, e) {
    let n = Ng.get(t);
    return (n || ((n = e()), Ng.set(t, n), jg.add(n)), n);
  }
  const zg = (t, e, n) => {
    const i = yd(e, n);
    void 0 !== i && t.add(i);
  };
  class Vg {
    constructor(t) {
      ((this._config = (function (t) {
        return (((t = t || {}).data = Lg(t.data)), Rg(t), t);
      })(t)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map()));
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = Lg(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      (this.clearCache(), Rg(t));
    }
    clearCache() {
      (this._scopeCache.clear(), this._resolverCache.clear());
    }
    datasetScopeKeys(t) {
      return Ig(t, () => [['datasets.'.concat(t), '']]);
    }
    datasetAnimationScopeKeys(t, e) {
      return Ig(''.concat(t, '.transition.').concat(e), () => [
        [
          'datasets.'.concat(t, '.transitions.').concat(e),
          'transitions.'.concat(e),
        ],
        ['datasets.'.concat(t), ''],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return Ig(''.concat(t, '-').concat(e), () => [
        [
          'datasets.'.concat(t, '.elements.').concat(e),
          'datasets.'.concat(t),
          'elements.'.concat(e),
          '',
        ],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id,
        n = this.type;
      return Ig(''.concat(n, '-plugin-').concat(e), () => [
        ['plugins.'.concat(e), ...(t.additionalOptionScopes || [])],
      ]);
    }
    _cachedScopes(t, e) {
      const n = this._scopeCache;
      let i = n.get(t);
      return ((i && !e) || ((i = new Map()), n.set(t, i)), i);
    }
    getOptionScopes(t, e, n) {
      const { options: i, type: r } = this,
        o = this._cachedScopes(t, n),
        s = o.get(e);
      if (s) return s;
      const a = new Set();
      e.forEach((e) => {
        (t && (a.add(t), e.forEach((e) => zg(a, t, e))),
          e.forEach((t) => zg(a, i, t)),
          e.forEach((t) => zg(a, bf[r] || {}, t)),
          e.forEach((t) => zg(a, kf, t)),
          e.forEach((t) => zg(a, xf, t)));
      });
      const l = Array.from(a);
      return (
        0 === l.length && l.push(Object.create(null)),
        jg.has(e) && o.set(e, l),
        l
      );
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, bf[e] || {}, kf.datasets[e] || {}, { type: e }, kf, xf];
    }
    resolveNamedOptions(t, e, n) {
      let i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [''];
      const r = { $shared: !0 },
        { resolver: o, subPrefixes: s } = Bg(this._resolverCache, t, i);
      let a = o;
      if (
        (function (t, e) {
          const { isScriptable: n, isIndexable: i } = Zf(t);
          for (const r of e) {
            const e = n(r),
              o = i(r),
              s = (o || e) && t[r];
            if ((e && (wd(s) || Ug(s))) || (o && nd(s))) return !0;
          }
          return !1;
        })(o, e)
      ) {
        r.$shared = !1;
        a = Jf(o, (n = wd(n) ? n() : n), this.createResolver(t, n, s));
      }
      for (const l of e) r[l] = a[l];
      return r;
    }
    createResolver(t, e) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [''],
        i = arguments.length > 3 ? arguments[3] : void 0;
      const { resolver: r } = Bg(this._resolverCache, t, n);
      return id(e) ? Jf(r, e, void 0, i) : r;
    }
  }
  function Bg(t, e, n) {
    let i = t.get(e);
    i || ((i = new Map()), t.set(e, i));
    const r = n.join();
    let o = i.get(r);
    if (!o) {
      ((o = {
        resolver: Gf(e, n),
        subPrefixes: n.filter((t) => !t.toLowerCase().includes('hover')),
      }),
        i.set(r, o));
    }
    return o;
  }
  const Ug = (t) =>
    id(t) && Object.getOwnPropertyNames(t).some((e) => wd(t[e]));
  const Wg = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function Hg(t, e) {
    return 'top' === t || 'bottom' === t || (-1 === Wg.indexOf(t) && 'x' === e);
  }
  function $g(t, e) {
    return function (n, i) {
      return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
  }
  function Yg(t) {
    const e = t.chart,
      n = e.options.animation;
    (e.notifyPlugins('afterRender'), ld(n && n.onComplete, [t], e));
  }
  function qg(t) {
    const e = t.chart,
      n = e.options.animation;
    ld(n && n.onProgress, [t], e);
  }
  function Kg(t) {
    return (
      yp() && 'string' === typeof t
        ? (t = document.getElementById(t))
        : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const Xg = {},
    Qg = (t) => {
      const e = Kg(t);
      return Object.values(Xg)
        .filter((t) => t.canvas === e)
        .pop();
    };
  function Gg(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
      const i = +r;
      if (i >= e) {
        const o = t[r];
        (delete t[r], (n > 0 || i > e) && (t[i + n] = o));
      }
    }
  }
  class Jg {
    static register() {
      (kg.add(...arguments), Zg());
    }
    static unregister() {
      (kg.remove(...arguments), Zg());
    }
    constructor(t, e) {
      const n = (this.config = new Vg(e)),
        i = Kg(t),
        r = Qg(i);
      if (r)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            r.id +
            "' must be destroyed before the canvas with ID '" +
            r.canvas.id +
            "' can be reused.",
        );
      const o = n.createResolver(n.chartOptionScopes(), this.getContext());
      ((this.platform = new (n.platform ||
        (function (t) {
          return !yp() ||
            ('undefined' !== typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas)
            ? Xm
            : cg;
        })(i))()),
        this.platform.updateConfig(n));
      const s = this.platform.acquireContext(i, o.aspectRatio),
        a = s && s.canvas,
        l = a && a.height,
        u = a && a.width;
      ((this.id = td()),
        (this.ctx = s),
        (this.canvas = a),
        (this.width = u),
        (this.height = l),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Eg()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = (function (t, e) {
          let n;
          return function () {
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              e
                ? (clearTimeout(n), (n = setTimeout(t, e, r)))
                : t.apply(this, r),
              e
            );
          };
        })((t) => this.update(t), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Xg[this.id] = this),
        s && a
          ? (Yp.listen(this, 'complete', Yg),
            Yp.listen(this, 'progress', qg),
            this._initialize(),
            this.attached && this.update())
          : console.error(
              "Failed to create chart: can't acquire context from the given item",
            ));
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: n,
        height: i,
        _aspectRatio: r,
      } = this;
      return ed(t) ? (e && r ? r : i ? n / i : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return kg;
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive
          ? this.resize()
          : Mp(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      );
    }
    clear() {
      return (Cf(this.canvas, this.ctx), this);
    }
    stop() {
      return (Yp.stop(this), this);
    }
    resize(t, e) {
      Yp.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: e })
        : this._resize(t, e);
    }
    _resize(t, e) {
      const n = this.options,
        i = this.canvas,
        r = n.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(i, t, e, r),
        s = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        a = this.width ? 'resize' : 'attach';
      ((this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        Mp(this, s, !0) &&
          (this.notifyPlugins('resize', { size: o }),
          ld(n.onResize, [this, o], this),
          this.attached && this._doResize(a) && this.render()));
    }
    ensureScalesHaveIDs() {
      ud(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        n = this.scales,
        i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
      let r = [];
      (e &&
        (r = r.concat(
          Object.keys(e).map((t) => {
            const n = e[t],
              i = Ag(t, n),
              r = 'r' === i,
              o = 'x' === i;
            return {
              options: n,
              dposition: r ? 'chartArea' : o ? 'bottom' : 'left',
              dtype: r ? 'radialLinear' : o ? 'category' : 'linear',
            };
          }),
        )),
        ud(r, (e) => {
          const r = e.options,
            o = r.id,
            s = Ag(o, r),
            a = sd(r.type, e.dtype);
          ((void 0 !== r.position && Hg(r.position, s) === Hg(e.dposition)) ||
            (r.position = e.dposition),
            (i[o] = !0));
          let l = null;
          if (o in n && n[o].type === a) l = n[o];
          else {
            ((l = new (kg.getScale(a))({
              id: o,
              type: a,
              ctx: this.ctx,
              chart: this,
            })),
              (n[l.id] = l));
          }
          l.init(r, t);
        }),
        ud(i, (t, e) => {
          t || delete n[e];
        }),
        ud(n, (t) => {
          (qm.configure(this, t, t.options), qm.addBox(this, t));
        }));
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        n = t.length;
      if ((t.sort((t, e) => t.index - e.index), n > e)) {
        for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
        t.splice(e, n - e);
      }
      this._sortedMetasets = t.slice(0).sort($g('order', 'index'));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: e },
      } = this;
      (t.length > e.length && delete this._stacks,
        t.forEach((t, n) => {
          0 === e.filter((e) => e === t._dataset).length &&
            this._destroyDatasetMeta(n);
        }));
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let n, i;
      for (
        this._removeUnreferencedMetasets(), n = 0, i = e.length;
        n < i;
        n++
      ) {
        const i = e[n];
        let r = this.getDatasetMeta(n);
        const o = i.type || this.config.type;
        if (
          (r.type &&
            r.type !== o &&
            (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
          (r.type = o),
          (r.indexAxis = i.indexAxis || Cg(o, this.options)),
          (r.order = i.order || 0),
          (r.index = n),
          (r.label = '' + i.label),
          (r.visible = this.isDatasetVisible(n)),
          r.controller)
        )
          (r.controller.updateIndex(n), r.controller.linkScales());
        else {
          const e = kg.getController(o),
            { datasetElementType: i, dataElementType: s } = kf.datasets[o];
          (Object.assign(e, {
            dataElementType: kg.getElement(s),
            datasetElementType: i && kg.getElement(i),
          }),
            (r.controller = new e(this, n)),
            t.push(r.controller));
        }
      }
      return (this._updateMetasets(), t);
    }
    _resetElements() {
      ud(
        this.data.datasets,
        (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        },
        this,
      );
    }
    reset() {
      (this._resetElements(), this.notifyPlugins('reset'));
    }
    update(t) {
      const e = this.config;
      e.update();
      const n = (this._options = e.createResolver(
          e.chartOptionScopes(),
          this.getContext(),
        )),
        i = (this._animationsDisabled = !n.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        !1 === this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
      )
        return;
      const r = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let o = 0;
      for (let l = 0, u = this.data.datasets.length; l < u; l++) {
        const { controller: t } = this.getDatasetMeta(l),
          e = !i && -1 === r.indexOf(t);
        (t.buildOrUpdateElements(e), (o = Math.max(+t.getMaxOverflow(), o)));
      }
      ((o = this._minPadding = n.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        i ||
          ud(r, (t) => {
            t.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', { mode: t }),
        this._layers.sort($g('z', '_idx')));
      const { _active: s, _lastEvent: a } = this;
      (a
        ? this._eventHandler(a, !0)
        : s.length && this._updateHoverStyles(s, s, !0),
        this.render());
    }
    _updateScales() {
      (ud(this.scales, (t) => {
        qm.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales());
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      (_d(e, n) && !!this._responsiveListeners === t.responsive) ||
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: n, start: i, count: r } of e) {
        Gg(t, i, '_removeElements' === n ? -r : r);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        n = (e) =>
          new Set(
            t
              .filter((t) => t[0] === e)
              .map((t, e) => e + ',' + t.splice(1).join(',')),
          ),
        i = n(0);
      for (let r = 1; r < e; r++) if (!_d(i, n(r))) return;
      return Array.from(i)
        .map((t) => t.split(','))
        .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 })) return;
      qm.update(this, this.width, this.height, t);
      const e = this.chartArea,
        n = e.width <= 0 || e.height <= 0;
      ((this._layers = []),
        ud(
          this.boxes,
          (t) => {
            (n && 'chartArea' === t.position) ||
              (t.configure && t.configure(), this._layers.push(...t._layers()));
          },
          this,
        ),
        this._layers.forEach((t, e) => {
          t._idx = e;
        }),
        this.notifyPlugins('afterLayout'));
    }
    _updateDatasets(t) {
      if (
        !1 !==
        this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })
      ) {
        for (let t = 0, e = this.data.datasets.length; t < e; ++t)
          this.getDatasetMeta(t).controller.configure();
        for (let e = 0, n = this.data.datasets.length; e < n; ++e)
          this._updateDataset(e, wd(t) ? t({ datasetIndex: e }) : t);
        this.notifyPlugins('afterDatasetsUpdate', { mode: t });
      }
    }
    _updateDataset(t, e) {
      const n = this.getDatasetMeta(t),
        i = { meta: n, index: t, mode: e, cancelable: !0 };
      !1 !== this.notifyPlugins('beforeDatasetUpdate', i) &&
        (n.controller._update(e),
        (i.cancelable = !1),
        this.notifyPlugins('afterDatasetUpdate', i));
    }
    render() {
      !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
        (Yp.has(this)
          ? this.attached && !Yp.running(this) && Yp.start(this)
          : (this.draw(), Yg({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: t, height: e } = this._resizeBeforeDraw;
        ((this._resizeBeforeDraw = null), this._resize(t, e));
      }
      if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
      if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        n = [];
      let i, r;
      for (i = 0, r = e.length; i < r; ++i) {
        const r = e[i];
        (t && !r.visible) || n.push(r);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }))
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(t) {
      const e = this.ctx,
        n = { meta: t, index: t.index, cancelable: !0 },
        i = Hp(this, t);
      !1 !== this.notifyPlugins('beforeDatasetDraw', n) &&
        (i && Of(e, i),
        t.controller.draw(),
        i && Ff(e),
        (n.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', n));
    }
    isPointInArea(t) {
      return Af(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, n, i) {
      const r = Rm.modes[e];
      return 'function' === typeof r ? r(this, t, n, i) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        n = this._metasets;
      let i = n.filter((t) => t && t._dataset === e).pop();
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (e && e.order) || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1,
          }),
          n.push(i)),
        i
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Qf(null, { chart: this, type: 'chart' }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const n = this.getDatasetMeta(t);
      return 'boolean' === typeof n.hidden ? !n.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, n) {
      const i = n ? 'show' : 'hide',
        r = this.getDatasetMeta(t),
        o = r.controller._resolveAnimations(void 0, i);
      xd(e)
        ? ((r.data[e].hidden = !n), this.update())
        : (this.setDatasetVisibility(t, n),
          o.update(r, { visible: n }),
          this.update((e) => (e.datasetIndex === t ? i : void 0)));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      (e && e.controller && e.controller._destroy(), delete this._metasets[t]);
    }
    _stop() {
      let t, e;
      for (
        this.stop(), Yp.remove(this), t = 0, e = this.data.datasets.length;
        t < e;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins('beforeDestroy');
      const { canvas: t, ctx: e } = this;
      (this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Cf(t, e),
          this.platform.releaseContext(e),
          (this.canvas = null),
          (this.ctx = null)),
        delete Xg[this.id],
        this.notifyPlugins('afterDestroy'));
    }
    toBase64Image() {
      return this.canvas.toDataURL(...arguments);
    }
    bindEvents() {
      (this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0));
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        n = (n, i) => {
          (e.addEventListener(this, n, i), (t[n] = i));
        },
        i = (t, e, n) => {
          ((t.offsetX = e), (t.offsetY = n), this._eventHandler(t));
        };
      ud(this.options.events, (t) => n(t, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        n = (n, i) => {
          (e.addEventListener(this, n, i), (t[n] = i));
        },
        i = (n, i) => {
          t[n] && (e.removeEventListener(this, n, i), delete t[n]);
        },
        r = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let o;
      const s = () => {
        (i('attach', s),
          (this.attached = !0),
          this.resize(),
          n('resize', r),
          n('detach', o));
      };
      ((o = () => {
        ((this.attached = !1),
          i('resize', r),
          this._stop(),
          this._resize(0, 0),
          n('attach', s));
      }),
        e.isAttached(this.canvas) ? s() : o());
    }
    unbindEvents() {
      (ud(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        (this._listeners = {}),
        ud(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        (this._responsiveListeners = void 0));
    }
    updateHoverStyle(t, e, n) {
      const i = n ? 'set' : 'remove';
      let r, o, s, a;
      for (
        'dataset' === e &&
          ((r = this.getDatasetMeta(t[0].datasetIndex)),
          r.controller['_' + i + 'DatasetHoverStyle']()),
          s = 0,
          a = t.length;
        s < a;
        ++s
      ) {
        o = t[s];
        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
        e && e[i + 'HoverStyle'](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        n = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const i = this.getDatasetMeta(e);
          if (!i) throw new Error('No dataset found at index ' + e);
          return { datasetIndex: e, element: i.data[n], index: n };
        });
      !cd(n, e) &&
        ((this._active = n),
        (this._lastEvent = null),
        this._updateHoverStyles(n, e));
    }
    notifyPlugins(t, e, n) {
      return this._plugins.notify(this, t, e, n);
    }
    isPluginEnabled(t) {
      return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
    }
    _updateHoverStyles(t, e, n) {
      const i = this.options.hover,
        r = (t, e) =>
          t.filter(
            (t) =>
              !e.some(
                (e) => t.datasetIndex === e.datasetIndex && t.index === e.index,
              ),
          ),
        o = r(e, t),
        s = n ? t : r(t, e);
      (o.length && this.updateHoverStyle(o, i.mode, !1),
        s.length && i.mode && this.updateHoverStyle(s, i.mode, !0));
    }
    _eventHandler(t, e) {
      const n = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = (e) =>
          (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins('beforeEvent', n, i)) return;
      const r = this._handleEvent(t, e, n.inChartArea);
      return (
        (n.cancelable = !1),
        this.notifyPlugins('afterEvent', n, i),
        (r || n.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, e, n) {
      const { _active: i = [], options: r } = this,
        o = e,
        s = this._getActiveElements(t, i, n, o),
        a = (function (t) {
          return (
            'mouseup' === t.type ||
            'click' === t.type ||
            'contextmenu' === t.type
          );
        })(t),
        l = (function (t, e, n, i) {
          return n && 'mouseout' !== t.type ? (i ? e : t) : null;
        })(t, this._lastEvent, n, a);
      n &&
        ((this._lastEvent = null),
        ld(r.onHover, [t, s, this], this),
        a && ld(r.onClick, [t, s, this], this));
      const u = !cd(s, i);
      return (
        (u || e) && ((this._active = s), this._updateHoverStyles(s, i, e)),
        (this._lastEvent = l),
        u
      );
    }
    _getActiveElements(t, e, n, i) {
      if ('mouseout' === t.type) return [];
      if (!n) return e;
      const r = this.options.hover;
      return this.getElementsAtEventForMode(t, r.mode, r, i);
    }
  }
  function Zg() {
    return ud(Jg.instances, (t) => t._plugins.invalidate());
  }
  function tv(t, e, n, i) {
    const r = Hf(t.options.borderRadius, [
      'outerStart',
      'outerEnd',
      'innerStart',
      'innerEnd',
    ]);
    const o = (n - e) / 2,
      s = Math.min(o, (i * e) / 2),
      a = (t) => {
        const e = ((n - Math.min(o, t)) * i) / 2;
        return $d(t, 0, Math.min(o, e));
      };
    return {
      outerStart: a(r.outerStart),
      outerEnd: a(r.outerEnd),
      innerStart: $d(r.innerStart, 0, s),
      innerEnd: $d(r.innerEnd, 0, s),
    };
  }
  function ev(t, e, n, i) {
    return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
  }
  function nv(t, e, n, i, r, o) {
    const { x: s, y: a, startAngle: l, pixelMargin: u, innerRadius: c } = e,
      h = Math.max(e.outerRadius + i + n - u, 0),
      d = c > 0 ? c + i + n + u : 0;
    let f = 0;
    const p = r - l;
    if (i) {
      const t = ((c > 0 ? c - i : 0) + (h > 0 ? h - i : 0)) / 2;
      f = (p - (0 !== t ? (p * t) / (t + i) : p)) / 2;
    }
    const m = (p - Math.max(0.001, p * h - n / Sd) / h) / 2,
      g = l + m + f,
      v = r - m - f,
      {
        outerStart: y,
        outerEnd: b,
        innerStart: x,
        innerEnd: w,
      } = tv(e, d, h, v - g),
      _ = h - y,
      S = h - b,
      k = g + y / _,
      E = v - b / S,
      P = d + x,
      M = d + w,
      C = g + x / P,
      T = v - w / M;
    if ((t.beginPath(), o)) {
      const e = (k + E) / 2;
      if ((t.arc(s, a, h, k, e), t.arc(s, a, h, e, E), b > 0)) {
        const e = ev(S, E, s, a);
        t.arc(e.x, e.y, b, E, v + Cd);
      }
      const n = ev(M, v, s, a);
      if ((t.lineTo(n.x, n.y), w > 0)) {
        const e = ev(M, T, s, a);
        t.arc(e.x, e.y, w, v + Cd, T + Math.PI);
      }
      const i = (v - w / d + (g + x / d)) / 2;
      if (
        (t.arc(s, a, d, v - w / d, i, !0),
        t.arc(s, a, d, i, g + x / d, !0),
        x > 0)
      ) {
        const e = ev(P, C, s, a);
        t.arc(e.x, e.y, x, C + Math.PI, g - Cd);
      }
      const r = ev(_, g, s, a);
      if ((t.lineTo(r.x, r.y), y > 0)) {
        const e = ev(_, k, s, a);
        t.arc(e.x, e.y, y, g - Cd, k);
      }
    } else {
      t.moveTo(s, a);
      const e = Math.cos(k) * h + s,
        n = Math.sin(k) * h + a;
      t.lineTo(e, n);
      const i = Math.cos(E) * h + s,
        r = Math.sin(E) * h + a;
      t.lineTo(i, r);
    }
    t.closePath();
  }
  function iv(t, e, n, i, r) {
    const { fullCircles: o, startAngle: s, circumference: a, options: l } = e,
      {
        borderWidth: u,
        borderJoinStyle: c,
        borderDash: h,
        borderDashOffset: d,
        borderRadius: f,
      } = l,
      p = 'inner' === l.borderAlign;
    if (!u) return;
    (t.setLineDash(h || []),
      (t.lineDashOffset = d),
      p
        ? ((t.lineWidth = 2 * u), (t.lineJoin = c || 'round'))
        : ((t.lineWidth = u), (t.lineJoin = c || 'bevel')));
    let m = e.endAngle;
    if (o) {
      nv(t, e, n, i, m, r);
      for (let e = 0; e < o; ++e) t.stroke();
      isNaN(a) || (m = s + (a % kd || kd));
    }
    (p &&
      (function (t, e, n) {
        const {
          startAngle: i,
          pixelMargin: r,
          x: o,
          y: s,
          outerRadius: a,
          innerRadius: l,
        } = e;
        let u = r / a;
        (t.beginPath(),
          t.arc(o, s, a, i - u, n + u),
          l > r
            ? ((u = r / l), t.arc(o, s, l, n + u, i - u, !0))
            : t.arc(o, s, r, n + Cd, i - Cd),
          t.closePath(),
          t.clip());
      })(t, e, m),
      l.selfJoin &&
        m - s >= Sd &&
        0 === f &&
        'miter' !== c &&
        (function (t, e, n) {
          const {
              startAngle: i,
              x: r,
              y: o,
              outerRadius: s,
              innerRadius: a,
              options: l,
            } = e,
            { borderWidth: u, borderJoinStyle: c } = l,
            h = Math.min(u / s, Wd(i - n));
          if (
            (t.beginPath(), t.arc(r, o, s - u / 2, i + h / 2, n - h / 2), a > 0)
          ) {
            const e = Math.min(u / a, Wd(i - n));
            t.arc(r, o, a + u / 2, n - e / 2, i + e / 2, !0);
          } else {
            const e = Math.min(u / 2, s * Wd(i - n));
            if ('round' === c) t.arc(r, o, e, n - Sd / 2, i + Sd / 2, !0);
            else if ('bevel' === c) {
              const s = 2 * e * e,
                a = -s * Math.cos(n + Sd / 2) + r,
                l = -s * Math.sin(n + Sd / 2) + o,
                u = s * Math.cos(i + Sd / 2) + r,
                c = s * Math.sin(i + Sd / 2) + o;
              (t.lineTo(a, l), t.lineTo(u, c));
            }
          }
          (t.closePath(),
            t.moveTo(0, 0),
            t.rect(0, 0, t.canvas.width, t.canvas.height),
            t.clip('evenodd'));
        })(t, e, m),
      o || (nv(t, e, n, i, m, r), t.stroke()));
  }
  (Ct(Jg, 'defaults', kf),
    Ct(Jg, 'instances', Xg),
    Ct(Jg, 'overrides', bf),
    Ct(Jg, 'registry', kg),
    Ct(Jg, 'version', '4.5.0'),
    Ct(Jg, 'getChart', Qg));
  class rv extends hg {
    constructor(t) {
      (super(),
        Ct(this, 'circumference', void 0),
        Ct(this, 'endAngle', void 0),
        Ct(this, 'fullCircles', void 0),
        Ct(this, 'innerRadius', void 0),
        Ct(this, 'outerRadius', void 0),
        Ct(this, 'pixelMargin', void 0),
        Ct(this, 'startAngle', void 0),
        (this.options = void 0),
        (this.circumference = void 0),
        (this.startAngle = void 0),
        (this.endAngle = void 0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.pixelMargin = 0),
        (this.fullCircles = 0),
        t && Object.assign(this, t));
    }
    inRange(t, e, n) {
      const i = this.getProps(['x', 'y'], n),
        { angle: r, distance: o } = Vd(i, { x: t, y: e }),
        {
          startAngle: s,
          endAngle: a,
          innerRadius: l,
          outerRadius: u,
          circumference: c,
        } = this.getProps(
          [
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference',
          ],
          n,
        ),
        h = (this.options.spacing + this.options.borderWidth) / 2,
        d = sd(c, a - s),
        f = Hd(r, s, a) && s !== a,
        p = d >= kd || f,
        m = Yd(o, l + h, u + h);
      return p && m;
    }
    getCenterPoint(t) {
      const {
          x: e,
          y: n,
          startAngle: i,
          endAngle: r,
          innerRadius: o,
          outerRadius: s,
        } = this.getProps(
          ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
          t,
        ),
        { offset: a, spacing: l } = this.options,
        u = (i + r) / 2,
        c = (o + s + l + a) / 2;
      return { x: e + Math.cos(u) * c, y: n + Math.sin(u) * c };
    }
    tooltipPosition(t) {
      return this.getCenterPoint(t);
    }
    draw(t) {
      const { options: e, circumference: n } = this,
        i = (e.offset || 0) / 4,
        r = (e.spacing || 0) / 2,
        o = e.circular;
      if (
        ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
        (this.fullCircles = n > kd ? Math.floor(n / kd) : 0),
        0 === n || this.innerRadius < 0 || this.outerRadius < 0)
      )
        return;
      t.save();
      const s = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(s) * i, Math.sin(s) * i);
      const a = i * (1 - Math.sin(Math.min(Sd, n || 0)));
      ((t.fillStyle = e.backgroundColor),
        (t.strokeStyle = e.borderColor),
        (function (t, e, n, i, r) {
          const { fullCircles: o, startAngle: s, circumference: a } = e;
          let l = e.endAngle;
          if (o) {
            nv(t, e, n, i, l, r);
            for (let e = 0; e < o; ++e) t.fill();
            isNaN(a) || (l = s + (a % kd || kd));
          }
          (nv(t, e, n, i, l, r), t.fill());
        })(t, this, a, r, o),
        iv(t, this, a, r, o),
        t.restore());
    }
  }
  function ov(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
    ((t.lineCap = sd(n.borderCapStyle, e.borderCapStyle)),
      t.setLineDash(sd(n.borderDash, e.borderDash)),
      (t.lineDashOffset = sd(n.borderDashOffset, e.borderDashOffset)),
      (t.lineJoin = sd(n.borderJoinStyle, e.borderJoinStyle)),
      (t.lineWidth = sd(n.borderWidth, e.borderWidth)),
      (t.strokeStyle = sd(n.borderColor, e.borderColor)));
  }
  function sv(t, e, n) {
    t.lineTo(n.x, n.y);
  }
  function av(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i = t.length,
      { start: r = 0, end: o = i - 1 } = n,
      { start: s, end: a } = e,
      l = Math.max(r, s),
      u = Math.min(o, a),
      c = (r < s && o < s) || (r > a && o > a);
    return {
      count: i,
      start: l,
      loop: e.loop,
      ilen: u < l && !c ? i + u - l : u - l,
    };
  }
  function lv(t, e, n, i) {
    const { points: r, options: o } = e,
      { count: s, start: a, loop: l, ilen: u } = av(r, n, i),
      c = (function (t) {
        return t.stepped
          ? Rf
          : t.tension || 'monotone' === t.cubicInterpolationMode
            ? Lf
            : sv;
      })(o);
    let h,
      d,
      f,
      { move: p = !0, reverse: m } = i || {};
    for (h = 0; h <= u; ++h)
      ((d = r[(a + (m ? u - h : h)) % s]),
        d.skip ||
          (p ? (t.moveTo(d.x, d.y), (p = !1)) : c(t, f, d, m, o.stepped),
          (f = d)));
    return (
      l && ((d = r[(a + (m ? u : 0)) % s]), c(t, f, d, m, o.stepped)),
      !!l
    );
  }
  function uv(t, e, n, i) {
    const r = e.points,
      { count: o, start: s, ilen: a } = av(r, n, i),
      { move: l = !0, reverse: u } = i || {};
    let c,
      h,
      d,
      f,
      p,
      m,
      g = 0,
      v = 0;
    const y = (t) => (s + (u ? a - t : t)) % o,
      b = () => {
        f !== p && (t.lineTo(g, p), t.lineTo(g, f), t.lineTo(g, m));
      };
    for (l && ((h = r[y(0)]), t.moveTo(h.x, h.y)), c = 0; c <= a; ++c) {
      if (((h = r[y(c)]), h.skip)) continue;
      const e = h.x,
        n = h.y,
        i = 0 | e;
      (i === d
        ? (n < f ? (f = n) : n > p && (p = n), (g = (v * g + e) / ++v))
        : (b(), t.lineTo(e, n), (d = i), (v = 0), (f = p = n)),
        (m = n));
    }
    b();
  }
  function cv(t) {
    const e = t.options,
      n = e.borderDash && e.borderDash.length;
    return !t._decimated &&
      !t._loop &&
      !e.tension &&
      'monotone' !== e.cubicInterpolationMode &&
      !e.stepped &&
      !n
      ? uv
      : lv;
  }
  (Ct(rv, 'id', 'arc'),
    Ct(rv, 'defaults', {
      borderAlign: 'center',
      borderColor: '#fff',
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: !0,
      selfJoin: !1,
    }),
    Ct(rv, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
    Ct(rv, 'descriptors', {
      _scriptable: !0,
      _indexable: (t) => 'borderDash' !== t,
    }));
  const hv = 'function' === typeof Path2D;
  function dv(t, e, n, i) {
    hv && !e.options.segment
      ? (function (t, e, n, i) {
          let r = e._path;
          (r ||
            ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
            ov(t, e.options),
            t.stroke(r));
        })(t, e, n, i)
      : (function (t, e, n, i) {
          const { segments: r, options: o } = e,
            s = cv(e);
          for (const a of r)
            (ov(t, o, a.style),
              t.beginPath(),
              s(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
              t.stroke());
        })(t, e, n, i);
  }
  class fv extends hg {
    constructor(t) {
      (super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._chart = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        (this._datasetIndex = void 0),
        t && Object.assign(this, t));
    }
    updateControlPoints(t, e) {
      const n = this.options;
      if (
        (n.tension || 'monotone' === n.cubicInterpolationMode) &&
        !n.stepped &&
        !this._pointsUpdated
      ) {
        const i = n.spanGaps ? this._loop : this._fullLoop;
        (vp(this._points, n, t, i, e), (this._pointsUpdated = !0));
      }
    }
    set points(t) {
      ((this._points = t),
        delete this._segments,
        delete this._path,
        (this._pointsUpdated = !1));
    }
    get points() {
      return this._points;
    }
    get segments() {
      return (
        this._segments ||
        (this._segments = (function (t, e) {
          const n = t.points,
            i = t.options.spanGaps,
            r = n.length;
          if (!r) return [];
          const o = !!t._loop,
            { start: s, end: a } = (function (t, e, n, i) {
              let r = 0,
                o = e - 1;
              if (n && !i) for (; r < e && !t[r].skip; ) r++;
              for (; r < e && t[r].skip; ) r++;
              for (r %= e, n && (o += r); o > r && t[o % e].skip; ) o--;
              return ((o %= e), { start: r, end: o });
            })(n, r, o, i);
          return Vp(
            t,
            !0 === i
              ? [{ start: s, end: a, loop: o }]
              : (function (t, e, n, i) {
                  const r = t.length,
                    o = [];
                  let s,
                    a = e,
                    l = t[e];
                  for (s = e + 1; s <= n; ++s) {
                    const n = t[s % r];
                    (n.skip || n.stop
                      ? l.skip ||
                        ((i = !1),
                        o.push({ start: e % r, end: (s - 1) % r, loop: i }),
                        (e = a = n.stop ? s : null))
                      : ((a = s), l.skip && (e = s)),
                      (l = n));
                  }
                  return (
                    null !== a && o.push({ start: e % r, end: a % r, loop: i }),
                    o
                  );
                })(
                  n,
                  s,
                  a < s ? a + r : a,
                  !!t._fullLoop && 0 === s && a === r - 1,
                ),
            n,
            e,
          );
        })(this, this.options.segment))
      );
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        n = t.length;
      return n && e[t[n - 1].end];
    }
    interpolate(t, e) {
      const n = this.options,
        i = t[e],
        r = this.points,
        o = zp(this, { property: e, start: i, end: i });
      if (!o.length) return;
      const s = [],
        a = (function (t) {
          return t.stepped
            ? Ap
            : t.tension || 'monotone' === t.cubicInterpolationMode
              ? Op
              : Dp;
        })(n);
      let l, u;
      for (l = 0, u = o.length; l < u; ++l) {
        const { start: u, end: c } = o[l],
          h = r[u],
          d = r[c];
        if (h === d) {
          s.push(h);
          continue;
        }
        const f = a(h, d, Math.abs((i - h[e]) / (d[e] - h[e])), n.stepped);
        ((f[e] = t[e]), s.push(f));
      }
      return 1 === s.length ? s[0] : s;
    }
    pathSegment(t, e, n) {
      return cv(this)(t, this, e, n);
    }
    path(t, e, n) {
      const i = this.segments,
        r = cv(this);
      let o = this._loop;
      ((e = e || 0), (n = n || this.points.length - e));
      for (const s of i) o &= r(t, this, s, { start: e, end: e + n - 1 });
      return !!o;
    }
    draw(t, e, n, i) {
      const r = this.options || {};
      ((this.points || []).length &&
        r.borderWidth &&
        (t.save(), dv(t, this, n, i), t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
    }
  }
  function pv(t, e, n, i) {
    const r = t.options,
      { [n]: o } = t.getProps([n], i);
    return Math.abs(e - o) < r.radius + r.hitRadius;
  }
  (Ct(fv, 'id', 'line'),
    Ct(fv, 'defaults', {
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: 'miter',
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: 'default',
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    }),
    Ct(fv, 'defaultRoutes', {
      backgroundColor: 'backgroundColor',
      borderColor: 'borderColor',
    }),
    Ct(fv, 'descriptors', {
      _scriptable: !0,
      _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
    }));
  class mv extends hg {
    constructor(t) {
      (super(),
        Ct(this, 'parsed', void 0),
        Ct(this, 'skip', void 0),
        Ct(this, 'stop', void 0),
        (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        t && Object.assign(this, t));
    }
    inRange(t, e, n) {
      const i = this.options,
        { x: r, y: o } = this.getProps(['x', 'y'], n);
      return (
        Math.pow(t - r, 2) + Math.pow(e - o, 2) <
        Math.pow(i.hitRadius + i.radius, 2)
      );
    }
    inXRange(t, e) {
      return pv(this, t, 'x', e);
    }
    inYRange(t, e) {
      return pv(this, t, 'y', e);
    }
    getCenterPoint(t) {
      const { x: e, y: n } = this.getProps(['x', 'y'], t);
      return { x: e, y: n };
    }
    size(t) {
      let e = (t = t || this.options || {}).radius || 0;
      e = Math.max(e, (e && t.hoverRadius) || 0);
      return 2 * (e + ((e && t.borderWidth) || 0));
    }
    draw(t, e) {
      const n = this.options;
      this.skip ||
        n.radius < 0.1 ||
        !Af(this, e, this.size(n) / 2) ||
        ((t.strokeStyle = n.borderColor),
        (t.lineWidth = n.borderWidth),
        (t.fillStyle = n.backgroundColor),
        Tf(t, n, this.x, this.y));
    }
    getRange() {
      const t = this.options || {};
      return t.radius + t.hitRadius;
    }
  }
  function gv(t, e) {
    const {
      x: n,
      y: i,
      base: r,
      width: o,
      height: s,
    } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
    let a, l, u, c, h;
    return (
      t.horizontal
        ? ((h = s / 2),
          (a = Math.min(n, r)),
          (l = Math.max(n, r)),
          (u = i - h),
          (c = i + h))
        : ((h = o / 2),
          (a = n - h),
          (l = n + h),
          (u = Math.min(i, r)),
          (c = Math.max(i, r))),
      { left: a, top: u, right: l, bottom: c }
    );
  }
  function vv(t, e, n, i) {
    return t ? 0 : $d(e, n, i);
  }
  function yv(t) {
    const e = gv(t),
      n = e.right - e.left,
      i = e.bottom - e.top,
      r = (function (t, e, n) {
        const i = t.options.borderWidth,
          r = t.borderSkipped,
          o = $f(i);
        return {
          t: vv(r.top, o.top, 0, n),
          r: vv(r.right, o.right, 0, e),
          b: vv(r.bottom, o.bottom, 0, n),
          l: vv(r.left, o.left, 0, e),
        };
      })(t, n / 2, i / 2),
      o = (function (t, e, n) {
        const { enableBorderRadius: i } = t.getProps(['enableBorderRadius']),
          r = t.options.borderRadius,
          o = Yf(r),
          s = Math.min(e, n),
          a = t.borderSkipped,
          l = i || id(r);
        return {
          topLeft: vv(!l || a.top || a.left, o.topLeft, 0, s),
          topRight: vv(!l || a.top || a.right, o.topRight, 0, s),
          bottomLeft: vv(!l || a.bottom || a.left, o.bottomLeft, 0, s),
          bottomRight: vv(!l || a.bottom || a.right, o.bottomRight, 0, s),
        };
      })(t, n / 2, i / 2);
    return {
      outer: { x: e.left, y: e.top, w: n, h: i, radius: o },
      inner: {
        x: e.left + r.l,
        y: e.top + r.t,
        w: n - r.l - r.r,
        h: i - r.t - r.b,
        radius: {
          topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
          topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
          bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
          bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r)),
        },
      },
    };
  }
  function bv(t, e, n, i) {
    const r = null === e,
      o = null === n,
      s = t && !(r && o) && gv(t, i);
    return s && (r || Yd(e, s.left, s.right)) && (o || Yd(n, s.top, s.bottom));
  }
  function xv(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function wv(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i = t.x !== n.x ? -e : 0,
      r = t.y !== n.y ? -e : 0,
      o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
      s = (t.y + t.h !== n.y + n.h ? e : 0) - r;
    return { x: t.x + i, y: t.y + r, w: t.w + o, h: t.h + s, radius: t.radius };
  }
  (Ct(mv, 'id', 'point'),
    Ct(mv, 'defaults', {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: 'circle',
      radius: 3,
      rotation: 0,
    }),
    Ct(mv, 'defaultRoutes', {
      backgroundColor: 'backgroundColor',
      borderColor: 'borderColor',
    }));
  class _v extends hg {
    constructor(t) {
      (super(),
        (this.options = void 0),
        (this.horizontal = void 0),
        (this.base = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.inflateAmount = void 0),
        t && Object.assign(this, t));
    }
    draw(t) {
      const {
          inflateAmount: e,
          options: { borderColor: n, backgroundColor: i },
        } = this,
        { inner: r, outer: o } = yv(this),
        s =
          (a = o.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight
            ? zf
            : xv;
      var a;
      (t.save(),
        (o.w === r.w && o.h === r.h) ||
          (t.beginPath(),
          s(t, wv(o, e, r)),
          t.clip(),
          s(t, wv(r, -e, o)),
          (t.fillStyle = n),
          t.fill('evenodd')),
        t.beginPath(),
        s(t, wv(r, e)),
        (t.fillStyle = i),
        t.fill(),
        t.restore());
    }
    inRange(t, e, n) {
      return bv(this, t, e, n);
    }
    inXRange(t, e) {
      return bv(this, t, null, e);
    }
    inYRange(t, e) {
      return bv(this, null, t, e);
    }
    getCenterPoint(t) {
      const {
        x: e,
        y: n,
        base: i,
        horizontal: r,
      } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
      return { x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2 };
    }
    getRange(t) {
      return 'x' === t ? this.width / 2 : this.height / 2;
    }
  }
  (Ct(_v, 'id', 'bar'),
    Ct(_v, 'defaults', {
      borderSkipped: 'start',
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: 'auto',
      pointStyle: void 0,
    }),
    Ct(_v, 'defaultRoutes', {
      backgroundColor: 'backgroundColor',
      borderColor: 'borderColor',
    }));
  const Sv = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return (
      t.usePointStyle &&
        ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  };
  class kv extends hg {
    constructor(t) {
      (super(),
        (this._added = !1),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this.legendItems = void 0),
        (this.columnSizes = void 0),
        (this.lineWidths = void 0),
        (this.maxHeight = void 0),
        (this.maxWidth = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this._margins = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0));
    }
    update(t, e, n) {
      ((this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = n),
        this.setDimensions(),
        this.buildLabels(),
        this.fit());
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = this._margins.left),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = this._margins.top),
          (this.bottom = this.height));
    }
    buildLabels() {
      const t = this.options.labels || {};
      let e = ld(t.generateLabels, [this.chart], this) || [];
      (t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
        t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
        this.options.reverse && e.reverse(),
        (this.legendItems = e));
    }
    fit() {
      const { options: t, ctx: e } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const n = t.labels,
        i = Kf(n.font),
        r = i.size,
        o = this._computeTitleHeight(),
        { boxWidth: s, itemHeight: a } = Sv(n, r);
      let l, u;
      ((e.font = i.string),
        this.isHorizontal()
          ? ((l = this.maxWidth), (u = this._fitRows(o, r, s, a) + 10))
          : ((u = this.maxHeight), (l = this._fitCols(o, i, s, a) + 10)),
        (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
        (this.height = Math.min(u, t.maxHeight || this.maxHeight)));
    }
    _fitRows(t, e, n, i) {
      const {
          ctx: r,
          maxWidth: o,
          options: {
            labels: { padding: s },
          },
        } = this,
        a = (this.legendHitBoxes = []),
        l = (this.lineWidths = [0]),
        u = i + s;
      let c = t;
      ((r.textAlign = 'left'), (r.textBaseline = 'middle'));
      let h = -1,
        d = -u;
      return (
        this.legendItems.forEach((t, f) => {
          const p = n + e / 2 + r.measureText(t.text).width;
          ((0 === f || l[l.length - 1] + p + 2 * s > o) &&
            ((c += u), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += u), h++),
            (a[f] = { left: 0, top: d, row: h, width: p, height: i }),
            (l[l.length - 1] += p + s));
        }),
        c
      );
    }
    _fitCols(t, e, n, i) {
      const {
          ctx: r,
          maxHeight: o,
          options: {
            labels: { padding: s },
          },
        } = this,
        a = (this.legendHitBoxes = []),
        l = (this.columnSizes = []),
        u = o - t;
      let c = s,
        h = 0,
        d = 0,
        f = 0,
        p = 0;
      return (
        this.legendItems.forEach((t, o) => {
          const { itemWidth: m, itemHeight: g } = (function (t, e, n, i, r) {
            const o = (function (t, e, n, i) {
                let r = t.text;
                r &&
                  'string' !== typeof r &&
                  (r = r.reduce((t, e) => (t.length > e.length ? t : e)));
                return e + n.size / 2 + i.measureText(r).width;
              })(i, t, e, n),
              s = (function (t, e, n) {
                let i = t;
                'string' !== typeof e.text && (i = Ev(e, n));
                return i;
              })(r, i, e.lineHeight);
            return { itemWidth: o, itemHeight: s };
          })(n, e, r, t, i);
          (o > 0 &&
            d + g + 2 * s > u &&
            ((c += h + s),
            l.push({ width: h, height: d }),
            (f += h + s),
            p++,
            (h = d = 0)),
            (a[o] = { left: f, top: d, col: p, width: m, height: g }),
            (h = Math.max(h, m)),
            (d += g + s));
        }),
        (c += h),
        l.push({ width: h, height: d }),
        c
      );
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: {
            align: n,
            labels: { padding: i },
            rtl: r,
          },
        } = this,
        o = Fp(r, this.left, this.width);
      if (this.isHorizontal()) {
        let r = 0,
          s = nf(n, this.left + i, this.right - this.lineWidths[r]);
        for (const a of e)
          (r !== a.row &&
            ((r = a.row),
            (s = nf(n, this.left + i, this.right - this.lineWidths[r]))),
            (a.top += this.top + t + i),
            (a.left = o.leftForLtr(o.x(s), a.width)),
            (s += a.width + i));
      } else {
        let r = 0,
          s = nf(n, this.top + t + i, this.bottom - this.columnSizes[r].height);
        for (const a of e)
          (a.col !== r &&
            ((r = a.col),
            (s = nf(
              n,
              this.top + t + i,
              this.bottom - this.columnSizes[r].height,
            ))),
            (a.top = s),
            (a.left += this.left + i),
            (a.left = o.leftForLtr(o.x(a.left), a.width)),
            (s += a.height + i));
      }
    }
    isHorizontal() {
      return (
        'top' === this.options.position || 'bottom' === this.options.position
      );
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        (Of(t, this), this._draw(), Ff(t));
      }
    }
    _draw() {
      const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
        { align: r, labels: o } = t,
        s = kf.color,
        a = Fp(t.rtl, this.left, this.width),
        l = Kf(o.font),
        { padding: u } = o,
        c = l.size,
        h = c / 2;
      let d;
      (this.drawTitle(),
        (i.textAlign = a.textAlign('left')),
        (i.textBaseline = 'middle'),
        (i.lineWidth = 0.5),
        (i.font = l.string));
      const { boxWidth: f, boxHeight: p, itemHeight: m } = Sv(o, c),
        g = this.isHorizontal(),
        v = this._computeTitleHeight();
      ((d = g
        ? {
            x: nf(r, this.left + u, this.right - n[0]),
            y: this.top + u + v,
            line: 0,
          }
        : {
            x: this.left + u,
            y: nf(r, this.top + v + u, this.bottom - e[0].height),
            line: 0,
          }),
        Rp(this.ctx, t.textDirection));
      const y = m + u;
      (this.legendItems.forEach((b, x) => {
        ((i.strokeStyle = b.fontColor), (i.fillStyle = b.fontColor));
        const w = i.measureText(b.text).width,
          _ = a.textAlign(b.textAlign || (b.textAlign = o.textAlign)),
          S = f + h + w;
        let k = d.x,
          E = d.y;
        (a.setWidth(this.width),
          g
            ? x > 0 &&
              k + S + u > this.right &&
              ((E = d.y += y),
              d.line++,
              (k = d.x = nf(r, this.left + u, this.right - n[d.line])))
            : x > 0 &&
              E + y > this.bottom &&
              ((k = d.x = k + e[d.line].width + u),
              d.line++,
              (E = d.y =
                nf(r, this.top + v + u, this.bottom - e[d.line].height))));
        if (
          ((function (t, e, n) {
            if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
            i.save();
            const r = sd(n.lineWidth, 1);
            if (
              ((i.fillStyle = sd(n.fillStyle, s)),
              (i.lineCap = sd(n.lineCap, 'butt')),
              (i.lineDashOffset = sd(n.lineDashOffset, 0)),
              (i.lineJoin = sd(n.lineJoin, 'miter')),
              (i.lineWidth = r),
              (i.strokeStyle = sd(n.strokeStyle, s)),
              i.setLineDash(sd(n.lineDash, [])),
              o.usePointStyle)
            ) {
              const s = {
                  radius: (p * Math.SQRT2) / 2,
                  pointStyle: n.pointStyle,
                  rotation: n.rotation,
                  borderWidth: r,
                },
                l = a.xPlus(t, f / 2);
              Df(i, s, l, e + h, o.pointStyleWidth && f);
            } else {
              const o = e + Math.max((c - p) / 2, 0),
                s = a.leftForLtr(t, f),
                l = Yf(n.borderRadius);
              (i.beginPath(),
                Object.values(l).some((t) => 0 !== t)
                  ? zf(i, { x: s, y: o, w: f, h: p, radius: l })
                  : i.rect(s, o, f, p),
                i.fill(),
                0 !== r && i.stroke());
            }
            i.restore();
          })(a.x(k), E, b),
          (k = ((t, e, n, i) =>
            t === (i ? 'left' : 'right')
              ? n
              : 'center' === t
                ? (e + n) / 2
                : e)(_, k + f + h, g ? k + S : this.right, t.rtl)),
          (function (t, e, n) {
            If(i, n.text, t, e + m / 2, l, {
              strikethrough: n.hidden,
              textAlign: a.textAlign(n.textAlign),
            });
          })(a.x(k), E, b),
          g)
        )
          d.x += S + u;
        else if ('string' !== typeof b.text) {
          const t = l.lineHeight;
          d.y += Ev(b, t) + u;
        } else d.y += y;
      }),
        Lp(this.ctx, t.textDirection));
    }
    drawTitle() {
      const t = this.options,
        e = t.title,
        n = Kf(e.font),
        i = qf(e.padding);
      if (!e.display) return;
      const r = Fp(t.rtl, this.left, this.width),
        o = this.ctx,
        s = e.position,
        a = n.size / 2,
        l = i.top + a;
      let u,
        c = this.left,
        h = this.width;
      if (this.isHorizontal())
        ((h = Math.max(...this.lineWidths)),
          (u = this.top + l),
          (c = nf(t.align, c, this.right - h)));
      else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        u =
          l +
          nf(
            t.align,
            this.top,
            this.bottom - e - t.labels.padding - this._computeTitleHeight(),
          );
      }
      const d = nf(s, c, c + h);
      ((o.textAlign = r.textAlign(ef(s))),
        (o.textBaseline = 'middle'),
        (o.strokeStyle = e.color),
        (o.fillStyle = e.color),
        (o.font = n.string),
        If(o, e.text, d, u, n));
    }
    _computeTitleHeight() {
      const t = this.options.title,
        e = Kf(t.font),
        n = qf(t.padding);
      return t.display ? e.lineHeight + n.height : 0;
    }
    _getLegendItemAt(t, e) {
      let n, i, r;
      if (Yd(t, this.left, this.right) && Yd(e, this.top, this.bottom))
        for (r = this.legendHitBoxes, n = 0; n < r.length; ++n)
          if (
            ((i = r[n]),
            Yd(t, i.left, i.left + i.width) && Yd(e, i.top, i.top + i.height))
          )
            return this.legendItems[n];
      return null;
    }
    handleEvent(t) {
      const e = this.options;
      if (
        !(function (t, e) {
          if (
            ('mousemove' === t || 'mouseout' === t) &&
            (e.onHover || e.onLeave)
          )
            return !0;
          if (e.onClick && ('click' === t || 'mouseup' === t)) return !0;
          return !1;
        })(t.type, e)
      )
        return;
      const n = this._getLegendItemAt(t.x, t.y);
      if ('mousemove' === t.type || 'mouseout' === t.type) {
        const o = this._hoveredItem,
          s =
            ((r = n),
            null !== (i = o) &&
              null !== r &&
              i.datasetIndex === r.datasetIndex &&
              i.index === r.index);
        (o && !s && ld(e.onLeave, [t, o, this], this),
          (this._hoveredItem = n),
          n && !s && ld(e.onHover, [t, n, this], this));
      } else n && ld(e.onClick, [t, n, this], this);
      var i, r;
    }
  }
  function Ev(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var Pv = {
    id: 'legend',
    _element: kv,
    start(t, e, n) {
      const i = (t.legend = new kv({ ctx: t.ctx, options: n, chart: t }));
      (qm.configure(t, i, n), qm.addBox(t, i));
    },
    stop(t) {
      (qm.removeBox(t, t.legend), delete t.legend);
    },
    beforeUpdate(t, e, n) {
      const i = t.legend;
      (qm.configure(t, i, n), (i.options = n));
    },
    afterUpdate(t) {
      const e = t.legend;
      (e.buildLabels(), e.adjustHitBoxes());
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: 'top',
      align: 'center',
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, n) {
        const i = e.datasetIndex,
          r = n.chart;
        r.isDatasetVisible(i)
          ? (r.hide(i), (e.hidden = !0))
          : (r.show(i), (e.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (t) => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: {
                usePointStyle: n,
                pointStyle: i,
                textAlign: r,
                color: o,
                useBorderRadius: s,
                borderRadius: a,
              },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((t) => {
            const l = t.controller.getStyle(n ? 0 : void 0),
              u = qf(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (u.width + u.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: i || l.pointStyle,
              rotation: l.rotation,
              textAlign: r || l.textAlign,
              borderRadius: s && (a || l.borderRadius),
              datasetIndex: t.index,
            };
          }, this);
        },
      },
      title: {
        color: (t) => t.chart.options.color,
        display: !1,
        position: 'center',
        text: '',
      },
    },
    descriptors: {
      _scriptable: (t) => !t.startsWith('on'),
      labels: {
        _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t),
      },
    },
  };
  class Mv extends hg {
    constructor(t) {
      (super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0));
    }
    update(t, e) {
      const n = this.options;
      if (((this.left = 0), (this.top = 0), !n.display))
        return void (this.width = this.height = this.right = this.bottom = 0);
      ((this.width = this.right = t), (this.height = this.bottom = e));
      const i = nd(n.text) ? n.text.length : 1;
      this._padding = qf(n.padding);
      const r = i * Kf(n.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = r) : (this.width = r);
    }
    isHorizontal() {
      const t = this.options.position;
      return 'top' === t || 'bottom' === t;
    }
    _drawArgs(t) {
      const { top: e, left: n, bottom: i, right: r, options: o } = this,
        s = o.align;
      let a,
        l,
        u,
        c = 0;
      return (
        this.isHorizontal()
          ? ((l = nf(s, n, r)), (u = e + t), (a = r - n))
          : ('left' === o.position
              ? ((l = n + t), (u = nf(s, i, e)), (c = -0.5 * Sd))
              : ((l = r - t), (u = nf(s, e, i)), (c = 0.5 * Sd)),
            (a = i - e)),
        { titleX: l, titleY: u, maxWidth: a, rotation: c }
      );
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const n = Kf(e.font),
        i = n.lineHeight / 2 + this._padding.top,
        { titleX: r, titleY: o, maxWidth: s, rotation: a } = this._drawArgs(i);
      If(t, e.text, 0, 0, n, {
        color: e.color,
        maxWidth: s,
        rotation: a,
        textAlign: ef(e.align),
        textBaseline: 'middle',
        translation: [r, o],
      });
    }
  }
  var Cv = {
    id: 'title',
    _element: Mv,
    start(t, e, n) {
      !(function (t, e) {
        const n = new Mv({ ctx: t.ctx, options: e, chart: t });
        (qm.configure(t, n, e), qm.addBox(t, n), (t.titleBlock = n));
      })(t, n);
    },
    stop(t) {
      const e = t.titleBlock;
      (qm.removeBox(t, e), delete t.titleBlock);
    },
    beforeUpdate(t, e, n) {
      const i = t.titleBlock;
      (qm.configure(t, i, n), (i.options = n));
    },
    defaults: {
      align: 'center',
      display: !1,
      font: { weight: 'bold' },
      fullSize: !0,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  new WeakMap();
  const Tv = {
    average(t) {
      if (!t.length) return !1;
      let e,
        n,
        i = new Set(),
        r = 0,
        o = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        const n = t[e].element;
        if (n && n.hasValue()) {
          const t = n.tooltipPosition();
          (i.add(t.x), (r += t.y), ++o);
        }
      }
      if (0 === o || 0 === i.size) return !1;
      return { x: [...i].reduce((t, e) => t + e) / i.size, y: r / o };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let n,
        i,
        r,
        o = e.x,
        s = e.y,
        a = Number.POSITIVE_INFINITY;
      for (n = 0, i = t.length; n < i; ++n) {
        const i = t[n].element;
        if (i && i.hasValue()) {
          const t = Bd(e, i.getCenterPoint());
          t < a && ((a = t), (r = i));
        }
      }
      if (r) {
        const t = r.tooltipPosition();
        ((o = t.x), (s = t.y));
      }
      return { x: o, y: s };
    },
  };
  function Dv(t, e) {
    return (e && (nd(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t);
  }
  function Av(t) {
    return ('string' === typeof t || t instanceof String) &&
      t.indexOf('\n') > -1
      ? t.split('\n')
      : t;
  }
  function Ov(t, e) {
    const { element: n, datasetIndex: i, index: r } = e,
      o = t.getDatasetMeta(i).controller,
      { label: s, value: a } = o.getLabelAndValue(r);
    return {
      chart: t,
      label: s,
      parsed: o.getParsed(r),
      raw: t.data.datasets[i].data[r],
      formattedValue: a,
      dataset: o.getDataset(),
      dataIndex: r,
      datasetIndex: i,
      element: n,
    };
  }
  function Fv(t, e) {
    const n = t.chart.ctx,
      { body: i, footer: r, title: o } = t,
      { boxWidth: s, boxHeight: a } = e,
      l = Kf(e.bodyFont),
      u = Kf(e.titleFont),
      c = Kf(e.footerFont),
      h = o.length,
      d = r.length,
      f = i.length,
      p = qf(e.padding);
    let m = p.height,
      g = 0,
      v = i.reduce(
        (t, e) => t + e.before.length + e.lines.length + e.after.length,
        0,
      );
    if (
      ((v += t.beforeBody.length + t.afterBody.length),
      h &&
        (m +=
          h * u.lineHeight + (h - 1) * e.titleSpacing + e.titleMarginBottom),
      v)
    ) {
      m +=
        f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
        (v - f) * l.lineHeight +
        (v - 1) * e.bodySpacing;
    }
    d &&
      (m += e.footerMarginTop + d * c.lineHeight + (d - 1) * e.footerSpacing);
    let y = 0;
    const b = function (t) {
      g = Math.max(g, n.measureText(t).width + y);
    };
    return (
      n.save(),
      (n.font = u.string),
      ud(t.title, b),
      (n.font = l.string),
      ud(t.beforeBody.concat(t.afterBody), b),
      (y = e.displayColors ? s + 2 + e.boxPadding : 0),
      ud(i, (t) => {
        (ud(t.before, b), ud(t.lines, b), ud(t.after, b));
      }),
      (y = 0),
      (n.font = c.string),
      ud(t.footer, b),
      n.restore(),
      (g += p.width),
      { width: g, height: m }
    );
  }
  function Rv(t, e, n, i) {
    const { x: r, width: o } = n,
      {
        width: s,
        chartArea: { left: a, right: l },
      } = t;
    let u = 'center';
    return (
      'center' === i
        ? (u = r <= (a + l) / 2 ? 'left' : 'right')
        : r <= o / 2
          ? (u = 'left')
          : r >= s - o / 2 && (u = 'right'),
      (function (t, e, n, i) {
        const { x: r, width: o } = i,
          s = n.caretSize + n.caretPadding;
        return (
          ('left' === t && r + o + s > e.width) ||
          ('right' === t && r - o - s < 0) ||
          void 0
        );
      })(u, t, e, n) && (u = 'center'),
      u
    );
  }
  function Lv(t, e, n) {
    const i =
      n.yAlign ||
      e.yAlign ||
      (function (t, e) {
        const { y: n, height: i } = e;
        return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center';
      })(t, n);
    return { xAlign: n.xAlign || e.xAlign || Rv(t, e, n, i), yAlign: i };
  }
  function Nv(t, e, n, i) {
    const { caretSize: r, caretPadding: o, cornerRadius: s } = t,
      { xAlign: a, yAlign: l } = n,
      u = r + o,
      { topLeft: c, topRight: h, bottomLeft: d, bottomRight: f } = Yf(s);
    let p = (function (t, e) {
      let { x: n, width: i } = t;
      return ('right' === e ? (n -= i) : 'center' === e && (n -= i / 2), n);
    })(e, a);
    const m = (function (t, e, n) {
      let { y: i, height: r } = t;
      return (
        'top' === e ? (i += n) : (i -= 'bottom' === e ? r + n : r / 2),
        i
      );
    })(e, l, u);
    return (
      'center' === l
        ? 'left' === a
          ? (p += u)
          : 'right' === a && (p -= u)
        : 'left' === a
          ? (p -= Math.max(c, d) + r)
          : 'right' === a && (p += Math.max(h, f) + r),
      { x: $d(p, 0, i.width - e.width), y: $d(m, 0, i.height - e.height) }
    );
  }
  function jv(t, e, n) {
    const i = qf(n.padding);
    return 'center' === e
      ? t.x + t.width / 2
      : 'right' === e
        ? t.x + t.width - i.right
        : t.x + i.left;
  }
  function Iv(t) {
    return Dv([], Av(t));
  }
  function zv(t, e) {
    const n =
      e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
  }
  const Vv = {
    beforeTitle: Zh,
    title(t) {
      if (t.length > 0) {
        const e = t[0],
          n = e.chart.data.labels,
          i = n ? n.length : 0;
        if (this && this.options && 'dataset' === this.options.mode)
          return e.dataset.label || '';
        if (e.label) return e.label;
        if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
      }
      return '';
    },
    afterTitle: Zh,
    beforeBody: Zh,
    beforeLabel: Zh,
    label(t) {
      if (this && this.options && 'dataset' === this.options.mode)
        return t.label + ': ' + t.formattedValue || t.formattedValue;
      let e = t.dataset.label || '';
      e && (e += ': ');
      const n = t.formattedValue;
      return (ed(n) || (e += n), e);
    },
    labelColor(t) {
      const e = t.chart
        .getDatasetMeta(t.datasetIndex)
        .controller.getStyle(t.dataIndex);
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(t) {
      const e = t.chart
        .getDatasetMeta(t.datasetIndex)
        .controller.getStyle(t.dataIndex);
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    },
    afterLabel: Zh,
    afterBody: Zh,
    beforeFooter: Zh,
    footer: Zh,
    afterFooter: Zh,
  };
  function Bv(t, e, n, i) {
    const r = t[e].call(n, i);
    return 'undefined' === typeof r ? Vv[e].call(n, i) : r;
  }
  class Uv extends hg {
    constructor(t) {
      (super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0));
    }
    initialize(t) {
      ((this.options = t),
        (this._cachedAnimations = void 0),
        (this.$context = void 0));
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        n = this.options.setContext(this.getContext()),
        i = n.enabled && e.options.animation && n.animations,
        r = new Qp(this.chart, i);
      return (i._cacheable && (this._cachedAnimations = Object.freeze(r)), r);
    }
    getContext() {
      return (
        this.$context ||
        (this.$context =
          ((t = this.chart.getContext()),
          (e = this),
          (n = this._tooltipItems),
          Qf(t, { tooltip: e, tooltipItems: n, type: 'tooltip' })))
      );
      var t, e, n;
    }
    getTitle(t, e) {
      const { callbacks: n } = e,
        i = Bv(n, 'beforeTitle', this, t),
        r = Bv(n, 'title', this, t),
        o = Bv(n, 'afterTitle', this, t);
      let s = [];
      return ((s = Dv(s, Av(i))), (s = Dv(s, Av(r))), (s = Dv(s, Av(o))), s);
    }
    getBeforeBody(t, e) {
      return Iv(Bv(e.callbacks, 'beforeBody', this, t));
    }
    getBody(t, e) {
      const { callbacks: n } = e,
        i = [];
      return (
        ud(t, (t) => {
          const e = { before: [], lines: [], after: [] },
            r = zv(n, t);
          (Dv(e.before, Av(Bv(r, 'beforeLabel', this, t))),
            Dv(e.lines, Bv(r, 'label', this, t)),
            Dv(e.after, Av(Bv(r, 'afterLabel', this, t))),
            i.push(e));
        }),
        i
      );
    }
    getAfterBody(t, e) {
      return Iv(Bv(e.callbacks, 'afterBody', this, t));
    }
    getFooter(t, e) {
      const { callbacks: n } = e,
        i = Bv(n, 'beforeFooter', this, t),
        r = Bv(n, 'footer', this, t),
        o = Bv(n, 'afterFooter', this, t);
      let s = [];
      return ((s = Dv(s, Av(i))), (s = Dv(s, Av(r))), (s = Dv(s, Av(o))), s);
    }
    _createItems(t) {
      const e = this._active,
        n = this.chart.data,
        i = [],
        r = [],
        o = [];
      let s,
        a,
        l = [];
      for (s = 0, a = e.length; s < a; ++s) l.push(Ov(this.chart, e[s]));
      return (
        t.filter && (l = l.filter((e, i, r) => t.filter(e, i, r, n))),
        t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
        ud(l, (e) => {
          const n = zv(t.callbacks, e);
          (i.push(Bv(n, 'labelColor', this, e)),
            r.push(Bv(n, 'labelPointStyle', this, e)),
            o.push(Bv(n, 'labelTextColor', this, e)));
        }),
        (this.labelColors = i),
        (this.labelPointStyles = r),
        (this.labelTextColors = o),
        (this.dataPoints = l),
        l
      );
    }
    update(t, e) {
      const n = this.options.setContext(this.getContext()),
        i = this._active;
      let r,
        o = [];
      if (i.length) {
        const t = Tv[n.position].call(this, i, this._eventPosition);
        ((o = this._createItems(n)),
          (this.title = this.getTitle(o, n)),
          (this.beforeBody = this.getBeforeBody(o, n)),
          (this.body = this.getBody(o, n)),
          (this.afterBody = this.getAfterBody(o, n)),
          (this.footer = this.getFooter(o, n)));
        const e = (this._size = Fv(this, n)),
          s = Object.assign({}, t, e),
          a = Lv(this.chart, n, s),
          l = Nv(n, s, a, this.chart);
        ((this.xAlign = a.xAlign),
          (this.yAlign = a.yAlign),
          (r = {
            opacity: 1,
            x: l.x,
            y: l.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          }));
      } else 0 !== this.opacity && (r = { opacity: 0 });
      ((this._tooltipItems = o),
        (this.$context = void 0),
        r && this._resolveAnimations().update(this, r),
        t &&
          n.external &&
          n.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e,
          }));
    }
    drawCaret(t, e, n, i) {
      const r = this.getCaretPosition(t, n, i);
      (e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3));
    }
    getCaretPosition(t, e, n) {
      const { xAlign: i, yAlign: r } = this,
        { caretSize: o, cornerRadius: s } = n,
        { topLeft: a, topRight: l, bottomLeft: u, bottomRight: c } = Yf(s),
        { x: h, y: d } = t,
        { width: f, height: p } = e;
      let m, g, v, y, b, x;
      return (
        'center' === r
          ? ((b = d + p / 2),
            'left' === i
              ? ((m = h), (g = m - o), (y = b + o), (x = b - o))
              : ((m = h + f), (g = m + o), (y = b - o), (x = b + o)),
            (v = m))
          : ((g =
              'left' === i
                ? h + Math.max(a, u) + o
                : 'right' === i
                  ? h + f - Math.max(l, c) - o
                  : this.caretX),
            'top' === r
              ? ((y = d), (b = y - o), (m = g - o), (v = g + o))
              : ((y = d + p), (b = y + o), (m = g + o), (v = g - o)),
            (x = y)),
        { x1: m, x2: g, x3: v, y1: y, y2: b, y3: x }
      );
    }
    drawTitle(t, e, n) {
      const i = this.title,
        r = i.length;
      let o, s, a;
      if (r) {
        const l = Fp(n.rtl, this.x, this.width);
        for (
          t.x = jv(this, n.titleAlign, n),
            e.textAlign = l.textAlign(n.titleAlign),
            e.textBaseline = 'middle',
            o = Kf(n.titleFont),
            s = n.titleSpacing,
            e.fillStyle = n.titleColor,
            e.font = o.string,
            a = 0;
          a < r;
          ++a
        )
          (e.fillText(i[a], l.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + s),
            a + 1 === r && (t.y += n.titleMarginBottom - s));
      }
    }
    _drawColorBox(t, e, n, i, r) {
      const o = this.labelColors[n],
        s = this.labelPointStyles[n],
        { boxHeight: a, boxWidth: l } = r,
        u = Kf(r.bodyFont),
        c = jv(this, 'left', r),
        h = i.x(c),
        d = a < u.lineHeight ? (u.lineHeight - a) / 2 : 0,
        f = e.y + d;
      if (r.usePointStyle) {
        const e = {
            radius: Math.min(l, a) / 2,
            pointStyle: s.pointStyle,
            rotation: s.rotation,
            borderWidth: 1,
          },
          n = i.leftForLtr(h, l) + l / 2,
          u = f + a / 2;
        ((t.strokeStyle = r.multiKeyBackground),
          (t.fillStyle = r.multiKeyBackground),
          Tf(t, e, n, u),
          (t.strokeStyle = o.borderColor),
          (t.fillStyle = o.backgroundColor),
          Tf(t, e, n, u));
      } else {
        ((t.lineWidth = id(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (t.strokeStyle = o.borderColor),
          t.setLineDash(o.borderDash || []),
          (t.lineDashOffset = o.borderDashOffset || 0));
        const e = i.leftForLtr(h, l),
          n = i.leftForLtr(i.xPlus(h, 1), l - 2),
          s = Yf(o.borderRadius);
        Object.values(s).some((t) => 0 !== t)
          ? (t.beginPath(),
            (t.fillStyle = r.multiKeyBackground),
            zf(t, { x: e, y: f, w: l, h: a, radius: s }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = o.backgroundColor),
            t.beginPath(),
            zf(t, { x: n, y: f + 1, w: l - 2, h: a - 2, radius: s }),
            t.fill())
          : ((t.fillStyle = r.multiKeyBackground),
            t.fillRect(e, f, l, a),
            t.strokeRect(e, f, l, a),
            (t.fillStyle = o.backgroundColor),
            t.fillRect(n, f + 1, l - 2, a - 2));
      }
      t.fillStyle = this.labelTextColors[n];
    }
    drawBody(t, e, n) {
      const { body: i } = this,
        {
          bodySpacing: r,
          bodyAlign: o,
          displayColors: s,
          boxHeight: a,
          boxWidth: l,
          boxPadding: u,
        } = n,
        c = Kf(n.bodyFont);
      let h = c.lineHeight,
        d = 0;
      const f = Fp(n.rtl, this.x, this.width),
        p = function (n) {
          (e.fillText(n, f.x(t.x + d), t.y + h / 2), (t.y += h + r));
        },
        m = f.textAlign(o);
      let g, v, y, b, x, w, _;
      for (
        e.textAlign = o,
          e.textBaseline = 'middle',
          e.font = c.string,
          t.x = jv(this, m, n),
          e.fillStyle = n.bodyColor,
          ud(this.beforeBody, p),
          d = s && 'right' !== m ? ('center' === o ? l / 2 + u : l + 2 + u) : 0,
          b = 0,
          w = i.length;
        b < w;
        ++b
      ) {
        for (
          g = i[b],
            v = this.labelTextColors[b],
            e.fillStyle = v,
            ud(g.before, p),
            y = g.lines,
            s &&
              y.length &&
              (this._drawColorBox(e, t, b, f, n),
              (h = Math.max(c.lineHeight, a))),
            x = 0,
            _ = y.length;
          x < _;
          ++x
        )
          (p(y[x]), (h = c.lineHeight));
        ud(g.after, p);
      }
      ((d = 0), (h = c.lineHeight), ud(this.afterBody, p), (t.y -= r));
    }
    drawFooter(t, e, n) {
      const i = this.footer,
        r = i.length;
      let o, s;
      if (r) {
        const a = Fp(n.rtl, this.x, this.width);
        for (
          t.x = jv(this, n.footerAlign, n),
            t.y += n.footerMarginTop,
            e.textAlign = a.textAlign(n.footerAlign),
            e.textBaseline = 'middle',
            o = Kf(n.footerFont),
            e.fillStyle = n.footerColor,
            e.font = o.string,
            s = 0;
          s < r;
          ++s
        )
          (e.fillText(i[s], a.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + n.footerSpacing));
      }
    }
    drawBackground(t, e, n, i) {
      const { xAlign: r, yAlign: o } = this,
        { x: s, y: a } = t,
        { width: l, height: u } = n,
        {
          topLeft: c,
          topRight: h,
          bottomLeft: d,
          bottomRight: f,
        } = Yf(i.cornerRadius);
      ((e.fillStyle = i.backgroundColor),
        (e.strokeStyle = i.borderColor),
        (e.lineWidth = i.borderWidth),
        e.beginPath(),
        e.moveTo(s + c, a),
        'top' === o && this.drawCaret(t, e, n, i),
        e.lineTo(s + l - h, a),
        e.quadraticCurveTo(s + l, a, s + l, a + h),
        'center' === o && 'right' === r && this.drawCaret(t, e, n, i),
        e.lineTo(s + l, a + u - f),
        e.quadraticCurveTo(s + l, a + u, s + l - f, a + u),
        'bottom' === o && this.drawCaret(t, e, n, i),
        e.lineTo(s + d, a + u),
        e.quadraticCurveTo(s, a + u, s, a + u - d),
        'center' === o && 'left' === r && this.drawCaret(t, e, n, i),
        e.lineTo(s, a + c),
        e.quadraticCurveTo(s, a, s + c, a),
        e.closePath(),
        e.fill(),
        i.borderWidth > 0 && e.stroke());
    }
    _updateAnimationTarget(t) {
      const e = this.chart,
        n = this.$animations,
        i = n && n.x,
        r = n && n.y;
      if (i || r) {
        const n = Tv[t.position].call(this, this._active, this._eventPosition);
        if (!n) return;
        const o = (this._size = Fv(this, t)),
          s = Object.assign({}, n, this._size),
          a = Lv(e, t, s),
          l = Nv(t, s, a, e);
        (i._to === l.x && r._to === l.y) ||
          ((this.xAlign = a.xAlign),
          (this.yAlign = a.yAlign),
          (this.width = o.width),
          (this.height = o.height),
          (this.caretX = n.x),
          (this.caretY = n.y),
          this._resolveAnimations().update(this, l));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let n = this.opacity;
      if (!n) return;
      this._updateAnimationTarget(e);
      const i = { width: this.width, height: this.height },
        r = { x: this.x, y: this.y };
      n = Math.abs(n) < 0.001 ? 0 : n;
      const o = qf(e.padding),
        s =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      e.enabled &&
        s &&
        (t.save(),
        (t.globalAlpha = n),
        this.drawBackground(r, t, i, e),
        Rp(t, e.textDirection),
        (r.y += o.top),
        this.drawTitle(r, t, e),
        this.drawBody(r, t, e),
        this.drawFooter(r, t, e),
        Lp(t, e.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const n = this._active,
        i = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const i = this.chart.getDatasetMeta(e);
          if (!i) throw new Error('Cannot find a dataset at index ' + e);
          return { datasetIndex: e, element: i.data[n], index: n };
        }),
        r = !cd(n, i),
        o = this._positionChanged(i, e);
      (r || o) &&
        ((this._active = i),
        (this._eventPosition = e),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(t, e) {
      let n =
        !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const i = this.options,
        r = this._active || [],
        o = this._getActiveElements(t, r, e, n),
        s = this._positionChanged(o, t),
        a = e || !cd(o, r) || s;
      return (
        a &&
          ((this._active = o),
          (i.enabled || i.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
        a
      );
    }
    _getActiveElements(t, e, n, i) {
      const r = this.options;
      if ('mouseout' === t.type) return [];
      if (!i)
        return e.filter(
          (t) =>
            this.chart.data.datasets[t.datasetIndex] &&
            void 0 !==
              this.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getParsed(t.index),
        );
      const o = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
      return (r.reverse && o.reverse(), o);
    }
    _positionChanged(t, e) {
      const { caretX: n, caretY: i, options: r } = this,
        o = Tv[r.position].call(this, t, e);
      return !1 !== o && (n !== o.x || i !== o.y);
    }
  }
  Ct(Uv, 'positioners', Tv);
  var Wv = {
    id: 'tooltip',
    _element: Uv,
    positioners: Tv,
    afterInit(t, e, n) {
      n && (t.tooltip = new Uv({ chart: t, options: n }));
    },
    beforeUpdate(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    reset(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    afterDraw(t) {
      const e = t.tooltip;
      if (e && e._willRender()) {
        const n = { tooltip: e };
        if (
          !1 ===
          t.notifyPlugins(
            'beforeTooltipDraw',
            Dt(Dt({}, n), {}, { cancelable: !0 }),
          )
        )
          return;
        (e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n));
      }
    },
    afterEvent(t, e) {
      if (t.tooltip) {
        const n = e.replay;
        t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
        },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: Vv,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (t) =>
        'filter' !== t && 'itemSort' !== t && 'external' !== t,
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  };
  function Hv(t, e, n, i) {
    const r = t.indexOf(e);
    if (-1 === r)
      return ((t, e, n, i) => (
        'string' === typeof e
          ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
          : isNaN(e) && (n = null),
        n
      ))(t, e, n, i);
    return r !== t.lastIndexOf(e) ? n : r;
  }
  function $v(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  class Yv extends wg {
    constructor(t) {
      (super(t),
        (this._startValue = void 0),
        (this._valueRange = 0),
        (this._addedLabels = []));
    }
    init(t) {
      const e = this._addedLabels;
      if (e.length) {
        const t = this.getLabels();
        for (const { index: n, label: i } of e) t[n] === i && t.splice(n, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (ed(t)) return null;
      const n = this.getLabels();
      return ((t, e) => (null === t ? null : $d(Math.round(t), 0, e)))(
        (e =
          isFinite(e) && n[e] === t
            ? e
            : Hv(n, t, sd(e, t), this._addedLabels)),
        n.length - 1,
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let { min: n, max: i } = this.getMinMax(!0);
      ('ticks' === this.options.bounds &&
        (t || (n = 0), e || (i = this.getLabels().length - 1)),
        (this.min = n),
        (this.max = i));
    }
    buildTicks() {
      const t = this.min,
        e = this.max,
        n = this.options.offset,
        i = [];
      let r = this.getLabels();
      ((r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1)),
        (this._valueRange = Math.max(r.length - (n ? 0 : 1), 1)),
        (this._startValue = this.min - (n ? 0.5 : 0)));
      for (let o = t; o <= e; o++) i.push({ value: o });
      return i;
    }
    getLabelForValue(t) {
      return $v.call(this, t);
    }
    configure() {
      (super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels));
    }
    getPixelForValue(t) {
      return (
        'number' !== typeof t && (t = this.parse(t)),
        null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
      );
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      return Math.round(
        this._startValue + this.getDecimalForPixel(t) * this._valueRange,
      );
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  function qv(t, e) {
    const n = [],
      {
        bounds: i,
        step: r,
        min: o,
        max: s,
        precision: a,
        count: l,
        maxTicks: u,
        maxDigits: c,
        includeBounds: h,
      } = t,
      d = r || 1,
      f = u - 1,
      { min: p, max: m } = e,
      g = !ed(o),
      v = !ed(s),
      y = !ed(l),
      b = (m - p) / (c + 1);
    let x,
      w,
      _,
      S,
      k = Rd((m - p) / f / d) * d;
    if (k < 1e-14 && !g && !v) return [{ value: p }, { value: m }];
    ((S = Math.ceil(m / k) - Math.floor(p / k)),
      S > f && (k = Rd((S * k) / f / d) * d),
      ed(a) || ((x = Math.pow(10, a)), (k = Math.ceil(k * x) / x)),
      'ticks' === i
        ? ((w = Math.floor(p / k) * k), (_ = Math.ceil(m / k) * k))
        : ((w = p), (_ = m)),
      g &&
      v &&
      r &&
      (function (t, e) {
        const n = Math.round(t);
        return n - e <= t && n + e >= t;
      })((s - o) / r, k / 1e3)
        ? ((S = Math.round(Math.min((s - o) / k, u))),
          (k = (s - o) / S),
          (w = o),
          (_ = s))
        : y
          ? ((w = g ? o : w), (_ = v ? s : _), (S = l - 1), (k = (_ - w) / S))
          : ((S = (_ - w) / k),
            (S = Fd(S, Math.round(S), k / 1e3)
              ? Math.round(S)
              : Math.ceil(S))));
    const E = Math.max(zd(k), zd(w));
    ((x = Math.pow(10, ed(a) ? E : a)),
      (w = Math.round(w * x) / x),
      (_ = Math.round(_ * x) / x));
    let P = 0;
    for (
      g &&
      (h && w !== o
        ? (n.push({ value: o }),
          w < o && P++,
          Fd(Math.round((w + P * k) * x) / x, o, Kv(o, b, t)) && P++)
        : w < o && P++);
      P < S;
      ++P
    ) {
      const t = Math.round((w + P * k) * x) / x;
      if (v && t > s) break;
      n.push({ value: t });
    }
    return (
      v && h && _ !== s
        ? n.length && Fd(n[n.length - 1].value, s, Kv(s, b, t))
          ? (n[n.length - 1].value = s)
          : n.push({ value: s })
        : (v && _ !== s) || n.push({ value: _ }),
      n
    );
  }
  function Kv(t, e, n) {
    let { horizontal: i, minRotation: r } = n;
    const o = jd(r),
      s = (i ? Math.sin(o) : Math.cos(o)) || 0.001,
      a = 0.75 * e * ('' + t).length;
    return Math.min(e / s, a);
  }
  (Ct(Yv, 'id', 'category'), Ct(Yv, 'defaults', { ticks: { callback: $v } }));
  class Xv extends wg {
    constructor(t) {
      (super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0));
    }
    parse(t, e) {
      return ed(t) ||
        (('number' === typeof t || t instanceof Number) && !isFinite(+t))
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: n } = this.getUserBounds();
      let { min: i, max: r } = this;
      const o = (t) => (i = e ? i : t),
        s = (t) => (r = n ? r : t);
      if (t) {
        const t = Od(i),
          e = Od(r);
        t < 0 && e < 0 ? s(0) : t > 0 && e > 0 && o(0);
      }
      if (i === r) {
        let e = 0 === r ? 1 : Math.abs(0.05 * r);
        (s(r + e), t || o(i - e));
      }
      ((this.min = i), (this.max = r));
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e,
        { maxTicksLimit: n, stepSize: i } = t;
      return (
        i
          ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
            e > 1e3 &&
              (console.warn(
                'scales.'
                  .concat(this.id, '.ticks.stepSize: ')
                  .concat(i, ' would result generating up to ')
                  .concat(e, ' ticks. Limiting to 1000.'),
              ),
              (e = 1e3)))
          : ((e = this.computeTickLimit()), (n = n || 11)),
        n && (e = Math.min(n, e)),
        e
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        e = t.ticks;
      let n = this.getTickLimit();
      n = Math.max(2, n);
      const i = qv(
        {
          maxTicks: n,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: !1 !== e.includeBounds,
        },
        this._range || this,
      );
      return (
        'ticks' === t.bounds && Nd(i, this, 'value'),
        t.reverse
          ? (i.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        i
      );
    }
    configure() {
      const t = this.ticks;
      let e = this.min,
        n = this.max;
      if ((super.configure(), this.options.offset && t.length)) {
        const i = (n - e) / Math.max(t.length - 1, 1) / 2;
        ((e -= i), (n += i));
      }
      ((this._startValue = e),
        (this._endValue = n),
        (this._valueRange = n - e));
    }
    getLabelForValue(t) {
      return gf(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class Qv extends Xv {
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      ((this.min = rd(t) ? t : 0),
        (this.max = rd(e) ? e : 1),
        this.handleTickRangeOptions());
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        n = jd(this.options.ticks.minRotation),
        i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
        r = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, r.lineHeight / i));
    }
    getPixelForValue(t) {
      return null === t
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  (Ct(Qv, 'id', 'linear'),
    Ct(Qv, 'defaults', { ticks: { callback: yf.formatters.numeric } }));
  const Gv = (t) => Math.floor(Ad(t)),
    Jv = (t, e) => Math.pow(10, Gv(t) + e);
  function Zv(t) {
    return 1 === t / Math.pow(10, Gv(t));
  }
  function ty(t, e, n) {
    const i = Math.pow(10, n),
      r = Math.floor(t / i);
    return Math.ceil(e / i) - r;
  }
  function ey(t, e) {
    let { min: n, max: i } = e;
    n = od(t.min, n);
    const r = [],
      o = Gv(n);
    let s = (function (t, e) {
        let n = Gv(e - t);
        for (; ty(t, e, n) > 10; ) n++;
        for (; ty(t, e, n) < 10; ) n--;
        return Math.min(n, Gv(t));
      })(n, i),
      a = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const l = Math.pow(10, s),
      u = o > s ? Math.pow(10, o) : 0,
      c = Math.round((n - u) * a) / a,
      h = Math.floor((n - u) / l / 10) * l * 10;
    let d = Math.floor((c - h) / Math.pow(10, s)),
      f = od(t.min, Math.round((u + h + d * Math.pow(10, s)) * a) / a);
    for (; f < i; )
      (r.push({ value: f, major: Zv(f), significand: d }),
        d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
        d >= 20 && (s++, (d = 2), (a = s >= 0 ? 1 : a)),
        (f = Math.round((u + h + d * Math.pow(10, s)) * a) / a));
    const p = od(t.max, f);
    return (r.push({ value: p, major: Zv(p), significand: d }), r);
  }
  class ny extends wg {
    constructor(t) {
      (super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0));
    }
    parse(t, e) {
      const n = Xv.prototype.parse.apply(this, [t, e]);
      if (0 !== n) return rd(n) && n > 0 ? n : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      ((this.min = rd(t) ? Math.max(0, t) : null),
        (this.max = rd(e) ? Math.max(0, e) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !rd(this._userMin) &&
          (this.min =
            t === Jv(this.min, 0) ? Jv(this.min, -1) : Jv(this.min, 0)),
        this.handleTickRangeOptions());
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let n = this.min,
        i = this.max;
      const r = (e) => (n = t ? n : e),
        o = (t) => (i = e ? i : t);
      (n === i && (n <= 0 ? (r(1), o(10)) : (r(Jv(n, -1)), o(Jv(i, 1)))),
        n <= 0 && r(Jv(i, -1)),
        i <= 0 && o(Jv(n, 1)),
        (this.min = n),
        (this.max = i));
    }
    buildTicks() {
      const t = this.options,
        e = ey({ min: this._userMin, max: this._userMax }, this);
      return (
        'ticks' === t.bounds && Nd(e, this, 'value'),
        t.reverse
          ? (e.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        e
      );
    }
    getLabelForValue(t) {
      return void 0 === t
        ? '0'
        : gf(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      (super.configure(),
        (this._startValue = Ad(t)),
        (this._valueRange = Ad(this.max) - Ad(t)));
    }
    getPixelForValue(t) {
      return (
        (void 0 !== t && 0 !== t) || (t = this.min),
        null === t || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min
                ? 0
                : (Ad(t) - this._startValue) / this._valueRange,
            )
      );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function iy(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = qf(e.backdropPadding);
      return sd(e.font && e.font.size, kf.font.size) + t.height;
    }
    return 0;
  }
  function ry(t, e, n) {
    return (
      (n = nd(n) ? n : [n]),
      { w: Pf(t, e.string, n), h: n.length * e.lineHeight }
    );
  }
  function oy(t, e, n, i, r) {
    return t === i || t === r
      ? { start: e - n / 2, end: e + n / 2 }
      : t < i || t > r
        ? { start: e - n, end: e }
        : { start: e, end: e + n };
  }
  function sy(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      n = Object.assign({}, e),
      i = [],
      r = [],
      o = t._pointLabels.length,
      s = t.options.pointLabels,
      a = s.centerPointLabels ? Sd / o : 0;
    for (let l = 0; l < o; l++) {
      const o = s.setContext(t.getPointLabelContext(l));
      r[l] = o.padding;
      const u = t.getPointPosition(l, t.drawingArea + r[l], a),
        c = Kf(o.font),
        h = ry(t.ctx, c, t._pointLabels[l]);
      i[l] = h;
      const d = Wd(t.getIndexAngle(l) + a),
        f = Math.round(Id(d));
      ay(n, e, d, oy(f, u.x, h.w, 0, 180), oy(f, u.y, h.h, 90, 270));
    }
    (t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
      (t._pointLabelItems = (function (t, e, n) {
        const i = [],
          r = t._pointLabels.length,
          o = t.options,
          { centerPointLabels: s, display: a } = o.pointLabels,
          l = { extra: iy(o) / 2, additionalAngle: s ? Sd / r : 0 };
        let u;
        for (let c = 0; c < r; c++) {
          ((l.padding = n[c]), (l.size = e[c]));
          const r = ly(t, c, l);
          (i.push(r),
            'auto' === a && ((r.visible = uy(r, u)), r.visible && (u = r)));
        }
        return i;
      })(t, i, r)));
  }
  function ay(t, e, n, i, r) {
    const o = Math.abs(Math.sin(n)),
      s = Math.abs(Math.cos(n));
    let a = 0,
      l = 0;
    (i.start < e.l
      ? ((a = (e.l - i.start) / o), (t.l = Math.min(t.l, e.l - a)))
      : i.end > e.r &&
        ((a = (i.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
      r.start < e.t
        ? ((l = (e.t - r.start) / s), (t.t = Math.min(t.t, e.t - l)))
        : r.end > e.b &&
          ((l = (r.end - e.b) / s), (t.b = Math.max(t.b, e.b + l))));
  }
  function ly(t, e, n) {
    const i = t.drawingArea,
      { extra: r, additionalAngle: o, padding: s, size: a } = n,
      l = t.getPointPosition(e, i + r + s, o),
      u = Math.round(Id(Wd(l.angle + Cd))),
      c = (function (t, e, n) {
        90 === n || 270 === n ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e);
        return t;
      })(l.y, a.h, u),
      h = (function (t) {
        if (0 === t || 180 === t) return 'center';
        if (t < 180) return 'left';
        return 'right';
      })(u),
      d = (function (t, e, n) {
        'right' === n ? (t -= e) : 'center' === n && (t -= e / 2);
        return t;
      })(l.x, a.w, h);
    return {
      visible: !0,
      x: l.x,
      y: c,
      textAlign: h,
      left: d,
      top: c,
      right: d + a.w,
      bottom: c + a.h,
    };
  }
  function uy(t, e) {
    if (!e) return !0;
    const { left: n, top: i, right: r, bottom: o } = t;
    return !(
      Af({ x: n, y: i }, e) ||
      Af({ x: n, y: o }, e) ||
      Af({ x: r, y: i }, e) ||
      Af({ x: r, y: o }, e)
    );
  }
  function cy(t, e, n) {
    const { left: i, top: r, right: o, bottom: s } = n,
      { backdropColor: a } = e;
    if (!ed(a)) {
      const n = Yf(e.borderRadius),
        l = qf(e.backdropPadding);
      t.fillStyle = a;
      const u = i - l.left,
        c = r - l.top,
        h = o - i + l.width,
        d = s - r + l.height;
      Object.values(n).some((t) => 0 !== t)
        ? (t.beginPath(),
          zf(t, { x: u, y: c, w: h, h: d, radius: n }),
          t.fill())
        : t.fillRect(u, c, h, d);
    }
  }
  function hy(t, e, n, i) {
    const { ctx: r } = t;
    if (n) r.arc(t.xCenter, t.yCenter, e, 0, kd);
    else {
      let n = t.getPointPosition(0, e);
      r.moveTo(n.x, n.y);
      for (let o = 1; o < i; o++)
        ((n = t.getPointPosition(o, e)), r.lineTo(n.x, n.y));
    }
  }
  (Ct(ny, 'id', 'logarithmic'),
    Ct(ny, 'defaults', {
      ticks: { callback: yf.formatters.logarithmic, major: { enabled: !0 } },
    }));
  class dy extends Xv {
    constructor(t) {
      (super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []));
    }
    setDimensions() {
      const t = (this._padding = qf(iy(this.options) / 2)),
        e = (this.width = this.maxWidth - t.width),
        n = (this.height = this.maxHeight - t.height);
      ((this.xCenter = Math.floor(this.left + e / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(e, n) / 2)));
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      ((this.min = rd(t) && !isNaN(t) ? t : 0),
        (this.max = rd(e) && !isNaN(e) ? e : 0),
        this.handleTickRangeOptions());
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / iy(this.options));
    }
    generateTickLabels(t) {
      (Xv.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((t, e) => {
            const n = ld(this.options.pointLabels.callback, [t, e], this);
            return n || 0 === n ? n : '';
          })
          .filter((t, e) => this.chart.getDataVisibility(e))));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? sy(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, n, i) {
      ((this.xCenter += Math.floor((t - e) / 2)),
        (this.yCenter += Math.floor((n - i) / 2)),
        (this.drawingArea -= Math.min(
          this.drawingArea / 2,
          Math.max(t, e, n, i),
        )));
    }
    getIndexAngle(t) {
      return Wd(
        t * (kd / (this._pointLabels.length || 1)) +
          jd(this.options.startAngle || 0),
      );
    }
    getDistanceFromCenterForValue(t) {
      if (ed(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (ed(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return (function (t, e, n) {
          return Qf(t, { label: n, index: e, type: 'pointLabel' });
        })(this.getContext(), t, n);
      }
    }
    getPointPosition(t, e) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const i = this.getIndexAngle(t) - Cd + n;
      return {
        x: Math.cos(i) * e + this.xCenter,
        y: Math.sin(i) * e + this.yCenter,
        angle: i,
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: n, right: i, bottom: r } = this._pointLabelItems[t];
      return { left: e, top: n, right: i, bottom: r };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: { circular: e },
      } = this.options;
      if (t) {
        const n = this.ctx;
        (n.save(),
          n.beginPath(),
          hy(
            this,
            this.getDistanceFromCenterForValue(this._endValue),
            e,
            this._pointLabels.length,
          ),
          n.closePath(),
          (n.fillStyle = t),
          n.fill(),
          n.restore());
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        { angleLines: n, grid: i, border: r } = e,
        o = this._pointLabels.length;
      let s, a, l;
      if (
        (e.pointLabels.display &&
          (function (t, e) {
            const {
              ctx: n,
              options: { pointLabels: i },
            } = t;
            for (let r = e - 1; r >= 0; r--) {
              const e = t._pointLabelItems[r];
              if (!e.visible) continue;
              const o = i.setContext(t.getPointLabelContext(r));
              cy(n, o, e);
              const s = Kf(o.font),
                { x: a, y: l, textAlign: u } = e;
              If(n, t._pointLabels[r], a, l + s.lineHeight / 2, s, {
                color: o.color,
                textAlign: u,
                textBaseline: 'middle',
              });
            }
          })(this, o),
        i.display &&
          this.ticks.forEach((t, e) => {
            if (0 !== e || (0 === e && this.min < 0)) {
              a = this.getDistanceFromCenterForValue(t.value);
              const n = this.getContext(e),
                s = i.setContext(n),
                l = r.setContext(n);
              !(function (t, e, n, i, r) {
                const o = t.ctx,
                  s = e.circular,
                  { color: a, lineWidth: l } = e;
                (!s && !i) ||
                  !a ||
                  !l ||
                  n < 0 ||
                  (o.save(),
                  (o.strokeStyle = a),
                  (o.lineWidth = l),
                  o.setLineDash(r.dash || []),
                  (o.lineDashOffset = r.dashOffset),
                  o.beginPath(),
                  hy(t, n, s, i),
                  o.closePath(),
                  o.stroke(),
                  o.restore());
              })(this, s, a, o, l);
            }
          }),
        n.display)
      ) {
        for (t.save(), s = o - 1; s >= 0; s--) {
          const i = n.setContext(this.getPointLabelContext(s)),
            { color: r, lineWidth: o } = i;
          o &&
            r &&
            ((t.lineWidth = o),
            (t.strokeStyle = r),
            t.setLineDash(i.borderDash),
            (t.lineDashOffset = i.borderDashOffset),
            (a = this.getDistanceFromCenterForValue(
              e.reverse ? this.min : this.max,
            )),
            (l = this.getPointPosition(s, a)),
            t.beginPath(),
            t.moveTo(this.xCenter, this.yCenter),
            t.lineTo(l.x, l.y),
            t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        e = this.options,
        n = e.ticks;
      if (!n.display) return;
      const i = this.getIndexAngle(0);
      let r, o;
      (t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(i),
        (t.textAlign = 'center'),
        (t.textBaseline = 'middle'),
        this.ticks.forEach((i, s) => {
          if (0 === s && this.min >= 0 && !e.reverse) return;
          const a = n.setContext(this.getContext(s)),
            l = Kf(a.font);
          if (
            ((r = this.getDistanceFromCenterForValue(this.ticks[s].value)),
            a.showLabelBackdrop)
          ) {
            ((t.font = l.string),
              (o = t.measureText(i.label).width),
              (t.fillStyle = a.backdropColor));
            const e = qf(a.backdropPadding);
            t.fillRect(
              -o / 2 - e.left,
              -r - l.size / 2 - e.top,
              o + e.width,
              l.size + e.height,
            );
          }
          If(t, i.label, 0, -r, l, {
            color: a.color,
            strokeColor: a.textStrokeColor,
            strokeWidth: a.textStrokeWidth,
          });
        }),
        t.restore());
    }
    drawTitle() {}
  }
  (Ct(dy, 'id', 'radialLinear'),
    Ct(dy, 'defaults', {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: yf.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback: (t) => t,
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    Ct(dy, 'defaultRoutes', {
      'angleLines.color': 'borderColor',
      'pointLabels.color': 'color',
      'ticks.color': 'color',
    }),
    Ct(dy, 'descriptors', { angleLines: { _fallback: 'grid' } }));
  const fy = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    py = Object.keys(fy);
  function my(t, e) {
    return t - e;
  }
  function gy(t, e) {
    if (ed(e)) return null;
    const n = t._adapter,
      { parser: i, round: r, isoWeekday: o } = t._parseOpts;
    let s = e;
    return (
      'function' === typeof i && (s = i(s)),
      rd(s) || (s = 'string' === typeof i ? n.parse(s, i) : n.parse(s)),
      null === s
        ? null
        : (r &&
            (s =
              'week' !== r || (!Ld(o) && !0 !== o)
                ? n.startOf(s, r)
                : n.startOf(s, 'isoWeek', o)),
          +s)
    );
  }
  function vy(t, e, n, i) {
    const r = py.length;
    for (let o = py.indexOf(t); o < r - 1; ++o) {
      const t = fy[py[o]],
        r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return py[o];
    }
    return py[r - 1];
  }
  function yy(t, e, n) {
    if (n) {
      if (n.length) {
        const { lo: i, hi: r } = qd(n, e);
        t[n[i] >= e ? n[i] : n[r]] = !0;
      }
    } else t[e] = !0;
  }
  function by(t, e, n) {
    const i = [],
      r = {},
      o = e.length;
    let s, a;
    for (s = 0; s < o; ++s)
      ((a = e[s]), (r[a] = s), i.push({ value: a, major: !1 }));
    return 0 !== o && n
      ? (function (t, e, n, i) {
          const r = t._adapter,
            o = +r.startOf(e[0].value, i),
            s = e[e.length - 1].value;
          let a, l;
          for (a = o; a <= s; a = +r.add(a, 1, i))
            ((l = n[a]), l >= 0 && (e[l].major = !0));
          return e;
        })(t, i, r, n)
      : i;
  }
  class xy extends wg {
    constructor(t) {
      (super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0));
    }
    init(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n = t.time || (t.time = {}),
        i = (this._adapter = new Mm(t.adapters.date));
      (i.init(e),
        md(n.displayFormats, i.formats()),
        (this._parseOpts = {
          parser: n.parser,
          round: n.round,
          isoWeekday: n.isoWeekday,
        }),
        super.init(t),
        (this._normalized = e.normalized));
    }
    parse(t, e) {
      return void 0 === t ? null : gy(this, t);
    }
    beforeLayout() {
      (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
    }
    determineDataLimits() {
      const t = this.options,
        e = this._adapter,
        n = t.time.unit || 'day';
      let {
        min: i,
        max: r,
        minDefined: o,
        maxDefined: s,
      } = this.getUserBounds();
      function a(t) {
        (o || isNaN(t.min) || (i = Math.min(i, t.min)),
          s || isNaN(t.max) || (r = Math.max(r, t.max)));
      }
      ((o && s) ||
        (a(this._getLabelBounds()),
        ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
          a(this.getMinMax(!1))),
        (i = rd(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
        (r = rd(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1),
        (this.min = Math.min(i, r - 1)),
        (this.max = Math.max(i + 1, r)));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        n = Number.NEGATIVE_INFINITY;
      return (
        t.length && ((e = t[0]), (n = t[t.length - 1])),
        { min: e, max: n }
      );
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        n = t.ticks,
        i =
          'labels' === n.source ? this.getLabelTimestamps() : this._generate();
      'ticks' === t.bounds &&
        i.length &&
        ((this.min = this._userMin || i[0]),
        (this.max = this._userMax || i[i.length - 1]));
      const r = this.min,
        o = (function (t, e, n) {
          let i = 0,
            r = t.length;
          for (; i < r && t[i] < e; ) i++;
          for (; r > i && t[r - 1] > n; ) r--;
          return i > 0 || r < t.length ? t.slice(i, r) : t;
        })(i, r, this.max);
      return (
        (this._unit =
          e.unit ||
          (n.autoSkip
            ? vy(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
            : (function (t, e, n, i, r) {
                for (let o = py.length - 1; o >= py.indexOf(n); o--) {
                  const n = py[o];
                  if (fy[n].common && t._adapter.diff(r, i, n) >= e - 1)
                    return n;
                }
                return py[n ? py.indexOf(n) : 0];
              })(this, o.length, e.minUnit, this.min, this.max))),
        (this._majorUnit =
          n.major.enabled && 'year' !== this._unit
            ? (function (t) {
                for (let e = py.indexOf(t) + 1, n = py.length; e < n; ++e)
                  if (fy[py[e]].common) return py[e];
              })(this._unit)
            : void 0),
        this.initOffsets(i),
        t.reverse && o.reverse(),
        by(this, o, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip &&
        this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets() {
      let t,
        e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        i = 0,
        r = 0;
      this.options.offset &&
        n.length &&
        ((t = this.getDecimalForValue(n[0])),
        (i = 1 === n.length ? 1 - t : (this.getDecimalForValue(n[1]) - t) / 2),
        (e = this.getDecimalForValue(n[n.length - 1])),
        (r =
          1 === n.length
            ? e
            : (e - this.getDecimalForValue(n[n.length - 2])) / 2));
      const o = n.length < 3 ? 0.5 : 0.25;
      ((i = $d(i, 0, o)),
        (r = $d(r, 0, o)),
        (this._offsets = { start: i, end: r, factor: 1 / (i + 1 + r) }));
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        n = this.max,
        i = this.options,
        r = i.time,
        o = r.unit || vy(r.minUnit, e, n, this._getLabelCapacity(e)),
        s = sd(i.ticks.stepSize, 1),
        a = 'week' === o && r.isoWeekday,
        l = Ld(a) || !0 === a,
        u = {};
      let c,
        h,
        d = e;
      if (
        (l && (d = +t.startOf(d, 'isoWeek', a)),
        (d = +t.startOf(d, l ? 'day' : o)),
        t.diff(n, e, o) > 1e5 * s)
      )
        throw new Error(
          e +
            ' and ' +
            n +
            ' are too far apart with stepSize of ' +
            s +
            ' ' +
            o,
        );
      const f = 'data' === i.ticks.source && this.getDataTimestamps();
      for (c = d, h = 0; c < n; c = +t.add(c, s, o), h++) yy(u, c, f);
      return (
        (c !== n && 'ticks' !== i.bounds && 1 !== h) || yy(u, c, f),
        Object.keys(u)
          .sort(my)
          .map((t) => +t)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        n = this.options.time;
      return n.tooltipFormat
        ? e.format(t, n.tooltipFormat)
        : e.format(t, n.displayFormats.datetime);
    }
    format(t, e) {
      const n = this.options.time.displayFormats,
        i = this._unit,
        r = e || n[i];
      return this._adapter.format(t, r);
    }
    _tickFormatFunction(t, e, n, i) {
      const r = this.options,
        o = r.ticks.callback;
      if (o) return ld(o, [t, e, n], this);
      const s = r.time.displayFormats,
        a = this._unit,
        l = this._majorUnit,
        u = a && s[a],
        c = l && s[l],
        h = n[e],
        d = l && c && h && h.major;
      return this._adapter.format(t, i || (d ? c : u));
    }
    generateTickLabels(t) {
      let e, n, i;
      for (e = 0, n = t.length; e < n; ++e)
        ((i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t)));
    }
    getDecimalForValue(t) {
      return null === t ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets,
        n = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + n) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + n * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        n = this.ctx.measureText(t).width,
        i = jd(this.isHorizontal() ? e.maxRotation : e.minRotation),
        r = Math.cos(i),
        o = Math.sin(i),
        s = this._resolveTickFontOptions(0).size;
      return { w: n * r + s * o, h: n * o + s * r };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        n = e.displayFormats,
        i = n[e.unit] || n.millisecond,
        r = this._tickFormatFunction(t, 0, by(this, [t], this._majorUnit), i),
        o = this._getLabelSize(r),
        s =
          Math.floor(
            this.isHorizontal() ? this.width / o.w : this.height / o.h,
          ) - 1;
      return s > 0 ? s : 1;
    }
    getDataTimestamps() {
      let t,
        e,
        n = this._cache.data || [];
      if (n.length) return n;
      const i = this.getMatchingVisibleMetas();
      if (this._normalized && i.length)
        return (this._cache.data = i[0].controller.getAllParsedValues(this));
      for (t = 0, e = i.length; t < e; ++t)
        n = n.concat(i[t].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(n));
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, n;
      if (t.length) return t;
      const i = this.getLabels();
      for (e = 0, n = i.length; e < n; ++e) t.push(gy(this, i[e]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return Jd(t.sort(my));
    }
  }
  function wy(t, e, n) {
    let i,
      r,
      o,
      s,
      a = 0,
      l = t.length - 1;
    n
      ? (e >= t[a].pos && e <= t[l].pos && ({ lo: a, hi: l } = Kd(t, 'pos', e)),
        ({ pos: i, time: o } = t[a]),
        ({ pos: r, time: s } = t[l]))
      : (e >= t[a].time &&
          e <= t[l].time &&
          ({ lo: a, hi: l } = Kd(t, 'time', e)),
        ({ time: i, pos: o } = t[a]),
        ({ time: r, pos: s } = t[l]));
    const u = r - i;
    return u ? o + ((s - o) * (e - i)) / u : o;
  }
  (Ct(xy, 'id', 'time'),
    Ct(xy, 'defaults', {
      bounds: 'data',
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: 'millisecond',
        displayFormats: {},
      },
      ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    }));
  class _y extends xy {
    constructor(t) {
      (super(t),
        (this._table = []),
        (this._minPos = void 0),
        (this._tableRange = void 0));
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = (this._table = this.buildLookupTable(t));
      ((this._minPos = wy(e, this.min)),
        (this._tableRange = wy(e, this.max) - this._minPos),
        super.initOffsets(t));
    }
    buildLookupTable(t) {
      const { min: e, max: n } = this,
        i = [],
        r = [];
      let o, s, a, l, u;
      for (o = 0, s = t.length; o < s; ++o)
        ((l = t[o]), l >= e && l <= n && i.push(l));
      if (i.length < 2)
        return [
          { time: e, pos: 0 },
          { time: n, pos: 1 },
        ];
      for (o = 0, s = i.length; o < s; ++o)
        ((u = i[o + 1]),
          (a = i[o - 1]),
          (l = i[o]),
          Math.round((u + a) / 2) !== l &&
            r.push({ time: l, pos: o / (s - 1) }));
      return r;
    }
    _generate() {
      const t = this.min,
        e = this.max;
      let n = super.getDataTimestamps();
      return (
        (n.includes(t) && n.length) || n.splice(0, 0, t),
        (n.includes(e) && 1 !== n.length) || n.push(e),
        n.sort((t, e) => t - e)
      );
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const e = this.getDataTimestamps(),
        n = this.getLabelTimestamps();
      return (
        (t =
          e.length && n.length
            ? this.normalize(e.concat(n))
            : e.length
              ? e
              : n),
        (t = this._cache.all = t),
        t
      );
    }
    getDecimalForValue(t) {
      return (wy(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return wy(this._table, n * this._tableRange + this._minPos, !0);
    }
  }
  (Ct(_y, 'id', 'timeseries'), Ct(_y, 'defaults', xy.defaults));
  const Sy = [
      'height',
      'width',
      'redraw',
      'datasetIdKey',
      'type',
      'data',
      'options',
      'plugins',
      'fallbackContent',
      'updateMode',
    ],
    ky = 'label';
  function Ey(t, e) {
    'function' === typeof t ? t(e) : t && (t.current = e);
  }
  function Py(t, e) {
    t.labels = e;
  }
  function My(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ky;
    const i = [];
    t.datasets = e.map((e) => {
      const r = t.datasets.find((t) => t[n] === e[n]);
      return r && e.data && !i.includes(r)
        ? (i.push(r), Object.assign(r, e), r)
        : Dt({}, e);
    });
  }
  function Cy(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ky;
    const n = { labels: [], datasets: [] };
    return (Py(n, t.labels), My(n, t.datasets, e), n);
  }
  function Ty(t, e) {
    const {
        height: n = 150,
        width: i = 300,
        redraw: r = !1,
        datasetIdKey: s,
        type: a,
        data: l,
        options: u,
        plugins: c = [],
        fallbackContent: h,
        updateMode: d,
      } = t,
      f = Ot(t, Sy),
      p = (0, o.useRef)(null),
      m = (0, o.useRef)(null),
      g = () => {
        p.current &&
          ((m.current = new Jg(p.current, {
            type: a,
            data: Cy(l, s),
            options: u && Dt({}, u),
            plugins: c,
          })),
          Ey(e, m.current));
      },
      v = () => {
        (Ey(e, null), m.current && (m.current.destroy(), (m.current = null)));
      };
    return (
      (0, o.useEffect)(() => {
        !r &&
          m.current &&
          u &&
          (function (t, e) {
            const n = t.options;
            n && e && Object.assign(n, e);
          })(m.current, u);
      }, [r, u]),
      (0, o.useEffect)(() => {
        !r && m.current && Py(m.current.config.data, l.labels);
      }, [r, l.labels]),
      (0, o.useEffect)(() => {
        !r &&
          m.current &&
          l.datasets &&
          My(m.current.config.data, l.datasets, s);
      }, [r, l.datasets]),
      (0, o.useEffect)(() => {
        m.current && (r ? (v(), setTimeout(g)) : m.current.update(d));
      }, [r, u, l.labels, l.datasets, d]),
      (0, o.useEffect)(() => {
        m.current && (v(), setTimeout(g));
      }, [a]),
      (0, o.useEffect)(() => (g(), () => v()), []),
      o.createElement(
        'canvas',
        Dt({ ref: p, role: 'img', height: n, width: i }, f),
        h,
      )
    );
  }
  const Dy = (0, o.forwardRef)(Ty);
  function Ay(t, e) {
    return (
      Jg.register(e),
      (0, o.forwardRef)((e, n) =>
        o.createElement(Dy, Dt(Dt({}, e), {}, { ref: n, type: t })),
      )
    );
  }
  const Oy = Ay('bar', vm),
    Fy = Ay('pie', _m);
  function Ry() {
    const [t, e] = (0, o.useState)(null),
      [n, i] = (0, o.useState)({ plaintiff: 0, defender: 0 }),
      [r, s] = (0, o.useState)(''),
      [a, l] = (0, o.useState)(''),
      [u, c] = (0, o.useState)(!0),
      [h, d] = (0, o.useState)(!1),
      f = new URLSearchParams(window.location.search).get('caseId');
    (0, o.useEffect)(() => {
      (async () => {
        try {
          const [t, n] = await Promise.all([
            bh.get('/api/case/'.concat(f)),
            bh.get('/api/argument/stats/'.concat(f)),
          ]);
          (e(t.data), i(n.data));
        } catch (t) {
          console.error(
            '\u274c \u062e\u0637\u0627 \u062f\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a:',
            t,
          );
        } finally {
          c(!1);
        }
      })();
    }, [f]);
    if (u)
      return (0, bo.jsx)('div', {
        className: 'p-6 text-center',
        children:
          '\u23f3 \u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc...',
      });
    if (!t)
      return (0, bo.jsx)('div', {
        className: 'p-6 text-center',
        children:
          '\u274c \u067e\u0631\u0648\u0646\u062f\u0647\u200c\u0627\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f.',
      });
    const p = {
        labels: [
          '\u06af\u0646\u0627\u0647\u06a9\u0627\u0631',
          '\u0628\u06cc\u200c\u06af\u0646\u0627\u0647',
        ],
        datasets: [
          {
            data: [n.plaintiff, n.defender],
            backgroundColor: ['#dc2626', '#16a34a'],
            borderWidth: 1,
          },
        ],
      },
      m = {
        labels: ['\u0634\u0627\u06a9\u06cc', '\u0645\u062a\u0647\u0645'],
        datasets: [
          {
            label: '\u062a\u0639\u062f\u0627\u062f \u0622\u0631\u0627',
            data: [n.plaintiff, n.defender],
            backgroundColor: ['#f87171', '#4ade80'],
            borderRadius: 8,
          },
        ],
      };
    return (0, bo.jsxs)('div', {
      className:
        'min-h-screen bg-[#1a1a1a] text-white p-6 flex flex-col items-center gap-6',
      children: [
        (0, bo.jsxs)('div', {
          className: 'bg-black/70 p-6 rounded-lg w-full max-w-3xl',
          children: [
            (0, bo.jsx)('h2', {
              className: 'text-2xl font-bold text-blue-200 mb-2',
              children: t.title,
            }),
            (0, bo.jsxs)('p', {
              className: 'text-md leading-relaxed mb-4',
              children: [t.summary.slice(0, 300), '...'],
            }),
            (0, bo.jsx)('a', {
              href: 'https://t.me/RebLCBot?start='.concat(f),
              className:
                'inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-full text-white font-semibold shadow-lg',
              target: '_blank',
              rel: 'noopener noreferrer',
              children:
                '\ud83e\udd16 \u0645\u0634\u0627\u0647\u062f\u0647 \u062f\u0631 \u0631\u0628\u0627\u062a \u0631\u0633\u0645\u06cc',
            }),
          ],
        }),
        (0, bo.jsxs)('div', {
          className: 'bg-white text-black p-4 rounded-md w-full max-w-2xl',
          children: [
            (0, bo.jsx)('h3', {
              className: 'text-center text-lg font-semibold mb-2',
              children:
                '\ud83d\udcca \u0646\u062a\u0627\u06cc\u062c \u0631\u0623\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646',
            }),
            (0, bo.jsx)(Fy, { data: p }),
          ],
        }),
        (0, bo.jsxs)('div', {
          className: 'bg-white text-black p-4 rounded-md w-full max-w-2xl',
          children: [
            (0, bo.jsx)('h3', {
              className: 'text-center text-lg font-semibold mb-2',
              children:
                '\ud83d\udcc8 \u0646\u0645\u0648\u062f\u0627\u0631 \u0645\u0642\u0627\u06cc\u0633\u0647\u200c\u0627\u06cc \u0622\u0631\u0627',
            }),
            (0, bo.jsx)(Oy, {
              data: m,
              options: { responsive: !0, plugins: { legend: { display: !1 } } },
            }),
          ],
        }),
        !h &&
          (0, bo.jsxs)('div', {
            className: 'bg-black/60 p-6 rounded-lg w-full max-w-3xl',
            children: [
              (0, bo.jsx)('h3', {
                className: 'text-pink-300 text-lg mb-4 font-bold',
                children:
                  '\ud83e\udde0 \u0631\u0623\u06cc \u0634\u0645\u0627 \u0648 \u0627\u0633\u062a\u062f\u0644\u0627\u0644',
              }),
              (0, bo.jsxs)('div', {
                className: 'flex gap-4 mb-4',
                children: [
                  (0, bo.jsx)('button', {
                    className: 'px-4 py-2 rounded '.concat(
                      'plaintiff' === r ? 'bg-red-700' : 'bg-gray-700',
                    ),
                    onClick: () => s('plaintiff'),
                    children: '\u06af\u0646\u0627\u0647\u06a9\u0627\u0631',
                  }),
                  (0, bo.jsx)('button', {
                    className: 'px-4 py-2 rounded '.concat(
                      'defender' === r ? 'bg-green-700' : 'bg-gray-700',
                    ),
                    onClick: () => s('defender'),
                    children: '\u0628\u06cc\u200c\u06af\u0646\u0627\u0647',
                  }),
                ],
              }),
              (0, bo.jsx)('textarea', {
                value: a,
                onChange: (t) => l(t.target.value),
                placeholder:
                  '\ud83d\udcdd \u0627\u0633\u062a\u062f\u0644\u0627\u0644 \u062e\u0648\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f...',
                className: 'w-full h-32 p-3 rounded bg-white text-black',
              }),
              (0, bo.jsx)('button', {
                onClick: async () => {
                  if (r && a)
                    try {
                      (await bh.post('/api/argument', {
                        case_id: f,
                        vote: r,
                        argument: a,
                      }),
                        d(!0));
                      const t = await bh.get('/api/argument/stats/'.concat(f));
                      i(t.data);
                    } catch (t) {
                      (console.error(
                        '\u274c \u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0633\u062a\u062f\u0644\u0627\u0644:',
                        t,
                      ),
                        alert(
                          '\u26a0\ufe0f \u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0633\u062a\u062f\u0644\u0627\u0644. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.',
                        ));
                    }
                  else
                    alert(
                      '\u0644\u0637\u0641\u0627\u064b \u0631\u0623\u06cc \u0648 \u0627\u0633\u062a\u062f\u0644\u0627\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.',
                    );
                },
                className:
                  'mt-4 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded',
                children: '\ud83d\udcec \u0627\u0631\u0633\u0627\u0644',
              }),
            ],
          }),
        h &&
          (0, bo.jsx)('div', {
            className: 'text-green-400 font-bold text-lg mt-4',
            children:
              '\u2705 \u0631\u0623\u06cc \u0634\u0645\u0627 \u062b\u0628\u062a \u0634\u062f',
          }),
      ],
    });
  }
  Jg.register(rv, Wv, Pv, Yv, Qv, _v, Cv);
  const Ly = (t) => {
      let { totalPoints: e, userPoints: n, history: i = [] } = t;
      return (0, bo.jsxs)('div', {
        className:
          'p-4 border rounded-2xl shadow mb-6 w-full max-w-md mx-auto bg-white',
        children: [
          (0, bo.jsx)('h2', {
            className: 'text-lg font-bold mb-2 text-center',
            children:
              '\ud83d\udcca \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0628\u0627\u0632\u06cc \u062d\u0642\u0648\u0642\u06cc',
          }),
          (0, bo.jsxs)('div', {
            className: 'flex justify-between mb-2 text-sm',
            children: [
              (0, bo.jsx)('span', {
                children:
                  '\ud83d\udd39 \u06a9\u0644 \u0627\u0645\u062a\u06cc\u0627\u0632\u0647\u0627\u06cc \u0647\u0645\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646:',
              }),
              (0, bo.jsx)('strong', { children: e }),
            ],
          }),
          (0, bo.jsxs)('div', {
            className: 'flex justify-between mb-4 text-sm',
            children: [
              (0, bo.jsx)('span', {
                children:
                  '\ud83e\ude99 \u0627\u0645\u062a\u06cc\u0627\u0632/RLC \u0634\u0645\u0627:',
              }),
              (0, bo.jsx)('strong', { children: n }),
            ],
          }),
          (0, bo.jsxs)('div', {
            className: 'mt-3',
            children: [
              (0, bo.jsx)('p', {
                className: 'font-semibold mb-1 text-sm',
                children:
                  '\ud83d\udcc5 \u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a \u0634\u0645\u0627:',
              }),
              0 === i.length
                ? (0, bo.jsx)('p', {
                    className: 'text-gray-500 text-sm text-center',
                    children:
                      '\u0647\u06cc\u0686 \u0633\u0627\u0628\u0642\u0647\u200c\u0627\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
                  })
                : (0, bo.jsx)('ul', {
                    className:
                      'list-disc list-inside text-sm text-right max-h-40 overflow-y-auto pr-2',
                    children: i.map((t, e) =>
                      (0, bo.jsxs)(
                        'li',
                        {
                          children: [
                            t.date,
                            ': ',
                            t.points,
                            ' \u0627\u0645\u062a\u06cc\u0627\u0632',
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
            ],
          }),
        ],
      });
    },
    Ny = () => {
      et();
      return (0, bo.jsx)(ql, {});
    },
    jy = () =>
      (0, bo.jsx)(_t, {
        children: (0, bo.jsxs)(vt, {
          children: [
            (0, bo.jsx)(mt, { path: '/', element: (0, bo.jsx)(Ny, {}) }),
            (0, bo.jsx)(mt, {
              path: '/case-selection',
              element: (0, bo.jsx)(Kl, {}),
            }),
            (0, bo.jsx)(mt, {
              path: '/hearing-room',
              element: (0, bo.jsx)(Ry, {}),
            }),
            (0, bo.jsx)(mt, {
              path: '/dashboard',
              element: (0, bo.jsx)(Ly, { totalPoints: 0, userPoints: 0 }),
            }),
          ],
        }),
      });
  a.createRoot(document.getElementById('root')).render(
    (0, bo.jsx)(o.StrictMode, { children: (0, bo.jsx)(jy, {}) }),
  );
})();
//# sourceMappingURL=main.bb5cb85b.js.map

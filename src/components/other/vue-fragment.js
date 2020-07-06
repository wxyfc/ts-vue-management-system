/* eslint-disable */

// @ts-nocheck
function _defineProperty (e, n, t) {
  return n in e ? Object.defineProperty ( e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  } ) : e[ n ] = t, e
}

function _objectSpread (e) {
  for ( var n = 1 ; n < arguments.length ; n++ ) {
    var t = null != arguments[ n ] ? arguments[ n ] : {}, r = Object.keys ( t )
    'function' == typeof Object.getOwnPropertySymbols && ( r = r.concat ( Object.getOwnPropertySymbols ( t ).filter ( function (e) {
      return Object.getOwnPropertyDescriptor ( t, e ).enumerable
    } ) ) ), r.forEach ( function (n) {
      _defineProperty ( e, n, t[ n ] )
    } )
  }
  return e
}

var freeze = function (e, n, t) {
  Object.defineProperty ( e, n, {
    configurable: !0,
    get: function () {
      return t
    },
    set: function (e) {
      console.warn ( 'tried to set frozen property '.concat ( n, ' with ' ).concat ( e ) )
    }
  } )
}, unfreeze = function (e, n) {
  var t = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : null
  Object.defineProperty ( e, n, {
    configurable: !0,
    writable: !0,
    value: t
  } )
}, component = {
  abstract: !0,
  name: 'Fragment',
  props: {
    name: {
      type: String,
      default: function () {
        return Math.floor ( Date.now () * Math.random () ).toString ( 16 )
      }
    }
  },
  mounted: function () {
    var e = this.$el, n = e.parentNode
    e.__isFragment = !0, e.__isMounted = !1
    var t = document.createComment ( 'fragment#'.concat ( this.name, '#head' ) ), r = document.createComment ( 'fragment#'.concat ( this.name, '#tail' ) )
    if ( e.__head = t, e.__tail = r, n.insertBefore ( t, e ), n.insertBefore ( r, e ), e.appendChild = function (t) {
      n.insertBefore ( t, r ), freeze ( t, 'parentNode', e )
    }, e.insertBefore = function (t, r) {
      n.insertBefore ( t, r ), freeze ( t, 'parentNode', e )
    }, e.removeChild = function (e) {
      n.removeChild ( e ), unfreeze ( e, 'parentNode' )
    }, Array.from ( e.childNodes ).forEach ( function (n) {
      return e.appendChild ( n )
    } ), n.removeChild ( e ), freeze ( e, 'parentNode', n ), freeze ( e, 'nextSibling', r.nextSibling ), r.nextSibling && freeze ( r.nextSibling, 'previousSibling', e ), e.__isMounted = !0, !n.__isFragmentParent ) {
      n.__isFragmentParent = !0
      var i = n.insertBefore
      n.insertBefore = function (e, t) {
        var r = t && t.__isFragment && t.__isMounted ? t.__head : t
        if ( e.__isFragment && e.__isMounted ) {
          if ( e === t ) return void console.error ( 'something must be wrong' )
          freeze ( e, 'parentNode', n ), e.previousSibling && freeze ( e.previousSibling, 'nextSibling', e.nextSibling ), e.nextSibling && freeze ( e.nextSibling, 'previousSibling', e.previousSibling ), freeze ( e, 'nextSibling', t ), freeze ( e, 'previousSibling', t.previousSibling ), t.previousSibling && freeze ( t.previousSibling, 'nextSibling', e ), freeze ( t, 'previousSibling', e )
          for ( var o = [], a = e.__head ; a !== e.__tail ; ) o.push ( a ), a = a.nextSibling
          o.push ( e.__tail )
          for ( var l = 0 ; l < o.length ; l++ ) {
            var f = o[ l ]
            i.call ( n, f, r )
          }
        } else {
          i.call ( n, e, r )
        }
      }
      var o = n.removeChild
      n.removeChild = function (t) {
        if ( t.__isFragment && t.__isMounted ) {
          for ( ; t.__head.nextSibling !== t.__tail ; ) t.removeChild ( t.__head.nextSibling )
          n.removeChild ( t.__head ), n.removeChild ( t.__tail ), unfreeze ( e, 'parentNode' )
        } else {
          o.call ( n, t )
        }
      }
    }
  },
  render: function (e) {
    var n = this, t = this.$slots.default
    return t && t.length && t.forEach ( function (e) {
      return e.data = _objectSpread ( {}, e.data, { attrs: _objectSpread ( { fragment: n.name }, ( e.data || {} ).attrs ) } )
    } ), e ( 'div', { attrs: { fragment: this.name } }, t )
  }
}

function ssr (e, n) {
  'production' !== process.env.NODE_ENV && console.warn ( 'v-fragment SSR is not implemented yet.' )
}

var Fragment = component, SSR = ssr, Plugin = {
  install: function (e) {
    e.component ( 'renderless-component', component )
  }
}, index = {
  Fragment: component,
  Plugin: Plugin,
  SSR: ssr
}
export default index
export { Fragment, SSR, Plugin }

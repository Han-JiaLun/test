/*! 版权所有，翻版必究 */ !(function (t) {
	var n = {}
	function e(r) {
		if (n[r]) return n[r].exports
		var a = (n[r] = { i: r, l: !1, exports: {} })
		return t[r].call(a.exports, a, a.exports, e), (a.l = !0), a.exports
	}
	;(e.m = t),
		(e.c = n),
		(e.d = function (t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
		}),
		(e.r = function (t) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(t, '__esModule', { value: !0 })
		}),
		(e.t = function (t, n) {
			if ((1 & n && (t = e(t)), 8 & n)) return t
			if (4 & n && 'object' == typeof t && t && t.__esModule) return t
			var r = Object.create(null)
			if (
				(e.r(r),
				Object.defineProperty(r, 'default', {
					enumerable: !0,
					value: t,
				}),
				2 & n && 'string' != typeof t)
			)
				for (var a in t)
					e.d(
						r,
						a,
						function (n) {
							return t[n]
						}.bind(null, a)
					)
			return r
		}),
		(e.n = function (t) {
			var n =
				t && t.__esModule
					? function () {
							return t.default
					  }
					: function () {
							return t
					  }
			return e.d(n, 'a', n), n
		}),
		(e.o = function (t, n) {
			return Object.prototype.hasOwnProperty.call(t, n)
		}),
		(e.p = ''),
		e((e.s = 9))
})([
	function (t, n) {
		t.exports = function (t) {
			var n = []
			return (
				(n.toString = function () {
					return this.map(function (n) {
						var e = (function (t, n) {
							var e = t[1] || '',
								r = t[3]
							if (!r) return e
							if (n && 'function' == typeof btoa) {
								var a =
										((o = r),
										'/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
											btoa(
												unescape(
													encodeURIComponent(
														JSON.stringify(o)
													)
												)
											) +
											' */'),
									i = r.sources.map(function (t) {
										return (
											'/*# sourceURL=' +
											r.sourceRoot +
											t +
											' */'
										)
									})
								return [e].concat(i).concat([a]).join('\n')
							}
							var o
							return [e].join('\n')
						})(n, t)
						return n[2] ? '@media ' + n[2] + '{' + e + '}' : e
					}).join('')
				}),
				(n.i = function (t, e) {
					'string' == typeof t && (t = [[null, t, '']])
					for (var r = {}, a = 0; a < this.length; a++) {
						var i = this[a][0]
						'number' == typeof i && (r[i] = !0)
					}
					for (a = 0; a < t.length; a++) {
						var o = t[a]
						;('number' == typeof o[0] && r[o[0]]) ||
							(e && !o[2]
								? (o[2] = e)
								: e &&
								  (o[2] = '(' + o[2] + ') and (' + e + ')'),
							n.push(o))
					}
				}),
				n
			)
		}
	},
	function (t, n, e) {
		var r,
			a,
			i = {},
			o =
				((r = function () {
					return window && document && document.all && !window.atob
				}),
				function () {
					return void 0 === a && (a = r.apply(this, arguments)), a
				}),
			s = function (t) {
				return document.querySelector(t)
			},
			m = (function (t) {
				var n = {}
				return function (t) {
					if ('function' == typeof t) return t()
					if (void 0 === n[t]) {
						var e = s.call(this, t)
						if (
							window.HTMLIFrameElement &&
							e instanceof window.HTMLIFrameElement
						)
							try {
								e = e.contentDocument.head
							} catch (t) {
								e = null
							}
						n[t] = e
					}
					return n[t]
				}
			})(),
			f = null,
			c = 0,
			l = [],
			d = e(5)
		function p(t, n) {
			for (var e = 0; e < t.length; e++) {
				var r = t[e],
					a = i[r.id]
				if (a) {
					a.refs++
					for (var o = 0; o < a.parts.length; o++)
						a.parts[o](r.parts[o])
					for (; o < r.parts.length; o++)
						a.parts.push(y(r.parts[o], n))
				} else {
					var s = []
					for (o = 0; o < r.parts.length; o++)
						s.push(y(r.parts[o], n))
					i[r.id] = { id: r.id, refs: 1, parts: s }
				}
			}
		}
		function b(t, n) {
			for (var e = [], r = {}, a = 0; a < t.length; a++) {
				var i = t[a],
					o = n.base ? i[0] + n.base : i[0],
					s = { css: i[1], media: i[2], sourceMap: i[3] }
				r[o]
					? r[o].parts.push(s)
					: e.push((r[o] = { id: o, parts: [s] }))
			}
			return e
		}
		function k(t, n) {
			var e = m(t.insertInto)
			if (!e)
				throw new Error(
					"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
				)
			var r = l[l.length - 1]
			if ('top' === t.insertAt)
				r
					? r.nextSibling
						? e.insertBefore(n, r.nextSibling)
						: e.appendChild(n)
					: e.insertBefore(n, e.firstChild),
					l.push(n)
			else if ('bottom' === t.insertAt) e.appendChild(n)
			else {
				if ('object' != typeof t.insertAt || !t.insertAt.before)
					throw new Error(
						"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
					)
				var a = m(t.insertInto + ' ' + t.insertAt.before)
				e.insertBefore(n, a)
			}
		}
		function w(t) {
			if (null === t.parentNode) return !1
			t.parentNode.removeChild(t)
			var n = l.indexOf(t)
			n >= 0 && l.splice(n, 1)
		}
		function g(t) {
			var n = document.createElement('style')
			return (t.attrs.type = 'text/css'), u(n, t.attrs), k(t, n), n
		}
		function u(t, n) {
			Object.keys(n).forEach(function (e) {
				t.setAttribute(e, n[e])
			})
		}
		function y(t, n) {
			var e, r, a, i
			if (n.transform && t.css) {
				if (!(i = n.transform(t.css))) return function () {}
				t.css = i
			}
			if (n.singleton) {
				var o = c++
				;(e = f || (f = g(n))),
					(r = v.bind(null, e, o, !1)),
					(a = v.bind(null, e, o, !0))
			} else
				t.sourceMap &&
				'function' == typeof URL &&
				'function' == typeof URL.createObjectURL &&
				'function' == typeof URL.revokeObjectURL &&
				'function' == typeof Blob &&
				'function' == typeof btoa
					? ((e = (function (t) {
							var n = document.createElement('link')
							return (
								(t.attrs.type = 'text/css'),
								(t.attrs.rel = 'stylesheet'),
								u(n, t.attrs),
								k(t, n),
								n
							)
					  })(n)),
					  (r = O.bind(null, e, n)),
					  (a = function () {
							w(e), e.href && URL.revokeObjectURL(e.href)
					  }))
					: ((e = g(n)),
					  (r = z.bind(null, e)),
					  (a = function () {
							w(e)
					  }))
			return (
				r(t),
				function (n) {
					if (n) {
						if (
							n.css === t.css &&
							n.media === t.media &&
							n.sourceMap === t.sourceMap
						)
							return
						r((t = n))
					} else a()
				}
			)
		}
		t.exports = function (t, n) {
			if (
				'undefined' != typeof DEBUG &&
				DEBUG &&
				'object' != typeof document
			)
				throw new Error(
					'The style-loader cannot be used in a non-browser environment'
				)
			;((n = n || {}).attrs = 'object' == typeof n.attrs ? n.attrs : {}),
				n.singleton ||
					'boolean' == typeof n.singleton ||
					(n.singleton = o()),
				n.insertInto || (n.insertInto = 'head'),
				n.insertAt || (n.insertAt = 'bottom')
			var e = b(t, n)
			return (
				p(e, n),
				function (t) {
					for (var r = [], a = 0; a < e.length; a++) {
						var o = e[a]
						;(s = i[o.id]).refs--, r.push(s)
					}
					t && p(b(t, n), n)
					for (a = 0; a < r.length; a++) {
						var s
						if (0 === (s = r[a]).refs) {
							for (var m = 0; m < s.parts.length; m++)
								s.parts[m]()
							delete i[s.id]
						}
					}
				}
			)
		}
		var h,
			x =
				((h = []),
				function (t, n) {
					return (h[t] = n), h.filter(Boolean).join('\n')
				})
		function v(t, n, e, r) {
			var a = e ? '' : r.css
			if (t.styleSheet) t.styleSheet.cssText = x(n, a)
			else {
				var i = document.createTextNode(a),
					o = t.childNodes
				o[n] && t.removeChild(o[n]),
					o.length ? t.insertBefore(i, o[n]) : t.appendChild(i)
			}
		}
		function z(t, n) {
			var e = n.css,
				r = n.media
			if ((r && t.setAttribute('media', r), t.styleSheet))
				t.styleSheet.cssText = e
			else {
				for (; t.firstChild; ) t.removeChild(t.firstChild)
				t.appendChild(document.createTextNode(e))
			}
		}
		function O(t, n, e) {
			var r = e.css,
				a = e.sourceMap,
				i = void 0 === n.convertToAbsoluteUrls && a
			;(n.convertToAbsoluteUrls || i) && (r = d(r)),
				a &&
					(r +=
						'\n/*# sourceMappingURL=data:application/json;base64,' +
						btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
						' */')
			var o = new Blob([r], { type: 'text/css' }),
				s = t.href
			;(t.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s)
		}
	},
	function (t, n) {
		t.exports = {
			NUMBER_MATRIX: [
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[0, 1],
					[2, 1],
					[0, 2],
					[2, 2],
					[0, 3],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[1, 0],
					[0, 1],
					[1, 1],
					[1, 2],
					[1, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[2, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[0, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[2, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[2, 0],
					[0, 1],
					[2, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[2, 3],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[0, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[0, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[0, 3],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[2, 1],
					[2, 2],
					[2, 3],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[0, 1],
					[2, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[0, 3],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
				[
					[0, 0],
					[1, 0],
					[2, 0],
					[0, 1],
					[2, 1],
					[0, 2],
					[1, 2],
					[2, 2],
					[2, 3],
					[0, 4],
					[1, 4],
					[2, 4],
				],
			],
		}
	},
	function (t, n, e) {
		var r = e(4)
		'string' == typeof r && (r = [[t.i, r, '']])
		var a = { hmr: !0, transform: void 0, insertInto: void 0 }
		e(1)(r, a)
		r.locals && (t.exports = r.locals)
	},
	function (t, n, e) {
		;(t.exports = e(0)(!1)).push([
			t.i,
			'html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(to bottom, #131313 0%, #02101c 100%);\r\n  margin: 0;\r\n  font-family: Helvetica, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  color: #ffffff;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n#container {\r\n  z-index: 3;\r\n  position: relative;\r\n  margin: 0 15vh;\r\n}\r\n\r\n#menu {\r\n  z-index: 4;\r\n  margin-left: 15vh;\r\n}\r\n\r\n.canvas-box {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n\r\n#info {\r\n  position: absolute;\r\n  width: 100%;\r\n  color: #ffffff;\r\n  padding: 5px;\r\n  font-family: Monospace;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  z-index: 1;\r\n}\r\n\r\n#menu {\r\n  position: absolute;\r\n  bottom: 2vh;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.element {\r\n  width: 12vh;\r\n  height: 16vh;\r\n  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);\r\n  border: 1px solid rgba(127, 255, 255, 0.25);\r\n  text-align: center;\r\n  cursor: default;\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n.element:hover {\r\n  box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);\r\n  border: 1px solid rgba(127, 255, 255, 0.75);\r\n}\r\n\r\n.element .company {\r\n  position: absolute;\r\n  top: 1.2vh;\r\n  right: 0;\r\n  width: 100%;\r\n  font-size: 2vh;\r\n  color: rgba(127, 255, 255, 0.75);\r\n}\r\n\r\n.element .name {\r\n  position: absolute;\r\n  top: 4.6vh;\r\n  left: 0;\r\n  right: 0;\r\n  font-size: 2.9vh;\r\n  font-weight: bold;\r\n  color: rgba(255, 255, 255, 0.75);\r\n  text-shadow: 0 0 1vh rgba(0, 255, 255, 0.95);\r\n}\r\n\r\n.element .details {\r\n  position: absolute;\r\n  bottom: 1.2vh;\r\n  left: 0;\r\n  right: 0;\r\n  font-size: 1.6vh;\r\n  color: rgba(127, 255, 255, 0.75);\r\n}\r\n\r\nbutton {\r\n  color: rgba(127, 255, 255, 0.75);\r\n  background: transparent;\r\n  outline: 1px solid rgba(127, 255, 255, 0.75);\r\n  border: 0;\r\n  padding: 1.6vh 4vh;\r\n  margin: 0 4.6vh;\r\n  font-size: 2vh;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgba(0, 255, 255, 0.5);\r\n}\r\n\r\nbutton:active {\r\n  color: #000000;\r\n  background-color: rgba(0, 255, 255, 0.75);\r\n}\r\n\r\n.highlight {\r\n  background-color: rgba(253, 105, 0, 0.95) !important;\r\n  box-shadow: 0 0 12px rgba(253, 105, 0, 0.95);\r\n  border: 1px solid rgba(253, 105, 0, 0.25);\r\n}\r\n\r\n.highlight.element .name {\r\n  text-shadow: 0 0 16px rgba(255, 255, 255, 0.95);\r\n}\r\n\r\n.prize.element .name {\r\n  text-shadow: none;\r\n}\r\n\r\n.prize.element {\r\n  transition: background-color 1.5s ease-in 0.3s;\r\n  background-color: rgba(253, 105, 0, 0.85) !important;\r\n  box-shadow: 0 0 12px rgba(253, 105, 0, 0.95);\r\n}\r\n\r\n.prize .company,\r\n.prize .details,\r\n.prize .name,\r\n.highlight .company,\r\n.highlight .name,\r\n.highlight .details {\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n\r\n.dan-mu {\r\n  visibility: hidden;\r\n  position: fixed;\r\n  z-index: -1;\r\n  font-size: 12px;\r\n  top: 1vh;\r\n  left: 0;\r\n  padding: 0 1.2vh;\r\n  height: 2.2vh;\r\n  line-height: 2.2vh;\r\n  border-radius: 1vh;\r\n  box-sizing: border-box;\r\n  background-color: rgba(0, 127, 127, 0.37);\r\n  box-shadow: 0 0 4px rgba(0, 255, 255, 0.5);\r\n  border: 1px solid rgba(127, 255, 255, 0.25);\r\n  color: rgba(127, 255, 255, 0.75);\r\n}\r\n\r\n.dan-mu.active {\r\n  visibility: visible;\r\n}\r\n\r\n#prizeBar {\r\n  position: fixed;\r\n  left: 0;\r\n  padding-left: 1.2vh;\r\n  top: 1.2vh;\r\n  z-index: 2;\r\n}\r\n\r\n.prize-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.prize-item {\r\n  padding: 9px;\r\n  margin: 6px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 4px;\r\n  flex-wrap: nowrap;\r\n  background-color: rgba(0, 127, 127, 0.37);\r\n  border: 1px solid rgba(127, 255, 255, 0.25);\r\n  color: rgba(127, 255, 255, 0.75);\r\n  width: 30vh;\r\n  height: 10vh;\r\n  box-sizing: border-box;\r\n  transition: -webkit-transform 1s ease-in;\r\n  transition: transform 1s ease-in;\r\n  transition: transform 1s ease-in, -webkit-transform 1s ease-in;\r\n}\r\n\r\n.prize-item .prize-img {\r\n  width: 8vh;\r\n  height: 8vh;\r\n  margin-right: 1.2vh;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  text-shadow: 0 0 1vh rgba(0, 255, 255, 0.95);\r\n  overflow: hidden;\r\n}\r\n\r\n.prize-img img {\r\n  width: 90%;\r\n  height: 90%;\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.prize-text {\r\n  flex: 1;\r\n}\r\n\r\n.prize-title {\r\n  margin: 4px 0;\r\n  font-size: 1.8vh;\r\n}\r\n\r\n.prize-count {\r\n  padding: 4px 0;\r\n  position: relative;\r\n}\r\n\r\n.prize-count .progress {\r\n  height: 1.8vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  padding: 1px;\r\n  overflow: visible;\r\n  border-radius: 1vh;\r\n}\r\n\r\n.progress .progress-bar {\r\n  border-radius: 1.8vh;\r\n  position: relative;\r\n  -webkit-animation: animate-positive 2s;\r\n          animation: animate-positive 2s;\r\n  background-color: #d9534f;\r\n  height: 1.8vh;\r\n  transition: width 0.6s ease;\r\n}\r\n\r\n.progress-bar.active {\r\n  animation: reverse progress-bar-stripes 0.4s linear infinite,\r\n    animate-positive 2s;\r\n}\r\n\r\n.progress-bar-striped {\r\n  background-image: linear-gradient(45deg,\r\n      rgba(255, 255, 255, 0.15) 25%,\r\n      transparent 25%,\r\n      transparent 50%,\r\n      rgba(255, 255, 255, 0.15) 50%,\r\n      rgba(255, 255, 255, 0.15) 75%,\r\n      transparent 75%,\r\n      transparent);\r\n  background-size: 8px 8px;\r\n}\r\n\r\n@-webkit-keyframes animate-positive {\r\n  0% {\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes animate-positive {\r\n  0% {\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 8px 0;\r\n  }\r\n\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 8px 0;\r\n  }\r\n\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.prize-count-left {\r\n  position: absolute;\r\n  color: #fff;\r\n  right: 9px;\r\n  font-size: 1.8vh;\r\n  line-height: 1.6vh;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.shine {\r\n  box-shadow: 0 0 15px 0 rgba(0, 255, 255, 0.5);\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n  -webkit-transform-origin: left center;\r\n          transform-origin: left center;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.done {\r\n  position: relative;\r\n}\r\n\r\n.done:after {\r\n  content: "";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.shine span {\r\n  position: absolute;\r\n  display: block\r\n}\r\n\r\n.shine span:nth-child(1) {\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(90deg, transparent, #03e9f4);\r\n  -webkit-animation: animate1 1s linear infinite;\r\n          animation: animate1 1s linear infinite\r\n}\r\n\r\n@-webkit-keyframes animate1 {\r\n  0% {\r\n    left: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    left: 100%\r\n  }\r\n}\r\n\r\n@keyframes animate1 {\r\n  0% {\r\n    left: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    left: 100%\r\n  }\r\n}\r\n\r\n.shine span:nth-child(2) {\r\n  top: -100%;\r\n  right: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(180deg, transparent, #03e9f4);\r\n  -webkit-animation: animate2 1s linear infinite;\r\n          animation: animate2 1s linear infinite;\r\n  -webkit-animation-delay: .25s;\r\n          animation-delay: .25s\r\n}\r\n\r\n@-webkit-keyframes animate2 {\r\n  0% {\r\n    top: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    top: 100%\r\n  }\r\n}\r\n\r\n@keyframes animate2 {\r\n  0% {\r\n    top: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    top: 100%\r\n  }\r\n}\r\n\r\n.shine span:nth-child(3) {\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(270deg, transparent, #03e9f4);\r\n  -webkit-animation: animate3 1s linear infinite;\r\n          animation: animate3 1s linear infinite;\r\n  -webkit-animation-delay: .50s;\r\n          animation-delay: .50s\r\n}\r\n\r\n@-webkit-keyframes animate3 {\r\n  0% {\r\n    right: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    right: 100%\r\n  }\r\n}\r\n\r\n@keyframes animate3 {\r\n  0% {\r\n    right: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    right: 100%\r\n  }\r\n}\r\n\r\n.shine span:nth-child(4) {\r\n  bottom: -100%;\r\n  left: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(360deg, transparent, #03e9f4);\r\n  -webkit-animation: animate4 1s linear infinite;\r\n          animation: animate4 1s linear infinite;\r\n  -webkit-animation-delay: .75s;\r\n          animation-delay: .75s\r\n}\r\n\r\n@-webkit-keyframes animate4 {\r\n  0% {\r\n    bottom: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    bottom: 100%\r\n  }\r\n}\r\n\r\n@keyframes animate4 {\r\n  0% {\r\n    bottom: -100%\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    bottom: 100%\r\n  }\r\n}\r\n\r\n\r\n.shine.prize-item {\r\n  /* width: 24vh; */\r\n  margin: 1.8vh 0;\r\n}\r\n\r\n.prize-mess {\r\n  color: #fff;\r\n  line-height: 5vh;\r\n  font-size: 1.6vh;\r\n  margin: 2.4vh 0;\r\n}\r\n\r\n.prize-shine {\r\n  font-size: 5vh;\r\n  font-weight: bold;\r\n  color: #db5c58;\r\n  vertical-align: middle;\r\n  padding: 0 6px;\r\n}\r\n\r\n.qipao-container {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 10vh;\r\n  bottom: 1vh;\r\n  width: 24vh;\r\n  z-index: 2;\r\n}\r\n\r\n.qipao {\r\n  width: 100%;\r\n  padding: 1.8vh 1.4vh;\r\n  line-height: 1.414;\r\n  margin: 4px 0;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  background-color: rgba(127, 255, 255, 0.25);\r\n  color: rgba(127, 255, 255, 0.75);\r\n}\r\n\r\n.music {\r\n  position: fixed;\r\n  top: 3vh;\r\n  right: 4vh;\r\n  z-index: 5;\r\n}\r\n\r\n.music-item {\r\n  display: block !important;\r\n  opacity: 0;\r\n}\r\n\r\n.music-box {\r\n  width: 5vh;\r\n  height: 5vh;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 5vh;\r\n  font-size: 1.4vh;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  background-color: rgba(253, 105, 0, 0.9);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.rotate-active {\r\n  -webkit-animation: rotate 4s linear infinite;\r\n          animation: rotate 4s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.margin-l-40 {\r\n  margin-left: 40px;\r\n}\r\n\r\n.fixed-bar {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.fixed-btn {\r\n  margin: 20px 0 0;\r\n  width: 200px;\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\n#lottery {\r\n  -webkit-animation: breath 1.6s linear infinite;\r\n          animation: breath 1.6s linear infinite;\r\n  box-shadow: 0px 0px 15px rgb(127 255 255 / 75%);\r\n}\r\n\r\n@-webkit-keyframes breath {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 0.8;\r\n  }\r\n}\r\n\r\n@keyframes breath {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 0.8;\r\n  }\r\n}',
			'',
		])
	},
	function (t, n) {
		t.exports = function (t) {
			var n = 'undefined' != typeof window && window.location
			if (!n) throw new Error('fixUrls requires window.location')
			if (!t || 'string' != typeof t) return t
			var e = n.protocol + '//' + n.host,
				r = e + n.pathname.replace(/\/[^\/]*$/, '/')
			return t.replace(
				/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
				function (t, n) {
					var a,
						i = n
							.trim()
							.replace(/^"(.*)"$/, function (t, n) {
								return n
							})
							.replace(/^'(.*)'$/, function (t, n) {
								return n
							})
					return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
						i
					)
						? t
						: ((a =
								0 === i.indexOf('//')
									? i
									: 0 === i.indexOf('/')
									? e + i
									: r + i.replace(/^\.\//, '')),
						  'url(' + JSON.stringify(a) + ')')
				}
			)
		}
	},
	function (t, n, e) {
		var r = e(7)
		'string' == typeof r && (r = [[t.i, r, '']])
		var a = { hmr: !0, transform: void 0, insertInto: void 0 }
		e(1)(r, a)
		r.locals && (t.exports = r.locals)
	},
	function (t, n, e) {
		;(t.exports = e(0)(!1)).push([
			t.i,
			'@charset "UTF-8";\r\n\r\n/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.2\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2017 Daniel Eden\r\n */\r\n\r\n.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}@keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}',
			'',
		])
	},
	function (t, n) {
		!(function () {
			window.requestAnimFrame = window.requestAnimationFrame
			var t = document.getElementById('canvas')
			!(function () {
				;(window.onresize = arguments.callee),
					(w = window.innerWidth),
					(h = window.innerHeight),
					(t.width = w),
					(t.height = h)
			})()
			var n,
				e,
				r,
				a,
				i = t.getContext('2d'),
				o = '0.' + Math.floor(9 * Math.random()) + 1,
				s = 2 * t.width,
				m = []
			function f() {
				for (
					n = t.width / 2, e = t.height / 2, m = [], a = 0;
					a < 800;
					a++
				)
					(r = {
						x: Math.random() * t.width,
						y: Math.random() * t.height,
						z: Math.random() * t.width,
						o: '0.' + Math.floor(99 * Math.random()) + 1,
					}),
						m.push(r)
			}
			f(),
				(function c() {
					requestAnimFrame(c),
						(function () {
							for (a = 0; a < 800; a++)
								(r = m[a]).z--, r.z <= 0 && (r.z = t.width)
						})(),
						(function () {
							var c, l, d
							;(t.width == window.innerWidth &&
								t.width == window.innerWidth) ||
								((t.width = window.innerWidth),
								(t.height = window.innerHeight),
								f())
							;(i.fillStyle = 'rgba(0,10,20,1)'),
								i.fillRect(0, 0, t.width, t.height)
							for (
								i.fillStyle = 'rgba(209, 255, 255, ' + o + ')',
									a = 0;
								a < 800;
								a++
							)
								(r = m[a]),
									(c = (r.x - n) * (s / r.z)),
									(c += n),
									(l = (r.y - e) * (s / r.z)),
									(l += e),
									(d = (s / r.z) * 1),
									i.fillRect(c, l, d, d),
									(i.fillStyle =
										'rgba(209, 255, 255, ' + r.o + ')')
						})()
				})()
		})()
	},
	function (t, n, e) {
		'use strict'
		e.r(n)
		e(3), e(6), e(8)
		document.body.clientWidth
		let r,
			a = 0
		let i = {},
			o = 0
		class s {
			constructor(t) {
				'object' != typeof t && (t = { text: t }),
					(this.text = t.text),
					(this.onComplete = t.onComplete),
					(this.$par = document.querySelector('.qipao-container')),
					this.$par ||
						((this.$par = document.createElement('div')),
						(this.$par.className = 'qipao-container'),
						document.body.appendChild(this.$par)),
					this.init()
			}
			init() {
				;(this.element = document.createElement('div')),
					(this.element.className = 'qipao animated'),
					this.$par.appendChild(this.element),
					this.start()
			}
			setText(t) {
				;(this.text = t || this.text),
					(this.element.textContent = this.text)
			}
			start(t) {
				this.setText(t),
					this.element.classList.remove('bounceOutRight'),
					this.element.classList.add('bounceInRight'),
					setTimeout(() => {
						this.element.classList.remove('bounceInRight'),
							this.element.classList.add('bounceOutRight'),
							this.onComplete && this.onComplete()
					}, 4e3)
			}
		}
		let m = (() => {
			let t = []
			return function (n) {
				let e
				;(e =
					t.length > 0
						? t.shift()
						: new s({
								onComplete() {
									t.push(e)
								},
						  })),
					e.start(n)
			}
		})()
		function f(t) {
			let n = r[t]
			n.type === a && n.count
			let e = `<div class="prize-mess">正在抽取<label id="prizeType" class="prize-shine">${n.text}</label><label id="prizeText" class="prize-shine">${n.title}</label>，剩余<label id="prizeLeft" class="prize-shine">${n.count}</label>个</div><ul class="prize-list">`
			r.forEach((t) => {
				if (t.type === a) return !0
				e += `<li id="prize-item-${t.type}" class="prize-item ${
					t.type == n.type ? 'shine' : ''
				}">\n                        <span></span><span></span><span></span><span></span>\n                        <div class="prize-img">\n                            <img src="${
					t.img
				}" alt="${
					t.title
				}">\n                        </div>\n                        <div class="prize-text">\n                            <h5 class="prize-title">${
					t.text
				} ${
					t.title
				}</h5>\n                            <div class="prize-count">\n                                <div class="progress">\n                                    <div id="prize-bar-${
					t.type
				}" class="progress-bar progress-bar-danger progress-bar-striped active" style="width: 100%;">\n                                    </div>\n                                </div>\n                                <div id="prize-count-${
					t.type
				}" class="prize-count-left">\n                                    ${
					t.count + '/' + t.count
				}\n                                </div>\n                            </div>\n                        </div>\n                    </li>`
			}),
				(e += '</ul>'),
				(document.querySelector('#prizeBar').innerHTML = e)
		}
		let c = function (t, n, e) {
			let a = r[t],
				s = a.type,
				m = i[s],
				f = a.count
			if (
				(m ||
					((m = {
						box: document.querySelector('#prize-item-' + s),
						bar: document.querySelector('#prize-bar-' + s),
						text: document.querySelector('#prize-count-' + s),
					}),
					(i[s] = m)),
				i.prizeType ||
					((i.prizeType = document.querySelector('#prizeType')),
					(i.prizeLeft = document.querySelector('#prizeLeft')),
					(i.prizeText = document.querySelector('#prizeText'))),
				e)
			)
				for (let n = r.length - 1; n > t; n--) {
					let t = r[n].type
					;(document.querySelector('#prize-item-' + t).className =
						'prize-item done'),
						(document.querySelector('#prize-bar-' + t).style.width =
							'0'),
						(document.querySelector(
							'#prize-count-' + t
						).textContent = '0/' + r[n].count)
				}
			if (o !== t) {
				let n = r[o],
					e = document.querySelector('#prize-item-' + n.type)
				e.classList.remove('shine'),
					e.classList.add('done'),
					m.box && m.box.classList.add('shine'),
					(i.prizeType.textContent = a.text),
					(i.prizeText.textContent = a.title),
					(o = t)
			}
			if (0 === t)
				return (
					(i.prizeType.textContent = '特别奖'),
					(i.prizeText.textContent = ' '),
					void (i.prizeLeft.textContent = '不限制')
				)
			let c = ((n = (n = f - n) < 0 ? 0 : n) / f).toFixed(2)
			m.bar && (m.bar.style.width = 100 * c + '%'),
				m.text && (m.text.textContent = n + '/' + f),
				(i.prizeLeft.textContent = n)
		}
		var l = e(2)
		let d,
			p,
			b,
			k,
			w,
			g,
			u,
			y,
			h,
			x,
			v,
			z = {
				enter: document.querySelector('#enter'),
				lotteryBar: document.querySelector('#lotteryBar'),
				lottery: document.querySelector('#lottery'),
			},
			O = [],
			I = [],
			X = { table: [], sphere: [] },
			L = [],
			U = !1,
			R = { prizes: [], users: [], luckyUsers: {}, leftUsers: [] },
			E = !1,
			Y = []
		function D(t = !1) {
			E = t
		}
		function T(t) {
			switch (t) {
				case 'enter':
					z.enter.classList.remove('none'),
						z.lotteryBar.classList.add('none'),
						M(X.table, 2e3)
					break
				default:
					z.enter.classList.add('none'),
						z.lotteryBar.classList.remove('none'),
						M(X.sphere, 2e3)
			}
		}
		function B(t, n) {
			let e = document.createElement('div')
			return (e.className = t || ''), (e.innerHTML = n || ''), e
		}
		function S(t, n, e, r) {
			var a = B()
			return (
				(a.id = 'card-' + e),
				n
					? ((a.className = 'element lightitem'),
					  r && a.classList.add('highlight'))
					: ((a.className = 'element'),
					  (a.style.backgroundColor =
							'rgba(0,127,127,' +
							(0.7 * Math.random() + 0.25) +
							')')),
				a.appendChild(B('company', k)),
				a.appendChild(B('name', t[1])),
				a.appendChild(B('details', t[0] + '<br/>' + t[2])),
				a
			)
		}
		function M(t, n) {
			for (var e = 0; e < I.length; e++) {
				var r = I[e],
					a = t[e]
				new TWEEN.Tween(r.position)
					.to(
						{ x: a.position.x, y: a.position.y, z: a.position.z },
						Math.random() * n + n
					)
					.easing(TWEEN.Easing.Exponential.InOut)
					.start(),
					new TWEEN.Tween(r.rotation)
						.to(
							{
								x: a.rotation.x,
								y: a.rotation.y,
								z: a.rotation.z,
							},
							Math.random() * n + n
						)
						.easing(TWEEN.Easing.Exponential.InOut)
						.start()
			}
			new TWEEN.Tween(this)
				.to({}, 2 * n)
				.onUpdate(j)
				.start()
		}
		function Z() {
			;(w.aspect = window.innerWidth / window.innerHeight),
				w.updateProjectionMatrix(),
				u.setSize(window.innerWidth, window.innerHeight),
				j()
		}
		function C() {
			requestAnimationFrame(C), TWEEN.update(), y.update()
		}
		function j() {
			u.render(g, w)
		}
		function N(t = 500) {
			return 0 === Y.length
				? Promise.resolve()
				: (L.forEach((n) => {
						let e = I[n],
							r = X.sphere[n]
						new TWEEN.Tween(e.position)
							.to(
								{
									x: r.position.x,
									y: r.position.y,
									z: r.position.z,
								},
								Math.random() * t + t
							)
							.easing(TWEEN.Easing.Exponential.InOut)
							.start(),
							new TWEEN.Tween(e.rotation)
								.to(
									{
										x: r.rotation.x,
										y: r.rotation.y,
										z: r.rotation.z,
									},
									Math.random() * t + t
								)
								.easing(TWEEN.Easing.Exponential.InOut)
								.start()
				  }),
				  new Promise((n, e) => {
						new TWEEN.Tween(this)
							.to({}, 2 * t)
							.onUpdate(j)
							.start()
							.onComplete(() => {
								L.forEach((t) => {
									I[t].element.classList.remove('prize')
								}),
									n()
							})
				  }))
		}
		function q() {
			;(z.lottery.innerHTML = '结束抽奖'),
				new Promise((t, n) => {
					;(g.rotation.y = 0),
						(h = new TWEEN.Tween(g.rotation)),
						h
							.to({ y: 6 * Math.PI * 1e3 }, 3e6)
							.onUpdate(j)
							.start()
							.onStop(() => {
								;(g.rotation.y = 0), t()
							})
							.onComplete(() => {
								t()
							})
				}).then(() => {
					;(Y = []), (L = [])
					let t = b[x],
						n = R.luckyUsers[v.type],
						e = R.leftUsers.length,
						r = v.count - (n ? n.length : 0)
					e < t &&
						(m(
							'剩余参与抽奖人员不足，现在重新设置所有人员可以进行二次抽奖！'
						),
						(R.leftUsers = R.users.slice()),
						(e = R.leftUsers.length))
					for (let n = 0; n < t; n++) {
						let t = A(e)
						Y.push(R.leftUsers.splice(t, 1)[0]), e--, r--
						let n = A(d)
						for (; L.includes(n); ) n = A(d)
						if ((L.push(n), 0 === r)) break
					}
					!(function (t = 600) {
						U = !1
						let n = -(Y.length - 1) / 2,
							e = []
						if (Y.length > 5) {
							let t = [-87, 87],
								r = L.length,
								a = Math.ceil(r / 2)
							n = -(a - 1) / 2
							for (let r = 0; r < a; r++)
								e.push({ x: 140 * n * 1, y: 1 * t[0] }), n++
							n = -(r - a - 1) / 2
							for (let i = a; i < r; i++)
								e.push({ x: 140 * n * 1, y: 1 * t[1] }), n++
						} else
							for (let t = L.length; t > 0; t--)
								e.push({ x: 140 * n * 1, y: 0 }), n++
						let r = Y.map((t) => t[1])
						m(
							`恭喜${r.join('、')}获得${
								v.title
							}, 新的一年必定旺旺旺。`
						),
							L.forEach((r, a) => {
								W(r, Y[a])
								var i = I[r]
								new TWEEN.Tween(i.position)
									.to(
										{ x: e[a].x, y: 1 * e[a].y, z: 2200 },
										Math.random() * t + t
									)
									.easing(TWEEN.Easing.Exponential.InOut)
									.start(),
									new TWEEN.Tween(i.rotation)
										.to(
											{ x: 0, y: 0, z: 0 },
											Math.random() * t + t
										)
										.easing(TWEEN.Easing.Exponential.InOut)
										.start(),
									i.element.classList.add('prize'),
									n++
							}),
							new TWEEN.Tween(this)
								.to({}, 2 * t)
								.onUpdate(j)
								.start()
								.onComplete(() => {
									D()
								})
					})()
				})
		}
		function $() {
			if (!v) return
			let t = v.type,
				n = R.luckyUsers[t] || []
			return (
				(n = n.concat(Y)),
				(R.luckyUsers[t] = n),
				v.count <= n.length &&
					(x--, x <= -1 && (x = 0), (v = R.prizes[x])),
				Y.length > 0
					? new Promise((t) => {
							setTimeout(t, 500)
					  })
					: Promise.resolve()
			)
		}
		function A(t) {
			return Math.floor(Math.random() * t)
		}
		function W(t, n) {
			I[
				t
			].element.innerHTML = `<div class="company">${k}</div><div class="name">${
				n[1]
			}</div><div class="details">${n[0] || ''}<br/>${n[2] || 'MS'}</div>`
		}
		function H(t, n) {
			I[t].element.style.backgroundColor =
				n || 'rgba(0,127,127,' + (0.7 * Math.random() + 0.25) + ')'
		}
		window.AJAX({
			url: './data/getTempData.json',
			type: 'get',
			success(t) {
				console.log('getTempData.leftUsers', '手动循环生成数据 位置');
				for (let i = 0; i < 150; i++) {
					t.leftUsers[i] = ['好运连连', String(i + 1), '幸福绵绵']
				}
				var n
				;(p = t.cfgData.prizes),
					(b = t.cfgData.EACH_COUNT),
					(k = t.cfgData.COMPANY),
					(O = (function () {
						let t = new Date().getFullYear() + '',
							n = 1,
							e = []
						return (
							t.split('').forEach((t) => {
								;(e = e.concat(
									l.NUMBER_MATRIX[t].map(
										(t) => `${t[0] + n}-${t[1] + 1}`
									)
								)),
									(n += 4)
							}),
							e
						)
					})()),
					(R.prizes = p),
					(r = n = p),
					(a = r[0].type),
					(o = n.length - 1),
					(d = 119),
					(R.leftUsers = t.leftUsers),
					(R.luckyUsers = t.luckyData)
				let e = R.prizes.length - 1
				for (; e > -1; e--)
					if (
						!(
							t.luckyData[e] &&
							t.luckyData[e].length >= R.prizes[e].count
						)
					) {
						;(x = e), (v = R.prizes[x])
						break
					}
				f(x)
				let i = R.luckyUsers[v.type]
				c(x, i ? i.length : 0, !0)
			},
		}),
			window.AJAX({
				url: './data/getUsers.json',
				type: 'get',
				success(t) {
					console.log('getUsers', '手动循环生成数据 位置');
					for (let i = 0; i < 150; i++) {
						t[i] = ['好运连连', String(i + 1), '幸福绵绵']
					}
					;(R.users = t),
						(function () {
							let t = R.users.slice(),
								n = t.length,
								e = !1,
								r = R.leftUsers.length === R.users.length,
								a = 0,
								s = (t.length, { x: 1180, y: 620 })
							;(w = new THREE.PerspectiveCamera(
								40,
								window.innerWidth / window.innerHeight,
								1,
								1e4
							)),
								(w.position.z = 3e3),
								(g = new THREE.Scene())
							for (let i = 0; i < 7; i++)
								for (let o = 0; o < 17; o++) {
									e = O.includes(o + '-' + i)
									var l = S(t[a % n], e, a, r)
									;((L = new THREE.CSS3DObject(
										l
									)).position.x = 4e3 * Math.random() - 2e3),
										(L.position.y =
											4e3 * Math.random() - 2e3),
										(L.position.z =
											4e3 * Math.random() - 2e3),
										g.add(L),
										I.push(L),
										((L = new THREE.Object3D()).position.x =
											140 * o - s.x),
										(L.position.y = -180 * i + s.y),
										X.table.push(L),
										a++
								}
							for (
								var d = new THREE.Vector3(),
									p = 0,
									k = I.length;
								p < k;
								p++
							) {
								var L,
									B = Math.acos((2 * p) / k - 1),
									M = Math.sqrt(k * Math.PI) * B
								;(L =
									new THREE.Object3D()).position.setFromSphericalCoords(
									800,
									B,
									M
								),
									d.copy(L.position).multiplyScalar(2),
									L.lookAt(d),
									X.sphere.push(L)
							}
							;(u = new THREE.CSS3DRenderer()),
								u.setSize(
									window.innerWidth,
									window.innerHeight
								),
								document
									.getElementById('container')
									.appendChild(u.domElement),
								(y = new THREE.TrackballControls(
									w,
									u.domElement
								)),
								(y.rotateSpeed = 0.5),
								(y.minDistance = 500),
								(y.maxDistance = 6e3),
								y.addEventListener('change', j),
								document
									.querySelector('#menu')
									.addEventListener('click', function (t) {
										if ((t.stopPropagation(), E))
											return (
												'lottery' === t.target.id
													? (h.stop(),
													  (z.lottery.innerHTML =
															'开始抽奖'))
													: m(
															'正在抽奖中，抽慢一点点～～'
													  ),
												!1
											)
										switch (t.target.id) {
											case 'welcome':
												T('enter'), (U = !1)
												break
											case 'enter':
												document
													.querySelectorAll(
														'.highlight'
													)
													.forEach((t) => {
														t.classList.remove(
															'highlight'
														)
													}),
													m(
														`马上抽取[${v.title}],不要走开。`
													),
													(U = !0),
													T('lottery')
												break
											case 'reset':
												if (
													!window.confirm(
														'是否确认重置数据，重置后，当前已抽的奖项全部清空？'
													)
												)
													return
												m('重置所有数据，重新抽奖'),
													document
														.querySelectorAll(
															'.lightitem'
														)
														.forEach((t) => {
															t.classList.add(
																'highlight'
															)
														}),
													N(),
													(Y = []),
													(R.leftUsers =
														Object.assign(
															[],
															R.users
														)),
													(R.luckyUsers = {}),
													(x = R.prizes.length - 1),
													(v = R.prizes[x]),
													(function (t) {
														;(i = {}), (o = t), f(t)
													})(x),
													console.log('重置成功'),
													T('enter')
												break
											case 'lottery':
												D(!0),
													$(),
													(function () {
														let t =
																R.luckyUsers[
																	v.type
																],
															n =
																(t
																	? t.length
																	: 0) + b[x]
														c(x, n)
													})(),
													N().then((t) => {
														q()
													}),
													m(
														`正在抽取[${v.title}],调整好姿势`
													)
												break
											case 'reLottery':
												if (0 === Y.length)
													return void m(
														'当前还没有抽奖，无法重新抽取喔~~'
													)
												new Promise((t) => {
													setTimeout(t, 500)
												}),
													m(
														`重新抽取[${v.title}],做好准备`
													),
													D(!0),
													N().then((t) => {
														q()
													})
												break
											case 'save':
												$().then((t) => {
													N().then((t) => {
														Y = []
													}),
														(window.location.href =
															'./data/抽奖结果.xlsx'),
														m(
															'数据已保存到EXCEL中。'
														)
												})
										}
									}),
								window.addEventListener('resize', Z, !1),
								T(r ? 'enter' : 'lottery')
						})(),
						C(),
						(function () {
							let t,
								n = 10 + A(10)
							setInterval(() => {
								if (!E) {
									t = R.leftUsers.length
									for (let e = 0; e < n; e++) {
										let n = A(t),
											e = A(d)
										L.includes(e) ||
											(H(e), W(e, R.leftUsers[n]))
									}
								}
							}, 500)
						})()
				},
			})
		let P = window.onload
		window.onload = function () {
			P && P()
			let t = document.querySelector('#music'),
				n = 0,
				e = !1,
				r = document.querySelector('#musicBox')
			r.addEventListener(
				'click',
				function (a) {
					t.paused
						? t.play().then(
								() => {
									;(e = !1),
										(function t() {
											requestAnimationFrame(function () {
												e ||
													((n %= 360),
													(r.style.transform =
														'rotate(' + n + 'deg)'),
													(n += 1),
													t())
											})
										})()
								},
								() => {
									m('背景音乐自动播放失败，请手动播放！')
								}
						  )
						: (t.pause(), (e = !0))
				},
				!1
			),
				setTimeout(function () {
					r.click()
				}, 1e3)
		}
	},
])

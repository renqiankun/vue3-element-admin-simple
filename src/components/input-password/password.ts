interface paramsInt {
  type?: 'password'
  symbol?: string
  callback?: Function
  pattern?: RegExp
}
export class NicePassWord {
  input: any
  callback: any
  type: any
  symbol: any
  pattern: any
  cursor: any
  isInit: any
  lock: any
  value: any
  selectionStart: any
  selectionEnd: any
  constructor(node: any, params?: paramsInt) {
    this.input = node
    let oldParams = {
      type: 'password',
      symbol: '*',
      callback: () => {},
      pattern: /([\u4e00-\u9fa5])/g
    }
    let { type, symbol, callback, pattern } = { ...oldParams, ...params }
    if (
      !this.input ||
      this.input.tagName.toLowerCase() != 'input' ||
      this.input.type === 'password'
    ) {
      throw new Error('请传一个type为text的input的id！')
    }
    this.input.valueProxy = ''
    this.callback = callback
    this.type = type
    this.symbol = symbol
    this.pattern = pattern
    this.cursor = 0
    this.isInit = false
    Object.defineProperty(this, 'value', {
      get() {
        return this.input.valueProxy
      }
    })
    this.init()
    return this
  }

  init() {
    this._inputHandler(true) // 设置初始值
    this._preventDefaultEvent() //阻止input type=text 的默认操作 使其比较相似与password
    this._bindEvent() // 绑定事件 转化数据 =》 符号

    this.isInit = true
  }

  _preventDefaultEvent(event?: any) {
    let _this = this
    function _preventDefaultHandler() {
      var e = event || window.event
      e.preventDefault()
    }

    function _mousedownHandler(e: any) {
      if (e.button === 0 && _this.selectionStart != _this.selectionEnd) {
        _this.selectionStart = _this.selectionEnd = _this.value.length
      }
      return false
    }

    function _dragleaveHandler(e: any) {
      e.preventDefault()
      _this.warn('_dragleaveHandler')
      _this.input.removeAttribute('readonly')
      return false
    }

    function _dragenterhandlder(e: any) {
      e.preventDefault()
      _this.warn('_dragenterhandlder')
      _this.input.setAttribute('readonly', true)
      return false
    }

    this.input.addEventListener('copy', _preventDefaultHandler)
    this.input.addEventListener('cut', _preventDefaultHandler)
    this.input.addEventListener('dragenter', _dragenterhandlder)
    this.input.addEventListener('dragleave', _dragleaveHandler)
    this.input.addEventListener('mousedown', _mousedownHandler)
  }

  _bindEvent() {
    this.input.addEventListener('compositionstart', () => {
      this.lock = true
      this.warn('start')
    })
    this.input.addEventListener('compositionend', () => {
      this.lock = false
      this.warn('end')
      this._inputHandler()
    })
    this.input.addEventListener('input', this._inputHandler.bind(this))
    this.input.addEventListener('propertychange', this._inputHandler.bind(this))
  }

  _inputHandler(isInit?: boolean) {
    if (this.lock) return
    if (!this.isInit) {
      this.warn('init')
    } else {
      this.warn('input')
    }

    if (this.type === 'password') {
      this._passwordHandler()
    } else {
      this._textHandler()
    }
    this._showValue()
    this._setCursor()
    if (isInit === true) return
    typeof this.callback == 'function' && this.callback()
  }

  _passwordHandler() {
    var _this = this
    var cvalueArr = this._filterCn(this.input.value).split('')
    var ovalueArr = this.input.valueProxy.split('')
    var clen = cvalueArr.length - ovalueArr.length
    var cursor = this.input.selectionStart
    var ccursor = cursor - this.input.value.split('').length + cvalueArr.length
    var sidx = ''
    var eidx = ''
    if (clen > 0) {
      var inArr = cvalueArr
        .join('')
        .replace(new RegExp('\\' + _this.symbol, 'g'), '')
        .split('')
      var right = cvalueArr.length - cursor > 0 ? ovalueArr.slice(-(cvalueArr.length - cursor)) : []
      ovalueArr = [].concat(ovalueArr.slice(0, cursor - inArr.length), inArr, right)
    }

    if (clen < 0) {
      ovalueArr.splice(cursor, Math.abs(clen))
    }
    cvalueArr.forEach(function (value: any, index: any) {
      if (value != _this.symbol) {
        ovalueArr[index] = value
      }
    })
    this.input.valueProxy = ovalueArr.join('')
    this.cursor = ccursor
  }

  _filterCn(str: any, repStr?: any) {
    if (!str) return str
    var pattern = this.pattern
    repStr = repStr || ''
    return str.replace(pattern, repStr)
  }

  _textHandler() {
    this.input.valueProxy = this._filterCn(this.input.value)
    this.cursor =
      this.input.selectionStart -
      this.input.value.split('').length +
      this.input.valueProxy.split('').length
  }

  async _showValue() {
    var str = ''
    if (this.type === 'password') {
      this.value.split('').forEach((val: any) => {
        str += this.symbol
      })
    } else {
      str = this.value
    }
    this.input.value = str
    this.$nextTick(() => {
      this.input.value = str
    })
  }

  $nextTick(cb: any) {
    if (cb && typeof cb == 'function') {
      if (requestAnimationFrame) {
        requestAnimationFrame(cb)
      } else if (Promise) {
        Promise.resolve().then(() => {
          cb()
        })
      } else {
        setTimeout(() => {
          cb()
        })
      }
    } else {
      return Promise.resolve()
    }
  }

  _setCursor() {
    this.input.selectionStart = this.cursor
    this.input.selectionEnd = this.cursor
  }

  warn(msg: any) {
    console.log(msg)
  }

  $setValue(value?: any) {
    if (value) this.input.value = value
    this._inputHandler()
  }

  $changeType(type: 'text' | 'password') {
    this.type = type
    this.$setValue(this.value)
  }
}

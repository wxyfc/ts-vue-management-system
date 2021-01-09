/* eslint-disable */
// @ts-nocheck
import { only } from '@/function/utilsFunction.ts'

export default {
  // 指令的定义
  inserted: function (element, { value, arg }) {
    let cEl = null, pEl = element.parentElement, offsetX = null, offsetY = null, ONE_ING = false, DRAG_ID = null, CURR_TYPE = null, E_DELAYED_HANDLER = null, E_ONE_HANDLER = false

    // 处理鼠标选择过程中文字选择
    function cElOnmouseMove (ne) {
      if (ONE_ING) {
        ONE_ING = false
      } else {
        return
      }
      // 获取当前元素信息
      const nEl = cEl
      const nElOffW = nEl.offsetWidth
      const nElOffH = nEl.offsetHeight
      const args = arg.split('@')

      // 获取父元素信息
      let rect = pEl.getBoundingClientRect()
      if (args[2]) {
        let handlerPEl = document.getElementById(args[2])
        rect = handlerPEl.getBoundingClientRect()
      }
      const pElOffT = rect.top
      const pElOffB = rect.bottom
      const pElOffL = rect.left
      const pElOffR = rect.right

      const target = document.getElementById(args[1])
      let targetT, targetB, targetL, targetR
      if (target) {
        const targetRect = target.getBoundingClientRect()
        targetT = targetRect.top
        targetB = targetRect.bottom
        targetL = targetRect.left
        targetR = targetRect.right
      }

      function handlerPosition (e, type) {
        // 算出鼠标相对元素的位置
        let left = e.clientX - offsetX
        let top = e.clientY - offsetY
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        if (left > pElOffR - nElOffW) {
          left = pElOffR - nElOffW
        } else if (left < pElOffL) {
          left = pElOffL
        }
        if (top > pElOffB - nElOffH) {
          top = pElOffB - nElOffH
        } else if (top < pElOffT) {
          top = pElOffT
        }
        // 移动当前元素
        nEl.style.left = left + 'px'
        nEl.style.top = top + 'px'
        if (target) {
          if (left > targetL - nElOffW && left < targetR && top > targetT - nElOffH && top < targetB) {
            if (CURR_TYPE != type) {
              value({ source: args[0], type, id: DRAG_ID })
              CURR_TYPE = type
            }
          } else {
            if (CURR_TYPE != '') {
              value({ source: args[0], type: '', id: DRAG_ID })
              CURR_TYPE = ''
            }
          }
        }
      }

      function documentOnmouseMove (e) {
        handlerPosition(e, 'move')
      }

      function documentOnmouSeup (e) {
        handlerPosition(e, 'mouseup')
        window.removeEventListener('mousemove', documentOnmouseMove)
        window.removeEventListener('mouseup', documentOnmouSeup)
        document.body.classList.remove('no-select-class')
        cElOnmouSeup()
        elementOnmouseSeup()
      }

      window.addEventListener('mousemove', documentOnmouseMove)
      window.addEventListener('mouseup', documentOnmouSeup)
      // document.onmousemove = (e) => {
      // }
      // document.onmouseup = (e) => {
      //   document.onmousemove = null
      //   document.onmouseup = null
      // }
    }

    function cElOnmouSeup () {
      cEl.removeEventListener('mousemove', cElOnmouseMove)
      cEl.removeEventListener('mouseup', cElOnmouSeup)
      if (pEl.contains(cEl)) {
        pEl.removeChild(cEl)
      }
    }

    function elementOnmouseMove (ne) {
      if (E_DELAYED_HANDLER == null || (new Date().getTime() - E_DELAYED_HANDLER) < 100 || (new Date().getTime() - E_DELAYED_HANDLER) > 200 || E_ONE_HANDLER) {
        return
      } else {
        E_ONE_HANDLER = true
      }
      cEl = element.cloneNode(true)
      cEl.classList.add('duplicator-class')
      pEl.insertBefore(cEl, element)
      const eRect = element.getBoundingClientRect()
      cEl.style.left = eRect.left + 'px'
      cEl.style.top = eRect.top + 'px'
      cEl.addEventListener('mousemove', cElOnmouseMove)
      cEl.addEventListener('mouseup', cElOnmouSeup)
      document.body.classList.add('no-select-class')
      offsetX = ne.offsetX
      offsetY = ne.offsetY
      ONE_ING = true
      DRAG_ID = only('drag')
    }

    function elementOnmouseDown () {
      E_DELAYED_HANDLER = new Date().getTime()
      E_ONE_HANDLER = false
    }

    function elementOnmouseSeup () {
      E_DELAYED_HANDLER = null
      E_ONE_HANDLER = false
    }

    // function addMask () {
    //   element.style.setProperty('position', 'relative')
    //   const maskDiv = document.createElement('div')
    //   maskDiv.classList.add('mask-class')
    //   // appendChild
    //   element.insertBefore(maskDiv, element.lastChild)
    // }

    // addMask()
    element.style.setProperty('display', 'inline-block')
    element.classList.add('no-select-class')
    element.addEventListener('mousedown', elementOnmouseDown)
    element.addEventListener('mousemove', elementOnmouseMove)
    element.addEventListener('mouseup', elementOnmouseSeup)

    // cEl.onmousedown = (ne) => {
    // }
  }
}


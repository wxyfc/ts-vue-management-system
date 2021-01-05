/* eslint-disable */
// @ts-nocheck
import { only } from '@/function/utilsFunction.ts'

export default {
  // 指令的定义
  inserted: function (element, { value, arg }) {
    let cEl = null, pEl = null, offsetX = null, offsetY = null, ONE_ING = false, DRAG_ID = null

    // 处理鼠标选择过程中文字选择
    function cElOnmousedown (ne) {
      if (ONE_ING) {
        ONE_ING = false
      } else {
        return
      }
      // 获取当前元素信息
      const nEl = cEl
      const nElOffW = nEl.offsetWidth
      const nElOffH = nEl.offsetHeight
      // 获取父元素信息
      const rect = pEl.getBoundingClientRect()
      const pElOffT = rect.top
      const pElOffB = rect.bottom
      const pElOffL = rect.left
      const pElOffR = rect.right

      const args = arg.split('@')
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
            value({ source: args[0], type, id: DRAG_ID })
          } else {
            value({ source: args[0], type: '', id: DRAG_ID })
          }
        }
      }

      function documentOnmousemove (e) {
        handlerPosition(e, 'move')
      }

      function documentOnmouseup (e) {
        handlerPosition(e, 'mouseup')
        window.removeEventListener('mousemove', documentOnmousemove)
        window.removeEventListener('mouseup', documentOnmouseup)
        document.body.classList.remove('no-select')
        cElOnmouseup()
      }

      window.addEventListener('mousemove', documentOnmousemove)
      window.addEventListener('mouseup', documentOnmouseup)
      // document.onmousemove = (e) => {
      // }
      // document.onmouseup = (e) => {
      //   document.onmousemove = null
      //   document.onmouseup = null
      // }
    }

    function cElOnmouseup () {
      cEl.removeEventListener('mousemove', cElOnmousedown)
      cEl.removeEventListener('mouseup', cElOnmouseup)
      if (pEl.contains(cEl)) {
        pEl.removeChild(cEl)
      }
    }

    function elementOnmousedown (ne) {
      cEl = element.cloneNode(true)
      cEl.classList.add('duplicator-class')
      pEl = element.parentElement
      pEl.insertBefore(cEl, element)
      const eRect = element.getBoundingClientRect()
      cEl.style.left = eRect.left + 'px'
      cEl.style.top = eRect.top + 'px'
      cEl.addEventListener('mousemove', cElOnmousedown)
      cEl.addEventListener('mouseup', cElOnmouseup)
      document.body.classList.add('no-select')
      offsetX = ne.offsetX
      offsetY = ne.offsetY
      ONE_ING = true
      DRAG_ID = only('drag')
    }

    element.addEventListener('mousedown', elementOnmousedown)

    // cEl.onmousedown = (ne) => {
    // }
  }
}


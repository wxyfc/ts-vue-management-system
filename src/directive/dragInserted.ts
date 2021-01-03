/* eslint-disable */
// @ts-nocheck
export default {
  // 指令的定义
  inserted: function (element, { value }) {
    let cEl = null
    let pEl = null

    function cElOnmousedown (ne) {
      // 获取当前元素信息
      const nEl = cEl
      const nElOffW = nEl.offsetWidth
      const nElOffH = nEl.offsetHeight
      // 获取父元素信息
      const pElOffT = pEl.offsetTop
      const pElOffH = pEl.offsetHeight
      const pElOffL = pEl.offsetLeft
      const pElOffW = pEl.offsetWidth
      // 获取鼠标位置
      const offsetX = ne.offsetX
      const offsetY = ne.offsetY
      // 处理鼠标选择过程中文字选择
      document.body.classList.add('no-select')

      function documentOnmousemove (de) {
        // 算出鼠标相对元素的位置
        let left = de.clientX - pElOffL - offsetX
        let top = de.clientY - pElOffT - offsetY
        console.log({ left, top, pElOffL, pElOffT, offsetX, offsetY, a: de.clientX, b: de.clientY })
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        if (left > pElOffW - nElOffW) {
          left = pElOffW - nElOffW
        } else if (left < 0) {
          left = 0
        }
        if (top > pElOffH - nElOffH) {
          top = pElOffH - nElOffH
        } else if (top < 0) {
          top = 0
        }
        // 移动当前元素
        nEl.style.left = left + 'px'
        nEl.style.top = top + 'px'
      }

      function documentOnmouseup () {
        window.removeEventListener('mousemove', documentOnmousemove)
        window.removeEventListener('mouseup', documentOnmouseup)
        document.body.classList.remove('no-select')
        cElOnmouseup()
      }

      window.addEventListener('mousemove', documentOnmousemove)
      window.addEventListener('mouseup', documentOnmouseup)
      // document.onmousemove = (de) => {
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
      cEl = null
      pEl = null
    }

    function elementOnmousedown () {
      cEl = element.cloneNode(true)
      cEl.classList.add('duplicator-class')
      pEl = element.parentElement
      pEl.insertBefore(cEl, element)
      cEl.style.left = element.offsetLeft + 'px'
      cEl.style.top = element.offsetTop + 'px'
      cEl.addEventListener('mousemove', cElOnmousedown)
      cEl.addEventListener('mouseup', cElOnmouseup)
    }

    element.addEventListener('mousedown', elementOnmousedown)

    // cEl.onmousedown = (ne) => {
    // }
  }
}


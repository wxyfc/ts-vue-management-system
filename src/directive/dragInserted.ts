/* eslint-disable */
// @ts-nocheck
export default {
  // 指令的定义
  inserted: function (element, { value }) {
    let cEl = null
    let pEl = null
    // 获取鼠标位置
    let offsetX = null
    let offsetY = null

    // 处理鼠标选择过程中文字选择
    function cElOnmousedown (ne) {
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

      function documentOnmousemove (de) {
        // 算出鼠标相对元素的位置
        let left = de.clientX - offsetX
        let top = de.clientY - offsetY
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
    }

    function elementOnmousedown (ne) {
      cEl = element.cloneNode(true)
      cEl.classList.add('duplicator-class')
      pEl = element.parentElement
      pEl.insertBefore(cEl, element)
      cEl.style.left = element.offsetLeft + 'px'
      cEl.style.top = element.offsetTop + 'px'
      cEl.addEventListener('mousemove', cElOnmousedown)
      cEl.addEventListener('mouseup', cElOnmouseup)
      document.body.classList.add('no-select')
      offsetX = ne.offsetX
      offsetY = ne.offsetY
    }

    element.addEventListener('mousedown', elementOnmousedown)

    // cEl.onmousedown = (ne) => {
    // }
  }
}


let xxx = ''

var subtitleEl = document.querySelector('[data-testid="subtitle-text"]')
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.target.textContent)
    xxx += ' ' + mutation.target.textContent.replaceAll('\n', ' ')
  })
})
var config = { characterData: true, subtree: true }
observer.observe(subtitleEl, config)

setInterval(() => {
  var curSubtitleEl = document.querySelector('[data-testid="subtitle-text"]')
  if (curSubtitleEl === subtitleEl) return
  console.log(curSubtitleEl.textContent)
  observer.disconnect()
  if (curSubtitleEl) {
    xxx += ' ' + curSubtitleEl.textContent.replaceAll('\n', ' ')
    observer.observe(curSubtitleEl, config)
  }
  subtitleEl = curSubtitleEl
}, 300)

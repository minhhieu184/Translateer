// const element = document.createElement('div')
// element.id = 'myTranslation'
// element.textContent = 'Hello World'
// element.style.color = 'red'
// element.style.backgroundColor = 'rgba(0, 0, 0)'
// element.style.borderBottomColor = 'rgb(255, 255, 255)'
// element.style.borderBottomLeftRadius = '4px'
// element.style.borderBottomRightRadius = '4px'
// element.style.borderBottomStyle = 'none'
// element.style.borderBottomWidth = '0px'
// element.style.borderImageOutset = '0'
// element.style.borderImageRepeat = 'stretch'
// element.style.borderImageSlice = '100%'
// element.style.borderImageSource = 'none'
// element.style.borderImageWidth = '1'
// element.style.borderLeftColor = 'rgb(255, 255, 255)'
// element.style.borderLeftStyle = 'none'
// element.style.borderLeftWidth = '0px'
// element.style.borderRightColor = 'rgb(255, 255, 255)'
// element.style.borderRightStyle = 'none'
// element.style.borderRightWidth = '0px'
// element.style.borderTopColor = 'rgb(255, 255, 255)'
// element.style.borderTopLeftRadius = '4px'
// element.style.borderTopRightRadius = '4px'
// element.style.borderTopStyle = 'none'
// element.style.borderTopWidth = '0px'
// element.style.boxSizing = 'content-box'
// element.style.color = 'rgb(255, 255, 255)'
// element.style.display = 'block'
// element.style.fontFamily =
//   '"Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
// element.style.fontSize = '30px'
// element.style.fontStyle = 'normal'
// element.style.fontWeight = '700'
// element.style.lineHeight = '39px'
// element.style.marginBottom = '0px'
// element.style.marginLeft = '271.266px'
// element.style.marginRight = '271.281px'
// element.style.marginTop = '0px'
// element.style.maxWidth = '90%'
// element.style.overflowX = 'hidden'
// element.style.overflowY = 'hidden'
// element.style.paddingBottom = '3px'
// element.style.paddingLeft = '18px'
// element.style.paddingRight = '18px'
// element.style.paddingTop = '3px'
// element.style.pointerEvents = 'none'
// element.style.position = 'absolute'
// element.style.right = '0px'
// element.style.bottom = '9rem'
// element.style.textAlign = 'center'
// element.style.textShadow = 'none'
// element.style.textSizeAdjust = '100%'
// element.style.textWrap = 'wrap'
// element.style.whiteSpaceCollapse = 'preserve'
// element.style.width = '1096.45px'
// element.style.wordBreak = 'normal'
// element.style.zIndex = '2'
// const parent = document.querySelector('[data-testid="video-markup"]')
// parent.appendChild(element)

// let subtitle = ''

// var subtitleEl = document.querySelector('[data-testid="subtitle-text"]')
// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     console.log(mutation.target.textContent)
//     subtitle += ' ' + mutation.target.textContent.replaceAll('\n', ' ')
//     // const source = `http://localhost:3000/api?text=${mutation.target.textContent}&from=en&to=vi`
//     // fetch(source, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     console.log(data.result)
//     //     element.textContent = data.result
//     //   })
//     //   .catch((err) => {
//     //     console.log('err:', err)
//     //   })
//   })
// })
// var config = { characterData: true, subtree: true }
// observer.observe(subtitleEl, config)

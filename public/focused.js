document.documentElement.classList.toggle('focused', document.hasFocus())
window.addEventListener('focus', () => document.documentElement.classList.add('focused'))
window.addEventListener('blur', () => document.documentElement.classList.remove('focused'))
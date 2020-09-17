export function getLocalVariable(key, defaultValue = false) {
  if (localStorage.getItem(key)) {
    return typeof localStorage.getItem(key) === 'string'
      ? JSON.parse(localStorage.getItem(key))
      : localStorage.getItem(key)
  }
  return defaultValue
}

export function getLocalVariable(key, defaultValue = false) {
  if (localStorage.getItem(key)) {
    return typeof localStorage.getItem === 'string'
      ? JSON.parse(localStorage.getItem)
      : localStorage.getItem
  }
  return defaultValue
}

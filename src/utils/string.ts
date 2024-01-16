export const ellipsis = (str: string, maxLength: number): [string, boolean] => {
  const ellipsisStr = '...'
  let res = str
  let ellipsised = false

  if (str.length > maxLength) {
    res = str.slice(0, maxLength - ellipsisStr.length) + ellipsisStr
    ellipsised = true
  }

  return [res, ellipsised]
}

export const sanitizeDirRoute = (path) => {
  let base = '/project/dir/'
  let context = path.replace(base, '')
  return context
}

export const sanitizeFileRoute = (path) => {
  let base = '/project/file/'
  let context = path.replace(base, '')
  return context
}

export const sanitizeLastDir = (path) => {
  let base = '/project/dir/'
  let context = path.replace(base, '')
  let dirs = context.split('/')
  let currentDir = dirs.slice(-1).pop()
  return currentDir
}

export const sanitize = () => {
  let base = '/project/'
  return null
}
export const forceTrailingSlash = (nextState, replace) => {
  const path = nextState.location.pathname;
  if (path.slice(-1) !== '/') {
    replace({
      ...nextState.location,
      pathname: path + '/'
    });
  }
}
export const forceTrailingSlashOnChange = (prevState, nextState, replace) => {
  forceTrailingSlash(nextState, replace);
}

export const removeLeadingSlash = (path) => {
  if (path.split('')[0] == '/') {
    path.slice(1)
  }
}


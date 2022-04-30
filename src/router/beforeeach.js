export default async(to, from, next) => {
  if(to.name === 'login' || to.name === 'register') {
    next()
  } else if (to.name !== 'login' && !verifyToken()) {
    next({ name: 'login' })
  } else {
    next()
  }
}

function verifyToken() {
  let token = sessionStorage.getItem('authenticate')
  console.log(token)
  if(token === '' || token === null) {
    
    return false
  }
  if(validateToken()) {
    return true
  }
  return false
}

function validateToken() {
  return true
}
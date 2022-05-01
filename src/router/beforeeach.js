export default async(to, from, next) => {
  if(verifyPages(to.name)) {
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

function verifyPages(name) {
  switch(name){
    case 'login':
      return true;
    case 'register':
      return true;
    case 'curriculumstudio':
      return true;
    default:
      return false;
  }
}


// add function
function add(a,b){
  return a + b
}

// subtract function
function sub(a,b){
  return a - b
}

// multiply function
function mul(a,b){
  return a*b
}
// returns the arg given
function identity(arg){
  return arg
}

function identityf(x){
  return function(){
    return x;
  }
}

function addf(x){
  return function(y){
    return x + y
  }
}

function liftf(fn){
  return function addf(x){
    return function(y){
      return fn(x,y)

    }
  }
}

function curry(fn, x) {
  return function(y) {
    return fn(x,y)
  }
}

function twice(fn,x){
  return function(x){
    return fn(x,x)
  }
}

function reverse(fn){
  return function(x,y){
    return fn(y,x)
  }
}


function composeu(fn1,fn2){
  return function(x){
    return fn2(fn1(x))
    }
  }
function composeb(f1,f2){
  return function(x,y,z){
    return f2(f1(x,y),z)


  }
}

function limit(fn,n){
  return function(x,y){
    for(i=0,i < n,i++){
      if (i<n){
        return fn(x,y)
      }
        else {
          return 'undefined'
      };
    }
  }
}

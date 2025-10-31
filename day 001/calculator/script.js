const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
let hasError = false;
let eqn = "";



buttons.forEach((button) => {
  button.addEventListener('click',()=>{

    if(hasError){
      eqn = button.innerHTML;
      hasError = false;
    }

    else if(button.innerHTML == 'AC'){
      eqn = ""
    }
    else if(button.innerHTML == '='){
      eqn = calculate(eqn);
    }
    else eqn+=button.innerHTML;
    input.value = eqn
  })
})


const calculate = (eqn) => {
  try {
    const result = eval(eqn);
    if(result == undefined || result == null){
      throw new Error('Invalid');
    }
    return result;
  } catch (error) {
    hasError = true;
    return "Error";
  }
}

document.addEventListener('keydown',(event)=>{
  const key = event.key;
  if("0123456789+-*/.".includes(key)){
    if(hasError){
      eqn = "";
      hasError = false;
    }
    eqn+=key;
  }
  else if(key == 'Enter' || key == '='){
    eqn = calculate(eqn);
  }
  else if(key == 'Backspace'){
    eqn = eqn.slice(0,-1);
  }
  else if(key == 'Escape'){
    eqn = "";
  }
  input.value = eqn
})
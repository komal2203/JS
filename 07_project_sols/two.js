const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('height').value)
    const weight = parseInt(document.querySelector('weight').value)
    const result = document.querySelector('#results')

    if(height ="" || height<0 || isNan(height)){
        console.log(`Please give a valid height`)
    }
    else if(weight ="" || weight<0 || isNan(weight)){
        console.log(`Please give a valid weight`)
    }
    else{
      const bmi =(weight/((height*height)/10000)).toFixed(2)
    }

    //show the result
    result.innerHTML = `<span>${bmi}</span>`



})
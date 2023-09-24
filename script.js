const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.display')
const buttonsGrid = calculator.querySelector('.buttonsGrid')
const primaryDisplay = display.querySelector('.primary')
const secondaryDisplay = display.querySelector('.secondary')
const deleteBtn = buttonsGrid.querySelector('.btn.delete')
const clearBtn = buttonsGrid.querySelector('.btn.clear')
const numberBtns = buttonsGrid.querySelectorAll('.btn.number')
const operationBtns = buttonsGrid.querySelectorAll('.btn.operation')
const equalityBtn = buttonsGrid.querySelector('#equalityBtn')

let memory = null
let operation = null 

function add(n1,n2) {
    return n1+n2
}

function subtract(n1,n2) {
    return n1-n2
}

function multiply(n1,n2) {
    return n1*n2
}

function divide(n1,n2) {
    if(n1==0||n2==0){
        alert('You can\'t divide by zero')
    }
    return n1/n2
}

deleteBtn.addEventListener('click',function(){
    let newArray = primaryDisplay.textContent.split("")
    newArray.pop()
    primaryDisplay.textContent = newArray.join("")
})

clearBtn.addEventListener('click',function(){
    memory = null
    primaryDisplay.textContent = ''
    secondaryDisplay.textContent = ''
    console.clear()
    console.log('All clear. You can start again')
})

numberBtns.forEach(item=>{
    item.addEventListener('click',function(){
        let number = parseInt(item.textContent)
        primaryDisplay.textContent += number
    })
})

operationBtns.forEach(item=>{
    item.addEventListener('click',function(){
        if (!memory&&primaryDisplay.textContent){
            memory = parseInt(primaryDisplay.textContent)
            primaryDisplay.textContent = ''
            operation = item.textContent
            secondaryDisplay.textContent = memory + operation
        }  
        else if (!primaryDisplay.textContent){
            operation = item.textContent
            secondaryDisplay.textContent = memory + operation
            
        }
        else if (memory&&primaryDisplay.textContent){
            console.log(operation)

            if (operation==='+'){
                memory = add(memory,parseInt(primaryDisplay.textContent))
                secondaryDisplay.textContent = memory + operation
                primaryDisplay.textContent = ''
            }

            else if (operation==='-'){
                memory = subtract(memory,parseInt(primaryDisplay.textContent))
                secondaryDisplay.textContent = memory + operation
                primaryDisplay.textContent = ''

            }

            else if (operation==='*'){
                memory = multiply(memory,parseInt(primaryDisplay.textContent))
                secondaryDisplay.textContent = memory + operation
                primaryDisplay.textContent = ''

            }

            else if (operation==='/'){
                memory = divide(memory,parseInt(primaryDisplay.textContent))
                secondaryDisplay.textContent = memory + operation
                primaryDisplay.textContent = ''


            }
            operation = item.textContent
            secondaryDisplay.textContent = memory + operation
        }   
    })   
})

equalityBtn.addEventListener('click',function(){

    if(!primaryDisplay.textContent&&!memory){
        console.log('You didn\'t do any operations')
    }
    else if(primaryDisplay.text===''&&memory){
        primaryDisplay.textContent = memory
        secondaryDisplay.textContent = null
    }
    else if(primaryDisplay.textContent&&!memory){
        console.log('You didn\'t do any operations')
    }
    else if(primaryDisplay.text!==''&&memory){
        console.log('hello')
        if (operation==='+'){
            memory = add(memory,parseInt(primaryDisplay.textContent))
            secondaryDisplay.textContent = ''
            primaryDisplay.textContent = Math.round(1000*memory)/1000;
        }

        else if (operation==='-'){
            memory = subtract(memory,parseInt(primaryDisplay.textContent))
            secondaryDisplay.textContent = ''
            primaryDisplay.textContent = Math.round(1000*memory)/1000;
        }

        else if (operation==='*'){
            memory = multiply(memory,parseInt(primaryDisplay.textContent))
            secondaryDisplay.textContent = ''
            primaryDisplay.textContent = Math.round(1000*memory)/1000;
        }

        else if (operation==='/'){
            memory = divide(memory,parseInt(primaryDisplay.textContent))
            secondaryDisplay.textContent = ''
            primaryDisplay.textContent = Math.round(1000*memory)/1000;
        }

    }

})









// numberBtns.forEach(item=>{
//     item.addEventListener('click',function(){
//         let number = parseInt(item.textContent)
//         primaryDisplay.textContent += number
//     })
// })

// operationBtns.forEach(item=>{
//     item.addEventListener('click',function(){
//         if (primaryDisplay.textContent[0]){

//         }      
//     })   
// })

// clearBtn.addEventListener('click',function(){
//     primaryDisplay.textContent = ''
//     secondaryDisplay.textContent = ''
// })

// deleteBtn.addEventListener('click',function(){
//     let newArray = primaryDisplay.textContent.split("")
//     newArray.pop()
//     primaryDisplay.textContent = newArray.join("")
// })
const display1El = document.querySelector ('.display-1');
const display2El = document.querySelector ('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const lastclearE1 = document.querySelector('.last-clear');

let dis1num = '';
let dis2num = '';
let result = null ;
let lastoperation = '';
let haveDot = false;

numbersEl.forEach( number => {
    number.addEventListener('click', (e)=>{
        if(e.target.innertext === '.' && !haveDot){
         haveDot= true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2num += e.target.innerText;
        display2El.innerText = dis2num;
    })
    });

    operationEl.forEach( operation => {
        operation.addEventListener('click',(e)=>{
            if(!dis2num) result;
            haveDot=false;
            const operationName = e.target.innerText;
            if(dis1num && dis2num && lastoperation){
                mathOperation();
            }else{
                result = parseFloat(dis2num);
            }
            clearVar(operationName);
            lastoperation = operationName;
            console.log(result);
            })
            });

            function clearVar(name = ''){
                dis1num += dis2num + ' ' + name + ' ';
                display1El.innerText = dis1num;
                display2El.innerText = '';
                dis2num = '';
                tempResultEl.innerText = result;
             }

             function mathOperation(){
                if(lastoperation === '*'){
                result = parseFloat(result) * parseFloat(dis2num);
             }  else if(lastoperation === '+'){
                result = parseFloat(result) + parseFloat(dis2num);
             } else if(lastoperation === '-'){
                result = parseFloat(result) - parseFloat(dis2num);
             }else if(lastoperation === '/'){
                result = parseFloat(result) / parseFloat(dis2num);
             }else if(lastoperation === '%'){
                result = parseFloat(result) % parseFloat(dis2num);
             }
             }

             equalEl.addEventListener('click',(e)=> {
                if(!dis1num || !dis2num) return;
                haveDot=false;
                mathOperation();
                clearVar();
                display1El.innerText = result;
                tempResultEl.innerText = '';
                dis1num = result;
                dis1num='';
            })

            clearEl.addEventListener('click', (e) =>{
                display1El.innerText = '0';
                display2El.innerText='0';
                dis1num='';
                dis2num='';
                tempResultEl.innerText='0';
            })

            lastclearE1.addEventListener('click', (e)=>{
                display2El.innerText ='';
                dis2num = '';
            })

            window.addEventListener('keydown',(e) => {
                if(
                    e.key === '0' ||
                    e.key === '1' ||
                    e.key === '2' ||
                    e.key === '3' ||
                    e.key === '4' ||
                    e.key === '5' ||
                    e.key === '6' ||
                    e.key === '7' ||
                    e.key === '8' ||
                    e.key === '9' ||
                    e.key === '.' 
                ){
                  clickbuttonEl(e.key);  
                }else if(
                    e.key ==='*'||
                    e.key ==='+'||
                    e.key ==='-'||
                    e.key ==='/'||
                    e.key ==='%'
                ){
                    clickoperation(e.key);
                }else if (e.key == 'Enter' || e.key === "="){
                    clickequal();
                }
                });

                function clickbuttonEl(key){
                    numbersEl.forEach(button=>{
                        if(button.innerText === key){
                            button.click();
                        }
                    })
                }
                function clickoperation(key){
                    operationEl.forEach(button =>{
                        if(button.innerText === key){
                            button.click();
                        }
                    })
                }
                function clickequal(){
                    equalEl.click();
                }
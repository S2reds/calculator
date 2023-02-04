function operate(op, a, b) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return a / b;
}

// 
const numberpad = document.querySelectorAll('.numbers')
const funcbody = document.querySelector('#funcbody')
const screen = document.querySelector('#formula')
const screenResult = document.querySelector('#result')

screenResult.style.visibility = 'hidden'

let temp = '0';
let temp1 = '0';
let functemp = false;

funcbody.addEventListener('click', (e) => {
    console.log(e.target.innerHTML)
    let target = e.target.innerHTML;
    switch (target) {
        case 'C':
            temp = '0';
            temp1 = '0';
            functemp = false;
            screen.textContent = temp;
            screen.style.marginTop = '20px'
            screen.style.fontSize = '50px'
            screenResult.style.fontSize = '24px'
            screenResult.style.visibility = 'hidden'
            break;
        case '+':
            if (!functemp){
                functemp = true
                temp = temp.concat('', '+');
                screen.textContent = temp;
            }
            break
        case '-':
            if (!functemp) {
                functemp = true
                temp = temp.concat('', '-');
                screen.textContent = temp;
            }
            break
        case '/':
            if (!functemp) {
                functemp = true
                temp = temp.concat('', '/');
                screen.textContent = temp;
            }
            break
        case '*':
            if (!functemp) {
                functemp = true
                temp = temp.concat('', '*');
                screen.textContent = temp;
            }
            break
    }

});

numberpad.forEach(b => b.addEventListener('click', (e) => {
    if (functemp) {
        if (temp1 === '0') temp1 = e.target.innerHTML;
        else temp1 += e.target.innerHTML
        screen.textContent = `${temp}${temp1}`
    } else {
        //grab number from e.target.innerHTML
        if (screen.textContent === '0') temp = e.target.innerHTML
        else temp += e.target.innerHTML
        //update screen with number
        screen.textContent = `${temp}`
    }
}));

const equals = document.querySelector('#equals');

equals.addEventListener('click', (e) => {
    let func = temp[temp.length-1]
    let tempNum = +temp.slice(0,-1)
    let tempNum1 = +temp1
    let final = 0;
    switch (func) {
        case '+':
            final = tempNum + tempNum1;
            screenResult.textContent = final;
            screenResult.style.visibility = 'visible'
            screen.style.marginTop = '0px'
            screen.style.fontSize = '30px'
            screenResult.style.fontSize = '50px'
            screenResult.style.marginTop = '25px'
            temp = `${final}`
            temp1 = '0';
            functemp = false;
            break
        case '-':
            screenResult.textContent = tempNum - tempNum1
            screenResult.style.visibility = 'visible'
            screen.style.marginTop = '0px'
            screen.style.fontSize = '30px'
            screenResult.style.fontSize = '50px'
            screenResult.style.marginTop = '25px'  
            final = tempNum - tempNum1;
            temp = `${final}`
            temp1 = '0';
            functemp = false;
            break
        case '/':
            screenResult.textContent = tempNum / tempNum1
            screenResult.style.visibility = 'visible'
            screen.style.marginTop = '0px'
            screen.style.fontSize = '30px'
            screenResult.style.fontSize = '50px'
            screenResult.style.marginTop = '25px'
            final = tempNum / tempNum1;
            temp = `${final}`
            temp1 = '0';
            functemp = false;
            break
        case '*':
            screenResult.textContent = tempNum * tempNum1
            screenResult.style.visibility = 'visible'
            screen.style.marginTop = '0px'
            screen.style.fontSize = '30px'
            screenResult.style.fontSize = '50px'
            screenResult.style.marginTop = '25px'
            final = tempNum * tempNum1;
            temp = `${final}`
            temp1 = '0';
            functemp = false;
            break
    }

    console.log(tempNum)

    console.log(func)
})
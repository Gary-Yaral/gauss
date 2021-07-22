
const solveSystem = document.querySelector('form');
equationsData = [
    {
        x: "",
        y: "",
        i: ""
    },
    {
        x: "",
        y: "",
        i: ""
    }
];

solveSystem.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateInputs()){
        renderData()
        solveEquation();
    }else{
        alert('No ha llenado todos los valores.')
    }
})

const renderData = () => {
    equationsData[0].x = parseFloat(solveSystem.children[0].children[0].value);
    equationsData[0].y = parseFloat(solveSystem.children[0].children[2].value);
    equationsData[0].i = parseFloat(solveSystem.children[0].children[4].value);
    equationsData[1].x = parseFloat(solveSystem.children[1].children[0].value);
    equationsData[1].y = parseFloat(solveSystem.children[1].children[2].value);
    equationsData[1].i = parseFloat(solveSystem.children[1].children[4].value);
}

const solveEquation = () => {
    doFirstStep();
    doSecondStep();
    doThirdStep();
    doFourthStep();
    showResult();
}

const doFirstStep = () => {
    let xCoeficient =  equationsData[0].x;
    equationsData[0].x =  equationsData[0].x/xCoeficient;
    equationsData[0].y =  equationsData[0].y/xCoeficient;
    equationsData[0].i =  equationsData[0].i/xCoeficient;
}

const doSecondStep = () => {
    let xCoeficient = equationsData[1].x,
    x = equationsData[0].x * xCoeficient,
    y = equationsData[0].y * xCoeficient,
    i = equationsData[0].i * xCoeficient;
    equationsData[1].x =  equationsData[1].x - x;
    equationsData[1].y =  equationsData[1].y - y;
    equationsData[1].i =  equationsData[1].i - i;

}

const doThirdStep = () => {
    let yCoeficient = equationsData[1].y
    equationsData[1].y =  equationsData[1].y / yCoeficient;
    equationsData[1].i =  equationsData[1].i / yCoeficient;
}

const doFourthStep = () => {
    let yCoeficient = equationsData[0].y
    let y =  equationsData[1].y * yCoeficient;
    let i =  equationsData[1].i * yCoeficient;
    equationsData[0].y =  equationsData[0].y - y;
    equationsData[0].i =  equationsData[0].i - i;
}

const showResult = () => {
    let result = document.querySelector('#result'),
    title = document.querySelector('.response');
    title.innerHTML = '';
    title.innerHTML = 'La respuesta es: ';
    result.innerHTML = "";
    result.innerHTML = `<span>x = ${equationsData[0].i}</span><span>y = ${equationsData[1].i}</span>` 
}

const validateInputs = () => {
    let isEmptyFirstX = solveSystem.children[0].children[0].value === "";
    let isEmptyFirstY = solveSystem.children[0].children[2].value === "";
    let isEmptyFirstI = solveSystem.children[0].children[4].value === "";
    let isEmptySecondX = solveSystem.children[1].children[0].value === "";
    let isEmptySecondY = solveSystem.children[1].children[2].value === "";
    let isEmptySecondI = solveSystem.children[1].children[4].value === "";
    let message = true;

    if(isEmptyFirstX) return false;
    if(isEmptyFirstY) return false;
    if(isEmptyFirstI) return false;
    if(isEmptySecondX) return false;
    if(isEmptySecondY) return false;
    if(isEmptySecondI) return false;

    return message;
}
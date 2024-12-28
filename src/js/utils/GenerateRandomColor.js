export const generateRandomColor = () => {
    const hexValues = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i ++){
        color += hexValues[Math.floor(Math.random()*hexValues.length)];
    }
    return color;
}

export const GenerateStatiColor = () => {
    console.log("Hola Fercho!")
}

export const HolaLina = () => {
    console.log("Hola Lina!")
}
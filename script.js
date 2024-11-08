var box = document.getElementById("input_box")

const display = (num) => {
    box.value += num;
}

const equal = (num) => {
    try {
        box.value = eval(box.value)
    }
    catch {
        box.value = 'invalid input...'
    }
}

const clean = () => {
    box.value = "";
}

const del = () => {
    box.value = box.value.slice(0,-1)
}

const ran = () => {
    box.value += Math.floor(Math.random() * 10)
}

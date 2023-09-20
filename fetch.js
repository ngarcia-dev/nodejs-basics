async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

loadData()

// Se puede usar este tipo de script solo si en el package.json se tiene seteado la linea "type": "module"
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
} catch (error) {
    console.log(error)
}
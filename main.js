document.addEventListener('DOMContentLoaded', () => {
    const ramdon = getRamdonInt(1, 101);
    fetchData(ramdon);
})


const getRamdonInt = (min, max) => {

    return Math.floor(Math.random() * (max - min)) + min;
}





const fetchData = async (id) => {

    try {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json();
        console.log(data);


    } catch (error) {
        console.log(Error)
    }
}


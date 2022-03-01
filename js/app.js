const search = () => {
    const input = document.getElementById('input');
    const value = input.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    fetch(url)
        .then(res => res.json())
        .then(datas => displayOutput(datas.data));
}

const displayOutput = values => {
    const output = document.getElementById('items');
    output.innerHTML = '';
    values.forEach(datas => {
        console.log(datas);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-solid border-gray-300 border-2 rounded-xl p-3">
                    <img class="rounded-xl block m-auto" src="${datas.image}" alt="Image">
                    <h2 class="text-center text-xl m-2 font-bold">${datas.phone_name}</h2>
                    <h2 class="text-center text-red-600">Release Date :</h2>
                    <h2 class="text-center text-cyan-800 mt-2">Brand : <span class="text-xl font-bold">${datas.brand}</span>
                    </h2>
                    <button class="bg-gray-300 pl-4 pr-4 p-1 rounded block m-auto mt-4">Detalse</button>
                </div>
        `
        output.appendChild(div);
    })
}
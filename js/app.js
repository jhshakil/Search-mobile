const search = () => {
    const input = document.getElementById('input');
    const value = input.value;
    input.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    fetch(url)
        .then(res => res.json())
        .then(datas => displayOutput(datas.data));
}

const displayOutput = values => {
    const output = document.getElementById('items');
    output.innerHTML = '';
    values.forEach(datas => {
        // console.log(datas);
        const div = document.createElement('div');
        div.classList.add('bg-white', 'rounded-lg')
        div.innerHTML = `
        <div class="border-solid border-gray-300 border-2 rounded-xl p-3">
                    <img class="rounded-xl block m-auto" src="${datas.image}" alt="Image">
                    <h2 class="text-center text-xl m-2 font-bold">${datas.phone_name}</h2>
                    <h2 class="text-center text-cyan-800 mt-2">Brand : <span class="text-xl font-bold">${datas.brand}</span>
                    </h2>
                    <button onclick="detalse('${datas.slug}')" class="bg-orange-300 pl-4 pr-4 p-1 rounded block m-auto mt-4">Detalse</button>
                </div>
        `
        output.appendChild(div);
    })
}

const detalse = id => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(datas => displayDetalse(datas))
}

const displayDetalse = values => {
    const detalse = document.getElementById('detalse');
    detalse.innerHTML = '';
    // console.log(values.data.mainFeatures);
    const div = document.createElement('div');
    div.classList.add('bg-orange-200', 'p-4', 'rounded-lg', 'drop-shadow-2xl');
    div.innerHTML = `
    <div class="block m-auto">
                    <h1 class="text-center text-3xl font-bold">${values.data.name}</h1>
                    <h3 class="text-center text-lg font-bold mt-2">Release Date: </h3>
                    <h3 class="text-center">${values.data.releaseDate}</h3>
                    <h3 class="text-center text-2xl font-bold mt-2">Main Feature</h3>
                    <h3 class="text-center text-lg font-bold mt-2">Storage</h3>
                    <h3 class="text-center">${values.data.mainFeatures.storage}</h3>
                    <h3 class="text-center text-lg font-bold mt-2">Display Size</h3>
                    <h3 class="text-center">${values.data.mainFeatures.displaySize}</h3>
                    <h3 class="text-center textlgl font-bold mt-2">Chip Set</h3>
                    <h3 class="text-center">${values.data.mainFeatures.chipSte}</h3>
                    <h3 class="text-center text-lg font-bold mt-2">Memory</h3>
                    <h3 class="text-center">${values.data.mainFeatures.memory}</h3>
                    <h3 class="text-center text-lg font-bold mt-2">Sensors</h3>
                    <h3 class="text-center">${values.data.mainFeatures.sensors}</h3>
                    <button onclick='closing()' class="bg-orange-500 pl-8 pr-8 p-1 rounded block m-auto mt-4">Close</button>
                </div>
    `
    detalse.appendChild(div)
}

const closing = () => {
    const items = document.getElementById('detalse');
    items.innerHTML = '';
}
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
    const noItems = document.getElementById('no-items');
    output.innerHTML = '';
    noItems.innerHTML = '';
    // product add 
    if (values.length == 0) {
        noItems.innerHTML = `
        <div class="bg-red-400 rounded-lg w-1/2 block m-auto">
                    <h1 class="text-3xl font-bold text-center text-white p-4">No Producht found</h1>
                </div>
        `
    } else {
        values.slice(0, 20).forEach(datas => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'rounded-lg', 'border-solid', 'border-gray-300', 'border-2', 'rounded-xl')
            div.innerHTML = `
            <div class="p-3">
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
}
// detalse add 
const detalse = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(datas => displayDetalse(datas))
}

const displayDetalse = values => {
    const detalse = document.getElementById('detalse');
    detalse.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('bg-orange-200', 'p-4');
    let release = values.data.releaseDate;
    if (release.length === 0) {
        release = 'Release date do not available'
    }
    let others = () => {
        if (values.data.others !== undefined) {

        }
    }
    div.innerHTML = `
    <div class="overflow-y-scroll  h-96 p-4 rounded-lg drop-shadow-2xl">
        <h1 class="text-center text-3xl font-bold">${values.data.name}</h1>
        <div class="grid grid-cols-4 gap-2 mt-2">
        <h3 class="text-right text-lg font-bold ">Release Date: </h3>
        <h3 class="text-left text-lg col-span-3">${release}</h3>
        </div>
        
        <h3 class="text-center text-2xl font-bold mt-2">Main Feature</h3>

        <div class="grid grid-cols-4 gap-4 mt-2">
        <h3 class="text-right text-lg font-bold">Storage: </h3>
        <h3 class="text-left text-lg col-span-3">${values.data.mainFeatures.storage}</h3>
        <h3 class="text-right text-lg font-bold">Display Size: </h3>
        <h3 class="text-left text-lg col-span-3">${values.data.mainFeatures.displaySize}</h3>
        <h3 class="text-right textlgl font-bold">Chip Set: </h3>
        <h3 class="text-left text-lg col-span-3">${values.data.mainFeatures.chipSet}</h3>
        <h3 class="text-right text-lg font-bold">Memory: </h3>
        <h3 class="text-left text-lg col-span-3">${values.data.mainFeatures.memory}</h3>
        <h3 class="text-right text-lg font-bold">Sensors: </h3>
        <h3 class="text-left text-lg col-span-3">${values.data.mainFeatures.sensors}</h3>
        </div>

        <h3 class="text-center text-2xl font-bold mt-2">Others</h3>

        ${(() => {
            if (values.data.others !== undefined) {
                return `<div class="grid grid-cols-4 gap-4 mt-2">
                        <h3 class="text-right text-lg font-bold">WLAN</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.WLAN}</h3>
                        <h3 class="text-right text-lg font-bold">Bluetooth</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.Bluetooth}</h3>
                        <h3 class="text-right text-lg font-bold">GPS</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.GPS}</h3>
                        <h3 class="text-right text-lg font-bold">NFC</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.NFC}</h3>
                        <h3 class="text-right text-lg font-bold">Radio</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.Radio}</h3>
                        <h3 class="text-right text-lg font-bold">USB</h3>
                        <h3 class="text-left text-lg col-span-3">${values.data.others.USB}</h3>
                        </div>`
            } else {
                return `<h3 class="text-center text-lg">NO data found</h3>`
            }
        })()
        }                  
    </div>
    <div class="">
        <button onclick='closing()' class="bg-orange-500 pl-8 pr-8 p-1 rounded block m-auto mt-4">Close</button>
    </div>
    `
    detalse.appendChild(div)
}

const closing = () => {
    const items = document.getElementById('detalse');
    items.innerHTML = '';
}
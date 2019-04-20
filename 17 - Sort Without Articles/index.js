const bands = ['Iron Maiden', 'Blackpink', 'Metallica', 'Megadeth', 'Slayer', 'Rata Blanca', 'Los Caballeros de la Quema'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');


console.log(sortedBands);
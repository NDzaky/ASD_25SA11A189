/**
 * Fungsi delay agar sorting terlihat bertahap
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * ==========================================
 * INSERTION SORT Berdasarkan A-Z
 * ==========================================
 */
async function insertionSortNama(queue) {
    const data = queue.getAll();
    // Perulangan luar
    for (let i = 1; i < data.length; i++) {
        let key = data[i];
        let j = i - 1;
        // Perulangan + percabangan
        while (j >= 0 && data[j].nama.localeCompare(key.nama) > 0) {

            // Visualisasi perbandingan
            renderTable([j, j + 1], "swap");
            await delay(600);

            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;
        queue.setData(data);
        renderTable();
        await delay(600);
    }
}
/**
 * ==========================================
 * SELECTION SORT Umur Tertua
 * ==========================================
 */
async function selectionSortUmur(queue) {
    const data = queue.getAll();

    // Perulangan utama
    for (let i = 0; i < data.length - 1; i++) {

        let maxIdx = i;

        // Mencari umur tertua
        for (let j = i + 1; j < data.length; j++) {

            renderTable([maxIdx, j], "active");
            await delay(600);

            // Percabangan
            if (data[j].umur > data[maxIdx].umur) {
                maxIdx = j;
            }
        }

        // Menukar data jika perlu
        if (maxIdx !== i) {
            [data[i], data[maxIdx]] = [data[maxIdx], data[i]];
            renderTable([i, maxIdx], "swap");
            await delay(600);
        }
    }

    queue.setData(data);
    renderTable();
}

/**
 * ==========================================
 * BUBBLE SORT jarak terdekat
 * ==========================================
 */
async function bubbleSortJarak(queue) {
    const data = queue.getAll();

    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {

            renderTable([j, j + 1], "active");
            await delay(600);

            // Percabangan
            if (data[j].jarak > data[j + 1].jarak) {
                [data[j], data[j + 1]] =
                [data[j + 1], data[j]];

                renderTable([j, j + 1], "swap");
                await delay(600);
            }
        }
    }

    queue.setData(data);
    renderTable();
}

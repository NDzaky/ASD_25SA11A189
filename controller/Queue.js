class QueuePenumpang {

    //Constructor Queue
    constructor(max = 10) {
        this.data = [];     // array untuk menyimpan penumpang
        this.max = max;     // batas maksimal queue
    }

    //Menambahkan data ke dalam queue (enqueue)
    enqueue(nama, umur, jarak) {
        // Percabangan: cek apakah queue penuh
        if (this.data.length >= this.max) {
            alert("Maksimal 10 data.");
            return false;
        }
        // Jika belum penuh → tambahkan data
        this.data.push({ nama, umur, jarak });
        return true;
    }

    //Menghapus data dari depan queue (dequeue)
    dequeue() {
        // Percabangan: cek apakah queue kosong
        if (this.isEmpty()) {
            return null;
        }
        // Menghapus elemen pertama
        return this.data.shift();
    }

    //pengecekan queue kosong
    isEmpty() {
        return this.data.length === 0;
    }

    //ambil data queue
    getAll() {
        return this.data;
    }

    //update data setelah sort
    setData(newData) {
        this.data = newData;
    }
}

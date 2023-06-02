"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tips",
      [
        {
          id: "tips-3g7s",
          judul: "Tips Mengurangi Jejak Karbon Anda",
          isi: "Kurangi Penggunaan Listrik: Matikan peralatan elektronik yang tidak digunakan, gantilah lampu pijar dengan lampu hemat energi, dan pertimbangkan penggunaan panel surya atau energi terbarukan di rumah Anda. \n\nGunakan Transportasi Ramah Lingkungan: Pilihlah berjalan kaki, bersepeda, atau menggunakan transportasi umum jika memungkinkan. Jika Anda harus menggunakan mobil, carilah kendaraan dengan efisiensi bahan bakar yang tinggi atau pertimbangkan mobil listrik. \n\nKurangi Konsumsi Daging: Produksi daging memiliki dampak besar terhadap emisi gas rumah kaca. Cobalah mengurangi konsumsi daging merah dan gantilah dengan sumber protein nabati seperti kacang-kacangan, biji-bijian, dan sayuran.",
        },
        {
          id: "tips-g2ad",
          judul: "Tips Mengurangi Penggunaan Plastik Sekali Pakai",
          isi: "Bawa Tas Belanja Sendiri: Selalu siapkan tas belanja kain atau tas ransel yang dapat digunakan kembali ketika berbelanja. Hindari penggunaan kantong plastik sekali pakai di toko. \n\nGunakan Botol Minum dan Wadah Makanan Bawaan: Bawa botol minum dan wadah makanan sendiri saat bepergian. Dengan menghindari penggunaan botol plastik dan kemasan makanan sekali pakai, Anda dapat mengurangi limbah plastik yang dihasilkan. \n\nGunakan Produk Alternatif: Coba cari produk rumah tangga yang tidak menggunakan plastik atau memilih produk yang menggunakan bahan plastik ramah lingkungan, seperti plastik biodegradable atau terbuat dari daur ulang.",
        },
        {
          id: "tips-6eg8",
          judul: "Tips Menjaga Keseimbangan Ekosistem",
          isi: "Dukung Pertanian Organik: Pilihlah makanan yang berasal dari pertanian organik atau lokal yang menggunakan metode pertanian berkelanjutan tanpa penggunaan pestisida dan pupuk kimia berlebihan. \n\nTanam Pohon dan Tumbuhan: Tanam pohon dan tanaman di sekitar rumah Anda atau ikut serta dalam program penanaman pohon. Tumbuhan berperan penting dalam menjaga keberlanjutan ekosistem dan mengurangi kadar karbon dioksida di atmosfer. \n\nDaur Ulang dan Mendaur Ulang: Lakukan praktik daur ulang dengan memisahkan sampah organik dan non-organik. Selain itu, coba untuk mendaur ulang barang-barang seperti kertas, kaca, dan plastik untuk mengurangi limbah dan penggunaan sumber daya alam.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tips", null, {});
  },
};

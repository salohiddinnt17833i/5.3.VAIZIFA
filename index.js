class Musiqa {
    constructor(nomi, avtor, turi, ishlabChiqarilganYili, qaytaKuylanlar, vaqti, id) {
      this.nomi = nomi;
      this.avtor = avtor;
      this.turi = turi;
      this.ishlabChiqarilganYili = ishlabChiqarilganYili;
      this.qaytaKuylanlar = qaytaKuylanlar;
      this.vaqti = vaqti;
      this.id = id;
    }
  }
  
  function musiqalarniMassivgaKiritish(soni) {
    const musiqaMassivi = [];
  
    for (let i = 1; i <= soni; i++) {
      const nomi = prompt(`Musiqa ${i} nomi:`);
      const avtor = prompt(`Musiqa ${i} avtori:`);
      const turi = prompt(`Musiqa ${i} turi:`);
      const ishlabChiqarilganYili = prompt(`Musiqa ${i} ishlab chiqarilgan yili:`);
      const qaytaKuylanlarStr = prompt(`Musiqa ${i} kimlar tomonidan qayta kuylangan (massiv holatida, vergul bilan ajrating):`);
      const qaytaKuylanlar = qaytaKuylanlarStr.split(',').map(item => item.trim());
      const vaqti = prompt(`Musiqa ${i} vaqti (sekundlarda):`);
      const id = i;
  
      const musiqa = new Musiqa(nomi, avtor, turi, ishlabChiqarilganYili, qaytaKuylanlar, vaqti, id);
      musiqaMassivi.push(musiqa);
    }
  
    return musiqaMassivi;
  }
  
  function unikalNomlarBilanMusiqalarniTanlabOlish(musiqalar) {
    const nomlarSet = new Set();
    const unikalMusiqalar = musiqalar.filter((musiqa) => {
      if (!nomlarSet.has(musiqa.nomi)) {
        nomlarSet.add(musiqa.nomi);
        return true;
      }
      return false;
    });
    return unikalMusiqalar;
  }
  

  const soni = prompt("Musiqalar soni:");
  const musiqalar = musiqalarniMassivgaKiritish(soni);
  
  console.log("Barcha Musiqalar:");
  console.log(musiqalar);
  
  const unikalMusiqalar = unikalNomlarBilanMusiqalarniTanlabOlish(musiqalar);
  
  console.log("\nUnikal Nomlar Bilan Musiqalar:");
  console.log(unikalMusiqalar);
  
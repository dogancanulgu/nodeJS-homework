// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
// Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const argument = process.argv.slice(2);

function areaCircle (radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area.toFixed(2));
}

areaCircle(argument[0]);
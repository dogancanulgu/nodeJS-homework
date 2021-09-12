// Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
// module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
// require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
const circleArea = (r) => {
    console.log(Math.PI * (r**2));
};

const circleCircumference = (r) => {
    console.log(2 * Math.PI * r);
};

module.exports = {
    circleArea,
    circleCircumference
};
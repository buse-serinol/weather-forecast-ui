// zaman dilimini kullanarak biçimlendirilmiş tarih ve saat  bilgisi döndüren fonk.

function convertTimeStamp(timeStamp, timezone) {
  //saniyeden saate dönüştürmek
  const convertTimezone = timezone / 3600;
  // yeni bir tarih nesnesini oluştur
  const date = new Date(timeStamp * 1000); //new date mls dışında bir şey atanmaz ?
  //tarih ve saat bilgisi için seçenekleri belirle
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    //converttimezone 3600 böldüğümüz için + veya - gelebilir, - gelirse pozitif bir sayıya çevirmemiz gerekiyorsaati zaman dilimine çevirmek gmt--> greenwich mean time
    timezone: `Etc/GMT ${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    hour12: true, // 12 saat formatında gösterilsin mi
  };
  return date.toLocaleString("en-US", options); //istenilen dildeki karakterlere çevirmek için //apide turkce yok
}
//ülke kodunu ülke adına çeviren fonk.
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], {type: "region" }); //ülke kodunu alıp ülke ismine ceviriyor?
  //1. kısım dil iikkinci kısım neye göre cevireceğini
  console.log(regionNames)
  //ülke kodunu ülke adına döndürür ör: TR(ülke kodu) - Türkiye
  console.log(regionNames.of(country))
  return regionNames.of(country)
}

export {convertTimeStamp,convertCountryCode }


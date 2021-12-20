///<reference types="Cypress"/>

//it.skip --> testi run etmez
//it.only --> sadece o testi calistirir

//?var ===>Tanımladığımız Değişkenler Aynı İsimle iki Veya Daha Fazla Tanımlanabilir//tekrar deger tanimlanabilir
//? Her Yeni Tanımlanan Değişkende Bir Öncekini Ezer, Yok Sayar
//? Global Scope aralarindaki en genisi

//?var pirasa = "Sebze";
//?var pirasa = "Meyve";

//!const===> Tanımladığımız Bir Değişken, Birdaha Proje Boyunca Tekrar Değer Tanımlayamayacağımız Değişkenlerdir
//!Bir Değişken Birdaha Yeni Değer Atanmak İçin KULLANILAMAZ.
//!Bloke scope'tur
//!const ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz.
//!Fakat Bir array Tanımlandıysa Ve Bu array in İçine Değer DEĞİŞTİRMEDEN, EKLEMEK İstiyorsak Bunu Başarabiliriz.
//! arrayde Değişkenin Değerini Değiştirmeden Bir Ekleme Yapmak İstiyorsak Buna Olanak Sağlıyor.

//!const a = [1,2,3];
//!a.push(4);    //!consola [1,2,3,4] yazar



//*let ==>Tanımladığımız Değişkenlerde Eğer Değişkene Atanan Değeri Proje İçersinde Değiştirmek 
//*Gerekecekse Ozaman let İle Değişkeni Tanımlayabiliriz   //deger guncellenebilir
//* bloke scope'tur yani sadece 

//*let ananas = "Sebze";
//*ananas = "Meyve";


context("4 islem",()=>{  //context yerine "describe" da kullanilabilir
       
    const s1=5
    const s2=4
    let sonuc;
    
    
 it("toplama",()=>{
   sonuc=s1+s2
   cy.log(sonuc)
   assert.equal(sonuc,9,"toplama sonuc kontrol")

    })

   it("cikarma",()=>{
       sonuc=s1-s2
       cy.log(sonuc)
       assert.equal(sonuc,1,"cikarma sonuc kontrol")
   }) 

})

/*Genel olarak özetleyecek olursak:
1-var function scope özelliği taşımaktadır. let ve const block scope özelliklidir.
2-Oluşturulan değişken önce kullanılıp daha sonra var keyword’ü ile tanımlanırsa 
herhangi bir hata oluşmaz(Hoisting). let ve const için bu durum geçerli değildir.
3-let ve const ile oluşturduğunuz değişkenlere değer atadığımızda, const ile
 oluşturduğunuz değişken’e tekrar atama yapamayız, ancak let değişkenine yeni bir değer ataması yapabilirsiniz.*/
import service1Img from '../public/assets/service1.svg'
import service2Img from '../public/assets/service2.svg'
import service3Img from '../public/assets/service3.svg'
import service4Img from '../public/assets/service4.svg'
import service5Img from '../public/assets/service5.svg'
import service6Img from '../public/assets/service6.svg'
import person1 from '../public/assets/person1.png'
import person2 from '../public/assets/person2.png'
import person3 from '../public/assets/person3.png'
import person4 from '../public/assets/person4.png'
import person5 from '../public/assets/person5.png'


export const allServices = [
    {
        image:service1Img,
        title: "Sözleşmeler Hukuku",
        description: "Sözleşmelerin oluşturulması, yorumlanması ve uyuşmazlıkların çözümünde yanınızdayız."
    },
    {
        image: service2Img,
        title: "Ceza Hukuku",
        description: "Adil yargılanma hakkının etkin kullanımı için soruşturma ve kovuşturma süreçlerinizde sizlere destek oluyoruz."
    },
    {
        image: service3Img,
        title: "Gayrimenkul Hukuku",
        description: "Mülkiyet, kira, tapu işlemleri ve gayrimenkul uyuşmazlıkları konularında profesyonel rehberlik sağlıyoruz."
    },
    {
        image: service4Img,
        title: "Ticaret Hukuku",
        description: "İşletmelerin ticari faaliyetlerini yasal düzenlemelere uygun yönetmelerine yardımcı oluyor, ticari uyuşmazlıklarda danışmanlık ve temsil hizmeti sunuyoruz."
    },
    {
        image: service5Img,
        title: "İş Hukuku",
        description: "İş ilişkileri, işçi-işveren hakları ve iş sözleşmeleri konusunda danışmanlık veriyor hem işveren hem de işçi yönünden iş davalarında temsil hizmeti sunuyoruz."
    },
    {
        image: service6Img,
        title: "Bilişim Hukuku",
        description: "Teknoloji ve veri güvenliği konularında hukuki rehberlik sunuyor, bilişim hukuku ihlalleri ve uyuşmazlık durumunda hukuki destek sağlıyoruz."
    },
]

export const menuItems =[
    {
        txt:"Anasayfa",
        path:"/",
    },
    {
        txt:"Hakkımızda",
        path:"/hakkimizda",
    },
    {
        txt:"Hizmetlerimiz",
        path:"/hizmetlerimiz",
    },
    {
        txt:"Ekibimiz",
        path:"/ekibimiz",
    },
    {
        txt:"Blog",
        path:"/blog",
    },
    {
        txt:"İletişim",
        path:"/iletisim",
    }
]

export const teams =[
    {
        name:"Av. Mehmet Akif İĞDECİ",
        role:"Kurucu Ortak",
        image: person1
    },
    {
        name:"Av. Berkan AYTEKİN",
        role:"Kurucu Ortak",
        image: person2
    },
    {
        name:"Av. Mahiye Merve İĞDECİ",
        role:"Danışman",
        image: person3
    },
    {
        name:"Gayenur KARATAŞ",
        role:"Danışman",
        image: person4
    },
    {
        name:"Yusuf İkbal ÇELİK",
        role:"Operasyon Uzmanı",
        image: person5
    }
]
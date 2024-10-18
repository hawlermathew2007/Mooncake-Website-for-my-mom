import userImg from '../components/assets/user/user.png'
//special
import thuonghang from '../components/assets/specialBanh/thuonghang.jpg'
import bathuu from '../components/assets/specialBanh/bathuu.jpg'
import sentaodo from '../components/assets/specialBanh/sentaodo.jpg'
//others
import dua from '../components/assets/otherBanh/dua.jpg'

// other talents
// import banhkem from '../components/assets/otherTalent/banhkem.jpg'
// import cookiedeo from '../components/assets/otherTalent/cookiedeo.jpg'
import combobanh from '../components/assets/otherTalent/combobanh.jpg'

const bakerShop = 'Bánh Tồ'

const specialBanh = [
    {
        name: "Thập cẩm thượng hạng",
        id: "thapcamthuonghang",
        type: "230g-2T",
        prize: "155K",
        image: thuonghang
    },
    {
        name: "Thập cẩm bát bửu loại 1",
        id: "thapcambatbuu",
        type: "150g-1T",
        prize: "80K",
        image: bathuu
    },
    {
        name: "Thập cẩm bát bửu loại 2",
        id: "thapcambatbuu",
        type: "230g-2T",
        prize: "95K",
        image: bathuu
    },
    {
        name: "Sen táo đỏ loại 1",
        id: "sentaodo",
        type: "150g-1T",
        prize: "85K",
        image: sentaodo
    },
    {
        name: "Sen táo đỏ loại 2",
        id: "sentaodo",
        type: "230g-2T",
        prize: "100K",
        image: sentaodo
    }
]

const othersBanh = [
    {
        name: "Sen huế",
        id: "senhue",
        type1: "150g-1T",
        prize1: "80K",
        type2: "230g-2T",
        prize2: "95K",
        image: null
    },
    {
        name: "Vỏ trà xanh",
        id: "votraxanh",
        type1: "150g-1T",
        prize1: "80K",
        type2: "230g-2T",
        prize2: "95K",
        image: null
    },
    {
        name: "Đậu xanh sầu riêng",
        id: "dauxanhsaurieng",
        type1: "150g-1T",
        prize1: "75K",
        type2: "230g-2T",
        prize2: "95K",
        image: null
    },
    {
        name: "Khoai môn",
        id: "khoaimon",
        type1: "150g-1T",
        prize1: "70K",
        type2: "230g-2T",
        prize2: "85K",
        image: null
    },
    {
        name: "Sửa dừa",
        id: "suadua",
        type1: "150g-1T",
        prize1: "65K",
        type2: "230g-2T",
        prize2: "80K",
        image: null
    },
    {
        name: "Vỏ ca cao",
        id: "vocacao",
        type1: "150g-1T",
        prize1: "65K",
        type2: "230g-2T",
        prize2: "80K",
        image: null
    },
    {
        name: "Đậu xanh cốm",
        id: "dauxanhcom",
        type1: "150g-1T",
        prize1: "70K",
        type2: "230g-2T",
        prize2: "85K",
        image: null
    },
    {
        name: "Vỏ men gạo đỏ",
        id: "vomengaodo",
        type1: "150g-1T",
        prize1: "70K",
        type2: "230g-2T",
        prize2: "85K",
        image: null
    },
    {
        name: "Đậu xanh",
        id: "dauxanh",
        type1: "150g-1T",
        prize1: "80K",
        type2: "230g-2T",
        prize2: "95K",
        image: null
    },
]
othersBanh.forEach((banh) => {
    banh.image = dua
})

// const otherTalent = [
//     {
//         header: "Làm bánh kem là một trong những sở trưởng của Tồ",
//         paragraph: "Là một người ưa thích nghệ thuật như Tồ, thì mình có làm nhiều bánh kem với nhiều ngoại hình khác nhau với hương vị cực ngon và vừa phải với mọi nhà.",
//         img: banhkem
//     },
//     {
//         header: "Làm nhiều loại bánh Cookie cũng không ngoại lệ",
//         paragraph: "Vì có niềm đam mê với làm làm bánh, Tồ luôn làm thật nhiều loại bánh và trong đó có Cookie. Đa phần là những loại Cookie cực kì ngon và quan trọng là còn tốt cho sức khỏe nữa",
//         img: cookiedeo
//     },
//     {
//         header: "Tất nhiên còn nhiều món khác Tồ có thể làm mà không thể nào kể hết",
//         paragraph: "Tồ có thể làm bánh bao xá xíu cực ngon nè, rồi làm Pateso thật hấp dẫn nè. Nói chung nhiều quá trời luôn!",
//         additionalSentence: "Hãy liên hệ với Tồ qua số điện thoại để biết thêm nhiều mà đặt bánh nhé!"
//     },
// ]

const comboBanh = [
    {
        name: "Combo ấm áp",
        id: "comboamap",
        prize: "380K",
        img: combobanh,
        components: [
            {
                name: "Thập cẩm",
                eggs: 2,
                amount: 2
            },
            {
                name: "Bánh ngọt",
                eggs: 1,
                amount: 2
            }
        ]
    },
    {
        name: "Combo thượng hạng",
        id: "combothuonghang",
        prize: "450K",
        img: combobanh,
        components: [
            {
                name: "Thập cẩm thượng hạng",
                eggs: null,
                amount: 1
            },
            {
                name: "Thập cẩm",
                eggs: 2,
                amount: 1
            },
            {
                name: "Bánh ngọt",
                eggs: 1,
                amount: 2
            }
        ]
    },
    {
        name: "Combo nhẹ nhàng",
        id: "combonhenhang",
        prize: "195K",
        img: combobanh,
        components: [
            {
                name: "Thập cẩm",
                eggs: 2,
                amount: 1
            },
            {
                name: "Bánh ngọt",
                eggs: 1,
                amount: 1
            }
        ]
    },
]

const listBanh = [...specialBanh,...othersBanh, ...comboBanh]

const comments = [
    {
        name: "Minh Thiện",
        rate: 5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas.",
        image: userImg
    },
    {
        name: "Hoành Hạnh",
        rate: 4.5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas.",
        image: userImg
    },
    {
        name: "Mỹ Kha",
        rate: 5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas.",
        image: userImg
    },
    {
        name: "Út Lộc",
        rate: 4,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas.",
        image: userImg
    },
    {
        name: "Hoài Ân",
        rate: 4.5,
        comment: "Bánh mẹ làm ngon lắm! Mọi người hãy mua ủng hộ mẹ tui và thưởng thức mùa trung thu vui vẻ nha!",
        image: userImg
    },
    {
        name: "Dương Chấn",
        rate: 5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas.",
        image: userImg
    }
]

export {
    bakerShop,
    listBanh,
    specialBanh,
    othersBanh,
    comboBanh,
    comments
}
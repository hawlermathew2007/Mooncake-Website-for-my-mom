import userImg from '../components/assets/user/user.png'
//special
import thuonghang from '../components/assets/specialBanh/thuonghang.jpg'
import bathuu from '../components/assets/specialBanh/bathuu.jpg'
import sentaodo from '../components/assets/specialBanh/sentaodo.jpg'

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
        name: "Thập cẩm bát bửu",
        id: "thapcambatbuu",
        type: "150g-1T",
        prize: "80K",
        image: bathuu
    },
    {
        name: "Thập cẩm bát bửu",
        id: "thapcambatbuu",
        type: "230g-2T",
        prize: "95K",
        image: bathuu
    },
    {
        name: "Sen táo đỏ",
        id: "sentaodo",
        type: "150g-1T",
        prize: "85K",
        image: sentaodo
    },
    {
        name: "Sen táo đỏ",
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

const comboBanh = [
    {
        name: "Combo ấm áp",
        id: "comboamap",
        prize: "380K",
        components: [
            {
                name: "thập cẩm",
                eggs: 2,
                amount: 2
            },
            {
                name: "bánh ngọt",
                eggs: 1,
                amount: 2
            }
        ]
    },
    {
        name: "Combo thượng hạng",
        id: "comboamap",
        prize: "450K",
        components: [
            {
                name: "thập cẩm thượng hạng",
                eggs: null,
                amount: 1
            },
            {
                name: "thập cẩm",
                eggs: 2,
                amount: 1
            },
            {
                name: "bánh ngọt",
                eggs: 1,
                amount: 2
            }
        ]
    },
    {
        name: "Combo nhẹ nhàng",
        id: "combonhenhang",
        prize: "195K",
        components: [
            {
                name: "thập cẩm",
                eggs: 2,
                amount: 1
            },
            {
                name: "bánh ngọt",
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
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
        image: userImg
    },
    {
        name: "Hoành Hạnh",
        rate: 4.5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
        image: userImg
    },
    {
        name: "Mỹ Kha",
        rate: 5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
        image: userImg
    },
    {
        name: "Nước Lộc",
        rate: 4,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
        image: userImg
    },
    {
        name: "Hoài Ân",
        rate: 4.5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
        image: userImg
    },
    {
        name: "Dương Chấn",
        rate: 5,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi quasi esse ipsum, eos officia rerum accusantium quas repudiandae explicabo qui eum amet fugit blanditiis quod voluptatem natus cumque provident.",
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
const bakerShop = 'Bánh Tồ'

const specialBanh = [
    {
        name: "Thập cẩm thượng hạng",
        id: "thapcamthuonghang",
        type: "230g-2T",
        prize: "155K",
        image: null
    },
    {
        name: "Thập cẩm bát bửu",
        id: "thapcambatbuu",
        type1: "150g-1T",
        prize1: "80K",
        type2: "230g-2T",
        prize2: "95K",
        image: null
    },
    {
        name: "Sen táo đỏ",
        id: "sentaodo",
        type1: "150g-1T",
        prize1: "85K",
        type2: "230g-2T",
        prize2: "100K",
        image: null
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


export {
    bakerShop,
    listBanh
}
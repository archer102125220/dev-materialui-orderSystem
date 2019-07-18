import fach from '../utils/request';

export function Get_menuLists(payload = {}, token) {
    // return fach('GET', '/menu_list', payload, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // });
    return [
        {
            type: "品項A",
            class: [
                "品項A漢堡",
                "品項A吐司",
                "品項A總匯"
            ],
            special: [
                "品項A特需1",
                "品項A特需2",
                "品項A特需3",
                "品項A特需4",
                "品項A特需5",
                "品項A特需6",
                "品項A特需7",
            ],
            items: [{
                name: "歐姆蛋",
                price: 50,
                src: "phe",
                description: "歐姆蛋產品描述",
            },
            {
                name: "培根蛋",
                price: 30,
                src: "",
                description: "培根蛋產品描述",
            }]
        },
        {
            type: "套餐A",
            class: [
                "套餐A漢堡",
                "套餐A吐司",
                "套餐A總匯"
            ],
            special: [
                "套餐A特需1",
                "套餐A特需2",
                "套餐A特需3",
                "套餐A特需4",
                "套餐A特需5",
                "套餐A特需6",
                "套餐A特需7",
            ],
            items: [{
                name: "美式早餐",
                price: 50,
                src: "usaBreakfast",
                description: "美式早餐產品描述",
            },
            {
                name: "中式早餐",
                price: 60,
                src: "",
                description: "中式早餐產品描述",
            }],
        },
        {
            type: "品項B",
            class: [
                "品項B漢堡",
                "品項B吐司",
                "品項B總匯"
            ],
            special: [
                "品項B特需1",
                "品項B特需2",
                "品項B特需3",
                "品項B特需4",
                "品項B特需5",
                "品項B特需6",
                "品項B特需7",
            ],
            items: [{
                name: "歐姆蛋",
                price: 50,
                src: "phe",
                description: "歐姆蛋產品描述",
            },
            {
                name: "培根蛋",
                price: 30,
                src: "",
                description: "培根蛋產品描述",
            }]
        },
        {
            type: "套餐B",
            class: [
                "套餐B漢堡",
                "套餐B吐司",
                "套餐B總匯"
            ],
            special: [
                "套餐B特需1",
                "套餐B特需2",
                "套餐B特需3",
                "套餐B特需4",
                "套餐B特需5",
                "套餐B特需6",
                "套餐B特需7",
            ],
            items: [{
                name: "美式早餐",
                price: 50,
                src: "usaBreakfast",
                description: "美式早餐產品描述",
            },
            {
                name: "中式早餐",
                price: 60,
                src: "",
                description: "中式早餐產品描述",
            }],
        },
        {
            type: "品項C",
            class: [
                "品項C漢堡",
                "品項C吐司",
                "品項C總匯"
            ],
            special: [
                "品項C特需1",
                "品項C特需2",
                "品項C特需3",
                "品項C特需4",
                "品項C特需5",
                "品項C特需6",
                "品項C特需7",
            ],
            items: [{
                name: "歐姆蛋",
                price: 50,
                src: "phe",
                description: "歐姆蛋產品描述",
            },
            {
                name: "培根蛋",
                price: 30,
                src: "",
                description: "培根蛋產品描述",
            }]
        },
        {
            type: "套餐C",
            class: [
                "套餐C漢堡",
                "套餐C吐司",
                "套餐C總匯"
            ],
            special: [
                "套餐C特需1",
                "套餐C特需2",
                "套餐C特需3",
                "套餐C特需4",
                "套餐C特需5",
                "套餐C特需6",
                "套餐C特需7",
            ],
            items: [{
                name: "美式早餐",
                price: 50,
                src: "usaBreakfast",
                description: "美式早餐產品描述",
            },
            {
                name: "中式早餐",
                price: 60,
                src: "",
                description: "中式早餐產品描述",
            }],
        },
        {
            type: "品項D",
            class: [
                "品項D漢堡",
                "品項D吐司",
                "品項D總匯"
            ],
            special: [
                "品項D特需1",
                "品項D特需2",
                "品項D特需3",
                "品項D特需4",
                "品項D特需5",
                "品項D特需6",
                "品項D特需7",
            ],
            items: [{
                name: "歐姆蛋",
                price: 50,
                src: "phe",
                description: "歐姆蛋產品描述",
            },
            {
                name: "培根蛋",
                price: 30,
                src: "",
                description: "培根蛋產品描述",
            }]
        },
        {
            type: "套餐D",
            class: [
                "套餐D漢堡",
                "套餐D吐司",
                "套餐D總匯"
            ],
            special: [
                "套餐D特需1",
                "套餐D特需2",
                "套餐D特需3",
                "套餐D特需4",
                "套餐D特需5",
                "套餐D特需6",
                "套餐D特需7",
            ],
            items: [{
                name: "美式早餐",
                price: 50,
                src: "usaBreakfast",
                description: "美式早餐產品描述",
            },
            {
                name: "中式早餐",
                price: 60,
                src: "",
                description: "中式早餐產品描述",
            }],
        },
        {
            type: "品項E",
            class: [
                "品項E漢堡",
                "品項E吐司",
                "品項E總匯"
            ],
            special: [
                "品項E特需1",
                "品項E特需2",
                "品項E特需3",
                "品項E特需4",
                "品項E特需5",
                "品項E特需6",
                "品項E特需7",
            ],
            items: [{
                name: "歐姆蛋",
                price: 50,
                src: "phe",
                description: "歐姆蛋產品描述",
            },
            {
                name: "培根蛋",
                price: 30,
                src: "",
                description: "培根蛋產品描述",
            }]
        },
        {
            type: "套餐E",
            class: [
                "套餐E漢堡",
                "套餐E吐司",
                "套餐E總匯"
            ],
            special: [
                "套餐E特需1",
                "套餐E特需2",
                "套餐E特需3",
                "套餐E特需4",
                "套餐E特需5",
                "套餐E特需6",
                "套餐E特需7",
            ],
            items: [{
                name: "美式早餐",
                price: 50,
                src: "usaBreakfast",
                description: "美式早餐產品描述",
            },
            {
                name: "中式早餐",
                price: 60,
                src: "",
                description: "中式早餐產品描述",
            }],
        },
    ];
}

export function POST_menuList(payload = {}, token) {
    return fach('POST', '/menu_list', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function Get_menuList(menuListId, token) {
    return fach('GET', `/menu_list/${menuListId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function PATCH_menuList(menuListId, payload = {}, token) {
    return fach('PATCH', `/menu_list/${menuListId}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function DELETE_menuList(menuListId, token) {
    return fach('DELETE', `/menu_list/${menuListId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}
import fach from '../utils/request';

export function Get_orderLists(payload = {}, token) {
    return fach('GET', '/order_list', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function POST_orderList(payload = {}, token) {
    return fach('POST', '/order_list', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function Get_orderList(orderListId, token) {
    return fach('GET', `/order_list/${orderListId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export function PATCH_orderList(orderListId, payload = {}, token) {
    // return fach('PATCH', `/order_list/${orderListId}`, payload, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // });
    console.log(payload);
    
}

export function DELETE_orderList(orderListId, token) {
    return fach('DELETE', `/order_list/${orderListId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}
// action = {
//     type: 'CREATE_EVENT',
//     title: '2020年東京オリンピックのお知らせ',
//     body: '2020年に東京オリンピックを開催します！つきましては、、、、'
// }
//
// #before
// state = []
//
// #before
// state = [
//     {id:1,title:'タイトル１',body:'ボディー１'},
//     {id:2,title:'タイトル２',body:'ボディー２'},
//     {id:3,title:'タイトル３',body:'ボディー３'}
// ]


const events = (state = [],action) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = { title: action.title,body: action.body }
            const length = state.length
            let id = length === 0 ? 1 : state[length-1].id + 1
            return [...state,{id,...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}

export default events
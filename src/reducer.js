export const initialState = {
    tool: {
        'studio_id': '1111',
        'tool_id': 'Reducer Tool',
        'description_url': '',
        'image_url': 'https://5.imimg.com/data5/HS/WC/MY-2011246/dewalt-tools-500x500.jpg',
        'training_url': 'https://wiki.umiacs.umd.edu/sandbox/',
        'drive_url': 'https://wiki.umiacs.umd.edu/sandbox/'
      }
}


const reducer = (state, action) => {
    console.log(action)
    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_TOOL':
            return {
                ...state,
                tool: action.tool
            }
            default:
                return state
    }
}


export default reducer;
const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore adipisci, accusantium quarerat et autem necessitatibus hic harum. Tenetur asperiores at nihil, earum recusandaem aliquid repellendus, veniam eveniet modimolestias sequi.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore adipisci, accusantium quarerat et autem necessitatibus hic harum. Tenetur asperiores at nihil, earum recusandaem aliquid repellendus, veniam eveniet modimolestias sequi.'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore adipisci, accusantium quarerat et autem necessitatibus hic harum. Tenetur asperiores at nihil, earum recusandaem aliquid repellendus, veniam eveniet modimolestias sequi.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer

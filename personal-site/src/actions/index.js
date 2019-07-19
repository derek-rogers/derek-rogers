export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'

export const FETCH_ALL_POSTS_BEGIN = 'FETCH_ALL_POSTS_BEGIN'
export const FETCH_ALL_POSTS_FAILURE = 'FETCH_ALL_POSTS_FAILURE'
export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS'

export const SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW'

export const fetchPost = postId => {
    return dispatch => {
        dispatch({ type: FETCH_POST_BEGIN })

        return fetch(`https://fathomless-gorge-17177.herokuapp.com/posts/${postId}`)
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: FETCH_POST_FAILURE,
                        payload: {
                            error: body.error
                        }
                    })
                } else {
                    dispatch({
                        type: FETCH_POST_SUCCESS,
                        payload: {
                            post: body
                        }
                    })
                }
            });
    }
}

export const fetchAllPosts = () => {
    return dispatch => {
        dispatch({type: FETCH_ALL_POSTS_BEGIN})

        return fetch('https://fathomless-gorge-17177.herokuapp.com/posts')
        .then(response => response.json().then(body => ({response, body})))
        .then(({response, body}) => {
            if(!response.ok){
                dispatch({
                    type: FETCH_ALL_POSTS_FAILURE,
                    payload: {
                        error: body.error
                    }
                })
            } else {
                dispatch({
                    type: FETCH_ALL_POSTS_SUCCESS,
                    payload: {
                        posts: body
                    }
                })
            }
        })
    }
}

export const fetchLatestPost = () => {
    return dispatch => {
        dispatch({type: FETCH_POST_BEGIN})

        return fetch('https://fathomless-gorge-17177.herokuapp.com/posts')
        .then(response => response.json().then(body => ({response, body})))
        .then(({response, body}) => {
            if(!response.ok){
                dispatch({
                    type: FETCH_POST_FAILURE,
                    payload: {
                        error: body.error
                    }
                })
            } else {
                let latestPost = body[body.length-1]
                window.location = `/#/blog/${latestPost.id}`
                dispatch({
                    type: FETCH_POST_SUCCESS,
                    payload: {
                        post: latestPost
                    }
                })
            }
        })
    }
}

export const setActiveView = viewName => (
    {
        type: SET_ACTIVE_VIEW,
        payload: viewName
    }
)


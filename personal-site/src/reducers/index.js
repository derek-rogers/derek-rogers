import {
    FETCH_POST_BEGIN,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    FETCH_ALL_POSTS_BEGIN,
    FETCH_ALL_POSTS_FAILURE,
    FETCH_ALL_POSTS_SUCCESS,
    SET_ACTIVE_VIEW
} from '../actions'

const initialState = {
    activeView: 'home',
    blogPost: {
        isFetching: false,
        data: {},
        error: null
    }
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_VIEW: {
            return {
                ...state,
                activeView: action.payload.viewName
            }
        }

        case FETCH_POST_BEGIN: {
            return {
                ...state,
                blogPost: {
                    ...state.blogPost,
                    isFetching: true,
                }
            }
        }

        case FETCH_POST_FAILURE: {
            return {
                ...state,
                blogPost: {
                    ...state.blogPost,
                    isFetching: false,
                    error: action.payload.error
                }
            }
        }

        case FETCH_POST_SUCCESS: {
            return {
                ...state,
                blogPost: {
                    ...state.blogPost,
                    isFetching: false,
                    error: null,
                    data: action.payload.post
                }
            }
        }

        case FETCH_ALL_POSTS_BEGIN: {
            return {
                ...state,
                allBlogPosts: {
                    ...state.allBlogPosts,
                    isFetching: true
                }
            }
        }

        case FETCH_ALL_POSTS_FAILURE: {
            return {
                ...state,
                allBlogPosts: {
                    ...state.allBlogPosts,
                    isFetching: false,
                    error: action.payload.error
                }
            }
        }

        case FETCH_ALL_POSTS_SUCCESS: {
            return {
                ...state,
                allBlogPosts: {
                    ...state.allBlogPosts,
                    isFetching: false,
                    error: null,
                    data: action.payload.posts
                }
            }
        }

        default:
            return state
    }
}
import * as types from '../constants/ActionTypes';
import * as info from '../constants/APP_INFO';

const articleState = {
	isRefreshing: false,
	isFirstLoaded: true,
	isLoadMore: false,
	noMore: false,
	index: 1,
	articleList: [],
};
const initialState = [];
for (var i=0; i<info.API_MENUS.length; i++) {
	initialState.push(Object.assign({}, articleState));
}

export default function read(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_ARTICLE_LIST:
			console.log ('fetch list ', action.category, 'index',info.categoryIndex(action.category));
			state[info.categoryIndex(action.category)].isRefreshing = action.isRefreshing;
			return Object.assign({}, state);
		break;
		case types.RECEIVE_ARTICLE_LIST:
			console.log('got article list, ',action.category, info.categoryIndex(action.category), action.rankList.data);
			var tmp = info.categoryIndex(action.category);
			state[tmp].isRefreshing = action.isRefreshing;
			state[tmp].articleList = action.rankList.data;
			state[tmp].isFirstLoaded = false;
			return Object.assign({}, state);
		break;
		case types.RECEIVE_ARTICLE_LIST_MORE:
			console.log (action, action.nowRead);
			var tmp = info.categoryIndex(action.category);
			state[tmp].isRefreshing = action.isRefreshing;
			state[tmp].articleList = state[tmp].articleList.concat(action.rankList.data);
			state[tmp].index = state[tmp].index + 1;;
			return Object.assign({}, state);
		break;
		default:
			return state;
	}
}

function combine(state, action) {
	state.articleList[action.typeId] = action.articleList
	return state.articleList;
}

function loadMore(state, action) {
	state.articleList[action.typeId] = state.articleList[action.typeId].concat(action.articleList)
	return state.articleList;
}

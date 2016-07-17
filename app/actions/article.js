import * as types from '../constants/ActionTypes';
import * as info  from '../constants/APP_INFO';

export function fetchArticles(category = 'Android', index = 0, isLoadMore, nowRead) {
	return dispatch => {
		if(!isLoadMore){
			dispatch(fetchArticleList(category));
		}
		let URL = `${info.APP_API_ARTICLE_LIST_URL}/${category}/${info.APP_API_AMOUNT_PER_PAGE}/${index*info.APP_API_AMOUNT_PER_PAGE}`;
		console.log(URL);
    fetch(URL).then(response => response.json())
      .then(responseData => {
					if(!isLoadMore){
						dispatch(receiveArticleList(responseData,category));
					} else {
						dispatch(receiveArticleListMore(responseData, category, nowRead));
					}
      }).catch((error) => {
			 		console.log('error', error);
			}).done();
	}
}

function fetchArticleList(category) {
	return {
		type: types.FETCH_ARTICLE_LIST,
		category: category,
		isRefreshing: true
	}
}

function receiveArticleList(rankList,category) {
	return {
		type: types.RECEIVE_ARTICLE_LIST,
		isRefreshing: false,
		category: category,
		rankList: rankList
	}
}

function receiveArticleListMore(rankList, category, nowRead) {
	return {
		type: types.RECEIVE_ARTICLE_LIST_MORE,
		isRefreshing: false,
		category: category,
		nowRead : nowRead,
		rankList: rankList
	}
}

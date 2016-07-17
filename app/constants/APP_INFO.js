export const APP_TITLE = '华尔街见闻' ;
export const API_MENUS = [{'name':'头条', 'category':'wj-head'}, 
						  {'name':'美国', 'category': 'wj-usa'},
						  {'name':'中国', 'category': 'wj-cn'},
						  {'name':'欧洲', 'category': 'wj-euro'},
						  ];
export const APP_SIDE_TITLE = '华尔街见闻' ;
export const APP_SIDE_MENU1 = '首页' ;
export const APP_SIDE_MENU2 = '日排行' ;
export const APP_SIDE_MENU3 = '周排行' ;
export const APP_SIDE_MENU4 = '关于' ;

// export const APP_API_ARTICLE_LIST_URL = 'http://gank.io/api/data' ;
export const APP_API_ARTICLE_LIST_URL = 'http://120.25.202.90:9511/api' ;
export const APP_API_ARTICLE_ITEM_URL = 'http://xxx.com/aritlces/x' ;
export const APP_API_AMOUNT_PER_PAGE  = 10;


export const APP_TEXT_AUTHOR = '作者 ';
export const APP_TEXT_OVER = '数据已结加载完了- -|||';

export function categoryIndex (category) {
	for (var i=0; i<API_MENUS.length; i++) {
      if (API_MENUS[i]['category'] == category) {
        return i;
      }
    }
};
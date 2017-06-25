# filter-fetch
a page with several modules using vuex to filter and fetch data from backend

### 简介
本项目是一个使用Multi-level-select模块的简单示例，也是一个使用vue,vuex进行模块化开发的例子。  
项目分为两个模块，filter和fetch模块。filter模块获取筛选项数据供用户筛选。fetch，模块根据筛选项从  
后台获取数据。筛选项和获取的数据统一由vuex划分两个模块进行管理。webpack进行打包。  
对于filter模块。分为排序，星级，位置三个筛选大项。排序为一层单选，星级为一层多选，位置为多级单选。  
[在线示例](http://www.kuuger.com:8360/static/filter-fetch/filter.html)

## 目录结构
dist 编译目录  
src 代码目录  

## api开发服务器
https://github.com/iocdacc/api  

## 运行流程
服务端:
1. 根据路由进行数据预取(同步或异步).
2. 将预取的数据存入redux.
3. 根据当前路由渲染对应的组件(redux已经有数据).
4. 将包括redux在内的有效数据存入HTML的window对象.
5. 返回HTML.内部包含前端所需的JS,CSS和redux数据.

浏览器:
1. 渲染静态HTML
2. 加载JS,CSS
3. 获取window对象内后端预取的数据(避免前端重复获取数据)
4. 执行react同构代码
5. 页面渲染完成

## 暂时面临的问题
1. 数据预取问题  
components.loadData 数据预取方法只有路由组件会自动执行，而子组件因为路由无法获取到方法所以不会自动执行。  
暂时解决：只有通过其路由父组件调用来间接执行，这样会在开发阶段造成不小的负担。  

2. 路由的匹配问题  
公共组件比如 导航栏 尾部，是通过路由包裹的形式实现。这样只需在顶层路由一次调用公共组件，内部的其他路由就都有这些公共组件了。
但存在一个问题，如果未匹配到内部路由的404页面又不想要公共部分，因为顶层路由是全匹配导致之后的路由都不会被匹配到，从而404也面只能被公共路由包裹才能被匹配到，但公共部分存在的组件也一并加载了。
暂时解决：在公共路由添加自定义数组属性，内部填写哪些组件不要公共部分，然后在公共路由的组件内进行判断当前路由是否需要公共部分。但这会给公共路由的组件增加代码冗余。  

3. 组件懒加载问题  
服务端的异步组件并不会被渲染成HTML但又会发出不必要的异步请求。  
~~暂时解决：暂时还未找到如何避免服务端这些不必要的异步请求的方法。~~  
解决:loadable 配置SSR时不请求异步组件

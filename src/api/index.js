// 当前这个模块  对api进行统一管理
import requests  from "./request.js";


// 导出一个获取列表数据的方法
export const  reqCategoryList = async ()=>{
  return await requests.get('/product/getBaseCategoryList')
  
}
'use strict';!function(require,directRequire){const a=require('./15ba1827c7f6564a45df6bd44da3a977.js'),b=require('./f171257bbcaef547a3cf27266ccb0db2.js'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./72653d4b93cdd7443296229431a7aa9a.js');module.exports={getPublicLibUsageRate:()=>(e)=>new Promise(async(f,g)=>{function h(a){return{updateTime:a.update_time?1e3*a.update_time:void 0,android:a.android,ios:a.iOS,total:a.total}}try{const{body:i}=await a({url:b.getPublicLibUsageRate,needToken:1,needAppID:1}),j=i.json_data;if(j){const a=h(JSON.parse(j));if(!a.total)return g();e({type:c.PUBLIC_GET_PUBLIC_LIB_USAGE_RATE,data:a}),f(a)}else d.error(`get public lib usage rate fail, body: ${i}`),g()}catch(a){d.error(`get public lib usage rate fail, error: ${a.toString()}`),g()}})}}(require('lazyload'),require);
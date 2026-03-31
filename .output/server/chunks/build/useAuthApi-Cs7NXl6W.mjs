import{j as t}from"./server.mjs";function getAuthApi(){return t().$authApi}async function $authPost(t,a){const u=getAuthApi();return await u(t,{method:"POST",body:a})}async function $authGet(t,a){const u=getAuthApi();return await u(t,{method:"GET",query:a})}export{$authPost as $,$authGet as a};
//# sourceMappingURL=useAuthApi-Cs7NXl6W.mjs.map

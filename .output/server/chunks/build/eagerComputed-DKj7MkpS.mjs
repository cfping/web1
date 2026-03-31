import{shallowRef as e,watchEffect as o}from"vue";function eagerComputed(r){const t=e();return o(()=>{t.value=r()},{flush:"sync"}),t}export{eagerComputed as e};
//# sourceMappingURL=eagerComputed-DKj7MkpS.mjs.map

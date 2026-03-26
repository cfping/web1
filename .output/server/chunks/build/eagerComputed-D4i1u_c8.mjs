import{shallowRef as e,watchEffect as o}from"vue";import{u as r}from"./responsiveObserve-DoVCWibC.mjs";function useBreakpoint(){const o=e({});return r(),o}function eagerComputed(r){const s=e();return o(()=>{s.value=r()},{flush:"sync"}),s}export{eagerComputed as e,useBreakpoint as u};
//# sourceMappingURL=eagerComputed-D4i1u_c8.mjs.map

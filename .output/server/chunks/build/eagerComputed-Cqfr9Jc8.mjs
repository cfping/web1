import{shallowRef as e,watchEffect as r}from"vue";import{u as o}from"./responsiveObserve-BzaQhjlx.mjs";function useBreakpoint(){const r=e({});return o(),r}function eagerComputed(o){const s=e();return r(()=>{s.value=o()},{flush:"sync"}),s}export{eagerComputed as e,useBreakpoint as u};
//# sourceMappingURL=eagerComputed-Cqfr9Jc8.mjs.map

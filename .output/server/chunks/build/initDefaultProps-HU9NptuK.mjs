import{m as e}from"./server.mjs";const initDefaultProps=(t,r)=>{const o=e({},t);return Object.keys(r).forEach(e=>{const t=o[e];if(!t)throw new Error(`not have ${e} prop`);t.type||t.default?t.default=r[e]:t.def?t.def(r[e]):o[e]={type:t,default:r[e]}}),o};export{initDefaultProps as i};
//# sourceMappingURL=initDefaultProps-HU9NptuK.mjs.map

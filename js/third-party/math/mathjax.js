/* global NexT, CONFIG, MathJax */
document.addEventListener("page:loaded",()=>{CONFIG.enableMath&&("undefined"==typeof MathJax?(window.MathJax={tex:{inlineMath:{"[+]":[["$","$"]]},tags:CONFIG.mathjax.tags},options:{renderActions:{insertedScript:[200,()=>{document.querySelectorAll("mjx-container").forEach(t=>{const e=t.parentNode;"li"===e.nodeName.toLowerCase()&&e.parentNode.classList.add("has-jax")})},"",!1]}}},NexT.utils.getScript(CONFIG.mathjax.js,{attributes:{defer:!0}})):(MathJax.startup.document.state(0),MathJax.typesetClear(),MathJax.texReset(),MathJax.typeset()))});
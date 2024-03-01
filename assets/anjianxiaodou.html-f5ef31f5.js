import{_ as i,n as d,p as s,q as r,s as t,R as e,t as l,a3 as c,Z as a}from"./framework-4bf64526.js";const o={},h=a('<hr><h2 id="为什么要按键消抖" tabindex="-1"><a class="header-anchor" href="#为什么要按键消抖" aria-hidden="true">#</a> 为什么要按键消抖</h2><p>在实际按键操作过程中，按键之后按钮里面会有轻微抖动。</p><p>这种轻微抖动足以影响单片机的正常工作，常常会使单片机认为该按键被按了很多次。</p><p>以软件的方式对其进行消抖可以消除这项干扰。</p><h2 id="怎么按键消抖" tabindex="-1"><a class="header-anchor" href="#怎么按键消抖" aria-hidden="true">#</a> 怎么按键消抖</h2><p>通常以软件的方式进行按键消抖。</p><p>通过编写程序来实现。</p><h3 id="详细流程" tabindex="-1"><a class="header-anchor" href="#详细流程" aria-hidden="true">#</a> 详细流程</h3><p>首先判断该按键是否已经按下</p><p>如果是，延迟一小段时间</p><p>再次判断该按键是否按下</p><p>若果是，则判定为按键确实是被人按了</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>按键之后所产生的机械抖动和人为按键都能使单片机认为这个键被按了，</p><p>要根据两者的不同来消除抖动。</p><p>两者的最大不同就是按键处于闭合状态时延续时间不同。</p><p>一般延迟5ms即可 ，5ms就是延迟一小段时间。</p>',18),p=a(`<h2 id="程序" tabindex="-1"><a class="header-anchor" href="#程序" aria-hidden="true">#</a> 程序</h2><p>下面是一个以K1为按键的例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(K1==0)
{
  delay5ms();//有很多种延迟，这只是其中之一。
  if(K1==0)
  {
      //执行相应的程序。
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(v,m){const n=d("RouterLink");return s(),r("div",null,[h,t("p",null,[e("可以看看"),l(n,{to:"/blogs/category1/%E4%B8%8D%E6%98%BE%E7%A4%BA/51%E5%9F%BA%E7%A1%80/%E5%BB%B6%E8%BF%9F%E5%87%BD%E6%95%B0.html"},{default:c(()=>[e("延迟函数")]),_:1}),e("<<（传送门）")]),p])}const b=i(o,[["render",u],["__file","anjianxiaodou.html.vue"]]);export{b as default};

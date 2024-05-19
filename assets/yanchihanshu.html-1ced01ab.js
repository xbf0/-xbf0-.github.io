import{_ as e,p as i,q as n,Z as a}from"./framework-4bf64526.js";const d="/延迟函数的设置.png",s={},l=a(`<h2 id="延迟子函数的形式" tabindex="-1"><a class="header-anchor" href="#延迟子函数的形式" aria-hidden="true">#</a> 延迟子函数的形式</h2><p>因为使用延迟的时候对延迟的精确度并不是非常高，所以一般采用计数的方法来实现延迟。</p><h2 id="子函数代码" tabindex="-1"><a class="header-anchor" href="#子函数代码" aria-hidden="true">#</a> 子函数代码</h2><h3 id="自定义延迟子函数" tabindex="-1"><a class="header-anchor" href="#自定义延迟子函数" aria-hidden="true">#</a> 自定义延迟子函数</h3><ul><li>cpu每数500个数大约是1ms</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void delayms(int x)	  
{
char i;
while(x--)
 {
  for(i=500;i&gt;0;i--); 
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="软件生成的延迟子函数" tabindex="-1"><a class="header-anchor" href="#软件生成的延迟子函数" aria-hidden="true">#</a> 软件生成的延迟子函数</h3><p>软件：stc-isp</p><p><img src="`+d+`" alt="延迟函数的设置"></p><h2 id="写入程序" tabindex="-1"><a class="header-anchor" href="#写入程序" aria-hidden="true">#</a> 写入程序</h2><p>将子函数放到主函数前面或者后面。</p><p>放到后面的话要在主函数前面声明一下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;reg51.h&gt;
void delay10ms()；//这一行就是声明部分
void main()
{
     //程序
     delay10ms();//使用一次延迟子函数。
}
void delay10ms()
{
   //程序

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[l];function c(t,v){return i(),n("div",null,r)}const u=e(s,[["render",c],["__file","yanchihanshu.html.vue"]]);export{u as default};

import{_ as i,o,c as l,a as r,b as n,d as s,e as t,r as p}from"./app-DdhVoR9k.js";const d={},c={href:"https://github.com/webpack/webpack/issues/9648",target:"_blank",rel:"noopener noreferrer"},u={href:"https://yarnpkg.com/migration/guide#dont-use-bundledependencies",target:"_blank",rel:"noopener noreferrer"},g={href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"},h={href:"https://yarnpkg.com/features/pnp",target:"_blank",rel:"noopener noreferrer"};function k(m,e){const a=p("ExternalLinkIcon");return o(),l("div",null,[e[8]||(e[8]=r(`<h1 id="yarnpkg-doctor" tabindex="-1"><a class="header-anchor" href="#yarnpkg-doctor"><span>@yarnpkg/doctor</span></a></h1><p>A cli tool to help package maintainers support pnp.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>To check your package run:</p><p><code>yarn dlx @yarnpkg/doctor ./package-dir</code></p><p>You&#39;ll get a pretty output with all the warnings.</p><h2 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>Rules</span></a></h2><ul><li>no unlisted dependencies</li><li>no unmet peer dependencies</li><li>no node_module strings</li><li>no unqualified webpack loaders</li><li>no bundleDependencies</li></ul><h3 id="no-unlisted-dependencies" tabindex="-1"><a class="header-anchor" href="#no-unlisted-dependencies"><span>no unlisted dependencies</span></a></h3><p>This rule warns when imported dependencies are not listed in a project/workspace&#39;s package.json.</p><p>Node allows you to import any package without having a version specified in your package.json. This can lead to subtle and hard to solve bugs.</p><p>For example:</p><ol><li><p>Node might find a globally installed package and the project works on your machine. While other your colleagues might be missing the globally installed package or (worse) have an incompatible version installed.</p></li><li><p>Or Node might find a transitive dependency (dependency of a dependency) and use that. If you remove or upgrade that dependency and it affects the transitive dependency then it can trigger all sorts of bugs.</p></li></ol><p>By making sure all dependencies are listed in the package.json pnp can make your project less brittle.</p><h3 id="no-unmet-peer-dependencies" tabindex="-1"><a class="header-anchor" href="#no-unmet-peer-dependencies"><span>no unmet peer dependencies</span></a></h3><p>This rule warns when a package has unmet peer dependencies.</p><p>Peer dependencies are useful for allowing package authors to delegate control of a dependency&#39;s version to the package user. When used correctly they prevent version conflicts and reduce bundle sizes.</p><p>Peer dependencies must be manually added to the package user&#39;s package.json. Because they responsibility of the package user they can be overlooked.</p><p>This rule ensures that all peer dependencies are included and therefore installed for your project.</p><h3 id="no-node-module-strings" tabindex="-1"><a class="header-anchor" href="#no-node-module-strings"><span>no node module strings</span></a></h3><p>This rule warns when <code>node_modules</code> appears in strings or template literals.</p><p>If a string literal includes &quot;node_modules&quot; else it is likely a sign that the package is doing shady things with node_modules which would likely fail under PnP.</p><p>One of the big benefits of Plug-n-Play is that it does away with <code>node_modules</code> directories to achieve zero installs, increased stability and reliability. Therefore, resolutions that rely on the presence of a <code>node_modules</code> folder will fail.</p><p>Aside from satisfying Plug&#39;n&#39;Play requirements, resolving packages using <code>node_modules</code> this way is brittle and may result unpredictable packages versions and subtle bugs.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../node_modules/lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// importing a module by its name</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="no-unqualified-webpack-config" tabindex="-1"><a class="header-anchor" href="#no-unqualified-webpack-config"><span>no unqualified webpack config</span></a></h3><p>This rule disallows referencing loaders or plugins in string literals in a <code>webpack.config.js</code> in a non-private package.</p><p>Ensures that third party tools (CRA, Next, Vue-cli, etc) resolve their own versions of loaders and presets.</p><p>When loaders and plugins are included as strings e.g <code>loader: &#39;file-loader&#39;</code> in a <code>webpack.config.js</code> then Webpack will try to resolve it from the point of view of the project root.</p><p>If the webpack config is located in a dependency, as with tools such as Create-React-App, Next.js and Gatsby, then Webpack might accidentally use an different hoisted version of a plugin. This can cause various weird bugs and crashes.</p><p>The third party tool should use <code>require.resolve(&#39;file-loader&#39;)</code> so that Webpack loads the plugin through an absolute path and it will use the loader/plugin it specifies in its own package.json.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ts-loader</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">use</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ts-loader</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)),n("p",null,[e[1]||(e[1]=s("This rule is a temporary measure to address this ")),n("a",c,[e[0]||(e[0]=s("issue")),t(a)])]),e[9]||(e[9]=n("h3",{id:"no-bundledependencies",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#no-bundledependencies"},[n("span",null,"no bundleDependencies")])],-1)),e[10]||(e[10]=n("p",null,[s("This rule warns when the "),n("code",null,"bundleDependencies"),s(" (or "),n("code",null,"bundledDependencies"),s(") field is used.")],-1)),n("p",null,[e[3]||(e[3]=s("Visit ")),n("a",u,[e[2]||(e[2]=s("the dedicated section")),t(a)]),e[4]||(e[4]=s(" on the website to learn more."))]),e[11]||(e[11]=n("h2",{id:"further-reading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#further-reading"},[n("span",null,"Further reading")])],-1)),n("ul",null,[n("li",null,[n("a",g,[e[5]||(e[5]=s("Yarn 2 docs")),t(a)])]),n("li",null,[n("a",h,[e[6]||(e[6]=s("Introduction to ")),e[7]||(e[7]=n("code",null,"plug-n-play",-1)),t(a)])])])])}const b=i(d,[["render",k],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/berry--yarnpkg-cli-4.5.1/berry--yarnpkg-cli-4.5.1/packages/yarnpkg-doctor/","title":"@yarnpkg/doctor","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Rules","slug":"rules","link":"#rules","children":[{"level":3,"title":"no unlisted dependencies","slug":"no-unlisted-dependencies","link":"#no-unlisted-dependencies","children":[]},{"level":3,"title":"no unmet peer dependencies","slug":"no-unmet-peer-dependencies","link":"#no-unmet-peer-dependencies","children":[]},{"level":3,"title":"no node module strings","slug":"no-node-module-strings","link":"#no-node-module-strings","children":[]},{"level":3,"title":"no unqualified webpack config","slug":"no-unqualified-webpack-config","link":"#no-unqualified-webpack-config","children":[]},{"level":3,"title":"no bundleDependencies","slug":"no-bundledependencies","link":"#no-bundledependencies","children":[]}]},{"level":2,"title":"Further reading","slug":"further-reading","link":"#further-reading","children":[]}],"git":{},"filePathRelative":"berry--yarnpkg-cli-4.5.1/berry--yarnpkg-cli-4.5.1/packages/yarnpkg-doctor/README.md"}');export{b as comp,y as data};

import{d as o,r as E,a as Kn,b as Cn,i as B,c as Mn,e as Nn,f as Jn,g as sn,h as jn,j as $n,o as un,k as S,l as H,m as cn,_ as qn,u as Bn,w as Q,n as Un,p as Fn,q as g,s as f,t,v as O,x as L,y as _,z as V,A as U,B as k,C as c,F as x,D as j,E as En,G as Hn,H as zn,I as Gn,J as Wn,K as on,R as I,L as rn,M as Yn,N as Xn,S as Qn,O as Zn,P as nt,Q as tt,T as et,U as at}from"./framework-4ff91fa4.js";const lt="modulepreload",it=function(n){return"/-xbf0-.github.io/"+n},Sn={},e=function(a,i,r){if(!i||i.length===0)return a();const m=document.getElementsByTagName("link");return Promise.all(i.map(d=>{if(d=it(d),d in Sn)return;Sn[d]=!0;const u=d.endsWith(".css"),A=u?'[rel="stylesheet"]':"";if(!!r)for(let v=m.length-1;v>=0;v--){const P=m[v];if(P.href===d&&(!u||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${A}`))return;const T=document.createElement("link");if(T.rel=u?"stylesheet":lt,u||(T.as="script",T.crossOrigin=""),T.href=d,document.head.appendChild(T),u)return new Promise((v,P)=>{T.addEventListener("load",v),T.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>a())},ot={"v-8daa1a0e":()=>e(()=>import("./index.html-d4f7810c.js"),[]).then(({data:n})=>n),"v-3ea6b790":()=>e(()=>import("./annotations-reflection.html-fc118d2d.js"),[]).then(({data:n})=>n),"v-7230c2ec":()=>e(()=>import("./arrays.html-85a3d45c.js"),[]).then(({data:n})=>n),"v-5e0f5153":()=>e(()=>import("./async-dispatchers.html-ee9b1fd9.js"),[]).then(({data:n})=>n),"v-b7a70fbe":()=>e(()=>import("./cancellation.html-c805b6c4.js"),[]).then(({data:n})=>n),"v-51e42cee":()=>e(()=>import("./channels-concurrency.html-4b8f5eed.js"),[]).then(({data:n})=>n),"v-3eee55d0":()=>e(()=>import("./cheatsheet.html-2a1aafb4.js"),[]).then(({data:n})=>n),"v-0aa7f9b0":()=>e(()=>import("./classes.html-828a0984.js"),[]).then(({data:n})=>n),"v-bb50bd9a":()=>e(()=>import("./collection-operations.html-4d271875.js"),[]).then(({data:n})=>n),"v-5900c099":()=>e(()=>import("./collections.html-6933bfbf.js"),[]).then(({data:n})=>n),"v-d99a9b68":()=>e(()=>import("./conditions.html-5d89a7e3.js"),[]).then(({data:n})=>n),"v-58a00649":()=>e(()=>import("./coroutines.html-42830766.js"),[]).then(({data:n})=>n),"v-2d99dbf5":()=>e(()=>import("./data-sealed-enum.html-86cb6040.js"),[]).then(({data:n})=>n),"v-0691831e":()=>e(()=>import("./dsl.html-aaa45839.js"),[]).then(({data:n})=>n),"v-1206de80":()=>e(()=>import("./exceptions.html-577622a6.js"),[]).then(({data:n})=>n),"v-6ab11320":()=>e(()=>import("./extensions.html-659706a5.js"),[]).then(({data:n})=>n),"v-039efdd6":()=>e(()=>import("./flow.html-c622f94d.js"),[]).then(({data:n})=>n),"v-48bc64ea":()=>e(()=>import("./functional-interfaces.html-6bd366fc.js"),[]).then(({data:n})=>n),"v-0bf4bb93":()=>e(()=>import("./functions.html-bf7b8464.js"),[]).then(({data:n})=>n),"v-420220c8":()=>e(()=>import("./generics.html-88aeb1bb.js"),[]).then(({data:n})=>n),"v-3a294296":()=>e(()=>import("./getting-started.html-b9eee907.js"),[]).then(({data:n})=>n),"v-637fd43a":()=>e(()=>import("./gradle-testing.html-81b743f6.js"),[]).then(({data:n})=>n),"v-95ce7af8":()=>e(()=>import("./inheritance.html-c4dc1fbb.js"),[]).then(({data:n})=>n),"v-048dd88b":()=>e(()=>import("./inline.html-7f70ca9f.js"),[]).then(({data:n})=>n),"v-20bab3e4":()=>e(()=>import("./io-regex.html-594c0f96.js"),[]).then(({data:n})=>n),"v-347d091c":()=>e(()=>import("./java-interop.html-822d6028.js"),[]).then(({data:n})=>n),"v-e99af4fc":()=>e(()=>import("./lambdas.html-a1388c06.js"),[]).then(({data:n})=>n),"v-31fa7042":()=>e(()=>import("./loops.html-624698a3.js"),[]).then(({data:n})=>n),"v-493d1e57":()=>e(()=>import("./next-steps.html-9d7a7736.js"),[]).then(({data:n})=>n),"v-1f6eca36":()=>e(()=>import("./null-safety.html-47104e0a.js"),[]).then(({data:n})=>n),"v-c75b4a0c":()=>e(()=>import("./objects.html-480e7580.js"),[]).then(({data:n})=>n),"v-4d20b142":()=>e(()=>import("./operators.html-53905d5c.js"),[]).then(({data:n})=>n),"v-c98b0812":()=>e(()=>import("./packages.html-a2e2aa50.js"),[]).then(({data:n})=>n),"v-297c5fd6":()=>e(()=>import("./project.html-eb91a559.js"),[]).then(({data:n})=>n),"v-29999e9e":()=>e(()=>import("./properties.html-4afffdac.js"),[]).then(({data:n})=>n),"v-0c968c6c":()=>e(()=>import("./scope-functions.html-6a02c406.js"),[]).then(({data:n})=>n),"v-05936cbc":()=>e(()=>import("./sequences.html-5a8f6038.js"),[]).then(({data:n})=>n),"v-677981de":()=>e(()=>import("./serialization.html-840fe98e.js"),[]).then(({data:n})=>n),"v-55c1ef1e":()=>e(()=>import("./setup.html-611700d3.js"),[]).then(({data:n})=>n),"v-24f29b68":()=>e(()=>import("./strings.html-69f06f0e.js"),[]).then(({data:n})=>n),"v-28bfde2c":()=>e(()=>import("./type-system.html-c3110a78.js"),[]).then(({data:n})=>n),"v-75f747f5":()=>e(()=>import("./types.html-9b261d25.js"),[]).then(({data:n})=>n),"v-3eace192":()=>e(()=>import("./variables.html-86863768.js"),[]).then(({data:n})=>n),"v-3706649a":()=>e(()=>import("./404.html-35a283b4.js"),[]).then(({data:n})=>n)},rt=JSON.parse('{"base":"/-xbf0-.github.io/","lang":"zh-CN","title":"Kotlin 学习手记","description":"从变量声明到协程，从第一行代码到独立项目。42 篇中文 Kotlin 教程、示例与练习。","head":[["link",{"rel":"icon","type":"image/svg+xml","href":"/-xbf0-.github.io/favicon.svg"}],["meta",{"name":"theme-color","content":"#355de5"}]],"locales":{}}'),An={"v-8daa1a0e":o(()=>e(()=>import("./index.html-827c8021.js"),["assets/index.html-827c8021.js","assets/framework-4ff91fa4.js"])),"v-3ea6b790":o(()=>e(()=>import("./annotations-reflection.html-4745ab3d.js"),["assets/annotations-reflection.html-4745ab3d.js","assets/framework-4ff91fa4.js"])),"v-7230c2ec":o(()=>e(()=>import("./arrays.html-d74def19.js"),["assets/arrays.html-d74def19.js","assets/framework-4ff91fa4.js"])),"v-5e0f5153":o(()=>e(()=>import("./async-dispatchers.html-ea8c1a82.js"),["assets/async-dispatchers.html-ea8c1a82.js","assets/framework-4ff91fa4.js"])),"v-b7a70fbe":o(()=>e(()=>import("./cancellation.html-88c2cb54.js"),["assets/cancellation.html-88c2cb54.js","assets/framework-4ff91fa4.js"])),"v-51e42cee":o(()=>e(()=>import("./channels-concurrency.html-7cb8ebbb.js"),["assets/channels-concurrency.html-7cb8ebbb.js","assets/framework-4ff91fa4.js"])),"v-3eee55d0":o(()=>e(()=>import("./cheatsheet.html-3584e6db.js"),["assets/cheatsheet.html-3584e6db.js","assets/framework-4ff91fa4.js"])),"v-0aa7f9b0":o(()=>e(()=>import("./classes.html-cb9ef706.js"),["assets/classes.html-cb9ef706.js","assets/framework-4ff91fa4.js"])),"v-bb50bd9a":o(()=>e(()=>import("./collection-operations.html-9eb0c5e3.js"),["assets/collection-operations.html-9eb0c5e3.js","assets/framework-4ff91fa4.js"])),"v-5900c099":o(()=>e(()=>import("./collections.html-8767e86c.js"),["assets/collections.html-8767e86c.js","assets/framework-4ff91fa4.js"])),"v-d99a9b68":o(()=>e(()=>import("./conditions.html-8fb024b8.js"),["assets/conditions.html-8fb024b8.js","assets/framework-4ff91fa4.js"])),"v-58a00649":o(()=>e(()=>import("./coroutines.html-140ff719.js"),["assets/coroutines.html-140ff719.js","assets/framework-4ff91fa4.js"])),"v-2d99dbf5":o(()=>e(()=>import("./data-sealed-enum.html-9db0587c.js"),["assets/data-sealed-enum.html-9db0587c.js","assets/framework-4ff91fa4.js"])),"v-0691831e":o(()=>e(()=>import("./dsl.html-4ec3d370.js"),["assets/dsl.html-4ec3d370.js","assets/framework-4ff91fa4.js"])),"v-1206de80":o(()=>e(()=>import("./exceptions.html-b91a8ac8.js"),["assets/exceptions.html-b91a8ac8.js","assets/framework-4ff91fa4.js"])),"v-6ab11320":o(()=>e(()=>import("./extensions.html-810bd06d.js"),["assets/extensions.html-810bd06d.js","assets/framework-4ff91fa4.js"])),"v-039efdd6":o(()=>e(()=>import("./flow.html-97ba5b5e.js"),["assets/flow.html-97ba5b5e.js","assets/framework-4ff91fa4.js"])),"v-48bc64ea":o(()=>e(()=>import("./functional-interfaces.html-b5702669.js"),["assets/functional-interfaces.html-b5702669.js","assets/framework-4ff91fa4.js"])),"v-0bf4bb93":o(()=>e(()=>import("./functions.html-dea62cbe.js"),["assets/functions.html-dea62cbe.js","assets/framework-4ff91fa4.js"])),"v-420220c8":o(()=>e(()=>import("./generics.html-7ceccdc3.js"),["assets/generics.html-7ceccdc3.js","assets/framework-4ff91fa4.js"])),"v-3a294296":o(()=>e(()=>import("./getting-started.html-0f1b35f0.js"),["assets/getting-started.html-0f1b35f0.js","assets/framework-4ff91fa4.js"])),"v-637fd43a":o(()=>e(()=>import("./gradle-testing.html-61eca73a.js"),["assets/gradle-testing.html-61eca73a.js","assets/framework-4ff91fa4.js"])),"v-95ce7af8":o(()=>e(()=>import("./inheritance.html-e3b16c94.js"),["assets/inheritance.html-e3b16c94.js","assets/framework-4ff91fa4.js"])),"v-048dd88b":o(()=>e(()=>import("./inline.html-d39071e7.js"),["assets/inline.html-d39071e7.js","assets/framework-4ff91fa4.js"])),"v-20bab3e4":o(()=>e(()=>import("./io-regex.html-cadb3d70.js"),["assets/io-regex.html-cadb3d70.js","assets/framework-4ff91fa4.js"])),"v-347d091c":o(()=>e(()=>import("./java-interop.html-d43eb40e.js"),["assets/java-interop.html-d43eb40e.js","assets/framework-4ff91fa4.js"])),"v-e99af4fc":o(()=>e(()=>import("./lambdas.html-88bf7055.js"),["assets/lambdas.html-88bf7055.js","assets/framework-4ff91fa4.js"])),"v-31fa7042":o(()=>e(()=>import("./loops.html-4fb335a8.js"),["assets/loops.html-4fb335a8.js","assets/framework-4ff91fa4.js"])),"v-493d1e57":o(()=>e(()=>import("./next-steps.html-ea8d0a1c.js"),["assets/next-steps.html-ea8d0a1c.js","assets/framework-4ff91fa4.js"])),"v-1f6eca36":o(()=>e(()=>import("./null-safety.html-dd6a9d0b.js"),["assets/null-safety.html-dd6a9d0b.js","assets/framework-4ff91fa4.js"])),"v-c75b4a0c":o(()=>e(()=>import("./objects.html-b20ea4fa.js"),["assets/objects.html-b20ea4fa.js","assets/framework-4ff91fa4.js"])),"v-4d20b142":o(()=>e(()=>import("./operators.html-f7bd83b8.js"),["assets/operators.html-f7bd83b8.js","assets/framework-4ff91fa4.js"])),"v-c98b0812":o(()=>e(()=>import("./packages.html-607238b8.js"),["assets/packages.html-607238b8.js","assets/framework-4ff91fa4.js"])),"v-297c5fd6":o(()=>e(()=>import("./project.html-bb5b29e2.js"),["assets/project.html-bb5b29e2.js","assets/framework-4ff91fa4.js"])),"v-29999e9e":o(()=>e(()=>import("./properties.html-be98f667.js"),["assets/properties.html-be98f667.js","assets/framework-4ff91fa4.js"])),"v-0c968c6c":o(()=>e(()=>import("./scope-functions.html-84f9622d.js"),["assets/scope-functions.html-84f9622d.js","assets/framework-4ff91fa4.js"])),"v-05936cbc":o(()=>e(()=>import("./sequences.html-5e878cc2.js"),["assets/sequences.html-5e878cc2.js","assets/framework-4ff91fa4.js"])),"v-677981de":o(()=>e(()=>import("./serialization.html-a0ede639.js"),["assets/serialization.html-a0ede639.js","assets/framework-4ff91fa4.js"])),"v-55c1ef1e":o(()=>e(()=>import("./setup.html-548c0720.js"),["assets/setup.html-548c0720.js","assets/framework-4ff91fa4.js"])),"v-24f29b68":o(()=>e(()=>import("./strings.html-20473302.js"),["assets/strings.html-20473302.js","assets/framework-4ff91fa4.js"])),"v-28bfde2c":o(()=>e(()=>import("./type-system.html-25efb603.js"),["assets/type-system.html-25efb603.js","assets/framework-4ff91fa4.js"])),"v-75f747f5":o(()=>e(()=>import("./types.html-2b2690ad.js"),["assets/types.html-2b2690ad.js","assets/framework-4ff91fa4.js"])),"v-3eace192":o(()=>e(()=>import("./variables.html-1fd91868.js"),["assets/variables.html-1fd91868.js","assets/framework-4ff91fa4.js"])),"v-3706649a":o(()=>e(()=>import("./404.html-9c0b20a3.js"),["assets/404.html-9c0b20a3.js","assets/framework-4ff91fa4.js"]))};var st=Symbol(""),ut=E(ot),Tn=Kn({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),$=E(Tn),On=()=>$,ct=Symbol(""),Dn=Symbol(""),dt=()=>{const n=cn(Dn);if(!n)throw new Error("usePageHead() is called without provider.");return n},pt=Symbol(""),Pn=Symbol(""),mt=()=>{const n=cn(Pn);if(!n)throw new Error("usePageLang() is called without provider.");return n},xn=Symbol(""),vt=()=>{const n=cn(xn);if(!n)throw new Error("usePageLayout() is called without provider.");return n},ht=Symbol(""),F=E(rt),gt=Symbol(""),_t=Symbol(""),ft="Layout",kt="NotFound",C=Cn({resolveLayouts:n=>n.reduce((a,i)=>({...a,...i.layouts}),{}),resolvePageData:async n=>{const a=ut.value[n];return await(a==null?void 0:a())??Tn},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,a,i)=>{const r=B(a.description)?a.description:i.description,m=[...Mn(a.head)?a.head:[],...i.head,["title",{},n],["meta",{name:"description",content:r}]];return Nn(m)},resolvePageHeadTitle:(n,a)=>[n.title,a.title].filter(i=>!!i).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,a)=>{let i;if(n.path){const r=n.frontmatter.layout;B(r)?i=r:i=ft}else i=kt;return a[i]},resolveRouteLocale:(n,a)=>Jn(n,a),resolveSiteLocaleData:(n,a)=>({...n,...n.locales[a]})}),bt=sn({name:"ClientOnly",setup(n,a){const i=E(!1);return un(()=>{i.value=!0}),()=>{var r,m;return i.value?(m=(r=a.slots).default)==null?void 0:m.call(r):null}}}),yt=sn({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const a=On(),i=S(()=>An[n.pageKey||a.value.key]);return()=>i.value?H(i.value):H("div","404 Not Found")}}),Et=(n={})=>n,St=n=>jn(n)?n:`/-xbf0-.github.io/${$n(n)}`;const y=[{slug:"getting-started",title:"认识 Kotlin 与学习路线",group:"起步与基础",description:"从第一行代码开始，理解 Kotlin 的用途与学习顺序。",minutes:5,number:1,path:"/kotlin/getting-started.html",search:`   Kotlin 是什么
Kotlin 是一门静态类型语言：编译器会在运行前检查类型。它可以用于 JVM、Android、JavaScript 和原生平台。本教程以 Kotlin/JVM 为主，先学语言，再接触工具与工程；Android 和多平台开发放在最后的延伸路线中。

不需要先学 Java。你需要熟悉文件、终端和基本的逻辑思考。已经会 Java、Python 或 JavaScript 的读者，可以直接从变量、空安全和集合开始。

   运行第一段程序
打开 [Kotlin Playground](https://play.kotlinlang.org/)，选择 JVM，输入下面的代码并点击 Run。普通语法章节的完整  main  示例都可以这样运行。
   kotlin
fun main() {
    val language = "Kotlin"
    println("你好，$language！")
}
   
输出为  你好，Kotlin！ 。 fun  声明函数， main  是入口， println  输出并换行。语句通常不需要分号。

   建议的学习方式
先按顺序完成基础、函数和面向对象，再学习集合与泛型，最后进入协程和工程。每章先预测输出，再运行代码，最后完成练习。不要只复制示例：修改一个条件，观察行为变化。

本教程覆盖常用语法与关键进阶主题。标准库全部 API、编译器实验功能与各平台框架仍应查询官方文档；本教程不会把框架功能混称为语言语法。 把问候语改成自己的名字，输出两行文字。`},{slug:"setup",title:"开发环境与项目结构",group:"起步与基础",description:"使用 IntelliJ IDEA、JDK 和 Gradle 建立可重复运行的项目。",minutes:12,number:2,path:"/kotlin/setup.html",search:`   选择运行环境
零安装练习使用 Playground。本地项目推荐 IntelliJ IDEA，创建 Kotlin / JVM 项目，构建工具选择 Gradle，脚本选择 Kotlin DSL，并使用项目支持的 JDK，例如 JDK 21。IDE 生成的 Kotlin 插件版本与 Gradle Wrapper 应配套使用，不要随意只升级其中一个。

   认识目录
   text
kotlin-notes/
  settings.gradle.kts
  build.gradle.kts
  gradlew
  gradlew.bat
  src/main/kotlin/Main.kt
  src/test/kotlin/
   
 src/main/kotlin  保存程序， src/test/kotlin  保存测试。 .kt  是源文件， .kts  是脚本文件。 gradlew  固定项目使用的 Gradle 版本，优先使用 Wrapper 而不是系统 Gradle。

   在 IDE 中运行
在  Main.kt  中写入入口，点击 main 左侧的运行按钮。
   kotlin
fun main() {
    println("环境准备完成")
    println(System.getProperty("java.version"))
}
   
第二行显示正在运行程序的 JVM 版本。它可能与终端中的  java -version  不同；请检查 IDE 的 Project SDK 与 Gradle JVM。

   常见问题
终端找不到 Java 时先检查  JAVA_HOME  和 PATH；依赖下载失败时检查 Maven 仓库与网络。单文件示例不需要协程或序列化依赖，后面的扩展库章节会明确说明额外配置。

   可复制的练习工程配置
下面固定一个明确的教学版本组合：Kotlin 2.2.20、协程 1.10.2、序列化 1.9.0、JUnit 5.13.4、JDK 21；它不是对“最新版本”的声明。用 IDE 创建 Gradle 8.14 的 JVM 项目并保留生成的 Wrapper，然后使用下列配置。

settings.gradle.kts：
   kotlin
rootProject.name = "kotlin-notes"
   

build.gradle.kts：
   kotlin
plugins {
    kotlin("jvm") version "2.2.20"
    kotlin("plugin.serialization") version "2.2.20"
    application
}
repositories { mavenCentral() }
kotlin { jvmToolchain(21) }
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.9.0")
    testImplementation(platform("org.junit:junit-bom:5.13.4"))
    testImplementation(kotlin("test-junit5"))
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}
application { mainClass.set("MainKt") }
tasks.test { useJUnitPlatform() }
   

入口保存为 src/main/kotlin/Main.kt，且不写 package。Windows 运行  .\\gradlew.bat run  与  .\\gradlew.bat test 。如果入口改为带 package 的文件，需要同步调整 mainClass。一次练习一个章节的 main，避免多个同名入口互相冲突。

依赖依据：[协程发布记录](https://github.com/Kotlin/kotlinx.coroutines/releases/tag/1.10.2)、[序列化发布记录](https://github.com/Kotlin/kotlinx.serialization/releases/tag/v1.9.0)、[JUnit 5 配置](https://docs.junit.org/5.13.4/user-guide/ running-tests-build-gradle)。升级时请核对插件、Gradle、JDK 和扩展库的兼容关系。
 建立项目并运行入口，确认实际 JVM 版本。`},{slug:"packages",title:"包、导入、注释与代码约定",group:"起步与基础",description:"组织源文件，掌握 package、import、别名和注释。",minutes:5,number:3,path:"/kotlin/packages.html",search:`   package 与文件
文件顶部可以声明 package。一个文件中的顶层声明归属于该包；同包中的其他文件可直接访问适当可见的声明。
   kotlin
package notes.basics

import java.time.LocalDate
import java.util.Date as LegacyDate

fun main() {
    val today = LocalDate.of(2026, 11, 25)
    println(today)
    println(LegacyDate(0).time) // 0
}
   
包名通常使用小写，目录建议与包结构对应。Kotlin 的语法不强制包和文件目录一一对应，但遵守目录约定能改善 IDE 与团队协作体验。

   导入与别名
import 可导入类、顶层函数、属性和扩展，也可使用星号导入包中可导入的声明。 as  为冲突名称提供别名。import 不会安装依赖，缺少库时仍需在 Gradle 声明依赖。

默认导入包含常用 kotlin 包，JVM 还提供对应平台默认导入。某个名字能在一个平台使用，不表示所有平台都支持它。

   注释与命名
   kotlin
// 单行注释
/  多行注释
   /  Kotlin 支持嵌套块注释  /
 /
/   KDoc 用于描述公开 API 的契约。  /
fun greeting(userName: String): String = "你好，$userName"
   
类型用 UpperCamelCase，函数和变量用 lowerCamelCase，常量用 UPPER_SNAKE_CASE。文件名应说明主要内容。通常使用四个空格缩进，使用 IDE 的 Kotlin 代码风格格式化。

顶层函数不必套在工具类里；一个文件可以包含多个相关声明。将无关内容塞入同一个巨型文件，会让私有边界和依赖关系更难理解。 两个包里都有 Date，如何在一个文件中同时使用？`},{slug:"variables",title:"变量声明：val、var 与常量",group:"起步与基础",description:"掌握类型推断、显式类型、只读引用和编译期常量。",minutes:5,number:4,path:"/kotlin/variables.html",search:`   两种声明方式
 val 名称: 类型 = 值  声明只读变量，初始化后不能重新赋值。 var  允许重新赋值。能用  val  时优先使用它，让变化发生的位置更容易识别。
   kotlin
fun main() {
    val name: String = "小林"
    var age = 18 // 编译器推断为 Int
    age += 1
    val message: String
    message = "$name 今年 $age 岁"
    println(message)
}
   
输出： 小林 今年 19 岁 。不立即初始化的局部变量需要写类型，并且在读取前必须在所有可能路径上完成初始化。

   val 不等于对象不可变
   kotlin
fun main() {
    val tags = mutableListOf("基础")
    tags.add("函数") // 修改对象，合法
    println(tags)
    // tags = mutableListOf("集合") // 重新赋值，不合法
}
   
 val  约束的是变量绑定；集合内容是否可以变化，取决于具体对象和暴露的接口。只读  List  也不自动意味着底层对象绝对不可变。

   编译期常量
   kotlin
const val MAX_RETRIES = 3 // 顶层声明
object AppConfig {
    const val APP_NAME = "Kotlin Notes"
}
   
 const val  用于顶层、object 或 companion object 中的编译期常量，类型须为基本数值、Boolean、Char 或 String，且不能有自定义 getter。函数返回值不能直接充当编译期常量。

   命名与作用域
变量用  lowerCamelCase ，常量用  UPPER_SNAKE_CASE 。局部变量只在所在代码块及其内层可见，避免内层变量与外层同名造成遮蔽。 声明商品单价和可变数量，数量增加后输出总价；说明哪些声明用 val。`},{slug:"types",title:"基本类型与数值转换",group:"起步与基础",description:"理解整数、浮点数、布尔、字符与显式转换。",minutes:6,number:5,path:"/kotlin/types.html",search:`   常见类型
| 类型 | 用途 | 示例 |
| --- | --- | --- |
| Byte / Short / Int / Long | 不同范围的整数 |  42 、 42L  |
| Float / Double | 浮点数 |  3.5f 、 3.5  |
| Boolean | 真或假 |  true  |
| Char | 单个 UTF-16 字符单元 |  '中'  |
| String | 文本 |  "你好"  |

整数默认通常推断为 Int，超出范围时可能推断为 Long。小数默认是 Double。下划线可改善长数字的可读性，如  1_000_000 。

   转换需要显式表达
   kotlin
fun main() {
    val count: Int = 7
    val large: Long = count.toLong()
    println(large)
    println(7 / 2)          // 3，整数除法
    println(7 / 2.0)        // 3.5
    println("12".toIntOrNull()) // 12
    println("abc".toIntOrNull()) // null
}
   
把 Double 转成 Int 会截去小数部分，不等于四舍五入；大数转小类型可能丢失信息。处理外部输入时，优先使用  toIntOrNull()  一类可失败的解析。

   精度与边界
浮点数不能精确表示所有十进制小数，金额可以使用最小货币单位的 Long，或 JVM 的 BigDecimal，并制定舍入规则。整数溢出通常不会自动报错，选择类型时要估算数据范围。

 Any  是非空类型体系的通用父类型； Any?  还能容纳 null。 Unit  表示函数没有有意义的结果， Nothing  表示执行不会正常返回，例如始终抛异常的函数。

   无符号整数
UByte、UShort、UInt 和 ULong 表示无符号整数，例如  val mask: UInt = 255u 、 val id: ULong = 42uL 。不要与有符号类型随意混算；转换仍需显式处理范围。某些无符号数组 API 可能需要 opt-in，按所用编译器的诊断选择使用。
 预测 5 / 2、5 / 2.0 和 2.9.toInt() 的结果。`},{slug:"strings",title:"字符串、模板与多行文本",group:"起步与基础",description:"使用插值、转义、原始字符串和常见文本操作。",minutes:5,number:6,path:"/kotlin/strings.html",search:`   字符串模板
   kotlin
fun main() {
    val topic = "Kotlin"
    println("学习 $topic")
    println("名称长度：\${topic.length}")
    println("第一行\\n第二行")
    println("价格：\\$19")
}
   
简单变量用  $name ，表达式用  \${expression} 。普通字符串支持  \\n 、 \\t 、 \\"  等转义；Char 用单引号，String 用双引号。

   多行原始字符串
   kotlin
fun main() {
    val json = """
        {
          "language": "Kotlin",
          "price": "\${'$'}19"
        }
    """.trimIndent()
    println(json)
}
   
三引号字符串保留换行，不处理反斜杠转义，但仍会处理模板。用  \${'$'}  表达字面量美元符号。 trimIndent()  去掉公共缩进， trimMargin()  则可按默认的  |  边界清理。

   常用操作
 trim()  清理首尾空白， split()  拆分， joinToString()  拼接， contains()  判断包含， substring()  截取。字符串不可变，这些操作通常返回新字符串。

对于大量循环拼接，使用  buildString { append(...) } 。字符串下标和  length  面向 UTF-16 单元，复杂 emoji 不一定只占一个位置；不要把下标数量简单当作用户可见字符数。 把带空格的 " kotlin " 清理后转为大写。`},{slug:"operators",title:"运算符、相等与区间",group:"起步与基础",description:"区分结构相等和引用相等，理解短路逻辑与范围。",minutes:5,number:7,path:"/kotlin/operators.html",search:`   算术与比较
 + -   / %  负责算术，    =    =  用于比较， +=  等用于复合赋值。 &&  与  ||  采用短路求值， !  取反。Kotlin 的条件必须是 Boolean，数字不能直接作为条件。
   kotlin
fun main() {
    val age = 20
    println(age  = 18 && age   60) // true
    println(10 % 3)                // 1
    println(age in 18..60)         // true，包含两端
    println(age in 18.. 60)        // true，不包含 60
}
   
 ..   是现代 Kotlin 的开尾区间语法；需要兼容较老编译器时可使用  until 。下降与步长使用  downTo  和  step 。

   == 与 ===
   kotlin
fun main() {
    val a = listOf(1, 2)
    val b = listOf(1, 2)
    println(a == b)  // true，内容相等
    println(a === b) // false，不同对象
}
   
 ==  调用适当的 equals 比较， ===  判断是否为同一个引用。数组的元素比较使用  contentEquals() ；不要用引用相等判断字符串内容，也不要依赖装箱整数的对象缓存。

   位运算与优先级
整数的位操作以函数形式表达，例如  a and b 、 a or b 、 a xor b 、 a shl 1 、 a shr 1 、 a ushr 1  与  a.inv() 。复杂算式主动加括号，比记住所有优先级更容易维护。 写出判断分数在 0 到 100（包含边界）的表达式。`},{slug:"conditions",title:"条件表达式：if 与 when",group:"起步与基础",description:"用分支产生结果，写出穷尽且清晰的判断。",minutes:5,number:8,path:"/kotlin/conditions.html",search:`   if 可以返回值
   kotlin
fun main() {
    val score = 86
    val result = if (score  = 60) "通过" else "继续练习"
    println(result)
    val level = when (score) {
        in 90..100 -  "优秀"
        in 60..89 -  "合格"
        else -  "待提高"
    }
    println(level)
}
   
Kotlin 没有 Java 风格的  条件 ? A : B  三元语法，使用 if 表达式。当 if 用作有结果的表达式时，要提供覆盖全部路径的 else。

   没有主语的 when
   kotlin
fun shipping(weight: Int, member: Boolean): Int = when {
    weight  = 0 -  error("重量必须大于 0")
    member -  0
    weight  = 5 -  8
    else -  15
}
   
分支从上到下匹配，只执行第一个满足的分支；无需写 break。多个匹配值可用逗号连接，例如  0, 1 -  ... 。

   穷尽性
用 when 产生值时，编译器必须确认所有情况都有结果。对枚举或 sealed 类型，可以列出所有成员以省略 else，这样新增类型时编译器能帮助发现遗漏。

不要把异常输入偷偷归到正常类别。例如分数为 -1 时，应先校验范围，再按分数分级。 用 when 将 1、2、3 转为中文，其他值返回“未知”。`},{slug:"loops",title:"循环、标签与跳转",group:"起步与基础",description:"掌握 for、while、break、continue 与带标签的返回。",minutes:5,number:9,path:"/kotlin/loops.html",search:`   遍历数据与范围
   kotlin
fun main() {
    val languages = listOf("Kotlin", "Java")
    for ((index, language) in languages.withIndex()) {
        println("$index: $language")
    }
    for (i in 1..5 step 2) print("$i ") // 1 3 5
    println()
    for (i in 3 downTo 1) print("$i ")  // 3 2 1
}
   
Kotlin 的 for 使用迭代协议，没有 C 风格的  for(init; condition; update) 。优先直接遍历元素，需要下标时使用 indices 或 withIndex。

   while 与 do-while
   kotlin
fun main() {
    var remaining = 3
    while (remaining   0) {
        println(remaining)
        remaining--
    }
    do { println("至少执行一次") } while (false)
}
   
while 先判断条件，do-while 先执行一次。修改条件的变量要确保最终能退出循环。

   跳转的目标
break 退出循环，continue 跳过本轮。在多层循环前写  outer@ ，可用  break@outer  退出外层。

 forEach  是接收 lambda 的函数， return@forEach  仅结束当前 lambda 调用，类似跳过当前项；在符合规则的 inline lambda 中，无标签 return 可能直接退出外层函数。需要 break 的场景，普通 for 往往更直观。 输出 1 到 10 中的奇数。`},{slug:"null-safety",title:"空安全：?、?.、?: 与 !!",group:"起步与基础",description:"把缺失值纳入类型，避免用断言掩盖问题。",minutes:5,number:10,path:"/kotlin/null-safety.html",search:`   可空类型
 String  不能存 null； String?  可以。访问可空对象前，要检查或明确处理缺失值。
   kotlin
fun main() {
    val nickname: String? = null
    println(nickname?.length)       // null
    println(nickname ?: "匿名用户") // 匿名用户
    val length = nickname?.length ?: 0
    println(length)                // 0
}
   
安全调用  ?.  在接收者为 null 时跳过调用并返回 null。Elvis 运算符  ?:  在左侧为空时才求值右侧，可以用来给默认值，或提前 return / throw。

   提前返回与智能转换
   kotlin
fun greet(name: String?) {
    val validName = name?.trim()?.takeIf { it.isNotEmpty() } ?: return
    println("你好，$validName")
}
fun main() { greet(null); greet(" 小林 ") }
   
也可以在稳定的局部变量上先写  if (name == null) return ，后面通常就能按非空类型使用它。可变属性、自定义 getter 或被闭包修改的变量未必能智能转换，需要先保存到局部 val。

   为什么慎用 !!
 value!!  告诉编译器直接把它当作非空，实际为 null 会抛出空指针异常。它不是“解决空安全”的通用方式。对于必须存在的输入，使用  requireNotNull  并写清错误原因；对于允许缺失的数据，显式保留可空语义。 将可空输入转为整数，解析失败或缺失时返回 0。`},{slug:"arrays",title:"数组、原生数组与可变参数展开",group:"起步与基础",description:"识别固定长度数组与集合的差别，正确复制和比较。",minutes:5,number:11,path:"/kotlin/arrays.html",search:`   创建与访问
   kotlin
fun main() {
    val names = arrayOf("Kotlin", "Java")
    names[1] = "Swift"
    val squares = Array(4) { index -  index   index }
    val scores = intArrayOf(80, 90, 100)
    println(names.joinToString())
    println(squares.contentToString()) // [0, 1, 4, 9]
    println(scores.average())          // 90.0
}
   
数组长度固定，元素通常可修改。 Array Int   与  IntArray  不是同一个类型；在 JVM 上，后者对应基本类型数组，能减少装箱开销。

   复制与比较
   kotlin
fun main() {
    val a = intArrayOf(1, 2)
    val b = a.copyOf()
    b[0] = 9
    println(a.contentEquals(b)) // false
    println(a.contentToString()) // [1, 2]
}
   
复制对象数组通常是浅复制：数组本身独立，内部元素仍可能引用同一对象。多维数组的内容比较用  contentDeepEquals() 。

   展开运算符
给 vararg 参数传现有数组时使用   array 。数字 vararg 对应合适的原生数组类型。数组转集合可以用  toList() ；普通业务数据经常更适合 List，只有固定长度或互操作等场景才需要数组。 建立包含 1 到 5 的 IntArray 并求和。`},{slug:"functions",title:"函数、参数与返回值",group:"函数与表达能力",description:"掌握默认参数、命名参数、单表达式与 vararg。",minutes:5,number:12,path:"/kotlin/functions.html",search:`   函数声明
   kotlin
fun total(price: Int, count: Int = 1): Int {
    return price   count
}
fun square(n: Int): Int = n   n
fun log(message: String): Unit { println(message) }
fun main() {
    println(total(price = 20, count = 3)) // 60
    println(total(20))                   // 20
    println(square(5))                  // 25
}
   
参数默认是只读的。块函数通常需要显式写出非 Unit 返回类型；单表达式函数可以推断类型。默认参数减少重载，命名参数提高多个相似参数的可读性。

   vararg 与局部函数
   kotlin
fun sum(vararg numbers: Int): Int = numbers.sum()
fun main() {
    val data = intArrayOf(2, 3)
    println(sum(1,  data)) // 6
    fun twice(n: Int) = n   2
    println(twice(4))      // 8
}
   
局部函数可捕获外层作用域中的值，适合封装只在一个函数里使用的逻辑。递归函数需要终止条件；满足尾调用规则时， tailrec  可让编译器优化尾递归。

   设计边界
把输入、计算和输出分开，计算函数返回结果，外层负责打印。避免函数既修改全局状态又返回难以解释的结果。调用 Java 方法时通常不能使用 Kotlin 命名参数，不要假定所有库都支持这一语法。 编写带默认税率参数的函数，计算含税价格。`},{slug:"lambdas",title:"Lambda、高阶函数与函数引用",group:"函数与表达能力",description:"把行为作为参数，理解函数类型、it 和闭包。",minutes:5,number:13,path:"/kotlin/lambdas.html",search:`   函数也是值
   kotlin
fun applyTo(value: Int, action: (Int) -  Int): Int = action(value)
fun double(n: Int) = n   2
fun main() {
    val triple: (Int) -  Int = { number -  number   3 }
    println(applyTo(4, triple))      // 12
    println(applyTo(4, ::double))    // 8
    println(applyTo(4) { it + 1 })   // 5
}
   
接收函数或返回函数的函数称为高阶函数。 (Int) -  Int  是函数类型。只有一个参数时可使用隐式名称 it；lambda 最后一条表达式成为返回值。

   尾随 lambda 与闭包
函数最后一个参数是函数类型时，lambda 可以放到圆括号外。参数全部由尾随 lambda 提供时，圆括号也可以省略。
   kotlin
fun main() {
    var total = 0
    listOf(1, 2, 3).forEach { total += it }
    println(total) // 6
}
   
lambda 可以捕获外部变量，这叫闭包。并发地修改捕获变量并不会自动获得线程安全。

   返回范围
 return@forEach  返回当前 lambda；匿名函数  fun(x: Int): Int { return x }  中的 return 返回匿名函数本身。inline lambda 允许的非局部返回有额外条件，后面的内联章节会展开。

可读性优先：当嵌套 lambda 中出现多个 it 时，为参数命名，或拆成命名函数。 用 map 和 lambda 把 [1, 2, 3] 转为平方列表。`},{slug:"extensions",title:"扩展函数、中缀与运算符重载",group:"函数与表达能力",description:"在不修改原类的情况下添加易读的调用方式。",minutes:5,number:14,path:"/kotlin/extensions.html",search:`   扩展函数
   kotlin
fun String.asTag(): String = " \${trim()}"
fun String?.orGuest(): String = this?.takeIf { it.isNotBlank() } ?: "访客"
fun main() {
    println(" Kotlin ".asTag()) //  Kotlin
    println(null.orGuest())     // 访客
}
   
点号前的类型称为接收者类型。扩展不会真的往类里加入成员，也不能访问原类的 private 成员。扩展按编译期接收者类型静态解析；同名且适用的真实成员优先。

   中缀函数
   kotlin
infix fun Int.timesLabel(label: String): String = label.repeat(this)
fun main() { println(3 timesLabel "好") }
   
infix 函数必须是成员或扩展，只有一个参数，且参数不能是 vararg 或带默认值。不要为了省略点号而牺牲含义。

   运算符重载
   kotlin
data class Vector(val x: Int, val y: Int) {
    operator fun plus(other: Vector) = Vector(x + other.x, y + other.y)
}
fun main() { println(Vector(1, 2) + Vector(3, 4)) }
   
 a + b  会按约定解析到 plus。只能使用语言规定的运算符名称，不能创造任意符号。重载应保留直觉语义，例如向量相加，而不应让加号偷偷写文件。 编写 String.lastOrQuestion 扩展，空字符串返回问号。`},{slug:"scope-functions",title:"作用域函数与惯用写法",group:"函数与表达能力",description:"分清 let、run、with、apply、also 的接收者与返回值。",minutes:5,number:15,path:"/kotlin/scope-functions.html",search:`   五个函数的选择
| 函数 | 对象如何引用 | 返回值 | 常见用途 |
| --- | --- | --- | --- |
| let | it | lambda 结果 | 可空转换、局部命名 |
| run | this | lambda 结果 | 在对象上计算 |
| with | this | lambda 结果 | 对现有对象集中操作 |
| apply | this | 原对象 | 初始化配置 |
| also | it | 原对象 | 记录、额外动作 |

   kotlin
data class Profile(var name: String = "", var age: Int = 0)
fun main() {
    val profile = Profile().apply {
        name = "小林"
        age = 20
    }.also { println("创建：\${it.name}") }
    val label = with(profile) { "$name / $age" }
    println(label)
    val input: String? = " kotlin "
    val result = input?.let { it.trim().uppercase() }
    println(result)
}
   

   使用边界
 let  本身不负责空检查；是前面的  ?.  跳过了空值。 apply  返回对象，而 run 返回最后一条表达式。记错返回值会让链式代码产生意料之外的类型。

   过滤与构建
 takeIf { 条件 }  在满足时返回原对象，否则返回 null； takeUnless  刚好相反。构建集合时可以用  buildList 、 buildMap ，构建文本使用  buildString 。

不要嵌套过多作用域函数。需要反复区分多个 this 或 it 时，普通变量加清晰语句通常更容易读懂。 用 takeIf 拒绝空白昵称，并提供“访客”作为默认值。`},{slug:"classes",title:"类、构造器与初始化",group:"面向对象与类型",description:"建立带状态与行为的对象，理解 init 和构造顺序。",minutes:5,number:16,path:"/kotlin/classes.html",search:`   主构造器
   kotlin
class User(val name: String, var age: Int) {
    init { require(age  = 0) { "年龄不能为负" } }
    fun introduce() = "$name，$age 岁"
}
fun main() {
    val user = User("小林", 20)
    user.age += 1
    println(user.introduce())
}
   
主构造器写在类名后。参数前带 val 或 var 才会同时声明属性；普通参数只作为初始化输入。实例化无需 new。

   次构造器与初始化顺序
   kotlin
class Label(val text: String) {
    val size = text.length
    init { println("初始化 $text") }
    constructor(number: Int) : this(number.toString())
}
fun main() { println(Label(42).size) }
   
有主构造器时，次构造器必须直接或间接委托给它。属性初始化器和 init 块按类体中出现的顺序执行，然后才执行次构造器体。

   嵌套类与内部类
普通嵌套类不持有外部对象引用。 inner class  会持有外部实例，可用  this@Outer  访问外层。不要为了方便访问而随意使用 inner，长期保存内部对象可能延长外部实例生命周期。

构造期间避免调用可重写成员：子类尚未完成初始化，读取其属性可能得到无效状态。 设计 Book 类，包含只读标题、可变页数和校验。`},{slug:"properties",title:"属性、访问器、lateinit 与 lazy",group:"面向对象与类型",description:"区分存储值与计算属性，控制延迟初始化。",minutes:5,number:17,path:"/kotlin/properties.html",search:`   自定义 getter 和 setter
   kotlin
class Rectangle(val width: Int, val height: Int) {
    val area: Int get() = width   height
    var label: String = "未命名"
        set(value) { field = value.trim() }
}
fun main() {
    val box = Rectangle(3, 4)
    box.label = " 卡片 "
    println("\${box.label}: \${box.area}")
}
   
 field  代表访问器内部的后备字段。在 setter 内写  label = value  会递归调用自己，应写  field = value 。计算属性不一定有后备字段。

   lateinit：稍后赋值
   kotlin
class Screen {
    lateinit var title: String
    fun ready(): Boolean = ::title.isInitialized
}
   
lateinit 适用于非空、非基本类型的 var 属性，不能用于有自定义访问器的属性。读取前未初始化会抛异常。它只延后初始化责任，不提供空安全保障。

   lazy：第一次读取时计算
   kotlin
class Report {
    val summary: String by lazy {
        println("生成摘要")
        "本月完成 12 项"
    }
}
fun main() {
    val report = Report()
    println(report.summary)
    println(report.summary)
}
   
初始化 lambda 成功后结果会缓存。默认 lazy 的初始化是同步的，但这不表示缓存对象内部的可变状态也自动线程安全。lateinit 由外部稍后赋值，lazy 由自身首次读取时计算。 让属性只能在类内修改，外部可以读取。`},{slug:"inheritance",title:"继承、接口与可见性",group:"面向对象与类型",description:"理解 open、override、abstract 和封装边界。",minutes:5,number:18,path:"/kotlin/inheritance.html",search:`   默认禁止继承
   kotlin
open class Animal(val name: String) {
    open fun sound(): String = "声音"
}
class Cat(name: String) : Animal(name) {
    override fun sound(): String = "喵"
}
interface Named { val displayName: String }
class Person(override val displayName: String) : Named
fun main() { println(Cat("小白").sound()) }
   
类和成员默认 final，需要 open 才能继承或重写。override 必须显式写出，重写成员通常仍可继续重写；加 final override 可阻止下一层重写。

   抽象类与接口
抽象类可以持有状态、构造器及抽象成员。接口可以声明属性与带实现的方法，但不能存储实例后备字段。一个类只能有一个直接父类，可以实现多个接口。默认实现冲突时，显式 override 并使用  super 接口名 .方法()  选择实现。

   可见性
| 修饰符 | 典型含义 |
| --- | --- |
| public | 默认，对使用方可见 |
| internal | 同一个编译模块内可见 |
| protected | 类及子类可见，不能用于顶层 |
| private | 类内部；顶层声明则限制在文件内 |

模块不是 package。internal 主要表达源码和 API 边界。优先用接口描述能力，用组合组织协作；继承适合稳定的“是一种”关系。 定义可打印的接口，让 Invoice 实现它。`},{slug:"data-sealed-enum",title:"数据类、枚举、密封与值类",group:"面向对象与类型",description:"为数据、有限状态和轻量标识选择合适类型。",minutes:6,number:19,path:"/kotlin/data-sealed-enum.html",search:`   data class
   kotlin
data class Article(val title: String, val tags: MutableList String )
fun main() {
    val a = Article("入门", mutableListOf("Kotlin"))
    val b = a.copy(title = "进阶")
    b.tags.add("JVM")
    println(a.tags) // [Kotlin, JVM]，copy 是浅复制
    val (title, tags) = a
    println("$title: $tags")
}
   
data class 自动生成 equals、hashCode、toString、copy 和 componentN，主要依据主构造器中的属性。类体内另行声明的属性不参与这些生成的相等性和复制参数。

   enum 与 sealed
   kotlin
enum class Priority { LOW, NORMAL, HIGH }
sealed interface LoadState {
    data object Loading : LoadState
    data class Ready(val text: String) : LoadState
    data class Failed(val reason: String) : LoadState
}
fun render(state: LoadState): String = when (state) {
    LoadState.Loading -  "加载中"
    is LoadState.Ready -  state.text
    is LoadState.Failed -  state.reason
}
   
enum 表示有限个单例成员；sealed 适合不同状态携带不同数据。其直接子类型受同模块、同 package 等规则约束，便于穷尽检查。

   value class
   kotlin
@JvmInline
value class UserId(val value: String)
   
值类用单一主构造属性包装业务值，能减少混淆。JVM 的具体场景仍可能装箱，不保证所有调用都零分配。 给加载状态增加 Empty，并让 render 返回“暂无内容”。`},{slug:"objects",title:"object、伴生对象与委托",group:"面向对象与类型",description:"使用单例、匿名对象、类委托与属性委托。",minutes:8,number:20,path:"/kotlin/objects.html",search:`   object 与 companion object
   kotlin
object AppInfo { val name = "Notes" }
class Account private constructor(val name: String) {
    companion object { fun guest() = Account("访客") }
}
fun main() { println(AppInfo.name); println(Account.guest().name) }
   
object 声明单例。伴生对象与类关联，但它本身仍是对象，不等同于所有成员都直接变成 Java static 方法。

   类委托
   kotlin
interface Messenger { fun send(text: String) }
class ConsoleMessenger : Messenger {
    override fun send(text: String) { println(text) }
}
class LoggedMessenger(private val target: Messenger) : Messenger by target
fun main() { LoggedMessenger(ConsoleMessenger()).send("你好") }
   
 by target  把接口实现转发给目标对象，也可以显式 override 某些成员。内部被委托对象调用自身成员时，不会自动路由到包装类的 override。

   属性委托
 val x by lazy { ... }  就是属性委托。自定义委托实现  getValue ，可变属性再实现  setValue 。标准库还提供  Delegates.observable  与  vetoable ；前者观察赋值，后者可拒绝赋值。

匿名对象写成  object : SomeInterface { ... } ，适合临时实现。单例里的可变属性同样可能存在并发问题，object 不是线程安全容器。

   自定义属性委托
   kotlin
import kotlin.reflect.KProperty
class TrimmedText(private var value: String = "") {
    operator fun getValue(thisRef: Any?, property: KProperty   ): String = value
    operator fun setValue(thisRef: Any?, property: KProperty   , newValue: String) {
        value = newValue.trim()
    }
}
class Draft { var title: String by TrimmedText() }
fun main() {
    val draft = Draft()
    draft.title = " Kotlin "
    println(draft.title) // Kotlin
}
   
getValue 与 setValue 使用 operator 约定，by 将属性访问交给委托。KProperty 提供属性元信息；这个例子不需要使用完整反射扫描。
 创建一个只读单例配置。`},{slug:"functional-interfaces",title:"函数式接口、对象表达式与枚举行为",group:"面向对象与类型",description:"理解 SAM 转换，为回调与有限状态增加行为。",minutes:6,number:21,path:"/kotlin/functional-interfaces.html",search:`   fun interface
   kotlin
fun interface Validator { fun valid(text: String): Boolean }
fun main() {
    val nonBlank = Validator { it.isNotBlank() }
    println(nonBlank.valid("Kotlin")) // true
    println(nonBlank.valid(" "))     // false
}
   
函数式接口只包含一个抽象方法，可以有其他非抽象成员。SAM 转换让 lambda 创建该接口实现。它表达具有业务名称的行为类型，区别于仅为函数类型增加别名。

   对象表达式
   kotlin
interface Listener {
    fun onStart()
    fun onEnd()
}
fun main() {
    val listener = object : Listener {
        override fun onStart() { println("开始") }
        override fun onEnd() { println("结束") }
    }
    listener.onStart()
    listener.onEnd()
}
   
需要实现多个方法时，匿名对象往往比 lambda 合适。对象表达式在执行时创建对象，不同于 object 声明的单例。公开 API 返回匿名对象时，应显式声明适当父类型，避免依赖匿名对象的专有成员。

   枚举携带属性和方法
   kotlin
enum class Level(val label: String) {
    BEGINNER("入门"), ADVANCED("进阶");
    fun display(): String = "$name：$label"
}
fun main() {
    for (level in Level.entries) println(level.display())
    println(Level.valueOf("BEGINNER").label)
}
   
entries 遍历枚举项；valueOf 严格按名称查找，未知值会抛异常。外部字符串应显式验证或使用 entries.firstOrNull。ordinal 是声明位置，重排后会变化，不应作为稳定的数据库业务编号。 为什么 Listener 不能直接用一个 lambda 完整实现？`},{slug:"collections",title:"集合：List、Set 与 Map",group:"集合与泛型",description:"根据顺序、唯一性和键值查询选择数据结构。",minutes:5,number:22,path:"/kotlin/collections.html",search:`   只读与可变接口
   kotlin
fun main() {
    val topics = listOf("变量", "函数", "集合")
    val selected = mutableListOf("变量")
    selected.add("函数")
    val unique = setOf("Kotlin", "Kotlin", "Java")
    val progress = mutableMapOf("变量" to true)
    progress["函数"] = false
    println(topics[0])
    println(unique.size) // 2
    println(progress["不存在"]) // null
}
   
List 保留位置和重复项；Set 关注唯一性；Map 保存键值关联。同一个键重新放值会替换旧值。 to  是创建 Pair 的中缀函数。

   不可变的常见误解
只读接口没有 add 等修改方法，但底层对象可能可变。 val  只限制重新绑定。可以在合适时机返回  toList()  的快照；元素对象仍可能共享。

   安全访问与默认值
 getOrNull(index)  在越界时返回 null； getOrElse  提供默认逻辑。Map 的  getValue(key)  在键缺失时抛异常， map[key]  返回可空值。值本来就可空时，用 containsKey 区分缺失键与 null 值。

集合元素用 equals 和 hashCode 判断相等。作为 HashSet 元素或 HashMap 键的对象，应避免在存放期间改变参与相等性计算的字段。 统计单词出现次数并存入 Map。`},{slug:"collection-operations",title:"集合变换、分组、排序与聚合",group:"集合与泛型",description:"熟练组合 map、filter、flatMap、groupBy 和 fold。",minutes:6,number:23,path:"/kotlin/collection-operations.html",search:`   从列表得到新结果
   kotlin
data class Lesson(val title: String, val minutes: Int)
fun main() {
    val lessons = listOf(Lesson("变量", 12), Lesson("函数", 25), Lesson("集合", 20))
    val titles = lessons.filter { it.minutes  = 20 }.map { it.title }
    println(titles) // [函数, 集合]
    println(lessons.sumOf { it.minutes }) // 57
    println(lessons.sortedByDescending { it.minutes })
}
   
普通集合多数变换返回新集合；sortedBy 不会原地修改原 List，sortBy 用于可变 List 的原地排序。

   选择正确操作
| 需求 | 操作 |
| --- | --- |
| 每项映射 | map、mapNotNull |
| 过滤 | filter、filterNot |
| 展平嵌套结果 | flatMap、flatten |
| 分组 | groupBy、groupingBy |
| 去重 | distinct、distinctBy |
| 配对 | zip、associate、associateBy |
| 合并累计 | fold、reduce、sumOf |
| 条件判断 | any、all、none |

associateBy 遇到重复键会保留后面的值，groupBy 为每个键保留一组元素。空集合上 reduce 会失败；fold 有初始值，可处理空集合。空集合的 all 返回 true，any 返回 false。

   文本统计管道
   kotlin
fun main() {
    val words = listOf(" Kotlin ", "", "Java", "Kotlin")
    val counts = words.map { it.trim() }.filter { it.isNotEmpty() }
        .groupingBy { it }.eachCount()
    println(counts) // {Kotlin=2, Java=1}
}
   
链条越长越需要中间变量和业务名称。频繁遍历超大集合时，再考虑 Sequence 或一次遍历实现。 得到列表中大于 10 的数的平方和。`},{slug:"sequences",title:"Sequence 与惰性求值",group:"集合与泛型",description:"理解中间操作、终端操作以及性能取舍。",minutes:5,number:24,path:"/kotlin/sequences.html",search:`   惰性管道
   kotlin
fun main() {
    val result = (1..100).asSequence()
        .filter { println("检查 $it"); it % 2 == 0 }
        .map { it   it }.take(3).toList()
    println(result) // [4, 16, 36]
}
   
Sequence 的中间操作通常不立即执行；toList、sum、first 等终端操作触发计算。这个例子只需要检查到 6，就能取得三个结果。

   创建序列
   kotlin
fun main() {
    val powers = generateSequence(1L) { previous - 
        if (previous  = Long.MAX_VALUE / 2) previous   2 else null
    }
    println(powers.take(6).toList()) // [1, 2, 4, 8, 16, 32]
}
   
下一项返回 null 时终止。也可用  sequence { yield(...); yieldAll(...) }  构建序列。Sequence 不是异步流，执行通常发生在调用方线程。

   不要一律替换 List
短列表、简单操作中，Sequence 的迭代器与 lambda 开销可能抵消收益。排序、分组等操作仍需缓存数据，不能因为使用 Sequence 就假定内存恒定。

带副作用的 lambda 在延迟或重复遍历时可能产生令人困惑的行为。某些序列只能遍历一次，不要把所有 Sequence 当作可反复读取的数据快照。 生成从 10 开始的自然数，取前三个奇数。`},{slug:"generics",title:"泛型、型变、投影与约束",group:"集合与泛型",description:"从类型参数走向 in、out、星投影和 where。",minutes:5,number:25,path:"/kotlin/generics.html",search:`   泛型消除重复
   kotlin
class Box T (val value: T)
fun  T  singleton(value: T): List T  = listOf(value)
fun main() {
    val box = Box("Kotlin")
    println(box.value.length)
    println(singleton(42))
}
   
泛型让类型关系在编译时保持完整。默认类型参数上界为 Any?，限制非空可以写   T : Any  。

   out 生产，in 消费
   kotlin
interface Source out T  { fun next(): T }
interface Sink in T  { fun accept(value: T) }
fun use(source: Source String , sink: Sink Any ) {
    val anySource: Source Any  = source
    val stringSink: Sink String  = sink
    stringSink.accept(anySource.next().toString())
}
   
out 表示协变，适合主要产生 T 的 API；in 表示逆变，适合主要接收 T 的 API。MutableList 同时读写，不能随意把  MutableList String   当成  MutableList Any  。

   投影与多重约束
 Array out Any   限制通过该引用写入未知元素； List     表示元素类型未知，安全读取结果为 Any?，不能通过可变星投影引用随意写入任意类型。
   kotlin
fun  T  describe(value: T): String
    where T : CharSequence, T : Comparable T  = "长度 \${value.length}"
   
JVM 上泛型通常被擦除，不能直接检查  value is List String  。inline reified 只能解决部分运行期类型问题。 为什么 MutableList String  不能赋给 MutableList Any ？`},{slug:"type-system",title:"类型检查、转换、别名与解构",group:"集合与泛型",description:"理解智能转换、as?、Nothing 与 componentN。",minutes:5,number:26,path:"/kotlin/type-system.html",search:`   is 与 as?
   kotlin
fun lengthOf(value: Any?): Int = when (value) {
    is String -  value.length
    is Collection    -  value.size
    else -  0
}
fun main() {
    val raw: Any = 42
    println(raw as? String) // null
    println(lengthOf("Kotlin")) // 6
}
   
is 检查类型，满足条件后可智能转换。as 不匹配时抛异常，as? 返回 null。对可变共享属性或自定义 getter，智能转换可能不可用，先保存为局部 val。

   typealias
   kotlin
typealias UserName = String
typealias Handler = (String) -  Unit
   
别名缩短复杂类型名称，但不会创造新类型；UserName 仍可与普通 String 混用。需要阻止混用时考虑 value class。

   解构
   kotlin
data class Point(val x: Int, val y: Int)
fun main() {
    val (x, _) = Point(3, 4)
    println(x)
    for ((key, value) in mapOf("a" to 1)) println("$key=$value")
}
   
解构依赖 component1、component2 等约定，_ 跳过不需要的项。它并非任意对象字段的自动拆包。

Nothing 没有实例，用于不正常返回的函数；Unit 有一个值，表示正常完成但没有业务结果。 安全地把 Any? 转为 Int，失败时返回 -1。`},{slug:"exceptions",title:"异常、Result 与输入校验",group:"集合与泛型",description:"区分错误输入、非法状态与可恢复失败。",minutes:5,number:27,path:"/kotlin/exceptions.html",search:`   try 也能返回值
   kotlin
fun parsePort(text: String): Int? = try {
    text.toInt().also { require(it in 1..65535) }
} catch (error: IllegalArgumentException) {
    null
}
fun main() { println(parsePort("8080")); println(parsePort("bad")) }
   
Kotlin 不要求像 Java 受检异常那样在签名中声明 throws。catch 从具体类型向一般类型排列；finally 用于清理，不要在其中 return，以免覆盖先前结果或异常。

   校验与资源
require 适合参数校验，失败抛 IllegalArgumentException；check 适合对象状态校验，失败抛 IllegalStateException。error 直接抛非法状态异常。
   kotlin
fun average(total: Int, count: Int): Double {
    require(count   0) { "数量必须大于 0" }
    return total.toDouble() / count
}
   
对 Closeable 资源使用 use，自动关闭并正确处理异常传播。

   Result 与 runCatching
   kotlin
fun main() {
    val result: Result Int  = runCatching { "12".toInt() }
    println(result.getOrElse { 0 })
}
   
Result 将成功或异常作为值传递。不要无差别吞掉错误；协程中 runCatching 也会捕获取消异常，应确保取消继续传播。 检查用户名不能为空白，并给出明确错误消息。`},{slug:"inline",title:"内联、reified 与返回控制",group:"进阶语言能力",description:"认识 noinline、crossinline 和运行期类型检查的边界。",minutes:5,number:28,path:"/kotlin/inline.html",search:`   inline 的用途
   kotlin
inline fun measure(action: () -  Unit) {
    val start = System.nanoTime()
    action()
    println("耗时 \${System.nanoTime() - start} ns")
}
fun main() { measure { println("执行任务") } }
   
inline 把适用的函数体及 lambda 在调用点展开，常用于高阶函数，减少部分分配和调用开销；也会增加代码体积。

   noinline 与 crossinline
需要保存或传递 lambda 时，可能需要 noinline，保留函数对象。crossinline 允许把 lambda 用到其他执行上下文中，但禁止非局部 return；它不表示函数一定异步。

   reified 类型参数
   kotlin
inline fun  reified T  Any?.asTypeOrNull(): T? = this as? T
fun main() {
    val value: Any = "Kotlin"
    println(value.asTypeOrNull String ())
    println(value.asTypeOrNull Int ()) // null
}
   
reified 配合 inline，让调用点的类型信息参与生成代码。但当 T 是 List 等嵌套泛型时，内部实参仍不能因此完整验证。

   公共 API 限制
public inline 的代码会进入外部模块，不能随意访问 private 或 internal 实现。确有需要时使用 @PublishedApi internal，并意识到二进制兼容责任。 需要把 lambda 存入列表时，inline 参数应如何声明？`},{slug:"dsl",title:"带接收者的 Lambda 与 DSL",group:"进阶语言能力",description:"利用接收者作用域构建小型配置语言。",minutes:5,number:29,path:"/kotlin/dsl.html",search:`   函数类型中的接收者
   kotlin
class Menu {
    private val items = mutableListOf String ()
    fun item(title: String) { items.add(title) }
    fun render(): String = items.joinToString(" / ")
}
fun menu(block: Menu.() -  Unit): Menu = Menu().apply(block)
fun main() {
    val result = menu { item("首页"); item("Kotlin 教程") }
    println(result.render())
}
   
Menu.() -  Unit 表示 lambda 有 Menu 接收者，因此能直接调用 item。它与普通 (Menu) -  Unit 都表达行为，但调用体验不同。

   限制作用域泄漏
   kotlin
@DslMarker
annotation class MenuDsl

@MenuDsl
class Section {
    fun title(text: String) { println(text) }
}
   
为嵌套 DSL 类型应用同一个 DslMarker，可以限制无意访问外层隐式接收者；仍可按规则显式访问外层。

   从 API 到 DSL
先让普通 API 正确、明确，再改进调用形式。配置完成后校验必填项、重复项和非法组合。不要让漂亮的花括号隐藏昂贵的磁盘或网络操作。

Gradle Kotlin DSL 与一些 UI 构建器使用这类机制，但框架还有额外规则。理解接收者不等于掌握整个框架的执行模型。 给 Menu 增加 divider() 方法。`},{slug:"annotations-reflection",title:"注解、反射与文档注释",group:"进阶语言能力",description:"了解注解目标、KClass、可调用引用和 KDoc。",minutes:5,number:30,path:"/kotlin/annotations-reflection.html",search:`   声明与使用注解
   kotlin
@Target(AnnotationTarget.CLASS)
@Retention(AnnotationRetention.RUNTIME)
annotation class Feature(val name: String)
@Feature("学习进度")
class Progress
fun main() {
    println(Progress::class.simpleName)
    println(Progress::class.java.getAnnotation(Feature::class.java).name)
}
   
Target 规定注解位置，Retention 决定保留时间。注解只记录元数据，需要编译器、框架或反射代码解释它。

   使用点目标
Kotlin 属性可能对应 getter、setter、字段和构造参数。用 @field:、@get:、@param: 等使用点目标明确注解位置，避免框架扫描不到。

   反射与依赖
SomeClass::class 得到 KClass，::function 得到可调用引用。完整 Kotlin/JVM 反射通常需要 implementation(kotlin("reflect"))。反射可能影响启动性能、混淆配置与维护性；能用直接调用或接口时，无需强行反射。

   KDoc
   kotlin
/  
   计算已完成比例。
   @param total 总数量，必须大于 0
   @return 0.0 到 1.0 之间的比例
  /
fun ratio(completed: Int, total: Int): Double {
    require(total   0 && completed in 0..total)
    return completed.toDouble() / total
}
   
文档写清契约、单位、空值和异常，比逐字重复函数名称更有价值。 为什么框架可能识别不到 Kotlin 属性上的 Java 注解？`},{slug:"coroutines",title:"协程入门与 suspend",group:"协程与异步",description:"从挂起、作用域到结构化并发，写出可管理的异步代码。",minutes:5,number:31,path:"/kotlin/coroutines.html",search:`   先配置扩展库
协程的 suspend 是语言能力，launch、async 和 Flow 来自 kotlinx.coroutines。可以直接使用“开发环境与项目结构”一章中的完整 Gradle 配置，其中已包含所需的协程库。下列示例需要这个依赖，不能仅靠标准库运行。

   第一个协程
   kotlin
import kotlinx.coroutines. 

fun main() = runBlocking {
    launch {
        delay(100)
        println("学习 Kotlin")
    }
    println("开始")
}
   
输出先是“开始”，再是“学习 Kotlin”。runBlocking 等待子任务完成，并阻塞调用线程，适合教学入口和部分测试，不适合放进 UI 点击事件或服务器请求链。

   suspend 不是自动开线程
   kotlin
import kotlinx.coroutines. 
suspend fun loadTitle(): String {
    delay(100)
    return "协程入门"
}
fun main() = runBlocking { println(loadTitle()) }
   
挂起函数能在适当位置暂停而不一直占用线程，但标注 suspend 不会自动把阻塞 I/O 变成非阻塞，也不意味着一定切换线程。

   结构化并发
子协程属于作用域，父协程等待子协程，取消沿父子关系传播。一般避免 GlobalScope；让任务生命周期与页面、请求或服务生命周期对应。普通 coroutineScope 中子任务失败会影响父作用域及其他子任务。 把两个延迟输出放到两个 launch 中，观察输出顺序。`},{slug:"async-dispatchers",title:"async、调度器与并发组合",group:"协程与异步",description:"区分等待、并发、线程切换和真正的阻塞工作。",minutes:5,number:32,path:"/kotlin/async-dispatchers.html",search:`   launch 与 async
launch 返回 Job，适合不直接返回业务结果的任务。async 返回 Deferred，调用 await 得到结果。要并发开始，先创建多个 async，再分别 await。
   kotlin
import kotlinx.coroutines. 
suspend fun loadName(): String { delay(100); return "小林" }
suspend fun loadCount(): Int { delay(100); return 8 }
fun main() = runBlocking {
    val name = async { loadName() }
    val count = async { loadCount() }
    println("\${name.await()}：\${count.await()} 章")
}
   
如果每创建一个 async 就马上 await，后一个任务尚未创建，并发收益会消失。async 也不是“异常保险箱”，普通父子关系下的失败仍会传播。

   调度器的职责
Dispatchers.Default 用于 CPU 密集计算；JVM 上的 Dispatchers.IO 适合阻塞 I/O；Main 面向 UI，需要对应平台提供实现。withContext 切换上下文并等待结果，不会像 launch 一样在调用点直接启动独立后续流程。
   kotlin
import kotlinx.coroutines. 
import java.io.File
suspend fun readNotes(file: File): String = withContext(Dispatchers.IO) {
    file.readText(Charsets.UTF_8)
}
   
线程切换有成本。已经提供非阻塞挂起 API 的库，不一定需要额外包裹 IO。大量 CPU 计算仍要注意取消检查与并行度。 同时请求三个独立数据源，并按原顺序取结果。`},{slug:"cancellation",title:"取消、超时与异常传播",group:"协程与异步",description:"使长任务能够停止，正确选择监督策略。",minutes:5,number:33,path:"/kotlin/cancellation.html",search:`   取消是协作式的
   kotlin
import kotlinx.coroutines. 
fun main() = runBlocking {
    val job = launch {
        try {
            repeat(10) { delay(100); println(it) }
        } finally { println("清理资源") }
    }
    delay(250)
    job.cancelAndJoin()
}
   
delay 等挂起函数会响应取消。长时间的纯计算循环应调用 ensureActive、yield，或检查 isActive，避免收到取消请求后仍持续计算。

   超时
   kotlin
import kotlinx.coroutines. 
fun main() = runBlocking {
    val result = withTimeoutOrNull(50) {
        delay(100)
        "完成"
    }
    println(result) // null
}
   
withTimeout 抛 TimeoutCancellationException；withTimeoutOrNull 返回 null。超时不保证强制打断不响应取消的任意阻塞调用。

   不要吞掉取消
如果 catch Exception，需识别 CancellationException 并重新抛出。finally 用于正常清理；少量必须挂起的清理可在 withContext(NonCancellable) 内执行，避免扩大不可取消范围。

   supervisorScope
普通 coroutineScope 的子任务失败通常会取消其他子任务；supervisorScope 隔离子任务之间的失败，但每个失败仍要处理。CoroutineExceptionHandler 不是所有 try/catch 的替代品，也不会把失败任务恢复运行。 为什么 catch Exception 后返回默认值可能破坏取消？`},{slug:"flow",title:"Flow、StateFlow 与 SharedFlow",group:"协程与异步",description:"区分冷流、状态与事件，组合可取消的数据管道。",minutes:5,number:34,path:"/kotlin/flow.html",search:`   冷流在收集时执行
   kotlin
import kotlinx.coroutines. 
import kotlinx.coroutines.flow. 
fun numbers(): Flow Int  = flow {
    for (i in 1..3) { delay(50); emit(i) }
}
fun main() = runBlocking {
    numbers().map { it   10 }.collect { println(it) }
}
   
普通 flow 构建的冷流通常每次 collect 都重新运行。map、filter 等操作组合处理，collect 是终端操作。Flow 不是语言关键字，而是协程库类型。

   上下文与背压
flowOn 改变它上游的执行上下文，不负责切换下游收集器。buffer 允许一定缓冲；conflate 跳过来不及处理的中间值；collectLatest 在新值到来时取消前一个处理块。只有确实可以舍弃中间结果时才使用后两者。

   状态与广播
StateFlow 是热流，始终有当前值，适合页面状态，相等值更新会被合并。SharedFlow 可配置 replay 和缓冲，适合广播；默认无 replay 的事件可能被尚未订阅的消费者错过。二者都不会像普通有限流那样自动结束收集。
   kotlin
import kotlinx.coroutines.flow. 
class Counter {
    private val mutable = MutableStateFlow(0)
    val state: StateFlow Int  = mutable.asStateFlow()
    fun increment() { mutable.update { it + 1 } }
}
   
对外暴露只读接口。catch 处理其上游异常，不会捕获下游 collect 中所有异常。Android 中收集还需遵循生命周期规则。 搜索输入变化时取消旧请求，应该考虑什么操作？`},{slug:"channels-concurrency",title:"Channel 与共享状态安全",group:"协程与异步",description:"使用消息传递、Mutex 和原子操作处理协作。",minutes:5,number:35,path:"/kotlin/channels-concurrency.html",search:`   Channel 传递任务
   kotlin
import kotlinx.coroutines. 
import kotlinx.coroutines.channels. 
fun main() = runBlocking {
    val channel = Channel Int ()
    launch {
        try { for (n in 1..3) channel.send(n) }
        finally { channel.close() }
    }
    for (value in channel) println(value)
}
   
默认 Channel 为无缓冲的交接通道，send 与 receive 可能挂起。关闭后，消费者可读取已缓冲的数据，然后结束 for 循环。多个消费者通常是在分担元素，不是每人收到同一份广播。

   共享计数器
   kotlin
import kotlinx.coroutines. 
import kotlinx.coroutines.sync. 
fun main() = runBlocking {
    val mutex = Mutex()
    var counter = 0
    coroutineScope {
        repeat(100) {
            launch(Dispatchers.Default) {
                mutex.withLock { counter++ }
            }
        }
    }
    println(counter) // 100
}
   
counter++ 包含读取、计算、写回，不是原子操作。@Volatile 只能帮助可见性，不会把复合操作变成原子操作。可用 Mutex、JVM 原子类型或限制状态仅在单一执行上下文修改。

锁内逻辑尽量短，不要在锁内做慢网络请求。设计取消与关闭路径，避免生产者等待无人接收的消息。 两个协程分别增加计数 1000 次，如何确保结果为 2000？`},{slug:"java-interop",title:"Java 互操作与平台类型",group:"工程与实战",description:"在 JVM 项目中安全地连接 Kotlin 和 Java。",minutes:5,number:36,path:"/kotlin/java-interop.html",search:`   调用 Java 标准库
   kotlin
import java.time.LocalDate
import java.util.ArrayList
fun main() {
    val values = ArrayList String ()
    values.add("Kotlin")
    println(values.size)
    println(LocalDate.of(2026, 11, 25))
}
   
Java 访问器常被映射为属性。注意有些库返回可变集合，Kotlin 只读接口不会阻止 Java 在别处修改它。

   平台类型 T!
没有充分空值注解的 Java 返回值可能表现为平台类型。IDE 中的 String! 不能直接写成 Kotlin 类型；它表示空值契约不明确。边界处应验证，或接收为 String? 再处理，不要仅凭编译通过就认定不会为 null。

   从 Java 调 Kotlin
   kotlin
class Greeting {
    companion object {
        @JvmStatic fun hello(): String = "你好"
    }
    @JvmOverloads
    fun message(name: String, prefix: String = "你好") = "$prefix，$name"
}
   
JvmStatic 为伴生对象或 object 中的成员生成适当静态入口；JvmOverloads 为默认参数生成若干 Java 重载；JvmField 可直接暴露适用属性的字段。顶层函数通常映射到文件名对应的  Kt 类，可用 @file:JvmName 调整。

Java 把 Kotlin 保留字当方法名时，可用反引号调用，例如 obj. when ()。需要 Java 受检异常声明时考虑 @Throws。不要把所有 JVM 注解一股脑加到 API 上，应根据调用方需求选择。 为什么接入 Java SDK 后仍可能出现空指针？`},{slug:"io-regex",title:"输入输出、文件与正则",group:"工程与实战",description:"读取控制台和 UTF-8 文件，理解资源释放与文本匹配。",minutes:5,number:37,path:"/kotlin/io-regex.html",search:`   控制台输入
   kotlin
fun main() {
    print("输入学习分钟数：")
    val minutes = readlnOrNull()?.trim()?.toIntOrNull()
    if (minutes == null || minutes   0) {
        println("请输入非负整数")
        return
    }
    println("记录了 $minutes 分钟")
}
   
readlnOrNull 在输入流结束时返回 null。readln 在没有输入时可能抛异常。使用 toIntOrNull 处理非数字、超范围输入，不要无条件使用 !!。

   文件与资源（JVM）
   kotlin
import java.io.File
fun main() {
    val file = File("study.txt")
    file.writeText("变量\\n函数\\n", Charsets.UTF_8)
    file.bufferedReader(Charsets.UTF_8).use { reader - 
        reader.lineSequence().forEach { println(it) }
    }
}
   
该示例会在当前工作目录创建或覆盖 study.txt。大文件不要随意 readText 全部读入内存；把 lineSequence 的消费留在 use 内，否则 reader 已关闭。用户提供路径时要限制可访问范围。

   正则表达式
   kotlin
fun main() {
    val pattern = Regex("""\\d+""")
    println(pattern.matches("123")) // true，完整匹配
    println(pattern.find("第12章")?.value) // 12
}
   
matches 与 find 的含义不同。来自不可信输入的复杂模式可能产生性能风险，简单拆分或判断优先使用普通字符串 API。 读取可能包含空白的数字输入，无效时显示提示。`},{slug:"serialization",title:"JSON 与 kotlinx.serialization",group:"工程与实战",description:"配置编译插件，建立可演进的数据协议。",minutes:5,number:38,path:"/kotlin/serialization.html",search:`   配置与语言的边界
JSON 序列化不是 Kotlin 内置语法，需要 kotlinx.serialization。Gradle 中启用  kotlin("plugin.serialization") ，版本与 Kotlin 插件一致，再添加  org.jetbrains.kotlinx:kotlinx-serialization-json  的兼容稳定版本。可直接复用“开发环境与项目结构”一章的完整配置，其中编译插件与 JSON 库已配齐。

   编码与解码
   kotlin
import kotlinx.serialization. 
import kotlinx.serialization.json. 
@Serializable
data class Note(val title: String, val done: Boolean = false)
fun main() {
    val json = Json { ignoreUnknownKeys = true }
    val encoded = json.encodeToString(Note("学习变量"))
    println(encoded)
    val restored = json.decodeFromString Note (encoded)
    println(restored.title)
}
   
可空和可缺省是两个维度： val name: String?  允许 null，却不自动表示字段缺失时有默认值；要允许缺失可明确给出  = null 。

   协议演进
默认值可帮助旧数据兼容新字段；@SerialName 可把源码名称与外部字段名分开。ignoreUnknownKeys 忽略未知字段，但不会代替业务校验，也不会让错误字段类型自动合法。

不要手工拼接 JSON 字符串：引号、换行和转义很容易出错。解码后仍需检查长度、数值范围、权限等约束；解析成功只代表数据结构满足反序列化要求。 新增可选备注字段，使旧 JSON 仍可读取。`},{slug:"gradle-testing",title:"Gradle、依赖管理与单元测试",group:"工程与实战",description:"固定工具版本，用有意义的断言保护行为。",minutes:6,number:39,path:"/kotlin/gradle-testing.html",search:`   最小 JVM 配置思路
保留 IDE 生成且彼此兼容的 Kotlin 插件和 Wrapper 版本。build.gradle.kts 中可配置：
   kotlin
repositories { mavenCentral() }
kotlin { jvmToolchain(21) }
dependencies {
    testImplementation(kotlin("test-junit5"))
    // JUnit Jupiter engine 与 platform launcher 的版本按项目 BOM 统一管理
}
tasks.test { useJUnitPlatform() }
   
上面是现有项目的配置片段，不是可直接替换全部构建文件的完整模板。JUnit 的 engine 和 launcher 应按当前 Kotlin/JUnit 兼容文档加入，避免混用不同代际依赖。

   测试业务边界
主源码提供函数：
   kotlin
fun discount(total: Int): Int {
    require(total  = 0)
    return if (total  = 100) total - 10 else total
}
   
测试文件放在 src/test/kotlin：
   kotlin
import kotlin.test. 
class DiscountTest {
    @Test fun threshold() {
        assertEquals(99, discount(99))
        assertEquals(90, discount(100))
    }
    @Test fun rejectsNegative() {
        assertFailsWith IllegalArgumentException  { discount(-1) }
    }
}
   
Windows 运行  .\\gradlew.bat test ，其他平台使用  ./gradlew test 。测试正常、边界和失败路径，不要测试无意义的 getter。协程测试使用 kotlinx-coroutines-test 的 runTest 与虚拟时间，减少真实等待带来的不稳定。 为 discount 增加零金额测试。`},{slug:"project",title:"综合实战：命令行学习清单",group:"工程与实战",description:"把变量、集合、数据类、空安全与输入校验串成完整程序。",minutes:9,number:40,path:"/kotlin/project.html",search:`   目标与约定
做一个不需要第三方依赖的 JVM 命令行工具。命令为 add 标题、list、done 编号 和 quit。数据保存在内存中，退出后清空；持久化作为扩展练习，避免把演示误当成数据已经保存。

   完整代码
   kotlin
data class Task(val id: Int, val title: String, val done: Boolean = false)

fun main() {
    val tasks = mutableListOf Task ()
    var nextId = 1
    println("命令：add 标题 | list | done 编号 | quit")
    while (true) {
        print("  ")
        val input = readlnOrNull()?.trim() ?: break
        val parts = input.split(" ", limit = 2)
        val argument = parts.getOrNull(1)?.trim().orEmpty()
        when (parts[0]) {
            "add" -  {
                if (argument.isBlank()) {
                    println("标题不能为空")
                } else {
                    tasks.add(Task(nextId++, argument))
                    println("已添加")
                }
            }
            "list" -  {
                if (tasks.isEmpty()) println("还没有任务")
                tasks.forEach {
                    val mark = if (it.done) "x" else " "
                    println("\${it.id}. [$mark] \${it.title}")
                }
            }
            "done" -  {
                val id = argument.toIntOrNull()
                val index = tasks.indexOfFirst { it.id == id }
                if (index   0) println("编号无效")
                else {
                    tasks[index] = tasks[index].copy(done = true)
                    println("已完成")
                }
            }
            "quit" -  break
            else -  println("未知命令")
        }
    }
}
   

   验收步骤
依次输入  add 学习 Kotlin 、 list 、 done 1 、 list 、 done abc 、 quit 。预期看到新任务、完成标记与无效编号提示，程序正常退出。空标题和不存在编号也应被拒绝。

   下一步重构
把命令解析、任务存储和终端输出拆开，给解析器与存储方法写测试。接着用 JSON 保存、恢复数据；最后再考虑异步加载。不要为了展示协程而把简单内存操作异步化。 添加 delete 编号命令，并在找不到任务时显示提示。`},{slug:"cheatsheet",title:"语法速查：关键字与常见陷阱",group:"工程与实战",description:"按用途回顾语法，快速找到遗漏的概念。",minutes:7,number:41,path:"/kotlin/cheatsheet.html",search:`   声明与类型
| 语法 | 用途 |
| --- | --- |
| val / var / const val | 只读绑定、可重新赋值、编译期常量 |
| fun / return / Unit / Nothing | 函数、返回、无业务结果、不正常返回 |
| class / interface / object | 类、接口、对象声明 |
| data / enum / sealed / value | 数据、枚举、封闭层次、值包装 |
| typealias / is / as? | 别名、类型检查、安全转换 |
| out / in / where | 泛型型变与约束 |

   修饰符与专用语法
| 语法 | 用途 |
| --- | --- |
| open / final / abstract / override | 继承与重写 |
| public / private / internal / protected | 可见性 |
| companion / inner / constructor / init | 类与初始化 |
| get / set / field / lateinit / by | 属性访问与委托 |
| inline / noinline / crossinline / reified | 内联与类型信息 |
| operator / infix / tailrec / vararg | 约定调用、尾递归、可变参数 |
| suspend | 挂起函数 |
| expect / actual | 多平台声明与平台实现 |
| external | 平台外部实现声明 |

   运算符与表达式
 ?.  安全调用， ?:  空值默认， !!  非空断言； ==  结构相等， ===  引用相等； ..  闭区间， ..   开尾区间； in  成员判断； ::  可调用或类引用； @  注解与标签；    展开数组； -   分支与函数类型。

   最容易出错的十件事
1. 把 val 当成深不可变。
2. 把整数除法当作小数除法。
3. 用 !! 代替输入校验。
4. 用 == 比较数组元素内容。
5. 把 data class.copy 当成深复制。
6. 修改 HashMap 键中参与 hashCode 的字段。
7. 以为 suspend 必然切换线程。
8. catch Exception 后吞掉取消异常。
9. 认为 Sequence 的所有操作都不占内存。
10. 以为 Kotlin 命名参数可直接用于 Java 方法。

   少见特性的查阅边界
契约 contracts、上下文参数、编译器插件与实验能力可能受版本、opt-in 及平台限制。需要使用时先查对应编译器版本文档，不把实验示例混入基础项目。完整关键字和语法规则以官方索引为准。 解释 val list = mutableListOf(1) 为什么还能 add。`},{slug:"next-steps",title:"下一步：Android、后端与多平台",group:"工程与实战",description:"把语言基础映射到实际开发路线，明确框架边界。",minutes:5,number:42,path:"/kotlin/next-steps.html",search:`   Android 路线
先掌握类、空安全、集合和协程，再学习 Android Studio、Jetpack Compose、状态管理、生命周期和数据持久化。Compose 的重组与状态系统属于框架知识，不是 Kotlin 基础语法。重点练习配置变化、恢复状态和取消页面任务。

   JVM 后端路线
在 Kotlin/JVM 基础上学习 HTTP、数据库、事务、认证与部署，再选择 Ktor 或 Spring 等框架。把挂起 API 与阻塞数据库访问的线程策略安排清楚；不要将 suspend 当成数据库自动异步化开关。

   Kotlin Multiplatform
共享业务逻辑通常放在 commonMain，平台实现放在 jvmMain、iosMain 等源集。通用代码不能直接使用 java.io 等 JVM 专属 API。expect / actual 用于描述平台边界，例如：
   kotlin
// commonMain：声明所需能力
expect fun platformName(): String
   
   kotlin
// jvmMain：提供 JVM 实现
actual fun platformName(): String = "JVM"
   
这是不同源集中的配置片段，需要先创建支持多平台的 Gradle 项目，不能把两个声明直接塞进普通 JVM 文件。优先共享稳定业务逻辑，不强求所有平台实现完全一致。

   作品与复习计划
第一轮完成学习清单；第二轮补测试与 JSON 文件；第三轮选择一个平台，做真正可用的小工具。每轮记录一个设计选择和一个失败案例，形成自己的博客文章。

官方资源：[Kotlin 文档](https://kotlinlang.org/docs/home.html)、[Android Kotlin](https://developer.android.com/kotlin)、[多平台起步](https://kotlinlang.org/docs/multiplatform/get-started.html)。先跑通官方最小样例，再加入自己的需求。 选择一条路线，为学习清单设计三个下一阶段功能。`}],Lt=t("a",{class:"skip-link",href:"#main-content"},"跳到正文",-1),It={class:"site-header"},At=t("span",{class:"brand-mark"},[k("K"),t("span",null,".")],-1),Tt=t("span",null,[k("学习手记"),t("span",{class:"brand-sub"},"KOTLIN NOTES")],-1),Ot={class:"header-links","aria-label":"主导航"},Dt={class:"header-actions"},Pt=t("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[t("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),t("path",{d:"m16 16 4.5 4.5"})],-1),xt=t("span",null,"搜索教程",-1),wt=t("kbd",null,"Ctrl K",-1),Vt=[Pt,xt,wt],Rt=["aria-label"],Kt={key:0,viewBox:"0 0 24 24","aria-hidden":"true"},Ct=t("path",{d:"M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"},null,-1),Mt=[Ct],Nt={key:1,viewBox:"0 0 24 24","aria-hidden":"true"},Jt=t("circle",{cx:"12",cy:"12",r:"4"},null,-1),jt=t("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"},null,-1),$t=[Jt,jt],qt=["aria-expanded"],Bt=t("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[t("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1),Ut=[Bt],Ft=t("span",{class:"tiny-square"},null,-1),Ht={class:"sidebar-caption"},zt=["open"],Gt=t("svg",{viewBox:"0 0 20 20","aria-hidden":"true"},[t("path",{d:"m7 5 5 5-5 5"})],-1),Wt={class:"sidebar-bottom"},Yt={class:"progress-track"},Xt=t("small",null,"进度保存在当前浏览器",-1),Qt=t("a",{href:"https://kotlinlang.org/docs/home.html",target:"_blank",rel:"noopener noreferrer"},"Kotlin 官方文档 ↗",-1),Zt={class:"hero"},ne={class:"hero-copy"},te=t("span",{class:"eyebrow"},[t("span"),k("一份持续积累的编程手记")],-1),ee=t("h1",null,[k("把 Kotlin，"),t("br"),t("em",null,"学得明明白白。")],-1),ae=t("p",null,[k("从变量声明到协程，从第一行代码到独立项目。"),t("br"),k("按自己的节奏，建立完整、扎实的 Kotlin 知识体系。")],-1),le={class:"hero-actions"},ie=t("a",{class:"button secondary",href:"#curriculum"},"浏览全部教程",-1),oe={class:"hero-meta"},re=t("span",null,"中文讲解 · 代码示例 · 章节练习",-1),se=Wn(`<div class="hero-code"><div class="code-bar"><div class="window-dots"><i></i><i></i><i></i></div><span>HelloKotlin.kt</span><span class="code-tag">Kotlin</span></div><pre><code><span class="code-muted">// 每一次进步，都从一行代码开始。</span>
<span class="code-purple">fun</span> <span class="code-blue">main</span>() {
    <span class="code-purple">val</span> language = <span class="code-green">&quot;Kotlin&quot;</span>
    <span class="code-purple">val</span> journey = listOf(
        <span class="code-green">&quot;理解语法&quot;</span>,
        <span class="code-green">&quot;动手实践&quot;</span>,
        <span class="code-green">&quot;构建自己的作品&quot;</span>
    )

    journey.<span class="code-blue">forEach</span> { step <span class="code-purple">-&gt;</span>
        println(<span class="code-green">&quot;用 $language，$step。&quot;</span>)
    }
}</code></pre><div class="code-output"><span>OUTPUT · 最后一行</span><p>用 Kotlin，构建自己的作品。</p></div></div>`,1),ue={class:"intro-strip"},ce=t("span",{class:"strip-symbol"},"{ }",-1),de=t("p",null,[t("strong",null,"不止于“看懂”，更要能够写出来。"),t("span",null,"每一章都有可理解的示例、常见陷阱，以及可以立即动手的练习。")],-1),pe={class:"path-section"},me=t("div",{class:"section-heading"},[t("div",null,[t("span",{class:"eyebrow"},"THE LEARNING PATH"),t("h2",null,"循序渐进，连接每一个知识点。")]),t("span",{class:"quiet"},"从零开始，也可以按需查阅")],-1),ve={class:"path-grid"},he={class:"path-card-meta"},ge={id:"curriculum",class:"curriculum"},_e={class:"section-heading"},fe=t("div",null,[t("span",{class:"eyebrow"},"EXPLORE THE GUIDE"),t("h2",null,"你的 Kotlin 知识地图")],-1),ke={class:"filter-tabs","aria-label":"按学习阶段筛选"},be=["onClick"],ye={class:"row-title"},Ee={class:"read-time"},Se={class:"article-grid"},Le={class:"article"},Ie={class:"breadcrumb"},Ae=t("span",null,"/",-1),Te={class:"article-heading"},Oe={class:"eyebrow"},De={class:"article-meta"},Pe=t("span",null,"中文教程 · Kotlin / JVM",-1),xe={key:0,class:"complete-label"},we={class:"learning-goal"},Ve=t("strong",null,"这一章，你将学会",-1),Re={class:"complete-card"},Ke=t("p",null,"完成练习后，标记这一章，记录自己的进步。",-1),Ce={class:"pagination","aria-label":"相邻教程"},Me={class:"toc","aria-label":"本页目录"},Ne=t("span",null,"本页内容",-1),Je=["href"],je=t("div",{class:"toc-tip"},[t("strong",null,"边读，边写。"),t("p",null,"将完整语法示例粘贴到 Playground，试着改变一个条件。"),t("a",{href:"https://play.kotlinlang.org/",target:"_blank",rel:"noopener noreferrer"},"打开 Kotlin Playground ↗")],-1),$e={key:2,class:"not-found"},qe=t("span",{class:"eyebrow"},"404 · PAGE NOT FOUND",-1),Be=t("h1",null,"这一页，暂时没有笔记。",-1),Ue=t("p",null,"可以回到知识地图，或搜索想学习的内容。",-1),Fe=t("footer",{class:"site-footer"},[t("span",null,[t("strong",null,"K."),k(" 学习手记 "),t("span",{class:"footer-motto"},"把复杂的事，慢慢学明白。")]),t("span",null,[k("原创中文笔记 · 参考 "),t("a",{href:"https://kotlinlang.org/docs/home.html",target:"_blank",rel:"noopener noreferrer"},"Kotlin 官方文档")])],-1),He=["onClick"],ze={class:"search-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"search-title"},Ge=t("label",{id:"search-title",for:"course-search"},"搜索 Kotlin 教程",-1),We={class:"search-count","aria-live":"polite"},Ye={class:"search-results"},Xe={key:0,class:"empty-search"},Qe=t("div",{class:"search-foot"},"搜索覆盖标题和正文 · Tab 切换 · Enter 打开 · Esc 关闭",-1),Ze={key:2,class:"toast",role:"status"},na={__name:"Layout",setup(n){const a=On(),i=Bn(),r=[...new Set(y.map(l=>l.group))],m=["写下第一行代码，建立扎实的语言基础。","用函数组织逻辑，清晰地表达意图。","用类型描述数据、状态与业务边界。","驾驭数据处理，理解类型系统的规则。","深入内联、DSL 与常用元编程能力。","从挂起出发，构建可靠的异步程序。","连接工具、测试与项目，完成知识闭环。"],d=S(()=>y.findIndex(l=>l.slug===a.value.frontmatter.lesson)),u=S(()=>y[d.value]),A=S(()=>i.path==="/"),D=S(()=>y[d.value-1]),T=S(()=>y[d.value+1]),v=E([]),P=E(""),Z=S(()=>y.find(l=>l.slug===P.value)||y[0]),M=E(!1),z=E(""),dn=E(null),pn=E(null),R=E(!1),N=E(!1),G=E("全部"),W=E(""),Y=E(0),nn=E("");let J,tn;const en=S(()=>{const l=z.value.trim().toLowerCase().split(/\s+/).filter(Boolean);return l.length?y.filter(p=>l.every(h=>`${p.title} ${p.description} ${p.search}`.toLowerCase().includes(h))).sort((p,h)=>Number(h.title.toLowerCase().includes(l[0]))-Number(p.title.toLowerCase().includes(l[0]))):y.slice(0,8)}),mn=S(()=>(a.value.headers||[]).filter(l=>l.level===2)),wn=S(()=>G.value==="全部"?r:[G.value]);function vn(l){W.value=l,clearTimeout(tn),tn=setTimeout(()=>W.value="",2200)}function hn(){try{localStorage.setItem("kotlin-notes-progress-v1",JSON.stringify({completed:v.value,lastRead:P.value}))}catch{vn("浏览器未允许保存，进度仅保留在本次浏览中")}}function Vn(){var p;const l=(p=u.value)==null?void 0:p.slug;l&&(v.value=v.value.includes(l)?v.value.filter(h=>h!==l):[...v.value,l],hn())}function Rn(){N.value=!N.value,document.documentElement.dataset.theme=N.value?"dark":"light";try{localStorage.setItem("kotlin-notes-theme",N.value?"dark":"light")}catch{}}async function gn(){var l;R.value=!1,M.value=!0,await on(),(l=dn.value)==null||l.focus()}async function an(){var l;M.value=!1,await on(),(l=pn.value)==null||l.focus()}function _n(l){if((l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="k"&&(l.preventDefault(),gn()),l.key==="Escape"&&(M.value&&an(),R.value=!1),l.key==="Tab"&&M.value){const p=[...document.querySelectorAll(".search-dialog a,.search-dialog button,.search-dialog input")],h=p[0],w=p[p.length-1];l.shiftKey&&document.activeElement===h?(l.preventDefault(),w==null||w.focus()):!l.shiftKey&&document.activeElement===w&&(l.preventDefault(),h==null||h.focus())}}function ln(){const l=document.querySelector(".lesson-body");if(!l){Y.value=0;return}const p=l.getBoundingClientRect().top+window.scrollY;Y.value=Math.max(0,Math.min(100,(window.scrollY-p+100)/Math.max(1,l.offsetHeight-window.innerHeight+150)*100))}async function fn(){var l;await on(),J==null||J.disconnect(),u.value&&(P.value=u.value.slug,hn(),document.querySelectorAll('.lesson-body div[class*="language-"]').forEach(p=>{if(p.querySelector(".copy-code"))return;const h=document.createElement("button");h.className="copy-code",h.textContent="复制",h.type="button",h.setAttribute("aria-label","复制代码"),h.onclick=async()=>{var w;try{await navigator.clipboard.writeText(((w=p.querySelector("code"))==null?void 0:w.textContent)||""),h.textContent="已复制",setTimeout(()=>h.textContent="复制",1500)}catch{vn("请选中代码手动复制")}},p.appendChild(h)}),J=new IntersectionObserver(p=>p.forEach(h=>{h.isIntersecting&&(nn.value=h.target.id)}),{rootMargin:"-90px 0px -65% 0px"}),document.querySelectorAll(".lesson-body h2").forEach(p=>J.observe(p)),nn.value=((l=mn.value[0])==null?void 0:l.slug)||"",ln())}return Q(()=>i.path,async()=>{M.value=!1,R.value=!1,Y.value=0,await fn()}),Q(M,l=>{typeof document<"u"&&(document.body.style.overflow=l?"hidden":"")}),un(()=>{try{const l=JSON.parse(localStorage.getItem("kotlin-notes-progress-v1")||"{}");v.value=Array.isArray(l.completed)?l.completed.filter(p=>y.some(h=>h.slug===p)):[],P.value=typeof l.lastRead=="string"?l.lastRead:"",N.value=localStorage.getItem("kotlin-notes-theme")==="dark"}catch{}document.documentElement.dataset.theme=N.value?"dark":"light",document.addEventListener("keydown",_n),window.addEventListener("scroll",ln,{passive:!0}),fn()}),Un(()=>{J==null||J.disconnect(),clearTimeout(tn),document.removeEventListener("keydown",_n),window.removeEventListener("scroll",ln),document.body.style.overflow=""}),(l,p)=>{var w,kn;const h=Fn("Content");return g(),f(x,null,[Lt,t("header",It,[O(_(I),{class:"brand",to:"/","aria-label":"Kotlin 学习手记首页"},{default:L(()=>[At,Tt]),_:1}),t("nav",Ot,[O(_(I),{to:"/",class:V({selected:A.value})},{default:L(()=>[k("教程")]),_:1},8,["class"]),O(_(I),{to:"/kotlin/cheatsheet.html"},{default:L(()=>[k("语法速查")]),_:1}),O(_(I),{to:"/kotlin/project.html"},{default:L(()=>[k("动手实战")]),_:1})]),t("div",Dt,[t("button",{ref_key:"searchTrigger",ref:pn,class:"search-trigger",onClick:gn},Vt,512),t("button",{class:"icon-button",onClick:Rn,"aria-label":N.value?"切换浅色主题":"切换深色主题"},[N.value?(g(),f("svg",Nt,$t)):(g(),f("svg",Kt,Mt))],8,Rt),t("button",{class:"icon-button menu-button",onClick:p[0]||(p[0]=s=>R.value=!R.value),"aria-expanded":R.value,"aria-controls":"course-sidebar","aria-label":"切换章节目录"},Ut,8,qt)])]),R.value?(g(),f("div",{key:0,class:"sidebar-backdrop",onClick:p[1]||(p[1]=s=>R.value=!1)})):U("v-if",!0),t("aside",{id:"course-sidebar",class:V(["sidebar",{open:R.value}]),"aria-label":"教程目录"},[O(_(I),{to:"/",class:"sidebar-home"},{default:L(()=>[Ft,k("教程总览")]),_:1}),t("div",Ht,[k("学习路径 "),t("span",null,c(_(y).length)+" 篇",1)]),(g(),f(x,null,j(r,(s,b)=>{var q;return t("details",{key:s,open:A.value?b===0:((q=u.value)==null?void 0:q.group)===s,class:"nav-group"},[t("summary",null,[t("span",null,c(s),1),Gt]),(g(!0),f(x,null,j(_(y).filter(K=>K.group===s),K=>{var bn,yn;return g(),rn(_(I),{key:K.slug,to:K.path,class:V({active:((bn=u.value)==null?void 0:bn.slug)===K.slug}),"aria-current":((yn=u.value)==null?void 0:yn.slug)===K.slug?"page":void 0},{default:L(()=>[t("span",{class:V(["lesson-dot",{done:v.value.includes(K.slug)}])},c(v.value.includes(K.slug)?"✓":""),3),k(c(K.title),1)]),_:2},1032,["to","class","aria-current"])}),128))],8,zt)}),64)),t("div",Wt,[t("span",null,[k("你的学习进度 "),t("strong",null,c(v.value.length)+" / "+c(_(y).length),1)]),t("div",Yt,[t("i",{style:En({width:v.value.length/_(y).length*100+"%"})},null,4)]),Xt,Qt])],2),t("main",{id:"main-content",class:V(["main-shell",{"article-shell":u.value}])},[A.value?(g(),f(x,{key:0},[t("section",Zt,[t("div",ne,[te,ee,ae,t("div",le,[O(_(I),{class:"button primary",to:Z.value.path},{default:L(()=>[k(c(P.value?"继续学习":"开始学习"),1)]),_:1},8,["to"]),ie]),t("div",oe,[t("span",null,c(_(y).length)+" 篇系统教程",1),re])]),se]),t("section",ue,[ce,de,O(_(I),{to:"/kotlin/project.html"},{default:L(()=>[k("看看实战项目")]),_:1})]),t("section",pe,[me,t("div",ve,[(g(),f(x,null,j(r,(s,b)=>O(_(I),{key:s,to:_(y).find(q=>q.group===s).path,class:"path-card"},{default:L(()=>[t("span",{class:V(["path-icon","path-icon-"+b])},c(["{ }","ƒ","◇","[ ]","⌘","≈","</>"][b]),3),t("span",he,c(_(y).filter(q=>q.group===s).length)+" 篇教程",1),t("h3",null,c(s),1),t("p",null,c(m[b]),1)]),_:2},1032,["to"])),64))])]),t("section",ge,[t("div",_e,[fe,O(_(I),{class:"text-link",to:"/kotlin/cheatsheet.html"},{default:L(()=>[k("打开语法速查")]),_:1})]),t("div",ke,[(g(!0),f(x,null,j(["全部",...r],s=>(g(),f("button",{key:s,class:V({active:G.value===s}),onClick:b=>G.value=s},c(s),11,be))),128))]),(g(!0),f(x,null,j(wn.value,s=>(g(),f("section",{key:s,class:"lesson-group"},[t("h3",null,c(s),1),(g(!0),f(x,null,j(_(y).filter(b=>b.group===s),b=>(g(),rn(_(I),{key:b.slug,class:"lesson-row",to:b.path},{default:L(()=>[t("span",{class:V(["row-indicator",{done:v.value.includes(b.slug)}])},c(v.value.includes(b.slug)?"✓":String(b.number).padStart(2,"0")),3),t("span",ye,[t("strong",null,c(b.title),1),t("small",null,c(b.description),1)]),t("span",Ee,c(b.minutes)+" 分钟",1)]),_:2},1032,["to"]))),128))]))),128))])],64)):u.value?(g(),f(x,{key:1},[t("div",{class:"reading-progress",style:En({width:Y.value+"%"})},null,4),t("div",Se,[t("article",Le,[t("div",Ie,[O(_(I),{to:"/"},{default:L(()=>[k("教程")]),_:1}),Ae,k(c(u.value.group),1)]),t("div",Te,[t("span",Oe,"KOTLIN 学习手记 · "+c(String(u.value.number).padStart(2,"0")),1),t("h1",null,c(u.value.title),1),t("p",null,c(u.value.description),1),t("div",De,[t("span",null,"约 "+c(u.value.minutes)+" 分钟",1),Pe,v.value.includes(u.value.slug)?(g(),f("span",xe,"已学完")):U("v-if",!0)])]),t("div",we,[Ve,t("p",null,c(u.value.description),1)]),O(h,{class:"lesson-body"}),t("div",Re,[t("div",null,[t("strong",null,c(v.value.includes(u.value.slug)?"这一章，已收入你的知识库。":"理解了？把知识变成自己的。"),1),Ke]),t("button",{class:V(["button",v.value.includes(u.value.slug)?"secondary":"primary"]),onClick:Vn},c(v.value.includes(u.value.slug)?"取消完成标记":"标记为已学完"),3)]),t("nav",Ce,[O(_(I),{to:((w=D.value)==null?void 0:w.path)||"/"},{default:L(()=>{var s;return[t("small",null,c(D.value?"上一篇":"回到"),1),t("strong",null,c(((s=D.value)==null?void 0:s.title)||"教程总览"),1)]}),_:1},8,["to"]),O(_(I),{to:((kn=T.value)==null?void 0:kn.path)||"/"},{default:L(()=>{var s;return[t("small",null,c(T.value?"下一篇":"回到"),1),t("strong",null,c(((s=T.value)==null?void 0:s.title)||"知识地图"),1)]}),_:1},8,["to"])])]),t("aside",Me,[Ne,(g(!0),f(x,null,j(mn.value,s=>(g(),f("a",{key:s.slug,href:"#"+s.slug,class:V({active:nn.value===s.slug})},c(s.title),11,Je))),128)),je])])],64)):(g(),f("section",$e,[qe,Be,Ue,O(_(I),{class:"button primary",to:"/"},{default:L(()=>[k("返回教程首页")]),_:1})])),Fe],2),M.value?(g(),f("div",{key:1,class:"search-overlay",onClick:Hn(an,["self"])},[t("section",ze,[t("div",{class:"search-dialog-top"},[Ge,t("button",{class:"close-search",onClick:an,"aria-label":"关闭搜索"},"Esc")]),zn(t("input",{id:"course-search",ref_key:"searchInput",ref:dn,"onUpdate:modelValue":p[2]||(p[2]=s=>z.value=s),placeholder:"试试：变量、空安全、Flow、val…",autocomplete:"off"},null,512),[[Gn,z.value]]),t("div",We,c(z.value.trim()?`找到 ${en.value.length} 篇教程`:"从这些章节开始"),1),t("div",Ye,[(g(!0),f(x,null,j(en.value,s=>(g(),rn(_(I),{key:s.slug,to:s.path,onClick:p[3]||(p[3]=b=>M.value=!1)},{default:L(()=>[t("small",null,c(s.group),1),t("strong",null,c(s.title),1),t("span",null,c(s.description),1)]),_:2},1032,["to"]))),128)),en.value.length?U("v-if",!0):(g(),f("p",Xe,"没有匹配的教程，试试更短的关键词或英文语法名。"))]),Qe])],8,He)):U("v-if",!0),W.value?(g(),f("div",Ze,c(W.value),1)):U("v-if",!0)],64)}}},Ln=qn(na,[["__file","Layout.vue"]]);const ta=Et({layouts:{Layout:Ln,NotFound:Ln}}),X=[ta],ea=[["v-8daa1a0e","/",{},["/index.html","/README.md"]],["v-3ea6b790","/kotlin/annotations-reflection.html",{},["/kotlin/annotations-reflection","/kotlin/annotations-reflection.md"]],["v-7230c2ec","/kotlin/arrays.html",{},["/kotlin/arrays","/kotlin/arrays.md"]],["v-5e0f5153","/kotlin/async-dispatchers.html",{},["/kotlin/async-dispatchers","/kotlin/async-dispatchers.md"]],["v-b7a70fbe","/kotlin/cancellation.html",{},["/kotlin/cancellation","/kotlin/cancellation.md"]],["v-51e42cee","/kotlin/channels-concurrency.html",{},["/kotlin/channels-concurrency","/kotlin/channels-concurrency.md"]],["v-3eee55d0","/kotlin/cheatsheet.html",{},["/kotlin/cheatsheet","/kotlin/cheatsheet.md"]],["v-0aa7f9b0","/kotlin/classes.html",{},["/kotlin/classes","/kotlin/classes.md"]],["v-bb50bd9a","/kotlin/collection-operations.html",{},["/kotlin/collection-operations","/kotlin/collection-operations.md"]],["v-5900c099","/kotlin/collections.html",{},["/kotlin/collections","/kotlin/collections.md"]],["v-d99a9b68","/kotlin/conditions.html",{},["/kotlin/conditions","/kotlin/conditions.md"]],["v-58a00649","/kotlin/coroutines.html",{},["/kotlin/coroutines","/kotlin/coroutines.md"]],["v-2d99dbf5","/kotlin/data-sealed-enum.html",{},["/kotlin/data-sealed-enum","/kotlin/data-sealed-enum.md"]],["v-0691831e","/kotlin/dsl.html",{},["/kotlin/dsl","/kotlin/dsl.md"]],["v-1206de80","/kotlin/exceptions.html",{},["/kotlin/exceptions","/kotlin/exceptions.md"]],["v-6ab11320","/kotlin/extensions.html",{},["/kotlin/extensions","/kotlin/extensions.md"]],["v-039efdd6","/kotlin/flow.html",{},["/kotlin/flow","/kotlin/flow.md"]],["v-48bc64ea","/kotlin/functional-interfaces.html",{},["/kotlin/functional-interfaces","/kotlin/functional-interfaces.md"]],["v-0bf4bb93","/kotlin/functions.html",{},["/kotlin/functions","/kotlin/functions.md"]],["v-420220c8","/kotlin/generics.html",{},["/kotlin/generics","/kotlin/generics.md"]],["v-3a294296","/kotlin/getting-started.html",{},["/kotlin/getting-started","/kotlin/getting-started.md"]],["v-637fd43a","/kotlin/gradle-testing.html",{},["/kotlin/gradle-testing","/kotlin/gradle-testing.md"]],["v-95ce7af8","/kotlin/inheritance.html",{},["/kotlin/inheritance","/kotlin/inheritance.md"]],["v-048dd88b","/kotlin/inline.html",{},["/kotlin/inline","/kotlin/inline.md"]],["v-20bab3e4","/kotlin/io-regex.html",{},["/kotlin/io-regex","/kotlin/io-regex.md"]],["v-347d091c","/kotlin/java-interop.html",{},["/kotlin/java-interop","/kotlin/java-interop.md"]],["v-e99af4fc","/kotlin/lambdas.html",{},["/kotlin/lambdas","/kotlin/lambdas.md"]],["v-31fa7042","/kotlin/loops.html",{},["/kotlin/loops","/kotlin/loops.md"]],["v-493d1e57","/kotlin/next-steps.html",{},["/kotlin/next-steps","/kotlin/next-steps.md"]],["v-1f6eca36","/kotlin/null-safety.html",{},["/kotlin/null-safety","/kotlin/null-safety.md"]],["v-c75b4a0c","/kotlin/objects.html",{},["/kotlin/objects","/kotlin/objects.md"]],["v-4d20b142","/kotlin/operators.html",{},["/kotlin/operators","/kotlin/operators.md"]],["v-c98b0812","/kotlin/packages.html",{},["/kotlin/packages","/kotlin/packages.md"]],["v-297c5fd6","/kotlin/project.html",{},["/kotlin/project","/kotlin/project.md"]],["v-29999e9e","/kotlin/properties.html",{},["/kotlin/properties","/kotlin/properties.md"]],["v-0c968c6c","/kotlin/scope-functions.html",{},["/kotlin/scope-functions","/kotlin/scope-functions.md"]],["v-05936cbc","/kotlin/sequences.html",{},["/kotlin/sequences","/kotlin/sequences.md"]],["v-677981de","/kotlin/serialization.html",{},["/kotlin/serialization","/kotlin/serialization.md"]],["v-55c1ef1e","/kotlin/setup.html",{},["/kotlin/setup","/kotlin/setup.md"]],["v-24f29b68","/kotlin/strings.html",{},["/kotlin/strings","/kotlin/strings.md"]],["v-28bfde2c","/kotlin/type-system.html",{},["/kotlin/type-system","/kotlin/type-system.md"]],["v-75f747f5","/kotlin/types.html",{},["/kotlin/types","/kotlin/types.md"]],["v-3eace192","/kotlin/variables.html",{},["/kotlin/variables","/kotlin/variables.md"]],["v-3706649a","/404.html",{},["/404"]]];var In=sn({name:"Vuepress",setup(){const n=vt();return()=>H(n.value)}}),aa=()=>ea.reduce((n,[a,i,r,m])=>(n.push({name:a,path:i,component:In,meta:r},...m.map(d=>({path:d,redirect:i}))),n),[{name:"404",path:"/:catchAll(.*)",component:In}]),la=nt,ia=()=>{const n=Yn({history:la(Xn("/-xbf0-.github.io/")),routes:aa(),scrollBehavior:(a,i,r)=>r||(a.hash?{el:a.hash}:{top:0})});return n.beforeResolve(async(a,i)=>{var r;(a.path!==i.path||i===Qn)&&([$.value]=await Promise.all([C.resolvePageData(a.name),(r=An[a.name])==null?void 0:r.__asyncLoader()]))}),n},oa=n=>{n.component("ClientOnly",bt),n.component("Content",yt)},ra=(n,a,i)=>{const r=E(a.currentRoute.value.path);Q(()=>a.currentRoute.value.path,Z=>r.value=Z);const m=S(()=>C.resolveLayouts(i)),d=S(()=>C.resolveRouteLocale(F.value.locales,r.value)),u=S(()=>C.resolveSiteLocaleData(F.value,d.value)),A=S(()=>C.resolvePageFrontmatter($.value)),D=S(()=>C.resolvePageHeadTitle($.value,u.value)),T=S(()=>C.resolvePageHead(D.value,A.value,u.value)),v=S(()=>C.resolvePageLang($.value)),P=S(()=>C.resolvePageLayout($.value,m.value));return n.provide(st,m),n.provide(ct,A),n.provide(pt,D),n.provide(Dn,T),n.provide(Pn,v),n.provide(xn,P),n.provide(ht,d),n.provide(gt,u),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>A.value},$head:{get:()=>T.value},$headTitle:{get:()=>D.value},$lang:{get:()=>v.value},$page:{get:()=>$.value},$routeLocale:{get:()=>d.value},$site:{get:()=>F.value},$siteLocale:{get:()=>u.value},$withBase:{get:()=>St}}),{layouts:m,pageData:$,pageFrontmatter:A,pageHead:T,pageHeadTitle:D,pageLang:v,pageLayout:P,routeLocale:d,siteData:F,siteLocaleData:u}},sa=()=>{const n=dt(),a=mt(),i=E([]),r=()=>{n.value.forEach(d=>{const u=ua(d);u&&i.value.push(u)})},m=()=>{document.documentElement.lang=a.value,i.value.forEach(d=>{d.parentNode===document.head&&document.head.removeChild(d)}),i.value.splice(0,i.value.length),n.value.forEach(d=>{const u=ca(d);u!==null&&(document.head.appendChild(u),i.value.push(u))})};tt(_t,m),un(()=>{r(),m(),Q(()=>n.value,()=>m())})},ua=([n,a,i=""])=>{const r=Object.entries(a).map(([A,D])=>B(D)?`[${A}=${JSON.stringify(D)}]`:D===!0?`[${A}]`:"").join(""),m=`head > ${n}${r}`;return Array.from(document.querySelectorAll(m)).find(A=>A.innerText===i)||null},ca=([n,a,i])=>{if(!B(n))return null;const r=document.createElement(n);return at(a)&&Object.entries(a).forEach(([m,d])=>{B(d)?r.setAttribute(m,d):d===!0&&r.setAttribute(m,"")}),B(i)&&r.appendChild(document.createTextNode(i)),r},da=Zn,pa=async()=>{var i;const n=da({name:"VuepressApp",setup(){var r;sa();for(const m of X)(r=m.setup)==null||r.call(m);return()=>[H(et),...X.flatMap(({rootComponents:m=[]})=>m.map(d=>H(d)))]}}),a=ia();oa(n),ra(n,a,X);for(const r of X)await((i=r.enhance)==null?void 0:i.call(r,{app:n,router:a,siteData:F}));return n.use(a),{app:n,router:a}};pa().then(({app:n,router:a})=>{a.isReady().then(()=>{n.mount("#app")})});export{pa as createVueApp};

import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.BVT_-y4N.js";const n="/guide/assets/20240715132539.eA-fB0cd.png",c=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"FAQ.md","filePath":"FAQ.md"}'),h={name:"FAQ.md"},l=t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="为什么字体这么奇怪" tabindex="-1">为什么字体这么奇怪 <a class="header-anchor" href="#为什么字体这么奇怪" aria-label="Permalink to &quot;为什么字体这么奇怪&quot;">​</a></h2><p><img src="'+n+`" alt=""></p><p>因为你没有指定中文字体，请参考下一个问题。</p><h2 id="如何安装-中文-字体" tabindex="-1">如何安装（中文）字体？ <a class="header-anchor" href="#如何安装-中文-字体" aria-label="Permalink to &quot;如何安装（中文）字体？&quot;">​</a></h2><p>首先，在源代码文件中需要使用类似 <code>#set text(font: &quot;LXGW WenKai&quot;, lang: &quot;zh&quot;)</code> 的命令设置字体（此处使用霞鹜文楷）。然后根据环境配置字体文件的搜索方式:</p><ul><li>在 typst.app 上编辑：直接上传字体文件。</li><li>在本地 VS Code 引入字体：默认可以使用系统安装的字体。除此以外，也可以通过给 tinymist 指定设定值 tinymist.fontPaths 等使它找到字体文件位置。不过注意使用 VSCode 打开单文件（区别于打开文件夹）时这一功能可能不可用。</li><li>使用 Typst CLI：使用 --font-path 参数。</li></ul><h2 id="中英文如何使用不同的字体" tabindex="-1">中英文如何使用不同的字体？ <a class="header-anchor" href="#中英文如何使用不同的字体" aria-label="Permalink to &quot;中英文如何使用不同的字体？&quot;">​</a></h2><p>设置字体可以使用一个列表，Typst 会按照列表中的顺序依次尝试使用字体。因此只需把英文字体放在中文字体前面即可。例如：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Times New Roman&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SimSun&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Typst 你好</span></span></code></pre></div><p>当然，这种方式严格来说并不是“中英文使用不同的字体”，但是 99% 的情况下已经够用了。</p><details><summary>如果你是剩下的 1%</summary><p>如果你发现了中文引号不对劲，那么你可以用这个修复 <code>#show regex(&quot;[“”]&quot;): set text(font: &quot;SimSun&quot;)</code>，并期待 Typst 更新。</p><p>Tracking Issue：<a href="https://github.com/typst/typst/issues/3385" target="_blank" rel="noreferrer">https://github.com/typst/typst/issues/3385</a></p></details><h2 id="中文没有加粗" tabindex="-1">中文没有加粗 <a class="header-anchor" href="#中文没有加粗" aria-label="Permalink to &quot;中文没有加粗&quot;">​</a></h2><p>这是因为你使用的中文字体没有粗体字形。我们常用的宋体、黑体、楷体等都没有粗体字形。推荐使用支持粗体的字体，例如使用思源宋体和思源黑体。</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Source Han Serif SC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现在可以使用*粗体*了</span></span></code></pre></div><p>然而，某些场合可能必须使用宋体。Microsoft Word 通过给字体增加描边实现了“伪粗体”，若要实现与 Microsoft Word 同样的效果，可以使用 <code>cuti</code> 包：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@preview/cuti:0.2.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-cn-fakebold</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-cn-fakebold</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Times New Roman&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SimSun&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现在可以使用*伪粗体*了</span></span></code></pre></div><h2 id="为什么第一段没有缩进" tabindex="-1">为什么第一段没有缩进？ <a class="header-anchor" href="#为什么第一段没有缩进" aria-label="Permalink to &quot;为什么第一段没有缩进？&quot;">​</a></h2><details><summary>参考阅读：</summary> Typst 官方也意识到了这个问题，希望我们可以早日看见这一问题的解决。 <p>Tracking Issue：<a href="https://github.com/typst/typst/issues/311" target="_blank" rel="noreferrer">https://github.com/typst/typst/issues/311</a></p></details><p>首先，英文排版是这样的，LaTeX 默认第一段也是不缩进的。其次，这部分实现有一些 bug，当前还不能通过修改设置来实现缩进。要修复这个问题，可以使用下面的方法：</p><h3 id="方法1-假段落-推荐" tabindex="-1">方法1：假段落（推荐） <a class="header-anchor" href="#方法1-假段落-推荐" aria-label="Permalink to &quot;方法1：假段落（推荐）&quot;">​</a></h3><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> par</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">first-line-indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fakepar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">context{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">measure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).height)}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fakepar</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fakepar</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> math</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.equation.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">it</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fakepar</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> noindent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">缩进修复了</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$ E=m c^2 $</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#noindent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()其中，</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$c$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表示光速。 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缺点是这里要手动 #noindent()</span></span></code></pre></div><p>优点：简单优雅</p><p>缺点：图表和公式后面的段落也会默认缩进。当你需要写“其中，XXX”的时候，要手动取消缩进。</p><h3 id="方法2-使用-indenta-包" tabindex="-1">方法2：使用 indenta 包 <a class="header-anchor" href="#方法2-使用-indenta-包" aria-label="Permalink to &quot;方法2：使用 indenta 包&quot;">​</a></h3><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> par</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">first-line-indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@preview/indenta:0.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: fix-indent</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fix-indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">缩进修复了</span></span></code></pre></div><p>优点：方便自由控制图表和公式后面的段落是否缩进</p><p>缺点：可能存在一些缩进失效的情况</p><h2 id="下划线怎么断断续续的" tabindex="-1">下划线怎么断断续续的？ <a class="header-anchor" href="#下划线怎么断断续续的" aria-label="Permalink to &quot;下划线怎么断断续续的？&quot;">​</a></h2><p>英文下划线是这样的，如果你不喜欢，可以使用 <code>evade: false</code> 参数让他变成连续的。</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#underline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lorem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#underline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lorem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>但是有一说一，对于大段文字，还是默认的好看一些。</p><h2 id="中英文下划线错位了怎么办" tabindex="-1">中英文下划线错位了怎么办？ <a class="header-anchor" href="#中英文下划线错位了怎么办" aria-label="Permalink to &quot;中英文下划线错位了怎么办？&quot;">​</a></h2><p>相关 issue：<a href="https://github.com/typst/typst/issues/1210" target="_blank" rel="noreferrer">https://github.com/typst/typst/issues/1210</a></p><p><img src="https://github.com/user-attachments/assets/9dcb568e-2888-4b27-ae4e-cbe19507bf78" alt=""></p><p>微调凑合一下吧</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> underline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">05em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#underline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[1234一二三四“”&quot;&quot;]</span></span></code></pre></div><p><img src="https://github.com/user-attachments/assets/51067bed-18f7-4e08-a571-38a37eae92c8" alt=""></p><h2 id="如何让某个标题不编号-例如参考文献" tabindex="-1">如何让某个标题不编号？例如参考文献 <a class="header-anchor" href="#如何让某个标题不编号-例如参考文献" aria-label="Permalink to &quot;如何让某个标题不编号？例如参考文献&quot;">​</a></h2><p>手动调用 <code>heading(numbering: none)</code>，例如</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;第1章&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 背景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[参考文献]</span></span></code></pre></div><h2 id="如何为每一级标题指定不同的编号格式" tabindex="-1">如何为每一级标题指定不同的编号格式？ <a class="header-anchor" href="#如何为每一级标题指定不同的编号格式" aria-label="Permalink to &quot;如何为每一级标题指定不同的编号格式？&quot;">​</a></h2><p>类似问题：如何从二级标题开始编号？</p><p>为了方便起见，推荐使用 <code>numbly</code> 包。<code>numbly</code> 包的用法是，<code>numbly(1级编号格式, 2级编号格式, 3级编号格式, ...)</code>。按顺序写出每一级编号的格式，然后把其中的编号换成 <code>{层级:格式}</code> 即可，省略格式默认使用阿拉伯数字。不需要编号的层级使用 <code>none</code>。</p><p>例如，我想实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>第1章 背景</span></span>
<span class="line"><span>1.1 引言</span></span>
<span class="line"><span>(a) 问题</span></span>
<span class="line"><span>(b) 目标</span></span>
<span class="line"><span>1.2 方法</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>让我们分析一下，1 级标题使用了 1 级编号，2 级标题使用了 1 级编号和 2 级编号，3 级标题只使用了 3 级编号并使用小写字母格式（<code>a</code>）。于是对应的设置如下：</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@preview/numbly:0.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: numbly</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">numbly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;第{1}章&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;{1}.{2}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;({3:a})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 背景</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">== 引言</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">=== 问题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">=== 目标</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">== 方法</span></span></code></pre></div><h2 id="如何让-inline-公式显示成-display-公式" tabindex="-1">如何让 inline 公式显示成 display 公式？ <a class="header-anchor" href="#如何让-inline-公式显示成-display-公式" aria-label="Permalink to &quot;如何让 inline 公式显示成 display 公式？&quot;">​</a></h2><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> math</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.equation.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): math.display</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">已知 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$f(x)=1/2 x^2$</span></span></code></pre></div><h2 id="如何获得标签所在页的页码" tabindex="-1">如何获得标签所在页的页码？ <a class="header-anchor" href="#如何获得标签所在页的页码" aria-label="Permalink to &quot;如何获得标签所在页的页码？&quot;">​</a></h2><p>其实就是获取计数器 <code>counter(page)</code> 在标签所在位置的值。</p><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aaa &lt;233&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> my-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">context </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l)[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(page).at(query(l).at(0).location()).at(0)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aaa 在第 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#my-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">233</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 页</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>另外注意，<code>counter(page).at(location)</code> 与 <code>location.position().page</code> 是不一样的。</p><p>前者是 <code>location</code> 位置的页码编号，这个编号可以被重置（例如第一章之前用罗马数字编号，之后用阿拉伯数字重新编号，此时可以使用 <code>counter(page).update(1)</code> 重置编号）。而后者是物理的页数，或者说，在第几张纸上。</p></div><h2 id="如何去掉标题的编号后面的空格" tabindex="-1">如何去掉标题的编号后面的空格？ <a class="header-anchor" href="#如何去掉标题的编号后面的空格" aria-label="Permalink to &quot;如何去掉标题的编号后面的空格？&quot;">​</a></h2><p>很遗憾，这空格是 <a href="https://github.com/typst/typst/blob/23746ee18901e08852306f35639298ad234d3481/crates/typst/src/model/heading.rs#L243" target="_blank" rel="noreferrer">代码里写死的</a>，并不能通过设置关掉。</p><p>不过从代码里可以看到，它实际上是个 <code>h(0.3em)</code>，于是我们可以想到两种方法解决：</p><h3 id="方法-1-反向空格抵消掉" tabindex="-1">方法 1：反向空格抵消掉 <a class="header-anchor" href="#方法-1-反向空格抵消掉" aria-label="Permalink to &quot;方法 1：反向空格抵消掉&quot;">​</a></h3><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: it </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;一、&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, it) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 标题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 思考</span></span></code></pre></div><h3 id="方法-2-给他-show-成-none" tabindex="-1">方法 2：给他 show 成 none <a class="header-anchor" href="#方法-2-给他-show-成-none" aria-label="Permalink to &quot;方法 2：给他 show 成 none&quot;">​</a></h3><div class="language-typst vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typst</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">numbering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;一、&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: it </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  show</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  it</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 标题</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">= 思考</span></span></code></pre></div>`,61),p=[l];function e(k,d,r,E,g,o){return a(),i("div",null,p)}const F=s(h,[["render",e]]);export{c as __pageData,F as default};
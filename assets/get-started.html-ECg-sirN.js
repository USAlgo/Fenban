import{_ as n,c as e,o as s,a}from"./app-DB9o8Ld_.js";const l="/fenban/images/excel_example.png",t="/fenban/images/calc_result.png",i={},d=a(`<h2 id="什么是分班算法" tabindex="-1"><a class="header-anchor" href="#什么是分班算法"><span>什么是分班算法</span></a></h2><p>分班算法是一种智能调配技术，主要用于教育机构中学生分配到各个班级的过程。它通过分析学生的成绩、能力水平、性别比例、年龄、特殊需求等因素，自动将学生均衡且合理地分到不同的班级中，以达到教学资源的最优化配置，促进学生间的公平竞争和合作学习环境的建立。分班算法考虑多维度信息，旨在创建同质或异质班级结构，满足不同的教育目标。</p><h2 id="优分班算法优点" tabindex="-1"><a class="header-anchor" href="#优分班算法优点"><span>优分班算法优点</span></a></h2><ul><li><strong>更精确</strong>：成绩均衡差值可以精确到0.01级，优于市面上同类产品最高的0.1级。从而确保每个班级的学生构成更平衡，以优化教育资源利用。。</li><li><strong>支持全面和个性化分班条件</strong>：支持几乎所有分班条件，如成绩均衡，性别均衡，预设班级，同音同名错开，双胞胎绑定，早恋生互斥，特别条件均衡，名次均衡，分数段均衡。可以根据学生的学习能力、兴趣特长、以往成绩等个性化数据，将学生分配至最适合其发展的班级。</li><li><strong>易于使用</strong>：提供算法SDK / API接口 / 桌面应用等集成方式，集成和使用简单。</li></ul><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><p>我们优先推荐使用.NET SDK集成，Python版本请单独联系。如果您有其他需要，我们也非常愿意基于您的需求提供定制化开发服务。</p><h3 id="获取sdk" tabindex="-1"><a class="header-anchor" href="#获取sdk"><span>获取SDK</span></a></h3><p>获取最新Nuget包<a href="https://www.nuget.org/packages/USAlgo.ClassBalance" target="_blank" rel="noopener noreferrer">USAlgo.ClassBalance</a>并安装。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">install-package USAlgo.ClassBalance</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="代码集成" tabindex="-1"><a class="header-anchor" href="#代码集成"><span>代码集成</span></a></h3><ol><li>准备分班excel文件 <img src="`+l+`" alt="image.png"> 样例excel文件请参考<a href="https://github.com/zdz72113/Algorithm_Examples/blob/main/ClassBalance/TestData/100_Data.xlsx" target="_blank" rel="noopener noreferrer">100_Data.xlsx</a></li><li>输入文件路径和分班设置数据</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Fenban fenban = new Fenban();</span>
<span class="line"></span>
<span class="line">// Excel文件本地路径</span>
<span class="line">string filePath = @&quot;.\\TestData\\100_Data.xlsx&quot;; </span>
<span class="line">// 分班设置 </span>
<span class="line">CalcSetting calcSetting = new CalcSetting</span>
<span class="line">{</span>
<span class="line">    NumberClass = 4, //分班个数</span>
<span class="line">    ColumnTypes = new ColumnTypeEnum[] { </span>
<span class="line">        ColumnTypeEnum.Ignore, //保留列：不参与计算</span>
<span class="line">        ColumnTypeEnum.Name,  //名字列：字符串，不能为空</span>
<span class="line">        ColumnTypeEnum.Gender, //性别列：字符串，取值男或女，不能为空</span>
<span class="line">        ColumnTypeEnum.Score, ColumnTypeEnum.Score, ColumnTypeEnum.Score, //分数列：整数或浮点型（&lt;=2位小数），不能为空</span>
<span class="line">        ColumnTypeEnum.Preset, //预设班级列: 字符串，可为空, 值为数字(如1/2/3)会分到此班级, 值为字母(如a/b/c)且字母相同的会分到一个班级</span>
<span class="line">        ColumnTypeEnum.Binding, //绑定列: 数字，相同数值代表必须在同一班级，可为空</span>
<span class="line">        ColumnTypeEnum.Mutex, //互斥列: 数字，相同数值代表不能在同一班级，可为空</span>
<span class="line">        ColumnTypeEnum.Balance, ColumnTypeEnum.Balance, ColumnTypeEnum.Balance // 均衡列：字符串，取值是，可为空</span>
<span class="line">    },</span>
<span class="line">    TopN = 10, //前n名均衡分配，0代表不启用</span>
<span class="line">    LastN = 10, //后n名均衡分配，0代表不启用</span>
<span class="line">    ScorePartition = 10, //分数分段统计均衡，适用于总分, 默认为10</span>
<span class="line">    IsHomophonic = true, //是否开启同音同名分开, 默认开启</span>
<span class="line">    FuzzyPinyin = new Dictionary&lt;string, string&gt;() //是否开启模糊音分开及模糊音定义</span>
<span class="line">    {</span>
<span class="line">        { &quot;s&quot;, &quot;sh&quot;},</span>
<span class="line">        { &quot;c&quot;, &quot;ch&quot;},</span>
<span class="line">        { &quot;z&quot;, &quot;zh&quot;},</span>
<span class="line">        { &quot;f&quot;, &quot;h&quot;},</span>
<span class="line">        { &quot;l&quot;, &quot;n&quot;},</span>
<span class="line">        { &quot;r&quot;, &quot;l&quot;},</span>
<span class="line">        { &quot;an&quot;, &quot;ang&quot;},</span>
<span class="line">        { &quot;in&quot;, &quot;ing&quot;},</span>
<span class="line">        { &quot;uan&quot;, &quot;uang&quot;},</span>
<span class="line">        { &quot;en&quot;, &quot;eng&quot;},</span>
<span class="line">        { &quot;ian&quot;, &quot;iang&quot;}</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>开始计算</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 基于数据量，计算时间1秒到120秒不等，请耐心等等</span>
<span class="line">var output = fenban.Calc(filePath, calcSetting);</span>
<span class="line"></span>
<span class="line">// 学生人数小于等于100时候，无需授权码。学生人数大于100时候，需要联系作者获取授权码并做为参数传入</span>
<span class="line">//var output1 = fenban.Calc(filePath, calcSetting, user: &quot;&quot;, authorizationCode: &quot;&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>输出分班结果并使用</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Console.WriteLine($&quot;描述信息: {output.CalcDescription}&quot;);</span>
<span class="line">Console.WriteLine($&quot;计算结果: {output.IsSuccessed}&quot;);</span>
<span class="line">Console.WriteLine($&quot;返回信息: {output.Message}&quot;);</span>
<span class="line">Console.WriteLine($&quot;计算用时: {output.CalcElapsedTime}秒&quot;);</span>
<span class="line">Console.WriteLine($&quot;详细结果: &quot;);</span>
<span class="line">// 输出结果包括统计数据、各班详细数据、预设班级分配数据、同音同名模糊音分配数据、平衡列分配数据、分数段分配数据</span>
<span class="line">Console.WriteLine($&quot;{JsonConvert.SerializeObject(output)}&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt="image.png"></p><ol start="5"><li>我们提供了样例代码，请参考<a href="https://github.com/zdz72113/Algorithm_Examples/tree/main/ClassBalance" target="_blank" rel="noopener noreferrer">样例代码</a></li></ol><h2 id="限制和授权" tabindex="-1"><a class="header-anchor" href="#限制和授权"><span>限制和授权</span></a></h2><table><thead><tr><th>特性</th><th>免费版本</th><th>授权版本</th></tr></thead><tbody><tr><td>成绩均衡</td><td>支持</td><td>支持</td></tr><tr><td>人数均衡</td><td>支持</td><td>支持</td></tr><tr><td>性别均衡</td><td>支持</td><td>支持</td></tr><tr><td>预设班级</td><td>支持</td><td>支持</td></tr><tr><td>同音同名</td><td>支持</td><td>支持</td></tr><tr><td>模糊音</td><td>支持</td><td>支持</td></tr><tr><td>学生绑定</td><td>支持</td><td>支持</td></tr><tr><td>学生互斥</td><td>支持</td><td>支持</td></tr><tr><td>名次均衡</td><td>支持</td><td>支持</td></tr><tr><td>分数段均衡</td><td>支持</td><td>支持</td></tr><tr><td>条件均衡</td><td>支持</td><td>支持</td></tr><tr><td>学生人数</td><td>&lt;=100</td><td>不限</td></tr><tr><td>技术支持</td><td>有限支持</td><td>支持</td></tr></tbody></table><p><strong>授权不限时间、硬件、用户个数、分发个数。一次授权，永久使用。</strong></p><p>授权请联系</p><ul><li>微信号💬：royzheng2017</li><li>邮箱✉️：<a href="royzheng2017@gmail.com">royzheng2017@gmail.com</a>。</li></ul>',23),r=[d];function c(u,o){return s(),e("div",null,r)}const m=n(i,[["render",c],["__file","get-started.html.vue"]]),v=JSON.parse('{"path":"/get-started.html","title":"使用文档","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"使用文档","description":"使用文档"},"headers":[{"level":2,"title":"什么是分班算法","slug":"什么是分班算法","link":"#什么是分班算法","children":[]},{"level":2,"title":"优分班算法优点","slug":"优分班算法优点","link":"#优分班算法优点","children":[]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"获取SDK","slug":"获取sdk","link":"#获取sdk","children":[]},{"level":3,"title":"代码集成","slug":"代码集成","link":"#代码集成","children":[]}]},{"level":2,"title":"限制和授权","slug":"限制和授权","link":"#限制和授权","children":[]}],"git":{"updatedTime":1717109182000,"contributors":[{"name":"royz","email":"zdz72113@163.com","commits":1}]},"filePathRelative":"get-started.md"}');export{m as comp,v as data};

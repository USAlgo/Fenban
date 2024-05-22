---
lang: zh-CN
title: 使用文档
description: 使用文档
---
## 什么是分班算法
分班算法是一种智能调配技术，主要用于教育机构中学生分配到各个班级的过程。它通过分析学生的成绩、能力水平、性别比例、年龄、特殊需求等因素，自动将学生均衡且合理地分到不同的班级中，以达到教学资源的最优化配置，促进学生间的公平竞争和合作学习环境的建立。分班算法考虑多维度信息，旨在创建同质或异质班级结构，满足不同的教育目标。

## 优分班算法优点
- **更精确**：成绩均衡差值可以精确到0.01级，优于市面上同类产品最高的0.1级。从而确保每个班级的学生构成更平衡，以优化教育资源利用。。
- **支持全面和个性化分班条件**：支持几乎所有分班条件，如成绩均衡，性别均衡，预设班级，同音同名错开，双胞胎绑定，早恋生互斥，特别条件均衡，名次均衡，分数段均衡。可以根据学生的学习能力、兴趣特长、以往成绩等个性化数据，将学生分配至最适合其发展的班级。
- **易于使用**：提供算法SDK / API接口 / 桌面应用等集成方式，集成和使用简单。

## 使用说明

我们优先推荐使用SDK集成。如果您有需要，我们也非常愿意基于您的需求提供定制化开发服务。

### 获取SDK 
获取最新Nuget包[USAlgo.ClassBalance](https://www.nuget.org/packages/USAlgo.ClassBalance)并安装。
```
install-package USAlgo.ClassBalance
```
### 代码集成
1. 准备分班excel文件
![image.png](/images/excel_example.png)
样例excel文件请参考[100_Data.xlsx](https://github.com/zdz72113/Algorithm_Examples/blob/main/ClassBalance/TestData/100_Data.xlsx)
2. 输入文件路径和分班设置数据
```
Fenban fenban = new Fenban();

// Excel文件本地路径
string filePath = @".\TestData\100_Data.xlsx"; 
// 分班设置 
CalcSetting calcSetting = new CalcSetting
{
    NumberClass = 4, //分班个数
    ColumnTypes = new ColumnTypeEnum[] { 
        ColumnTypeEnum.Ignore, //保留列：不参与计算
        ColumnTypeEnum.Name,  //名字列：字符串，不能为空
        ColumnTypeEnum.Gender, //性别列：字符串，取值男或女，不能为空
        ColumnTypeEnum.Score, ColumnTypeEnum.Score, ColumnTypeEnum.Score, //分数列：整数或浮点型（<=2位小数），不能为空
        ColumnTypeEnum.Preset, //预设班级列: 字符串，可为空, 值为数字(如1/2/3)会分到此班级, 值为字母(如a/b/c)且字母相同的会分到一个班级
        ColumnTypeEnum.Binding, //绑定列: 数字，相同数值代表必须在同一班级，可为空
        ColumnTypeEnum.Mutex, //互斥列: 数字，相同数值代表不能在同一班级，可为空
        ColumnTypeEnum.Balance, ColumnTypeEnum.Balance, ColumnTypeEnum.Balance // 均衡列：字符串，取值是，可为空
    },
    TopN = 10, //前n名均衡分配，0代表不启用
    LastN = 10, //后n名均衡分配，0代表不启用
    ScorePartition = 10, //分数分段统计均衡，适用于总分, 默认为10
    IsHomophonic = true, //是否开启同音同名分开, 默认开启
    FuzzyPinyin = new Dictionary<string, string>() //是否开启模糊音分开及模糊音定义
    {
        { "s", "sh"},
        { "c", "ch"},
        { "z", "zh"},
        { "f", "h"},
        { "l", "n"},
        { "r", "l"},
        { "an", "ang"},
        { "in", "ing"},
        { "uan", "uang"},
        { "en", "eng"},
        { "ian", "iang"}
    }
};
```
3. 开始计算
```
// 基于数据量，计算时间1秒到120秒不等，请耐心等等
var output = fenban.Calc(filePath, calcSetting);

// 学生人数小于等于100时候，无需授权码。学生人数大于100时候，需要联系作者获取授权码并做为参数传入
//var output1 = fenban.Calc(filePath, calcSetting, user: "", authorizationCode: "");
```
4. 输出分班结果并使用
```
Console.WriteLine($"描述信息: {output.CalcDescription}");
Console.WriteLine($"计算结果: {output.IsSuccessed}");
Console.WriteLine($"返回信息: {output.Message}");
Console.WriteLine($"计算用时: {output.CalcElapsedTime}秒");
Console.WriteLine($"详细结果: ");
// 输出结果包括统计数据、各班详细数据、预设班级分配数据、同音同名模糊音分配数据、平衡列分配数据、分数段分配数据
Console.WriteLine($"{JsonConvert.SerializeObject(output)}");
```
![image.png](/images/calc_result.png)

5. 我们提供了样例代码，请参考[样例代码](https://github.com/zdz72113/Algorithm_Examples/tree/main/ClassBalance)

## 限制和授权

| 特性 | 免费版本 | 授权版本 |
| --- | --- | --- |
| 学生人数 | 支持 (<=100) | 支持 |
| 分班个数 | 支持 | 支持 |
| 成绩均衡 | 支持 | 支持 |
| 人数均衡 | 支持 | 支持 |
| 性别均衡 | 支持 | 支持 |
| 预设班级 | 支持 | 支持 |
| 同音同名 | 支持 | 支持 |
| 模糊音 | 支持 | 支持 |
| 学生绑定 | 支持 | 支持 |
| 学生互斥 | 支持 | 支持 |
| 名次均衡 | 支持 | 支持 |
| 分数段均衡 | 支持 | 支持 |
| 特殊条件均衡 | 支持 | 支持  |
| 技术支持 | 有限支持 | 支持  |

授权请联系
- 微信号:speech_balloon:：royzheng2017
- 邮箱:envelope:：[royzheng2017@gmail.com](royzheng2017@gmail.com)。

授权不限时间、硬件、用户个数、分发个数。一次授权，永久使用。
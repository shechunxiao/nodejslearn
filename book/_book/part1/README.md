# 这是1个#号的标题
## 这是2个#号的标题
### 这是3个#号的标题
#### 这是4个#号的标题
##### 这是5个#号的标题
###### 这是6个#号的标题
这里是我们开始的一条线。

此行与上面的一行通过两个换行符分隔，因此它将是一个 *单独的段落*。

*此文本将为斜体*
_这也将是italic_

**此文本将是粗体**
__这也将是bold__

~~这个文字会被划掉~~

_You **可以**组合them_

* 项目1
* 项目2
  * 项目2a
  * 项目2b
  
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b

这是[带标题的链接（鼠标停留后显示标题）](http://www.gibook.site/ "标题")与标题的内联链接。

[链接](http://www.gibook.site/)没有标题属性。
这是[一个示例][id]参考样式链接。

![这是图片](../image/caomei.jpg)

> 我们生活在未来,神猴大叔分离式的浪费的数据库廊坊市
> 现在是我们的过去。

|第一标题|第二标题|
| ----- | ----- |
|![这是图片](../image/caomei.jpg)|内容单元|
|内容单元|内容单元|

两种代码块的风格

```markdown
这是一个示例代码块。

    继续这里。

```

    张三
    风刀霜剑法兰克的是两块风
    范德萨范德萨发山东似懂非懂是
    付水电费第三方

 ```javascript
    function test(){
          console.log("注意这个函数之前的空行？")
    }
```
 ```php
    function t(){
        echo 111;
    }
```
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
 使用`gitbook`在markdown中转换`text`
 语法到HTML。

脚注参考前的文本。[^注意]

<div>
张三
<span>李四</span>
Markdown这里不会**解析**
</div>

三个或更多...

--- ---

中划线

***

星号

___

下划线

Let's rename \*our-new-project\* to \*our-old-project\*.

##期限

[^注意]:评论要包括在脚注中。

[id]:http://www.gibook.site/ "可选标题这里"

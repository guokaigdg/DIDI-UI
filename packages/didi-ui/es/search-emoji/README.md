# SearchEmoji (查找 emoji )

## 说明

可以搜索 emoji 的一个组件

使用

```
import { SearchEmoji } from "solidoc-base-component-lib";
```

- value 为搜索内容,可以根据 short_name 进行模糊匹配

```js
SearchEmoji.search(value)
  .map(o => o.short_names)
  .map((item, index) => (
    <div>
      //根据输入value, 此处显示搜索结果
    </div>
  )
```

### API

| 标题  | 类型   | 默认值 | 描述     |
| ----- | ------ | ------ | -------- |
| value | string | -      | 搜索内容 |

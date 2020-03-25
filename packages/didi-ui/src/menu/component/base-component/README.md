# base-component 基础组件

- SmallIconView 小图标组件
- MediumIconView 中图标组件
- BigIconView 大图标组件
- EmojiIconView emoji 图标组件
- DragView 拖拽组件
- ColorView 颜色组件

### 说明

以下所有组件 childen 均为可选项

```
<Text/> 纯文本
<Arrow/> 箭头
<ShortcutsKey /> 快捷键
<SwitchButton /> 开关
<SelectButton /> 选择框
<MoreButton /> 更多按钮
<SelectedIcon /> 选中图标
```

#### SmallIconView 小图标组件

- 例子

```
 <SmallIconView
    icon={item.icon}
    text={item.text}
    children={item.nodes === undefined ? "" : item.nodes}
/>

```

| 标题     | 类型   | 默认值 | 描述            |
| -------- | ------ | ------ | --------------- |
| icon     | String |        | 小图标组件 icon |
| text     | String | -      | 组件名字        |
| children | nodes  | -      | 子菜单          |

#### MediumIconView 中图标组件

| 标题     | 类型   | 默认值 | 描述            |
| -------- | ------ | ------ | --------------- |
| url      | String |        | 中图标组件 icon |
| text     | String | -      | 组件名字        |
| children | nodes  | -      | 子菜单          |

#### BigIconView 大图标组件

| 标题     | 类型   | 默认值 | 描述            |
| -------- | ------ | ------ | --------------- |
| url      | String |        | 大图标组件 icon |
| text     | String | -      | 组件名字        |
| desc     | String | -      | 组价描述        |
| children | nodes  | -      | 子菜单          |

#### EmojiIconView emoji 图标组件

| 标题     | 类型   | 默认值 | 描述                |
| -------- | ------ | ------ | ------------------- |
| emoji    | String |        | emoji 图标组件 icon |
| text     | String | -      | 组件名字            |
| children | nodes  | -      | 子菜单              |

#### DragView 拖拽组件

| 标题     | 类型   | 默认值 | 描述              |
| -------- | ------ | ------ | ----------------- |
| icon     | String |        | 拖拽图标组件 icon |
| text     | String | -      | 组件名字          |
| children | nodes  | -      | 子菜单            |

#### ColorView 颜色组件

| 标题     | 类型   | 默认值    | 描述            |
| -------- | ------ | --------- | --------------- |
| color    | String | #C6C8C8FF | 颜色块图标 icon |
| text     | String | 灰色      | 颜色描述        |
| children | nodes  | -         | 子菜单          |

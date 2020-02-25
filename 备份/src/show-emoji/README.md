# SidebarSwitch(短码转成 Emoji 显示)

## 说明

- 一个可以将 short_names 解析成 emoji 显示的组件

## 实现方式

- 字符串省略显示... 实现方式

```javascript
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap
```

- 图标实现方式

## 用到的第三方库

emoji-datasource,

```js
```

## 使用

```js
<ShowEmoji emoji={`${item}`} size={28} />
```

### API

| 标题  | 类型   | 默认值 | 描述           |
| ----- | ------ | ------ | -------------- |
| emoji | S      | -      | emoji 短码名称 |
| size  | number | 111    | 尺寸大小       |

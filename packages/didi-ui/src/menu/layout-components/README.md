# LyoutContainerTB6px(布局容器)

## 说明

- 放组件容器，拥有自己的内边距
- LayoutContainerTB 上边距 0px，下内边距为 0px
- LayoutContainerT6px 上边距 6px，下内边距为 0px
- LayoutContainerB6px 上边距 0px，下内边距为 6px
- LayoutContainerTB3px 上边距 3px，下内边距为 3px
- LayoutContainerTB6px 上边距 6px，下内边距为 6px
- LayoutContainerTB8px 上边距 8px，下内边距为 8px

### 示例

## 用到的第三方库

```js
import { makeStyles } from "@material-ui/styles";
```

## 使用

```tsx
import { LyoutContainerTB6px } from "solidoc-base-component-lib";
<LyoutContainerTB6px>
  {children}
</LyoutContainerTB6px>;
```

## API

| 标题        | 类型 | 默认值 | 描述 |
| ----------- | ---- | ------ | ---- |
| children \* | node |        | 内容 |

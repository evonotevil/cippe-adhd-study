# CIPPE 学习终端

面向 **CIPPE（Certified Information Privacy Professional / Europe）** 备考的刷题工具，针对 ADHD 用户优化。

## 线上地址

**https://evonotevil.github.io/cippe-adhd-study/**

## 功能

- **319 道 CIPPE 真题**，按 Topic 分类（GDPR、ePrivacy 指令、AI Act、判例法等 9 个主题）
- **四种练习模式**：全库刷题、错题复习、专题练习、随机组卷
- **连续答对反馈**：Good（1 连对）/ Nice（2 连对）/ Excellent（3 连对及以上），配分级原创音效
- **学习模式 + 考试模式**（考试模式支持回看、标记、交卷前检查）
- **错题本**：连续答对两次自动移出，跳过不打断连对
- **番茄钟、成就系统**
- **三套主题**：明亮 / 护眼 / 深色
- **数据导出 / 导入**（JSON 备份，含进度、错题、设置）
- **减少动态效果**支持，键盘可操作，44px 触控目标

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- Web Audio API（无外部音频文件）

## 本地开发

```bash
npm install
npm run dev       # 启动开发服务器
npm run build     # 生产构建，输出到 dist/
npm run lint      # 代码检查
```

## 部署

线上页面由 `gh-pages` 分支托管（GitHub Pages，legacy 模式，从 `dist/` 生成）。

发布流程：

```bash
npm run build
git subtree split --prefix dist -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages
```

## 数据存储

所有学习进度、错题状态、设置和未完成练习均保存在浏览器 `localStorage`，可通过「设置 → 导出学习数据」备份为 JSON 文件。

---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "KnowledgeFish"
  text: "快捷查找网络资源，收纳常用工具"
  tagline: 总有你找不到的资源
  actions:
    - theme: brand
      text: 实用工具
      link: https://tool.browser.qq.com/
    - theme: brand
      text: 在线画板
      link: https://excalidraw.com/
    - theme: brand
      text: 央视节目官网
      link: https://tv.cctv.com/live
    - theme: alt
      text: BLOG
      link: /blog
    - theme: alt
      text: Hello算法
      link: https://www.hello-algo.com/
  image:
      src: /image/fish.svg
      alt: KnowledgeFish
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>


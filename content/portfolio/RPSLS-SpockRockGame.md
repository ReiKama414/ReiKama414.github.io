---
image: RPSLS.png
title: "#4 Spock Rock Game - Rock Paper Scissors Lizard Spock"
category: work
type: "typeweb"
description: "Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in \"The Lizard-Spock Expansion\"."
tags: ["typeweb", "nuxt"]
name: "Spock Rock Game"
introduction: "An expansion on the game Rock, Paper, Scissors."
sourceimg1_n: Kama
sourceimg1_u: '/'
sourceimg2_n: Kama
sourceimg2_u: '/'
demo: "https://reikama414.github.io/RPSLS/"
createdAtTime: '2023-02-10 08:31:31'
updatedAtTime: '2023-02-10 16:04:10'
slug: "portfolio-RPSLS-SpockRockGame"
---
> Rock, Paper, Scissors, Lizard, Spock - 石頭、剪子、布、蜥蜴、史波克

## Demo
- URL：[Demo](https://reikama414.github.io/RPSLS/)
- GitHub: [RPSLS](https://github.com/ReiKama414/RPSLS)

## Introduction
**石頭、剪子、布、蜥蜴、史波克**（英語：**Rock-paper-scissors-lizard-Spock**）是一種由石頭、剪子、布延伸出來的博弈論猜拳遊戲，遊戲的發明者是山姆和卡倫，與石頭、剪子、布不同的是，「石頭、剪子、布、蜥蜴、史波克」在石頭、剪子、布的基礎上增加了兩種手勢，分別為動物蜥蜴和星際旅行的主要人物史波克。

石頭、剪子、布的手勢和通俗猜拳遊戲基本一致，蜥蜴的手勢為一個蜥蜴面部的手勢，而史波克的手勢則為著名的瓦肯舉手禮。這個新式的猜拳遊戲減少了原石頭、剪子、布遊戲和局的幾率。

![Rock Paper Scissors Lizard Spock images](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg/600px-Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg.png 'Rock Paper Scissors Lizard Spock')
<p class="img-origin mt-1 mb-3 text-center px-5"> (1) 一張展示石頭、剪子、布、蜥蜴、史波克手勢的圖片，由上順時針方向分別為：剪子、布、石頭、蜥蜴、史波克 — 圖文來自維基百科 </p>

### Rules
- Scissors cuts Paper. 剪刀切斷布
- Paper covers Rock. 布包住石頭
- Rock crushes Lizard. 石頭砸死蜥蜴
- Lizard poisons Spock. 蜥蜴毒死史波克
- Spock smashes Scissors. 史波克踩碎剪刀
- Scissors decapitates Lizard. 剪刀斬首蜥蜴
- Lizard eats Paper. 蜥蜴吃掉布
- Paper disproves Spock. 布（紙，英語中與論文同詞）證明史波克不存在
- Spock vaporizes Rock. 史波克融化石頭
- Rock crushes scissors. 石頭敲壞剪刀

![Rock Paper Scissors Lizard Spock images](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Rock_Paper_Scissors_Lizard_Spock_en.svg/400px-Rock_Paper_Scissors_Lizard_Spock_en.svg.png 'Rock Paper Scissors Lizard Spock')
<p class="img-origin mt-1 mb-3 text-center px-5"> (2) 石頭、剪子、布、蜥蜴、史波克之間輸贏關係的圖示 — 圖文來自維基百科 </p>

與 12345 的遊戲同理，5贏4、3；4贏3、2；3贏2、1；2贏1、5；1贏5、4，就相當於：

5 = 布

4 = 史波克

3 = 石頭

2 = 剪刀

1 = 蜥蜴

## Technology
- Nuxt 3
- Sass
- JavaScript

## Reflection
為什麼想做這個呢? 因為看到網路上有一篇文章叫做 「[JavaScript Web Projects: 20 Projects to Build Your Portfolio](https://zerotomastery.io/courses/javascript-projects/)」的付費課程，滑到底下好奇看了一下怎樣的作品 (因為在想練習 Nuxt 3 和累積一些作品集中)。

看到了 **Spock Rock Game** 的項目後，去查了一下... 這酷東西 (沒看過的新遊戲) 我需要寫看看！

未來有時間預計會幫這個頁面再新增一個計數總贏次數與本地端紀錄 (前提是有空(?))。

Then ..

寫程式 + 想設計與實做花了 1hr 左右 (想風格 ლ(´•д• ̀ლ)，而為了部屬到 Github Action 總計大約 6hr 的進展，`nuxt.config.ts` 是我看過最頑強無解的挫折，決定先將它放到一邊去 ... 

不知道為什麼，修改過 `yml`、`package.json`、`nuxt.config.ts` 與各種可能發生的因素，找了國內外將近幾百篇的文章與 Github 討論串... 但是還是沒有解決方法RRR !!! 

總而言之，Github Action 就是 **沒辦法** 抓取到 `nuxt.config.ts` 不知道為什麼 (´;ω;`)

<a href="/blog/RPSLS-1.jpg" target="_blank">

![SOS image](/blog/RPSLS-1.jpg "Help me!")

</a>

---

## Reference

[1] Rock, Paper, Scissors, Lizard, Spock | The Big Bang Theory Wiki | Fandom

https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock

[2] 石頭、剪子、布、蜥蜴、史波克 - 維基百科，自由的百科全書
https://zh.wikipedia.org/zh-hant/%E7%9F%B3%E5%A4%B4%E3%80%81%E5%89%AA%E5%AD%90%E3%80%81%E5%B8%83%E3%80%81%E8%9C%A5%E8%9C%B4%E3%80%81%E5%8F%B2%E6%B3%A2%E5%85%8B
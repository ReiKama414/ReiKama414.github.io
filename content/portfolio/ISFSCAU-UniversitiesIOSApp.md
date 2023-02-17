---
image: ISFSCAU.png
title: "#6 IOS 專題 - 南部大專院校查詢系統"
category: work
type: "typeios"
description: "內含多種功能，有南部大專院校查詢系統以外，還有貓貓圖片牆、碼錶、紀念日日曆、BMI & BMR 計算器等等。"
tags: ["typeios", "Swift", 'uiux']
name: "南部大專院校查詢系統"
introduction: "多種功能集結系統"
sourceimg1_n: Kama
sourceimg1_u: '/'
sourceimg2_n: Kama
sourceimg2_u: '/'
demo: "https://youtu.be/7SOc4Uzoruc"
createdAtTime: '2023-02-17 11:21:52'
updatedAtTime: '2023-02-17 14:13:36'
slug: "portfolio-ISFSCAU-UniversitiesIOSApp"
---

> 以下為當初 PDF 簡報報告內容，程式跟報告交上去後被教授當成永久流傳的教學範例了... 社恐當下嚇死 hhhhh

## Demo

- 完成日期：2022-01-01
- Demo Video：

<iframe width="560" height="315" src="https://www.youtube.com/embed/7SOc4Uzoruc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>

## Abstract

在高中職學生高三階段，往往會開始找大學往哪邊去比較好，而有些人會考慮到南部物價與租屋的花費較為減少而選擇在南部進行大學教育，而這時候就會想查詢南部的大專院校有哪些，是市立還是私立或是國立好等。

## Introduction

此 APP 可以查詢南部大專院校有哪些，內容資訊包含了公私立/體制、校內電話、校園地址位於何地、學校簡介、地圖以及導入該大學網站的連結點以了解更多關於想了解的。而在閒暇看類之餘，亦或是不需要查詢南部大專院校時，可以看看大家都喜愛的貓咪 gif 圖與貓咪的品種大全。而本 APP 也設置了碼錶功能、紀念日查詢還相差多少天、BMI 與 BMR 的計算等等，即便不再需要查詢也可以繼續留在手機內，觀看可愛的貓貓等等，一個 APP 內設置了多種功能不浪費。

#### 一、 動機

因為自身當年高三也是在網上找關於大學的資訊，以及很喜歡貓咪，於是做完南部大專院校的集結資訊，還有時間就又做了貓咪的品種的資訊頁面。而想到了平時下載的 APP 用完後沒用處就又進行了卸載作業，何不將自己覺得有用並且做得出來的東西結合在 APP 內呢？

#### 二、 相關之課程章節
1. Ch05 Auto Layout
2. Ch06 堆疊視圖設計 UI
3. Ch07 寫程式前的規劃
4. Ch08 表格式設計
5. Ch09 使用 Prototype Cell 自訂表格視圖
6. Ch10 使用 UIAlertController
7. Ch12 導覽控制器與 Segue
8. Ch14 改善細節視圖、自訂字型與自適應 Cell
9. Ch15 自訂導覽列、擴展與動態型態
10. Ch16 地圖的應用

課本：iOS12 APP 程式開發實務心法 30 個製作專業級 iOS App 完全實戰攻略

#### 三、 系統畫面 & 操作說明 & 參考資料註明

> () <- 此括號代表為 Menu Bar 功能介紹

> a.b.c... <- 代表菜單內功能們

###### (I) 首頁
歡迎介面是一個 GIF 動畫的圖片，而按下去 “Click me” 的按鈕後，將會隨機替換一張 GIF 動畫的圖片，總共有 87 張 GIF 進行替換。
按下方導覽列可切換至其他頁面。

> 參考資料[1] GIF.swift 檔案 套件 達成 GIF 動畫目的

<a href="/blog/ISFSCAU-1.jpg" target="_blank">

![App image](/blog/ISFSCAU-1.jpg)

</a>

###### (II) 菜單
總共分為六種，點選自己要查詢或使用的按鈕即可使用！

<a href="/blog/ISFSCAU-2.jpg" target="_blank">

![App image](/blog/ISFSCAU-2.jpg)

</a>

###### a.南部大專院校一覽
可查詢南部全部的大專院校資訊，總共包含了 43 所大學。

(標題為自動計算有多少筆資料產生)

<a href="/blog/ISFSCAU-3.jpg" target="_blank">

![App image](/blog/ISFSCAU-3.jpg)

</a>

當點選進去後，可以看到包含了大專院校中英文名稱、公私立體制、電話、地址、學校簡介、地圖以及導向校內網站了解更多的按鈕與資訊。

(a) 點選地圖可以導入較大的地圖頁面。

(b) 點選 “前往網站” 按鈕可以導向外部該校的校務資訊頁面。

<a href="/blog/ISFSCAU-4.jpg" target="_blank">

![App image](/blog/ISFSCAU-4.jpg)

</a>

###### b. 貓貓圖片牆
裡面包含了總共 87 張首頁隨機的 GIF 相片，點選個別 GIF 的圖片後可以看到大圖的 GIF 動畫圖片。

(搭配 2021/12/30 的上課教程製作)

<a href="/blog/ISFSCAU-5.jpg" target="_blank">

![App image](/blog/ISFSCAU-5.jpg)

</a>

> 參考資料[2] Collection view Controller 教學 搭配上課教程

> 參考資料[3] Timer 計時器教學

###### c. 碼表
可以進行計時碼表。 

(在進行鄭淑真老師的 APP inventor 期末專題錄音看到碼表想到的突然想做)

(a) 點選 “開始” 可以開始碼表計時的作業，點選之前無法按其餘兩個按鈕，點選後只能按
“停止” 按鈕

(b) 點選 “停止” 可以停下當下的計時作業，不會清空而是保留在當前秒數，點選後可以按
“開始” 或 “重來”

(c) 點選 “重來” 可以將目前計時進行歸零，點選過後只能按 “開始”

<a href="/blog/ISFSCAU-6.jpg" target="_blank">

![App image](/blog/ISFSCAU-6.jpg)

</a>

###### d. 紀念日
進入後會看到日曆與目前日期的顯示，左上角的 2022 年 1 月可點開選擇年分與月份，右側左右按鈕可以前往上一個月份或下一個月份。無法選擇目前日期之前的日期，按確認後可以計算還有幾天到達紀念日的日期。

> 參考資料[4] Date Picker 使用方式

<a href="/blog/ISFSCAU-7.jpg" target="_blank">

![App image](/blog/ISFSCAU-7.jpg)

</a>

###### e. BMI & BMR 計算器

> 參考資料[5][6][7] 介面參考/ 拉桿使用方法/Stepper 介紹

身高/體重拉桿可以調整數值。

年齡可以藉由按鈕 (Stepper) 增加或
減少目前年齡。

生理性別選擇後會出現打勾代表目前
選擇的是哪一種。

按計算後會跳轉至另一個介面，會計
算 BMI 並判斷是否超重顯示。

而 BMR 藉由身高、體重、年齡以及
性別去計算出一天的補充熱量消耗至
少要多少比較好。

<a href="/blog/ISFSCAU-8.jpg" target="_blank">

![App image](/blog/ISFSCAU-8.jpg)

</a>

###### f. 關於我
利用 Alert Action 跳出對話框介紹自己。

<a href="/blog/ISFSCAU-9.jpg" target="_blank">

![App image](/blog/ISFSCAU-9.jpg)

</a>

###### (III) 貓種類一覽
共收納 66 種貓咪，包括台灣本土米克斯貓(混種貓)，認識更多的貓咪種類吧！點選貓貓後會出現框框！Katzenrassen 是德文 “貓的品種” 的意思。

<a href="/blog/ISFSCAU-10.jpg" target="_blank">

![App image](/blog/ISFSCAU-10.jpg)

</a>

###### (IV) 關於本課課程
點選老師的頭像會導向本課堂老師的個人頁面。

<a href="/blog/ISFSCAU-11.jpg" target="_blank">

![App image](/blog/ISFSCAU-11.jpg)

</a>

#### 四、 實作程式架構 & 程式部分說明

###### I. UI/UX 設計，讓人感覺很舒服的色調。

<a href="/blog/ISFSCAU-12.jpg" target="_blank">

![App image](/blog/ISFSCAU-12.jpg)

</a>

###### II. 整體分支架構 (如附件構想圖)
###### III. 檔案說明

<a href="/blog/ISFSCAU-13.jpg" target="_blank">

![App image](/blog/ISFSCAU-13.jpg)

</a>

Catgif 內存放 61 個 GIF 的動畫圖檔，因為 Asset 只能存放靜態所以放在外面。

<a href="/blog/ISFSCAU-14.jpg" target="_blank">

![App image](/blog/ISFSCAU-14.jpg)

</a>

###### IV. 部分程式說明
(PASS，詳情在 PDF 報告檔，但太多了)

## Conclusions
在過程中遇到了許許多多的困難，因為 Swift 是大四現在這堂課才接觸到的語法，很像大雜燴所以拼拼湊湊的有的需要去查教材裡面到底怎麼運作。

而專題原本只有一個南部大專院校與關於本課程的介面，但後來突然想要加上貓貓的GIF於是誕生出了主頁的隨機貓貓娛樂性用的，而在這之後誕生出來的是想要加上 “關於我” 的介面看起來不會比較少內容。所以菜單就誕生出來了，而關於我的按鈕因為自己本身沒有什麼好介紹的就使用了上課所教的 Alert Action 進行極簡的自我介紹。但做完後菜單只有兩個按鈕真的非常的空虛，於是加上了一個貓的圖案，但是還是還是感覺很空曠，兩個按鈕一樣大小也真的很醜就很普通...

所以 “紀念日” 的按鈕誕生了，在過程中因為日期加減有很大的問題，不過最後跨過了那個難關。做完後三個按鈕還是怪怪的，於是乾脆就在菜單拉出了6個按鈕的排版設計感覺很好看!!(?) 所以又多做了 “BMI&BMR” 的按鈕，雖然知道這個並不能做但是練習完後就是想塞進去，但是剩下兩個不知道該放什麼好。而過了幾天在錄製鄭淑真老師的APP inventor課堂期末專題的錄音時，錄音過程發現了碼錶的功能好像不錯? 所以菜單方面又新增了一個碼錶，碼錶的製作搭配網路的課程很快就能理解於是飛速的就多了碼錶的功能。

在 2021 年 12 月 30 日禮拜四的 IOS 課堂時教了點選後跳出另一個視窗的評價練習，這時候我突然腦子靈光一閃，何不將它做成圖片點選跳出大圖呢? 於是我去找了 collection view controller 的使用方法再結合課堂所學的 cell identifier 去傳遞，成功實現了將主頁面的貓貓圖可以讓人不用點半天才能出現全部張數就可以看的方法。於是菜單部分就整個完成了。

在做完全部以後的 1 月 1 日因為太無聊所以又藉由 collection view controller 實作了一個貓貓血統的瀏覽介面，這種傳遞會越做越上手的感覺這一次實作整體非常的順利！如果有時間的話想再去學習課本上搜尋的功能去實作，而菜單與貓種的頁面中出現的是德文而非英文，因為目前在學習德文所以結合稍微註明了一下。

整體而言，期末專題是一個很好的自我學習方法，而過程會遇到許許多多的狀況，藉由自己去解決困難學到的知識是什麼都無法比擬的，而且越做有點越上癮想要做更多類型的，程式真的是會讓人上癮的東西呢！

## Reference

[1] GIF-Swift/iOSDevCenters+GIF.swift at master · kiritmodi2702/GIF-Swift

<https://github.com/kiritmodi2702/GIF-Swift/blob/master/GIF-Swift/iOSDevCenters%2BGIF.swift>

[2] 照片牆練習. 使用collection view controller建立 - Medium

<https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E7%85%A7%E7%89%87%E7%89%86%E7%B7%B4%E7%BF%92-8530b4555528>

[3] StopWatch Tutorial - iOScreator

<https://www.ioscreator.com/tutorials/stopwatch-tutorial>

[4] 選取日期時間UIDatePicker · Swift 起步走

<https://itisjoe.gitbooks.io/swiftgo/content/uikit/uidatepicker.html>

[5] BMI Calculator - 彼得潘的 Swift iOS App 開發教室 - Medium

<https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/bmi-calculator-9c06f49af50>

[6] 滑桿UISlider · Swift 起步走

<https://itisjoe.gitbooks.io/swiftgo/content/uikit/uislider.html>

[7] 步進器UIStepper · Swift 起步走

<https://itisjoe.gitbooks.io/swiftgo/content/uikit/uistepper.html>

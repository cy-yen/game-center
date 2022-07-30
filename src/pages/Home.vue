<template>
  <section class="flex justify-center">
    <img src="./../assets/images/ezgif-5-13b11b7b26.gif" alt="" />
  </section>
  <section class="text-center my-[20px] text-[15px] text-[#f6fbf9]">
    <p>全球區塊鏈TRC20-USDT競彩平台</p>
    <p>公平，公證，公開</p>
    <p class="mt-[20px]"><span>客服：</span> Diamond钻石哈希客服</p>
    <p><span>頻道：</span> Diamond钻石哈希聊天群</p>
  </section>
  <section class="mx-[2.5%] rounded-[19px] bg-[#f0f3f7] px-[8px] pb-[42px] mb-[20px]">
    <p class="text-[#1b1a1a] text-[15px] py-[16px] px-[13px]">游戏介绍</p>
    <ul class="w-full flex overflow-x-auto">
      <li
        v-for="(game, index) in gameList"
        :key="game.coin_address"
        class="min-w-[229px] h-[97px] rounded-[12px] text-12 bg-white px-[13px] py-[14px] flex justify-between mr-[36px] last:mr-0"
      >
        <img :src="getApiImage(game.game_ico)" width="64" height="64" alt="" />
        <div>
          <p>{{ game.game_name }}</p>
          <p class="my-[5px]">
            <span class="mr-[20px]">赔率</span><span class="text-[#25ac44]">{{ game.game_odds_num }}</span>
          </p>
          <p class="ml-[62px] mt-[10px] text-[#3a99ff]">立即投注</p>
        </div>
      </li>
    </ul>
    <section
      id="about"
      class="p-[16px] bg-white rounded-[19px] mt-[20px]"
      style="box-shadow: 0 1px 3px 0px hsl(0deg 0% 79% / 35%)"
    >
      <p class="text-[15px] leading-tight">開獎記錄</p>
    </section>
    <section
      id="about"
      class="p-[16px] bg-white rounded-[19px] mt-[20px]"
      style="box-shadow: 0 1px 3px 0px hsl(0deg 0% 79% / 35%)"
    >
      <p class="text-[15px] leading-tight">關於Diamond钻石哈希娱乐城</p>
      <p class="text-[23px] mt-[20px] text-[#1b1a1a80] leading-tight">基於區塊鏈交易產生的哈希值進行競猜遊戲平台</p>
      <p class="text-[27px] text-[#373737] mt-[22px] leading-tight">Diamond钻石哈希娱乐城</p>
      <img class="w-full" src="./../assets/images/logo-search-grid-1x.png" alt="" />
      <div class="flex flex-wrap justify-between">
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q1:什麼是區塊哈希值（BIock hash)?</dt>
          <dd class="text-[#373737]">
            區塊鏈從本質上講，它是一個共享數據庫，存儲於其中的數據或信息。具有不可偽造、全程留痕、可以追溯、公開
            透明、集體維護等特徵。
          </dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q2:什麼是區塊 鏈？</dt>
          <dd class="text-[#373737]">區塊哈希值是一段數據 的DNA,每個區塊哈希值都是唯一的、隨機的且不可破解的。</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q3:什麼是去中心化錢包？為什麼中心化錢包安全？</dt>
          <dd class="text-[#373737]">
            相對於私鑰掌握在第三方服務商手中的中心化錢包（交易所），去中心化錢包的私鑰則由用
            戶自己保存，資產存儲在區塊鏈上，用戶是真正的數字貨幣持有者，錢包只是幫助用戶管理鏈上資產和讀取區塊鏈數據的一個工具，所以也就無法控制丶竊取丶轉移你的資產。
          </dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q4:為什麼我會連續中獎或不中獎?</dt>
          <dd class="text-[#373737]">
            同時隨機事件會遵大數定律（在試驗不變的條
            件下，重復試驗多次，隨機事件的頻率近似於它的概率大數定律定義，在轉賬頻次不斷增加的情況下，中獎與不中獎的概率會趨於一個穩定值。所以請您繼續轉賬，隨著轉賬頻次增加則中獎總概率會提升。
          </dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q5:為什麼會延遲到賬？</dt>
          <dd class="text-[#373737]">
            由於區塊鏈技術為了保證資金的安全性，會進行多次覈算，比對，確認。所以計算速度慢，但是貴在安全。
          </dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">Q6:我該選哪一個USDT的類型選項</dt>
          <dd class="text-[#373737]">
            本平台是基於波場TRC20技術。所以幸運哈希的轉賬地址是屬於USDT-TRC20,您應該選擇USDT-TRC20；如果您選擇了其他類型，幸運哈希則無法收到您的USDT，這會造成您和幸運哈希雙方的損失。
          </dd>
        </dl>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useStore } from '../store'
import { gamecoinaddress } from './../api/index'

const store = useStore()
const gameList = reactive([])
onMounted(async () => {
  gameList.splice(0)
  const res = await gamecoinaddress({})
  gameList.push(...res.data)
})

const getApiImage = (_path) => store.imageServerPath + _path
</script>

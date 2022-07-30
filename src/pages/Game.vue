<template>
  <section class="text-center text-white text-[18px] font-bold pt-[44px]">
    <p>$0.000</p>
    <div class="text-[12px] mt-[10px]">
      <span>歷史中獎</span>
    </div>
  </section>
  <div class="px-[2.5%] mt-[20px] flex flex-col items-center">
    <img class="w-[95%]" src="./../assets/images/zhu.2a387254.png" alt="" />
    <div class="bg-[#f0f3f7] p-[15px] mt-[-8px] rounded-[10px] w-full mb-[20px]">
      <div class="flex justify-between text-[14px]">
        <div class="w-[45%] bg-white rounded-[10px] p-[10px]">
          <div class="bg-black/20 h-[130px]"></div>
          <p class="mt-[15px] pl-[10px]">本月投注</p>
          <p class="mt-[15px] pl-[10px]">$0.00</p>
        </div>
        <div class="w-[45%] bg-white rounded-[10px] p-[10px]">
          <div class="bg-black/20 h-[130px]"></div>
          <p class="mt-[15px] pl-[10px]">本月中奖</p>
          <p class="mt-[15px] pl-[10px]">$0.00</p>
        </div>
      </div>
      <p class="text-[14px] font-bold mt-[10px]">立即投注</p>
      <Carousel />
      <p class="text-[14px] font-bold">投注數據</p>
      <ul>
        <li class="flex justify-between items-center p-[10px] bg-white rounded-[10px] mt-[10px]">
          <div>
            <p class="font-bold text-[14px] my-[5px] leading-tight">$0.00</p>
            <p class="text-[13px] my-[5px] leading-tight">今日投注</p>
          </div>
          <div class="bg-[#d0cdf4] w-[41px] h-[41px] rounded-[100%] flex-center-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCNJREFUWEftmF1oHFUUx/9n5t7Z3aBg0lm0qNkNWCVFK9YmIlh90do0oZmN2tKqIG0VEVQEX4q+BUqeRJoHEcQXqw9CspvWGkF8KAoF0woqJVqVnbRqKjsboU2b3Zmde+RusmbzpY0b6lJ2H5b9OPfc3/2fe849dwh1/qI650MDsNYINRRcEwW33DW6kwy8S8AttTqsdTwDF1ipF0/92D2ifZVD3NE+OlkPcJXFacix8a71fwN2to9yrStf6/Ffj3eVxSu/VQNW/ljrCa/G33IcDcBFymlBVtxOq1IwaWeOE7CNGR+4eWdfZaJEy/CDZNLrBGMrwDbPTjcJ8AkKjYHsn73fVUMl4un9BDoA8L0EioERMPATCEenmQ55Xu+liv0qAD822+JWqSlq4HJB5d2cY2snieZ0lykpIwVZRLM1XvOVZWFGUOJiKeTuc/nUF2X7denDQtDLUhjzdnP2YVi2P3tRTXdMTT1zcaVcWGEPzgLGIgauFCuATMn4yC9Ri9qCgKEUHWHgZ0ARiB4QBm03TaDoq3HXS21stdP3C4NOWZJQDDivFN4n0GWQihDoKSnpDlZAEPKAm3MO1gzY2pLZKCXOmAYhCPh41nN6qkPZFs98a0naVAoZxZnSnTIidwsT/drG9/n5iSnnvYr9bfFjGywKz1qiDP99NudsqhkwEU93SdP4VEselPC26/W+Vg2YtEc+siT2KNZA2GYa2C0l9uvvxZAfPp9zvly0oEI0YkQKhXA666VurB3QHuqWQnyit55fUoMTudQrCwEzH1qS9mqgks/bYdIuS2BfGTgMt57L9X21CHAmFjGiM0VVyOac2JoBGqQV5MFszmkA/sNRtzSLE3Mhbig4t1H/pVlYqmCrPdxjCfOYTpLA58Nu3nl1pSQJirSDhNplCXruKpKkmM050ZqTJNmSeVxY9NlsmVHvuF7qpQVZaWeOSElPa6CghB4CdkqBF/RJ4wfq0crpUhmTjKevNEXM2ExRrQ3g+puGEk2W6QpB8H01lvVSnQsVTJ+OWMZmXah9X91jmsZjUtBb2iYIwoNuvm+gYq99xSzT1YW64OMH1+ttr1lB7SBpZ76JWHSfhlCKh8A4yUDIwGZh0rPSJH3UTWQ9p+1WO70hQsYZyzJEMVAzrHiQYfxBYCbwHimNDq1uEMwX/Zqbhdbm4YdMaXxuCYpirlmolALdLJRKHChFT2a93qP697Z1I/2G4DelIHDVFVxvE6VYH5m/KoSdE94Tk6tUsKzWsu3W7c3Dd5um8QYIj4BxMxF0q3KJiU+C+ZDr9Z1Y0G7Zmb0EHCDCFgA36PaMgN8UMBoo9P8+5Zz/D+1W9RTX7vMqQnztoKpnuj4A/x/tls664CSpv4s7Xxgb3zF/ca/7Rx/1EtblOBqP32qNTkPB617BvwCUDlFWXsWBnwAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </li>
        <li class="flex justify-between items-center p-[10px] bg-white rounded-[10px] mt-[10px]">
          <div>
            <p class="font-bold text-[14px] my-[5px] leading-tight">$0.00</p>
            <p class="text-[13px] my-[5px] leading-tight">今日中獎</p>
          </div>
          <div class="bg-[#d0cdf4] w-[41px] h-[41px] rounded-[100%] flex-center-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCNJREFUWEftmF1oHFUUx/9n5t7Z3aBg0lm0qNkNWCVFK9YmIlh90do0oZmN2tKqIG0VEVQEX4q+BUqeRJoHEcQXqw9CspvWGkF8KAoF0woqJVqVnbRqKjsboU2b3Zmde+RusmbzpY0b6lJ2H5b9OPfc3/2fe849dwh1/qI650MDsNYINRRcEwW33DW6kwy8S8AttTqsdTwDF1ipF0/92D2ifZVD3NE+OlkPcJXFacix8a71fwN2to9yrStf6/Ffj3eVxSu/VQNW/ljrCa/G33IcDcBFymlBVtxOq1IwaWeOE7CNGR+4eWdfZaJEy/CDZNLrBGMrwDbPTjcJ8AkKjYHsn73fVUMl4un9BDoA8L0EioERMPATCEenmQ55Xu+liv0qAD822+JWqSlq4HJB5d2cY2snieZ0lykpIwVZRLM1XvOVZWFGUOJiKeTuc/nUF2X7denDQtDLUhjzdnP2YVi2P3tRTXdMTT1zcaVcWGEPzgLGIgauFCuATMn4yC9Ri9qCgKEUHWHgZ0ARiB4QBm03TaDoq3HXS21stdP3C4NOWZJQDDivFN4n0GWQihDoKSnpDlZAEPKAm3MO1gzY2pLZKCXOmAYhCPh41nN6qkPZFs98a0naVAoZxZnSnTIidwsT/drG9/n5iSnnvYr9bfFjGywKz1qiDP99NudsqhkwEU93SdP4VEselPC26/W+Vg2YtEc+siT2KNZA2GYa2C0l9uvvxZAfPp9zvly0oEI0YkQKhXA666VurB3QHuqWQnyit55fUoMTudQrCwEzH1qS9mqgks/bYdIuS2BfGTgMt57L9X21CHAmFjGiM0VVyOac2JoBGqQV5MFszmkA/sNRtzSLE3Mhbig4t1H/pVlYqmCrPdxjCfOYTpLA58Nu3nl1pSQJirSDhNplCXruKpKkmM050ZqTJNmSeVxY9NlsmVHvuF7qpQVZaWeOSElPa6CghB4CdkqBF/RJ4wfq0crpUhmTjKevNEXM2ExRrQ3g+puGEk2W6QpB8H01lvVSnQsVTJ+OWMZmXah9X91jmsZjUtBb2iYIwoNuvm+gYq99xSzT1YW64OMH1+ttr1lB7SBpZ76JWHSfhlCKh8A4yUDIwGZh0rPSJH3UTWQ9p+1WO70hQsYZyzJEMVAzrHiQYfxBYCbwHimNDq1uEMwX/Zqbhdbm4YdMaXxuCYpirlmolALdLJRKHChFT2a93qP697Z1I/2G4DelIHDVFVxvE6VYH5m/KoSdE94Tk6tUsKzWsu3W7c3Dd5um8QYIj4BxMxF0q3KJiU+C+ZDr9Z1Y0G7Zmb0EHCDCFgA36PaMgN8UMBoo9P8+5Zz/D+1W9RTX7vMqQnztoKpnuj4A/x/tls664CSpv4s7Xxgb3zF/ca/7Rx/1EtblOBqP32qNTkPB617BvwCUDlFWXsWBnwAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Carousel from './../components/Carousel.vue'
</script>

<template>
  <section class="text-center text-white text-[18px] font-bold pt-[44px]">
    <p>$0.000</p>
    <div class="text-[12px] mt-[10px]">
      <span>{{ $t('歷史中獎') }}</span>
    </div>
  </section>
  <section class="mt-[10px] mb-[20px] flex flex-col items-center">
    <div class="bg-[#f0f3f7] p-[15px] rounded-[10px] w-full">
      <section class="inline-block bg-white p-[10px] rounded-[5px] w-[82px]">
        <div class="w-[62px] h-[62px] bg-[#d0cdf4] flex-center-center rounded-[10px]">
          <img
            class="w-[26px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAe5JREFUeF7t27tNA0EUheEzMSBEE9RABZBDNdixcTVQABI5JSCaQDJOYZBtERj5od1/LY/QT8wZ7/04y8OXLfEDCRSUNhwBYQkEFBAKwLgNFBAKwLgNFBAKwLgNFBAKwLgN/JeA9/UyJdOUXC/nq3lOzTjT8gbnHTzeXgNXeK8pufgz7Ue+c5VpeR9cARzYHuCoPqbkduNMNU95KHdg3sGj7QGO62eS0y2TzjMpZ4MrgANbBKw755mUpq65qYtZwo2rgOCOEBDh2UDMZwMxod8DIaGAAkIBGLeBAkIBGLeBAkIBGLeBAkIBGLeBAkIBGLeBAu4XWN+abXv7ff85x/2M+RDbvu7vSG/fmh2Xo/+ro21fd8BdW7P+Qxw3CbZ93QF3b82OC9H/1Xtv+wRcoc8yKed9/LsDeguvOXcH9IcIBFzEf3+NSW5SctKn+g1kZql5Sc2I/NNS9wYeenL/EoHCAgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBgoIBWDcBmLAXY+79t7fwqvaGm9vqeQD1/Br7SP/EHARX987fw2xvx3gqjYe0d4tfKhJD3SugBBWQAGhAIzbQAGhAIzbQAGhAIzbQAGhAIzbQAGhAIzbQAGhAIz/ACsHzVFgmxSDAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <p class="text-center text-[13px]">{{ $t('邀请好友') }}</p>
      </section>
      <div class="mt-[26px]">
        <div class="flex justify-between text-[14px]">
          <p class="font-bold">{{ $t('投注數據') }}</p>
          <p>{{ $t('查看明细') }}</p>
        </div>
        <div class="bg-white p-[15px] rounded-[5px] mt-[10px] flex items-center justify-between">
          <div class="flex">
            <div class="w-[44px] h-[44px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[20px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABVRJREFUeF7t3G9oG3UYB/Dvc0m3uVXnoEPUWZy4NqkMdWlTfTUVmbm03dQOweG/F2qR4jvnwE4soqiICAVhCkNxDqTTKXRNtk6d/3WXRBGll8ap4L8XU6jWOifm7pFka5cmae4uvxT9pb+8zfO95PnkuT857o6gXkICJJRWYShAwSFQgApQUEAwriZQAQoKCMbVBCpAQQHBuJpABSgoIBhXE1hLwHBgtIVJe4KATQAaBZddL/FpBsZsKzuQyvSki5uancAcHog+BWhVvXRe4z4mwfZVRrorU7jcWcCOYPx1Am6u8YfW1eIY2J8w9d6ygOFg/A+12jr+3tOGqZ89HyA7xlUBDFOfs+M9sw0MxhWgiwHxDFgccPEZdVESnmegFKDLn1cBuoSar0wBKkBBAcG41BPY3hrfrBE/O2tA9J1h6tcLmniKSw0YDoxuA2l7CzrOGKbe6klAsFgBKkA1gZ5nIBRKNvhOHO8C6B4A0YIFTIPxIqCNLU8vOfgurs16XrjHgHSrcHtgtFcjLbfjuKhSrwz8wOCdSTP6skcTT+VSAXYE4zsJeBTwcKkJ82vWlHVn6ueeE55kXBZLAxhuid0IH+33hDeLwAcMM9rj0sRTmSSAg1pHIPw1EV3iqbtTxVnbwpZkRo9VkXWMSAHYHhi5RiP/kbLdML8DTdsHm38HcTOAmwDqLDi4vs8Yj+xylKiyQArAcGtsABo9VqbHDwwzshGgOeco21tjWzUNLzBjdyId3V6ljauYHICB+C4Q+oo7YuZHEulobqdS8gq1HW5OjX/0IzBou5KoskgKwI5A/Hki3FsCCLySMPXbq+y9JjEpAMPB2A6AniydQNgA70ik9WeKV+Oa6LhYiBSAnZfF2myLviKa5/iPkST4Bo6mN4256LmmJVIA5jruCMb3EHCbQ/efAPS4YUZGa6pUYWHSALa1HWlcwSffI2CDEw4zPraJ7k+Zkc+cakXflwYw12jnpbFzuIFeOnWs5/jKMuPhRFov2XY6Jj0USAU401f+RCq0p0BY46LXpw1Tf9BFXVUlUgLmOg1dMLLct9LfDyCH01Spe2benEhHR6oScghJCzjTV261thtoOzEeAGFZuX4Z+Dxh6o7bzmqApQecaXrDusNBvz/7JoCWchB/W9k1X2R6fqoGqVKmbgDzO5ng2DrmrAkiX3HTDHtjwux6f1EDrm8+sOrL77snK05EIP4tCGuLayzbui410V3+jI6AqjQT2B4YvZVAQ2DuT0x0DZfrOXes2Gif/KXcttCyssFyl94K2OWjUgCGWkaaNM0/ToTVpxv+EDaGyOJDR49Fp/J75eDB833MQyBsLV196beEOdUE3GKJghXnpQAMB2J7QbStBIZhE+E4M3xE+UOZsncT2LB3J82uu2uNJ8UEhgOHukF29cdwzH9ZWaxPHYt+s0gB41cDGHb5r2OOETNstumuZCayZyHwpJjA3Je84uI3zm04a+kgMfXNd7BcBmgSNvqMCX3fQuFJAzgD0Ln2rfN42T93ANQLcAiAvwiHmTFBwKuWnX0ulen5dSHxpAMsxGhbPdzY2NTYX3SmWl2d5WVi1OVtXrTK1CpABXhG4L+4T+TylpELl2pLrpz5Fhbzn6mJSM3/71b6naX4JyI4qAsaV4CCvArw/wIo+D3qLu75Xrm6ExBsqBKguuHaCZcxZaT1lYVl6pZ/J7SC9yvf8q8eOuFEWfmhE/kzEKcfewLgBgJWOC1xUbzPmGLC27aVfajiY08WBcYCNKmeXCSIqgAVoKCAYFxNoAIUFBCMqwlUgIICgnE1gQpQUEAwriZQAQoKCMb/BYYv/G97DZLtAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div class="ml-[10px] border-r border-r-[#d3d3d3] w-[135px]">
              <p class="font-bold text-[14px]">{{ $t('投資') }}</p>
              <p class="mt-[5px] text-[13px]">{{ $t('本月投資') }}</p>
            </div>
          </div>
          <span class="grow ml-[15px] font-bold text-[14px]">$0.00</span>
        </div>
        <div class="bg-white p-[15px] rounded-[5px] mt-[10px] flex items-center justify-between">
          <div class="flex">
            <div class="w-[44px] h-[44px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[20px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABVRJREFUeF7t3G9oG3UYB/Dvc0m3uVXnoEPUWZy4NqkMdWlTfTUVmbm03dQOweG/F2qR4jvnwE4soqiICAVhCkNxDqTTKXRNtk6d/3WXRBGll8ap4L8XU6jWOifm7pFka5cmae4uvxT9pb+8zfO95PnkuT857o6gXkICJJRWYShAwSFQgApQUEAwriZQAQoKCMbVBCpAQQHBuJpABSgoIBhXE1hLwHBgtIVJe4KATQAaBZddL/FpBsZsKzuQyvSki5uancAcHog+BWhVvXRe4z4mwfZVRrorU7jcWcCOYPx1Am6u8YfW1eIY2J8w9d6ygOFg/A+12jr+3tOGqZ89HyA7xlUBDFOfs+M9sw0MxhWgiwHxDFgccPEZdVESnmegFKDLn1cBuoSar0wBKkBBAcG41BPY3hrfrBE/O2tA9J1h6tcLmniKSw0YDoxuA2l7CzrOGKbe6klAsFgBKkA1gZ5nIBRKNvhOHO8C6B4A0YIFTIPxIqCNLU8vOfgurs16XrjHgHSrcHtgtFcjLbfjuKhSrwz8wOCdSTP6skcTT+VSAXYE4zsJeBTwcKkJ82vWlHVn6ueeE55kXBZLAxhuid0IH+33hDeLwAcMM9rj0sRTmSSAg1pHIPw1EV3iqbtTxVnbwpZkRo9VkXWMSAHYHhi5RiP/kbLdML8DTdsHm38HcTOAmwDqLDi4vs8Yj+xylKiyQArAcGtsABo9VqbHDwwzshGgOeco21tjWzUNLzBjdyId3V6ljauYHICB+C4Q+oo7YuZHEulobqdS8gq1HW5OjX/0IzBou5KoskgKwI5A/Hki3FsCCLySMPXbq+y9JjEpAMPB2A6AniydQNgA70ik9WeKV+Oa6LhYiBSAnZfF2myLviKa5/iPkST4Bo6mN4256LmmJVIA5jruCMb3EHCbQ/efAPS4YUZGa6pUYWHSALa1HWlcwSffI2CDEw4zPraJ7k+Zkc+cakXflwYw12jnpbFzuIFeOnWs5/jKMuPhRFov2XY6Jj0USAU401f+RCq0p0BY46LXpw1Tf9BFXVUlUgLmOg1dMLLct9LfDyCH01Spe2benEhHR6oScghJCzjTV261thtoOzEeAGFZuX4Z+Dxh6o7bzmqApQecaXrDusNBvz/7JoCWchB/W9k1X2R6fqoGqVKmbgDzO5ng2DrmrAkiX3HTDHtjwux6f1EDrm8+sOrL77snK05EIP4tCGuLayzbui410V3+jI6AqjQT2B4YvZVAQ2DuT0x0DZfrOXes2Gif/KXcttCyssFyl94K2OWjUgCGWkaaNM0/ToTVpxv+EDaGyOJDR49Fp/J75eDB833MQyBsLV196beEOdUE3GKJghXnpQAMB2J7QbStBIZhE+E4M3xE+UOZsncT2LB3J82uu2uNJ8UEhgOHukF29cdwzH9ZWaxPHYt+s0gB41cDGHb5r2OOETNstumuZCayZyHwpJjA3Je84uI3zm04a+kgMfXNd7BcBmgSNvqMCX3fQuFJAzgD0Ln2rfN42T93ANQLcAiAvwiHmTFBwKuWnX0ulen5dSHxpAMsxGhbPdzY2NTYX3SmWl2d5WVi1OVtXrTK1CpABXhG4L+4T+TylpELl2pLrpz5Fhbzn6mJSM3/71b6naX4JyI4qAsaV4CCvArw/wIo+D3qLu75Xrm6ExBsqBKguuHaCZcxZaT1lYVl6pZ/J7SC9yvf8q8eOuFEWfmhE/kzEKcfewLgBgJWOC1xUbzPmGLC27aVfajiY08WBcYCNKmeXCSIqgAVoKCAYFxNoAIUFBCMqwlUgIICgnE1gQpQUEAwriZQAQoKCMb/BYYv/G97DZLtAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div class="ml-[10px] border-r border-r-[#d3d3d3] w-[135px]">
              <p class="font-bold text-[14px]">{{ $t('中獎') }}</p>
              <p class="mt-[5px] text-[13px]">{{ $t('本月中獎') }}</p>
            </div>
          </div>
          <span class="grow ml-[15px] font-bold text-[14px]">$0.00</span>
        </div>
        <p class="text-center mt-[26px] text-[18px] font-bold leading-tight">{{ $t('推廣數據') }}</p>
        <p class="text-center text-[14px] mt-[5px] leading-tight">
          {{ $t('邀請好友參與投注、即可獲得豐厚獎勵') }}
        </p>
        <div class="flex flex-wrap justify-between">
          <div class="w-[calc(50%-10px)] mt-[10px] bg-white p-[15px] rounded-[10px] flex flex-col items-center">
            <div class="w-[62px] h-[62px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[26px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAs9JREFUeF7tnDtvE0EUhc+sNrxEwg/AEkZKgcLDjkRoSUVhXEEFVJRUJAgkqkhQIUWC0NBClVTQsKGgoyVIJglCIEWKkcwPwBZPhx20EhRE2F7PIc7s5rj1nJnZb87du75aXwN9KAKGUksMASRNIIBbDXB09Nnu/RvxFWPNJSA+CmP2kmt6KbdAy1i8j008/zkMH6ytVb6n2WhXB5YKTw8GoYkAlNNMlqMxqz/bQWXlY6XR65o6AkycN7xhXwL2RK9J8vm9WWmF5lQvJ3YEWC5GUwa4l0846a7KAtOv69W5bqM7Ahw/FC3B4GS6pXI6yuJV7UN1wg1gMfoCIJcJo4/j/lqrV/e5ArR9LJTbobV6tWui7RzCxUgAAQggGRsCKIAkAVIuBwogSYCUy4ECSBIg5XJgVgAO7Qpw9eYRVM8VMHJgiNz21sibn9qInjRw/847tH/EqRYZmAOvz4zh4uXDqTa13YMWHq5j9vbbVNsYGMAXy2cwPOKn8zaTajXbOF16LoCpCPxjUBLKk2XPAN6YGcOFrITwo3XM3vIshJMkMpUkkfMFb0M5Cd3ocQNzPiYR13DyXTewJOI7CNf9CaArud86ARRAkgAplwMFkCRAyuVAASQJkHI5MCsAVQ/cdFLjfb6ZoHogCVD1wB0EUPVAMjEsqB7oRlD1QDdulErPgRQ+vR9I4hNAAaQJkBPoHiiAJAFSLgdmBaCqMeRvYVVjSICqxuwggKrGkIlB1RhHgKrGOIJjZHoOZOjp35okPQEUQJ4AOYPugQJIEiDlcqAAkgRIuRwogCQBUi4HbiNAtX4CiNZPaj4GMM3HSsXF6QD2LhkBmZbHMNeW62e7tgDs0YAxXgJwPNMU3De/2gqDCecGjMm6agFKtAD9c3B/NaE19hiAPe6H6rXyG6x5Ywzmm6H5P01ovb5cTzanPtLkQQigAJIESLkcKIAkAVL+CwFt3WCsnH8JAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <p class="text-[18px] mt-[15px] mb-[5px]">0</p>
            <p class="text-[14px]">{{ $t('渠道投注') }}</p>
          </div>
          <div class="w-[calc(50%-10px)] mt-[10px] bg-white p-[15px] rounded-[10px] flex flex-col items-center">
            <div class="w-[62px] h-[62px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[26px]"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <p class="text-[18px] mt-[15px] mb-[5px]">0</p>
            <p class="text-[14px]">{{ $t('渠道中獎') }}</p>
          </div>
          <div class="w-[calc(50%-10px)] mt-[10px] bg-white p-[15px] rounded-[10px] flex flex-col items-center">
            <div class="w-[62px] h-[62px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[26px]"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <p class="text-[18px] mt-[15px] mb-[5px]">0</p>
            <p class="text-[14px]">{{ $t('渠道盈利') }}</p>
          </div>
          <div class="w-[calc(50%-10px)] mt-[10px] bg-white p-[15px] rounded-[10px] flex flex-col items-center">
            <div class="w-[62px] h-[62px] bg-[#d0cdf4] rounded-[100%] flex-center-center">
              <img
                class="w-[26px]"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <p class="text-[18px] mt-[15px] mb-[5px]">0</p>
            <p class="text-[14px]">{{ $t('渠道人數') }}</p>
          </div>
        </div>
      </div>
      <div class="mt-[15px] bg-white p-[15px] rounded-[10px]">
        <p class="text-[14px]">{{ $t('關於我們') }}</p>
        <p class="text-[19px] my-[15px] leading-tight font-bold">{{ $t('我們追求極簡流程快速派彩') }}</p>
        <p class="text-[14px]">We are at our best</p>
        <img class="w-[239px] m-auto" src="./../assets/images/qian.44806549.png" alt="" />
        <p class="text-[14px]">
          {{ $t('控制器.text') }}
        </p>
        <button
          class="mt-[10px] bg-[#00b4ff] text-white text-[11px] leading-[26px] px-[10px] rounded-[20px] active:bg-[#2979ff] active:outline-none"
        >
          {{ $t('查看更多') }}
        </button>
      </div>
    </div>
  </section>
</template>

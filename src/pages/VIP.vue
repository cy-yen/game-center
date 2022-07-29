<template>
  <section class="px-[2.5%] relative">
    <img class="h-[166px] w-full" src="./../assets/images/photo1651562358.jpeg" alt="" />
    <img
      class="absolute w-[124px] h-[124px] rounded-[100%] left-[50%] translate-x-[-50%] bottom-[-50px]"
      src="./../assets/images/logo6.png"
    />
  </section>
  <section class="w-[95%] bg-[#f0f3f7] p-[15px] rounded-[10px] mt-[90px] ml-[2.5%]">
    <div class="bg-white text-[#333333] p-[15px] rounded-[10px]">
      <p class="font-bold text-[14px]">$</p>
      <div class="h-[7px] bg-[#3427b6] mt-[20px]"></div>
    </div>
    <div class="bg-white text-[#333333] p-[15px] rounded-[10px] mt-[10px]">
      <p class="text-[14px]">设置</p>
      <ul>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex justify-center items-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">語言設置</p>
            <p>選擇首選語言</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex justify-center items-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1tJREFUWEftmMtPE1EUxr9zZ4oQ8YUCbRWfhVbURI3PP8AYo7QEjXGBbozRuDM+lkYXbtSVGyNx4cKFNgHpYDRxa+JG4ysqHXwGcUZM1SigFqZzzAwYialwp9WGhM5ucs8536/fvff0ziVM8IcmOB/yBIwrYX/pdgg0EWMDA9UEWEzoIebbQxm+9PJD4518TMgZMFTVtlFV1BYQlo8BwGxzh7CsA52p7WYuoDkB1gba9yskzgEo+SXKzDZAKSKozJhF9Ht2GNzDEJu6jIakV0jPgHV+bQsRXyci4Ygx4xVsPsWK0LqMhhTAtCjQNr8ESjMgjhFhuhsHvBWDQ+u9OukJcPGs+Axf2ZRnBAqOwN3MpL/uevGp+Ws2Z5ZUJkKqSh1EiIzEt+pmdIcXFz0Bhv2JoyTotCvA/KzfTK/pwc7vYwkuqWiv8ZWKhwAqmB0jeZ1uxu7JQnoCjAS0JyAsc4rbtr21633jDRmhiF87AoEzw1PN53UjdlAmz4mRBqyb1jGHyvnDyOI3ksb9GuCELSNUNzs+l0qmdDvrloGkbkSXyuR5AqytvLZS8SkPRtZSQjejjbIiTlwkoJkg+MHoT5o/ZgI7MzL50g4CcSVUVb4QSGMw7fvU/WXbZxmBXzHhoNZJcDcL8yDP0FOxPpl8D4Ay5f4eUwTMzz9g8jkYrtYWsfsPkIHTHQgKg5gdJzOwnYbLRArDcnoVu2MEp4tYABTOuO/K8DsJFozLICxwNknG4s2kktvghWXbn6nsUW/v5oFss5R1k4T88UqVSl+DMDXfqZXJZ8Zd3YyukwaMVLevgCIeyxT/RzHfkkY0qxlZHRwNyIxbBLz5RyB/lOG1IFoFIHdAG7Sry2i4+j8AI8HEWYAOFwFzdbegDtb5tbVC0B7YzH0D1sl3fU0fxwMvKGAkkNgHoha3T7JV/9xs6iwCOg7I7uKig6PXy+hGXXSwUI06HNT2EnDR/WYZ5IieiukTahfPQ7zMF1CqiHz8ymh4C5B7NBvrKWgfHA8m2/jkAGTm3QNKujUXh8bLKc+UngLhUF6nGTAs9nADMR7U6HFybkIIqmfAkL+9XhXiqRexvGIZA0kzWi595Acu+MLBwGUCVuclLJfsXHpd0Y3YcQ+AcpULEVWwq49cf8xPWVAQR2PkoscAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">安全設置</p>
            <p>設置登入密碼、提現密碼</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex justify-center items-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAThJREFUWEftmD1uwkAQhWdwGyQ6hPtg34BQpw5YymUoKeE2GGpqkhs4PzWILlLcBfMQthaQ+NF6jcMijeudN8/f7M5qlsnyjy33R2KwaIXuh6Dnhh6Bh0x4JuaHon+eOx6IQTwFc+9z/hKp+JRg0534TJgxUS238JUDQPQD4rYymRr0GuMRM3WvnMtYDqDwY9EJtgKpQb8R/qqyrpK/9vfy9c1Y3TDwsT5qOU4lywvE0aJb3Rt0x1C60bxzs4Pjn/CRERSDenXXIkjEfT25MlZhl1tttaMSl5HWRFMMmlA7jBGCJRK0/BTLTXKh9lqNWggKwaL9QwgKwYzA2btY2ozRITmY6pJk/fS1DN5L3GonpS9OddbPxda/LGyZpyaBgZVvM/+93/Lku9krgq5JMahL6tw6IViU4AZdWekpbUrCBgAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">投注錢包</p>
            <p>添加、綁定投注錢包地址</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex justify-center items-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">退出</p>
            <p>退出App</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

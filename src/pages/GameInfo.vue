<template>
  <section class="h-[44px] text-[15px] text-white flex items-center px-[15px]">
    <i class="w-[44px] h-[44px] ml-[-15px] flex-center-center" @click="$router.push('/home')">
      <van-icon name="arrow-left" class="text-[30px]" />
    </i>
    遊戲介紹
  </section>
  <section class="p-[10px]">
    <div class="p-[20px] bg-[#4b3aec] rounded-[20px] mt-[10px]">
      <div class="h-[240px]"></div>
    </div>
    <div class="p-[20px] bg-[#4b3aec] rounded-[20px] mt-[10px]">
      <p class="my-[10px] text-[26px] text-white">{{ currentGame.game_name }}</p>
      <p class="text-white text-[18px]">赔率{{ currentGame.game_odds_num }}</p>
      <div class="">
        <span class="text-white text-[14px]">{{ currentGame.coin_address }}</span>
      </div>
    </div>
    <div class="p-[20px] bg-[#4b3aec] rounded-[20px] mt-[10px]">
      <p class="my-[10px] text-[26px] text-white">游戏规则</p>
      <div v-html="currentGame.game_desc" class="text-white leading-[2] text-[14px]"></div>
      <div
        class="flex mt-[15px] justify-between items-center text-white text-[14px] border-b-[0.5px] botder-white pb-[3px]"
      >
        <div class="flex">
          <img
            class="w-[20px] h-[20px] mr-[10px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAFLElEQVRoQ9WYW2yUVRDHZ87udlva77K1S5qmmgJab4Qg4cnEBBIh0nR3W1GMlwcfNYomCGrLJQYRxQQ1PhgfTHwwRlKUdltKxISLifqgUYMJAiJiTFMprd3vUlrZst84u1jtdc+3+329cN42Z+Y/v2/2nDlnDsINOtBvbmqDgF2q7SGAR1m7N0j4THnC+NHvOL6DW0ltG0O/OQ70kgqhekwM2H7C+wr+15FKNTia+Z0BI+MhCWGHHjdfW7Dgdqe23SHYMwWQYDCNobqoj1n3LeN0IlphWelstm+aLrNI0KI2mW/4lXXfwI1OrZXh8i2HAVUtWYJr+4f8gPcFnJJVigWjvzFQVT4oDvaSmjDHb9yiv8EXcK4kL3Il2eeCol8V5XUY6x12YZvXxDP45bZoRTicvijL9hgFAm5VE8b+eQcvINs5Vs5UnxJVluC9PSNe4D1lnNpqy6ywna0kiwuCQNyixY23C/KZZOwJ3O7SdzgOvVooACJcymTwzkizYRTq+/+SK8CTXgFhr1AiJPBWQNEIQK3sLgqQ+M+UN/NPAsV2Rzg/a8O1PbjpdLoQnSkZJ+JleFSNGCPilqCg2/i4XsorczlD3gwEy3i2mm2ChQSR2PI3gMm6Fxgmu+zOEdBZ/n1ODTgXYcPQAP9DWZsJIwduJtVsBp/jA2QVEdWyYQ1bhnyEK0qK4TLM0cuV6A8H4Rck/ExLpLpzm5zadd0WxF9Z4AYrCsW7E3/EC1xO38KhZOSJDDgfeZecIwWE81rcrMdUh94skA7NUVjPYXj5nOJrw0rMVYpV+jFe22s8q86yAC/nkYDABiVmnMxtzusNgHOYK8d9sxy7aHkGHeHkNmtN1tHc5hxToq6aRRZd6eDCs65o9dlzHCYBcT1mHhsLMaGO0xEIW6P6p5x5PlwWzLAFYkyJG1+OJ5p6ALVBiVWqfciZf2wBoNsoRIMaS301mWXau0r2icEqUT8AxCfnEd4KBZwNixrtb6ZjyHvJMru098CBp+cB3ggirS+PW9/NFFt6O7ST+jsO0PNzCJ/ijXg/b8Qf8sWUgmed7U79XYdo8xzA2wy9RgY9oRzmg+rnZjgMo318AJTNJjxncT+filvdxHCVcWq7u8QK9/SxoO5GtFgbTkyrnjBfd+PvCvzvw9rSqxm44EbQkw3CJ3yBclWGXYFbXZEYOU6nJyg3zgjfM/hqd6YurIyk1sJfuNeFqVeTITUUrcKGX6/KhFxl3OzUDvBJ+ohMzI95gYHlSnzwtEzLHXhSy9bUe2Rifsw7gBsjCUPaH0jB6URdqWWnBjjj5X6AyTQE4C4lYUifPKTg3Nqt4NbulCygX/Mo4KAaMzfJ9KTgRof2EHf9B2VCE+YRrvDvr4Gwlq/IdxXoe4Yri9RHCm526bvBoZ0ug3M1wPeD4eC+8gcG/sy+0diHI41AtJe7F36bkQ/u4kcUNbRY9o4uBedHzUN8ojVLQl5j4I8pQLv1RjP7Tj5hXL8m64/zY8gunlgmw+e+cmVFzMi7PKXgZlI7y4FunykYZyiJ/JTmpoT922E9xcvnZdarnklTCHhYiZncic08pOCc8TOc8TsmS7DjcaDATrVpcNqLfr6gxM25eS2zmTW2cLWqnKIt8EE1ZrR7A2/Xm0DQAYYP54QQvuVXzhYlbh6X/eWyefNztRLTuI33wrNsW5GTRzip1JjrcTWMegLPOlvdSj05uC4AeL4iZn4hAyp0/nJ3tLosk47zQ2FKU812XAu8Z/IP6VKRCczX/A0L/g9I0LQ+/FMwawAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            class="w-[20px] h-[20px] mr-[10px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAFLElEQVRoQ9WYW2yUVRDHZ87udlva77K1S5qmmgJab4Qg4cnEBBIh0nR3W1GMlwcfNYomCGrLJQYRxQQ1PhgfTHwwRlKUdltKxISLifqgUYMJAiJiTFMprd3vUlrZst84u1jtdc+3+329cN42Z+Y/v2/2nDlnDsINOtBvbmqDgF2q7SGAR1m7N0j4THnC+NHvOL6DW0ltG0O/OQ70kgqhekwM2H7C+wr+15FKNTia+Z0BI+MhCWGHHjdfW7Dgdqe23SHYMwWQYDCNobqoj1n3LeN0IlphWelstm+aLrNI0KI2mW/4lXXfwI1OrZXh8i2HAVUtWYJr+4f8gPcFnJJVigWjvzFQVT4oDvaSmjDHb9yiv8EXcK4kL3Il2eeCol8V5XUY6x12YZvXxDP45bZoRTicvijL9hgFAm5VE8b+eQcvINs5Vs5UnxJVluC9PSNe4D1lnNpqy6ywna0kiwuCQNyixY23C/KZZOwJ3O7SdzgOvVooACJcymTwzkizYRTq+/+SK8CTXgFhr1AiJPBWQNEIQK3sLgqQ+M+UN/NPAsV2Rzg/a8O1PbjpdLoQnSkZJ+JleFSNGCPilqCg2/i4XsorczlD3gwEy3i2mm2ChQSR2PI3gMm6Fxgmu+zOEdBZ/n1ODTgXYcPQAP9DWZsJIwduJtVsBp/jA2QVEdWyYQ1bhnyEK0qK4TLM0cuV6A8H4Rck/ExLpLpzm5zadd0WxF9Z4AYrCsW7E3/EC1xO38KhZOSJDDgfeZecIwWE81rcrMdUh94skA7NUVjPYXj5nOJrw0rMVYpV+jFe22s8q86yAC/nkYDABiVmnMxtzusNgHOYK8d9sxy7aHkGHeHkNmtN1tHc5hxToq6aRRZd6eDCs65o9dlzHCYBcT1mHhsLMaGO0xEIW6P6p5x5PlwWzLAFYkyJG1+OJ5p6ALVBiVWqfciZf2wBoNsoRIMaS301mWXau0r2icEqUT8AxCfnEd4KBZwNixrtb6ZjyHvJMru098CBp+cB3ggirS+PW9/NFFt6O7ST+jsO0PNzCJ/ijXg/b8Qf8sWUgmed7U79XYdo8xzA2wy9RgY9oRzmg+rnZjgMo318AJTNJjxncT+filvdxHCVcWq7u8QK9/SxoO5GtFgbTkyrnjBfd+PvCvzvw9rSqxm44EbQkw3CJ3yBclWGXYFbXZEYOU6nJyg3zgjfM/hqd6YurIyk1sJfuNeFqVeTITUUrcKGX6/KhFxl3OzUDvBJ+ohMzI95gYHlSnzwtEzLHXhSy9bUe2Rifsw7gBsjCUPaH0jB6URdqWWnBjjj5X6AyTQE4C4lYUifPKTg3Nqt4NbulCygX/Mo4KAaMzfJ9KTgRof2EHf9B2VCE+YRrvDvr4Gwlq/IdxXoe4Yri9RHCm526bvBoZ0ug3M1wPeD4eC+8gcG/sy+0diHI41AtJe7F36bkQ/u4kcUNbRY9o4uBedHzUN8ojVLQl5j4I8pQLv1RjP7Tj5hXL8m64/zY8gunlgmw+e+cmVFzMi7PKXgZlI7y4FunykYZyiJ/JTmpoT922E9xcvnZdarnklTCHhYiZncic08pOCc8TOc8TsmS7DjcaDATrVpcNqLfr6gxM25eS2zmTW2cLWqnKIt8EE1ZrR7A2/Xm0DQAYYP54QQvuVXzhYlbh6X/eWyefNztRLTuI33wrNsW5GTRzip1JjrcTWMegLPOlvdSj05uC4AeL4iZn4hAyp0/nJ3tLosk47zQ2FKU812XAu8Z/IP6VKRCczX/A0L/g9I0LQ+/FMwawAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            class="w-[20px] h-[20px] mr-[10px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAFLElEQVRoQ9WYW2yUVRDHZ87udlva77K1S5qmmgJab4Qg4cnEBBIh0nR3W1GMlwcfNYomCGrLJQYRxQQ1PhgfTHwwRlKUdltKxISLifqgUYMJAiJiTFMprd3vUlrZst84u1jtdc+3+329cN42Z+Y/v2/2nDlnDsINOtBvbmqDgF2q7SGAR1m7N0j4THnC+NHvOL6DW0ltG0O/OQ70kgqhekwM2H7C+wr+15FKNTia+Z0BI+MhCWGHHjdfW7Dgdqe23SHYMwWQYDCNobqoj1n3LeN0IlphWelstm+aLrNI0KI2mW/4lXXfwI1OrZXh8i2HAVUtWYJr+4f8gPcFnJJVigWjvzFQVT4oDvaSmjDHb9yiv8EXcK4kL3Il2eeCol8V5XUY6x12YZvXxDP45bZoRTicvijL9hgFAm5VE8b+eQcvINs5Vs5UnxJVluC9PSNe4D1lnNpqy6ywna0kiwuCQNyixY23C/KZZOwJ3O7SdzgOvVooACJcymTwzkizYRTq+/+SK8CTXgFhr1AiJPBWQNEIQK3sLgqQ+M+UN/NPAsV2Rzg/a8O1PbjpdLoQnSkZJ+JleFSNGCPilqCg2/i4XsorczlD3gwEy3i2mm2ChQSR2PI3gMm6Fxgmu+zOEdBZ/n1ODTgXYcPQAP9DWZsJIwduJtVsBp/jA2QVEdWyYQ1bhnyEK0qK4TLM0cuV6A8H4Rck/ExLpLpzm5zadd0WxF9Z4AYrCsW7E3/EC1xO38KhZOSJDDgfeZecIwWE81rcrMdUh94skA7NUVjPYXj5nOJrw0rMVYpV+jFe22s8q86yAC/nkYDABiVmnMxtzusNgHOYK8d9sxy7aHkGHeHkNmtN1tHc5hxToq6aRRZd6eDCs65o9dlzHCYBcT1mHhsLMaGO0xEIW6P6p5x5PlwWzLAFYkyJG1+OJ5p6ALVBiVWqfciZf2wBoNsoRIMaS301mWXau0r2icEqUT8AxCfnEd4KBZwNixrtb6ZjyHvJMru098CBp+cB3ggirS+PW9/NFFt6O7ST+jsO0PNzCJ/ijXg/b8Qf8sWUgmed7U79XYdo8xzA2wy9RgY9oRzmg+rnZjgMo318AJTNJjxncT+filvdxHCVcWq7u8QK9/SxoO5GtFgbTkyrnjBfd+PvCvzvw9rSqxm44EbQkw3CJ3yBclWGXYFbXZEYOU6nJyg3zgjfM/hqd6YurIyk1sJfuNeFqVeTITUUrcKGX6/KhFxl3OzUDvBJ+ohMzI95gYHlSnzwtEzLHXhSy9bUe2Rifsw7gBsjCUPaH0jB6URdqWWnBjjj5X6AyTQE4C4lYUifPKTg3Nqt4NbulCygX/Mo4KAaMzfJ9KTgRof2EHf9B2VCE+YRrvDvr4Gwlq/IdxXoe4Yri9RHCm526bvBoZ0ug3M1wPeD4eC+8gcG/sy+0diHI41AtJe7F36bkQ/u4kcUNbRY9o4uBedHzUN8ojVLQl5j4I8pQLv1RjP7Tj5hXL8m64/zY8gunlgmw+e+cmVFzMi7PKXgZlI7y4FunykYZyiJ/JTmpoT922E9xcvnZdarnklTCHhYiZncic08pOCc8TOc8TsmS7DjcaDATrVpcNqLfr6gxM25eS2zmTW2cLWqnKIt8EE1ZrR7A2/Xm0DQAYYP54QQvuVXzhYlbh6X/eWyefNztRLTuI33wrNsW5GTRzip1JjrcTWMegLPOlvdSj05uC4AeL4iZn4hAyp0/nJ3tLosk47zQ2FKU812XAu8Z/IP6VKRCczX/A0L/g9I0LQ+/FMwawAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            class="w-[20px] h-[20px] mr-[10px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAFLElEQVRoQ9WYW2yUVRDHZ87udlva77K1S5qmmgJab4Qg4cnEBBIh0nR3W1GMlwcfNYomCGrLJQYRxQQ1PhgfTHwwRlKUdltKxISLifqgUYMJAiJiTFMprd3vUlrZst84u1jtdc+3+329cN42Z+Y/v2/2nDlnDsINOtBvbmqDgF2q7SGAR1m7N0j4THnC+NHvOL6DW0ltG0O/OQ70kgqhekwM2H7C+wr+15FKNTia+Z0BI+MhCWGHHjdfW7Dgdqe23SHYMwWQYDCNobqoj1n3LeN0IlphWelstm+aLrNI0KI2mW/4lXXfwI1OrZXh8i2HAVUtWYJr+4f8gPcFnJJVigWjvzFQVT4oDvaSmjDHb9yiv8EXcK4kL3Il2eeCol8V5XUY6x12YZvXxDP45bZoRTicvijL9hgFAm5VE8b+eQcvINs5Vs5UnxJVluC9PSNe4D1lnNpqy6ywna0kiwuCQNyixY23C/KZZOwJ3O7SdzgOvVooACJcymTwzkizYRTq+/+SK8CTXgFhr1AiJPBWQNEIQK3sLgqQ+M+UN/NPAsV2Rzg/a8O1PbjpdLoQnSkZJ+JleFSNGCPilqCg2/i4XsorczlD3gwEy3i2mm2ChQSR2PI3gMm6Fxgmu+zOEdBZ/n1ODTgXYcPQAP9DWZsJIwduJtVsBp/jA2QVEdWyYQ1bhnyEK0qK4TLM0cuV6A8H4Rck/ExLpLpzm5zadd0WxF9Z4AYrCsW7E3/EC1xO38KhZOSJDDgfeZecIwWE81rcrMdUh94skA7NUVjPYXj5nOJrw0rMVYpV+jFe22s8q86yAC/nkYDABiVmnMxtzusNgHOYK8d9sxy7aHkGHeHkNmtN1tHc5hxToq6aRRZd6eDCs65o9dlzHCYBcT1mHhsLMaGO0xEIW6P6p5x5PlwWzLAFYkyJG1+OJ5p6ALVBiVWqfciZf2wBoNsoRIMaS301mWXau0r2icEqUT8AxCfnEd4KBZwNixrtb6ZjyHvJMru098CBp+cB3ggirS+PW9/NFFt6O7ST+jsO0PNzCJ/ijXg/b8Qf8sWUgmed7U79XYdo8xzA2wy9RgY9oRzmg+rnZjgMo318AJTNJjxncT+filvdxHCVcWq7u8QK9/SxoO5GtFgbTkyrnjBfd+PvCvzvw9rSqxm44EbQkw3CJ3yBclWGXYFbXZEYOU6nJyg3zgjfM/hqd6YurIyk1sJfuNeFqVeTITUUrcKGX6/KhFxl3OzUDvBJ+ohMzI95gYHlSnzwtEzLHXhSy9bUe2Rifsw7gBsjCUPaH0jB6URdqWWnBjjj5X6AyTQE4C4lYUifPKTg3Nqt4NbulCygX/Mo4KAaMzfJ9KTgRof2EHf9B2VCE+YRrvDvr4Gwlq/IdxXoe4Yri9RHCm526bvBoZ0ug3M1wPeD4eC+8gcG/sy+0diHI41AtJe7F36bkQ/u4kcUNbRY9o4uBedHzUN8ojVLQl5j4I8pQLv1RjP7Tj5hXL8m64/zY8gunlgmw+e+cmVFzMi7PKXgZlI7y4FunykYZyiJ/JTmpoT922E9xcvnZdarnklTCHhYiZncic08pOCc8TOc8TsmS7DjcaDATrVpcNqLfr6gxM25eS2zmTW2cLWqnKIt8EE1ZrR7A2/Xm0DQAYYP54QQvuVXzhYlbh6X/eWyefNztRLTuI33wrNsW5GTRzip1JjrcTWMegLPOlvdSj05uC4AeL4iZn4hAyp0/nJ3tLosk47zQ2FKU812XAu8Z/IP6VKRCczX/A0L/g9I0LQ+/FMwawAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            class="w-[20px] h-[20px] mr-[10px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAFPklEQVRoQ9WZa2wUVRTH772z7bYCBuhSiVHDy2pNY9D41YQmQiIpxPqo8fFB0oTtzuxO08rDtkAaRLQmFNntTluyzX5QoykIavSDJhBM1A8aNZgoVKIQY7CPVcBC1y3buf5nC0kf27l3d2ZBJmn6mHP/5zdnz5x77iklt+hF3ebu7+9X/hoZ2sMJeQ7i5wnjWiCg/+C2H9fBja7wVkLJm1NAB70l8yrq6+tH3YR3FTwcDt/uUcg5AC6aCskJ36Fpja/9b8G7o5E2QO6ZBcjJ397S5LL6+u2uRd21iEej0fmUTFjRLssWWUpoS0ALveFW1F0DR263Irdt0oEnOPEs1zTtshvwroD39fUtSP175TcA+eygEPXtiPrUFzfvZ3AFPBqNbKOEd0hQjCge7zK/3z8mYWtr4hj8Wm6fFUX7OgUcbglo+r6bDo5Ksg2VRCbaGVaAD5UtSS+vq2tOOoF3FPHOzs7SEm8RKgkvzwUCud6MXN+fy5qZto7ADSO8g3Dyau4AdDA1nq5samq6mPvayRU5gbe3tzOfz4ddMb2KMVYD6FZosDyd/0gZa+Oc/Tw8PPwHtMdz0ckGTmOx2KJUavQeSj334tlWIBWq8HU35WQlmqelcODJxYltiaSU47qEEP4KH+eQRgPE5KeJQge8XnJ206ZQgsIma6qgMqyi3NTRyT2MKN4FozvxVeQWXL46AJ7AQ53H99+5SX5RGP/Ar+qfZlIlHt+/MDnmGcj1BcsXxvE6yl9W1cZO2mNEXjQ5f9ux4I0SoOSMquoVtKvrQC2j9MiN8uvYDyUnAb6aWpXijvKyY8ilNY5FCy+QpIyuDwRCJzJV5doB4BP8+GjhfeftwYKuBfRn0+p4b2/vbWZ6/ENs32vzli7cwjHG+caGYOOx6y6m1XFE3uth9DChvKZwDLkpU0pG0cdvUFX1i6krZ21A/f3txYlEWZxw/nxuLty3tqCZoqz3+7Uvs25AM/84OWIYjGG7esl9HGnFf5C2j+OQ/XW2Fba9SrcRNjgnAWlXLhkiYBeLipR1mzdr384lKWyy0G+/hSdvdIlJRuaCydljwWDweztjIbi12DAiYeR8SMarIxvktKKwNX6/PfS0cmjnsK+jY0FqfukQbEodgQkWI4r7cKzbIuNDKuJ4WYsTI4MW+EIZ0bxtKGtV1eDrMuulwA3DWEF4Gv1yYS/AvIeIS5VhKfCeaHiDScjHhcXOqH+navojMn6kwA3jQAvhdK+MoEOby+kJ4tN1PSXSkQOPht+H0LMiMTfuoxRWoRT+JNKSBbdq6kMiMTfuY/N5StN04flACB6Px0uSY6MJQM1zA0ykgcPyLsxchCMPITgqyoOoKCdFDl27T+khVQ3VifSE4NFo+GkYHRIJzbh/Bb9/lZkYUPJAbmvpKVULCdcIwbu7I7u5yXdKOk/ho+5hnuIOTGT/xHGQ9vZGakyT7MVDYDYjdSV9S5Tyujr7OboYPBo5giar1s4lXqg0Zh/vEqLsRsNvzcmnXVabPDIy+AKjZBe6zZUifKaQ1Q0Num16SoCHTwPsvrmcQeCjCc7aZEqYdcIqVmiDSfgr0LMmYlkvzPSeadD0w3YPKAN+CuD3zxRBhI+b3Nw5V6Nv5/Qd/HfukkJDjPJmfAKLZ2kz9mQgEDzqCBwt7RNoaa0NyJsRouQbQLfgtH1c9JGL7sdinYuvpoq2IhWDsJ0/qU9PKErxOrwjVx2BW4sPHuyqSKcn1iqcnvFr+ucioFzvY3a5FHPNjRgDXqisrDpaXV2dFmkIU0UkcLPu37Lg/wFo9L0+q9KGpQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <span>4星推薦</span>
      </div>
    </div>
    <div class="p-[20px] bg-[#4b3aec] rounded-[20px] mt-[10px]">
      <p class="my-[10px] text-[26px] text-white">其他推荐</p>
      <div class="flex flex-wrap justify-between">
        <div
          class="w-[45%] mt-[10px] border-[0.5px] border-[#0237a6] p-[10px] rounded-[10px]"
          v-for="game in games.filter((e) => e.game_code !== route.params.name)"
          :key="game.coin_address"
        >
          <div class="w-full flex-center-center">
            <div class="w-[125px] h-[125px] bg-[#eee]"></div>
          </div>
          <p class="text-white text-[18px] mt-[10px]">{{ game.game_name }}</p>
          <p class="text-white text-[18px] mt-[30px]">赔率{{ game.game_odds_num }}</p>
          <button
            class="bg-[#ea4c62] text-white py-[3px] px-[8px] rounded-[5px] mt-[10px]"
            @click="$router.push(`/game-info/${game.game_code}`)"
          >
            立即游戏
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useStore } from '../store'

const store = useStore()
const route = useRoute()
const games = store.games
const currentGame = computed(() => games.find((e) => e.game_code === route.params.name))
</script>

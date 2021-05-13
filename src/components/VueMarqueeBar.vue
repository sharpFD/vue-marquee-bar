<template>
  <div :style="barStyle" class="marquee-container">
    <div
      @mouseenter="pausePlay"
      @mouseleave="continuePlay"
      :class="`thanks-bar-${uuid}`"
    >
      <div
        :key="idx"
        :class="`thank-item-${uuid}`"
        v-for="(item, idx) in content"
      >
        <slot :data="item" name="content" />
      </div>
    </div>
    <div class="prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueMarqueeBar",
  data() {
    return {
      uuid: "",
    };
  },
  props: {
    width: {
      default: "100%",
      type: String,
    },
    speed: {
      default: 1500,
      type: Number,
    },
    background: {
      default: "#f8f9fa",
      type: String,
    },
    boxShadow: {
      default: "none",
      type: String,
    },
    color: {
      default: "#212529",
      type: String,
    },
    content: {
      default: () => [],
      type: Array,
    },
    hoverPause: {
      default: true,
      type: Boolean,
    },
  },
  methods: {
    continuePlay() {
      if (!this.hoverPause) return;
      document.querySelector(
        `.thanks-bar-${this.uuid}`
      ).style.animationPlayState = "running";
    },
    pausePlay() {
      if (!this.hoverPause) return;
      document.querySelector(
        `.thanks-bar-${this.uuid}`
      ).style.animationPlayState = "paused";
    },
    generateUuid() {
      let s = [];
      let hexDigits = "0123456789abcdef";
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
      s[8] = s[13] = s[18] = s[23] = "-";
      this.uuid = s.join("");
    },
  },
  computed: {
    barStyle() {
      return {
        width: this.width,
        color: this.color,
        background: this.background,
        boxShadow: this.boxShadow,
      };
    },
  },
  watch: {
    content: {
      handler() {
        this.generateUuid();
        setTimeout(() => {
          let thankList = document.querySelectorAll(`.thank-item-${this.uuid}`);
          let sum = 0;
          thankList.forEach((node) => {
            sum += node.clientWidth + 32;
          });

          let marqueeDefine = `
                @keyframes marquee-${this.uuid} {
                  0% {
                    transform: translate3d(${this.width}, 0, 0);
                  }
                  100% {
                    transform: translate3d(${
                      (window.screen.availWidth + sum) * -1
                    }px, 0, 0);
                  }
                }

                .marquee-${this.uuid} {
                  animation: marquee-${this.uuid} ${
            ((sum + window.screen.availWidth) / this.speed) * 5
          }s infinite linear;
                }
              `;
          const style = document.createElement("style");
          style.type = "text/css";
          style.innerHTML = marqueeDefine;
          document.getElementsByTagName("head")[0].appendChild(style);
          document
            .querySelector(`.thanks-bar-${this.uuid}`)
            .classList.add(`marquee-${this.uuid}`);
        }, 200);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
<style scoped>
.marquee-container {
  position: relative;
  overflow: hidden;
  min-height: 28px;
}
div[class*="thanks-bar"] {
  display: flex;
  align-content: center;
}
div[class*="thank-item"] {
  white-space: nowrap;
  margin: 0 16px;
  font-size: 14px;
  padding: 4px;
}
.prefix {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

.suffix {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
</style>

<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="pic">
    <div class="item">
      <h2 class="title">Emoji</h2>
      <pre>
        :hoverPause="true"
        :speed="1000"
        background="transparent"
        color="#000000"
    </pre>
      <vue-marquee-bar
        :content="emoji"
        :speed="1000"
        background="transparent"
        color="#000000"
      >
        <template v-slot:content="scope">
          <div style="display: flex; align-items: baseline">
            <div style="color: #03c08d">{{ scope.data }}</div>
          </div>
        </template>
      </vue-marquee-bar>
    </div>

    <div class="item">
      <h2 class="title">Text</h2>
      <pre>
        :hoverPause="false"
        :content="text"
        :speed="1500"
        color="000000"
        background="#ffffff"
        boxShadow="0 2px 12px rgba(0,0,0,.2)"
      </pre>
      <vue-marquee-bar
        :hoverPause="false"
        :content="text"
        :speed="1500"
        color="000000"
        background="#ffffff"
        boxShadow="0 2px 12px rgba(0,0,0,.2)"
      >
        <template v-slot:content="scope">
          <div style="display: flex; align-items: baseline">
            <div>{{ scope.data }}</div>
          </div>
        </template>
      </vue-marquee-bar>
    </div>

    <div class="item">
      <h2 class="title">Image</h2>
      <pre>
        :hoverPause="false"
        :content="text"
        :speed="2000"
        color="000000"
        background="#ffffff"
        boxShadow="0 2px 12px rgba(0,0,0,.2)"
      </pre>
      <vue-marquee-bar
        :hoverPause="true"
        :content="image"
        :speed="2000"
        color="000000"
        background="#ffffff"
      >
        <template v-slot:content="scope">
          <div style="display: flex; align-items: baseline">
            <img :src="scope.data" alt="">
          </div>
        </template>
      </vue-marquee-bar>
    </div>
  </div>
</template>

<script>
  import VueMarqueeBar from '../components/VueMarqueeBar'

  export default {
    data() {
      return {
        emoji: [
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "😊",
          "😇",
          "🙂",
          "🙃",
          "😉",
          "😌",
          "😍",
          "🥰",
          "😘",
          "😗",
          "😙",
          "😚",
          "😋",
          "😛",
          "😝",
          "😜",
          "🤪",
          "🤨",
          "🧐",
          "🤓",
          "😎",
          "🤩",
          "🥳",
          "😏",
          "😒",
          "😞",
          "😔",
          "😟",
          "😕",
          "🙁",
          "☹️",
          "😣",
          "😖",
          "😫",
          "😩",
          "🥺",
          "😢",
          "😭",
          "😤",
          "😠",
          "😡",
          "🤬",
          "🤯",
          "😳",
          "🥵",
          "🥶",
          "😱",
          "😨",
          "😰",
          "😥",
          "😓",
          "🤗",
          "🤔",
          "🤭",
          "🤫",
          "🤥",
          "😶",
          "😐",
          "😑",
          "😬",
          "🙄",
          "😯",
          "😦",
          "😧",
          "😮",
          "😲",
          "🥱",
          "😴",
          "🤤",
          "😪",
          "😵",
          "🤐",
          "🥴",
          "🤢",
          "🤮",
          "🤧",
          "😷",
          "🤒",
          "🤕",
          "🤑",
          "🤠",
          "😈",
          "👿",
          "👹",
          "👺",
          "🤡",
          "💩",
          "👻",
          "💀",
        ],
        text: ['这是是一段话1', '这是是一段话2', '这是是一段话3', '这是是一段话4', '这是是一段话5'],
        image:[require('../assets/test.jpg'),require('../assets/test.jpg'),require('../assets/test.jpg'),require('../assets/test.jpg'),require('../assets/test.jpg')]
      };
    },
    components: {VueMarqueeBar}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .heart {
    height: 100%;
    width: 100%;
    display: block;
    outline: none;
    padding: 20px;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
    box-sizing: border-box;
    text-align: center;
    line-height: 14px;
    font-weight: 200;
    letter-spacing: 1px;
    text-decoration: none;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    border-radius: 30px;
    border: none;
  }

  .heart:hover {
    transition-duration: 20s;
    transition-timing-function: linear;
    background-position: -1800px 0;
  }

  .hello {
    text-align: center;
  }
  .item {
      overflow-x: hidden;
    }
</style>

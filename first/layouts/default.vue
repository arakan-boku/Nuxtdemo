<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container  has-text-centered">
          <h1 class="title">
            BOKUのサンプル画面
          </h1>
          <h2 class="subtitle">
            Nuxt自己流チュートリアル
          </h2>
        </div>
      </div>
    </section>
    <section>
      <nuxt />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>今日は{{ today }}です。</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    today () {
      return moment().format('YYYY/MM/DD dddd')
    }
  }
}
</script>

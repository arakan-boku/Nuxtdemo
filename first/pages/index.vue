<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile content is-parent is-vertical is-2" />
      <div class="tile content is-parent is-vertical is-2">
        <article class="is-child box has-text-centered">
          <NLink to="/about">
            <h3>{{ linkname1 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="tachometer-alt" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/cityapi">
            <h3>{{ linkname2 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="tty" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <a :href="outurl">
            <h3>{{ linkname3 }}</h3>
          </a>
          <b-icon pack="fas" icon="angry" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/vxdemo">
            <h3>{{ linkname5 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="anchor" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2" />
    </div>
    <div class="tile is-ancestor">
      <div class="tile content is-parent is-vertical is-2" />
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/image_predict">
            <h3>{{ linkname7 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="crow" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="box-open" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="chess" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="cloud" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2" />
    </div>
    <div class="tile is-ancestor">
      <div class="tile content is-parent is-vertical is-2" />
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="crow" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="box-open" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="chess" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box has-text-centered">
          <NLink to="/">
            <h3>{{ linkname6 }}</h3>
          </NLink>
          <b-icon pack="fas" icon="cloud" size="is-large" type="is-primary" />
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  head: {
    title: 'First page'
  },
  data () {
    return {
      outurl: 'https://ja.nuxtjs.org/',
      linkname7: '画像分類',
      linkname6: '(未使用)',
      linkname5: '状態管理',
      linkname4: 'WEBフォント',
      linkname3: '外部リンク',
      linkname2: '市区町村',
      linkname1: '郵便番号'
    }
  },
  computed: {
    today () {
      return moment().format('YYYY/MM/DD dddd')
    }
  }
}
</script>

<template>
  <div>
    <div class="container content has-text-centered">
      <NLink to="/">
        <p>ルートのページへ戻ります</p>
      </NLink>
    </div>
    <div class="tile is-ancestor">
      <div class="tile content is-parent is-vertical is-2" />
      <div class="tile content  is-parent is-vertical is-2">
        <article class="tile is-child box">
          <p class="title">
            Icon1
          </p>
          <div v-if="inActive == 1" class="block">
            <b-icon pack="fas" icon="tachometer-alt" size="is-large" type="is-primary" />
            <span class="subtitle">速度計</span>
          </div>
          <div v-else class="block">
            <b-icon pack="fas" icon="tachometer-alt" size="is-large" type="is-dark" />
            <span class="subtitle">・・・</span>
          </div>
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child  box">
          <p class="title">
            Icon2
          </p>
          <div v-if="inActive == 1" class="block">
            <b-icon pack="fas" icon="tty" size="is-large" type="is-primary" />
            <span class="subtitle">電話</span>
          </div>
          <div v-else class="block">
            <b-icon pack="fas" icon="tty" size="is-large" type="is-dark" />
            <span class="subtitle">・・・</span>
          </div>
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box">
          <p class="title">
            Icon3
          </p>
          <div v-if="inActive == 2" class="block">
            <b-icon pack="fas" icon="angry" size="is-large" type="is-primary" />
            <span class="subtitle">怒り顔</span>
          </div>
          <div v-else class="block">
            <b-icon pack="fas" icon="angry" size="is-large" type="is-dark" />
            <span class="subtitle">・・・</span>
          </div>
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2">
        <article class="tile is-child box">
          <p class="title">
            Icon4
          </p>
          <div v-if="inActive == 2" class="block">
            <b-icon pack="fas" icon="anchor" size="is-large" type="is-primary" />
            <span class="subtitle">イカリ</span>
          </div>
          <div v-else class="block">
            <b-icon pack="fas" icon="anchor" size="is-large" type="is-dark" />
            <span class="subtitle">・・・</span>
          </div>
        </article>
      </div>
      <div class="tile content is-parent is-vertical is-2" />
    </div>
    <div class="container content has-text-centered">
      <p>{{ inActive }}</p>
    </div>
    <div class="container  has-text-centered">
      <b-button type="is-primary" @click="toLeftSide">
        左を有効にする
      </b-button>
      <b-button type="is-primary" @click="toRightSide">
        右を有効にする
      </b-button>
      <b-button type="is-primary" @click="toDefault">
        初期状態にする
      </b-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('infos', ['inActive'])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions('infos', [
      'toLeftSide',
      'toRightSide',
      'toDefault'
    ])
  }
}
</script>

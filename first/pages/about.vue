<template>
  <div>
    <div class="container content has-text-centered">
      <NLink to="/">
        <p>ルートのページへ戻ります</p>
      </NLink>
    </div>
    <div class="container content has-text-centered">
      <img src="/post.JPG" alt="image02">
    </div>
    <div class="columns">
      <div class="column" />
      <div class="column">
        <div class="column">
          <b-field label="郵便番号">
            <b-input v-model="zip" placeholder="郵便番号を入力する" />
          </b-field>
        </div>
      </div>
      <div class="column" />
    </div>
    <div class="container  has-text-centered">
      <b-button type="is-primary" @click="getAddr({zip})">
        住所情報取得
      </b-button>
    </div>
    <hr>
    <div v-if="datas != null" class="container content has-text-centered">
      <div v-if="datas.status == 200">
        <h4>郵便番号：{{ datas.results[0].zipcode }}</h4>
        <h4>都道府県名：{{ datas.results[0].address1 }}</h4>
        <h4>市区町村名：{{ datas.results[0].address2 }}</h4>
        <h4>町域名：{{ datas.results[0].address3 }}</h4>
      </div>
      <div v-else>
        <h4>指定の郵便番号では住所情報の取得ができませんでした。</h4>
      </div>
    </div>
    <div v-else class="container content has-text-centered">
      <br>
      <p>郵便番号を入力してボタン「住所情報取得を押します。</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      zip: '',
      datas: null
    }
  },
  asyncData () {

  },
  methods: {
    async getAddr ({ zip }) {
      this.datas = await this.$getOneAddressFromZip(zip)
    }
  },
  head: {
    title: 'About page'
  }
}
</script>

<template>
  <div>
    <div class="container content has-text-centered">
      <NLink to="/">
        <p>ルートのページへ戻ります</p>
      </NLink>
    </div>
    <div class="container content has-text-centered">
      <img src="/jamap.JPG" alt="image03">
    </div>
    <div v-if=" prefecturesJson.message == null" class="columns">
      <div class="column" />
      <div class="column is-half">
        <b-field horizontal label="都道府県" type="is-primary">
          <b-select v-model="prefecturesSelected" expanded @input="updateMunicipalitiesJson({prefecturesSelected})">
            <option v-for="pOption in prefecturesJson.result" :key="pOption.id" :value="pOption.prefCode">
              {{ pOption.prefName }}
            </option>
          </b-select>
        </b-field>
      </div>
      <div class="column" />
    </div>
    <div v-if="municipalitiesJson != null" class="columns">
      <div class="column" />
      <div class="column is-half">
        <b-field horizontal label="市区町村" type="is-primary" :v-if="municipalitiesJson.message == null">
          <b-select v-model="municipalitiesSelected" expanded>
            <option v-for="mOption in municipalitiesJson.result" :key="mOption.id" :value="mOption.cityCode">
              {{ mOption.cityName }}
            </option>
          </b-select>
        </b-field>
      </div>
      <div class="column" />
    </div>
    <div v-else class="columns">
      <div class="column" />
      <div class="column is-half">
        <b-field horizontal label="市区町村">
          <b-select v-model="municipalitiesSelected" expanded>
            <option value="" />
          </b-select>
        </b-field>
      </div>
      <div class="column" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      prefecturesSelected: '',
      municipalitiesSelected: '',
      municipalitiesJson: null
    }
  },
  async asyncData (context) {
    return { prefecturesJson: await context.app.$getPrefecturesJson() }
  },
  methods: {
    async updateMunicipalitiesJson ({ prefecturesSelected }) {
      this.municipalitiesJson = await this.$getmunicipalitiesJson(prefecturesSelected)
    }
  },
  head: {
    title: 'CityApi page'
  }
}
</script>

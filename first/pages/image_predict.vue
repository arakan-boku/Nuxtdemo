<template>
  <div class="container content has-text-centered">
    <div class="columns">
      <div class="column" />
      <div class="column">
        <NLink to="/">
          <p>ルートのページへ戻ります</p>
        </NLink>
      </div>
      <div class="column" />
    </div>
    <div class="columns">
      <div class="column" />
      <div class="column is-harf">
        <div class="card">
          <div class="card-content" @dragleave.prevent="checkDrag($event, 'new', false)" @dragover.prevent="checkDrag($event, 'new', true)" @drop.prevent="onDrop">
            <div class="drop is-primary">
              <p>
                {{ msg1 }}
              </p>
              <label for="file_selection">
                {{ msg2 }}
                <input id="file_selection" type="file" accept="image/*" style="display:none" @change="onDrop">
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column" />
    </div>
    <div v-if="files != null">
      <div v-for="(file, index) in files" :key="index">
        <div class="columns">
          <div class="column">
            <figure class="image is-square">
              <img :src="images[index]">
            </figure>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold is-size-4 has-text-centerd">
              {{ file.name }} {{ test }}
            </p>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold is-size-4 has-text-centerd">
              {{ file.type }}
            </p>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold is-size-4 has-text-centerd">
              {{ file.size.toLocaleString() }} Byte
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isDrag: null,
      msg1: 'ここにファイルをドロップ。または',
      msg2: 'ここをクリックして選択',
      files: [],
      images: [],
      test: null
    }
  },
  methods: {
    checkDrag (event, key, status) {
      this.isDrag = status ? key : null
      if (status) {
        this.msg1 = 'ドラッグ中'
        this.msg2 = 'ここにドロップしてください'
      } else {
        this.msg1 = 'ここにファイルをドロップ。または'
        this.msg2 = 'ここをクリックして選択'
      }
    },
    onDrop (event) {
      this.isDrag = null
      const fileList = event.target.files
        ? event.target.files
        : event.dataTransfer.files
      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type === 'image/jpeg' || fileList[i].type === 'image/png') {
          const reader = new FileReader()
          reader.onload = () => {
            this.images.push(reader.result)
          }
          reader.readAsDataURL(fileList[i])
        } else {
          this.images.push('/jamap.JPG')
        }
        this.files.push(fileList[i])
      }
      this.msg1 = 'ドロップされました'
      this.msg2 = 'ファイル数は' + fileList.length + 'です。'
    }
  }
}
</script>

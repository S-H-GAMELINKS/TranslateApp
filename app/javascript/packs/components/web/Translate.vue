<template>
    <div class="container">
        <h1>Translate</h1>
        <vue-dictaphone @stop="handleRecording($event)">
  <template slot-scope="{ isRecording, startRecording, stopRecording, deleteRecording }">
    <button v-if="!isRecording" @click="startRecording">Start recording</button>
    <button v-else @click="stopRecording">Stop recording</button>
  </template>
</vue-dictaphone>

<vue-dictaphone-spectrum-analyser/>

<template v-if="audioSource">
  <audio :src="audioSource" controls></audio>
</template>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            audioSource: null
        }
    },
    methods: {
        handleRecording({ blob, src }) {
            this.audioSource = src;
    }
  }
}
</script>

<template>
  <div>
    <slot name="button" />
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          <slot name="title"></slot>
        </h3>
        <div>
          <slot />
        </div>
        <div class="modal-action">
          <label for="my-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
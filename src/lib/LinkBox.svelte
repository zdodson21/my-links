<script>
  let props = $props();
</script>

<div class="link-box">
  <img src="{props.src}" alt="{props.alt}">
  <p>
    {props.text}
  </p>
</div>

<style>
  .link-box {
    background-color: white;
    color: black;
  }
</style>
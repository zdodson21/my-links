<script>
  let {href, src, alt, text, pixelated = false} = $props();
</script>

<a href="{href}" target="_blank">
  <img src="{src}" alt="{alt}" class:pixelated>
  <div class="text">
    <p>{text}</p>
  </div>
</a>

<style>
  a {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: white;
    color: black;
    padding: 12px;
    border: 4px solid black;
    border-radius: 25px;
  }

  a:focus, a:hover {
    background-color: wheat;
  }

  img {
    width: 70px;
  }

  .pixelated {
    image-rendering: pixelated;
  }

  .text {
    width: calc(100% - 70px);
    text-align: center;
  }
</style>
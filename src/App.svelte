<script>
  import LinkBox from './lib/LinkBox.svelte';
</script>

<main>
  <div class="link-container">
    <h2>My Profiles</h2>
    <LinkBox 
      href="https://github.com/zdodson21" 
      src="/icons/github-mark.svg" 
      alt="github logo" 
      text="GitHub Profile" 
    />
    <LinkBox 
      href="https://www.linkedin.com/in/zach-dodson-psu/" 
      src="/icons/linked-in-blue.png" 
      alt="linkedin logo" 
      text="LinkedIn Profile"
    />
    <LinkBox 
      href="https://zachdodson.me/"
      src="/icons/hax.png"
      alt="hax logo"
      text="Portfolio"
    />
    <LinkBox 
      href="https://retro-desktop-portfolio.vercel.app/"
      src="/icons/portfolio.png"
      alt="desktop icon for personal portfolio"
      text="New Portfolio (Work in Progress)"
      pixelated
    />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }
  
  .link-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: white;
    padding: 4px;
    border-radius: 25px;
    border: 4px solid black;
    width: min(95%, 400px);
  }

  h2 {
    text-align: center;
    color: black;
  }
</style>

<script>
  import LinkBox from './lib/LinkBox.svelte';
</script>

<main>
  <div class="blocks">
    <div class="introduction link-container">
      <img src="/assets/images/profile-pic.png" alt="Zach Dodson">
      <h2>Zach Dodson's Links Page</h2>
    </div>

    <div class="link-container">
      <h2>My Profiles</h2>
      <LinkBox 
        href="https://github.com/zdodson21" 
        src="/assets/icons/github-mark.svg" 
        alt="github logo" 
        text="GitHub Profile" 
      />
      <LinkBox 
        href="https://www.linkedin.com/in/zach-dodson-psu/" 
        src="/assets/icons/linked-in-blue.png" 
        alt="linkedin logo" 
        text="LinkedIn Profile"
      />
      <LinkBox 
        href="https://zachdodson.me/"
        src="/assets/icons/hax.png"
        alt="hax logo"
        text="Portfolio"
      />
      <LinkBox 
        href="https://retro-desktop-portfolio.vercel.app/"
        src="/assets/icons/portfolio.png"
        alt="desktop icon for personal portfolio"
        text="New Portfolio (Work in Progress)"
        pixelated
      />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }

  .blocks {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
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

  .introduction {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introduction img {
    width: 175px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h2 {
    text-align: center;
    color: black;
  }
</style>

<template>
  <div class="about">
    <div class="container">
      <h2>
        We Love
        <span> comfy </span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis
        vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam
        nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro,
        ratione aspernatur!
      </p>
    </div>
  </div>
</template>
<style>
.about {
  height: calc(100vh - var(--header-height) + 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color-bright);
  h2 {
    margin-bottom: 1.5rem;
    font-size: 60px;
    font-weight: 700;
    gap: 20px;
    text-align: center;
    span {
      font-size: 36px;
      padding: 1rem 1.5rem;
      border-radius: 20px;
      color: white;
      background-color: var(--main-color-bright);
    }
  }
  p {
    text-align: center;
    line-height: 2rem;
    font-size: 18px;
  }
}

.dark {
  .about {
    color: white;
    h2 {
      span {
        background-color: var(--main-color-dark);
      }
    }
  }
}

@media (min-width: 992px) {
  .about .container {
    width: 50%;
  }
}
@media (max-width: 500px) {
  .about h2 {
    font-size: 36px;
    span {
      font-size: 24px;
    }
  }
}
</style>

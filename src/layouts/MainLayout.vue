<template>
  <header>
    <nav>
      <div class="container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/wishlist">Wishlist</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
</template>

<style scoped>
header {
  margin-block: 2rem;
}

header > nav > .container > ul {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
</style>

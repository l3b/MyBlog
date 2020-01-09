<template>
  <div>
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">صفحة عبدالله </nuxt-link>

          <nav>
            <ul>
              <li><nuxt-link to="/who">من؟ </nuxt-link></li>
              <li><nuxt-link to="/posts">مقالات </nuxt-link></li>
              <li><nuxt-link to="/contact">تواصل </nuxt-link></li>
            </ul>
          </nav>
        </div>
      </div>        
    </header>
    <nuxt />
  </div>
</template>
<script>
export default {
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Amiri&display=swap' }
      ]
    }
  }
}
</script>


<style lang="scss">
html {
  font-family: 'Amiri', 'serif';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#logo {
font-family:'Amiri','serif';

}

.container {
  margin: 0 auto;
  width: 90%;
}
 
header {
  background: $primary-color;
  padding: 1em 0;
  text-align: center;
 }
 .navbar{
   display: flex;
   justify-content: space-between;
   font-weight: bold;
  a {
    color: white;
    text-decoration: none;
  }
  nav {
    display: flex;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      li a {
      font-weight: normal;
      padding: .5em;

      }
    }   
  }
 }

@media only screen and (min-width: 768px){
    body {
      font-size: 18px;
    }

}



</style>

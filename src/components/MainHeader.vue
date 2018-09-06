<template>
    <div class="main-header">

        <div ref="toggleScreen" class="toggle-screen" @click="toggleNavMobile"></div>

        <div class="container flex space-between align-center">

            <h1><router-link to="/">SALE</router-link></h1>

            <ul ref="navDesktop" class="nav-desktop flex-row align-center flex inline-list" arial-label="Main navigation bar">
                <li><router-link to="/"> Home </router-link></li>
                <li><router-link to="/products"> Products </router-link></li>
            </ul>

            <div ref="navMobile" class="nav-mobile" @click="toggleNavMobile">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "main-header",

  data() {
    return {
      navBarMObile: false
    };
  },
  methods: {
    toggleNavMobile() {
      this.$refs.navMobile.classList.toggle("change");
      this.$refs.navDesktop.classList.toggle("open");
      this.$refs.toggleScreen.classList.toggle("show-div");
    }
  }
};
</script>

<style scoped lang="scss">
.main-header {
  background-color: #333;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #999;
    }
  }

  h1 {
    margin: 0 10px;
    font-size: 1.4em;
    font-weight: bold;
    font-family: "openSans", "Geneva", "Tahoma", "sans-serif";
  }

  ul {
    margin: 0px;

    li {
      padding: 0.5em 1em;
      font-weight: bold;

      a {
        text-decoration: none;

        &.router-link-exact-active {
          color: #999;
        }
      }

      button {
        font-family: "Roboto", "OpenSans", "Geneva", "Tahoma", "sans-serif";
        font-weight: bold;
        color: #fff;
        border-color: #fff;

        &:hover {
          color: #999;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
.nav-mobile {
  display: none;
}
.toggle-screen {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(42, 42, 42, 0.6);
  z-index: 0;
  opacity: 0.9;
  visibility: hidden;
  cursor: pointer;
  transition: opacity 0.5s;
}
@media (max-width: 720px) {
  .show-div {
    z-index: 1;
    visibility: visible;
    opacity: 1;
    display: block;
  }
  .nav-desktop {
    margin: 0;
    z-index: 1;
    padding-top: 20px;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    border-left: 1px solid rgba(100, 100, 100, 0.5);
    min-width: 200px;
    transform: translate(100%, 0);
    transition: all 0.8s;

    &.open {
      transform: translate(0, 0);
    }

    li a {
      border-bottom: 2px solid black;
      text-decoration: dotted;
      display: block;
      line-height: 60px;
      text-align: center;
      font-size: 16px;
    }

    li a:hover {
      color: #999;
    }
  }

  /* nav-mobile button */

  .nav-mobile {
    z-index: 1;
    cursor: pointer;
    display: block;
    float: right;
    padding: 10px;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }

  /* Rotate first bar */
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  /* Fade out the second bar */
  .change .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}
</style>

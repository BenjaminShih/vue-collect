<template>
  <div>
    <section id="screen1" class="section1">

      <p>下滑试试？</p>

      <nav ref="nav">
        <ul>
          <li><a href="#">我</a></li>
          <li><a href="#">是</a></li>
          <li><a href="#">导</a></li>
          <li><a href="#">航</a></li>
          <li><a href="#">栏</a></li>
        </ul>
      </nav>

    </section>

    <section id="screen2"></section>
    <section id="screen3"></section>

  </div>
</template>

<script type="text/babel">
  export default {
    mounted() {
      window.addEventListener('scroll', () => {
        let excNavHeight = (window.innerHeight || document.documentElement.clientHeight)*0.3
        console.log('excNavHeight', excNavHeight, 'document.body.scrollTop', document.body.scrollTop)
        if (document.body.scrollTop > excNavHeight) {
          this.$refs.nav.className = 'fixed'
        }
        else {
          this.$refs.nav.className = ''
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  * {margin: 0; padding: 0;}

  a {text-decoration: none;}

  .fixed {
    position: fixed;
    top: 0;
    height: 70px;
    z-index: 1;
  }

  body {
    color: #fff;
    font-family: 'open-sans-bold', AvenirNext-Medium, sans-serif;
    font-size: 18px;
    text-align: center;
  }

  nav {
    position: absolute;
    top: 30%;
    width: 100%;
    height: 70px;
    background: #fff;
  }

  nav li {
    display: inline-block;
    padding: 24px 10px;
  }

  nav li a {
    color: #999;
  }

  section {
    height: 100vh;
  }

  #screen1 {
    background: #43b29d;
  }

  #screen1 p {
    padding-top: 100px;
  }

  #screen2 {
    background: #efc94d;
  }

  #screen3 {
    background: #e1793d;
  }

  @media only screen and (max-width: 520px) {

    nav li {
      padding: 24px 4px;
    }

    nav li a {
      font-size: 14px;
    }

  }
</style>
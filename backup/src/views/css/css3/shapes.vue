<template lang="html">
  <div class="pacman-wrapper">
    <div class="pacman pacman-below">
    </div>
    <div class="pacman pacman-above">
    </div>
  </div>
</template>

<script>
</script>

<style>
.pacman-wrapper {
  width: 120px;
  height: 120px;
  position: relative;
}
.pacman {
  height: 0;
  width: 0;
  border-radius: 60px/60px;
  border-top: 60px solid #EEEAAA;
  border-left: 60px solid #EEEAAA;
  border-bottom: 60px solid #EEEAAA;
  border-right: 60px solid transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation-direction: alternate;
}
.pacman-above {
  animation: rotateabove .5s infinite;
}
.pacman-below {
  animation: rotatebelow .5s infinite;
}
@keyframes rotateabove
{
to {transform: rotateZ(-45deg);}
}
@keyframes rotatebelow
{
to {transform: rotateZ(45deg);}
}
</style>

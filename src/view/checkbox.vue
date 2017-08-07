<template>
  <div class="container">
    <div class="checkbox">
      <input id="checkbox-1" name="checkbox" type="checkbox" checked>
      <label for="checkbox-1" class="checkbox-label">Checked</label>
    </div>

    <div class="checkbox">
      <input id="checkbox-3" name="checkbox" type="checkbox" disabled>
      <label for="checkbox-3" class="checkbox-label">Disabled</label>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

  $color1 = #f4f4f4;
  $color2 = #3197EE;

  .checkbox {
    margin: 0.5rem;
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      + .checkbox-label {
        &:before {
          content: '';
          background: $color1;
          border-radius: 100%;
          border: 1px solid darken($color1, 25%);
          display: inline-block;
          width: 1.4em;
          height: 1.4em;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .checkbox-label {
          &:before {
            background-color: $color2;
            box-shadow: inset 0 0 0 4px $color1;
          }
        }
      }
      &:focus {
        + .checkbox-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }
      &:disabled {
        + .checkbox-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }
      + .checkbox-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
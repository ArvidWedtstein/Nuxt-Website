<template>
  <transition name="modal">
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title" id="modalLabel">Modal</h5>
            </slot>
            <button type="button" class="btn btn-red" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$badgeselectcolor: #dddddd;
$maincolors: (
    "darkblue": #192D40,
    "blue": #21303A,
    "cyan": #375D72,
    "lime": #7FCD8A,
    "white": #F4F0E7,
    "lightblue": #5DACB6
);
@function colorscheme($color) {
    @return map-get($maincolors, $color);
}
.modal {
  .modal-dialog {
    .modal-content {
      background: colorscheme('blue');
      .badgeshow {
        font-size: 4ch;
        color: colorscheme('lime');
      }
      .badgeselect {
        position: relative;
        padding: 0.5rem;
        font-size: 3ch;
        .badge {
          input[type=checkbox] {
            color: $badgeselectcolor;
            background: transparent;
            &:hover {
              color: darken($badgeselectcolor, 30%);
            }
            label {
              display: none;
            }
            &:checked {
              label {
                display: inline-block;
              }
              display: inline-block;
              color: colorscheme('lime');
            }
          }
        }
      }
    }
  }
  .close {
    color: #ddd;
  }
}
</style>
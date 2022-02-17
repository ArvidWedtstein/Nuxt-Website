<template>
  <div> 
    <p>teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest</p>
    <figure class="figure">
      <img width="500" src="/images/ArvidLogo.png" class="figure-img img-fluid rounded" :alt="text">
      <figcaption class="figure-caption text-end">fd</figcaption>
    </figure>
    <button type="button" class="btn btn-primary">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Image",
  template: '<Image/>',
  transition: 'slide-bottom',
  props: {
    image: "",
    text: ""
  },
  data() {
    return {
      
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
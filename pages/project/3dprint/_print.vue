<template>
    <div id="3dprint" class="container">
        <div class="jumbotron">
            <h1 class="display-4">3D Print</h1>
            <p class="lead">Here can you download some of my 3d models</p>
            <hr class="my-4">
            <button type="button" class="btn btn-main" data-toggle="modal" data-target="#modal">New Print</button>
        </div>
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="floatingSearch" placeholder="Search" v-model="search">
          <label for="floatingSearch">Search for 3D Objects</label>
        </div>

        
        <div class="row">
            <div class="col-md-8 post-main">
                <h3 class="pb-3 mb-4 border-bottom">TestPost</h3>
                <div class="blog-post">
                    <h2 class="blog-post-title">{{ post.title }}</h2>
                    <p class="blog-post-meta text-muted">{{ formatDate(post.createdAt) }} by <a class="link" href="#">{{ post.author.name }}</a></p>
                    <p>
                        This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                    </p>
                    <hr>
                    <p>
                        <a class="link" href="https://en.wikipedia.org/wiki/Cum">Cum</a> sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. 
                        <a class="link" href="#">Pellentesque</a>
                        ornare sem lacinia quam venenatis vestibulum. 
                        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <h2>Heading</h2>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. 
                        <a class="link" href="#">Pellentesque</a>
                        ornare sem lacinia quam venenatis vestibulum. 
                        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </div>
            </div>
            <div class="col-md-4 sidebar">
                <div class="p-3 mb-3">
                <h4 class="font-italic">About</h4>
                <p class="mb-0">
                    test <em>AAAAAAAAAAAAAAA</em>
                </p>
                </div>
                <div class="p-3">
                <h4 class="font-italic">Other Posts</h4>
                <ol class="list-unstyled mb-0">
                    <li><a class="link" href="#">Other Post</a></li>
                </ol>
                </div>
            </div>
        </div>
        
        <Modal>
            <div slot="header">
                <h5 class="modal-title" id="modalLabel">New Print</h5>
            </div>
            <div slot="body">
                <input v-model="print.title" required="required" type="text" placeholder="Title" />
                <textarea v-model="print.description" required="required" type="text" placeholder="Description"/>
                <!--<input @change="previewFiles" id="img" type="file" accept="image/png"/>-->
                <input id="stl" type="file" accept="print/stl"/>
            </div>
            <div slot="footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button v-on:click="newPrint" type="button" class="btn btn-primary" data-dismiss="modal">Create Print</button>
            </div>
        </Modal>
 
        <button @click="scrollToTop" id="scrollToTopBtn" title="Go to top">Top</button>
    </div>
</template>

<script lang="text/javascript">
const axios = require('axios');
var base64 = require('base-64');
const path = require('path');
class Print {
    constructor(name, description, category, stl, image) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.stl = stl;
        this.image = image;
    }
}
export default {
    name: 'print',
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            filter: 'all',
            search: '',
            printList: null,
            print: {
                title: '',
                description: '',
                stl: ''
            },
        }
    },
    async asyncData({ $axios, params, $config }) {
        let baseURL = $config.baseURL;
        if (!params) {
            return {
                baseURL
            }
        } else {
            /*await $axios({
                method: "get",
                url: "/api/project/getPrints"
            }).then(async (res) => {

            })*/
            return {
                baseURL
            }
        }
        /*const printList = [];
        await $axios({
            method: "get",
            url: "/api/project/getPrints"
        }).then(async (res) => {
            
            
            for (let i = 0; i < res.data.prints.length; i++) {
                const { name, description, stl } = res.data.prints[i];
                let print = new Print(
                    name,
                    description,
                    stl
                );
                printList.push(print);
            }
            
        })
        console.log(printList)
        return printList*/
    },
    mounted() {
        this.scroll()
        this.load3Dobjects(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
    },
    methods: {
        async load3Dobjects(r) {
            this.printList = [];
            const content = await this.$content('3dprint').fetch();
                
            r.keys().forEach(async (key) => {
                //this.images.push({ pathLong: r(key), pathShort: key, name: key.split('/') })
                let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');
                let stl = content[name.toLowerCase()].path;
                let description = content[name.toLowerCase()].description;
                let category = content[name.toLowerCase()].category;
                //let stl = `~/assets/3D-Object/${name}.stl`
                //name = name.replace('Fan-Cover/', '');
                let print = new Print(
                    name,
                    description,
                    category,
                    stl,
                    r(key),
                );
                this.printList.push(print);
                
            });
        },
        setFilter: function(filter) {
			this.filter = filter;
            console.log(this.filter)
		},
        async previewFiles(event) {
            function stringToBinary(str, spaceSeparatedOctets) {
                function zeroPad(num) {
                    return "00000000".slice(String(num).length) + num;
                }

                return str.replace(/[\s\S]/g, function(str) {
                    str = zeroPad(str.charCodeAt().toString(2));
                    return !1 == spaceSeparatedOctets ? str : str + " "
                });
            };
            const reader = new FileReader();
            reader.readAsText(event.target.files[0]);
            reader.onload = e =>{
                //this.print.stl = e.target.result;
                this.print.stl = stringToBinary(e.target.result);
                console.log()
            };
            
            
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
        scroll() {
            var scrollToTop = document.getElementById("scrollToTopBtn");
            var body = document.body, html = document.documentElement;
            var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
            if (document.body.scrollTop > (height / 2) || document.documentElement.scrollTop > (height / 2)) {
                scrollToTop.style.display = "block";
            } else {
                scrollToTop.style.display = "none";
            }
        },
        async newPrint() {
            let json = {
				name: this.print.title,
                description: this.print.description,
                author: this.$store.getters.getUserInfo
			}
			const data = new FormData();
			data.append("stl", document.getElementById('stl').files[0])
			data.append('json', JSON.stringify(json));
			
			const print = await this.$axios.$post("api/project/newPrint", data).then((res) => {
				this.showSnackbar(res.message)
			})
            this.$nuxt.refresh()
        
            this.print.title = '';
            this.print.description = '';
            this.print.size = '';
        }
    },
    created() {
        window.addEventListener('scroll', this.scroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scroll);
    },
    computed: {
        filteredList() {
            if (!this.printList) return;
            return this.printList.filter(post => {
                return post.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>
<style lang="scss">
$colorpalette: (
    "moonlit": linear-gradient(45deg, #0f2027, #203a43, #2c5364),
    "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
    "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
    "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
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
@function gradientscheme($color) {
    @return map-get($colorpalette, $color);
}
.printcard {
    .box {
        position: relative;
        overflow: hidden;
        width: 350px;
        height: 280px;
        border-radius: 20px;
        background: gradientscheme('moonlit');
        margin-top: 2rem;
        .icon {
            position: absolute;
            top: 0%;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 0.5s;
            border-radius: 20px;
            background: colorscheme('blue');
            z-index: 2;
            text-align: center;
            vertical-align: middle;
            i {
                font-size: 4ch;
                transform: translateY(50%);
            }
        }
        &:hover {
            .icon {
                top: 30px;
                left: calc(50% - 40px);
                width: 80px;
                height: 80px;
                border: 50%;
            }
        }
        .content {
            position: relative;
            padding: 20px;
            color: #fff;
            margin-top: 100px;
            text-align: center;
            z-index: 1;
        }
    }
}
#scrollToTopBtn {
  display: none;
  position: sticky;
  bottom: 30px;
  right: 30px;
  z-index: 5;
  font-size: 2ch;
  border: none;
  outline: none;
  background: colorscheme('cyan');
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: calc(0.25rem - 1px);
  transition: all 0.5s ease;
  &:hover {
      transform: scale(1.1);
  }
}
#items {
    list-style-type: none;
}


</style>
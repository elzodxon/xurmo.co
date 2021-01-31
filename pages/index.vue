<template>
  <div class="container">
    <div class="row" style="padding: 20px 0;">
      <div class="col-3" v-for="(item, index) in card" :key="index" :card="card" >
        <div>
          <div class="cards">
            <div class="card">
              <div class="img-wrapper">
                <img :src="item.url" alt="Logo">
              </div>
              <div class="items">
                <a class="item-link"  target="_blank" :href="item.site_url">{{item.title}}</a>
                <p class="description">{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      card:[
        {
          url: '/logo1.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/lapa.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/pages.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/logo1.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/lapa.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/pages.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/logo1.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/lapa.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },
        {
          url: '/pages.svg',
          title: 'cliply.co',
          site_url: 'https://cliply.co',
          description: 'Grab their attention with stock animated gifs crafted for commercial use.'
        },

      ]
    }
  }
}
</script>

<style>

.card{
  border: none;
}
.img-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 15rem;
  background: #F5F5F5;
}
.img-wrapper img{
  pointer-events: none;
}

.items{
  padding: 15px 0;
}
.items .item-link, .items .item-link:hover{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #1D1D1D;
}

.items .description{
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

}

</style>

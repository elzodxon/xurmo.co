<template>
  <div class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-5">
         <div class="d-flex align-items-center">
           <div class="logo">
             <h1>xurmo</h1>
           </div>
           <div class="description">
             <p>- these are hand-made bookmarks for various services,
               sites, references, and more for the designer</p>
           </div>
         </div>
        </div>

        <div class="offset-4 col-3">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to="/" class="search">
              search
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" stroke="#C1C1C1" stroke-width="2"/>
                <rect width="9.65772" height="1.97726" transform="matrix(0.715241 0.698878 -0.715241 0.698878 13.0924 11.8686)" fill="#C1C1C1"/>
              </svg>

            </nuxt-link>

            <button class="btn open-info">
              open info
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" fill="white" stroke="#1D1D1D" stroke-width="2"/>
                <path d="M10.7149 9.32508H14.6666V10.6942H10.7149V14.6667H9.28509V10.6942H5.33331V9.32508H9.28509V5.33334H10.7149V9.32508Z" fill="#1D1D1D"/>
              </svg>

            </button>

            <div class="language">
              <span class="active">o'zbekcha</span>
               <span>рус</span>
              <span>eng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header{
  padding: 15px 0;
}
.logo h1{
  font-family: Cotham Sans;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  color: #1D1D1D;
  margin-right: 12px;
}
.description p{
  font-family: Cotham Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #1D1D1D;
  margin: 0;
}

/* Search */

.search, .search:hover{
  display: flex;
  align-items: center;
  font-family: Cotham Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #C1C1C1;
  text-decoration: none;
}

.search svg{
  margin-left: 12px;
}


/* Open info */

.open-info{
  font-family: Cotham Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #C1C1C1;
}


/* Language */

.language{
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Cotham Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #C1C1C1;
}

.language span{
  padding: 6px 0;
}

.language .active{
  color: #1D1D1D;
}
</style>
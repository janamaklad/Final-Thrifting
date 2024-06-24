document.addEventListener("DOMContentLoaded", function () {
    var categoryLinks = document.querySelectorAll(".category");
    var subcategoriesContainer = document.getElementById("subcategories");
    var selectedCategoryVideo = document.querySelector(
      "#selected-category-video"
    );
  
    var category = window.location.hash.replace("#", "");
    console.log(category);
  
    if (category) {
      updateContentnVid(category);
    }
  
    var parts = window.location.href.split("/");
    var user_id = parts[parts.length - 1];
  
    var subcategoriesContent = {
      women: `<div class="subcategories">
              <div class="subcategory">  <a href="/user/${user_id}/category/women/top"><img src="/Images/topswomenFF.jpg" alt="tops"></a> <h2>Tops</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/bottom"><img src="/Images/bottomswomenFF.jpg" alt="bottoms">  </a> <h2>Bottoms</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/dress"> <img src="/Images/dressesFF.jpg" alt="dresses">  </a> <h2>Dresses</h2>  </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/jacket"> <img src="/Images/jacketswomenFF.jpg" alt="jackets"> </a> <h2>Jackets & Coats</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/sportswear"> <img src="/Images/sportswearFF.jpg" alt="sportswear"></a> <h2>SportsWear</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/shoes"><img src="/Images/shoes2womenFF.jpg" alt="shoes"> </a> <h2>Shoes</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/bag"><img src="/Images/bagswomenFF.jpg" alt="bags"></a><h2>Bags</h2> </div>
              <div class="subcategory">  <a href="/user/${user_id}/category/women/accessorie"><img src="/Images/accessoriesFF.jpg" alt="accessories"> </a><h2>Accessories</h2> </div>
          </div>`,
      men: `<div class="subcategories"> <div class="subcategory"><a href="/user/${user_id}/category/men/top"><img src="/Images/topsmenFF.jpg" alt="tops"></a> <h2>Tops</h2> </div>
          <div class="subcategory">  <a href="/user/${user_id}/category/men/bottom"><img src="/Images/bottomsmenFF.jpg" alt="bottoms">  </a> <h2>Bottoms</h2> </div>
          <div class="subcategory">  <a href="/user/${user_id}/category/men/jacket"> <img src="/Images/jacketsmenFF.jpg" alt="jackets"> </a> <h2>Jackets & Coats</h2> </div>
          <div class="subcategory">  <a href="/user/${user_id}/category/men/sportswear"> <img src="/Images/sportswearF.jpg" alt="sportswear"></a> <h2>SportsWear</h2> </div>
          <div class="subcategory"> <a href="/user/${user_id}/category/men/shoes"><img src="/Images/shoesmenFF.jpg" alt="shoes"> </a> <h2>Shoes</h2> </div>
          <div class="subcategory">  <a href="/user/${user_id}/category/men/bag"><img src="/Images/menbags2F.jpg" alt="bags"></a><h2>Bags</h2> </div>
          <div class="subcategory"> <a href="/user/${user_id}/category/men/accessorie"><img src="/Images/accessoriesmenFF.jpg" alt="accessories"> </a><h2>Accessories</h2> </div> </div> `,
      girls: `<div class="subcategories"> <div class="subcategory"><a href="/user/${user_id}/category/girls/top"><img src="/Images/girlstopsFF.jpg" alt="tops"></a><h2>Tops</h2> </div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/bottom"><img src="/Images/girlsbottomsFF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/dresse"><img src="/Images/girlsdressesF.jpg" alt="dresses"></a><h2>Dresses</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/jacket"><img src="/Images/girlsjacketsF.jpg" alt="jackets & coats"></a><h2>Jackets & Coats</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/sportswear"><img src="/Images/girlssportswearF.jpg" alt="sportswear"></a><h2>SportsWear</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/costume"><img src="/Images/girlscostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/shoes"><img src="/Images/girlshsoesF (1).jpg" alt="shoes"></a><h2>Shoes</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/bag"><img src="/Images/girlsbagsF.jpg" alt="bags"></a><h2>Bags</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/girls/accessorie"><img src="/Images/girlsaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div>`,
      boys: `<div class="subcategories">  <div class="subcategory"><a href="/user/${user_id}/category/boys/top"><img src="/Images/boystopsF.jpg" alt="tops"></a><h2>Tops</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/bottom"><img src="/Images/boysbottomsF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/jacket"><img src="/Images/boysjacketsF.jpg" alt="jackets & coats"></a><h2>Jackets & Coats</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/sportswear"><img src="/Images/boyssportswearF.jpg" alt="sportswear"></a><h2>SportsWear</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/costume"><img src="/Images/boyscostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/shoes"><img src="/Images/boysshoesF.jpg" alt="shoes"></a><h2>Shoes</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/bag"><img src="/Images/boysbagF.jpg" alt="bags"></a><h2>Bags</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/boys/accessorie"><img src="/Images/boysaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div>`,
      baby: `<div class="subcategories"> <div class="subcategory"><a href="/user/${user_id}/category/baby/sleepsuit"><img src="/Images/babysleepsuitsF.jpg" alt="sleepsuits"></a><h2>Sleepsuits</h2></div> 
          <div class="subcategory"> <a href="/user/${user_id}/category/baby/bodysuit"><img src="/Images/babybodysuitsF.jpg" alt="bodysuits"></a><h2>Bodysuits</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/baby/top"><img src="/Images/babytopsF.jpg" alt="tops"></a><h2>Tops</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/baby/bottom"><img src="/Images/babybottomsF.jpg" alt="bottoms"></a><h2>Bottoms</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/baby/jacket"><img src="/Images/babyjacketsF.jpg" alt="jackets"></a><h2>Jackets</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/baby/costume"><img src="/Images/babycostumesF.jpg" alt="costumes"></a><h2>Costumes</h2></div>
          <div class="subcategory"> <a href="/user/${user_id}/category/baby/shoes"><img src="/Images/babyshoes2FF.jpg" alt="shoes"></a><h2>Shoes</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/baby/accessorie"><img src="/Images/babyaccessoriesF.jpg" alt="accessories"></a><h2>Accessories</h2></div> </div>`,
  
      home: `<div class="subcategories"> <div class="subcategory"><a href="/user/${user_id}/category/home/fragrance"><img src="/Images/homefragranceF.jpg" alt="home fragrance"></a>Home Fragrance</h2> </div>
          <div class="subcategory"><a href="/user/${user_id}/category/home/furniture"><img src="/Images/homefurnitureF.jpg" alt="Furniture"></a>Furniture</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/home/dining"><img src="/Images/homediningF.jpg" alt="dining"></a>Dining</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/home/kitchen"><img src="/Images/homekitchenF.jpg" alt="kitchen"></a>Kitchen</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/home/bath"><img src="/Images/homebathF.jpg" alr="bathroom"></a>Bathroom</h2></div>
          <div class="subcategory"><a href="/user/${user_id}/category/home/lighting"><img src="/Images/homelightingF.jpg" alt="decor & lighting"></a>Decor & Lighting</h2></div></div>`,
    };
  
    var videoSrcs = {
      women: "/Videos/womenvid.mp4",
      men: "/Videos/menvid.mp4",
      girls: "/Videos/girlsvid.mp4",
      boys: "/Videos/boysvid3.mp4",
      baby: "/Videos/babyvid.mp4",
      home: "/Videos/homevid.mp4",
    };
  
    var landscape = {
      women: "/Images/landscapewmn.jpg",
      men: "/Images/landscapemen.jpg",
      girls: "/Images/landscapegirls222.jpg",
      boys: "/Images/landscapeboys.jpg",
      baby: "/Images/landscapebaby.jpg",
      home: "/Images/landscapehome2.jpg",
    };
  
    function updateContentnVid(category) {
      subcategoriesContainer.innerHTML = "";
  
      subcategoriesContainer.innerHTML += subcategoriesContent[category];
      selectedCategoryVideo.src = videoSrcs[category];
      selectedCategoryVideo.load();
  
      document.getElementById("landscape-image").src = landscape[category];
      document.getElementById("landscape-image").alt =
        category.charAt(0).toUpperCase() + category.slice(1); // Update alt text
    }
  
    categoryLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        var category = this.getAttribute("data-category");
        updateContentnVid(category);
      });
    });
  });
  
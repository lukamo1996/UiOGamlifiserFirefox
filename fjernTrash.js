setTimeout(function() {
  var whitelistaSider = {
    "tp.uio.no": true,
    "mail.uio.no": true,
    "for-ansatte.uio.no": true,
    "ezproxy.uio.no": true,
    "mattermost.uio.no": true,
    "github.uio.no": true,
    "webid.uio.no": true,
    "weblogin.uio.no": true,
    "weblogin-test.uio.no": true,
    "minestudier.uio.no": true,
    "studentweb.uio.no": true,
    "devilry.ifi.uio.no": true,
    "trix.ifi.uio.no": true,
    "titan.uio.no": true,
    "hr-portalen.uio.no": true,
    "jupyterhub.uio.no": true,
    "www-adm.uio.no": true,
    "data.tsd.usit.no": true,
    "selfservice.tsd.usit.no": true,
    "periodesystemet.no": false,
  }
  var url = window.location;
  var currentURL = new URL(url.href);
  var splittaURL = url.hostname.slice(url.hostname.indexOf(".") + 1);
  if(currentURL.hostname == "for-ansatte.uio.no") return;
      if(!(currentURL.hostname in whitelistaSider) || !(splittaURL in whitelistaSider)){
      var link = browser.extension.getURL("style.css");
      document.querySelectorAll("link").forEach(e => {
          if(e.href.endsWith("style2.css") && e.id != "lukasStyles"){
            e.setAttribute("href", link);
            e.setAttribute("id", "lukasStyles");
          }
      });
      var res = "";
      var sidebar = document.createElement("div");
      // try {
      //   document.querySelectorAll("*").forEach(e => e.removeAttribute("style"));
      // } catch {};
      try {
        document.querySelectorAll(".vrtx-distach-bottom.vrtx-facts").forEach(e => res = res + e.innerHTML);
      } catch {};
      try {
        document.querySelectorAll(".vrtx-distach-bottom.vrtx-facts").forEach(e => e.remove());
      } catch {};
      try {
        document.querySelector("#vrtx-course-semesters").classList.add("grey-box");
      } catch {};
      try {
        document.querySelector("#sidebar-toggle-link").nextElementSibling.remove();
      } catch {};
      try {
        document.querySelector("#sidebar-toggle-link").nextElementSibling.remove();
      } catch {};
      try {
        if (Math.ceil(document.querySelector("#left-main").clientHeight) < 105) {
          document.querySelector("#left-main").style.display = "none";
        }
      } catch {};
      try {
        document.querySelector("#left-menu-same-level-folders").remove();
      } catch {};
      try {
        document.querySelector("#sidebar-toggle-link").remove();
      } catch {};
      try {
        document.querySelector("#left-main-title").remove();
      } catch {};
      try {
        document.querySelector("#vrtx-breadcrumb").remove();
      } catch {};
      try {
        sidebar.setAttribute("id", "vrtx-additional-content");
      } catch {};
      try {
        sidebar.innerHTML = res;
      } catch {};
      try {
        document.querySelector("#vrtx-content").appendChild(sidebar);
      } catch {};
      try {
        document.querySelector("#sidebar-menu").remove();
      } catch {};
      try {
        if(!document.body.classList.contains("for-ansatte")){
          document.querySelector("#head-wrapper").innerHTML = `<div id="head-wrapper" role="banner">
                
              
      <div id="head" style = "height:150px;">
          
      
          
          <div class="uio-app-name">
              
                <a href="https://www.uio.no/" class="uio-seal" tabindex="-1">
                  <span class="offscreen-screenreader">UiO</span>
                </a>
                <a href="https://www.uio.no/" class="uio-acronym georgia">UiO</a>
                <a href="https://www.uio.no/" class="uio-host uio-host-resp" tabindex="-1">Universitetet i Oslo</a>
              
      
              
                
                  <a href="https://www.uio.no/" class="uio-host" tabindex="-1">Universitetet i Oslo</a>
                
              
      
              
                
              
      
              
          </div>
          
      
          
      
          
          <div class="head-menu" role="navigation">
            
            
            <ul>
              
                
                  <li class="for-ansatte"><a href="https://for-ansatte.uio.no/index.html?lang=no">For ansatte</a></li>
                  
                  
                    
                      <li class="language"><a href="https://www.uio.no/english/">English website</a></li>
                    
                  
                
              
              </ul>
              
      
      
          </div>
      
          <div class="header-search">
            <form method="get" action="/">
              <input type="hidden" name="vrtx" value="searchuio">
              <label for="search-string-responsive" class="search-string-label">Søk i nettsidene til UiO</label>
              <input id="search-string-responsive" type="text" name="query" placeholder="Søk i nettsidene til UiO">
              <button type="submit">Søk</button>
            </form>
          </div>
          
      
          
      </div>
      
      
      
      
      
      <div id="menu-wrapper" role="navigation">
          <ul class="menu">
          <li><a href="#" class="toggle-navigation">
                  <span class="icon"></span>
                  <span class="text">Meny</span>
              </a>
          </li>
          <li>
              <a href="#" class="toggle-search">
                  <span class="icon"></span>
                  <span class="text">Søk</span>
              </a>
          </li>
      </ul>
      </div>
      
      <!-- Global navigation start -->
      <div id="globalnav" aria-labelledby="globalnav-title">
        <span id="globalnav-title" style="display: none">Hovednavigasjon</span>
        
        
          
              <ul class="vrtx-tab-menu">
      <li class="root-folder parent-folder">
      <a href="https://www.uio.no/">Forsiden</a>
      </li>
      <li class="forskning">
      <a href="https://www.uio.no/forskning/">Forskning</a>
      </li>
      <li class="studier vrtx-current-item" aria-current="page">
      <a href="https://www.uio.no/studier/">Studier</a>
      </li>
      <li class="livet-rundt-studiene">
      <a href="https://www.uio.no/livet-rundt-studiene/">Livet rundt studiene</a>
      </li>
      <li class="tjenester">
      <a href="https://www.uio.no/tjenester/">Tjenester og verktøy</a>
      </li>
      <li class="om">
      <a href="https://www.uio.no/om/">Om UiO</a>
      </li>
      <li class="personer">
      <a href="https://www.uio.no/personer/">Personer</a>
      </li>
      </ul>
      
      
          
        
        
      </div>
      <!-- Global navigation end -->
      </div>`;
        }
      } catch {};
      var sidebar = null;
        try {
          sidebar = document.querySelector("#vrtx-additional-content");
        } catch {};
        try {
          sidebar.appendChild(document.querySelector(".vrtx-teacher-list-participants.vrtx-frontpage-box.vrtx-distach-bottom"));
        } catch {};
        try {
          sidebar.appendChild(document.querySelector("#vrtx-semester-resource-links"));
        } catch {};
        try {
          sidebar.appendChild(document.querySelector(".vrtx-frontpage-box.white-box.vrtx-distach-bottom.vrtx-program-contact-box"));
        } catch {};
        var left = document.createElement("ul");
        var right = document.createElement("ul");
        left.setAttribute("class", "left");
        right.setAttribute("class", "right");
        try {
          [...document.querySelector("#vrtx-semester-links ul").children].forEach((e, i) => {
            if (i % 2 == 0) {
              left.appendChild(e);
            } else {
              right.appendChild(e);
            }
          });
        } catch {};
      try {
        document.querySelector("#vrtx-semester-links").appendChild(left);
      } catch {};
      try {
        document.querySelector("#vrtx-semester-links").appendChild(right);
      } catch {};
      try {
        document.querySelector("#sidebar-menu").remove();
      } catch {};
      try{
        document.querySelector("#vrtx-additional-content");
      } catch {};
      try{
        document.querySelector("#vrtx-content").appendChild(document.querySelector("#vrtx-additional-content"));
      }
      catch{};
    }


}, 150);
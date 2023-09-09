// ==UserScript==
// @name         Sensei Helper Importer
// @version      0.3
// @description  Sensei Helper素材需求导入
// @author       Tiny
// @match        https://sensei.help/zh
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sensei.help
// @namespace    https://github.com/TinyTitanPro/Sensei_Helper_Importer/blob/main/Sensei_Helper_Importer.user.js
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let importbox = document.createElement('input');
    let importbtn = document.createElement('button');
    let btntext = document.createElement('div');
    let btnclick = document.createElement('span');


    let front = "{\"equipmentsRequirementStore\":{\"requirementByPieces\":[";
    let end = "],\"requirementMode\":\"ByPiece\"},\"gameInfoStore\":{\"gameServer\":\"Global\"}}";

    importbox.placeholder = '在此粘贴导入代码';
    btntext.innerText = '导入素材需求';

    importbtn.className = 'css-a89121';
    importbox.style.position = 'relative';
    importbox.style.left = '340px';
    importbox.style.right = '340px';

    importbox.className = 'css-1v4ccyo';
    importbtn.style.position = 'relative';
    importbtn.style.left = '350px';
    importbtn.style.right = '350px';

    btntext.className = ' revert-wiz-transform';
    btnclick.className = 'MuiTouchRipple-root css-w0pj6f';


    //importbtn.textContent = '导入素材需求';
    importbtn.addEventListener('click',() => {
        let importcode = front+importbox.value+end;
        window.localStorage.setItem("SenseiHelperStore",importcode);
        alert("导入完成，即将刷新页面");
        //alert(importcode);
        location.reload();
    });

    document.querySelector("#__next > div.MuiGrid2-root.MuiGrid2-container.MuiGrid2-direction-xs-row.css-6mqsus > div > div > div > div > div:nth-child(1) > div.BuiLinedText_textRowContainer__gFUcJ").appendChild(importbox);
    document.querySelector("#__next > div.MuiGrid2-root.MuiGrid2-container.MuiGrid2-direction-xs-row.css-6mqsus > div > div > div > div > div:nth-child(1) > div.BuiLinedText_textRowContainer__gFUcJ").appendChild(importbtn);
    importbtn.appendChild(btntext);
    importbtn.appendChild(btnclick);

})();
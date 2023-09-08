// ==UserScript==
// @name         Sensei Helper Importer
// @version      0.2
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
    let importbox = document.createElement('textarea');
    let importbtn = document.createElement('button');

    let front = "{\"equipmentsRequirementStore\":{\"requirementByPieces\":[";
    let end = "],\"requirementMode\":\"ByPiece\"},\"gameInfoStore\":{\"gameServer\":\"Global\"}}";

    importbox.placeholder = '在此粘贴导入代码';
    importbtn.textContent = '导入素材需求';
    importbtn.addEventListener('click',() => {
        let importcode = front+importbox.value+end;
        window.localStorage.setItem("SenseiHelperStore",importcode);
        alert("导入完成，即将刷新页面");
        //alert(importcode);
        location.reload();
    });

    document.querySelector("#__next > div.MuiGrid2-root.MuiGrid2-container.MuiGrid2-direction-xs-row.css-6mqsus > div > div > div > div > div:nth-child(1) > div.BuiLinedText_textRowContainer__gFUcJ").appendChild(importbox);
    document.querySelector("#__next > div.MuiGrid2-root.MuiGrid2-container.MuiGrid2-direction-xs-row.css-6mqsus > div > div > div > div > div:nth-child(1) > div.BuiLinedText_textRowContainer__gFUcJ").appendChild(importbtn);

})();

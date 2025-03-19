function terminalApp () {
    new WinBox({
        title: "Terminal",
        icon: "assets/desktop.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "45%",
        minwidth: "400px",
        minheight: "300px",
        // url: "https://stieler.dev/"
        oncreate: function(){
            const div1 = document.createElement("div");
            div1.style = "background-color: rgb(178, 198, 209); height: 100%; width: 100%;";
            document.getElementById(this.id).querySelector('.wb-body').appendChild(div1);

            const div2 = document.createElement("div");
            div2.style = "background-color: rgb(250, 240, 230); position: absolute; top: 1%; left: 1%; height: 98%; width: 98%; border: 2px solid black; padding: 4px;";
            div1.appendChild(div2);
            
            const div3 = document.createElement("div");
            div3.style = "position: relative; width: 100%; height: 100%; overflow: hidden;";
            div2.appendChild(div3);

            const iframe = document.createElement("iframe");
            iframe.src = "https://stieler.dev/";
            iframe.style = "height: 100%; width: 100%;"
            div3.appendChild(iframe);
        },
    });
}

function internetApp () {
    new WinBox({
        title: "Internet",
        icon: "assets/internet.png",
        x: "center",
        y: "center",
        width: "55%",
        minwidth: "500px",
        minheight: "300px",
        height: document.body.clientWidth/2.5,
        url: "apps/internet.app.html",
    });
}

function videosApp () {
    new WinBox({
        title: "Videos",
        icon: "assets/videos.png",
        x: "center",
        y: "center",
        width: "600px",
        height: "540px",
        minwidth: "500px",
        minheight: "450px",
        url: "apps/videos.app.html",
    });
}

function filesApp () {
    new WinBox({
        title: "Files",
        icon: "assets/folder.png",
        x: "center",
        y: "center",
        width: "500px",
        height: "500px",
        maxwidth: "570px",
        maxheight: "550px",
        minwidth: "320px",
        minheight: "330px",
        url: "apps/files.app.html",
    });
}

function trashApp () {
    new WinBox({
        title: "Trash",
        icon: "assets/trashbin.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "500px",
        url: "apps/trash.app.html",
    });
}

function todoApp () {
    new WinBox({
        title: "ToDo",
        icon: "assets/todo.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "500px",
        minwidth: "150px",
        minheight: "210px",
        url: "apps/todo.app.html",
    });
}

function uniApp () {
    new WinBox({
        title: "h-da",
        icon: "assets/uni.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "370px",
        minwidth: "550px",
        minheight: "370px",
        maxwidth: "550px",
        maxheight: "370px",
        url: "apps/uni.app.html",
    });
}

function musicApp () {
    new WinBox({
        title: "Music",
        icon: "assets/music.png",
        x: "center",
        y: "center",
        width: "400px",
        height: "440px",
        minwidth: "400px",
        minheight: "440px",
        url: "apps/music.app.html",
    });
}

function aboutApp () {
    new WinBox({
        title: "About",
        icon: "assets/human.png",
        x: "100px",
        y: "150px",
        width: "400px",
        height: "300px",
        maxwidth: "400px",
        maxheight: "300px",
        minwidth: "400px",
        minheight: "300px",
        url: "apps/about.app.html",
        resizable: false,
    });
}
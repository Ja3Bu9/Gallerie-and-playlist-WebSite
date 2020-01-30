class Node {
  constructor(data, next, back) {
    this.data = data;
    this.next = next || null;
    this.back = back || null;

  }
}

class LinkedList {
  constructor() {
    this.head = ['1', '2', '3', '4'];
    this.size = 0;
    this.current = this.head[0];
    this.page = ['<img width="300px" src="/site playliste-img/img/red.jpg" alt=""><div class="infos"><div class="flex"><h1>Titre : </h1><h2> Red Square Meeting</h2></div><div class="flex"><h1>Artiste :</h1><h2>Trabant 33</h2></div></div>', '<img width="300px" src="/site playliste-img/img/hide.jpg" alt=""><div class="infos"><div class="flex"><h1>Titre : </h1><h2>Hide And Seek</h2></div><div class="flex"><h1>Artiste :</h1><h2>Mike Franklyn</h2></div></div>', '<img width="300px" src="/site playliste-img/img/sun.jpg" alt=""><div class="infos"><div class="flex"><h1>Titre : </h1><h2>Sunshine Stroll</h2></div><div class="flex"><h1>Artiste :</h1><h2>Mike Franklyn</h2></div></div>', '<img width="300px" src="/site playliste-img/img/up.jpg" alt=""><div class="infos"><div class="flex"><h1>Titre : </h1><h2>Up in Trouble</h2></div><div class="flex"><h1>Artiste :</h1><h2>Mike Franklyn</h2></div></div>'];
    this.info = this.page[0];
    this.image = ['<img width="700px" src="img/img1.jpg" alt="">', '<img width="700px" src="img/img2.jpg" alt="">','<img width="700px" src="img/img3.jpg" alt="">','<img width="700px" src="img/img4.jpg" alt="">'];
    this.galerie = this.image[0];
  }


  Next() {


    if (this.size === this.head.length - 1) {
      this.size = 0;
    } else {
      this.size++;
    }
    this.current = this.head[this.size];
    this.info = this.page[this.size];
    this.galerie = this.image[this.size];
  }


  moveBack() {
    if (this.size === 0) {
      this.size = this.head.length - 1;
    } else {
      this.size--;
    }

    this.current = this.head[this.size];
    this.info = this.page[this.size];
    this.galerie = this.image[this.size];


  }

  printListData() {
    return this.current;

  }

  printpage() {
    return this.info;
  }

  printimage() {
    return this.galerie;
  }
}



let list = new LinkedList();


function nextVal() {
  list.Next();
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/' + list.printListData() + '.mp3"></audio>';

  document.getElementById('printpage').innerHTML = list.printpage();

}

function nextImg() {
  list.Next();

  document.getElementById('printgal').innerHTML = list.printimage();

}

function backVal() {
  list.moveBack();
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/' + list.printListData() + '.mp3"></audio>';

  document.getElementById('printpage').innerHTML = list.printpage();
}

function backImg() {
  list.moveBack();

  document.getElementById('printgal').innerHTML = list.printimage();

}
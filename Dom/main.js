let data =[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://via.placeholder.com/600/197d29",
    "thumbnailUrl": "https://via.placeholder.com/150/197d29"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  },
  {
    "albumId": 1,
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "url": "https://via.placeholder.com/600/f9cee5",
    "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
  },
  {
    "albumId": 1,
    "id": 16,
    "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    "url": "https://via.placeholder.com/600/fdf73e",
    "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
  },
  {
    "albumId": 1,
    "id": 17,
    "title": "natus doloribus necessitatibus ipsa",
    "url": "https://via.placeholder.com/600/9c184f",
    "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
  },
  {
    "albumId": 1,
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "url": "https://via.placeholder.com/600/1fe46f",
    "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
  },
  {
    "albumId": 1,
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
  },
  {
    "albumId": 1,
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "url": "https://via.placeholder.com/600/8985dc",
    "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
  }
]



let createMyOwnElement = (parent,element, classes,txt,attributes = []) => {

  let myEl = document.createElement(element);
  if(classes) myEl.classList = classes;
  myEl.innerText = txt;
  parent.appendChild(myEl);
  attributes.forEach(attr => myEl[attr.attrName] = attr.attrVal)
  // [ {attrName:"src", attrVal:ele.val} ]
  return myEl;

}

data.forEach(el => {
  let masterDiv = createMyOwnElement(wrapped,"div","gy-3  col-12 col-sm-6 col-md-4 col-lg-3",null)
  let innerDiv = createMyOwnElement(masterDiv,"div","border border-1 border-danger w-100 h-100",null)
   createMyOwnElement(innerDiv,"img","img-fluid  w-100",null,
   [{attrName:"src",attrVal:el.url},
  {attrName:"id",attrVal:el.id}])
   createMyOwnElement(innerDiv,"h6",null,el.title)
  // img.src = el.thumbnailUrl
 
  
  


})

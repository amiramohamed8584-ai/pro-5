
let allproducts = document.querySelector('.products')

let products =[
    {id:1 , title:" بوكية عروسة ابيض بفيونكة اورجانزا وكريستال",description:"تتكون الباقة من مجموعة متناسقه من الزهور البيضاء المصنوعه من الاقمشة او المواد المزخرفة",price:500 , imageUrl:"image/flower-1.jpeg" },
    {id:2 , title:"بوكية عروسة أبيض كريستال - موديل الشلال",description:"بوكية زفاف فاخر مصنوع من الورد الستان الأبيض النقي، مطعم بفصوص الكريستال اللامعة مع يد كريستال بتصميم الشلال المنسدل لإطلالة ملكية ساحر",price:550 , imageUrl:"image/flower-2.jpeg"},
    {id:3 , title:"بوكية توليب أبيض بوهيمي - بيد خوص طبيعي",description:"تتكون الباقة من مجموعة متناسقه من الزهور البيضاء المصنوعه من الاقمشة او المواد المزخرفة",price:600 , imageUrl:"image/flower-3.jpeg" },
    {id:4 , title:" بوكية ورد بينك بغلاف موف وبيبي فلاور ",description:"بوكية ناعم من الورد البينك والجبسوفيلا الأبيض مغلف بورق بينك بستايل رومانسي",price:700 , imageUrl:"image/flower-4.jpeg"},
    {id:5 , title:"بوكية تخرج عنابي وأبيض بقبعة التخرج ",description:"بوكية تخرج فخم من الجيربيرا العنابي والقرنفل الأبيض مغلف بورق عنابي أنيق ومزين بقبعة تخرج ",price:650 , imageUrl:"image/flower-5.jpeg"},
    {id:6 , title:" بوكية عروسة زنبق بينك وروز - خطوبة ",description:" بوكية عروسة فاخر من زهرة الليلي البينك والروز الأبيض والبينك مع الجبسوفيلا بغلاف أبيض شفاف ",price:750 , imageUrl:"image/flower-6.jpeg"},
    {id:7 , title:" بوكيه تخرج - لؤلؤة ",description:"  بوكيه راقي للعروسة أو للتصوير، ورد صناعي أبيض مطرز باللؤلؤ والاستراس، شيك جدا في صور الغروب. ",price:750 , imageUrl:"image/flower-11.jpeg"},
    {id:8 , title:" بوكيه شفاف - حبي الأول ",description:"  بوكيه رومانسي ناعم، 7 وردات بيضاء مع بيبي فلاور أزرق، ملفوف بورق شفاف مكتوب عليه My Love، مناسب لعيد الحب والخطوبة. ",price:750 , imageUrl:"image/flower-12.jpeg"},
    {id:9 , title:" بوكيه الرومانسية",description:"ميكس أنيق من الورد الأحمر والبيج مع لمسة بيبي فلاور أبيض، ملفوف بورق روز جولد، بيقول كل كلام الحب من غير ما تتكلمي. ",price:750 , imageUrl:"image/flower-13.jpeg"},
    {id:10 , title:" بوكيه الفراشة - بينك ناعم ",description:"  مزيج رقيق من الورد البينك والأبيض مع ورد صغير وبيبي فلاور، ملفوف بطريقة كلاسيكية، مناسب جدا كهدية لصاحبتك أو عيد ميلاد. ",price:750 , imageUrl:"image/flower-14.jpeg"},
    {id:11, title:" بوكيه الأميرة ",description:"  بوكيه فخم وناعم في نفس الوقت، فيه ليلي وورد بينك وبيبي فلاور، شكله منفوش وكيوت، هيخلي أي بنت تحس انها أميرة. ",price:750 , imageUrl:"image/flower-15.jpeg"},
    {id:12, title:" بوكيه الحب الكامل ",description:" بوكيه كله ورد بينك صافي مع لمسة بيبي فلاور بينك، شكله رومانسي جدا ومليان حب، مثالي لعيد الحب أو الاعتذار بطريقة شيك. ",price:750 , imageUrl:"image/flower-16.jpeg"},
]
function drowprodect(){
 let y = products.map ((item) =>{
    return`<div class="product-item col-12 col-md-6 col-lg-4">
        <img src="${item.imageUrl}" class="card-img-top" alt="..." ;">
<div class="card-body">
  <h4 class="card-title"> ${item.title} </h4>
  <p class="card-text"> ${item.description} </p>
  <button class=" add-to-cart btn-solid theme-primary" onclick="addToCart(${item.id})">Add To Cart</button>
</div>
        </div>`
 })
 allproducts.innerHTML = y.join("")
}
drowprodect()
// //////////////////////////////////////////////////////////////////////////
let veiwproductDiv = document.querySelector(".veiwproduct div")
let padge =document.querySelector(".padge")
let addedItem= localStorage.getItem('productincart')?JSON.parse( localStorage.getItem('productincart')):[];
if(addedItem){
    addedItem.map(item =>{
            veiwproductDiv.innerHTML+=`<p>${item.title}</p>`
    })
    padge.style.display="block"
    padge.innerHTML = addedItem.length
}
function addToCart(id){
    let chooseItem = products.find((item) => item.id ===id)
    addedItem =[...addedItem ,chooseItem ]
    localStorage.setItem("productincart",JSON.stringify(addedItem) ) 
    
    
    veiwproductDiv.innerHTML+=`<p>${chooseItem.title}</p>`
    let veiwproductDivp = document.querySelectorAll(".veiwproduct div p")
    padge.innerHTML = veiwproductDivp.length

    padge.style.display="block"
    veiwproduct.style.display="block"


}
let cart = document.querySelector(".cart")
let veiwproduct = document.querySelector(".veiwproduct")

cart.addEventListener('click' , ()=>{
    if(veiwproduct.innerHTML!=""){
        if(veiwproduct.style.display=="block"){
            veiwproduct.style.display="none"
        }else{
            veiwproduct.style.display="block"
        }
    }

})


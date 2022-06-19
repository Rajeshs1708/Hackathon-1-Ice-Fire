//HTML Elements and styling using DOM

let div1=document.createElement("div");
div1.setAttribute("id","division1");
div1.style.padding='20px';
div1.style.display='flex';
div1.style.justifyContent='center';
div1.style.alignItems='center';
div1.style.boxShadow='4px 4px 4px rgba(0,0,0,0.15)';


let heading=document.createElement('h2');
heading.innerText="Ice and Fire API ";
heading.style.textAlign='center';
heading.style.color='white';
heading.style.fontSize='40px';


let fm=document.createElement("form");
fm.setAttribute("id","form");
fm.style.display='flex';
fm.style.justifyContent='center';
fm.style.alignItems='center';
fm.style.width='800px';
fm.style.height='100px';
fm.style.boxShadow='4px 4px 4px rgba(0,0,0,0.15)';


let label=document.createElement("label");
label.setAttribute("for","input");
label.innerHTML="Enter 'books' here : ";
label.style.fontWeight='bold';
label.style.fontSize='20px';

let inp=document.createElement("input");
inp.setAttribute("id","input");
inp.setAttribute("type","text");
inp.setAttribute("name","input");
inp.style.width='400px';
inp.style.height='25px';


let btn=document.createElement("button",'submit');
btn.innerText="Submit";
btn.style.width='70px';
btn.style.height='30px';



let div2=document.createElement("div");
div2.setAttribute("id","division2");
div2.style.width='100%';
div2.style.height='60vh';
div2.style.overflow='scroll';
div2.style.fontWeight='bold';


let div=document.getElementById('container');
div.style.backgroundColor='#9fa8a3';
div.style.display='flex';
div.style.flexDirection="column";
div.style.fontFamily='Georgia, serif';


div.prepend(heading);
div.append(div1);
div.append(div2);
div1.append(fm);
fm.append(label);
fm.append(inp);
fm.append(btn);


let form=document.getElementById('form');
let input=document.getElementById('input');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let value=input.value
    input.value='';
    func (value);
})

 // Async await and fetch
 page=1;
 pageSize=12;

let func=async(value)=>{
try{
    let url= await fetch(`https://www.anapioficeandfire.com/api/${value}?page=${page}&pageSize=${pageSize}`)
    let data= await url.json();
    for(let i=0;i<data.length;i++){
    
        console.log('name = ',data[i].name)
        console.log('isbn = ',data[i].isbn)
        console.log('numberOfPages = ',data[i].numberOfPages)
        console.log('authors = ',data[i].authors)
        console.log('publisher = ',data[i].publisher)
        console.log('released = ',data[i].released)
        console.log('characters = ',data[i].characters.splice(0,5))
        console.log('-'.repeat(100));


        let ol = document.createElement('ol')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3= document.createElement('li')
        let li4= document.createElement('li')
        let li5= document.createElement('li')
        let li6= document.createElement('li')
        let li7= document.createElement('li')
        let li8= document.createElement('hr')
        let li9= document.createElement('br')
        
        li1.innerText = `name = ${data[i].name}`
        li2.innerText = `isbn = ${data[i].isbn}`
        li3.innerText = `numberOfPages = ${data[i].numberOfPages}`
        li4.innerText = `authors = ${data[i].authors}`
        li5.innerText = `publisher = ${data[i].publisher}`
        li6.innerText = `released = ${data[i].released}`
        li7.innerText = `characters = ${data[i].characters.splice(0,5)}`
        ol.append(li1,li2,li3,li4,li5,li6,li7,li8,li9)
        div2.append(ol)
        
    }
}
catch(err){
    console.log(err);
    }
}






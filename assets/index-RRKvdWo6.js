(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const g=[{id:1,name:"Wireless Bluetooth Headphones",image:"https://via.placeholder.com/300",price:"49.99",stock:25},{id:2,name:"Smartphone 128GB",image:"https://via.placeholder.com/300",price:"599.99",stock:15},{id:3,name:'4K Ultra HD TV 55"',image:"https://via.placeholder.com/300",price:"799.99",stock:10},{id:4,name:'Laptop 15.6" 256GB SSD',image:"https://via.placeholder.com/300",price:"999.99",stock:8},{id:5,name:"Smartwatch Series 6",image:"https://via.placeholder.com/300",price:"299.99",stock:30},{id:6,name:"Gaming Console 1TB",image:"https://via.placeholder.com/300",price:"499.99",stock:20},{id:7,name:"Portable Bluetooth Speaker",image:"https://via.placeholder.com/300",price:"39.99",stock:50},{id:8,name:"DSLR Camera 24MP",image:"https://via.placeholder.com/300",price:"649.99",stock:12}];function y(){return g}const s=document.getElementById("shopping-cart"),x=s.querySelector("#cart-backdrop"),b=s.querySelector("#cart-close"),L=s.querySelector("#continue-shopping"),w=document.getElementById("cart-open");function l(){s.classList.add("hidden")}function E(){s.classList.remove("hidden")}x.addEventListener("click",l);b.addEventListener("click",l);L.addEventListener("click",l);w.addEventListener("click",E);function k(o,n,i){const e=document.createElement("div");e.classList.add("pointer-events-none","fixed","inset-0","flex","items-end","px-4","py-6","sm:items-start","sm:p-6");const t=`
                <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="p-4">
                        <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">${n}</p>
                            <p class="mt-1 text-sm text-gray-500 ${i?"":"hidden"}">${i}</p>
                        </div>
                        <div class="ml-4 flex flex-shrink-0">
                            <button id="remove-notification" type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="sr-only">Close</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`;return e.innerHTML=t,document.querySelector("body").appendChild(e),e}function S(o="success",n,i=""){const e=k(o,n,i);e.querySelectorAll("#remove-notification").forEach(t=>{t.addEventListener("click",r=>{e.remove()})}),setTimeout(()=>{e.remove()},4e3)}const u=y(),f=document.getElementById("product-grid"),C=document.getElementById("search"),h=document.getElementById("cart-products-count"),d=document.getElementById("cart-product-list"),c=[];(function(){v(f,u),m(d,c)})();function v(o,n){o.innerHTML="",n.forEach(i=>{const e=document.createElement("a");e.classList.add("group"),e.innerHTML=`
                        <div
                            class="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200"
                        >
                            <img
                                src="${i.image}"
                                alt="Product Image"
                                class="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            ${i.name}
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                            $${i.price}
                        </p>
                        <button
                            id="add-to-cart"
                            data-id="${i.id}"
                            type="button"
                            class="mt-3 inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add to Cart
                            <svg
                                class="-mr-0.5 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>`,o.appendChild(e),e.querySelector("#add-to-cart").addEventListener("click",B)})}C.addEventListener("input",o=>{const n=u.filter(i=>i.name.toLowerCase().includes(o.target.value.toLowerCase()));v(f,n)});function B(o){const n=u.find(e=>e.id==o.currentTarget.dataset.id),i=c.find(e=>e.id==n.id);i?i.quantity+=1:c.push({...n,quantity:1}),h.innerText=c.reduce((e,t)=>e+=t.quantity,0),m(d,c),S("success","Successfully Added!","Your selected product has been added to the cart.")}function T(o){const n=c.findIndex(i=>i.id==o.currentTarget.dataset.id);c.splice(n,1),h.innerText=c.reduce((i,e)=>i+=e.quantity,0),m(d,c)}function m(o,n){o.innerHTML="",n.forEach(e=>{const t=document.createElement("li");t.classList.add("flex","py-6"),t.innerHTML=`
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="${e.image}"
                            alt="Product Image" />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                        <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">${e.name}</a>
                                </h3>
                                <p class="ml-4">${p(e.price*e.quantity)}</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                        </div>

                        <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-gray-500 font-medium">Qty: ${e.quantity}</p>

                            <div class="flex">
                                <button data-id="${e.id}" type="button" id="cart-item-remove" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                            </div>
                        </div>
                    </div>`,d.appendChild(t),t.querySelector("#cart-item-remove").addEventListener("click",T)});const i=n.reduce((e,t)=>e+=t.price*t.quantity,0);document.getElementById("cart-sub-total").innerText=p(i),n.length>0?document.getElementById("cart-empty").classList.add("hidden"):document.getElementById("cart-empty").classList.remove("hidden")}function p(o){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)}

"use strict";
  
  let body = document.body;
 let b_d_s = body.children[1];

 let sr = body.children[1];

let rr = sr.children[0];

let f_link = document.createElement("a");                
let first = document.createTextNode("Link 1");        
f_link.appendChild(first);                              
rr.appendChild(f_link );
rr.insertAdjacentElement('afterbegin', f_link );

f_link.setAttribute("href", "#");
let last_link = document.createElement("a");                
let last = document.createTextNode("Link 7");        
last_link.appendChild(last);                              
rr.appendChild(last_link);
rr.insertAdjacentElement('beforeend', last_link);
last_link.setAttribute("href", "#");

let t =  body.children[1];
let nn = t.children[1];
nn.children[0].innerHTML = "Main Content Here";



let main = b_d_s.children[1]
let w =main;



let m_p = document.createElement("a");                
 let f_m_p = document.innerHTML = w.children[1];
m_p.appendChild(f_m_p);                      
w.appendChild(m_p); 

w.insertAdjacentElement('beforeend', m_p );
m_p.setAttribute("href", "#");

m_p.setAttribute("style", "text-decoration:none ; color:#a2509b ");





let m_p_2 = document.createElement("a");                
 let s_m_p = document.innerHTML = w.children[1];
m_p_2.appendChild(s_m_p);                      
w.appendChild(m_p_2); 

w.insertAdjacentElement('beforeend', m_p_2 );
m_p_2.setAttribute("href", "#");

m_p_2.setAttribute("style", "text-decoration:none ; color:#a2509b");



let m_p_3 = document.createElement("a");                
 let t_m_p = document.innerHTML = w.children[1];
m_p_3.appendChild(t_m_p);                      
w.appendChild(m_p_3); 

w.insertAdjacentElement('beforeend', m_p_3 );
m_p_3.setAttribute("href", "#");

m_p_3.setAttribute("style", "text-decoration:none ; color:#a2509b");








let div_e = sr.children[2];
div_e.children[0].remove()
div_e.children[0].remove()
div_e.children[0].remove()


let aside = div_e;

let f_d_e = document.createElement("div");                
 let f_h_e = document.createElement("h3");
 let f_p_e = document.createElement("p");
let f_h_t = document.createTextNode("Title 1");
 let f_p_t = document.createTextNode("Comment 1");
 f_h_e.append(f_h_t)  
 f_p_e.append(f_p_t)
 f_d_e.appendChild(f_h_e); 
f_d_e.appendChild(f_p_e);                    
aside.appendChild(f_d_e); 

aside.insertAdjacentElement('afterbegin', f_d_e );

let s_d_e = document.createElement("div");                
 let s_h_e = document.createElement("h3");
 let s_p_e = document.createElement("p");
let s_h_t = document.createTextNode("Title 2");
 let s_p_t = document.createTextNode("Comment 2");
 s_h_e.append(s_h_t)  
 s_p_e.append(s_p_t)
 s_d_e.appendChild(s_h_e); 
s_d_e.appendChild(s_p_e);                    
aside.appendChild(s_d_e); 

aside.insertAdjacentElement('beforeend', s_d_e );




let t_d_e = document.createElement("div");                
 let t_h_e = document.createElement("h3");
 let t_p_e = document.createElement("p");
let t_h_t = document.createTextNode("Title 3");
 let t_p_t = document.createTextNode("Comment 3");
 t_h_e.append(t_h_t)  
 t_p_e.append(t_p_t)
 t_d_e.appendChild(t_h_e); 
t_d_e.appendChild(t_p_e);                    
aside.appendChild(t_d_e); 

aside.insertAdjacentElement('beforeend', t_d_e );


let a = div_e.children;
a[0].style.color = "#ef4c5b"
a[1].style.color = "#4664fe"
a[2].style.color = "#3b8950"
 

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---
ans:
1. getElementById দিয়ে একটি নির্দিষ্ট id এর element  ধরা হয়। getElementsByClassName দিয়ে একই নামের ক্লাস কে ধরা যায়, এটি HTMLCollection return করে।  
index number ব্যবহার করে  dom কে পরিবর্তন করা হয় । querySelector হছে CSS selector যা  ব্যবহার করে প্রথম matching element কে ধরতে সাহায্য করে। querySelectorAll হছে CSS selector যা  ব্যবহার করে সব matching element কে ধরতে সাহায্য করে।  

2. create and insert a new element into the DOM => 
 যেকোনো একটা  এলিমেন্ট createElement এর মাধ্যমে create করতে হবে 
 তারপর ঐ এলিমেন্ট এর ভিতর innerHTML, innerText, innerConent এড করতে হবে।
create করা এলিমেন্টকে যে জায়গায় insert  করতে চাই সেই panentElement কে ধরতে হবে
 parant এর মধ্য appendChild করতে হবে create করা  এলিমেন্টকে

example:
const p = document.createElement("p");
p.innerText = "This is a new paragraph";
const div=document.getElemetById('div')
div.appendChild(p)

3. Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো event child থেকে prarenet  তাঁর parent থেকে  তাঁর parent এভাবেই নিচ থেকে উপরের দিকে এ ধাবিত হয় Event 


4. Event Delegation হলো এমন একটি পদ্ধতি যেখানে প্রতিটি child element-এ আলাদা করে event listener না বসিয়ে, তাদের common parent-এ একটি মাত্র event listener বসানো হয় — আর event bubbling ব্যবহার করে কোন child থেকে event এসেছে তা শনাক্ত করা হয়

5. stopPropagation() ব্যবহার করা হয় Event Bubbling বন্ধ করার জন্য যাতে করে parent এর ইভেন্ট ফায়ার নাহ হয় 
preventDefault() ব্যবহার করা হয় difault কাজ বন্ধ করার জন্য । 



let orginalBlogPost = [];
let tArray = document.getElementsByClassName('blogP');
console.log(tArray.length)
for (var i = 0; i < tArray.length; i++) {
    let blogText = tArray[i].innerHTML;
    orginalBlogPost.push(blogText)
    console.log(blogText.length)
    if (blogText.length > 1200) {
        let temp = document.getElementsByClassName('blogP');
        temp[i].innerHTML = blogText.slice(0, 1200) + `.....<h2 id='moreBlog' class='${i}'>Click for more</h2>`
    }
}

let moreBlog = document.querySelectorAll('#moreBlog')
let targetId
for (var i = 0; i < moreBlog.length; i++) {
    moreBlog[i].addEventListener("click", (e) => {
        console.log(e.target.className)
        let targetId = e.target.className
        let p = document.querySelectorAll('p')
        // do innerHTML here on p[targetID]
        console.log(p[targetId])
        // setting summary blog to orginal blog
        p[targetId].innerHTML = orginalBlogPost[targetId]
    })
}


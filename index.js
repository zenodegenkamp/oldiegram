const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")
let content = ""

function render(arr) {
    for (let i = 0; i < arr.length; i++){
       content += `
       <section> 
                <div class="profile-container">  
                    <img class="avatar" src="${arr[i].avatar}">
                    <div class="post-information">
                        <h4 class="name">${arr[i].name}</h4>
                        <p class="location">${arr[i].location}</p>
                    </div> 
                </div>
            </section> 
            
             <section> 
                <div class="container">  
                    <img alt="picture of ${arr[i].name}" class="post" src="${arr[i].post}">
                </div>
            </section> 
            
               <section>
                <div class="icon-container">
                    <img class="icons margin-around heart" src="images/icon-heart.png">
                    <img class="icons margin-around" src="images/icon-comment.png">
                    <img class="icons margin-around" src="images/icon-dm.png">
                </div>
            </section>
            
              <section>
                <div class="likes-and-comments">
                <h4 <span class="likes">${arr[i].likes}</span> likes</h4>
                <p><span><bold>${arr[i].username}<bold></span> ${arr[i].comment} </p> 
                </div>
            </section>
    
        `
       main.innerHTML = content
    }
}

render(posts)

const likes = document.getElementsByClassName("likes")
const images = document.getElementsByClassName("post")
const hearts = document.getElementsByClassName("heart")

// All the function to enable the like option for Vincent
const likeVincent = likes[0]
const imageVincent = images[0]
const heartVincent = hearts[0]

heartVincent.addEventListener("click", function() {
     console.log("Liked picture of Vincent!")
     posts[0].likes += 1 
     likeVincent.innerHTML = `${posts[0].likes} likes`
     heartVincent.src = "images/heart.png"
}) 

imageVincent.addEventListener("dblclick", function() {
     console.log("Liked picture of Vincent!")
     posts[0].likes += 1 
     likeVincent.innerHTML = `${posts[0].likes} likes`
     heartVincent.src = "images/heart.png"
}) 

// All the function to enable the like option for Gus
const likeGus = likes[1]
const imageGus = images[1]
const heartGus = hearts[1]

heartGus.addEventListener("click", function() {
     console.log("Liked picture of Gus")
     posts[1].likes += 1 
     likeGus.innerHTML = `${posts[1].likes} likes`
     heartGus.src = "images/heart.png"
}) 

imageGus.addEventListener("dblclick", function() {
     console.log("Liked picture of Gus!")
     posts[1].likes += 1 
     likeGus.innerHTML = `${posts[1].likes} likes`
     heartGus.src = "images/heart.png"
}) 

// All the function to enable the like option for Joseph
const likeJoseph = likes[2]
const imageJoseph = images[2]
let heartJoseph = hearts[2]

heartJoseph.addEventListener("click", function() {
     console.log("Liked picture of Joseph!")
     posts[2].likes += 1 
     likeJoseph.innerHTML = `${posts[2].likes} likes`
     heartJoseph.src = "images/heart.png"
})   

imageJoseph.addEventListener("dblclick", function() {
     console.log("Liked picture of Joseph!")
     posts[2].likes += 
     likeJoseph.innerHTML = `${posts[2].likes} likes`
     heartJoseph.innerHTML = `<img class="icons margin-around heart" src="images/heart.png">`
     heartJoseph.src = "images/heart.png"
}) 






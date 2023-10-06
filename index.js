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

const postContainer = document.getElementById("post-container")


for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    postContainer.innerHTML += `
            <main id="main">
                <section>
                    <img id="avatar-img" src="${post.avatar}">
                        <div class="avatar-info">
                            <p class="bold" id="name">${post.name}</p>
                            <p id="location">${post.location}</p>
                        </div> 
                </section>       
                <img class="post-img" src="${post.post}">
            </main>
                
            <footer id="footer">
                <div class="icons">
                    <button id="like-btn"><img class="icon" src="images/icon-heart.png"></button>
                    <button><img class="icon" src="images/icon-comment.png"></button>
                    <button><img class="icon" src="images/icon-dm.png"></button>            
                </div>
                <p class="bold" id="likes">${post.likes} likes</p>
                <p id="comment"><span class="bold" id="user-name">${post.username}</span> ${post.comment}</p>
            </footer>
            <div class="gray- gap"></div>
    `
}



window.addEventListener('hashchange', () => {
//console.log(window.location.hash)
getEventFromHash()

})

function getEventFromHash(){
const title = window.location.hash.slice(1)
console.log(title)



const findPost = state.posts.find((posted) => {
  return posted.title === title
})

console.log(findPost)
}





let state = {
    posts: [],
    singlePost: null
};

async function render(){
    await getPosts()
    renderPostList()
    getSinglePost()
}


const postDiv = document.getElementById('postDiv')

async function getSinglePost(){
  const postData = await fetch('https://jsonplaceholder.typicode.com/posts')
  const singlePostData = await postData.json()
  state.singlePost = singlePostData
  console.log(state)
}

//function renderPostDetails(){
const allPostDiv = document.querySelector("#allPostDiv");

function renderPostList(){
     const allPosts = state.posts.map((post) => {
         return `<div> <a href=#${post.title}> ${post.title} </a> </div>`
     })
      allPostDiv.innerHTML = allPosts.join('')
}
 
async function getPosts(){
    const info = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await info.json()
    console.log(postData)
    state.posts = postData
    console.log(state)
}

render()
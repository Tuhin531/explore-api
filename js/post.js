function postData() {
    const link = 'https://jsonplaceholder.typicode.com/posts'
    fetch(link)
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
      
        const postDiv = document.createElement('div');
       postDiv.classList.add('post');
        postDiv.innerHTML = `
         <div> User - ${post.userId} </div>
         <h5> Post: ${post.title} </h5>
         <p> Post description ${post.body} </p>
        
        `
        postsContainer.appendChild(postDiv);
    }



}

postData();
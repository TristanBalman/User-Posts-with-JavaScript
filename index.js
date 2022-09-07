// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userListEl = document.querySelector(".user-list");

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();


  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

//When we click on a user; we want to show the posts created by the user with this ID.
function showUserPosts(id) {
    //Access local storage
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}

function userHTML(user) {
    //Add an 'onclick' event listener to take us to the user's posts.
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
                <div class="user-card__container">
                    <h3>${user.name}</h3>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
                    ${user.website}
                    </a></p>
                </div>
            </div>`
}
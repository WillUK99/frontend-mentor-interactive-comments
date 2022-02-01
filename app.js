const commentSection = document.querySelector(".commentSection")
const comments = [...document.querySelectorAll(".comment")]
const upvoteBtns = [...document.querySelectorAll(".comment__upvote")]
const upvoteCounts = [...document.querySelectorAll(".comment__totalUpvotes")]
const downvoteBtns = [...document.querySelectorAll(".comment__downvote")]
const replyBtns = [...document.querySelectorAll(".comment__reply")]
const deleteBtns = [...document.querySelectorAll(".comment__delete")]
const editBtns = [...document.querySelectorAll(".comment__edit")]
const commentForm = [...document.querySelectorAll(".comment__form")]
const commentTxtArea = [...document.querySelectorAll(".comment__area")]
const sendBtns = [...document.querySelectorAll(".comment__send")]

const log = console.log

async function getDataJSON(data) {
    try {
        const res = await fetch(data)
        const { currentUser, comments } = await res.json()
        return { currentUser, comments }
    } catch (err) {
        console.error(err)
    }
}

getDataJSON("data.json").then(data => populateComments(data))

// Can use 'for in' but 'for of' is faster
function populateComments({ currentUser, comments }) {
    for (key of Object.keys(comments)) {
        const comment = document.createElement("div")
        const commentClassNames = ["comment", "comment--mainThread"]
        comment.classList.add(...commentClassNames)
    }
}
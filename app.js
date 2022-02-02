const commentSection = document.querySelector(".commentSection")

const log = console.log

let currentUser = {}
let commentsArr = []

const fetchData = async () => {
    try {
        const res = await fetch("data.json")
        const data = await res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

const updateUserData = (data) => {
    currentUser = data.currentUser
    commentsArr.push(data.comments)
}

fetchData().then((data) => updateUserData(data))



/**
 * Rendering comments / replies
 */

const renderComments = () => {
    const sortedComments = commentsArr.sort((a, b)=> a.vote.score - b.vote.score)
    sortedComments.forEach((comment) => {
        let renderedComment = createComment(comment, comment?.id)
        commentSection.appendChild(renderedComment)
        renderReplies(comment)
    })
}

const renderReplies = (parentComment) => {
    const replyContainer = createRepliesContainer(parentComment?.id)
    parentComment?.replies.forEach((reply) => {
        let renderedReply = createReply(reply, parentComment?.id)
        renderedReply.innerHTML = replyCommentContent(reply)
        replyContainer.appendChild(renderedReply)
    })
    commentSection.appendChild(replyContainer)
}



/**
 * Creating comment / reply  
 */

const createRepliesContainer = (parentID) => {
    const container = document.createElement('div')
    container.classList.add("reply__container")
    container.id = `reply${parentID}`
    return container
}

const createComment = (comment, commentID) => {

}

const createReply = (reply, repliesParentID) => {

}

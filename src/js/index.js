

function ratingFunction(rating) {
    return Array(rating).fill().map(_, i) => (
        `<p>&#9733</p>`
    )
}

document.getElementById("rating").innerHTML = ratingFunction(4)


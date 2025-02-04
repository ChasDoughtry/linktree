const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e) {
    //prevents going to site from share button
    e.preventDefault()
    const link = this.getAttribute('link')

    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the Link!")
    } catch (err) {
        console.error(err)
    }

}

//copies site address
shareButtons.forEach(shareButtons => 
    shareButtons.addEventListener('click', copyText))
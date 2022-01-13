// dropdown 2
document.addEventListener('click', e => {
    const makanan = e.target.matches(".parent")
    if (!makanan && e.target.closest('.dropdown2') != null) return

    let container
    if (makanan) {
        container = e.target.closest('.dropdown2')
        container.classList.add('animate')
    }

    document.querySelectorAll('.animate').forEach(dropdown => {
        if (dropdown === container) return
        dropdown.classList.remove('animate')
    })
})
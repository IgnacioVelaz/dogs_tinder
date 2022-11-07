
class Dog {
    constructor(data){
        Object.assign(this, data)
        this.badgeHtml = this.hasBeenLiked? `<img src="images/badge-like.png" alt="liked" class="badge">`:
            this.hasBeenSwiped? `<img src="images/badge-nope.png" alt="nope" class="badge">`:
            ` `

    }
    innerHtml() {
        const{name, age, bio, avatar} = this
        return `
        ${this.badgeHtml}
        <div class="profile-data">
            <h1 class="profile-data-name">${name}, ${age}</h1>
            <p class="profile-data-description">${bio}</p>
        </div>
        `
    }
}



export { Dog }



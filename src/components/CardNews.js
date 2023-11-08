class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());


    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const leftCard = document.createElement("div");
        leftCard.setAttribute("class", "left_card");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const titleLink = document.createElement("a");
        titleLink.textContent = this.getAttribute("title");
        titleLink.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        leftCard.appendChild(author);
        leftCard.appendChild(titleLink);
        leftCard.appendChild(newsContent);

        const rightCard = document.createElement("div");
        rightCard.setAttribute("class", "right_card");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("image") || "assets/default-photo.webp";

        rightCard.appendChild(newsImage);

        componentRoot.appendChild(leftCard);
        componentRoot.appendChild(rightCard);

        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                box-shadow: 10px 11px 10px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 10px 11px 10px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 10px 11px 10px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .left_card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .left_card>span {
                font-weight: 500;
            }
            
            
            .left_card>a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .left_card>p {
                color: gray;
            }
            
            .right_card>img {
                max-width: 200px;
                max-height: 150px;
            }
        `;
        
        return style;

    }
}

customElements.define('card-news', CardNews);
// javascript backtick templates
const makeProductList = templater(o=>{
    return `
    <div class="col-xs-6 col-md-3">
        <a href="product_item.php?id=${o.id}" class="display-block">
            <figure class="product-figure soft">
                <div class="product-image">
                    <img src="img/products/${o.thumbnail}" alt="">
                </div>
                <figcaption class="product-description">
                    <div class="product-price">&dollar;${o.price.toFixed(2)}</div>
                    <div class="product-title">${o.name}</div>
                </figcaption>
            </figure>
        </a>
    </div>
    `;
    })
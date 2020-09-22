
// (contribution:  Emil)

//dropdown animation trigger
function priceDropdown() {
    let click = document.getElementById("price-dropdown");
    let arrow = document.getElementById("price-arrow");
    if (click.style.height === "0px") {
        click.style.height = "158px";
        click.style.paddingTop = "8px";
        click.style.paddingBottom = "8px";
        arrow.style.transform = "scaleY(-1)";
    } else {
        click.style.height = "0px";
        click.style.paddingTop = "0px";
        click.style.paddingBottom = "0px";
        arrow.style.transform = "scaleY(1)";
    }
}

function skillLevelDropdown() {
    let click = document.getElementById("skill-level-dropdown");
    let arrow = document.getElementById("skill-arrow");
    if (click.style.height === "0px") {
        click.style.height = "158px";
        click.style.paddingTop = "8px";
        click.style.paddingBottom = "8px";
        arrow.style.transform = "scaleY(-1)";
    } else {
        click.style.height = "0px";
        click.style.paddingTop = "0px";
        click.style.paddingBottom = "0px";
        arrow.style.transform = "scaleY(1)";
    }
}

function platformDropdown() {
    let click = document.getElementById("platform-dropdown");
    let arrow = document.getElementById("platform-arrow");
    if (click.style.height === "0px") {
        click.style.height = "204px";
        click.style.paddingTop = "8px";
        click.style.paddingBottom = "8px";
        arrow.style.transform = "scaleY(-1)";
    } else {
        click.style.height = "0px";
        click.style.paddingTop = "0px";
        click.style.paddingBottom = "0px";
        arrow.style.transform = "scaleY(1)";
    }
}


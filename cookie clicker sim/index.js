// COOKIE
const cookieButton = document.getElementById("cookieButton")
let cookie = document.getElementsByClassName("cookie")
cookie = Array.from(cookie)
const cookieCounter = document.getElementById("cookieCounter")
// STATS
const shopName = document.getElementById("shopName")
let timePlayed = document.getElementById("timePlayed")
const totalClicks = document.getElementById("totalClicks")
// UPGRADES
let firstUpgrade = document.getElementsByClassName("firstUpgrade")
let firstUpgradeTitle = document.getElementById("firstUpgradeTitle")
let secondUpgrade = document.getElementsByClassName("secondUpgrade")
let secondUpgradeTitle = document.getElementById("secondUpgradeTitle")
let thirdUpgrade = document.getElementsByClassName("thirdUpgrade")
let thirdUpgradeTitle = document.getElementById("thirdUpgradeTitle")
let fourthUpgrade = document.getElementsByClassName("fourthUpgrade")
let fourthUpgradeTitle = document.getElementById("fourthUpgradeTitle")

firstUpgrade = Array.from(firstUpgrade)
secondUpgrade = Array.from(secondUpgrade)
thirdUpgrade = Array.from(thirdUpgrade)
fourthUpgrade = Array.from(fourthUpgrade)


// SETTINGS
let score = 0
let totalTimePlayed = 0
let multiplier = 1
let steroids = 1
let totalClicksNumber = 0
let firstMilestoneNumber = 5
let secondMilestoneNumber = 10
let thirdMilestoneNumber = 15
let fourthMilestoneNumber = 20
let firstMilestone = false
let secondMilestone = false
let thirdMilestone = false
let fourthMilestone = false


// DISPLAY
firstUpgradeTitle.textContent = `Cursor:${firstMilestoneNumber} Cookies`
secondUpgradeTitle.textContent = `Grandma:${secondMilestoneNumber} Cookies`
thirdUpgradeTitle.textContent = `Double:${thirdMilestoneNumber} Cookies`
fourthUpgradeTitle.textContent = `Steroids:${fourthMilestoneNumber} Cookies`

// TOTAL TIME PLAYED
setInterval(() => {
    totalTimePlayed++;
    timePlayed.textContent = `Time Played: ${totalTimePlayed} seconds`
}, 1000);

// COOKIE CLICK FUNCTIONS
function onClick() {
    score += 1 * multiplier * steroids;
    totalClicksNumber++;

    // DISPLAY
    cookieCounter.textContent = `Cookies: ${score}`
    totalClicks.textContent = `Total Clicks ${totalClicksNumber}`

    checkConditions()
}

cookie.forEach(element => {
    element.addEventListener("mousedown", event => {
        //580x386 -> width by height
        event.target.classList.toggle("cookieMouseToggle")
    });
    element.addEventListener("mouseup", event => {
        event.target.classList.toggle("cookieMouseToggle")
    });
});

// CONDITIONS
function checkConditions() {
    if (score == firstMilestoneNumber) {
        firstMilestone = true
        firstUpgrade.forEach(element => {
            element.classList.add("unlockedHoverBackgroundColor")
            element.style.cursor = "pointer"
        });
    }
    if (score == secondMilestoneNumber) {
        secondMilestone = true
        secondUpgrade.forEach(element => {
            element.classList.add("unlockedHoverBackgroundColor")
            element.style.cursor = "pointer"
        });
    }
    if (score == thirdMilestoneNumber) {
        thirdMilestone = true
        thirdUpgrade.forEach(element => {
            element.classList.add("unlockedHoverBackgroundColor")
            element.style.cursor = "pointer"
        });
    }
    if (score == fourthMilestoneNumber) {
        fourthMilestone = true
        fourthUpgrade.forEach(element => {
            element.classList.add("unlockedHoverBackgroundColor")
            element.style.cursor = "pointer"
        });
    }
}

// CLICKING UPGRADES
// CURSOR UPGRADE
firstUpgrade.forEach(element => {
    const handleMouseOver = event => {
        if (firstMilestone) {
            element.classList.add("hoverUnlocked")
        }
    }

    const handleMouseOut = event => {
        if (firstMilestone) {
            element.classList.remove("hoverUnlocked")
        }
    }

    const clickUpgrade = event => {
        if (!firstMilestone) {
        } else if (score >= firstMilestoneNumber) {
            document.body.classList.add("upgradedCursor")
            element.classList.add("boughtBackgroundColor")
            cookieButton.style.cursor = "pointer"
            score -= firstMilestoneNumber
            cookieCounter.textContent = `Cookies: ${score}`
            element.removeEventListener("mouseover", handleMouseOver)
            element.removeEventListener("mouseout", handleMouseOut)
            element.removeEventListener("click", clickUpgrade)
        }
    }

    element.addEventListener("click", clickUpgrade)
    element.addEventListener("mouseover", handleMouseOver)
    element.addEventListener("mouseout", handleMouseOut)
})

// GRANDMA UPGRADE
let intervalId;
secondUpgrade.forEach(element => {
    const handleMouseOver = event => {
        if (secondMilestone) {
            element.classList.add("hoverUnlocked")
        }
    }
    const handleMouseOut = event => {
        if (secondMilestone) {
            element.classList.remove("hoverUnlocked")
        }
    }

    const clickUpgrade = event => {
        if (!secondMilestone) {
            window.alert("get your money up")
        } else if (score >= secondMilestoneNumber){
            element.classList.add("boughtBackgroundColor")
            element.removeEventListener("click", clickUpgrade)
            element.removeEventListener("mouseover", handleMouseOut)
            element.removeEventListener("mouseout", handleMouseOut)
            score -= secondMilestoneNumber
            cookieCounter.textContent = `Cookies: ${score}`
            setInterval(() => {
                score++;
                cookieCounter.textContent = `Cookies: ${score}`
                checkConditions()
            }, 1000)
        }
    }

    element.addEventListener("click", clickUpgrade)
    element.addEventListener("mouseover", handleMouseOver)
    element.addEventListener("mouseout", handleMouseOut)
})

// 2X EFFICIENCY UPGRADE
thirdUpgrade.forEach(element => {
    const handleMouseOver = event => {
        if (thirdMilestone) {
            element.classList.add("hoverUnlocked")
        }
    }
    const handleMouseOut = event => {
        if (thirdMilestone) {
            element.classList.remove("hoverUnlocked")
        }
    }

    const clickUpgrade = event => {
        if (!thirdMilestone) {
            window.alert("pockets lookin empty man")
        } else if (score >= thirdMilestoneNumber){
            element.classList.add("boughtBackgroundColor")
            multiplier = 2
            score -= thirdMilestoneNumber
            cookieCounter.textContent = `Cookies: ${score}`
            element.removeEventListener("click", clickUpgrade)
            element.removeEventListener("mouseover", handleMouseOver)
            element.removeEventListener("mouseout", handleMouseOut)
        }
    }

    element.addEventListener("click", clickUpgrade)
    element.addEventListener("mouseover", handleMouseOver)
    element.addEventListener("mouseout", handleMouseOut)
})

// STEROID UPGRADE
fourthUpgrade.forEach(element => {
    const handleMouseOver = event => {
        if (fourthMilestone) {
            element.classList.add("hoverUnlocked")
        }
    }
    const handleMouseOut = event => {
        if (fourthMilestone) {
            element.classList.remove("hoverUnlocked")
        }
    }

    const clickUpgrade = event => {
        if (!fourthMilestone) {
            window.alert("pockets lookin empty man")
        } else if (score >= fourthMilestoneNumber){
            element.classList.add("boughtBackgroundColor")
            steroids = 5
            score -= fourthMilestoneNumber
            cookieCounter.textContent = `Cookies: ${score}`
            element.removeEventListener("click", clickUpgrade)
            element.removeEventListener("mouseover", handleMouseOver)
            element.removeEventListener("mouseout", handleMouseOut)
        }
    }

    element.addEventListener("click", clickUpgrade)
    element.addEventListener("mouseover", handleMouseOver)
    element.addEventListener("mouseout", handleMouseOut)
})



// EDITABLE SHOP NAME
const label = document.getElementById("shopName");
const MAX_LENGTH = 30;
const DEFAULT_TEXT = "Your Cookie Shop";  // Default text if field is empty

label.addEventListener("input", (event) => {
    // Get the current selection range (caret position)
    const selection = window.getSelection();
    const range = selection.getRangeAt(0); // Get the current range (cursor position)
    const cursorPos = range.startOffset;

    // If the text length exceeds the max length, truncate it
    if (label.innerText.length > MAX_LENGTH) {
        label.innerText = label.innerText.substring(0, MAX_LENGTH);
    }

    // Reset the cursor position to the end of the text
    const newRange = document.createRange();
    newRange.setStart(label.firstChild, Math.min(MAX_LENGTH, label.innerText.length));
    newRange.setEnd(label.firstChild, Math.min(MAX_LENGTH, label.innerText.length));

    // Set the selection (caret) back to the end of the text
    selection.removeAllRanges();
    selection.addRange(newRange);

    // Make sure the field isn't empty
    if (label.innerText.trim() === "") {
        label.innerText = DEFAULT_TEXT;
    }
});

label.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent creating new lines
    }
});
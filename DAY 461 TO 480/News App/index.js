
"use strict";

// ========================================
// NEWS APP — MODERN JAVASCRIPT
// ========================================

// Add your NewsAPI key here for local testing only.
// For production, call your own backend instead.
const API_KEY = "YOUR_NEWSAPI_KEY";

const API_URL = "https://newsapi.org/v2/everything";

const dataCard = document.querySelector(".dataCard");
const searchBtn = document.getElementById("searchBtn");
const inputData = document.getElementById("inputData");
const categoryTitle = document.getElementById("type");

let currentRequest = null;

// ========================================
// Fetch and Display News
// ========================================

async function myFun(query = "India") {
    if (!dataCard || !categoryTitle) {
        console.error("News app elements were not found in the HTML.");
        return;
    }

    const searchQuery = query.trim();

    if (!searchQuery) {
        showMessage("Please enter a search term.");
        return;
    }

    // Cancel an older request if the user searches again.
    if (currentRequest) {
        currentRequest.abort();
    }

    currentRequest = new AbortController();

    categoryTitle.textContent = `Search results: ${searchQuery}`;
    dataCard.replaceChildren();
    showMessage("Loading the latest news...");

    try {
        const params = new URLSearchParams({
            q: searchQuery,
            sortBy: "publishedAt",
            pageSize: "30",
            language: "en",
            apiKey: API_KEY
        });

        const response = await fetch(`${API_URL}?${params}`, {
            signal: currentRequest.signal
        });

        if (!response.ok) {
            throw new Error(
                response.status === 401
                    ? "Invalid API key. Please check your NewsAPI configuration."
                    : response.status === 429
                    ? "API request limit reached. Please try again later."
                    : `Unable to load news (HTTP ${response.status}).`
            );
        }

        const jsonData = await response.json();

        if (!Array.isArray(jsonData.articles) ||
            jsonData.articles.length === 0) {
            showMessage("No news articles found. Try another search.");
            return;
        }

        dataCard.replaceChildren();

        jsonData.articles.forEach((article) => {
            dataCard.appendChild(createNewsCard(article));
        });

        if (inputData) {
            inputData.value = "";
        }

    } catch (error) {
        if (error.name === "AbortError") return;

        console.error("News loading error:", error);
        showMessage(
            error instanceof TypeError
                ? "Network error. Check your internet connection."
                : error.message || "Something went wrong while loading news."
        );
    } finally {
        currentRequest = null;
    }
}

// ========================================
// Create News Card Safely
// ========================================

function createNewsCard(article) {
    const card = document.createElement("article");
    card.className = "cards";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute(
        "aria-label",
        `Read article: ${article.title || "News article"}`
    );

    const image = document.createElement("img");
    image.src = article.urlToImage || "";
    image.alt = article.title || "News image";
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";

    image.addEventListener("error", () => {
        image.hidden = true;
    }, { once: true });

    const title = document.createElement("h3");
    title.textContent = article.title || "Untitled article";

    const description = document.createElement("p");
    description.textContent =
        article.description || "No description available.";

    const source = document.createElement("small");
    source.className = "news-source";
    source.textContent = article.source?.name || "News source";

    const date = document.createElement("small");
    date.className = "news-date";

    if (article.publishedAt) {
        const publishedDate = new Date(article.publishedAt);

        if (!Number.isNaN(publishedDate.getTime())) {
            date.textContent = publishedDate.toLocaleDateString(
                undefined,
                {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }
            );
        }
    }

    card.append(image, title, description, source, date);

    function openArticle() {
        if (!article.url) return;

        try {
            const url = new URL(article.url);

            // Only open standard web links.
            if (url.protocol === "https:" || url.protocol === "http:") {
                window.open(url.href, "_blank", "noopener,noreferrer");
            }
        } catch {
            console.warn("Invalid article URL.");
        }
    }

    card.addEventListener("click", openArticle);

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openArticle();
        }
    });

    return card;
}

// ========================================
// Loading, Empty & Error Messages
// ========================================

function showMessage(message) {
    if (!dataCard) return;

    dataCard.replaceChildren();

    const messageElement = document.createElement("p");
    messageElement.className = "news-message";
    messageElement.textContent = message;

    dataCard.appendChild(messageElement);
}

// ========================================
// Search News
// ========================================

function getData() {
    if (!inputData) return;

    const query = inputData.value.trim();

    if (!query) {
        inputData.focus();
        showMessage("Please enter a topic to search.");
        return;
    }

    myFun(query);
}

// Search on button click
if (searchBtn) {
    searchBtn.addEventListener("click", getData);
}

// Search when Enter is pressed
if (inputData) {
    inputData.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            getData();
        }
    });
}

// ========================================
// Category Navigation
// ========================================

function navItem(navValue) {
    const categories = ["politics", "sports", "technology"];

    if (!categories.includes(navValue)) return;

    categories.forEach((category) => {
        const navElement = document.getElementById(category);

        if (navElement) {
            const isActive = category === navValue;

            navElement.classList.toggle("active", isActive);
            navElement.setAttribute(
                "aria-current",
                isActive ? "page" : "false"
            );
        }
    });

    myFun(navValue);
}

// Make navItem available to existing inline HTML onclick handlers.
window.navItem = navItem;
window.getData = getData;

// ========================================
// Initial News Load
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    myFun("India");
});

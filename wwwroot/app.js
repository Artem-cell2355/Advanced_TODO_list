
window.setJsonValue = (elementId, value) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
        element.style.backgroundColor = "#e8f0fe";
        setTimeout(() => element.style.backgroundColor = "white", 500);
    }
};
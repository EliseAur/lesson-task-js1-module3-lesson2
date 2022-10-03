function createMessage(className = "error", inputMessage = "Unknown error") {
    const html = `<div class="message ${className}">${inputMessage}</div>`;
    return html;
}

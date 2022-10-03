function createMessage(className = "error", inputMessage = "Unknown error") {

    const html = `<div class="${className}">${inputMessage}</div>`;

    return html;
}



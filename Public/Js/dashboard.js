function manage(anchorId) {
    // Hide all content divs
    document.querySelectorAll('.content > div').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content div
    const contentDiv = document.querySelector(`#${anchorId}`);
    if (contentDiv) {
        contentDiv.style.display = 'block';
    }
}
function toggleOptions(tabName) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'flex';
        } else {
            tab.style.display = 'none';
        }
    });
}



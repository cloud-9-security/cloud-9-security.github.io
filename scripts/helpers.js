export const renderTosContent = async (version) => {
    const tosBodySection = document.getElementById("tos-body");
    const url = `/tos/v${version}/tos-body-v${version}.html`; // Construct the URL dynamically

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(bodyContent => {
            tosBodySection.innerHTML = bodyContent;
        })
        .catch(error => {
            tosBodySection.innerHTML = "Error loading Terms of Service.";
            console.error("Error loading ToS body:", error);
        });
}

export const renderMetaInfo = async (version) => {
    fetch(`/tos/v${version}/meta-v${version}.json`)
        .then(response => response.json())
        .then(data => {
            document.title = `Terms of Service - Version ${version}`;
            //document.getElementById('effective-date').innerText = data.effective_date;
            document.getElementById('title').innerText = version;
        });
}
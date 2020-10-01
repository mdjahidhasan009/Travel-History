const API_URL = 'http://localhost:5000'

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

export async function createLogEntry(entry) {
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(entry)
    });
    return response.json();
}

const pool = require('./pool');

async function addNewEntry(username, text, added) {
    await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)", [username, text, added]);
}

async function getUsers() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

module.exports = {
    addNewEntry,
    getUsers,
}
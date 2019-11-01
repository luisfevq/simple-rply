const app = require('./app');

async function main() {
    await app.listen(4000, () =>
        console.log(`Example app listening on port 4000`),
    );
}

main();

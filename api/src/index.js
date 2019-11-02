const app = require('./app');

async function main() {
    await app.listen(process.env.PORT, () =>
        console.log('Escuchando puerto: ', process.env.PORT),
    );
}

main();

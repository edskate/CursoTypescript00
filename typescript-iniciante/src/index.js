"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nomeArtista = "Edy Michael Cover";
const quantidadeShows = 2;
const valorPorShow = 900;
const valorTotal = quantidadeShows * valorPorShow;
console.log("👉 === CONTROLE DE SHOWS ===");
console.log(`👉 Artista: ${nomeArtista}`);
console.log(`👉 Quantidade de shows: ${quantidadeShows}`);
console.log(`🏅 Valor por show: R$ ${valorPorShow.toFixed(2)}`);
console.log(`👉 Valor total: R$ ${valorTotal.toFixed(2)}`);
if (quantidadeShows > 0) {
    console.log("👉 Existem apresentações cadastradas.");
}
else {
    console.log("👉 Nenhuma apresentação foi cadastrada.");
}
//# sourceMappingURL=index.js.map
interface GrupoMusical {
  nombreDelGrupo: string;
  añoFundacion: number;
  activo: boolean;
  generoMusical: string;
}
const estiloNombreDelGrupo =
  "font-size: 18px; color:black; background-color: #5EC272; font-weight:700";

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const grupoA: GrupoMusical = {
  nombreDelGrupo: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  generoMusical: popRock,
};
const grupoB: GrupoMusical = {
  nombreDelGrupo: "Queen",
  añoFundacion: 1970,
  activo: false,
  generoMusical: rock,
};

const grupoC: GrupoMusical = {
  nombreDelGrupo: "AC DC",
  añoFundacion: 1973,
  activo: true,
  generoMusical: hardRock,
};

const grupoD: GrupoMusical = {
  nombreDelGrupo: "Ludwig van Beethoven ",
  añoFundacion: 1770,
  activo: false,
  generoMusical: clasica,
};

const grupoE: GrupoMusical = {
  nombreDelGrupo: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  generoMusical: rock,
};
console.log(`%c${grupoA.nombreDelGrupo}`, estiloNombreDelGrupo);
console.log(`Año de fundación: ${grupoA.añoFundacion}`);
console.log(`Activo: ${grupoA.activo}`);
console.log(`Género Musical: ${grupoA.generoMusical}`);
console.log(`%c${grupoB.nombreDelGrupo}`, estiloNombreDelGrupo);
console.log(`Año de fundación: ${grupoB.añoFundacion}`);
console.log(`Activo: ${grupoB.activo}`);
console.log(`Género Musical: ${grupoB.generoMusical}`);
console.log(`%c${grupoC.nombreDelGrupo}`, estiloNombreDelGrupo);
console.log(`Año de fundación: ${grupoC.añoFundacion}`);
console.log(`Activo: ${grupoC.activo}`);
console.log(`Género Musical: ${grupoC.generoMusical}`);
console.log(`%c${grupoD.nombreDelGrupo}`, estiloNombreDelGrupo);
console.log(`Año de fundación: ${grupoD.añoFundacion}`);
console.log(`Activo: ${grupoD.activo}`);
console.log(`Género Musical: ${grupoD.generoMusical}`);
console.log(`%c${grupoE.nombreDelGrupo}`, estiloNombreDelGrupo);
console.log(`Año de fundación: ${grupoE.añoFundacion}`);
console.log(`Activo: ${grupoE.activo}`);
console.log(`Género Musical: ${grupoE.generoMusical}`);

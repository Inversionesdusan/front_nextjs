export const constantes = {
  locale: "es-CO",
  endpoints: {
    banners: "banners",
    seccionInfo: "seccion-empresas",
    productos: "productos",
    empresa: "datos-empresa",
    contacto: "datos-contactos",
    precios: "precios-productos",
    presentaciones: "presentaciones",
  },
  keys: {
    shoppingCar: "shoppingCarData",
  },
  options: [
    { label: "Inicio", section: "inicio" },
    { label: "Productos", section: "catalogo" },
    { label: "Nosotros", section: "nosotros" },
    { label: "Contáctenos", section: "contactenos" },
  ],
  catalog: {
    pageTitle: "Catálogo de productos",
    detailButtonLabel: "Ver detalle",
    addItemButtonLabel: "Agregar al carrito",
    filterPlaceholder: "Todos los registros",
    removeFilterText: "Todos los registros",
    emptyStateMessage: "No se han encontrado registros de productos",
    loadingMessage: "Buscando registros de productos...",
  },
  shoppingCar: {
    infoModal: {
      title: "Carrito de Compras",
      message:
        "El artículo se ha guardado / actualizado en el carrito de compras",
    },
  },
};

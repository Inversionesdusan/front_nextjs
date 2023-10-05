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
    clientesNoRegistrados: "clientes-nrs",
    pedidos: "pedidos",
    registro: "auth/local/register",
    user: "users/me",
    login: "auth/local/",
    updateUser: "users",
    changePassword: "auth/change-password",
  },
  keys: {
    shoppingCar: "shoppingCarData",
    user: "userData",
  },
  options: [
    { label: "Inicio", section: "inicio" },
    { label: "Productos", section: "catalogo" },
    { label: "Nosotros", section: "nosotros" },
    { label: "Contáctenos", section: "contactenos" },
  ],
  catalog: {
    pageTitle: "Catálogo de productos",
    detailButtonLabel: "Comprar ahora",
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
  orderDetail: {
    pageTitle: "Detalle de Pedido",
    catalogButtonLabel: "Ir al catálogo",
    createButtonLabel: "Crear Pedido",
    emptyCart: "No hay productos para hacer el pedido",
    disclaimer:
      "Los precios especificados en el total del pedido NO Incluyen el valor del flete",
  },
  orderList: {
    title: "Listado de Pedidos",
    loadingMessage: "Consultando registros de pedidos...",
    emptyStateMessage: "No se han encontrado registros",
  },
  profile: {
    loading: "Cargando información del cliente...",
  },
  errores: {
    taken: "Este correo electrónico ya se ha registrado",
    attempts:
      "Demasiadas solicitudes. Por favor intente en aproximadamente 1 minuto",
    credentials: "Email o contraseña incorrecta",
    current: "La contraseña actual y la nueva deben ser diferente",
    name: {
      required: "Debes digitar tu(s) nombre(s)",
      length: "Tu nombre debe ser de 3 o más caracteres",
    },
    lastName: {
      required: "Debes digitar tu(s) apellido(s)",
      length: "Tu nombre debe ser de 3 o más caracteres",
    },
    email: {
      required: "Debes digitar tu correo electrónico",
      format: "El correo electrónico debe tener un formato válido",
    },
    phone: {
      length: "El Número telefónico debe tener al menos 7 dígitos",
      maxLength: "El Número telefónico puede tener máximo 10 dígitos",
    },
    password: {
      required: "Debes digitar un clave para tu usuario",
      length: "La clave debe tener al menos 6 caracteres",
      invalid: "La contrasea no es válida",
    },
    generic: {
      numbers: "Este campo debe contener sólo números",
    },
  },
  placeholders: {
    name: "Nombres",
    lastName: "Apellidos",
    email: "Correo electrónico",
    phone: "Nro Telefónico / Celular",
    pass: "Password / Clave",
  },
  estados: ["Anulado", "Despachado", "Pendiente", "Recibido", "Registrado"],
  paths: {
    BASE_URL_API:
      process.env.NODE_ENV === "development"
        ? "http://localhost:1337/api"
        : "https://backendmysql-production.up.railway.app/api",
    BASE_URL_IMAGES: "https://backendmysql-production.up.railway.app",
    API_TOKEN:
      "999d89d7d4e3b9454be422e72ca60e7ef4206b060c2cc381998dde8ce5a7fad51b2b71ebc231cc47d713c7ded69cddcee650bae8b00faf4e082de269fc2c08a4993261b66ad228ad6a39aa2ab33b0abfebbca3c25beacac702768fb3693d0266eaa9da8a77377861b5bb6c80d1aef6bf2c9cbc1def3312001ac23d1fedbc6931",
  },
};

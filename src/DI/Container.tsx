import HeroViewModel from "@/presentation/landing/hero/HeroViewModel";
import { asFunction, asValue, createContainer } from "awilix";
import * as BannerDataSource from "@/data/dataSource/BannersDataSource";
import * as SeccionInformacionDataSource from "@/data/dataSource/SeccionInformacionDataSource";
import * as ProductosDataSource from "@/data/dataSource/ProductosDataSource";
import * as EmpresaDataSource from "@/data/dataSource/EmpresaDataSource";
import * as PreciosDataSource from "@/data/dataSource/PrecioProductoDataSource";
import * as PresentacionesDataSource from "@/data/dataSource/PresentacionesDataSource";
import { BannersRepository } from "../data/repository/BannersRepository";
import { SeccionInformacionRepository } from "../data/repository/SeccionInformacionRepository";
import { BannersService } from "@/domain/services/BannersService";
import { SeccionInformacionService } from "../domain/services/SeccionInformacionService";
import InformacionViewModel from "@/presentation/landing/Informacion/InformacionViewModel";
import { ProductosRepository } from "../data/repository/ProductosRepository";
import { ProductosService } from "@/domain/services/ProductosService";
import CatalogoLandingViewModel from "../presentation/landing/catalogo/CatalogoLandingViewModel";
import { EmpresaRepository } from "../data/repository/EmpresaRepository";
import { EmpresaService } from "@/domain/services/EmpresaService";
import ContactoViewModel from "../presentation/landing/contacto/ContactoViewModel";
import HeaderViewModel from "@/presentation/landing/header/HeaderViewModel";
import { PreciosRepository } from "@/data/repository/PreciosRepository";
import { PreciosService } from "@/domain/services/PreciosService";
import CatalogViewModel from "@/presentation/catalog/CatalogViewModel";
import { PresentacionRepository } from "@/data/repository/PresentacionesRepository";
import ProductViewModel from "@/presentation/productDetail/ProductViewModel";
import LandingViewModel from "@/presentation/landing/LandingViewModel";
import OrderDetailViewModel from "@/presentation/orderDetail/OrderDetailViewModel";
import { PresentacionesService } from "@/domain/services/PresentacionesService";

const Container = createContainer();

Container.register({
  //DataSources
  BannersDataSource: asValue(BannerDataSource),
  SeccionInformacionDataSource: asValue(SeccionInformacionDataSource),
  ProductosDataSource: asValue(ProductosDataSource),
  EmpresaDataSource: asValue(EmpresaDataSource),
  PreciosDataSource: asValue(PreciosDataSource),
  PresentacionesDataSource: asValue(PresentacionesDataSource),

  //Repositories
  BannersRepository: asFunction(BannersRepository),
  SeccionInformacionRepository: asFunction(SeccionInformacionRepository),
  ProductosRepository: asFunction(ProductosRepository),
  EmpresaRepository: asFunction(EmpresaRepository),
  PreciosRepository: asFunction(PreciosRepository),
  PresentacionRepository: asFunction(PresentacionRepository),

  //Services
  BannersService: asFunction(BannersService),
  SeccionInformacionService: asFunction(SeccionInformacionService),
  ProductosService: asFunction(ProductosService),
  EmpresaService: asFunction(EmpresaService),
  PreciosService: asFunction(PreciosService),
  PresentacionesService: asFunction(PresentacionesService),

  //ViewModels
  HeroViewModel: asFunction(HeroViewModel),
  InformacionViewModel: asFunction(InformacionViewModel),
  CatalogoLandingViewModel: asFunction(CatalogoLandingViewModel),
  ContactoViewModel: asFunction(ContactoViewModel),
  HeaderViewModel: asFunction(HeaderViewModel),
  CatalogViewModel: asFunction(CatalogViewModel),
  ProductViewModel: asFunction(ProductViewModel),
  LandingViewModel: asFunction(LandingViewModel),
  OrderDetailViewModel: asFunction(OrderDetailViewModel),
});

export default Container;

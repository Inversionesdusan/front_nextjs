import HeroViewModel from "@/presentation/landing/hero/HeroViewModel";
import { asFunction, asValue, createContainer } from "awilix";
import * as BannerDataSource from "@/data/dataSource/BannersDataSource";
import * as SeccionInformacionDataSource from "@/data/dataSource/SeccionInformacionDataSource";
import * as ProductosDataSource from "@/data/dataSource/ProductosDataSource";
import * as EmpresaDataSource from "@/data/dataSource/EmpresaDataSource";
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

const Container = createContainer();

Container.register({
  //DataSources
  BannersDataSource: asValue(BannerDataSource),
  SeccionInformacionDataSource: asValue(SeccionInformacionDataSource),
  ProductosDataSource: asValue(ProductosDataSource),
  EmpresaDataSource: asValue(EmpresaDataSource),

  //Repositories
  BannersRepository: asFunction(BannersRepository),
  SeccionInformacionRepository: asFunction(SeccionInformacionRepository),
  ProductosRepository: asFunction(ProductosRepository),
  EmpresaRepository: asFunction(EmpresaRepository),

  //Services
  BannersService: asFunction(BannersService),
  SeccionInformacionService: asFunction(SeccionInformacionService),
  ProductosService: asFunction(ProductosService),
  EmpresaService: asFunction(EmpresaService),

  //ViewModels
  HeroViewModel: asFunction(HeroViewModel),
  InformacionViewModel: asFunction(InformacionViewModel),
  CatalogoLandingViewModel: asFunction(CatalogoLandingViewModel),
  ContactoViewModel: asFunction(ContactoViewModel),
  HeaderViewModel: asFunction(HeaderViewModel),
});

console.log(" Container -> ", Container);
export default Container;

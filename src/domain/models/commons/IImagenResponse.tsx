export interface IImagenResponse {
  data?: IIMagenData;
}

export interface IIMagenData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: FormatAttributes;
  medium: FormatAttributes;
  thumbnail: FormatAttributes;
}

export interface FormatAttributes {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

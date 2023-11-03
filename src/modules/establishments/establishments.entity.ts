import { EstablishmentType, Tags } from 'src/commons/constants';

export class EstablishmentEntity {
  id: string;
  name: string;
  tags: Tags[];
  fullAddress: string;
  coordinates: number[];
  picturesPaths: string[];
  likes: number;
  phone: string;
  type: EstablishmentType;
  createdAt: Date;

  constructor(parameters: EstablishmentEntity) {
    Object.assign(this, parameters);
  }

  static fromJson(json: any): EstablishmentEntity | null {
    if (!json) {
      return null;
    }

    const establishment = new EstablishmentEntity({
      id: json._id,
      name: json.name,
      tags: json.tags as Tags[],
      fullAddress: json.fullAddress,
      coordinates: json.geolocation.coordinates,
      picturesPaths: json.picturesPaths,
      likes: json.likes,
      phone: json.phone,
      type: json.type as EstablishmentType,
      createdAt: json.createdAt,
    });

    return establishment;
  }

  static fromJsons(jsons: any[]): EstablishmentEntity[] {
    if (!jsons) {
      return [];
    }

    const establishments: EstablishmentEntity[] = [];
    for (const json of jsons) {
      const establishment = EstablishmentEntity.fromJson(json);
      if (establishment) {
        establishments.push(establishment);
      }
    }
    return establishments;
  }
}

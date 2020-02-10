import { TarjetaEN } from './tarjeta';
import { VotoWS } from './votoEN';

export class UsuarioEN {
    encodigo: number;
    nombre: string;
    apellido: string;
    genero: string;
    usuario: string;
    clave: string;
    tarj: TarjetaEN[];
    vot: VotoWS[];
}
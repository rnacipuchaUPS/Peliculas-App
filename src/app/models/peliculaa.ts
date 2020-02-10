import { CategoriaEN } from './categoria';

export class PeliculaEN {
    codigoP: number;

    titulo: string;

    descripcion: string;

    genero: string;
    valor: number;
    cantidad: number;

    imagen: string;
    cat: CategoriaEN[];

}
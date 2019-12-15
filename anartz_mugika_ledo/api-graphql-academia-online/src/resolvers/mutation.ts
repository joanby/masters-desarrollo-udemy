import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { database } from '../data/data.store';
const mutation : IResolvers = {
    Mutation: {
        cursoNuevo(__:void, { curso }): any {
            const itemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0) {
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            return noCompletado(1);
        },
        modificarCurso(__:void, { curso }): any {
            const elemeentoExiste = _.findIndex(database.cursos, function(o) {
                return o.id === curso.id
            });
            if (elemeentoExiste > -1 ) {
                const valoraciones = database.cursos[elemeentoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elemeentoExiste] = curso;
                return curso;
            }

            return noCompletado(2);
        },
        eliminarCurso(__:void, { id }): any {
            const borraCurso = _.remove(database.cursos, function(curso) {
                return curso.id === id;
            });

            if (borraCurso[0] === undefined) {
                return noCompletado(3);
            }
            return borraCurso[0];
        }
    }
}

export default mutation;

function noCompletado(operacion: number) {
    let title = '';
    switch(operacion) {
        case 1: { 
            title = 'El curso ya existe con este titulo';
            break; 
         } 
         case 2: { 
            title = 'El curso no existe en la base de datos';
            break; 
         } 
         case 3: { 
            title = 'El curso no se puede borrar porque no se ha encontrado ningún curso con ese ID'; 
            break; 
         } 
         default: { 
            //statements; 
            break; 
         } 
    }
    return {
        id: '-1',
        title,
        description: '',
        clases: -1,
        time: 0.0,
        level: 'TODOS',
        logo: '',
        path: '',
        teacher: '',
        reviews: []
    };
}
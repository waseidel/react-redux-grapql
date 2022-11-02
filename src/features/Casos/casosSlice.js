import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  caso: [
    {
      caso: 1,
      hora: '10:20',
      viaje: 3,
      parada: "A.Sanin",
      tipo: 'Incidente',
      descripcion: "Operador realiza maniobra sin la autorización de CCO",
      jerarquia: {
        nombre: 'Salida::Por Abandono::Injustificado',
      },
      bus: {
        mc: '33001'
      },
      linea: {
        nombre: 'A47',
      },
      user: {
        name: 'WaSeidel'
      }
    },
    {
      caso: 2,
      hora: '10:30',
      viaje: 4,
      parada: "A.Sanin",
      tipo: 'Salida',
      descripcion: "Tarea sale de operación",
      jerarquia: {
        nombre: 'Salida::Por Abandono::Injustificado',
      },
      bus: {
        mc: '33001'
      },
      linea: {
        nombre: 'A47',
      },
      user: {
        name: 'WaSeidel'
      }
    },
    {
      caso: 3,
      hora: '10:40',
      viaje: 5,
      parada: "A.Sanin",
      tipo: 'Entrada',
      descripcion: "Tarea se retoma por que se le da la gana",
      jerarquia: {
        nombre: 'Ingreso::Por Abandono::Injustificado',
      },
      bus: {
        mc: '33001'
      },
      linea: {
        nombre: 'A47',
      },
      user: {
        name: 'WaSeidel'
      }
    }
  ],
  isLoading: true,
}

const casosSlice = createSlice({
  name: 'casos',
  initialState,
})

export default casosSlice.reducer

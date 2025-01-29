import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface DadosClinicosInstance extends Model {
    id_dados_clinicos: number;
    id_tipo_doenca_dados_clinicos: number;
    id_consulta: number;
    data_ultima_consulta: Date;
    doencas_cronicas: string;
    dieta_alimentar: string;
    diagnostico: string;
    taxa_glicemica: number;
    dieta_hidrica: string;
}

export const DadosClinicos = sequelize.define<DadosClinicosInstance>('DadosClinicos', {
    id_dados_clinicos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tipo_doenca_dados_clinicos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_consulta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_ultima_consulta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    doencas_cronicas: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dieta_alimentar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    diagnostico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taxa_glicemica: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    dieta_hidrica: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'dados_clinicos',
    timestamps: false
});

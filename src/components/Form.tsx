import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

interface FormData {
  state: string;
  cases: number;
  deaths: number;
  recovered: number;
  date: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(JSON.stringify(data)); 
    setIsSubmitted(true); 
    setTimeout(() => setIsSubmitted(false), 3000); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaPaperPlane className="mr-2 text-blue-500" />
        Formulário de Dados
      </h2>
      <p className="text-gray-600 mb-4">
        Preencha os campos abaixo para adicionar novos dados sobre a COVID-19.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <input
            id="state"
            {...register('state', { required: 'Este campo é obrigatório' })}
            placeholder="Ex: SP"
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.state && (
            <span className="text-sm text-red-500">{errors.state.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="cases" className="block text-sm font-medium text-gray-700">
            Casos
          </label>
          <input
            id="cases"
            {...register('cases', { required: 'Este campo é obrigatório' })}
            type="number"
            placeholder="Ex: 1000"
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.cases ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cases && (
            <span className="text-sm text-red-500">{errors.cases.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="deaths" className="block text-sm font-medium text-gray-700">
            Mortes
          </label>
          <input
            id="deaths"
            {...register('deaths', { required: 'Este campo é obrigatório' })}
            type="number"
            placeholder="Ex: 50"
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.deaths ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.deaths && (
            <span className="text-sm text-red-500">{errors.deaths.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="recovered" className="block text-sm font-medium text-gray-700">
            Recuperados
          </label>
          <input
            id="recovered"
            {...register('recovered', { required: 'Este campo é obrigatório' })}
            type="number"
            placeholder="Ex: 200"
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.recovered ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.recovered && (
            <span className="text-sm text-red-500">{errors.recovered.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Data
          </label>
          <input
            id="date"
            {...register('date', { required: 'Este campo é obrigatório' })}
            type="date"
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <span className="text-sm text-red-500">{errors.date.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <FaPaperPlane className="mr-2" />
          Enviar
        </button>
      </form>

    
      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center">
          <FaCheck className="mr-2" />
          Dados enviados com sucesso!
        </div>
      )}
    </div>
  );
};

export default Form;
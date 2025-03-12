import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <motion.section
      id="form"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <FaPaperPlane className="text-blue-500 text-3xl mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800">Formulário de Dados</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Preencha os campos abaixo para adicionar novos dados sobre a COVID-19.
        </motion.p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              id="state"
              {...register('state', { required: 'Este campo é obrigatório' })}
              placeholder="Ex: SP"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.state ? 'border-red-500' : ''
              }`}
            />
            {errors.state && (
              <span className="text-sm text-red-500">{errors.state.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <label htmlFor="cases" className="block text-sm font-medium text-gray-700">
              Casos
            </label>
            <input
              id="cases"
              {...register('cases', { required: 'Este campo é obrigatório' })}
              type="number"
              placeholder="Ex: 1000"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.cases ? 'border-red-500' : ''
              }`}
            />
            {errors.cases && (
              <span className="text-sm text-red-500">{errors.cases.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label htmlFor="deaths" className="block text-sm font-medium text-gray-700">
              Mortes
            </label>
            <input
              id="deaths"
              {...register('deaths', { required: 'Este campo é obrigatório' })}
              type="number"
              placeholder="Ex: 50"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.deaths ? 'border-red-500' : ''
              }`}
            />
            {errors.deaths && (
              <span className="text-sm text-red-500">{errors.deaths.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <label htmlFor="recovered" className="block text-sm font-medium text-gray-700">
              Recuperados
            </label>
            <input
              id="recovered"
              {...register('recovered', { required: 'Este campo é obrigatório' })}
              type="number"
              placeholder="Ex: 200"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.recovered ? 'border-red-500' : ''
              }`}
            />
            {errors.recovered && (
              <span className="text-sm text-red-500">{errors.recovered.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Data
            </label>
            <input
              id="date"
              {...register('date', { required: 'Este campo é obrigatório' })}
              type="date"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.date ? 'border-red-500' : ''
              }`}
            />
            {errors.date && (
              <span className="text-sm text-red-500">{errors.date.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Enviar
            </button>
          </motion.div>
        </form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-green-100 text-green-700 rounded-md flex items-center"
          >
            <FaCheck className="mr-2" />
            Dados enviados com sucesso!
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Form;
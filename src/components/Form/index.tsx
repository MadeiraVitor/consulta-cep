import { useCepQuery } from "../../hooks/useCepQuery";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

const searchCepFormSchema = z.object({
  cep: z
    .string()
    .min(8, "O CEP deve ter 8 caracteres")
    .regex(/^\d{5}-?\d{3}$/, "Formato de CEP inválido"),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
    resolver: zodResolver(searchCepFormSchema),
  });

  const { data, isLoading, error, setCep } = useCepQuery();

  const onSubmit: SubmitHandler<{ cep: string }> = (formData) => {
    setCep(formData.cep);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-gray-700 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-10 text-center">
        Busque seu CEP
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-4 mb-4 w-full max-w-md"
      >
        <div className="flex w-full">
          <input
            type="text"
            id="cep"
            placeholder="Digite seu CEP"
            {...register("cep")}
            className="w-full px-3 py-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-r-lg text-white text-lg flex items-center justify-center transition cursor-pointer"
            aria-label="Buscar CEP"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
            Buscar
          </button>
        </div>
      </form>

      {errors.cep && (
        <p className="text-red-400 mt-2 w-full text-center text-sm">
          {errors.cep.message}
        </p>
      )}

      {isLoading && <p className="text-white text-lg">Carregando...</p>}
      {error && (
        <p className="text-red-400 text-lg">
          {error.message === "CEP não encontrado."
            ? "CEP não encontrado. Verifique e tente novamente."
            : `Erro: ${error.message}`}
        </p>
      )}
      {data && (
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center mt-4">
          <p className="text-3xl md:text-4xl font-bold mb-2">CEP: {data.cep}</p>
          <p className="text-lg font-semibold mb-1">{data.logradouro}</p>
          <p className="text-md font-medium mb-1">Bairro: {data.bairro}</p>
          <p className="text-md font-medium mb-1">Cidade: {data.localidade}</p>
          <p className="text-md font-medium mb-1">Estado: {data.estado}</p>
        </div>
      )}
    </main>
  );
};

import { useQuery } from "@tanstack/react-query";
import type { CepData } from "../types/types";
import { useState } from "react";

const fetchCep = async (cep: string): Promise<CepData> => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) throw new Error("Erro ao buscar o CEP.");
  const data = await response.json();
  if (data.erro) throw new Error("CEP não encontrado.");
  return data;
};

export const useCepQuery = () => {
  const [cep, setCep] = useState<string>("");
  const { data, isLoading, error } = useQuery<CepData>({
    queryKey: ["cep", cep],
    queryFn: () => fetchCep(cep),
    enabled: !!cep,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error, setCep };
};

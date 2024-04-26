export const formatCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const unformatCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

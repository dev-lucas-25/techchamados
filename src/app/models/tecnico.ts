export interface Tecnico {
  id: string;
  nome: string;
  especialidade: 'Hardware' | 'Software' | 'Rede' | 'Impressora' | 'Sistema interno' | 'Outros';
  contato: string;
  situacao: 'Ativo' | 'Inativo';
}

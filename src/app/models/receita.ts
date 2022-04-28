export interface Receita {
  id: number;
  descricao: string;
  valor: number;
  data: Date;
  categoriaId: number;
  pessoaId: number;
}

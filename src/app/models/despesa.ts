export interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  data: Date;
  pessoaId: number;
  categoriaId: number;
  subCategoriaId: number;
}

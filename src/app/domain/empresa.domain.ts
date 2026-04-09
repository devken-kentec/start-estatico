export interface EmpresaSimples {
  id: number;
  dataCadastro: string;
  nomeFantasia: string;
  cep: string;
  endereco: string;
  complemento: string;
  bairro: string;
  municipio: string;
  telefone: string;
  whatsapp: string;
  ramoDeAtividade: string;
  breveDescricao: string;
  localizacao: string;
}

export interface EmpresaCompleta {
  id: number;
	nomeFantasia: string;
	razaoSocial: string;
	dataConstituicao: string;
	cnpj: string;
	inscricaoEstadual: string;
	inscricaoMunicipal: string;
	regimeTributario: string;
	cep: string;
	endereco: string;
	numero: string;
	complemento: string;
	bairro: string;
	estado: string;
	municipio: string;
	ramoDeAtividade: string;
	telefone: string;
	telefone2: string;
	whatsapp: string;
	celular: string;
	email: string;
	webSite: string;
	redeSocial: string;
	redeSocial2: string;
	redeSocial3: string;
	responsavel: string;
	dataCadastro: string;
	statusEmpresa: string;
	vendaProduto: boolean;
	vendaServico: boolean;
	localizacao: string;
	breveDescricao: string;
	foto: string;
}

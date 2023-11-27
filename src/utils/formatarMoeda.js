const formatarMoeda = (value , Moeda)=>{
  return value.toLocaleString('pt-br',{style:'currency',currency: Moeda });
};
export default formatarMoeda;

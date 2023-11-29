const formatarMoeda = (value , moeda)=>{
  return value.toLocaleString('pt-br', {
    style:'currency',
    currency: moeda 
  });
};
export default formatarMoeda;

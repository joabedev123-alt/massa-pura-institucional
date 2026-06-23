export default function ComoUsar() {
  const steps = [
    { title: "Escolha o tipo ideal", desc: "Selecione a argamassa Massa Pura correta para a sua necessidade." },
    { title: "Prepare a base", desc: "A base deve estar limpa, firme e sem resíduos." },
    { title: "Misture com água", desc: "Misture com água limpa conforme a orientação na embalagem." },
    { title: "Aguarde o descanso", desc: "Aguarde o tempo de descanso indicado antes da aplicação." },
    { title: "Aplique", desc: "Aplique com a desempenadeira adequada para a peça." },
    { title: "Assente as peças", desc: "Assente as peças com fixação correta." },
    { title: "Tempo de cura", desc: "Respeite o tempo de cura e rejuntamento." },
  ];

  return (
    <div className="py-16 md:py-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase">Como <span className="text-brand-orange">Usar</span></h1>
        <div className="w-16 md:w-24 h-2 bg-brand-orange mb-10 md:mb-12"></div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-orange items-center">
               <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                 {index + 1}
               </div>
               <div>
                 <h3 className="text-xl font-bold text-brand-black mb-1">{step.title}</h3>
                 <p className="text-gray-600 font-medium">{step.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

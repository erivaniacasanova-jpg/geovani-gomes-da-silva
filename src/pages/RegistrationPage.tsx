function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-4 md:py-12">
      <div className="w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
            Assista ao vídeo abaixo para realizar o seu cadastro na Federal Associada.
          </h1>

          <div className="flex justify-center w-full">
            <div className="w-full max-w-xs md:max-w-sm">
              <video
                className="w-full rounded-lg shadow-lg"
                style={{
                  aspectRatio: '9/16',
                  maxHeight: '500px'
                }}
                controls
                controlsList="nodownload"
                src="https://qkbeuebapuqnlpjgcvxb.supabase.co/storage/v1/object/public/ativacao/cadastro.mp4"
              >
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://federalassociados.com.br/pbi/cadastro/15972528102025232258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Realizar Cadastro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;

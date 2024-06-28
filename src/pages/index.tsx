import Logo from "@/components/Logo";
import { useEffect, useState } from "react";

export default function Home() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isFirefox, setIsFirefox] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);

  useEffect(() => {
    // Detecta se o navegador é Firefox. Este navegador não tem suporte à API beforeinstallprompt,
    // mas possui um botão de instalação nativo na barra de endereço quando detecta uma PWA
    setIsFirefox(navigator.userAgent.toLowerCase().includes('firefox'));

    // Detecta se o navegador é Safari. Este navegador não tem suporte à API beforeinstallprompt,
    // mas é possível adicionar uma PWA à tela inicial manualmente 
    setIsSafari(
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    );

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => { });
    };
  }, []);

  const handleInstall = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação.');
        } else {
          console.log('Usuário recusou a instalação.');
        }
        setInstallPrompt(null);
      });
    }
  };

  return (
    <main
      className={`flex-1 place-content-center place-items-center content-center items-center justify-center`}
    >
      <div className="z-10">

        <div className="text-center justify-center">

          <Logo />


          <h1 className="mt-5 text-white font-bold text-3xl">
            {!isFirefox && !isSafari ?
              'Bem-vindo ao Next.js PWA!'
              :
              <>
                {isFirefox &&
                  <h1 className="text-xl text-white font-bold p-5">{`Bem-vindo ao Next.js PWA! Firefox não oferece suporte a instalação de PWA, mas no menu de três 
                    linhas há a opção "Instalar".`}</h1>
                }

                {isSafari &&
                  <h1 className="text-xl text-white font-bold p-5">{`Bem-vindo ao Next.js PWA! Para instalar esta PWA no Safari, clique no botão 
                    "Compartilhar" e selecione "Adicionar à Tela de Início".`}</h1>
                }
              </>
            }
          </h1>


          {installPrompt && !isFirefox && !isSafari && (
            <button onClick={handleInstall} className="mt-10 bg-cyan-950 border border-teal-800 text-white p-5 hover:text-yellow-500 hover:border-amber-100 font-bold text-xl">
              Instalar Aplicação
            </button>
          )}

        </div>
      </div>

    </main>
  );
}

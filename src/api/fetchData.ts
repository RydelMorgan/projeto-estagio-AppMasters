import { Game, ServerError, TimeoutError } from "@/types";

export const fetchData = async (): Promise<Game[]> => {
  const signal = AbortSignal.timeout(5000);
  const url = process.env.API_URL ?? '';
  const email = process.env.DEV_EMAIL_ADDRESS ?? '';
  
  if( url === '' || email === ''){
    throw new Error()
  }

  console.log(url);
  try {

    const response = await fetch(url, {
      headers: {
        'dev-email-address': email,
      },
      signal
    });

    if (response.ok && response.headers.get("content-type") !== null) {
      
      const data = await response.json();
      return data;

    } else if ([500, 502, 503, 504, 507, 508, 509].includes(response.status)) {
      throw new ServerError("O servidor falhou em responder, tente recarregar a página");

    } else {
      throw new Error("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde");
    }

  } catch (error: any) {
    
    if (error.name === "AbortError"){
      throw new TimeoutError("O servidor demorou para responder, tente mais tarde");
    }else{
      throw error;

    }
  }
};

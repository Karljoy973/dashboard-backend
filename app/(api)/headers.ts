

const responseSpecs = {
    status: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }
}


const errorPayloadSpecs = {
    success: false,
    error: {
      code: "RESOURCE_NOT_FOUND", //
      message: "La ressource demandée n'existe pas",
      details: "Ressource Not Found" 
    }
}
  const errorSpecs = 
  {
    status: 500,
    headers: {
      'Access-Control-Allow-Origin': '*', // Ou votre domaine spécifique
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Content-Type': 'application/json'
    }
  }

export  {responseSpecs, errorPayloadSpecs, errorSpecs}; 
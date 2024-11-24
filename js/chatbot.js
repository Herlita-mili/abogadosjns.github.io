// Función para agregar mensajes al chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Hace scroll hacia abajo al agregar nuevo mensaje
}

// Función para manejar la entrada del usuario
function handleInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Función para enviar el mensaje
function sendMessage() {
    const input = userInput.value;
    if (input.trim() !== "") {
        addMessage('user', input); // Muestra el mensaje del usuario en el chat
        userInput.value = ''; // Limpia el input
        setTimeout(() => {
            generateBotResponse(input); // Genera respuesta del bot con un delay
        }, 500);
    }
}

// Función para simular que el usuario elige opciones como si fuera parte del chat
function simulateUserOptions(options) {
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('message', 'option-container'); // Agregar estilo de contenedor de opciones

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn'); // Clase CSS para dar formato a los botones
        button.addEventListener('click', () => {
            addMessage('user', option); // Muestra la opción seleccionada por el usuario como si fuera su mensaje
            optionContainer.remove(); // Remueve las opciones después de hacer clic
            generateBotResponse(option.toLowerCase()); // Genera la respuesta basada en la selección
        });
        optionContainer.appendChild(button); // Agrega cada botón al contenedor
    });

    chatbox.appendChild(optionContainer); // Agrega el contenedor de opciones al chat
    chatbox.scrollTop = chatbox.scrollHeight; // Hace scroll hacia abajo al agregar nuevo mensaje
}

// Función para mostrar las opciones principales como botones
function showOptionButtons() {
    const optionButtons = document.getElementById('option-buttons');
    optionButtons.innerHTML = ''; // Limpia cualquier contenido previo

    const options = ['Derecho Laboral', 'Penal', 'Derecho de Familia', 'Civil', 'Administrativo', 'Registro de Marca', 'Derecho de Consumidores', 'Seguros'];
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            generateBotResponse(option.toLowerCase());
        });
        optionButtons.appendChild(button);
    });
}

// Función principal para generar la respuesta del bot basada en la entrada del usuario
function generateBotResponse(input) {
    let response = '';

    const lowerInput = input.toLowerCase();

    // Opciones principales
    if (lowerInput.includes('derecho laboral')) {
        response = 'Entiendo que tienes una consulta sobre Derecho Laboral. ¿Te interesa saber sobre despidos, contratos laborales, acoso laboral o derechos de los trabajadores?';
        setTimeout(() => {
            simulateUserOptions(['Despidos', 'Contratos laborales', 'Acoso laboral', 'Derechos de los trabajadores']);
        }, 1000);
    } else if (lowerInput.includes('penal')) {
        response = 'En Derecho Penal, ¿estás interesado en delitos, procedimientos legales, o defensa criminal?';
        setTimeout(() => {
            simulateUserOptions(['Delitos', 'Procedimientos legales', 'Defensa criminal']);
        }, 1000);
    } else if (lowerInput.includes('derecho de familia')) {
        response = 'En Derecho de Familia, puedes obtener información sobre divorcios, custodia de hijos, o herencias. ¿Qué te interesa más?';
        setTimeout(() => {
            simulateUserOptions(['Divorcios', 'Custodia de hijos', 'Herencias']);
        }, 1000);
    } else if (lowerInput.includes('civil')) {
        response = 'En Derecho Civil, ¿te interesa saber sobre contratos, propiedades, o responsabilidad civil?';
        setTimeout(() => {
            simulateUserOptions(['Contratos', 'Propiedades', 'Responsabilidad civil']);
        }, 1000);
    } else if (lowerInput.includes('administrativo')) {
        response = 'En Derecho Administrativo, ¿necesitas ayuda con licencias, regulaciones gubernamentales, o procedimientos administrativos?';
        setTimeout(() => {
            simulateUserOptions(['Licencias', 'Regulaciones gubernamentales', 'Procedimientos administrativos']);
        }, 1000);
    } else if (lowerInput.includes('registro de marca')) {
        response = 'Para Registro de Marca, puedo ofrecerte información sobre el proceso de registro, oposiciones, o infracciones. ¿Qué te gustaría saber?';
        setTimeout(() => {
            simulateUserOptions(['Proceso de registro', 'Oposiciones', 'Infracciones']);
        }, 1000);
    } else if (lowerInput.includes('derecho de consumidores')) {
        response = 'En Derecho de Consumidores, puedo ayudarte con problemas relacionados con productos defectuosos, garantías, o fraudes. ¿Qué necesitas saber?';
        setTimeout(() => {
            simulateUserOptions(['Productos defectuosos', 'Garantías', 'Fraudes']);
        }, 1000);
    } else if (lowerInput.includes('seguros')) {
        response = 'Te puedo ayudar con temas relacionados a seguros, como disputas con aseguradoras o reclamaciones. ¿Qué te gustaría saber?';
        setTimeout(() => {
            simulateUserOptions(['Disputas con aseguradoras', 'Reclamaciones de seguros']);
        }, 1000);
    } else {
        response = 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }

    // Agregar el mensaje de respuesta del bot al chat
    addMessage('bot', response);
}

// Función para manejar las respuestas específicas para Derecho Laboral
function handleLaborResponse(option) {
    switch (option.toLowerCase()) {
        case 'despidos':
            return 'Puedo ayudarte con información sobre despidos. Existen diferentes tipos de despidos, como despido justificado e injustificado. ¿Quieres saber más sobre tus derechos ante un despido injustificado?';
        case 'contratos laborales':
            return 'Para contratos laborales, es importante conocer los tipos de contratos y las obligaciones tanto del empleador como del trabajador. ¿Te gustaría recibir una guía sobre cómo redactar o revisar un contrato laboral?';
        case 'acoso laboral':
            return 'El acoso laboral es un tema delicado. Si estás experimentando acoso en tu lugar de trabajo, es importante documentar los incidentes y buscar ayuda legal. ¿Te gustaría saber los pasos a seguir para denunciar el acoso laboral?';
        case 'derechos de los trabajadores':
            return 'Los trabajadores tienen derechos fundamentales como el salario justo, seguridad en el trabajo y protección contra despidos injustificados. ¿Te gustaría recibir más información sobre algún derecho en particular?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Derecho Penal
function handlePenalResponse(option) {
    switch (option.toLowerCase()) {
        case 'delitos':
            return 'En Derecho Penal, los delitos se dividen en diversas categorías como delitos contra la propiedad, delitos violentos, entre otros. ¿Te gustaría saber más sobre algún tipo específico de delito?';
        case 'procedimientos legales':
            return 'Los procedimientos legales en Derecho Penal incluyen la investigación, el juicio y la sentencia. ¿Te gustaría conocer más sobre alguno de estos pasos?';
        case 'defensa criminal':
            return 'La defensa criminal es esencial para proteger tus derechos durante un proceso penal. ¿Quieres información sobre estrategias de defensa o asistencia legal?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Derecho de Familia
function handleFamilyResponse(option) {
    switch (option.toLowerCase()) {
        case 'divorcios':
            return 'En casos de divorcio, es importante considerar aspectos como la división de bienes, la custodia de los hijos y la pensión alimentaria. ¿Qué te gustaría saber más sobre divorcios?';
        case 'custodia de hijos':
            return 'La custodia de hijos puede ser compartida o exclusiva. Existen criterios legales que los jueces toman en cuenta para decidir. ¿Deseas información sobre algún aspecto específico de la custodia?';
        case 'herencias':
            return 'Las herencias incluyen la distribución de bienes de una persona fallecida. Existen leyes que regulan cómo se debe repartir la herencia. ¿Te gustaría saber más sobre este proceso?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Derecho Civil
function handleCivilResponse(option) {
    switch (option.toLowerCase()) {
        case 'contratos':
            return 'Los contratos civiles regulan acuerdos entre partes sobre diversos temas como compraventa, alquiler, entre otros. ¿Quieres saber cómo redactar o revisar un contrato civil?';
        case 'propiedades':
            return 'El Derecho Civil regula la compra, venta y propiedad de bienes inmuebles. ¿Te gustaría información sobre cómo comprar o vender propiedades?';
        case 'responsabilidad civil':
            return 'La responsabilidad civil se refiere a las obligaciones legales que una persona tiene para reparar daños causados a otras. ¿Deseas saber cómo presentar una reclamación por responsabilidad civil?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Derecho Administrativo
function handleAdministrativeResponse(option) {
    switch (option.toLowerCase()) {
        case 'licencias':
            return 'En Derecho Administrativo, las licencias incluyen permisos necesarios para realizar diversas actividades. ¿Necesitas ayuda con la obtención o renovación de una licencia?';
        case 'regulaciones gubernamentales':
            return 'Las regulaciones gubernamentales abarcan normas y leyes emitidas por entidades públicas. ¿Qué tipo de regulación te interesa?';
        case 'procedimientos administrativos':
            return 'Los procedimientos administrativos son procesos legales que siguen las entidades gubernamentales. ¿Quieres información sobre algún procedimiento específico?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Registro de Marca
function handleTrademarkResponse(option) {
    switch (option.toLowerCase()) {
        case 'proceso de registro':
            return 'El proceso de registro de una marca incluye la solicitud, el examen y la aprobación. ¿Te gustaría conocer los pasos detallados para registrar una marca?';
        case 'oposiciones':
            return 'Durante el registro de marca, pueden surgir oposiciones de otras partes que ya tienen marcas similares. ¿Deseas información sobre cómo manejar oposiciones?';
        case 'infracciones':
            return 'Las infracciones de marca ocurren cuando alguien usa una marca registrada sin permiso. ¿Te interesa saber cómo proceder en caso de infracción?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Derecho de Consumidores
function handleConsumerResponse(option) {
    switch (option.toLowerCase()) {
        case 'productos defectuosos':
            return 'Si tienes problemas con productos defectuosos, puedes tener derecho a un reembolso o reemplazo. ¿Necesitas ayuda para hacer una reclamación?';
        case 'garantías':
            return 'Las garantías cubren reparaciones o reemplazos en caso de defectos. ¿Quieres saber más sobre cómo reclamar una garantía?';
        case 'fraudes':
            return 'En caso de fraude, puedes tomar medidas legales para recuperar tus pérdidas. ¿Deseas información sobre cómo proceder en un caso de fraude?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Función para manejar las respuestas específicas para Seguros
function handleInsuranceResponse(option) {
    switch (option.toLowerCase()) {
        case 'disputas con aseguradoras':
            return 'Las disputas con aseguradoras pueden involucrar denegación de reclamaciones o pagos insuficientes. ¿Te gustaría saber cómo resolver una disputa con tu aseguradora?';
        case 'reclamaciones de seguros':
            return 'Para presentar una reclamación de seguro, es necesario seguir un proceso específico. ¿Necesitas ayuda con el proceso de reclamación?';
        default:
            return 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }
}

// Manejador de respuesta del bot basado en la entrada del usuario
function generateBotResponse(input) {
    let response = '';

    const lowerInput = input.toLowerCase();

    // Opciones principales
    if (lowerInput.includes('derecho laboral')) {
        response = 'Entiendo que tienes una consulta sobre Derecho Laboral. ¿Te interesa saber sobre despidos, contratos laborales, acoso laboral o derechos de los trabajadores?';
        setTimeout(() => {
            simulateUserOptions(['Despidos', 'Contratos laborales', 'Acoso laboral', 'Derechos de los trabajadores']);
        }, 1000);
    } else if (lowerInput.includes('penal')) {
        response = 'En Derecho Penal, ¿estás interesado en delitos, procedimientos legales, o defensa criminal?';
        setTimeout(() => {
            simulateUserOptions(['Delitos', 'Procedimientos legales', 'Defensa criminal']);
        }, 1000);
    } else if (lowerInput.includes('derecho de familia')) {
        response = 'En Derecho de Familia, puedes obtener información sobre divorcios, custodia de hijos, o herencias. ¿Qué te interesa más?';
        setTimeout(() => {
            simulateUserOptions(['Divorcios', 'Custodia de hijos', 'Herencias']);
        }, 1000);
    } else if (lowerInput.includes('civil')) {
        response = 'En Derecho Civil, ¿te interesa saber sobre contratos, propiedades, o responsabilidad civil?';
        setTimeout(() => {
            simulateUserOptions(['Contratos', 'Propiedades', 'Responsabilidad civil']);
        }, 1000);
    } else if (lowerInput.includes('administrativo')) {
        response = 'En Derecho Administrativo, ¿necesitas ayuda con licencias, regulaciones gubernamentales, o procedimientos administrativos?';
        setTimeout(() => {
            simulateUserOptions(['Licencias', 'Regulaciones gubernamentales', 'Procedimientos administrativos']);
        }, 1000);
    } else if (lowerInput.includes('registro de marca')) {
        response = 'Para Registro de Marca, puedo ofrecerte información sobre el proceso de registro, oposiciones, o infracciones. ¿Qué te gustaría saber?';
        setTimeout(() => {
            simulateUserOptions(['Proceso de registro', 'Oposiciones', 'Infracciones']);
        }, 1000);
    } else if (lowerInput.includes('derecho de consumidores')) {
        response = 'En Derecho de Consumidores, puedo ayudarte con problemas relacionados con productos defectuosos, garantías, o fraudes. ¿Qué necesitas saber?';
        setTimeout(() => {
            simulateUserOptions(['Productos defectuosos', 'Garantías', 'Fraudes']);
        }, 1000);
    } else if (lowerInput.includes('seguros')) {
        response = 'Te puedo ayudar con temas relacionados a seguros, como disputas con aseguradoras o reclamaciones. ¿Qué te gustaría saber?';
        setTimeout(() => {
            simulateUserOptions(['Disputas con aseguradoras', 'Reclamaciones de seguros']);
        }, 1000);
    } else {
        response = 'Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una de las opciones disponibles?';
    }

    // Agregar el mensaje de respuesta del bot al chat
    addMessage('bot', response);
}

//-------------------------------///
// Mostrar y ocultar el bot
document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('button-body');
    const chatContainer = document.querySelector('.chat-container');
    const widgetPosition = document.querySelector('.widget-position-right');

    // const iframe = document.querySelector('#chat-if');
    // console.log(iframe);

    chatButton.addEventListener('click', () => {
        if (chatContainer.classList.contains('hidden')) {
            chatContainer.classList.remove('hidden');
            widgetPosition.classList.add('hidden');
            showOptionButtons(); // Muestra los botones al abrir el chat
            // iframe.style.height = '600px';
        } else {
            chatContainer.classList.add('hidden');
            widgetPosition.classList.remove('hidden');
            // iframe.style.height = '100px';
        }
    });
});

// Minimizar
document.getElementById('toggleChat').addEventListener('click', function() {
    var chatContainer = document.querySelector('.chat-container');
    var buttonContainer = document.querySelector('.widget-position-right');
    
    // Alterna la clase 'hidden' en el chatContainer
    chatContainer.classList.toggle('hidden');
    
    // Asegúrate de que el botón flotante siempre esté visible
    buttonContainer.classList.remove('hidden');

    // Muestra los botones si el chat está visible
    if (!chatContainer.classList.contains('hidden')) {
        showOptionButtons();
    }
});

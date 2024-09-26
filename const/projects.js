import nav from "./nav.js";
import footer from "./footer.js";

function showProjects(projects, title) {
    let html = "";
    html += `<body class="h-full">`;  
    html += '<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">';
    html += nav;
    html += `<script src="https://cdn.tailwindcss.com"></script>`;
    html += `
        <main class="container p-4 mx-auto min-h-fit">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-950 md:text-5xl lg:text-6xl">${title}</h1>
    `;
    html += `
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    if (projects.length === 0) {
        html += `
            <li class="p-4 bg-gray-100 text-center rounded-lg shadow-md">
                <p class="text-gray-500 text-lg font-medium">No hay proyectos</p>
            </li>
        `;
    } else {
        projects.forEach(project => {
            html += `
                <li class="p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">${project.name}</h2> 
                    <p class="text-gray-600 mb-2">${project.description}</p>
                    <p class="text-gray-600 mb-2">Tecnologías: <span class="font-medium text-blue-600">${project.technologies}</span></p>
                    <a href="${project.repositoryLink}" class="text-blue-500 hover:text-blue-700 underline mb-2 block">Repositorio</a>
                    <img src="${project.image}" alt="Imagen de ${project.name}" class="w-full h-48 object-cover rounded-lg mb-2">
                    <p class="text-sm text-gray-500 italic">${project.type}</p>
                </li>
            `;
        });
    }

    html += '</ul>';  
    html += '</main>';
    html += footer;
    html += '</div>';  
    html += `</body>`;

    return html;
}

export default showProjects;

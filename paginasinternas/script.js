   <script>
    function showSection(sectionId) {
      // Ocultar todas las secciones
      var sections = document.getElementsByTagName('section');
      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
      }

      // Ocultar todos los enlaces activos
      var links = document.querySelectorAll('nav a');
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }

      // Mostrar la sección seleccionada
      var selectedSection = document.getElementById(sectionId);
      selectedSection.classList.add('active');

      // Marcar el enlace correspondiente como activo
      var selectedLink = document.getElementById(sectionId + '-link');
      selectedLink.classList.add('active');
    }
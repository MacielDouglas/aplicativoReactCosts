import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function Project() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <p>Formulário</p>
      <ProjectForm btnText="CRIAR PROJETO" />
    </div>
  );
}

export default Project;

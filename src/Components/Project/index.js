import { projectData } from "../../assets/projectData";

const Project = (props) => {
  return (
    <>
      {projectData.map((project) => (
        <div className="card" key={project.id} style={styles.card}>
          <div className="card-body" style={styles.card}>
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
          </div>
          <img src={project.image} className="card-img-top" alt={project.title} />
        </div>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Project;
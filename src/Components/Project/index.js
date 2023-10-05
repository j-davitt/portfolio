import { Button, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import { projectData } from "../../assets/projectData";

const Project = (props) => {
  return (
    <>
      <div className="projects">
        {projectData.map((project) => (
          <Card sx={{ maxWidth: 500, backgroundColor: '#A2A685', margin: 2, }}>
            <CardMedia
              component="img"
              height="270"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} style={{ color: '#53582C' }}>Link</Button>
              <Button size="small" href={project.github} style={{ color: '#53582C' }}>GitHub</Button>
            </CardActions>

          </Card>
        ))}
      </div>
    </>
  )
}


export default Project;
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {  Dialog } from '@mui/material';
interface ProjectCardProps {
  project: {
    Title: string;
    Technologies: string;
    Frontend: string;
    Backend: string;
    Databases: string;
    Infrastructure: string;
    Availability: string;
    // Add other properties as needed for your project data
    // Example: id: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { Title, Technologies, Frontend, Backend, Databases, Infrastructure, Availability } = project;



  const handleOpenDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 ,height:250}} onClick={handleOpenDialog} >
      <CardHeader
        title={`Title: ${Title}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Technologies:</strong> {Technologies}
          <br />
          <strong>Frontend:</strong> {Frontend}
          <br />
          <strong>Backend:</strong> {Backend}
          <br />
          <strong>Databases:</strong> {Databases}
          <br />         
        </Typography>
      </CardContent>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
  <DialogTitle>More information</DialogTitle>
  <DialogContent>
    <DialogContentText>
      <strong>Title:</strong> {Title}
      <br />
      <strong>Technologies:</strong> {Technologies}
      <br />
      <strong>Frontend:</strong> {Frontend}
      <br />
      <strong>Backend:</strong> {Backend}
      <br />
      <strong>Databases:</strong> {Databases}
      <br />
      <strong>Infrastructure:</strong> {Infrastructure}
      <br />
      <strong>Availability:</strong> {Availability}
      <br />

    </DialogContentText>

  </DialogContent>
</Dialog>
    </Card>
  );
};

export default ProjectCard;

import Grid from '@mui/material/Grid';
import ProjectCard from './Card';
import Container from '@mui/material/Container';

// Define the type for your card data
interface CardData {
  _id:string;
  // Add other properties as needed for your project data
  Title: string;
  Technologies: string;
  Frontend: string;
  Backend: string;
  Databases: string;
  Infrastructure: string;
  Availability: string;
}

interface CardContainerProps {
  cardsData: CardData[];
}

function CardContainer({ cardsData }: CardContainerProps) {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cardsData.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={3}>
              {/* Show 1 card on mobile, 2 on tablet, and 4 on desktop */}
              <ProjectCard project={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default CardContainer;

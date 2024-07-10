'use client';

import { Container, Grid, SimpleGrid } from '@mantine/core';
import { ReactNode } from 'react';

export const LeadGrid: React.FC<{ navbar: ReactNode, form: ReactNode }> = ({ navbar, form }) => (
       <Container my="md">
           <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
               {navbar}
               <Grid gutter="md">
                   <Grid.Col span={6}>
                       {form}
                   </Grid.Col>
               </Grid>
           </SimpleGrid>
       </Container>
   );

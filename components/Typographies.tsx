import { Typography /*, Divider*/ } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Typographies = () => (
  <Typography>
    <Title>Lorem ipsum</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent vulputate dolor vel fringilla faucibus.
      Donec mollis sit amet nisl nec lacinia. Phasellus non volutpat ex, eu tempus massa.
      Ut vitae turpis ut quam accumsan cursus eu vel neque. Maecenas in pretium nulla.
      Curabitur feugiat diam libero, id iaculis nisi fermentum ac.
      Duis scelerisque tristique lacus, quis mollis nulla feugiat nec.
      Cras in arcu et tortor ultrices tristique ut non turpis.
      Etiam lobortis nulla eget purus rutrum cursus. Curabitur a nulla magna.
      Curabitur malesuada mauris sit amet velit aliquet commodo.
      Aliquam auctor libero in est sollicitudin, ac consectetur diam tempor.
      Aenean rutrum consectetur urna, ut dapibus ex tincidunt et.
    </Paragraph>
    <Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to{' '}
      <Text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development
      </Text>
      .
    </Paragraph>
    <Title level={2}>Guidelines and Resources</Title>
    <Paragraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
      prototypes beautifully and efficiently.
    </Paragraph>
  </Typography>
)
export default Typographies
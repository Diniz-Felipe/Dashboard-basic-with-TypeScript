import { Text } from "../../components/Text";
import { Sidebar } from "../../components/Sidebar";
import { Box } from "../../components/Box";
import { Wrapper } from "../../components/Wrapper";
import { Charts } from "../../components/Charts";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <Wrapper>
      {/* header */}
      <Header.Root>
        <Text.P>header</Text.P>
        <Header.Content>
          <Button.Icon name="IoSearch" size={23} color="#444" />
          <Button.Icon name="IoNotifications" size={23} color="#444" />

          <Form.Root>
            <Form.Input name="search" type="text" placeholder="buscar" />
          </Form.Root>

        </Header.Content>
      </Header.Root>
      {/* sidebar */}
      <Sidebar />
      {/* box */}
      <Box>
        <Text.P>Box1</Text.P>
      </Box>
      {/* charts */}
      <Charts />
      {/* card's */}
      <Card.One>
        <Text.P>CardOne</Text.P>
      </Card.One>

      <Card.Two>
        <Text.P>Card test2</Text.P>
      </Card.Two>

      <Card.Three>
        <Text.P>Card test3</Text.P>
      </Card.Three>

      <Card.Four>
        <Text.P>Card test4</Text.P>
      </Card.Four>
    </Wrapper>
  )
};
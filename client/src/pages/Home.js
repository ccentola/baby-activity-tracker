import React from "react";
import { Header, Statistic } from "semantic-ui-react";
import EditModal from "../components/EditModal";

// TODO: create dashboard page component

const Home = () => {
  return (
    <>
      <Header size="tiny">Hello, Dad!</Header>
      <div>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Diaper Changes</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>31,200</Statistic.Value>
            <Statistic.Label>Formula (oz)</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Hours Spent Sleeping</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </>
  );
};

export default Home;

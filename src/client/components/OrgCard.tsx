import * as React from "react";
import { ICharity } from "../utils/types";
import { useHistory, useParams } from "react-router-dom";

const OrgCard: React.FC<OrgCardProps> = (props) => {

  const history = useHistory()
  console.log(props)
  return (
      <div className="col-md-6 mx-1">
        <div
          onClick={() => history.push(`/details/${props.charity.id}`)}
          className="card my-2 shadow">
          <div className="card-body text-center">
            <h4 className="card-title">{props.charity.charity_name}</h4>
            <p className="card-text">{props.charity.category_name}</p>
          </div>
        </div>
      </div>
  );
};

interface OrgCardProps {
  charity: ICharity
}

export default OrgCard

import { useInput } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";

import getStatuses from "../../../actions/getStatuses";
import EnumResponseType from "../enum/EnumResponseType";

const useForm = () => {
  const {
    bindings: responseBodybindings,
    reset: responseBodyreset,
    value: responseBodyvalue,
  } = useInput();
  const [statuses, setStatuses] = useState([]);
  const [responseType, setResponseType] = useState(EnumResponseType.JSON);

  const responseBodyStyles = useMemo(() => {
    const ERROR = "error";
    const SUCCESS = "success";
    const response = {
      color: SUCCESS,
      status: SUCCESS,
      helperColor: SUCCESS,
      helperText: "El body es válido",
    };
    if (responseType === EnumResponseType.JSON) {
      try {
        console.log(responseBodyvalue);
        JSON.parse(responseBodyvalue);
        console.log("TODO OK");
        return response;
      } catch (err) {
        response.color = ERROR;
        response.status = ERROR;
        response.helperColor = ERROR;
        response.helperText = "El JSON es inválido";
        return response;
      }
    }

    return response;
  }, [responseBodyvalue, responseType]);

  useEffect(() => {
    getStatuses().then((res) => setStatuses(res));
  }, []);

  return {
    statuses,
    responseBodybindings,
    responseBodyreset,
    responseBodyvalue,
    setResponseType,
    responseBodyStyles,
  };
};

export default useForm;

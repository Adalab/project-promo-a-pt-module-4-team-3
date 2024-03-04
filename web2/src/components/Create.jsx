import IndexSection from "./IndexSection.jsx";
import CardPreview from "./CardPreview.jsx";
import Form from "./Form.jsx";
import PropTypes from "prop-types";

function Create({
  data,
  updateAvatar,
  updateData,
  setDataResponse,
  onSubmit,
  dataResponse,
}) {
  return (
    <>
      <IndexSection />
      <CardPreview data={data} />
      <form className="addForm">
        <Form
          updateData={updateData}
          updateAvatar={updateAvatar}
          setDataResponse={setDataResponse}
          responseFetch={dataResponse}
          onSubmit={onSubmit}
          data={data}
        />
      </form>
    </>
  );
}

Create.propTypes = {
  data: PropTypes.object,
  updateAvatar: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  setDataResponse: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  dataResponse: PropTypes.string.isRequired,
};

export default Create;

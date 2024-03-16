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
  handleReset,
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
          handleReset={handleReset}
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
  handleReset: PropTypes.func.isRequired,
};

export default Create;

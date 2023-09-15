import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "./Components/Navbar";
import FullPageModal from "./Components/FullPageModal";
import "./App.css";
const { Content } = Layout;

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [userDetailsSetOne, setUserDetailsSetOne] = useState({
    email: "",
    fileReturnRadio: "",
    fileReturnDocuments: [],
    sCorpRadio: "",
    sCorpDocuments: [],
    ownerShipRadio: "",
    shareHoldDocuments: [],
    transactionCheckbox: [],
    transactionDocuments: [],
    FinalCheckbox: [],
    FinalDocuments: [],
    paid: false,
    couponCode: "",
  });

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <Navbar showModal={showModal} />
      <Content style={{ padding: "50px" }}>
        <h1>Form Content</h1>
        {data.map((ele, ind) => {
          return (
            <div className="Top">
              <strong>Form {ind + 1}:</strong>
              {`{`}
              <div>
                <i className="italic">email:</i> {`"${ele.email}"`},
              </div>
              <div>
                <i className="italic">fileReturnRadio:</i>{" "}
                {`"${ele.fileReturnRadio}"`},
              </div>
              <div>
                <i className="italic">fileReturnDocuments</i>:[{" "}
                {ele.fileReturnDocuments.map((ele2) => {
                  return <div>{`"${ele2.name}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">sCorpRadio:</i> {`"${ele.sCorpRadio}"`},
              </div>
              <div>
                <i className="italic">sCorpDocuments:</i>[{" "}
                {ele.sCorpDocuments.map((ele2) => {
                  return <div>{`"${ele2.name}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">ownerShipRadio:</i>{" "}
                {`"${ele.ownerShipRadio}"`},
              </div>
              <div>
                <i className="italic">shareHoldDocuments:</i>[{" "}
                {ele.shareHoldDocuments.map((ele2) => {
                  return <div>{`"${ele2.name}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">transactionCheckbox:</i>[{" "}
                {ele.transactionCheckbox.map((ele2) => {
                  return <div>{`"${ele2}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">transactionDocuments:</i>[{" "}
                {ele.transactionDocuments.map((ele2) => {
                  return <div>{`"${ele2.name}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">FinalCheckbox:</i>[{" "}
                {ele.FinalCheckbox.map((ele2) => {
                  return <div>{`"${ele2}"`},</div>;
                })}
                ],
              </div>

              <div>
                <i className="italic">FinalDocuments:</i>[{" "}
                {ele.FinalDocuments.map((ele2) => {
                  return <div>{`"${ele2.name}"`},</div>;
                })}
                ],
              </div>
              <div>
                <i className="italic">paid:</i> {`"${ele.paid}"`},
              </div>
              <div>
                <i className="italic">couponCode:</i> {`"${ele.couponCode}"`},
              </div>
              <div>{`}`}</div>
            </div>
          );
        })}
      </Content>
      <FullPageModal
        data={data}
        setData={setData}
        userDetailsSetOne={userDetailsSetOne}
        setUserDetailsSetOne={setUserDetailsSetOne}
        visible={modalVisible}
        onClose={closeModal}
      />
    </Layout>
  );
}

export default App;

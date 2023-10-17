import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Button, Card, Row, Col } from "antd";

const CheckboxForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Card
      title="Select an option"
      style={{
        width: 1300,
        margin: "auto",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <Row gutter={18}>
        <Col xs={24} xl={12} md={12}>
          <Card
            title={
              <Checkbox
                value="ads"
                checked={selectedOption === "ads"}
                onChange={handleCheckboxChange}
              />
            }
          >
            <Row align="middle" justify="center">
              <Col
                span={12}
                justify="center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://www.researchgate.net/profile/Dilek-Fidan/publication/245023269/figure/fig3/AS:667129812635648@1536067550084/Sample-text-in-English-together-with-the-basic-statistics.ppm"
                  alt="Image"
                  style={{
                    width: "400px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Col>
              <Col
                span={16}
                justify="center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center" 
                }}
              >
                <p style={{ color: "gray" }}>Create</p>
                <p style={{ fontWeight: "700" }}>Text Ads</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} xl={12} md={12}>
          <Card
            title={
              <Checkbox
                value="media"
                checked={selectedOption === "media"}
                onChange={handleCheckboxChange}
              />
            }
          >
            <Row align="middle" justify="center">
              <Col
                span={12}
                justify="center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://media.istockphoto.com/id/1295056492/photo/megaphone-social-media-concept.jpg?s=1024x1024&w=is&k=20&c=ePrT9lfV58D_X6s_DQKOmMMEsAEw0cpaAP_FOvmV8D4="
                  alt="Image"
                  style={{
                    width: "400px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Col>
              <Col
                span={16}
                justify="center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center" 
                }}
              >
                <p style={{ color: "gray" }}>Create</p>
                <p style={{ fontWeight: "700" }}>Media Ads</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {selectedOption && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "12px"
          }}
        >
          <Link to={`/${selectedOption}`}>
            <Button type="primary">Next</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default CheckboxForm;

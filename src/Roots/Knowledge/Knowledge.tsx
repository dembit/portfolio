import React from "react";
import Button from "../../components/Button/Button";
import KnowledgeItem from "../../components/KnowledgeItem/KnowledgeItem";
import { listButtonKnowledge, listKnowledge } from "../../variable";
import styled from "./Knowledge.module.css";
type Props = {};

const Knowledge = (props: Props) => {
  return (
    <div className={[styled.knowledge, "container"].join(" ")}>
      <h1>Мои знания</h1>
      <div className={styled.knowledge_button}>
        {listButtonKnowledge.map(({ text, id }) => (
          <Button key={id} text={text} />
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        {listKnowledge.map(({ id, name, percent }) => (
          <KnowledgeItem
            style={{ marginBottom: 10 }}
            key={id}
            text={name}
            percent={percent}
          />
        ))}
      </div>
      <div className={styled.knowledge_desc}>
        При написании кода применяю принципы
        <span> SOLID, DRY, KISS, YAGNI.</span>
      </div>
    </div>
  );
};

export default Knowledge;
import quickInfoData from "@/data/quickInfo.data";
import { useTranslation } from "react-i18next";

import Container from "./Container";

const QuickInfo = () => {
  const { t } = useTranslation();

  return (
    <Container id="quickinfo" className="h-full flex flex-col gap-10 py-8">
      {!!quickInfoData.length &&
        quickInfoData.map(({ id, title, content }) => {
          return (
            <div data-testid={`qi-${id}`} key={id} className="flex flex-col gap-2">
              <span className="text-text-base text-xl">{t(title)}</span>
              <div className="text-text-subdued">{t(content)}</div>
            </div>
          );
        })}
    </Container>
  );
};

export default QuickInfo;

export interface QuickInfo {
  id: number;
  title: string;
  content: string;
}

const quickInfoData: QuickInfo[] = [
  {
    id: 1,
    title: "quickInfo.title.aboutMe",
    content: "quickInfo.content.aboutMe",
  },
  {
    id: 2,
    title: "quickInfo.title.portfolio",
    content: "quickInfo.content.portfolio",
  },
];

export default quickInfoData;

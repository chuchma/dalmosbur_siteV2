import SectionContainer from "../layout/sectionContainer";
import Header2 from "../UI/header2";
import ColorWrap from "../layout/colorWrap";
import OrderForm from "../UI/form/orderForm";


export default function FeedbackSection() {
  return <ColorWrap>
  <SectionContainer>
    <Header2 title="Обратная связь" header="Остались вопросы? Напишите нам!"/>
   <OrderForm/>
  </SectionContainer>
</ColorWrap>
}

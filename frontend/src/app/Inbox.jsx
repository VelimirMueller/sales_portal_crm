import AppGridLayout from "../components/container/AppGridLayout";
import AppGridCard from "../components/card/AppGridCard";

function Inbox () {
  return (
    <AppGridLayout>
      <AppGridCard isLarge={true}>
        1
      </AppGridCard>

      <AppGridCard>
        2
      </AppGridCard>

      <AppGridCard isLarge={true}>
        3
      </AppGridCard>
      
      <AppGridCard>
        4
      </AppGridCard>
    </AppGridLayout>
  );
}

export default Inbox;
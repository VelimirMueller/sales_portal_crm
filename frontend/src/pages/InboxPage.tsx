import AppGridLayout from "../components/container/AppGridLayout";
import AppGridCard from "../components/card/AppGridCard";

function InboxPage () {
  return (
    <AppGridLayout>
      <AppGridCard>
        1
      </AppGridCard>

      <AppGridCard isLarge={true}>
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

export default InboxPage;
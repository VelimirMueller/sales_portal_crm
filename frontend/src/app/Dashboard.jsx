import AppGridLayout from "../components/container/AppGridLayout";
import AppGridCard from "../components/card/AppGridCard";

function Dashboard() {
  return (
    <AppGridLayout>
      <AppGridCard isLarge={true}>
        1
      </AppGridCard>

      <AppGridCard>
        2
      </AppGridCard>

      <AppGridCard>
        3
      </AppGridCard>

      <AppGridCard isLarge={true}>
        4
      </AppGridCard>
    </AppGridLayout>
  );
}

export default Dashboard
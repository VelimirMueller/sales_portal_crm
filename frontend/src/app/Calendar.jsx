import AppGridLayout from "../components/container/AppGridLayout";
import AppGridCard from "../components/card/AppGridCard";

function Calendar() {
    return (
      <AppGridLayout>
        <AppGridCard>
          1
        </AppGridCard>

        <AppGridCard isLarge={true}>
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
  
  export default Calendar
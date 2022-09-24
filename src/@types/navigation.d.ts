interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      userID: undefined;
      confirmation: ConfirmationParams;
      plantSelector: undefined;
      registerPlant: PlantParams;
    }
  }
}
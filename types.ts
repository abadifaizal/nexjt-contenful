export type HeroQuery = {
  heroCollection: {
    items: {
      title : string;
      subtitle : string;
      preTitle : string;
      callToActionsCollection: {
        items : {
          link : string;
          label : string;
        }[]
      }
    }[]
  }
}

export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number;
      url: string;
      title: string;
      height: number;
    }[]
  }
}
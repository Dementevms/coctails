import type { FC } from "react";

import { Cocktails } from "@features/Cocktails";
import { MainLayout } from "@widgets/MainLayout"

export const CocktailsPage: FC = () => {
   return <MainLayout><Cocktails/></MainLayout> 
}
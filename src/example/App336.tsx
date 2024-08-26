
import { test, expect } from "@playwright/experimental-ct-react";
import App336 from "./App336.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App336 />);
  await expect(component).toContainText("Learn React");
});


import { test, expect } from "@playwright/experimental-ct-react";
import App2773 from "../example/App2773.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2773 />);
  await expect(component).toContainText("Learn React");
});
